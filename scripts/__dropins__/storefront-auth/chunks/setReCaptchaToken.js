import{events as t}from"@dropins/tools/event-bus.js";import{verifyReCaptcha as r}from"@dropins/tools/recaptcha.js";import{FetchGraphQL as o}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:p,setFetchGraphQlHeader:a,removeFetchGraphQlHeader:i,setFetchGraphQlHeaders:f,fetchGraphQl:m,getConfig:d}=new o().getMethods(),l=e=>{throw e instanceof DOMException&&e.name==="AbortError"||t.emit("error",{source:"auth",type:"network",error:e}),e},E=async()=>{const e=await r();e?a("X-ReCaptcha",e):console.error("ReCaptcha Token not received")};export{a,f as b,E as c,m as f,d as g,l as h,i as r,p as s};
