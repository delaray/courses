# GCP Core Services Module 3: Storage and Database Services

## Module Overview

### Storage & Database Services

- Object
  - Cloud storage
  - Filestore
- File
  - Filestore
- Relationaol
  - Cloud SQL
  - Spanner
  - AlloyDB
- Non-relational
  - Firestore
  - BigTable
- Warehouse
  - BigQuery
- Redis
  - Memorystore

### Module Scope
- Infrastructure Track
- Data Engineering Track


## Cloud Storage
- Cloud Storage is GCP'ss **ject storage service**
- Scalable to exabytes
- Collection of buckets

## Storage Classes
- Standard
- Nearline
- Coldline
- Archive

### Cloud Sttorage Overview
- Buckets
  - Naming requiremewnts
  - Cannot be nested
- Objects
  - Inherit storage class
  - no minimu8m size
- Access
  - gcloud storage command
  - REST JSON or XML API
  
### Access Control
- Regions (cannot be changed)
  - Multi-region
  - Dual-region
  - Region
  
- Access control types: IAM, ACLs, Signed URL, Signed Policy Document
- Cloud IAM is usually sufficient

- ACL: Access Control List
- Max 100 entries per list
- Examples:
  - collaborator@gmail.com
  - allUsers
  - allAuthenticatedUsers
  
- Signed URLs
  - Time limited


## Cloud Storage Features

- Customer-supplied encryption keys (CSEK)
- Object Lifecycle Management
- Object versioning
- Directory synchronization
- Pub/Sub object cvhange notiofication
- Autoclass

-Objects are immutable
- Object versioning allows retrieval of
  - deleted objuects
  - owerwritten objects
- Versioning can be enabled for a bucket
- Can use Soft Deleete instead of versioning

- Lifecycle Management Configuration
  - Can dowqngrade storage class 
  - Delete objects created before a specific date
  - Keerp only 3 most recent versions
  
Object Retention Lock
- Allows date retent6ion requirements onm per object basis
- Governs how long objects are retained
- Helps with regulatory and compliuance requirements

Data Import Srevices
- Transfer Appliance
- Storage Transfer Service
- Offline Media Import

Cloud storage provides strong global consistency


## Choosing a Storage Class

**Storage Classes**
- Archive Storage: Reads less than once per year
- Coldline Storage: Reads less than once per 90 days
- Nearline Storage: Reads less than once per 30 days
- Standard Sotorage: Frequent read and writes

**Autoclass**
Transitions objects to appropriate storage class based on usage patterns.
Useful for reducing storage costs


## Filestore

Filestore is a managed file storage system for apps
Fully managed network attached storage (NAS) for CE & GKE instances
Predictazble pesrformance
Full NFSv3 support
Scales to 100s TBs for high-performance workloads

Filestore Use Cases
- Application migration
- Media rendering
- Electronic Design Automation (EDA)
- Data analytics
- Genomics processing
- Web contgent management

## Lab Intro: Cloud Storage

## Lab: Cloud Storage (graded)


## Cloud SQL

- Managed service:
  - MySQL
  - PostgreSQL
  - Microsoft SQL Server

- Patcfhes autromkatically applied
- You administer users
- Supports many clients
  - gclouid sql
  - App engine, Workspace scripts
  
- Cloud SQL Instance
  - 64TB Storage
  - 60,000 IOPS
  - 624 GB of RAM
  - Scale without replicas
  
- Cloud SQL Services
  - HA configuration
  - Backup service
  - import/export
  - scaling
    - Up: machine capacity
	- Out: Read replicas


## Spanner

- Scales to Petabytes
- High availability
- Finanacial and Invcentory Apps
- Combines RDB with Horizontal scaling
- Offers the be4st of Relation & Non-Relational

- Replication synchronized across zones by Google Global Fiber Network
- Choosing Spanner
  - Outgrown single instance RDMS
  - Sharding for DB throughput
  - Need transactional consisztency
  

## AlloyDB

- Fully manaqged PG-comptible DB service
- Adaptive 
- Fast traqbsactional processing
- High availability
- Real-time business insights
- Builtin integration with Vertex AI


## Firestore

- Fast NoSQL document DB
- Simplifies storing, syncing ans querying data
- Mobile web and apps at global scale
- Live syunxhronization aand offline support
- Security features
- ACID transactions
- Multi-region availability
- Powerful Query engine

- Firersytore is the next generation of Datasore
- Backward compatible with Datastore


## Biigtable

- Bigtable is a NoSQL big Data DB service
- Petaa-byute scale
- Consistent sub-100ms latency
- Seamless scalability for throughpu
- Learn and adjust to access patterns
- Idea for AdTech, Fintech ande IoT
- Storage engine for ML applications
- Easy integration with open source big data tools

- Tables are spaRSE
- Tables have column families
- Each row is an object
- - Rows are sharded into tablets
- Processing is separate from storage
- BigTable stored in Colussus File System
- THroughput scales linearly
- BigTable scales Up well

## Memorystore

- Fully managed Redis service
- Instances up to 300 GB
- Network throughput of 12 Gbps

## Review: Satorage and DB Services
- Cloud Storage (Object Store)
- Filerstore (File system storage)
- Cloud SQL (Managed RDB service)
- Spoanner (RDB service with tansactional consistency)
- AlloyDB (PG compatible DB serrvice)
- Firestore (Fully managed No-SQL DB servbice)
- Nigtable (Fully Managed wide-column No-SQL DB service)
- Memorystore (Fully masnaged in-memory srvice for Redis)
