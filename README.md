# Zenaton examples for Node.js
This repository contains examples of workflows built with Zenaton. These examples illustrates how Zenaton orchestrates tasks that are executed on different workers.

## Installation
Download this repo
```
git clone https://github.com/zenaton/examples-node.git
```
and install dependencies
```
cd examples-node; npm install
```
then add an .env file
```
cp -n .env.example .env
```
and populate it with your application id and api token found [here](https://zenaton.com/app/api).

Then, you need to install a Zenaton worker
```
curl https://install.zenaton.com | sh
```
and start it, and make it listen to your configuration:
```
zenaton start; zenaton listen --env=.env --boot=boot.js
```
Your all set!


*Your workflows will be processed by your worker, so you won't see anything except the stdout and stderr, respectively `zenaton.out` and `zenaton.err`. Look at these files :)*

## Example 1 : Sequential tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/SequentialWorkflow.js) showcases
- a sequential execution of two tasks. The second task is executed only when the first one is processed.
- In a sequential task execution, you can get the output of a task. The result of the first task can be used by the second one.

<p align="center">
    <img src="support/sequential_workflow.png" alt="Sequential Workflow Diagram" />
</p>

```node
node launch_sequential.js
```

## Example 2: Parallel tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/ParallelWorkflow.js) showcases
- a parallel execution of 2 tasks
- a third task that is executed only after *both* first two tasks were processed

<p align="center">
    <img src="support/parallel_workflow.png" alt="Parallel Workflow Diagram" />
</p>

```node
node launch_parallel.js
```

## Example 3: Asynchronous tasks execution
[this example](https://github.com/zenaton/examples-node/tree/master/Workflows/AsynchronousWorkflow.js) showcases
- An asynchronous execution of a task A (fire and forget)
- Then a sequential execution of Task B

<p align="center">
    <img src="support/asynchronous_workflow.png" alt="Asynchronous Workflow Diagram" />
</p>

```node
node launch_asynchronous.js
```

When a task is dispatched asynchronously, the workflow continues its execution without waiting for the task completion. Consequently, a task asynchronous dispatching always returns a null value.

## Example 4: Event
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/EventWorkflow.js) showcases
- how to change a workflow's behaviour based on an external event

<p align="center">
    <img src="support/event_workflow.png" alt="Event Workflow Diagram" />
</p>

```node
node launch_event.js
```

## Example 5: Wait
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/WaitWorkflow.js) showcases
- how the provided `Wait` task can be used to pause the workflow for a specified duration

<p align="center">
    <img src="support/wait_workflow.png" alt="Wait Workflow Diagram" />
</p>

```node
node launch_wait.js
```

## Example 6: Wait Event
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/WaitEventWorkflow.js) showcases
- how the provided `Wait` task can also be used to pause the workflow up to receiving a specific external event

<p align="center">
    <img src="support/waitEvent_workflow.png" alt="WaitEvent Workflow Diagram" />
</p>

```node
node launch_wait_event.js
```

## Example 7: Recursive Workflow
[This example](https://github.com/zenaton/examples-node/tree/master/Recursive) showcases
- how launching events or workflows directly from orchestrated tasks allows you to schedule recurring workflows

```node
node launch_recursive.js
```

## Example 8: Workflow Versions
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/VersionWorkflow.js) showcases
- how to update your workflow implementation, even while previous versions are still running

```node
node launch_version.js
```
