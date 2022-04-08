"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6986],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(83117),o=r(67294),a=r(72389),l=r(79443);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=r(16681),u=r(86010),s="tabItem_vU9c";function d(e){var t,r,a,l=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),k=w.tabGroupChoices,E=w.setTabGroupChoices,N=(0,o.useState)(b),O=N[0],C=N[1],x=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=k[f];null!=P&&P!==O&&h.some((function(e){return e.value===P}))&&C(P)}var Z=function(e){var t=e.currentTarget,r=x.indexOf(t),n=h[r].value;n!==O&&(T(t),C(n),null!=f&&E(f,n))},R=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;r=x[o]||x[x.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:R,onFocus:Z,onClick:Z},a,{className:(0,u.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,a.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},14805:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),o="pageRef_Ejpu",a="left_uwxi",l="arrow_+Oog",i="pageName_Jzs5",c="url_tyFG";function u(e){var t=e.url,r=e.pageName;return n.createElement("a",{className:o,href:t},n.createElement("div",{className:a},n.createElement("div",{className:l},"\u2192"),n.createElement("div",{className:i},r)),n.createElement("div",{className:c},t))}},28197:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=r(14805),i=(r(26396),r(58215),["components"]),c={title:"Get CELO",description:"Start sending, spending, and earning crypto from your mobile phone"},u="Get CELO",s={unversionedId:"celo-holder-guide/owners",id:"celo-holder-guide/owners",title:"Get CELO",description:"Start sending, spending, and earning crypto from your mobile phone",source:"@site/docs/celo-holder-guide/owners.md",sourceDirName:"celo-holder-guide",slug:"/celo-holder-guide/owners",permalink:"/celo-holder-guide/owners",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-holder-guide/owners.md",tags:[],version:"current",frontMatter:{title:"Get CELO",description:"Start sending, spending, and earning crypto from your mobile phone"},sidebar:"docs",previous:{title:"Connect Ledger to Celo CLI",permalink:"/celo-holder-guide/connecting-ledger-celocli"},next:{title:"Self-Custody CELO",permalink:"/celo-owner-guide/quick-start"}},d=[{value:"Discover CELO",id:"discover-celo",children:[],level:2},{value:"Manage Celo Assets",id:"manage-celo-assets",children:[],level:2},{value:"Voting as a Celo Owner",id:"voting-as-a-celo-owner",children:[],level:2},{value:"Asset Recovery",id:"asset-recovery",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-celo"},"Get CELO"),(0,a.kt)("p",null,"Start sending, spending, and earning crypto from your mobile phone."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://celo.org/buy"},"Celo Owners")," can start transacting with 6 billion other smartphone users around the world from your phone and on the go. Transact in seconds \u2014 at a fraction of the cost of other crypto platforms. Anyone who holds any amount of CELO is empowered to vote on governance proposals that direct how the core technology operates today and in the future."),(0,a.kt)("h2",{id:"discover-celo"},"Discover CELO"),(0,a.kt)("p",null,"CELO is listed on 20+ exchanges worldwide."),(0,a.kt)(l.Z,{url:"https://coinmarketcap.com/currencies/celo/markets/",pageName:"Get CELO",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"https://coinmarketcap.com/currencies/celo-dollar/markets/",pageName:"Get cUSD",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"https://coinmarketcap.com/currencies/celo-euro/",pageName:"Get cEUR",mdxType:"PageRef"}),(0,a.kt)("h2",{id:"manage-celo-assets"},"Manage Celo Assets"),(0,a.kt)(l.Z,{url:"/celo-owner-guide/quick-start",pageName:"Self-Custody CELO",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/cusd",pageName:"Asset Management",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/release-gold",pageName:"Understand ReleaseGold",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/celo-exchange-bot",pageName:"Exchange Celo Assets",mdxType:"PageRef"}),(0,a.kt)("h2",{id:"voting-as-a-celo-owner"},"Voting as a Celo Owner"),(0,a.kt)(l.Z,{url:"/celo-owner-guide/voting-validators",pageName:"Voting for Validators",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/voting-governance",pageName:"Voting on Governance",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/governance-cheat-sheet",pageName:"Governance Cheatsheet",mdxType:"PageRef"}),(0,a.kt)("h2",{id:"asset-recovery"},"Asset Recovery"),(0,a.kt)(l.Z,{url:"/celo-owner-guide/eth-recovery",pageName:"Recover ETH from a Celo Address",mdxType:"PageRef"}),(0,a.kt)(l.Z,{url:"/celo-owner-guide/celo-recovery",pageName:"Recover CELO from an Ethereum Address",mdxType:"PageRef"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For questions, comments, and discussions please use the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.celo.org/"},"Celo Forum")," or ",(0,a.kt)("a",{parentName:"p",href:"https://chat.celo.org/"},"Discord"),"."))))}m.isMDXComponent=!0}}]);