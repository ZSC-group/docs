"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[5692],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return g}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(o),g=r,d=p["".concat(s,".").concat(g)]||p[g]||h[g]||a;return o?n.createElement(d,c(c({ref:t},u),{},{components:o})):n.createElement(d,c({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5791:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),c=["components"],l={title:"Exchange Celo Assets",description:"How to use the Celo exchange bot to exchange CELO and Celo stable tokens.",slug:"/celo-owner-guide/celo-exchange-bot"},s="Exchange Celo Assets",i={unversionedId:"celo-holder-guide/celo-exchange-bot",id:"celo-holder-guide/celo-exchange-bot",title:"Exchange Celo Assets",description:"How to use the Celo exchange bot to exchange CELO and Celo stable tokens.",source:"@site/docs/celo-holder-guide/celo-exchange-bot.md",sourceDirName:"celo-holder-guide",slug:"/celo-owner-guide/celo-exchange-bot",permalink:"/es/celo-owner-guide/celo-exchange-bot",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Exchange Celo Assets",description:"How to use the Celo exchange bot to exchange CELO and Celo stable tokens.",slug:"/celo-owner-guide/celo-exchange-bot"}},u=[{value:"Celo Exchange Bot",id:"celo-exchange-bot",children:[],level:2},{value:"Running the bot",id:"running-the-bot",children:[],level:2}],h={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exchange-celo-assets"},"Exchange Celo Assets"),(0,a.kt)("p",null,"How to use the Celo exchange bot to exchange CELO and Celo stable tokens."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"celo-exchange-bot"},"Celo Exchange Bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/es/overview#background-and-key-concepts"},"CELO (previously Celo Gold)")," can be exchanged for Celo stable tokens (e.g. Celo Dollar or Celo Euro) using Mento, an automated market maker that powers the ",(0,a.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/stability/doto"},"stability protocol"),". Mento is a Constant Product Market Maker (CPMM) that allows you to exchange CELO for Celo stable tokens and vice versa. Sales of Celo stable tokens to Mento in exchange for CELO burn the Celo stable tokens from supply, and sales of CELO to Mento in exchange for Celo stable tokens mint Celo stable tokens into supply. Trades with Mento incur slippage, meaning that Mento exchanges move the price out of favor of the trader. Generally, larger trade amounts incur more significant amounts of slippage. Mento also resets the price of CELO quoted in the Celo stable token every few minutes according to a ",(0,a.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/stability/oracles"},"price oracle"),"."),(0,a.kt)("p",null,"Because of slippage and the Mento price occasionally changing according to a price oracle, those who wish to mint Celo stable tokens into supply may wish to slowly sell CELO for Celo stable tokens over time, rather than in a single exchange. Executing a smaller volume exchange every few seconds over a period of time is likely to result in less slippage when minting Celo stable tokens. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-exchange-bot"},"celo-exchange-bot")," was created to easily allow community members to exchange CELO for Celo stable tokens over a period of time to avoid incurring significant amounts of slippage."),(0,a.kt)("h2",{id:"running-the-bot"},"Running the bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-exchange-bot"},"celo-exchange-bot")," is intended to be operated by the exchanger as it requires access to the source key, which must own CELO funds to exchange and is the account that performs the exchanges. Operating the bot requires some technical knowledge of dealing with keys and operating infrastructure. Currently, the bot requires the source key to be an HSM in Azure's Key Vault service. Information on how to use an Azure Cloud HSM can be found ",(0,a.kt)("a",{parentName:"p",href:"/es/developer-guide/integrations/cloud-hsm"},"here"),"."),(0,a.kt)("p",null,"See the repository's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-exchange-bot"},"README")," for information on building a Docker image and configurating the bot. Example infrastructure using Azure's ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/container-instances/"},"Container Instances")," is also provided in the repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-exchange-bot/tree/master/infrastructure-example"},"here"),". While the bot does require Azure Key Vault to be used for the source key and the provided example infrastructure is ran on Azure, the bot itself can be ran from anywhere as long as it's able to access its Azure Key Vault Cloud HSM."))}p.isMDXComponent=!0}}]);