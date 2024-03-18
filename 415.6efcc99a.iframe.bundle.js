"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[415],{"./node_modules/.pnpm/@stacks+transactions@6.9.0/node_modules/@stacks/transactions/dist/esm/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ChainID,StacksMessageType,PayloadType,ClarityVersion,AnchorMode,TransactionVersion,PostConditionMode,PostConditionType,AuthType,AddressHashMode,AddressVersion,PubKeyEncoding,FungibleConditionCode,NonFungibleConditionCode,PostConditionPrincipalID,AssetType,TxRejectedReason;__webpack_require__.d(__webpack_exports__,{n_:()=>ChainID}),function(ChainID){ChainID[ChainID.Testnet=2147483648]="Testnet",ChainID[ChainID.Mainnet=1]="Mainnet"}(ChainID||(ChainID={})),ChainID.Mainnet,function(StacksMessageType){StacksMessageType[StacksMessageType.Address=0]="Address",StacksMessageType[StacksMessageType.Principal=1]="Principal",StacksMessageType[StacksMessageType.LengthPrefixedString=2]="LengthPrefixedString",StacksMessageType[StacksMessageType.MemoString=3]="MemoString",StacksMessageType[StacksMessageType.AssetInfo=4]="AssetInfo",StacksMessageType[StacksMessageType.PostCondition=5]="PostCondition",StacksMessageType[StacksMessageType.PublicKey=6]="PublicKey",StacksMessageType[StacksMessageType.LengthPrefixedList=7]="LengthPrefixedList",StacksMessageType[StacksMessageType.Payload=8]="Payload",StacksMessageType[StacksMessageType.MessageSignature=9]="MessageSignature",StacksMessageType[StacksMessageType.StructuredDataSignature=10]="StructuredDataSignature",StacksMessageType[StacksMessageType.TransactionAuthField=11]="TransactionAuthField"}(StacksMessageType||(StacksMessageType={})),function(PayloadType){PayloadType[PayloadType.TokenTransfer=0]="TokenTransfer",PayloadType[PayloadType.SmartContract=1]="SmartContract",PayloadType[PayloadType.VersionedSmartContract=6]="VersionedSmartContract",PayloadType[PayloadType.ContractCall=2]="ContractCall",PayloadType[PayloadType.PoisonMicroblock=3]="PoisonMicroblock",PayloadType[PayloadType.Coinbase=4]="Coinbase",PayloadType[PayloadType.CoinbaseToAltRecipient=5]="CoinbaseToAltRecipient"}(PayloadType||(PayloadType={})),function(ClarityVersion){ClarityVersion[ClarityVersion.Clarity1=1]="Clarity1",ClarityVersion[ClarityVersion.Clarity2=2]="Clarity2"}(ClarityVersion||(ClarityVersion={})),function(AnchorMode){AnchorMode[AnchorMode.OnChainOnly=1]="OnChainOnly",AnchorMode[AnchorMode.OffChainOnly=2]="OffChainOnly",AnchorMode[AnchorMode.Any=3]="Any"}(AnchorMode||(AnchorMode={}));AnchorMode.OnChainOnly,AnchorMode.OffChainOnly,AnchorMode.Any,AnchorMode.OnChainOnly,AnchorMode.OnChainOnly,AnchorMode.OffChainOnly,AnchorMode.OffChainOnly,AnchorMode.Any,AnchorMode.Any,function(TransactionVersion){TransactionVersion[TransactionVersion.Mainnet=0]="Mainnet",TransactionVersion[TransactionVersion.Testnet=128]="Testnet"}(TransactionVersion||(TransactionVersion={})),TransactionVersion.Mainnet,function(PostConditionMode){PostConditionMode[PostConditionMode.Allow=1]="Allow",PostConditionMode[PostConditionMode.Deny=2]="Deny"}(PostConditionMode||(PostConditionMode={})),function(PostConditionType){PostConditionType[PostConditionType.STX=0]="STX",PostConditionType[PostConditionType.Fungible=1]="Fungible",PostConditionType[PostConditionType.NonFungible=2]="NonFungible"}(PostConditionType||(PostConditionType={})),function(AuthType){AuthType[AuthType.Standard=4]="Standard",AuthType[AuthType.Sponsored=5]="Sponsored"}(AuthType||(AuthType={})),function(AddressHashMode){AddressHashMode[AddressHashMode.SerializeP2PKH=0]="SerializeP2PKH",AddressHashMode[AddressHashMode.SerializeP2SH=1]="SerializeP2SH",AddressHashMode[AddressHashMode.SerializeP2WPKH=2]="SerializeP2WPKH",AddressHashMode[AddressHashMode.SerializeP2WSH=3]="SerializeP2WSH"}(AddressHashMode||(AddressHashMode={})),function(AddressVersion){AddressVersion[AddressVersion.MainnetSingleSig=22]="MainnetSingleSig",AddressVersion[AddressVersion.MainnetMultiSig=20]="MainnetMultiSig",AddressVersion[AddressVersion.TestnetSingleSig=26]="TestnetSingleSig",AddressVersion[AddressVersion.TestnetMultiSig=21]="TestnetMultiSig"}(AddressVersion||(AddressVersion={})),function(PubKeyEncoding){PubKeyEncoding[PubKeyEncoding.Compressed=0]="Compressed",PubKeyEncoding[PubKeyEncoding.Uncompressed=1]="Uncompressed"}(PubKeyEncoding||(PubKeyEncoding={})),function(FungibleConditionCode){FungibleConditionCode[FungibleConditionCode.Equal=1]="Equal",FungibleConditionCode[FungibleConditionCode.Greater=2]="Greater",FungibleConditionCode[FungibleConditionCode.GreaterEqual=3]="GreaterEqual",FungibleConditionCode[FungibleConditionCode.Less=4]="Less",FungibleConditionCode[FungibleConditionCode.LessEqual=5]="LessEqual"}(FungibleConditionCode||(FungibleConditionCode={})),function(NonFungibleConditionCode){NonFungibleConditionCode[NonFungibleConditionCode.Sends=16]="Sends",NonFungibleConditionCode[NonFungibleConditionCode.DoesNotSend=17]="DoesNotSend"}(NonFungibleConditionCode||(NonFungibleConditionCode={})),function(PostConditionPrincipalID){PostConditionPrincipalID[PostConditionPrincipalID.Origin=1]="Origin",PostConditionPrincipalID[PostConditionPrincipalID.Standard=2]="Standard",PostConditionPrincipalID[PostConditionPrincipalID.Contract=3]="Contract"}(PostConditionPrincipalID||(PostConditionPrincipalID={})),function(AssetType){AssetType[AssetType.STX=0]="STX",AssetType[AssetType.Fungible=1]="Fungible",AssetType[AssetType.NonFungible=2]="NonFungible"}(AssetType||(AssetType={})),function(TxRejectedReason){TxRejectedReason.Serialization="Serialization",TxRejectedReason.Deserialization="Deserialization",TxRejectedReason.SignatureValidation="SignatureValidation",TxRejectedReason.FeeTooLow="FeeTooLow",TxRejectedReason.BadNonce="BadNonce",TxRejectedReason.NotEnoughFunds="NotEnoughFunds",TxRejectedReason.NoSuchContract="NoSuchContract",TxRejectedReason.NoSuchPublicFunction="NoSuchPublicFunction",TxRejectedReason.BadFunctionArgument="BadFunctionArgument",TxRejectedReason.ContractAlreadyExists="ContractAlreadyExists",TxRejectedReason.PoisonMicroblocksDoNotConflict="PoisonMicroblocksDoNotConflict",TxRejectedReason.PoisonMicroblockHasUnknownPubKeyHash="PoisonMicroblockHasUnknownPubKeyHash",TxRejectedReason.PoisonMicroblockIsInvalid="PoisonMicroblockIsInvalid",TxRejectedReason.BadAddressVersionByte="BadAddressVersionByte",TxRejectedReason.NoCoinbaseViaMempool="NoCoinbaseViaMempool",TxRejectedReason.ServerFailureNoSuchChainTip="ServerFailureNoSuchChainTip",TxRejectedReason.ServerFailureDatabase="ServerFailureDatabase",TxRejectedReason.ServerFailureOther="ServerFailureOther"}(TxRejectedReason||(TxRejectedReason={}))},"./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},floor=Math.floor}}]);