# Module 4: Resource Management

## Module Overview

## Resource Manager

Resource manager lets yuou hierarchically manage resources

Policies contain a set of roles and members
Policies are set on resources
Resources inherit properpies from their parents

Policies are inherited top to botton 
Billing is accumulated bottom to up

Resource comsuption is measured in quantities
- rate of use or time
- number of items or feature use

Resource belongs to only one project
Project accummulates use of all its resources
Each project is associated with one billing account

**Organization Admin** controls all the organizater
Organization admin can create **Project Creator** roles

Project creator tracks resources and quota usage
- Enable billing
- Manage permissions and credentials
- Enable services and APIs

Projects use three identifying attributes
- **Project Name**
- **Project Number**
- **Project ID** (aka Application ID)


Resources categorized as:
- **Global**
- **Regional**
- **Zonal**

Global reources: Images, snapshots and netwqorks
Regional resources: External IPs
Zonal Resources: instances and disks


## Quotas

All resources are subject to project quotas or limits
- How many resources you can create per project
- How quickly you can make API requests: rate limits
- How many resources you can creatre per region

Automatically increase over time and usage
You can proactively request quota increases
View current quotas in GCP Console Quotas page

Purpose of Quotas
- Prevent runaway consumption in case of error or maliciopus attack
- Prevent billing spikes and surtprtises
- Forces sizing consideration and periodic review


## Labels

Project and folder provide a level of segragation
Labels are way of provioding finer granularity
Can be attached to resources: VM, disk, snapshot or image

They can be used for
- inventiory
- filer resources
- in scripts
  - analyze costs
  - run bulk operations
  
They are key/value pairs
Up to 64 labels per resource

Do not confuse labels with network tags

## Billing

Budgets and email alerts
Can use Pub/Sub to proghramatically monitor budget
Recommend label all resources
Can visualize with Looker Studio

## Demo: Billing Administration

Navigate to billing
Example create budget


