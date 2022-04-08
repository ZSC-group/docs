"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[9709],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),l=["components"],r={title:"Celo CLI",description:"The Command Line Interface allows users to interact with the Celo Protocol smart contracts.",sidebar_position:1},s="Celo CLI",c={unversionedId:"command-line-interface/introduction",id:"command-line-interface/introduction",title:"Celo CLI",description:"The Command Line Interface allows users to interact with the Celo Protocol smart contracts.",source:"@site/docs/command-line-interface/introduction.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/introduction",permalink:"/command-line-interface/introduction",editUrl:"https://github.com/celo-org/docs/edit/main/docs/command-line-interface/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Celo CLI",description:"The Command Line Interface allows users to interact with the Celo Protocol smart contracts.",sidebar_position:1},sidebar:"docs",previous:{title:"ZSC FAQ",permalink:"/faqs"},next:{title:"celocli account",permalink:"/command-line-interface/account"}},d=[{value:"What is the Celo CLI",id:"what-is-the-celo-cli",children:[],level:2},{value:"NPM Package",id:"npm-package",children:[],level:2},{value:"Commands",id:"commands",children:[],level:2},{value:"Optional: Run a Full Node",id:"optional-run-a-full-node",children:[],level:2},{value:"Import Accounts",id:"import-accounts",children:[{value:"Import Private Key (less secure)",id:"import-private-key-less-secure",children:[],level:3}],level:2},{value:"Using a Ledger Wallet",id:"using-a-ledger-wallet",children:[],level:2},{value:"Plugins",id:"plugins",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celo-cli"},"Celo CLI"),(0,i.kt)("p",null,"Introduction to the Celo Command Line Interface and installation instructions."),(0,i.kt)("h2",{id:"what-is-the-celo-cli"},"What is the Celo CLI"),(0,i.kt)("p",null,"The Command Line Interface allows users to interact with the Celo Protocol smart contracts."),(0,i.kt)("p",null,"It\u2019s a command-line interface around the ContractKit. It allows you to interact with the Celo Protocol and smart contracts using command-line tools rather than writing JavaScript. It provides modules for interacting with modules on the ContractKit and is an excellent code reference when defining your own modules. Some common features you may want to consider are helping users participate in elections or in on-chain governance, voting for validators, or helping users interact with multi-sig contracts."),(0,i.kt)("h2",{id:"npm-package"},"NPM Package"),(0,i.kt)("p",null,"The Celo CLI is published as a node module on NPM. Assuming you have ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm")," and ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")," both installed, you can install the Celo CLI using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @celo/celocli\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are currently deploying the CLI with only Node.js v12.x. If you are running a different version of Node.js, consider using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installation-and-update"},"NVM")," to manage your node versions. e.g. with: ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm install 12 && nvm use 12")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have trouble installing globally ","(","i.e. with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-g")," flag",")",", try installing to a local directory instead with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @celo/celocli")," and run with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx celocli"),"."))),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"The tool is broken down into modules and commands with the following pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"celocli <module>:<command> <...args> <...flags?>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli")," tool assumes that users are running a node which they have access to signing transactions on, or have another mechanism for signing transactions (such as a Ledger wallet or supplying the private key as an argument to the command). See the documentation on the ",(0,i.kt)("a",{parentName:"p",href:"/command-line-interface/config"},"config")," module for information about how to set which node commands are sent to."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All balances of CELO or Celo Dollars are expressed in units of 10^-18."))),(0,i.kt)("p",null,"You can find the Celo CLI package on NPM ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@celo/celocli"},"here"),"."),(0,i.kt)("p",null,"To see all available commands, run ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli commands"),"."),(0,i.kt)("p",null,"To see all available flags for a command, add the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--globalHelp")," to the command."),(0,i.kt)("h2",{id:"optional-run-a-full-node"},"Optional: Run a Full Node"),(0,i.kt)("p",null,"Commands need to connect to a Celo node to execute most functionality. You can either use ",(0,i.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," (this is the easiest way) or run your own full node if you prefer. See the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/mainnet/running-a-full-node-in-mainnet"},"Running a Full Node")," instructions for more details on running a full node."),(0,i.kt)("p",null,"The easiest way to connect ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli")," to the Celo network is by running the following command in your terminal with ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli")," installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"celocli config:set --node=https://forno.celo.org\n")),(0,i.kt)("p",null,"You can verify that ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli")," is connected by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"celocli config:get\n")),(0,i.kt)("h2",{id:"import-accounts"},"Import Accounts"),(0,i.kt)("p",null,"If you are connecting to a remote node (like Forno), Celo CLI will need to sign transactions locally before sending them. To do this, Celo CLI needs access to a private key. There are a couple ways to sign transactions using Celo CLI."),(0,i.kt)("h3",{id:"import-private-key-less-secure"},"Import Private Key (less secure)"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--privateKey")," flag followed by the private key associated with the sending account. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celocli transfer:celo --from <accountAddress> --to <addressOfChoice> --value <valueInCeloWei> --privateKey <privateKey> --node https://forno.celo.org\n")),(0,i.kt)("p",null,"Or you can use a Ledger hardware wallet. (preferred, see below)"),(0,i.kt)("h2",{id:"using-a-ledger-wallet"},"Using a Ledger Wallet"),(0,i.kt)("p",null,"The Celo CLI supports using a ",(0,i.kt)("a",{parentName:"p",href:"/celo-owner-guide/ledger"},"Ledger hardware wallet")," to sign transactions. Just add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--useLedger")," flag to a command that requires a signature."),(0,i.kt)("p",null,"You can specify the number of addresses to get for local signing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ledgerAddresses")," flag."),(0,i.kt)("p",null,"You can specify an array of index addresses for local signing. Example ",(0,i.kt)("inlineCode",{parentName:"p"},'--ledgerCustomAddresses "[4,99]"'),"."),(0,i.kt)("p",null,"For example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celocli transfer:celo --to <addressOfChoice> --value 1000000 --from <accountAddress> --useLedger\n")),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Additional plugins can be installed which make the CLI experience smoother. Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli")," only supports installing plugins published on NPM within the ",(0,i.kt)("inlineCode",{parentName:"p"},"@celo/*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@clabs/*")," scopes."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Installing a 3rd party plugin can be ",(0,i.kt)("em",{parentName:"p"},"dangerous"),"! Please always be sure that you trust the plugin provider."))),(0,i.kt)("p",null,"The autocomplete plugin adds an interactive autocomplete for ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh")," shells. To enable the autocomplete plugin, follow the instructions provided at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"celocli autocomplete\n")),(0,i.kt)("p",null,"The update warning plugin notifies the user if they are using an oudated version of the CLI. This plugin is enabled by default."))}m.isMDXComponent=!0}}]);