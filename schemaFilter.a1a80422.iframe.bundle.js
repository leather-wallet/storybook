"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[3104],{"./node_modules/.pnpm/@segment+analytics-next@1.66.0/node_modules/@segment/analytics-next/dist/pkg/lib/is-plan-event-enabled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPlanEventEnabled(plan,planEvent){var _a,_b;return"boolean"==typeof(null==planEvent?void 0:planEvent.enabled)?planEvent.enabled:null===(_b=null===(_a=null==plan?void 0:plan.__default)||void 0===_a?void 0:_a.enabled)||void 0===_b||_b}__webpack_require__.d(__webpack_exports__,{j:()=>isPlanEventEnabled})},"./node_modules/.pnpm/@segment+analytics-next@1.66.0/node_modules/@segment/analytics-next/dist/pkg/plugins/schema-filter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{schemaFilter:()=>schemaFilter});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"),_lib_is_plan_event_enabled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@segment+analytics-next@1.66.0/node_modules/@segment/analytics-next/dist/pkg/lib/is-plan-event-enabled.js");function schemaFilter(track,settings){function filter(ctx){var plan=track,ev=ctx.event.event;if(plan&&ev){var planEvent=plan[ev];if(!(0,_lib_is_plan_event_enabled__WEBPACK_IMPORTED_MODULE_0__.j)(plan,planEvent))return ctx.updateEvent("integrations",(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},ctx.event.integrations),{All:!1,"Segment.io":!0})),ctx;var disabledActions=function disabledActionDestinations(plan,settings){var _a,_b;if(!plan||!Object.keys(plan))return{};var disabledIntegrations=plan.integrations?Object.keys(plan.integrations).filter((function(i){return!1===plan.integrations[i]})):[],disabledRemotePlugins=[];return(null!==(_a=settings.remotePlugins)&&void 0!==_a?_a:[]).forEach((function(p){disabledIntegrations.forEach((function(int){p.creationName==int&&disabledRemotePlugins.push(p.name)}))})),(null!==(_b=settings.remotePlugins)&&void 0!==_b?_b:[]).reduce((function(acc,p){return p.settings.subscriptions&&disabledRemotePlugins.includes(p.name)&&p.settings.subscriptions.forEach((function(sub){return acc["".concat(p.name," ").concat(sub.partnerAction)]=!1})),acc}),{})}(planEvent,settings);ctx.updateEvent("integrations",(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},ctx.event.integrations),null==planEvent?void 0:planEvent.integrations),disabledActions))}return ctx}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:filter,alias:filter,track:filter,identify:filter,group:filter}}}}]);