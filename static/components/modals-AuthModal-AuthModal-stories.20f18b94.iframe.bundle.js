"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[6716,2640],{"./components/modals/AuthModal/AuthModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_AuthModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/modals/AuthModal/AuthModal.tsx"),_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/stores/ClientConfigStore.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Example=function Example(){var setCurrentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.WQ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.oR);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return setCurrentUser({id:"1",displayName:"Test User",displayColor:3,isModerator:!1})}),[]),__jsx("div",null,__jsx(_AuthModal__WEBPACK_IMPORTED_MODULE_2__.AuthModal,{forceTabs:!0}))};Example.displayName="Example";const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Modals/Auth",component:_AuthModal__WEBPACK_IMPORTED_MODULE_2__.AuthModal,parameters:{}};var Template=function Template(){return __jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.C0,null,__jsx(Example,null))};Template.displayName="Template";var Basic={render:Template};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./components/modals/AuthModal/AuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthModal:()=>AuthModal});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tabs=__webpack_require__("./node_modules/antd/es/tabs/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),IndieAuthModal=__webpack_require__("./components/modals/IndieAuthModal/IndieAuthModal.tsx"),FediAuthModal=__webpack_require__("./components/modals/FediAuthModal/FediAuthModal.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AuthModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/AuthModal/AuthModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AuthModal_module.c,options);const AuthModal_AuthModal_module=AuthModal_module.c&&AuthModal_module.c.locals?AuthModal_module.c.locals:void 0;var ClientConfigStore=__webpack_require__("./components/stores/ClientConfigStore.tsx"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),__jsx=react.createElement,AuthModal=function AuthModal(_ref){var forceTabs=_ref.forceTabs,authenticated=(0,es.Y5)(ClientConfigStore.AV),accessToken=(0,es.Y5)(ClientConfigStore.AZ),currentUser=(0,es.Y5)(ClientConfigStore.oR),clientConfig=(0,es.Y5)(ClientConfigStore.Mt);if(!currentUser)return null;var displayName=currentUser.displayName,fediverseEnabled=clientConfig.federation.enabled,items=[{label:__jsx("span",{className:AuthModal_AuthModal_module.tabContent},__jsx("img",{className:AuthModal_AuthModal_module.icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"),key:"1",children:__jsx(IndieAuthModal.C,{authenticated,displayName,accessToken})},{label:__jsx("span",{className:AuthModal_AuthModal_module.tabContent},__jsx("img",{className:AuthModal_AuthModal_module.icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"),key:"2",children:__jsx(FediAuthModal.W,{authenticated,displayName,accessToken})}];return __jsx(react_error_boundary_esm.Ou,{fallbackRender:function fallbackRender(_ref2){var error=_ref2.error,resetErrorBoundary=_ref2.resetErrorBoundary;return __jsx(ComponentError.m,{componentName:"AuthModal",message:error.message,retryFunction:resetErrorBoundary})}},__jsx("div",null,__jsx(tabs.c,{defaultActiveKey:"1",items,type:"card",size:"small",renderTabBar:fediverseEnabled||forceTabs?null:function(){return null}})))};AuthModal.displayName="AuthModal";try{AuthModal.displayName="AuthModal",AuthModal.__docgenInfo={description:"",displayName:"AuthModal",props:{forceTabs:{defaultValue:null,description:"",name:"forceTabs",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/AuthModal/AuthModal.tsx#AuthModal"]={docgenInfo:AuthModal.__docgenInfo,name:"AuthModal",path:"components/modals/AuthModal/AuthModal.tsx#AuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/modals/FediAuthModal/FediAuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FediAuthModal});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),es_alert=__webpack_require__("./node_modules/antd/es/alert/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FediAuthModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FediAuthModal_module.c,options);const FediAuthModal_FediAuthModal_module=FediAuthModal_module.c&&FediAuthModal_module.c.locals?FediAuthModal_module.c.locals:void 0;var validators=__webpack_require__("./utils/validators.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Panel=collapse.c.Panel,CheckCircleOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(8704),__webpack_require__.e(96)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CheckCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CheckCircleOutlined.js"]}}}),FediAuthModal=function FediAuthModal(_ref){var authenticated=_ref.authenticated,displayName=_ref.displayName,accessToken=_ref.accessToken,_useState=(0,react.useState)(null),errorMessage=_useState[0],setErrorMessage=_useState[1],_useState2=(0,react.useState)(!1),loading=_useState2[0],setLoading=_useState2[1],_useState3=(0,react.useState)(!1),valid=_useState3[0],setValid=_useState3[1],_useState4=(0,react.useState)(""),account=_useState4[0],setAccount=_useState4[1],_useState5=(0,react.useState)(""),code=_useState5[0],setCode=_useState5[1],_useState6=(0,react.useState)(!1),verifyingCode=_useState6[0],setVerifyingCode=_useState6[1],message=authenticated?__jsx("span",null,__jsx("b",null,"You are already authenticated"),". However, you can add other domains or log in as a different user."):__jsx("span",null,"Receive a direct message on the Fediverse to link your account to"," ",__jsx("strong",null,displayName),", or login as a previously linked chat user."),errorMessageText=errorMessage;errorMessageText&&errorMessageText.includes("url does not support indieauth")&&(errorMessageText="The provided URL is either invalid or does not support IndieAuth.");var makeRequest=function(){var _ref2=(0,asyncToGenerator.c)(regenerator_default().mark((function _callee(url,data){var rawResponse,content;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(url,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)});case 2:return rawResponse=_context.sent,_context.next=5,rawResponse.json();case 5:(content=_context.sent).message&&(setErrorMessage(content.message),setLoading(!1));case 7:case"end":return _context.stop()}}),_callee)})));return function makeRequest(_x,_x2){return _ref2.apply(this,arguments)}}(),submitCodePressed=function(){var _ref3=(0,asyncToGenerator.c)(regenerator_default().mark((function _callee2(){var url,data;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return setLoading(!0),url="/api/auth/fediverse/verify?accessToken=".concat(accessToken),data={code},_context2.prev=3,_context2.next=6,makeRequest(url,data);case 6:window.location.href="/",_context2.next=13;break;case 9:_context2.prev=9,_context2.t0=_context2.catch(3),console.error(_context2.t0),setErrorMessage(_context2.t0);case 13:setLoading(!1);case 14:case"end":return _context2.stop()}}),_callee2,null,[[3,9]])})));return function submitCodePressed(){return _ref3.apply(this,arguments)}}(),submitAccountPressed=function(){var _ref4=(0,asyncToGenerator.c)(regenerator_default().mark((function _callee3(){var url,normalizedAccount,data;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(valid){_context3.next=2;break}return _context3.abrupt("return");case 2:return setLoading(!0),setErrorMessage(null),url="/api/auth/fediverse?accessToken=".concat(accessToken),normalizedAccount=account.replace(/^@+/,""),data={account:normalizedAccount},_context3.prev=7,_context3.next=10,makeRequest(url,data);case 10:setVerifyingCode(!0),_context3.next=17;break;case 13:_context3.prev=13,_context3.t0=_context3.catch(7),console.error(_context3.t0),setErrorMessage(_context3.t0);case 17:setLoading(!1);case 18:case"end":return _context3.stop()}}),_callee3,null,[[7,13]])})));return function submitAccountPressed(){return _ref4.apply(this,arguments)}}(),inputCodeStep=__jsx("div",null,"Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",__jsx("div",{className:FediAuthModal_FediAuthModal_module.codeInputContainer},__jsx(input.c,{value:code,onChange:function onChange(e){return setCode(e.target.value)},className:FediAuthModal_FediAuthModal_module.codeInput,placeholder:"123456",maxLength:6}),__jsx(es_button.c,{type:"primary",onClick:submitCodePressed,disabled:code.length<6,className:FediAuthModal_FediAuthModal_module.submitButton},"Verify Code"))),inputAccountStep=__jsx(react.Fragment,null,__jsx("div",null,"Your Fediverse Account"),__jsx(input.c.Search,{addonBefore:"@",onInput:function onInput(e){setAccount(e.target.value),function validate(acct){setValid((0,validators.cY)(acct))}(e.target.value)},value:account,placeholder:"youraccount@yourserver.com",status:!valid&&account.length>0?"error":void 0,onSearch:submitAccountPressed,enterButton:__jsx(es_button.c,{type:valid?"primary":"default",disabled:!valid||0===account.length},__jsx(CheckCircleOutlined,null))}));return __jsx(spin.c,{spinning:loading},__jsx(space.c,{direction:"vertical"},message,errorMessageText&&__jsx(es_alert.c,{message:"Error",description:errorMessageText,type:"error",showIcon:!0}),verifyingCode?inputCodeStep:inputAccountStep,__jsx(collapse.c,{ghost:!0},__jsx(Panel,{key:"header",header:"Learn more about using the Fediverse to authenticate with chat."},__jsx("p",null,"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."))),__jsx("div",null,__jsx("strong",null,"Note"),": This is for authentication purposes only, and no personal information will be accessed or stored.")))};FediAuthModal.displayName="FediAuthModal";try{FediAuthModal.displayName="FediAuthModal",FediAuthModal.__docgenInfo={description:"",displayName:"FediAuthModal",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!0,type:{name:"boolean"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"]={docgenInfo:FediAuthModal.__docgenInfo,name:"FediAuthModal",path:"components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/modals/IndieAuthModal/IndieAuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>IndieAuthModal});var _tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/collapse/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/spin/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/space/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/antd/es/button/index.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dynamic.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_validators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./utils/validators.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Panel=antd__WEBPACK_IMPORTED_MODULE_3__.c.Panel,Link=antd__WEBPACK_IMPORTED_MODULE_4__.c.Link,CheckCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(8704),__webpack_require__.e(96)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CheckCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CheckCircleOutlined.js"]}}}),IndieAuthModal=function IndieAuthModal(_ref){var authenticated=_ref.authenticated,username=_ref.displayName,accessToken=_ref.accessToken,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),errorMessage=_useState[0],setErrorMessage=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),loading=_useState2[0],setLoading=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),valid=_useState3[0],setValid=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),host=_useState4[0],setHost=_useState4[1],message=authenticated?__jsx("span",null,__jsx("b",null,"You are already authenticated"),". However, you can add other domains or log in as a different user."):__jsx("span",null,"Use your own domain to authenticate ",__jsx("span",null,username)," or login as a previously"," ","authenticated chat user using IndieAuth."),errorMessageText=errorMessage;errorMessageText&&errorMessageText.includes("url does not support indieauth")&&(errorMessageText="The provided URL is either invalid or does not support IndieAuth.");var submitButtonPressed=function(){var _ref2=(0,_tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.c)(_tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){var url,h,data,rawResponse,content,redirect;return _tmp_tmp_gYInnW4f4B_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(valid){_context.next=2;break}return _context.abrupt("return");case 2:return setLoading(!0),_context.prev=3,url="/api/auth/indieauth?accessToken=".concat(accessToken),h="https://".concat(host),data={authHost:h},_context.next=9,fetch(url,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)});case 9:return rawResponse=_context.sent,_context.next=12,rawResponse.json();case 12:if(!(content=_context.sent).message){_context.next=17;break}return setErrorMessage(content.message),setLoading(!1),_context.abrupt("return");case 17:if(content.redirect){_context.next=21;break}return setErrorMessage("Auth provider did not return a redirect URL."),setLoading(!1),_context.abrupt("return");case 21:content.redirect&&(redirect=content.redirect,window.location=redirect),_context.next=27;break;case 24:_context.prev=24,_context.t0=_context.catch(3),setErrorMessage(_context.t0.message);case 27:setLoading(!1);case 28:case"end":return _context.stop()}}),_callee,null,[[3,24]])})));return function submitButtonPressed(){return _ref2.apply(this,arguments)}}();return __jsx(antd__WEBPACK_IMPORTED_MODULE_7__.c,{spinning:loading},__jsx(antd__WEBPACK_IMPORTED_MODULE_8__.c,{direction:"vertical"},message,errorMessageText&&__jsx(antd__WEBPACK_IMPORTED_MODULE_9__.c,{message:"Error",description:errorMessageText,type:"error",showIcon:!0}),__jsx("div",null,"Your domain"),__jsx(antd__WEBPACK_IMPORTED_MODULE_10__.c.Search,{addonBefore:"https://",onInput:function onInput(e){":"!==e.nativeEvent.data&&(setHost(e.target.value),function validate(url){(0,_utils_validators__WEBPACK_IMPORTED_MODULE_5__.i0)(url)&&url.includes(".")?setValid(!0):setValid(!1)}("https://".concat(e.target.value)))},type:"url",value:host,placeholder:"yoursite.com",status:!valid&&host.length>0?"error":void 0,onSearch:submitButtonPressed,enterButton:__jsx(antd__WEBPACK_IMPORTED_MODULE_11__.c,{type:valid?"primary":"default",disabled:!valid||0===host.length},__jsx(CheckCircleOutlined,null))}),__jsx(antd__WEBPACK_IMPORTED_MODULE_3__.c,{ghost:!0},__jsx(Panel,{key:"header",header:"Learn more about using IndieAuth to authenticate with chat."},__jsx("p",null,"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."),__jsx("p",null,"If you run an Owncast instance, you can use that domain here. Otherwise,"," ",__jsx(Link,{href:"https://indieauth.net/#providers"},"learn more about how you can support IndieAuth"),"."))),__jsx("div",null,__jsx("strong",null,"Note"),": This is for authentication purposes only, and no personal information will be accessed or stored.")))};IndieAuthModal.displayName="IndieAuthModal";try{IndieAuthModal.displayName="IndieAuthModal",IndieAuthModal.__docgenInfo={description:"",displayName:"IndieAuthModal",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!0,type:{name:"boolean"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/IndieAuthModal/IndieAuthModal.tsx#IndieAuthModal"]={docgenInfo:IndieAuthModal.__docgenInfo,name:"IndieAuthModal",path:"components/modals/IndieAuthModal/IndieAuthModal.tsx#IndieAuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.c,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.c,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.c,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./utils/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cY:()=>isValidFediverseAccount,i0:()=>isValidUrl,qC:()=>DEFAULT_TEXTFIELD_URL_PATTERN});var DEFAULT_TEXTFIELD_URL_PATTERN="https?://.*";function isValidUrl(url){var validProtocols=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{var validationObject=new URL(url);if(""===validationObject.protocol||""===validationObject.hostname||!validProtocols.includes(validationObject.protocol))return!1}catch(e){return!1}return!0}function isValidFediverseAccount(account){var sanitized=account.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(sanitized).toLowerCase())}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/AuthModal/AuthModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".A16QFfaJ4cobnElmenNd{flex-direction:row;display:flex;justify-content:center;align-items:center}.A16QFfaJ4cobnElmenNd .zfb1REE440DtUTe19ZvA{height:15px;padding-right:5px}","",{version:3,sources:["webpack://./components/modals/AuthModal/AuthModal.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,4CACE,WAAA,CACA,iBAAA",sourcesContent:[".tabContent {\n  flex-direction: row;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .icon {\n    height: 15px;\n    padding-right: 5px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tabContent:"A16QFfaJ4cobnElmenNd",icon:"zfb1REE440DtUTe19ZvA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AFFWVbJomufBXfHPzW0d{display:flex;justify-content:center;flex-direction:column}.AFFWVbJomufBXfHPzW0d .x63iu67imRumXk_ZW6W5{font-size:1.6rem;font-family:monospace;max-width:220px;margin:auto;text-align:center;letter-spacing:6px;border-color:var(--theme-color-palette-9);color:var(--theme-color-palette-9)}.AFFWVbJomufBXfHPzW0d .hoCXtQEUFKO8yU2i2UI6{max-width:150px;margin:auto;margin-top:10px}","",{version:3,sources:["webpack://./components/modals/FediAuthModal/FediAuthModal.module.scss"],names:[],mappings:"AAAA,sBAkBE,YAAA,CACA,sBAAA,CACA,qBAAA,CAnBA,4CACE,gBAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,yCAAA,CACA,kCAAA,CAGF,4CACE,eAAA,CACA,WAAA,CACA,eAAA",sourcesContent:[".codeInputContainer {\n  .codeInput {\n    font-size: 1.6rem;\n    font-family: monospace;\n    max-width: 220px;\n    margin: auto;\n    text-align: center;\n    letter-spacing: 6px;\n    border-color: var(--theme-color-palette-9);\n    color: var(--theme-color-palette-9);\n  }\n\n  .submitButton {\n    max-width: 150px;\n    margin: auto;\n    margin-top: 10px;\n  }\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={codeInputContainer:"AFFWVbJomufBXfHPzW0d",codeInput:"x63iu67imRumXk_ZW6W5",submitButton:"hoCXtQEUFKO8yU2i2UI6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);