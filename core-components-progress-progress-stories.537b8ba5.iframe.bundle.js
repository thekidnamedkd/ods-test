"use strict";(self.webpackChunk_thekidnamedkd_ods_test=self.webpackChunk_thekidnamedkd_ods_test||[]).push([[6619],{"./src/core/components/progress/progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animation:()=>Animation,Default:()=>Default,WithIndicator:()=>WithIndicator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/components/progress/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Core/Components/Progress",component:___WEBPACK_IMPORTED_MODULE_1__.k,parameters:{design:{type:"figma",url:"https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?type=design&node-id=445-5321&mode=design&t=Uyx4LVxxahHwn8mg-4"}}},Default={args:{value:50}},WithIndicator={args:{value:70,thresholdIndicator:50}},AnimatedProgress=({value,...otherProps})=>{const[currentValue,setCurrentValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const intervalId=setInterval((()=>{setCurrentValue((prevValue=>{if(prevValue>=100)return prevValue;const increment=20*Math.random();return Math.min(prevValue+increment,100)}))}),1e3);return()=>clearInterval(intervalId)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.k,{value:currentValue,...otherProps})},Animation={render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnimatedProgress,{...props})},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Default","WithIndicator","Animation"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 50\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default example of the Progress component.",...Default.parameters?.docs?.description}}},WithIndicator.parameters={...WithIndicator.parameters,docs:{...WithIndicator.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 70,\n    thresholdIndicator: 50\n  }\n}",...WithIndicator.parameters?.docs?.source},description:{story:"Example of progress component with a threshold indicator.",...WithIndicator.parameters?.docs?.description}}},Animation.parameters={...Animation.parameters,docs:{...Animation.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    return <AnimatedProgress {...props} />;\n  }\n}",...Animation.parameters?.docs?.source},description:{story:"Animation example of the Progress component.",...Animation.parameters?.docs?.description}}};try{Default.displayName="Default",Default.__docgenInfo={description:"Default example of the Progress component.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/progress/progress.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/core/components/progress/progress.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{WithIndicator.displayName="WithIndicator",WithIndicator.__docgenInfo={description:"Example of progress component with a threshold indicator.",displayName:"WithIndicator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/progress/progress.stories.tsx#WithIndicator"]={docgenInfo:WithIndicator.__docgenInfo,name:"WithIndicator",path:"src/core/components/progress/progress.stories.tsx#WithIndicator"})}catch(__react_docgen_typescript_loader_error){}try{Animation.displayName="Animation",Animation.__docgenInfo={description:"Animation example of the Progress component.",displayName:"Animation",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/components/progress/progress.stories.tsx#Animation"]={docgenInfo:Animation.__docgenInfo,name:"Animation",path:"src/core/components/progress/progress.stories.tsx#Animation"})}catch(__react_docgen_typescript_loader_error){}}}]);