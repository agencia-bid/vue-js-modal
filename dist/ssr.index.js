!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(global,function(){return function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=11)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("27d83796",i,!1,t)}},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("0e783494",i,!1,t)}},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("17757f60",i,!1,t)}},function(t,e){t.exports=function(n){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var a;return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&n[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),a.push(r))}},a}},function(t,e,n){"use strict";function i(t,e,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return r(i._styles)}}),i._renderStyles=r);var o=i._styles||(i._styles={});e=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,o=0;o<i.length;o++){var r=i[o],a=r.media||"default",s=t[a];s?s.ids.indexOf(r.id)<0&&(s.ids.push(r.id),s.css+="\n"+r.css):t[a]={ids:[r.id],css:r.css,media:r.media}}}(o,e):function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,o=0;o<i.length;o++){var r=i[o];t[r.id]={ids:[r.id],css:r.css,media:r.media}}}(o,e)}}function r(t){var e="";for(var n in t){var i=t[n];e+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return i})},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.v--modal-container {\n    padding-right: 16px;\n    padding-left: 16px;\n}\n.v--modal-header {\n    padding-top: 16px;\n    font-size: 18px;\n}\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.overlayTransition}},[e.visibility.overlay?n("div",{ref:"overlay",class:e.overlayClass,attrs:{"aria-expanded":e.visibility.overlay.toString(),"data-modal":e.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)},touchstart:function(t){return t.target!==t.currentTarget?null:e.handleBackgroundClick(t)}}},[n("div",{staticClass:"v--modal-top-right"},[e._t("top-right")],2),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeTransitionEnter,"after-enter":e.afterTransitionEnter,"after-leave":e.afterTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle},[n("div",{staticClass:"v--modal-container"},[n("div",{staticClass:"v--modal-header"},[e._t("header")],2),e._v(" "),n("div",{staticClass:"v--modal-body"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"v--modal-footer"},[e._t("footer")],2)]),e._v(" "),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight},on:{resize:e.handleModalResize}}):e._e()],1):e._e()])],1)]):e._e()])},o=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[])};o._withStripped=i._withStripped=!0;var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return function(){return(t++).toString()}}(),u=function(t,e,n){return n<t?t:e<n?e:n},r=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}({id:s(),timestamp:Date.now(),canceled:!1},t)};function a(t,e,n,i,o,r,a,s){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(t,e){return l.call(e),u(t,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:d}}var l=a({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(t){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement;if(e){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop,o=Math.min(window.innerWidth,this.maxWidth),r=Math.min(window.innerHeight,this.maxHeight);n=u(this.minWidth,o,n),i=u(this.minHeight,r,i),this.size={width:n,height:i},e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size})}}}},o,[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},null,"155d5470");l.options.__file="src/Resizer.vue";var d=l.exports;function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h="[-+]?[0-9]*.?[0-9]+",f=[{name:"px",regexp:new RegExp("^".concat(h,"px$"))},{name:"%",regexp:new RegExp("^".concat(h,"%$"))},{name:"px",regexp:new RegExp("^".concat(h,"$"))}],p=function(t){switch(c(t)){case"number":return{type:"px",value:t};case"string":return function(t){if("auto"===t)return{type:t,value:0};for(var e=0;e<f.length;e++){var n=f[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}}(t);default:return{type:"",value:t}}},v=function(t){if("string"!=typeof t)return 0<=t;var e=p(t);return("%"===e.type||"px"===e.type)&&0<e.value};var m=a({name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:v},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||v(t)}},pivotX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},pivotY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:d},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){var e=this;if(j.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var t=function(){if("undefined"!=typeof window)for(var t=["","WebKit","Moz","O","Ms"],e=0;e<t.length;e++){var n=t[e]+"MutationObserver";if(n in window)return window[n]}return!1}();t&&(this.mutationObserver=new t(function(t){e.updateRenderedHeight()}))}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy:function(){j.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.window,e=this.shift,n=this.pivotX,i=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=t.width-o,s=t.height-r,l=e.left+n*a,d=e.top+i*s;return{left:parseInt(u(0,a,l)),top:parseInt(u(0,s,d))}},trueModalWidth:function(){var t=this.window,e=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===e.widthType?t.width/100*e.width:e.width,a=Math.max(i,Math.min(t.width,o));return n?u(i,a,r):r},trueModalHeight:function(){var t=this.window,e=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,r=this.maxHeight,a="%"===e.heightType?t.height/100*e.height:e.height;if(n)return this.modal.renderedHeight;var s=Math.max(o,Math.min(t.height,r));return i?u(o,s,a):a},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},modalStyle:function(){return{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}}},watch:{visible:function(t){var e=this;t?(this.visibility.overlay=!0,setTimeout(function(){e.visibility.modal=!0,e.$nextTick(function(){e.addDraggableListeners(),e.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){e.visibility.overlay=!1,e.$nextTick(function(){e.removeDraggableListeners(),e.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent:function(t,e,n){if(this.name===t){var i=void 0===e?!this.visible:e;this.toggle(i,n)}},setInitialSize:function(){var t=this.modal,e=p(this.width),n=p(this.height);t.width=e.value,t.widthType=e.type,t.height=n.value,t.heightType=n.type},handleEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},handleWindowResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return r(function(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}({name:this.name,ref:this.$refs.modal},t))},handleModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height;var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},toggle:function(t,e){var n=this.reset,i=this.scrollable,o=this.visible;if(o!==t){var r=o?"before-close":"before-open";"before-open"===r?("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=this.createModalEvent({stop:function(){a=!0},state:t,params:e});this.$emit(r,s),a||(this.visible=t)}},getDraggableElement:function(){var t="string"!=typeof this.draggable?".v--modal-box":this.draggable;return t?this.$refs.overlay.querySelector(t):null},handleBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},callAfterEvent:function(t){t?this.connectObserver():this.disconnectObserver();var e=t?"opened":"closed",n=this.createModalEvent({state:t});this.$emit(e,n)},addDraggableListeners:function(){var r=this;if(this.draggable){var t=this.getDraggableElement();if(t){var a=0,s=0,l=0,d=0,u=function(t){return t.touches&&0<t.touches.length?t.touches[0]:t},e=function(t){var e=t.target;if(!e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName){var n=u(t),i=n.clientX,o=n.clientY;document.addEventListener("mousemove",c),document.addEventListener("touchmove",c),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=i,s=o,l=r.shift.left,d=r.shift.top}},c=function(t){var e=u(t),n=e.clientX,i=e.clientY;r.shift.left=l+n-a,r.shift.top=d+i-s,t.preventDefault()},h=function t(e){r.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",c),document.removeEventListener("touchmove",c),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}}},removeDraggableListeners:function(){},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter:function(){this.connectObserver()},afterTransitionEnter:function(){},afterTransitionLeave:function(){},ensureShiftInWindowBounds:function(){var t=this.window,e=this.shift,n=this.pivotX,i=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=t.width-o,s=t.height-r,l=e.left+n*a,d=e.top+i*s;this.shift.left-=l-u(0,a,l),this.shift.top-=d-u(0,s,d)}}},i,[],!1,function(t){var e=n(7);e.__inject__&&e.__inject__(t)},null,"eb464992");m.options.__file="src/Modal.vue";var g=m.exports,b=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(t){n.$emit("opened",t)},closed:function(t){n.$emit("closed",t)}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(t,e){return i("button",{key:e,class:t.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(t.title)},on:{click:function(t){t.stopPropagation(),n.click(e,t)}}},[n._v("\n      "+n._s(t.title)+"\n    ")])})):i("div",{staticClass:"vue-dialog-buttons-none"})])};b._withStripped=!0;var y=a({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){window.addEventListener("keyup",this.onKeyUp),this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",t)},click:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"click",i=this.buttons[t];i&&"function"==typeof i.handler?i.handler(t,e,{source:n}):this.$modal.hide("dialog")},onKeyUp:function(t){if(13===t.which&&0<this.buttons.length){var e=1===this.buttons.length?0:this.buttons.findIndex(function(t){return t.default});-1!==e&&this.click(e,t,"keypress")}}}},b,[],!1,function(t){var e=n(9);e.__inject__&&e.__inject__(t)},null,"711de4a4");y.options.__file="src/Dialog.vue";var w=y.exports,_=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(e){return i("modal",n._g(n._b({key:e.id,on:{closed:function(t){n.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[i(e.component,n._g(n._b({tag:"component",on:{close:function(t){n.$modal.hide(e.modalAttrs.name)}}},"component",e.componentAttrs,!1),n.$listeners))],1)}))};_._withStripped=!0;var x=a({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(t){var e=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=s(),a=i.name||"_dynamic_modal_"+r;this.modals.push({id:r,modalAttrs:function(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}({},i,{name:a}),modalListeners:o,component:t,componentAttrs:n}),this.$nextTick(function(){e.$modal.show(a)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},_,[],!1,null,null,"3c2bc6c5");x.options.__file="src/ModalsContainer.vue";var E=x.exports;function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"getModalsContainer",function(){return S});var S=function(t,e,n){if(!n._dynamicContainer&&e.injectModalsContainer){var i=(o=document.createElement("div"),document.body.appendChild(o),o);new t({parent:n,render:function(t){return t(E)}}).$mount(i)}var o;return n._dynamicContainer},k={install:function(a){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.event=new a,this.rootInstance=null;var t=s.componentName||"Modal",l=s.dynamicDefaults||{},o=function(t,e,n,i){var o=n&&n.root?n.root:k.rootInstance,r=S(a,s,o);r?r.add(t,e,function(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}({},l,n),i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};a.prototype.$modal={show:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];switch(O(t)){case"string":return function(t,e){k.event.$emit("toggle",t,!0,e)}.apply(void 0,[t].concat(n));case"object":case"function":return s.dynamic?o.apply(void 0,[t].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",t)}},hide:function(t,e){k.event.$emit("toggle",t,!1,e)},toggle:function(t,e){k.event.$emit("toggle",t,void 0,e)}},a.component(t,g),s.dialog&&a.component("VDialog",w),s.dynamic&&(a.component("ModalsContainer",E),a.mixin({beforeMount:function(){null===k.rootInstance&&(k.rootInstance=this.$root)}}))}}},j=e.default=k}])});