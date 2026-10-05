# Getting Started with Google Kubernetes Engine 

# Module 3: Introduction to Containers & Kubernetes

## Introduction

- Containers
- Container Images
- Kubernetes
- GKE
- Hands on with Cloud Build

## Containers

- Original only had Physical Computers
  - Scaling handled horizontally with more computers
  - Huge waste of hardware resources
- Then came virtualization
  - Allowed running multiple virtual servers on one physical device
  - Hardware + Hyperviser
  - Issues: Multiple apps share resources and dependencies
- Then can run a dedicated VM for each application under single hypervisor
- Containers
  - Isolated user spaces for running applications
  - Application code
  - Dependencies
  
- Containers are appealing
  - Code-centric way to deliver high-performance scalable apps
  - Provide access to reliable hardware
  - Code runs locally or in production
  - Make it easier to use microservices design pattern
  
- Applications and dependencies are called images
- A container is a running instance of an image

- Docker
  - Can create and run applications in containers
  - No way to orchestrate applications at scale
  
	

## Container Images

- Linux processes
- Linux namespaces
- Linux cgroups
- Union File System

- Each command in a dockerfile creates a leyer

- Dockerfile
	- FROM statement create a base layer from a public repository
	- COPY commands determines whaty files are in the app
	- RUN command builds the application
	- CMD command specifies the ventry point when container is run
	
- Layers should be organzied from least likely to change to most likely to change
	
- Base Image
  - Google maintains Artifaqct Registry at pkg.dev
  - Contains public open-source images
  - Container Images alsao available
    - Docker Hub Registry
	- GitLab
	
- Cloud Build
  - Managed service for building containers
  - Integrated with Cloud IAM
  - Designed to retrieve source code from different code repositories
    - Cloud Source Repositories
	- GitHub
	- BitBucket
	
- Generating Images with Cloub Build Steps
  - Fetch Dependenciessss
  - Compiloe source code
  


## LAB Introduction: Working with Cloud Build

- Use Cloud Build to build an image
- Upload the image Google Cloud Registry

## LAB: Working with Cloud Build

Project: qwiklabs-gcp-02-addd1bc69296

## Kubernetes

- Kubernetes is an oppn-source platform for managing containerised workloads and services
- Facilitatesssss multiple container orchestration and scale them as microservices
- Kubernetes is a set of APIs to deploy containers on a set of nodes called a cluster
- Kuberne4tes is divided intyo
  - A set of primary components that run as the control plane
  - A set of nodes that run containers
- Can describe a set of apps and how thery should interact

- Supports declarative configuaration
- Supports imperative configuaration

- Kubernetes Features
  - Suppoorst stateless apps
  - Supports stateful apps
  - Autoscales containerised apps
  - Allows resource request levels
  - Allows resource limits
  - Is extensible
  - Open source and portable
  

## Google Kubernetes Engine

- Managed Kubernetes Engine
- GKE is fully managed
- Offers GKE Autopilot
- Start of by setting up a cluster
- VMs in a cluster are called nodes
- Has a node autorepair feature
- GKE supports scaling the cluster itself
- GCP Observability provides insights on performance
- Virtual Private Clouds provides network infrastructure
  - Includes load-balancing and ingress access for the cluster
- GCP Copnsole provides insights into GKE Clusters
- Open-source Kubernetes provides dashboard
  - A lot of work to set it up
  -    GCP Console is easier
  


## Quiz

100%
