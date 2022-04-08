"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3139],{3905:function(e,r,o){o.d(r,{Zo:function(){return d},kt:function(){return u}});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},d=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(o),u=a,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return o?t.createElement(g,l(l({ref:r},d),{},{components:o})):t.createElement(g,l({ref:r},d))}));function u(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=o[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},41266:function(e,r,o){o.r(r),o.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var t=o(83117),a=o(80102),n=(o(67294),o(3905)),l=["components"],i={},c="celocli validatorgroup",s={unversionedId:"command-line-interface/validatorgroup",id:"command-line-interface/validatorgroup",title:"celocli validatorgroup",description:"View and manage Validator Groups",source:"@site/docs/command-line-interface/validatorgroup.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/validatorgroup",permalink:"/es/command-line-interface/validatorgroup",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli validator",permalink:"/es/command-line-interface/validator"}},d=[{value:"<code>celocli validatorgroup:commission</code>",id:"celocli-validatorgroupcommission",children:[],level:2},{value:"<code>celocli validatorgroup:deregister</code>",id:"celocli-validatorgroupderegister",children:[],level:2},{value:"<code>celocli validatorgroup:list</code>",id:"celocli-validatorgrouplist",children:[],level:2},{value:"<code>celocli validatorgroup:member VALIDATORADDRESS</code>",id:"celocli-validatorgroupmember-validatoraddress",children:[],level:2},{value:"<code>celocli validatorgroup:register</code>",id:"celocli-validatorgroupregister",children:[],level:2},{value:"<code>celocli validatorgroup:reset-slashing-multiplier GROUPADDRESS</code>",id:"celocli-validatorgroupreset-slashing-multiplier-groupaddress",children:[],level:2},{value:"<code>celocli validatorgroup:show GROUPADDRESS</code>",id:"celocli-validatorgroupshow-groupaddress",children:[],level:2}],p={toc:d};function m(e){var r=e.components,o=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,t.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"celocli-validatorgroup"},(0,n.kt)("inlineCode",{parentName:"h1"},"celocli validatorgroup")),(0,n.kt)("p",null,"View and manage Validator Groups"),(0,n.kt)("h2",{id:"celocli-validatorgroupcommission"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:commission")),(0,n.kt)("p",null,"Manage the commission for a registered Validator Group. This represents the share of the epoch rewards given to elected Validators that goes to the group they are a member of. Updates must be made in a two step process where the group owner first calls uses the queue-update option, then after the required update delay, the apply option. The commission update delay, in blocks, can be viewed with the network:parameters command. A groups next commission update block can be checked with validatorgroup:show"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Manage the commission for a registered Validator Group. This represents the share of the epoch rewards given to elected Validators that goes to the group they are a member of. Updates must be made in a two step process where the group owner first calls uses the queue-update option, then after the required update delay, the apply option. The commission update delay, in blocks, can be viewed with the network:parameters command. A groups next commission update block can be checked with validatorgroup:show\n\nUSAGE\n  $ celocli validatorgroup:commission\n\nOPTIONS\n  --apply                                            Applies a previously queued update.\n                                                     Should be called after the update\n                                                     delay.\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address for the\n                                                     Validator Group or Validator Group\n                                                     validator signer\n\n  --globalHelp                                       View all available global flags\n\n  --queue-update=queue-update                        Queues an update to the commission,\n                                                     which can be applied after the\n                                                     update delay.\n\nEXAMPLES\n  commission --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --queue-update 0.1\n\n  commission --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --apply\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/commission.ts"},"src/commands/validatorgroup/commission.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgroupderegister"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:deregister")),(0,n.kt)("p",null,"Deregister a Validator Group. Approximately 180 days after the validator group is empty, it will be possible to deregister it start unlocking the CELO. If you wish to deregister your validator group, you must first remove all members, then wait the required 180 days before running this command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Deregister a Validator Group. Approximately 180 days after the validator group is empty, it will be possible to deregister it start unlocking the CELO. If you wish to deregister your validator group, you must first remove all members, then wait the required 180 days before running this command.\n\nUSAGE\n  $ celocli validatorgroup:deregister\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Signer or\n                                                     ValidatorGroup's address\n\n  --globalHelp                                       View all available global flags\n\nEXAMPLE\n  deregister --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/deregister.ts"},"src/commands/validatorgroup/deregister.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgrouplist"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:list")),(0,n.kt)("p",null,"List registered Validator Groups, their names (if provided), commission, and members."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"List registered Validator Groups, their names (if provided), commission, and members.\n\nUSAGE\n  $ celocli validatorgroup:list\n\nOPTIONS\n  -x, --extended          show extra columns\n  --columns=columns       only show provided columns (comma-separated)\n  --csv                   output is csv format [alias: --output=csv]\n  --filter=filter         filter property by partial string matching, ex: name=foo\n  --globalHelp            View all available global flags\n  --no-header             hide table header from output\n  --no-truncate           do not truncate output to fit screen\n  --output=csv|json|yaml  output in a more machine friendly format\n  --sort=sort             property to sort by (prepend '-' for descending)\n\nEXAMPLE\n  list\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/list.ts"},"src/commands/validatorgroup/list.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgroupmember-validatoraddress"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:member VALIDATORADDRESS")),(0,n.kt)("p",null,"Add or remove members from a Validator Group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Add or remove members from a Validator Group\n\nUSAGE\n  $ celocli validatorgroup:member VALIDATORADDRESS\n\nARGUMENTS\n  VALIDATORADDRESS  Validator's address\n\nOPTIONS\n  --accept                                           Accept a validator whose\n                                                     affiliation is already set to the\n                                                     group\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) ValidatorGroup's address\n\n  --globalHelp                                       View all available global flags\n\n  --remove                                           Remove a validator from the members\n                                                     list\n\n  --reorder=reorder                                  Reorder a validator within the\n                                                     members list. Indices are 0 based\n\n  --yes                                              Answer yes to prompt\n\nEXAMPLES\n  member --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95 --accept\n  0x97f7333c51897469e8d98e7af8653aab468050a3\n\n  member --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95 --remove\n  0x97f7333c51897469e8d98e7af8653aab468050a3\n\n  member --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95 --reorder 3\n  0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/member.ts"},"src/commands/validatorgroup/member.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgroupregister"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:register")),(0,n.kt)("p",null,"Register a new Validator Group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Register a new Validator Group\n\nUSAGE\n  $ celocli validatorgroup:register\n\nOPTIONS\n  --commission=commission                            (required) The share of the epoch\n                                                     rewards given to elected Validators\n                                                     that goes to the group.\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address for the\n                                                     Validator Group\n\n  --globalHelp                                       View all available global flags\n\n  --yes                                              Answer yes to prompt\n\nEXAMPLE\n  register --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --commission 0.1\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/register.ts"},"src/commands/validatorgroup/register.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgroupreset-slashing-multiplier-groupaddress"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:reset-slashing-multiplier GROUPADDRESS")),(0,n.kt)("p",null,"Reset validator group slashing multiplier."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Reset validator group slashing multiplier.\n\nUSAGE\n  $ celocli validatorgroup:reset-slashing-multiplier GROUPADDRESS\n\nARGUMENTS\n  GROUPADDRESS  ValidatorGroup's address\n\nOPTIONS\n  --globalHelp  View all available global flags\n\nEXAMPLE\n  reset-slashing-multiplier 0x97f7333c51897469E8D98E7af8653aAb468050a3\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/reset-slashing-multiplier.ts"},"src/commands/validatorgroup/reset-slashing-multiplier.ts"))),(0,n.kt)("h2",{id:"celocli-validatorgroupshow-groupaddress"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validatorgroup:show GROUPADDRESS")),(0,n.kt)("p",null,"Show information about an existing Validator Group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Show information about an existing Validator Group\n\nUSAGE\n  $ celocli validatorgroup:show GROUPADDRESS\n\nARGUMENTS\n  GROUPADDRESS  ValidatorGroup's address\n\nOPTIONS\n  --globalHelp  View all available global flags\n\nEXAMPLE\n  show 0x97f7333c51897469E8D98E7af8653aAb468050a3\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validatorgroup/show.ts"},"src/commands/validatorgroup/show.ts"))))}m.isMDXComponent=!0}}]);