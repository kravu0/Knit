"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[350],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},59355:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),l=["components"],o={sidebar_position:5},u="Util",p={unversionedId:"util",id:"util",isDocsHomePage:!1,title:"Util",description:"Knit via Wally",source:"@site/docs/util.md",sourceDirName:".",slug:"/util",permalink:"/Knit/docs/util",editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/util.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Controllers",permalink:"/Knit/docs/controllers"},next:{title:"Execution Model",permalink:"/Knit/docs/executionmodel"}},c=[{value:"Knit via Wally",id:"knit-via-wally",children:[]},{value:"Knit via ModuleScript",id:"knit-via-modulescript",children:[]}],s={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"util"},"Util"),(0,a.kt)("h2",{id:"knit-via-wally"},"Knit via Wally"),(0,a.kt)("p",null,"When installing Knit with Wally, developers should pull in utility modules\nvia Wally as required. Knit's utility modules are significantly slimmed down\nin the Wally release."),(0,a.kt)("h2",{id:"knit-via-modulescript"},"Knit via ModuleScript"),(0,a.kt)("p",null,"Knit comes with a few utility modules. If Knit is being used from the packaged\nModuleScript, then the best way to access these modules is via ",(0,a.kt)("inlineCode",{parentName:"p"},"require(Knit.Util.PACKAGE)"),"."),(0,a.kt)("p",null,"The following modules are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Comm"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Comm"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Component"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Component"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/EnumList"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.EnumList"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Option"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Option"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Signal"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Signal"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/TableUtil"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.TableUtil"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Timer"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Timer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/RbxUtil/api/Trove"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Trove"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eryn.io/roblox-lua-promise/api/Promise"},(0,a.kt)("inlineCode",{parentName:"a"},"Knit.Util.Promise")))),(0,a.kt)("p",null,"Below is an example of the Signal class being used in a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Signal = require(Knit.Util.Signal)\n\nlocal MyService = Knit.CreateService {\n    Name = "MyService";\n    SomeSignal = Signal.new();\n}\n')))}m.isMDXComponent=!0}}]);