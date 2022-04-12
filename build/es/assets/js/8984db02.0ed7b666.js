"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[398],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(83117),r=a(67294),o=a(72389),l=a(79443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(16681),u=a(86010),c="tabItem_vU9c";function d(e){var t,a,o,l=e.lazy,d=e.block,p=e.defaultValue,m=e.values,k=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),y=w.tabGroupChoices,N=w.setTabGroupChoices,C=(0,r.useState)(b),T=C[0],x=C[1],M=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=y[k];null!=O&&O!==T&&h.some((function(e){return e.value===O}))&&x(O)}var j=function(e){var t=e.currentTarget,a=M.indexOf(t),n=h[a].value;n!==T&&(E(t),x(n),null!=k&&N(k,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=M.indexOf(e.currentTarget)+1;a=M[n]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;a=M[r]||M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return M.push(e)},onKeyDown:S,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},48596:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=a(26396),s=a(58215),i=["components"],u={title:"MetaMask Manual Setup on Celo",description:"How to manually add a Celo network to your existing MetaMask wallet."},c="Manual Setup",d={unversionedId:"getting-started/wallets/using-metamask-with-celo/manual-setup",id:"getting-started/wallets/using-metamask-with-celo/manual-setup",title:"MetaMask Manual Setup on Celo",description:"How to manually add a Celo network to your existing MetaMask wallet.",source:"@site/docs/getting-started/wallets/using-metamask-with-celo/manual-setup.md",sourceDirName:"getting-started/wallets/using-metamask-with-celo",slug:"/getting-started/wallets/using-metamask-with-celo/manual-setup",permalink:"/es/getting-started/wallets/using-metamask-with-celo/manual-setup",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"MetaMask Manual Setup on Celo",description:"How to manually add a Celo network to your existing MetaMask wallet."}},p=[{value:"<strong>Setup</strong>",id:"setup",children:[],level:2},{value:"<strong>Adding a Celo Network to MetaMask</strong>",id:"adding-a-celo-network-to-metamask",children:[],level:2},{value:"<strong>Adding Tokens (e.g. cUSD, cEUR)</strong>",id:"adding-tokens-eg-cusd-ceur",children:[],level:2},{value:"Sending assets to Metamask",id:"sending-assets-to-metamask",children:[],level:2}],m={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-setup"},"Manual Setup"),(0,o.kt)("p",null,"How to manually add a Celo network to your existing MetaMask wallet. "),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're a dApp developer and want to set up your wallet this programmatically, view ",(0,o.kt)("a",{parentName:"p",href:"programmatic-setup"},"programmatic setup"),"."))),(0,o.kt)("h2",{id:"setup"},(0,o.kt)("strong",{parentName:"h2"},"Setup")),(0,o.kt)("p",null,"Make sure to have MetaMask installed. See ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/download.html"},"here")," to download. Then, follow the instructions to create an account. Make sure to save your seed phrase safely!"),(0,o.kt)("h2",{id:"adding-a-celo-network-to-metamask"},(0,o.kt)("strong",{parentName:"h2"},"Adding a Celo Network to MetaMask")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Open MetaMask, click your profile image on the top right corner, and then click "Settings". Next, scroll down to "Networks" and click. Finally, press the "Add Network" button.'),(0,o.kt)("li",{parentName:"ol"},"Fill in the following values depending on which Celo network you would like to connect to: Alfajores, Baklava, or Mainnet.")),(0,o.kt)(l.Z,{defaultValue:"celo",values:[{label:"Celo Mainnet",value:"celo"},{label:"Alfajores Testnet",value:"alfajores"},{label:"Baklava Testnet",value:"baklava"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"celo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Network Name: Celo (Mainnet)\nNew RPC URL: https://forno.celo.org\nChain ID: 42220\nCurrency Symbol (Optional): CELO\nBlock Explorer URL (Optional): https://explorer.celo.org\n"))),(0,o.kt)(s.Z,{value:"alfajores",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Network Name: Celo (Alfajores Testnet)\nNew RPC URL: https://alfajores-forno.celo-testnet.org\nChain ID: 44787\nCurrency Symbol (Optional): CELO\nBlock Explorer URL (Optional): https://alfajores-blockscout.celo-testnet.org\n"))),(0,o.kt)(s.Z,{value:"baklava",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Network Name: Celo (Baklava Testnet)\nNew RPC URL: https://baklava-forno.celo-testnet.org\nChain ID: 62320\nCurrency Symbol (Optional): CELO\nBlock Explorer URL (Optional): https://baklava-blockscout.celo-testnet.org\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Press "Save". The Celo network you just configured should now show up under MetaMask\'s "Networks" dropdown list.')),(0,o.kt)("h2",{id:"adding-tokens-eg-cusd-ceur"},(0,o.kt)("strong",{parentName:"h2"},"Adding Tokens ","(","e.g. cUSD, cEUR",")")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'From MetaMask\'s Home screen, click on "Add Token" in the "Assets" tab.'),(0,o.kt)("li",{parentName:"ol"},'Click "Custom Token", and fill in the value for "Token Contract Address" for the token you\'d like to add. The "Token Symbol" and "Decimals of Precision" should be filled in automatically.')),(0,o.kt)("p",null,"The following are examples for cUSD and cEUR."),(0,o.kt)(l.Z,{defaultValue:"celo",values:[{label:"Celo Mainnet",value:"celo"},{label:"Alfajores Testnet",value:"alfajores"},{label:"Baklava Testnet",value:"baklava"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"celo",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cUSD: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x765de816845861e75a25fca122bb6898b8b1282a")),(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cEUR: ",(0,o.kt)("inlineCode",{parentName:"li"},"0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73")))),(0,o.kt)(s.Z,{value:"alfajores",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cUSD: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x874069fa1eb16d44d622f2e0ca25eea172369bc1")),(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cEUR: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x10c892a6ec43a53e45d0b916b4b7d383b1b78c0f")))),(0,o.kt)(s.Z,{value:"baklava",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cUSD: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x62492A644A588FD904270BeD06ad52B9abfEA1aE")),(0,o.kt)("li",{parentName:"ul"},"Token Contract Address for cEUR: ",(0,o.kt)("inlineCode",{parentName:"li"},"0xf9ecE301247aD2CE21894941830A2470f4E774ca"))))),(0,o.kt)("h2",{id:"sending-assets-to-metamask"},"Sending assets to Metamask"),(0,o.kt)("p",null,'Celo addresses have the same format as Ethereum addresses, so copying and pasting an address into the "to" field should work for most applications.'),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'If you are scanning a QR code to populate transaction information some applications may give you an error. For example, Metamask prefixes addresses in QR codes with "ethereum:". This can cause problems when trying to send CELO to Metamask when scanning your Metamask address QR code with the Coinbase mobile application. To avoid this issue, simply copy and paste the address rather than use the QR code scanner.'))))}k.isMDXComponent=!0}}]);