---
sidebar_label: pluginctl
sidebar_position: 1
---

# pluginctl: a tool to develop and test plugins on a node
We developed the tool `pluginctl` to help end users develop and test their edge application (i.e., plugin) on a node before registering the plugin in [Edge code repository](../about/architecture.md#edge-code-repository-ecr). The tool helps on simplifying the process of testing the edge code and making changes as needed for development, by buildig the code into a container, running the container inside the node, and checking the result from the container.

All of Waggle nodes have the tool already installed. For plugin developers who have access to nodes, they can simply type the following to start with once they are logged into a node,
```bash
sudo pluginctl
```

The in-depth tutorials on the functionalities that `pluginctl` offers can be found in the [README](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/pluginctl#readme).