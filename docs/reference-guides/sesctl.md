---
sidebar_label: sesctl
sidebar_position: 2
---

# sesctl: a tool to schedule jobs in Waggle edge computing
The tool `sesctl` is a command-line tool that communicates with an [Edge scheduler](../about/architecture.md#edge-scheduler-es) in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool. 

## Installation
The tool can be downloaded from the [edge scheduler repository](https://github.com/waggle-sensor/edge-scheduler/releases) and be run on person's desktop or laptop.

:::note
Please make sure to download the correct version of the tool based on the system architecture. For example, if you run it on a Mac download `sesctl-darwin-amd64`.
:::


```bash
chmod +x sesctl-<system>-<arch>
ln sesctl-<system>-<arch> sesctl
sesctl
```

## Submit a job
You can follow the [tutorial](../tutorials/schedule-jobs.md) to submit an example job to understand how to design your own job.

## For more tutorials
The in-depth tutorials on the functionalities that `sesctl` offers can be found in the [README](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl#readme).