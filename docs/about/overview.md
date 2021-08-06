---
sidebar_label: Overview
sidebar_position: 1
---

# Sage: A distributed software-defined sensor network.

## What is Sage?
The [Sage project](https://sagecontinuum.org/) will design and build a new kind of national-scale reusable cyberinfrastructure to enable AI at the edge.

Geographically distributed sensor systems that include cameras, microphones, and weather and air quality stations can generate such large volumes of data that fast and efficient analysis is best performed by an embedded computer connected directly to the sensor. Sage will explore new techniques for applying machine learning algorithms to data from such intelligent sensors and then build reusable software that can run programs within the embedded computer and transmit the results over the network to central computer servers. Distributed, intelligent sensor networks that can collect and analyze data are essential for scientists seeking to understand the impacts of global urbanization, natural disasters such as flooding and wildfires, and climate change on natural ecosystems and city infrastructure.

Sage will deploy sensor nodes that support machine learning frameworks in environmental testbeds in California, Colorado, and Kansas and in urban environments in Illinois and Texas. The reusable cyberinfrastructure running on these testbeds will give climate, traffic, and ecosystem scientists new data for building models to study these coupled systems. The software components developed in Sage will be open source and provide an open architecture that will enable scientists from a wide range of fields to build their own intelligent sensor networks.

Partners will deploy Sage testbeds in Australia, Japan, UK, and Taiwan, providing scientists with even more data for analysis. The toolkit will also extend the current educational curriculum used in Chicago and will inspire young people – with an emphasis on women and minorities, to pursue science, technology, and mathematics careers – by providing a platform for students to explore measurement-based science questions related to the natural and built environments.

Sage will develop open source computer code and provide open hardware design documents.  The data from sensors will also be hosted in the cloud to facilitate easy data analysis.

The Sage project draws a lot of software and hardware from the [Waggle AI@Edge](https://github.com/waggle-sensor/waggle) platform.

## Who are the users of Sage?

While anyone can be a student of Sage the most frequent users will be:

- Domain Scientist interested in developing edge AI applications
- Users Interested in Sage Datasets
- Cyber-infrastructure researchers interested in platform research
- Domain Scientist interest in adding new sensors, and deploying Sage nodes to answer specific science questions

## How do I use Sage?

With a basic understanding of what the [Sage project](https://sagecontinuum.org/) is, the next question is how does Sage work and how can I use Sage? This depends on your desired interaction interest. 

Sage in it's simpliest form consists of edge compute applications with access to sensor (ex. camera) data. These edge applications then produce their own data (ex. inferances) and upload the results to a cloud database. This cloud database can be accessed directly and/or additional compute can be performed on the cloud data. 

![Sage User Interaction](./images/SAGE_Interact.png)

The entry-point into learning about your interaction with Sage can be best directed by getting answers (by following the links) to the question(s) you are most interested in.

[How do I integrate my sensor?](../tutorials/integrate-a-sensor.md)
- Do you have a new sensor that you want to write an edge application for?
- Want to learn about the sensors that Sage already supports?

[How do I compute at the edge?](../tutorials/compute-at-edge.md)
- Want to know to create an edge compute application?
- Want to know how your edge application can get access to edge sensor data?
- Want to share my edge compute data with other edge applictions?
- Want to know how to upload data it to the cloud?

[How do I access and use data?](../tutorials/accessing-data.md)
- Want to learn about how Sage data is stored/organized?
- Do you have data that is up in the cloud and want to know how to access it?

[How do I compute in the cloud?](../tutorials/cloud-compute.md)
- Want to know how to autonmously react to edge produced data?
- Want to know how to trigger an HPC event?
- Want to get a text message when your edge application does something cool?

## How is the Sage cyber-infrastructure architected?

If you are interested in learning more about how the Sage Cyber-infrastructure works you can head on over to the [Sage Architecture Overview](./arch-overview.md).
