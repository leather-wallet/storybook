"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[907],{"./src/app/ui/pages/home.layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeLayout:()=>home_layout_stories_HomeLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>home_layout_stories});var RouteUrls,RouteUrls2,HomePageSelectors,HomePageSelectors2,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),jsx=__webpack_require__("./leather-styles/jsx/index.js"),web=__webpack_require__("./node_modules/.pnpm/@leather-wallet+ui@1.4.7_@babel+core@7.24.4_@babel+preset-env@7.24.6_@babel+core@7.24.4__@swc_jl3bvvc2qyntt5iaslaizesnru/node_modules/@leather-wallet/ui/dist-all/web.js");function HomeLayout(param){var children=param.children,accountCard=param.accountCard;return(0,jsx_runtime.jsxs)(jsx.BJ,{"data-testid":HomePageSelectors.HomePageContainer,maxWidth:{base:"unset",md:"fullPageMaxWidth"},px:{base:0,md:"space.05"},py:{base:0,md:"space.07"},gap:{base:0,md:"space.06"},width:"100%",bg:"ink.1",borderRadius:"lg",animation:"fadein",animationDuration:"500ms",children:[(0,jsx_runtime.jsx)(jsx.az,{px:{base:"space.05",md:0},pb:{base:"space.05",md:0},children:accountCard}),children]})}(RouteUrls2=RouteUrls||(RouteUrls={})).Onboarding="/get-started",RouteUrls2.BackUpSecretKey="/back-up-secret-key",RouteUrls2.SetPassword="/set-password",RouteUrls2.SignIn="/sign-in",RouteUrls2.ConnectLedger="connect-your-ledger",RouteUrls2.ConnectLedgerError="ledger-connection-error",RouteUrls2.ConnectLedgerSuccess="successfully-connected-your-ledger",RouteUrls2.DeviceBusy="please-wait",RouteUrls2.AwaitingDeviceUserAction="awaiting-approval",RouteUrls2.LedgerDisconnected="your-ledger-disconnected",RouteUrls2.LedgerOperationRejected="action-rejected",RouteUrls2.LedgerPublicKeyMismatch="wrong-ledger-device",RouteUrls2.LedgerDevicePayloadInvalid="ledger-payload-invalid",RouteUrls2.LedgerUnsupportedBrowser="unsupported-browser",RouteUrls2.LedgerOutdatedAppWarning="outdated-app-warning",RouteUrls2.LedgerBroadcastError="transaction-broadcast-error",RouteUrls2.ConnectLedgerStart="connect-ledger",RouteUrls2.Home="/",RouteUrls2.AddNetwork="/add-network",RouteUrls2.Fund="/fund/:currency",RouteUrls2.FundChooseCurrency="/fund-choose-currency",RouteUrls2.IncreaseStxFee="/increase-fee/stx/:txid",RouteUrls2.IncreaseBtcFee="/increase-fee/btc",RouteUrls2.Send="/send-transaction",RouteUrls2.ViewSecretKey="/view-secret-key",RouteUrls2.Activity="/activity",RouteUrls2.Receive="receive",RouteUrls2.ReceiveStx="receive/stx",RouteUrls2.ReceiveBtc="receive/btc",RouteUrls2.ReceiveBtcStamp="receive/btc-stamp",RouteUrls2.ReceiveCollectible="receive/collectible",RouteUrls2.ReceiveCollectibleOrdinal="receive/collectible/ordinal",RouteUrls2.Unlock="/unlock",RouteUrls2.BitcoinContractLockSuccess="/bitcoin-contract-lock-success",RouteUrls2.BitcoinContractLockError="/bitcoin-contract-lock-error",RouteUrls2.BitcoinContractList="/bitcoin-contract-list",RouteUrls2.EditNonce="edit-nonce",RouteUrls2.SignOutConfirm="sign-out",RouteUrls2.RetrieveTaprootFunds="retrieve-taproot-funds",RouteUrls2.SendCryptoAsset="/send",RouteUrls2.SendCryptoAssetForm="/send/:symbol",RouteUrls2.SendSip10Form="/send/:symbol/:contractId",RouteUrls2.SendCryptoAssetFormRecipientAccounts="recipient-accounts",RouteUrls2.SendCryptoAssetFormRecipientBns="recipient-bns",RouteUrls2.SendBtcChooseFee="/send/btc/choose-fee",RouteUrls2.SendBtcError="/send/btc/error",RouteUrls2.SendBtcConfirmation="/send/btc/confirm",RouteUrls2.SendBtcDisabled="/send/btc/disabled",RouteUrls2.SendStxConfirmation="/send/stx/confirm",RouteUrls2.SendStacksSip10Confirmation="/send/:symbol/confirm",RouteUrls2.SentBtcTxSummary="/sent/btc/:txId",RouteUrls2.SentStxTxSummary="/sent/stx/:txId",RouteUrls2.SendBrc20SendForm="/send/brc20/:ticker",RouteUrls2.SendBrc20ChooseFee="/send/brc20/:ticker/choose-fee",RouteUrls2.SendBrc20Confirmation="/send/brc20/:ticker/confirm",RouteUrls2.SentBrc20Summary="/send/brc20/:ticker/summary",RouteUrls2.SendOrdinalInscription="send/ordinal-inscription",RouteUrls2.SendOrdinalInscriptionChooseFee="choose-fee",RouteUrls2.SendOrdinalInscriptionReview="review",RouteUrls2.SendOrdinalInscriptionSent="sent",RouteUrls2.SendOrdinalInscriptionError="error",RouteUrls2.Swap="/swap/:base/:quote?",RouteUrls2.SwapAssetSelectBase="select-base",RouteUrls2.SwapAssetSelectQuote="select-quote",RouteUrls2.SwapError="/swap/error",RouteUrls2.SwapReview="/swap/:base/:quote/review",RouteUrls2.ProfileUpdateRequest="/update-profile",RouteUrls2.PsbtRequest="/psbt",RouteUrls2.SignatureRequest="/signature",RouteUrls2.TransactionRequest="/transaction",RouteUrls2.TransactionBroadcastError="broadcast-error",RouteUrls2.RpcGetAddresses="/get-addresses",RouteUrls2.RpcSignPsbt="/sign-psbt",RouteUrls2.RpcSignPsbtSummary="/sign-psbt/summary",RouteUrls2.RpcSendTransfer="/send-transfer",RouteUrls2.RpcSendTransferChooseFee="/send-transfer/choose-fee",RouteUrls2.RpcSendTransferConfirmation="/send-transfer/confirm",RouteUrls2.RpcSendTransferSummary="/send-transfer/summary",RouteUrls2.RpcReceiveBitcoinContractOffer="/bitcoin-contract-offer/:bitcoinContractOffer/:counterpartyWalletURL",RouteUrls2.RpcSignBip322Message="/sign-bip322-message",RouteUrls2.RpcStacksSignature="/sign-stacks-message",RouteUrls2.ChooseAccount="/choose-account",RouteUrls2.RequestError="/request-error",RouteUrls2.UnauthorizedRequest="/unauthorized-request",RouteUrls2.RpcSignStacksTransaction="/sign-stacks-transaction",(HomePageSelectors2=HomePageSelectors||(HomePageSelectors={})).AssetList="asset-list",HomePageSelectors2.HomePageContainer="home-page-container",HomePageSelectors2.ReceiveCryptoAssetBtn="receive-crypto-asset-btn",HomePageSelectors2.ReceiveBtcNativeSegwitQrCodeBtn="receive-native-segwit-qr-code-btn",HomePageSelectors2.ReceiveAssetsTab="receive-assets-tab",HomePageSelectors2.ReceiveCollectiblesTab="receive-collectibles-tab",HomePageSelectors2.ReceiveBtcTaprootQrCodeBtn="receive-taproot-qr-code-btn",HomePageSelectors2.ReceiveStxQrCodeBtn="receive-stx-qr-code-btn",HomePageSelectors2.SendCryptoAssetBtn="send-crypto-asset-btn",HomePageSelectors2.ActivityTabBtn="tab-activity",HomePageSelectors2.BalancesTabBtn="tab-balances",HomePageSelectors2.SwapBtn="swap-btn",HomePageSelectors2.FundAccountBtn="fund-account-btn";try{HomeLayout.displayName="HomeLayout",HomeLayout.__docgenInfo={description:"",displayName:"HomeLayout",props:{accountCard:{defaultValue:null,description:"",name:"accountCard",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/pages/home.layout.tsx#HomeLayout"]={docgenInfo:HomeLayout.__docgenInfo,name:"HomeLayout",path:"src/app/ui/pages/home.layout.tsx#HomeLayout"})}catch(__react_docgen_typescript_loader_error){}const home_layout_stories={component:HomeLayout,tags:["autodocs"],title:"Pages/Home"};function home_layout_stories_HomeLayout(){return(0,jsx_runtime.jsx)(HomeLayout,{accountCard:(0,jsx_runtime.jsxs)(jsx.so,{justify:"space-between",children:[(0,jsx_runtime.jsx)(web.K0,{icon:(0,jsx_runtime.jsx)(web.Kp,{}),label:"Send"}),(0,jsx_runtime.jsx)(web.K0,{icon:(0,jsx_runtime.jsx)(web.ZL,{}),label:"Receive"}),(0,jsx_runtime.jsx)(web.K0,{icon:(0,jsx_runtime.jsx)(web.c1,{}),label:"Buy"}),(0,jsx_runtime.jsx)(web.K0,{icon:(0,jsx_runtime.jsx)(web.f6,{}),label:"Swap"})]}),children:(0,jsx_runtime.jsxs)(jsx.BJ,{flexGrow:1,mt:"space.05",gap:"space.06",children:[(0,jsx_runtime.jsx)(web.tU.Root,{children:(0,jsx_runtime.jsxs)(web.tU.List,{children:[(0,jsx_runtime.jsx)(web.tU.Trigger,{"data-testid":"tab-assets",value:RouteUrls.Home,children:"Assets"}),(0,jsx_runtime.jsx)(web.tU.Trigger,{"data-testid":"tab-activity",value:"".concat(RouteUrls.Home).concat(RouteUrls.Activity),children:"Activity"})]})}),(0,jsx_runtime.jsx)(jsx.az,{width:"100%",height:"400px",bg:"lightModeRed.300"})]})})}const __namedExportsOrder=["HomeLayout"]}}]);