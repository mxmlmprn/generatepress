(window.webpackJsonp_generatepress = window.webpackJsonp_generatepress || []).push([
		[3], {
			21: function(e, a, t) {},
			29: function(e, a, t) {},
			30: function(e, a, t) {},
			31: function(e, a, t) {},
			35: function(e, a, t) {},
			44: function(e, a, t) {},
			47: function(e, a, t) {},
			48: function(e, a, t) {},
			49: function(e, a, t) {},
			50: function(e, a, t) {}
		}
	]),
	function(e) {
		function a(a) {
			for (var r, o, s = a[0], l = a[1], c = a[2], g = 0, p = []; g < s.length; g++) o = s[g], Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), i[o] = 0;
			for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
			for (u && u(a); p.length;) p.shift()();
			return n.push.apply(n, c || []), t()
		}

		function t() {
			for (var e, a = 0; a < n.length; a++) {
				for (var t = n[a], r = !0, s = 1; s < t.length; s++) {
					var l = t[s];
					0 !== i[l] && (r = !1)
				}
				r && (n.splice(a--, 1), e = o(o.s = t[0]))
			}
			return e
		}
		var r = {},
			i = {
				1: 0
			},
			n = [];

		function o(a) {
			if (r[a]) return r[a].exports;
			var t = r[a] = {
				i: a,
				l: !1,
				exports: {}
			};
			return e[a].call(t.exports, t, t.exports, o), t.l = !0, t.exports
		}
		o.m = e, o.c = r, o.d = function(e, a, t) {
			o.o(e, a) || Object.defineProperty(e, a, {
				enumerable: !0,
				get: t
			})
		}, o.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, o.t = function(e, a) {
			if (1 & a && (e = o(e)), 8 & a) return e;
			if (4 & a && "object" == typeof e && e && e.__esModule) return e;
			var t = Object.create(null);
			if (o.r(t), Object.defineProperty(t, "default", {
					enumerable: !0,
					value: e
				}), 2 & a && "string" != typeof e)
				for (var r in e) o.d(t, r, function(a) {
					return e[a]
				}.bind(null, r));
			return t
		}, o.n = function(e) {
			var a = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return o.d(a, "a", a), a
		}, o.o = function(e, a) {
			return Object.prototype.hasOwnProperty.call(e, a)
		}, o.p = "";
		var s = window.webpackJsonp_generatepress = window.webpackJsonp_generatepress || [],
			l = s.push.bind(s);
		s.push = a, s = s.slice();
		for (var c = 0; c < s.length; c++) a(s[c]);
		var u = l;
		n.push([55, 3]), t()
	}([function(e, a) {
		e.exports = window.wp.element
	}, function(e, a) {
		e.exports = window.wp.i18n
	}, function(e, a) {
		e.exports = window.wp.components
	}, function(e, a) {
		e.exports = window.React
	}, function(e, a, t) {
		var r = t(14),
			i = t(15),
			n = t(12),
			o = t(16);
		e.exports = function(e, a) {
			return r(e) || i(e, a) || n(e, a) || o()
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		var r = t(32),
			i = t(33),
			n = t(12),
			o = t(34);
		e.exports = function(e) {
			return r(e) || i(e) || n(e) || o()
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		function t() {
			return e.exports = t = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var t = arguments[a];
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				}
				return e
			}, e.exports.default = e.exports, e.exports.__esModule = !0, t.apply(this, arguments)
		}
		e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e, a, t) {
			return a in e ? Object.defineProperty(e, a, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[a] = t, e
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		function t(a) {
			return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = t = function(e) {
				return typeof e
			}, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = t = function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}, e.exports.default = e.exports, e.exports.__esModule = !0), t(a)
		}
		e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = window.wp.hooks
	}, function(e) {
		e.exports = JSON.parse('{"ABeeZee":{"variants":["regular","italic"],"category":"sans-serif"},"Abel":{"variants":["regular"],"category":"sans-serif"},"Abhaya Libre":{"variants":["regular","500","600","700","800"],"category":"serif"},"Abril Fatface":{"variants":["regular"],"category":"display"},"Aclonica":{"variants":["regular"],"category":"sans-serif"},"Acme":{"variants":["regular"],"category":"sans-serif"},"Actor":{"variants":["regular"],"category":"sans-serif"},"Adamina":{"variants":["regular"],"category":"serif"},"Advent Pro":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"Aguafina Script":{"variants":["regular"],"category":"handwriting"},"Akaya Kanadaka":{"variants":["regular"],"category":"display"},"Akaya Telivigala":{"variants":["regular"],"category":"display"},"Akronim":{"variants":["regular"],"category":"display"},"Aladin":{"variants":["regular"],"category":"handwriting"},"Alata":{"variants":["regular"],"category":"sans-serif"},"Alatsi":{"variants":["regular"],"category":"sans-serif"},"Aldrich":{"variants":["regular"],"category":"sans-serif"},"Alef":{"variants":["regular","700"],"category":"sans-serif"},"Alegreya":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Alegreya SC":{"variants":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"category":"serif"},"Alegreya Sans":{"variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Alegreya Sans SC":{"variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Aleo":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"serif"},"Alex Brush":{"variants":["regular"],"category":"handwriting"},"Alfa Slab One":{"variants":["regular"],"category":"display"},"Alice":{"variants":["regular"],"category":"serif"},"Alike":{"variants":["regular"],"category":"serif"},"Alike Angular":{"variants":["regular"],"category":"serif"},"Allan":{"variants":["regular","700"],"category":"display"},"Allerta":{"variants":["regular"],"category":"sans-serif"},"Allerta Stencil":{"variants":["regular"],"category":"sans-serif"},"Allison":{"variants":["regular"],"category":"handwriting"},"Allura":{"variants":["regular"],"category":"handwriting"},"Almarai":{"variants":["300","regular","700","800"],"category":"sans-serif"},"Almendra":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Almendra Display":{"variants":["regular"],"category":"display"},"Almendra SC":{"variants":["regular"],"category":"serif"},"Alumni Sans":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Amarante":{"variants":["regular"],"category":"display"},"Amaranth":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Amatic SC":{"variants":["regular","700"],"category":"handwriting"},"Amethysta":{"variants":["regular"],"category":"serif"},"Amiko":{"variants":["regular","600","700"],"category":"sans-serif"},"Amiri":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Amita":{"variants":["regular","700"],"category":"handwriting"},"Anaheim":{"variants":["regular"],"category":"sans-serif"},"Andada Pro":{"variants":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"category":"serif"},"Andika":{"variants":["regular"],"category":"sans-serif"},"Andika New Basic":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Angkor":{"variants":["regular"],"category":"display"},"Annie Use Your Telescope":{"variants":["regular"],"category":"handwriting"},"Anonymous Pro":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Antic":{"variants":["regular"],"category":"sans-serif"},"Antic Didone":{"variants":["regular"],"category":"serif"},"Antic Slab":{"variants":["regular"],"category":"serif"},"Anton":{"variants":["regular"],"category":"sans-serif"},"Antonio":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"Arapey":{"variants":["regular","italic"],"category":"serif"},"Arbutus":{"variants":["regular"],"category":"display"},"Arbutus Slab":{"variants":["regular"],"category":"serif"},"Architects Daughter":{"variants":["regular"],"category":"handwriting"},"Archivo":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Archivo Black":{"variants":["regular"],"category":"sans-serif"},"Archivo Narrow":{"variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Are You Serious":{"variants":["regular"],"category":"handwriting"},"Aref Ruqaa":{"variants":["regular","700"],"category":"serif"},"Arima Madurai":{"variants":["100","200","300","regular","500","700","800","900"],"category":"display"},"Arimo":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Arizonia":{"variants":["regular"],"category":"handwriting"},"Armata":{"variants":["regular"],"category":"sans-serif"},"Arsenal":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Artifika":{"variants":["regular"],"category":"serif"},"Arvo":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Arya":{"variants":["regular","700"],"category":"sans-serif"},"Asap":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Asap Condensed":{"variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Asar":{"variants":["regular"],"category":"serif"},"Asset":{"variants":["regular"],"category":"display"},"Assistant":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Astloch":{"variants":["regular","700"],"category":"display"},"Asul":{"variants":["regular","700"],"category":"sans-serif"},"Athiti":{"variants":["200","300","regular","500","600","700"],"category":"sans-serif"},"Atkinson Hyperlegible":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Atma":{"variants":["300","regular","500","600","700"],"category":"display"},"Atomic Age":{"variants":["regular"],"category":"display"},"Aubrey":{"variants":["regular"],"category":"display"},"Audiowide":{"variants":["regular"],"category":"display"},"Autour One":{"variants":["regular"],"category":"display"},"Average":{"variants":["regular"],"category":"serif"},"Average Sans":{"variants":["regular"],"category":"sans-serif"},"Averia Gruesa Libre":{"variants":["regular"],"category":"display"},"Averia Libre":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"display"},"Averia Sans Libre":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"display"},"Averia Serif Libre":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"display"},"Azeret Mono":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"monospace"},"B612":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"B612 Mono":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Bad Script":{"variants":["regular"],"category":"handwriting"},"Bahiana":{"variants":["regular"],"category":"display"},"Bahianita":{"variants":["regular"],"category":"display"},"Bai Jamjuree":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Ballet":{"variants":["regular"],"category":"handwriting"},"Baloo 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Bhai 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Bhaina 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Chettan 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Da 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Paaji 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Tamma 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Tammudu 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Baloo Thambi 2":{"variants":["regular","500","600","700","800"],"category":"display"},"Balsamiq Sans":{"variants":["regular","italic","700","700italic"],"category":"display"},"Balthazar":{"variants":["regular"],"category":"serif"},"Bangers":{"variants":["regular"],"category":"display"},"Barlow":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Barlow Condensed":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Barlow Semi Condensed":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Barriecito":{"variants":["regular"],"category":"display"},"Barrio":{"variants":["regular"],"category":"display"},"Basic":{"variants":["regular"],"category":"sans-serif"},"Baskervville":{"variants":["regular","italic"],"category":"serif"},"Battambang":{"variants":["100","300","regular","700","900"],"category":"display"},"Baumans":{"variants":["regular"],"category":"display"},"Bayon":{"variants":["regular"],"category":"sans-serif"},"Be Vietnam":{"variants":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"sans-serif"},"Be Vietnam Pro":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Bebas Neue":{"variants":["regular"],"category":"display"},"Belgrano":{"variants":["regular"],"category":"serif"},"Bellefair":{"variants":["regular"],"category":"serif"},"Belleza":{"variants":["regular"],"category":"sans-serif"},"Bellota":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"display"},"Bellota Text":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"display"},"BenchNine":{"variants":["300","regular","700"],"category":"sans-serif"},"Benne":{"variants":["regular"],"category":"serif"},"Bentham":{"variants":["regular"],"category":"serif"},"Berkshire Swash":{"variants":["regular"],"category":"handwriting"},"Besley":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Beth Ellen":{"variants":["regular"],"category":"handwriting"},"Bevan":{"variants":["regular"],"category":"display"},"Big Shoulders Display":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Big Shoulders Inline Display":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Big Shoulders Inline Text":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Big Shoulders Stencil Display":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Big Shoulders Stencil Text":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Big Shoulders Text":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Bigelow Rules":{"variants":["regular"],"category":"display"},"Bigshot One":{"variants":["regular"],"category":"display"},"Bilbo":{"variants":["regular"],"category":"handwriting"},"Bilbo Swash Caps":{"variants":["regular"],"category":"handwriting"},"BioRhyme":{"variants":["200","300","regular","700","800"],"category":"serif"},"BioRhyme Expanded":{"variants":["200","300","regular","700","800"],"category":"serif"},"Birthstone":{"variants":["regular"],"category":"handwriting"},"Birthstone Bounce":{"variants":["regular","500"],"category":"handwriting"},"Biryani":{"variants":["200","300","regular","600","700","800","900"],"category":"sans-serif"},"Bitter":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Black And White Picture":{"variants":["regular"],"category":"sans-serif"},"Black Han Sans":{"variants":["regular"],"category":"sans-serif"},"Black Ops One":{"variants":["regular"],"category":"display"},"Blinker":{"variants":["100","200","300","regular","600","700","800","900"],"category":"sans-serif"},"Bodoni Moda":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Bokor":{"variants":["regular"],"category":"display"},"Bona Nova":{"variants":["regular","italic","700"],"category":"serif"},"Bonbon":{"variants":["regular"],"category":"handwriting"},"Bonheur Royale":{"variants":["regular"],"category":"handwriting"},"Boogaloo":{"variants":["regular"],"category":"display"},"Bowlby One":{"variants":["regular"],"category":"display"},"Bowlby One SC":{"variants":["regular"],"category":"display"},"Brawler":{"variants":["regular"],"category":"serif"},"Bree Serif":{"variants":["regular"],"category":"serif"},"Brygada 1918":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"serif"},"Bubblegum Sans":{"variants":["regular"],"category":"display"},"Bubbler One":{"variants":["regular"],"category":"sans-serif"},"Buda":{"variants":["300"],"category":"display"},"Buenard":{"variants":["regular","700"],"category":"serif"},"Bungee":{"variants":["regular"],"category":"display"},"Bungee Hairline":{"variants":["regular"],"category":"display"},"Bungee Inline":{"variants":["regular"],"category":"display"},"Bungee Outline":{"variants":["regular"],"category":"display"},"Bungee Shade":{"variants":["regular"],"category":"display"},"Butcherman":{"variants":["regular"],"category":"display"},"Butterfly Kids":{"variants":["regular"],"category":"handwriting"},"Cabin":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Cabin Condensed":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Cabin Sketch":{"variants":["regular","700"],"category":"display"},"Caesar Dressing":{"variants":["regular"],"category":"display"},"Cagliostro":{"variants":["regular"],"category":"sans-serif"},"Cairo":{"variants":["200","300","regular","600","700","900"],"category":"sans-serif"},"Caladea":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Calistoga":{"variants":["regular"],"category":"display"},"Calligraffitti":{"variants":["regular"],"category":"handwriting"},"Cambay":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Cambo":{"variants":["regular"],"category":"serif"},"Candal":{"variants":["regular"],"category":"sans-serif"},"Cantarell":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Cantata One":{"variants":["regular"],"category":"serif"},"Cantora One":{"variants":["regular"],"category":"sans-serif"},"Capriola":{"variants":["regular"],"category":"sans-serif"},"Caramel":{"variants":["regular"],"category":"handwriting"},"Carattere":{"variants":["regular"],"category":"handwriting"},"Cardo":{"variants":["regular","italic","700"],"category":"serif"},"Carme":{"variants":["regular"],"category":"sans-serif"},"Carrois Gothic":{"variants":["regular"],"category":"sans-serif"},"Carrois Gothic SC":{"variants":["regular"],"category":"sans-serif"},"Carter One":{"variants":["regular"],"category":"display"},"Castoro":{"variants":["regular","italic"],"category":"serif"},"Catamaran":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Caudex":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Caveat":{"variants":["regular","500","600","700"],"category":"handwriting"},"Caveat Brush":{"variants":["regular"],"category":"handwriting"},"Cedarville Cursive":{"variants":["regular"],"category":"handwriting"},"Ceviche One":{"variants":["regular"],"category":"display"},"Chakra Petch":{"variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Changa":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Changa One":{"variants":["regular","italic"],"category":"display"},"Chango":{"variants":["regular"],"category":"display"},"Charm":{"variants":["regular","700"],"category":"handwriting"},"Charmonman":{"variants":["regular","700"],"category":"handwriting"},"Chathura":{"variants":["100","300","regular","700","800"],"category":"sans-serif"},"Chau Philomene One":{"variants":["regular","italic"],"category":"sans-serif"},"Chela One":{"variants":["regular"],"category":"display"},"Chelsea Market":{"variants":["regular"],"category":"display"},"Chenla":{"variants":["regular"],"category":"display"},"Cherish":{"variants":["regular"],"category":"handwriting"},"Cherry Cream Soda":{"variants":["regular"],"category":"display"},"Cherry Swash":{"variants":["regular","700"],"category":"display"},"Chewy":{"variants":["regular"],"category":"display"},"Chicle":{"variants":["regular"],"category":"display"},"Chilanka":{"variants":["regular"],"category":"handwriting"},"Chivo":{"variants":["300","300italic","regular","italic","700","700italic","900","900italic"],"category":"sans-serif"},"Chonburi":{"variants":["regular"],"category":"display"},"Cinzel":{"variants":["regular","500","600","700","800","900"],"category":"serif"},"Cinzel Decorative":{"variants":["regular","700","900"],"category":"display"},"Clicker Script":{"variants":["regular"],"category":"handwriting"},"Coda":{"variants":["regular","800"],"category":"display"},"Coda Caption":{"variants":["800"],"category":"sans-serif"},"Codystar":{"variants":["300","regular"],"category":"display"},"Coiny":{"variants":["regular"],"category":"display"},"Combo":{"variants":["regular"],"category":"display"},"Comfortaa":{"variants":["300","regular","500","600","700"],"category":"display"},"Comic Neue":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"handwriting"},"Coming Soon":{"variants":["regular"],"category":"handwriting"},"Commissioner":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Concert One":{"variants":["regular"],"category":"display"},"Condiment":{"variants":["regular"],"category":"handwriting"},"Content":{"variants":["regular","700"],"category":"display"},"Contrail One":{"variants":["regular"],"category":"display"},"Convergence":{"variants":["regular"],"category":"sans-serif"},"Cookie":{"variants":["regular"],"category":"handwriting"},"Copse":{"variants":["regular"],"category":"serif"},"Corben":{"variants":["regular","700"],"category":"display"},"Cormorant":{"variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"Cormorant Garamond":{"variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"Cormorant Infant":{"variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"Cormorant SC":{"variants":["300","regular","500","600","700"],"category":"serif"},"Cormorant Unicase":{"variants":["300","regular","500","600","700"],"category":"serif"},"Cormorant Upright":{"variants":["300","regular","500","600","700"],"category":"serif"},"Courgette":{"variants":["regular"],"category":"handwriting"},"Courier Prime":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Cousine":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Coustard":{"variants":["regular","900"],"category":"serif"},"Covered By Your Grace":{"variants":["regular"],"category":"handwriting"},"Crafty Girls":{"variants":["regular"],"category":"handwriting"},"Creepster":{"variants":["regular"],"category":"display"},"Crete Round":{"variants":["regular","italic"],"category":"serif"},"Crimson Pro":{"variants":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Crimson Text":{"variants":["regular","italic","600","600italic","700","700italic"],"category":"serif"},"Croissant One":{"variants":["regular"],"category":"display"},"Crushed":{"variants":["regular"],"category":"display"},"Cuprum":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Cute Font":{"variants":["regular"],"category":"display"},"Cutive":{"variants":["regular"],"category":"serif"},"Cutive Mono":{"variants":["regular"],"category":"monospace"},"DM Mono":{"variants":["300","300italic","regular","italic","500","500italic"],"category":"monospace"},"DM Sans":{"variants":["regular","italic","500","500italic","700","700italic"],"category":"sans-serif"},"DM Serif Display":{"variants":["regular","italic"],"category":"serif"},"DM Serif Text":{"variants":["regular","italic"],"category":"serif"},"Damion":{"variants":["regular"],"category":"handwriting"},"Dancing Script":{"variants":["regular","500","600","700"],"category":"handwriting"},"Dangrek":{"variants":["regular"],"category":"display"},"Darker Grotesque":{"variants":["300","regular","500","600","700","800","900"],"category":"sans-serif"},"David Libre":{"variants":["regular","500","700"],"category":"serif"},"Dawning of a New Day":{"variants":["regular"],"category":"handwriting"},"Days One":{"variants":["regular"],"category":"sans-serif"},"Dekko":{"variants":["regular"],"category":"handwriting"},"Dela Gothic One":{"variants":["regular"],"category":"display"},"Delius":{"variants":["regular"],"category":"handwriting"},"Delius Swash Caps":{"variants":["regular"],"category":"handwriting"},"Delius Unicase":{"variants":["regular","700"],"category":"handwriting"},"Della Respira":{"variants":["regular"],"category":"serif"},"Denk One":{"variants":["regular"],"category":"sans-serif"},"Devonshire":{"variants":["regular"],"category":"handwriting"},"Dhurjati":{"variants":["regular"],"category":"sans-serif"},"Didact Gothic":{"variants":["regular"],"category":"sans-serif"},"Diplomata":{"variants":["regular"],"category":"display"},"Diplomata SC":{"variants":["regular"],"category":"display"},"Do Hyeon":{"variants":["regular"],"category":"sans-serif"},"Dokdo":{"variants":["regular"],"category":"handwriting"},"Domine":{"variants":["regular","500","600","700"],"category":"serif"},"Donegal One":{"variants":["regular"],"category":"serif"},"Doppio One":{"variants":["regular"],"category":"sans-serif"},"Dorsa":{"variants":["regular"],"category":"sans-serif"},"Dosis":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"DotGothic16":{"variants":["regular"],"category":"sans-serif"},"Dr Sugiyama":{"variants":["regular"],"category":"handwriting"},"Duru Sans":{"variants":["regular"],"category":"sans-serif"},"Dynalight":{"variants":["regular"],"category":"display"},"EB Garamond":{"variants":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"category":"serif"},"Eagle Lake":{"variants":["regular"],"category":"handwriting"},"East Sea Dokdo":{"variants":["regular"],"category":"handwriting"},"Eater":{"variants":["regular"],"category":"display"},"Economica":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Eczar":{"variants":["regular","500","600","700","800"],"category":"serif"},"El Messiri":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Electrolize":{"variants":["regular"],"category":"sans-serif"},"Elsie":{"variants":["regular","900"],"category":"display"},"Elsie Swash Caps":{"variants":["regular","900"],"category":"display"},"Emblema One":{"variants":["regular"],"category":"display"},"Emilys Candy":{"variants":["regular"],"category":"display"},"Encode Sans":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Encode Sans Condensed":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Encode Sans Expanded":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Encode Sans SC":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Encode Sans Semi Condensed":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Encode Sans Semi Expanded":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Engagement":{"variants":["regular"],"category":"handwriting"},"Englebert":{"variants":["regular"],"category":"sans-serif"},"Enriqueta":{"variants":["regular","500","600","700"],"category":"serif"},"Ephesis":{"variants":["regular"],"category":"handwriting"},"Epilogue":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Erica One":{"variants":["regular"],"category":"display"},"Esteban":{"variants":["regular"],"category":"serif"},"Euphoria Script":{"variants":["regular"],"category":"handwriting"},"Ewert":{"variants":["regular"],"category":"display"},"Exo":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Exo 2":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Expletus Sans":{"variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"category":"display"},"Explora":{"variants":["regular"],"category":"handwriting"},"Fahkwang":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Fanwood Text":{"variants":["regular","italic"],"category":"serif"},"Farro":{"variants":["300","regular","500","700"],"category":"sans-serif"},"Farsan":{"variants":["regular"],"category":"display"},"Fascinate":{"variants":["regular"],"category":"display"},"Fascinate Inline":{"variants":["regular"],"category":"display"},"Faster One":{"variants":["regular"],"category":"display"},"Fasthand":{"variants":["regular"],"category":"display"},"Fauna One":{"variants":["regular"],"category":"serif"},"Faustina":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"serif"},"Federant":{"variants":["regular"],"category":"display"},"Federo":{"variants":["regular"],"category":"sans-serif"},"Felipa":{"variants":["regular"],"category":"handwriting"},"Fenix":{"variants":["regular"],"category":"serif"},"Festive":{"variants":["regular"],"category":"handwriting"},"Finger Paint":{"variants":["regular"],"category":"display"},"Fira Code":{"variants":["300","regular","500","600","700"],"category":"monospace"},"Fira Mono":{"variants":["regular","500","700"],"category":"monospace"},"Fira Sans":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Fira Sans Condensed":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Fira Sans Extra Condensed":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Fjalla One":{"variants":["regular"],"category":"sans-serif"},"Fjord One":{"variants":["regular"],"category":"serif"},"Flamenco":{"variants":["300","regular"],"category":"display"},"Flavors":{"variants":["regular"],"category":"display"},"Fleur De Leah":{"variants":["regular"],"category":"handwriting"},"Fondamento":{"variants":["regular","italic"],"category":"handwriting"},"Fontdiner Swanky":{"variants":["regular"],"category":"display"},"Forum":{"variants":["regular"],"category":"display"},"Francois One":{"variants":["regular"],"category":"sans-serif"},"Frank Ruhl Libre":{"variants":["300","regular","500","700","900"],"category":"serif"},"Fraunces":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Freckle Face":{"variants":["regular"],"category":"display"},"Fredericka the Great":{"variants":["regular"],"category":"display"},"Fredoka One":{"variants":["regular"],"category":"display"},"Freehand":{"variants":["regular"],"category":"display"},"Fresca":{"variants":["regular"],"category":"sans-serif"},"Frijole":{"variants":["regular"],"category":"display"},"Fruktur":{"variants":["regular"],"category":"display"},"Fugaz One":{"variants":["regular"],"category":"display"},"Fuggles":{"variants":["regular"],"category":"handwriting"},"GFS Didot":{"variants":["regular"],"category":"serif"},"GFS Neohellenic":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Gabriela":{"variants":["regular"],"category":"serif"},"Gaegu":{"variants":["300","regular","700"],"category":"handwriting"},"Gafata":{"variants":["regular"],"category":"sans-serif"},"Galada":{"variants":["regular"],"category":"display"},"Galdeano":{"variants":["regular"],"category":"sans-serif"},"Galindo":{"variants":["regular"],"category":"display"},"Gamja Flower":{"variants":["regular"],"category":"handwriting"},"Gayathri":{"variants":["100","regular","700"],"category":"sans-serif"},"Gelasio":{"variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"Gemunu Libre":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Gentium Basic":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Gentium Book Basic":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Geo":{"variants":["regular","italic"],"category":"sans-serif"},"Georama":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Geostar":{"variants":["regular"],"category":"display"},"Geostar Fill":{"variants":["regular"],"category":"display"},"Germania One":{"variants":["regular"],"category":"display"},"Gideon Roman":{"variants":["regular"],"category":"display"},"Gidugu":{"variants":["regular"],"category":"sans-serif"},"Gilda Display":{"variants":["regular"],"category":"serif"},"Girassol":{"variants":["regular"],"category":"display"},"Give You Glory":{"variants":["regular"],"category":"handwriting"},"Glass Antiqua":{"variants":["regular"],"category":"display"},"Glegoo":{"variants":["regular","700"],"category":"serif"},"Gloria Hallelujah":{"variants":["regular"],"category":"handwriting"},"Glory":{"variants":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"category":"sans-serif"},"Gluten":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Goblin One":{"variants":["regular"],"category":"display"},"Gochi Hand":{"variants":["regular"],"category":"handwriting"},"Goldman":{"variants":["regular","700"],"category":"display"},"Gorditas":{"variants":["regular","700"],"category":"display"},"Gothic A1":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Gotu":{"variants":["regular"],"category":"sans-serif"},"Goudy Bookletter 1911":{"variants":["regular"],"category":"serif"},"Gowun Batang":{"variants":["regular","700"],"category":"serif"},"Gowun Dodum":{"variants":["regular"],"category":"sans-serif"},"Graduate":{"variants":["regular"],"category":"display"},"Grand Hotel":{"variants":["regular"],"category":"handwriting"},"Grandstander":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"display"},"Gravitas One":{"variants":["regular"],"category":"display"},"Great Vibes":{"variants":["regular"],"category":"handwriting"},"Grechen Fuemen":{"variants":["regular"],"category":"handwriting"},"Grenze":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"serif"},"Grenze Gotisch":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Grey Qo":{"variants":["regular"],"category":"handwriting"},"Griffy":{"variants":["regular"],"category":"display"},"Gruppo":{"variants":["regular"],"category":"display"},"Gudea":{"variants":["regular","italic","700"],"category":"sans-serif"},"Gugi":{"variants":["regular"],"category":"display"},"Gupter":{"variants":["regular","500","700"],"category":"serif"},"Gurajada":{"variants":["regular"],"category":"serif"},"Habibi":{"variants":["regular"],"category":"serif"},"Hachi Maru Pop":{"variants":["regular"],"category":"handwriting"},"Hahmlet":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Halant":{"variants":["300","regular","500","600","700"],"category":"serif"},"Hammersmith One":{"variants":["regular"],"category":"sans-serif"},"Hanalei":{"variants":["regular"],"category":"display"},"Hanalei Fill":{"variants":["regular"],"category":"display"},"Handlee":{"variants":["regular"],"category":"handwriting"},"Hanuman":{"variants":["100","300","regular","700","900"],"category":"serif"},"Happy Monkey":{"variants":["regular"],"category":"display"},"Harmattan":{"variants":["regular","700"],"category":"sans-serif"},"Headland One":{"variants":["regular"],"category":"serif"},"Heebo":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Henny Penny":{"variants":["regular"],"category":"display"},"Hepta Slab":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Herr Von Muellerhoff":{"variants":["regular"],"category":"handwriting"},"Hi Melody":{"variants":["regular"],"category":"handwriting"},"Hina Mincho":{"variants":["regular"],"category":"serif"},"Hind":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Hind Guntur":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Hind Madurai":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Hind Siliguri":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Hind Vadodara":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Holtwood One SC":{"variants":["regular"],"category":"serif"},"Homemade Apple":{"variants":["regular"],"category":"handwriting"},"Homenaje":{"variants":["regular"],"category":"sans-serif"},"IBM Plex Mono":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"monospace"},"IBM Plex Sans":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"IBM Plex Sans Arabic":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Sans Condensed":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"IBM Plex Sans Devanagari":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Sans Hebrew":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Sans KR":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Sans Thai":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Sans Thai Looped":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"IBM Plex Serif":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"IM Fell DW Pica":{"variants":["regular","italic"],"category":"serif"},"IM Fell DW Pica SC":{"variants":["regular"],"category":"serif"},"IM Fell Double Pica":{"variants":["regular","italic"],"category":"serif"},"IM Fell Double Pica SC":{"variants":["regular"],"category":"serif"},"IM Fell English":{"variants":["regular","italic"],"category":"serif"},"IM Fell English SC":{"variants":["regular"],"category":"serif"},"IM Fell French Canon":{"variants":["regular","italic"],"category":"serif"},"IM Fell French Canon SC":{"variants":["regular"],"category":"serif"},"IM Fell Great Primer":{"variants":["regular","italic"],"category":"serif"},"IM Fell Great Primer SC":{"variants":["regular"],"category":"serif"},"Ibarra Real Nova":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"serif"},"Iceberg":{"variants":["regular"],"category":"display"},"Iceland":{"variants":["regular"],"category":"display"},"Imbue":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Imprima":{"variants":["regular"],"category":"sans-serif"},"Inconsolata":{"variants":["200","300","regular","500","600","700","800","900"],"category":"monospace"},"Inder":{"variants":["regular"],"category":"sans-serif"},"Indie Flower":{"variants":["regular"],"category":"handwriting"},"Inika":{"variants":["regular","700"],"category":"serif"},"Inknut Antiqua":{"variants":["300","regular","500","600","700","800","900"],"category":"serif"},"Inria Sans":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"sans-serif"},"Inria Serif":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"serif"},"Inter":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Irish Grover":{"variants":["regular"],"category":"display"},"Istok Web":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Italiana":{"variants":["regular"],"category":"serif"},"Italianno":{"variants":["regular"],"category":"handwriting"},"Itim":{"variants":["regular"],"category":"handwriting"},"Jacques Francois":{"variants":["regular"],"category":"serif"},"Jacques Francois Shadow":{"variants":["regular"],"category":"display"},"Jaldi":{"variants":["regular","700"],"category":"sans-serif"},"JetBrains Mono":{"variants":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"category":"monospace"},"Jim Nightshade":{"variants":["regular"],"category":"handwriting"},"Jockey One":{"variants":["regular"],"category":"sans-serif"},"Jolly Lodger":{"variants":["regular"],"category":"display"},"Jomhuria":{"variants":["regular"],"category":"display"},"Jomolhari":{"variants":["regular"],"category":"serif"},"Josefin Sans":{"variants":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Josefin Slab":{"variants":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"category":"serif"},"Jost":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Joti One":{"variants":["regular"],"category":"display"},"Jua":{"variants":["regular"],"category":"sans-serif"},"Judson":{"variants":["regular","italic","700"],"category":"serif"},"Julee":{"variants":["regular"],"category":"handwriting"},"Julius Sans One":{"variants":["regular"],"category":"sans-serif"},"Junge":{"variants":["regular"],"category":"serif"},"Jura":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Just Another Hand":{"variants":["regular"],"category":"handwriting"},"Just Me Again Down Here":{"variants":["regular"],"category":"handwriting"},"K2D":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"sans-serif"},"Kadwa":{"variants":["regular","700"],"category":"serif"},"Kaisei Decol":{"variants":["regular","500","700"],"category":"serif"},"Kaisei HarunoUmi":{"variants":["regular","500","700"],"category":"serif"},"Kaisei Opti":{"variants":["regular","500","700"],"category":"serif"},"Kaisei Tokumin":{"variants":["regular","500","700","800"],"category":"serif"},"Kalam":{"variants":["300","regular","700"],"category":"handwriting"},"Kameron":{"variants":["regular","700"],"category":"serif"},"Kanit":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Kantumruy":{"variants":["300","regular","700"],"category":"sans-serif"},"Karantina":{"variants":["300","regular","700"],"category":"display"},"Karla":{"variants":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"category":"sans-serif"},"Karma":{"variants":["300","regular","500","600","700"],"category":"serif"},"Katibeh":{"variants":["regular"],"category":"display"},"Kaushan Script":{"variants":["regular"],"category":"handwriting"},"Kavivanar":{"variants":["regular"],"category":"handwriting"},"Kavoon":{"variants":["regular"],"category":"display"},"Kdam Thmor":{"variants":["regular"],"category":"display"},"Keania One":{"variants":["regular"],"category":"display"},"Kelly Slab":{"variants":["regular"],"category":"display"},"Kenia":{"variants":["regular"],"category":"display"},"Khand":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Khmer":{"variants":["regular"],"category":"display"},"Khula":{"variants":["300","regular","600","700","800"],"category":"sans-serif"},"Kirang Haerang":{"variants":["regular"],"category":"display"},"Kite One":{"variants":["regular"],"category":"sans-serif"},"Kiwi Maru":{"variants":["300","regular","500"],"category":"serif"},"Klee One":{"variants":["regular","600"],"category":"handwriting"},"Knewave":{"variants":["regular"],"category":"display"},"KoHo":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Kodchasan":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Koh Santepheap":{"variants":["100","300","regular","700","900"],"category":"display"},"Kosugi":{"variants":["regular"],"category":"sans-serif"},"Kosugi Maru":{"variants":["regular"],"category":"sans-serif"},"Kotta One":{"variants":["regular"],"category":"serif"},"Koulen":{"variants":["regular"],"category":"display"},"Kranky":{"variants":["regular"],"category":"display"},"Kreon":{"variants":["300","regular","500","600","700"],"category":"serif"},"Kristi":{"variants":["regular"],"category":"handwriting"},"Krona One":{"variants":["regular"],"category":"sans-serif"},"Krub":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Kufam":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Kulim Park":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"category":"sans-serif"},"Kumar One":{"variants":["regular"],"category":"display"},"Kumar One Outline":{"variants":["regular"],"category":"display"},"Kumbh Sans":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Kurale":{"variants":["regular"],"category":"serif"},"La Belle Aurore":{"variants":["regular"],"category":"handwriting"},"Lacquer":{"variants":["regular"],"category":"display"},"Laila":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Lakki Reddy":{"variants":["regular"],"category":"handwriting"},"Lalezar":{"variants":["regular"],"category":"display"},"Lancelot":{"variants":["regular"],"category":"display"},"Langar":{"variants":["regular"],"category":"display"},"Lateef":{"variants":["regular"],"category":"handwriting"},"Lato":{"variants":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"category":"sans-serif"},"League Script":{"variants":["regular"],"category":"handwriting"},"Leckerli One":{"variants":["regular"],"category":"handwriting"},"Ledger":{"variants":["regular"],"category":"serif"},"Lekton":{"variants":["regular","italic","700"],"category":"sans-serif"},"Lemon":{"variants":["regular"],"category":"display"},"Lemonada":{"variants":["300","regular","500","600","700"],"category":"display"},"Lexend":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Deca":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Exa":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Giga":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Mega":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Peta":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Tera":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Lexend Zetta":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Libre Barcode 128":{"variants":["regular"],"category":"display"},"Libre Barcode 128 Text":{"variants":["regular"],"category":"display"},"Libre Barcode 39":{"variants":["regular"],"category":"display"},"Libre Barcode 39 Extended":{"variants":["regular"],"category":"display"},"Libre Barcode 39 Extended Text":{"variants":["regular"],"category":"display"},"Libre Barcode 39 Text":{"variants":["regular"],"category":"display"},"Libre Barcode EAN13 Text":{"variants":["regular"],"category":"display"},"Libre Baskerville":{"variants":["regular","italic","700"],"category":"serif"},"Libre Caslon Display":{"variants":["regular"],"category":"serif"},"Libre Caslon Text":{"variants":["regular","italic","700"],"category":"serif"},"Libre Franklin":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Life Savers":{"variants":["regular","700","800"],"category":"display"},"Lilita One":{"variants":["regular"],"category":"display"},"Lily Script One":{"variants":["regular"],"category":"display"},"Limelight":{"variants":["regular"],"category":"display"},"Linden Hill":{"variants":["regular","italic"],"category":"serif"},"Literata":{"variants":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Liu Jian Mao Cao":{"variants":["regular"],"category":"handwriting"},"Livvic":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"category":"sans-serif"},"Lobster":{"variants":["regular"],"category":"display"},"Lobster Two":{"variants":["regular","italic","700","700italic"],"category":"display"},"Londrina Outline":{"variants":["regular"],"category":"display"},"Londrina Shadow":{"variants":["regular"],"category":"display"},"Londrina Sketch":{"variants":["regular"],"category":"display"},"Londrina Solid":{"variants":["100","300","regular","900"],"category":"display"},"Long Cang":{"variants":["regular"],"category":"handwriting"},"Lora":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"serif"},"Love Ya Like A Sister":{"variants":["regular"],"category":"display"},"Loved by the King":{"variants":["regular"],"category":"handwriting"},"Lovers Quarrel":{"variants":["regular"],"category":"handwriting"},"Luckiest Guy":{"variants":["regular"],"category":"display"},"Lusitana":{"variants":["regular","700"],"category":"serif"},"Lustria":{"variants":["regular"],"category":"serif"},"M PLUS 1p":{"variants":["100","300","regular","500","700","800","900"],"category":"sans-serif"},"M PLUS Rounded 1c":{"variants":["100","300","regular","500","700","800","900"],"category":"sans-serif"},"Ma Shan Zheng":{"variants":["regular"],"category":"handwriting"},"Macondo":{"variants":["regular"],"category":"display"},"Macondo Swash Caps":{"variants":["regular"],"category":"display"},"Mada":{"variants":["200","300","regular","500","600","700","900"],"category":"sans-serif"},"Magra":{"variants":["regular","700"],"category":"sans-serif"},"Maiden Orange":{"variants":["regular"],"category":"display"},"Maitree":{"variants":["200","300","regular","500","600","700"],"category":"serif"},"Major Mono Display":{"variants":["regular"],"category":"monospace"},"Mako":{"variants":["regular"],"category":"sans-serif"},"Mali":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"handwriting"},"Mallanna":{"variants":["regular"],"category":"sans-serif"},"Mandali":{"variants":["regular"],"category":"sans-serif"},"Manjari":{"variants":["100","regular","700"],"category":"sans-serif"},"Manrope":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Mansalva":{"variants":["regular"],"category":"handwriting"},"Manuale":{"variants":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"category":"serif"},"Marcellus":{"variants":["regular"],"category":"serif"},"Marcellus SC":{"variants":["regular"],"category":"serif"},"Marck Script":{"variants":["regular"],"category":"handwriting"},"Margarine":{"variants":["regular"],"category":"display"},"Markazi Text":{"variants":["regular","500","600","700"],"category":"serif"},"Marko One":{"variants":["regular"],"category":"serif"},"Marmelad":{"variants":["regular"],"category":"sans-serif"},"Martel":{"variants":["200","300","regular","600","700","800","900"],"category":"serif"},"Martel Sans":{"variants":["200","300","regular","600","700","800","900"],"category":"sans-serif"},"Marvel":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Mate":{"variants":["regular","italic"],"category":"serif"},"Mate SC":{"variants":["regular"],"category":"serif"},"Maven Pro":{"variants":["regular","500","600","700","800","900"],"category":"sans-serif"},"McLaren":{"variants":["regular"],"category":"display"},"Meddon":{"variants":["regular"],"category":"handwriting"},"MedievalSharp":{"variants":["regular"],"category":"display"},"Medula One":{"variants":["regular"],"category":"display"},"Meera Inimai":{"variants":["regular"],"category":"sans-serif"},"Megrim":{"variants":["regular"],"category":"display"},"Meie Script":{"variants":["regular"],"category":"handwriting"},"Merienda":{"variants":["regular","700"],"category":"handwriting"},"Merienda One":{"variants":["regular"],"category":"handwriting"},"Merriweather":{"variants":["300","300italic","regular","italic","700","700italic","900","900italic"],"category":"serif"},"Merriweather Sans":{"variants":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"category":"sans-serif"},"Metal":{"variants":["regular"],"category":"display"},"Metal Mania":{"variants":["regular"],"category":"display"},"Metamorphous":{"variants":["regular"],"category":"display"},"Metrophobic":{"variants":["regular"],"category":"sans-serif"},"Michroma":{"variants":["regular"],"category":"sans-serif"},"Milonga":{"variants":["regular"],"category":"display"},"Miltonian":{"variants":["regular"],"category":"display"},"Miltonian Tattoo":{"variants":["regular"],"category":"display"},"Mina":{"variants":["regular","700"],"category":"sans-serif"},"Miniver":{"variants":["regular"],"category":"display"},"Miriam Libre":{"variants":["regular","700"],"category":"sans-serif"},"Mirza":{"variants":["regular","500","600","700"],"category":"display"},"Miss Fajardose":{"variants":["regular"],"category":"handwriting"},"Mitr":{"variants":["200","300","regular","500","600","700"],"category":"sans-serif"},"Modak":{"variants":["regular"],"category":"display"},"Modern Antiqua":{"variants":["regular"],"category":"display"},"Mogra":{"variants":["regular"],"category":"display"},"Molengo":{"variants":["regular"],"category":"sans-serif"},"Molle":{"variants":["italic"],"category":"handwriting"},"Monda":{"variants":["regular","700"],"category":"sans-serif"},"Monofett":{"variants":["regular"],"category":"display"},"Monoton":{"variants":["regular"],"category":"display"},"Monsieur La Doulaise":{"variants":["regular"],"category":"handwriting"},"Montaga":{"variants":["regular"],"category":"serif"},"MonteCarlo":{"variants":["regular"],"category":"handwriting"},"Montez":{"variants":["regular"],"category":"handwriting"},"Montserrat":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Montserrat Alternates":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Montserrat Subrayada":{"variants":["regular","700"],"category":"sans-serif"},"Moul":{"variants":["regular"],"category":"display"},"Moulpali":{"variants":["regular"],"category":"display"},"Mountains of Christmas":{"variants":["regular","700"],"category":"display"},"Mouse Memoirs":{"variants":["regular"],"category":"sans-serif"},"Mr Bedfort":{"variants":["regular"],"category":"handwriting"},"Mr Dafoe":{"variants":["regular"],"category":"handwriting"},"Mr De Haviland":{"variants":["regular"],"category":"handwriting"},"Mrs Saint Delafield":{"variants":["regular"],"category":"handwriting"},"Mrs Sheppards":{"variants":["regular"],"category":"handwriting"},"Mukta":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Mukta Mahee":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Mukta Malar":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Mukta Vaani":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Mulish":{"variants":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"MuseoModerno":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"display"},"Mystery Quest":{"variants":["regular"],"category":"display"},"NTR":{"variants":["regular"],"category":"sans-serif"},"Nanum Brush Script":{"variants":["regular"],"category":"handwriting"},"Nanum Gothic":{"variants":["regular","700","800"],"category":"sans-serif"},"Nanum Gothic Coding":{"variants":["regular","700"],"category":"monospace"},"Nanum Myeongjo":{"variants":["regular","700","800"],"category":"serif"},"Nanum Pen Script":{"variants":["regular"],"category":"handwriting"},"Nerko One":{"variants":["regular"],"category":"handwriting"},"Neucha":{"variants":["regular"],"category":"handwriting"},"Neuton":{"variants":["200","300","regular","italic","700","800"],"category":"serif"},"New Rocker":{"variants":["regular"],"category":"display"},"New Tegomin":{"variants":["regular"],"category":"serif"},"News Cycle":{"variants":["regular","700"],"category":"sans-serif"},"Newsreader":{"variants":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"category":"serif"},"Niconne":{"variants":["regular"],"category":"handwriting"},"Niramit":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"sans-serif"},"Nixie One":{"variants":["regular"],"category":"display"},"Nobile":{"variants":["regular","italic","500","500italic","700","700italic"],"category":"sans-serif"},"Nokora":{"variants":["regular","700"],"category":"serif"},"Norican":{"variants":["regular"],"category":"handwriting"},"Nosifer":{"variants":["regular"],"category":"display"},"Notable":{"variants":["regular"],"category":"sans-serif"},"Nothing You Could Do":{"variants":["regular"],"category":"handwriting"},"Noticia Text":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Noto Kufi Arabic":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Music":{"variants":["regular"],"category":"sans-serif"},"Noto Naskh Arabic":{"variants":["regular","500","600","700"],"category":"serif"},"Noto Nastaliq Urdu":{"variants":["regular","700"],"category":"serif"},"Noto Rashi Hebrew":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Sans":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Noto Sans Adlam":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Adlam Unjoined":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Anatolian Hieroglyphs":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Arabic":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Armenian":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Avestan":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Balinese":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Bamum":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Bassa Vah":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Batak":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Bengali":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Bhaiksuki":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Brahmi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Buginese":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Buhid":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Canadian Aboriginal":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Carian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Caucasian Albanian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Chakma":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Cham":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Cherokee":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Coptic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Cuneiform":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Cypriot":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Deseret":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Devanagari":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Display":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Noto Sans Duployan":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Egyptian Hieroglyphs":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Elbasan":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Elymaic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Georgian":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Glagolitic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Gothic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Grantha":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Gujarati":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Gunjala Gondi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Gurmukhi":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans HK":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Noto Sans Hanifi Rohingya":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Hanunoo":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Hatran":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Hebrew":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Imperial Aramaic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Indic Siyaq Numbers":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Inscriptional Pahlavi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Inscriptional Parthian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans JP":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Noto Sans Javanese":{"variants":["regular","700"],"category":"sans-serif"},"Noto Sans KR":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Noto Sans Kaithi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Kannada":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Kayah Li":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Kharoshthi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Khmer":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Khojki":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Khudawadi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Lao":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Lepcha":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Limbu":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Linear A":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Linear B":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Lisu":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Lycian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Lydian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Mahajani":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Malayalam":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Mandaic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Manichaean":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Marchen":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Masaram Gondi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Math":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Mayan Numerals":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Medefaidrin":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Meroitic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Miao":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Modi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Mongolian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Mono":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"monospace"},"Noto Sans Mro":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Multani":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Myanmar":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans N Ko":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Nabataean":{"variants":["regular"],"category":"sans-serif"},"Noto Sans New Tai Lue":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Newa":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Nushu":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Ogham":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Ol Chiki":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Old Hungarian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old Italic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old North Arabian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old Permic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old Persian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old Sogdian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old South Arabian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Old Turkic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Oriya":{"variants":["100","regular","700","900"],"category":"sans-serif"},"Noto Sans Osage":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Osmanya":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Pahawh Hmong":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Palmyrene":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Pau Cin Hau":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Phags Pa":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Phoenician":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Psalter Pahlavi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Rejang":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Runic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans SC":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Noto Sans Samaritan":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Saurashtra":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Sharada":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Shavian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Siddham":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Sinhala":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Sogdian":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Sora Sompeng":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Soyombo":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Sundanese":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Syloti Nagri":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Symbols":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Symbols 2":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Syriac":{"variants":["100","regular","900"],"category":"sans-serif"},"Noto Sans TC":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Noto Sans Tagalog":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Tagbanwa":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Tai Le":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Tai Tham":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Noto Sans Tai Viet":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Takri":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Tamil":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Tamil Supplement":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Telugu":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Thaana":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Thai":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Thai Looped":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Noto Sans Tifinagh":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Tirhuta":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Ugaritic":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Vai":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Wancho":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Warang Citi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Yi":{"variants":["regular"],"category":"sans-serif"},"Noto Sans Zanabazar Square":{"variants":["regular"],"category":"sans-serif"},"Noto Serif":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Noto Serif Ahom":{"variants":["regular"],"category":"serif"},"Noto Serif Armenian":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Balinese":{"variants":["regular"],"category":"serif"},"Noto Serif Bengali":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Devanagari":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Display":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Noto Serif Dogra":{"variants":["regular"],"category":"serif"},"Noto Serif Ethiopic":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Georgian":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Grantha":{"variants":["regular"],"category":"serif"},"Noto Serif Gujarati":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Gurmukhi":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Hebrew":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif JP":{"variants":["200","300","regular","500","600","700","900"],"category":"serif"},"Noto Serif KR":{"variants":["200","300","regular","500","600","700","900"],"category":"serif"},"Noto Serif Kannada":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Khmer":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Lao":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Malayalam":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Myanmar":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Nyiakeng Puachue Hmong":{"variants":["regular","500","600","700"],"category":"serif"},"Noto Serif SC":{"variants":["200","300","regular","500","600","700","900"],"category":"serif"},"Noto Serif Sinhala":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif TC":{"variants":["200","300","regular","500","600","700","900"],"category":"serif"},"Noto Serif Tamil":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Noto Serif Tangut":{"variants":["regular"],"category":"serif"},"Noto Serif Telugu":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Thai":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Tibetan":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Noto Serif Yezidi":{"variants":["regular","500","600","700"],"category":"serif"},"Noto Traditional Nushu":{"variants":["regular"],"category":"sans-serif"},"Nova Cut":{"variants":["regular"],"category":"display"},"Nova Flat":{"variants":["regular"],"category":"display"},"Nova Mono":{"variants":["regular"],"category":"monospace"},"Nova Oval":{"variants":["regular"],"category":"display"},"Nova Round":{"variants":["regular"],"category":"display"},"Nova Script":{"variants":["regular"],"category":"display"},"Nova Slim":{"variants":["regular"],"category":"display"},"Nova Square":{"variants":["regular"],"category":"display"},"Numans":{"variants":["regular"],"category":"sans-serif"},"Nunito":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Nunito Sans":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Odibee Sans":{"variants":["regular"],"category":"display"},"Odor Mean Chey":{"variants":["regular"],"category":"serif"},"Offside":{"variants":["regular"],"category":"display"},"Oi":{"variants":["regular"],"category":"display"},"Old Standard TT":{"variants":["regular","italic","700"],"category":"serif"},"Oldenburg":{"variants":["regular"],"category":"display"},"Oleo Script":{"variants":["regular","700"],"category":"display"},"Oleo Script Swash Caps":{"variants":["regular","700"],"category":"display"},"Open Sans":{"variants":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"category":"sans-serif"},"Open Sans Condensed":{"variants":["300","300italic","700"],"category":"sans-serif"},"Oranienbaum":{"variants":["regular"],"category":"serif"},"Orbitron":{"variants":["regular","500","600","700","800","900"],"category":"sans-serif"},"Oregano":{"variants":["regular","italic"],"category":"display"},"Orelega One":{"variants":["regular"],"category":"display"},"Orienta":{"variants":["regular"],"category":"sans-serif"},"Original Surfer":{"variants":["regular"],"category":"display"},"Oswald":{"variants":["200","300","regular","500","600","700"],"category":"sans-serif"},"Otomanopee One":{"variants":["regular"],"category":"sans-serif"},"Over the Rainbow":{"variants":["regular"],"category":"handwriting"},"Overlock":{"variants":["regular","italic","700","700italic","900","900italic"],"category":"display"},"Overlock SC":{"variants":["regular"],"category":"display"},"Overpass":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Overpass Mono":{"variants":["300","regular","600","700"],"category":"monospace"},"Ovo":{"variants":["regular"],"category":"serif"},"Oxanium":{"variants":["200","300","regular","500","600","700","800"],"category":"display"},"Oxygen":{"variants":["300","regular","700"],"category":"sans-serif"},"Oxygen Mono":{"variants":["regular"],"category":"monospace"},"PT Mono":{"variants":["regular"],"category":"monospace"},"PT Sans":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"PT Sans Caption":{"variants":["regular","700"],"category":"sans-serif"},"PT Sans Narrow":{"variants":["regular","700"],"category":"sans-serif"},"PT Serif":{"variants":["regular","italic","700","700italic"],"category":"serif"},"PT Serif Caption":{"variants":["regular","italic"],"category":"serif"},"Pacifico":{"variants":["regular"],"category":"handwriting"},"Padauk":{"variants":["regular","700"],"category":"sans-serif"},"Palanquin":{"variants":["100","200","300","regular","500","600","700"],"category":"sans-serif"},"Palanquin Dark":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Palette Mosaic":{"variants":["regular"],"category":"display"},"Pangolin":{"variants":["regular"],"category":"handwriting"},"Paprika":{"variants":["regular"],"category":"display"},"Parisienne":{"variants":["regular"],"category":"handwriting"},"Passero One":{"variants":["regular"],"category":"display"},"Passion One":{"variants":["regular","700","900"],"category":"display"},"Pathway Gothic One":{"variants":["regular"],"category":"sans-serif"},"Patrick Hand":{"variants":["regular"],"category":"handwriting"},"Patrick Hand SC":{"variants":["regular"],"category":"handwriting"},"Pattaya":{"variants":["regular"],"category":"sans-serif"},"Patua One":{"variants":["regular"],"category":"display"},"Pavanam":{"variants":["regular"],"category":"sans-serif"},"Paytone One":{"variants":["regular"],"category":"sans-serif"},"Peddana":{"variants":["regular"],"category":"serif"},"Peralta":{"variants":["regular"],"category":"display"},"Permanent Marker":{"variants":["regular"],"category":"handwriting"},"Petit Formal Script":{"variants":["regular"],"category":"handwriting"},"Petrona":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Philosopher":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Piazzolla":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Piedra":{"variants":["regular"],"category":"display"},"Pinyon Script":{"variants":["regular"],"category":"handwriting"},"Pirata One":{"variants":["regular"],"category":"display"},"Plaster":{"variants":["regular"],"category":"display"},"Play":{"variants":["regular","700"],"category":"sans-serif"},"Playball":{"variants":["regular"],"category":"display"},"Playfair Display":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Playfair Display SC":{"variants":["regular","italic","700","700italic","900","900italic"],"category":"serif"},"Podkova":{"variants":["regular","500","600","700","800"],"category":"serif"},"Poiret One":{"variants":["regular"],"category":"display"},"Poller One":{"variants":["regular"],"category":"display"},"Poly":{"variants":["regular","italic"],"category":"serif"},"Pompiere":{"variants":["regular"],"category":"display"},"Pontano Sans":{"variants":["regular"],"category":"sans-serif"},"Poor Story":{"variants":["regular"],"category":"display"},"Poppins":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Port Lligat Sans":{"variants":["regular"],"category":"sans-serif"},"Port Lligat Slab":{"variants":["regular"],"category":"serif"},"Potta One":{"variants":["regular"],"category":"display"},"Pragati Narrow":{"variants":["regular","700"],"category":"sans-serif"},"Prata":{"variants":["regular"],"category":"serif"},"Preahvihear":{"variants":["regular"],"category":"sans-serif"},"Press Start 2P":{"variants":["regular"],"category":"display"},"Pridi":{"variants":["200","300","regular","500","600","700"],"category":"serif"},"Princess Sofia":{"variants":["regular"],"category":"handwriting"},"Prociono":{"variants":["regular"],"category":"serif"},"Prompt":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Prosto One":{"variants":["regular"],"category":"display"},"Proza Libre":{"variants":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"sans-serif"},"Public Sans":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Puritan":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Purple Purse":{"variants":["regular"],"category":"display"},"Qahiri":{"variants":["regular"],"category":"sans-serif"},"Quando":{"variants":["regular"],"category":"serif"},"Quantico":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Quattrocento":{"variants":["regular","700"],"category":"serif"},"Quattrocento Sans":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Questrial":{"variants":["regular"],"category":"sans-serif"},"Quicksand":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Quintessential":{"variants":["regular"],"category":"handwriting"},"Qwigley":{"variants":["regular"],"category":"handwriting"},"Racing Sans One":{"variants":["regular"],"category":"display"},"Radley":{"variants":["regular","italic"],"category":"serif"},"Rajdhani":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Rakkas":{"variants":["regular"],"category":"display"},"Raleway":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Raleway Dots":{"variants":["regular"],"category":"display"},"Ramabhadra":{"variants":["regular"],"category":"sans-serif"},"Ramaraja":{"variants":["regular"],"category":"serif"},"Rambla":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Rammetto One":{"variants":["regular"],"category":"display"},"Rampart One":{"variants":["regular"],"category":"display"},"Ranchers":{"variants":["regular"],"category":"display"},"Rancho":{"variants":["regular"],"category":"handwriting"},"Ranga":{"variants":["regular","700"],"category":"display"},"Rasa":{"variants":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"category":"serif"},"Rationale":{"variants":["regular"],"category":"sans-serif"},"Ravi Prakash":{"variants":["regular"],"category":"display"},"Recursive":{"variants":["300","regular","500","600","700","800","900"],"category":"sans-serif"},"Red Hat Display":{"variants":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Red Hat Text":{"variants":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Red Rose":{"variants":["300","regular","500","600","700"],"category":"display"},"Redressed":{"variants":["regular"],"category":"handwriting"},"Reem Kufi":{"variants":["regular","500","600","700"],"category":"sans-serif"},"Reenie Beanie":{"variants":["regular"],"category":"handwriting"},"Reggae One":{"variants":["regular"],"category":"display"},"Revalia":{"variants":["regular"],"category":"display"},"Rhodium Libre":{"variants":["regular"],"category":"serif"},"Ribeye":{"variants":["regular"],"category":"display"},"Ribeye Marrow":{"variants":["regular"],"category":"display"},"Righteous":{"variants":["regular"],"category":"display"},"Risque":{"variants":["regular"],"category":"display"},"Roboto":{"variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"category":"sans-serif"},"Roboto Condensed":{"variants":["300","300italic","regular","italic","700","700italic"],"category":"sans-serif"},"Roboto Mono":{"variants":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"category":"monospace"},"Roboto Slab":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Rochester":{"variants":["regular"],"category":"handwriting"},"Rock Salt":{"variants":["regular"],"category":"handwriting"},"RocknRoll One":{"variants":["regular"],"category":"sans-serif"},"Rokkitt":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"serif"},"Romanesco":{"variants":["regular"],"category":"handwriting"},"Ropa Sans":{"variants":["regular","italic"],"category":"sans-serif"},"Rosario":{"variants":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"category":"sans-serif"},"Rosarivo":{"variants":["regular","italic"],"category":"serif"},"Rouge Script":{"variants":["regular"],"category":"handwriting"},"Rowdies":{"variants":["300","regular","700"],"category":"display"},"Rozha One":{"variants":["regular"],"category":"serif"},"Rubik":{"variants":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Rubik Beastly":{"variants":["regular"],"category":"display"},"Rubik Mono One":{"variants":["regular"],"category":"sans-serif"},"Ruda":{"variants":["regular","500","600","700","800","900"],"category":"sans-serif"},"Rufina":{"variants":["regular","700"],"category":"serif"},"Ruge Boogie":{"variants":["regular"],"category":"handwriting"},"Ruluko":{"variants":["regular"],"category":"sans-serif"},"Rum Raisin":{"variants":["regular"],"category":"sans-serif"},"Ruslan Display":{"variants":["regular"],"category":"display"},"Russo One":{"variants":["regular"],"category":"sans-serif"},"Ruthie":{"variants":["regular"],"category":"handwriting"},"Rye":{"variants":["regular"],"category":"display"},"STIX Two Text":{"variants":["regular","500","600","700","italic","500italic","600italic","700italic"],"category":"serif"},"Sacramento":{"variants":["regular"],"category":"handwriting"},"Sahitya":{"variants":["regular","700"],"category":"serif"},"Sail":{"variants":["regular"],"category":"display"},"Saira":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Saira Condensed":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Saira Extra Condensed":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Saira Semi Condensed":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Saira Stencil One":{"variants":["regular"],"category":"display"},"Salsa":{"variants":["regular"],"category":"display"},"Sanchez":{"variants":["regular","italic"],"category":"serif"},"Sancreek":{"variants":["regular"],"category":"display"},"Sansita":{"variants":["regular","italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Sansita Swashed":{"variants":["300","regular","500","600","700","800","900"],"category":"display"},"Sarabun":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"sans-serif"},"Sarala":{"variants":["regular","700"],"category":"sans-serif"},"Sarina":{"variants":["regular"],"category":"display"},"Sarpanch":{"variants":["regular","500","600","700","800","900"],"category":"sans-serif"},"Satisfy":{"variants":["regular"],"category":"handwriting"},"Sawarabi Gothic":{"variants":["regular"],"category":"sans-serif"},"Sawarabi Mincho":{"variants":["regular"],"category":"sans-serif"},"Scada":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"Scheherazade":{"variants":["regular","700"],"category":"serif"},"Scheherazade New":{"variants":["regular","700"],"category":"serif"},"Schoolbell":{"variants":["regular"],"category":"handwriting"},"Scope One":{"variants":["regular"],"category":"serif"},"Seaweed Script":{"variants":["regular"],"category":"display"},"Secular One":{"variants":["regular"],"category":"sans-serif"},"Sedgwick Ave":{"variants":["regular"],"category":"handwriting"},"Sedgwick Ave Display":{"variants":["regular"],"category":"handwriting"},"Sen":{"variants":["regular","700","800"],"category":"sans-serif"},"Sevillana":{"variants":["regular"],"category":"display"},"Seymour One":{"variants":["regular"],"category":"sans-serif"},"Shadows Into Light":{"variants":["regular"],"category":"handwriting"},"Shadows Into Light Two":{"variants":["regular"],"category":"handwriting"},"Shanti":{"variants":["regular"],"category":"sans-serif"},"Share":{"variants":["regular","italic","700","700italic"],"category":"display"},"Share Tech":{"variants":["regular"],"category":"sans-serif"},"Share Tech Mono":{"variants":["regular"],"category":"monospace"},"Shippori Mincho":{"variants":["regular","500","600","700","800"],"category":"serif"},"Shippori Mincho B1":{"variants":["regular","500","600","700","800"],"category":"serif"},"Shojumaru":{"variants":["regular"],"category":"display"},"Short Stack":{"variants":["regular"],"category":"handwriting"},"Shrikhand":{"variants":["regular"],"category":"display"},"Siemreap":{"variants":["regular"],"category":"display"},"Sigmar One":{"variants":["regular"],"category":"display"},"Signika":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Signika Negative":{"variants":["300","regular","600","700"],"category":"sans-serif"},"Simonetta":{"variants":["regular","italic","900","900italic"],"category":"display"},"Single Day":{"variants":["regular"],"category":"display"},"Sintony":{"variants":["regular","700"],"category":"sans-serif"},"Sirin Stencil":{"variants":["regular"],"category":"display"},"Six Caps":{"variants":["regular"],"category":"sans-serif"},"Skranji":{"variants":["regular","700"],"category":"display"},"Slabo 13px":{"variants":["regular"],"category":"serif"},"Slabo 27px":{"variants":["regular"],"category":"serif"},"Slackey":{"variants":["regular"],"category":"display"},"Smokum":{"variants":["regular"],"category":"display"},"Smythe":{"variants":["regular"],"category":"display"},"Sniglet":{"variants":["regular","800"],"category":"display"},"Snippet":{"variants":["regular"],"category":"sans-serif"},"Snowburst One":{"variants":["regular"],"category":"display"},"Sofadi One":{"variants":["regular"],"category":"display"},"Sofia":{"variants":["regular"],"category":"handwriting"},"Solway":{"variants":["300","regular","500","700","800"],"category":"serif"},"Song Myung":{"variants":["regular"],"category":"serif"},"Sonsie One":{"variants":["regular"],"category":"display"},"Sora":{"variants":["100","200","300","regular","500","600","700","800"],"category":"sans-serif"},"Sorts Mill Goudy":{"variants":["regular","italic"],"category":"serif"},"Source Code Pro":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"category":"monospace"},"Source Sans Pro":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"category":"sans-serif"},"Source Serif Pro":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"category":"serif"},"Space Grotesk":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Space Mono":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Spartan":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Special Elite":{"variants":["regular"],"category":"display"},"Spectral":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"serif"},"Spectral SC":{"variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"category":"serif"},"Spicy Rice":{"variants":["regular"],"category":"display"},"Spinnaker":{"variants":["regular"],"category":"sans-serif"},"Spirax":{"variants":["regular"],"category":"display"},"Squada One":{"variants":["regular"],"category":"display"},"Sree Krushnadevaraya":{"variants":["regular"],"category":"serif"},"Sriracha":{"variants":["regular"],"category":"handwriting"},"Srisakdi":{"variants":["regular","700"],"category":"display"},"Staatliches":{"variants":["regular"],"category":"display"},"Stalemate":{"variants":["regular"],"category":"handwriting"},"Stalinist One":{"variants":["regular"],"category":"display"},"Stardos Stencil":{"variants":["regular","700"],"category":"display"},"Stick":{"variants":["regular"],"category":"sans-serif"},"Stick No Bills":{"variants":["200","300","regular","500","600","700","800"],"category":"sans-serif"},"Stint Ultra Condensed":{"variants":["regular"],"category":"display"},"Stint Ultra Expanded":{"variants":["regular"],"category":"display"},"Stoke":{"variants":["300","regular"],"category":"serif"},"Strait":{"variants":["regular"],"category":"sans-serif"},"Style Script":{"variants":["regular"],"category":"handwriting"},"Stylish":{"variants":["regular"],"category":"sans-serif"},"Sue Ellen Francisco":{"variants":["regular"],"category":"handwriting"},"Suez One":{"variants":["regular"],"category":"serif"},"Sulphur Point":{"variants":["300","regular","700"],"category":"sans-serif"},"Sumana":{"variants":["regular","700"],"category":"serif"},"Sunflower":{"variants":["300","500","700"],"category":"sans-serif"},"Sunshiney":{"variants":["regular"],"category":"handwriting"},"Supermercado One":{"variants":["regular"],"category":"display"},"Sura":{"variants":["regular","700"],"category":"serif"},"Suranna":{"variants":["regular"],"category":"serif"},"Suravaram":{"variants":["regular"],"category":"serif"},"Suwannaphum":{"variants":["100","300","regular","700","900"],"category":"serif"},"Swanky and Moo Moo":{"variants":["regular"],"category":"handwriting"},"Syncopate":{"variants":["regular","700"],"category":"sans-serif"},"Syne":{"variants":["regular","500","600","700","800"],"category":"sans-serif"},"Syne Mono":{"variants":["regular"],"category":"monospace"},"Syne Tactile":{"variants":["regular"],"category":"display"},"Tajawal":{"variants":["200","300","regular","500","700","800","900"],"category":"sans-serif"},"Tangerine":{"variants":["regular","700"],"category":"handwriting"},"Taprom":{"variants":["regular"],"category":"display"},"Tauri":{"variants":["regular"],"category":"sans-serif"},"Taviraj":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"serif"},"Teko":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Telex":{"variants":["regular"],"category":"sans-serif"},"Tenali Ramakrishna":{"variants":["regular"],"category":"sans-serif"},"Tenor Sans":{"variants":["regular"],"category":"sans-serif"},"Text Me One":{"variants":["regular"],"category":"sans-serif"},"Texturina":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Thasadith":{"variants":["regular","italic","700","700italic"],"category":"sans-serif"},"The Girl Next Door":{"variants":["regular"],"category":"handwriting"},"Tienne":{"variants":["regular","700","900"],"category":"serif"},"Tillana":{"variants":["regular","500","600","700","800"],"category":"handwriting"},"Timmana":{"variants":["regular"],"category":"sans-serif"},"Tinos":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Titan One":{"variants":["regular"],"category":"display"},"Titillium Web":{"variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"category":"sans-serif"},"Tomorrow":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"sans-serif"},"Tourney":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"display"},"Trade Winds":{"variants":["regular"],"category":"display"},"Train One":{"variants":["regular"],"category":"display"},"Trirong":{"variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"category":"serif"},"Trispace":{"variants":["100","200","300","regular","500","600","700","800"],"category":"sans-serif"},"Trocchi":{"variants":["regular"],"category":"serif"},"Trochut":{"variants":["regular","italic","700"],"category":"display"},"Truculenta":{"variants":["100","200","300","regular","500","600","700","800","900"],"category":"sans-serif"},"Trykker":{"variants":["regular"],"category":"serif"},"Tulpen One":{"variants":["regular"],"category":"display"},"Turret Road":{"variants":["200","300","regular","500","700","800"],"category":"display"},"Ubuntu":{"variants":["300","300italic","regular","italic","500","500italic","700","700italic"],"category":"sans-serif"},"Ubuntu Condensed":{"variants":["regular"],"category":"sans-serif"},"Ubuntu Mono":{"variants":["regular","italic","700","700italic"],"category":"monospace"},"Uchen":{"variants":["regular"],"category":"serif"},"Ultra":{"variants":["regular"],"category":"serif"},"Uncial Antiqua":{"variants":["regular"],"category":"display"},"Underdog":{"variants":["regular"],"category":"display"},"Unica One":{"variants":["regular"],"category":"display"},"UnifrakturCook":{"variants":["700"],"category":"display"},"UnifrakturMaguntia":{"variants":["regular"],"category":"display"},"Unkempt":{"variants":["regular","700"],"category":"display"},"Unlock":{"variants":["regular"],"category":"display"},"Unna":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Urbanist":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"VT323":{"variants":["regular"],"category":"monospace"},"Vampiro One":{"variants":["regular"],"category":"display"},"Varela":{"variants":["regular"],"category":"sans-serif"},"Varela Round":{"variants":["regular"],"category":"sans-serif"},"Varta":{"variants":["300","regular","500","600","700"],"category":"sans-serif"},"Vast Shadow":{"variants":["regular"],"category":"display"},"Vesper Libre":{"variants":["regular","500","700","900"],"category":"serif"},"Viaoda Libre":{"variants":["regular"],"category":"display"},"Vibes":{"variants":["regular"],"category":"display"},"Vibur":{"variants":["regular"],"category":"handwriting"},"Vidaloka":{"variants":["regular"],"category":"serif"},"Viga":{"variants":["regular"],"category":"sans-serif"},"Voces":{"variants":["regular"],"category":"display"},"Volkhov":{"variants":["regular","italic","700","700italic"],"category":"serif"},"Vollkorn":{"variants":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"category":"serif"},"Vollkorn SC":{"variants":["regular","600","700","900"],"category":"serif"},"Voltaire":{"variants":["regular"],"category":"sans-serif"},"Waiting for the Sunrise":{"variants":["regular"],"category":"handwriting"},"Wallpoet":{"variants":["regular"],"category":"display"},"Walter Turncoat":{"variants":["regular"],"category":"handwriting"},"Warnes":{"variants":["regular"],"category":"display"},"Wellfleet":{"variants":["regular"],"category":"display"},"Wendy One":{"variants":["regular"],"category":"sans-serif"},"WindSong":{"variants":["regular","500"],"category":"handwriting"},"Wire One":{"variants":["regular"],"category":"sans-serif"},"Work Sans":{"variants":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"category":"sans-serif"},"Xanh Mono":{"variants":["regular","italic"],"category":"monospace"},"Yaldevi":{"variants":["200","300","regular","500","600","700"],"category":"sans-serif"},"Yanone Kaffeesatz":{"variants":["200","300","regular","500","600","700"],"category":"sans-serif"},"Yantramanav":{"variants":["100","300","regular","500","700","900"],"category":"sans-serif"},"Yatra One":{"variants":["regular"],"category":"display"},"Yellowtail":{"variants":["regular"],"category":"handwriting"},"Yeon Sung":{"variants":["regular"],"category":"display"},"Yeseva One":{"variants":["regular"],"category":"display"},"Yesteryear":{"variants":["regular"],"category":"handwriting"},"Yomogi":{"variants":["regular"],"category":"handwriting"},"Yrsa":{"variants":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"category":"serif"},"Yusei Magic":{"variants":["regular"],"category":"sans-serif"},"ZCOOL KuaiLe":{"variants":["regular"],"category":"display"},"ZCOOL QingKe HuangYou":{"variants":["regular"],"category":"display"},"ZCOOL XiaoWei":{"variants":["regular"],"category":"serif"},"Zen Dots":{"variants":["regular"],"category":"display"},"Zen Loop":{"variants":["regular","italic"],"category":"display"},"Zen Tokyo Zoo":{"variants":["regular"],"category":"display"},"Zeyada":{"variants":["regular"],"category":"handwriting"},"Zhi Mang Xing":{"variants":["regular"],"category":"handwriting"},"Zilla Slab":{"variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"category":"serif"},"Zilla Slab Highlight":{"variants":["regular","700"],"category":"display"}}')
	}, , function(e, a, t) {
		var r = t(13);
		e.exports = function(e, a) {
			if (e) {
				if ("string" == typeof e) return r(e, a);
				var t = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, a) : void 0
			}
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e, a) {
			(null == a || a > e.length) && (a = e.length);
			for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
			return r
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e) {
			if (Array.isArray(e)) return e
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e, a) {
			var t = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
			if (null != t) {
				var r, i, n = [],
					_n = !0,
					o = !1;
				try {
					for (t = t.call(e); !(_n = (r = t.next()).done) && (n.push(r.value), !a || n.length !== a); _n = !0);
				} catch (e) {
					o = !0, i = e
				} finally {
					try {
						_n || null == t.return || t.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var t = arguments[a];
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				}
				return e
			},
			i = function() {
				function e(e, a) {
					for (var t = 0; t < a.length; t++) {
						var r = a[t];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(a, t, r) {
					return t && e(a.prototype, t), r && e(a, r), a
				}
			}(),
			n = t(3),
			o = l(n),
			s = l(t(39));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var c = {
				position: "absolute",
				top: 0,
				left: 0,
				visibility: "hidden",
				height: 0,
				overflow: "scroll",
				whiteSpace: "pre"
			},
			u = ["extraWidth", "injectStyles", "inputClassName", "inputRef", "inputStyle", "minWidth", "onAutosize", "placeholderIsMinWidth"],
			g = function(e, a) {
				a.style.fontSize = e.fontSize, a.style.fontFamily = e.fontFamily, a.style.fontWeight = e.fontWeight, a.style.fontStyle = e.fontStyle, a.style.letterSpacing = e.letterSpacing, a.style.textTransform = e.textTransform
			},
			p = !("undefined" == typeof window || !window.navigator) && /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
			f = function() {
				return p ? "_" + Math.random().toString(36).substr(2, 12) : void 0
			},
			d = function(e) {
				function a(e) {
					! function(e, a) {
						if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
					}(this, a);
					var t = function(e, a) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !a || "object" != typeof a && "function" != typeof a ? e : a
					}(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
					return t.inputRef = function(e) {
						t.input = e, "function" == typeof t.props.inputRef && t.props.inputRef(e)
					}, t.placeHolderSizerRef = function(e) {
						t.placeHolderSizer = e
					}, t.sizerRef = function(e) {
						t.sizer = e
					}, t.state = {
						inputWidth: e.minWidth,
						inputId: e.id || f(),
						prevId: e.id
					}, t
				}
				return function(e, a) {
					if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
					e.prototype = Object.create(a && a.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a)
				}(a, e), i(a, null, [{
					key: "getDerivedStateFromProps",
					value: function(e, a) {
						var t = e.id;
						return t !== a.prevId ? {
							inputId: t || f(),
							prevId: t
						} : null
					}
				}]), i(a, [{
					key: "componentDidMount",
					value: function() {
						this.mounted = !0, this.copyInputStyles(), this.updateInputWidth()
					}
				}, {
					key: "componentDidUpdate",
					value: function(e, a) {
						a.inputWidth !== this.state.inputWidth && "function" == typeof this.props.onAutosize && this.props.onAutosize(this.state.inputWidth), this.updateInputWidth()
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.mounted = !1
					}
				}, {
					key: "copyInputStyles",
					value: function() {
						if (this.mounted && window.getComputedStyle) {
							var e = this.input && window.getComputedStyle(this.input);
							e && (g(e, this.sizer), this.placeHolderSizer && g(e, this.placeHolderSizer))
						}
					}
				}, {
					key: "updateInputWidth",
					value: function() {
						if (this.mounted && this.sizer && void 0 !== this.sizer.scrollWidth) {
							var e = void 0;
							e = this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : this.sizer.scrollWidth + 2, (e += "number" === this.props.type && void 0 === this.props.extraWidth ? 16 : parseInt(this.props.extraWidth) || 0) < this.props.minWidth && (e = this.props.minWidth), e !== this.state.inputWidth && this.setState({
								inputWidth: e
							})
						}
					}
				}, {
					key: "getInput",
					value: function() {
						return this.input
					}
				}, {
					key: "focus",
					value: function() {
						this.input.focus()
					}
				}, {
					key: "blur",
					value: function() {
						this.input.blur()
					}
				}, {
					key: "select",
					value: function() {
						this.input.select()
					}
				}, {
					key: "renderStyles",
					value: function() {
						var e = this.props.injectStyles;
						return p && e ? o.default.createElement("style", {
							dangerouslySetInnerHTML: {
								__html: "input#" + this.state.inputId + "::-ms-clear {display: none;}"
							}
						}) : null
					}
				}, {
					key: "render",
					value: function() {
						var e = [this.props.defaultValue, this.props.value, ""].reduce((function(e, a) {
								return null != e ? e : a
							})),
							a = r({}, this.props.style);
						a.display || (a.display = "inline-block");
						var t = r({
								boxSizing: "content-box",
								width: this.state.inputWidth + "px"
							}, this.props.inputStyle),
							i = function(e, a) {
								var t = {};
								for (var r in e) a.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
								return t
							}(this.props, []);
						return function(e) {
							u.forEach((function(a) {
								return delete e[a]
							}))
						}(i), i.className = this.props.inputClassName, i.id = this.state.inputId, i.style = t, o.default.createElement("div", {
							className: this.props.className,
							style: a
						}, this.renderStyles(), o.default.createElement("input", r({}, i, {
							ref: this.inputRef
						})), o.default.createElement("div", {
							ref: this.sizerRef,
							style: c
						}, e), this.props.placeholder ? o.default.createElement("div", {
							ref: this.placeHolderSizerRef,
							style: c
						}, this.props.placeholder) : null)
					}
				}]), a
			}(n.Component);
		d.propTypes = {
			className: s.default.string,
			defaultValue: s.default.any,
			extraWidth: s.default.oneOfType([s.default.number, s.default.string]),
			id: s.default.string,
			injectStyles: s.default.bool,
			inputClassName: s.default.string,
			inputRef: s.default.func,
			inputStyle: s.default.object,
			minWidth: s.default.oneOfType([s.default.number, s.default.string]),
			onAutosize: s.default.func,
			onChange: s.default.func,
			placeholder: s.default.string,
			placeholderIsMinWidth: s.default.bool,
			style: s.default.object,
			value: s.default.any
		}, d.defaultProps = {
			minWidth: 1,
			injectStyles: !0
		}, a.default = d
	}, function(e, a) {
		e.exports = window.ReactDOM
	}, function(e, a, t) {
		"use strict";
		var r = t(42),
			i = {
				childContextTypes: !0,
				contextType: !0,
				contextTypes: !0,
				defaultProps: !0,
				displayName: !0,
				getDefaultProps: !0,
				getDerivedStateFromError: !0,
				getDerivedStateFromProps: !0,
				mixins: !0,
				propTypes: !0,
				type: !0
			},
			n = {
				name: !0,
				length: !0,
				prototype: !0,
				caller: !0,
				callee: !0,
				arguments: !0,
				arity: !0
			},
			o = {
				$$typeof: !0,
				compare: !0,
				defaultProps: !0,
				displayName: !0,
				propTypes: !0,
				type: !0
			},
			s = {};

		function l(e) {
			return r.isMemo(e) ? o : s[e.$$typeof] || i
		}
		s[r.ForwardRef] = {
			$$typeof: !0,
			render: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0
		}, s[r.Memo] = o;
		var c = Object.defineProperty,
			u = Object.getOwnPropertyNames,
			g = Object.getOwnPropertySymbols,
			p = Object.getOwnPropertyDescriptor,
			f = Object.getPrototypeOf,
			d = Object.prototype;
		e.exports = function e(a, t, r) {
			if ("string" != typeof t) {
				if (d) {
					var i = f(t);
					i && i !== d && e(a, i, r)
				}
				var o = u(t);
				g && (o = o.concat(g(t)));
				for (var s = l(a), y = l(t), v = 0; v < o.length; ++v) {
					var m = o[v];
					if (!(n[m] || r && r[m] || y && y[m] || s && s[m])) {
						var h = p(t, m);
						try {
							c(a, m, h)
						} catch (e) {}
					}
				}
			}
			return a
		}
	}, function(e, a) {
		function t(a) {
			return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			}, e.exports.default = e.exports, e.exports.__esModule = !0, t(a)
		}
		e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
	}, , function(e, a) {
		e.exports = function(e, a) {
			if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		function t(e, a) {
			for (var t = 0; t < a.length; t++) {
				var r = a[t];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		e.exports = function(e, a, r) {
			return a && t(e.prototype, a), r && t(e, r), e
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		var r = t(45);
		e.exports = function(e, a) {
			if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(a && a.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), a && r(e, a)
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		var r = t(8).default,
			i = t(46);
		e.exports = function(e, a) {
			return !a || "object" !== r(a) && "function" != typeof a ? i(e) : a
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		var r;
		! function() {
			"use strict";
			var t = {}.hasOwnProperty;

			function i() {
				for (var e = [], a = 0; a < arguments.length; a++) {
					var r = arguments[a];
					if (r) {
						var n = typeof r;
						if ("string" === n || "number" === n) e.push(r);
						else if (Array.isArray(r)) {
							if (r.length) {
								var o = i.apply(null, r);
								o && e.push(o)
							}
						} else if ("object" === n)
							if (r.toString === Object.prototype.toString)
								for (var s in r) t.call(r, s) && r[s] && e.push(s);
							else e.push(r.toString())
					}
				}
				return e.join(" ")
			}
			e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
				return i
			}.apply(a, [])) || (e.exports = r)
		}()
	}, , , , , , function(e, a, t) {
		var r = t(13);
		e.exports = function(e) {
			if (Array.isArray(e)) return r(e)
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e) {
			if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, , function(e, a, t) {
		var r = t(37);
		e.exports = function(e, a) {
			if (null == e) return {};
			var t, i, n = r(e, a);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				for (i = 0; i < o.length; i++) t = o[i], a.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
			}
			return n
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e, a) {
			if (null == e) return {};
			var t, r, i = {},
				n = Object.keys(e);
			for (r = 0; r < n.length; r++) t = n[r], a.indexOf(t) >= 0 || (i[t] = e[t]);
			return i
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e, a) {
			return a || (a = e.slice(0)), Object.freeze(Object.defineProperties(e, {
				raw: {
					value: Object.freeze(a)
				}
			}))
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a, t) {
		e.exports = t(40)()
	}, function(e, a, t) {
		"use strict";
		var r = t(41);

		function i() {}

		function n() {}
		n.resetWarningCache = i, e.exports = function() {
			function e(e, a, t, i, n, o) {
				if (o !== r) {
					var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw s.name = "Invariant Violation", s
				}
			}

			function a() {
				return e
			}
			e.isRequired = e;
			var t = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: a,
				element: e,
				elementType: e,
				instanceOf: a,
				node: e,
				objectOf: a,
				oneOf: a,
				oneOfType: a,
				shape: a,
				exact: a,
				checkPropTypes: n,
				resetWarningCache: i
			};
			return t.PropTypes = t, t
		}
	}, function(e, a, t) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function(e, a, t) {
		"use strict";
		e.exports = t(43)
	}, function(e, a, t) {
		"use strict";
		var r = "function" == typeof Symbol && Symbol.for,
			i = r ? Symbol.for("react.element") : 60103,
			n = r ? Symbol.for("react.portal") : 60106,
			o = r ? Symbol.for("react.fragment") : 60107,
			s = r ? Symbol.for("react.strict_mode") : 60108,
			l = r ? Symbol.for("react.profiler") : 60114,
			c = r ? Symbol.for("react.provider") : 60109,
			u = r ? Symbol.for("react.context") : 60110,
			g = r ? Symbol.for("react.async_mode") : 60111,
			p = r ? Symbol.for("react.concurrent_mode") : 60111,
			f = r ? Symbol.for("react.forward_ref") : 60112,
			d = r ? Symbol.for("react.suspense") : 60113,
			y = r ? Symbol.for("react.suspense_list") : 60120,
			v = r ? Symbol.for("react.memo") : 60115,
			m = r ? Symbol.for("react.lazy") : 60116,
			h = r ? Symbol.for("react.block") : 60121,
			b = r ? Symbol.for("react.fundamental") : 60117,
			O = r ? Symbol.for("react.responder") : 60118,
			S = r ? Symbol.for("react.scope") : 60119;

		function w(e) {
			if ("object" == typeof e && null !== e) {
				var a = e.$$typeof;
				switch (a) {
					case i:
						switch (e = e.type) {
							case g:
							case p:
							case o:
							case l:
							case s:
							case d:
								return e;
							default:
								switch (e = e && e.$$typeof) {
									case u:
									case f:
									case m:
									case v:
									case c:
										return e;
									default:
										return a
								}
						}
						case n:
							return a
				}
			}
		}

		function C(e) {
			return w(e) === p
		}
		a.AsyncMode = g, a.ConcurrentMode = p, a.ContextConsumer = u, a.ContextProvider = c, a.Element = i, a.ForwardRef = f, a.Fragment = o, a.Lazy = m, a.Memo = v, a.Portal = n, a.Profiler = l, a.StrictMode = s, a.Suspense = d, a.isAsyncMode = function(e) {
			return C(e) || w(e) === g
		}, a.isConcurrentMode = C, a.isContextConsumer = function(e) {
			return w(e) === u
		}, a.isContextProvider = function(e) {
			return w(e) === c
		}, a.isElement = function(e) {
			return "object" == typeof e && null !== e && e.$$typeof === i
		}, a.isForwardRef = function(e) {
			return w(e) === f
		}, a.isFragment = function(e) {
			return w(e) === o
		}, a.isLazy = function(e) {
			return w(e) === m
		}, a.isMemo = function(e) {
			return w(e) === v
		}, a.isPortal = function(e) {
			return w(e) === n
		}, a.isProfiler = function(e) {
			return w(e) === l
		}, a.isStrictMode = function(e) {
			return w(e) === s
		}, a.isSuspense = function(e) {
			return w(e) === d
		}, a.isValidElementType = function(e) {
			return "string" == typeof e || "function" == typeof e || e === o || e === p || e === l || e === s || e === d || e === y || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === b || e.$$typeof === O || e.$$typeof === S || e.$$typeof === h)
		}, a.typeOf = w
	}, , function(e, a) {
		function t(a, r) {
			return e.exports = t = Object.setPrototypeOf || function(e, a) {
				return e.__proto__ = a, e
			}, e.exports.default = e.exports, e.exports.__esModule = !0, t(a, r)
		}
		e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
	}, function(e, a) {
		e.exports = function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}, e.exports.default = e.exports, e.exports.__esModule = !0
	}, , , , , , , , , function(e, a, t) {
		"use strict";
		t.r(a), t(29);
		var r = t(6),
			i = t.n(r),
			n = t(0),
			o = t(2),
			s = function(e) {
				var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return wp.customize.Control.extend(Object.assign({}, {
					ready: function() {
						var e = this;
						e.setting.bind((function() {
							e.renderContent()
						}))
					},
					embed: function() {
						var e = this,
							a = e.section();
						a && wp.customize.section(a, (function(a) {
							a.expanded.bind((function(a) {
								a && e.actuallyEmbed()
							}))
						}))
					},
					actuallyEmbed: function() {
						"resolved" !== this.deferred.embedded.state() && (this.renderContent(), this.deferred.embedded.resolve())
					},
					initialize: function(e, a) {
						var t = this;
						t.setNotificationContainer = t.setNotificationContainer.bind(t), wp.customize.Control.prototype.initialize.call(t, e, a), wp.customize.control.bind("removed", (function e(a) {
							t === a && (t.destroy(), t.container.remove(), wp.customize.control.unbind("removed", e))
						}))
					},
					setNotificationContainer: function(e) {
						this.notifications.container = jQuery(e), this.notifications.render()
					},
					getWrapper: function() {
						var e = this.container[0];
						if (this.params.choices.wrapper) {
							var a = document.getElementById(this.params.choices.wrapper + "--wrapper");
							a && (e = a, this.container.hide())
						}
						return e
					},
					renderContent: function() {
						var a = this.setting.get(),
							t = Object(n.createElement)(o.SlotFillProvider, null, Object(n.createElement)(e, i()({}, this.params, {
								value: a,
								setNotificationContainer: this.setNotificationContainer,
								customizerSetting: this.setting,
								control: this,
								choices: this.params.choices,
								default: this.params.defaultValue
							})), Object(n.createElement)(o.Popover.Slot, null)),
							r = this.getWrapper();
						Object(n.render)(t, r)
					},
					destroy: function() {
						Object(n.unmountComponentAtNode)(this.container[0]), wp.customize.Control.prototype.destroy && wp.customize.Control.prototype.destroy.call(this)
					}
				}, a))
			},
			l = (t(30), t(4)),
			c = t.n(l);

		function u(e) {
			return "info" === e ? Object(n.createElement)("svg", {
				width: "1em",
				height: "1em",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 1024 1024",
				"aria-hidden": "true"
			}, Object(n.createElement)("path", {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
			}), Object(n.createElement)("path", {
				d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
			})) : "x" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M18 6L6 18M6 6l12 12"
			})) : "ellipsis" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, Object(n.createElement)("rect", {
				x: "0",
				fill: "none",
				width: "20",
				height: "20"
			}), Object(n.createElement)("g", null, Object(n.createElement)("path", {
				d: "M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
			}))) : "mobile" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				width: "1em",
				height: "1em"
			}, Object(n.createElement)("path", {
				d: "M6 2h8c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm7 12V4H7v10h6zM8 5h4l-4 5V5z",
				fill: "currentColor"
			})) : "tablet" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				width: "1em",
				height: "1em"
			}, Object(n.createElement)("path", {
				d: "M4 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm11 14V4H5v12h10zM6 5h6l-6 5V5z",
				fill: "currentColor"
			})) : "desktop" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				width: "1em",
				height: "1em"
			}, Object(n.createElement)("path", {
				d: "M3 2h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-5v2h2c.55 0 1 .45 1 1v1H5v-1c0-.55.45-1 1-1h2v-2H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm13 9V4H4v7h12zM5 5h9L5 9V5z",
				fill: "currentColor"
			})) : "dash" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				"aria-hidden": "true",
				width: "1em",
				height: "1em",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z",
				fill: "currentColor"
			})) : "plus" === e ? Object(n.createElement)("svg", {
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M12 5v14M5 12h14"
			})) : "lock" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("rect", {
				x: "3",
				y: "11",
				width: "18",
				height: "11",
				rx: "2",
				ry: "2"
			}), Object(n.createElement)("path", {
				d: "M7 11V7a5 5 0 0110 0v4"
			})) : "unlock" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("rect", {
				x: "3",
				y: "11",
				width: "18",
				height: "11",
				rx: "2",
				ry: "2"
			}), Object(n.createElement)("path", {
				d: "M7 11V7a5 5 0 019.9-1"
			})) : "chevron-down" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M6 9l6 6 6-6"
			})) : "chevron-up" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M18 15l-6-6-6 6"
			})) : "chevron-right" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M9 18l6-6-6-6"
			})) : "trash" === e ? Object(n.createElement)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				style: {
					fill: "none"
				},
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				viewBox: "0 0 24 24"
			}, Object(n.createElement)("path", {
				d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
			})) : void 0
		}
		t(31);
		var g = t(1),
			p = function(e) {
				var a = Object(n.useState)(!1),
					t = c()(a, 2),
					r = t[0],
					i = t[1],
					s = Object(n.useState)(!1),
					l = c()(s, 2),
					p = l[0],
					f = l[1],
					d = Object(n.useState)(!0),
					y = c()(d, 2),
					v = y[0],
					m = y[1],
					h = Object(n.useState)(!1),
					b = c()(h, 2),
					O = b[0],
					S = b[1],
					w = e.value,
					C = e.varNameValue,
					x = e.onChange,
					j = e.onVarChange,
					M = e.choices,
					E = e.tooltipPosition,
					k = void 0 === E ? "top center" : E,
					N = e.tooltipText,
					P = void 0 === N ? Object(g.__)("Choose Color", "generatepress") : N,
					_ = e.hideLabel,
					T = void 0 !== _ && _;
				Object(n.useEffect)((function() {
					m(!!w)
				}), [w]), Object(n.useEffect)((function() {
					if (O) {
						var e = setTimeout((function() {
							f(w);
							var e = document.querySelector(".generate-color-input-wrapper input");
							e && e.focus()
						}), 350);
						return function() {
							clearTimeout(e), S(!1)
						}
					}
				}), [w]);
				var I = function() {
						i(!1), m(!0)
					},
					A = P;
				M.tooltip && (A = M.tooltip);
				var B = !!M.showPalette || void 0 === M.showPalette,
					L = !!M.showReset || void 0 === M.showReset,
					F = generateCustomizerControls.palette,
					V = window.sessionStorage.getItem("generateGlobalColors");
				return V && (F = JSON.parse(V)), Object(n.createElement)("div", {
					className: "generate-color-picker-area"
				}, Object(n.createElement)("div", {
					className: "components-circular-option-picker__option-wrapper"
				}, !r && Object(n.createElement)(o.Tooltip, {
					text: A,
					position: k
				}, Object(n.createElement)(o.Button, {
					"aria-expanded": r,
					className: "components-color-palette__item components-circular-option-picker__option",
					onClick: function() {
						i(!0)
					},
					"aria-label": A,
					style: {
						color: w || "transparent"
					}
				}, Object(n.createElement)("span", {
					className: "components-color-palette__custom-color-gradient"
				}))), r && Object(n.createElement)(o.Tooltip, {
					text: A,
					position: k
				}, Object(n.createElement)(o.Button, {
					"aria-expanded": r,
					className: "components-color-palette__item components-circular-option-picker__option",
					onClick: I,
					"aria-label": A,
					style: {
						color: w || "transparent"
					}
				}, Object(n.createElement)("span", {
					className: "components-color-palette__custom-color-gradient"
				})))), r && Object(n.createElement)(o.Popover, {
					position: "bottom center",
					className: "generate-component-color-picker",
					onClose: I,
					focusOnMount: "container"
				}, Object(n.createElement)(o.BaseControl, {
					key: p,
					label: e.label && !T ? e.label : "",
					id: "generate-color-input-field",
					className: "generate-color-input-main-label"
				}, Object(n.createElement)(o.ColorPicker, {
					key: p,
					color: function(e) {
						if (String(e).startsWith("var(")) {
							var a = e.match(/\(([^)]+)\)/);
							if (a) {
								var t = getComputedStyle(document.documentElement).getPropertyValue(a[1]);
								t && (e = t)
							}
						}
						return e
					}(w) || "",
					onChangeComplete: function(e) {
						var a;
						if (void 0 === e.rgb || 1 === e.rgb.a) a = e.hex;
						else {
							var t = e.rgb,
								r = t.r,
								i = t.g,
								n = t.b,
								o = t.a;
							a = "rgba(".concat(r, ", ").concat(i, ", ").concat(n, ", ").concat(o, ")")
						}
						x(a)
					},
					disableAlpha: !M.alpha
				}), Object(n.createElement)("div", {
					className: "generate-color-option-area"
				}, !!M.showVarName && Object(n.createElement)("div", {
					className: "generate-color-input--css-var-name-wrapper"
				}, Object(n.createElement)(o.TextControl, {
					label: Object(g.__)("CSS Variable Name", "generatepress"),
					disabled: !!v,
					type: "text",
					value: C || "",
					onChange: function(e) {
						j(e)
					}
				}), !!v && Object(n.createElement)(o.Tooltip, {
					text: Object(g.__)("Changing this name will remove its color from elements already using it.", "generatepress")
				}, Object(n.createElement)(o.Button, {
					onClick: function() {
						window.alert(Object(g.__)("Changing this name will break styles that are using it to define its color.", "generatepress")), m(!1), setTimeout((function() {
							document.querySelector(".generate-color-input--css-var-name-wrapper input").focus()
						}), 10)
					}
				}, u("unlock")))), Object(n.createElement)("div", {
					className: "generate-color-input-wrapper"
				}, Object(n.createElement)(o.TextControl, {
					id: "generate-color-input-field",
					className: "generate-color-input",
					type: "text",
					value: w || "",
					onChange: function(e) {
						!e.startsWith("#") && /^([0-9A-F]{3}){1,2}$/i.test(e) && (e = "#" + e), x(e), S(!0)
					}
				}), !!L && Object(n.createElement)(o.Button, {
					isSmall: !0,
					isSecondary: !0,
					className: "components-color-clear-color",
					onClick: function() {
						var a = e.defaultValue ? e.defaultValue : "";
						wp.customize.control(e.customizerSetting.id).setting.set(a), setTimeout((function() {
							document.querySelector(".generate-color-input-wrapper input").focus()
						}), 10)
					}
				}, Object(g.__)("Default", "generatepress"))), !!B && Object(n.createElement)(o.BaseControl, {
					className: "generate-component-color-picker-palette"
				}, Object(n.createElement)(o.ColorPalette, {
					colors: F,
					value: w,
					onChange: function(e) {
						void 0 === e && (e = ""), x(e), f(e), setTimeout((function() {
							document.querySelector(".generate-color-input-wrapper input").focus()
						}), 10)
					},
					disableCustomColors: !0,
					clearable: !1
				}))))))
			},
			f = s((function(e) {
				var a = !e.choices.hideLabel || void 0 === e.choices.hideLabel;
				return Object(n.createElement)(n.Fragment, null, Object(n.createElement)("span", {
					className: "description customize-control-description",
					dangerouslySetInnerHTML: {
						__html: e.description
					}
				}), Object(n.createElement)("div", {
					className: "customize-control-notifications-container",
					ref: e.setNotificationContainer
				}), Object(n.createElement)(o.BaseControl, {
					className: "generate-component-color-picker-wrapper",
					"data-toggleId": e.choices.toggleId ? e.choices.toggleId : null
				}, !!e.label && a && Object(n.createElement)("div", {
					className: "generate-color-component-label"
				}, Object(n.createElement)("span", null, e.label)), Object(n.createElement)(p, i()({}, e, {
					onChange: function(a) {
						var t;
						t = a, wp.customize.control(e.customizerSetting.id).setting.set(t)
					}
				}))))
			}), {
				getWrapper: function() {
					var e = this.container[0];
					if (this.params.choices.wrapper) {
						var a = document.getElementById(this.params.choices.wrapper + "--wrapper");
						a && (e = a, this.container[0].style.display = "none")
					}
					return this.params.choices.toggleId && e.setAttribute("data-toggleId", this.params.choices.toggleId), e
				}
			});
		wp.customize.controlConstructor["generate-color-control"] = f;
		var d = t(8),
			y = t.n(d),
			v = t(7),
			m = t.n(v),
			h = t(5),
			b = t.n(h),
			O = (t(21), t(10));

		function S() {
			return (S = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var t = arguments[a];
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				}
				return e
			}).apply(this, arguments)
		}
		t(35);
		var w = t(3),
			C = t.n(w),
			x = function() {
				function e(e) {
					var a = this;
					this._insertTag = function(e) {
						var t;
						t = 0 === a.tags.length ? a.prepend ? a.container.firstChild : a.before : a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(e, t), a.tags.push(e)
					}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.before = null
				}
				var a = e.prototype;
				return a.hydrate = function(e) {
					e.forEach(this._insertTag)
				}, a.insert = function(e) {
					this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
						var a = document.createElement("style");
						return a.setAttribute("data-emotion", e.key), void 0 !== e.nonce && a.setAttribute("nonce", e.nonce), a.appendChild(document.createTextNode("")), a.setAttribute("data-s", ""), a
					}(this));
					var a = this.tags[this.tags.length - 1];
					if (this.isSpeedy) {
						var t = function(e) {
							if (e.sheet) return e.sheet;
							for (var a = 0; a < document.styleSheets.length; a++)
								if (document.styleSheets[a].ownerNode === e) return document.styleSheets[a]
						}(a);
						try {
							t.insertRule(e, t.cssRules.length)
						} catch (e) {}
					} else a.appendChild(document.createTextNode(e));
					this.ctr++
				}, a.flush = function() {
					this.tags.forEach((function(e) {
						return e.parentNode.removeChild(e)
					})), this.tags = [], this.ctr = 0
				}, e
			}(),
			j = "-ms-",
			M = "-moz-",
			E = "-webkit-",
			k = "comm",
			N = "decl",
			P = Math.abs,
			_ = String.fromCharCode;

		function T(e) {
			return e.trim()
		}

		function I(e, a, t) {
			return e.replace(a, t)
		}

		function A(e, a) {
			return e.indexOf(a)
		}

		function B(e, a) {
			return 0 | e.charCodeAt(a)
		}

		function L(e, a, t) {
			return e.slice(a, t)
		}

		function F(e) {
			return e.length
		}

		function V(e) {
			return e.length
		}

		function D(e, a) {
			return a.push(e), e
		}
		var R = 1,
			z = 1,
			H = 0,
			G = 0,
			U = 0,
			W = "";

		function K(e, a, t, r, i, n, o) {
			return {
				value: e,
				root: a,
				parent: t,
				type: r,
				props: i,
				children: n,
				line: R,
				column: z,
				length: o,
				return: ""
			}
		}

		function $(e, a, t) {
			return K(e, a.root, a.parent, t, a.props, a.children, 0)
		}

		function Y() {
			return U = G > 0 ? B(W, --G) : 0, z--, 10 === U && (z = 1, R--), U
		}

		function J() {
			return U = G < H ? B(W, G++) : 0, z++, 10 === U && (z = 1, R++), U
		}

		function q() {
			return B(W, G)
		}

		function Z() {
			return G
		}

		function Q(e, a) {
			return L(W, e, a)
		}

		function X(e) {
			switch (e) {
				case 0:
				case 9:
				case 10:
				case 13:
				case 32:
					return 5;
				case 33:
				case 43:
				case 44:
				case 47:
				case 62:
				case 64:
				case 126:
				case 59:
				case 123:
				case 125:
					return 4;
				case 58:
					return 3;
				case 34:
				case 39:
				case 40:
				case 91:
					return 2;
				case 41:
				case 93:
					return 1
			}
			return 0
		}

		function ee(e) {
			return R = z = 1, H = F(W = e), G = 0, []
		}

		function ae(e) {
			return W = "", e
		}

		function te(e) {
			return T(Q(G - 1, function e(a) {
				for (; J();) switch (U) {
					case a:
						return G;
					case 34:
					case 39:
						return e(34 === a || 39 === a ? a : U);
					case 40:
						41 === a && e(a);
						break;
					case 92:
						J()
				}
				return G
			}(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
		}

		function re(e) {
			for (;
				(U = q()) && U < 33;) J();
			return X(e) > 2 || X(U) > 3 ? "" : " "
		}

		function ie(e, a) {
			for (; --a && J() && !(U < 48 || U > 102 || U > 57 && U < 65 || U > 70 && U < 97););
			return Q(e, Z() + (a < 6 && 32 == q() && 32 == J()))
		}

		function ne(e, a) {
			for (; J() && e + U !== 57 && (e + U !== 84 || 47 !== q()););
			return "/*" + Q(a, G - 1) + "*" + _(47 === e ? e : J())
		}

		function oe(e) {
			for (; !X(q());) J();
			return Q(e, G)
		}

		function se(e) {
			return ae(function e(a, t, r, i, n, o, s, l, c) {
				for (var u = 0, g = 0, p = s, f = 0, d = 0, y = 0, v = 1, m = 1, h = 1, b = 0, O = "", S = n, w = o, C = i, x = O; m;) switch (y = b, b = J()) {
					case 34:
					case 39:
					case 91:
					case 40:
						x += te(b);
						break;
					case 9:
					case 10:
					case 13:
					case 32:
						x += re(y);
						break;
					case 92:
						x += ie(Z() - 1, 7);
						continue;
					case 47:
						switch (q()) {
							case 42:
							case 47:
								D(ce(ne(J(), Z()), t, r), c);
								break;
							default:
								x += "/"
						}
						break;
					case 123 * v:
						l[u++] = F(x) * h;
					case 125 * v:
					case 59:
					case 0:
						switch (b) {
							case 0:
							case 125:
								m = 0;
							case 59 + g:
								d > 0 && F(x) - p && D(d > 32 ? ue(x + ";", i, r, p - 1) : ue(I(x, " ", "") + ";", i, r, p - 2), c);
								break;
							case 59:
								x += ";";
							default:
								if (D(C = le(x, t, r, u, g, n, l, O, S = [], w = [], p), o), 123 === b)
									if (0 === g) e(x, t, C, C, S, o, p, l, w);
									else switch (f) {
										case 100:
										case 109:
										case 115:
											e(a, C, C, i && D(le(a, C, C, 0, 0, n, l, O, n, S = [], p), w), n, w, p, l, i ? S : w);
											break;
										default:
											e(x, C, C, C, [""], w, p, l, w)
									}
						}
						u = g = d = 0, v = h = 1, O = x = "", p = s;
						break;
					case 58:
						p = 1 + F(x), d = y;
					default:
						if (v < 1)
							if (123 == b) --v;
							else if (125 == b && 0 == v++ && 125 == Y()) continue;
						switch (x += _(b), b * v) {
							case 38:
								h = g > 0 ? 1 : (x += "\f", -1);
								break;
							case 44:
								l[u++] = (F(x) - 1) * h, h = 1;
								break;
							case 64:
								45 === q() && (x += te(J())), f = q(), g = F(O = x += oe(Z())), b++;
								break;
							case 45:
								45 === y && 2 == F(x) && (v = 0)
						}
				}
				return o
			}("", null, null, null, [""], e = ee(e), 0, [0], e))
		}

		function le(e, a, t, r, i, n, o, s, l, c, u) {
			for (var g = i - 1, p = 0 === i ? n : [""], f = V(p), d = 0, y = 0, v = 0; d < r; ++d)
				for (var m = 0, h = L(e, g + 1, g = P(y = o[d])), b = e; m < f; ++m)(b = T(y > 0 ? p[m] + " " + h : I(h, /&\f/g, p[m]))) && (l[v++] = b);
			return K(e, a, t, 0 === i ? "rule" : s, l, c, u)
		}

		function ce(e, a, t) {
			return K(e, a, t, k, _(U), L(e, 2, -2), 0)
		}

		function ue(e, a, t, r) {
			return K(e, a, t, N, L(e, 0, r), L(e, r + 1, -1), r)
		}

		function ge(e, a) {
			for (var t = "", r = V(e), i = 0; i < r; i++) t += a(e[i], i, e, a) || "";
			return t
		}

		function pe(e, a, t, r) {
			switch (e.type) {
				case "@import":
				case N:
					return e.return = e.return || e.value;
				case k:
					return "";
				case "rule":
					e.value = e.props.join(",")
			}
			return F(t = ge(e.children, r)) ? e.return = e.value + "{" + t + "}" : ""
		}

		function fe(e) {
			var a = V(e);
			return function(t, r, i, n) {
				for (var o = "", s = 0; s < a; s++) o += e[s](t, r, i, n) || "";
				return o
			}
		}

		function de(e) {
			return function(a) {
				a.root || (a = a.return) && e(a)
			}
		}

		function ye(e, a, t, r) {
			if (!e.return) switch (e.type) {
				case N:
					e.return = function e(a, t) {
						switch (function(e, a) {
								return (((a << 2 ^ B(e, 0)) << 2 ^ B(e, 1)) << 2 ^ B(e, 2)) << 2 ^ B(e, 3)
							}(a, t)) {
							case 5103:
								return E + "print-" + a + a;
							case 5737:
							case 4201:
							case 3177:
							case 3433:
							case 1641:
							case 4457:
							case 2921:
							case 5572:
							case 6356:
							case 5844:
							case 3191:
							case 6645:
							case 3005:
							case 6391:
							case 5879:
							case 5623:
							case 6135:
							case 4599:
							case 4855:
							case 4215:
							case 6389:
							case 5109:
							case 5365:
							case 5621:
							case 3829:
								return E + a + a;
							case 5349:
							case 4246:
							case 4810:
							case 6968:
							case 2756:
								return E + a + M + a + j + a + a;
							case 6828:
							case 4268:
								return E + a + j + a + a;
							case 6165:
								return E + a + j + "flex-" + a + a;
							case 5187:
								return E + a + I(a, /(\w+).+(:[^]+)/, E + "box-$1$2" + j + "flex-$1$2") + a;
							case 5443:
								return E + a + j + "flex-item-" + I(a, /flex-|-self/, "") + a;
							case 4675:
								return E + a + j + "flex-line-pack" + I(a, /align-content|flex-|-self/, "") + a;
							case 5548:
								return E + a + j + I(a, "shrink", "negative") + a;
							case 5292:
								return E + a + j + I(a, "basis", "preferred-size") + a;
							case 6060:
								return E + "box-" + I(a, "-grow", "") + E + a + j + I(a, "grow", "positive") + a;
							case 4554:
								return E + I(a, /([^-])(transform)/g, "$1" + E + "$2") + a;
							case 6187:
								return I(I(I(a, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), a, "") + a;
							case 5495:
							case 3959:
								return I(a, /(image-set\([^]*)/, E + "$1$`$1");
							case 4968:
								return I(I(a, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + a + a;
							case 4095:
							case 3583:
							case 4068:
							case 2532:
								return I(a, /(.+)-inline(.+)/, E + "$1$2") + a;
							case 8116:
							case 7059:
							case 5753:
							case 5535:
							case 5445:
							case 5701:
							case 4933:
							case 4677:
							case 5533:
							case 5789:
							case 5021:
							case 4765:
								if (F(a) - 1 - t > 6) switch (B(a, t + 1)) {
									case 109:
										if (45 !== B(a, t + 4)) break;
									case 102:
										return I(a, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + M + (108 == B(a, t + 3) ? "$3" : "$2-$3")) + a;
									case 115:
										return ~A(a, "stretch") ? e(I(a, "stretch", "fill-available"), t) + a : a
								}
								break;
							case 4949:
								if (115 !== B(a, t + 1)) break;
							case 6444:
								switch (B(a, F(a) - 3 - (~A(a, "!important") && 10))) {
									case 107:
										return I(a, ":", ":" + E) + a;
									case 101:
										return I(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + E + (45 === B(a, 14) ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + j + "$2box$3") + a
								}
								break;
							case 5936:
								switch (B(a, t + 11)) {
									case 114:
										return E + a + j + I(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
									case 108:
										return E + a + j + I(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
									case 45:
										return E + a + j + I(a, /[svh]\w+-[tblr]{2}/, "lr") + a
								}
								return E + a + j + a + a
						}
						return a
					}(e.value, e.length);
					break;
				case "@keyframes":
					return ge([$(I(e.value, "@", "@" + E), e, "")], r);
				case "rule":
					if (e.length) return function(e, a) {
						return e.map(a).join("")
					}(e.props, (function(a) {
						switch (function(e, a) {
								return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e
							}(a)) {
							case ":read-only":
							case ":read-write":
								return ge([$(I(a, /:(read-\w+)/, ":-moz-$1"), e, "")], r);
							case "::placeholder":
								return ge([$(I(a, /:(plac\w+)/, ":" + E + "input-$1"), e, ""), $(I(a, /:(plac\w+)/, ":-moz-$1"), e, ""), $(I(a, /:(plac\w+)/, j + "input-$1"), e, "")], r)
						}
						return ""
					}))
			}
		}
		var ve = function(e) {
				var a = {};
				return function(t) {
					return void 0 === a[t] && (a[t] = e(t)), a[t]
				}
			},
			me = new WeakMap,
			he = function(e) {
				if ("rule" === e.type && e.parent && e.length) {
					for (var a = e.value, t = e.parent, r = e.column === t.column && e.line === t.line;
						"rule" !== t.type;)
						if (!(t = t.parent)) return;
					if ((1 !== e.props.length || 58 === a.charCodeAt(0) || me.get(t)) && !r) {
						me.set(e, !0);
						for (var i = [], n = function(e, a) {
								return ae(function(e, a) {
									var t = -1,
										r = 44;
									do {
										switch (X(r)) {
											case 0:
												38 === r && 12 === q() && (a[t] = 1), e[t] += oe(G - 1);
												break;
											case 2:
												e[t] += te(r);
												break;
											case 4:
												if (44 === r) {
													e[++t] = 58 === q() ? "&\f" : "", a[t] = e[t].length;
													break
												}
												default:
													e[t] += _(r)
										}
									} while (r = J());
									return e
								}(ee(e), a))
							}(a, i), o = t.props, s = 0, l = 0; s < n.length; s++)
							for (var c = 0; c < o.length; c++, l++) e.props[l] = i[s] ? n[s].replace(/&\f/g, o[c]) : o[c] + " " + n[s]
					}
				}
			},
			be = function(e) {
				if ("decl" === e.type) {
					var a = e.value;
					108 === a.charCodeAt(0) && 98 === a.charCodeAt(2) && (e.return = "", e.value = "")
				}
			},
			Oe = [ye],
			Se = function(e) {
				var a = e.key;
				if ("css" === a) {
					var t = document.querySelectorAll("style[data-emotion]:not([data-s])");
					Array.prototype.forEach.call(t, (function(e) {
						-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
					}))
				}
				var r, i, n = e.stylisPlugins || Oe,
					o = {},
					s = [];
				r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + a + ' "]'), (function(e) {
					for (var a = e.getAttribute("data-emotion").split(" "), t = 1; t < a.length; t++) o[a[t]] = !0;
					s.push(e)
				}));
				var l, c = [he, be],
					u = [pe, de((function(e) {
						l.insert(e)
					}))],
					g = fe(c.concat(n, u));
				i = function(e, a, t, r) {
					l = t, ge(se(e ? e + "{" + a.styles + "}" : a.styles), g), r && (p.inserted[a.name] = !0)
				};
				var p = {
					key: a,
					sheet: new x({
						key: a,
						container: r,
						nonce: e.nonce,
						speedy: e.speedy,
						prepend: e.prepend
					}),
					nonce: e.nonce,
					inserted: o,
					registered: {},
					insert: i
				};
				return p.sheet.hydrate(s), p
			};

		function we(e, a, t) {
			var r = "";
			return t.split(" ").forEach((function(t) {
				void 0 !== e[t] ? a.push(e[t] + ";") : r += t + " "
			})), r
		}
		t(19);
		var Ce = function(e, a, t) {
				var r = e.key + "-" + a.name;
				if (!1 === t && void 0 === e.registered[r] && (e.registered[r] = a.styles), void 0 === e.inserted[a.name]) {
					var i = a;
					do {
						e.insert(a === i ? "." + r : "", i, e.sheet, !0), i = i.next
					} while (void 0 !== i)
				}
			},
			xe = function(e) {
				for (var a, t = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) a = 1540483477 * (65535 & (a = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (a >>> 16) << 16), t = 1540483477 * (65535 & (a ^= a >>> 24)) + (59797 * (a >>> 16) << 16) ^ 1540483477 * (65535 & t) + (59797 * (t >>> 16) << 16);
				switch (i) {
					case 3:
						t ^= (255 & e.charCodeAt(r + 2)) << 16;
					case 2:
						t ^= (255 & e.charCodeAt(r + 1)) << 8;
					case 1:
						t = 1540483477 * (65535 & (t ^= 255 & e.charCodeAt(r))) + (59797 * (t >>> 16) << 16)
				}
				return (((t = 1540483477 * (65535 & (t ^= t >>> 13)) + (59797 * (t >>> 16) << 16)) ^ t >>> 15) >>> 0).toString(36)
			},
			je = {
				animationIterationCount: 1,
				borderImageOutset: 1,
				borderImageSlice: 1,
				borderImageWidth: 1,
				boxFlex: 1,
				boxFlexGroup: 1,
				boxOrdinalGroup: 1,
				columnCount: 1,
				columns: 1,
				flex: 1,
				flexGrow: 1,
				flexPositive: 1,
				flexShrink: 1,
				flexNegative: 1,
				flexOrder: 1,
				gridRow: 1,
				gridRowEnd: 1,
				gridRowSpan: 1,
				gridRowStart: 1,
				gridColumn: 1,
				gridColumnEnd: 1,
				gridColumnSpan: 1,
				gridColumnStart: 1,
				msGridRow: 1,
				msGridRowSpan: 1,
				msGridColumn: 1,
				msGridColumnSpan: 1,
				fontWeight: 1,
				lineHeight: 1,
				opacity: 1,
				order: 1,
				orphans: 1,
				tabSize: 1,
				widows: 1,
				zIndex: 1,
				zoom: 1,
				WebkitLineClamp: 1,
				fillOpacity: 1,
				floodOpacity: 1,
				stopOpacity: 1,
				strokeDasharray: 1,
				strokeDashoffset: 1,
				strokeMiterlimit: 1,
				strokeOpacity: 1,
				strokeWidth: 1
			},
			Me = /[A-Z]|^ms/g,
			Ee = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
			ke = function(e) {
				return 45 === e.charCodeAt(1)
			},
			Ne = function(e) {
				return null != e && "boolean" != typeof e
			},
			Pe = ve((function(e) {
				return ke(e) ? e : e.replace(Me, "-$&").toLowerCase()
			})),
			_e = function(e, a) {
				switch (e) {
					case "animation":
					case "animationName":
						if ("string" == typeof a) return a.replace(Ee, (function(e, a, t) {
							return Ie = {
								name: a,
								styles: t,
								next: Ie
							}, a
						}))
				}
				return 1 === je[e] || ke(e) || "number" != typeof a || 0 === a ? a : a + "px"
			};

		function Te(e, a, t) {
			if (null == t) return "";
			if (void 0 !== t.__emotion_styles) return t;
			switch (typeof t) {
				case "boolean":
					return "";
				case "object":
					if (1 === t.anim) return Ie = {
						name: t.name,
						styles: t.styles,
						next: Ie
					}, t.name;
					if (void 0 !== t.styles) {
						var r = t.next;
						if (void 0 !== r)
							for (; void 0 !== r;) Ie = {
								name: r.name,
								styles: r.styles,
								next: Ie
							}, r = r.next;
						return t.styles + ";"
					}
					return function(e, a, t) {
						var r = "";
						if (Array.isArray(t))
							for (var i = 0; i < t.length; i++) r += Te(e, a, t[i]) + ";";
						else
							for (var n in t) {
								var o = t[n];
								if ("object" != typeof o) null != a && void 0 !== a[o] ? r += n + "{" + a[o] + "}" : Ne(o) && (r += Pe(n) + ":" + _e(n, o) + ";");
								else if (!Array.isArray(o) || "string" != typeof o[0] || null != a && void 0 !== a[o[0]]) {
									var s = Te(e, a, o);
									switch (n) {
										case "animation":
										case "animationName":
											r += Pe(n) + ":" + s + ";";
											break;
										default:
											r += n + "{" + s + "}"
									}
								} else
									for (var l = 0; l < o.length; l++) Ne(o[l]) && (r += Pe(n) + ":" + _e(n, o[l]) + ";")
							}
						return r
					}(e, a, t);
				case "function":
					if (void 0 !== e) {
						var i = Ie,
							n = t(e);
						return Ie = i, Te(e, a, n)
					}
			}
			if (null == a) return t;
			var o = a[t];
			return void 0 !== o ? o : t
		}
		var Ie, Ae = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
			Be = function(e, a, t) {
				if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
				var r = !0,
					i = "";
				Ie = void 0;
				var n = e[0];
				null == n || void 0 === n.raw ? (r = !1, i += Te(t, a, n)) : i += n[0];
				for (var o = 1; o < e.length; o++) i += Te(t, a, e[o]), r && (i += n[o]);
				Ae.lastIndex = 0;
				for (var s, l = ""; null !== (s = Ae.exec(i));) l += "-" + s[1];
				return {
					name: xe(i) + l,
					styles: i,
					next: Ie
				}
			},
			Le = Object.prototype.hasOwnProperty,
			Fe = Object(w.createContext)("undefined" != typeof HTMLElement ? Se({
				key: "css"
			}) : null),
			Ve = (Fe.Provider, function(e) {
				return Object(w.forwardRef)((function(a, t) {
					var r = Object(w.useContext)(Fe);
					return e(a, r, t)
				}))
			}),
			De = Object(w.createContext)({}),
			Re = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
			ze = function(e, a) {
				var t = {};
				for (var r in a) Le.call(a, r) && (t[r] = a[r]);
				return t[Re] = e, t
			},
			He = Ve((function(e, a, t) {
				var r = e.css;
				"string" == typeof r && void 0 !== a.registered[r] && (r = a.registered[r]);
				var i = e[Re],
					n = [r],
					o = "";
				"string" == typeof e.className ? o = we(a.registered, n, e.className) : null != e.className && (o = e.className + " ");
				var s = Be(n, void 0, "function" == typeof r || Array.isArray(r) ? Object(w.useContext)(De) : void 0);
				Ce(a, s, "string" == typeof i), o += a.key + "-" + s.name;
				var l = {};
				for (var c in e) Le.call(e, c) && "css" !== c && c !== Re && (l[c] = e[c]);
				return l.ref = t, l.className = o, Object(w.createElement)(i, l)
			})),
			Ge = function(e, a) {
				var t = arguments;
				if (null == a || !Le.call(a, "css")) return w.createElement.apply(void 0, t);
				var r = t.length,
					i = new Array(r);
				i[0] = He, i[1] = ze(e, a);
				for (var n = 2; n < r; n++) i[n] = t[n];
				return w.createElement.apply(null, i)
			};

		function Ue() {
			for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
			return Be(a)
		}
		var We = function e(a) {
			for (var t = a.length, r = 0, i = ""; r < t; r++) {
				var n = a[r];
				if (null != n) {
					var o = void 0;
					switch (typeof n) {
						case "boolean":
							break;
						case "object":
							if (Array.isArray(n)) o = e(n);
							else
								for (var s in o = "", n) n[s] && s && (o && (o += " "), o += s);
							break;
						default:
							o = n
					}
					o && (i && (i += " "), i += o)
				}
			}
			return i
		};

		function Ke(e, a, t) {
			var r = [],
				i = we(e, r, t);
			return r.length < 2 ? t : i + a(r)
		}
		var $e = Ve((function(e, a) {
			var t = function() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					var i = Be(t, a.registered);
					return Ce(a, i, !1), a.key + "-" + i.name
				},
				r = {
					css: t,
					cx: function() {
						for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
						return Ke(a.registered, t, We(r))
					},
					theme: Object(w.useContext)(De)
				};
			return e.children(r)
		}));

		function Ye(e, a) {
			if (null == e) return {};
			var t, r, i = function(e, a) {
				if (null == e) return {};
				var t, r, i = {},
					n = Object.keys(e);
				for (r = 0; r < n.length; r++) t = n[r], a.indexOf(t) >= 0 || (i[t] = e[t]);
				return i
			}(e, a);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				for (r = 0; r < n.length; r++) t = n[r], a.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
			}
			return i
		}

		function Je(e) {
			return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		var qe = t(17),
			Ze = t.n(qe);

		function Qe(e, a) {
			if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
		}

		function Xe(e, a) {
			for (var t = 0; t < a.length; t++) {
				var r = a[t];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function ea(e, a, t) {
			return a && Xe(e.prototype, a), t && Xe(e, t), e
		}

		function aa(e, a) {
			return (aa = Object.setPrototypeOf || function(e, a) {
				return e.__proto__ = a, e
			})(e, a)
		}

		function ta(e, a) {
			if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(a && a.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), a && aa(e, a)
		}

		function ra(e, a, t) {
			return a in e ? Object.defineProperty(e, a, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[a] = t, e
		}
		var ia = t(18);

		function na(e, a, t) {
			return a in e ? Object.defineProperty(e, a, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[a] = t, e
		}

		function oa(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				a && (r = r.filter((function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function sa(e) {
			for (var a = 1; a < arguments.length; a++) {
				var t = null != arguments[a] ? arguments[a] : {};
				a % 2 ? oa(Object(t), !0).forEach((function(a) {
					na(e, a, t[a])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach((function(a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
				}))
			}
			return e
		}

		function la(e) {
			return (la = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function ca(e, a) {
			return !a || "object" != typeof a && "function" != typeof a ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : a
		}

		function ua(e) {
			var a = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var t, r = la(e);
				if (a) {
					var i = la(this).constructor;
					t = Reflect.construct(r, arguments, i)
				} else t = r.apply(this, arguments);
				return ca(this, t)
			}
		}
		var ga = function() {};

		function pa(e, a) {
			return a ? "-" === a[0] ? e + a : e + "__" + a : e
		}

		function fa(e, a, t) {
			var r = [t];
			if (a && e)
				for (var i in a) a.hasOwnProperty(i) && a[i] && r.push("".concat(pa(e, i)));
			return r.filter((function(e) {
				return e
			})).map((function(e) {
				return String(e).trim()
			})).join(" ")
		}
		var da = function(e) {
				return Array.isArray(e) ? e.filter(Boolean) : "object" === Je(e) && null !== e ? [e] : []
			},
			ya = function(e) {
				return e.className, e.clearValue, e.cx, e.getStyles, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, sa({}, Ye(e, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]))
			};

		function va(e) {
			return [document.documentElement, document.body, window].indexOf(e) > -1
		}

		function ma(e) {
			return va(e) ? window.pageYOffset : e.scrollTop
		}

		function ha(e, a) {
			va(e) ? window.scrollTo(0, a) : e.scrollTop = a
		}

		function ba(e, a, t, r) {
			return t * ((e = e / r - 1) * e * e + 1) + a
		}

		function Oa(e, a) {
			var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
				r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ga,
				i = ma(e),
				n = a - i,
				o = 10,
				s = 0;

			function l() {
				var a = ba(s += o, i, n, t);
				ha(e, a), s < t ? window.requestAnimationFrame(l) : r(e)
			}
			l()
		}

		function Sa() {
			try {
				return document.createEvent("TouchEvent"), !0
			} catch (e) {
				return !1
			}
		}
		var wa = !1,
			Ca = {
				get passive() {
					return wa = !0
				}
			},
			xa = "undefined" != typeof window ? window : {};
		xa.addEventListener && xa.removeEventListener && (xa.addEventListener("p", ga, Ca), xa.removeEventListener("p", ga, !1));
		var ja = wa;

		function Ma(e) {
			var a = e.maxHeight,
				t = e.menuEl,
				r = e.minHeight,
				i = e.placement,
				n = e.shouldScroll,
				o = e.isFixedPosition,
				s = e.theme.spacing,
				l = function(e) {
					var a = getComputedStyle(e),
						t = "absolute" === a.position,
						r = /(auto|scroll)/,
						i = document.documentElement;
					if ("fixed" === a.position) return i;
					for (var n = e; n = n.parentElement;)
						if (a = getComputedStyle(n), (!t || "static" !== a.position) && r.test(a.overflow + a.overflowY + a.overflowX)) return n;
					return i
				}(t),
				c = {
					placement: "bottom",
					maxHeight: a
				};
			if (!t || !t.offsetParent) return c;
			var u = l.getBoundingClientRect().height,
				g = t.getBoundingClientRect(),
				p = g.bottom,
				f = g.height,
				d = g.top,
				y = t.offsetParent.getBoundingClientRect().top,
				v = window.innerHeight,
				m = ma(l),
				h = parseInt(getComputedStyle(t).marginBottom, 10),
				b = parseInt(getComputedStyle(t).marginTop, 10),
				O = y - b,
				S = v - d,
				w = O + m,
				C = u - m - d,
				x = p - v + m + h,
				j = m + d - b;
			switch (i) {
				case "auto":
				case "bottom":
					if (S >= f) return {
						placement: "bottom",
						maxHeight: a
					};
					if (C >= f && !o) return n && Oa(l, x, 160), {
						placement: "bottom",
						maxHeight: a
					};
					if (!o && C >= r || o && S >= r) return n && Oa(l, x, 160), {
						placement: "bottom",
						maxHeight: o ? S - h : C - h
					};
					if ("auto" === i || o) {
						var M = a,
							E = o ? O : w;
						return E >= r && (M = Math.min(E - h - s.controlHeight, a)), {
							placement: "top",
							maxHeight: M
						}
					}
					if ("bottom" === i) return n && ha(l, x), {
						placement: "bottom",
						maxHeight: a
					};
					break;
				case "top":
					if (O >= f) return {
						placement: "top",
						maxHeight: a
					};
					if (w >= f && !o) return n && Oa(l, j, 160), {
						placement: "top",
						maxHeight: a
					};
					if (!o && w >= r || o && O >= r) {
						var k = a;
						return (!o && w >= r || o && O >= r) && (k = o ? O - b : w - b), n && Oa(l, j, 160), {
							placement: "top",
							maxHeight: k
						}
					}
					return {
						placement: "bottom", maxHeight: a
					};
				default:
					throw new Error('Invalid placement provided "'.concat(i, '".'))
			}
			return c
		}
		var Ea = function(e) {
				return "auto" === e ? "bottom" : e
			},
			ka = Object(w.createContext)({
				getPortalPlacement: null
			}),
			Na = function(e) {
				ta(t, e);
				var a = ua(t);

				function t() {
					var e;
					Qe(this, t);
					for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
					return (e = a.call.apply(a, [this].concat(i))).state = {
						maxHeight: e.props.maxMenuHeight,
						placement: null
					}, e.getPlacement = function(a) {
						var t = e.props,
							r = t.minMenuHeight,
							i = t.maxMenuHeight,
							n = t.menuPlacement,
							o = t.menuPosition,
							s = t.menuShouldScrollIntoView,
							l = t.theme;
						if (a) {
							var c = "fixed" === o,
								u = Ma({
									maxHeight: i,
									menuEl: a,
									minHeight: r,
									placement: n,
									shouldScroll: s && !c,
									isFixedPosition: c,
									theme: l
								}),
								g = e.context.getPortalPlacement;
							g && g(u), e.setState(u)
						}
					}, e.getUpdatedProps = function() {
						var a = e.props.menuPlacement,
							t = e.state.placement || Ea(a);
						return sa(sa({}, e.props), {}, {
							placement: t,
							maxHeight: e.state.maxHeight
						})
					}, e
				}
				return ea(t, [{
					key: "render",
					value: function() {
						return (0, this.props.children)({
							ref: this.getPlacement,
							placerProps: this.getUpdatedProps()
						})
					}
				}]), t
			}(w.Component);
		Na.contextType = ka;
		var Pa = function(e) {
				var a = e.theme,
					t = a.spacing.baseUnit;
				return {
					color: a.colors.neutral40,
					padding: "".concat(2 * t, "px ").concat(3 * t, "px"),
					textAlign: "center"
				}
			},
			_a = Pa,
			Ta = Pa,
			Ia = function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps;
				return Ge("div", S({
					css: i("noOptionsMessage", e),
					className: r({
						"menu-notice": !0,
						"menu-notice--no-options": !0
					}, t)
				}, n), a)
			};
		Ia.defaultProps = {
			children: "No options"
		};
		var Aa = function(e) {
			var a = e.children,
				t = e.className,
				r = e.cx,
				i = e.getStyles,
				n = e.innerProps;
			return Ge("div", S({
				css: i("loadingMessage", e),
				className: r({
					"menu-notice": !0,
					"menu-notice--loading": !0
				}, t)
			}, n), a)
		};
		Aa.defaultProps = {
			children: "Loading..."
		};
		var Ba, La, Fa, Va = function(e) {
				ta(t, e);
				var a = ua(t);

				function t() {
					var e;
					Qe(this, t);
					for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
					return (e = a.call.apply(a, [this].concat(i))).state = {
						placement: null
					}, e.getPortalPlacement = function(a) {
						var t = a.placement;
						t !== Ea(e.props.menuPlacement) && e.setState({
							placement: t
						})
					}, e
				}
				return ea(t, [{
					key: "render",
					value: function() {
						var e = this.props,
							a = e.appendTo,
							t = e.children,
							r = e.className,
							i = e.controlElement,
							n = e.cx,
							o = e.innerProps,
							s = e.menuPlacement,
							l = e.menuPosition,
							c = e.getStyles,
							u = "fixed" === l;
						if (!a && !u || !i) return null;
						var g = this.state.placement || Ea(s),
							p = function(e) {
								var a = e.getBoundingClientRect();
								return {
									bottom: a.bottom,
									height: a.height,
									left: a.left,
									right: a.right,
									top: a.top,
									width: a.width
								}
							}(i),
							f = u ? 0 : window.pageYOffset,
							d = p[g] + f,
							y = Ge("div", S({
								css: c("menuPortal", {
									offset: d,
									position: l,
									rect: p
								}),
								className: n({
									"menu-portal": !0
								}, r)
							}, o), t);
						return Ge(ka.Provider, {
							value: {
								getPortalPlacement: this.getPortalPlacement
							}
						}, a ? Object(ia.createPortal)(y, a) : y)
					}
				}]), t
			}(w.Component),
			Da = {
				name: "8mmkcg",
				styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
			},
			Ra = function(e) {
				var a = e.size,
					t = Ye(e, ["size"]);
				return Ge("svg", S({
					height: a,
					width: a,
					viewBox: "0 0 20 20",
					"aria-hidden": "true",
					focusable: "false",
					css: Da
				}, t))
			},
			za = function(e) {
				return Ge(Ra, S({
					size: 20
				}, e), Ge("path", {
					d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
				}))
			},
			Ha = function(e) {
				return Ge(Ra, S({
					size: 20
				}, e), Ge("path", {
					d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
				}))
			},
			Ga = function(e) {
				var a = e.isFocused,
					t = e.theme,
					r = t.spacing.baseUnit,
					i = t.colors;
				return {
					label: "indicatorContainer",
					color: a ? i.neutral60 : i.neutral20,
					display: "flex",
					padding: 2 * r,
					transition: "color 150ms",
					":hover": {
						color: a ? i.neutral80 : i.neutral40
					}
				}
			},
			Ua = Ga,
			Wa = Ga,
			Ka = function() {
				var e = Ue.apply(void 0, arguments),
					a = "animation-" + e.name;
				return {
					name: a,
					styles: "@keyframes " + a + "{" + e.styles + "}",
					anim: 1,
					toString: function() {
						return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
					}
				}
			}(Ba || (La = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Fa || (Fa = La.slice(0)), Ba = Object.freeze(Object.defineProperties(La, {
				raw: {
					value: Object.freeze(Fa)
				}
			})))),
			$a = function(e) {
				var a = e.delay,
					t = e.offset;
				return Ge("span", {
					css: Ue({
						animation: "".concat(Ka, " 1s ease-in-out ").concat(a, "ms infinite;"),
						backgroundColor: "currentColor",
						borderRadius: "1em",
						display: "inline-block",
						marginLeft: t ? "1em" : null,
						height: "1em",
						verticalAlign: "top",
						width: "1em"
					}, "", "")
				})
			},
			Ya = function(e) {
				var a = e.className,
					t = e.cx,
					r = e.getStyles,
					i = e.innerProps,
					n = e.isRtl;
				return Ge("div", S({
					css: r("loadingIndicator", e),
					className: t({
						indicator: !0,
						"loading-indicator": !0
					}, a)
				}, i), Ge($a, {
					delay: 0,
					offset: n
				}), Ge($a, {
					delay: 160,
					offset: !0
				}), Ge($a, {
					delay: 320,
					offset: !n
				}))
			};
		Ya.defaultProps = {
			size: 4
		};
		var Ja = function(e) {
				return {
					label: "input",
					background: 0,
					border: 0,
					fontSize: "inherit",
					opacity: e ? 0 : 1,
					outline: 0,
					padding: 0,
					color: "inherit"
				}
			},
			qa = function(e) {
				var a = e.children,
					t = e.innerProps;
				return Ge("div", t, a)
			},
			Za = qa,
			Qa = qa,
			Xa = function(e) {
				var a = e.children,
					t = e.className,
					r = e.components,
					i = e.cx,
					n = e.data,
					o = e.getStyles,
					s = e.innerProps,
					l = e.isDisabled,
					c = e.removeProps,
					u = e.selectProps,
					g = r.Container,
					p = r.Label,
					f = r.Remove;
				return Ge($e, null, (function(r) {
					var d = r.css,
						y = r.cx;
					return Ge(g, {
						data: n,
						innerProps: sa({
							className: y(d(o("multiValue", e)), i({
								"multi-value": !0,
								"multi-value--is-disabled": l
							}, t))
						}, s),
						selectProps: u
					}, Ge(p, {
						data: n,
						innerProps: {
							className: y(d(o("multiValueLabel", e)), i({
								"multi-value__label": !0
							}, t))
						},
						selectProps: u
					}, a), Ge(f, {
						data: n,
						innerProps: sa({
							className: y(d(o("multiValueRemove", e)), i({
								"multi-value__remove": !0
							}, t))
						}, c),
						selectProps: u
					}))
				}))
			};
		Xa.defaultProps = {
			cropWithEllipsis: !0
		};
		var et = {
			ClearIndicator: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps;
				return Ge("div", S({
					css: i("clearIndicator", e),
					className: r({
						indicator: !0,
						"clear-indicator": !0
					}, t)
				}, n), a || Ge(za, null))
			},
			Control: function(e) {
				var a = e.children,
					t = e.cx,
					r = e.getStyles,
					i = e.className,
					n = e.isDisabled,
					o = e.isFocused,
					s = e.innerRef,
					l = e.innerProps,
					c = e.menuIsOpen;
				return Ge("div", S({
					ref: s,
					css: r("control", e),
					className: t({
						control: !0,
						"control--is-disabled": n,
						"control--is-focused": o,
						"control--menu-is-open": c
					}, i)
				}, l), a)
			},
			DropdownIndicator: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps;
				return Ge("div", S({
					css: i("dropdownIndicator", e),
					className: r({
						indicator: !0,
						"dropdown-indicator": !0
					}, t)
				}, n), a || Ge(Ha, null))
			},
			DownChevron: Ha,
			CrossIcon: za,
			Group: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.Heading,
					o = e.headingProps,
					s = e.innerProps,
					l = e.label,
					c = e.theme,
					u = e.selectProps;
				return Ge("div", S({
					css: i("group", e),
					className: r({
						group: !0
					}, t)
				}, s), Ge(n, S({}, o, {
					selectProps: u,
					theme: c,
					getStyles: i,
					cx: r
				}), l), Ge("div", null, a))
			},
			GroupHeading: function(e) {
				var a = e.getStyles,
					t = e.cx,
					r = e.className,
					i = ya(e);
				i.data;
				var n = Ye(i, ["data"]);
				return Ge("div", S({
					css: a("groupHeading", e),
					className: t({
						"group-heading": !0
					}, r)
				}, n))
			},
			IndicatorsContainer: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.innerProps,
					n = e.getStyles;
				return Ge("div", S({
					css: n("indicatorsContainer", e),
					className: r({
						indicators: !0
					}, t)
				}, i), a)
			},
			IndicatorSeparator: function(e) {
				var a = e.className,
					t = e.cx,
					r = e.getStyles,
					i = e.innerProps;
				return Ge("span", S({}, i, {
					css: r("indicatorSeparator", e),
					className: t({
						"indicator-separator": !0
					}, a)
				}))
			},
			Input: function(e) {
				var a = e.className,
					t = e.cx,
					r = e.getStyles,
					i = ya(e),
					n = i.innerRef,
					o = i.isDisabled,
					s = i.isHidden,
					l = Ye(i, ["innerRef", "isDisabled", "isHidden"]);
				return Ge("div", {
					css: r("input", e)
				}, Ge(Ze.a, S({
					className: t({
						input: !0
					}, a),
					inputRef: n,
					inputStyle: Ja(s),
					disabled: o
				}, l)))
			},
			LoadingIndicator: Ya,
			Menu: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerRef,
					o = e.innerProps;
				return Ge("div", S({
					css: i("menu", e),
					className: r({
						menu: !0
					}, t),
					ref: n
				}, o), a)
			},
			MenuList: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps,
					o = e.innerRef,
					s = e.isMulti;
				return Ge("div", S({
					css: i("menuList", e),
					className: r({
						"menu-list": !0,
						"menu-list--is-multi": s
					}, t),
					ref: o
				}, n), a)
			},
			MenuPortal: Va,
			LoadingMessage: Aa,
			NoOptionsMessage: Ia,
			MultiValue: Xa,
			MultiValueContainer: Za,
			MultiValueLabel: Qa,
			MultiValueRemove: function(e) {
				var a = e.children,
					t = e.innerProps;
				return Ge("div", t, a || Ge(za, {
					size: 14
				}))
			},
			Option: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.isDisabled,
					o = e.isFocused,
					s = e.isSelected,
					l = e.innerRef,
					c = e.innerProps;
				return Ge("div", S({
					css: i("option", e),
					className: r({
						option: !0,
						"option--is-disabled": n,
						"option--is-focused": o,
						"option--is-selected": s
					}, t),
					ref: l
				}, c), a)
			},
			Placeholder: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps;
				return Ge("div", S({
					css: i("placeholder", e),
					className: r({
						placeholder: !0
					}, t)
				}, n), a)
			},
			SelectContainer: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.innerProps,
					o = e.isDisabled,
					s = e.isRtl;
				return Ge("div", S({
					css: i("container", e),
					className: r({
						"--is-disabled": o,
						"--is-rtl": s
					}, t)
				}, n), a)
			},
			SingleValue: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.getStyles,
					n = e.isDisabled,
					o = e.innerProps;
				return Ge("div", S({
					css: i("singleValue", e),
					className: r({
						"single-value": !0,
						"single-value--is-disabled": n
					}, t)
				}, o), a)
			},
			ValueContainer: function(e) {
				var a = e.children,
					t = e.className,
					r = e.cx,
					i = e.innerProps,
					n = e.isMulti,
					o = e.getStyles,
					s = e.hasValue;
				return Ge("div", S({
					css: o("valueContainer", e),
					className: r({
						"value-container": !0,
						"value-container--is-multi": n,
						"value-container--has-value": s
					}, t)
				}, i), a)
			}
		};

		function at(e, a) {
			(null == a || a > e.length) && (a = e.length);
			for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
			return r
		}

		function tt(e) {
			return function(e) {
				if (Array.isArray(e)) return at(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}(e) || function(e, a) {
				if (e) {
					if ("string" == typeof e) return at(e, void 0);
					var t = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? at(e, void 0) : void 0
				}
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		var rt = Number.isNaN || function(e) {
			return "number" == typeof e && e != e
		};

		function it(e, a) {
			if (e.length !== a.length) return !1;
			for (var t = 0; t < e.length; t++)
				if (!((r = e[t]) === (i = a[t]) || rt(r) && rt(i))) return !1;
			var r, i;
			return !0
		}
		for (var nt = {
				name: "7pg0cj-a11yText",
				styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
			}, ot = function(e) {
				return Ge("span", S({
					css: nt
				}, e))
			}, st = {
				guidance: function(e) {
					var a = e.isSearchable,
						t = e.isMulti,
						r = e.isDisabled,
						i = e.tabSelectsValue;
					switch (e.context) {
						case "menu":
							return "Use Up and Down to choose options".concat(r ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
						case "input":
							return "".concat(e["aria-label"] || "Select", " is focused ").concat(a ? ",type to refine list" : "", ", press Down to open the menu, ").concat(t ? " press left to focus selected values" : "");
						case "value":
							return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
						default:
							return ""
					}
				},
				onChange: function(e) {
					var a = e.action,
						t = e.label,
						r = void 0 === t ? "" : t,
						i = e.isDisabled;
					switch (a) {
						case "deselect-option":
						case "pop-value":
						case "remove-value":
							return "option ".concat(r, ", deselected.");
						case "select-option":
							return "option ".concat(r, i ? " is disabled. Select another option." : ", selected.");
						default:
							return ""
					}
				},
				onFocus: function(e) {
					var a = e.context,
						t = e.focused,
						r = void 0 === t ? {} : t,
						i = e.options,
						n = e.label,
						o = void 0 === n ? "" : n,
						s = e.selectValue,
						l = e.isDisabled,
						c = e.isSelected,
						u = function(e, a) {
							return e && e.length ? "".concat(e.indexOf(a) + 1, " of ").concat(e.length) : ""
						};
					if ("value" === a && s) return "value ".concat(o, " focused, ").concat(u(s, r), ".");
					if ("menu" === a) {
						var g = l ? " disabled" : "",
							p = "".concat(c ? "selected" : "focused").concat(g);
						return "option ".concat(o, " ").concat(p, ", ").concat(u(i, r), ".")
					}
					return ""
				},
				onFilter: function(e) {
					var a = e.inputValue,
						t = e.resultsMessage;
					return "".concat(t).concat(a ? " for search term " + a : "", ".")
				}
			}, lt = function(e) {
				var a = e.ariaSelection,
					t = e.focusedOption,
					r = e.focusedValue,
					i = e.focusableOptions,
					n = e.isFocused,
					o = e.selectValue,
					s = e.selectProps,
					l = s.ariaLiveMessages,
					c = s.getOptionLabel,
					u = s.inputValue,
					g = s.isMulti,
					p = s.isOptionDisabled,
					f = s.isSearchable,
					d = s.menuIsOpen,
					y = s.options,
					v = s.screenReaderStatus,
					m = s.tabSelectsValue,
					h = s["aria-label"],
					b = s["aria-live"],
					O = Object(w.useMemo)((function() {
						return sa(sa({}, st), l || {})
					}), [l]),
					S = Object(w.useMemo)((function() {
						var e, t = "";
						if (a && O.onChange) {
							var r = a.option,
								i = a.removedValue,
								n = a.value,
								o = i || r || (e = n, Array.isArray(e) ? null : e),
								s = sa({
									isDisabled: o && p(o),
									label: o ? c(o) : ""
								}, a);
							t = O.onChange(s)
						}
						return t
					}), [a, p, c, O]),
					x = Object(w.useMemo)((function() {
						var e = "",
							a = t || r,
							i = !!(t && o && o.includes(t));
						if (a && O.onFocus) {
							var n = {
								focused: a,
								label: c(a),
								isDisabled: p(a),
								isSelected: i,
								options: y,
								context: a === t ? "menu" : "value",
								selectValue: o
							};
							e = O.onFocus(n)
						}
						return e
					}), [t, r, c, p, O, y, o]),
					j = Object(w.useMemo)((function() {
						var e = "";
						if (d && y.length && O.onFilter) {
							var a = v({
								count: i.length
							});
							e = O.onFilter({
								inputValue: u,
								resultsMessage: a
							})
						}
						return e
					}), [i, u, d, O, y, v]),
					M = Object(w.useMemo)((function() {
						var e = "";
						if (O.guidance) {
							var a = r ? "value" : d ? "menu" : "input";
							e = O.guidance({
								"aria-label": h,
								context: a,
								isDisabled: t && p(t),
								isMulti: g,
								isSearchable: f,
								tabSelectsValue: m
							})
						}
						return e
					}), [h, t, r, g, p, f, d, O, m]),
					E = "".concat(x, " ").concat(j, " ").concat(M);
				return Ge(ot, {
					"aria-live": b,
					"aria-atomic": "false",
					"aria-relevant": "additions text"
				}, n && Ge(C.a.Fragment, null, Ge("span", {
					id: "aria-selection"
				}, S), Ge("span", {
					id: "aria-context"
				}, E)))
			}, ct = [{
				base: "A",
				letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
			}, {
				base: "AA",
				letters: "Ꜳ"
			}, {
				base: "AE",
				letters: "ÆǼǢ"
			}, {
				base: "AO",
				letters: "Ꜵ"
			}, {
				base: "AU",
				letters: "Ꜷ"
			}, {
				base: "AV",
				letters: "ꜸꜺ"
			}, {
				base: "AY",
				letters: "Ꜽ"
			}, {
				base: "B",
				letters: "BⒷＢḂḄḆɃƂƁ"
			}, {
				base: "C",
				letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
			}, {
				base: "D",
				letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
			}, {
				base: "DZ",
				letters: "ǱǄ"
			}, {
				base: "Dz",
				letters: "ǲǅ"
			}, {
				base: "E",
				letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
			}, {
				base: "F",
				letters: "FⒻＦḞƑꝻ"
			}, {
				base: "G",
				letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
			}, {
				base: "H",
				letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
			}, {
				base: "I",
				letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
			}, {
				base: "J",
				letters: "JⒿＪĴɈ"
			}, {
				base: "K",
				letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
			}, {
				base: "L",
				letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
			}, {
				base: "LJ",
				letters: "Ǉ"
			}, {
				base: "Lj",
				letters: "ǈ"
			}, {
				base: "M",
				letters: "MⓂＭḾṀṂⱮƜ"
			}, {
				base: "N",
				letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
			}, {
				base: "NJ",
				letters: "Ǌ"
			}, {
				base: "Nj",
				letters: "ǋ"
			}, {
				base: "O",
				letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
			}, {
				base: "OI",
				letters: "Ƣ"
			}, {
				base: "OO",
				letters: "Ꝏ"
			}, {
				base: "OU",
				letters: "Ȣ"
			}, {
				base: "P",
				letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
			}, {
				base: "Q",
				letters: "QⓆＱꝖꝘɊ"
			}, {
				base: "R",
				letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
			}, {
				base: "S",
				letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
			}, {
				base: "T",
				letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
			}, {
				base: "TZ",
				letters: "Ꜩ"
			}, {
				base: "U",
				letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
			}, {
				base: "V",
				letters: "VⓋＶṼṾƲꝞɅ"
			}, {
				base: "VY",
				letters: "Ꝡ"
			}, {
				base: "W",
				letters: "WⓌＷẀẂŴẆẄẈⱲ"
			}, {
				base: "X",
				letters: "XⓍＸẊẌ"
			}, {
				base: "Y",
				letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
			}, {
				base: "Z",
				letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
			}, {
				base: "a",
				letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
			}, {
				base: "aa",
				letters: "ꜳ"
			}, {
				base: "ae",
				letters: "æǽǣ"
			}, {
				base: "ao",
				letters: "ꜵ"
			}, {
				base: "au",
				letters: "ꜷ"
			}, {
				base: "av",
				letters: "ꜹꜻ"
			}, {
				base: "ay",
				letters: "ꜽ"
			}, {
				base: "b",
				letters: "bⓑｂḃḅḇƀƃɓ"
			}, {
				base: "c",
				letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
			}, {
				base: "d",
				letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
			}, {
				base: "dz",
				letters: "ǳǆ"
			}, {
				base: "e",
				letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
			}, {
				base: "f",
				letters: "fⓕｆḟƒꝼ"
			}, {
				base: "g",
				letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
			}, {
				base: "h",
				letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
			}, {
				base: "hv",
				letters: "ƕ"
			}, {
				base: "i",
				letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
			}, {
				base: "j",
				letters: "jⓙｊĵǰɉ"
			}, {
				base: "k",
				letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
			}, {
				base: "l",
				letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
			}, {
				base: "lj",
				letters: "ǉ"
			}, {
				base: "m",
				letters: "mⓜｍḿṁṃɱɯ"
			}, {
				base: "n",
				letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
			}, {
				base: "nj",
				letters: "ǌ"
			}, {
				base: "o",
				letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
			}, {
				base: "oi",
				letters: "ƣ"
			}, {
				base: "ou",
				letters: "ȣ"
			}, {
				base: "oo",
				letters: "ꝏ"
			}, {
				base: "p",
				letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
			}, {
				base: "q",
				letters: "qⓠｑɋꝗꝙ"
			}, {
				base: "r",
				letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
			}, {
				base: "s",
				letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
			}, {
				base: "t",
				letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
			}, {
				base: "tz",
				letters: "ꜩ"
			}, {
				base: "u",
				letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
			}, {
				base: "v",
				letters: "vⓥｖṽṿʋꝟʌ"
			}, {
				base: "vy",
				letters: "ꝡ"
			}, {
				base: "w",
				letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
			}, {
				base: "x",
				letters: "xⓧｘẋẍ"
			}, {
				base: "y",
				letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
			}, {
				base: "z",
				letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
			}], ut = new RegExp("[" + ct.map((function(e) {
				return e.letters
			})).join("") + "]", "g"), gt = {}, pt = 0; pt < ct.length; pt++)
			for (var ft = ct[pt], dt = 0; dt < ft.letters.length; dt++) gt[ft.letters[dt]] = ft.base;
		var yt = function(e) {
				return e.replace(ut, (function(e) {
					return gt[e]
				}))
			},
			vt = function(e, a) {
				var t;
				void 0 === a && (a = it);
				var r, i = [],
					n = !1;
				return function() {
					for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
					return n && t === this && a(o, i) || (r = e.apply(this, o), n = !0, t = this, i = o), r
				}
			}(yt),
			mt = function(e) {
				return e.replace(/^\s+|\s+$/g, "")
			},
			ht = function(e) {
				return "".concat(e.label, " ").concat(e.value)
			};

		function bt(e) {
			e.in, e.out, e.onExited, e.appear, e.enter, e.exit;
			var a = e.innerRef;
			e.emotion;
			var t = Ye(e, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);
			return Ge("input", S({
				ref: a
			}, t, {
				css: Ue({
					label: "dummyInput",
					background: 0,
					border: 0,
					fontSize: "inherit",
					outline: 0,
					padding: 0,
					width: 1,
					color: "transparent",
					left: -100,
					opacity: 0,
					position: "relative",
					transform: "scale(0)"
				}, "", "")
			}))
		}
		var Ot = ["boxSizing", "height", "overflow", "paddingRight", "position"],
			St = {
				boxSizing: "border-box",
				overflow: "hidden",
				position: "relative",
				height: "100%"
			};

		function wt(e) {
			e.preventDefault()
		}

		function Ct(e) {
			e.stopPropagation()
		}

		function xt() {
			var e = this.scrollTop,
				a = this.scrollHeight,
				t = e + this.offsetHeight;
			0 === e ? this.scrollTop = 1 : t === a && (this.scrollTop = e - 1)
		}

		function jt() {
			return "ontouchstart" in window || navigator.maxTouchPoints
		}
		var Mt = !("undefined" == typeof window || !window.document || !window.document.createElement),
			Et = 0,
			kt = {
				capture: !1,
				passive: !1
			},
			Nt = function() {
				return document.activeElement && document.activeElement.blur()
			},
			Pt = {
				name: "1kfdb0e",
				styles: "position:fixed;left:0;bottom:0;right:0;top:0"
			};

		function _t(e) {
			var a = e.children,
				t = e.lockEnabled,
				r = e.captureEnabled,
				i = function(e) {
					var a = e.isEnabled,
						t = e.onBottomArrive,
						r = e.onBottomLeave,
						i = e.onTopArrive,
						n = e.onTopLeave,
						o = Object(w.useRef)(!1),
						s = Object(w.useRef)(!1),
						l = Object(w.useRef)(0),
						c = Object(w.useRef)(null),
						u = Object(w.useCallback)((function(e, a) {
							if (null !== c.current) {
								var l = c.current,
									u = l.scrollTop,
									g = l.scrollHeight,
									p = l.clientHeight,
									f = c.current,
									d = a > 0,
									y = g - p - u,
									v = !1;
								y > a && o.current && (r && r(e), o.current = !1), d && s.current && (n && n(e), s.current = !1), d && a > y ? (t && !o.current && t(e), f.scrollTop = g, v = !0, o.current = !0) : !d && -a > u && (i && !s.current && i(e), f.scrollTop = 0, v = !0, s.current = !0), v && function(e) {
									e.preventDefault(), e.stopPropagation()
								}(e)
							}
						}), []),
						g = Object(w.useCallback)((function(e) {
							u(e, e.deltaY)
						}), [u]),
						p = Object(w.useCallback)((function(e) {
							l.current = e.changedTouches[0].clientY
						}), []),
						f = Object(w.useCallback)((function(e) {
							var a = l.current - e.changedTouches[0].clientY;
							u(e, a)
						}), [u]),
						d = Object(w.useCallback)((function(e) {
							if (e) {
								var a = !!ja && {
									passive: !1
								};
								"function" == typeof e.addEventListener && e.addEventListener("wheel", g, a), "function" == typeof e.addEventListener && e.addEventListener("touchstart", p, a), "function" == typeof e.addEventListener && e.addEventListener("touchmove", f, a)
							}
						}), [f, p, g]),
						y = Object(w.useCallback)((function(e) {
							e && ("function" == typeof e.removeEventListener && e.removeEventListener("wheel", g, !1), "function" == typeof e.removeEventListener && e.removeEventListener("touchstart", p, !1), "function" == typeof e.removeEventListener && e.removeEventListener("touchmove", f, !1))
						}), [f, p, g]);
					return Object(w.useEffect)((function() {
							if (a) {
								var e = c.current;
								return d(e),
									function() {
										y(e)
									}
							}
						}), [a, d, y]),
						function(e) {
							c.current = e
						}
				}({
					isEnabled: void 0 === r || r,
					onBottomArrive: e.onBottomArrive,
					onBottomLeave: e.onBottomLeave,
					onTopArrive: e.onTopArrive,
					onTopLeave: e.onTopLeave
				}),
				n = function(e) {
					var a = e.isEnabled,
						t = e.accountForScrollbars,
						r = void 0 === t || t,
						i = Object(w.useRef)({}),
						n = Object(w.useRef)(null),
						o = Object(w.useCallback)((function(e) {
							if (Mt) {
								var a = document.body,
									t = a && a.style;
								if (r && Ot.forEach((function(e) {
										var a = t && t[e];
										i.current[e] = a
									})), r && Et < 1) {
									var n = parseInt(i.current.paddingRight, 10) || 0,
										o = document.body ? document.body.clientWidth : 0,
										s = window.innerWidth - o + n || 0;
									Object.keys(St).forEach((function(e) {
										var a = St[e];
										t && (t[e] = a)
									})), t && (t.paddingRight = "".concat(s, "px"))
								}
								a && jt() && (a.addEventListener("touchmove", wt, kt), e && (e.addEventListener("touchstart", xt, kt), e.addEventListener("touchmove", Ct, kt))), Et += 1
							}
						}), []),
						s = Object(w.useCallback)((function(e) {
							if (Mt) {
								var a = document.body,
									t = a && a.style;
								Et = Math.max(Et - 1, 0), r && Et < 1 && Ot.forEach((function(e) {
									var a = i.current[e];
									t && (t[e] = a)
								})), a && jt() && (a.removeEventListener("touchmove", wt, kt), e && (e.removeEventListener("touchstart", xt, kt), e.removeEventListener("touchmove", Ct, kt)))
							}
						}), []);
					return Object(w.useEffect)((function() {
							if (a) {
								var e = n.current;
								return o(e),
									function() {
										s(e)
									}
							}
						}), [a, o, s]),
						function(e) {
							n.current = e
						}
				}({
					isEnabled: t
				});
			return Ge(C.a.Fragment, null, t && Ge("div", {
				onClick: Nt,
				css: Pt
			}), a((function(e) {
				i(e), n(e)
			})))
		}
		var Tt = {
				clearIndicator: Wa,
				container: function(e) {
					var a = e.isDisabled;
					return {
						label: "container",
						direction: e.isRtl ? "rtl" : null,
						pointerEvents: a ? "none" : null,
						position: "relative"
					}
				},
				control: function(e) {
					var a = e.isDisabled,
						t = e.isFocused,
						r = e.theme,
						i = r.colors,
						n = r.borderRadius,
						o = r.spacing;
					return {
						label: "control",
						alignItems: "center",
						backgroundColor: a ? i.neutral5 : i.neutral0,
						borderColor: a ? i.neutral10 : t ? i.primary : i.neutral20,
						borderRadius: n,
						borderStyle: "solid",
						borderWidth: 1,
						boxShadow: t ? "0 0 0 1px ".concat(i.primary) : null,
						cursor: "default",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						minHeight: o.controlHeight,
						outline: "0 !important",
						position: "relative",
						transition: "all 100ms",
						"&:hover": {
							borderColor: t ? i.primary : i.neutral30
						}
					}
				},
				dropdownIndicator: Ua,
				group: function(e) {
					var a = e.theme.spacing;
					return {
						paddingBottom: 2 * a.baseUnit,
						paddingTop: 2 * a.baseUnit
					}
				},
				groupHeading: function(e) {
					var a = e.theme.spacing;
					return {
						label: "group",
						color: "#999",
						cursor: "default",
						display: "block",
						fontSize: "75%",
						fontWeight: "500",
						marginBottom: "0.25em",
						paddingLeft: 3 * a.baseUnit,
						paddingRight: 3 * a.baseUnit,
						textTransform: "uppercase"
					}
				},
				indicatorsContainer: function() {
					return {
						alignItems: "center",
						alignSelf: "stretch",
						display: "flex",
						flexShrink: 0
					}
				},
				indicatorSeparator: function(e) {
					var a = e.isDisabled,
						t = e.theme,
						r = t.spacing.baseUnit,
						i = t.colors;
					return {
						label: "indicatorSeparator",
						alignSelf: "stretch",
						backgroundColor: a ? i.neutral10 : i.neutral20,
						marginBottom: 2 * r,
						marginTop: 2 * r,
						width: 1
					}
				},
				input: function(e) {
					var a = e.isDisabled,
						t = e.theme,
						r = t.spacing,
						i = t.colors;
					return {
						margin: r.baseUnit / 2,
						paddingBottom: r.baseUnit / 2,
						paddingTop: r.baseUnit / 2,
						visibility: a ? "hidden" : "visible",
						color: i.neutral80
					}
				},
				loadingIndicator: function(e) {
					var a = e.isFocused,
						t = e.size,
						r = e.theme,
						i = r.colors,
						n = r.spacing.baseUnit;
					return {
						label: "loadingIndicator",
						color: a ? i.neutral60 : i.neutral20,
						display: "flex",
						padding: 2 * n,
						transition: "color 150ms",
						alignSelf: "center",
						fontSize: t,
						lineHeight: 1,
						marginRight: t,
						textAlign: "center",
						verticalAlign: "middle"
					}
				},
				loadingMessage: Ta,
				menu: function(e) {
					var a, t = e.placement,
						r = e.theme,
						i = r.borderRadius,
						n = r.spacing,
						o = r.colors;
					return ra(a = {
						label: "menu"
					}, function(e) {
						return e ? {
							bottom: "top",
							top: "bottom"
						} [e] : "bottom"
					}(t), "100%"), ra(a, "backgroundColor", o.neutral0), ra(a, "borderRadius", i), ra(a, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), ra(a, "marginBottom", n.menuGutter), ra(a, "marginTop", n.menuGutter), ra(a, "position", "absolute"), ra(a, "width", "100%"), ra(a, "zIndex", 1), a
				},
				menuList: function(e) {
					var a = e.maxHeight,
						t = e.theme.spacing.baseUnit;
					return {
						maxHeight: a,
						overflowY: "auto",
						paddingBottom: t,
						paddingTop: t,
						position: "relative",
						WebkitOverflowScrolling: "touch"
					}
				},
				menuPortal: function(e) {
					var a = e.rect,
						t = e.offset,
						r = e.position;
					return {
						left: a.left,
						position: r,
						top: t,
						width: a.width,
						zIndex: 1
					}
				},
				multiValue: function(e) {
					var a = e.theme,
						t = a.spacing,
						r = a.borderRadius;
					return {
						label: "multiValue",
						backgroundColor: a.colors.neutral10,
						borderRadius: r / 2,
						display: "flex",
						margin: t.baseUnit / 2,
						minWidth: 0
					}
				},
				multiValueLabel: function(e) {
					var a = e.theme,
						t = a.borderRadius,
						r = a.colors,
						i = e.cropWithEllipsis;
					return {
						borderRadius: t / 2,
						color: r.neutral80,
						fontSize: "85%",
						overflow: "hidden",
						padding: 3,
						paddingLeft: 6,
						textOverflow: i ? "ellipsis" : null,
						whiteSpace: "nowrap"
					}
				},
				multiValueRemove: function(e) {
					var a = e.theme,
						t = a.spacing,
						r = a.borderRadius,
						i = a.colors;
					return {
						alignItems: "center",
						borderRadius: r / 2,
						backgroundColor: e.isFocused && i.dangerLight,
						display: "flex",
						paddingLeft: t.baseUnit,
						paddingRight: t.baseUnit,
						":hover": {
							backgroundColor: i.dangerLight,
							color: i.danger
						}
					}
				},
				noOptionsMessage: _a,
				option: function(e) {
					var a = e.isDisabled,
						t = e.isFocused,
						r = e.isSelected,
						i = e.theme,
						n = i.spacing,
						o = i.colors;
					return {
						label: "option",
						backgroundColor: r ? o.primary : t ? o.primary25 : "transparent",
						color: a ? o.neutral20 : r ? o.neutral0 : "inherit",
						cursor: "default",
						display: "block",
						fontSize: "inherit",
						padding: "".concat(2 * n.baseUnit, "px ").concat(3 * n.baseUnit, "px"),
						width: "100%",
						userSelect: "none",
						WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
						":active": {
							backgroundColor: !a && (r ? o.primary : o.primary50)
						}
					}
				},
				placeholder: function(e) {
					var a = e.theme,
						t = a.spacing;
					return {
						label: "placeholder",
						color: a.colors.neutral50,
						marginLeft: t.baseUnit / 2,
						marginRight: t.baseUnit / 2,
						position: "absolute",
						top: "50%",
						transform: "translateY(-50%)"
					}
				},
				singleValue: function(e) {
					var a = e.isDisabled,
						t = e.theme,
						r = t.spacing,
						i = t.colors;
					return {
						label: "singleValue",
						color: a ? i.neutral40 : i.neutral80,
						marginLeft: r.baseUnit / 2,
						marginRight: r.baseUnit / 2,
						maxWidth: "calc(100% - ".concat(2 * r.baseUnit, "px)"),
						overflow: "hidden",
						position: "absolute",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
						top: "50%",
						transform: "translateY(-50%)"
					}
				},
				valueContainer: function(e) {
					var a = e.theme.spacing;
					return {
						alignItems: "center",
						display: "flex",
						flex: 1,
						flexWrap: "wrap",
						padding: "".concat(a.baseUnit / 2, "px ").concat(2 * a.baseUnit, "px"),
						WebkitOverflowScrolling: "touch",
						position: "relative",
						overflow: "hidden"
					}
				}
			},
			It = {
				borderRadius: 4,
				colors: {
					primary: "#2684FF",
					primary75: "#4C9AFF",
					primary50: "#B2D4FF",
					primary25: "#DEEBFF",
					danger: "#DE350B",
					dangerLight: "#FFBDAD",
					neutral0: "hsl(0, 0%, 100%)",
					neutral5: "hsl(0, 0%, 95%)",
					neutral10: "hsl(0, 0%, 90%)",
					neutral20: "hsl(0, 0%, 80%)",
					neutral30: "hsl(0, 0%, 70%)",
					neutral40: "hsl(0, 0%, 60%)",
					neutral50: "hsl(0, 0%, 50%)",
					neutral60: "hsl(0, 0%, 40%)",
					neutral70: "hsl(0, 0%, 30%)",
					neutral80: "hsl(0, 0%, 20%)",
					neutral90: "hsl(0, 0%, 10%)"
				},
				spacing: {
					baseUnit: 4,
					controlHeight: 38,
					menuGutter: 8
				}
			},
			At = {
				"aria-live": "polite",
				backspaceRemovesValue: !0,
				blurInputOnSelect: Sa(),
				captureMenuScroll: !Sa(),
				closeMenuOnSelect: !0,
				closeMenuOnScroll: !1,
				components: {},
				controlShouldRenderValue: !0,
				escapeClearsValue: !1,
				filterOption: function(e, a) {
					var t = sa({
							ignoreCase: !0,
							ignoreAccents: !0,
							stringify: ht,
							trim: !0,
							matchFrom: "any"
						}, void 0),
						r = t.ignoreCase,
						i = t.ignoreAccents,
						n = t.stringify,
						o = t.trim,
						s = t.matchFrom,
						l = o ? mt(a) : a,
						c = o ? mt(n(e)) : n(e);
					return r && (l = l.toLowerCase(), c = c.toLowerCase()), i && (l = vt(l), c = yt(c)), "start" === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
				},
				formatGroupLabel: function(e) {
					return e.label
				},
				getOptionLabel: function(e) {
					return e.label
				},
				getOptionValue: function(e) {
					return e.value
				},
				isDisabled: !1,
				isLoading: !1,
				isMulti: !1,
				isRtl: !1,
				isSearchable: !0,
				isOptionDisabled: function(e) {
					return !!e.isDisabled
				},
				loadingMessage: function() {
					return "Loading..."
				},
				maxMenuHeight: 300,
				minMenuHeight: 140,
				menuIsOpen: !1,
				menuPlacement: "bottom",
				menuPosition: "absolute",
				menuShouldBlockScroll: !1,
				menuShouldScrollIntoView: ! function() {
					try {
						return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
					} catch (e) {
						return !1
					}
				}(),
				noOptionsMessage: function() {
					return "No options"
				},
				openMenuOnFocus: !1,
				openMenuOnClick: !0,
				options: [],
				pageSize: 5,
				placeholder: "Select...",
				screenReaderStatus: function(e) {
					var a = e.count;
					return "".concat(a, " result").concat(1 !== a ? "s" : "", " available")
				},
				styles: {},
				tabIndex: "0",
				tabSelectsValue: !0
			};

		function Bt(e, a, t, r) {
			return {
				type: "option",
				data: a,
				isDisabled: zt(e, a, t),
				isSelected: Ht(e, a, t),
				label: Dt(e, a),
				value: Rt(e, a),
				index: r
			}
		}

		function Lt(e, a) {
			return e.options.map((function(t, r) {
				if (t.options) {
					var i = t.options.map((function(t, r) {
						return Bt(e, t, a, r)
					})).filter((function(a) {
						return Vt(e, a)
					}));
					return i.length > 0 ? {
						type: "group",
						data: t,
						options: i,
						index: r
					} : void 0
				}
				var n = Bt(e, t, a, r);
				return Vt(e, n) ? n : void 0
			})).filter((function(e) {
				return !!e
			}))
		}

		function Ft(e) {
			return e.reduce((function(e, a) {
				return "group" === a.type ? e.push.apply(e, tt(a.options.map((function(e) {
					return e.data
				})))) : e.push(a.data), e
			}), [])
		}

		function Vt(e, a) {
			var t = e.inputValue,
				r = void 0 === t ? "" : t,
				i = a.data,
				n = a.isSelected,
				o = a.label,
				s = a.value;
			return (!Ut(e) || !n) && Gt(e, {
				label: o,
				value: s,
				data: i
			}, r)
		}
		var Dt = function(e, a) {
				return e.getOptionLabel(a)
			},
			Rt = function(e, a) {
				return e.getOptionValue(a)
			};

		function zt(e, a, t) {
			return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(a, t)
		}

		function Ht(e, a, t) {
			if (t.indexOf(a) > -1) return !0;
			if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(a, t);
			var r = Rt(e, a);
			return t.some((function(a) {
				return Rt(e, a) === r
			}))
		}

		function Gt(e, a, t) {
			return !e.filterOption || e.filterOption(a, t)
		}
		var Ut = function(e) {
				var a = e.hideSelectedOptions,
					t = e.isMulti;
				return void 0 === a ? t : a
			},
			Wt = 1,
			Kt = function(e) {
				ta(t, e);
				var a = ua(t);

				function t(e) {
					var r;
					return Qe(this, t), (r = a.call(this, e)).state = {
						ariaSelection: null,
						focusedOption: null,
						focusedValue: null,
						inputIsHidden: !1,
						isFocused: !1,
						selectValue: [],
						clearFocusValueOnUpdate: !1,
						inputIsHiddenAfterUpdate: void 0,
						prevProps: void 0
					}, r.blockOptionHover = !1, r.isComposing = !1, r.commonProps = void 0, r.initialTouchX = 0, r.initialTouchY = 0, r.instancePrefix = "", r.openAfterFocus = !1, r.scrollToFocusedOptionOnUpdate = !1, r.userIsDragging = void 0, r.controlRef = null, r.getControlRef = function(e) {
						r.controlRef = e
					}, r.focusedOptionRef = null, r.getFocusedOptionRef = function(e) {
						r.focusedOptionRef = e
					}, r.menuListRef = null, r.getMenuListRef = function(e) {
						r.menuListRef = e
					}, r.inputRef = null, r.getInputRef = function(e) {
						r.inputRef = e
					}, r.focus = r.focusInput, r.blur = r.blurInput, r.onChange = function(e, a) {
						var t = r.props,
							i = t.onChange,
							n = t.name;
						a.name = n, r.ariaOnChange(e, a), i(e, a)
					}, r.setValue = function(e) {
						var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "set-value",
							t = arguments.length > 2 ? arguments[2] : void 0,
							i = r.props,
							n = i.closeMenuOnSelect,
							o = i.isMulti;
						r.onInputChange("", {
							action: "set-value"
						}), n && (r.setState({
							inputIsHiddenAfterUpdate: !o
						}), r.onMenuClose()), r.setState({
							clearFocusValueOnUpdate: !0
						}), r.onChange(e, {
							action: a,
							option: t
						})
					}, r.selectOption = function(e) {
						var a = r.props,
							t = a.blurInputOnSelect,
							i = a.isMulti,
							n = a.name,
							o = r.state.selectValue,
							s = i && r.isOptionSelected(e, o),
							l = r.isOptionDisabled(e, o);
						if (s) {
							var c = r.getOptionValue(e);
							r.setValue(o.filter((function(e) {
								return r.getOptionValue(e) !== c
							})), "deselect-option", e)
						} else {
							if (l) return void r.ariaOnChange(e, {
								action: "select-option",
								name: n
							});
							i ? r.setValue([].concat(tt(o), [e]), "select-option", e) : r.setValue(e, "select-option")
						}
						t && r.blurInput()
					}, r.removeValue = function(e) {
						var a = r.props.isMulti,
							t = r.state.selectValue,
							i = r.getOptionValue(e),
							n = t.filter((function(e) {
								return r.getOptionValue(e) !== i
							})),
							o = a ? n : n[0] || null;
						r.onChange(o, {
							action: "remove-value",
							removedValue: e
						}), r.focusInput()
					}, r.clearValue = function() {
						var e = r.state.selectValue;
						r.onChange(r.props.isMulti ? [] : null, {
							action: "clear",
							removedValues: e
						})
					}, r.popValue = function() {
						var e = r.props.isMulti,
							a = r.state.selectValue,
							t = a[a.length - 1],
							i = a.slice(0, a.length - 1),
							n = e ? i : i[0] || null;
						r.onChange(n, {
							action: "pop-value",
							removedValue: t
						})
					}, r.getValue = function() {
						return r.state.selectValue
					}, r.cx = function() {
						for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
						return fa.apply(void 0, [r.props.classNamePrefix].concat(a))
					}, r.getOptionLabel = function(e) {
						return Dt(r.props, e)
					}, r.getOptionValue = function(e) {
						return Rt(r.props, e)
					}, r.getStyles = function(e, a) {
						var t = Tt[e](a);
						t.boxSizing = "border-box";
						var i = r.props.styles[e];
						return i ? i(t, a) : t
					}, r.getElementId = function(e) {
						return "".concat(r.instancePrefix, "-").concat(e)
					}, r.getComponents = function() {
						return e = r.props, sa(sa({}, et), e.components);
						var e
					}, r.buildCategorizedOptions = function() {
						return Lt(r.props, r.state.selectValue)
					}, r.getCategorizedOptions = function() {
						return r.props.menuIsOpen ? r.buildCategorizedOptions() : []
					}, r.buildFocusableOptions = function() {
						return Ft(r.buildCategorizedOptions())
					}, r.getFocusableOptions = function() {
						return r.props.menuIsOpen ? r.buildFocusableOptions() : []
					}, r.ariaOnChange = function(e, a) {
						r.setState({
							ariaSelection: sa({
								value: e
							}, a)
						})
					}, r.onMenuMouseDown = function(e) {
						0 === e.button && (e.stopPropagation(), e.preventDefault(), r.focusInput())
					}, r.onMenuMouseMove = function(e) {
						r.blockOptionHover = !1
					}, r.onControlMouseDown = function(e) {
						var a = r.props.openMenuOnClick;
						r.state.isFocused ? r.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && r.onMenuClose() : a && r.openMenu("first") : (a && (r.openAfterFocus = !0), r.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
					}, r.onDropdownIndicatorMouseDown = function(e) {
						if (!(e && "mousedown" === e.type && 0 !== e.button || r.props.isDisabled)) {
							var a = r.props,
								t = a.isMulti,
								i = a.menuIsOpen;
							r.focusInput(), i ? (r.setState({
								inputIsHiddenAfterUpdate: !t
							}), r.onMenuClose()) : r.openMenu("first"), e.preventDefault(), e.stopPropagation()
						}
					}, r.onClearIndicatorMouseDown = function(e) {
						e && "mousedown" === e.type && 0 !== e.button || (r.clearValue(), e.stopPropagation(), r.openAfterFocus = !1, "touchend" === e.type ? r.focusInput() : setTimeout((function() {
							return r.focusInput()
						})))
					}, r.onScroll = function(e) {
						"boolean" == typeof r.props.closeMenuOnScroll ? e.target instanceof HTMLElement && va(e.target) && r.props.onMenuClose() : "function" == typeof r.props.closeMenuOnScroll && r.props.closeMenuOnScroll(e) && r.props.onMenuClose()
					}, r.onCompositionStart = function() {
						r.isComposing = !0
					}, r.onCompositionEnd = function() {
						r.isComposing = !1
					}, r.onTouchStart = function(e) {
						var a = e.touches,
							t = a && a.item(0);
						t && (r.initialTouchX = t.clientX, r.initialTouchY = t.clientY, r.userIsDragging = !1)
					}, r.onTouchMove = function(e) {
						var a = e.touches,
							t = a && a.item(0);
						if (t) {
							var i = Math.abs(t.clientX - r.initialTouchX),
								n = Math.abs(t.clientY - r.initialTouchY);
							r.userIsDragging = i > 5 || n > 5
						}
					}, r.onTouchEnd = function(e) {
						r.userIsDragging || (r.controlRef && !r.controlRef.contains(e.target) && r.menuListRef && !r.menuListRef.contains(e.target) && r.blurInput(), r.initialTouchX = 0, r.initialTouchY = 0)
					}, r.onControlTouchEnd = function(e) {
						r.userIsDragging || r.onControlMouseDown(e)
					}, r.onClearIndicatorTouchEnd = function(e) {
						r.userIsDragging || r.onClearIndicatorMouseDown(e)
					}, r.onDropdownIndicatorTouchEnd = function(e) {
						r.userIsDragging || r.onDropdownIndicatorMouseDown(e)
					}, r.handleInputChange = function(e) {
						var a = e.currentTarget.value;
						r.setState({
							inputIsHiddenAfterUpdate: !1
						}), r.onInputChange(a, {
							action: "input-change"
						}), r.props.menuIsOpen || r.onMenuOpen()
					}, r.onInputFocus = function(e) {
						r.props.onFocus && r.props.onFocus(e), r.setState({
							inputIsHiddenAfterUpdate: !1,
							isFocused: !0
						}), (r.openAfterFocus || r.props.openMenuOnFocus) && r.openMenu("first"), r.openAfterFocus = !1
					}, r.onInputBlur = function(e) {
						r.menuListRef && r.menuListRef.contains(document.activeElement) ? r.inputRef.focus() : (r.props.onBlur && r.props.onBlur(e), r.onInputChange("", {
							action: "input-blur"
						}), r.onMenuClose(), r.setState({
							focusedValue: null,
							isFocused: !1
						}))
					}, r.onOptionHover = function(e) {
						r.blockOptionHover || r.state.focusedOption === e || r.setState({
							focusedOption: e
						})
					}, r.shouldHideSelectedOptions = function() {
						return Ut(r.props)
					}, r.onKeyDown = function(e) {
						var a = r.props,
							t = a.isMulti,
							i = a.backspaceRemovesValue,
							n = a.escapeClearsValue,
							o = a.inputValue,
							s = a.isClearable,
							l = a.isDisabled,
							c = a.menuIsOpen,
							u = a.onKeyDown,
							g = a.tabSelectsValue,
							p = a.openMenuOnFocus,
							f = r.state,
							d = f.focusedOption,
							y = f.focusedValue,
							v = f.selectValue;
						if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
							switch (r.blockOptionHover = !0, e.key) {
								case "ArrowLeft":
									if (!t || o) return;
									r.focusValue("previous");
									break;
								case "ArrowRight":
									if (!t || o) return;
									r.focusValue("next");
									break;
								case "Delete":
								case "Backspace":
									if (o) return;
									if (y) r.removeValue(y);
									else {
										if (!i) return;
										t ? r.popValue() : s && r.clearValue()
									}
									break;
								case "Tab":
									if (r.isComposing) return;
									if (e.shiftKey || !c || !g || !d || p && r.isOptionSelected(d, v)) return;
									r.selectOption(d);
									break;
								case "Enter":
									if (229 === e.keyCode) break;
									if (c) {
										if (!d) return;
										if (r.isComposing) return;
										r.selectOption(d);
										break
									}
									return;
								case "Escape":
									c ? (r.setState({
										inputIsHiddenAfterUpdate: !1
									}), r.onInputChange("", {
										action: "menu-close"
									}), r.onMenuClose()) : s && n && r.clearValue();
									break;
								case " ":
									if (o) return;
									if (!c) {
										r.openMenu("first");
										break
									}
									if (!d) return;
									r.selectOption(d);
									break;
								case "ArrowUp":
									c ? r.focusOption("up") : r.openMenu("last");
									break;
								case "ArrowDown":
									c ? r.focusOption("down") : r.openMenu("first");
									break;
								case "PageUp":
									if (!c) return;
									r.focusOption("pageup");
									break;
								case "PageDown":
									if (!c) return;
									r.focusOption("pagedown");
									break;
								case "Home":
									if (!c) return;
									r.focusOption("first");
									break;
								case "End":
									if (!c) return;
									r.focusOption("last");
									break;
								default:
									return
							}
							e.preventDefault()
						}
					}, r.instancePrefix = "react-select-" + (r.props.instanceId || ++Wt), r.state.selectValue = da(e.value), r
				}
				return ea(t, [{
					key: "componentDidMount",
					value: function() {
						this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput()
					}
				}, {
					key: "componentDidUpdate",
					value: function(e) {
						var a, t, r, i, n, o = this.props,
							s = o.isDisabled,
							l = o.menuIsOpen,
							c = this.state.isFocused;
						(c && !s && e.isDisabled || c && l && !e.menuIsOpen) && this.focusInput(), c && s && !e.isDisabled && this.setState({
							isFocused: !1
						}, this.onMenuClose), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (a = this.menuListRef, t = this.focusedOptionRef, r = a.getBoundingClientRect(), i = t.getBoundingClientRect(), n = t.offsetHeight / 3, i.bottom + n > r.bottom ? ha(a, Math.min(t.offsetTop + t.clientHeight - a.offsetHeight + n, a.scrollHeight)) : i.top - n < r.top && ha(a, Math.max(t.offsetTop - n, 0)), this.scrollToFocusedOptionOnUpdate = !1)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
					}
				}, {
					key: "onMenuOpen",
					value: function() {
						this.props.onMenuOpen()
					}
				}, {
					key: "onMenuClose",
					value: function() {
						this.onInputChange("", {
							action: "menu-close"
						}), this.props.onMenuClose()
					}
				}, {
					key: "onInputChange",
					value: function(e, a) {
						this.props.onInputChange(e, a)
					}
				}, {
					key: "focusInput",
					value: function() {
						this.inputRef && this.inputRef.focus()
					}
				}, {
					key: "blurInput",
					value: function() {
						this.inputRef && this.inputRef.blur()
					}
				}, {
					key: "openMenu",
					value: function(e) {
						var a = this,
							t = this.state,
							r = t.selectValue,
							i = t.isFocused,
							n = this.buildFocusableOptions(),
							o = "first" === e ? 0 : n.length - 1;
						if (!this.props.isMulti) {
							var s = n.indexOf(r[0]);
							s > -1 && (o = s)
						}
						this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
							inputIsHiddenAfterUpdate: !1,
							focusedValue: null,
							focusedOption: n[o]
						}, (function() {
							return a.onMenuOpen()
						}))
					}
				}, {
					key: "focusValue",
					value: function(e) {
						var a = this.state,
							t = a.selectValue,
							r = a.focusedValue;
						if (this.props.isMulti) {
							this.setState({
								focusedOption: null
							});
							var i = t.indexOf(r);
							r || (i = -1);
							var n = t.length - 1,
								o = -1;
							if (t.length) {
								switch (e) {
									case "previous":
										o = 0 === i ? 0 : -1 === i ? n : i - 1;
										break;
									case "next":
										i > -1 && i < n && (o = i + 1)
								}
								this.setState({
									inputIsHidden: -1 !== o,
									focusedValue: t[o]
								})
							}
						}
					}
				}, {
					key: "focusOption",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
							a = this.props.pageSize,
							t = this.state.focusedOption,
							r = this.getFocusableOptions();
						if (r.length) {
							var i = 0,
								n = r.indexOf(t);
							t || (n = -1), "up" === e ? i = n > 0 ? n - 1 : r.length - 1 : "down" === e ? i = (n + 1) % r.length : "pageup" === e ? (i = n - a) < 0 && (i = 0) : "pagedown" === e ? (i = n + a) > r.length - 1 && (i = r.length - 1) : "last" === e && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
								focusedOption: r[i],
								focusedValue: null
							})
						}
					}
				}, {
					key: "getTheme",
					value: function() {
						return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(It) : sa(sa({}, It), this.props.theme) : It
					}
				}, {
					key: "getCommonProps",
					value: function() {
						var e = this.clearValue,
							a = this.cx,
							t = this.getStyles,
							r = this.getValue,
							i = this.selectOption,
							n = this.setValue,
							o = this.props,
							s = o.isMulti,
							l = o.isRtl,
							c = o.options;
						return {
							clearValue: e,
							cx: a,
							getStyles: t,
							getValue: r,
							hasValue: this.hasValue(),
							isMulti: s,
							isRtl: l,
							options: c,
							selectOption: i,
							selectProps: o,
							setValue: n,
							theme: this.getTheme()
						}
					}
				}, {
					key: "hasValue",
					value: function() {
						return this.state.selectValue.length > 0
					}
				}, {
					key: "hasOptions",
					value: function() {
						return !!this.getFocusableOptions().length
					}
				}, {
					key: "isClearable",
					value: function() {
						var e = this.props,
							a = e.isClearable,
							t = e.isMulti;
						return void 0 === a ? t : a
					}
				}, {
					key: "isOptionDisabled",
					value: function(e, a) {
						return zt(this.props, e, a)
					}
				}, {
					key: "isOptionSelected",
					value: function(e, a) {
						return Ht(this.props, e, a)
					}
				}, {
					key: "filterOption",
					value: function(e, a) {
						return Gt(this.props, e, a)
					}
				}, {
					key: "formatOptionLabel",
					value: function(e, a) {
						if ("function" == typeof this.props.formatOptionLabel) {
							var t = this.props.inputValue,
								r = this.state.selectValue;
							return this.props.formatOptionLabel(e, {
								context: a,
								inputValue: t,
								selectValue: r
							})
						}
						return this.getOptionLabel(e)
					}
				}, {
					key: "formatGroupLabel",
					value: function(e) {
						return this.props.formatGroupLabel(e)
					}
				}, {
					key: "startListeningComposition",
					value: function() {
						document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
					}
				}, {
					key: "stopListeningComposition",
					value: function() {
						document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
					}
				}, {
					key: "startListeningToTouch",
					value: function() {
						document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
					}
				}, {
					key: "stopListeningToTouch",
					value: function() {
						document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
					}
				}, {
					key: "renderInput",
					value: function() {
						var e = this.props,
							a = e.isDisabled,
							t = e.isSearchable,
							r = e.inputId,
							i = e.inputValue,
							n = e.tabIndex,
							o = e.form,
							s = this.getComponents().Input,
							l = this.state.inputIsHidden,
							c = this.commonProps,
							u = r || this.getElementId("input"),
							g = {
								"aria-autocomplete": "list",
								"aria-label": this.props["aria-label"],
								"aria-labelledby": this.props["aria-labelledby"]
							};
						return t ? C.a.createElement(s, S({}, c, {
							autoCapitalize: "none",
							autoComplete: "off",
							autoCorrect: "off",
							id: u,
							innerRef: this.getInputRef,
							isDisabled: a,
							isHidden: l,
							onBlur: this.onInputBlur,
							onChange: this.handleInputChange,
							onFocus: this.onInputFocus,
							spellCheck: "false",
							tabIndex: n,
							form: o,
							type: "text",
							value: i
						}, g)) : C.a.createElement(bt, S({
							id: u,
							innerRef: this.getInputRef,
							onBlur: this.onInputBlur,
							onChange: ga,
							onFocus: this.onInputFocus,
							readOnly: !0,
							disabled: a,
							tabIndex: n,
							form: o,
							value: ""
						}, g))
					}
				}, {
					key: "renderPlaceholderOrValue",
					value: function() {
						var e = this,
							a = this.getComponents(),
							t = a.MultiValue,
							r = a.MultiValueContainer,
							i = a.MultiValueLabel,
							n = a.MultiValueRemove,
							o = a.SingleValue,
							s = a.Placeholder,
							l = this.commonProps,
							c = this.props,
							u = c.controlShouldRenderValue,
							g = c.isDisabled,
							p = c.isMulti,
							f = c.inputValue,
							d = c.placeholder,
							y = this.state,
							v = y.selectValue,
							m = y.focusedValue,
							h = y.isFocused;
						if (!this.hasValue() || !u) return f ? null : C.a.createElement(s, S({}, l, {
							key: "placeholder",
							isDisabled: g,
							isFocused: h
						}), d);
						if (p) return v.map((function(a, o) {
							var s = a === m;
							return C.a.createElement(t, S({}, l, {
								components: {
									Container: r,
									Label: i,
									Remove: n
								},
								isFocused: s,
								isDisabled: g,
								key: "".concat(e.getOptionValue(a)).concat(o),
								index: o,
								removeProps: {
									onClick: function() {
										return e.removeValue(a)
									},
									onTouchEnd: function() {
										return e.removeValue(a)
									},
									onMouseDown: function(e) {
										e.preventDefault(), e.stopPropagation()
									}
								},
								data: a
							}), e.formatOptionLabel(a, "value"))
						}));
						if (f) return null;
						var b = v[0];
						return C.a.createElement(o, S({}, l, {
							data: b,
							isDisabled: g
						}), this.formatOptionLabel(b, "value"))
					}
				}, {
					key: "renderClearIndicator",
					value: function() {
						var e = this.getComponents().ClearIndicator,
							a = this.commonProps,
							t = this.props,
							r = t.isDisabled,
							i = t.isLoading,
							n = this.state.isFocused;
						if (!this.isClearable() || !e || r || !this.hasValue() || i) return null;
						var o = {
							onMouseDown: this.onClearIndicatorMouseDown,
							onTouchEnd: this.onClearIndicatorTouchEnd,
							"aria-hidden": "true"
						};
						return C.a.createElement(e, S({}, a, {
							innerProps: o,
							isFocused: n
						}))
					}
				}, {
					key: "renderLoadingIndicator",
					value: function() {
						var e = this.getComponents().LoadingIndicator,
							a = this.commonProps,
							t = this.props,
							r = t.isDisabled,
							i = t.isLoading,
							n = this.state.isFocused;
						return e && i ? C.a.createElement(e, S({}, a, {
							innerProps: {
								"aria-hidden": "true"
							},
							isDisabled: r,
							isFocused: n
						})) : null
					}
				}, {
					key: "renderIndicatorSeparator",
					value: function() {
						var e = this.getComponents(),
							a = e.DropdownIndicator,
							t = e.IndicatorSeparator;
						if (!a || !t) return null;
						var r = this.commonProps,
							i = this.props.isDisabled,
							n = this.state.isFocused;
						return C.a.createElement(t, S({}, r, {
							isDisabled: i,
							isFocused: n
						}))
					}
				}, {
					key: "renderDropdownIndicator",
					value: function() {
						var e = this.getComponents().DropdownIndicator;
						if (!e) return null;
						var a = this.commonProps,
							t = this.props.isDisabled,
							r = this.state.isFocused,
							i = {
								onMouseDown: this.onDropdownIndicatorMouseDown,
								onTouchEnd: this.onDropdownIndicatorTouchEnd,
								"aria-hidden": "true"
							};
						return C.a.createElement(e, S({}, a, {
							innerProps: i,
							isDisabled: t,
							isFocused: r
						}))
					}
				}, {
					key: "renderMenu",
					value: function() {
						var e = this,
							a = this.getComponents(),
							t = a.Group,
							r = a.GroupHeading,
							i = a.Menu,
							n = a.MenuList,
							o = a.MenuPortal,
							s = a.LoadingMessage,
							l = a.NoOptionsMessage,
							c = a.Option,
							u = this.commonProps,
							g = this.state.focusedOption,
							p = this.props,
							f = p.captureMenuScroll,
							d = p.inputValue,
							y = p.isLoading,
							v = p.loadingMessage,
							m = p.minMenuHeight,
							h = p.maxMenuHeight,
							b = p.menuIsOpen,
							O = p.menuPlacement,
							w = p.menuPosition,
							x = p.menuPortalTarget,
							j = p.menuShouldBlockScroll,
							M = p.menuShouldScrollIntoView,
							E = p.noOptionsMessage,
							k = p.onMenuScrollToTop,
							N = p.onMenuScrollToBottom;
						if (!b) return null;
						var P, _ = function(a, t) {
							var r = a.type,
								i = a.data,
								n = a.isDisabled,
								o = a.isSelected,
								s = a.label,
								l = a.value,
								p = g === i,
								f = n ? void 0 : function() {
									return e.onOptionHover(i)
								},
								d = n ? void 0 : function() {
									return e.selectOption(i)
								},
								y = "".concat(e.getElementId("option"), "-").concat(t),
								v = {
									id: y,
									onClick: d,
									onMouseMove: f,
									onMouseOver: f,
									tabIndex: -1
								};
							return C.a.createElement(c, S({}, u, {
								innerProps: v,
								data: i,
								isDisabled: n,
								isSelected: o,
								key: y,
								label: s,
								type: r,
								value: l,
								isFocused: p,
								innerRef: p ? e.getFocusedOptionRef : void 0
							}), e.formatOptionLabel(a.data, "menu"))
						};
						if (this.hasOptions()) P = this.getCategorizedOptions().map((function(a) {
							if ("group" === a.type) {
								var i = a.data,
									n = a.options,
									o = a.index,
									s = "".concat(e.getElementId("group"), "-").concat(o),
									l = "".concat(s, "-heading");
								return C.a.createElement(t, S({}, u, {
									key: s,
									data: i,
									options: n,
									Heading: r,
									headingProps: {
										id: l,
										data: a.data
									},
									label: e.formatGroupLabel(a.data)
								}), a.options.map((function(e) {
									return _(e, "".concat(o, "-").concat(e.index))
								})))
							}
							if ("option" === a.type) return _(a, "".concat(a.index))
						}));
						else if (y) {
							var T = v({
								inputValue: d
							});
							if (null === T) return null;
							P = C.a.createElement(s, u, T)
						} else {
							var I = E({
								inputValue: d
							});
							if (null === I) return null;
							P = C.a.createElement(l, u, I)
						}
						var A = {
								minMenuHeight: m,
								maxMenuHeight: h,
								menuPlacement: O,
								menuPosition: w,
								menuShouldScrollIntoView: M
							},
							B = C.a.createElement(Na, S({}, u, A), (function(a) {
								var t = a.ref,
									r = a.placerProps,
									o = r.placement,
									s = r.maxHeight;
								return C.a.createElement(i, S({}, u, A, {
									innerRef: t,
									innerProps: {
										onMouseDown: e.onMenuMouseDown,
										onMouseMove: e.onMenuMouseMove
									},
									isLoading: y,
									placement: o
								}), C.a.createElement(_t, {
									captureEnabled: f,
									onTopArrive: k,
									onBottomArrive: N,
									lockEnabled: j
								}, (function(a) {
									return C.a.createElement(n, S({}, u, {
										innerRef: function(t) {
											e.getMenuListRef(t), a(t)
										},
										isLoading: y,
										maxHeight: s,
										focusedOption: g
									}), P)
								})))
							}));
						return x || "fixed" === w ? C.a.createElement(o, S({}, u, {
							appendTo: x,
							controlElement: this.controlRef,
							menuPlacement: O,
							menuPosition: w
						}), B) : B
					}
				}, {
					key: "renderFormField",
					value: function() {
						var e = this,
							a = this.props,
							t = a.delimiter,
							r = a.isDisabled,
							i = a.isMulti,
							n = a.name,
							o = this.state.selectValue;
						if (n && !r) {
							if (i) {
								if (t) {
									var s = o.map((function(a) {
										return e.getOptionValue(a)
									})).join(t);
									return C.a.createElement("input", {
										name: n,
										type: "hidden",
										value: s
									})
								}
								var l = o.length > 0 ? o.map((function(a, t) {
									return C.a.createElement("input", {
										key: "i-".concat(t),
										name: n,
										type: "hidden",
										value: e.getOptionValue(a)
									})
								})) : C.a.createElement("input", {
									name: n,
									type: "hidden"
								});
								return C.a.createElement("div", null, l)
							}
							var c = o[0] ? this.getOptionValue(o[0]) : "";
							return C.a.createElement("input", {
								name: n,
								type: "hidden",
								value: c
							})
						}
					}
				}, {
					key: "renderLiveRegion",
					value: function() {
						var e = this.commonProps,
							a = this.state,
							t = a.ariaSelection,
							r = a.focusedOption,
							i = a.focusedValue,
							n = a.isFocused,
							o = a.selectValue,
							s = this.getFocusableOptions();
						return C.a.createElement(lt, S({}, e, {
							ariaSelection: t,
							focusedOption: r,
							focusedValue: i,
							isFocused: n,
							selectValue: o,
							focusableOptions: s
						}))
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getComponents(),
							a = e.Control,
							t = e.IndicatorsContainer,
							r = e.SelectContainer,
							i = e.ValueContainer,
							n = this.props,
							o = n.className,
							s = n.id,
							l = n.isDisabled,
							c = n.menuIsOpen,
							u = this.state.isFocused,
							g = this.commonProps = this.getCommonProps();
						return C.a.createElement(r, S({}, g, {
							className: o,
							innerProps: {
								id: s,
								onKeyDown: this.onKeyDown
							},
							isDisabled: l,
							isFocused: u
						}), this.renderLiveRegion(), C.a.createElement(a, S({}, g, {
							innerRef: this.getControlRef,
							innerProps: {
								onMouseDown: this.onControlMouseDown,
								onTouchEnd: this.onControlTouchEnd
							},
							isDisabled: l,
							isFocused: u,
							menuIsOpen: c
						}), C.a.createElement(i, S({}, g, {
							isDisabled: l
						}), this.renderPlaceholderOrValue(), this.renderInput()), C.a.createElement(t, S({}, g, {
							isDisabled: l
						}), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
					}
				}], [{
					key: "getDerivedStateFromProps",
					value: function(e, a) {
						var t = a.prevProps,
							r = a.clearFocusValueOnUpdate,
							i = a.inputIsHiddenAfterUpdate,
							n = e.options,
							o = e.value,
							s = e.menuIsOpen,
							l = e.inputValue,
							c = {};
						if (t && (o !== t.value || n !== t.options || s !== t.menuIsOpen || l !== t.inputValue)) {
							var u = da(o),
								g = s ? function(e, a) {
									return Ft(Lt(e, a))
								}(e, u) : [],
								p = r ? function(e, a) {
									var t = e.focusedValue,
										r = e.selectValue.indexOf(t);
									if (r > -1) {
										if (a.indexOf(t) > -1) return t;
										if (r < a.length) return a[r]
									}
									return null
								}(a, u) : null;
							c = {
								selectValue: u,
								focusedOption: function(e, a) {
									var t = e.focusedOption;
									return t && a.indexOf(t) > -1 ? t : a[0]
								}(a, g),
								focusedValue: p,
								clearFocusValueOnUpdate: !1
							}
						}
						var f = null != i && e !== t ? {
							inputIsHidden: i,
							inputIsHiddenAfterUpdate: void 0
						} : {};
						return sa(sa(sa({}, c), f), {}, {
							prevProps: e
						})
					}
				}]), t
			}(w.Component);
		Kt.defaultProps = At;
		var $t, Yt, Jt, qt = (t(36), t(38), w.Component, $t = Kt, Jt = Yt = function(e) {
			ta(t, e);
			var a = ua(t);

			function t() {
				var e;
				Qe(this, t);
				for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
				return (e = a.call.apply(a, [this].concat(i))).select = void 0, e.state = {
					inputValue: void 0 !== e.props.inputValue ? e.props.inputValue : e.props.defaultInputValue,
					menuIsOpen: void 0 !== e.props.menuIsOpen ? e.props.menuIsOpen : e.props.defaultMenuIsOpen,
					value: void 0 !== e.props.value ? e.props.value : e.props.defaultValue
				}, e.onChange = function(a, t) {
					e.callProp("onChange", a, t), e.setState({
						value: a
					})
				}, e.onInputChange = function(a, t) {
					var r = e.callProp("onInputChange", a, t);
					e.setState({
						inputValue: void 0 !== r ? r : a
					})
				}, e.onMenuOpen = function() {
					e.callProp("onMenuOpen"), e.setState({
						menuIsOpen: !0
					})
				}, e.onMenuClose = function() {
					e.callProp("onMenuClose"), e.setState({
						menuIsOpen: !1
					})
				}, e
			}
			return ea(t, [{
				key: "focus",
				value: function() {
					this.select.focus()
				}
			}, {
				key: "blur",
				value: function() {
					this.select.blur()
				}
			}, {
				key: "getProp",
				value: function(e) {
					return void 0 !== this.props[e] ? this.props[e] : this.state[e]
				}
			}, {
				key: "callProp",
				value: function(e) {
					if ("function" == typeof this.props[e]) {
						for (var a, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
						return (a = this.props)[e].apply(a, r)
					}
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						a = this.props;
					a.defaultInputValue, a.defaultMenuIsOpen, a.defaultValue;
					var t = Ye(a, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);
					return C.a.createElement($t, S({}, t, {
						ref: function(a) {
							e.select = a
						},
						inputValue: this.getProp("inputValue"),
						menuIsOpen: this.getProp("menuIsOpen"),
						onChange: this.onChange,
						onInputChange: this.onInputChange,
						onMenuClose: this.onMenuClose,
						onMenuOpen: this.onMenuOpen,
						value: this.getProp("value")
					}))
				}
			}]), t
		}(w.Component), Yt.defaultProps = {
			defaultInputValue: "",
			defaultMenuIsOpen: !1,
			defaultValue: null
		}, Jt);

		function Zt(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				a && (r = r.filter((function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function Qt(e) {
			for (var a = 1; a < arguments.length; a++) {
				var t = null != arguments[a] ? arguments[a] : {};
				a % 2 ? Zt(Object(t), !0).forEach((function(a) {
					m()(e, a, t[a])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zt(Object(t)).forEach((function(a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
				}))
			}
			return e
		}
		var Xt = function(e) {
			var a = {
					className: "generate-advanced-select",
					classNamePrefix: "generate-advanced-select",
					isSearchable: !0,
					styles: {
						indicatorSeparator: function() {
							return {
								display: "none"
							}
						},
						indicatorsContainer: function(e) {
							return Qt(Qt({}, e), {}, {
								maxHeight: "30px"
							})
						},
						menu: function(e) {
							return Qt(Qt({}, e), {}, {
								zIndex: 999999
							})
						}
					},
					instanceId: "input-field",
					maxMenuHeight: 250,
					theme: function(e) {
						return {
							borderRadius: 2,
							colors: Qt(Qt({}, e.colors), {}, {
								primary: "var(--wp-admin-theme-color)",
								neutral20: "#757575",
								neutral30: "#757575"
							}),
							spacing: {
								controlHeight: 30,
								baseUnit: 3,
								menuGutter: 3
							}
						}
					},
					menuPlacement: "auto"
				},
				t = Object.assign({}, a, e);
			return Object.keys(t.options).forEach((function(e) {
				var a = t.options[e].options;
				a ? a.forEach((function(e) {
					e.value === t.currentValue && (t.value = {
						label: e.label,
						value: t.currentValue
					})
				})) : t.options[e].value === t.currentValue && (t.value = {
					label: t.options[e].label,
					value: t.currentValue
				})
			})), Object(n.createElement)(qt, t)
		};

		function er(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				a && (r = r.filter((function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function ar(e) {
			for (var a = 1; a < arguments.length; a++) {
				var t = null != arguments[a] ? arguments[a] : {};
				a % 2 ? er(Object(t), !0).forEach((function(a) {
					m()(e, a, t[a])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : er(Object(t)).forEach((function(a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
				}))
			}
			return e
		}
		var tr = t(9),
			rr = {
				html: {
					module: "core",
					group: "base",
					label: "HTML",
					placeholders: {
						fontSize: {
							value: "",
							min: 10,
							max: 200,
							step: 1,
							unit: "px"
						}
					}
				},
				body: {
					module: "core",
					group: "base",
					label: Object(g.__)("Body", "generatepress"),
					placeholders: {
						fontSize: {
							value: "17",
							min: 6,
							max: 25,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							value: "1.5",
							min: 1,
							max: 5,
							step: .1,
							unit: ""
						},
						marginBottom: {
							value: 1.5,
							unit: "em",
							min: 0,
							max: 5,
							step: .1
						}
					}
				},
				"main-title": {
					module: "core",
					group: "header",
					label: Object(g.__)("Site Title", "generatepress"),
					placeholders: {
						fontSize: {
							value: "25",
							min: 10,
							max: 200,
							step: 1,
							unit: "px"
						}
					}
				},
				"site-description": {
					module: "core",
					group: "header",
					label: Object(g.__)("Site Description", "generatepress"),
					placeholders: {
						fontSize: {
							value: "15",
							min: 6,
							max: 50,
							step: 1,
							unit: "px"
						}
					}
				},
				"primary-menu-items": {
					module: "core",
					group: "primaryNavigation",
					label: Object(g.__)("Primary Menu Items", "generatepress"),
					placeholders: {
						fontSize: {
							value: "15",
							min: 6,
							max: 30,
							step: 1,
							unit: "px"
						}
					}
				},
				"primary-sub-menu-items": {
					module: "core",
					group: "primaryNavigation",
					label: Object(g.__)("Primary Sub-Menu Items", "generatepress"),
					placeholders: {
						fontSize: {
							value: "14",
							min: 6,
							max: 30,
							step: 1,
							unit: "px"
						}
					}
				},
				"primary-menu-toggle": {
					module: "core",
					group: "primaryNavigation",
					label: Object(g.__)("Primary Mobile Menu Toggle", "generatepress"),
					placeholders: {
						fontSize: {
							value: "15",
							min: 6,
							max: 30,
							step: 1,
							unit: "px"
						}
					}
				},
				buttons: {
					module: "core",
					group: "content",
					label: Object(g.__)("Buttons", "generatepress"),
					placeholders: {
						fontSize: {
							value: "",
							min: 5,
							max: 100,
							step: 1
						}
					}
				},
				"all-headings": {
					module: "core",
					group: "content",
					label: Object(g.__)("All Headings", "generatepress"),
					placeholders: {
						fontSize: {
							value: "",
							min: 15,
							max: 100,
							step: 1
						},
						lineHeight: {
							value: "",
							min: 0,
							max: 5,
							step: .1
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				h1: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 1 (H1)", "generatepress"),
					placeholders: {
						fontSize: {
							value: 42,
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							value: 1.2,
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				"single-content-title": {
					module: "core",
					group: "content",
					label: Object(g.__)("Single Content Title (H1)", "generatepress"),
					placeholders: {
						fontSize: {
							value: "",
							min: 15,
							max: 100,
							step: 1
						}
					}
				},
				h2: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 2 (H2)", "generatepress"),
					placeholders: {
						fontSize: {
							value: 35,
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							value: 1.2,
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				"archive-content-title": {
					module: "core",
					group: "content",
					label: Object(g.__)("Archive Content Title (H2)", "generatepress"),
					placeholders: {
						fontSize: {
							value: "",
							min: 15,
							max: 100,
							step: 1
						}
					}
				},
				h3: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 3 (H3)", "generatepress"),
					placeholders: {
						fontSize: {
							value: 29,
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							value: 1.2,
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				h4: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 4 (H4)", "generatepress"),
					placeholders: {
						fontSize: {
							value: 24,
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				h5: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 5 (H5)", "generatepress"),
					placeholders: {
						fontSize: {
							value: 20,
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				h6: {
					module: "core",
					group: "content",
					label: Object(g.__)("Heading 6 (H6)", "generatepress"),
					placeholders: {
						fontSize: {
							min: 15,
							max: 100,
							step: 1,
							unit: "px"
						},
						lineHeight: {
							min: 0,
							max: 5,
							step: .1,
							unit: "em"
						},
						marginBottom: {
							value: 20,
							unit: "px"
						}
					}
				},
				"top-bar": {
					module: "core",
					group: "widgets",
					label: Object(g.__)("Top Bar", "generatepress"),
					placeholders: {
						fontSize: {
							value: 13,
							min: 6,
							max: 25,
							step: 1,
							unit: "px"
						}
					}
				},
				"widget-titles": {
					module: "core",
					group: "widgets",
					label: Object(g.__)("Widget Titles", "generatepress"),
					placeholders: {
						fontSize: {
							value: 20,
							min: 6,
							max: 30,
							step: 1,
							unit: "px"
						},
						marginBottom: {
							value: 30,
							unit: "px"
						}
					}
				},
				footer: {
					module: "core",
					group: "footer",
					label: Object(g.__)("Footer Bar", "generatepress"),
					placeholders: {
						fontSize: {
							value: 15,
							min: 6,
							max: 30,
							step: 1,
							unit: "px"
						}
					}
				},
				custom: {
					module: "core",
					group: "other",
					label: Object(g.__)("Custom", "generatepress"),
					placeholders: {}
				}
			};

		function ir(e) {
			return e || 0 === e
		}
		var nr = function() {
				return Object(tr.applyFilters)("generate_typography_elements", rr)
			},
			or = function(e, a) {
				var t = nr(),
					r = void 0 !== t[e.selector].placeholders[a] ? t[e.selector].placeholders[a].value : "";
				if (a.includes("Tablet")) {
					var i = a.replace("Tablet", "");
					r = void 0 !== t[e.selector].placeholders[i] ? t[e.selector].placeholders[i].value : r, r = void 0 !== e[i] && ir(e[i]) ? e[i] : r
				}
				if (a.includes("Mobile")) {
					var n = a.replace("Mobile", "Tablet"),
						o = a.replace("Mobile", "");
					r = void 0 !== t[e.selector].placeholders[o] ? t[e.selector].placeholders[o].value : r, r = void 0 !== t[e.selector].placeholders[n] ? t[e.selector].placeholders[n].value : r, r = void 0 !== e[o] && ir(e[o]) ? e[o] : r, r = void 0 !== e[n] && ir(e[n]) ? e[n] : r
				}
				return !r || a.includes("Tablet") || a.includes("Mobile") || t[e.selector].placeholders[a].unit !== e[a + "Unit"] && (r = ""), r
			},
			sr = function(e, a, t, r) {
				var i = nr(),
					n = void 0 !== i[e.selector].placeholders[a] ? i[e.selector].placeholders[a][t] : r;
				return "%" === e[a + "Unit"] && (a.startsWith("fontSize") && "max" === t && (n = 250), a.startsWith("lineHeight") && ("step" === t && (n = 1), "max" === t && (n = 250))), n
			},
			lr = function(e) {
				return ["body", "all-headings", "h1", "h2", "h3", "h4", "h5", "h6", "widget-titles"].includes(e)
			},
			cr = function() {
				var e = Object(tr.applyFilters)("generate_typography_element_groups", {
					base: Object(g.__)("Base", "generatepress"),
					header: Object(g.__)("Header", "generatepress"),
					primaryNavigation: Object(g.__)("Primary Navigation", "generatepress"),
					content: Object(g.__)("Content", "generatepress"),
					widgets: Object(g.__)("Widgets", "generatepress"),
					footer: Object(g.__)("Footer", "generatepress")
				});
				return e.other = Object(g.__)("Other", "generatepress"), e
			},
			ur = function() {
				return wp.customize.control("generate_settings[font_manager]").setting.get()
			},
			gr = function(e) {
				var a = e.itemId,
					t = e.setOpen,
					r = e.isOpen,
					i = e.font,
					s = e.label;
				return Object(n.createElement)(o.Button, {
					className: "generate-font-manager--label",
					onClick: function() {
						t(a !== r && a)
					}
				}, !i.selector && s, !!i.selector && Object(n.createElement)(n.Fragment, null, function(e) {
					var a = nr(),
						t = void 0 !== a[e.selector] ? a[e.selector].label : e.selector;
					return "custom" === e.selector && e.customSelector && (t = e.customSelector), t
				}(i), !!i.fontFamily && " / " + i.fontFamily, !!i.fontSize && " / " + i.fontSize, !!i.fontSize && !!i.fontSizeUnit && i.fontSizeUnit))
			},
			pr = function(e) {
				var a = e.itemId,
					t = e.setOpen,
					r = e.isOpen;
				return Object(n.createElement)(o.Tooltip, {
					text: Object(g.__)("Open Typography Settings", "generatepress")
				}, Object(n.createElement)(o.Button, {
					className: "generate-font-manager--open",
					onClick: function() {
						t(a !== r && a)
					}
				}, u(a === r ? "chevron-up" : "chevron-down")))
			},
			fr = function(e) {
				var a = e.onClick,
					t = Object(g.__)("This will permanently delete this typography element.", "generatepress");
				return Object(n.createElement)(o.Tooltip, {
					text: Object(g.__)("Delete Typography Element", "generatepress")
				}, Object(n.createElement)(o.Button, {
					className: "generate-font-manager--delete-font",
					onClick: function() {
						window.confirm(t) && a()
					},
					icon: u("trash")
				}))
			},
			dr = function(e) {
				var a, t, r, i, s = e.index,
					l = e.value,
					c = e.onChange;
				return Object(n.createElement)(o.BaseControl, {
					label: Object(g.__)("Target Element", "generatepress"),
					id: "generate-typography-choose-element"
				}, Object(n.createElement)(Xt, {
					options: (a = wp.customize.control("generate_settings[typography]").setting.get(), t = nr(), r = cr(), i = [], Object.keys(r).forEach((function(e) {
						i.push({
							label: r[e],
							options: Object.keys(t).filter((function(a) {
								return e === t[a].group
							})).map((function(e) {
								return {
									value: e,
									label: t[e].label,
									group: t[e].group,
									module: t[e].module || "core",
									isDisabled: (r = e, a.some((function(e) {
										return e.selector === r
									})) && "custom" !== r)
								};
								var r
							}))
						})
					})), i),
					placeholder: Object(g.__)("Search elements…", "generatepress"),
					currentValue: l,
					onChange: function(e) {
						c(e, s)
					}
				}))
			},
			yr = function(e) {
				var a = e.value,
					t = e.index,
					r = e.onChange;
				return Object(n.createElement)(o.TextControl, {
					help: Object(g.__)("Enter custom CSS selector.", "generatepress"),
					value: a,
					onChange: function(e) {
						r("customSelector", e, t)
					}
				})
			},
			vr = function(e) {
				var a, t, r = e.index,
					i = e.value,
					s = e.onChange;
				return Object(n.createElement)(o.SelectControl, {
					label: Object(g.__)("Font Family", "generatepress"),
					value: i,
					options: (a = ur(), t = [{
						value: "",
						label: Object(g.__)("-- Select --", "generatepress")
					}, {
						value: "inherit",
						label: Object(g.__)("Inherit", "generatepress")
					}, {
						value: "System Default",
						label: Object(g.__)("System Default", "generatepress")
					}], a.length > 0 && a.forEach((function(e, r) {
						t.push({
							value: a[r].fontFamily,
							label: a[r].fontFamily
						})
					})), t),
					onChange: function(e) {
						s("fontFamily", e, r)
					}
				})
			};

		function mr(e, a) {
			var t = [{
				value: "",
				label: Object(g.__)("Default", "generatepress")
			}, {
				value: "normal",
				label: Object(g.__)("Normal", "generatepress")
			}, {
				value: "bold",
				label: Object(g.__)("Bold", "generatepress")
			}, {
				value: "100",
				label: "100"
			}, {
				value: "200",
				label: "200"
			}, {
				value: "300",
				label: "300"
			}, {
				value: "400",
				label: "400"
			}, {
				value: "500",
				label: "500"
			}, {
				value: "600",
				label: "600"
			}, {
				value: "700",
				label: "700"
			}, {
				value: "800",
				label: "800"
			}, {
				value: "900",
				label: "900"
			}];
			return void 0 !== O[e] && "undefined" !== a.googleFontVariants && (t = [{
				value: "",
				label: Object(g.__)("Default", "generatepress")
			}, {
				value: "normal",
				label: Object(g.__)("Normal", "generatepress")
			}, {
				value: "bold",
				label: Object(g.__)("Bold", "generatepress")
			}], a.filter((function(a) {
				return a.fontFamily === e
			})).forEach((function(e) {
				var a = e.googleFontVariants.replaceAll(" ", "");
				(a = a.split(",")).filter((function(e) {
					var a = e.match(/[a-z]/g),
						t = e.match(/[0-9]/g);
					return !(a && t || "italic" === e || "regular" === e || "" === e)
				})).forEach((function(e) {
					t.push({
						value: e,
						label: e
					})
				}))
			}))), t
		}
		var hr = function(e) {
				var a = e.index,
					t = e.value,
					r = e.fontFamily,
					i = e.onChange;
				return Object(n.createElement)(o.SelectControl, {
					label: Object(g.__)("Font Weight", "generatepress"),
					value: t,
					options: mr(r, ur()),
					onChange: function(e) {
						i("fontWeight", e, a)
					}
				})
			},
			br = function(e) {
				var a = e.index,
					t = e.value,
					r = e.onChange;
				return Object(n.createElement)(o.SelectControl, {
					label: Object(g.__)("Text Transform", "generatepress"),
					value: t,
					options: [{
						value: "",
						label: Object(g.__)("Default", "generatepress")
					}, {
						value: "uppercase",
						label: Object(g.__)("Uppercase", "generatepress")
					}, {
						value: "lowercase",
						label: Object(g.__)("Lowercase", "generatepress")
					}, {
						value: "capitalize",
						label: Object(g.__)("Capitalize", "generatepress")
					}, {
						value: "initial",
						label: Object(g.__)("Normal", "generatepress")
					}],
					onChange: function(e) {
						r("textTransform", e, a)
					}
				})
			},
			Or = (t(44), function(e) {
				var a = Object(n.useState)("desktop"),
					t = c()(a, 2),
					r = (t[0], t[1]),
					i = e.label,
					s = e.devices;
				return Object(n.createElement)("div", {
					className: "components-generate-units-control-header__units"
				}, Object(n.createElement)("div", {
					className: "components-generate-units-control-label__units"
				}, i), Object(n.createElement)("div", {
					className: "components-generate-control__units"
				}, Object(n.createElement)(o.ButtonGroup, {
					className: "components-generate-control-buttons__units",
					"aria-label": Object(g.__)("Select Units", "generatepress")
				}, s.map((function(e) {
					var a = Object(g.__)("Desktop", "generatepress");
					return "tablet" === e && (a = Object(g.__)("Tablet", "generatepress")), "mobile" === e && (a = Object(g.__)("Mobile", "generatepress")), Object(n.createElement)(o.Tooltip
						/* translators: Unit type (px, em, %) */
						, {
							text: Object(g.sprintf)(Object(g.__)("%s Preview", "generatepress"), a),
							key: e
						}, Object(n.createElement)(o.Button, {
							key: e,
							className: "components-generate-control-button__units--" + e,
							isSmall: !0
								/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
								,
							"aria-label": a,
							onClick: function() {
								wp.customize.previewedDevice.set(e), r(e)
							}
						}, u(e)))
				})))))
			}),
			Sr = t(22),
			wr = t.n(Sr),
			Cr = t(23),
			xr = t.n(Cr),
			jr = t(24),
			Mr = t.n(jr),
			Er = t(25),
			kr = t.n(Er),
			Nr = t(20),
			Pr = t.n(Nr);
		t(47);
		var _r = function(e) {
				Mr()(i, e);
				var a, t, r = (a = i, t = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = Pr()(a);
					if (t) {
						var i = Pr()(this).constructor;
						e = Reflect.construct(r, arguments, i)
					} else e = r.apply(this, arguments);
					return kr()(this, e)
				});

				function i() {
					return wr()(this, i), r.apply(this, arguments)
				}
				return xr()(i, [{
					key: "render",
					value: function() {
						var e = this.props,
							a = e.label,
							t = e.value,
							r = e.onChange,
							i = e.rangeMin,
							s = void 0 === i ? 0 : i,
							l = e.rangeMax,
							c = void 0 === l ? 100 : l,
							u = e.inputMin,
							g = void 0 === u ? "" : u,
							p = e.inputMax,
							f = void 0 === p ? "" : p,
							d = e.step,
							y = void 0 === d ? 1 : d,
							v = e.help,
							m = void 0 === v ? "" : v,
							h = e.beforeIcon,
							b = void 0 === h ? "" : h,
							O = e.initialPosition,
							S = void 0 === O ? "" : O,
							w = e.placeholder,
							C = void 0 === w ? "" : w;
						return Object(n.createElement)("div", {
							className: "components-generate-range-control"
						}, a && Object(n.createElement)("div", {
							className: "components-generate-range-control--label"
						}, a), Object(n.createElement)("div", {
							className: "components-generate-range-control--wrapper"
						}, Object(n.createElement)("div", {
							className: "components-generate-range-control--range"
						}, Object(n.createElement)(o.RangeControl, {
							className: "generate-range-control-range",
							beforeIcon: b,
							value: ir(t) ? parseFloat(t) : "",
							onChange: function(e) {
								return r(e)
							},
							min: s,
							max: c,
							step: y,
							withInputField: !1,
							initialPosition: S
						})), Object(n.createElement)("div", {
							className: "components-generate-range-control-input"
						}, Object(n.createElement)(o.TextControl, {
							type: "number",
							placeholder: "" !== C ? C : "",
							min: g,
							max: f,
							step: y,
							value: ir(t) ? t : "",
							onChange: function(e) {
								return r(e)
							}
						}))), m && Object(n.createElement)("p", {
							className: "components-base-control__help"
						}, m))
					}
				}]), i
			}(n.Component),
			Tr = (t(48), function(e) {
				var a = e.value,
					t = e.onClick,
					r = e.units;
				return Object(n.createElement)("div", {
					className: "components-generate--control__units"
				}, Object(n.createElement)(o.Dropdown, {
					className: "generate-component-control--unit-picker",
					contentClassName: "generate-component-control--unit-picker-area",
					position: "middle center",
					focusOnMount: "container",
					renderToggle: function(e) {
						var t = e.isOpen,
							r = e.onToggle;
						return Object(n.createElement)(o.Button, {
							onClick: r,
							"aria-expanded": t
						}, a || u("dash"))
					},
					renderContent: function(e) {
						var i = e.onClose;
						return Object(n.createElement)(o.ButtonGroup, {
							className: "components-generate--control-buttons__units",
							"aria-label": Object(g.__)("Select Units", "generatepress")
						}, r.map((function(e) {
							var r = e,
								s = e || u("dash");
							return "" === e && (r = Object(g.__)("No Unit", "generatepress")), "px" === e && (r = Object(g._x)("Pixel", "A size unit for CSS markup", "generatepress")), "em" === e && (r = Object(g._x)("Em", "A size unit for CSS markup", "generatepress")), "%" === e && (r = Object(g._x)("Percentage", "A size unit for CSS markup", "generatepress")), "deg" === e && (r = Object(g._x)("Degree", "A size unit for CSS markup", "generatepress")), Object(n.createElement)(o.Tooltip
								/* translators: Unit type (px, em, %) */
								, {
									text: e ? Object(g.sprintf)(Object(g.__)("%s Units", "generatepress"), r) : r,
									key: e
								}, Object(n.createElement)(o.Button, {
									key: e,
									className: "components-generate--control-button__units--" + e,
									isSmall: !0,
									isPrimary: a === e,
									"aria-pressed": a === e
										/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
										,
									"aria-label": e ? Object(g.sprintf)(Object(g.__)("%s Units", "generatepress"), r) : r,
									onClick: function() {
										t(e), i()
									}
								}, s))
						})))
					}
				}))
			}),
			Ir = function(e) {
				var a = e.label,
					t = e.unitValue,
					r = e.units,
					i = e.onChangeUnit,
					s = e.step,
					l = e.rangeMin,
					c = e.rangeMax,
					u = e.inputMin,
					g = void 0 === u ? null : u,
					p = e.inputMax,
					f = void 0 === p ? null : p,
					d = e.desktopValue,
					y = e.desktopInitial,
					v = e.desktopOnChange,
					m = e.tabletValue,
					h = e.tabletInitial,
					b = e.tabletOnChange,
					O = e.mobileInitial,
					S = e.mobileValue,
					w = e.mobileOnChange;
				return Object(n.createElement)(o.BaseControl, null, Object(n.createElement)(Or, {
					label: a,
					value: t,
					devices: ["desktop", "tablet", "mobile"]
				}), Object(n.createElement)("div", {
					className: "generate-component-input-with-unit"
				}, Object(n.createElement)("div", {
					className: "generate-component-device-field",
					"data-device": "desktop"
				}, Object(n.createElement)(_r, {
					className: "generate-range-control-range",
					step: s,
					rangeMin: l,
					rangeMax: c,
					inputMin: g,
					inputMax: f,
					value: ir(d) ? parseFloat(d) : y,
					initialPosition: y,
					onChange: v,
					withInputField: !1
				})), Object(n.createElement)("div", {
					className: "generate-component-device-field",
					"data-device": "tablet"
				}, Object(n.createElement)(_r, {
					"data-generate-control-device": "tablet",
					className: "generate-range-control-range",
					step: s,
					rangeMin: l,
					rangeMax: c,
					inputMin: g,
					inputMax: f,
					value: ir(m) ? parseFloat(m) : h,
					initialPosition: h,
					onChange: b,
					withInputField: !1
				})), Object(n.createElement)("div", {
					className: "generate-component-device-field",
					"data-device": "mobile"
				}, Object(n.createElement)(_r, {
					"data-generate-control-device": "mobile",
					className: "generate-range-control-range",
					step: s,
					rangeMin: l,
					rangeMax: c,
					inputMin: g,
					inputMax: f,
					value: ir(S) ? parseFloat(S) : O,
					initialPosition: O,
					onChange: w,
					withInputField: !1
				})), Object(n.createElement)(Tr, {
					value: t,
					units: r,
					onClick: i
				})))
			},
			Ar = function(e) {
				var a = e.font,
					t = e.onChange;
				return Object(n.createElement)(Ir, {
					label: Object(g.__)("Font size", "generatepress"),
					unitValue: a.fontSizeUnit,
					units: ["px", "em", "rem", "%"],
					onChangeUnit: function(e) {
						t("fontSizeUnit", e, a.index)
					},
					step: sr(a, "fontSize", "step", 1),
					rangeMin: sr(a, "fontSize", "min", 1),
					rangeMax: sr(a, "fontSize", "max", 100),
					inputMin: 0,
					desktopValue: a.fontSize,
					desktopInitial: or(a, "fontSize"),
					desktopOnChange: function(e) {
						t("fontSize", e, a.index)
					},
					tabletValue: a.fontSizeTablet,
					tabletInitial: or(a, "fontSizeTablet"),
					tabletOnChange: function(e) {
						t("fontSizeTablet", e, a.index)
					},
					mobileValue: a.fontSizeMobile,
					mobileInitial: or(a, "fontSizeMobile"),
					mobileOnChange: function(e) {
						t("fontSizeMobile", e, a.index)
					}
				})
			},
			Br = function(e) {
				var a = e.font,
					t = e.onChange;
				return Object(n.createElement)(Ir, {
					label: Object(g.__)("Line Height", "generatepress"),
					unitValue: a.lineHeightUnit,
					units: ["", "px", "em", "rem"],
					onChangeUnit: function(e) {
						t("lineHeightUnit", e, a.index)
					},
					step: sr(a, "lineHeight", "step", .1),
					rangeMin: sr(a, "lineHeight", "min", 1),
					rangeMax: sr(a, "lineHeight", "max", 5),
					inputMin: 0,
					desktopValue: a.lineHeight,
					desktopInitial: or(a, "lineHeight"),
					desktopOnChange: function(e) {
						t("lineHeight", e, a.index)
					},
					tabletValue: a.lineHeightTablet,
					tabletInitial: or(a, "lineHeightTablet"),
					tabletOnChange: function(e) {
						t("lineHeightTablet", e, a.index)
					},
					mobileValue: a.lineHeightMobile,
					mobileInitial: or(a, "lineHeightMobile"),
					mobileOnChange: function(e) {
						t("lineHeightMobile", e, a.index)
					}
				})
			},
			Lr = function(e) {
				var a = e.font,
					t = e.onChange;
				return Object(n.createElement)(Ir, {
					label: Object(g.__)("Letter Spacing", "generatepress"),
					unitValue: a.letterSpacingUnit,
					units: ["px", "em", "rem"],
					onChangeUnit: function(e) {
						t("letterSpacingUnit", e, a.index)
					},
					step: sr(a, "letterSpacing", "step", .01),
					rangeMin: sr(a, "letterSpacing", "min", -1),
					rangeMax: sr(a, "letterSpacing", "max", 10),
					desktopValue: a.letterSpacing,
					desktopInitial: or(a, "letterSpacing"),
					desktopOnChange: function(e) {
						t("letterSpacing", e, a.index)
					},
					tabletValue: a.letterSpacingTablet,
					tabletInitial: or(a, "letterSpacingTablet"),
					tabletOnChange: function(e) {
						t("letterSpacingTablet", e, a.index)
					},
					mobileValue: a.letterSpacingMobile,
					mobileInitial: or(a, "letterSpacingMobile"),
					mobileOnChange: function(e) {
						t("letterSpacingMobile", e, a.index)
					}
				})
			},
			Fr = function(e) {
				var a = e.font,
					t = e.onChange;
				return Object(n.createElement)(Ir, {
					label: "body" === a.selector ? Object(g.__)("Paragraph Bottom Margin", "generatepress") : Object(g.__)("Bottom Margin", "generatepress"),
					unitValue: a.marginBottomUnit,
					units: ["px", "em", "rem"],
					onChangeUnit: function(e) {
						t("marginBottomUnit", e, a.index)
					},
					step: sr(a, "marginBottom", "step", .1),
					rangeMin: sr(a, "marginBottom", "min", 0),
					rangeMax: sr(a, "marginBottom", "max", 5),
					inputMin: 0,
					desktopValue: a.marginBottom,
					desktopInitial: or(a, "marginBottom"),
					desktopOnChange: function(e) {
						0 > e && (e = 0), t("marginBottom", e, a.index)
					},
					tabletValue: a.marginBottomTablet,
					tabletInitial: or(a, "marginBottomTablet"),
					tabletOnChange: function(e) {
						0 > e && (e = 0), t("marginBottomTablet", e, a.index)
					},
					mobileValue: a.marginBottomMobile,
					mobileInitial: or(a, "marginBottomMobile"),
					mobileOnChange: function(e) {
						0 > e && (e = 0), t("marginBottomMobile", e, a.index)
					}
				})
			},
			Vr = function(e) {
				var a = e.font,
					t = e.toggleClose,
					r = e.onChangeFontValue,
					i = e.onChangeElement;
				return Object(n.createElement)("div", {
					className: "generate-customize-control--font-dropdown"
				}, Object(n.createElement)(dr, {
					index: a.index,
					value: a.selector,
					onChange: i
				}), !!a.selector && Object(n.createElement)(n.Fragment, null, "custom" === a.selector && Object(n.createElement)(yr, {
					index: a.index,
					value: a.customSelector,
					onChange: r
				}), Object(n.createElement)(vr, {
					index: a.index,
					value: a.fontFamily,
					onChange: r
				}), Object(n.createElement)("div", {
					className: "components-base-control generate-font-manager--select-options"
				}, Object(n.createElement)(hr, {
					index: a.index,
					value: a.fontWeight,
					fontFamily: a.fontFamily,
					onChange: r
				}), Object(n.createElement)(br, {
					index: a.index,
					value: a.textTransform,
					onChange: r
				})), Object(n.createElement)(Ar, {
					font: a,
					onChange: r
				}), Object(n.createElement)(Br, {
					font: a,
					onChange: r
				}), Object(n.createElement)(Lr, {
					font: a,
					onChange: r
				}), lr(a.selector) && Object(n.createElement)(Fr, {
					font: a,
					onChange: r
				})), Object(n.createElement)("div", {
					className: "generate-font-manager--footer"
				}, Object(n.createElement)(o.Button, {
					isSecondary: !0,
					isSmall: !0,
					onClick: t
				}, Object(g.__)("Close", "generatepress"))))
			},
			Dr = function(e) {
				var a = e.font,
					t = e.label,
					r = e.itemId,
					i = e.setOpen,
					o = e.isOpen,
					s = e.deleteFont,
					l = e.toggleClose,
					c = e.onChangeFontValue,
					u = e.onChangeElement;
				return Object(n.createElement)("div", {
					className: "generate-font-manager--item"
				}, Object(n.createElement)("div", {
					className: "generate-font-manager--header"
				}, Object(n.createElement)(gr, {
					font: a,
					itemId: r,
					setOpen: i,
					isOpen: o,
					label: t
				}), Object(n.createElement)(pr, {
					itemId: r,
					setOpen: i,
					isOpen: o
				}), Object(n.createElement)(fr, {
					onClick: s.bind(null, a.index),
					isOpen: o,
					itemId: r
				})), r === o && Object(n.createElement)(Vr, {
					font: a,
					toggleClose: l,
					onChangeFontValue: c,
					onChangeElement: u
				}))
			},
			Rr = function(e) {
				var a, t, r = e.fontList,
					o = ("group", "other", r.reduce((function(e, a, t) {
						var r = a.group || "other";
						return a.index = t, e[r] = e[r] || [], e[r].push(a), e
					}), {}));
				return a = cr(), t = function(a, t) {
					var r, s = null !== (r = o[t]) && void 0 !== r ? r : [];
					if (0 !== s.length) return Object(n.createElement)("div", {
						className: "generate-font-manager-group",
						key: t
					}, Object(n.createElement)("h4", {
						className: "generate-font-manager-group__label"
					}, a), s.map((function(a) {
						return Object(n.createElement)(Dr, i()({
							key: a.index,
							itemId: a.index + 1,
							font: a
						}, e))
					})))
				}, Object.values(Object.fromEntries(Object.entries(a).map((function(e) {
					var a = c()(e, 2),
						r = a[0],
						i = a[1];
					return [r, t(i, r)]
				}))))
			};

		function zr(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				a && (r = r.filter((function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function Hr(e) {
			for (var a = 1; a < arguments.length; a++) {
				var t = null != arguments[a] ? arguments[a] : {};
				a % 2 ? zr(Object(t), !0).forEach((function(a) {
					m()(e, a, t[a])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : zr(Object(t)).forEach((function(a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
				}))
			}
			return e
		}
		var Gr = s((function(e) {
				var a = Object(n.useState)(0),
					t = c()(a, 2),
					r = t[0],
					i = t[1],
					s = function(a) {
						wp.customize.control(e.customizerSetting.id).setting.set(a)
					},
					l = function(e, a) {
						var t = wp.customize.control("generate_settings[typography]"),
							r = t.setting.get(),
							i = b()(r);
						r.forEach((function(t, r) {
							"" === t.fontFamily && "" === a || t.fontFamily !== a || (i[r] = ar(ar({}, i[r]), {}, {
								fontFamily: e
							}))
						})), t.setting.set(i), t.renderContent()
					},
					p = function() {
						i(0)
					},
					f = e.value || [];
				"object" === y()(f) && (f = Object.values(f));
				var d = [{
					label: Object(g.__)("System fonts", "generatepress"),
					options: [{
						value: "Arial",
						label: "Arial"
					}, {
						value: "Helvetica",
						label: "Helvetica"
					}, {
						value: "Times New Roman",
						label: "Times New Roman"
					}, {
						value: "Georgia",
						label: "Georgia"
					}]
				}, {
					label: Object(g.__)("Google Fonts", "generatepress"),
					options: Object.keys(O).map((function(e) {
						return {
							value: e,
							label: e
						}
					}))
				}];
				return f.forEach((function(e) {
					var a = e.googleFont ? 1 : 0;
					d[a].options = d[a].options.filter((function(a) {
						return a.value !== e.fontFamily
					}))
				})), Object(n.createElement)("div", null, Object(n.createElement)("div", {
					className: "customize-control-notifications-container",
					ref: e.setNotificationContainer
				}), !!f.length > 0 && f.map((function(a, t) {
					var c = t + 1,
						y = function(e) {
							var a = b()(f),
								r = a[t];
							a[t] = ar(ar({}, a[t]), {}, {
								fontFamily: e
							}), s(a), void 0 !== O[e] ? (a[t] = ar(ar({}, a[t]), {}, {
								googleFont: !0,
								googleFontCategory: O[e].category,
								googleFontVariants: O[e].variants.join(", ")
							}), s(a)) : (a[t] = ar(ar({}, a[t]), {}, {
								googleFont: !1,
								googleFontCategory: "",
								googleFontVariants: ""
							}), s(a)), l(a[t].fontFamily, r.fontFamily)
						},
						v = f[t].fontFamily || "";
					return Object(n.createElement)("div", {
						className: "generate-font-manager--item",
						key: t
					}, Object(n.createElement)("div", {
						className: "generate-font-manager--header"
					}, Object(n.createElement)(o.Button, {
						className: "generate-font-manager--label",
						onClick: function() {
							i(c !== r && c)
						}
					}, f[t].fontFamily ? f[t].fontFamily : e.label), Object(n.createElement)(o.Tooltip, {
						text: Object(g.__)("Open Font Family Settings", "generatepress")
					}, Object(n.createElement)(o.Button, {
						className: "generate-font-manager--open",
						onClick: function() {
							i(c !== r && c)
						}
					}, u(c === r ? "chevron-up" : "chevron-down"))), Object(n.createElement)(o.Tooltip, {
						text: Object(g.__)("Delete Font Family", "generatepress")
					}, Object(n.createElement)(o.Button, {
						className: "generate-font-manager--delete-font",
						onClick: function() {
							if (window.confirm(Object(g.__)("This will permanently delete this font family. Doing so will stop elements from displaying it as their font.", "generatepress"))) {
								var e = b()(f),
									a = e[t];
								l("", a.fontFamily), e.splice(t, 1), s(e)
							}
						}
					}, u("trash")))), c === r && Object(n.createElement)("div", {
						className: "generate-customize-control--font-dropdown"
					}, Object(n.createElement)(o.BaseControl, {
						className: "generate-component-font-family-picker-wrapper",
						id: "generate-font-manager-family-name--input"
					}, Object(n.createElement)(Xt, {
						options: d,
						placeholder: Object(g.__)("Search fonts…", "generatepress"),
						onChange: function(e) {
							return y(e.value)
						}
					}), Object(n.createElement)(o.TextControl, {
						id: "generate-font-manager-family-name--input",
						className: "generate-font-manager-family-name--input",
						label: Object(g.__)("Font family name", "generatepress"),
						value: v,
						onChange: function(e) {
							var a;
							a = e, f.filter((function(e) {
								return e.fontFamily === a
							})).length > 0 && (alert(Object(g.__)("Font already selected", "generatepress")), e = ""), y(e)
						}
					}), !!f[t].fontFamily && Object(n.createElement)("div", {
						className: "generate-font-manager--options"
					}, Object(n.createElement)(o.ToggleControl, {
						className: "generate-font-manager-google-font--field",
						label: Object(g.__)("Google Font", "generatepress"),
						checked: !!f[t].googleFont,
						onChange: function(e) {
							var a = b()(f);
							a[t] = ar(ar({}, a[t]), {}, {
								googleFont: e
							}), s(a)
						}
					}), !!f[t].googleFont && Object(n.createElement)("div", {
						className: "generate-font-manager--google-font-options"
					}, Object(n.createElement)(o.TextControl, {
						label: Object(g.__)("Category", "generatepress"),
						value: f[t].googleFontCategory || "",
						onChange: function(e) {
							var a = b()(f);
							a[t] = ar(ar({}, a[t]), {}, {
								googleFontCategory: e
							}), s(a)
						}
					}), Object(n.createElement)(o.TextControl, {
						label: Object(g.__)("Variants", "generatepress"),
						value: f[t].googleFontVariants || "",
						onChange: function(e) {
							var a = b()(f);
							a[t] = ar(ar({}, a[t]), {}, {
								googleFontVariants: e
							}), s(a)
						}
					}))), Object(n.createElement)("div", {
						className: "generate-font-manager--footer"
					}, Object(n.createElement)(o.Button, {
						isSecondary: !0,
						isSmall: !0,
						onClick: p
					}, Object(g.__)("Close", "generatepress"))))))
				})), Object(n.createElement)(o.Button, {
					isPrimary: !0,
					onClick: function() {
						var a = b()(e.value);
						a.push({
							fontFamily: "",
							googleFont: !1,
							googleFontApi: 1,
							googleFontCategory: "",
							googleFontVariants: ""
						}), s(a);
						var t = wp.customize.control(e.customizerSetting.id).setting.get().length;
						i(t)
					}
				}, Object(g.__)("Add Font", "generatepress")))
			})),
			Ur = s((function(e) {
				var a = e.value,
					t = Object(n.useState)([]),
					r = c()(t, 2),
					i = r[0],
					s = r[1],
					l = Object(n.useState)(0),
					u = c()(l, 2),
					p = u[0],
					f = u[1],
					d = Object(n.useState)(!1),
					v = c()(d, 2),
					h = v[0],
					O = v[1];
				Object(n.useEffect)((function() {
					Array.isArray(a) ? s(a) : "object" === y()(a) && s(Object.values(a))
				}), [a]), Object(n.useEffect)((function() {
					var a = h ? "refresh" : "postMessage";
					wp.customize.control(e.customizerSetting.id).setting.transport = a, wp.customize.control(e.customizerSetting.id).setting.set(i)
				}), [i]);
				var S = nr(),
					w = function(e) {
						O(!0), s(e)
					};
				return Object(n.createElement)("div", null, Object(n.createElement)("div", {
					className: "customize-control-notifications-container",
					ref: e.setNotificationContainer
				}), Object(n.createElement)(Rr, {
					fontList: i,
					setOpen: f,
					isOpen: p,
					label: e.label,
					deleteFont: function(e) {
						var a = b()(i);
						a.splice(e, 1), w(a)
					},
					toggleClose: function() {
						return f(0)
					},
					onChangeFontValue: function(e, a, t) {
						var r = b()(i);
						r[t] = Hr({}, r[t]), r[t][e] = a, w(r)
					},
					onChangeElement: function(e, a) {
						var t = e.value,
							r = e.group,
							n = e.module,
							o = b()(i);
						o[a] = Hr(Hr({}, o[a]), {}, {
							selector: t,
							module: n,
							group: r
						});
						var s = S[t].placeholders;
						s && Object.keys(s).forEach((function(e) {
							var r = S[t].placeholders[e].unit;
							if (r) {
								var i = e + "Unit";
								o[a] = Hr(Hr({}, o[a]), {}, m()({}, i, r))
							}
						})), lr(t) || (o[a] = Hr(Hr({}, o[a]), {}, {
							marginBottom: "",
							marginBottomTablet: "",
							marginBottomMobile: "",
							marginBottomUnit: ""
						})), w(o)
					}
				}), Object(n.createElement)(o.Button, {
					isPrimary: !0,
					onClick: function() {
						var a = b()(e.value);
						a.push({
							selector: "",
							customSelector: "",
							fontFamily: "",
							fontWeight: "",
							textTransform: "",
							fontSize: "",
							fontSizeTablet: "",
							fontSizeMobile: "",
							fontSizeUnit: "px",
							lineHeight: "",
							lineHeightTablet: "",
							lineHeightMobile: "",
							lineHeightUnit: "",
							letterSpacing: "",
							letterSpacingTablet: "",
							letterSpacingMobile: "",
							letterSpacingUnit: "px"
						}), w(a), f(a.length)
					}
				}, Object(g.__)("Add Typography", "generatepress")))
			}));

		function Wr(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				a && (r = r.filter((function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function Kr(e) {
			for (var a = 1; a < arguments.length; a++) {
				var t = null != arguments[a] ? arguments[a] : {};
				a % 2 ? Wr(Object(t), !0).forEach((function(a) {
					m()(e, a, t[a])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wr(Object(t)).forEach((function(a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
				}))
			}
			return e
		}
		wp.customize.controlConstructor["generate-font-manager-control"] = Gr, wp.customize.controlConstructor["generate-typography-control"] = Ur, t(49);
		var $r = s((function(e) {
			var a = function(a) {
					wp.customize.control(e.customizerSetting.id).setting.set(a);
					var t = ":root {";
					a.length > 0 && a.forEach((function(e) {
						var a = e.slug.replace(" ", "-").toLowerCase();
						t += "--" + a + ": " + e.color + ";"
					})), t += "}";
					var r = document.getElementById("generate-global-color-styles");
					r ? r.innerHTML = t : document.head.insertAdjacentHTML("beforeend", '<style id="generate-global-color-styles">' + t + "</style>")
				},
				t = function(e) {
					var a = [];
					e.length > 0 && e.forEach((function(e) {
						a.push({
							name: e.slug,
							slug: e.slug,
							color: "var(--" + e.slug + ")"
						})
					})), window.sessionStorage.setItem("generateGlobalColors", JSON.stringify(a))
				},
				r = e.value || [];
			return "object" === y()(r) && (r = Object.values(r)), Object(n.createElement)("div", null, Object(n.createElement)("div", {
				className: "customize-control-notifications-container",
				ref: e.setNotificationContainer
			}), Object(n.createElement)("div", {
				className: "generate-component-color-picker-wrapper generate-color-manager-wrapper"
			}, r.map((function(s, l) {
				var c = Kr(Kr({}, e), {}, {
					value: r[l].color,
					varNameValue: r[l].slug
				});
				return Object(n.createElement)("div", {
					className: "generate-color-manager--item",
					key: l
				}, Object(n.createElement)(p, i()({}, c, {
					tooltipPosition: "bottom center",
					tooltipText: r[l].slug,
					hideLabel: !0,
					onChange: function(e) {
						var i = b()(r);
						i[l] = Kr(Kr({}, i[l]), {}, {
							color: e
						}), a(i), t(i)
					},
					onVarChange: function(e) {
						var i = b()(r);
						e = e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").replace(/[^a-z0-9-\s]+/g, "").toLowerCase(), i[l] = Kr(Kr({}, i[l]), {}, {
							slug: e
						}), a(i), t(i)
					}
				})), Object(n.createElement)(o.Tooltip, {
					text: Object(g.__)("Delete Color", "generatepress")
				}, Object(n.createElement)(o.Button, {
					className: "generate-color-manager--delete-color",
					onClick: function() {
						if (window.confirm(Object(g.__)("This will permanently delete this color. Doing so will break styles that are using it to define their color.", "generatepress"))) {
							var e = b()(r);
							e.splice(l, 1), a(e)
						}
					},
					icon: u("x")
				})))
			})), Object(n.createElement)("div", {
				className: "generate-color-manager--item"
			}, Object(n.createElement)(o.Tooltip, {
				text: Object(g.__)("Add Global Color", "generatepress")
			}, Object(n.createElement)(o.Button, {
				className: "generate-color-manager--add-color",
				onClick: function() {
					var t = b()(e.value),
						r = t.length + 1;
					t.push({
						slug: "global-color-" + r,
						color: ""
					}), a(t)
				}
			}, u("plus"))))))
		}));
		wp.customize.controlConstructor["generate-color-manager-control"] = $r, t(50);
		var Yr = function(e) {
				var a = Object(n.useState)(!1),
					t = c()(a, 2),
					r = t[0],
					i = t[1],
					s = function() {
						e.choices.sectionRedirect ? wp.customize.section(e.choices.toggleId).focus() : document.querySelectorAll('[data-toggleId="' + e.choices.toggleId + '"]').forEach((function(e) {
							r ? (e.style.display = "", i(!1)) : (e.style.display = "block", i(!0))
						}))
					},
					l = e.choices.tooltipText ? e.choices.tooltipText : Object(g.sprintf)(Object(g.__)("Open %s Settings", "generatepress"), e.choices.title),
					p = e.choices.sectionRedirect ? "chevron-right" : "chevron-down";
				return Object(n.createElement)(n.Fragment, null, Object(n.createElement)("div", {
					className: "generate-customize-control-title"
				}, !!e.choices.toggleId && Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.Tooltip, {
					text: l
				}, Object(n.createElement)(o.Button, {
					className: "generate-customize-control-title--label",
					onClick: s
				}, e.choices.title)), Object(n.createElement)(o.Tooltip, {
					text: l
				}, Object(n.createElement)(o.Button, {
					className: "generate-customize-control-title--toggle",
					onClick: s
				}, u(r ? "chevron-up" : p)))), !e.choices.toggleId && Object(n.createElement)("h3", null, e.choices.title)))
			},
			Jr = wp.customize.Control.extend({
				ready: function() {
					this.renderContent()
				},
				embed: function() {
					var e = this,
						a = e.section();
					a && wp.customize.section(a, (function(a) {
						a.expanded.bind((function(a) {
							a && e.actuallyEmbed()
						}))
					}))
				},
				actuallyEmbed: function() {
					"resolved" !== this.deferred.embedded.state() && (this.renderContent(), this.deferred.embedded.resolve())
				},
				initialize: function(e, a) {
					var t = this;
					t.setNotificationContainer = t.setNotificationContainer.bind(t), wp.customize.Control.prototype.initialize.call(t, e, a), wp.customize.control.bind("removed", (function e(a) {
						t === a && (t.destroy(), t.container.remove(), wp.customize.control.unbind("removed", e))
					}))
				},
				setNotificationContainer: function(e) {
					this.notifications.container = jQuery(e), this.notifications.render()
				},
				renderContent: function() {
					var e = Object(n.createElement)(o.SlotFillProvider, null, Object(n.createElement)(Yr, i()({}, this.params, {
							control: this,
							choices: this.params.choices,
							title: this.params.title
						})), Object(n.createElement)(o.Popover.Slot, null)),
						a = this.container[0];
					if (this.params.choices.wrapper) {
						var t = document.getElementById(this.params.choices.wrapper + "--wrapper");
						t && (a = t, this.container.hide())
					}
					Object(n.render)(e, a)
				},
				destroy: function() {
					Object(n.unmountComponentAtNode)(this.container[0]), wp.customize.Control.prototype.destroy && wp.customize.Control.prototype.destroy.call(this)
				}
			});
		wp.customize.controlConstructor["generate-title-control"] = Jr;
		var qr = t(26),
			Zr = t.n(qr),
			Qr = wp.customize.Control.extend({
				ready: function() {
					this.renderContent()
				},
				embed: function() {
					var e = this,
						a = e.section();
					a && wp.customize.section(a, (function(a) {
						a.expanded.bind((function(a) {
							a && e.actuallyEmbed()
						}))
					}))
				},
				actuallyEmbed: function() {
					"resolved" !== this.deferred.embedded.state() && (this.renderContent(), this.deferred.embedded.resolve())
				},
				initialize: function(e, a) {
					var t = this;
					t.setNotificationContainer = t.setNotificationContainer.bind(t), wp.customize.Control.prototype.initialize.call(t, e, a), wp.customize.control.bind("removed", (function e(a) {
						t === a && (t.destroy(), t.container.remove(), wp.customize.control.unbind("removed", e))
					}))
				},
				setNotificationContainer: function(e) {
					this.notifications.container = jQuery(e), this.notifications.render()
				},
				renderContent: function() {
					var e = this.params.choices;
					this.params.choices.toggleId && this.container[0].setAttribute("data-toggleId", this.params.choices.toggleId), Object(n.render)(Object(n.createElement)("div", {
						className: Zr()(m()({
							"generate-customize-control-wrapper": !0
						}, e.class, !!e.class)),
						id: e.id,
						"data-wrapper-type": e.type
					}, e.items.map((function(e) {
						return Object(n.createElement)("div", {
							key: e,
							id: e + "--wrapper"
						})
					}))), this.container[0])
				},
				destroy: function() {
					Object(n.unmountComponentAtNode)(this.container[0]), wp.customize.Control.prototype.destroy && wp.customize.Control.prototype.destroy.call(this)
				}
			});
		wp.customize.controlConstructor["generate-wrapper-control"] = Qr, document.addEventListener("DOMContentLoaded", (function() {
			window.sessionStorage.removeItem("generateGlobalColors")
		}))
	}]);