"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7661],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"React based DApp",description:"The basics of developing a decentralised application (DApp) on Celo.",slug:"/developer-guide/start/web-dapp"},l="React Based DApp",c={unversionedId:"developer-resources/walkthroughs/web-dapp",id:"developer-resources/walkthroughs/web-dapp",title:"React based DApp",description:"The basics of developing a decentralised application (DApp) on Celo.",source:"@site/docs/developer-resources/walkthroughs/web-dapp.md",sourceDirName:"developer-resources/walkthroughs",slug:"/developer-guide/start/web-dapp",permalink:"/developer-guide/start/web-dapp",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/walkthroughs/web-dapp.md",tags:[],version:"current",frontMatter:{title:"React based DApp",description:"The basics of developing a decentralised application (DApp) on Celo.",slug:"/developer-guide/start/web-dapp"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Foreword",id:"foreword",children:[],level:2},{value:"Getting started",id:"getting-started-1",children:[],level:2},{value:"Developing the application",id:"developing-the-application",children:[{value:"Connecting to the user&#39;s wallet",id:"connecting-to-the-users-wallet",children:[],level:3},{value:"Accessing contracts",id:"accessing-contracts",children:[],level:3},{value:"Locking Celo (optional)",id:"locking-celo-optional",children:[],level:3},{value:"Voting on a proposal",id:"voting-on-a-proposal",children:[],level:3}],level:2},{value:"Best practices",id:"best-practices",children:[{value:"Last used address",id:"last-used-address",children:[],level:3},{value:"Loading states",id:"loading-states",children:[],level:3},{value:"Prerender what you can",id:"prerender-what-you-can",children:[],level:3},{value:"Showing numbers in wei vs. Celo vs. local currency",id:"showing-numbers-in-wei-vs-celo-vs-local-currency",children:[],level:3}],level:2},{value:"Wrapping up",id:"wrapping-up",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-based-dapp"},"React Based DApp"),(0,r.kt)("p",null,"The basics of developing a decentralised application (DApp) on Celo. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This example will develop using one of the core Celo contracts, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Governance.sol"},"Governance.sol"),", and allowing users of our DApp to vote on "),(0,r.kt)("h2",{id:"foreword"},"Foreword"),(0,r.kt)("p",null,"This guide requires an understanding of a few popular web technologies. Our application will be written in ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", utilising ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks")," for state management and built with ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", a popular static site generation framework."),(0,r.kt)("p",null,"If you find this tutorial lacking in any way or want to dive into the code more thoroughly, checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexbharley/celo-tools"},"Celo Tools")," GitHub repository where much of this tutorial has been ported from."),(0,r.kt)("h2",{id:"getting-started-1"},"Getting started"),(0,r.kt)("p",null,"Step one of developing our application is scaffolding it out with ",(0,r.kt)("inlineCode",{parentName:"p"},"create-next-app")," and adding TypeScript compilation so we can develop more confidently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create next-app voting-dapp\ncd voting-dapp\ntouch tsconfig.json\nyarn add --dev typescript @types/react @types/node\n")),(0,r.kt)("p",null,"Now running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," should open up our new Next.js website on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"."),(0,r.kt)("p",null,"Next we'll need to add a few Celo specific dependencies so we can work with our core contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @celo/contractkit @celo-tools/use-contractkit bignumber.js\n")),(0,r.kt)("p",null,"Here's what we'll be using each of these packages for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/sdk/contractkit"},"@celo/contractkit")," is a lightweight wrapper around the ",(0,r.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/"},"Web3")," object you may already be familiar with. It contains typed interfaces for the core contracts (generated from the Contract ABIs) and helper functions to make common operations on Celo easier"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/celo-tools/use-contractkit"},"@celo-tools/use-contractkit")," is a community provided library to ease establishing the connection with a user's wallet, whether that is a hardware, mobile, or web wallet. When developing with this library, your users can hold Celo via ",(0,r.kt)("a",{parentName:"li",href:"https://valoraapp.com"},"Valora"),", a Ledger, Metamask and more"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/bignumber.js/"},"bignumber.js")," is a library for expressing large numbers in JavaScript. When interacting with a blockchain we often need to handle arbitrary-precision decimal and non-decimal arithmetic.")),(0,r.kt)("p",null,"We'll also need to add some Next.js config to work with these packages. Update next.config.js with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  webpack: (config) => {\n    config.resolve.fallback = {\n      ...config.resolve.fallback,\n      fs: false,\n      net: false,\n      child_process: false,\n      readline: false,\n    };\n    return config;\n  },\n};\n")),(0,r.kt)("p",null,"We'll need to restart the server for the config changes to take effect."),(0,r.kt)("h2",{id:"developing-the-application"},"Developing the application"),(0,r.kt)("p",null,"After all our boilerplate has been setup, we're ready to start developing our application."),(0,r.kt)("h3",{id:"connecting-to-the-users-wallet"},"Connecting to the user's wallet"),(0,r.kt)("p",null,"When a user wants to interact with your DApp we need to somehow allow them to connect their wallet. Interaction with on chain smart contracts is impossible without this step."),(0,r.kt)("p",null,"Leveraging our previously added ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-tools/use-contractkit"},"@celo-tools/use-contractkit")," library we can provide a button that prompts the user to connect their wallet."),(0,r.kt)("p",null,"Update pages/index.js with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"import React from 'react';\nimport { useContractKit } from '@celo-tools/use-contractkit';\nimport { ContractKitProvider } from '@celo-tools/use-contractkit';\nimport '@celo-tools/use-contractkit/lib/styles.css';\n\nfunction App () {\n  const { address, connect } = useContractKit()\n\n  return (\n    <main>\n      <h1>Celo Voting DApp</h1>\n      <p>{address}</p>\n      <button onClick={connect}>Click here to connect your wallet</button>\n    </main>\n  )\n}\n\nfunction WrappedApp() {\n  return (\n    <ContractKitProvider\n      dapp={{\n          name: \"My awesome dApp\",\n          description: \"My awesome description\",\n          url: \"https://example.com\",\n        }}\n    >\n      <App />\n    </ContractKitProvider>\n  );\n}\nexport default WrappedApp;\n")),(0,r.kt)("p",null,"Clicking this button will show the ",(0,r.kt)("inlineCode",{parentName:"p"},"use-contractkit")," modal and allow the user to connect with their wallet of choice. Once the modal has been dismissed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," property exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"use-contractkit")," will be filled with the users primary account."),(0,r.kt)("h3",{id:"accessing-contracts"},"Accessing contracts"),(0,r.kt)("p",null,"After that we've connected to the user's wallet we can show interesting information based on their address. In the context of a governance voting DApp it may make sense to show past proposals they've voted on. If we were creating a simple banking interface, we could imagine wanting to show transfers into and out of the users account."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On the Celo blockchain, only queued and dequeued proposals are kept in the Governance state. That means to access old proposals we'd need to access an indexed history of the blockchain. This is out of scope for our tutorial however there's many resources online you can find that will help you accessing indexed blockchain state."),(0,r.kt)("p",{parentName:"div"},"For a comprehensive look at how to interpret this on chain state, take a look at the implementation for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/cli/src/commands/governance/list.ts"},"celocli governance:list")," command."),(0,r.kt)("p",{parentName:"div"},"For the purposes of this tutorial, we'll only be looking at dequeued proposals, or proposals we can currently vote on."))),(0,r.kt)("p",null,"Here's how it looks using a combination of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," hooks to request and display all dequeued proposals from the blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"import React, { useCallback, useEffect, useState } from 'react'\nimport { useContractKit } from '@celo-tools/use-contractkit'\n\nfunction GovernanceApp() {\n  const { address, connect, kit, getConnectedKit } = useContractKit()\n  const [proposals, setProposals] = useState([])\n\n  const fetchProposals = useCallback(async () => {\n    const governance = await kit.contracts.getGovernance()\n    const dequeue = await governance.getDequeue()\n\n    const fetchedProposals = await Promise.all(\n      dequeue.map(async (id) => ({ id, ...(await governance.getProposalRecord(id)) }))\n    )\n    setProposals(fetchedProposals)\n  }, [kit])\n\n  useEffect(() => {\n    fetchProposals()\n  }, [fetchProposals])\n\n  return (\n    <div>\n      <h1>Celo Voting DApp</h1>\n      <p>{address}</p>\n      <button onClick={connect}>Click here to connect your wallet</button>\n      <table>\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Status</th>\n            <th>Description URL</th>\n          </tr>\n        </thead>\n        <tbody>\n          {proposals.map((proposal) => (\n            <tr>\n              <td>{proposal.id.toString()}</td>\n              <td>{proposal.passed ? 'Passed' : proposal.approved ? 'Approved' : 'Not approved'}</td>\n              <td>\n                <a href={proposal.metadata.descriptionURL} target=\"_blank\" style={{ color: 'blue', textDecoration: 'underline' }} >\n                  Link\n                </a>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"Be sure to add this new ",(0,r.kt)("inlineCode",{parentName:"p"},"GovernanceApp")," component to your ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedApp")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'function WrappedApp() {\n  return (\n    <ContractKitProvider\n      dapp={{\n          name: "My awesome dApp",\n          description: "My awesome description",\n          url: "https://example.com",\n        }}\n    >\n      <GovernanceApp />\n    </ContractKitProvider>\n  );\n}\n')),(0,r.kt)("p",null,"This works pretty well however it makes sense to additionally show whether the user has voted on any given dequeued governance proposal. To show that information, we can amend our ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchProposals")," function as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"const fetchProposals = useCallback(async () => {\n  if (!address) {\n    return\n  }\n\n  const governance = await kit.contracts.getGovernance()\n  const dequeue = await governance.getDequeue()\n\n  const fetchedProposals = await Promise.all(\n    dequeue.map(async (id) => {\n      const [record, voteRecord] = await Promise.all([\n        governance.getProposalRecord(id),\n        governance.getVoteRecord(address, id),\n      ])\n\n      return {\n        id,\n        ...record,\n        vote: voteRecord ? voteRecord.value : undefined,\n      }\n    })\n  )\n  setProposals(fetchedProposals)\n}, [kit, address])\n")),(0,r.kt)("p",null,"Now we have access to whether the user voted on this proposal, we can render that information in our table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"return (\n  <table>\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Status</th>\n        <th>Description URL</th>\n        <th>Voted</th>\n      </tr>\n    </thead>\n    <tbody>\n      {proposals.map((proposal) => (\n        <tr>\n          <td>{proposal.id.toString()}</td>\n          <td>{proposal.passed ? 'Passed' : proposal.approved ? 'Approved' : 'Not approved'}</td>\n          <td>\n            <a style={{ color: 'blue', textDecoration: 'underline' }} href={proposal.metadata.descriptionURL} target=\"_blank\">\n              Link\n            </a>\n          </td>\n          <td>{proposal.vote ?? 'No vote yet'}</td>\n        </tr>\n      ))}\n    </tbody>\n  </table>\n)\n")),(0,r.kt)("h3",{id:"locking-celo-optional"},"Locking Celo (optional)"),(0,r.kt)("p",null,"A prerequisite to ",(0,r.kt)("a",{parentName:"p",href:"/celo-holder-guide/voting-governance"},"voting on Celo governance proposals")," is having locked Celo to vote with. We won't cover the various flows for locking, unlocking and relocking Celo in this tutorial but you can check the implementation in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexbharley/celo-tools"},"Celo Tools")," or take inspiration from the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const lockValue = new BigNumber(res.flags.value)\n\nconst lockedGold = await this.kit.contracts.getLockedGold()\nconst pendingWithdrawalsValue = await lockedGold.getPendingWithdrawalsTotalValue(address)\nconst relockValue = BigNumber.minimum(pendingWithdrawalsValue, value)\nconst lockValue = value.minus(relockValue)\n\nconst txos = await lockedGold.relock(address, relockValue)\nfor (const txo of txos) {\n  await kit.sendAndWaitForReceipt({ from: address })\n}\n")),(0,r.kt)("p",null,"All you need to take care of in your React application is handling user input to select the amount to lock and handling errors in case the user tries to lock more CELO than they hold."),(0,r.kt)("p",null,"It's also possible that users of your DApp already have locked CELO, so you might not need to worry about the complexity of permitting that operation."),(0,r.kt)("h3",{id:"voting-on-a-proposal"},"Voting on a proposal"),(0,r.kt)("p",null,"To actually vote on a proposal we need to again interact with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/Governance.sol"},"Governance.sol")," smart contract. Our logic for handling a vote looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"const vote = useCallback(\n  async (id: string, value: VoteValue) => {\n    const kit = await getConnectedKit()\n    const governance = await kit.contracts.getGovernance()\n    await (await governance.vote(id, value)).sendAndWaitForReceipt()\n    fetchProposals()\n  },\n  [kit, fetchProposals]\n)\n")),(0,r.kt)("p",null,"How you handle calling that function is up to you. With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexbharley/celo-tools"},"Celo Tools")," we opted for simple upwards and downwards facing arrows to handle voting on proposals, however the data can be rendered however you'd prefer."),(0,r.kt)("p",null,"Here's a simple example showing buttons for ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"No")," votes when no vote has been cast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"import { VoteValue } from '@celo/contractkit/lib/wrappers/Governance'\n\nreturn (\n  <tr>\n    <td>{proposal.id.toString()}</td>\n    <td>{proposal.passed ? 'Passed' : proposal.approved ? 'Approved' : 'Not approved'}</td>\n    <td>\n      <a href={proposal.descriptionURL} target=\"_blank\">\n        Description link\n      </a>\n    </td>\n    <td>\n      {proposal.vote ? (\n        <span>{proposal.vote}</span>\n      ) : (\n        <div>\n          <button onClick={() => vote(proposal.id, VoteValue.Yes)}>Yes</button>\n          <button onClick={() => vote(proposal.id, VoteValue.No)}>No</button>\n        </div>\n      )}\n    </td>\n  </tr>\n)\n")),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"We've compiled a short list on best practices to follow when developing DApps. Following these will improve the end user experience and keep them more engaged with the Celo ecosystem. If you have any questions around these, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://chat.celo.org"},"reach out on Discord"),", we're always there and happy to chat."),(0,r.kt)("h3",{id:"last-used-address"},"Last used address"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-tools/use-contractkit"},"@celo-tools/use-contractkit")," will remember the address a user last logged in with (via ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"browser LocalStorage"),"). Use this to your advantage and allow your DApp to display the same data whether or not the user has connected their wallet. A good test is to refresh your DApp after connecting and see if anything changes. At the very most, buttons for interaction could be disabled, however it's preferable to prompt to connect the wallet on button click."),(0,r.kt)("p",null,"Keeping the UI consistent by using the last connected address is a quick win we can have with DApps that make the experience using them closer to Web2, an experience more users will be familiar with."),(0,r.kt)("h3",{id:"loading-states"},"Loading states"),(0,r.kt)("p",null,"Loading times are often the give away that an application is a Web3 DApp. Be liberal with loading screens and prioritise making animations smooth."),(0,r.kt)("p",null,"Nothing is worse than a perpetually hanging screen that takes multiple seconds to become interactive. By showing a spinner it communicates to the user that things are happening, however slow they may be."),(0,r.kt)("p",null,"This is often offset by the ability to index a blockchain and provide the data in a more accessible format (maybe a SQL database or behind a GraphQL API). As mentioned earlier we haven't covered that in this tutorial, however there's a lot of content on the web around DApp optimisation through prior state indexing."),(0,r.kt)("h3",{id:"prerender-what-you-can"},"Prerender what you can"),(0,r.kt)("p",null,"With modern static site generators we have amazing leverage over what gets computed server side and what the browser has to request and compute before rendering. If you're unable to index the blockchain before a client requests access to a page, consider loading the relevant data server side with a cache invalidated every hour or so."),(0,r.kt)("p",null,"Next.js ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"},"getStaticProps")," comes to mind here as a great way to offload heavy computation to the server."),(0,r.kt)("h3",{id:"showing-numbers-in-wei-vs-celo-vs-local-currency"},"Showing numbers in wei vs. Celo vs. local currency"),(0,r.kt)("p",null,"Take this advice with a grain of salt as it really depends on how familiar with cryptocurrencies and blockchain your users are. At some point in most DApp users are going to need to deal with large numbers. It's up to you whether you display these in wei (1e18) CELO or converted to a currency the user prefers (BTC, USD or EUR for example)."),(0,r.kt)("p",null,"The sweeping generalisation would be to allow entering values in CELO or their preferred currency and never expose the raw wei amounts to end users."),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,r.kt)("p",null,"Hopefully you have a better grasp on developing DApps against the Celo core contracts now. In this tutorial we covered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connecting to user wallets (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/celo-tools/use-contractkit"},"use-contractkit"),")"),(0,r.kt)("li",{parentName:"ul"},"Fetching on-chain data"),(0,r.kt)("li",{parentName:"ul"},"Calling simple functions on the core contracts"),(0,r.kt)("li",{parentName:"ul"},"A brief word on best practices with regard to DApp development.")),(0,r.kt)("p",null,"This is not a comprehensive tutorial for Celo's features and capabilities, keep exploring the docs to learn more and please ",(0,r.kt)("a",{parentName:"p",href:"https://chat.celo.org"},"connect with us on Discord")," if you need any help (or just want to chat)!"))}u.isMDXComponent=!0}}]);