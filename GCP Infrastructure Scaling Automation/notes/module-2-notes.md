# GCP Infrastructure Scaling & Automation

# Module 2: Interconnecting Networks

## Module Overview

- Cloud VPN
- Cloud Interconnhect and Peering
- Sharing VPC Networks

## Cloud VPN

-Securely connects on-premise to GC VPC
- Useful Low volume 
- 99.9% SLA
- Supports
  - Site-to-site VPN
  - Static routes
  - Dynamic routes (Cloud Router)
  - IKEv1 and IKEv2 ciphers

- Routing with a network automatically configured
- VPN Tunnells connects on network to another through VPN Gateway
- MTU = Maximum Transmission Unit = 1460 bytes

## HA VPN

- High availability 99.99% SLA
- GC automatically chooses 2 external IPs
  - Supports multiple tunnels
  - Release IPs at the end
  - Tunnels must use dynamic (BGP) routing
  
- Supports site-to-site VPN

- HA VPN to AWS peer gateway topology
  - Can use Transit Gateway (TGW)
  - Can use Virtual Private Gateway (VGW)
  
- HA VPN between GC networks

- To use dynamic routes must use Cloud Router
  - Adds 2 new external IPs
  - Goes through BGP Session
  
## LAB: Congiguring Google Cloud HA VPN

- Crated Instances
- Created Tunnels
- Created BGP
- Created Firewall rules
- Created VPNs

## Cloud Interconnect and Peering

- Dedicated connections direct to GCP network
- Shared connect ocur through a partner
- Cloud VPN: Googles own VPN on internet

## Cloud Interconnect

### Dedicated Interconnect

- Large amounts of data at lower cost than increased bandwidth
- Need to provision a cross-connect between GC and your network
- Physical collocation facilities

### Partner Interconnect

- Work with service provider to conne4ct to GC network
- Can be configured for 99.99% SLA

### Cross-Cloud Interconnect

- Establish high-bandwidth dedicated connectivity betwen GC and another cloud provider
- 

### Interconnect Options

- VPN Tunnel (Cloud VPN) 
- Dedicated Interconnect
- Partner Interconnect
- Cross-Cloud Interconnect


## Peering

- No SLA
- Direct Peering provides a direct connect between business network and Google's
- Carrier Peering provides connectivity through a supported partner


## Shared VPC and VPC Peering

### Shared VPC

Allows an organization to Connect resources from multiple propjects to a Common private virtual cloud

Uses internal IP address
When using Shared VPC designate one project as host project
VPC Networtks in host network are called Shared VPC Network
A project in Shared VPC is either host or service project
A prtoject not in Shared VPC is called a standalone project

### VPC Peering

- Admins need to peer networks on both sides
- Distribvuted or de-centralized approach

### Shared VPC versus VPC Peering

- Centralized vs. De-centralized
- Biggest difference is in the administraion
	


