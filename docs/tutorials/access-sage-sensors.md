---
sidebar_position: 1
---

# Access Sage Sensors

A Sage sensor is an entity that produces measurements of a phenomenon and that helps users analyze what is happening in the environment. There are sensors already hosted by Sage and also sensors that are being integrated into Sage as a user-hosted sensor. A sensor does not necessarily mean a physical device, but can be a program producing measurements from data -- we call it __software-defined sensor__. Once those sensors become available in Sage nodes edge applications running inside the nodes can pull measurements from the sensors to process them.

In general, Sage sensors are desinged to be accessible from any edge applications running on the Sage node that hosts the sensors, but can be limited their access to groups and personnel. For example, a pan-tilt-zoom featured camera may be only accessed from authorized applications in order to prevent other applications from operating the camera. Ideally, Sage sensors can form and support the Sage ecosystem where sensor measurements are integrated and used by edge applications for higher level computation and complex decision making.

## Sage Physical Sensors
![Figure 1: Sensors of Sage node](./images/Sage_Node.jpg)
The Sage node is designed to accommodate sensors commonly used to support environmental science, but not limited to host other sensors. The currently supported sensors are,

_NOTE: not all SAGE nodes have the same set of sensors, and the sensor configuration depends on what to capture from the environment where the node is deployed_
- [BME680](https://sage-commons.sdsc.edu/dataset/bme680): temperature, humidity, pressure, and gas
- [RG-15](https://sage-commons.sdsc.edu/dataset/rg-15): rainfall
- [ETS ML1-WS](https://www.a1securitycameras.com/ets-ml1-ws.html): 20-16 kHz microphone recording sound
- [XNV-8080R](https://sage-commons.sdsc.edu/dataset/xnv-8080r): 5 MP camera with 92.1 degree horizontal and 67.2 degree vertical angle view
- [XNV-8082R](https://sage-commons.sdsc.edu/dataset/xnv-8082r):  6 MP camera with 114 degree horizontal and 62 degree vertical angle view
- [XNF-8010RV](https://sage-commons.sdsc.edu/dataset/xnf-8010rv): 6 MP fisheye camera with 192 degree horizontal and vertical angle view
- [XNV-8081Z](https://sage-commons.sdsc.edu/dataset/xnv-8081z): 5 MP digital pan-tilt-rotate-zoom camera

Any collaborators and user communities can bring up their sensors to Sage node. The node can easily host sensor devices that support serial interface as well as network interface (e.g., http, rtsp, etc). The currently supported user sensors are,

_NOTE: those sensors may not be available on all SAGE nodes as it depends on what SAGE nodes need to host them_
- Software-defined Radio: detecting raindrops and snow flakes
- Radiation detector: radiation detector
- LIDAR: distance of nearby objects
- Mobotics: infrared camera

_TODO: add links for the user sensors and also link where users find detailed resource to add their sensor to Sage_

## Sage Software-defined Sensors
Software-defined sensors are limitless as edge applications define them. You can start building your edge application that publishes outputs using [PyWaggle's basic example](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#basic-example) that can become a software-defined sensor. Later, such outputs can be consumed by other edge applications to produce higher level information about the measurements. A few example of SAGE software-defined sensors are,

- [Object Counter](https://portal.sagecontinuum.org/apps/app/theone/objcounter): `env.count.OBJECT` counts objects from an image, where `OBJECT` is the object name that is recognized
- [Cloud Coverage Estimator](https://portal.sagecontinuum.org/apps/app/seonghapark/cloudcover-unet): `env.coverage.cloud` provides a percentage of cloud covered in an image

## Access to Sage Sensors
Sage sensors are integrated into Sage using PyWaggle library. PyWaggle utilizes [the message publishing and subscribing mechanism](https://www.amqp.org) to support exchanging sensor measurements between edge applications. An edge application can subscribe measurements by following [PyWaggle subscriber](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#subscribing-to-other-measurements) tutorial. The application then produces its output and publishes the output as a measurement to the system using [PyWaggle publisher](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#more-about-the-publish-function) tutorial.

PyWaggle often provides edge applications direct access to physical sensors. [The example](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#accessing-a-video-stream) provides how to access to a video stream from a camera sensor. If any physical sensor device that requires a special interfacing to the device, an edge application that supports the interfacing need to run in order to publish sensor measurements to the ecosystem.

## Bring Your Own Sensor to Sage
To integrate your sensor device into Sage, contact Sage at support@sagecontinuum.org
