"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[962],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?o.createElement(f,n(n({ref:t},c),{},{components:a})):o.createElement(f,n({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var d=2;d<i;d++)n[d]=a[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},52439:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=a(83117),r=a(80102),i=(a(67294),a(3905)),n=["components"],l={title:"Celo Validator Groups",description:"Celo's proof-of-stake mechanism introduces the concept of Validator Groups as intermediaries between voters and validators."},s="Validator Groups",d={unversionedId:"celo-codebase/protocol/proof-of-stake/validator-groups",id:"celo-codebase/protocol/proof-of-stake/validator-groups",title:"Celo Validator Groups",description:"Celo's proof-of-stake mechanism introduces the concept of Validator Groups as intermediaries between voters and validators.",source:"@site/docs/celo-codebase/protocol/proof-of-stake/validator-groups.md",sourceDirName:"celo-codebase/protocol/proof-of-stake",slug:"/celo-codebase/protocol/proof-of-stake/validator-groups",permalink:"/es/celo-codebase/protocol/proof-of-stake/validator-groups",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Celo Validator Groups",description:"Celo's proof-of-stake mechanism introduces the concept of Validator Groups as intermediaries between voters and validators."},sidebar:"docs",previous:{title:"Celo Proof of Stake Overview",permalink:"/es/celo-codebase/protocol/proof-of-stake"},next:{title:"Locked CELO and Voting",permalink:"/es/celo-codebase/protocol/proof-of-stake/locked-gold"}},c=[{value:"What is a Validator Group?",id:"what-is-a-validator-group",children:[],level:2},{value:"Why use a Validator Group?",id:"why-use-a-validator-group",children:[],level:2},{value:"Fielding Multiple Validators",id:"fielding-multiple-validators",children:[],level:2},{value:"Validator Group Limits",id:"validator-group-limits",children:[],level:2},{value:"Registration",id:"registration",children:[],level:2},{value:"Deregistration",id:"deregistration",children:[],level:2},{value:"Group Share",id:"group-share",children:[],level:2},{value:"Changing Group Members",id:"changing-group-members",children:[],level:2},{value:"Votes and Voting Cap",id:"votes-and-voting-cap",children:[],level:2},{value:"Slashing Penalty",id:"slashing-penalty",children:[],level:2},{value:"Metadata",id:"metadata",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validator-groups"},"Validator Groups"),(0,i.kt)("p",null,"Celo's proof-of-stake mechanism introduces the concept of ",(0,i.kt)("strong",{parentName:"p"},"Validator Groups")," as intermediaries between voters and validators."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-a-validator-group"},"What is a Validator Group?"),(0,i.kt)("p",null,"A validator group has ",(0,i.kt)("strong",{parentName:"p"},"members"),", an ordered list of candidate validators. There is a fixed limit to the number of members that a group may have."),(0,i.kt)("h2",{id:"why-use-a-validator-group"},"Why use a Validator Group?"),(0,i.kt)("p",null,"Validator groups can help mitigate the information disparity between voters and validators. It is anticipated that groups might emerge that do not necessarily operate validators themselves but attract votes for their reputation for ensuring their associated validators have known real-world identities, have high uptime, are well maintained and regularly audited. Since every validator needs to be accepted by a single group to stand for election, that group will be more able to build up long-term judgements on their validators\u2019 operational practices and security setups than each of the numerous CELO holders that might vote for it would."),(0,i.kt)("h2",{id:"fielding-multiple-validators"},"Fielding Multiple Validators"),(0,i.kt)("p",null,"Equally, a number of organizations may want to attempt to field multiple validators under their own control, or be able to interchange the specific machines or keys under which they validate in the case of hardware or connectivity failure. By switching out validators in the list, groups can accomplish this without users having to change their votes."),(0,i.kt)("h2",{id:"validator-group-limits"},"Validator Group Limits"),(0,i.kt)("p",null,"Validator groups can have no more than a small, fixed maximum number of validators -- currently 5 in Mainnet. This means an organization wanting to get more validators elected than this maximum has the added challenge of managing multiple group identities and reputations simultaneously. This further promotes decentralization and strengthens operational security, making it more likely that the validator set will be composed of nodes operated in different fashions by independent individuals and organizations."),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"Any account that has at least the minimum stake requirement in Locked Gold, whether voting or non-voting, can register an empty validator group. If a validating key is specified it may be used for this registration."),(0,i.kt)("h2",{id:"deregistration"},"Deregistration"),(0,i.kt)("p",null,"The account that creates a validator group is able to deregister that group if it has no members."),(0,i.kt)("p",null,"While an account has a registered validator group, or for up to a ",(0,i.kt)("inlineCode",{parentName:"p"},"deregistrationPeriod")," after it is deregistered, attempts to ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock")," the account's amount of Locked Gold will fail if they would cause the remaining amount to fall below the minimum stake requirement."),(0,i.kt)("h2",{id:"group-share"},"Group Share"),(0,i.kt)("p",null,"Validator groups are compensated by taking a share (the 'Group Share') of the ",(0,i.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/proof-of-stake/epoch-rewards/validator-rewards"},"validator rewards")," from any of its member validators that are elected during an epoch. This value is set at registration time and can be changed later."),(0,i.kt)("h2",{id:"changing-group-members"},"Changing Group Members"),(0,i.kt)("p",null,"The account owner controls the list of validators in their group and can at any time add, remove, or re-order validators."),(0,i.kt)("p",null,"For a validator to be added to a group, several conditions must hold: the number of members in the group must be less than the maximum; the Locked Gold balance of the group's account must be sufficient (the stake is per-member validator); and the validator must first have set its affiliation to the group."),(0,i.kt)("p",null,"This means that while a group can unilaterally remove a validator, and a validator can unilaterally leave by changing its affiliation, both parties have to agree before a validator can become a member of a group."),(0,i.kt)("h2",{id:"votes-and-voting-cap"},"Votes and Voting Cap"),(0,i.kt)("p",null,"Validator Groups can receive votes from Locked Gold up to a ",(0,i.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/proof-of-stake/validator-elections#group-voting-caps"},"voting cap"),". This value is set to be the number of votes that would be needed to elect all of its validators, plus one more validator. The cap is enforced at the point of voting: a user can only cast a vote for a group if it currently has fewer votes than this cap."),(0,i.kt)("h2",{id:"slashing-penalty"},"Slashing Penalty"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/proof-of-stake/penalties"},"slashing penalty"),", initially ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0"),", is also tracked for each validator group. This value may be reduced as a penalty for misbehavior of the validator in the group. It affects the future rewards of the group, its validators, and Locked Gold holders receiving rewards for voting for the group."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Both validators and validator groups can use ",(0,i.kt)("a",{parentName:"p",href:"/es/celo-codebase/protocol/identity/metadata"},"Accounts Metadata")," to provide unverified metadata (such as name and organizational affiliation) as well as claims that can be verified off-chain for control of third-party accounts. All validators are encouraged to make a verifiable claim for ",(0,i.kt)("a",{parentName:"p",href:"/es/validator-guide/validator-explorer"},"domain names"),"."))}p.isMDXComponent=!0}}]);