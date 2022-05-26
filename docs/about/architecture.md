---
sidebar_label: Architecture
sidebar_position: 2
---

# Architecture

The architecture of the Waggle cyberinfrastructure can be best explained by doing a Google Maps style zoom-in of the architecture. We will start by understanding the infrastructure at the highest-level first, zooming into each component to understand how all the components work together.

## High-Level Infrastructure

![Figure 1: High-level Node & Beehive Relationship](./images/arch_high_01.svg)

The Waggle infrastucture is made up of 2 main components:
- the [Waggle Nodes](#wagglenodes) that exist at the edge
- the Waggle Cloud  (TODO: link to lower in this doc) that hosts services and storage systems to facilitates running [plugins](#plugin) @ the edge

Every edge node maintains connections to 2 core Waggle Cloud components: 1 to a [Beehive](#beehive) and 1 to a [Beekeeper](#beekeper)

### Beekeeper<a href="#beekeeper"></a>

The Beekeeper is an administrative server that allows system administrators to perform actions on the nodes such as gather health metrics, and perform software updates.  All Waggle nodes "phone home" to their Beekeeper and maintain this "life-line" connection.

> Details & source code: https://github.com/waggle-sensor/beekeeper

### Beehive<a href="#beehive"></a>

The Waggle node <-> Beehive connection is the pipeline for the science. It is over this connection that instructions for the node will be sent, in addition to how data is published into the Beehive storage systems from [plugins](#plugin) running on the nodes.

The overall Waggle infrastructure supports multiple Beehives, where each Waggle nodes is associated with a single Beehive. The set of nodes associated with a Beehive creates a "project" where each "project" is separate, having its own data store, web services, etc.

![Figure 2: Multiple Beehives](./images/arch_beehives_01.svg)

In the example in Figure 2, there are 2 Waggle nodes associated with Beehive 1, while a single Waggle node is associated with Beehive 2.  With all Waggle nodes, in this example, being administered by a single [Beekeeper](#beekeeper).

> _Note_: the example in Figure 2 shows a single Beekeeper, but a second Beekeeper could have been used for administrative isolation.

> Details & source code: https://github.com/waggle-sensor/waggle-beehive-v2

## Beehive Infrastructure

The Waggle Beehive infrastructure contains 2 main components:
- software services such as the [Edge Scheduler (ES)](#es), data APIs, and website hosting
- data storage systems such as the [Data Repository (DR)](#dr) and the [Edge Code Repository (ECR)](#ecr)

![Figure 3: Beehive High-level Architecture](./images/beehive_high_01.svg)

The Beehive is the “command center” for interacting with the Waggle nodes at the edge. Hosting websites and interfaces allowing scientists to create [“science goals”](#sciencegoals) to run [plugins](#plugins) at the edge & browse the data produced by those plugins.

![Figure 4: Beehive Infrastructure Details](./images/beehive_details_01.svg)

The software services and data storage systems are deployed within a [kubernetes](https://kubernetes.io/) environment to allow for easy administration and to support running in a multiple server architecture, supporting redundancy and service replication.

While the services running within Beehive are many, the following is an outline of the most vital.  Included in each of these services is both a graphical web interface in addition to [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) style API interfaces.

### Data Repository (DR)<a href="#dr"></a>

The Data Repository is the data store for housing all the edge produced data. It consists of different storage technologies (including [influxdb](https://www.influxdata.com/)) and techniques to store simple textual data (i.e. key-value pairs) in addition to larger blobular data (i.e. audio, images, video). In addition to storage of the data, the Data Repository 
an API interface for data access.

The data store is a time-series database of key-value pairs with each entry containing metadata about how and when the data originated on the edge. Included in this metadata is the data collection timestamp, plugin version used to collect the data, the node the plugin was run on, and the specific compute unit within the node that the plugin was running on.

```json
{
    "timestamp":"2022-06-10T22:37:47.369013647Z",
    "name":"iio.in_temp_input",
    "value":25050,
    "meta":{
        "host":"0000dca632ed6d06.ws-rpi",
        "job":"sage",
        "node":"000048b02d35a97c",
        "plugin":"plugin-iio:0.6.0",
        "sensor":"bme680",
        "task":"iio-rpi",
        "vsn":"W08C"
    }
}
```

In the above example, the value of `25050` was collected @ `2022-06-10T22:37:47.369013647Z` from the `bme680` sensor on node `000048b02d35a97c` via the `plugin-iio:0.6.0` plugin.

> _Note_: see the [Access and use data](https://docs.waggle-edge.ai/docs/tutorials/accessing-data) site for more details and data access examples.

> Details & source code: https://github.com/waggle-sensor/data-repository

### Edge Scheduler (ES)<a href="#es"></a>
TODO

> Details & source code: https://github.com/waggle-sensor/edge-scheduler

### Edge Code Repository (ECR)<a href="#ecr"></a>
TODO

for hosting edge plugins
is a Docker registry that the edge nodes pull from when running plugins at the edge

jenkins

> Details & source code: https://github.com/waggle-sensor/edge-code-repository


## Waggle Nodes<a href="#wagglenodes"></a>

The Waggle nodes are the edge computing component of the cyberinfrastructure.  All Waggle nodes consist of 3 items:
1. **Persisent storage** for housing downloaded plugins and caching published data before it is transferred to the node's Beehive
2. **CPU and GPU compute modules** where plugins are executed and perform their accelerated inferences
3. **Sensors** such as environment sensors, cameras and [LiDAR systems](https://en.wikipedia.org/wiki/Lidar)

![Figure 5: Waggle Node Overview](./images/node_overview_01.svg)

Waggle nodes enable "at the edge" fast computation, leveraging the large non-volatile storage to handle caching of high frequency data (including images, audio and video) in the event the node is "offline" from its Beehive.  Through expansion ports the nodes support the adding and removing of sensors to fully customize the node deployment for the particular deployment environment.

Overall, even though the nodes may use different CPU architectures and different sensor configurations, they all leverage the same [Waggle Edge Stack (WES)](#wes) to run plugins.

> Details & source code: https://github.com/waggle-sensor/wild-waggle-node

### Wild Waggle Node<a href="#wildnode"></a>

The Wild Waggle Node is a custom built weather-proof enclosure intended for remote outdoor installation. The node features software and hardware resilience via the [custom Waggle operating system](https://github.com/waggle-sensor/wildnode-image) and [custom Wagman circuit board](https://github.com/waggle-sensor/wagman). Internal to the node is a power supply and PoE network switch supporting the addition of sensors through standard Ethernet (POE), USB and other embedded protocols via the node expansion ports.

![Figure 6: Wild Waggle Node Overview](./images/node_wild_01.svg)

The unit consists of:
- NVidia Xavier NX ARM64 [Node Controller](https://github.com/waggle-sensor/nodecontroller-arm64) w/ 8GB of shared CPU/GPU RAM
- 1 TB of NVMe storage
- 4x PoE expansion ports
- 1x USB2 expansion port
- optional [Stevenson Shield](https://en.wikipedia.org/wiki/Stevenson_screen) housing a RPi 4 w/ environmental sensors & microphone
- optional 2nd NVidia Xavier NX ARM64 Edge Processor

> Manual: https://docs.waggle-edge.ai/docs/about/resources/wsn-manual

> Details & source code: https://github.com/waggle-sensor/wild-waggle-node

### Waggle Blade Node<a href="#nodeblade"></a>

The Waggle Blade Node is a standard commercially available server intended for us in a climate controlled machine room, or extended temperature range telecom-grade blades for harsher environments. The [AMD64 based Waggle operating system](https://github.com/waggle-sensor/blade-image) supports these types of nodes, enabling the services needed to support [WES](#wes).

![Figure 7: Waggle Blade Node Overview](./images/node_blade_01.svg)

The above diagram shows the basic configuration of a Waggle Blade Node:
- Multi-core ARM64 Node Controller
- 32GB of RAM
- Dedicated NVida T4 GPU
- 1 TB of SSD storage

> _Note_: it is possible to add the same optional [Stevenson Shield](https://en.wikipedia.org/wiki/Stevenson_screen) housing that is available to the [Wild Waggle Nodes](#wildnode)

> Details & source code: https://github.com/waggle-sensor/waggle-blade

## Running Applications @ the Edge

Included in the Waggle operating systems are the core components necessary to enable running plugins @ the edge.  At the heart of this is [k3s](https://k3s.io/), which creates a protected & isolated run-time environment. This environment combined with the tools and services provided by [WES](#wes) enable plugin access to the node's CPU, GPU, sensors and cameras.

### Waggle Edge Stack (WES)<a href="#wes"></a>

The Waggle Edge Stack is the set of core services running within the Node's [k3s](https://k3s.io/) run-time environment that supports all the features that plugins need to run on the Waggle nodes. The WES services coordinate with the core [Beehive](#beehive) services to download & run scheduled plugins (including load balancing) and facilitate uploading plugin published data to the Beehive [data repository](#dr). Through abstraction technologies and WES provided tools, plugins have access to sensor and camera data.

![Figure 8: Waggle Edge Stack Overview](./images/wes_overview_01.svg)

The above diagram demonstrates 2 plugins running on a Waggle node.  Plugin 1 ("neon-kafka") is an example plugin that is running alongside Plugin 2 ("data-smooth"). In this example, "neon-kafka" (via the WES tools) is reading metrics from the node's sensors and then publishing that data within the WES run-time environment (internal to the node). 
At the same time, the "data-smooth" plugin is subscribing to this data stream, performing some sort of inference and then publishing the inference results (via WES tools) to Beehive.

> _Note_: see [Developing new edge applications](https://docs.waggle-edge.ai/docs/tutorials/compute-at-edge#developing-new-edge-applications) for a guide on how to create a Waggle plugin.

> Details & source code: https://github.com/waggle-sensor/waggle-edge-stack

### What is a plugin<a href="#plugin"></a>
TODO

- links ot [how to create plugins](https://docs.waggle-edge.ai/docs/tutorials/compute-at-edge)
- links to ECR portal in github
- link to example Sage app store

#### Science Goals<a href="#sciencegoals"></a>
TODO

- links to [how to schedule a plugin for deployment](https://docs.waggle-edge.ai/docs/tutorials/compute-at-edge#schedule-plugin-for-deployment)

Wip