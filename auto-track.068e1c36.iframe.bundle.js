"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[248],{"./node_modules/.pnpm/@segment+analytics-next@1.70.0_encoding@0.1.13/node_modules/@segment/analytics-next/dist/pkg/core/auto-track.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{form:()=>form,link:()=>link});var _callback__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@segment+analytics-core@1.6.0/node_modules/@segment/analytics-core/dist/esm/callback/index.js");function link(links,event,properties,options){var _this=this;return links?((links instanceof Element?[links]:"toArray"in links?links.toArray():links).forEach((function(el){el.addEventListener("click",(function(elementEvent){var _a,_b,ev=event instanceof Function?event(el):event,props=properties instanceof Function?properties(el):properties,href=el.getAttribute("href")||el.getAttributeNS("http://www.w3.org/1999/xlink","href")||el.getAttribute("xlink:href")||(null===(_a=el.getElementsByTagName("a")[0])||void 0===_a?void 0:_a.getAttribute("href")),trackEvent=(0,_callback__WEBPACK_IMPORTED_MODULE_0__.s2)(_this.track(ev,props,null!=options?options:{}),null!==(_b=_this.settings.timeout)&&void 0!==_b?_b:500);(function linkNewTab(element,href){return!("_blank"!==element.target||!href)})(el,href)||function userNewTab(event){var typedEvent=event;return!!(typedEvent.ctrlKey||typedEvent.shiftKey||typedEvent.metaKey||typedEvent.button&&1==typedEvent.button)}(elementEvent)||href&&(elementEvent.preventDefault?elementEvent.preventDefault():elementEvent.returnValue=!1,trackEvent.catch(console.error).then((function(){window.location.href=href})).catch(console.error))}),!1)})),this):this}function form(forms,event,properties,options){var _this=this;return forms?(forms instanceof HTMLFormElement&&(forms=[forms]),forms.forEach((function(el){if(!(el instanceof Element))throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var handler=function(elementEvent){var _a;elementEvent.preventDefault?elementEvent.preventDefault():elementEvent.returnValue=!1;var ev=event instanceof Function?event(el):event,props=properties instanceof Function?properties(el):properties;(0,_callback__WEBPACK_IMPORTED_MODULE_0__.s2)(_this.track(ev,props,null!=options?options:{}),null!==(_a=_this.settings.timeout)&&void 0!==_a?_a:500).catch(console.error).then((function(){el.submit()})).catch(console.error)},$=window.jQuery||window.Zepto;$?$(el).submit(handler):el.addEventListener("submit",handler,!1)})),this):this}}}]);