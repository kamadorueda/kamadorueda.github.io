var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function R(){if(a)return u;a=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(c,t,e){var s=null;if(e!==void 0&&(s=""+e),t.key!==void 0&&(s=""+t.key),"key"in t){e={};for(var i in t)i!=="key"&&(e[i]=t[i])}else e=t;return t=e.ref,{$$typeof:r,type:c,key:s,ref:t!==void 0?t:null,props:e}}return u.Fragment=n,u.jsx=o,u.jsxs=o,u}var x;function f(){return x||(x=1,l.exports=R()),l.exports}var v=f();const d=(...r)=>r.filter(n=>typeof n=="string").join(" "),p=r=>d("grid items-center",r==="fullRounded"?"coutline m-auto w-fit grid-flow-col rounded-full":"border-coutline w-full rounded-b-3xl border"),E=({variant:r="fullRounded",className:n,children:o})=>v.jsx("div",{className:d(p(r),n),children:o}),j=d("cunderline text-ctext transition","cfocus-visible","chover-bg");export{E as B,v as j,j as l,d as t};
