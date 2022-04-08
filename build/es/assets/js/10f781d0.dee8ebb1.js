"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7385],{3905:function(e,t,o){o.d(t,{Zo:function(){return i},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,l(l({ref:t},i),{},{components:o})):n.createElement(h,l({ref:t},i))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97655:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return i},toc:function(){return p},default:function(){return m}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),l=["components"],s={title:"Add Your ERC20 Token to Your Celo Wallet",description:"Learn How to Add Your ERC20 Token to Your Celo Wallet",slug:"add-token-celo-wallet",authors:[{name:"Connor Fabiano",url:"https://github.com/vissequ",image_url:"https://github.com/vissequ.png"}],tags:["tokens","celo wallet"],image:"https://user-images.githubusercontent.com/93226346/144900871-cc2ffa50-d7f2-46c3-94dd-15126d71f57b.png",hide_table_of_contents:!1},u="How to Add Your ERC20 Token to Your Celo Wallet",c={permalink:"/es/blog/add-token-celo-wallet",source:"@site/blog/2021-12-06-addtokentocelowallet.md",title:"Add Your ERC20 Token to Your Celo Wallet",description:"Learn How to Add Your ERC20 Token to Your Celo Wallet",date:"2021-12-06T00:00:00.000Z",formattedDate:"6 de diciembre de 2021",tags:[{label:"tokens",permalink:"/es/blog/tags/tokens"},{label:"celo wallet",permalink:"/es/blog/tags/celo-wallet"}],readingTime:1.18,truncated:!0,authors:[{name:"Connor Fabiano",url:"https://github.com/vissequ",image_url:"https://github.com/vissequ.png",imageURL:"https://github.com/vissequ.png"}],prevItem:{title:"Using Keystores Library for Local Key Management",permalink:"/es/blog/developer-guide/start/using-js-keystores"},nextItem:{title:"Verifying Contracts with Hardhat",permalink:"/es/blog/hardhat-deploy-verify"}},i={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you are trying to add your own token please make sure you have already read Josh's tutorial on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celo.org/developer-resources/walkthroughs/no-code-erc20"},"how to make your own ERC20 Token on Celo"),"."),(0,a.kt)("p",null,"Now that you\u2019ve made your own ERC20 Token, you will want to have it displayed in your Celo Wallet. If you don\u2019t currently have Celo Wallet you will need to ",(0,a.kt)("a",{parentName:"p",href:"https://celowallet.app/setup"},"download it")," first."),(0,a.kt)("p",null,"1) Open up Cello Wallet and make sure you can see \u201cAccount Balance Details\u201d then select \u201cAdd a new currency/token.\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144902366-42169908-95e8-4d0a-a6d8-b6ad021394cf.png",alt:"Photo"})),(0,a.kt)("p",null,"If you don\u2019t see the above screen then click the green \u201cMore\u201d button in the upper left of the Celo Wallet app."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144900620-2ed8b9a1-513e-4a8b-a95a-9542c97c2908.png",alt:"Photo"})),(0,a.kt)("p",null,'Then select "Balance - View Balances"'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144900692-5a213c05-a99e-408b-97c9-7aeed41d870c.png",alt:"Photo"})),(0,a.kt)("p",null,"2) Copy your token\u2019s address and paste it into the \u201cToken name or address\u201d text field. If you don\u2019t remember your Token\u2019s address you can search for it by name on ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.celo.org/"},"Celo\u2019s Explorer"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144900871-cc2ffa50-d7f2-46c3-94dd-15126d71f57b.png",alt:"Photo"})),(0,a.kt)("p",null,"3) Click \u201cAdd\u201d and you should then see the token listed. The token I added for this example is \u201cBCN.\u201d If you look to the far right you\u2019ll see that only \u201cBCN\u201d has an \u201cX\u201d after its address. This is because I manually added \u201cBCN\u201d and the other listed coins are native assets from Celo."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144901070-cc1e1317-d2ab-4279-8c83-dd62072b9987.png",alt:"Photo"})),(0,a.kt)("p",null,"4) If you wish to send your token to another Celo Wallet click the green \u201cSend\u201d button in the upper left."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144901103-72335db9-7806-40e4-bdad-11a8c8ad51b6.png",alt:"Photo"})),(0,a.kt)("p",null,"5) Enter the recipient\u2019s address and select your token from the Currency dropdown. You can then enter the amount of tokens you wish to send."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144901137-2b679ac6-24ea-4947-80fd-4fab1d3b76cd.png",alt:"Photo"})),(0,a.kt)("p",null,"6) You\u2019ll be charged a fee in Celo for your transaction. Make sure you are sending this to another Cello Wallet! If the address, token and amount are all correct click \u201cSend Payment.\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93226346/144901189-2f9adb93-9cce-48ff-8e4d-1476b75f1fec.png",alt:"Photo"})),(0,a.kt)("p",null,"Congratulations! You\u2019ve just sent your own token to somebody! Your token should be automatically added to their list. If for some reason it is not automatically added, they can simply follow the above steps."),(0,a.kt)("p",null,"If you have any questions feel free to message me on Discord at vissequ#1301 or on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/connorfabiano"},"@connorfabiano")),(0,a.kt)("p",null,"(Tutorials for using different wallets such as Metamask will be added in the future.)"))}m.isMDXComponent=!0}}]);