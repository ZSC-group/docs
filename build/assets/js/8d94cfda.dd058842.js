"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3170],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],i={title:"Celo Local Development Chain with Protocol Contracts",description:"How to set up a Celo development blockchain that includes all of the core protocol contracts including identity and stability contracts.",slug:"/developer-guide/development-chain"},c="Local Development Chain with Protocol Contracts",p={unversionedId:"developer-resources/walkthroughs/development-chain",id:"developer-resources/walkthroughs/development-chain",title:"Celo Local Development Chain with Protocol Contracts",description:"How to set up a Celo development blockchain that includes all of the core protocol contracts including identity and stability contracts.",source:"@site/docs/developer-resources/walkthroughs/development-chain.md",sourceDirName:"developer-resources/walkthroughs",slug:"/developer-guide/development-chain",permalink:"/developer-guide/development-chain",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/walkthroughs/development-chain.md",tags:[],version:"current",frontMatter:{title:"Celo Local Development Chain with Protocol Contracts",description:"How to set up a Celo development blockchain that includes all of the core protocol contracts including identity and stability contracts.",slug:"/developer-guide/development-chain"},sidebar:"developers",previous:{title:"Celo Forno",permalink:"/developer-guide/forno"},next:{title:"Celo EVM Compatible Tooling",permalink:"/learn/evm-compatible-tooling"}},s=[{value:"What to expect",id:"what-to-expect",children:[{value:"Use Ganache to fork Mainnet or Alfajores",id:"use-ganache-to-fork-mainnet-or-alfajores",children:[],level:3},{value:"Use the celo-devchain NPM package",id:"use-the-celo-devchain-npm-package",children:[],level:3},{value:"Initialize your own devchain from the monorepo",id:"initialize-your-own-devchain-from-the-monorepo",children:[],level:3}],level:2},{value:"Interacting with the chain",id:"interacting-with-the-chain",children:[{value:"<strong>Inspecting the chain</strong>",id:"inspecting-the-chain",children:[],level:3},{value:"<strong>Celo CLI</strong>",id:"celo-cli",children:[],level:3},{value:"ContractKit + Node.js",id:"contractkit--nodejs",children:[],level:3},{value:"Using Ethereum developers tools with Celo",id:"using-ethereum-developers-tools-with-celo",children:[],level:3}],level:2}],h={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-development-chain-with-protocol-contracts"},"Local Development Chain with Protocol Contracts"),(0,r.kt)("p",null,"How to set up a Celo development blockchain that includes all of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/protocol"},"core protocol contracts"),", including identity and stability contracts."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,r.kt)("p",null,"At the end of this tutorial, you will have a local Celo development blockchain running exposed at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7545"},"http://localhost:7545")," and will be able to connect to it like any other local node. We will also go over how to inspect the development blockchain using and the ",(0,r.kt)("a",{parentName:"p",href:"../developer-guide/contractkit"},"ContractKit"),"."),(0,r.kt)("p",null,"Running the development Celo blockchain is helpful because it greatly speeds up development time. You will start with 10 accounts pre-funded with CELO and all transactions on the network are virtually instant."),(0,r.kt)("p",null,"You can run the development Celo blockchain in several ways:"),(0,r.kt)("h3",{id:"use-ganache-to-fork-mainnet-or-alfajores"},"Use Ganache to fork Mainnet or Alfajores"),(0,r.kt)("p",null,"You can start a local EVM development blockchain with ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/ganache/index.html"},"Ganache"),". Once Ganache is installed you can fork Mainnet or Alfajores with a single command. Read more about it in the ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/blog/introducing-ganache-7/index.html#1-zero-config-mainnet-forking"},"Ganache docs here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ganache --fork.url https://forno.celo.org\n")),(0,r.kt)("p",null,"This allows you to interact with contracts and accounts that were deployed at the specified fork point, including DeFi applications and protocol contracts like the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/address/0xc683e6f77B58D814B31F8661331EbDf63785D607/contracts"},"Reserve"),", ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/address/0x765DE816845861e75A25fCA122bb6898B8B1282a/contracts"},"cUSD"),", ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/token/0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73/token-transfers"},"cEUR"),", ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/address/0x7d21685C17607338b313a7174bAb6620baD0aaB7/read-proxy"},"Accounts"),", Governance and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/protocol/contracts"},"other contracts"),". "),(0,r.kt)("p",null,"You also get 10 accounts funded with fake CELO to deploy your contracts and run tests in this simulated mainnet environment. "),(0,r.kt)("p",null,"Be aware that you will not be able to pay transaction fees in stable coins since this is an Ethereum enviroment. It behaves similarly to the Celo EVM but not exactly."),(0,r.kt)("h3",{id:"use-the-celo-devchain-npm-package"},"Use the celo-devchain NPM package"),(0,r.kt)("p",null,'The easiest is to use a "pre-generated" devchain from the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/zviadm/celo-devchain"},"celo-devchain")," NPM package. For that all you have to do is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"> npm install --save-dev @terminal-fi/celo-devchain\n> npx celo-devchain --port 7545\n\nor\n\n> yarn add --dev @terminal-fi/celo-devchain\n> yarn run celo-devchain --port 7545\n")),(0,r.kt)("h3",{id:"initialize-your-own-devchain-from-the-monorepo"},"Initialize your own devchain from the monorepo"),(0,r.kt)("p",null,"If you prefer, you can initialize your own devchain and build it from scratch. To start, download the Celo monorepo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo"},"here")," or with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/celo-org/celo-monorepo.git\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/SETUP.md#building-celo-monorepo"},"this page")," for instructions on how to build the monorepo. "),(0,r.kt)("p",null,"Once the monorepo is built, move into the ",(0,r.kt)("inlineCode",{parentName:"p"},"contractkit")," directory. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd packages/sdk/contractkit\n")),(0,r.kt)("p",null,"From the ",(0,r.kt)("inlineCode",{parentName:"p"},"contractkit")," directory, run "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn test:reset && yarn test:livechain\n")),(0,r.kt)("p",null,"This will start the development Celo blockchain. It will take at least a few minutes to start. The contract migrations will be printed in the terminal as they are deployed. "),(0,r.kt)("p",null,"The process will finish and print ",(0,r.kt)("inlineCode",{parentName:"p"},"Ganache started"),". Leave this terminal window open to leave the development chain running."),(0,r.kt)("h2",{id:"interacting-with-the-chain"},"Interacting with the chain"),(0,r.kt)("h3",{id:"inspecting-the-chain"},(0,r.kt)("strong",{parentName:"h3"},"Inspecting the chain")),(0,r.kt)("p",null,"Now that we have a Celo development chain running, we probably want to know what accounts we have access to, how much cGLD and cUSD they have as well as the addresses of the deployed protocol contracts."),(0,r.kt)("p",null,"or we can use the and the ",(0,r.kt)("a",{parentName:"p",href:"../developer-guide/contractkit"},"ContractKit")," npm package in a node script."),(0,r.kt)("h3",{id:"celo-cli"},(0,r.kt)("strong",{parentName:"h3"},"Celo CLI")),(0,r.kt)("p",null,"You can install the CLI using npm by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g @celo/celocli"),". You can see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@celo/celocli"},"package details here"),". Once it is installed, you should be able to access the tool from the terminal by running ",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli"),". Try ",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli help"),"."),(0,r.kt)("p",null,"The CLI will connect to the node at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8545"},"http://localhost:8545")," by default. To connect to port 7545 you can run\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli config:set -n http://localhost:7545"),", and then check check the connection by running  ",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli node:get"),"."),(0,r.kt)("p",null,"You can see the accounts available on the Celo development chain by running",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli account:list"),". You should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[ '0x5409ED021D9299bf6814279A6A1411A7e866A631',\n  '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb',\n  '0xE36Ea790bc9d7AB70C55260C66D52b1eca985f84',\n  '0xE834EC434DABA538cd1b9Fe1582052B880BD7e63',\n  '0x78dc5D2D739606d31509C31d654056A45185ECb6',\n  '0xA8dDa8d7F5310E4A9E24F8eBA77E091Ac264f872',\n  '0x06cEf8E666768cC40Cc78CF93d9611019dDcB628',\n  '0x4404ac8bd8F9618D27Ad2f1485AA1B2cFD82482D',\n  '0x7457d5E02197480Db681D3fdF256c7acA21bDc12',\n  '0x91c987bf62D25945dB517BDAa840A6c661374402' ]\n")),(0,r.kt)("p",null,"If you try to check the balance of the first account with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ celocli account:balance 0x5409ED021D9299bf6814279A6A1411A7e866A631")," you might encounter an error saying that the node is not currently synced. You can silence this by adding this environment variable to the terminal ",(0,r.kt)("inlineCode",{parentName:"p"},"$ export NO_SYNCCHECK=true"),". Running the command again will print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"All balances expressed in units of 10^-18.\ngold: 9.9999999693185872e+25\nlockedGold: 0\nusd: 5e+22\ntotal: 1.00004973043691287703791575e+26\npending: 0\n")),(0,r.kt)("h3",{id:"contractkit--nodejs"},"ContractKit + Node.js"),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"../developer-guide/contractkit"},"ContractKit")," to access the local node in a node.js script."),(0,r.kt)("p",null,"As an example, try running ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/critesjosh/35ba7b1c2fe41934308cb243b003001c"},"this script")," in an npm project with contractkit installed. "),(0,r.kt)("p",null,"The linked gist is called getInfo.js. Run it with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ node getInfo.js")," This will print some of the Celo blockchain information."),(0,r.kt)("p",null,"You are now prepared to start developing, transacting and deploying contracts on your own Celo development blockchain! "),(0,r.kt)("h3",{id:"using-ethereum-developers-tools-with-celo"},"Using Ethereum developers tools with Celo"),(0,r.kt)("p",null,"You can connect the development chain to a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/overview"},"Truffle")," or ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," to begin interacting with it. Keep in mind that these tools are built primarily for Ethereum development and are compatible with Celo because Celo is similar to Ethereum. The two blockchains have similar block architectures and both run the Ethereum Virtual Machine ","(","EVM",")"," for executing smart contracts. "),(0,r.kt)("p",null,"The main difference between Celo and Ethereum that dapp developers need to keep in mind is that Celo has a slightly different transaction object than Ethereum. Celo requires 3 additional fields in a transaction object, a ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"gatewayFee")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"gatewayFeeRecipient"),". When Truffle and Remix are connected to a locally running Celo node, the local node will fill these fields with default values ","(","if the fields are empty",")",". The node will sign the Celo transaction and broadcast it to the network. Trying to send signed Ethereum transactions to a Celo network will not work."))}d.isMDXComponent=!0}}]);