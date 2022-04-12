"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[9232],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Recover CELO from an Ethereum Address",description:"How to recover CELO (previously Celo Gold) if you accidentally transferred them to an account generated using an Ethereum wallet.",slug:"/celo-owner-guide/eth-recovery"},s="Recover CELO from an Ethereum Address",c={unversionedId:"celo-holder-guide/eth-recovery",id:"celo-holder-guide/eth-recovery",title:"Recover CELO from an Ethereum Address",description:"How to recover CELO (previously Celo Gold) if you accidentally transferred them to an account generated using an Ethereum wallet.",source:"@site/docs/celo-holder-guide/eth-recovery.md",sourceDirName:"celo-holder-guide",slug:"/celo-owner-guide/eth-recovery",permalink:"/es/celo-owner-guide/eth-recovery",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Recover CELO from an Ethereum Address",description:"How to recover CELO (previously Celo Gold) if you accidentally transferred them to an account generated using an Ethereum wallet.",slug:"/celo-owner-guide/eth-recovery"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Recovering with CeloWallet.app",id:"recovering-with-celowalletapp",children:[{value:"Steps to access funds",id:"steps-to-access-funds",children:[],level:3},{value:"Steps to migrate funds",id:"steps-to-migrate-funds",children:[],level:3}],level:2},{value:"Recovering with the Celo CLI",id:"recovering-with-the-celo-cli",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:3},{value:"Steps",id:"steps",children:[{value:"Prepare your recovery phases",id:"prepare-your-recovery-phases",children:[],level:4},{value:"Recover your Ethereum address on Celo",id:"recover-your-ethereum-address-on-celo",children:[],level:4},{value:"Check your CELO balanace",id:"check-your-celo-balanace",children:[],level:4},{value:"Transfer CELO",id:"transfer-celo",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recover-celo-from-an-ethereum-address"},"Recover CELO from an Ethereum Address"),(0,o.kt)("p",null,"How to recover ",(0,o.kt)("a",{parentName:"p",href:"/es/celo-holder-guide/overview#background-and-key-concepts"},"CELO (previously Celo Gold)")," if you accidentally transferred them to an account generated using an Ethereum wallet."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You only need to go through this process when going from mnemonic (secret phrase) to account because of the different account derivation paths between Celo and Ethereum. This is only relevant if you're using a wallet that can\u2019t connect to both the Ethereum and Celo networks or you can\u2019t export the private key. Private key--account pairs are the same for both Celo and Ethereum, it's just menemonic (secret phrase) to private keys that are different."),(0,o.kt)("p",{parentName:"div"},"With Metamask, recovery is easy because you just switch Metamask to the network where the funds are--the accounts and private keys for both networks are the same. The problem occurs when the wallet only accepts the secret phrase and derives private keys and accounts differently based on the network it is designed for."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes you have access to the recipient's mnemonic recovery phrase (note, in Valora and Celo Wallet it's called your 'Recovery Phrase')."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are ",(0,o.kt)("a",{parentName:"p",href:"https://www.cryptomathic.com/news-events/blog/cryptographic-key-management-the-risks-and-mitigations"},"risks")," associated with using a recovery phrase or a private key. Please keep these secret."))),(0,o.kt)("h2",{id:"recovering-with-celowalletapp"},"Recovering with CeloWallet.app"),(0,o.kt)("p",null,"The Celo Wallet for Web and Desktop can be used to import mnemonic phrases with custom derivation paths (like Ethereum's) in order to recover your funds."),(0,o.kt)("h3",{id:"steps-to-access-funds"},"Steps to access funds"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://celowallet.app"},"celowallet.app")," in a modern browser (Chrome is recommended)."),(0,o.kt)("li",{parentName:"ol"},"For small accounts, you can import in the web version directly. For larger accounts, downloading the desktop version is ",(0,o.kt)("strong",{parentName:"li"},"strongly")," recommended."),(0,o.kt)("li",{parentName:"ol"},"Click 'Use Existing Account', then 'Use Recovery Phrase', then choose the 'Advanced' tab."),(0,o.kt)("li",{parentName:"ol"},"Specify your deriviation path and click import."),(0,o.kt)("li",{parentName:"ol"},"Set a strong password and click Continue. You should reach the home screen and see your account funds.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/celo-website/docs/celo-wallet-advanced-import-screen.png",alt:null})),(0,o.kt)("h3",{id:"steps-to-migrate-funds"},"Steps to migrate funds"),(0,o.kt)("p",null,"Once you've been able to access your funds, it's recommended that you move them to an account derived from the Celo derivation path."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new account: you can use the celowallet.app again, Valora, the Celo CLI, or any other wallets compatible with Celo."),(0,o.kt)("li",{parentName:"ol"},"Copy the address of your new account"),(0,o.kt)("li",{parentName:"ol"},"In the first Celo Wallet window, click the Send button in the top-left."),(0,o.kt)("li",{parentName:"ol"},"Send your funds to your new account."),(0,o.kt)("li",{parentName:"ol"},"If you intend to keep this new account permanently, be sure to save its password and recovery phrase in a safe place!")),(0,o.kt)("h2",{id:"recovering-with-the-celo-cli"},"Recovering with the Celo CLI"),(0,o.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes that you have access to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A computer with a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Command-line_interface"},"Command Line Interface"),". You can access it following these instructions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/270810/how-to-quickly-launch-a-bash-shell-from-windows-10s-file-explorer/"},"Windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://macpaw.com/how-to/use-terminal-on-mac"},"Mac")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/196212/how-do-you-open-a-command-line"},"Linux")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://kb.myetherwallet.com/en/security-and-privacy/what-is-a-mnemonic-phrase/"},"24-word recovery phrase")," of your Ethereum address"))),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("p",null,"Please follow the instructions below closely, because missteps can lead to errors or permanent loss of your tokens. To understand these steps, please read ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/what-is-ethereum/"},"What is Ethereum")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celo.org/overview"},"Celo Overview"),"."),(0,o.kt)("h4",{id:"prepare-your-recovery-phases"},"Prepare your recovery phases"),(0,o.kt)("p",null,"Write your recovery phrase to a file using the following commands:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"nano recovery.txt")),(0,o.kt)("li",{parentName:"ol"},"Paste ",(0,o.kt)("inlineCode",{parentName:"li"},"<word1> <word2> \u2026 <word24>")),(0,o.kt)("li",{parentName:"ol"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"<word>"),"s in brackets with the words from your recovery phrase (usually 24 words, but can be 12, 15, 18, 21 or 24 words, as specified in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP 39 standard"),")"),(0,o.kt)("li",{parentName:"ol"},"Press ctrl-o to save"),(0,o.kt)("li",{parentName:"ol"},"Press ctrl-x to exit")),(0,o.kt)("h4",{id:"recover-your-ethereum-address-on-celo"},"Recover your Ethereum address on Celo"),(0,o.kt)("p",null,"Recover your Ethereum address on the Celo network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'celocli account:new --mnemonicPath recovery.txt --derivationPath "eth" --node https://forno.celo.org\n')),(0,o.kt)("p",null,"This command will return you with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accountAddress"),": the same address as your Ethereum address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"privateKey"),": the private key associated with your address -- please record this private key on paper and not share with anyone else"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publicKey"),": the public key associated with your address")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note"))),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth")," derivation path as above will work for the default Ethereum path used by nearly all Ethereum wallets (",(0,o.kt)("inlineCode",{parentName:"p"},"\"m/44'/60'/0'/0/0\""),"). If your address was generated using a different derivation path you can specify that using a combination of the flags ",(0,o.kt)("inlineCode",{parentName:"p"},"addressIndex"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"changeIndex")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"derivationPath"),"."),(0,o.kt)("p",null,"For example, for the address corresponding to the path ",(0,o.kt)("inlineCode",{parentName:"p"},"m/44'/78'/1'/4/23")," use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celocli account:new --mnemonicPath recovery.txt --derivationPath \"m/44'/78'/1'\" --changeIndex 4 --addressIndex 23 --node https://forno.celo.org\n")),(0,o.kt)("h4",{id:"check-your-celo-balanace"},"Check your CELO balanace"),(0,o.kt)("p",null,"Check your Celo account balance using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celocli account:balance <accountAddress> --node https://forno.celo.org\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<accountAddress>")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"accountAddress")," you got from the previous step."),(0,o.kt)("h4",{id:"transfer-celo"},"Transfer CELO"),(0,o.kt)("p",null,"Now, you can transfer your CELO to an address of choice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celocli transfer:celo --from <accountAddress> --to <addressOfChoice> --value <valueInCeloWei> --privateKey <privateKey> --node https://forno.celo.org\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<accountAddress>")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"accountAddress")," you got from the previous step."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<addressOfChoice>")," with the address that you want to send CELO to."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<valueInCeloWei>")," with the amount you want to send, but this number needs to be slightly lower than your balance, as there\u2019s a transaction fee.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that the value has a unit of CELO Wei (1 CELO = 10^18 CELO Wei), so if you want to send 1 CELO, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<valueInCeloWei>")," should be 1000000000000000000."))))}u.isMDXComponent=!0}}]);