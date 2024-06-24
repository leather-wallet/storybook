"use strict";(self.webpackChunk_leather_io_extension=self.webpackChunk_leather_io_extension||[]).push([[392],{"./node_modules/.pnpm/@radix-ui+react-popper@1.1.3_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mz:()=>$cf1ac5d9fe0e8206$export$b688253958b8dfe7,i3:()=>$cf1ac5d9fe0e8206$export$21b07c8f274aebd5,UC:()=>$cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,bL:()=>$cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,Bk:()=>$cf1ac5d9fe0e8206$export$722aac194ae923});var esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),floating_ui_dom=__webpack_require__("./node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");var index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!==b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react.useRef(value);return index((()=>{ref.current=value})),ref}var floating_ui_core=__webpack_require__("./node_modules/.pnpm/@floating-ui+core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs");const $7e8f5cd07187803e$export$21b07c8f274aebd5=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,width=10,height=5,...arrowProps}=props;return(0,react.createElement)(dist.sG.svg,(0,esm_extends.A)({},arrowProps,{ref:forwardedRef,width,height,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),props.asChild?children:(0,react.createElement)("polygon",{points:"0,0 30,0 15,10"}))})),$7e8f5cd07187803e$export$be92b6f5f03c0fe9=$7e8f5cd07187803e$export$21b07c8f274aebd5;var react_compose_refs_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const[$cf1ac5d9fe0e8206$var$createPopperContext,$cf1ac5d9fe0e8206$export$722aac194ae923]=(0,react_context_dist.A)("Popper"),[$cf1ac5d9fe0e8206$var$PopperProvider,$cf1ac5d9fe0e8206$var$usePopperContext]=$cf1ac5d9fe0e8206$var$createPopperContext("Popper"),$cf1ac5d9fe0e8206$export$badac9ada3a0bdf9=props=>{const{__scopePopper,children}=props,[anchor,setAnchor]=(0,react.useState)(null);return(0,react.createElement)($cf1ac5d9fe0e8206$var$PopperProvider,{scope:__scopePopper,anchor,onAnchorChange:setAnchor},children)},$cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopePopper,virtualRef,...anchorProps}=props,context=$cf1ac5d9fe0e8206$var$usePopperContext("PopperAnchor",__scopePopper),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref);return(0,react.useEffect)((()=>{context.onAnchorChange((null==virtualRef?void 0:virtualRef.current)||ref.current)})),virtualRef?null:(0,react.createElement)(dist.sG.div,(0,esm_extends.A)({},anchorProps,{ref:composedRefs}))})),[$cf1ac5d9fe0e8206$var$PopperContentProvider,$cf1ac5d9fe0e8206$var$useContentContext]=$cf1ac5d9fe0e8206$var$createPopperContext("PopperContent"),$cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc=(0,react.forwardRef)(((props,forwardedRef)=>{var _arrowSize$width,_arrowSize$height,_middlewareData$arrow,_middlewareData$arrow2,_middlewareData$arrow3,_middlewareData$trans,_middlewareData$trans2,_middlewareData$hide;const{__scopePopper,side="bottom",sideOffset=0,align="center",alignOffset=0,arrowPadding=0,avoidCollisions=!0,collisionBoundary=[],collisionPadding:collisionPaddingProp=0,sticky="partial",hideWhenDetached=!1,updatePositionStrategy="optimized",onPlaced,...contentProps}=props,context=$cf1ac5d9fe0e8206$var$usePopperContext("PopperContent",__scopePopper),[content,setContent]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,(node=>setContent(node))),[arrow,setArrow]=(0,react.useState)(null),arrowSize=function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react.useState)(void 0);return(0,react_use_layout_effect_dist.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}(arrow),arrowWidth=null!==(_arrowSize$width=null==arrowSize?void 0:arrowSize.width)&&void 0!==_arrowSize$width?_arrowSize$width:0,arrowHeight=null!==(_arrowSize$height=null==arrowSize?void 0:arrowSize.height)&&void 0!==_arrowSize$height?_arrowSize$height:0,desiredPlacement=side+("center"!==align?"-"+align:""),collisionPadding="number"==typeof collisionPaddingProp?collisionPaddingProp:{top:0,right:0,bottom:0,left:0,...collisionPaddingProp},boundary=Array.isArray(collisionBoundary)?collisionBoundary:[collisionBoundary],hasExplicitBoundaries=boundary.length>0,detectOverflowOptions={padding:collisionPadding,boundary:boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:hasExplicitBoundaries},{refs,floatingStyles,placement,isPositioned,middlewareData}=function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react.useState(null),[_floating,_setFloating]=react.useState(null),setReference=react.useCallback((node=>{node!==referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[]),setFloating=react.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react.useRef(null),floatingRef=react.useRef(null),dataRef=react.useRef(data),hasWhileElementsMounted=null!=whileElementsMounted,whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,floating_ui_dom.rD)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef,hasWhileElementsMounted]);const refs=react.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}({strategy:"fixed",placement:desiredPlacement,whileElementsMounted:(...args)=>(0,floating_ui_dom.ll)(...args,{animationFrame:"always"===updatePositionStrategy}),elements:{reference:context.anchor},middleware:[(0,floating_ui_core.cY)({mainAxis:sideOffset+arrowHeight,alignmentAxis:alignOffset}),avoidCollisions&&(0,floating_ui_dom.BN)({mainAxis:!0,crossAxis:!1,limiter:"partial"===sticky?(0,floating_ui_dom.ER)():void 0,...detectOverflowOptions}),avoidCollisions&&(0,floating_ui_dom.UU)({...detectOverflowOptions}),(0,floating_ui_dom.Ej)({...detectOverflowOptions,apply:({elements,rects,availableWidth,availableHeight})=>{const{width:anchorWidth,height:anchorHeight}=rects.reference,contentStyle=elements.floating.style;contentStyle.setProperty("--radix-popper-available-width",`${availableWidth}px`),contentStyle.setProperty("--radix-popper-available-height",`${availableHeight}px`),contentStyle.setProperty("--radix-popper-anchor-width",`${anchorWidth}px`),contentStyle.setProperty("--radix-popper-anchor-height",`${anchorHeight}px`)}}),arrow&&(options={element:arrow,padding:arrowPadding},{name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,floating_ui_dom.UE)({element:element.current,padding}).fn(state):{}:element?(0,floating_ui_dom.UE)({element,padding}).fn(state):{}}}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth,arrowHeight}),hideWhenDetached&&(0,floating_ui_dom.jD)({strategy:"referenceHidden",...detectOverflowOptions})]});var options;const[placedSide,placedAlign]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),handlePlaced=(0,react_use_callback_ref_dist.c)(onPlaced);(0,react_use_layout_effect_dist.N)((()=>{isPositioned&&(null==handlePlaced||handlePlaced())}),[isPositioned,handlePlaced]);const arrowX=null===(_middlewareData$arrow=middlewareData.arrow)||void 0===_middlewareData$arrow?void 0:_middlewareData$arrow.x,arrowY=null===(_middlewareData$arrow2=middlewareData.arrow)||void 0===_middlewareData$arrow2?void 0:_middlewareData$arrow2.y,cannotCenterArrow=0!==(null===(_middlewareData$arrow3=middlewareData.arrow)||void 0===_middlewareData$arrow3?void 0:_middlewareData$arrow3.centerOffset),[contentZIndex,setContentZIndex]=(0,react.useState)();return(0,react_use_layout_effect_dist.N)((()=>{content&&setContentZIndex(window.getComputedStyle(content).zIndex)}),[content]),(0,react.createElement)("div",{ref:refs.setFloating,"data-radix-popper-content-wrapper":"",style:{...floatingStyles,transform:isPositioned?floatingStyles.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:contentZIndex,"--radix-popper-transform-origin":[null===(_middlewareData$trans=middlewareData.transformOrigin)||void 0===_middlewareData$trans?void 0:_middlewareData$trans.x,null===(_middlewareData$trans2=middlewareData.transformOrigin)||void 0===_middlewareData$trans2?void 0:_middlewareData$trans2.y].join(" ")},dir:props.dir},(0,react.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider,{scope:__scopePopper,placedSide,onArrowChange:setArrow,arrowX,arrowY,shouldHideArrow:cannotCenterArrow},(0,react.createElement)(dist.sG.div,(0,esm_extends.A)({"data-side":placedSide,"data-align":placedAlign},contentProps,{ref:composedRefs,style:{...contentProps.style,animation:isPositioned?void 0:"none",opacity:null!==(_middlewareData$hide=middlewareData.hide)&&void 0!==_middlewareData$hide&&_middlewareData$hide.referenceHidden?0:void 0}}))))})),$cf1ac5d9fe0e8206$var$OPPOSITE_SIDE={top:"bottom",right:"left",bottom:"top",left:"right"},$cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0=(0,react.forwardRef)((function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props,forwardedRef){const{__scopePopper,...arrowProps}=props,contentContext=$cf1ac5d9fe0e8206$var$useContentContext("PopperArrow",__scopePopper),baseSide=$cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];return(0,react.createElement)("span",{ref:contentContext.onArrowChange,style:{position:"absolute",left:contentContext.arrowX,top:contentContext.arrowY,[baseSide]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[contentContext.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[contentContext.placedSide],visibility:contentContext.shouldHideArrow?"hidden":void 0}},(0,react.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9,(0,esm_extends.A)({},arrowProps,{ref:forwardedRef,style:{...arrowProps.style,display:"block"}})))}));function $cf1ac5d9fe0e8206$var$isNotNull(value){return null!==value}const $cf1ac5d9fe0e8206$var$transformOrigin=options=>({name:"transformOrigin",options,fn(data){var _middlewareData$arrow4,_middlewareData$arrow5,_middlewareData$arrow6,_middlewareData$arrow7,_middlewareData$arrow8;const{placement,rects,middlewareData}=data,isArrowHidden=0!==(null===(_middlewareData$arrow4=middlewareData.arrow)||void 0===_middlewareData$arrow4?void 0:_middlewareData$arrow4.centerOffset),arrowWidth=isArrowHidden?0:options.arrowWidth,arrowHeight=isArrowHidden?0:options.arrowHeight,[placedSide,placedAlign]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),noArrowAlign={start:"0%",center:"50%",end:"100%"}[placedAlign],arrowXCenter=(null!==(_middlewareData$arrow5=null===(_middlewareData$arrow6=middlewareData.arrow)||void 0===_middlewareData$arrow6?void 0:_middlewareData$arrow6.x)&&void 0!==_middlewareData$arrow5?_middlewareData$arrow5:0)+arrowWidth/2,arrowYCenter=(null!==(_middlewareData$arrow7=null===(_middlewareData$arrow8=middlewareData.arrow)||void 0===_middlewareData$arrow8?void 0:_middlewareData$arrow8.y)&&void 0!==_middlewareData$arrow7?_middlewareData$arrow7:0)+arrowHeight/2;let x="",y="";return"bottom"===placedSide?(x=isArrowHidden?noArrowAlign:`${arrowXCenter}px`,y=-arrowHeight+"px"):"top"===placedSide?(x=isArrowHidden?noArrowAlign:`${arrowXCenter}px`,y=`${rects.floating.height+arrowHeight}px`):"right"===placedSide?(x=-arrowHeight+"px",y=isArrowHidden?noArrowAlign:`${arrowYCenter}px`):"left"===placedSide&&(x=`${rects.floating.width+arrowHeight}px`,y=isArrowHidden?noArrowAlign:`${arrowYCenter}px`),{data:{x,y}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement){const[side,align="center"]=placement.split("-");return[side,align]}const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=$cf1ac5d9fe0e8206$export$badac9ada3a0bdf9,$cf1ac5d9fe0e8206$export$b688253958b8dfe7=$cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d,$cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2=$cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc,$cf1ac5d9fe0e8206$export$21b07c8f274aebd5=$cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0}}]);