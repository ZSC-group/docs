"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6299],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(o),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},74511:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=o(83117),n=o(80102),a=(o(67294),o(3905)),i=["components"],c={},l="Becoming a Validator",s={unversionedId:"celo-codebase/protocol/proof-of-stake/becoming-a-validator",id:"celo-codebase/protocol/proof-of-stake/becoming-a-validator",title:"Becoming a Validator",description:"To participate in the network, an operator must put up a slashable commitment of locked CELO, register as a validator, and join a validator group. A minimum stake of one CELO and a notice period of 60 days is required to be a validator in the Alfajores Testnet.",source:"@site/docs/celo-codebase/protocol/proof-of-stake/becoming-a-validator.md",sourceDirName:"celo-codebase/protocol/proof-of-stake",slug:"/celo-codebase/protocol/proof-of-stake/becoming-a-validator",permalink:"/celo-codebase/protocol/proof-of-stake/becoming-a-validator",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/proof-of-stake/becoming-a-validator.md",tags:[],version:"current",frontMatter:{}},u=[],d={toc:u};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"becoming-a-validator"},"Becoming a Validator"),(0,a.kt)("p",null,"To participate in the network, an operator must put up a slashable commitment of locked CELO, register as a validator, and join a validator group. A minimum stake of one CELO and a notice period of 60 days is required to be a validator in the Alfajores Testnet."),(0,a.kt)("p",null,"Any account that meets the minimum stake and notice period requirements can register as a validator. By doing so, the locked funds on that account become \u2018at risk\u2019: a fraction of the stake can be slashed automatically for an evolving set of misbehaviors. In addition, the community can use governance proposals to slash funds, which avoids having to anticipate and encode in the protocol every possible misbehavior. As long as the CELO staked for a validator account is not slashed, it\u2019s eligible to earn rewards like any other Locked Gold account."),(0,a.kt)("p",null,"A validator joins a validator group by affiliating itself with it. However, to avoid untrusted or malicious validators joining a group, the validator group must accept the affiliation. Once done, the validator is added to the list of validators in the group. A validator can remove itself from a validator group at any time. Changes only take effect at the next subsequent election, so if the validator is currently participating in consensus, it\u2019s expected to do so until the end of the epoch in which it deregisters itself."))}p.isMDXComponent=!0}}]);