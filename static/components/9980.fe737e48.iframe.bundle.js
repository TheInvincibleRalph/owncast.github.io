(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[9980],{"./node_modules/antd/es/_util/hooks/useFlexGapSupport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_styleChecker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/_util/styleChecker.js");const __WEBPACK_DEFAULT_EXPORT__=function(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.A)(_React$useState,2),flexible=_React$useState2[0],setFlexible=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_2__.Pu)())}),[]),flexible}},"./node_modules/antd/es/_util/styleChecker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Pu:()=>detectFlexGapSupported,qz:()=>canUseDocElement});var flexGapSupported,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rc-util/es/Dom/canUseDom.js"),canUseDocElement=function canUseDocElement(){return(0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__.A)()&&window.document.documentElement},detectFlexGapSupported=function detectFlexGapSupported(){if(!canUseDocElement())return!1;if(void 0!==flexGapSupported)return flexGapSupported;var flex=document.createElement("div");return flex.style.display="flex",flex.style.flexDirection="column",flex.style.rowGap="1px",flex.appendChild(document.createElement("div")),flex.appendChild(document.createElement("div")),document.body.appendChild(flex),flexGapSupported=1===flex.scrollHeight,document.body.removeChild(flex),flexGapSupported}},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=p,exports.jsxs=p},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{default:function(){return dynamic},noSSR:function(){return noSSR}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_loadablesharedruntime=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js"))),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>(0,_jsxruntime.jsx)(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")},"./node_modules/rc-resize-observer/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>es});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),toArray=__webpack_require__("./node_modules/rc-util/es/Children/toArray.js"),objectSpread2=(__webpack_require__("./node_modules/rc-util/es/warning.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js")),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),findDOMNode=__webpack_require__("./node_modules/rc-util/es/Dom/findDOMNode.js"),es_ref=__webpack_require__("./node_modules/rc-util/es/ref.js"),CollectionContext=react.createContext(null);var ResizeObserver_es=__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),elementListeners=new Map;var resizeObserver=new ResizeObserver_es.A((function onResize(entities){entities.forEach((function(entity){var _elementListeners$get,target=entity.target;null===(_elementListeners$get=elementListeners.get(target))||void 0===_elementListeners$get||_elementListeners$get.forEach((function(listener){return listener(target)}))}))}));var classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),DomWrapper=function(_React$Component){(0,inherits.A)(DomWrapper,_React$Component);var _super=(0,createSuper.A)(DomWrapper);function DomWrapper(){return(0,classCallCheck.A)(this,DomWrapper),_super.apply(this,arguments)}return(0,createClass.A)(DomWrapper,[{key:"render",value:function render(){return this.props.children}}]),DomWrapper}(react.Component);function SingleObserver(props,ref){var children=props.children,disabled=props.disabled,elementRef=react.useRef(null),wrapperRef=react.useRef(null),onCollectionResize=react.useContext(CollectionContext),isRenderProps="function"==typeof children,mergedChildren=isRenderProps?children(elementRef):children,sizeRef=react.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),canRef=!isRenderProps&&react.isValidElement(mergedChildren)&&(0,es_ref.f3)(mergedChildren),originRef=canRef?mergedChildren.ref:null,mergedRef=(0,es_ref.xK)(originRef,elementRef),getDom=function getDom(){var _elementRef$current;return(0,findDOMNode.A)(elementRef.current)||(elementRef.current&&"object"===(0,esm_typeof.A)(elementRef.current)?(0,findDOMNode.A)(null===(_elementRef$current=elementRef.current)||void 0===_elementRef$current?void 0:_elementRef$current.nativeElement):null)||(0,findDOMNode.A)(wrapperRef.current)};react.useImperativeHandle(ref,(function(){return getDom()}));var propsRef=react.useRef(props);propsRef.current=props;var onInternalResize=react.useCallback((function(target){var _propsRef$current=propsRef.current,onResize=_propsRef$current.onResize,data=_propsRef$current.data,_target$getBoundingCl=target.getBoundingClientRect(),width=_target$getBoundingCl.width,height=_target$getBoundingCl.height,offsetWidth=target.offsetWidth,offsetHeight=target.offsetHeight,fixedWidth=Math.floor(width),fixedHeight=Math.floor(height);if(sizeRef.current.width!==fixedWidth||sizeRef.current.height!==fixedHeight||sizeRef.current.offsetWidth!==offsetWidth||sizeRef.current.offsetHeight!==offsetHeight){var size={width:fixedWidth,height:fixedHeight,offsetWidth,offsetHeight};sizeRef.current=size;var mergedOffsetWidth=offsetWidth===Math.round(width)?width:offsetWidth,mergedOffsetHeight=offsetHeight===Math.round(height)?height:offsetHeight,sizeInfo=(0,objectSpread2.A)((0,objectSpread2.A)({},size),{},{offsetWidth:mergedOffsetWidth,offsetHeight:mergedOffsetHeight});null==onCollectionResize||onCollectionResize(sizeInfo,target,data),onResize&&Promise.resolve().then((function(){onResize(sizeInfo,target)}))}}),[]);return react.useEffect((function(){var currentElement=getDom();return currentElement&&!disabled&&function observe(element,callback){elementListeners.has(element)||(elementListeners.set(element,new Set),resizeObserver.observe(element)),elementListeners.get(element).add(callback)}(currentElement,onInternalResize),function(){return function unobserve(element,callback){elementListeners.has(element)&&(elementListeners.get(element).delete(callback),elementListeners.get(element).size||(resizeObserver.unobserve(element),elementListeners.delete(element)))}(currentElement,onInternalResize)}}),[elementRef.current,disabled]),react.createElement(DomWrapper,{ref:wrapperRef},canRef?react.cloneElement(mergedChildren,{ref:mergedRef}):mergedChildren)}const es_SingleObserver=react.forwardRef(SingleObserver);function ResizeObserver(props,ref){var children=props.children;return("function"==typeof children?[children]:(0,toArray.A)(children)).map((function(child,index){var key=(null==child?void 0:child.key)||"".concat("rc-observer-key","-").concat(index);return react.createElement(es_SingleObserver,(0,esm_extends.A)({},props,{key,ref:0===index?ref:void 0}),child)}))}var RefResizeObserver=react.forwardRef(ResizeObserver);RefResizeObserver.Collection=function Collection(_ref){var children=_ref.children,onBatchResize=_ref.onBatchResize,resizeIdRef=react.useRef(0),resizeInfosRef=react.useRef([]),onCollectionResize=react.useContext(CollectionContext),onResize=react.useCallback((function(size,element,data){resizeIdRef.current+=1;var currentId=resizeIdRef.current;resizeInfosRef.current.push({size,element,data}),Promise.resolve().then((function(){currentId===resizeIdRef.current&&(null==onBatchResize||onBatchResize(resizeInfosRef.current),resizeInfosRef.current=[])})),null==onCollectionResize||onCollectionResize(size,element,data)}),[onBatchResize,onCollectionResize]);return react.createElement(CollectionContext.Provider,{value:onResize},children)};const es=RefResizeObserver},"./node_modules/rc-util/es/Children/toArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>toArray});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/node_modules/react-is/index.js");function toArray(children){var option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},ret=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,(function(child){(null!=child||option.keepEmpty)&&(Array.isArray(child)?ret=ret.concat(toArray(child)):(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child)&&child.props?ret=ret.concat(toArray(child.props.children,option)):ret.push(child))})),ret}},"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{tH:()=>ErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(){const{error}=this.state;if(null!==error){for(var _this$props$onReset,_this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null===(_this$props$onReset=(_this$props=this.props).onReset)||void 0===_this$props$onReset||_this$props$onReset.call(_this$props,{args,reason:"imperative-api"}),this.setState(initialState)}}componentDidCatch(error,info){var _this$props$onError,_this$props2;null===(_this$props$onError=(_this$props2=this.props).onError)||void 0===_this$props$onError||_this$props$onError.call(_this$props2,error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;var _this$props$onReset2,_this$props3;didCatch&&null!==prevState.error&&function hasArrayChanged(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(null===(_this$props$onReset2=(_this$props3=this.props).onReset)||void 0===_this$props$onReset2||_this$props$onReset2.call(_this$props3,{next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else if(FallbackComponent)childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props);else{if(null!==fallback&&!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))throw error;childToRender=fallback}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}},"./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vC:()=>useHotkeys});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=(__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),__webpack_require__("./node_modules/console-browserify/index.js"));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var reservedModifierKeywords=["shift","alt","meta","mod","ctrl"],mappedKeys={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function mapKey(key){return(mappedKeys[key]||key).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function parseKeysHookInput(keys,splitKey){return void 0===splitKey&&(splitKey=","),keys.split(splitKey)}function parseHotkey(hotkey,combinationKey,description){void 0===combinationKey&&(combinationKey="+");var keys=hotkey.toLocaleLowerCase().split(combinationKey).map((function(k){return mapKey(k)}));return _extends({},{alt:keys.includes("alt"),ctrl:keys.includes("ctrl")||keys.includes("control"),shift:keys.includes("shift"),meta:keys.includes("meta"),mod:keys.includes("mod")},{keys:keys.filter((function(k){return!reservedModifierKeywords.includes(k)})),description})}"undefined"!=typeof document&&(document.addEventListener("keydown",(function(e){void 0!==e.key&&pushToCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])})),document.addEventListener("keyup",(function(e){void 0!==e.key&&removeFromCurrentlyPressedKeys([mapKey(e.key),mapKey(e.code)])}))),"undefined"!=typeof window&&window.addEventListener("blur",(function(){currentlyPressedKeys.clear()}));var currentlyPressedKeys=new Set;function isReadonlyArray(value){return Array.isArray(value)}function pushToCurrentlyPressedKeys(key){var hotkeyArray=Array.isArray(key)?key:[key];currentlyPressedKeys.has("meta")&&currentlyPressedKeys.forEach((function(key){return!function isHotkeyModifier(key){return reservedModifierKeywords.includes(key)}(key)&&currentlyPressedKeys.delete(key.toLowerCase())})),hotkeyArray.forEach((function(hotkey){return currentlyPressedKeys.add(hotkey.toLowerCase())}))}function removeFromCurrentlyPressedKeys(key){var hotkeyArray=Array.isArray(key)?key:[key];"meta"===key?currentlyPressedKeys.clear():hotkeyArray.forEach((function(hotkey){return currentlyPressedKeys.delete(hotkey.toLowerCase())}))}function isHotkeyEnabledOnTag(_ref,enabledOnTags){var target=_ref.target;void 0===enabledOnTags&&(enabledOnTags=!1);var targetTagName=target&&target.tagName;return isReadonlyArray(enabledOnTags)?Boolean(targetTagName&&enabledOnTags&&enabledOnTags.some((function(tag){return tag.toLowerCase()===targetTagName.toLowerCase()}))):Boolean(targetTagName&&enabledOnTags&&!0===enabledOnTags)}var isHotkeyMatchingKeyboardEvent=function isHotkeyMatchingKeyboardEvent(e,hotkey,ignoreModifiers){void 0===ignoreModifiers&&(ignoreModifiers=!1);var alt=hotkey.alt,meta=hotkey.meta,mod=hotkey.mod,shift=hotkey.shift,ctrl=hotkey.ctrl,keys=hotkey.keys,pressedKeyUppercase=e.key,code=e.code,ctrlKey=e.ctrlKey,metaKey=e.metaKey,shiftKey=e.shiftKey,altKey=e.altKey,keyCode=mapKey(code),pressedKey=pressedKeyUppercase.toLowerCase();if(!(null!=keys&&keys.includes(keyCode)||null!=keys&&keys.includes(pressedKey)||["ctrl","control","unknown","meta","alt","shift","os"].includes(keyCode)))return!1;if(!ignoreModifiers){if(alt===!altKey&&"alt"!==pressedKey)return!1;if(shift===!shiftKey&&"shift"!==pressedKey)return!1;if(mod){if(!metaKey&&!ctrlKey)return!1}else{if(meta===!metaKey&&"meta"!==pressedKey&&"os"!==pressedKey)return!1;if(ctrl===!ctrlKey&&"ctrl"!==pressedKey&&"control"!==pressedKey)return!1}}return!(!keys||1!==keys.length||!keys.includes(pressedKey)&&!keys.includes(keyCode))||(keys?function isHotkeyPressed(key,splitKey){return void 0===splitKey&&(splitKey=","),(isReadonlyArray(key)?key:key.split(splitKey)).every((function(hotkey){return currentlyPressedKeys.has(hotkey.trim().toLowerCase())}))}(keys):!keys)},BoundHotkeysProxyProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useBoundHotkeysProxy=function useBoundHotkeysProxy(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BoundHotkeysProxyProvider)};function deepEqual(x,y){return x&&y&&"object"==typeof x&&"object"==typeof y?Object.keys(x).length===Object.keys(y).length&&Object.keys(x).reduce((function(isEqual,key){return isEqual&&deepEqual(x[key],y[key])}),!0):x===y}var HotkeysContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function toggleScope(){},enableScope:function enableScope(){},disableScope:function disableScope(){}}),useHotkeysContext=function useHotkeysContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HotkeysContext)};var stopPropagation=function stopPropagation(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},useSafeLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function useHotkeys(keys,callback,options,dependencies){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),hasTriggeredRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),_options=options instanceof Array?dependencies instanceof Array?void 0:dependencies:options,_keys=isReadonlyArray(keys)?keys.join(null==_options?void 0:_options.splitKey):keys,_deps=options instanceof Array?options:dependencies instanceof Array?dependencies:void 0,memoisedCB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback,null!=_deps?_deps:[]),cbRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(memoisedCB);cbRef.current=_deps?memoisedCB:callback;var memoisedOptions=function useDeepEqualMemo(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);return deepEqual(ref.current,value)||(ref.current=value),ref.current}(_options),enabledScopes=useHotkeysContext().enabledScopes,proxy=useBoundHotkeysProxy();return useSafeLayoutEffect((function(){if(!1!==(null==memoisedOptions?void 0:memoisedOptions.enabled)&&function isScopeActive(activeScopes,scopes){return 0===activeScopes.length&&scopes?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!scopes||activeScopes.some((function(scope){return scopes.includes(scope)}))||activeScopes.includes("*")}(enabledScopes,null==memoisedOptions?void 0:memoisedOptions.scopes)){var listener=function listener(e,isKeyUp){var _e$target;if(void 0===isKeyUp&&(isKeyUp=!1),!function isKeyboardEventTriggeredByInput(ev){return isHotkeyEnabledOnTag(ev,["input","textarea","select"])}(e)||isHotkeyEnabledOnTag(e,null==memoisedOptions?void 0:memoisedOptions.enableOnFormTags)){if(null!==ref.current){var rootNode=ref.current.getRootNode();if((rootNode instanceof Document||rootNode instanceof ShadowRoot)&&rootNode.activeElement!==ref.current&&!ref.current.contains(rootNode.activeElement))return void stopPropagation(e)}(null==(_e$target=e.target)||!_e$target.isContentEditable||null!=memoisedOptions&&memoisedOptions.enableOnContentEditable)&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){var _hotkey$keys,hotkey=parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey);if(isHotkeyMatchingKeyboardEvent(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.ignoreModifiers)||null!=(_hotkey$keys=hotkey.keys)&&_hotkey$keys.includes("*")){if(null!=memoisedOptions&&null!=memoisedOptions.ignoreEventWhen&&memoisedOptions.ignoreEventWhen(e))return;if(isKeyUp&&hasTriggeredRef.current)return;if(function maybePreventDefault(e,hotkey,preventDefault){("function"==typeof preventDefault&&preventDefault(e,hotkey)||!0===preventDefault)&&e.preventDefault()}(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.preventDefault),!function isHotkeyEnabled(e,hotkey,enabled){return"function"==typeof enabled?enabled(e,hotkey):!0===enabled||void 0===enabled}(e,hotkey,null==memoisedOptions?void 0:memoisedOptions.enabled))return void stopPropagation(e);cbRef.current(e,hotkey),isKeyUp||(hasTriggeredRef.current=!0)}}))}},handleKeyDown=function handleKeyDown(event){void 0!==event.key&&(pushToCurrentlyPressedKeys(mapKey(event.code)),(void 0===(null==memoisedOptions?void 0:memoisedOptions.keydown)&&!0!==(null==memoisedOptions?void 0:memoisedOptions.keyup)||null!=memoisedOptions&&memoisedOptions.keydown)&&listener(event))},handleKeyUp=function handleKeyUp(event){void 0!==event.key&&(removeFromCurrentlyPressedKeys(mapKey(event.code)),hasTriggeredRef.current=!1,null!=memoisedOptions&&memoisedOptions.keyup&&listener(event,!0))},domNode=ref.current||(null==_options?void 0:_options.document)||document;return domNode.addEventListener("keyup",handleKeyUp),domNode.addEventListener("keydown",handleKeyDown),proxy&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){return proxy.addHotkey(parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey,null==memoisedOptions?void 0:memoisedOptions.description))})),function(){domNode.removeEventListener("keyup",handleKeyUp),domNode.removeEventListener("keydown",handleKeyDown),proxy&&parseKeysHookInput(_keys,null==memoisedOptions?void 0:memoisedOptions.splitKey).forEach((function(key){return proxy.removeHotkey(parseHotkey(key,null==memoisedOptions?void 0:memoisedOptions.combinationKey,null==memoisedOptions?void 0:memoisedOptions.description))}))}}}),[_keys,memoisedOptions,enabledScopes]),ref}}}]);