"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8525],{52545:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],l={description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},s="GoShimmer Analysis Dashboard",p={unversionedId:"teamresources/analysis_dashboard",id:"teamresources/analysis_dashboard",isDocsHomePage:!1,title:"GoShimmer Analysis Dashboard",description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",source:"@site/external/goshimmer/documentation/docs/teamresources/analysis_dashboard.md",sourceDirName:"teamresources",slug:"/teamresources/analysis_dashboard",permalink:"/goshimmer/teamresources/analysis_dashboard",tags:[],version:"current",frontMatter:{description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},sidebar:"docs",previous:{title:"golangci-lint",permalink:"/goshimmer/teamresources/local_development"}},d=[{value:"Dashboard in Dev Mode",id:"dashboard-in-dev-mode",children:[]},{value:"Pack Your Changes",id:"pack-your-changes",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goshimmer-analysis-dashboard"},"GoShimmer Analysis Dashboard"),(0,o.kt)("p",null,"Programmed using modern web technologies."),(0,o.kt)("h3",{id:"dashboard-in-dev-mode"},"Dashboard in Dev Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure to set ",(0,o.kt)("inlineCode",{parentName:"li"},"analysis.dashboard.dev")," to true, to enable GoShimmer to serve assets\nfrom the webpack-dev-server."),(0,o.kt)("li",{parentName:"ol"},"Install all needed npm modules via ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn install"),"."),(0,o.kt)("li",{parentName:"ol"},"Run a webpack-dev-server instance by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," within the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," directory."),(0,o.kt)("li",{parentName:"ol"},"Using default port config, you should now be able to access the analysis dashboard under ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"))),(0,o.kt)("p",null,"The Analysis Dashboard is hot-reload enabled."),(0,o.kt)("h3",{id:"pack-your-changes"},"Pack Your Changes"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"pkger")," to wrap all built frontend files into Go files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"Install ",(0,o.kt)("inlineCode",{parentName:"a"},"pkger"))," if not already done.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that the correct webpack-cli (version v3.3.11) is installed: "),(0,o.kt)("p",{parentName:"li"},"2.1 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn webpack-cli --version")),(0,o.kt)("p",{parentName:"li"},"2.2 If a newer version is installed use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn remove webpack-cli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add webpack-cli@3.3.11")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build Analysis Dashboard by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the root of the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pkger")," in the root of the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pkged.go")," should have been modified.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Done. Now you can build GoShimmer and your Analysis Dashboard changes will be included within the binary."))),(0,o.kt)("p",null,"The above steps can also be done by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/pkger.sh")," script from the root folder."))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);