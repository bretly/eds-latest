import{jsxs as g,jsx as m}from"@dropins/tools/preact-jsx-runtime.js";import{classes as M}from"@dropins/tools/lib.js";import*as o from"@dropins/tools/preact-compat.js";import{useText as d}from"@dropins/tools/i18n.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{b as p}from"./getStoreConfig.js";import{useState as h,useEffect as f,useMemo as v}from"@dropins/tools/preact-hooks.js";const S=e=>o.createElement("svg",{id:"Icon_Check_Base","data-name":"Icon \\u2013 Check \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},o.createElement("g",{id:"Large"},o.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),o.createElement("g",{id:"Check_icon","data-name":"Check icon",transform:"translate(303.874 1434.583)"},o.createElement("path",{vectorEffect:"non-scaling-stroke",id:"Path_884137","data-name":"Path 884137",d:"M148,494.611l4.248,4.244,8.538-8.522",transform:"translate(-446.265 -1917.177)",fill:"none",stroke:"currentColor"})))),E=e=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),P=e=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M17.3332 11.75H6.6665",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",fill:"none",stroke:"currentColor"})),u={pending:m(P,{}),success:m(S,{}),error:m(E,{style:{fill:"red"}})},A=({minLength:e=0,requiredCharacterClasses:s=0,isValidUniqueSymbols:t="pending",validateLengthConfig:a={status:"",icon:"",message:""},...c})=>{const n=d({chartTwoSymbols:"Auth.PasswordValidationMessage.chartTwoSymbols",chartThreeSymbols:"Auth.PasswordValidationMessage.chartThreeSymbols",chartFourSymbols:"Auth.PasswordValidationMessage.chartFourSymbols"}),i=r=>{switch(r){case 2:return n.chartTwoSymbols;case 3:return n.chartThreeSymbols;case 4:return n.chartFourSymbols;default:return""}};return g("div",{...c,className:M(["elsie-password-validation-message"]),children:[e>0?g("div",{className:`auth-passwordValidationMessage_item auth-passwordValidationMessage_item--status-${a.status}`,"data-testid":`auth-passwordValidationMessage_item--${a.icon}`,children:[u[a.icon],m("span",{className:`${a.status}`,children:a.message})]}):null,s&&s>=2?g("div",{className:`auth-passwordValidationMessage_item auth-passwordValidationMessage_item--status-${t}`,"data-testid":`auth-passwordValidationMessage_item--${t}`,children:[u[t],m("span",{className:"pending",children:i(s)})]}):null]})},I=()=>{const[e,s]=h(!1),[t,a]=h(null);return f(()=>{const c=sessionStorage.getItem("storeConfig"),n=c?JSON.parse(c):null;if(n){const{minLength:i,requiredCharacterClasses:r,createAccountConfirmation:l}=n;a({minLength:i,requiredCharacterClasses:r}),s(l)}else p().then(i=>{if(i){const{minLength:r,requiredCharacterClasses:l,createAccountConfirmation:w}=i;sessionStorage.setItem("storeConfig",JSON.stringify(i)),a({minLength:r,requiredCharacterClasses:l}),s(w)}})},[]),{passwordConfigs:t,isEmailConfirmationRequired:e}},L=(e,s)=>{if(s<=1)return!0;const t=/[0-9]/.test(e)?1:0,a=/[a-z]/.test(e)?1:0,c=/[A-Z]/.test(e)?1:0,n=/[^a-zA-Z0-9\s]/.test(e)?1:0;return t+a+c+n>=s},N=({passwordConfigs:e,isClickSubmit:s,password:t})=>{const a=d({messageLengthPassword:"Auth.PasswordValidationMessage.messageLengthPassword"}),[c,n]=h("pending");f(()=>{if(!e)return;const r=L(t,e.requiredCharacterClasses);s&&t.length>0?n(r?"success":"error"):s&&t.length===0?n("pending"):n(r?"success":"pending")},[s,e,t]);const i=v(()=>{var l;if(!e)return;const r={status:"pending",icon:"pending",message:(l=a.messageLengthPassword)==null?void 0:l.replace("{minLength}",`${e.minLength}`)};return t.length&&t.length>=e.minLength?{...r,icon:"success",status:"success"}:t.length&&t.length<e.minLength?s?{...r,icon:"error",status:"error"}:{...r,icon:"pending",status:"pending"}:r},[e,a.messageLengthPassword,t==null?void 0:t.length,s]);return{isValidUniqueSymbols:c,defaultLengthMessage:i}};export{A as P,N as a,I as u,L as v};
