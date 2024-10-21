"use strict";(self.webpackChunk_thekidnamedkd_ods_test=self.webpackChunk_thekidnamedkd_ods_test||[]).push([[3643],{"./src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,OnlyIcon:()=>OnlyIcon,Selection:()=>Selection,WithMaxWidth:()=>WithMaxWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/components/dropdown/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Core/Components/Dropdown/Dropdown.Container",component:_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,parameters:{design:{type:"figma",url:"https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?type=design&node-id=8097-22574&mode=design&t=4o7W5TmAScRx38xw-4"}}},Default={render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"First item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"Second item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"Third item with a longer label"})]}),args:{label:"Dropdown"}},OnlyIcon={render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"Only icon item"})})},Controlled={render:props=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,{open:isOpen,onOpenChange:setIsOpen,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"Controlled item"})})},args:{label:"Controlled dropdown"}},WithMaxWidth={render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,{...props,label:"Max width",constrainContentWidth:!1,contentClassNames:"max-w-52",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{children:"A vert long description for the dropdown item that will eventualy be truncated"})})},SelectionComponent=props=>{const items=[{id:"all-daos",label:"All DAOs"},{id:"members",label:"Member of"},{id:"favourites",label:"Favourites"}],[selectedItem,setSelectedItem]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items[0].id);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Container,{...props,children:items.map((({id,label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.ms.Item,{selected:selectedItem===id,onSelect:()=>setSelectedItem(id),children:label},id)))})},Selection={render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectionComponent,{...props}),args:{label:"Selection dropdown"}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default","OnlyIcon","Controlled","WithMaxWidth","Selection"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (props: IDropdownContainerProps) => <Dropdown.Container {...props}>\n            <Dropdown.Item>First item</Dropdown.Item>\n            <Dropdown.Item>Second item</Dropdown.Item>\n            <Dropdown.Item>Third item with a longer label</Dropdown.Item>\n        </Dropdown.Container>,\n  args: {\n    label: 'Dropdown'\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default usage of the DropdownContainer component.",...Default.parameters?.docs?.description}}},OnlyIcon.parameters={...OnlyIcon.parameters,docs:{...OnlyIcon.parameters?.docs,source:{originalSource:"{\n  render: (props: IDropdownContainerProps) => <Dropdown.Container {...props}>\n            <Dropdown.Item>Only icon item</Dropdown.Item>\n        </Dropdown.Container>\n}",...OnlyIcon.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <Dropdown.Container open={isOpen} onOpenChange={setIsOpen} {...props}>\n                <Dropdown.Item>Controlled item</Dropdown.Item>\n            </Dropdown.Container>;\n  },\n  args: {\n    label: 'Controlled dropdown'\n  }\n}",...Controlled.parameters?.docs?.source},description:{story:"Controlled usage of the DropdownContainer component.",...Controlled.parameters?.docs?.description}}},WithMaxWidth.parameters={...WithMaxWidth.parameters,docs:{...WithMaxWidth.parameters?.docs,source:{originalSource:'{\n  render: (props: IDropdownContainerProps) => <Dropdown.Container {...props} label="Max width" constrainContentWidth={false} contentClassNames="max-w-52">\n            <Dropdown.Item>\n                A vert long description for the dropdown item that will eventualy be truncated\n            </Dropdown.Item>\n        </Dropdown.Container>\n}',...WithMaxWidth.parameters?.docs?.source},description:{story:"Usage of the DropdownContainer component with a max width for the dropdown items.",...WithMaxWidth.parameters?.docs?.description}}},Selection.parameters={...Selection.parameters,docs:{...Selection.parameters?.docs,source:{originalSource:"{\n  render: (props: IDropdownContainerProps) => <SelectionComponent {...props} />,\n  args: {\n    label: 'Selection dropdown'\n  }\n}",...Selection.parameters?.docs?.source},description:{story:"Use the `selected` and `onSelect` properties of the <Dropdown.Item /> component to implement a selection dropdown.",...Selection.parameters?.docs?.description}}};try{Default.displayName="Default",Default.__docgenInfo={description:"Default usage of the DropdownContainer component.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Controlled.displayName="Controlled",Controlled.__docgenInfo={description:"Controlled usage of the DropdownContainer component.",displayName:"Controlled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Controlled"]={docgenInfo:Controlled.__docgenInfo,name:"Controlled",path:"src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Controlled"})}catch(__react_docgen_typescript_loader_error){}try{WithMaxWidth.displayName="WithMaxWidth",WithMaxWidth.__docgenInfo={description:"Usage of the DropdownContainer component with a max width for the dropdown items.",displayName:"WithMaxWidth",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#WithMaxWidth"]={docgenInfo:WithMaxWidth.__docgenInfo,name:"WithMaxWidth",path:"src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#WithMaxWidth"})}catch(__react_docgen_typescript_loader_error){}try{Selection.displayName="Selection",Selection.__docgenInfo={description:"Use the `selected` and `onSelect` properties of the <Dropdown.Item /> component to implement a selection dropdown.",displayName:"Selection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Selection"]={docgenInfo:Selection.__docgenInfo,name:"Selection",path:"src/core/components/dropdown/dropdownContainer/dropdownContainer.stories.tsx#Selection"})}catch(__react_docgen_typescript_loader_error){}}}]);