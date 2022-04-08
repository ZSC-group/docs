"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1775],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),i=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),h=n,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return t?r.createElement(u,s(s({ref:a},c),{},{components:t})):r.createElement(u,s({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49434:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=t(83117),n=t(80102),o=(t(67294),t(3905)),s=["components"],p={title:"Celo Epoch Rewards Overview",description:"Introduction to Celo epoch rewards and the target reward release schedule."},l="Epoch Rewards",i={unversionedId:"celo-codebase/protocol/proof-of-stake/epoch-rewards",id:"celo-codebase/protocol/proof-of-stake/epoch-rewards",title:"Celo Epoch Rewards Overview",description:"Introduction to Celo epoch rewards and the target reward release schedule.",source:"@site/docs/celo-codebase/protocol/proof-of-stake/epoch-rewards.md",sourceDirName:"celo-codebase/protocol/proof-of-stake",slug:"/celo-codebase/protocol/proof-of-stake/epoch-rewards",permalink:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Celo Epoch Rewards Overview",description:"Introduction to Celo epoch rewards and the target reward release schedule."},sidebar:"docs",previous:{title:"Celo Validator Elections",permalink:"/es/celo-codebase/protocol/proof-of-stake/validator-elections"},next:{title:"Celo Rewards for Validators and Validator Groups",permalink:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/validator-rewards"}},c=[{value:"What are Epoch Rewards?",id:"what-are-epoch-rewards",children:[{value:"Reward Disbursement",id:"reward-disbursement",children:[],level:3}],level:2},{value:"Adjusting Rewards for Target Schedule",id:"adjusting-rewards-for-target-schedule",children:[],level:2}],m={toc:c};function d(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epoch-rewards"},"Epoch Rewards"),(0,o.kt)("p",null,"Introduction to Celo epoch rewards and the target reward release schedule."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-are-epoch-rewards"},"What are Epoch Rewards?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epoch Rewards")," are similar to the familiar notion of block rewards in other blockchains, minting and distributing new units of CELO as blocks are produced, to create several kinds of incentives. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epoch rewards are paid in the final block of the epoch and are used to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Distributed ",(0,o.kt)("a",{parentName:"li",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/validator-rewards"},"rewards for validators and validator groups")),(0,o.kt)("li",{parentName:"ul"},"Distribute ",(0,o.kt)("a",{parentName:"li",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/locked-gold-rewards"},"rewards to holders of Locked CELO")," voting for groups that elected validators"),(0,o.kt)("li",{parentName:"ul"},"Make payments into a ",(0,o.kt)("a",{parentName:"li",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/community-fund"},"Community Fund")," for protocol infrastructure grants"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/community-fund#bolstering-the-reserve"},"Bolster the stablecoin reserve")," if it is under-collateralized"),(0,o.kt)("li",{parentName:"ul"},"Make payments into a ",(0,o.kt)("a",{parentName:"li",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/carbon-offsetting-fund"},"Carbon Offsetting Fund"),".")),(0,o.kt)("p",null,"A total of 400 million CELO will be released for epoch rewards over time. CELO is a utility and governance asset on Celo, and also the reserve collateral for Celo Dollar (and possibly in the future other whitelisted tokens). It has a fixed total supply and in the long term will exhibit deflationary characteristics like Bitcoin."),(0,o.kt)("h3",{id:"reward-disbursement"},"Reward Disbursement"),(0,o.kt)("p",null,"The total amount of disbursements is determined at the end of every epoch via a two step process. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")),(0,o.kt)("p",null,"In step one, economically desired ",(0,o.kt)("strong",{parentName:"p"},"on-target rewards")," are derived. These are explained in the following pages. Several factors can increase or decrease the value of the payments that would ideally be made in a given epoch (including the CELO to Dollar exchange rate, the collateralization of the reserve, and whether payments to validators or groups are held back due to poor uptime or prior slashing)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")),(0,o.kt)("p",null,"In step two, these on-target rewards are adjusted to generate a drift towards a predefined target epoch rewards schedule. This process aims to solve the trade-off between paying reasonable rewards in terms of purchasing power and avoiding excessive over- or underspending with respect to a predefined epoch rewards schedule. More detail about the two steps is provided below."),(0,o.kt)("h2",{id:"adjusting-rewards-for-target-schedule"},"Adjusting Rewards for Target Schedule"),(0,o.kt)("p",null,"There is a target schedule for the release of CELO epoch rewards. The proposed target curve ","(","subject to change",")"," of remaining epoch rewards declines linearly over 15 years to 50% of the initial 400 million CELO, then decays exponentially with half life of ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"h"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mn",{parentName:"mrow"},"2"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,o.kt)("mo",{parentName:"mrow"},"\xd7"),(0,o.kt)("mn",{parentName:"mrow"},"15"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mn",{parentName:"mrow"},"10.3")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h = ln(2)\\times15 =10.3")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},"2"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mord"},"5"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mord"},"0"),(0,o.kt)("span",{parentName:"span",className:"mord"},"."),(0,o.kt)("span",{parentName:"span",className:"mord"},"3")))))," afterwards. The choice of ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"h")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," guarantees a smooth transition from the linear to the exponential regime."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/celo-website/docs/epoch-rewards-schedule.png",alt:null})),(0,o.kt)("p",null,"The total ",(0,o.kt)("strong",{parentName:"p"},"actual rewards")," paid out at the end of a given epoch result from multiplying the total on-target rewards with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Rewards Multiplier"),". This adjustment factor is a function of the percentage deviation of the remaining epoch rewards from the target epoch rewards remaining. It evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if the remaining epoch rewards are at the target and to smaller ","(","or larger",")"," than ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if the remaining rewards are below ","(","or above, respectively",")"," the target. This creates a drag towards the target schedule."),(0,o.kt)("p",null,"The sensitivity of the adjustment factor to the percentage deviation from the target are governable parameters: one for an underspend, one for an overspend."))}d.isMDXComponent=!0}}]);