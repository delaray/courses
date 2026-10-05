# GCP Core Services Module 2: Identity and Access Manegement (IAM)

## Intro

Who: Person, group or application
Can do what: Specific priviledges or actions
On which resource: Any GCP service

## Identity and Access Manegement (IAM) 

IAM Objects
- Organization
- Foders
- Projects
- Resources
- Roles
- Members

IAM Resource Hierarchy
- Organzation
- Folders
- Projects
- Resources

## Organization

- Organization is root node
- Organziation roles
  - organziation admin
  - project creatorxs

### Creating and Managing Organizations

Created wehen a Google Workspace or Cloud Identity Account (CIA) is created

- Super Administrator
  - Assiign organization admin to some users
  - Point of contact for recovery issues
  - Controls lifecycle of the workspace or CIA
  
- Organization Administrator
  - Defines IAM policies
  - Determines structure of the resource hierarchy
  - Delegates respoonsibily over criticAL components through IAM roles
  
- Folders

- UIsed to model different company legal entities and departments 
- Folder hierarchy for teams and products

- Resource Manager Roles
  - Orfganization
	- Admin
	- Viever
  - Folder
    - Admin
	- Creator
	- Viewer
  - Projecdt
    - Creator
	- Deleter

## Roles

Three types of IAM roles
- Basic Roles
- Predefined Roles
- Custom Roles

### Basic roles (The first three are concentric)
- Owner
- Editor
- Viewer
- Billing Administrator
  - Mamage billing
  - Add/Remove admins

### Predefined Roles
- Apply to a particular GCP service in a project
- Offer more fine-grained permissions on particular services
- For example in a project a group of users assigned InstanceAdmin Role
  - This role consists a set of permissions (typically aligned with REST API)
    - compute.instamce.delete
    - compute.instamce.get
    - compute.instamce.list
    - compute.instamce.setMachineType
    - compute.instamce.start
    - compute.instamce.stop

- Compute Engine IAM roples
  - Compute Admin: Full control of all Co0mkpute Enginge resources (compute.*)
  - Network Admin: Create, modify, delete networking resources (except firewall & SSL Cert.)
  - Storage Admin: Create, modify, delete disks, images & snapshots


### Custom Roles
- Predefined Roles are meant to be alligned with actual jobs
- Sometimes that is not sufficient.
- Custom Roles let you define a precise set of permissions
- Example: **Instance Operator** Role: 
  - compute.instance.get 
  - compute.instance.list
  - compute.instance.start
  - compute.instance.stop
  
## Members

Five different types of members
- Google Account: Developer or administrator
- Service Account: Belongs to an application
- Google Group: Named collection of Google and/or Service Accounts
- Google Workspace Domain: Virtual group of Google Groups within a Domain
- Cloud Identity Domain: Manage users outside workspace but no access

- Cannot use IAM to manage users and groups
- Instead use Workspace or cloud identity

IAM Policies
- Consists of a list of bindings
- Binding binds a list of members to a role
- Policy hierarchy always follows the same path as Resource hierarchy
- Best to follow principle of least priviledges

IAM Allow Policies
- Allow you to grant access to GCP resources
- Controls access to the resource itself as well as any descentdants of the resource
- Associates (binds) one or more principals (aka member or identiity) to single IAM role

IAM Deny Policies
- Made up of deny rules
- Each deny rule specifies
  - A set of pricipals that are denied permissions
  - The permissions that are denied
  - Optional: A condition under which the permission is denied

IAM Conditions
- Enforce conditional, attribute-based access control for GCP
- Grant resource access to identities (memnbers) if conditions are met
- Specified in the role bindings of a resources IAM policy

Single Sign-on (SSO)
- Use Cloud Identity to configure


## Service Accounts
Provides an idesantitry to an appliucation
Allows for service-to-service interactions
- Programs runn9ing with compute engine vm can aquiire access tokens
- Tokens are used to access any service API in your project
- Tokens are used to access any service that has granted access to the service account
- Service accounts are convenient when not accessing user data

- Service accounts are identified by an email address
  - ...compute@project.gserviceaccount.com
- Three types of service accoutns
  - User-created (cuistom)
  - Built-in
    - e.g. Compute and App engines default servgice account
  - Google APIs serrvice account
    - Run internal Goodgle processes on user behalf

- Can create as many custom accounts and assign whatever roles and permissions.

Default Compute Engine Service Account
- Automatically created with auto-genrated name and address
  - name has a "compute" suffix
- Automatically added as a project editor
- By default, enabled on all instances created using gcloud or Google Cloud Console
- Service accounts have scopes which control priviledges of the access token

Service Account Permissions
- Default service account: basic and predefioned roles
- User-created service accounts: predefined roles
- Roles for service accounts can be assigned to groups or users
- Users that have ServiceAccountUser role can access all resources of that servgice account

Two Types of Service Account Keys
- Google-managed servives accounts
- User-managed service accounts

## Organization Restrictions
- Let you prevednt data exfiltration through phishing or insider attacks


## IAM Best Practics

- Use projects to group resources that share trust boundaries
- Use the "principle of least priviledges"
- Audit policies in Cloud Audit Logs: setiampolicy
- Audit memberrship of groups used in policies

- Grant roles to groups instead of individuals
- Allows updating grtoup membership instead of policies
- Audit membership of groups usedd in policiers
- Control ownershiop of Google group useed in IAM policies

- Be careful when granting serviceAccountUser role
- Namne the service account so that it reflects its pupose
- Establish a naming convention
- Audit keys with serviceAccount.keys.list() method

- Use Identity-Aware Proxy
  - Identity-based access control
  - Central authoprization layer for apps accessed by HTTPS
- IAM policty applied after authentication


## IAM Lab





