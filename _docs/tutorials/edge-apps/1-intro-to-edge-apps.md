---
sidebar_position: 1
---

# Part 1: Intro to edge apps

## What are edge apps?

Edge apps are programs which read data (ex. sensors, audio, video), process it and then publish information derived from that data.

A basic example of an app is one which reads and publishes a value from a sensor every minute. A more complex example could publish the number of birds in a scene using a deep learning model.

![Basic App](./images/plugin-basic.svg)

Edge apps are composed of code, dependencies and models which are packaged so they can be scheduled on Waggle nodes. At a high level, the typical app lifecycle is:

![Running App](./images/plugin-run.svg)

## Exploring existing edge apps

One of the major goals of Waggle is to provide the science community with a diverse catalog of edge apps to enable the sharing of new research. This catalog is maintained as part of the [Edge Code Repository](https://portal.sagecontinuum.org) where you can find more background information and links to their source repos.

We encourage users to explore the [ECR](/docs/about/architecture#edge-code-repository-ecr) to get familiar with existing apps as well a references if you develop your own edge app.

## Next steps

If this sounds exciting and you'd like to write you own edge app, please continue to [part 2](creating-an-edge-app)!
