"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[241],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Cloud compute & HPC on edge data",u={unversionedId:"tutorials/cloud-compute",id:"tutorials/cloud-compute",title:"Cloud compute & HPC on edge data",description:"Sage provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Sage.",source:"@site/docs/tutorials/cloud-compute.md",sourceDirName:"tutorials",slug:"/tutorials/cloud-compute",permalink:"/docs/tutorials/cloud-compute",editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/cloud-compute.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Access and use data",permalink:"/docs/tutorials/accessing-data"}},l=[{value:"Triggering on data from the edge",id:"triggering-on-data-from-the-edge",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloud-compute--hpc-on-edge-data"},"Cloud compute & HPC on edge data"),(0,a.kt)("p",null,"Sage provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Sage."),(0,a.kt)("h2",{id:"triggering-on-data-from-the-edge"},"Triggering on data from the edge"),(0,a.kt)("p",null,"A common application is monitoring data from the edge and triggering actions when values exceed a threshold or an unusual event is detected."),(0,a.kt)("p",null,"As a getting started example, we demonstrate an outline of how this can be done in Sage using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/sage-data-client"},"Sage data client"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sage_data_client\nimport time\n\nwhile True:\n    # query pressure data in recent 10 minute window\n    df = sage_data_client.query(\n        start="-10m",\n        filter={\n            "name": "env.pressure",\n            "sensor": "bme680",\n        }\n    )\n\n    # compute stddev for nodes\' pressure data in window\n    std = df.groupby("meta.vsn").value.std()\n\n    # find all pressure events exceeding an example threshold\n    events = std[std > 8.0]\n\n    # "post" vsn to alert system\n    for vsn in events.index:\n        print(f"post {vsn} to alert system")\n\n    time.sleep(60)\n')),(0,a.kt)("p",null,'The above code queries a 10 minute window of atmospheric pressure data every minute and "posts" alerts for nodes exceeding a predefined standard deviation threshold.'),(0,a.kt)("p",null,"This example and more can be found in the Sage data client ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/sage-data-client/blob/main/examples/"},"examples")," directory."))}p.isMDXComponent=!0}}]);