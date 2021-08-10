---
sidebar_position: 2
---

# Compute at the Edge

Sage nodes run edge applications (i.e. __plugins__) to process data. A plugin is a self-contained program which typically reads sensors, audio or video data, does some processing and then publishes information derived from that data.

The most basic example of a plugin is one which reads and publishes a value from a sensor. A more complex plugin could publish the number of birds in a scene using a deep learning model.

![Basic Plugin](./images/plugin-basic.svg)

Plugins fit into the wider Sage infrastructure by being added to the [Edge Code Repository](https://portal.sagecontinuum.org), deployed to nodes and publishing data to our Sage Data Repository.

![Plugins in Sage](./images/plugin-sage.svg)

## Writing a new plugin

Writing a new plugins typically consists of the following steps:

1. Write a plugin.
2. Submit a plugin to the [Edge Code Repository](https://portal.sagecontinuum.org).
3. Schedule a plugin for deployment.

We'll cover each of these in the following sections.

### 1. Write a plugin

We provide a Python SDK called [pywaggle](https://github.com/waggle-sensor/pywaggle) to help develop plugins for Sage. Please refer to pywaggle's [usage guide](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md) on how to get started.

### 2. Submit a plugin to ECR

TODO

### 3. Schedule a plugin for deployment

TODO
