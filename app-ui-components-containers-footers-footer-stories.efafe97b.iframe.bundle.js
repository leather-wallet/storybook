"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[198],{"./src/app/ui/components/containers/footers/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>footer_stories_Footer,FooterWithBalancesAbove:()=>FooterWithBalancesAbove,FooterWithLink:()=>FooterWithLink,FooterWithText:()=>FooterWithText,ReceiveTokensFooter:()=>ReceiveTokensFooter,RequestPasswordFooter:()=>RequestPasswordFooter,SignOutConfirmFooter:()=>SignOutConfirmFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>footer_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),jsx=__webpack_require__("./leather-styles/jsx/index.js"),web=__webpack_require__("./node_modules/.pnpm/@leather-wallet+ui@1.4.7_@babel+core@7.24.4_@babel+preset-env@7.24.6_@babel+core@7.24.4__@swc_jl3bvvc2qyntt5iaslaizesnru/node_modules/@leather-wallet/ui/dist-all/web.js");function Footer(param){var children=param.children,_param_variant=param.variant,variant=void 0===_param_variant?"page":_param_variant,_param_flexDirection=param.flexDirection,flexDirection=void 0===_param_flexDirection?"column":_param_flexDirection;return(0,jsx_runtime.jsx)(jsx.I4.footer,{gap:"space.05",p:"space.05",bottom:0,width:"100vw",maxWidth:"card"===variant?"pageWidth":"100%",zIndex:1,minHeight:"footerHeight",position:"card"===variant?" absolute":"fixed",borderBottomRadius:"md",bg:"page"===variant?"ink.background-primary":void 0,borderTop:"page"===variant?" default":"none",children:(0,jsx_runtime.jsx)(jsx.so,{flexDirection,width:"100%",gap:"space.04",children})})}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{variant:{defaultValue:{value:"page"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"page"'},{value:'"card"'}]}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/components/containers/footers/footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/app/ui/components/containers/footers/footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}const footer_stories={component:Footer,tags:["autodocs"],title:"Containers/Footer",parameters:{controls:{disable:!0,hideNoControlsWarning:!0}}};function footer_stories_Footer(){return(0,jsx_runtime.jsx)(Footer,{children:(0,jsx_runtime.jsx)(web.$n,{fullWidth:!0,onClick:function(){return null},children:"Create new account"})})}function SignOutConfirmFooter(){return(0,jsx_runtime.jsx)(Footer,{children:(0,jsx_runtime.jsxs)(jsx.so,{flexDirection:"row",gap:"space.04",children:[(0,jsx_runtime.jsx)(web.$n,{color:"gray",flexGrow:1,variant:"outline",onClick:function(){return null},children:"Cancel"}),(0,jsx_runtime.jsx)(web.$n,{_hover:{opacity:.8},background:"red.action-primary-default",color:"lightModeBrown.1",flexGrow:1,onClick:function(){return null},type:"submit",children:"Sign out"})]})})}function ReceiveTokensFooter(){return(0,jsx_runtime.jsx)(Footer,{children:(0,jsx_runtime.jsx)(web.$n,{fullWidth:!0,mt:"space.05",onClick:function(){return null},children:"Copy address"})})}function RequestPasswordFooter(){return(0,jsx_runtime.jsx)(Footer,{children:(0,jsx_runtime.jsx)(web.$n,{onClick:function(){return null},children:"Continue"})})}function FooterWithText(){return(0,jsx_runtime.jsxs)(Footer,{children:[(0,jsx_runtime.jsx)(web.$n,{fullWidth:!0,onClick:function(){return null},children:"Continue"}),(0,jsx_runtime.jsx)(jsx.so,{width:"100%",justifyContent:"center",children:(0,jsx_runtime.jsxs)(jsx.I4.span,{textStyle:"caption.01",display:"block",textAlign:"left",children:["Leather Wallet will now be provided by Leather Wallet LLC [a subsidiary of Nassau Machines Inc]. Please review and accept Leather Wallet"," ",(0,jsx_runtime.jsx)(web.N_,{href:"https://leather.io/terms",textDecoration:"underline",target:"_blank",children:"Terms of Service"})," ","and"," ",(0,jsx_runtime.jsx)(web.N_,{href:"https://leather.io/privacy-policy",target:"_blank",textDecoration:"underline",children:"Privacy Policy"}),"."]})})]})}function FooterWithLink(){return(0,jsx_runtime.jsxs)(Footer,{children:[(0,jsx_runtime.jsx)(web.$n,{fullWidth:!0,onClick:function(){return null},children:"Button"}),(0,jsx_runtime.jsx)(jsx.so,{width:"100%",justifyContent:"center",children:(0,jsx_runtime.jsx)(web.N_,{href:"",target:"_blank",cursor:"pointer",textDecoration:"underline",textStyle:"label.01",children:"View all addresses"})})]})}function FooterWithBalancesAbove(){return(0,jsx_runtime.jsxs)(Footer,{children:[(0,jsx_runtime.jsxs)(jsx.so,{justifyContent:"space-between",alignItems:"center",alignSelf:"stretch",children:[(0,jsx_runtime.jsx)(jsx.I4.span,{textStyle:"label.02",children:"0.00048208 BTC"}),(0,jsx_runtime.jsx)(jsx.I4.span,{textStyle:"label.02",children:"$ 1,100.00"})]}),(0,jsx_runtime.jsx)(web.$n,{onClick:function(){return null},type:"submit",children:"Button"})]})}const __namedExportsOrder=["Footer","SignOutConfirmFooter","ReceiveTokensFooter","RequestPasswordFooter","FooterWithText","FooterWithLink","FooterWithBalancesAbove"]}}]);