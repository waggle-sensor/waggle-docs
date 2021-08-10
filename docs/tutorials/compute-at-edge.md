---
sidebar_position: 2
---

# Compute at the Edge

## Introduction to edge applications

Sage nodes run edge applications (i.e. __plugins__) to process data. A plugin is a self-contained program which typically reads sensors, audio or video data, does some processing and then publishes information derived from that data.

The most basic example of a plugin is one which reads and publishes a value from a sensor. A more complex plugin could publish the number of birds in a scene using a deep learning model.

![Basic Plugin](./images/plugin-basic.svg)

Plugins fit into the wider Sage infrastructure by being added to the [Edge Code Repository](https://portal.sagecontinuum.org), deployed to nodes and publishing data to our Sage Data Repository.

![Plugins in Sage](./images/plugin-sage.svg)

## Developing new edge applications

Writing a new edge applications (i.e. __plugin__) typically consists of the following steps:

1. Write plugin code.
2. Submit plugin code to the [Edge Code Repository](https://portal.sagecontinuum.org).
3. Schedule a plugin for deployment.

We'll cover each of these in the following sections.

### Write plugin code.

We provide a Python SDK called [pywaggle](https://github.com/waggle-sensor/pywaggle) to help develop plugins for Sage. Please refer to pywaggle's [usage guide](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md) on how to get started.

### Submit a plugin code to ECR

We require plugins to be submitted to the [Edge Code Repository](https://portal.sagecontinuum.org) to be built and tested to validate that they are ready to be scheduled on nodes.

_TODO Describe a plugin's sage.yaml and Dockerfile._

In order to submit a plugin:

1. Go to [Edge Code Repository](https://portal.sagecontinuum.org).
2. Go to "Sign In" and follow the instructions.
3. Go to "My Apps".
4. Go to "Create app" and follow the instructions.

If everything is successful, your plugin will appeared and be marked as "Built".

### Schedule a plugin for deployment

_TODO Tie in with Yongho's scheduling doc._
