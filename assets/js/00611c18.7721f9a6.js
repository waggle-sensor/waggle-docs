"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[960],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:4},l="Part 4: Publishing to ECR",u={unversionedId:"tutorials/edge-apps/publishing-to-ecr",id:"tutorials/edge-apps/publishing-to-ecr",title:"Part 4: Publishing to ECR",description:"Now that we've finished preparing our code and testing it, we're almost ready to publish it to the Edge Code Repository!",source:"@site/docs/tutorials/edge-apps/4-publishing-to-ecr.md",sourceDirName:"tutorials/edge-apps",slug:"/tutorials/edge-apps/publishing-to-ecr",permalink:"/docs/tutorials/edge-apps/publishing-to-ecr",editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/edge-apps/4-publishing-to-ecr.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Part 3: Testing an edge app",permalink:"/docs/tutorials/edge-apps/testing-an-edge-app"},next:{title:"Access and use data",permalink:"/docs/tutorials/accessing-data"}},s=[{value:"Preparing our app",id:"preparing-our-app",children:[],level:2},{value:"Publishing our app",id:"publishing-our-app",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-4-publishing-to-ecr"},"Part 4: Publishing to ECR"),(0,a.kt)("p",null,"Now that we've finished ",(0,a.kt)("a",{parentName:"p",href:"creating-an-edge-app"},"preparing our code")," and ",(0,a.kt)("a",{parentName:"p",href:"testing-an-edge-app"},"testing it"),", we're almost ready to publish it to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),"!"),(0,a.kt)("h2",{id:"preparing-our-app"},"Preparing our app"),(0,a.kt)("p",null,"Before publishing an app to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#edge-code-repository-ecr"},"Edge Code Repository"),", we need to add a few packaging items to it."),(0,a.kt)("p",null,"First, add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"sage.yaml")," file to your repo and fill in your own app details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: ""\ndescription: ""\nkeywords: ""\nauthors: "Your Name <your.email@somewhere.org>"\ncollaborators: ""\nfunding: ""\nlicense: ""\nhomepage: "https://github.com/waggle-sensor/edge-app-template"\nsource:\n  architectures:\n    - "linux/amd64"\n    - "linux/arm64"\n')),(0,a.kt)("p",null,"Next, create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ecr-meta")," directory in your repo and populate it with the following text and media:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ecr-science-description.md")," - Markdown with in depth description of the science being done here (1 page of text)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ecr-icon.jpg")," - An icon for the project/work 512x512px."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ecr-science-image.jpg")," - A science image for the project with a minimum size of 1920x1080px.")),(0,a.kt)("p",null,"Once we've commited and pushed those files to your repo, we're ready to publish our app!"),(0,a.kt)("h2",{id:"publishing-our-app"},"Publishing our app"),(0,a.kt)("p",null,"Please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," and complete the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to "Sign In" and follow the instructions.'),(0,a.kt)("li",{parentName:"ol"},'Go to "My Apps".'),(0,a.kt)("li",{parentName:"ol"},'Go to "Create app" and follow the instructions.')),(0,a.kt)("p",null,'If everything is successful, your plugin will appeared and be marked as "Built".'),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulation! You've successfully written, tested and published an app to ECR!"),(0,a.kt)("p",null,"We encourage you to check out other apps in the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"ECR")," and explore additional functionality provided by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle"),"."))}d.isMDXComponent=!0}}]);