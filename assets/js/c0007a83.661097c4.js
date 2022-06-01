"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var i=n(3117),o=n(102),a=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},s="Compute at the Edge",p={unversionedId:"tutorials/compute-at-edge",id:"tutorials/compute-at-edge",title:"Compute at the Edge",description:"Introduction to edge applications",source:"@site/docs/tutorials/compute-at-edge.md",sourceDirName:"tutorials",slug:"/tutorials/compute-at-edge",permalink:"/docs/tutorials/compute-at-edge",editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/compute-at-edge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Access Sage sensors",permalink:"/docs/tutorials/access-sage-sensors"},next:{title:"Access and use data",permalink:"/docs/tutorials/accessing-data"}},d=[{value:"Introduction to edge applications",id:"introduction-to-edge-applications",children:[],level:2},{value:"Exploring existing edge applications",id:"exploring-existing-edge-applications",children:[],level:2},{value:"Developing new edge applications",id:"developing-new-edge-applications",children:[{value:"Write plugin code",id:"write-plugin-code",children:[],level:3},{value:"Test and debug plugin code in Waggle/Sage nodes",id:"test-and-debug-plugin-code-in-wagglesage-nodes",children:[],level:3},{value:"Submit plugin to the Edge Code Repository",id:"submit-plugin-to-the-edge-code-repository",children:[],level:3},{value:"Schedule plugin for deployment",id:"schedule-plugin-for-deployment",children:[],level:3},{value:"Access plugin data",id:"access-plugin-data",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,l=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compute-at-the-edge"},"Compute at the Edge"),(0,a.kt)("h2",{id:"introduction-to-edge-applications"},"Introduction to edge applications"),(0,a.kt)("p",null,"Sage nodes run edge applications (i.e. ",(0,a.kt)("strong",{parentName:"p"},"plugins"),") to process data. A plugin is a self-contained program which typically reads sensors, audio or video data, does some processing and then publishes information derived from that data."),(0,a.kt)("p",null,"The most basic example of a plugin is one which reads and publishes a value from a sensor. A more complex plugin could publish the number of birds in a scene using a deep learning model."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Basic Plugin",src:n(2121).Z,width:"690",height:"220"})),(0,a.kt)("p",null,"Plugins fit into the wider Sage infrastructure by being added to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),", deployed to nodes and publishing data to our Sage Data Repository."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Plugins in Sage",src:n(6422).Z,width:"880",height:"625"})),(0,a.kt)("h2",{id:"exploring-existing-edge-applications"},"Exploring existing edge applications"),(0,a.kt)("p",null,"One of the major goals of Sage is to provide the science community with a diverse set of edge applications to enable new kinds of research. These edge applications are maintained in the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," where you can find more background information and links to their source repos."),(0,a.kt)("p",null,"We encourage users to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"ECR")," to get familiar with existing applications as well a references if you develop your own edge applications."),(0,a.kt)("h2",{id:"developing-new-edge-applications"},"Developing new edge applications"),(0,a.kt)("p",null,"Writing a new edge applications (i.e. ",(0,a.kt)("strong",{parentName:"p"},"plugin"),") consists of the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write plugin code")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Test and debug plugin code with Waggle/Sage nodes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Submit plugin to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schedule plugin for deployment")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access plugin data"))),(0,a.kt)("p",null,"The following sections cover each of these steps in detail."),(0,a.kt)("h3",{id:"write-plugin-code"},"Write plugin code"),(0,a.kt)("p",null,"The entry point to writing plugins is our Python library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle"),". This library provides all the necessary abstractions for accessing and publishing data. For this step, please refer to pywaggle's own in-depth guide on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md"},"writing plugins"),"."),(0,a.kt)("h3",{id:"test-and-debug-plugin-code-in-wagglesage-nodes"},"Test and debug plugin code in Waggle/Sage nodes"),(0,a.kt)("p",null,"If you have Waggle/Sage nodes set up for your plugin development (Consult with us for this resource), plugin code can be tested against the nodes to make sure it works, and the plugin does not crash when it is deployed to nodes in the field. We provide a set of tools to support access for Waggle/Sage node resource and the ability to debug/test plugin code. Detailed examples and instructions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/ses/tree/master/docs/pluginctl/README.md"},"here"),"."),(0,a.kt)("h3",{id:"submit-plugin-to-the-edge-code-repository"},"Submit plugin to the Edge Code Repository"),(0,a.kt)("p",null,"We require plugins to be submitted to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," to be built and tested to validate that they are ready to be scheduled on nodes."),(0,a.kt)("p",null,"The following steps are required to submit a plugin to ECR."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a repo for plugin and add required packaging files. (See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#adding-hello-world-plugin-packaging-info"},"pywaggle guide")," for details.)"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),"."),(0,a.kt)("li",{parentName:"ol"},'Go to "Sign In" and follow the instructions.'),(0,a.kt)("li",{parentName:"ol"},'Go to "My Apps".'),(0,a.kt)("li",{parentName:"ol"},'Go to "Create app" and follow the instructions.')),(0,a.kt)("p",null,'If everything is successful, your plugin will appeared and be marked as "Built".'),(0,a.kt)("h3",{id:"schedule-plugin-for-deployment"},"Schedule plugin for deployment"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO This is work in progress! We will update this section once the scheduler is public.")),(0,a.kt)("h3",{id:"access-plugin-data"},"Access plugin data"),(0,a.kt)("p",null,"Once a plugin has been deployed to node(s) and is publishing data, you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/accessing-data"},"access the published data")," in the Sage Data Repository."))}c.isMDXComponent=!0},2121:function(e,t,n){t.Z=n.p+"assets/images/plugin-basic-a1632d393968488af247b3045de6dc0c.svg"},6422:function(e,t,n){t.Z=n.p+"assets/images/plugin-sage-f6541c3f2d3c2ea6a3661583bface8c4.svg"}}]);