(this.webpackJsonptest=this.webpackJsonptest||[]).push([[7],{110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,o=e;for(;o;){if(n.call(o,t))return o;o=o.parentElement}return null},e.exports=t.default},277:function(e,t,n){"use strict";n(46),n(278)},278:function(e,t,n){},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(280)),a=l(n(83)),r=l(n(281)),i=l(n(282));function l(e){return e&&e.__esModule?e:{default:e}}a.default.alert=o.default,a.default.prompt=i.default,a.default.operation=r.default,t.default=a.default,e.exports=t.default},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",s=!1;if(!e&&!t)return{close:function(){}};var u=document.createElement("div");function c(){a.unmountComponentAtNode(u),u&&u.parentNode&&u.parentNode.removeChild(u)}document.body.appendChild(u);var p=n.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!s){var e=t();e&&e.then?e.then((function(){s=!0,c()})).catch((function(){})):(s=!0,c())}},e})),d="am-modal";function f(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-footer")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:p,maskTransitionName:"am-fade",platform:l,wrapProps:{onTouchStart:f}},o.createElement("div",{className:d+"-alert-content"},t)),u),{close:c}};var o=s(n(0)),a=s(n(13)),r=l(n(110)),i=l(n(83));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",n=!1,l="am-modal",s=document.createElement("div");function u(){a.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}document.body.appendChild(s);var c=e.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!n){var e=t();e&&e.then?e.then((function(){n=!0,u()})).catch((function(){})):(n=!0,u())}},e}));function p(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,".am-modal-footer")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,operation:!0,transparent:!0,prefixCls:l,transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:u,footer:c,maskTransitionName:"am-fade",className:"am-modal-operation",platform:t,wrapProps:{onTouchStart:p}}),s),{close:u}};var o=s(n(0)),a=s(n(13)),r=l(n(110)),i=l(n(83));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",p=!1;if(s="string"===typeof s?s:"number"===typeof s?""+s:"",!n)return{close:function(){}};var d="am-modal",f={text:s};function m(e){var t=e.target,n=t.getAttribute("type");null!==n&&(f[n]=t.value)}function v(e){var t=e.currentTarget||e.target;t&&t.focus()}function h(){/MicroMessenger/.test(navigator.userAgent)&&(document.body.scrollTop=document.body.scrollTop)}var y=void 0,b=function(e){setTimeout((function(){e&&e.focus()}),500)};switch(l){case"login-password":y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"text",defaultValue:f.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))),o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"password",defaultValue:f.password,onClick:v,onChange:m,placeholder:u[1],onBlur:h}))));break;case"secure-text":y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"password",defaultValue:f.password,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))));break;case"default":default:y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"text",defaultValue:f.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))))}var g=o.createElement("div",null,t,y),C=document.createElement("div");function k(){a.unmountComponentAtNode(C),C&&C.parentNode&&C.parentNode.removeChild(C)}function N(e){if("function"===typeof e){var t=f.text,n=void 0===t?"":t,o=f.password,a=void 0===o?"":o,r="login-password"===l?[n,a]:"secure-text"===l?[a]:[n];return e.apply(void 0,r)}}document.body.appendChild(C);var x=void 0;x="function"===typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){N(n)}}]:n.map((function(e){return{text:e.text,onPress:function(){return N(e.onPress)}}}));var P=x.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!p){var e=t();e&&e.then?e.then((function(){p=!0,k()})).catch((function(){})):(p=!0,k())}},e}));function w(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-content")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,transparent:!0,prefixCls:d,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:P,maskTransitionName:"am-fade",platform:c,wrapProps:{onTouchStart:w}},o.createElement("div",{className:d+"-propmt-content"},g)),C),{close:k}};var o=s(n(0)),a=s(n(13)),r=l(n(110)),i=l(n(83));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},313:function(e,t,n){"use strict";n.r(t);var o=n(38),a=n.n(o),r=n(34),i=n.n(r),l=n(35),s=n.n(l),u=n(36),c=n.n(u),p=n(37),d=n.n(p),f=n(0),m=n.n(f),v=n(13),h=n.n(v),y=n(142),b=function(e){function t(){return i()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.hiddenClassName||!!e.visible}},{key:"render",value:function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=a()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,m.a.createElement("div",a()({},t))}}]),t}(m.a.Component);function g(){}var C=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getDialogElement=function(){var t=e.props,n=t.closable,o=t.prefixCls,a=void 0;t.footer&&(a=m.a.createElement("div",{className:o+"-footer",ref:function(t){return e.footerRef=t}},t.footer));var r=void 0;t.title&&(r=m.a.createElement("div",{className:o+"-header",ref:function(t){return e.headerRef=t}},m.a.createElement("div",{className:o+"-title"},t.title)));var i=void 0;n&&(i=m.a.createElement("button",{onClick:e.close,"aria-label":"Close",className:o+"-close"},m.a.createElement("span",{className:o+"-close-x"})));var l=e.getTransitionName(),s=m.a.createElement(b,{key:"dialog-element",role:"document",ref:function(t){return e.dialogRef=t},style:t.style||{},className:o+" "+(t.className||""),visible:t.visible},m.a.createElement("div",{className:o+"-content"},i,r,m.a.createElement("div",{className:o+"-body",style:t.bodyStyle,ref:function(t){return e.bodyRef=t}},t.children),a));return m.a.createElement(y.a,{key:"dialog",showProp:"visible",onAppear:e.onAnimateAppear,onLeave:e.onAnimateLeave,transitionName:l,component:"",transitionAppear:!0},s)},e.onAnimateAppear=function(){document.body.style.overflow="hidden"},e.onAnimateLeave=function(){document.body.style.overflow="",e.wrapRef&&(e.wrapRef.style.display="none"),e.props.onAnimateLeave&&e.props.onAnimateLeave(),e.props.afterClose&&e.props.afterClose()},e.close=function(t){e.props.onClose&&e.props.onClose(t)},e.onMaskClick=function(t){t.target===t.currentTarget&&e.close(t)},e}return d()(t,e),s()(t,[{key:"componentWillUnmount",value:function(){document.body.style.overflow="",this.wrapRef&&(this.wrapRef.style.display="none")}},{key:"getZIndexStyle",value:function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e}},{key:"getWrapStyle",value:function(){var e=this.props.wrapStyle||{};return a()({},this.getZIndexStyle(),e)}},{key:"getMaskStyle",value:function(){var e=this.props.maskStyle||{};return a()({},this.getZIndexStyle(),e)}},{key:"getMaskTransitionName",value:function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getMaskElement",value:function(){var e=this.props,t=void 0;if(e.mask){var n=this.getMaskTransitionName();t=m.a.createElement(b,a()({style:this.getMaskStyle(),key:"mask-element",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=m.a.createElement(y.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.maskClosable,r=this.getWrapStyle();return t.visible&&(r.display=null),m.a.createElement("div",null,this.getMaskElement(),m.a.createElement("div",a()({className:n+"-wrap "+(t.wrapClassName||""),ref:function(t){return e.wrapRef=t},onClick:o?this.onMaskClick:void 0,role:"dialog","aria-labelledby":t.title,style:r},t.wrapProps),this.getDialogElement()))}}]),t}(m.a.Component),k=C;C.defaultProps={afterClose:g,className:"",mask:!0,visible:!1,closable:!0,maskClosable:!0,prefixCls:"rmc-dialog",onClose:g};var N=!!h.a.createPortal,x=!("undefined"===typeof window||!window.document||!window.document.createElement),P=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveRef=function(t){N&&(e._component=t)},e.getComponent=function(t){var n=a()({},e.props);return["visible","onAnimateLeave"].forEach((function(e){n.hasOwnProperty(e)&&delete n[e]})),m.a.createElement(k,a()({},n,{visible:t,onAnimateLeave:e.removeContainer,ref:e.saveRef}))},e.removeContainer=function(){e.container&&(N||h.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.getContainer=function(){if(!e.container){var t=document.createElement("div"),n=e.props.prefixCls+"-container-"+(new Date).getTime();t.setAttribute("id",n),document.body.appendChild(t),e.container=t}return e.container},e}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.componentDidUpdate()}},{key:"shouldComponentUpdate",value:function(e){var t=e.visible;return!(!this.props.visible&&!t)}},{key:"componentWillUnmount",value:function(){this.props.visible?N?this.removeContainer():this.renderDialog(!1):this.removeContainer()}},{key:"componentDidUpdate",value:function(){N||this.renderDialog(this.props.visible)}},{key:"renderDialog",value:function(e){h.a.unstable_renderSubtreeIntoContainer(this,this.getComponent(e),this.getContainer())}},{key:"render",value:function(){if(!x)return null;var e=this.props.visible;return N&&(e||this._component)?h.a.createPortal(this.getComponent(e),this.getContainer()):null}}]),t}(m.a.Component);t.default=P;P.defaultProps={visible:!1,prefixCls:"rmc-dialog",onClose:function(){}}},316:function(e,t,n){"use strict";n.r(t);n(66);var o=n(67),a=n.n(o),r=(n(73),n(74)),i=n.n(r),l=(n(75),n(76)),s=n.n(l),u=n(86),c=(n(77),n(78)),p=n.n(c),d=(n(62),n(63)),f=n.n(d),m=(n(52),n(53)),v=n.n(m),h=n(82),y=n.n(h),b=(n(108),n(109)),g=n.n(b),C=(n(277),n(279)),k=n.n(C),N=n(84),x=n(14),P=n(15),w=n(17),_=n(16),O=n(0),j=n(64),E=n(85),M=n(6),A=function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(x.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isDisable:!0},e.validator=function(t,n){/^1[3456789][\d]{9}$/.test(n)?e.setState({isDisable:!1}):e.setState({isDisable:!0})},e.verifyPhoneHandle=Object(N.a)(y.a.mark((function t(){var n,o,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.form.getFieldValue,o=n("phone"),t.next=4,Object(j.c)(o);case 4:(a=t.sent).data.success?k.a.alert("\u6ce8\u518c\u534f\u8bae\u53ca\u9690\u5f0f\u653f\u7b56","\u6211\u4eec\u5c06\u53d1\u9001\u77ed\u4fe1/\u8bed\u97f3\u9a8c\u8bc1\u7801\u5230"+o,[{text:"\u4e0d\u540c\u610f"},{text:"\u540c\u610f",onPress:function(){localStorage.setItem("phone",o),e.props.history.replace("/register/code",{from:"/register/phone"})},style:{backgroundColor:"red",color:"#fff"}}]):g.a.fail(a.data.message,1.5);case 6:case"end":return t.stop()}}),t)}))),e}return Object(P.a)(n,[{key:"componentDidMount",value:function(){var e=this;k.a.alert("\u6ce8\u518c\u534f\u8bae\u53ca\u9690\u5f0f\u653f\u7b56","\u6211\u76f8\u4fe1\u4f60\u662f\u4e00\u4e2a\u50bb\u903c,\u4f46\u662f\u4f60\u81ea\u5df1\u4e0d\u8bf4\u6211\u600e\u4e48\u4f1a\u77e5\u9053?\u6240\u4ee5\u5927\u58f0\u8bf4\u51fa\u6765,\u4f60\u662f\u4e0d\u662f\u50bb\u903c?",[{text:"\u4e0d\u540c\u610f",onPress:function(){console.log(e.props.location),e.props.history.replace(e.props.location.state.from,{from:"/register/phone"})}},{text:"\u540c\u610f",onPress:function(){return console.log("ok")},style:{backgroundColor:"red",color:"#fff"}}])}},{key:"render",value:function(){var e=this.state.isDisable,t=this.props.form.getFieldProps;return Object(M.jsxs)("div",{className:"wrap",children:[Object(M.jsx)(f.a,{mode:"light",icon:Object(M.jsx)(v.a,{type:"left",color:"#000"}),onLeftClick:function(){console.log("onLeftClick")},children:"\u7845\u8c37\u6ce8\u518c\u767b\u5f55"}),Object(M.jsxs)(a.a,{children:[Object(M.jsx)(p.a,Object(u.a)(Object(u.a)({},t("phone",{rules:[{validator:this.validator}]})),{},{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",children:Object(M.jsxs)("div",{className:"inp_phone",children:[Object(M.jsx)("span",{children:"+86"}),Object(M.jsx)(v.a,{type:"down"})]})})),Object(M.jsx)(s.a,{}),Object(M.jsx)(s.a,{}),Object(M.jsx)(s.a,{}),Object(M.jsxs)(a.a,{children:[Object(M.jsx)(i.a,{type:"warning",disabled:e,className:"login_btn",onClick:this.verifyPhoneHandle,children:"\u4e0b\u4e00\u6b65"}),Object(M.jsx)(s.a,{})]})]})]})}}]),n}(O.Component);A.displayName="RegisterPhone",t.default=Object(E.a)()(A)},64:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var o=n(65),a=n.n(o);function r(e){return a()({url:"/regist/verify_phone",method:"post",data:{phone:e}})}function i(e,t){return a()({url:"/regist/verify_code",method:"post",data:{phone:e,code:t}})}function l(e,t){return a()({url:"/regist/user",method:"post",data:{phone:e,password:t}})}},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;var o=f(n(38)),a=f(n(43)),r=f(n(35)),i=f(n(34)),l=f(n(36)),s=f(n(37)),u=f(n(40)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),p=f(n(313)),d=f(n(58));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n},v=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"renderFooterButton",value:function(e,t,n){var o={};if(e.style&&"string"===typeof(o=e.style)){o={cancel:{},default:{},destructive:{color:"red"}}[o]||{}}return c.createElement(d.default,{activeClassName:t+"-button-active",key:n},c.createElement("a",{className:t+"-button",role:"button",style:o,onClick:function(t){t.preventDefault(),e.onPress&&e.onPress()}},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,i=n.className,l=n.wrapClassName,s=n.transitionName,d=n.maskTransitionName,f=n.style,v=n.platform,h=n.footer,y=void 0===h?[]:h,b=n.operation,g=n.animated,C=n.transparent,k=n.popup,N=n.animationType,x=m(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),P=(0,u.default)(r+"-button-group-"+(2!==y.length||b?"v":"h"),r+"-button-group-"+(b?"operation":"normal")),w=y.length?c.createElement("div",{className:P,role:"group"},y.map((function(e,n){return t.renderFooterButton(e,r,n)}))):null,_=void 0,O=void 0;g&&(_=O=C?"am-fade":"am-slide-up",k&&(_="slide-up"===N?"am-slide-up":"am-slide-down",O="am-fade"));var j=(0,u.default)(l,(0,a.default)({},r+"-wrap-popup",k)),E=(0,u.default)(i,(e={},(0,a.default)(e,r+"-transparent",C),(0,a.default)(e,r+"-popup",k),(0,a.default)(e,r+"-popup-"+N,k&&N),(0,a.default)(e,r+"-android","android"===v),e));return c.createElement(p.default,(0,o.default)({},x,{prefixCls:r,className:E,wrapClassName:j,transitionName:s||_,maskTransitionName:d||O,style:f,footer:w}))}}]),t}(t.ModalComponent=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),t}(c.Component));t.default=v,v.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"}}}]);
//# sourceMappingURL=7.c9d9f55a.chunk.js.map