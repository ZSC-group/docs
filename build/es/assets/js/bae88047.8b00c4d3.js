"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3654],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<c;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45654:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var o=t(83117),r=t(80102),c=(t(67294),t(3905)),l=["components"],a={},i="celocli node",s={unversionedId:"command-line-interface/node",id:"command-line-interface/node",title:"celocli node",description:"Manage your Celo node",source:"@site/docs/command-line-interface/node.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/node",permalink:"/es/command-line-interface/node",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli network",permalink:"/es/command-line-interface/network"},next:{title:"celocli oracle",permalink:"/es/command-line-interface/oracle"}},d=[{value:"<code>celocli node:accounts</code>",id:"celocli-nodeaccounts",children:[],level:2},{value:"<code>celocli node:synced</code>",id:"celocli-nodesynced",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"celocli-node"},(0,c.kt)("inlineCode",{parentName:"h1"},"celocli node")),(0,c.kt)("p",null,"Manage your Celo node"),(0,c.kt)("h2",{id:"celocli-nodeaccounts"},(0,c.kt)("inlineCode",{parentName:"h2"},"celocli node:accounts")),(0,c.kt)("p",null,"List the addresses that this node has the private keys for."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"List the addresses that this node has the private keys for.\n\nUSAGE\n  $ celocli node:accounts\n\nOPTIONS\n  --globalHelp  View all available global flags\n")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"See code: ",(0,c.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/node/accounts.ts"},"src/commands/node/accounts.ts"))),(0,c.kt)("h2",{id:"celocli-nodesynced"},(0,c.kt)("inlineCode",{parentName:"h2"},"celocli node:synced")),(0,c.kt)("p",null,"Check if the node is synced"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Check if the node is synced\n\nUSAGE\n  $ celocli node:synced\n\nOPTIONS\n  --globalHelp  View all available global flags\n  --verbose     output the full status if syncing\n")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"See code: ",(0,c.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/node/synced.ts"},"src/commands/node/synced.ts"))))}p.isMDXComponent=!0}}]);