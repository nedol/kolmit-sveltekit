import{p as e}from"./stores-c9271dbf.js";const s=async({params:a})=>{const t=fetch("https://nedol.ru/assets/dict/dict.json");console.log(e);const o=await(await t).json();return{dict:JSON.stringify(o)}},c=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l};