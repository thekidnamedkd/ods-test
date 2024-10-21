"use strict";(self.webpackChunk_thekidnamedkd_ods_test=self.webpackChunk_thekidnamedkd_ods_test||[]).push([[5480],{"./src/core/components/dialogs/dialog/dialogHeader/dialogHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/components/dialogs/dialog/index.ts"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/components/button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Core/Components/Dialogs/Dialog/Dialog.Header",component:___WEBPACK_IMPORTED_MODULE_1__.lG.Header,parameters:{design:{type:"figma",url:"https://www.figma.com/file/P0GeJKqILL7UXvaqu5Jj7V/v1.1.0?type=design&node-id=8129-22048&mode=design&t=9f3O4hw9jWtb4fUb-4"}}},Default={args:{title:"Dialog title",description:"Optional dialog description"},render:props=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.$,{variant:"primary",onClick:()=>setOpen(!0),children:"Show Dialog"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.lG.Root,{open,onOpenChange:setOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.lG.Header,{...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.lG.Content,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"py-2 text-neutral-800",children:"Very important content here!"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.lG.Footer,{primaryAction:{label:"Primary action"},secondaryAction:{label:"Secondary action"},alert:{message:"Very informative alert message"}})]})]})}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Dialog title',\n    description: 'Optional dialog description'\n  },\n  render: props => {\n    const [open, setOpen] = useState(false);\n    return <>\n                <Button variant=\"primary\" onClick={() => setOpen(true)}>\n                    Show Dialog\n                </Button>\n                <Dialog.Root open={open} onOpenChange={setOpen}>\n                    <Dialog.Header {...props} />\n                    <Dialog.Content>\n                        <p className=\"py-2 text-neutral-800\">Very important content here!</p>\n                    </Dialog.Content>\n                    <Dialog.Footer primaryAction={{\n          label: 'Primary action'\n        }} secondaryAction={{\n          label: 'Secondary action'\n        }} alert={{\n          message: 'Very informative alert message'\n        }} />\n                </Dialog.Root>\n            </>;\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default usage of the `Dialog.Header` component",...Default.parameters?.docs?.description}}};try{Default.displayName="Default",Default.__docgenInfo={description:"Default usage of the `Dialog.Header` component",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/dialogs/dialog/dialogHeader/dialogHeader.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/core/components/dialogs/dialog/dialogHeader/dialogHeader.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}}}]);