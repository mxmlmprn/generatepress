import UtilityLabel from '../../../../components/utility-label';
import {
	BaseControl
} from '@wordpress/components';
import RangeControl from '../../../../components/range-control';
import UnitPicker from '../../../../components/unit-picker';
import hasNumericValue from '../../../../utils/has-numeric-value';

const DeviceInputGroup = (props) => {
	const {
		label,
		unitValue,
		units,
		onChangeUnit,
		step,
		rangeMin,
		rangeMax,
		inputMin = null,
		inputMax = null,
		desktopValue,
		desktopInitial,
		desktopOnChange,
		tabletValue,
		tabletInitial,
		tabletOnChange,
		mobileInitial,
		mobileValue,
		mobileOnChange,
	} = props;

	return ( <
		BaseControl >
		<
		UtilityLabel label = {
			label
		}
		value = {
			unitValue
		}
		devices = {
			['desktop', 'tablet', 'mobile']
		}
		/>

		<
		div className = "generate-component-input-with-unit" >
		<
		div className = "generate-component-device-field"
		data - device = "desktop" >
		<
		RangeControl className = {
			'generate-range-control-range'
		}
		step = {
			step
		}
		rangeMin = {
			rangeMin
		}
		rangeMax = {
			rangeMax
		}
		inputMin = {
			inputMin
		}
		inputMax = {
			inputMax
		}
		value = {
			hasNumericValue(desktopValue) ? parseFloat(desktopValue) : desktopInitial
		}
		initialPosition = {
			desktopInitial
		}
		onChange = {
			desktopOnChange
		}
		withInputField = {
			false
		}
		/> <
		/div>

		<
		div className = "generate-component-device-field"
		data - device = "tablet" >
		<
		RangeControl data - generate - control - device = "tablet"
		className = {
			'generate-range-control-range'
		}
		step = {
			step
		}
		rangeMin = {
			rangeMin
		}
		rangeMax = {
			rangeMax
		}
		inputMin = {
			inputMin
		}
		inputMax = {
			inputMax
		}
		value = {
			hasNumericValue(tabletValue) ? parseFloat(tabletValue) : tabletInitial
		}
		initialPosition = {
			tabletInitial
		}
		onChange = {
			tabletOnChange
		}
		withInputField = {
			false
		}
		/> <
		/div>

		<
		div className = "generate-component-device-field"
		data - device = "mobile" >
		<
		RangeControl data - generate - control - device = "mobile"
		className = {
			'generate-range-control-range'
		}
		step = {
			step
		}
		rangeMin = {
			rangeMin
		}
		rangeMax = {
			rangeMax
		}
		inputMin = {
			inputMin
		}
		inputMax = {
			inputMax
		}
		value = {
			hasNumericValue(mobileValue) ? parseFloat(mobileValue) : mobileInitial
		}
		initialPosition = {
			mobileInitial
		}
		onChange = {
			mobileOnChange
		}
		withInputField = {
			false
		}
		/> <
		/div>

		<
		UnitPicker value = {
			unitValue
		}
		units = {
			units
		}
		onClick = {
			onChangeUnit
		}
		/> <
		/div> <
		/BaseControl>
	);
};

export default DeviceInputGroup;