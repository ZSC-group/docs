"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[467],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(r),u=a,h=y["".concat(l,".").concat(u)]||y[u]||d[u]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},772:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return y}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),o=["components"],i={title:"Using Keystores Library for Local Key Management",description:"Introduction to the keystores library and how to use it for local key management.",slug:"/developer-guide/start/using-js-keystores"},l="Keystores Library",c={unversionedId:"developer-resources/walkthroughs/using-js-keystores",id:"developer-resources/walkthroughs/using-js-keystores",title:"Using Keystores Library for Local Key Management",description:"Introduction to the keystores library and how to use it for local key management.",source:"@site/docs/developer-resources/walkthroughs/using-js-keystores.md",sourceDirName:"developer-resources/walkthroughs",slug:"/developer-guide/start/using-js-keystores",permalink:"/es/developer-guide/start/using-js-keystores",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Using Keystores Library for Local Key Management",description:"Introduction to the keystores library and how to use it for local key management.",slug:"/developer-guide/start/using-js-keystores"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Using the FileKeystore",id:"using-the-filekeystore",children:[{value:"Create new keystore and import private key",id:"create-new-keystore-and-import-private-key",children:[],level:4},{value:"Accessing an existing keystore file",id:"accessing-an-existing-keystore-file",children:[],level:4},{value:"Remove (delete) a keystore file for a particular address",id:"remove-delete-a-keystore-file-for-a-particular-address",children:[],level:4}],level:3},{value:"Using the KeystoreWalletWrapper",id:"using-the-keystorewalletwrapper",children:[],level:3}],level:2}],d={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"keystores-library"},"Keystores Library"),(0,s.kt)("p",null,"Introduction to the keystores library and how to use it for local key management."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"This is a JavaScript library that provides functions for creating and interacting with encrypted keystores for private key management. To do this, this library wraps the existing ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ethereumjs/ethereumjs-wallet"},(0,s.kt)("inlineCode",{parentName:"a"},"ethereumjs-wallet")," library"),", which is a standard library for managing keystores according to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition"},"Web3 Secret Storage Definition"),". As specified, secrets are encrypted using the Scrypt KDF (Key Derivation Function); in this case, the private key is encrypted with a passphrase (that should be kept secret) and can be decrypted later by the same phrase. Note that a keystore generated for the same (private key, passphrase) multiple times will not yield the same output due to how the KDF works. Keystore files generated by a geth node can be decrypted and accessed with this library, and vice versa."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note that keystore files generated by this library do not contain BLS public keys, meaning that these should not be used for validator signer keys used in consensus.")),(0,s.kt)("p",null,"The components of the library are roughly as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"KeystoreBase")," which wraps the functionality of ",(0,s.kt)("inlineCode",{parentName:"li"},"ethereumjs-wallet")," and exposes functions to:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"import PKs (into encrypted keystores)"),(0,s.kt)("li",{parentName:"ul"},"decrypt and get a PK from an encrypted keystore"),(0,s.kt)("li",{parentName:"ul"},"change the passphrase on a keystore"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"FileKeystore"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"InMemoryKeystore")," which specifiy the IO in addition to the above base class"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"KeystoreWalletWrapper"),": (not stable; likely to structurally change) a very simple wrapper for a ",(0,s.kt)("inlineCode",{parentName:"li"},"Keystore")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"LocalWallet"),", which allows a user to decrypt a keystore and pass the key to the ",(0,s.kt)("inlineCode",{parentName:"li"},"LocalWallet")," in order to sign transactions.")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For accounts containing significant funds or otherwise requiring a high degree of security, we ",(0,s.kt)("strong",{parentName:"p"},"do not")," recommend this keystore library! This is only for managing keys for low-risk hot wallets and signers."),(0,s.kt)("p",{parentName:"div"},"For more stringent security requirements, check out the guide to ",(0,s.kt)("a",{parentName:"p",href:"/getting-started/wallets"},"Choosing a Wallet"),"."))),(0,s.kt)("p",null,"Depending on your use case, you can either interact directly with the ",(0,s.kt)("inlineCode",{parentName:"p"},"FileKeystore")," (purely for creating and interacting with keystore files, importing or accessing private keys) or else use the ",(0,s.kt)("inlineCode",{parentName:"p"},"KeystoreWalletWrapper")," (combines the keystore functionality with convenient access to the ",(0,s.kt)("inlineCode",{parentName:"p"},"LocalWallet")," for signing tranactions)."),(0,s.kt)("h3",{id:"using-the-filekeystore"},"Using the FileKeystore"),(0,s.kt)("h4",{id:"create-new-keystore-and-import-private-key"},"Create new keystore and import private key"),(0,s.kt)("p",null,"This snippet will create a ",(0,s.kt)("inlineCode",{parentName:"p"},"keystore")," directory in the ",(0,s.kt)("inlineCode",{parentName:"p"},"parentDirectory")," and create an encrypted file in the ",(0,s.kt)("inlineCode",{parentName:"p"},"keystore")," directory containing the private key. Note that you can only create a new encrypted file for a private key if there is not already an existing file for that private key. If it already exists, you can change the passphrase (see below), but you may not have multiple files for the same private key in the same ",(0,s.kt)("inlineCode",{parentName:"p"},"keystore")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import * as readline from "readline";\nimport { FileKeystore } from "@celo/keystores";\n\n// This is the directory that will contain a "keystore" directory\nconst parentDirectory = "<INSERT_PATH_HERE>";\n// This creates a "keystore" directory if one does not already exist in the parentDirectory\nconst keystore = new FileKeystore(parentDirectory);\n\n// Prompt to enter private key and passphrase on the command line\nlet rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n});\nconst privateKey: string = await new Promise((resolve) =>\n  rl.question("Enter private key:", (answer) => {\n    resolve(answer);\n  })\n);\nconst passphrase: string = await new Promise((resolve) =>\n  rl.question("Enter secret passphrase:", (answer) => {\n    rl.close();\n    resolve(answer);\n  })\n);\n// Import private key into the keystore, which is then stored as an encrypted file\n// Should create a file with a name like `UTC-<DATETIME>-<ACCOUNT_ADDRESS>`\nawait keystore.importPrivateKey(privateKey, passphrase);\n// Retrieve all addresses contained in the keystore\nconsole.log("Addresses in keystore: ", await keystore.listKeystoreAddresses());\n')),(0,s.kt)("h4",{id:"accessing-an-existing-keystore-file"},"Accessing an existing keystore file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Keystore already exists\nconst parentDirectory = '<INSERT_PATH_HERE>'\nconst keystore = new FileKeystore(parentDirectory)\nconst address = '<YOUR_ADDRESS_HERE>'\nconst oldPassphrase = '<OLD_PASSPHRASE>'\n\n// Decrypt file and retrieve private key\nawait keystore.getPrivateKey(address, oldPassphrase)\n\n// Change the passphrase encrypting the file\nconst newPassphrase = '<NEW_PASSPHRASE>'\nawait.keystore.changeKeystorePassphrase(address, oldPassphrase, newPassphrase)\n\n// Decrypt file and retrieve private key using new passphrase\nconsole.log(await keystore.getPrivateKey(address, newPassphrase))\n")),(0,s.kt)("h4",{id:"remove-delete-a-keystore-file-for-a-particular-address"},"Remove (delete) a keystore file for a particular address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const parentDirectory = "<INSERT_PATH_HERE>";\nconst keystore = new FileKeystore(parentDirectory);\nconst address = "<YOUR_ADDRESS_HERE>";\n\n// When you know the address\n// Get the filename (keystore name)\nconst keystoreName = await keystore.getKeystoreName(address);\nawait keystore.removeKeystore(keystoreName);\n\n// Alternatively, you can do this by passing in the filename directly\nkeystore.removeKeystore("<KEYSTORE_FILENAME_TO_DELETE>");\n')),(0,s.kt)("h3",{id:"using-the-keystorewalletwrapper"},"Using the KeystoreWalletWrapper"),(0,s.kt)("p",null,"This example will instantiate a ",(0,s.kt)("inlineCode",{parentName:"p"},"KeystoreWalletWrapper"),", import a private key, and use the inner ",(0,s.kt)("inlineCode",{parentName:"p"},"LocalWallet")," within the wrapper to sign and send a transaction with ",(0,s.kt)("inlineCode",{parentName:"p"},"ContractKit"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { newKit } from "@celo/contractkit";\nimport { FileKeystore, KeystoreWalletWrapper } from "@celo/keystores";\n\n// This is the directory that will contain a "keystore" directory\nconst parentDirectory =\n  "/celo/celo-monorepo/packages/sdk/wallets/wallet-keystore/test-keystore-dir";\n// Instantiate a KeystoreWalletWrapper using a FileKeystore\nconst keystoreWalletWrapper = new KeystoreWalletWrapper(\n  new FileKeystore(parentDirectory)\n);\n// Make sure to not commit this if using real funds!\n// You can also get this as input on the command-line using `readline`\n// as in the example above for FileKeystore\nconst privateKey = "YOUR_TEST_PRIVATE_KEY";\nconst passphrase = "test-passphrase1! ";\n\n// Import private key or unlock account\nawait keystoreWalletWrapper.importPrivateKey(privateKey, passphrase);\n// If the keystore file already exists for an address, simply unlock:\n// const address = \'YOUR_TEST_ADDRESS\'\n// await keystoreWalletWrapper.unlockAccount(address, passphrase)\n\n// Get the wrapper\'s `LocalWallet` instance and pass this into ContractKit\nconst wallet = keystoreWalletWrapper.getLocalWallet();\nconst kit = newKit("https://alfajores-forno.celo-testnet.org", wallet);\nconst [from] = wallet.getAccounts();\n\n// Send a test transaction\nconst gold = await kit.contracts.getGoldToken();\nawait gold\n  .transfer("0x22579ca45ee22e2e16ddf72d955d6cf4c767b0ef", "1")\n  .sendAndWaitForReceipt({ from });\nconsole.log("Transaction sent!");\n')))}y.isMDXComponent=!0}}]);