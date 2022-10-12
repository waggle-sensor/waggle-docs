---
sidebar_position: 2
---

# Submit your job

Are you ready to deploy your plugins to measure the world? We will use [edge scheduler](../about/architecture.md#edge-scheduler-es) to submit a job to demonstrate how you can deploy plugins to field-deployed Waggle nodes. 

:::caution
If you have not created your account, please go to [access.sagecontinuum.org](https://access.sagecontinuum.org) and log in to create a new account with your email. Once logged in, you will be able to create and edit your jobs, but will need a permission to submit jobs to the scheduler. Please [contact-us](../contact-us.md) to request the job submission permission.
:::

Jobs are an instance of a science goal. They detail what needs to be accomplished on Waggle nodes. A science goal may have multiple jobs to fill the missing data to answer scientific questions of the goal. A job describes,
- [plugins](../about/architecture.md#what-is-a-plugin) that are registered and built in [edge code repository](../about/architecture.md#edge-code-repository-ecr) with specification including any plugin arguments,
- a list of Waggle nodes on which the plugins will be scheduled and run,
- science rules describing when the plugins should be scheduled,
- conditions to determine when the job completes

Creating and submitting jobs are an important step for successful science mission using Waggle nodes.

## Create a job

We create a job file in YAML format (JSON format is also supported. Please check out [details of job attributes](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl).)

```bash
cat << EOF > myjob.yaml
---
name: myjob
plugins:
- name: image-sampler
  pluginSpec:
    image: registry.sagecontinuum.org/theone/imagesampler:0.3.0
    args:
    - -stream
    - bottom
nodes:
  W030:
scienceRules:
- "image-sampler: cronjob('image-sampler', '* * * * *')"
successcriteria:
- WallClock(1d)
EOF
```

In this example, we want to run a plugin named `image-sampler` to collect an image from the camera named `bottom` on `W030` node. As a result of the job execution, we will get images from the node's camera. The job also specifies that the plugin needs to be scheduled every minute (i.e., `* * * * *` in [crontab expression](https://crontab.guru/)). The job completes 24 hours after the job started to run on the node.

## Upload your job to the scheduler

`sesctl` is a command-line tool to manage jobs in the scheduler. You can download the latest version from our [Github repository](https://github.com/waggle-sensor/edge-scheduler/releases). Please make sure you download the tool supported for your machine. For example, on your desktop or laptop you would download amd64 version of the tool.

:::note
Users will need a token provided from [the access page](https://access.sagecontinuum.org). Click `View token` to receive your token. Then, replace the `<<user token>>` below with the received token.
:::

```bash
export SES_HOST=https://es.sagecontinuum.org
export SES_USER_TOKEN=<<user token>>
sesctl ping
{
 "id": "Cloud Scheduler (cloudscheduler-sage)",
 "version": "0.16.7"
}
```

To create a job using the job file,

```bash
sesctl create --file-path myjob.yaml
{
 "job_id": "56",
 "job_name": "myjob",
 "status": "Created"
}
```

To verify that we have uploaded the job,

```bash
sesctl stat
JOB_ID  NAME                         USER       STATUS     AGE     
====================================================================
...
56      myjob                        theone     Created    - 
...
```

## Submit the job

To submit the job,

```bash
sesctl submit --job-id 56
{
 "job_id": "56",
 "status": "Submitted"
}
```

:::note
You may receive a list of errors from the scheduler if the job cannot be validated. For instance, your account may not have scheduling permission on the node `W030`. Please consult with us for any error, especially errors related to scheduling permission on nodes in the job.
:::

## Check status of job

```bash
sesctl stat --job 56
===== JOB STATUS =====
Job ID: 56
Job Name: myjob
Job Owner: 
Job Status: Submitted
Job Starttime: 2022-10-10 02:21:37.373437 +0000 UTC

===== SCHEDULING DETAILS =====
Science Goal ID: 45afe963-5b8b-4e15-654c-54e2946f2ddb
Total number of nodes 1
```

The job status can be also shown in [job status page](https://portal.sagecontinuum.org/job-status).

## [Access to data](./access-waggle-sensors.md)

A few minutes later, the `W030` Waggle node would start collecting images by scheduling the plugin on the node. Collected images are transferred to [Beehive](../about/architecture.md#beehive) for users to download.

```console
curl -H 'Content-Type: application/json' https://data.sagecontinuum.org/api/v1/query -d '
{
    "start": "-5m",
    "filter": {
        "task": "image-sampler",
        "vsn": "W030",
        "name": "upload",
    }
}
'
```

## More tutorials using _sesctl_

More tutorials can be found in our [Github repository](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl).