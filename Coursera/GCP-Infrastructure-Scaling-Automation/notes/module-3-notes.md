# GCP Infrastructure Scaling & Automation


# Module 3: Load Balancing

## Module Overview

## Managed Instance Groups

## Autoscaling & Heath Checks

- Dynamically add/remove instances
  - Increase in load
  - Decrease in load
  
- Autoscaling Policy
  - CPU Utilization
  - Load balancing capacity
  - Monitoring metricsa
  - Queue-based workload
  - Schedule based
  
- VM Graph helps set CPU utilization

- Create a health check

- Configuring stateful IP adedresses

## Overview of Application Load Balancing

- Layer 7 of OSI model.
- Deals with content
- Distributes https traffic to BEs hosted on different GCP plat6forms
  - Compute Engine
  - GKE
  - Cloud Storage
  - Cloud Run
  - External BE connected over internet / hybrid connectivity

Deployment modees
- External
- Internal

External Applicate Load Balancers Deployments
- Using GFE or Proxies
- Use DFE distributed globally
- Use open-source ENVOY software
  - global
  - regional
  - classic

- Use IP address & port to connect to Load Balancer
- URL Map to make traffic routing decisions
- Can Authenticate using SSL certificate
- Uses BE service/bucket

Backend Services
- One or mor BE must be connected to load balancer
- Uses a round-robin to distribute traffic
  - Can be overwritten with **session affinity**
  
- Fixed Time-out setting (30-sec default)
- Can have One or more backends
  - **instance group**: Mamaged or Unmanaged
  - **balancingg mode**: tells load balancer when overwhelmed
	- cpu utilization
	- requests per second
  - **capacity scaler**: additional capability to balancing mode
- Changes to BE services are not instantaneous
  - can take several minute to reconfigure balancing mode, etc..
  


## Example: Application Load Balancing

- Example: Cross-Regional load balancing
- Example" Content-based load balancing


## Application Load Balancing

- Difference between http & https

HTTPS
- Target HTTPS proxy
- One signed SSL certificate4 installed
- Client SSL session terminates at load balancer
- Support QIC transport layer protocol

SSL Certificates (only used with LB proxies)
- Required for Application Load Balancing
- Up to 15 SSL certificatres (per target proxy)
- Create an SSL certificate resource

Backend Buckets

- Load Balancer Proxy uses a URL Map to direct traffric to
  - BE Service (e.g. for dynamic content)
  - BE Bucket (e.g,. static content)


Network Endpoint Groups (NEG)

- A Configurationn object
- Specifies a group of BE endpoints or services
- Common use-case is deploying services in containers


Four Types of NEGs
- Zonal (VMs with either IP or IP/Port
- Internet: Single EP outside of GCP
- Hybrid Connectivity points to Taffic Controler outside of GCP
- Serverless: Cloud Run, App Engine, Cloud Run function services


## Cloud CDN (Content Delivery Network)

- Uses Googles Edge Points of Presence (over 90 sites)
- Can be used to cache load balanced contents
- Can enable with a checkbox when creating BE service.
- Can reduce serving costs
- Cloud CDN Response Flow
- Each request is logged as well as
  - cache hits
  - cache misses

Cache Modes
- Control the factors that determine caching
- Cloud CDN offers 3 cache modes
  - USE_ORIGIN_HEADERS
  - CACHE_ALL_STATIC
  - FORCE_CACHE_ALL
  
## Network Load Balancing

- Layer 4 load balancers
- Architecture
  - Proxy
    - use for reverse-proxy
	- on-premise or cloud
  - Passthrough
    - preserves source packet ip address
- Traffic
  - TCP/SSL ports
  - UDP, ESP, GRE
  - ICMP, ICMPv6
  
Architecture of a Proxy Network Load Balancer
- Can be deployed externally or internally
- External Proxy Network Load Balancers
  - Are Layer 4 load balancers
  - Distribute traffic from internet to your backends
  - LBs are built on GFE, or Envoy proxies
  - Deployeed in modes: Global, Regional or Classic

- Proxy network load balancers
  - Intended for TCP or SSL traffic only
  - Can handle both HTTP and HTTPS
- For SSL traffic better to use an External Application Load Balancer

Architecture of a Passthrough Network Load Balancer
- Are Layer 4, regional load balancers
- Distribute traffic among BE's in same region as the LB
- Implemented using Andromeda Virtual Networking & Google Maglev
- Maglev: Fast & reliable softweare network load balancer
- These LBs are **not** proxies.
- Load balanced packets are received by BE VMs with:
  - Packet source & destination
  - IP addresses
  - Protocol and if port-based the source & destination ports unchanged
  - LB connections are terminated at the BE
  - Responses from BE VMs go directly to the client
    - Known as **direct server return** (DSR)
  - Deployed in two modes: External & Internal
  - External LBs are buiult on Maglev
  - BEs for passthrough NLBs Can be deployed using a BE service or a target pool. 
  
Backend service-based architecture
- Reghional be service
- Defines behavior of the lb and how it distributes traffic
- Support for IPv$ and IPv6 traffic
- Multiple protocols

- ENVOY proxy-based regionaL Lasyer 7 Internal regional LBs.
  - Supports regional VMs but can be configured for Global
  


## Internal Application Load Balancers

Deployment modes

- Regional Internal
  - Managed service enabled with open-source ENVOY proxy
  - Automatically creates ENVOY proxies
  
- Cross-region Internal
  - Allows traffic to fall through to a different region

- Optimize traffic distribution within VPC network

Internal Passthrough  Network Load Balancers
  - Regional private load balancing
    -VM instances in same region
	- RFC 1918 IP addresses
  - TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH anhd GRE traffic
- Reduced latency, simpler configuration

 Software-defined, Fully Distributed Load Balancing
 - Uses a lightweight Software LB built on top of Andromeda
 - Andromeda: Google's Network Virtualization stack
 - Directly delivers traffic from client to BE instance

Internal Proxy Network Load Balancers
- Proxy-based Load Balancers
	- Balace traffic within a VPC network
- Regsional or cross-regional
	- Software-defined fully distributed load balancing
- Uses a lightweight Software LB built on top of Andromeda
	- Layer 4 load balancer
- Terminate the connection between Client & Envoy proxy
	- Then opens connection between proxy & BE service
- Implemented as a managed service

Internal Load Balancing supports 3-Tier Web services Model

## Choosing a Load Balancer

- Firsdt determine traffic type that LB needs to manage

- In general choose Application load balancer for http traffic

- mChoose Proxy
  - TLS offload
  - TCP proxy
  - For external LB to backends in multiple regions
  

- Chyoose Passthrough
  - Preserve client IP
  - Avoid overhead of proxies
  - Support additional protocols
  
- Further narrow chyoices based on
  - Application is
    - External
	- Internet facing
	- Internal
  - Whether you need backends deployed
    - globally or
	- regionally.
	
	
