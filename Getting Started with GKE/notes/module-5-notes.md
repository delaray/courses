# Getting Started with Google Kubernetes Engine 

# Module 5: Kubernetes Operations


## Introduction


kubectl
- How does it work
- Does it need special configuation
- How can it be used to gather information

## The kubectl command

- kubectl is a command line utility to interact with Kubernetes clusters
- Used by administrators to manage cluster
- kubectl transforms CLI commands into API calls
- needs to be configured with location and credentials of a cluster
- configuration strored in $HOME/.kube/config
  - contains list of clusters
  - credentials mfor each cluster
  - GKE provides credentialsa through the gcloud command
  
- kubectl get pods

- kubectl
  - Can't create new clusters
  - Can't change shape of existing clusters
  - Done through the GKE Control Plane
  

## Introspection

- Introspection: Act of gathereing informnation about cluster, pods or environment

- Commnads
  - kubectl get pods
    - Status: Pending, Running, Succeeded, FGailed, Unknown, CrashLoopBackOff
	- Pending: Scheddduled but not yet running
	- Running: 
	- Succeeded:
	- Failed: Container faileddd and cannot be restarted
	- Unknown: No information can be retrieved
	- CrashLoopBackOff: Some container exited unexpectedly even after restart
	
  - kubectl describe pod
  
  - kubectl exec -i
	
	


## Lab Intro: Deploying GKE Autopilot from Cloud Shell

## Lab : Deploying GKE Autopilot from Cloud Shell

## Quiz

