"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[421],{"./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_extends});function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}},"./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>$e42e1063c40fb3ef$export$b9ecd428b558ff10});function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented:checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}},"./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05,t:()=>$6ed0406888f73fc4$export$43e446d32b3d21af});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach(ref=>$6ed0406888f73fc4$var$setRef(ref,node))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){let BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){let{scope:scope,children:children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context,Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value:value},children)}function useContext(consumerName,scope){let Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,useContext]}let createScope=()=>{let scopeContexts=defaultContexts.map(defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext));return function useScope(scope){let contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}}),[scope,contexts])}};return createScope.scopeName=scopeName,[$c512c27ab02ef895$export$fd42f52fd3ae1109,$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){let baseScope=scopes[0];if(1===scopes.length)return baseScope;let createScope1=()=>{let scopeHooks=scopes.map(createScope=>({useScope:createScope(),scopeName:createScope.scopeName}));return function useComposedScopes(overrideScopes){let nextScopes1=scopeHooks.reduce((nextScopes,{useScope:useScope,scopeName:scopeName})=>{let currentScope=useScope(overrideScopes)[`__scope${scopeName}`];return{...nextScopes,...currentScope}},{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({[`__scope${baseScope.scopeName}`]:nextScopes1}),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f,sG:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs");let $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((primitive,node)=>{let Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,forwardedRef)=>{let{asChild:asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},primitiveProps,{ref:forwardedRef}))});return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}},{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>target.dispatchEvent(event))}},"./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360,xV:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");let $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,forwardedRef)=>{let{children:children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){let newElement=slottable.props.children,newChildren=childrenArray.map(child=>child!==slottable?child:react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),children)});$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";let $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,forwardedRef)=>{let{children:children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,children.ref):children.ref}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null});$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){let overrideProps={...childProps};for(let propName in childProps){let slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>$b1b2314f5f9a1d84$export$25bec8c6f54ee79a});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){let callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{callbackRef.current=callback}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)},[])}},"./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop:prop,defaultProp:defaultProp,onChange:onChange=()=>{}}){let[uncontrolledProp,setUncontrolledProp]=$71cd76cc60e0454e$var$useUncontrolledState({defaultProp:defaultProp,onChange:onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(nextValue=>{if(isControlled){let value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)},[isControlled,prop,setUncontrolledProp,handleChange])]}function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp:defaultProp,onChange:onChange}){let uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)},[value,prevValueRef,handleChange]),uncontrolledState}},"./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let $9f79659886946c16$export$e5c5a5f917a5871c=(null==globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}}}]);