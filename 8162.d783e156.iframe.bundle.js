/*! For license information please see 8162.d783e156.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[8162,5781],{"./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/.pnpm/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H4:()=>$cddcb0b647441e34$export$fb8d7f40caaeea67,_V:()=>$cddcb0b647441e34$export$3e431a229df88919,bL:()=>$cddcb0b647441e34$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$cddcb0b647441e34$var$createAvatarContext,$cddcb0b647441e34$export$90370d16b488820f]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.A)("Avatar"),[$cddcb0b647441e34$var$AvatarProvider,$cddcb0b647441e34$var$useAvatarContext]=$cddcb0b647441e34$var$createAvatarContext("Avatar"),$cddcb0b647441e34$export$e2255cf6045e8d47=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cddcb0b647441e34$var$AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},avatarProps,{ref:forwardedRef})))})),$cddcb0b647441e34$export$2cd8ae1985206fe8=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function $cddcb0b647441e34$var$useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.c)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.img,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},imageProps,{ref:forwardedRef,src})):null})),$cddcb0b647441e34$export$69fffb6a9571fbfe=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0===delayMs);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},fallbackProps,{ref:forwardedRef})):null}));const $cddcb0b647441e34$export$be92b6f5f03c0fe9=$cddcb0b647441e34$export$e2255cf6045e8d47,$cddcb0b647441e34$export$3e431a229df88919=$cddcb0b647441e34$export$2cd8ae1985206fe8,$cddcb0b647441e34$export$fb8d7f40caaeea67=$cddcb0b647441e34$export$69fffb6a9571fbfe},"./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05,t:()=>$6ed0406888f73fc4$export$43e446d32b3d21af});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1,q:()=>$c512c27ab02ef895$export$fd42f52fd3ae1109});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);function Provider(props){const{children,...context}=props,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f,sG:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs");const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>target.dispatchEvent(event)))}},"./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360,xV:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,children.ref):children.ref}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>$b1b2314f5f9a1d84$export$25bec8c6f54ee79a});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}},"./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);