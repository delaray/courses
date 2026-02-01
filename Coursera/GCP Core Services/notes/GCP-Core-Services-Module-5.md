# Module 4: Resource Monitoring

## Module Overview

Resource Monitoring
GCP Observability:  Loggiong, Monitoring, and Diagnosatiocs

## GCP Observability Overview

GCP Observability includes Followwing products
- Monitoring
- Logging
- Error Reporting
- Trace
- Profiler

Only pay for what you use


## Monitoring

- Site reliabbility engineering
  - Dynamic and intelligent defaults
  - Platfrorm, systedm and appliction metrics
  - Uptime/health checks
  - Dashboards
  - Alerts
  
A **metrics scope** is the root entity
  - holds monitoring informnation
  - holds configuration information
  - hold 1 - 375 projects
  - contains dashboard
  - can access metrics data from projects

First project in metrics scope called the Scoping Project
Scoping Project must be specified
Name of the metrics scope is the name of the first project

All users that have access vto GCP Observability for a metric scope
- Have access to asll data by default
- Consider placing different projects in different metric scopes

- Dahboards visualize utilization asnd network traffic
- Allerting policies can notify you of cedrtain conditions

Best practices when creating alert policies
- Alert on sdypmtons rather than causes
  - E.g. Monitor failing queries and then identify if DB down
- Use multiple notification chanels: email, sms...
- Customizing alerts to indicate actions and resources to be examined
  - Create alerts so that they actionable
  - Don't create alerts on everything
  
- Uptime checks test availability of public services

- Monitoring Data can originate at a numbedr of different places
  - Ops Agent gathers system and application metrics from **VM Instances**
  - Ops Agent sends metrics to Monitoring
  - Ops Agent cllects metrics inside
  - Hypoervisor cannnot access VM internals
  
Can create **custom metrics** if Observability metrics insufficient
- For example can pass number of users of a game app directly to Clodu Monitoring

Can autoscale to maintaion a metric at target value

MIG = Mangaed Instance Group 

## Lab Intro: Resource Monitoring

## Lab: Resource Monitoring

## Logging

Fuilly managed service
Interface: Logs Explorer
Retained for 30 days
Can export to storage
Exported logs can be visualize in BiogQury or Looker Studio
Can export logs to Pub/Sub as well



## Error Reporting

- Error notificatyions
- Error dashboard
- Available: App Enmgine,

## Tracing

Cloud Trace
- Distributed tracing system
- Displays data in near real-time
- Latency Reporting
- Per-URL latency sampling

Collects Latency Data
- App Engine
- Global external App Load balancers
- Applications instrumented with Cloud Trace SDKs

## Profiling

- Continuopusly analyzes CPU performance or meemory-intensive functions
- Uses statistical techniques and low-impact instrumentation
- Runs across all production instances
- Java, Go, Node.js, Python


## Partner Integrations

- Rich 

## Quiz

## Module Review

## Course Review

