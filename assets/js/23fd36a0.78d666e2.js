"use strict";(self.webpackChunkecust_leap_handbook=self.webpackChunkecust_leap_handbook||[]).push([[3587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,slug:"/how-to-use"},i="\u4f7f\u7528\u65b9\u6cd5",p={unversionedId:"intro/how-to-use/how-to-use",id:"intro/how-to-use/how-to-use",title:"\u4f7f\u7528\u65b9\u6cd5",description:"\u6545\u4e8b & \u516c\u544a \ud83e\udea7",source:"@site/docs/intro/how-to-use/how-to-use.md",sourceDirName:"intro/how-to-use",slug:"/how-to-use",permalink:"/ecust-leap-dev/how-to-use",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/how-to-use"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/ecust-leap-dev/"},next:{title:"\u6295\u7a3f\u6307\u5357",permalink:"/ecust-leap-dev/how-to-contribute"}},l={},u=[{value:"\u6545\u4e8b &amp; \u516c\u544a \ud83e\udea7",id:"\u6545\u4e8b--\u516c\u544a-",level:2},{value:"\u5728\u300c\u76ee\u5f55\u300d\u4e2d\u627e\u5230\u6545\u4e8b \ud83d\udc40",id:"\u5728\u76ee\u5f55\u4e2d\u627e\u5230\u6545\u4e8b-",level:2},{value:"\u6839\u636e\u300c\u5173\u952e\u8bcd\u300d\u641c\u7d22 \ud83d\udd0d",id:"\u6839\u636e\u5173\u952e\u8bcd\u641c\u7d22-",level:2},{value:"\u6839\u636e\u300c\u6807\u7b7e\u300d\u627e\u5230\u540c\u7c7b\u6545\u4e8b \ud83c\udff7\ufe0f",id:"\u6839\u636e\u6807\u7b7e\u627e\u5230\u540c\u7c7b\u6545\u4e8b-\ufe0f",level:2},{value:"\u5982\u4f55\u6295\u7a3f \u270d\ufe0f",id:"\u5982\u4f55\u6295\u7a3f-\ufe0f",level:2},{value:"\u8bc4\u8bba\u533a \ud83d\udcac",id:"\u8bc4\u8bba\u533a-",level:2},{value:"\u8bba\u575b \ud83e\udd73",id:"\u8bba\u575b-",level:2},{value:"\u63a8\u9001\u66f4\u65b0",id:"\u63a8\u9001\u66f4\u65b0",level:2},{value:"\u7535\u5b50\u90ae\u4ef6",id:"\u7535\u5b50\u90ae\u4ef6",level:3}],s={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h2",{id:"\u6545\u4e8b--\u516c\u544a-"},"\u6545\u4e8b & \u516c\u544a \ud83e\udea7"),(0,r.kt)("p",null,"\u5728\u300c\u6545\u4e8b\u300d\u680f\uff0c\u6211\u4eec\u5c06\u6240\u6709\u524d\u8f88\u4eec\u7684\u7ecf\u9a8c\u6545\u4e8b\u8fdb\u884c\u4e86\u5206\u7c7b\u548c\u6574\u7406\uff0c\u5728\u8fd9\u91cc\u4f60\u53ef\u4ee5\u770b\u5230\u6240\u6709\u6295\u7a3f\u3002"),(0,r.kt)("p",null,"\u5728\u300c\u516c\u544a\u300d\u680f\uff0c\u6211\u4eec\u5c06\u91cd\u8981\u4fe1\u606f\u8fdb\u884c\u4e86\u63d0\u53d6\uff0c\u4ee5\u4fbf\u5927\u5bb6\u83b7\u53d6\u6700\u65b0\u987b\u77e5\u548c\u7f51\u7ad9\u8fdb\u5c55\u3002"),(0,r.kt)("h2",{id:"\u5728\u76ee\u5f55\u4e2d\u627e\u5230\u6545\u4e8b-"},"\u5728\u300c\u76ee\u5f55\u300d\u4e2d\u627e\u5230\u6545\u4e8b \ud83d\udc40"),(0,r.kt)("p",null,"\u5728\u684c\u9762\u7aef\u7f51\u9875\u5de6\u4fa7\u2b05\ufe0f\u53ef\u4ee5\u770b\u5230\u76ee\u5f55\u680f\uff0c\u70b9\u51fb\u4e0d\u540c\u5b66\u9662\u540d\u79f0\u53ef\u4ee5\u67e5\u770b\u5230\u5bf9\u5e94\u5b66\u9662\u7684\u524d\u8f88\u4eec\u7684\u4e0a\u5cb8\u7ecf\u9a8c\u3002"),(0,r.kt)("p",null,"\u76ee\u5f55\u6309\u7167\u300c\u5b66\u9662-\u53bb\u5411\u7c7b\u522b-\u672c\u79d1\u5165\u5b66\u5e74\u4efd\u300d\u8fdb\u884c\u4e0d\u540c\u5c42\u7ea7\u7684\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u6839\u636e\u60f3\u8981\u4e86\u89e3\u7684\u7c7b\u578b\u8fdb\u884c\u70b9\u51fb\u67e5\u770b\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u79fb\u52a8\u8bbe\u5907\uff08\u624b\u673a\uff0c\u5e73\u677f\u7b49\uff09\uff0c\u8bf7\u70b9\u51fb\u5c4f\u5e55\u5de6\u4e0a\u65b9\u7684 \u2630 \u6253\u5f00\u76ee\u5f55\u3002")),(0,r.kt)("h2",{id:"\u6839\u636e\u5173\u952e\u8bcd\u641c\u7d22-"},"\u6839\u636e\u300c\u5173\u952e\u8bcd\u300d\u641c\u7d22 \ud83d\udd0d"),(0,r.kt)("p",null,"\u5728\u7f51\u9875\u7684\u53f3\u4e0a\u89d2\u2197\ufe0f\u8bbe\u7f6e\u6709\u641c\u7d22\u680f\uff0c\u53ef\u4ee5\u6839\u636e\u60f3\u8981\u641c\u7d22\u7684\u5173\u952e\u8bcd\u68c0\u7d22\u81ea\u5df1\u5e0c\u671b\u641c\u7d22\u7684\u6545\u4e8b\u6216\u516c\u544a\u3002"),(0,r.kt)("h2",{id:"\u6839\u636e\u6807\u7b7e\u627e\u5230\u540c\u7c7b\u6545\u4e8b-\ufe0f"},"\u6839\u636e\u300c\u6807\u7b7e\u300d\u627e\u5230\u540c\u7c7b\u6545\u4e8b \ud83c\udff7\ufe0f"),(0,r.kt)("p",null,"\u5728\u6bcf\u7bc7\u6545\u4e8b\u4e0b\u65b9\u2b07\ufe0f\uff0c\u90fd\u6709\u8bbe\u7f6e",(0,r.kt)("strong",{parentName:"p"},"\u6807\u7b7e"),"\u680f\u76ee\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6807\u7b7e\ud83c\udff7\uff0c\u5c06\u4f1a\u8df3\u8f6c\u81f3\u5f52\u7c7b\u4e3a\u8be5\u6807\u7b7e\u4e0b\u7684\u6240\u6709\u6545\u4e8b\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"PS\uff1a\u6807\u7b7e\u4e2d\u7684\uff0c\u4ee5\u53ca\u76ee\u5f55\u548c\u6545\u4e8b\u6807\u9898\u4e2d\u51fa\u73b0\u7684\u300c\u5e74\u4efd\u300d\u4ee3\u8868\u5165\u5b66\u5e74\u4efd\uff0c\u4e0d\u8981\u6df7\u6dc6\u5566\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u6295\u7a3f-\ufe0f"},"\u5982\u4f55\u6295\u7a3f \u270d\ufe0f"),(0,r.kt)("p",null,"\u5177\u4f53\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./how-to-contribute"},"\u6295\u7a3f\u6307\u5357"),"\u5e76\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\uff0c\u5982\u6709\u4efb\u4f55\u95ee\u9898\u4e5f\u6b22\u8fce\u968f\u65f6\u5728\u5176\u8bc4\u8bba\u533a\u53d1\u8868\u3002"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4f7f\u7528\u4ee5\u4e0b\u6240\u5217\u4e3e\u7684\u529f\u80fd\uff0c\u4f60\u9700\u8981\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u7535\u5b50\u90ae\u7bb1"),(0,r.kt)("li",{parentName:"ol"},"GitHub\u8d26\u53f7",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f7f\u7528\u7535\u5b50\u90ae\u7bb1\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/signup"},"\u70b9\u6b64\u6ce8\u518c")))))),(0,r.kt)("h2",{id:"\u8bc4\u8bba\u533a-"},"\u8bc4\u8bba\u533a \ud83d\udcac"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e00\u7bc7\u6545\u4e8b\u4ee5\u53ca\u516c\u544a\u7684\u4e0b\u65b9\uff0c\u6211\u4eec\u90fd\u8bbe\u7f6e\u4e86\u8bc4\u8bba\u533a\u3002\u4f60\u53ef\u4ee5\u81ea\u7531\u53d1\u8868\u8bc4\u8bba\u3001\u5c55\u5f00\u8ba8\u8bba\uff0c\u4f46\u8bf7\u6ce8\u610f\u8a00\u8bba\u6587\u660e\u54e6\u3002"),(0,r.kt)("h2",{id:"\u8bba\u575b-"},"\u8bba\u575b \ud83e\udd73"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ECUST-Leap/ecust-leap.github.io/discussions"},"https://github.com/ECUST-Leap/ecust-leap.github.io/discussions")),(0,r.kt)("p",null,"\u6709\u4efb\u4f55\u60f3\u8981\u804a\u7684\u5185\u5bb9\u6b22\u8fce\u5927\u5bb6\u53d1\u5e16\u3002"),(0,r.kt)("h2",{id:"\u63a8\u9001\u66f4\u65b0"},"\u63a8\u9001\u66f4\u65b0"),(0,r.kt)("h3",{id:"\u7535\u5b50\u90ae\u4ef6"},"\u7535\u5b50\u90ae\u4ef6"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u529f\u80fd\u4ecd\u5728\u6d4b\u8bd5\u9636\u6bb5\u3002\u6b22\u8fce\u8bd5\u7528\u5e76\u544a\u8bc9\u6211\u4eec\u4f7f\u7528\u4f53\u9a8c\uff01")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5728\u6211\u4eec\u6709\u65b0\u6295\u7a3f/\u65b0\u529f\u80fd\u53d1\u5e03\u540e\u6536\u5230\u4e00\u5c01\u90ae\u4ef6\u901a\u77e5\uff0c\u8bf7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ECUST-Leap/ecust-leap.github.io"},"https://github.com/ECUST-Leap/ecust-leap.github.io"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u754c\u9762\u53f3\u4e0a\u89d2\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Watch")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"watch",src:n(3195).Z,width:"904",height:"779"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Custom"),"\uff0c\u5e76\u52fe\u9009",(0,r.kt)("inlineCode",{parentName:"p"},"Releases"),"\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"Discussions"),"\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"custom",src:n(3214).Z,width:"928",height:"653"})))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u8868\u8fbe\u5bf9\u6211\u4eec\u7684\u559c\u7231\u548c\u652f\u6301\uff0c\u8bf7\u987a\u624b\u70b9\u51fb\u4e00\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"Star"),"\uff01")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e0d\u60f3\u5728\u8bba\u575b\u6709\u66f4\u65b0\u65f6\u6536\u5230\u90ae\u4ef6\u901a\u77e5\uff0c\u8bf7\u4e0d\u7528\u52fe\u9009",(0,r.kt)("inlineCode",{parentName:"p"},"Discussions"),"\u3002")))}c.isMDXComponent=!0},3214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-f020a59a732a87eeb30ed4f4b7b3011f.jpeg"},3195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/watch-5cb7a8a161c8bbade197124da0b540ee.jpeg"}}]);