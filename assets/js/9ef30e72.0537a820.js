"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[321],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return d}});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?t.createElement(g,l(l({ref:n},m),{},{components:a})):t.createElement(g,l({ref:n},m))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8993:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var t=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={sidebar_position:2},p="Part 2: Creating an edge app",s={unversionedId:"tutorials/edge-apps/creating-an-edge-app",id:"tutorials/edge-apps/creating-an-edge-app",title:"Part 2: Creating an edge app",description:"In part 1, we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we'll dive right in and start writing our very own edge app!",source:"@site/docs/tutorials/edge-apps/2-creating-an-edge-app.md",sourceDirName:"tutorials/edge-apps",slug:"/tutorials/edge-apps/creating-an-edge-app",permalink:"/docs/tutorials/edge-apps/creating-an-edge-app",editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/edge-apps/2-creating-an-edge-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Part 1: Intro to edge apps",permalink:"/docs/tutorials/edge-apps/intro-to-edge-apps"},next:{title:"Part 3: Testing an edge app",permalink:"/docs/tutorials/edge-apps/testing-an-edge-app"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Development workflow",id:"development-workflow",children:[],level:2},{value:"Preparing an example for edge",id:"preparing-an-example-for-edge",children:[{value:"Installing pywaggle",id:"installing-pywaggle",children:[],level:3},{value:"Accessing a camera",id:"accessing-a-camera",children:[],level:3},{value:"Publishing results",id:"publishing-results",children:[],level:3},{value:"Viewing run logs",id:"viewing-run-logs",children:[],level:3},{value:"Uploading a sample",id:"uploading-a-sample",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],u={toc:m};function c(e){var n=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-2-creating-an-edge-app"},"Part 2: Creating an edge app"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"intro-to-edge-apps"},"part 1"),", we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we'll dive right in and start writing our very own edge app!"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"We'll assume the reader has some development experience in Python and tools like git for version control."),(0,r.kt)("p",null,"If this describes you well, please proceed to the next section. Otherwise, feel free to follow along but we will primarily focus on explaining edge app specific details."),(0,r.kt)("h2",{id:"development-workflow"},"Development workflow"),(0,r.kt)("p",null,"In the next few parts of this tutorial, we'll deep dive into the following app development workflow:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Workflow",src:a(1598).Z,width:"1740",height:"580"})),(0,r.kt)("p",null,"First, ",(0,r.kt)("strong",{parentName:"p"},"data and model selection")," is where you scope the problem and identify a new or existing model for your application. This typically happens ",(0,r.kt)("em",{parentName:"p"},"outside")," of our ecosystem."),(0,r.kt)("p",null,"Second, ",(0,r.kt)("strong",{parentName:"p"},"develop and test")," is where you begin to integrate your initial code with our ecosystem, test and finally build your application in ECR."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("strong",{parentName:"p"},"deploy and iterate")," is where you schedule your application for deployment and look at the results."),(0,r.kt)("h2",{id:"preparing-an-example-for-edge"},"Preparing an example for edge"),(0,r.kt)("p",null,"In order to illustrate progress through each of these stages, we'll start with a concrete code example and iterate on it over the next few sections."),(0,r.kt)("p",null,"In practice, ",(0,r.kt)("em",{parentName:"p"},"lots")," of work goes into the data and model selection step. For now, we'll assume that groundwork has already been done and we've settled on the following code snippit to start with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport cv2\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    # read example image from file\n    image = cv2.imread("example.jpg")\n\n    # compute mean color\n    mean_color = compute_mean_color(image)\n\n    # print mean color\n    print(mean_color)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("p",null,"In order to follow along, create an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," file and copy and paste the code snippits as we progress through the tutorial."),(0,r.kt)("p",null,"This code above is a great start but needs a few improvements before it's ready for the edge. We'll work through these over the next few sections."),(0,r.kt)("h3",{id:"installing-pywaggle"},"Installing pywaggle"),(0,r.kt)("p",null,"The first step in preparing an edge app for Waggle is to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle"),". pywaggle is our Python SDK which provides edge apps access to devices (ex. cameras and microphones) and messaging within a node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Accessing Devices",src:a(9332).Z,width:"1280",height:"509"})),(0,r.kt)("p",null,"For this tutorial, we will install the latest version of pywaggle with all optional dependencies using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install 'pywaggle[all]'\n")),(0,r.kt)("h3",{id:"accessing-a-camera"},"Accessing a camera"),(0,r.kt)("p",null,"Now that we have pywaggle, the first change we'll make is to use a camera as input rather than a static image file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    # open camera and take snapshot\n    with Camera() as camera:\n        snapshot = camera.snapshot()\n\n    # compute mean color\n    mean_color = compute_mean_color(snapshot.data)\n\n    # print mean color\n    print(mean_color)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("p",null,"Now, we can try this out by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,r.kt)("p",null,"You should see output like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"[51.43575738 51.83611871 54.64226671]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You're exact numbers may differ as this is computed using your default camera.")),(0,r.kt)("h3",{id:"publishing-results"},"Publishing results"),(0,r.kt)("p",null,"The next change we'll make is to publish our data instead of just print it. This will allow it to be sent to a beehive when it's scheduled on a node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.plugin import Plugin\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    with Plugin() as plugin:\n        # open camera and take snapshot\n        with Camera() as camera:\n            snapshot = camera.snapshot()\n\n        # compute mean color\n        mean_color = compute_mean_color(snapshot.data)\n\n        # publish mean color\n        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("p",null,"Now, we'll run this using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,r.kt)("p",null,"You may notice something... there's no output! Usually, published data is sent to a beehive where it can be viewed later. However, because we're developing locally and have not configured a beehive, the data isn't going anywhere. In the next section, we'll see how we can tap into our published data."),(0,r.kt)("h3",{id:"viewing-run-logs"},"Viewing run logs"),(0,r.kt)("p",null,"In order to make developing and debugging apps easier, pywaggle can write out a log directory as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export PYWAGGLE_LOG_DIR=test-run\npython3 main.py\n")),(0,r.kt)("p",null,"This will create a new directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"test-run")," and will contain a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"data.ndjson")," which contains something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"color.mean.r","ts":1659649285404613000,"meta":{},"val":41.216171875}\n{"name":"color.mean.g","ts":1659649285404613000,"meta":{},"val":40.8623828125}\n{"name":"color.mean.b","ts":1659649285404613000,"meta":{},"val":42.65227322048611}\n')),(0,r.kt)("p",null,"If we run ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 main.py")," again, then we'll see new data appended to that file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"color.mean.r","ts":1659649285404613000,"meta":{},"val":41.216171875}\n{"name":"color.mean.g","ts":1659649285404613000,"meta":{},"val":40.8623828125}\n{"name":"color.mean.b","ts":1659649285404613000,"meta":{},"val":42.65227322048611}\n{"name":"color.mean.r","ts":1659649380989242000,"meta":{},"val":42.72360460069444}\n{"name":"color.mean.g","ts":1659649380989242000,"meta":{},"val":42.572535807291665}\n{"name":"color.mean.b","ts":1659649380989242000,"meta":{},"val":44.36891818576389}\n')),(0,r.kt)("p",null,"This provides a convenient way to understand the behavior of an app, particularly one with a more complicated flow."),(0,r.kt)("h3",{id:"uploading-a-sample"},"Uploading a sample"),(0,r.kt)("p",null,"Finally, the last change we'll make is to upload our snapshots after publishing the mean color."),(0,r.kt)("p",null,"We'll upload every snapshot for demonstration purposes, but you wouldn't want to do this in a real app. Instead, you'd typically upload in response to detecting an event such as an anomalous object or loud noise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.plugin import Plugin\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    with Plugin() as plugin:\n        # open camera and take snapshot\n        with Camera() as camera:\n            snapshot = camera.snapshot()\n\n        # compute mean color\n        mean_color = compute_mean_color(snapshot.data)\n\n        # publish mean color\n        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)\n\n        # save and upload image\n        snapshot.save("snapshot.jpg")\n        plugin.upload_file("snapshot.jpg", timestamp=snapshot.timestamp)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("p",null,"Let's run our app again using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export PYWAGGLE_LOG_DIR=test-run\npython3 main.py\n")),(0,r.kt)("p",null,"If you take a look in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test-run/uploads")," directory, you should now see an image."),(0,r.kt)("p",null,"Uploads are added to the run log directory using the format ",(0,r.kt)("inlineCode",{parentName:"p"},"nstimestamp-filename"),"."),(0,r.kt)("p",null,"You should also see a corresponding item in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.ndjson")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"color.mean.r","ts":1659650274683007000,"meta":{},"val":46.39777994791667}\n{"name":"color.mean.g","ts":1659650274683007000,"meta":{},"val":46.66985785590278}\n{"name":"color.mean.b","ts":1659650274683007000,"meta":{},"val":48.90661024305555}\n{"name":"upload","ts":1659650274683007000,"meta":{"filename":"snapshot.jpg"},"val":"/Users/sean/git/instrument-with-pywaggle-example/run-log/uploads/1659650274683007000-snapshot.jpg"}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Congratulations! You've finished preparing our example code for the edge!"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"testing-an-edge-app"},"part 3"),", we'll look at how we can build and test our app on a real node!"))}c.isMDXComponent=!0},1598:function(e,n,a){n.Z=a.p+"assets/images/plugin-workflow-9b43ba26e58ea48e2d15dff3b447b842.svg"},9332:function(e,n,a){n.Z=a.p+"assets/images/access_to_sensors-862c26d27348053c048f1fdf6babeb77.svg"}}]);