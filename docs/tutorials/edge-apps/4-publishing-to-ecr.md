---
sidebar_position: 4
---

# Part 4: Publishing to ECR

Now that we've finish [preparing our code](creating-an-edge-app) and [testing it](testing-an-edge-app), we're ready to publish it to the [Edge Code Repository](https://portal.sagecontinuum.org).

The following steps are required to submit a plugin to ECR.

1. Create a repo for plugin and add required packaging files. (See [pywaggle guide](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#adding-hello-world-plugin-packaging-info) for details.)
2. Go to [Edge Code Repository](https://portal.sagecontinuum.org).
3. Go to "Sign In" and follow the instructions.
4. Go to "My Apps".
5. Go to "Create app" and follow the instructions.

If everything is successful, your plugin will appeared and be marked as "Built".

<!--
## Schedule plugin for deployment

_TODO This is work in progress! We will update this section once the scheduler is public._

## Access plugin data

Once a plugin has been deployed to node(s) and is publishing data, you can [access the published data](../accessing-data) in the Data Repository.
-->
