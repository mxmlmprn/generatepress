(window.webpackJsonp_generatepress=window.webpackJsonp_generatepress||[]).push([[4],{50:function(e,t,r){},51:function(e,t,r){}}]),function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={2:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp_generatepress=window.webpackJsonp_generatepress||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([53,4]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},12:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},13:function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],_n=!0,s=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);_n=!0);}catch(e){s=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(s)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},14:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=window.wp.components},5:function(e,t,r){var n=r(12),o=r(13),a=r(9),s=r(14);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},53:function(e,t,r){"use strict";r.r(t),r(50);var n=r(5),o=r.n(n),a=r(0),s=r(1),i=r(2),c=(r(51),{siteIdentity:{title:Object(s.__)("Site Identity","generatepress"),description:Object(s.__)("Set your site name, description, logo and more.","generatepress"),icon:Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(a.createElement)("circle",{cx:"12",cy:"12",r:"3"}),Object(a.createElement)("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})),action:generateDashboard.customizeSectionUrls.siteIdentitySection},colors:{title:Object(s.__)("Color Options","generatepress"),description:Object(s.__)("Set up your global colors and stylize your site to match your brand.","generatepress"),icon:Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(a.createElement)("path",{d:"M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"})),action:generateDashboard.customizeSectionUrls.colorsSection},typography:{title:Object(s.__)("Typography System","generatepress"),description:Object(s.__)("Set up your site typography by using our dynamic typography system.","generatepress"),icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{d:"m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"})),action:generateDashboard.customizeSectionUrls.typographySection},layout:{title:Object(s.__)("Layout Options","generatepress"),description:Object(s.__)("Set up the layout of your overall site elements.","generatepress"),icon:Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(a.createElement)("path",{d:"M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"})),action:generateDashboard.customizeSectionUrls.layoutSection},themeBuilder:{title:Object(s.__)("Theme Builder","generatepress"),description:Object(s.__)("Design and build your theme elements in the block editor.","generatepress"),icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{d:"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"})),action:""},siteLibrary:{title:Object(s.__)("Site Library","generatepress"),description:Object(s.__)("Start your site with a professionally-built starter site.","generatepress"),icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{d:"M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"})),action:""}}),l=function(){var e=Object(a.useState)(!1),t=o()(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){r||n(!0)})),r?Object(a.createElement)(a.Fragment,null,Object(a.createElement)("h2",null,Object(s.__)("Start Customizing","generatepress")),!!c>0&&Object(a.createElement)("div",{className:"generatepress-start-customizing"},Object.keys(c).map((function(e,t){return Object(a.createElement)("div",{className:"generatepress-start-customizing__item",key:t},!!c[e].icon&&Object(a.createElement)("div",{className:"generatepress-start-customizing__icon"},c[e].icon),Object(a.createElement)("div",{className:"generatepress-start-customizing__content"},!!c[e].title&&Object(a.createElement)("div",{className:"generatepress-start-customizing__title"},c[e].title),!!c[e].description&&Object(a.createElement)("div",{className:"generatepress-start-customizing__description"},c[e].description),!!c[e].action&&Object(a.createElement)("div",{className:"generatepress-start-customizing__action"},Object(a.createElement)(i.Button,{isPrimary:!0,onClick:function(){}},c[e].actionLabel||Object(s.__)("Go to options","generatepress")))))})))):Object(a.createElement)(i.Placeholder,{className:"generatepress-dashboard-placeholder"},Object(a.createElement)(i.Spinner,null))};window.addEventListener("DOMContentLoaded",(function(){Object(a.render)(Object(a.createElement)(l,null),document.getElementById("generatepress-dashboard-app"))}))},9:function(e,t,r){var n=r(10);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0}});