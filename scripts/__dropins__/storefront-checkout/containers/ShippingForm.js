import*as t from"@dropins/tools/event-bus.js";import*as n from"@dropins/tools/fetch-graphql.js";export const id=3004;export const ids=[3004];export const modules={1520:(t,n,r)=>{r.d(n,{OC:()=>m});var e=r(304),i=r(8596);function o(){throw new Error("Cycle detected")}var s=Symbol.for("preact-signals");function a(){if(u>1)u--;else{for(var t,n=!1;void 0!==p;){var r=p;for(p=void 0,d++;void 0!==r;){var e=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&y(r))try{r.c()}catch(r){n||(t=r,n=!0)}r=e}}if(d=0,u--,n)throw t}}var l=void 0;var f,p=void 0,u=0,d=0,c=0;function v(t){if(void 0!==l){var n=t.n;if(void 0===n||n.t!==l)return n={i:0,S:t,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:n},void 0!==l.s&&(l.s.n=n),l.s=n,t.n=n,32&l.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=l.s,n.n=void 0,l.s.n=n,l.s=n),n}}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function m(t){return new h(t)}function y(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function g(t){for(var n=t.s;void 0!==n;n=n.n){var r=n.S.n;if(void 0!==r&&(n.r=r),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function _(t){for(var n=t.s,r=void 0;void 0!==n;){var e=n.p;-1===n.i?(n.S.U(n),void 0!==e&&(e.n=n.n),void 0!==n.n&&(n.n.p=e)):r=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=e}t.s=r}function b(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=c-1,this.f=4}function w(t){var n=t.u;if(t.u=void 0,"function"==typeof n){u++;var r=l;l=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,S(t),n}finally{l=r,a()}}}function S(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,w(t)}function k(t){if(l!==this)throw new Error("Out-of-order effect");_(this),l=t,this.f&=-2,8&this.f&&S(this),a()}function O(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function j(t){var n=new O(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function x(t,n){e.s1[t]=n.bind(null,e.s1[t]||function(){})}function P(t){f&&f(),f=t&&t.S()}function I(t){var n=this,r=t.data,o=function(t){return(0,i.bB)((function(){return m(t)}),[])}(r);o.value=r;var s=(0,i.bB)((function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;(0,e.ur)(s.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=s.peek()},function(t){return new b(t)}((function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return s.value}function C(t,n,r,e){var i=n in t&&void 0===t.ownerSVGElement,o=m(r);return{o:function(t,n){o.value=t,e=n},d:j((function(){var r=o.value.value;e[n]!==r&&(e[n]=r,i?t[n]=r:r?t.setAttribute(n,r):t.removeAttribute(n))}))}}h.prototype.brand=s,h.prototype.h=function(){return!0},h.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},h.prototype.U=function(t){if(void 0!==this.t){var n=t.e,r=t.x;void 0!==n&&(n.x=r,t.e=void 0),void 0!==r&&(r.e=n,t.x=void 0),t===this.t&&(this.t=r)}},h.prototype.subscribe=function(t){var n=this;return j((function(){var r=n.value,e=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=e}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var t=v(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(l instanceof b&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){d>100&&o(),this.v=t,this.i++,c++,u++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{a()}}}}),(b.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===c)return!0;if(this.g=c,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var t=l;try{g(this),l=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return l=t,_(this),this.f&=-2,!0},b.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}h.prototype.S.call(this,t)},b.prototype.U=function(t){if(void 0!==this.t&&(h.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},b.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},b.prototype.peek=function(){if(this.h()||o(),16&this.f)throw this.v;return this.v},Object.defineProperty(b.prototype,"value",{get:function(){1&this.f&&o();var t=v(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),O.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},O.prototype.S=function(){1&this.f&&o(),this.f|=1,this.f&=-9,w(this),g(this),u++;var t=l;return l=this,k.bind(this,t)},O.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)},O.prototype.d=function(){this.f|=8,1&this.f||S(this)},I.displayName="_st",Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:I},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),x("__b",(function(t,n){if("string"==typeof n.type){var r,e=n.props;for(var i in e)if("children"!==i){var o=e[i];o instanceof h&&(r||(n.__np=r={}),r[i]=o,e[i]=o.peek())}}t(n)})),x("__r",(function(t,n){P();var r,e=n.__c;e&&(e.__$f&=-2,void 0===(r=e.__$u)&&(e.__$u=r=function(t){var n;return j((function(){n=this})),n.c=function(){e.__$f|=1,e.setState({})},n}())),e,P(r),t(n)})),x("__e",(function(t,n,r,e){P(),void 0,t(n,r,e)})),x("diffed",(function(t,n){var r;if(P(),void 0,"string"==typeof n.type&&(r=n.__e)){var e=n.__np,i=n.props;if(e){var o=r.U;if(o)for(var s in o){var a=o[s];void 0===a||s in e||(a.d(),o[s]=void 0)}else r.U=o={};for(var l in e){var f=o[l],p=e[l];void 0===f?(f=C(r,l,p,i),o[l]=f):f.o(p,i)}}}t(n)})),x("unmount",(function(t,n){if("string"==typeof n.type){var r=n.__e;if(r){var e=r.U;if(e)for(var i in r.U=void 0,e){var o=e[i];o&&o.d()}}}else{var s=n.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}t(n)})),x("__h",(function(t,n,r,e){(e<3||9===e)&&(n.__$f|=2),t(n,r,e)})),e.Yl.prototype.shouldComponentUpdate=function(t,n){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var e in n)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in t))return!0;return!1}},3388:(t,n,r)=>{r.d(n,{W:()=>j,K:()=>O});var e=r(4944),i=r(5536),o=r.n(i),s=r(7008),a=r.n(s),l=r(1496),f=r.n(l),p=r(9356),u=r.n(p),d=r(9904),c=r.n(d),v=r(6072),h={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const r=t?.match(/^\.dropin-(\w+)/)?.[1],e=n.getAttribute("data-sdk"),i=r?`sdk/${r}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",i),n.removeAttribute("data-sdk");const o=window._loadedStyles[i];if(o){const i=function(t,n){const[r,e]=t.split("-"),[i,o]=n.split("-"),s=[...r.split("."),e],a=[...i.split("."),o],l=parseInt(s[0],10),f=parseInt(a[0],10);if(l!==f)return l>f?t:n;const p=parseInt(s[1],10),u=parseInt(a[1],10);if(p!==u)return p>u?t:n;const d=parseInt(s[2],10),c=parseInt(a[2],10);if(d!==c)return d>c?t:n;if(s[3]&&a[3]){const r=/(alpha|beta)(.*)/,e=s[3].match(r),i=a[3].match(r),o=e[1],l=i[1],f=parseInt(e[2],10),p=parseInt(i[2],10);if(o===l)return f>p?t:n;if("alpha"===o&&"beta"===l)return n;if("beta"===o&&"alpha"===l)return t}return s[3]?n:t}(e,o.sdk);if(!r||r&&i===o.sdk){const n=o.style.textContent;o.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else r&&i!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[i]={sdk:e,core:r,style:n};const s=document.querySelector("head"),{lastDropinStyleInjected:a,lastSDKStyleInjected:l}=window._loadedStyles;r?(l?s.insertBefore(n,l.nextSibling):s.insertBefore(n,s.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(a?s.insertBefore(n,a.nextSibling):l?s.insertBefore(n,l.nextSibling):s.insertBefore(n,s.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};h.setAttributes=u(),h.insert=f().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c();o()(v.c,h);v.c&&v.c.locals&&v.c.locals;var m=r(8412),y=["className","fullWidth","lines","size","variant","children","multilineGap"],g=["className","children","rowGap"];function _(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function b(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_(Object(r),!0).forEach((function(n){w(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function w(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,n||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function S(t,n){if(null==t)return{};var r,e,i=function(t,n){if(null==t)return{};var r,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)r=o[e],n.indexOf(r)>=0||(i[r]=t[r]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)r=o[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var k=1,O=t=>{var{className:n,fullWidth:r=!1,lines:i=k,size:o="small",variant:s="row",children:a=null,multilineGap:l="medium"}=t,f=S(t,y),p=[["dropin-skeleton-row__".concat(s),s],["dropin-skeleton-row__".concat(s,"-").concat(o),s&&o]];if(!a&&"empty"===s)return(0,m.im)("div",{className:(0,e.i)(["dropin-skeleton-row dropin-skeleton-row__empty",n])});if(a){var u=a.trim();return(0,m.im)("div",b(b({},f),{},{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],n]),dangerouslySetInnerHTML:{__html:u}}))}return!1===i>k?(0,m.im)("div",b(b({},f),{},{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],"dropin-skeleton--row__content",...p,n])})):(0,m.im)("div",b(b({},f),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(l,")")},class:(0,e.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",r],n]),children:Array.from({length:i}).map(((t,n)=>(0,m.im)("div",{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],"dropin-skeleton--row__content",...p])},n)))}))},j=t=>{var{className:n,children:r,rowGap:i="medium"}=t,o=S(t,g);return(0,m.im)("div",b(b({style:{"--row-gap-spacing":"var(--spacing-".concat(i,")")}},o),{},{className:(0,e.i)(["dropin-skeleton",n]),role:"status","aria-label":"Loading...",children:r}))}},4468:(t,n,r)=>{r.d(n,{S:()=>m});var e=r(5124),i=r(2532),o=r(5520),s=r(8996),a=r(2796),l=r(5668),f=r(9488),p=r(8412),u=["preselectedFields"];function d(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function c(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){v(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function v(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,n||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function h(t,n){if(null==t)return{};var r,e,i=function(t,n){if(null==t)return{};var r,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)r=o[e],n.indexOf(r)>=0||(i[r]=t[r]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)r=o[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var m=t=>{var{preselectedFields:n}=t,r=h(t,u),{data:d}=l.cartSignal.value,v=(null==d?void 0:d.id)||"",m=f.isBillToShippingSignal.value.checked,y=(0,a.kZ)((t=>(0,e.Eh)({signal:t.signal,cartId:v,address:(0,e.ek)(t.address)}).then((()=>{if(m)return(0,i.W)({cartId:v,input:{same_as_shipping:!0}})}))),[v,m]);return(0,p.im)(o.i,c(c({},r),{},{addressType:"shipping_addresses",headingId:"Checkout.ShippingAddress.title",name:s.I,preselectedFields:n,saveAddressHandler:y}))}},8996:(t,n,r)=>{r.d(n,{I:()=>e});var e="shipping_address"},2464:(t,n,r)=>{r.d(n,{Ib:()=>i.I,SW:()=>e.S,cp:()=>e.S});var e=r(4468),i=r(8996)},6072:(t,n,r)=>{r.d(n,{c:()=>a});var e=r(6008),i=r.n(e),o=r(2076),s=r.n(o)()(i());s.push([t.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const a=s},8122:(n,r,e)=>{n.exports=(t=>{var n={};return e.d(n,t),n})({events:()=>t.events})},8616:(t,r,e)=>{t.exports=(t=>{var n={};return e.d(n,t),n})({FetchGraphQL:()=>n.FetchGraphQL})}};import r from"../runtime.js";import*as e from"../76.js";r.C(e);import*as i from"../184.js";r.C(i);import*as o from"../196.js";r.C(o);import*as s from"../9792.js";r.C(s);import*as a from"../5068.js";r.C(a);import*as l from"../3860.js";r.C(l);import*as f from"../9064.js";r.C(f);import*as p from"./ShippingForm.js";r.C(p);var u,d=(u=2464,r(r.s=u)),c=d.Ib,v=d.SW,h=d.cp;export{c as SHIPPING_FORM_NAME,v as ShippingForm,h as default};