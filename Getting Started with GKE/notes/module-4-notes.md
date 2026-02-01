# Getting Started with Google Kubernetes Engine 

# Module 4: Kubernetes Architecture


## Introduction

## Kubernetes Concepts

- Kubernetes Object Model
  - Desired State
  - Current State
  
## Kubernetes Components

- 1 Computer: Control Plane
- 2. Remaining: Nodes

GKE Autopilot & GKE Standard 

- Autopilot
  - Fully managed servicer
  - Strong security Postuire
    - Secures cluster nodes and infrastructure
	- Eliminates infrastructure security tasks
	- Reduces cluster attack surface
	- Reduces ongoing config mistakes
	
GKE Config Options
- More restrictive
- Clusters have restrictions on node object access
- Noi SSH
- No Priviledge escalation
- Limitations on node affinity and host access
- Class Qualikty of Service (QOS)


## Object Management
- Unique name & identifier
- Define configuartions in manifest files
  - Required fields: apiVersion, kind, metdata
- Save yaml files in version control

Object Properties
- Object names: 253 chars or less: Numbers, letyters, periods, hyphens
- Names are unique to namesdapces

- Object have unique identifiers

- Labels: Key/Value pairs for organziation
- Labels can be used in Kubectl

Object Controller
- CCCan declare an object controller to manage pods
- Controller's job is to manage state of the pods
- Pod examples
  - Deployments
  - StatefulSets
  - DaemonSets
  - Jobs

- Controller recongnizes changes between desired and actual
