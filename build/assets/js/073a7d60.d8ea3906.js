"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6984],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(f,c(c({ref:t},p),{},{components:r})):o.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<n;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9938:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=r(83117),a=r(80102),n=(r(67294),r(3905)),c=["components"],l={title:"Oracles",description:"How the SortedOracles smart contract uses governance to collect reports and maintain the oraclized rate or the Celo dollar."},i="Oracles",s={unversionedId:"celo-codebase/protocol/stability/oracles",id:"celo-codebase/protocol/stability/oracles",title:"Oracles",description:"How the SortedOracles smart contract uses governance to collect reports and maintain the oraclized rate or the Celo dollar.",source:"@site/docs/celo-codebase/protocol/stability/oracles.md",sourceDirName:"celo-codebase/protocol/stability",slug:"/celo-codebase/protocol/stability/oracles",permalink:"/celo-codebase/protocol/stability/oracles",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/stability/oracles.md",tags:[],version:"current",frontMatter:{title:"Oracles",description:"How the SortedOracles smart contract uses governance to collect reports and maintain the oraclized rate or the Celo dollar."},sidebar:"docs",previous:{title:"Granda Mento",permalink:"/celo-codebase/protocol/stability/granda-mento"},next:{title:"Celo Stability Fees",permalink:"/celo-codebase/protocol/stability/stability-fees"}},p=[{value:"SortedOracles Smart Contract",id:"sortedoracles-smart-contract",children:[],level:2},{value:"Collecting Reports",id:"collecting-reports",children:[],level:2},{value:"Maintaining Oracle Values",id:"maintaining-oracle-values",children:[],level:2},{value:"Celo-Oracle Repository",id:"celo-oracle-repository",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,c);return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oracles"},"Oracles"),(0,n.kt)("p",null,"How the ",(0,n.kt)("strong",{parentName:"p"},"SortedOracles")," smart contract uses governance to collect reports and maintain the oraclized rate or the Celo dollar."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sortedoracles-smart-contract"},"SortedOracles Smart Contract"),(0,n.kt)("p",null,"As mentioned in the previous section, the stability mechanism needs to know the market price of CELO with respect to the US dollar. This value is made available on-chain in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/stability/SortedOracles.sol"},"SortedOracles smart contract"),"."),(0,n.kt)("h2",{id:"collecting-reports"},"Collecting Reports"),(0,n.kt)("p",null,"Through governance, a whitelist of reporters is selected. These addresses are allowed to make reports to the SortedOracles smart contract. The smart contract keeps a list of most recent reports from each reporter. To make it difficult for a dishonest reporter to manipulate the oraclized rate, the official value of the oracle is taken to be the ",(0,n.kt)("em",{parentName:"p"},"median")," of this list."),(0,n.kt)("h2",{id:"maintaining-oracle-values"},"Maintaining Oracle Values"),(0,n.kt)("p",null,"To ensure the oracle's value doesn't go stale due to inactive reporters, any reports that are too old can be removed from the list. \"Too old\" here is defined based on a protocol parameter that can be modified via governance."),(0,n.kt)("h2",{id:"celo-oracle-repository"},"Celo-Oracle Repository"),(0,n.kt)("p",null,"You can find more information about the technical specification of the Celo Oracles feeding data to the reserve in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-oracle"},"GitHub repository here"),"."))}u.isMDXComponent=!0}}]);