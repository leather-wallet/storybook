"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[7201],{"./node_modules/.pnpm/@leather-wallet+constants@0.6.1/node_modules/@leather-wallet/constants/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bv:()=>BTC_DECIMALS,uG:()=>currencyDecimalsMap,vI:()=>STX_DECIMALS});var BTC_DECIMALS=8,STX_DECIMALS=6,currencyDecimalsMap={BTC:BTC_DECIMALS,STX:STX_DECIMALS,USD:2}},"./node_modules/.pnpm/@leather-wallet+models@0.6.5/node_modules/@leather-wallet/models/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{he:()=>createMarketPair,jd:()=>createMarketData});function createMarketPair(base,quote){return Object.freeze({base,quote})}function createMarketData(pair,price){if(pair.quote!==price.symbol)throw new Error("Cannot create market data when price does not match quote");return Object.freeze({pair,price})}},"./node_modules/.pnpm/@leather-wallet+utils@0.6.5/node_modules/@leather-wallet/utils/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Et:()=>isNumber,Gv:()=>isObject,HZ:()=>isEven,IA:()=>initBigNumber,KA:()=>convertAmountToFractionalUnit,Lm:()=>isBoolean,O9:()=>isDefined,Tn:()=>isFunction,Ye:()=>sumNumbers2,b0:()=>isUndefined,j6:()=>createMoney,pE:()=>calculateMeanAverage,sI:()=>isBigInt});var bignumber_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs"),_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@leather-wallet+models@0.6.5/node_modules/@leather-wallet/models/dist/index.js"),__webpack_require__("./node_modules/.pnpm/@leather-wallet+constants@0.6.1/node_modules/@leather-wallet/constants/dist/index.js"));__webpack_require__("./node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js").Buffer;function initBigNumber(num){return bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A.isBigNumber(num)?num:isBigInt(num)?new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A(num.toString()):new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A(num)}function isEven(num){return function isMultipleOf(multiple){return num=>num%multiple==0}(2)(num)}function calculateMeanAverage(numbers){return 0===numbers.length?new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A(0):numbers.map(initBigNumber).reduce(((acc,price)=>acc.plus(price)),new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A(0)).dividedBy(numbers.length)}function getDecimalsOfSymbolIfKnown(symbol){return function isResolutionOfCurrencyKnown(symbol){return symbol in _leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.uG}(symbol)?_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.uG[symbol]:null}function throwWhenDecimalUnknown(symbol,decimals){if(isUndefined(decimals)&&isUndefined(getDecimalsOfSymbolIfKnown(symbol)))throw new Error(`Resolution of currency ${symbol} is unknown, must be described`)}function createMoney(value,symbol,resolution){throwWhenDecimalUnknown(symbol,resolution);const decimals=getDecimalsOfSymbolIfKnown(symbol)??resolution,amount=new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.A(isBigInt(value)?value.toString():value);return Object.freeze({amount,symbol,decimals})}function isMoney(val){return!!isObject(val)&&("amount"in val&&"symbol"in val&&"decimals"in val)}function convertAmountToFractionalUnit(num,decimals){if(isMoney(num))return num.amount.shiftedBy(num.decimals);if(!isNumber(decimals))throw new Error("Must define decimal of given currency");return num.shiftedBy(decimals)}function fractionalUnitToUnit(decimals){return unit=>initBigNumber(unit).shiftedBy(-decimals)}function unitToFractionalUnit(decimals){return unit=>initBigNumber(unit).shiftedBy(decimals)}fractionalUnitToUnit(_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.bv),unitToFractionalUnit(_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.bv),fractionalUnitToUnit(_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.vI),unitToFractionalUnit(_leather_wallet_constants__WEBPACK_IMPORTED_MODULE_2__.vI);function isNumber(value){return"number"==typeof value}function isBigInt(value){return"bigint"==typeof value}function isUndefined(value){return void 0===value}function isFunction(value){return"function"==typeof value}function isBoolean(value){return"boolean"==typeof value}function isObject(value){return"object"==typeof value}function isDefined(argument){return!isUndefined(argument)}function sumNumbers2(nums){return nums.reduce(((acc,num)=>acc.plus(num)),new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.g(0))}},"./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>BigNumber});var isNumeric=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,mathceil=Math.ceil,mathfloor=Math.floor,bignumberError="[BigNumber Error] ",tooManyDigits=bignumberError+"Number primitive has more than 15 significant digits: ",BASE=1e14,LOG_BASE=14,POWS_TEN=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],MAX=1e9;function bitFloor(n){var i=0|n;return n>0||n===i?i:i-1}function coeffToString(a){for(var s,z,i=1,j=a.length,r=a[0]+"";i<j;){for(s=a[i++]+"",z=LOG_BASE-s.length;z--;s="0"+s);r+=s}for(j=r.length;48===r.charCodeAt(--j););return r.slice(0,j+1||1)}function compare(x,y){var a,b,xc=x.c,yc=y.c,i=x.s,j=y.s,k=x.e,l=y.e;if(!i||!j)return null;if(a=xc&&!xc[0],b=yc&&!yc[0],a||b)return a?b?0:-j:i;if(i!=j)return i;if(a=i<0,b=k==l,!xc||!yc)return b?0:!xc^a?1:-1;if(!b)return k>l^a?1:-1;for(j=(k=xc.length)<(l=yc.length)?k:l,i=0;i<j;i++)if(xc[i]!=yc[i])return xc[i]>yc[i]^a?1:-1;return k==l?0:k>l^a?1:-1}function intCheck(n,min,max,name){if(n<min||n>max||n!==mathfloor(n))throw Error(bignumberError+(name||"Argument")+("number"==typeof n?n<min||n>max?" out of range: ":" not an integer: ":" not a primitive number: ")+String(n))}function isOdd(n){var k=n.c.length-1;return bitFloor(n.e/LOG_BASE)==k&&n.c[k]%2!=0}function toExponential(str,e){return(str.length>1?str.charAt(0)+"."+str.slice(1):str)+(e<0?"e":"e+")+e}function toFixedPoint(str,e,z){var len,zs;if(e<0){for(zs=z+".";++e;zs+=z);str=zs+str}else if(++e>(len=str.length)){for(zs=z,e-=len;--e;zs+=z);str+=zs}else e<len&&(str=str.slice(0,e)+"."+str.slice(e));return str}var BigNumber=function clone(configObject){var div,convertBase,parseNumeric,random53bitInt,basePrefix,dotAfter,dotBefore,isInfinityOrNaN,whitespaceOrPlus,P=BigNumber.prototype={constructor:BigNumber,toString:null,valueOf:null},ONE=new BigNumber(1),DECIMAL_PLACES=20,ROUNDING_MODE=4,TO_EXP_NEG=-7,TO_EXP_POS=21,MIN_EXP=-1e7,MAX_EXP=1e7,CRYPTO=!1,MODULO_MODE=1,POW_PRECISION=0,FORMAT={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},ALPHABET="0123456789abcdefghijklmnopqrstuvwxyz",alphabetHasNormalDecimalDigits=!0;function BigNumber(v,b){var alphabet,c,caseChanged,e,i,isNum,len,str,x=this;if(!(x instanceof BigNumber))return new BigNumber(v,b);if(null==b){if(v&&!0===v._isBigNumber)return x.s=v.s,void(!v.c||v.e>MAX_EXP?x.c=x.e=null:v.e<MIN_EXP?x.c=[x.e=0]:(x.e=v.e,x.c=v.c.slice()));if((isNum="number"==typeof v)&&0*v==0){if(x.s=1/v<0?(v=-v,-1):1,v===~~v){for(e=0,i=v;i>=10;i/=10,e++);return void(e>MAX_EXP?x.c=x.e=null:(x.e=e,x.c=[v]))}str=String(v)}else{if(!isNumeric.test(str=String(v)))return parseNumeric(x,str,isNum);x.s=45==str.charCodeAt(0)?(str=str.slice(1),-1):1}(e=str.indexOf("."))>-1&&(str=str.replace(".","")),(i=str.search(/e/i))>0?(e<0&&(e=i),e+=+str.slice(i+1),str=str.substring(0,i)):e<0&&(e=str.length)}else{if(intCheck(b,2,ALPHABET.length,"Base"),10==b&&alphabetHasNormalDecimalDigits)return round(x=new BigNumber(v),DECIMAL_PLACES+x.e+1,ROUNDING_MODE);if(str=String(v),isNum="number"==typeof v){if(0*v!=0)return parseNumeric(x,str,isNum,b);if(x.s=1/v<0?(str=str.slice(1),-1):1,BigNumber.DEBUG&&str.replace(/^0\.0*|\./,"").length>15)throw Error(tooManyDigits+v)}else x.s=45===str.charCodeAt(0)?(str=str.slice(1),-1):1;for(alphabet=ALPHABET.slice(0,b),e=i=0,len=str.length;i<len;i++)if(alphabet.indexOf(c=str.charAt(i))<0){if("."==c){if(i>e){e=len;continue}}else if(!caseChanged&&(str==str.toUpperCase()&&(str=str.toLowerCase())||str==str.toLowerCase()&&(str=str.toUpperCase()))){caseChanged=!0,i=-1,e=0;continue}return parseNumeric(x,String(v),isNum,b)}isNum=!1,(e=(str=convertBase(str,b,10,x.s)).indexOf("."))>-1?str=str.replace(".",""):e=str.length}for(i=0;48===str.charCodeAt(i);i++);for(len=str.length;48===str.charCodeAt(--len););if(str=str.slice(i,++len)){if(len-=i,isNum&&BigNumber.DEBUG&&len>15&&(v>9007199254740991||v!==mathfloor(v)))throw Error(tooManyDigits+x.s*v);if((e=e-i-1)>MAX_EXP)x.c=x.e=null;else if(e<MIN_EXP)x.c=[x.e=0];else{if(x.e=e,x.c=[],i=(e+1)%LOG_BASE,e<0&&(i+=LOG_BASE),i<len){for(i&&x.c.push(+str.slice(0,i)),len-=LOG_BASE;i<len;)x.c.push(+str.slice(i,i+=LOG_BASE));i=LOG_BASE-(str=str.slice(i)).length}else i-=len;for(;i--;str+="0");x.c.push(+str)}}else x.c=[x.e=0]}function format(n,i,rm,id){var c0,e,ne,len,str;if(null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),!n.c)return n.toString();if(c0=n.c[0],ne=n.e,null==i)str=coeffToString(n.c),str=1==id||2==id&&(ne<=TO_EXP_NEG||ne>=TO_EXP_POS)?toExponential(str,ne):toFixedPoint(str,ne,"0");else if(e=(n=round(new BigNumber(n),i,rm)).e,len=(str=coeffToString(n.c)).length,1==id||2==id&&(i<=e||e<=TO_EXP_NEG)){for(;len<i;str+="0",len++);str=toExponential(str,e)}else if(i-=ne,str=toFixedPoint(str,e,"0"),e+1>len){if(--i>0)for(str+=".";i--;str+="0");}else if((i+=e-len)>0)for(e+1==len&&(str+=".");i--;str+="0");return n.s<0&&c0?"-"+str:str}function maxOrMin(args,n){for(var k,y,i=1,x=new BigNumber(args[0]);i<args.length;i++)(!(y=new BigNumber(args[i])).s||(k=compare(x,y))===n||0===k&&x.s===n)&&(x=y);return x}function normalise(n,c,e){for(var i=1,j=c.length;!c[--j];c.pop());for(j=c[0];j>=10;j/=10,i++);return(e=i+e*LOG_BASE-1)>MAX_EXP?n.c=n.e=null:e<MIN_EXP?n.c=[n.e=0]:(n.e=e,n.c=c),n}function round(x,sd,rm,r){var d,i,j,k,n,ni,rd,xc=x.c,pows10=POWS_TEN;if(xc){out:{for(d=1,k=xc[0];k>=10;k/=10,d++);if((i=sd-d)<0)i+=LOG_BASE,j=sd,n=xc[ni=0],rd=mathfloor(n/pows10[d-j-1]%10);else if((ni=mathceil((i+1)/LOG_BASE))>=xc.length){if(!r)break out;for(;xc.length<=ni;xc.push(0));n=rd=0,d=1,j=(i%=LOG_BASE)-LOG_BASE+1}else{for(n=k=xc[ni],d=1;k>=10;k/=10,d++);rd=(j=(i%=LOG_BASE)-LOG_BASE+d)<0?0:mathfloor(n/pows10[d-j-1]%10)}if(r=r||sd<0||null!=xc[ni+1]||(j<0?n:n%pows10[d-j-1]),r=rm<4?(rd||r)&&(0==rm||rm==(x.s<0?3:2)):rd>5||5==rd&&(4==rm||r||6==rm&&(i>0?j>0?n/pows10[d-j]:0:xc[ni-1])%10&1||rm==(x.s<0?8:7)),sd<1||!xc[0])return xc.length=0,r?(sd-=x.e+1,xc[0]=pows10[(LOG_BASE-sd%LOG_BASE)%LOG_BASE],x.e=-sd||0):xc[0]=x.e=0,x;if(0==i?(xc.length=ni,k=1,ni--):(xc.length=ni+1,k=pows10[LOG_BASE-i],xc[ni]=j>0?mathfloor(n/pows10[d-j]%pows10[j])*k:0),r)for(;;){if(0==ni){for(i=1,j=xc[0];j>=10;j/=10,i++);for(j=xc[0]+=k,k=1;j>=10;j/=10,k++);i!=k&&(x.e++,xc[0]==BASE&&(xc[0]=1));break}if(xc[ni]+=k,xc[ni]!=BASE)break;xc[ni--]=0,k=1}for(i=xc.length;0===xc[--i];xc.pop());}x.e>MAX_EXP?x.c=x.e=null:x.e<MIN_EXP&&(x.c=[x.e=0])}return x}function valueOf(n){var str,e=n.e;return null===e?n.toString():(str=coeffToString(n.c),str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(str,e):toFixedPoint(str,e,"0"),n.s<0?"-"+str:str)}return BigNumber.clone=clone,BigNumber.ROUND_UP=0,BigNumber.ROUND_DOWN=1,BigNumber.ROUND_CEIL=2,BigNumber.ROUND_FLOOR=3,BigNumber.ROUND_HALF_UP=4,BigNumber.ROUND_HALF_DOWN=5,BigNumber.ROUND_HALF_EVEN=6,BigNumber.ROUND_HALF_CEIL=7,BigNumber.ROUND_HALF_FLOOR=8,BigNumber.EUCLID=9,BigNumber.config=BigNumber.set=function(obj){var p,v;if(null!=obj){if("object"!=typeof obj)throw Error(bignumberError+"Object expected: "+obj);if(obj.hasOwnProperty(p="DECIMAL_PLACES")&&(intCheck(v=obj[p],0,MAX,p),DECIMAL_PLACES=v),obj.hasOwnProperty(p="ROUNDING_MODE")&&(intCheck(v=obj[p],0,8,p),ROUNDING_MODE=v),obj.hasOwnProperty(p="EXPONENTIAL_AT")&&((v=obj[p])&&v.pop?(intCheck(v[0],-MAX,0,p),intCheck(v[1],0,MAX,p),TO_EXP_NEG=v[0],TO_EXP_POS=v[1]):(intCheck(v,-MAX,MAX,p),TO_EXP_NEG=-(TO_EXP_POS=v<0?-v:v))),obj.hasOwnProperty(p="RANGE"))if((v=obj[p])&&v.pop)intCheck(v[0],-MAX,-1,p),intCheck(v[1],1,MAX,p),MIN_EXP=v[0],MAX_EXP=v[1];else{if(intCheck(v,-MAX,MAX,p),!v)throw Error(bignumberError+p+" cannot be zero: "+v);MIN_EXP=-(MAX_EXP=v<0?-v:v)}if(obj.hasOwnProperty(p="CRYPTO")){if((v=obj[p])!==!!v)throw Error(bignumberError+p+" not true or false: "+v);if(v){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw CRYPTO=!v,Error(bignumberError+"crypto unavailable");CRYPTO=v}else CRYPTO=v}if(obj.hasOwnProperty(p="MODULO_MODE")&&(intCheck(v=obj[p],0,9,p),MODULO_MODE=v),obj.hasOwnProperty(p="POW_PRECISION")&&(intCheck(v=obj[p],0,MAX,p),POW_PRECISION=v),obj.hasOwnProperty(p="FORMAT")){if("object"!=typeof(v=obj[p]))throw Error(bignumberError+p+" not an object: "+v);FORMAT=v}if(obj.hasOwnProperty(p="ALPHABET")){if("string"!=typeof(v=obj[p])||/^.?$|[+\-.\s]|(.).*\1/.test(v))throw Error(bignumberError+p+" invalid: "+v);alphabetHasNormalDecimalDigits="0123456789"==v.slice(0,10),ALPHABET=v}}return{DECIMAL_PLACES,ROUNDING_MODE,EXPONENTIAL_AT:[TO_EXP_NEG,TO_EXP_POS],RANGE:[MIN_EXP,MAX_EXP],CRYPTO,MODULO_MODE,POW_PRECISION,FORMAT,ALPHABET}},BigNumber.isBigNumber=function(v){if(!v||!0!==v._isBigNumber)return!1;if(!BigNumber.DEBUG)return!0;var i,n,c=v.c,e=v.e,s=v.s;out:if("[object Array]"=={}.toString.call(c)){if((1===s||-1===s)&&e>=-MAX&&e<=MAX&&e===mathfloor(e)){if(0===c[0]){if(0===e&&1===c.length)return!0;break out}if((i=(e+1)%LOG_BASE)<1&&(i+=LOG_BASE),String(c[0]).length==i){for(i=0;i<c.length;i++)if((n=c[i])<0||n>=BASE||n!==mathfloor(n))break out;if(0!==n)return!0}}}else if(null===c&&null===e&&(null===s||1===s||-1===s))return!0;throw Error(bignumberError+"Invalid BigNumber: "+v)},BigNumber.maximum=BigNumber.max=function(){return maxOrMin(arguments,-1)},BigNumber.minimum=BigNumber.min=function(){return maxOrMin(arguments,1)},BigNumber.random=(random53bitInt=9007199254740992*Math.random()&2097151?function(){return mathfloor(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(dp){var a,b,e,k,v,i=0,c=[],rand=new BigNumber(ONE);if(null==dp?dp=DECIMAL_PLACES:intCheck(dp,0,MAX),k=mathceil(dp/LOG_BASE),CRYPTO)if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(k*=2));i<k;)(v=131072*a[i]+(a[i+1]>>>11))>=9e15?(b=crypto.getRandomValues(new Uint32Array(2)),a[i]=b[0],a[i+1]=b[1]):(c.push(v%1e14),i+=2);i=k/2}else{if(!crypto.randomBytes)throw CRYPTO=!1,Error(bignumberError+"crypto unavailable");for(a=crypto.randomBytes(k*=7);i<k;)(v=281474976710656*(31&a[i])+1099511627776*a[i+1]+4294967296*a[i+2]+16777216*a[i+3]+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6])>=9e15?crypto.randomBytes(7).copy(a,i):(c.push(v%1e14),i+=7);i=k/7}if(!CRYPTO)for(;i<k;)(v=random53bitInt())<9e15&&(c[i++]=v%1e14);for(k=c[--i],dp%=LOG_BASE,k&&dp&&(v=POWS_TEN[LOG_BASE-dp],c[i]=mathfloor(k/v)*v);0===c[i];c.pop(),i--);if(i<0)c=[e=0];else{for(e=-1;0===c[0];c.splice(0,1),e-=LOG_BASE);for(i=1,v=c[0];v>=10;v/=10,i++);i<LOG_BASE&&(e-=LOG_BASE-i)}return rand.e=e,rand.c=c,rand}),BigNumber.sum=function(){for(var i=1,args=arguments,sum=new BigNumber(args[0]);i<args.length;)sum=sum.plus(args[i++]);return sum},convertBase=function(){function toBaseOut(str,baseIn,baseOut,alphabet){for(var j,arrL,arr=[0],i=0,len=str.length;i<len;){for(arrL=arr.length;arrL--;arr[arrL]*=baseIn);for(arr[0]+=alphabet.indexOf(str.charAt(i++)),j=0;j<arr.length;j++)arr[j]>baseOut-1&&(null==arr[j+1]&&(arr[j+1]=0),arr[j+1]+=arr[j]/baseOut|0,arr[j]%=baseOut)}return arr.reverse()}return function(str,baseIn,baseOut,sign,callerIsToString){var alphabet,d,e,k,r,x,xc,y,i=str.indexOf("."),dp=DECIMAL_PLACES,rm=ROUNDING_MODE;for(i>=0&&(k=POW_PRECISION,POW_PRECISION=0,str=str.replace(".",""),x=(y=new BigNumber(baseIn)).pow(str.length-i),POW_PRECISION=k,y.c=toBaseOut(toFixedPoint(coeffToString(x.c),x.e,"0"),10,baseOut,"0123456789"),y.e=y.c.length),e=k=(xc=toBaseOut(str,baseIn,baseOut,callerIsToString?(alphabet=ALPHABET,"0123456789"):(alphabet="0123456789",ALPHABET))).length;0==xc[--k];xc.pop());if(!xc[0])return alphabet.charAt(0);if(i<0?--e:(x.c=xc,x.e=e,x.s=sign,xc=(x=div(x,y,dp,rm,baseOut)).c,r=x.r,e=x.e),i=xc[d=e+dp+1],k=baseOut/2,r=r||d<0||null!=xc[d+1],r=rm<4?(null!=i||r)&&(0==rm||rm==(x.s<0?3:2)):i>k||i==k&&(4==rm||r||6==rm&&1&xc[d-1]||rm==(x.s<0?8:7)),d<1||!xc[0])str=r?toFixedPoint(alphabet.charAt(1),-dp,alphabet.charAt(0)):alphabet.charAt(0);else{if(xc.length=d,r)for(--baseOut;++xc[--d]>baseOut;)xc[d]=0,d||(++e,xc=[1].concat(xc));for(k=xc.length;!xc[--k];);for(i=0,str="";i<=k;str+=alphabet.charAt(xc[i++]));str=toFixedPoint(str,e,alphabet.charAt(0))}return str}}(),div=function(){function multiply(x,k,base){var m,temp,xlo,xhi,carry=0,i=x.length,klo=k%1e7,khi=k/1e7|0;for(x=x.slice();i--;)carry=((temp=klo*(xlo=x[i]%1e7)+(m=khi*xlo+(xhi=x[i]/1e7|0)*klo)%1e7*1e7+carry)/base|0)+(m/1e7|0)+khi*xhi,x[i]=temp%base;return carry&&(x=[carry].concat(x)),x}function compare(a,b,aL,bL){var i,cmp;if(aL!=bL)cmp=aL>bL?1:-1;else for(i=cmp=0;i<aL;i++)if(a[i]!=b[i]){cmp=a[i]>b[i]?1:-1;break}return cmp}function subtract(a,b,aL,base){for(var i=0;aL--;)a[aL]-=i,i=a[aL]<b[aL]?1:0,a[aL]=i*base+a[aL]-b[aL];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(x,y,dp,rm,base){var cmp,e,i,more,n,prod,prodL,q,qc,rem,remL,rem0,xi,xL,yc0,yL,yz,s=x.s==y.s?1:-1,xc=x.c,yc=y.c;if(!(xc&&xc[0]&&yc&&yc[0]))return new BigNumber(x.s&&y.s&&(xc?!yc||xc[0]!=yc[0]:yc)?xc&&0==xc[0]||!yc?0*s:s/0:NaN);for(qc=(q=new BigNumber(s)).c=[],s=dp+(e=x.e-y.e)+1,base||(base=BASE,e=bitFloor(x.e/LOG_BASE)-bitFloor(y.e/LOG_BASE),s=s/LOG_BASE|0),i=0;yc[i]==(xc[i]||0);i++);if(yc[i]>(xc[i]||0)&&e--,s<0)qc.push(1),more=!0;else{for(xL=xc.length,yL=yc.length,i=0,s+=2,(n=mathfloor(base/(yc[0]+1)))>1&&(yc=multiply(yc,n,base),xc=multiply(xc,n,base),yL=yc.length,xL=xc.length),xi=yL,remL=(rem=xc.slice(0,yL)).length;remL<yL;rem[remL++]=0);yz=yc.slice(),yz=[0].concat(yz),yc0=yc[0],yc[1]>=base/2&&yc0++;do{if(n=0,(cmp=compare(yc,rem,yL,remL))<0){if(rem0=rem[0],yL!=remL&&(rem0=rem0*base+(rem[1]||0)),(n=mathfloor(rem0/yc0))>1)for(n>=base&&(n=base-1),prodL=(prod=multiply(yc,n,base)).length,remL=rem.length;1==compare(prod,rem,prodL,remL);)n--,subtract(prod,yL<prodL?yz:yc,prodL,base),prodL=prod.length,cmp=1;else 0==n&&(cmp=n=1),prodL=(prod=yc.slice()).length;if(prodL<remL&&(prod=[0].concat(prod)),subtract(rem,prod,remL,base),remL=rem.length,-1==cmp)for(;compare(yc,rem,yL,remL)<1;)n++,subtract(rem,yL<remL?yz:yc,remL,base),remL=rem.length}else 0===cmp&&(n++,rem=[0]);qc[i++]=n,rem[0]?rem[remL++]=xc[xi]||0:(rem=[xc[xi]],remL=1)}while((xi++<xL||null!=rem[0])&&s--);more=null!=rem[0],qc[0]||qc.splice(0,1)}if(base==BASE){for(i=1,s=qc[0];s>=10;s/=10,i++);round(q,dp+(q.e=i+e*LOG_BASE-1)+1,rm,more)}else q.e=e,q.r=+more;return q}}(),basePrefix=/^(-?)0([xbo])(?=\w[\w.]*$)/i,dotAfter=/^([^.]+)\.$/,dotBefore=/^\.([^.]+)$/,isInfinityOrNaN=/^-?(Infinity|NaN)$/,whitespaceOrPlus=/^\s*\+(?=[\w.])|^\s+|\s+$/g,parseNumeric=function(x,str,isNum,b){var base,s=isNum?str:str.replace(whitespaceOrPlus,"");if(isInfinityOrNaN.test(s))x.s=isNaN(s)?null:s<0?-1:1;else{if(!isNum&&(s=s.replace(basePrefix,(function(m,p1,p2){return base="x"==(p2=p2.toLowerCase())?16:"b"==p2?2:8,b&&b!=base?m:p1})),b&&(base=b,s=s.replace(dotAfter,"$1").replace(dotBefore,"0.$1")),str!=s))return new BigNumber(s,base);if(BigNumber.DEBUG)throw Error(bignumberError+"Not a"+(b?" base "+b:"")+" number: "+str);x.s=null}x.c=x.e=null},P.absoluteValue=P.abs=function(){var x=new BigNumber(this);return x.s<0&&(x.s=1),x},P.comparedTo=function(y,b){return compare(this,new BigNumber(y,b))},P.decimalPlaces=P.dp=function(dp,rm){var c,n,v,x=this;if(null!=dp)return intCheck(dp,0,MAX),null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(new BigNumber(x),dp+x.e+1,rm);if(!(c=x.c))return null;if(n=((v=c.length-1)-bitFloor(this.e/LOG_BASE))*LOG_BASE,v=c[v])for(;v%10==0;v/=10,n--);return n<0&&(n=0),n},P.dividedBy=P.div=function(y,b){return div(this,new BigNumber(y,b),DECIMAL_PLACES,ROUNDING_MODE)},P.dividedToIntegerBy=P.idiv=function(y,b){return div(this,new BigNumber(y,b),0,1)},P.exponentiatedBy=P.pow=function(n,m){var half,isModExp,i,k,nIsBig,nIsNeg,nIsOdd,y,x=this;if((n=new BigNumber(n)).c&&!n.isInteger())throw Error(bignumberError+"Exponent not an integer: "+valueOf(n));if(null!=m&&(m=new BigNumber(m)),nIsBig=n.e>14,!x.c||!x.c[0]||1==x.c[0]&&!x.e&&1==x.c.length||!n.c||!n.c[0])return y=new BigNumber(Math.pow(+valueOf(x),nIsBig?n.s*(2-isOdd(n)):+valueOf(n))),m?y.mod(m):y;if(nIsNeg=n.s<0,m){if(m.c?!m.c[0]:!m.s)return new BigNumber(NaN);(isModExp=!nIsNeg&&x.isInteger()&&m.isInteger())&&(x=x.mod(m))}else{if(n.e>9&&(x.e>0||x.e<-1||(0==x.e?x.c[0]>1||nIsBig&&x.c[1]>=24e7:x.c[0]<8e13||nIsBig&&x.c[0]<=9999975e7)))return k=x.s<0&&isOdd(n)?-0:0,x.e>-1&&(k=1/k),new BigNumber(nIsNeg?1/k:k);POW_PRECISION&&(k=mathceil(POW_PRECISION/LOG_BASE+2))}for(nIsBig?(half=new BigNumber(.5),nIsNeg&&(n.s=1),nIsOdd=isOdd(n)):nIsOdd=(i=Math.abs(+valueOf(n)))%2,y=new BigNumber(ONE);;){if(nIsOdd){if(!(y=y.times(x)).c)break;k?y.c.length>k&&(y.c.length=k):isModExp&&(y=y.mod(m))}if(i){if(0===(i=mathfloor(i/2)))break;nIsOdd=i%2}else if(round(n=n.times(half),n.e+1,1),n.e>14)nIsOdd=isOdd(n);else{if(0===(i=+valueOf(n)))break;nIsOdd=i%2}x=x.times(x),k?x.c&&x.c.length>k&&(x.c.length=k):isModExp&&(x=x.mod(m))}return isModExp?y:(nIsNeg&&(y=ONE.div(y)),m?y.mod(m):k?round(y,POW_PRECISION,ROUNDING_MODE,undefined):y)},P.integerValue=function(rm){var n=new BigNumber(this);return null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(n,n.e+1,rm)},P.isEqualTo=P.eq=function(y,b){return 0===compare(this,new BigNumber(y,b))},P.isFinite=function(){return!!this.c},P.isGreaterThan=P.gt=function(y,b){return compare(this,new BigNumber(y,b))>0},P.isGreaterThanOrEqualTo=P.gte=function(y,b){return 1===(b=compare(this,new BigNumber(y,b)))||0===b},P.isInteger=function(){return!!this.c&&bitFloor(this.e/LOG_BASE)>this.c.length-2},P.isLessThan=P.lt=function(y,b){return compare(this,new BigNumber(y,b))<0},P.isLessThanOrEqualTo=P.lte=function(y,b){return-1===(b=compare(this,new BigNumber(y,b)))||0===b},P.isNaN=function(){return!this.s},P.isNegative=function(){return this.s<0},P.isPositive=function(){return this.s>0},P.isZero=function(){return!!this.c&&0==this.c[0]},P.minus=function(y,b){var i,j,t,xLTy,x=this,a=x.s;if(b=(y=new BigNumber(y,b)).s,!a||!b)return new BigNumber(NaN);if(a!=b)return y.s=-b,x.plus(y);var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){if(!xc||!yc)return xc?(y.s=-b,y):new BigNumber(yc?x:NaN);if(!xc[0]||!yc[0])return yc[0]?(y.s=-b,y):new BigNumber(xc[0]?x:3==ROUNDING_MODE?-0:0)}if(xe=bitFloor(xe),ye=bitFloor(ye),xc=xc.slice(),a=xe-ye){for((xLTy=a<0)?(a=-a,t=xc):(ye=xe,t=yc),t.reverse(),b=a;b--;t.push(0));t.reverse()}else for(j=(xLTy=(a=xc.length)<(b=yc.length))?a:b,a=b=0;b<j;b++)if(xc[b]!=yc[b]){xLTy=xc[b]<yc[b];break}if(xLTy&&(t=xc,xc=yc,yc=t,y.s=-y.s),(b=(j=yc.length)-(i=xc.length))>0)for(;b--;xc[i++]=0);for(b=BASE-1;j>a;){if(xc[--j]<yc[j]){for(i=j;i&&!xc[--i];xc[i]=b);--xc[i],xc[j]+=BASE}xc[j]-=yc[j]}for(;0==xc[0];xc.splice(0,1),--ye);return xc[0]?normalise(y,xc,ye):(y.s=3==ROUNDING_MODE?-1:1,y.c=[y.e=0],y)},P.modulo=P.mod=function(y,b){var q,s,x=this;return y=new BigNumber(y,b),!x.c||!y.s||y.c&&!y.c[0]?new BigNumber(NaN):!y.c||x.c&&!x.c[0]?new BigNumber(x):(9==MODULO_MODE?(s=y.s,y.s=1,q=div(x,y,0,3),y.s=s,q.s*=s):q=div(x,y,0,MODULO_MODE),(y=x.minus(q.times(y))).c[0]||1!=MODULO_MODE||(y.s=x.s),y)},P.multipliedBy=P.times=function(y,b){var c,e,i,j,k,m,xcL,xlo,xhi,ycL,ylo,yhi,zc,base,x=this,xc=x.c,yc=(y=new BigNumber(y,b)).c;if(!(xc&&yc&&xc[0]&&yc[0]))return!x.s||!y.s||xc&&!xc[0]&&!yc||yc&&!yc[0]&&!xc?y.c=y.e=y.s=null:(y.s*=x.s,xc&&yc?(y.c=[0],y.e=0):y.c=y.e=null),y;for(e=bitFloor(x.e/LOG_BASE)+bitFloor(y.e/LOG_BASE),y.s*=x.s,(xcL=xc.length)<(ycL=yc.length)&&(zc=xc,xc=yc,yc=zc,i=xcL,xcL=ycL,ycL=i),i=xcL+ycL,zc=[];i--;zc.push(0));for(base=BASE,1e7,i=ycL;--i>=0;){for(c=0,ylo=yc[i]%1e7,yhi=yc[i]/1e7|0,j=i+(k=xcL);j>i;)c=((xlo=ylo*(xlo=xc[--k]%1e7)+(m=yhi*xlo+(xhi=xc[k]/1e7|0)*ylo)%1e7*1e7+zc[j]+c)/base|0)+(m/1e7|0)+yhi*xhi,zc[j--]=xlo%base;zc[j]=c}return c?++e:zc.splice(0,1),normalise(y,zc,e)},P.negated=function(){var x=new BigNumber(this);return x.s=-x.s||null,x},P.plus=function(y,b){var t,x=this,a=x.s;if(b=(y=new BigNumber(y,b)).s,!a||!b)return new BigNumber(NaN);if(a!=b)return y.s=-b,x.minus(y);var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){if(!xc||!yc)return new BigNumber(a/0);if(!xc[0]||!yc[0])return yc[0]?y:new BigNumber(xc[0]?x:0*a)}if(xe=bitFloor(xe),ye=bitFloor(ye),xc=xc.slice(),a=xe-ye){for(a>0?(ye=xe,t=yc):(a=-a,t=xc),t.reverse();a--;t.push(0));t.reverse()}for((a=xc.length)-(b=yc.length)<0&&(t=yc,yc=xc,xc=t,b=a),a=0;b;)a=(xc[--b]=xc[b]+yc[b]+a)/BASE|0,xc[b]=BASE===xc[b]?0:xc[b]%BASE;return a&&(xc=[a].concat(xc),++ye),normalise(y,xc,ye)},P.precision=P.sd=function(sd,rm){var c,n,v,x=this;if(null!=sd&&sd!==!!sd)return intCheck(sd,1,MAX),null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(new BigNumber(x),sd,rm);if(!(c=x.c))return null;if(n=(v=c.length-1)*LOG_BASE+1,v=c[v]){for(;v%10==0;v/=10,n--);for(v=c[0];v>=10;v/=10,n++);}return sd&&x.e+1>n&&(n=x.e+1),n},P.shiftedBy=function(k){return intCheck(k,-9007199254740991,9007199254740991),this.times("1e"+k)},P.squareRoot=P.sqrt=function(){var m,n,r,rep,t,x=this,c=x.c,s=x.s,e=x.e,dp=DECIMAL_PLACES+4,half=new BigNumber("0.5");if(1!==s||!c||!c[0])return new BigNumber(!s||s<0&&(!c||c[0])?NaN:c?x:1/0);if(0==(s=Math.sqrt(+valueOf(x)))||s==1/0?(((n=coeffToString(c)).length+e)%2==0&&(n+="0"),s=Math.sqrt(+n),e=bitFloor((e+1)/2)-(e<0||e%2),r=new BigNumber(n=s==1/0?"5e"+e:(n=s.toExponential()).slice(0,n.indexOf("e")+1)+e)):r=new BigNumber(s+""),r.c[0])for((s=(e=r.e)+dp)<3&&(s=0);;)if(t=r,r=half.times(t.plus(div(x,t,dp,1))),coeffToString(t.c).slice(0,s)===(n=coeffToString(r.c)).slice(0,s)){if(r.e<e&&--s,"9999"!=(n=n.slice(s-3,s+1))&&(rep||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(round(r,r.e+DECIMAL_PLACES+2,1),m=!r.times(r).eq(x));break}if(!rep&&(round(t,t.e+DECIMAL_PLACES+2,0),t.times(t).eq(x))){r=t;break}dp+=4,s+=4,rep=1}return round(r,r.e+DECIMAL_PLACES+1,ROUNDING_MODE,m)},P.toExponential=function(dp,rm){return null!=dp&&(intCheck(dp,0,MAX),dp++),format(this,dp,rm,1)},P.toFixed=function(dp,rm){return null!=dp&&(intCheck(dp,0,MAX),dp=dp+this.e+1),format(this,dp,rm)},P.toFormat=function(dp,rm,format){var str,x=this;if(null==format)null!=dp&&rm&&"object"==typeof rm?(format=rm,rm=null):dp&&"object"==typeof dp?(format=dp,dp=rm=null):format=FORMAT;else if("object"!=typeof format)throw Error(bignumberError+"Argument not an object: "+format);if(str=x.toFixed(dp,rm),x.c){var i,arr=str.split("."),g1=+format.groupSize,g2=+format.secondaryGroupSize,groupSeparator=format.groupSeparator||"",intPart=arr[0],fractionPart=arr[1],isNeg=x.s<0,intDigits=isNeg?intPart.slice(1):intPart,len=intDigits.length;if(g2&&(i=g1,g1=g2,g2=i,len-=i),g1>0&&len>0){for(i=len%g1||g1,intPart=intDigits.substr(0,i);i<len;i+=g1)intPart+=groupSeparator+intDigits.substr(i,g1);g2>0&&(intPart+=groupSeparator+intDigits.slice(i)),isNeg&&(intPart="-"+intPart)}str=fractionPart?intPart+(format.decimalSeparator||"")+((g2=+format.fractionGroupSize)?fractionPart.replace(new RegExp("\\d{"+g2+"}\\B","g"),"$&"+(format.fractionGroupSeparator||"")):fractionPart):intPart}return(format.prefix||"")+str+(format.suffix||"")},P.toFraction=function(md){var d,d0,d1,d2,e,exp,n,n0,n1,q,r,s,x=this,xc=x.c;if(null!=md&&(!(n=new BigNumber(md)).isInteger()&&(n.c||1!==n.s)||n.lt(ONE)))throw Error(bignumberError+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+valueOf(n));if(!xc)return new BigNumber(x);for(d=new BigNumber(ONE),n1=d0=new BigNumber(ONE),d1=n0=new BigNumber(ONE),s=coeffToString(xc),e=d.e=s.length-x.e-1,d.c[0]=POWS_TEN[(exp=e%LOG_BASE)<0?LOG_BASE+exp:exp],md=!md||n.comparedTo(d)>0?e>0?d:n1:n,exp=MAX_EXP,MAX_EXP=1/0,n=new BigNumber(s),n0.c[0]=0;q=div(n,d,0,1),1!=(d2=d0.plus(q.times(d1))).comparedTo(md);)d0=d1,d1=d2,n1=n0.plus(q.times(d2=n1)),n0=d2,d=n.minus(q.times(d2=d)),n=d2;return d2=div(md.minus(d0),d1,0,1),n0=n0.plus(d2.times(n1)),d0=d0.plus(d2.times(d1)),n0.s=n1.s=x.s,r=div(n1,d1,e*=2,ROUNDING_MODE).minus(x).abs().comparedTo(div(n0,d0,e,ROUNDING_MODE).minus(x).abs())<1?[n1,d1]:[n0,d0],MAX_EXP=exp,r},P.toNumber=function(){return+valueOf(this)},P.toPrecision=function(sd,rm){return null!=sd&&intCheck(sd,1,MAX),format(this,sd,rm,2)},P.toString=function(b){var str,n=this,s=n.s,e=n.e;return null===e?s?(str="Infinity",s<0&&(str="-"+str)):str="NaN":(null==b?str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(coeffToString(n.c),e):toFixedPoint(coeffToString(n.c),e,"0"):10===b&&alphabetHasNormalDecimalDigits?str=toFixedPoint(coeffToString((n=round(new BigNumber(n),DECIMAL_PLACES+e+1,ROUNDING_MODE)).c),n.e,"0"):(intCheck(b,2,ALPHABET.length,"Base"),str=convertBase(toFixedPoint(coeffToString(n.c),e,"0"),10,b,s,!0)),s<0&&n.c[0]&&(str="-"+str)),str},P.valueOf=P.toJSON=function(){return valueOf(this)},P._isBigNumber=!0,P[Symbol.toStringTag]="BigNumber",P[Symbol.for("nodejs.util.inspect.custom")]=P.valueOf,null!=configObject&&BigNumber.set(configObject),BigNumber}();const __WEBPACK_DEFAULT_EXPORT__=BigNumber}}]);