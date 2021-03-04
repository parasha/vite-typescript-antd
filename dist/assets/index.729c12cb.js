import{e as t,w as n,d as e,P as i,i as o,t as a,a as r,b as s,L as c,j as d}from"./LoadingOutlined.cb4f7b12.js";import{d as l,n as u,i as f,T as h,c as m,a as p}from"./index.422cab0a.js";var v={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},g={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},b=[],T=[];function y(t,n,e){t.addEventListener(n,e,!1)}function E(t,n,e){t.removeEventListener(n,e,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function n(n,e){for(var i in n)if(n.hasOwnProperty(i)){var o=n[i];for(var a in o)if(a in t){e.push(o[a]);break}}}"AnimationEvent"in window||(delete v.animationstart.animation,delete g.animationend.animation),"TransitionEvent"in window||(delete v.transitionstart.transition,delete g.transitionend.transition),n(v,b),n(g,T)}();var C,w={startEvents:b,addStartEventListener:function(t,n){0!==b.length?b.forEach((function(e){y(t,e,n)})):window.setTimeout(n,0)},removeStartEventListener:function(t,n){0!==b.length&&b.forEach((function(e){E(t,e,n)}))},endEvents:T,addEndEventListener:function(t,n){0!==T.length?T.forEach((function(e){y(t,e,n)})):window.setTimeout(n,0)},removeEndEventListener:function(t,n){0!==T.length&&T.forEach((function(e){E(t,e,n)}))}};function O(t){return!t||null===t.offsetParent}var k=l({name:"Wave",props:["insertExtraNode"],setup:function(){return{configProvider:f("configProvider",e)}},mounted:function(){var n=this;u((function(){var e=t(n);1===e.nodeType&&(n.instance=n.bindAnimationEvent(e))}))},beforeUnmount:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId)},methods:{onClick:function(t,n){if(!(!t||O(t)||t.className.indexOf("-leave")>=0)){var e=this.$props.insertExtraNode;this.extraNode=document.createElement("div");var i=this.extraNode;i.className="ant-click-animating-node";var o,a=this.getAttributeName();t.removeAttribute(a),t.setAttribute(a,"true"),C=C||document.createElement("style"),!n||"#ffffff"===n||"rgb(255, 255, 255)"===n||(o=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/))&&o[1]&&o[2]&&o[3]&&o[1]===o[2]&&o[2]===o[3]||/rgba\(\d*, \d*, \d*, 0\)/.test(n)||"transparent"===n||(this.csp&&this.csp.nonce&&(C.nonce=this.csp.nonce),i.style.borderColor=n,C.innerHTML="\n        [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n          --antd-wave-shadow-color: ".concat(n,";\n        }"),document.body.contains(C)||document.body.appendChild(C)),e&&t.appendChild(i),w.addStartEventListener(t,this.onTransitionStart),w.addEndEventListener(t,this.onTransitionEnd)}},onTransitionStart:function(n){if(!this._.isUnmounted){var e=t(this);n&&n.target===e&&(this.animationStart||this.resetEffect(e))}},onTransitionEnd:function(t){t&&"fadeEffect"===t.animationName&&this.resetEffect(t.target)},getAttributeName:function(){return this.$props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"},bindAnimationEvent:function(t){var e=this;if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var i=function(i){if("INPUT"!==i.target.tagName&&!O(i.target)){e.resetEffect(t);var o=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,o)}),0),n.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=n((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",i,!0),{cancel:function(){t.removeEventListener("click",i,!0)}}}},resetEffect:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var n=this.$props.insertExtraNode,e=this.getAttributeName();t.setAttribute(e,"false"),C&&(C.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),w.removeStartEventListener(t,this.onTransitionStart),w.removeEndEventListener(t,this.onTransitionEnd)}}},render:function(){var t,n,e=this.configProvider.csp;return e&&(this.csp=e),null===(n=(t=this.$slots).default)||void 0===n?void 0:n.call(t)[0]}}),N=a("default","primary","ghost","dashed","danger","link"),S=a("circle","circle-outline","round"),A=a("large","default","small"),P=a("submit","button","reset"),x=function(){return{prefixCls:i.string,type:i.oneOf(N),htmlType:i.oneOf(P).def("button"),shape:i.oneOf(S),size:i.oneOf(A).def("default"),loading:o(i.oneOfType([i.looseBool,i.object])),disabled:i.looseBool,ghost:i.looseBool,block:i.looseBool,icon:i.VNodeChild,href:i.string,title:i.string,onClick:i.func}};function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?j(Object(e),!0).forEach((function(n){I(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function z(){return(z=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function I(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function M(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!p(t)}var B=/^[\u4e00-\u9fa5]{2}$/,$=B.test.bind(B),W=l({name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:x(),setup:function(){return{configProvider:f("configProvider",e),children:[],iconCom:void 0,delayTimeout:void 0}},data:function(){return{sizeMap:{large:"lg",small:"sm"},sLoading:!1,hasTwoCNChar:!1}},watch:{loading:{handler:function(t,n){var e=this;n&&"boolean"!=typeof n&&clearTimeout(this.delayTimeout),t&&"boolean"!=typeof t&&t.delay?this.delayTimeout=setTimeout((function(){e.sLoading=!!t}),t.delay):this.sLoading=!!t},immediate:!0}},mounted:function(){this.fixTwoCNChar()},updated:function(){this.fixTwoCNChar()},beforeUnmount:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)},methods:{getClasses:function(){var t,n=this.prefixCls,e=this.type,i=this.shape,o=this.size,a=this.hasTwoCNChar,r=this.sLoading,s=this.ghost,c=this.block,d=this.$attrs,l=(0,this.configProvider.getPrefixCls)("btn",n),u=!1!==this.configProvider.autoInsertSpaceInButton,f="";switch(o){case"large":f="lg";break;case"small":f="sm"}var h=r?"loading":this.iconCom;return I(t={},d.class,d.class),I(t,"".concat(l),!0),I(t,"".concat(l,"-").concat(e),e),I(t,"".concat(l,"-").concat(i),i),I(t,"".concat(l,"-").concat(f),f),I(t,"".concat(l,"-icon-only"),0===this.children.length&&h),I(t,"".concat(l,"-loading"),r),I(t,"".concat(l,"-background-ghost"),s||"ghost"===e),I(t,"".concat(l,"-two-chinese-chars"),a&&u),I(t,"".concat(l,"-block"),c),t},fixTwoCNChar:function(){var t=this.$refs.buttonNode;if(t){var n=t.textContent;this.isNeedInserted()&&$(n)?this.hasTwoCNChar||(this.hasTwoCNChar=!0):this.hasTwoCNChar&&(this.hasTwoCNChar=!1)}},handleClick:function(t){this.$data.sLoading||this.$emit("click",t)},insertSpace:function(t,n){var e=n?" ":"";if(t.type===h){var i=t.children.trim();return $(i)&&(i=i.split("").join(e)),m("span",null,M(i)?i:{default:function(){return[i]}})}return t},isNeedInserted:function(){var t=this.iconCom,n=this.type;return 1===this.children.length&&!t&&"link"!==n}},render:function(){var t=this;this.iconCom=r(this,"icon");var n=this.type,e=this.htmlType,i=this.iconCom,o=this.disabled,a=this.handleClick,d=this.sLoading,l=this.href,u=this.title,f=this.$attrs,h=s(this);this.children=h;var p=this.getClasses(),v=z(z({},f),{title:u,disabled:o,class:p,onClick:a}),g=d?m(c,null,null):i,b=!1!==this.configProvider.autoInsertSpaceInButton,T=h.map((function(n){return t.insertSpace(n,t.isNeedInserted()&&b)}));if(void 0!==l)return m("a",L(L({},v),{},{href:l,ref:"buttonNode"}),[g,T]);var y=m("button",L(L({},v),{},{ref:"buttonNode",type:e||"button"}),[g,T]);return"link"===n?y:m(k,{ref:"wave"},M(y)?y:{default:function(){return[y]}})}});function U(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var D={prefixCls:i.string,size:i.oneOf(a("small","large","default"))},V=l({name:"AButtonGroup",props:D,setup:function(){return{configProvider:f("configProvider",e)}},data:function(){return{sizeMap:{large:"lg",small:"sm"}}},render:function(){var t,n=this.prefixCls,e=this.size,i=(0,this.configProvider.getPrefixCls)("btn-group",n),o="";switch(e){case"large":o="lg";break;case"small":o="sm"}var a=(U(t={},"".concat(i),!0),U(t,"".concat(i,"-").concat(o),o),t);return m("div",{class:a},[d(s(this))])}});W.Group=V,W.install=function(t){return t.component(W.name,W),t.component(V.name,V),t};export{W as B,w as T,k as W,D as a,x as b};