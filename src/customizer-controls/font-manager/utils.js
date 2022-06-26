import {
	applyFilters
} from '@wordpress/hooks';
import typographyElements from './placeholders';
import hasNumericValue from '../../utils/has-numeric-value';
import {
	__
} from '@wordpress/i18n';

const getElements = () => applyFilters('generate_typography_elements', typographyElements);

const getElementLabel = (settings) => {
	const elements = getElements();

	let label = 'undefined' !== typeof elements[settings.selector] ? elements[settings.selector].label : settings.selector;

	if ('custom' === settings.selector && !!settings.customSelector) {
		label = settings.customSelector;
	}

	return label;
};

// TODO: This needs to be simplified.
const getPlaceholder = (settings, property) => {
	const elements = getElements();

	let placeholder = 'undefined' !== typeof elements[settings.selector].placeholders[property] ? elements[settings.selector].placeholders[property].value : '';

	if (property.includes('Tablet')) {
		const desktopSettingName = property.replace('Tablet', '');

		placeholder = 'undefined' !== typeof elements[settings.selector].placeholders[desktopSettingName] ? elements[settings.selector].placeholders[desktopSettingName].value : placeholder;
		placeholder = 'undefined' !== typeof settings[desktopSettingName] && hasNumericValue(settings[desktopSettingName]) ? settings[desktopSettingName] : placeholder;
	}

	if (property.includes('Mobile')) {
		const tabletSettingName = property.replace('Mobile', 'Tablet');
		const desktopSettingName = property.replace('Mobile', '');

		placeholder = 'undefined' !== typeof elements[settings.selector].placeholders[desktopSettingName] ? elements[settings.selector].placeholders[desktopSettingName].value : placeholder;
		placeholder = 'undefined' !== typeof elements[settings.selector].placeholders[tabletSettingName] ? elements[settings.selector].placeholders[tabletSettingName].value : placeholder;
		placeholder = 'undefined' !== typeof settings[desktopSettingName] && hasNumericValue(settings[desktopSettingName]) ? settings[desktopSettingName] : placeholder;
		placeholder = 'undefined' !== typeof settings[tabletSettingName] && hasNumericValue(settings[tabletSettingName]) ? settings[tabletSettingName] : placeholder;
	}

	// Ditch the placeholder if our unit isn't the default.
	if (placeholder && !property.includes('Tablet') && !property.includes('Mobile')) {
		if (elements[settings.selector].placeholders[property].unit !== settings[property + 'Unit']) {
			placeholder = '';
		}
	}

	return placeholder;
};

const getRangeProps = (settings, property, type, fallback) => {
	const elements = getElements();

	let rangeProps = 'undefined' !== typeof elements[settings.selector].placeholders[property] ? elements[settings.selector].placeholders[property][type] : fallback;

	if ('%' === settings[property + 'Unit']) {
		if (property.startsWith('fontSize') && 'max' === type) {
			rangeProps = 250;
		}

		if (property.startsWith('lineHeight')) {
			if ('step' === type) {
				rangeProps = 1;
			}

			if ('max' === type) {
				rangeProps = 250;
			}
		}
	}

	return rangeProps;
};

const selectorHasMarginBottom = (selector) => {
	return ['body', 'all-headings', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'widget-titles'].includes(selector);
};

const getElementGroups = () => {
	const elementGroups = applyFilters(
		'generate_typography_element_groups', {
			base: __('Base', 'generatepress'),
			header: __('Header', 'generatepress'),
			primaryNavigation: __('Primary Navigation', 'generatepress'),
			content: __('Content', 'generatepress'),
			widgets: __('Widgets', 'generatepress'),
			footer: __('Footer', 'generatepress'),
		}
	);

	// Always at the bottom.
	elementGroups.other = __('Other', 'generatepress');

	return elementGroups;
};

const getElementOptions = () => {
	const allTypography = wp.customize.control('generate_settings[typography]').setting.get();
	const hasValue = (value) => (allTypography.some((e) => e.selector === value) && 'custom' !== value);
	const elements = getElements();
	const elementGroups = getElementGroups();
	const elementOptions = [];

	Object.keys(elementGroups).forEach((group) => {
		elementOptions.push({
			label: elementGroups[group],
			options: Object.keys(elements).filter((key) => {
				if (group === elements[key].group) {
					return true;
				}

				return false;
			}).map((item) => ({
				value: item,
				label: elements[item].label,
				group: elements[item].group,
				module: elements[item].module || 'core',
				isDisabled: hasValue(item),
			})),
		});
	});

	return elementOptions;
};

const getAvailableFonts = () => wp.customize.control('generate_settings[font_manager]').setting.get();

const getFontFamilies = () => {
	const availableFonts = getAvailableFonts();

	const fontFamilies = [{
			value: '',
			label: __('-- Select --', 'generatepress')
		},
		{
			value: 'inherit',
			label: __('Inherit', 'generatepress')
		},
		{
			value: 'System Default',
			label: __('System Default', 'generatepress')
		},
	];

	if (availableFonts.length > 0) {
		availableFonts.forEach((value, i) => {
			fontFamilies.push({
				value: availableFonts[i].fontFamily,
				label: availableFonts[i].fontFamily,
			});
		});
	}

	return fontFamilies;
};

// Helper function to be able to map objects to an array of components
const objectMapToArray = (object, callback) => {
	return Object.values(Object.fromEntries(
		Object.entries(object).map(([key, value]) => [key, callback(value, key)])
	));
};

// Group by an array of object by given key
const groupBy = function(arr, key, common) {
	return arr.reduce((grouped, obj, index) => {
		const group = obj[key] || common;

		// Original index
		obj.index = index;

		grouped[group] = grouped[group] || [];
		grouped[group].push(obj);

		return grouped;
	}, {});
};

export {
	getElements,
	getElementLabel,
	getPlaceholder,
	getRangeProps,
	selectorHasMarginBottom,
	getElementOptions,
	getFontFamilies,
	getAvailableFonts,
	getElementGroups,
	objectMapToArray,
	groupBy,
};