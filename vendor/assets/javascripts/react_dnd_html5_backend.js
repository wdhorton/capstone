!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactDnDHTML5Backend=e():t.ReactDnDHTML5Backend=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(t){return new u["default"](t)}e.__esModule=!0,e["default"]=i;var a=r(17),u=o(a),s=r(21),c=o(s),f=r(7),d=n(f);e.NativeTypes=d,e.getEmptyImage=c["default"]},function(t,e){function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=r},function(t,e,r){function n(t){return null!=t&&i(o(t))}var o=r(41),i=r(5);t.exports=n},function(t,e){function r(t,e){if("function"!=typeof t)throw new TypeError(n);return e=o(void 0===e?t.length-1:+e||0,0),function(){for(var r=arguments,n=-1,i=o(r.length-e,0),a=Array(i);++n<i;)a[n]=r[e+n];switch(e){case 0:return t.call(this,a);case 1:return t.call(this,r[0],a);case 2:return t.call(this,r[0],r[1],a)}var u=Array(e+1);for(n=-1;++n<e;)u[n]=r[n];return u[e]=a,t.apply(this,u)}}var n="Expected a function",o=Math.max;t.exports=r},function(t,e,r){function n(t,e){var r=null==t?void 0:t[e];return o(r)?r:void 0}var o=r(50);t.exports=n},function(t,e){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&n>=t}var n=9007199254740991;t.exports=r},function(t,e){function r(t){return!!t&&"object"==typeof t}t.exports=r},function(t,e){"use strict";e.__esModule=!0;var r="__NATIVE_FILE__";e.FILE=r;var n="__NATIVE_URL__";e.URL=n;var o="__NATIVE_TEXT__";e.TEXT=o},function(t,e){function r(t,e){return t="number"==typeof t||n.test(t)?+t:-1,e=null==e?o:e,t>-1&&t%1==0&&e>t}var n=/^\d+$/,o=9007199254740991;t.exports=r},function(t,e,r){function n(t){return i(t)&&o(t)&&u.call(t,"callee")&&!s.call(t,"callee")}var o=r(2),i=r(6),a=Object.prototype,u=a.hasOwnProperty,s=a.propertyIsEnumerable;t.exports=n},function(t,e,r){var n=r(4),o=r(5),i=r(6),a="[object Array]",u=Object.prototype,s=u.toString,c=n(Array,"isArray"),f=c||function(t){return i(t)&&o(t.length)&&s.call(t)==a};t.exports=f},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=r(25),i=n(o),a=i["default"](function(){return/firefox/i.test(navigator.userAgent)});e.isFirefox=a;var u=i["default"](function(){return Boolean(window.safari)});e.isSafari=u},function(t,e,r){function n(t,e,r){if(e!==e)return o(t,r);for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var o=r(42);t.exports=n},function(t,e,r){function n(t,e){var r=t.data,n="string"==typeof e||o(e)?r.set.has(e):r.hash[e];return n?0:-1}var o=r(1);t.exports=n},function(t,e,r){(function(e){function n(t){return u&&a?new o(t):null}var o=r(27),i=r(4),a=i(e,"Set"),u=i(Object,"create");t.exports=n}).call(e,function(){return this}())},function(t,e,r){var n=r(4),o=r(2),i=r(1),a=r(48),u=n(Object,"keys"),s=u?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?a(t):i(t)?u(t):[]}:a;t.exports=s},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var i=r(23),a=n(i),u=r(24),s=n(u),c=function(){function t(){o(this,t),this.entered=[]}return t.prototype.enter=function(t){var e=this.entered.length;return this.entered=a["default"](this.entered.filter(function(e){return document.documentElement.contains(e)&&(!e.contains||e.contains(t))}),[t]),0===e&&this.entered.length>0},t.prototype.leave=function(t){var e=this.entered.length;return this.entered=s["default"](this.entered.filter(function(t){return document.documentElement.contains(t)}),t),e>0&&0===this.entered.length},t.prototype.reset=function(){this.entered=[]},t}();e["default"]=c,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var a=r(52),u=o(a),s=r(22),c=o(s),f=r(16),d=o(f),p=r(11),h=r(20),l=r(19),g=r(7),v=n(g),D=function(){function t(e){i(this,t),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.sourcePreviewNodes={},this.sourcePreviewNodeOptions={},this.sourceNodes={},this.sourceNodeOptions={},this.enterLeaveCounter=new d["default"],this.getSourceClientOffset=this.getSourceClientOffset.bind(this),this.handleTopDragStart=this.handleTopDragStart.bind(this),this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this),this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this),this.handleTopDragEnter=this.handleTopDragEnter.bind(this),this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this),this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this),this.handleTopDragOver=this.handleTopDragOver.bind(this),this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this),this.handleTopDrop=this.handleTopDrop.bind(this),this.handleTopDropCapture=this.handleTopDropCapture.bind(this),this.handleSelectStart=this.handleSelectStart.bind(this),this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this)}return t.prototype.setup=function(){if("undefined"!=typeof window){if(this.constructor.isSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.constructor.isSetUp=!0,window.addEventListener("dragstart",this.handleTopDragStart),window.addEventListener("dragstart",this.handleTopDragStartCapture,!0),window.addEventListener("dragend",this.handleTopDragEndCapture,!0),window.addEventListener("dragenter",this.handleTopDragEnter),window.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),window.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),window.addEventListener("dragover",this.handleTopDragOver),window.addEventListener("dragover",this.handleTopDragOverCapture,!0),window.addEventListener("drop",this.handleTopDrop),window.addEventListener("drop",this.handleTopDropCapture,!0)}},t.prototype.teardown=function(){"undefined"!=typeof window&&(this.constructor.isSetUp=!1,window.removeEventListener("dragstart",this.handleTopDragStart),window.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),window.removeEventListener("dragend",this.handleTopDragEndCapture,!0),window.removeEventListener("dragenter",this.handleTopDragEnter),window.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),window.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),window.removeEventListener("dragover",this.handleTopDragOver),window.removeEventListener("dragover",this.handleTopDragOverCapture,!0),window.removeEventListener("drop",this.handleTopDrop),window.removeEventListener("drop",this.handleTopDropCapture,!0),this.clearCurrentDragSourceNode())},t.prototype.connectDragPreview=function(t,e,r){var n=this;return this.sourcePreviewNodeOptions[t]=r,this.sourcePreviewNodes[t]=e,function(){delete n.sourcePreviewNodes[t],delete n.sourcePreviewNodeOptions[t]}},t.prototype.connectDragSource=function(t,e,r){var n=this;this.sourceNodes[t]=e,this.sourceNodeOptions[t]=r;var o=function(e){return n.handleDragStart(e,t)},i=function(e){return n.handleSelectStart(e,t)};return e.setAttribute("draggable",!0),e.addEventListener("dragstart",o),e.addEventListener("selectstart",i),function(){delete n.sourceNodes[t],delete n.sourceNodeOptions[t],e.removeEventListener("dragstart",o),e.removeEventListener("selectstart",i),e.setAttribute("draggable",!1)}},t.prototype.connectDropTarget=function(t,e){var r=this,n=function(e){return r.handleDragEnter(e,t)},o=function(e){return r.handleDragOver(e,t)},i=function(e){return r.handleDrop(e,t)};return e.addEventListener("dragenter",n),e.addEventListener("dragover",o),e.addEventListener("drop",i),function(){e.removeEventListener("dragenter",n),e.removeEventListener("dragover",o),e.removeEventListener("drop",i)}},t.prototype.getCurrentSourceNodeOptions=function(){var t=this.monitor.getSourceId(),e=this.sourceNodeOptions[t];return u["default"](e||{},{dropEffect:"move"})},t.prototype.getCurrentDropEffect=function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect},t.prototype.getCurrentSourcePreviewNodeOptions=function(){var t=this.monitor.getSourceId(),e=this.sourcePreviewNodeOptions[t];return u["default"](e||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})},t.prototype.getSourceClientOffset=function(t){return h.getNodeClientOffset(this.sourceNodes[t])},t.prototype.isDraggingNativeItem=function(){var t=this.monitor.getItemType();return Object.keys(v).some(function(e){return v[e]===t})},t.prototype.beginDragNativeItem=function(t){this.clearCurrentDragSourceNode();var e=l.createNativeDragSource(t);this.currentNativeSource=new e,this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])},t.prototype.endDragNativeItem=function(){this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null},t.prototype.endDragIfSourceWasRemovedFromDOM=function(){var t=this.currentDragSourceNode;document.body.contains(t)||(this.actions.endDrag(),this.clearCurrentDragSourceNode())},t.prototype.setCurrentDragSourceNode=function(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t,this.currentDragSourceNodeOffset=h.getNodeClientOffset(t),this.currentDragSourceNodeOffsetChanged=!1,window.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t.prototype.clearCurrentDragSourceNode=function(){return this.currentDragSourceNode?(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0),!0):!1},t.prototype.checkIfCurrentDragSourceRectChanged=function(){var t=this.currentDragSourceNode;return t?this.currentDragSourceNodeOffsetChanged?!0:(this.currentDragSourceNodeOffsetChanged=!c["default"](h.getNodeClientOffset(t),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged):!1},t.prototype.handleTopDragStartCapture=function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},t.prototype.handleDragStart=function(t,e){this.dragStartSourceIds.unshift(e)},t.prototype.handleTopDragStart=function(t){var e=this,r=this.dragStartSourceIds;this.dragStartSourceIds=null;var n=h.getEventClientOffset(t);this.actions.beginDrag(r,{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:n});var o=t.dataTransfer,i=l.matchNativeItemType(o);if(this.monitor.isDragging()){if("function"==typeof o.setDragImage){var a=this.monitor.getSourceId(),u=this.sourceNodes[a],s=this.sourcePreviewNodes[a]||u,c=this.getCurrentSourcePreviewNodeOptions(),f=c.anchorX,d=c.anchorY,p={anchorX:f,anchorY:d},g=h.getDragPreviewOffset(u,s,n,p);o.setDragImage(s,g.x,g.y)}try{o.setData("application/json",{})}catch(v){}this.setCurrentDragSourceNode(t.target);var D=this.getCurrentSourcePreviewNodeOptions(),y=D.captureDraggingState;y?this.actions.publishDragSource():setTimeout(function(){return e.actions.publishDragSource()})}else if(i)this.beginDragNativeItem(i);else{if(!(o.types||t.target.hasAttribute&&t.target.hasAttribute("draggable")))return;t.preventDefault()}},t.prototype.handleTopDragEndCapture=function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()},t.prototype.handleTopDragEnterCapture=function(t){this.dragEnterTargetIds=[];var e=this.enterLeaveCounter.enter(t.target);if(e&&!this.monitor.isDragging()){var r=t.dataTransfer,n=l.matchNativeItemType(r);n&&this.beginDragNativeItem(n)}},t.prototype.handleDragEnter=function(t,e){this.dragEnterTargetIds.unshift(e)},t.prototype.handleTopDragEnter=function(t){var e=this,r=this.dragEnterTargetIds;if(this.dragEnterTargetIds=[],this.monitor.isDragging()){p.isFirefox()||this.actions.hover(r,{clientOffset:h.getEventClientOffset(t)});var n=r.some(function(t){return e.monitor.canDropOnTarget(t)});n&&(t.preventDefault(),t.dataTransfer.dropEffect=this.getCurrentDropEffect())}},t.prototype.handleTopDragOverCapture=function(){this.dragOverTargetIds=[]},t.prototype.handleDragOver=function(t,e){this.dragOverTargetIds.unshift(e)},t.prototype.handleTopDragOver=function(t){var e=this,r=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return t.preventDefault(),void(t.dataTransfer.dropEffect="none");this.actions.hover(r,{clientOffset:h.getEventClientOffset(t)});var n=r.some(function(t){return e.monitor.canDropOnTarget(t)});n?(t.preventDefault(),t.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(t.preventDefault(),t.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(t.preventDefault(),t.dataTransfer.dropEffect="move")},t.prototype.handleTopDragLeaveCapture=function(t){this.isDraggingNativeItem()&&t.preventDefault();var e=this.enterLeaveCounter.leave(t.target);e&&this.isDraggingNativeItem()&&this.endDragNativeItem()},t.prototype.handleTopDropCapture=function(t){this.dropTargetIds=[],t.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(t.dataTransfer),this.enterLeaveCounter.reset()},t.prototype.handleDrop=function(t,e){this.dropTargetIds.unshift(e)},t.prototype.handleTopDrop=function(t){var e=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(e,{clientOffset:h.getEventClientOffset(t)}),this.actions.drop(),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()},t.prototype.handleSelectStart=function(t){"function"==typeof t.target.dragDrop&&(t.preventDefault(),t.target.dragDrop())},t}();e["default"]=D,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var n=function(){function t(e,n){r(this,t);for(var o=e.length,i=[],a=0;o>a;a++)i.push(a);i.sort(function(t,r){return e[t]<e[r]?-1:1});for(var u=[],s=[],c=[],f=void 0,d=void 0,a=0;o-1>a;a++)f=e[a+1]-e[a],d=n[a+1]-n[a],s.push(f),u.push(d),c.push(d/f);for(var p=[c[0]],a=0;a<s.length-1;a++){var h=c[a],l=c[a+1];if(0>=h*l)p.push(0);else{f=s[a];var g=s[a+1],v=f+g;p.push(3*v/((v+g)/h+(v+f)/l))}}p.push(c[c.length-1]);for(var D=[],y=[],m=void 0,a=0;a<p.length-1;a++){m=c[a];var w=p[a],T=1/s[a],v=w+p[a+1]-m-m;D.push((m-w-v)*T),y.push(v*T*T)}this.xs=e,this.ys=n,this.c1s=p,this.c2s=D,this.c3s=y}return t.prototype.interpolate=function(t){var e=this.xs,r=this.ys,n=this.c1s,o=this.c2s,i=this.c3s,a=e.length-1;if(t===e[a])return r[a];for(var u=0,s=i.length-1,c=void 0;s>=u;){c=Math.floor(.5*(u+s));var f=e[c];if(t>f)u=c+1;else{if(!(f>t))return r[c];s=c-1}}a=Math.max(0,s);var d=t-e[a],p=d*d;return r[a]+n[a]*d+o[a]*p+i[a]*d*p},t}();e["default"]=n,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e,r){var n=e.reduce(function(e,r){return e||t.getData(r)},null);return null!=n?n:r}function u(t){var e=p[t],r=e.exposeProperty,n=e.matchesTypes,a=e.getData;return function(){function t(){o(this,t),this.item=Object.defineProperties({},i({},r,{get:function(){return console.warn("Browser doesn't allow reading \""+r+'" until the drop event.'),null},configurable:!0,enumerable:!0}))}return t.prototype.mutateItemByReadingDataTransfer=function(t){delete this.item[r],this.item[r]=a(t,n)},t.prototype.canDrag=function(){return!0},t.prototype.beginDrag=function(){return this.item},t.prototype.isDragging=function(t,e){return e===t.getSourceId()},t.prototype.endDrag=function(){},t}()}function s(t){var e=Array.prototype.slice.call(t.types||[]);return Object.keys(p).filter(function(t){var r=p[t].matchesTypes;return r.some(function(t){return e.indexOf(t)>-1})})[0]||null}e.__esModule=!0;var c;e.createNativeDragSource=u,e.matchNativeItemType=s;var f=r(7),d=n(f),p=(c={},i(c,d.FILE,{exposeProperty:"files",matchesTypes:["Files"],getData:function(t){return Array.prototype.slice.call(t.files)}}),i(c,d.URL,{exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(t,e){return a(t,e,"").split("\n")}}),i(c,d.TEXT,{exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(t,e){return a(t,e,"")}}),c)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){var e=t.nodeType===f?t:t.parentElement;if(!e)return null;var r=e.getBoundingClientRect(),n=r.top,o=r.left;return{x:o,y:n}}function i(t){return{x:t.clientX,y:t.clientY}}function a(t,e,r,n){var i="IMG"===e.nodeName&&(u.isFirefox()||!document.documentElement.contains(e)),a=i?t:e,s=o(a),f={x:r.x-s.x,y:r.y-s.y},d=t.offsetWidth,p=t.offsetHeight,h=n.anchorX,l=n.anchorY,g=i?e.width:d,v=i?e.height:p;u.isSafari()&&i?(v/=window.devicePixelRatio,g/=window.devicePixelRatio):u.isFirefox()&&!i&&(v*=window.devicePixelRatio,g*=window.devicePixelRatio);var D=new c["default"]([0,.5,1],[f.x,f.x/d*g,f.x+g-d]),y=new c["default"]([0,.5,1],[f.y,f.y/p*v,f.y+v-p]),m=D.interpolate(h),w=y.interpolate(l);return u.isSafari()&&i&&(w+=(window.devicePixelRatio-1)*v),{x:m,y:w}}e.__esModule=!0,e.getNodeClientOffset=o,e.getEventClientOffset=i,e.getDragPreviewOffset=a;var u=r(11),s=r(18),c=n(s),f=1},function(t,e){"use strict";function r(){return n||(n=new Image,n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),n}e.__esModule=!0,e["default"]=r;var n=void 0;t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(t===e)return!0;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<r.length;i++){if(!o.call(e,r[i])||t[r[i]]!==e[r[i]])return!1;var a=t[r[i]],u=e[r[i]];if(a!==u)return!1}return!0}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){var n=r(34),o=r(36),i=r(3),a=i(function(t){return o(n(t,!1,!0))});t.exports=a},function(t,e,r){var n=r(33),o=r(2),i=r(3),a=i(function(t,e){return o(t)?n(t,e):[]});t.exports=a},function(t,e,r){function n(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(i);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a),a};return r.cache=new n.Cache,r}var o=r(26),i="Expected a function";n.Cache=o,t.exports=n},function(t,e,r){function n(){this.__data__={}}var o=r(44),i=r(45),a=r(46),u=r(47);n.prototype["delete"]=o,n.prototype.get=i,n.prototype.has=a,n.prototype.set=u,t.exports=n},function(t,e,r){(function(e){function n(t){var e=t?t.length:0;for(this.data={hash:u(null),set:new a};e--;)this.push(t[e])}var o=r(38),i=r(4),a=i(e,"Set"),u=i(Object,"create");n.prototype.push=o,t.exports=n}).call(e,function(){return this}())},function(t,e){function r(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}t.exports=r},function(t,e){function r(t,e){return void 0===t?e:t}t.exports=r},function(t,e,r){function n(t,e,r){for(var n=-1,i=o(e),a=i.length;++n<a;){var u=i[n],s=t[u],c=r(s,e[u],u,t,e);(c===c?c===s:s!==s)&&(void 0!==s||u in t)||(t[u]=c)}return t}var o=r(15);t.exports=n},function(t,e,r){function n(t,e){return null==e?t:o(e,i(e),t)}var o=r(32),i=r(15);t.exports=n},function(t,e){function r(t,e,r){r||(r={});for(var n=-1,o=e.length;++n<o;){var i=e[n];r[i]=t[i]}return r}t.exports=r},function(t,e,r){function n(t,e){var r=t?t.length:0,n=[];if(!r)return n;var s=-1,c=o,f=!0,d=f&&e.length>=u?a(e):null,p=e.length;d&&(c=i,f=!1,e=d);t:for(;++s<r;){var h=t[s];if(f&&h===h){for(var l=p;l--;)if(e[l]===h)continue t;n.push(h)}else c(e,h,0)<0&&n.push(h)}return n}var o=r(12),i=r(13),a=r(14),u=200;t.exports=n},function(t,e,r){function n(t,e,r,c){c||(c=[]);for(var f=-1,d=t.length;++f<d;){var p=t[f];s(p)&&u(p)&&(r||a(p)||i(p))?e?n(p,e,r,c):o(c,p):r||(c[c.length]=p)}return c}var o=r(28),i=r(9),a=r(10),u=r(2),s=r(6);t.exports=n},function(t,e){function r(t){return function(e){return null==e?void 0:e[t]}}t.exports=r},function(t,e,r){function n(t,e){var r=-1,n=o,s=t.length,c=!0,f=c&&s>=u,d=f?a():null,p=[];d?(n=i,c=!1):(f=!1,d=e?[]:p);t:for(;++r<s;){var h=t[r],l=e?e(h,r,t):h;if(c&&h===h){for(var g=d.length;g--;)if(d[g]===l)continue t;e&&d.push(l),p.push(h)}else n(d,l,0)<0&&((e||f)&&d.push(l),p.push(h))}return p}var o=r(12),i=r(13),a=r(14),u=200;t.exports=n},function(t,e,r){function n(t,e,r){if("function"!=typeof t)return o;if(void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 3:return function(r,n,o){return t.call(e,r,n,o)};case 4:return function(r,n,o,i){return t.call(e,r,n,o,i)};case 5:return function(r,n,o,i,a){return t.call(e,r,n,o,i,a)}}return function(){return t.apply(e,arguments)}}var o=r(54);t.exports=n},function(t,e,r){function n(t){var e=this.data;"string"==typeof t||o(t)?e.set.add(t):e.hash[t]=!0}var o=r(1);t.exports=n},function(t,e,r){function n(t){return a(function(e,r){var n=-1,a=null==e?0:r.length,u=a>2?r[a-2]:void 0,s=a>2?r[2]:void 0,c=a>1?r[a-1]:void 0;for("function"==typeof u?(u=o(u,c,5),a-=2):(u="function"==typeof c?c:void 0,a-=u?1:0),s&&i(r[0],r[1],s)&&(u=3>a?void 0:u,a=1);++n<a;){var f=r[n];f&&t(e,f,u)}return e})}var o=r(37),i=r(43),a=r(3);t.exports=n},function(t,e,r){function n(t,e){return o(function(r){var n=r[0];return null==n?n:(r.push(e),t.apply(void 0,r))})}var o=r(3);t.exports=n},function(t,e,r){var n=r(35),o=n("length");t.exports=o},function(t,e){function r(t,e,r){for(var n=t.length,o=e+(r?0:-1);r?o--:++o<n;){var i=t[o];if(i!==i)return o}return-1}t.exports=r},function(t,e,r){function n(t,e,r){if(!a(r))return!1;var n=typeof e;if("number"==n?o(r)&&i(e,r.length):"string"==n&&e in r){var u=r[e];return t===t?t===u:u!==u}return!1}var o=r(2),i=r(8),a=r(1);t.exports=n},function(t,e){function r(t){return this.has(t)&&delete this.__data__[t]}t.exports=r},function(t,e){function r(t){return"__proto__"==t?void 0:this.__data__[t]}t.exports=r},function(t,e){function r(t){return"__proto__"!=t&&o.call(this.__data__,t)}var n=Object.prototype,o=n.hasOwnProperty;t.exports=r},function(t,e){function r(t,e){return"__proto__"!=t&&(this.__data__[t]=e),this}t.exports=r},function(t,e,r){function n(t){for(var e=s(t),r=e.length,n=r&&t.length,c=!!n&&u(n)&&(i(t)||o(t)),d=-1,p=[];++d<r;){var h=e[d];(c&&a(h,n)||f.call(t,h))&&p.push(h)}return p}var o=r(9),i=r(10),a=r(8),u=r(5),s=r(53),c=Object.prototype,f=c.hasOwnProperty;t.exports=n},function(t,e,r){function n(t){return o(t)&&u.call(t)==i}var o=r(1),i="[object Function]",a=Object.prototype,u=a.toString;t.exports=n},function(t,e,r){function n(t){return null==t?!1:o(t)?f.test(s.call(t)):i(t)&&a.test(t)}var o=r(49),i=r(6),a=/^\[object .+?Constructor\]$/,u=Object.prototype,s=Function.prototype.toString,c=u.hasOwnProperty,f=RegExp("^"+s.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=n},function(t,e,r){var n=r(30),o=r(31),i=r(39),a=i(function(t,e,r){return r?n(t,e,r):o(t,e)});t.exports=a},function(t,e,r){var n=r(51),o=r(29),i=r(40),a=i(n,o);t.exports=a},function(t,e,r){function n(t){if(null==t)return[];s(t)||(t=Object(t));var e=t.length;e=e&&u(e)&&(i(t)||o(t))&&e||0;for(var r=t.constructor,n=-1,c="function"==typeof r&&r.prototype===t,d=Array(e),p=e>0;++n<e;)d[n]=n+"";for(var h in t)p&&a(h,e)||"constructor"==h&&(c||!f.call(t,h))||d.push(h);return d}var o=r(9),i=r(10),a=r(8),u=r(5),s=r(1),c=Object.prototype,f=c.hasOwnProperty;t.exports=n},function(t,e){function r(t){return t}t.exports=r}])});
