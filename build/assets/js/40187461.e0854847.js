"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[5204],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,v=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(83117),o=r(67294),a=r(72389),i=r(79443);var c=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(16681),l=r(86010),u="tabItem_vU9c";function d(e){var t,r,a,i=e.lazy,d=e.block,p=e.defaultValue,f=e.values,v=e.groupId,b=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=m.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=c(),E=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,o.useState)(y),k=T[0],N=T[1],j=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=E[v];null!=P&&P!==k&&g.some((function(e){return e.value===P}))&&N(P)}var Z=function(e){var t=e.currentTarget,r=j.indexOf(t),n=g[r].value;n!==k&&(x(t),N(n),null!=v&&O(v,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;r=j[n]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;r=j[o]||j[j.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function p(e){var t=(0,a.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},36622:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=(r(26396),r(58215),["components"]),c={title:"Bridge Native Assets with Etherscan",description:"How to bridge native assets from ETH and Matic to Zsc with Etherscan."},s="Bridge Native Assets with Etherscan",l={unversionedId:"celo-codebase/protocol/bridging/bridging-native-assets",id:"celo-codebase/protocol/bridging/bridging-native-assets",title:"Bridge Native Assets with Etherscan",description:"How to bridge native assets from ETH and Matic to Zsc with Etherscan.",source:"@site/docs/celo-codebase/protocol/bridging/bridging-native-assets.md",sourceDirName:"celo-codebase/protocol/bridging",slug:"/celo-codebase/protocol/bridging/bridging-native-assets",permalink:"/celo-codebase/protocol/bridging/bridging-native-assets",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/bridging/bridging-native-assets.md",tags:[],version:"current",frontMatter:{title:"Bridge Native Assets with Etherscan",description:"How to bridge native assets from ETH and Matic to Zsc with Etherscan."},sidebar:"docs",previous:{title:"Optics Bridge GUI",permalink:"/celo-codebase/protocol/bridging/optics-gui"},next:{title:"Bridge Tokens with Etherscan",permalink:"/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan"}},u=[],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridge-native-assets-with-etherscan"},"Bridge Native Assets with Etherscan"),(0,a.kt)("p",null,"How to bridge native assets from ETH and Matic to Zsc with Etherscan."))}p.isMDXComponent=!0}}]);