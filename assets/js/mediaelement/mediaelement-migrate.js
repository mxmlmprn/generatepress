!(function(a) {
	void 0 === mejs.plugins &&
		((mejs.plugins = {}),
			(mejs.plugins.silverlight = []),
			mejs.plugins.silverlight.push({
				types: [],
			})),
		(mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
			getTypeFromFile: mejs.Utils.getTypeFromFile,
		}),
		void 0 === mejs.MediaFeatures && (mejs.MediaFeatures = mejs.Features),
		void 0 === mejs.Utility && (mejs.Utility = mejs.Utils);
	var e = MediaElementPlayer.prototype.init;
	MediaElementPlayer.prototype.init = function() {
		(this.options.classPrefix = "mejs-"),
		(this.$media = this.$node = a(this.node)),
		e.call(this);
	};
	var t = MediaElementPlayer.prototype._meReady;
	(MediaElementPlayer.prototype._meReady = function() {
		(this.container = a(this.container)),
		(this.controls = a(this.controls)),
		(this.layers = a(this.layers)),
		t.apply(this, arguments);
	}),
	(MediaElementPlayer.prototype.getElement = function(e) {
		return void 0 !== a && e instanceof a ? e[0] : e;
	}),
	(MediaElementPlayer.prototype.buildfeatures = function(e, t, i, s) {
		for (
			var r = [
					"playpause",
					"current",
					"progress",
					"duration",
					"tracks",
					"volume",
					"fullscreen",
				],
				l = 0,
				n = this.options.features.length; l < n; l++
		) {
			var o = this.options.features[l];
			if (this["build" + o])
				try {
					-1 === r.indexOf(o) ?
						this["build" + o](e, a(t), a(i), s) :
						this["build" + o](e, t, i, s);
				} catch (e) {
					console.error("error building " + o, e);
				}
		}
	});
})((window, jQuery));