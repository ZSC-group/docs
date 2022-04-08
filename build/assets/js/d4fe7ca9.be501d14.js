"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1303],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,c(c({ref:e},p),{},{components:n})):a.createElement(m,c({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88864:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),c=["components"],i={title:"use-contractkit",description:"The easiest way to access [ContractKit](https://www.npmjs.com/package/@celo/contractkit) in your React applications."},l="use-contractkit",s={unversionedId:"developer-resources/use-contractkit",id:"developer-resources/use-contractkit",title:"use-contractkit",description:"The easiest way to access [ContractKit](https://www.npmjs.com/package/@celo/contractkit) in your React applications.",source:"@site/docs/developer-resources/use-contractkit.md",sourceDirName:"developer-resources",slug:"/developer-resources/use-contractkit",permalink:"/developer-resources/use-contractkit",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/use-contractkit.md",tags:[],version:"current",frontMatter:{title:"use-contractkit",description:"The easiest way to access [ContractKit](https://www.npmjs.com/package/@celo/contractkit) in your React applications."},sidebar:"developers",previous:{title:"Migrating to ContractKit v1.0",permalink:"/developer-guide/contractkit/migrating-to-contractkit-v1"},next:{title:"Celo Ethers.js Wrapper",permalink:"/developer-resources/ethers-js-wrapper"}},p=[{value:"What is use-contractkit?",id:"what-is-use-contractkit",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"Supported wallets",id:"supported-wallets",children:[],level:2},{value:"Basic Usage",id:"basic-usage",children:[{value:"Wrap your application with ContractKitProvider",id:"wrap-your-application-with-contractkitprovider",children:[],level:3},{value:"Prompt users to connect their wallet",id:"prompt-users-to-connect-their-wallet",children:[],level:3},{value:"Use ContractKit to read chain data",id:"use-contractkit-to-read-chain-data",children:[],level:3},{value:"Accessing user accounts",id:"accessing-user-accounts",children:[{value:"Last connected account",id:"last-connected-account",children:[],level:4},{value:"Get a connected account",id:"get-a-connected-account",children:[],level:4}],level:3},{value:"Network management",id:"network-management",children:[],level:3},{value:"Adjust FeeCurrency",id:"adjust-feecurrency",children:[],level:3},{value:"Dark mode",id:"dark-mode",children:[],level:3}],level:2},{value:"Development",id:"development",children:[],level:2},{value:"Support",id:"support",children:[],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-contractkit"},"use-contractkit"),(0,o.kt)("p",null,"The easiest way to access ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@celo/contractkit"},"ContractKit")," in your React applications."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-use-contractkit"},"What is use-contractkit?"),(0,o.kt)("p",null,"The easiest way to access ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@celo/contractkit"},"ContractKit")," in your React applications \ud83d\udd25. ",(0,o.kt)("inlineCode",{parentName:"p"},"use-contractkit")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hook")," for managing access to ContractKit with a built-in headless modal system for connecting to your users wallet of choice."),(0,o.kt)("p",null,"Now your DApp can be made available to everyone in the Celo ecosystem, from Valora users to self custodied Ledger users."),(0,o.kt)("p",null,"By default use-contractkit is styled so that you can drop it into your application and go, however it's fully customisable so you can maintain a consistent UX throughout your application."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#supported-wallets"},"Supported Wallets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#notes"},"Notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support"},"Support"))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @celo-tools/use-contractkit\n")),(0,o.kt)("h2",{id:"supported-wallets"},"Supported wallets"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,o.kt)("th",{parentName:"tr",align:"center"},"sendTransaction"),(0,o.kt)("th",{parentName:"tr",align:"right"},"signTransaction"),(0,o.kt)("th",{parentName:"tr",align:null},"signTypedData"),(0,o.kt)("th",{parentName:"tr",align:null},"signPersonal"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Plaintext private key"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.ledger.com/"},"Ledger")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://walletconnect.org/"},"WalletConnect")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/dsrvlabs/celo-extension-wallet"},"Celo Extension Wallet (Metamask fork)")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:"right"}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("h3",{id:"wrap-your-application-with-contractkitprovider"},"Wrap your application with ContractKitProvider"),(0,o.kt)("p",null,"use-contractkit uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jamiebuilds/unstated-next"},"unstated-next")," under the hood to inject state throughout your application. unstated-next is built on top of the React Context API so you need to make sure your application is wrapped with the provider before usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ContractKitProvider } from "@celo-tools/use-contractkit";\nimport "@celo-tools/use-contractkit/lib/styles.css";\n\nfunction WrappedApp() {\n  return (\n    <ContractKitProvider\n      dapp={{\n        name: "My awesome dApp",\n        description: "My awesome description",\n        url: "https://example.com",\n      }}\n    >\n      <App />\n    </ContractKitProvider>\n  );\n}\n\nfunction App() {\n  // your application code\n}\n')),(0,o.kt)("h3",{id:"prompt-users-to-connect-their-wallet"},"Prompt users to connect their wallet"),(0,o.kt)("p",null,"use-contractkit provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," function that will open a modal with a list of wallets your user can connect to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useContractKit } from "@celo-tools/use-contractkit";\n\nfunction App() {\n  const { connect, address } = useContractKit();\n\n  return (\n    <>\n      {address ? (\n        <div>Connected to {address}</div>\n      ) : (\n        <button onClick={connect}>Connect wallet</button>\n      )}\n    </>\n  );\n}\n')),(0,o.kt)("p",null,"After connecting to an account the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," property will be set."),(0,o.kt)("h3",{id:"use-contractkit-to-read-chain-data"},"Use ContractKit to read chain data"),(0,o.kt)("p",null,"Now that we've connected to an account and have the users address, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kit")," to query on-chain data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useContractKit } from '@celo-tools/use-contractkit';\n\nfunction App() {\n  const { kit, address } = useContractKit();\n\n  async function getAccountSummary() {\n    const accounts = await kit.contracts.getAccounts();\n    await accounts.getAccountSummary(address);\n  }\n\n  return (\n    ...\n  )\n}\n")),(0,o.kt)("h3",{id:"accessing-user-accounts"},"Accessing user accounts"),(0,o.kt)("p",null,"The biggest problem when developing DApps is ensuring a Web2 level experience while managing the flaky and often slow nature of blockchains. To that end we've designed use-contractkit in a way to abstract away most of that pain."),(0,o.kt)("p",null,"Initially connecting to a users account is one thing, handled via the ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," function we just mentioned. However once a user has connected to your DApp once we can make the experience nicer for them on repeat visits."),(0,o.kt)("h4",{id:"last-connected-account"},"Last connected account"),(0,o.kt)("p",null,"use-contractkit will remember a users last connected address when they navigate back to or refresh your DApp. Ensure that when developing your DApp nothing changes nothing in the UI whether or not the user has a ",(0,o.kt)("inlineCode",{parentName:"p"},"kit.defaultAccount")," property set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useContractKit } from "@celo-tools/use-contractkit";\n\nconst { address } = useContractKit();\n')),(0,o.kt)("h4",{id:"get-a-connected-account"},"Get a connected account"),(0,o.kt)("p",null,"When a user refreshes or navigates back to your page, they may not necessarily have a connected account any longer, however we shouldn't need to prompt them to login again just to view the page, that can be done only when doing an action."),(0,o.kt)("p",null,"For that functionality we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"performActions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getConnectedKit")," methods. Usage looks a little like this for ",(0,o.kt)("inlineCode",{parentName:"p"},"getConnectedKit"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useContractKit } from "@celo-tools/use-contractkit";\n\nfunction App() {\n  const { getConnectedKit } = useContractKit();\n\n  async function transfer() {\n    const kit = await getConnectedKit();\n    const cUSD = await kit.contracts.getStableToken();\n    await cUSD.transfer("0x...", 10000).sendAndWaitForReceipt();\n  }\n\n  return <button onClick={transfer}>Transfer</button>;\n}\n')),(0,o.kt)("p",null,"and this for ",(0,o.kt)("inlineCode",{parentName:"p"},"performActions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useContractKit } from "@celo-tools/use-contractkit";\n\nfunction App() {\n  const { performActions } = useContractKit();\n\n  async function transfer() {\n    await performActions(async (kit) => {\n      const cUSD = await kit.contracts.getStableToken();\n      await cUSD.transfer("0x...", 10000).sendAndWaitForReceipt();\n    });\n  }\n\n  return <button onClick={transfer}>Transfer</button>;\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"performActions")," method will also take care of displaying a modal to the user telling them to confirm any actions on their connected wallet."),(0,o.kt)("h3",{id:"network-management"},"Network management"),(0,o.kt)("p",null,"use-contractkit provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," variable and an ",(0,o.kt)("inlineCode",{parentName:"p"},"updateNetwork")," function you can use to display the currently connected network as well as switch to a different one (ie. Alfajores, Baklava or Mainnet)."),(0,o.kt)("p",null,"If you'd prefer your DApp to only access a specific network (maybe you're deploying your testnet website at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://test-app.dapp.name")," and your mainnet version at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://app.dapp.name"),") you can pass the network you want to use as a variable into the provider you wrap your application with:"),(0,o.kt)("p",null,"You can also pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," prop to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractKitProvider")," as the default starting network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ContractKitProvider, Alfajores } from '@celo-tools/use-contractkit';\n\nfunction WrappedApp({ Component, pageProps }) {\n  return (\n    <ContractKitProvider\n      ...\n      networks={[Alfajores]}\n      network={{\n        name: NetworkNames.Alfajores,\n        rpcUrl: 'https://alfajores-forno.celo-testnet.org',\n        graphQl: 'https://alfajores-blockscout.celo-testnet.org/graphiql',\n        explorer: 'https://alfajores-blockscout.celo-testnet.org',\n        chainId: 44787,\n      }}\n    >\n      <App />\n    </ContractKitProvider>\n  );\n}\n\nfunction App () {\n  ...\n}\n")),(0,o.kt)("p",null,"Be sure to check the use-contractkit example application for a showcase of how network management works in more depth. Usually you'll want to show a dropdown to your users allowing them to select the network to connect to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useContractKit } from "@celo-tools/use-contractkit";\n\nfunction App() {\n  const { network, updateNetwork } = useContractKit();\n\n  return <div>Currently connected to {network}</div>;\n}\n')),(0,o.kt)("h3",{id:"adjust-feecurrency"},"Adjust FeeCurrency"),(0,o.kt)("p",null,"use-contractkit provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"feeCurrency")," variable and an ",(0,o.kt)("inlineCode",{parentName:"p"},"updateFeeCurrency")," function you can use to display the currently selected feeCurrency (cUSD, CELO, cEUR). The feeCurrency can also be passed to the provider component. Valid values are ",(0,o.kt)("inlineCode",{parentName:"p"},"CeloContract.GoldToken"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CeloContract.StableToken"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CeloContract.StableTokenEUR"),". CeloContract can be imported like so:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import { CeloTokenContract } from '@celo/contractkit'")),(0,o.kt)("h3",{id:"dark-mode"},"Dark mode"),(0,o.kt)("p",null,"use-contrackit uses Tailwind for styling, to use the modal in dark mode simply add the class ",(0,o.kt)("inlineCode",{parentName:"p"},"tw-dark")," to the root ",(0,o.kt)("inlineCode",{parentName:"p"},"<html />")," tag of the web page."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"To run use-contractkit locally, simply clone this repository and run:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make dev"))),(0,o.kt)("p",null,"A hot reloading server should come up on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", it's the exact same as what's at ",(0,o.kt)("a",{parentName:"p",href:"https://use-contractkit-c-labs.vercel.app"},"use-contractkit-c-labs.vercel.app"),"."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Struggling with anything use-contractkit related? Jump into the ",(0,o.kt)("a",{parentName:"p",href:"https://chat.celo.org"},"celo-org discord channel")," and ask for help any time."))}d.isMDXComponent=!0}}]);