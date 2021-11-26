(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var r,a,c,u,l,o,b,i,s,d,p,j,h,O,v,m=t(0),y=t(8),g=t.n(y),f=(t(16),t(2)),x=t(3);const k=Object(x.b)(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),w=Object(x.b)(a||(a=Object(f.a)(["\n  border-radius: 0.25rem;\n"]))),C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#CDCDCD",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.1rem";return Object(x.b)(c||(c=Object(f.a)(["\n    box-shadow: 0 0 "," "," ",";\n  "])),n,n,e)},S=Object(x.a)(u||(u=Object(f.a)(["\n  #root {\n    width: 100vw;\n    height: 100vh;\n    ","\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])),k),D=x.c.div(l||(l=Object(f.a)(["\n  padding: 0.5rem;\n  ","\n  ","\n"])),w,C(void 0,"0.2rem")),F=x.c.div(o||(o=Object(f.a)(["\n  padding: 0.5rem;\n  ","\n  text-align: right;\n  border: 1.5px solid #cdcdcd;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n"])),w),q=x.c.ul(b||(b=Object(f.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n\n  & :nth-child(1),\n  & :nth-child(4n + 1) {\n    margin-left: 0;\n  }\n\n  & :nth-child(4n) {\n    margin-right: 0;\n  }\n"]))),E=x.c.li(i||(i=Object(f.a)(["\n  width: 4rem;\n  height: 3rem;\n  margin: 0.25rem;\n"]))),z=x.c.button(s||(s=Object(f.a)(["\n  outline: none;\n  border: none;\n  width: 100%;\n  height: 100%;\n\n  ","\n"])),(e=>{const n=Object(x.b)(d||(d=Object(f.a)(["\n      cursor: pointer;\n      ",";\n      font-size: 1.25rem;\n\n      &:hover {\n        border: none;\n        ","\n      }\n    "])),w,"equal"===e.type?C("#4285F4"):C());switch(e.type){case"none":return Object(x.b)(p||(p=Object(f.a)(["\n          background-color: transparent;\n        "])));case"number":return Object(x.b)(j||(j=Object(f.a)(["\n          ","\n          background-color: transparent;\n          border: 1.5px solid #cdcdcd;\n        "])),n);case"operator":return Object(x.b)(h||(h=Object(f.a)(["\n          ","\n        "])),n);case"equal":return Object(x.b)(O||(O=Object(f.a)(["\n          ","\n          background-color: #4285F4;\n          color: white;\n        "])),n);default:return Object(x.b)(v||(v=Object(f.a)([""])))}}));var A=t(1);function J(){const[e,n]=Object(m.useState)("0"),[t,r]=Object(m.useState)(null),a=Object(m.useRef)(null);return Object(m.useEffect)((()=>{document.title="Calculator"}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(S,{}),Object(A.jsxs)(D,{children:[Object(A.jsx)(F,{children:Object(A.jsx)("span",{children:e})}),Object(A.jsx)("div",{children:Object(A.jsx)(q,{children:[{type:"number",value:"7"},{type:"number",value:"8"},{type:"number",value:"9"},{type:"operator",value:"+"},{type:"number",value:"4"},{type:"number",value:"5"},{type:"number",value:"6"},{type:"operator",value:"-"},{type:"number",value:"1"},{type:"number",value:"2"},{type:"number",value:"3"},{type:"operator",value:"x"},{type:"number",value:"0"},{type:"number",value:"000"},{type:"number",value:"."},{type:"operator",value:"/"},{type:"operator",value:"AC"},{type:"operator",value:"DEL"},{type:"none"},{type:"equal",value:"="}].map(((c,u)=>Object(A.jsx)(E,{children:Object(A.jsx)(z,{onClick:()=>function(c){switch(c.type){case"number":if("0"===e&&"."!==c.value){"000"!==c.value&&n(c.value);break}if("."===c.value){e.indexOf(c.value)<0&&n(e+".");break}n(e+c.value);break;case"operator":switch(c.value){case"AC":n("0"),r(null),a.current=null;break;case"DEL":if(1===e.length){n("0");break}n(e.substr(0,e.length-1));break;default:r(c.value),a.current=e,n("0")}break;case"equal":if(t&&a.current){const c=parseFloat(a.current,10),u=parseFloat(e,10);switch(a.current=null,t){case"+":n((c+u).toString()),r(null);break;case"-":n((c-u).toString()),r(null);break;case"x":n((c*u).toString()),r(null);break;case"/":if(0===u){alert("Cannot be divided by 0, please enter another number.");break}n((c/u).toString()),r(null)}}}}(c),type:c.type,children:c.value})},u)))})})]})]})}const L=document.getElementById("root");g.a.render(Object(A.jsx)(m.StrictMode,{children:Object(A.jsx)(J,{})}),L)}},[[20,1,2]]]);
//# sourceMappingURL=main.821cc50c.chunk.js.map