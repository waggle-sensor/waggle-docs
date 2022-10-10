---
sidebar_position: 5
---

# Submit your job

Are you ready to deploy your plugins to measure the world? We will use [edge scheduler](../about/architecture.md#edge-scheduler-es) to submit a job to demonstrate how you can deploy plugins to field-deployed Waggle nodes.

:::caution
If you have not created your account, please go to [here](https://access.sagecontinuum.org) and log in to create a new account with your email. Once logged in, you will be able to create and edit your jobs, but will need a permission to submit jobs to the scheduler. Please contact us at [contact-us](../contact-us.md) to request the permission for job submission.
:::

A job describes,
- plugins that are registered and built in [edge code repository](../about/architecture.md#edge-code-repository-ecr) with specification including any plugin arguments,
- a list of Waggle nodes on which the plugins will be run,
- science rules describing when the plugins should be scheduled,
- conditions to determine when the job completes

## Create a job

We create a job in YAML format (JSON format is also supported. Please check out details of job attributes [here](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl).)

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

We attempt to run a plugin named `image-sampler` to collect an image from the camera named `bottom` on `W030` node. As a result of the run, we will get images from the job. The job also specifies that the plugin needs to be scheduled every minute (i.e., `* * * * *` in [crontab expression](https://crontab.guru/)). The job completes 24 hours after the job started to run on the node.

## Submit the job using _sesctl_

`sesctl` is a command-line tool to manage jobs exist in the scheduler.

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

To submit the job,

```bash
sesctl submit --file-path myjob.yaml
{
 "job_id": "56",
 "status": "Submitted"
}
```

:::note
If you receive any error related to permission on nodes or scheduling, please contact us.
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

## Access to data

A few minutes later, the `W030` Waggle node would start collecting images by scheduling the plugin on the node. 

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