!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-js-modal"]=t():e["vue-js-modal"]=t()}(window,function(){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=11)}([function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4).default)("27d83796",o,!1,{})},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4).default)("0e783494",o,!1,{})},function(e,t,n){var o=n(10);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4).default)("17757f60",o,!1,{})},function(e,t){e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(r).concat([i]).join("\n")}var a;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),a.push(r))}},a}},function(e,t,n){"use strict";function l(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return p});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},i=o&&(document.head||document.getElementsByTagName("head")[0]),r=null,a=0,u=!1,s=function(){},c=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(a,e,t,n){u=t,c=n||{};var s=l(a,e);return m(s),function(e){for(var t=[],n=0;n<s.length;n++){var o=s[n];(i=d[o.id]).refs--,t.push(i)}e?m(s=l(a,e)):s=[];for(n=0;n<t.length;n++){var i;if(0===(i=t[n]).refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete d[i.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var r=[];for(i=0;i<n.parts.length;i++)r.push(g(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(t){var n,o,e=document.querySelector("style["+h+'~="'+t.id+'"]');if(e){if(u)return s;e.parentNode.removeChild(e)}if(f){var i=a++;e=r||(r=v()),n=w.bind(null,e,i,!1),o=w.bind(null,e,i,!0)}else e=v(),n=function(e,t){var n=t.css,o=t.media,i=t.sourceMap;o&&e.setAttribute("media",o);c.ssrId&&e.setAttribute(h,t.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,e),o=function(){e.parentNode.removeChild(e)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n",""])},function(e,t,n){"use strict";var o=n(1);n.n(o).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.v--modal-content {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: rgb(255, 255, 255);\n    background-clip: padding-box;\n    border-radius: 0.3rem;\n    outline: 0;\n}\n.v--modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid rgb(233, 236, 239);\n}\n.v--modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 16px;\n}\n.v--modal-header button.close {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1;\n  color: rgb(0, 0, 0);\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n  padding: 16px;\n  margin: -16px -16px -16px auto;\n}\n.v--modal-header button.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.v--modal-header button.close:not(:disabled):not(.disabled):hover, .v--modal-header button.close:not(:disabled):not(.disabled):focus {\n  color: rgb(0, 0, 0);\n  text-decoration: none;\n  opacity: .75;\n}\n.v--modal-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-bottom: 1px solid rgb(233, 236, 239);\n    border-top-left-radius: 0.3rem;\n    border-top-right-radius: 0.3rem;\n    padding: 16px;\n    font-size: 18px;\n}\n.v--modal-block-scroll {\n    overflow: hidden;\n    width: 100vw;\n}\n.v--modal-overlay {\n    position: fixed;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.2);\n    z-index: 999;\n    opacity: 1;\n}\n.v--modal-overlay.scrollable {\n    height: 100%;\n    min-height: 100vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n    width: 100%;\n    min-height: 100%;\n    height: auto;\n}\n.v--modal-overlay .v--modal-box {\n    position: relative;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n    margin-bottom: 2px;\n}\n.v--modal {\n    background-color: white;\n    text-align: left;\n    border-radius: 3px;\n    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n    padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    left: 0;\n    top: 0;\n}\n.v--modal-top-right {\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n    transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n    opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n    transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n    opacity: 0;\n    transform: translateY(-20px);\n}\n",""])},function(e,t,n){"use strict";var o=n(2);n.n(o).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.overlayTransition}},[t.visibility.overlay?n("div",{ref:"overlay",class:t.overlayClass,attrs:{"aria-expanded":t.visibility.overlay.toString(),"data-modal":t.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e)},touchstart:function(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e)}}},[n("div",{staticClass:"v--modal-top-right"},[t._t("top-right")],2),t._v(" "),n("transition",{attrs:{name:t.transition},on:{"before-enter":t.beforeTransitionEnter,"after-enter":t.afterTransitionEnter,"after-leave":t.afterTransitionLeave}},[t.visibility.modal?n("div",{ref:"modal",class:t.modalClass,style:t.modalStyle},[n("div",{staticClass:"v--modal-content"},[t.hasHeaderSlot?n("div",{staticClass:"v--modal-header"},[t._t("header"),t._v(" "),t.closeButton?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeModal}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()],2):t._e(),t._v(" "),n("div",{staticClass:"v--modal-body"},[t._t("default")],2),t._v(" "),t.hasFooterSlot?n("div",{staticClass:"v--modal-footer"},[t._t("footer")],2):t._e()]),t._v(" "),t.resizable&&!t.isAutoHeight?n("resizer",{attrs:{"min-width":t.minWidth,"min-height":t.minHeight,"max-width":t.maxWidth,"max-height":t.maxHeight},on:{resize:t.handleModalResize}}):t._e()],1):t._e()])],1)]):t._e()])},i=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className})};i._withStripped=o._withStripped=!0;var s=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return function(){return(e++).toString()}}(),u=function(e,t,n){return n<e?e:t<n?t:n},r=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}({id:s(),timestamp:Date.now(),canceled:!1},e)},a={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(e){this.resize(e)},resize:function(e){var t=this.$el.parentElement;if(t){var n=e.clientX-t.offsetLeft,o=e.clientY-t.offsetTop,i=Math.min(window.innerWidth,this.maxWidth),r=Math.min(window.innerHeight,this.maxHeight);n=u(this.minWidth,i,n),o=u(this.minHeight,r,o),this.size={width:n,height:o},t.style.width=n+"px",t.style.height=o+"px",this.$emit("resize",{element:t,size:this.size})}}}};n(5);function l(e,t,n,o,i,r,a,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}var d=l(a,i,[],!1,null,null,null);d.options.__file="src/Resizer.vue";var c=d.exports;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f="[-+]?[0-9]*.?[0-9]+",p=[{name:"px",regexp:new RegExp("^".concat(f,"px$"))},{name:"%",regexp:new RegExp("^".concat(f,"%$"))},{name:"px",regexp:new RegExp("^".concat(f,"$"))}],m=function(e){switch(h(e)){case"number":return{type:"px",value:e};case"string":return function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<p.length;t++){var n=p[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}}(e);default:return{type:"",value:e}}},v=function(e){if("string"!=typeof e)return 0<=e;var t=m(e);return("%"===t.type||"px"===t.type)&&0<t.value};var g={name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},closeButton:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:function(e){return 0<=e}},minHeight:{type:Number,default:0,validator:function(e){return 0<=e}},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:v},height:{type:[Number,String],default:300,validator:function(e){return"auto"===e||v(e)}},pivotX:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}},pivotY:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}}},components:{Resizer:c},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){var t=this;if($.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var e=function(){if("undefined"!=typeof window)for(var e=["","WebKit","Moz","O","Ms"],t=0;t<e.length;t++){var n=e[t]+"MutationObserver";if(n in window)return window[n]}return!1}();e&&(this.mutationObserver=new e(function(e){t.updateRenderedHeight()}))}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy:function(){$.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{hasHeaderSlot:function(){return!!this.$slots.header},hasFooterSlot:function(){return!!this.$slots.footer},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var e=this.window,t=this.shift,n=this.pivotX,o=this.pivotY,i=this.trueModalWidth,r=this.trueModalHeight,a=e.width-i,s=e.height-r,l=t.left+n*a,d=t.top+o*s;return{left:parseInt(u(0,a,l)),top:parseInt(u(0,s,d))}},trueModalWidth:function(){var e=this.window,t=this.modal,n=this.adaptive,o=this.minWidth,i=this.maxWidth,r="%"===t.widthType?e.width/100*t.width:t.width,a=Math.max(o,Math.min(e.width,i));return n?u(o,a,r):r},trueModalHeight:function(){var e=this.window,t=this.modal,n=this.isAutoHeight,o=this.adaptive,i=this.minHeight,r=this.maxHeight,a="%"===t.heightType?e.height/100*t.height:t.height;if(n)return this.modal.renderedHeight;var s=Math.max(i,Math.min(e.height,r));return o?u(i,s,a):a},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},modalStyle:function(){return{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}}},watch:{visible:function(e){var t=this;e?(this.visibility.overlay=!0,setTimeout(function(){t.visibility.modal=!0,t.$nextTick(function(){t.addDraggableListeners(),t.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){t.visibility.overlay=!1,t.$nextTick(function(){t.removeDraggableListeners(),t.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent:function(e,t,n){if(this.name===e){var o=void 0===t?!this.visible:t;this.toggle(o,n)}},setInitialSize:function(){var e=this.modal,t=m(this.width),n=m(this.height);e.width=t.value,e.widthType=t.type,e.height=n.value,e.heightType=n.type},handleEscapeKeyUp:function(e){27===e.which&&this.visible&&this.closeModal()},closeModal:function(){this.$modal.hide(this.name)},handleWindowResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return r(function(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}({name:this.name,ref:this.$refs.modal},e))},handleModalResize:function(e){this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;var t=this.modal.size;this.$emit("resize",this.createModalEvent({size:t}))},toggle:function(e,t){var n=this.reset,o=this.scrollable,i=this.visible;if(i!==e){var r=i?"before-close":"before-open";"before-open"===r?("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),o&&document.body.classList.add("v--modal-block-scroll")):o&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=this.createModalEvent({stop:function(){a=!0},state:e,params:t});this.$emit(r,s),a||(this.visible=e)}},getDraggableElement:function(){var e="string"!=typeof this.draggable?".v--modal-box":this.draggable;return e?this.$refs.overlay.querySelector(e):null},handleBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},callAfterEvent:function(e){e?this.connectObserver():this.disconnectObserver();var t=e?"opened":"closed",n=this.createModalEvent({state:e});this.$emit(t,n)},addDraggableListeners:function(){var r=this;if(this.draggable){var e=this.getDraggableElement();if(e){var a=0,s=0,l=0,d=0,u=function(e){return e.touches&&0<e.touches.length?e.touches[0]:e},t=function(e){var t=e.target;if(!t||"INPUT"!==t.nodeName&&"TEXTAREA"!==t.nodeName){var n=u(e),o=n.clientX,i=n.clientY;document.addEventListener("mousemove",c),document.addEventListener("touchmove",c),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=o,s=i,l=r.shift.left,d=r.shift.top}},c=function(e){var t=u(e),n=t.clientX,o=t.clientY;r.shift.left=l+n-a,r.shift.top=d+o-s,e.preventDefault()},h=function e(t){r.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",c),document.removeEventListener("touchmove",c),document.removeEventListener("mouseup",e),document.removeEventListener("touchend",e),t.preventDefault()};e.addEventListener("mousedown",t),e.addEventListener("touchstart",t)}}},removeDraggableListeners:function(){},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter:function(){this.connectObserver()},afterTransitionEnter:function(){},afterTransitionLeave:function(){},ensureShiftInWindowBounds:function(){var e=this.window,t=this.shift,n=this.pivotX,o=this.pivotY,i=this.trueModalWidth,r=this.trueModalHeight,a=e.width-i,s=e.height-r,l=t.left+n*a,d=t.top+o*s;this.shift.left-=l-u(0,a,l),this.shift.top-=d-u(0,s,d)}}},b=(n(7),l(g,o,[],!1,null,null,null));b.options.__file="src/Modal.vue";var y=b.exports,w=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(e){return n.$emit("opened",e)},closed:function(e){return n.$emit("closed",e)}}},[o("div",{staticClass:"dialog-content"},[n.params.title?o("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?o(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):o("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?o("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(e,t){return o("button",{key:t,class:e.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(e.title)},on:{click:function(e){return e.stopPropagation(),n.click(t,e)}}},[n._v("\n      "+n._s(e.title)+"\n    ")])}),0):o("div",{staticClass:"vue-dialog-buttons-none"})])};w._withStripped=!0;var x={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(e){window.addEventListener("keyup",this.onKeyUp),this.params=e.params||{},this.$emit("before-opened",e)},beforeClosed:function(e){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",e)},click:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"click",o=this.buttons[e];o&&"function"==typeof o.handler?o.handler(e,t,{source:n}):this.$modal.hide("dialog")},onKeyUp:function(e){if(13===e.which&&0<this.buttons.length){var t=1===this.buttons.length?0:this.buttons.findIndex(function(e){return e.default});-1!==t&&this.click(t,e,"keypress")}}}},_=(n(9),l(x,w,[],!1,null,null,null));_.options.__file="src/Dialog.vue";var E=_.exports,S=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(t){return o("modal",n._g(n._b({key:t.id,on:{closed:function(e){return n.remove(t.id)}}},"modal",t.modalAttrs,!1),t.modalListeners),[o(t.component,n._g(n._b({tag:"component",on:{close:function(e){return n.$modal.hide(t.modalAttrs.name)}}},"component",t.componentAttrs,!1),n.$listeners))],1)}),1)};S._withStripped=!0;var k=l({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=s(),a=o.name||"_dynamic_modal_"+r;this.modals.push({id:r,modalAttrs:function(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}({},o,{name:a}),modalListeners:i,component:e,componentAttrs:n}),this.$nextTick(function(){t.$modal.show(a)})},remove:function(t){var e=this.modals.findIndex(function(e){return e.id===t});-1!==e&&this.modals.splice(e,1)}}},S,[],!1,null,null,null);k.options.__file="src/ModalsContainer.vue";var O=k.exports;function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"getModalsContainer",function(){return T});var T=function(e,t,n){if(!n._dynamicContainer&&t.injectModalsContainer){var o=(i=document.createElement("div"),document.body.appendChild(i),i);new e({parent:n,render:function(e){return e(O)}}).$mount(o)}var i;return n._dynamicContainer},M={install:function(a){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.event=new a,this.rootInstance=null;var e=s.componentName||"Modal",l=s.dynamicDefaults||{},i=function(e,t,n,o){var i=n&&n.root?n.root:M.rootInstance,r=T(a,s,i);r?r.add(e,t,function(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}({},l,n),o):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};a.prototype.$modal={show:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];switch(C(e)){case"string":return function(e,t){M.event.$emit("toggle",e,!0,t)}.apply(void 0,[e].concat(n));case"object":case"function":return s.dynamic?i.apply(void 0,[e].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",e)}},hide:function(e,t){M.event.$emit("toggle",e,!1,t)},toggle:function(e,t){M.event.$emit("toggle",e,void 0,t)}},a.component(e,y),s.dialog&&a.component("VDialog",E),s.dynamic&&(a.component("ModalsContainer",O),a.mixin({beforeMount:function(){null===M.rootInstance&&(M.rootInstance=this.$root)}}))}}},$=t.default=M}])});