"use strict";(self.webpackChunk_leather_io_extension=self.webpackChunk_leather_io_extension||[]).push([[588],{"./leather-styles/recipes/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>button_button,n:()=>link_link});var helpers=__webpack_require__("./leather-styles/helpers.js"),conditions=__webpack_require__("./leather-styles/css/conditions.js"),css=__webpack_require__("./leather-styles/css/css.js"),cva=__webpack_require__("./leather-styles/css/cva.js"),cx=__webpack_require__("./leather-styles/css/cx.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var createRecipe=function(name,defaultVariants,compoundVariants){var getVariantProps=function(variants){return function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}(_define_property({},name,"__ignore__"),defaultVariants,(0,helpers.oE)(variants))};return{recipeFn:function(variants){var withCompoundVariants=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],recipeCss=(0,helpers.Yb)({conditions:{shift:conditions.Lg,finalize:conditions.LD,breakpoints:{keys:["base","sm","md","lg","xl","2xl"]}},utility:{prefix:"leather",toHash:function(path,hashFn){return hashFn(path.join(":"))},transform:function(prop,value){return(0,cva.jC)(name,compoundVariants,variants,prop),"__ignore__"===value?{className:name}:(value=(0,helpers.BB)(value),{className:"".concat(name,"--").concat(prop,"_").concat(value)})}}}),recipeStyles=getVariantProps(variants);if(withCompoundVariants){var compoundVariantStyles=(0,cva.Yc)(compoundVariants,recipeStyles);return(0,cx.cx)(recipeCss(recipeStyles),(0,css.AH)(compoundVariantStyles))}return recipeCss(recipeStyles)},getVariantProps,__getCompoundVariantCss__:function(variants){return(0,cva.Yc)(compoundVariants,getVariantProps(variants))}}},mergeRecipes=function(recipeA,recipeB){if(recipeA&&!recipeB)return recipeA;if(!recipeA&&recipeB)return recipeB;var variantKeys=(0,helpers.sb)(recipeA.variantKeys,recipeB.variantKeys),variantMap=variantKeys.reduce((function(acc,key){return acc[key]=(0,helpers.sb)(recipeA.variantMap[key],recipeB.variantMap[key]),acc}),{});return Object.assign((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,cx.cx)(recipeA.apply(void 0,_to_consumable_array(args)),recipeB.apply(void 0,_to_consumable_array(args)))}),{__recipe__:!0,__name__:"".concat(recipeA.__name__," ").concat(recipeB.__name__),raw:function(props){return props},variantKeys,variantMap,splitVariantProps:function splitVariantProps(props){return(0,helpers.rg)(props,variantKeys)}})},buttonFn=createRecipe("button",{size:"md",variant:"solid"},[{css:{_active:{bg:"ink.component-background-pressed"},_hover:{bg:"ink.background-primary"},_loading:{_after:{borderColor:"ink.text-primary"}},bg:"ink.background-secondary",color:"ink.text-primary"},invert:!0,variant:"solid"},{css:{_active:{bg:"ink.text-primary"},_before:{borderColor:"ink.background-secondary"},_hover:{bg:"ink.action-primary-hover"},_loading:{_after:{borderColor:"ink.text-primary"}},border:"1px solid {colors.ink.background-secondary}",color:"ink.background-secondary"},invert:!0,variant:"outline"},{css:{p:"space.02"},trigger:!0,variant:"ghost"}]),buttonVariantMap={size:["sm","md"],variant:["solid","outline","ghost"],invert:["true"],fullWidth:["true"],trigger:["true"]},buttonVariantKeys=Object.keys(buttonVariantMap),button_button=Object.assign((0,helpers.ph)(buttonFn.recipeFn),{__recipe__:!0,__name__:"button",__getCompoundVariantCss__:buttonFn.__getCompoundVariantCss__,raw:function(props){return props},variantKeys:buttonVariantKeys,variantMap:buttonVariantMap,merge:function merge(recipe){return mergeRecipes(this,recipe)},splitVariantProps:function splitVariantProps(props){return(0,helpers.rg)(props,buttonVariantKeys)},getVariantProps:buttonFn.getVariantProps}),linkFn=createRecipe("link",{size:"md",variant:"underlined"},[{css:{_focus:{_before:{background:"ink.background-primary",visibility:"visible"},outline:0},_hover:{_before:{background:"ink.background-primary",visibility:"visible"}},color:"ink.background-secondary"},invert:!0,variant:"underlined"},{css:{_before:{content:'""',background:"ink.text-non-interactive",bottom:"-2px",height:"2px",left:0,position:"absolute",right:0},color:"ink.text-non-interactive",cursor:"not-allowed"},disabled:!0,variant:"underlined"},{css:{_before:{content:'""',background:"ink.text-non-interactive",bottom:"-2px",height:"2px",left:0,position:"absolute",right:0,visibility:"visible"},color:"ink.text-non-interactive",cursor:"not-allowed"},disabled:!0,variant:"text"}]),linkVariantMap={size:["sm","md","lg"],variant:["underlined","text"],invert:["true"],disabled:["true"],fullWidth:["true"]},linkVariantKeys=Object.keys(linkVariantMap),link_link=Object.assign((0,helpers.ph)(linkFn.recipeFn),{__recipe__:!0,__name__:"link",__getCompoundVariantCss__:linkFn.__getCompoundVariantCss__,raw:function(props){return props},variantKeys:linkVariantKeys,variantMap:linkVariantMap,merge:function merge(recipe){return mergeRecipes(this,recipe)},splitVariantProps:function splitVariantProps(props){return(0,helpers.rg)(props,linkVariantKeys)},getVariantProps:linkFn.getVariantProps})},"./leather-styles/tokens/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{}}]);