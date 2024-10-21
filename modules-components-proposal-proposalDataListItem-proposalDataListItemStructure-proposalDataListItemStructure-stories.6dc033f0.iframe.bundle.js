"use strict";(self.webpackChunk_thekidnamedkd_ods_test=self.webpackChunk_thekidnamedkd_ods_test||[]).push([[4424],{"./src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ApprovalThreshold:()=>ApprovalThreshold,CustomResults:()=>CustomResults,Default:()=>Default,MajorityVoting:()=>MajorityVoting,MultiBody:()=>MultiBody,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/modules/components/proposal/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Modules/Components/Proposal/ProposalDataListItem/ProposalDataListItem.Structure",component:_index__WEBPACK_IMPORTED_MODULE_0__.OW.Structure,parameters:{design:{type:"figma",url:"https://www.figma.com/file/P0GeJKqILL7UXvaqu5Jj7V/v1.1.0?type=design&node-id=13724-27671&mode=dev"}}},Default={args:{date:1728637284503,status:_index__WEBPACK_IMPORTED_MODULE_0__.BW.ACCEPTED,title:"Funding testnet of Unichain",summary:"This covers the fees associated with the final development on the Unichain Testnet and development of the bridge for the mainnet.",publisher:{address:"0x17C6808fA04DC9de98eaCfeb4c66B352067c1cDD"}}},MajorityVoting={args:{date:1691664284e3,status:_index__WEBPACK_IMPORTED_MODULE_0__.BW.ACTIVE,title:"Update DAO metadata",summary:"Update the name, logo and description of the DAO.",voted:!0,publisher:{address:"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",name:"vitalik.eth"},type:"majorityVoting",result:{option:"yes",voteAmount:"100k wAnt",votePercentage:15}}},ApprovalThreshold={args:{date:1638723612e3,status:_index__WEBPACK_IMPORTED_MODULE_0__.BW.ACTIVE,title:"Add new DAO member",summary:"Adding a new member to the DAO. This is a long description to test if the component correctly truncated\n            the proposal description. This is a long description to test if the component correctly truncated the proposal description.",publisher:{address:"0xd5fb864ACfD6BB2f72939f122e89fF7F475924f5",name:"sio.eth"},type:"approvalThreshold",result:{approvalAmount:4,approvalThreshold:6}}},MultiBody={args:{date:1580338809e3,status:_index__WEBPACK_IMPORTED_MODULE_0__.BW.ACTIVE,title:"Partnering with WalletConnect on Social Media",summary:"This is round 1 of our community engagement and building gamfi strategy with our marketing team partnership.",id:"PIP-1",publisher:[{address:"0x17366cae2b9c6C3055e9e3C78936a69006BE5409",name:"cgero.eth",link:void 0},{address:"0x9d0920D3D7c9F28baF0abed7f2E26A5126cc0786",name:"Bob the Builder",link:void 0},{address:"0xd5fb864ACfD6BB2f72939f122e89fF7F475924f5",name:"sio.eth"},{address:"0xbC7f20ebB9AeDe6DF4965eCAAcfBb24927Ae16E7"}],type:"approvalThreshold",result:{stage:{title:"Founders Approval Council",id:"1"},approvalAmount:4,approvalThreshold:6}}},CustomResults={args:{date:1728637491379,status:_index__WEBPACK_IMPORTED_MODULE_0__.BW.FAILED,title:"A proposal with custom results",summary:"Pass the custom proposal results as children property to render a custom UI.",publisher:{address:"0x17C6808fA04DC9de98eaCfeb4c66B352067c1cDD"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex h-24 w-full items-center justify-center border border-dashed border-info-300 bg-info-100",children:"Custom results breakdown"})}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default","MajorityVoting","ApprovalThreshold","MultiBody","CustomResults"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: 1728637284503,\n    status: ProposalStatus.ACCEPTED,\n    title: 'Funding testnet of Unichain',\n    summary: 'This covers the fees associated with the final development on the Unichain Testnet and development of the bridge for the mainnet.',\n    publisher: {\n      address: '0x17C6808fA04DC9de98eaCfeb4c66B352067c1cDD'\n    }\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default usage example of the `ProposalDataListItem.Structure` module component.",...Default.parameters?.docs?.description}}},MajorityVoting.parameters={...MajorityVoting.parameters,docs:{...MajorityVoting.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: 1691664284000,\n    status: ProposalStatus.ACTIVE,\n    title: 'Update DAO metadata',\n    summary: 'Update the name, logo and description of the DAO.',\n    voted: true,\n    publisher: {\n      address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',\n      name: 'vitalik.eth'\n    },\n    type: 'majorityVoting',\n    result: {\n      option: 'yes',\n      voteAmount: '100k wAnt',\n      votePercentage: 15\n    }\n  }\n}",...MajorityVoting.parameters?.docs?.source},description:{story:"Example of the `ProposalDataListItem.Structure` module component for a MajorityVoting type proposal.",...MajorityVoting.parameters?.docs?.description}}},ApprovalThreshold.parameters={...ApprovalThreshold.parameters,docs:{...ApprovalThreshold.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: 1638723612000,\n    status: ProposalStatus.ACTIVE,\n    title: 'Add new DAO member',\n    summary: `Adding a new member to the DAO. This is a long description to test if the component correctly truncated\n            the proposal description. This is a long description to test if the component correctly truncated the proposal description.`,\n    publisher: {\n      address: '0xd5fb864ACfD6BB2f72939f122e89fF7F475924f5',\n      name: 'sio.eth'\n    },\n    type: 'approvalThreshold',\n    result: {\n      approvalAmount: 4,\n      approvalThreshold: 6\n    }\n  }\n}",...ApprovalThreshold.parameters?.docs?.source},description:{story:"Example of the `ProposalDataListItem.Structure` module component for an ApprovalThreshold type proposal.",...ApprovalThreshold.parameters?.docs?.description}}},MultiBody.parameters={...MultiBody.parameters,docs:{...MultiBody.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: 1580338809000,\n    status: ProposalStatus.ACTIVE,\n    title: 'Partnering with WalletConnect on Social Media',\n    summary: 'This is round 1 of our community engagement and building gamfi strategy with our marketing team partnership.',\n    id: 'PIP-1',\n    publisher: [{\n      address: '0x17366cae2b9c6C3055e9e3C78936a69006BE5409',\n      name: 'cgero.eth',\n      link: undefined\n    }, {\n      address: '0x9d0920D3D7c9F28baF0abed7f2E26A5126cc0786',\n      name: 'Bob the Builder',\n      link: undefined\n    }, {\n      address: '0xd5fb864ACfD6BB2f72939f122e89fF7F475924f5',\n      name: 'sio.eth'\n    }, {\n      address: '0xbC7f20ebB9AeDe6DF4965eCAAcfBb24927Ae16E7'\n    }],\n    type: 'approvalThreshold',\n    result: {\n      stage: {\n        title: 'Founders Approval Council',\n        id: '1'\n      },\n      approvalAmount: 4,\n      approvalThreshold: 6\n    }\n  }\n}",...MultiBody.parameters?.docs?.source},description:{story:"Example of the `ProposalDataListItem.Structure` module component for a multi-body proposal.",...MultiBody.parameters?.docs?.description}}},CustomResults.parameters={...CustomResults.parameters,docs:{...CustomResults.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: 1728637491379,\n    status: ProposalStatus.FAILED,\n    title: 'A proposal with custom results',\n    summary: 'Pass the custom proposal results as children property to render a custom UI.',\n    publisher: {\n      address: '0x17C6808fA04DC9de98eaCfeb4c66B352067c1cDD'\n    },\n    children: <div className=\"flex h-24 w-full items-center justify-center border border-dashed border-info-300 bg-info-100\">\n                Custom results breakdown\n            </div>\n  }\n}",...CustomResults.parameters?.docs?.source},description:{story:"Usage example of the `ProposalDataListItem.Structure` with custom proposal results UI.",...CustomResults.parameters?.docs?.description}}};try{Default.displayName="Default",Default.__docgenInfo={description:"Default usage example of the `ProposalDataListItem.Structure` module component.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{MajorityVoting.displayName="MajorityVoting",MajorityVoting.__docgenInfo={description:"Example of the `ProposalDataListItem.Structure` module component for a MajorityVoting type proposal.",displayName:"MajorityVoting",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#MajorityVoting"]={docgenInfo:MajorityVoting.__docgenInfo,name:"MajorityVoting",path:"src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#MajorityVoting"})}catch(__react_docgen_typescript_loader_error){}try{ApprovalThreshold.displayName="ApprovalThreshold",ApprovalThreshold.__docgenInfo={description:"Example of the `ProposalDataListItem.Structure` module component for an ApprovalThreshold type proposal.",displayName:"ApprovalThreshold",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#ApprovalThreshold"]={docgenInfo:ApprovalThreshold.__docgenInfo,name:"ApprovalThreshold",path:"src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#ApprovalThreshold"})}catch(__react_docgen_typescript_loader_error){}try{MultiBody.displayName="MultiBody",MultiBody.__docgenInfo={description:"Example of the `ProposalDataListItem.Structure` module component for a multi-body proposal.",displayName:"MultiBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#MultiBody"]={docgenInfo:MultiBody.__docgenInfo,name:"MultiBody",path:"src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#MultiBody"})}catch(__react_docgen_typescript_loader_error){}try{CustomResults.displayName="CustomResults",CustomResults.__docgenInfo={description:"Usage example of the `ProposalDataListItem.Structure` with custom proposal results UI.",displayName:"CustomResults",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#CustomResults"]={docgenInfo:CustomResults.__docgenInfo,name:"CustomResults",path:"src/modules/components/proposal/proposalDataListItem/proposalDataListItemStructure/proposalDataListItemStructure.stories.tsx#CustomResults"})}catch(__react_docgen_typescript_loader_error){}}}]);