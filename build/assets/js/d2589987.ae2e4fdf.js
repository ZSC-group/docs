"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[2068],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Paying for Gas in Tokens",description:"How to pay Celo gas fees using whitelisted ERC20 tokens."},s="Paying for Gas in Tokens",l={unversionedId:"celo-codebase/protocol/transactions/erc20-transaction-fees",id:"celo-codebase/protocol/transactions/erc20-transaction-fees",title:"Paying for Gas in Tokens",description:"How to pay Celo gas fees using whitelisted ERC20 tokens.",source:"@site/docs/celo-codebase/protocol/transactions/erc20-transaction-fees.md",sourceDirName:"celo-codebase/protocol/transactions",slug:"/celo-codebase/protocol/transactions/erc20-transaction-fees",permalink:"/celo-codebase/protocol/transactions/erc20-transaction-fees",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/transactions/erc20-transaction-fees.md",tags:[],version:"current",frontMatter:{title:"Paying for Gas in Tokens",description:"How to pay Celo gas fees using whitelisted ERC20 tokens."},sidebar:"docs",previous:{title:"Celo Native Currency",permalink:"/celo-codebase/protocol/transactions/native-currency"},next:{title:"Celo Gas Pricing",permalink:"/celo-codebase/protocol/transactions/gas-pricing"}},u=[{value:"Transaction Fees",id:"transaction-fees",children:[],level:2},{value:"Fee Currency Field",id:"fee-currency-field",children:[],level:2}],f={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"paying-for-gas-in-tokens"},"Paying for Gas in Tokens"),(0,a.kt)("p",null,"How to pay Celo gas fees using whitelisted ERC20 tokens."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,a.kt)("p",null,"As in Ethereum, transaction fees play a critical role in the Celo protocol as a safeguard against denial-of-service attacks. In order to simplify the process of sending funds, these fees can be paid in ERC20 tokens, and not just the native token of the protocol, CELO. This means that a user sending Celo Dollars to friends or family will be able to pay their transaction fee out of their Celo Dollar balance, and do not need to hold a separate balance of CELO in order to make transactions."),(0,a.kt)("h2",{id:"fee-currency-field"},"Fee Currency Field"),(0,a.kt)("p",null,"The protocol maintains a governable whitelist of smart contract addresses which can be used to pay for transaction fees. These smart contracts implement an extension of the ERC20 interface, with additional functions that allow the protocol to debit and credit transaction fees. When creating a transaction, users can specify the address of the currency they would like to use to pay for gas via the ",(0,a.kt)("inlineCode",{parentName:"p"},"feeCurrency")," field. Leaving this field empty will result in the native currency, CELO, being used. Note that transactions that specify non-CELO gas currencies will cost approximately 50k additional gas."))}p.isMDXComponent=!0}}]);