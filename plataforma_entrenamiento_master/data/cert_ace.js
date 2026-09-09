(function (global) {
  'use strict';

  const GCP_ACE_QUESTIONS = [
  {
    "id": "ACE-D1-001",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Resource Hierarchy",
      "IAM Policies",
      "Cloud Asset Inventory"
    ],
    "title": "Auditing Organization IAM Policies Across All Projects",
    "scenario": "You need to generate an inventory report of all IAM policy bindings across 150 projects in your Google Cloud organization. You want to retrieve this metadata efficiently with minimal API rate-limiting issues and without iterating through each project individually with custom scripts. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud projects get-iam-policy sequentially across all 150 individual project IDs."
      },
      {
        "letter": "B",
        "text": "Assign roles/viewer at the organization level and download the IAM console CSV export."
      },
      {
        "letter": "C",
        "text": "Use Cloud Asset Inventory export to analyze IAM policies across the organization hierarchy."
      },
      {
        "letter": "D",
        "text": "Query Cloud Logging for recent SetIamPolicy audit log entries across all active folders."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Asset Inventory provides a centralized inventory service that allows you to export all resource metadata and IAM policies across an entire organization, folder, or project hierarchy in a single operation without making per-resource API calls.",
    "distractors": {
      "A": "Executing gcloud projects get-iam-policy per project generates excessive API calls, hits rate limits, and requires custom scripting.",
      "B": "The Cloud Console IAM page does not provide an automated full-hierarchy CSV export across 150 distinct projects.",
      "D": "Cloud Logging audit logs only capture point-in-time modification events and do not provide a complete point-in-time inventory of all effective policies."
    },
    "officialDocUrl": "https://cloud.google.com/asset-inventory/docs/exporting-to-cloud-storage",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-002",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Service Accounts",
      "IAM Roles",
      "Impersonation",
      "gcloud CLI"
    ],
    "title": "Enforcing Keyless Service Account Impersonation for Developers",
    "scenario": "Your organization security policy prohibits downloading service account private JSON keys to local developer workstations. A developer needs to deploy Cloud Functions using the dedicated service account deployer@project-id.iam.gserviceaccount.com. You want to grant them the necessary permissions to authenticate securely using service account impersonation. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create and download a service account JSON key file to the developer workstation."
      },
      {
        "letter": "B",
        "text": "Grant the developer roles/iam.serviceAccountTokenCreator on the service account."
      },
      {
        "letter": "C",
        "text": "Grant the developer roles/iam.serviceAccountUser at the project resource level."
      },
      {
        "letter": "D",
        "text": "Configure the developer's gcloud CLI using --impersonate-service-account."
      },
      {
        "letter": "E",
        "text": "Grant the developer roles/iam.workloadIdentityUser on the default GCE account."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Service account impersonation allows users to generate short-lived credentials for a service account without downloading long-lived private keys. The user needs the Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) on the target service account and must pass the --impersonate-service-account flag in gcloud (or set it in gcloud config).",
    "distractors": {
      "A": "Downloading JSON private key files violates the corporate security policy prohibiting long-lived local keys.",
      "C": "The Service Account User role (roles/iam.serviceAccountUser) allows attaching a service account to resources like Compute Engine, but does not permit generating tokens for CLI impersonation.",
      "E": "Workload Identity User is designed for Kubernetes workloads and external IdPs to assume service accounts, not local gcloud workstation impersonation."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/impersonating-service-accounts",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-003",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "Budgets and Alerts",
      "Cloud Pub/Sub",
      "Cloud Functions"
    ],
    "title": "Automating Billing Budget Notifications via Pub/Sub",
    "scenario": "You manage a development Google Cloud project with a monthly budget limit of $2,000. When spending reaches 100% of the budget, charges must be stopped programmatically, without waiting for a human to read an alert email and act. Which two things must you configure to build that automated shutdown path? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Cloud Billing budget to publish alerts to a Pub/Sub topic triggering Cloud Functions."
      },
      {
        "letter": "B",
        "text": "Configure an email alert in Cloud Billing with an automated webhook to the Compute Engine API."
      },
      {
        "letter": "C",
        "text": "Create a Cloud Monitoring metric alert on billing.googleapis.com to stop active instances."
      },
      {
        "letter": "D",
        "text": "Configure an Organization Policy with a hard financial quota to terminate running resources."
      },
      {
        "letter": "E",
        "text": "Deploy a Cloud Function subscribed to that topic that calls the Cloud Billing API to disable billing."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "A budget only becomes an automation when both halves exist. First the Cloud Billing budget must be configured to publish its threshold notifications to a Pub/Sub topic (email recipients alone cannot trigger code). Second, something must consume that message: a Cloud Function subscribed to the topic reads the costAmount/budgetAmount payload and calls the Cloud Billing API (projects.updateBillingInfo with an empty billing account) to detach billing, or scales resources down. Neither step alone stops the spend.",
    "distractors": {
      "B": "Cloud Billing email alerts only notify human recipients; they cannot call an API or a webhook, so nothing is stopped automatically.",
      "C": "Cloud Monitoring billing metrics arrive with hours of delay and are meant for observability, not for capping spend at the moment the threshold is crossed.",
      "D": "Organization Policies constrain how resources may be configured; there is no organization policy constraint that enforces a monetary spending limit."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-004",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "BigQuery",
      "Billing Export",
      "FinOps"
    ],
    "title": "Configuring Daily Cloud Billing Export to BigQuery for FinOps Analysis",
    "scenario": "Your finance team requires historical daily cost breakdown and resource label attribution across all projects in the organization. You need to configure automated, continuous export of detailed Cloud Billing data to BigQuery for analytical SQL reporting. Which two configuration steps must you complete? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Cloud Storage transfer job to export monthly billing invoice files."
      },
      {
        "letter": "B",
        "text": "Create a BigQuery dataset in a dedicated centralized administration project."
      },
      {
        "letter": "C",
        "text": "Grant the finance analytics team roles/billing.admin on all active projects."
      },
      {
        "letter": "D",
        "text": "Export Cloud Logging audit logs directly into a multi-region Cloud Spanner DB."
      },
      {
        "letter": "E",
        "text": "Enable Detailed usage cost export in the Google Cloud Billing export console."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To set up continuous Cloud Billing export to BigQuery, you must first create a target BigQuery dataset in a project, and then enable detailed usage cost export in the Cloud Billing console pointing to that dataset. Detailed export includes SKU-level costs and resource labels.",
    "distractors": {
      "A": "Cloud Storage transfer jobs for invoice PDFs do not provide raw, queryable granular billing data with resource label attribution.",
      "C": "Granting roles/billing.admin gives excessive management permissions and does not configure automated data export to BigQuery.",
      "D": "Cloud Logging audit logs do not contain the calculated pricing, discounts, and SKU metadata required for FinOps cost analysis."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-005",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Named Configurations",
      "SDK Management"
    ],
    "title": "Managing Multiple GCP Environments with gcloud Named Configurations",
    "scenario": "You regularly switch between managing resources in a staging project (proj-staging-101) and a production project (proj-prod-202). You need a fast, error-free method to switch your active gcloud account, default project, and compute region in the terminal without re-authenticating every time. What command should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud auth login --update-adc interactively each time you switch between project environments."
      },
      {
        "letter": "B",
        "text": "Set the CLOUDSDK_CORE_PROJECT shell environment variable manually before running commands."
      },
      {
        "letter": "C",
        "text": "Create named configurations and switch profiles with gcloud config configurations activate."
      },
      {
        "letter": "D",
        "text": "Install separate Google Cloud SDK binary directories for each target project environment."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Named configurations in the Google Cloud CLI allow you to define, maintain, and quickly switch between distinct groups of settings (such as authenticated account, active project, compute region, and zone) using gcloud config configurations activate.",
    "distractors": {
      "A": "Re-running gcloud auth login requires manual interactive browser authentication each time you switch contexts.",
      "B": "Setting CLOUDSDK_CORE_PROJECT only changes the project, leaving region, zone, and account unchanged.",
      "D": "Maintaining separate binary installations is complex, error-prone, and unnecessary when named configurations exist natively."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/config/configurations",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-006",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "SDK Configuration",
      "Compute Engine Defaults"
    ],
    "title": "Setting Default Region and Zone Properties in gcloud SDK",
    "scenario": "You are provisioning multiple Compute Engine VMs in us-central1-a using the gcloud CLI. To streamline operations and avoid typing the --zone and --region flags on every single command, you want to set persistent default compute properties for your active CLI profile. Which command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud compute zones set-default us-central1-a --region=us-central1 in the shell."
      },
      {
        "letter": "B",
        "text": "Define DEFAULT_ZONE=us-central1-a in the /etc/gcloud/properties configuration file."
      },
      {
        "letter": "C",
        "text": "Run gcloud projects add-metadata --metadata=default-zone=us-central1-a on the project."
      },
      {
        "letter": "D",
        "text": "Run gcloud config set compute/zone us-central1-a in your active configuration profile."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcloud config set command modifies the active configuration profile properties. Setting compute/zone and compute/region provides default values for all compute commands without requiring explicit CLI flags.",
    "distractors": {
      "A": "The command gcloud compute zones set-default is not a valid gcloud command syntax.",
      "B": "Setting variables in /etc/gcloud/properties is non-standard and does not update user-level named CLI configurations.",
      "C": "Project metadata sets instance-level metadata attributes inside the project, not local CLI client default properties."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/regions-zones/changing-default-zone-region",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-007",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Uniform Bucket-Level Access",
      "IAM Security"
    ],
    "title": "Enforcing Uniform Bucket-Level Access for Simplified Object Permissions",
    "scenario": "Your organization's security policy requires that access to objects in the existing bucket gs://corp-financial-records be granted exclusively through IAM policies rather than individual object Access Control Lists (ACLs). Today a group of analysts can read those objects only because of object-level ACL entries, and they must keep their read access after the change. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable uniform bucket-level access on the Cloud Storage bucket using gcloud storage."
      },
      {
        "letter": "B",
        "text": "Set default object ACLs to private and remove all individual user ACL assignments."
      },
      {
        "letter": "C",
        "text": "Configure an Object Lifecycle Management rule to expire object-level ACLs daily."
      },
      {
        "letter": "D",
        "text": "Create a Customer-Managed Encryption Key (CMEK) to enforce KMS decrypt permissions."
      },
      {
        "letter": "E",
        "text": "Grant the analysts roles/storage.objectViewer on the bucket before switching the access model."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Enabling uniform bucket-level access disables ACL evaluation on the bucket, so from that moment only IAM decides who can read an object. That is why the ACL-derived access the analysts rely on has to be re-created as an IAM binding first: granting roles/storage.objectViewer at the bucket level preserves their read access once ACLs stop being honored. Doing only the first step locks the analysts out; doing only the second leaves ACLs enabled and the policy unmet.",
    "distractors": {
      "B": "Setting default object ACLs to private only changes the ACL applied to newly written objects; object ACLs remain enabled and can still be set on the bucket.",
      "C": "Object Lifecycle Management governs storage class transitions and deletion of objects; it never evaluates or removes access control entries.",
      "D": "CMEK changes which key encrypts the object bytes and adds a KMS permission check, but object ACLs continue to be evaluated exactly as before."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/uniform-bucket-level-access",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-008",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Networks",
      "Subnets",
      "CIDR Expansion",
      "Compute Engine"
    ],
    "title": "Expanding Subnet CIDR Range in a Custom Mode VPC Network",
    "scenario": "A custom mode subnet in us-east4 has the IP range 10.10.0.0/24 (256 addresses) and is running out of available IP addresses due to rapid VM growth. You need to expand the primary IP range to accommodate at least 500 VMs with zero downtime and without re-creating existing instances. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the existing subnet and recreate it with 10.10.0.0/22 in the same region."
      },
      {
        "letter": "B",
        "text": "Run gcloud compute networks subnets expand-ip-range with prefix 10.10.0.0/23."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute networks subnets update to shrink the prefix to 10.10.0.0/25."
      },
      {
        "letter": "D",
        "text": "Add an alias secondary IP range of 10.20.0.0/24 to serve as the primary network."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The command gcloud compute networks subnets expand-ip-range allows increasing the size of an existing subnet IP range (e.g. from /24 to /23) without recreating the subnet, affecting running instances, or causing network downtime.",
    "distractors": {
      "A": "You cannot delete a subnet while active Compute Engine instances are attached to it without causing downtime.",
      "C": "VPC subnets cannot be shrunk in Google Cloud, and /25 provides fewer IP addresses (128) rather than expanding capacity.",
      "D": "Secondary IP ranges are used for alias IPs or GKE Pods/Services, not for the primary VM network interface range."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-vpc#expand-subnet",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-009",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Networks",
      "GKE",
      "Secondary IP Ranges",
      "VPC-native"
    ],
    "title": "Configuring Secondary IP Ranges for GKE Pods and Services",
    "scenario": "You are preparing a custom VPC subnet 10.0.0.0/20 in europe-west1 to host a VPC-native Google Kubernetes Engine (GKE) cluster. Pods and Services need dedicated, non-overlapping ranges that are routable inside the VPC rather than an overlay. Which two steps are required to bring the cluster up on VPC-native (alias IP) addressing? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create two separate VPC networks and connect them using VPC Network Peering."
      },
      {
        "letter": "B",
        "text": "Expand the primary subnet CIDR range from 10.0.0.0/20 to 10.0.0.0/16 directly."
      },
      {
        "letter": "C",
        "text": "Add two secondary IP ranges to the subnet designated for Pods and Services."
      },
      {
        "letter": "D",
        "text": "Configure Cloud NAT on the subnet to dynamically translate internal Pod IPs."
      },
      {
        "letter": "E",
        "text": "Create the cluster with --enable-ip-alias, naming the two secondary ranges for Pods and Services."
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "VPC-native clusters use alias IP ranges, which come from secondary IP ranges defined on the subnet, so the two ranges must exist before the cluster is created. Creating the ranges is not enough on its own: the cluster must be created with --enable-ip-alias and told which secondary range to use for Pods (--cluster-secondary-range-name) and which for Services (--services-secondary-range-name); without those flags GKE would allocate ranges of its own or fall back to routes-based networking.",
    "distractors": {
      "A": "A VPC-native cluster draws Pod and Service addresses from secondary ranges on its own subnet; peering a second VPC adds no usable range to the cluster.",
      "B": "Enlarging the primary range only adds node addresses. VPC-native clusters still require separate secondary ranges for Pods and Services.",
      "D": "Cloud NAT translates private source addresses for outbound internet traffic; it allocates no address space to Pods or Services."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-010",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Resource Manager",
      "Folders",
      "Hierarchy",
      "Governance"
    ],
    "title": "Structuring Resource Manager Folder Hierarchy for Multi-Environment Governance",
    "scenario": "An enterprise is organizing 80 Google Cloud projects across Development, Staging, and Production environments for three distinct business units. Each environment must carry different IAM access and different Organization Policy constraints, and the projects underneath must inherit them automatically from the organization root down. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create folders for business units, nest environment folders, and place projects inside."
      },
      {
        "letter": "B",
        "text": "Place all projects in a flat organization root and assign IAM policies project by project."
      },
      {
        "letter": "C",
        "text": "Create separate Google Cloud organization nodes for each business unit and environment."
      },
      {
        "letter": "D",
        "text": "Use Cloud Billing sub-accounts to control IAM inheritance and Organization Policies."
      },
      {
        "letter": "E",
        "text": "Attach the environment-specific Organization Policy constraints to each environment folder node."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "The folder hierarchy is the inheritance mechanism, but it enforces nothing by itself. Nesting environment folders (dev/stage/prod) under each business unit folder creates the attachment points; the constraints then have to be set on those folder nodes, where every project underneath inherits them. Building the hierarchy without setting policies on it leaves all three environments governed identically by whatever the organization root says.",
    "distractors": {
      "B": "A flat structure has no intermediate node to inherit from, so every policy must be repeated and maintained on each of the 80 projects.",
      "C": "Separate organization nodes fragment Cloud Identity, billing and central administration, and policies cannot be inherited across organizations.",
      "D": "Cloud Billing sub-accounts split invoicing and cost attribution; they are not part of the Resource Manager hierarchy that IAM and policies inherit through."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/creating-managing-folders",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D1-011",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "IAM",
      "Predefined Roles",
      "Least Privilege",
      "Compute Engine"
    ],
    "title": "Transitioning from Primitive Roles to Predefined IAM Roles",
    "scenario": "A junior developer currently holds the primitive Editor role on a production project. A security audit requires strict least privilege. The developer needs to view project settings and to create, start, stop and delete Compute Engine instances, but must not be able to modify firewall rules or Cloud Storage buckets. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/compute.admin and roles/owner on the production project."
      },
      {
        "letter": "B",
        "text": "Grant roles/compute.networkAdmin and roles/storage.admin on the project."
      },
      {
        "letter": "C",
        "text": "Maintain roles/editor and apply an IAM Deny rule for Cloud Storage buckets."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.instanceAdmin.v1 and roles/viewer on the project."
      },
      {
        "letter": "E",
        "text": "Remove the existing roles/editor binding for the developer on the production project."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "roles/compute.instanceAdmin.v1 covers the full instance lifecycle without permission over firewalls or networks, and roles/viewer supplies the read-only visibility over the rest of the project. IAM bindings are additive and are evaluated as a union, so granting the narrow pair changes nothing while the old roles/editor binding is still in place: the Editor role must be removed for least privilege to actually take effect.",
    "distractors": {
      "A": "roles/owner is a primitive role with full control over every resource, and roles/compute.admin also allows editing firewall rules and networks.",
      "B": "roles/compute.networkAdmin and roles/storage.admin grant exactly the two things the developer must not have, and neither creates or deletes VM instances.",
      "C": "IAM Deny rules would have to enumerate every service to be excluded, and keeping roles/editor still leaves broad modify permissions everywhere else."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles#compute-engine-roles",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-012",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Service Accounts",
      "IAM Roles",
      "Compute Engine",
      "Least Privilege"
    ],
    "title": "Granting Service Account User Role on Specific Service Accounts",
    "scenario": "A software engineer needs to deploy Compute Engine VM instances in project proj-backend and attach a dedicated service account api-sa@proj-backend.iam.gserviceaccount.com to those instances. In accordance with least privilege, the engineer must not be able to use or manage any other service accounts in the project. Which two IAM roles should you grant to the engineer? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/iam.serviceAccountUser on the target service account resource."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountUser at the target project resource level."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountAdmin on the target service account resource."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.instanceAdmin.v1 at the target project resource level."
      },
      {
        "letter": "E",
        "text": "Grant roles/compute.admin and roles/iam.securityAdmin at the project level."
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To attach a specific service account to a VM instance, the user needs roles/compute.instanceAdmin.v1 at the project level to create VMs, and roles/iam.serviceAccountUser granted directly on the target service account resource (rather than at the project level).",
    "distractors": {
      "B": "Granting Service Account User at the project level permits using all service accounts in the project, violating least privilege.",
      "C": "roles/iam.serviceAccountAdmin allows deleting and modifying the service account itself, which is not required to attach it to VMs.",
      "E": "roles/compute.admin and roles/iam.securityAdmin provide excessive administrative power over networking and IAM security policies."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-permissions#user-role",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-013",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Organization Policy",
      "Compute Engine",
      "External IP Restriction",
      "Security"
    ],
    "title": "Restricting VM External IP Addresses via Organization Policies",
    "scenario": "Your organization requires that no Compute Engine virtual machine instances in the dev-folder folder are assigned public external IP addresses, preventing unauthorized public internet exposure. You need to enforce this guardrail centrally across all current and future projects in that folder. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Create a VPC firewall rule with priority 1 blocking all traffic to 0.0.0.0/0."
      },
      {
        "letter": "B",
        "text": "Set the compute.vmExternalIpAccess organization policy constraint on the folder."
      },
      {
        "letter": "C",
        "text": "Remove roles/compute.networkAdmin from all user accounts across the folder."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud Function to automatically terminate any VM launched with a public IP."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Organization Policy constraint compute.vmExternalIpAccess defines whether VM instances can have external IP addresses. Applying this constraint with Deny All at the folder level ensures that no current or future VM in any project in that folder can receive an external IP.",
    "distractors": {
      "A": "VPC firewall rules filter traffic packets but do not prevent instances from being provisioned with external public IP addresses.",
      "C": "Users with instance admin roles can still launch VMs with external IPs even without the networkAdmin role.",
      "D": "A reactive Cloud Function introduces operational latency and does not proactively block VM creation at the API level."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#restrict_external_ip",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-014",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Organization Policy",
      "Resource Location",
      "Data Sovereignty",
      "Compliance"
    ],
    "title": "Enforcing Data Sovereignty with Resource Location Constraint",
    "scenario": "Strict data residency regulations mandate that all cloud storage and compute services across your organization must be provisioned exclusively within European Union boundaries (europe-west1 and europe-west3). You need to prevent developers from provisioning resources in any non-EU regions. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Configure the gcp.resourceLocations organization policy constraint for EU regions."
      },
      {
        "letter": "B",
        "text": "Delete all non-EU Google Cloud region configurations via the Resource Manager API."
      },
      {
        "letter": "C",
        "text": "Assign IAM conditions checking request.location.region.startsWith('europe-') globally."
      },
      {
        "letter": "D",
        "text": "Create Cloud Monitoring alert policies to notify admins when non-EU VMs are launched."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcp.resourceLocations organization policy constraint restricts the set of Google Cloud locations (regions and multi-regions) in which location-based resources can be created, enforcing compliance and data sovereignty at provisioning time.",
    "distractors": {
      "B": "Google Cloud regions are managed by Google infrastructure and cannot be deleted or disabled via API.",
      "C": "IAM conditions do not evaluate the physical geographic deployment region of provisioned backend resources.",
      "D": "Cloud Monitoring alerts are reactive notifications and do not enforce preventative compliance at provisioning time."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-015",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "IAM Roles",
      "Billing Account User",
      "Project Creation"
    ],
    "title": "Assigning Billing Account User Role to Project Creators",
    "scenario": "Developers in your engineering department must be able to create new Google Cloud projects themselves and link each new project to the corporate Cloud Billing account 01A2B3-45C6D7-89E0F1. They must not be able to see spending on projects owned by other teams, and they must not be able to change payment methods or billing administrators. Which two role grants should you make? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/billing.admin on the corporate Cloud Billing account."
      },
      {
        "letter": "B",
        "text": "Grant roles/billing.viewer on the corporate Cloud Billing account."
      },
      {
        "letter": "C",
        "text": "Grant roles/resourcemanager.projectCreator on the billing account."
      },
      {
        "letter": "D",
        "text": "Grant roles/billing.user on the corporate Cloud Billing account."
      },
      {
        "letter": "E",
        "text": "Grant roles/resourcemanager.projectCreator on the organization node."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Two different resources are involved, so two bindings are needed. On the billing account, roles/billing.user carries billing.resourceAssociations.create, the permission that links a project to the account, without exposing cost data or payment settings. On the organization node, roles/resourcemanager.projectCreator lets the developers create the projects in the first place. Granting projectCreator on the billing account is the classic error: the role has no meaning at that scope.",
    "distractors": {
      "A": "roles/billing.admin grants control over payment instruments, billing administrators and organization-wide spend reporting.",
      "B": "roles/billing.viewer exposes cost detail for every project linked to the account and still does not permit linking a project.",
      "C": "roles/resourcemanager.projectCreator is a Resource Manager role: it can only be granted on an organization or folder, never on a billing account."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/billing-access",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-016",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Application Default Credentials",
      "Authentication",
      "SDK"
    ],
    "title": "Authenticating Local Development Workstation for Google Cloud Client Libraries",
    "scenario": "A software developer is testing a Python application locally on their workstation. The application uses the official Google Cloud Storage client library to access buckets in proj-data-dev. What is the recommended, secure command to authenticate their local environment without creating or downloading service account keys?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud auth login and set GOOGLE_APPLICATION_CREDENTIALS to the raw token string."
      },
      {
        "letter": "B",
        "text": "Generate a service account key and export GOOGLE_APPLICATION_CREDENTIALS in the shell."
      },
      {
        "letter": "C",
        "text": "Run gcloud auth application-default login to generate local default credentials."
      },
      {
        "letter": "D",
        "text": "Run gcloud config set auth/disable_ssl_validation true in your active CLI profile."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Running gcloud auth application-default login obtains user access credentials via a web flow and writes them to a well-known local path for Application Default Credentials (ADC), allowing client libraries to authenticate without managing service account keys.",
    "distractors": {
      "A": "GOOGLE_APPLICATION_CREDENTIALS must point to a file path, not an access token string, and tokens expire after one hour.",
      "B": "Downloading service account keys creates long-lived secret management overhead and security risks.",
      "D": "Disabling SSL validation is a critical security vulnerability and does not establish Google Cloud API authentication."
    },
    "officialDocUrl": "https://cloud.google.com/docs/authentication/provide-credentials-adc",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-017",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Storage Classes",
      "Dual-Region",
      "gcloud storage"
    ],
    "title": "Creating a Cloud Storage Bucket with Archive Class and Dual-Region Redundancy",
    "scenario": "A healthcare regulatory compliance mandate requires creating a Cloud Storage bucket for long-term clinical data retention. Data will be retained for 7 years, accessed less than once a year, and must be geo-redundantly protected across two specific regions (us-central1 and us-east1). Which gcloud command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets create gs://med-archive --location=US --default-storage-class=COLDLINE"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets create gs://med-archive --location=us-central1,us-east1 --default-storage-class=ARCHIVE"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets create gs://med-archive --location=us-central1 --default-storage-class=ARCHIVE"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets create gs://med-archive --location=global --default-storage-class=NEARLINE"
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcloud storage buckets create command accepts predefined or custom dual-region pairs (e.g. location=us-central1,us-east1) and sets the default storage class to ARCHIVE, which is optimized for data accessed less than once a year.",
    "distractors": {
      "A": "Location US is a multi-region spanning all US data centers rather than specific dual-region redundancy, and COLDLINE has higher storage costs than ARCHIVE.",
      "C": "Specifying a single region location=us-central1 does not provide dual-region geo-redundancy across us-east1.",
      "D": "Location global is not a valid Cloud Storage bucket location, and NEARLINE is designed for monthly access."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/creating-buckets",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-018",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Networks",
      "Auto Mode",
      "Custom Mode",
      "Subnets"
    ],
    "title": "Converting Auto Mode VPC Network to Custom Mode for Production Best Practices",
    "scenario": "A development environment project was created with an Auto Mode VPC network. Enterprise networking guidelines require all VPC networks connected to on-premises via Cloud VPN or Interconnect to operate in Custom Mode to avoid IP subnet conflicts. How should you convert this VPC network to Custom Mode with zero downtime?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud compute networks switch-mode default --mode=custom to convert the network."
      },
      {
        "letter": "B",
        "text": "Delete the default VPC network and create a new custom VPC network with custom subnets."
      },
      {
        "letter": "C",
        "text": "Create a new custom VPC network and configure VPC Network Peering to the default VPC."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute networks subnets update on each regional subnet to modify its mode."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "An Auto Mode VPC network can be converted to Custom Mode using the command gcloud compute networks switch-mode <NETWORK_NAME> --mode=custom. This conversion is permanent, preserves all existing subnets and running VM instances, and involves zero downtime.",
    "distractors": {
      "B": "Deleting the default VPC network requires terminating all active resources and causes substantial downtime.",
      "C": "Peering does not convert the auto mode VPC, and its predefined CIDR ranges still create potential IP overlap issues.",
      "D": "VPC network mode is a network-level configuration property, not a per-subnet setting."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-vpc#switch-mode",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-019",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Shared VPC",
      "Host Project",
      "Service Project",
      "VPC Networking"
    ],
    "title": "Configuring Shared VPC Host and Service Projects",
    "scenario": "You are implementing a centralized Shared VPC topology. The network engineering team manages all VPC subnets in project net-host-prod, while the application team provisions Compute Engine instances in project app-service-prod. Which two configuration steps are required to establish this architecture? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure VPC Network Peering between VPC networks in both projects."
      },
      {
        "letter": "B",
        "text": "Enable project net-host-prod as a centralized Shared VPC host project."
      },
      {
        "letter": "C",
        "text": "Establish an IPsec Cloud VPN tunnel between subnets in both projects."
      },
      {
        "letter": "D",
        "text": "Attach project app-service-prod as a service project to net-host-prod."
      },
      {
        "letter": "E",
        "text": "Grant the roles/owner role on net-host-prod to the application team."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Configuring Shared VPC requires two primary steps: (1) Enabling the centralized project (net-host-prod) as a Shared VPC host project, and (2) Associating the service project (app-service-prod) with that host project so instances can attach to the host subnets.",
    "distractors": {
      "A": "VPC Peering connects independent VPC networks but does not configure centralized Shared VPC host/service project relationships.",
      "C": "IPsec Cloud VPN tunnels are used for encrypted inter-network or hybrid connections, not Shared VPC attachment.",
      "E": "Granting roles/owner to application developers grants total project control and violates centralized security governance."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-020",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "IAM",
      "Custom Roles",
      "Least Privilege",
      "Compute Engine"
    ],
    "title": "Creating a Custom IAM Role from Predefined Role Definition",
    "scenario": "Your security team requires a custom IAM role for tier-1 support technicians. The role must permit starting, stopping, and resetting Compute Engine instances, but must strictly prohibit creating new instances, deleting existing instances, or modifying instance metadata. No predefined role matches these exact requirements. How should you create this role?",
    "options": [
      {
        "letter": "A",
        "text": "Assign roles/compute.instanceAdmin.v1 and use Cloud Armor to block delete API calls."
      },
      {
        "letter": "B",
        "text": "Assign roles/viewer and grant temporary local root sudo privileges on the guest VMs."
      },
      {
        "letter": "C",
        "text": "Grant roles/compute.admin combined with an IAM Condition restricting business hours."
      },
      {
        "letter": "D",
        "text": "Create a custom IAM role at the project level containing only the required permissions."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "When no predefined role satisfies the principle of least privilege for a specific workload or team, you create a custom IAM role containing only the exact permissions needed (e.g. compute.instances.start, compute.instances.stop, compute.instances.reset).",
    "distractors": {
      "A": "Cloud Armor filters incoming HTTP traffic to load balancers, not Google Cloud management API calls.",
      "B": "roles/viewer does not permit starting or stopping VMs via the Cloud Console, and guest OS access does not grant cloud API control.",
      "C": "roles/compute.admin with time conditions still allows full VM creation and deletion during allowed hours."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/creating-custom-roles",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D1-021",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Service Accounts",
      "IAM Roles",
      "Token Creator",
      "Cloud Build"
    ],
    "title": "Delegating Short-Lived Token Generation with Service Account Token Creator",
    "scenario": "A CI/CD deployment pipeline in Cloud Build needs to generate short-lived signed JWT tokens using a dedicated service account jwt-signer@corp.iam.gserviceaccount.com. In accordance with Google Cloud security best practices, no long-lived private key files should be generated or stored. How should you configure authorization?",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/iam.serviceAccountTokenCreator to Cloud Build on the target service account."
      },
      {
        "letter": "B",
        "text": "Generate a service account JSON key file and store it encrypted inside Secret Manager."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountUser and roles/owner to Cloud Build at the project level."
      },
      {
        "letter": "D",
        "text": "Configure Workload Identity Federation between Cloud Build and Google Workspace domains."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) allows principals to generate short-lived OAuth 2.0 access tokens, OpenID Connect (OIDC) ID tokens, and sign JWT assertions without managing long-lived private JSON keys.",
    "distractors": {
      "B": "Exporting JSON keys creates long-lived credentials that must be managed, rotated, and secured, violating keyless best practices.",
      "C": "roles/owner is overly broad, and Service Account User allows attaching service accounts to resources, not signing tokens.",
      "D": "Workload Identity Federation connects external identity providers (AWS, Azure, GitHub) rather than internal Cloud Build service accounts."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-overview#token-creator-role",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-022",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Identity",
      "Directory Sync",
      "Active Directory",
      "GCDS"
    ],
    "title": "Synchronizing On-Premises Active Directory Users with Google Cloud Directory Sync",
    "scenario": "An enterprise maintains 4,000 employee identities in on-premises Microsoft Active Directory. As part of their Google Cloud adoption, they need to synchronize users and security groups to Cloud Identity in an automated, one-way fashion without synchronizing or exposing Active Directory password hashes to Google Cloud. Which tool should they deploy?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy Azure AD Connect with password hash synchronization to Google Cloud."
      },
      {
        "letter": "B",
        "text": "Deploy Google Cloud Directory Sync (GCDS) in the on-premises environment."
      },
      {
        "letter": "C",
        "text": "Configure Anthos Config Management to mirror on-premises LDAP directories."
      },
      {
        "letter": "D",
        "text": "Create individual Cloud Identity accounts using the Admin Console CSV upload."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud Directory Sync (GCDS) is an on-premises tool that synchronizes users, groups, and non-password metadata from Microsoft Active Directory or LDAP directories to Cloud Identity in a one-way, automated fashion without transmitting passwords.",
    "distractors": {
      "A": "Azure AD Connect is used to synchronize with Microsoft Entra ID (Azure AD), not directly to Google Cloud Identity.",
      "C": "Anthos Config Management manages Kubernetes cluster policies via Git repositories, not enterprise LDAP identity synchronization.",
      "D": "Admin Console CSV upload is a one-time manual process that does not automate ongoing employee onboarding and offboarding."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/identity/syncing-active-directory-to-cloud-identity",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-023",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "gcloud CLI",
      "Resource Manager",
      "Cloud Billing",
      "Project Creation"
    ],
    "title": "Creating a Project and Linking to Billing Account via CLI",
    "scenario": "You are developing an infrastructure automation script using the gcloud CLI. The script must create a new project analytics-prod-99, place it under folder ID 1234567890, and associate it with billing account 01A2B3-45C6D7-89E0F1. Which sequence of commands should your script execute?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud compute projects create analytics-prod-99 --folder=1234567890 --billing-account=01A2B3-45C6D7-89E0F1."
      },
      {
        "letter": "B",
        "text": "Run gcloud organizations create-project analytics-prod-99 --folder=1234567890 --billing=01A2B3-45C6D7-89E0F1."
      },
      {
        "letter": "C",
        "text": "Run gcloud projects create analytics-prod-99 --folder=1234567890 then gcloud billing projects link analytics-prod-99."
      },
      {
        "letter": "D",
        "text": "Run gcloud resource-manager folders add-project 1234567890 --project=analytics-prod-99 --billing-account=01A2B3-45C6D7."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Projects are created with gcloud projects create <PROJECT_ID> --folder=<FOLDER_ID>. Once created, the project is linked to the billing account using gcloud billing projects link <PROJECT_ID> --billing-account=<ACCOUNT_ID>.",
    "distractors": {
      "A": "gcloud compute projects create is not a valid command for creating Google Cloud projects.",
      "B": "The gcloud organizations group does not provide a create-project command.",
      "D": "gcloud resource-manager folders add-project is invalid syntax; project creation and placement are handled under gcloud projects create."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/billing/projects/link",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-024",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "IAM",
      "IAM Conditions",
      "Cloud SQL",
      "Temporary Access"
    ],
    "title": "Applying IAM Conditions for Time-Bound Temporary Contractor Access",
    "scenario": "An external consultant is hired to perform database maintenance on project finance-prod. The maintenance window starts immediately and ends on September 30, 2026 at 23:59:59 UTC. You must grant them roles/cloudsql.admin such that access expires automatically at the deadline without requiring manual administrator intervention. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/cloudsql.admin with an IAM Condition checking request.time > timestamp('2026-09-30T23:59:59Z')."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudsql.admin and schedule a Cloud Scheduler job that runs remove-iam-policy-binding that night."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudsql.admin with an IAM Condition matching resource.name on the finance-prod SQL instances."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudsql.admin with an IAM Condition checking request.time < timestamp('2026-09-30T23:59:59Z')."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "IAM Conditions allow attaching attribute-based conditional expressions to role bindings. Using request.time < timestamp(\"2026-09-30T23:59:59Z\") grants temporary access that automatically and immediately expires at the specified timestamp without administrative action.",
    "distractors": {
      "A": "The comparison is inverted. This denies the consultant access during the maintenance window and grants permanent Cloud SQL admin from October 1 onwards, the exact opposite of an expiring grant.",
      "B": "Expiry now depends on a separate job that can fail, be paused or be deleted, and its service account needs IAM admin rights of its own. If anything goes wrong the binding stays live and someone must revoke it manually.",
      "C": "A resource.name condition narrows which instances the role reaches but carries no time attribute, so the binding never expires and an administrator still has to remove it by hand at the deadline."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/conditions-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-025",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Components",
      "GKE",
      "kubectl"
    ],
    "title": "Updating and Installing gcloud CLI Additional Components",
    "scenario": "You installed the Google Cloud CLI on a Linux workstation to administer Google Kubernetes Engine (GKE) clusters. You need to install kubectl and the required gke-gcloud-auth-plugin component using the native CLI package manager to begin managing clusters. Which command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud components install kubectl gke-gcloud-auth-plugin in the shell."
      },
      {
        "letter": "B",
        "text": "Run gcloud config set components/enable kubectl gke-gcloud-auth-plugin."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances add-metadata --metadata=components=kubectl."
      },
      {
        "letter": "D",
        "text": "Run gcloud alpha kubernetes install-plugins --all-components in the shell."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The command gcloud components install installs additional Google Cloud CLI components (such as kubectl and gke-gcloud-auth-plugin) that are not included in the default installation bundle.",
    "distractors": {
      "B": "gcloud config set is used to modify local CLI configuration settings, not to install or update binary components.",
      "C": "compute instances add-metadata applies metadata attributes to Compute Engine VM instances, not the local client machine.",
      "D": "gcloud alpha kubernetes install-plugins is not a valid gcloud command group or syntax."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/docs/components",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-026",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Bucket Lock",
      "Retention Policy",
      "Compliance"
    ],
    "title": "Protecting Regulatory Data with Cloud Storage Bucket Lock",
    "scenario": "A compliance officer requires that financial audit records stored in a Cloud Storage bucket remain immutable and undeletable by any user, including project owners, for exactly seven years. Once enabled, this retention configuration must be permanent and irrevocable. What action should you take?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Object Versioning on the bucket and configure a seven-year noncurrent lifecycle rule."
      },
      {
        "letter": "B",
        "text": "Configure a seven-year retention policy on the bucket and permanently lock it with Bucket Lock."
      },
      {
        "letter": "C",
        "text": "Create a Customer-Managed Encryption Key in Cloud KMS with a seven-year key rotation schedule."
      },
      {
        "letter": "D",
        "text": "Apply an IAM Deny policy on storage.objects.delete scoped to all service accounts in the project."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Storage Bucket Lock allows you to permanently lock a retention policy on a bucket. Once locked, the policy cannot be deleted, reduced in duration, or overridden by any principal, including Project Owners and Google Cloud Support, until the retention period for every object expires.",
    "distractors": {
      "A": "Object Versioning retains older versions but can be suspended or deleted by administrators with sufficient IAM permissions.",
      "C": "Customer-Managed Encryption Keys encrypt data at rest but do not prevent authorized users from deleting or overwriting objects.",
      "D": "IAM Deny policies block specific API permissions but can be removed or altered by users with Security Admin roles."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-027",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Network Peering",
      "Transitive Routing",
      "Cloud VPN",
      "Network Topology"
    ],
    "title": "Understanding VPC Network Peering Route Exchange and Transitivity",
    "scenario": "An enterprise connects an on-premises data center to vpc-hub via HA Cloud VPN. The vpc-hub network is peered directly with vpc-spoke1 and vpc-spoke2 using VPC Network Peering. Compute Engine VMs in vpc-spoke1 cannot reach on-premises servers. You need to identify the architectural root cause. What is the cause?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Router only supports BGP route exchange with subnets located in the same geographic region."
      },
      {
        "letter": "B",
        "text": "HA Cloud VPN tunnels automatically drop all TCP traffic originating from custom mode VPC networks."
      },
      {
        "letter": "C",
        "text": "VPC Network Peering is non-transitive, so spoke VPCs cannot traverse hub peering to reach on-premises."
      },
      {
        "letter": "D",
        "text": "The implied VPC egress firewall rule priority 65535 automatically blocks inter-network traffic."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud VPC Network Peering is non-transitive. If VPC A is peered with VPC B, and VPC B is connected to an on-premises network or another VPC C, VPC A cannot communicate with on-premises or VPC C through VPC B using standard peering alone.",
    "distractors": {
      "A": "Cloud Router supports dynamic routing across both regional and global routing modes, not strictly same-region subnets.",
      "B": "HA Cloud VPN fully encapsulates and routes standard TCP, UDP, and ICMP IP traffic regardless of VPC mode.",
      "D": "The implied VPC egress firewall rule priority 65535 allows all outbound traffic unless an explicit deny rule exists."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/vpc-peering#non-transitive",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-028",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "IAM Deny Policies",
      "IAM Allow Policies",
      "Policy Precedence",
      "Security Governance"
    ],
    "title": "Evaluating IAM Deny Policies Precedence and Scope",
    "scenario": "A software engineer has the roles/storage.admin role on a project. A security administrator creates an IAM Deny policy at the parent folder level that denies storage.objects.delete to all domain members. When the engineer attempts to delete an object from a bucket in the project, the operation fails. Why was the request rejected?",
    "options": [
      {
        "letter": "A",
        "text": "Project allow policies automatically take precedence over folder-level deny policy configurations."
      },
      {
        "letter": "B",
        "text": "The developer workstation gcloud configuration is missing Application Default Credentials tokens."
      },
      {
        "letter": "C",
        "text": "Cloud Storage buckets require Uniform Bucket-Level Access before project roles become effective."
      },
      {
        "letter": "D",
        "text": "IAM Deny policies always override IAM Allow policies regardless of where the role is assigned."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "In Google Cloud IAM evaluation, Deny policies are evaluated before Allow policies. If a principal matches a Deny policy for a specific permission, access is denied immediately, even if the principal has been granted broad administrative Allow roles like roles/storage.admin or roles/owner.",
    "distractors": {
      "A": "Deny policies inherited from higher levels in the resource hierarchy cannot be overridden by lower-level allow policies.",
      "B": "Application Default Credentials affect local authentication setup, but the operation reached IAM evaluation and failed on permissions.",
      "C": "IAM roles control access whether Uniform Bucket-Level Access or legacy fine-grained ACLs are enabled on the bucket."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/deny-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-029",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Workload Identity Federation",
      "GitHub Actions",
      "Service Accounts",
      "Keyless Authentication"
    ],
    "title": "Implementing Workload Identity Federation for External CI/CD",
    "scenario": "Your team uses GitHub Actions workflows to deploy container images to Google Cloud without storing long-lived service account JSON keys in GitHub secrets. You need to configure keyless authentication using Workload Identity Federation with OpenID Connect (OIDC). Which two actions should you take in Google Cloud? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Download a service account JSON key file and upload it as an encrypted GitHub secret."
      },
      {
        "letter": "B",
        "text": "Create a Workload Identity Pool and configure an OIDC Provider for GitHub in the project."
      },
      {
        "letter": "C",
        "text": "Assign the roles/iam.serviceAccountKeyAdmin role directly to the public repository URL."
      },
      {
        "letter": "D",
        "text": "Grant the external identity roles/iam.workloadIdentityUser on the deployment service account."
      },
      {
        "letter": "E",
        "text": "Enable Identity-Aware Proxy on the GitHub repository IP address ranges in VPC firewall."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To set up Workload Identity Federation for GitHub Actions, you must create a Workload Identity Pool with an OIDC provider pointing to token.actions.githubusercontent.com, and bind the external repository identity to the deployment service account using the roles/iam.workloadIdentityUser role.",
    "distractors": {
      "A": "Exporting service account JSON keys creates long-lived credentials and directly violates the keyless requirement.",
      "C": "IAM roles cannot be assigned directly to raw repository URLs without a Workload Identity Pool and provider.",
      "E": "Identity-Aware Proxy protects web applications and SSH/RDP access, not inbound OIDC token federation for CI/CD."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation-with-other-providers",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-030",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Logging",
      "Audit Logs",
      "Private Logs Viewer",
      "Data Access Logs",
      "IAM"
    ],
    "title": "Restricting Sensitive Audit Log Visibility with Private Logs Viewer Role",
    "scenario": "A compliance auditor needs to inspect BigQuery Data Access audit logs and Cloud Storage read events to verify GDPR data access controls. The auditor currently has the roles/logging.viewer role on the project but cannot view Data Access audit logs in Logs Explorer. Which IAM role should you grant the auditor?",
    "options": [
      {
        "letter": "A",
        "text": "Grant the auditor the roles/logging.configWriter role on the target project."
      },
      {
        "letter": "B",
        "text": "Grant the auditor the roles/bigquery.dataViewer role on the default log sink dataset."
      },
      {
        "letter": "C",
        "text": "Grant the auditor the roles/logging.privateLogViewer role on the target project."
      },
      {
        "letter": "D",
        "text": "Grant the auditor the roles/iam.securityReviewer role at the organization root node."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "In Cloud Logging, Data Access audit logs contain sensitive access metadata and are not visible to users with only the standard roles/logging.viewer role. Viewing Data Access audit logs requires the roles/logging.privateLogViewer role (or roles/logging.admin).",
    "distractors": {
      "A": "The Logging Config Writer role allows managing log sinks and log buckets, but does not grant read access to private audit logs.",
      "B": "BigQuery Data Viewer grants access to query BigQuery tables, not to view private audit logs directly in Logs Explorer.",
      "D": "Security Reviewer allows inspecting IAM policies and asset configurations, but does not include private log viewing permissions."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/access-control#roles",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D1-031",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "Budgets",
      "Promotional Credits",
      "Cost Management"
    ],
    "title": "Managing Billing Credit Allocations and Spend Caps",
    "scenario": "A startup receives $50,000 in Google Cloud promotional credits. The engineering lead wants to create a Cloud Billing budget alert that tracks net out-of-pocket cash spend, ensuring alerts trigger only when spending exceeds the promotional credit offset. How should you configure the budget in Cloud Billing?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Cloud Billing account dedicated exclusively to absorbing credit charges."
      },
      {
        "letter": "B",
        "text": "Include Promotions and others in the Credit filter settings within the budget scope."
      },
      {
        "letter": "C",
        "text": "Configure a BigQuery scheduled query to truncate billing records containing promo labels."
      },
      {
        "letter": "D",
        "text": "Set the budget threshold to $0 and configure an automated email alert to stop billing."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Billing budgets allow you to filter whether credit types (such as promotions, sustained use discounts, and spending-based discounts) are included in the budget calculation. Including promotions ensures the budget evaluates net spend after credit deductions.",
    "distractors": {
      "A": "Promotional credits apply directly to existing billing accounts; creating duplicate accounts adds administrative complexity and fractures billing.",
      "C": "Modifying or truncating BigQuery billing export records does not change live budget alert evaluations in Cloud Billing.",
      "D": "Setting a $0 budget triggers immediate alerts on gross usage and does not properly track net spend against promotional credits."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/budgets#credit-types",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-032",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Resource Manager",
      "IAM Inheritance",
      "Resource Hierarchy",
      "Least Privilege"
    ],
    "title": "Managing Folder-Level IAM Inheritance and Least Privilege Overrides",
    "scenario": "A DevOps group has the roles/compute.admin role at the Production-Apps folder level. You create a new sensitive database project inside this folder. You must prevent this group from modifying Compute Engine VMs in this sensitive project while maintaining their access to all other projects in the folder. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Move the sensitive project into a separate dedicated folder with its own restricted IAM policy."
      },
      {
        "letter": "B",
        "text": "Remove the DevOps group from the project IAM policy while leaving the project in the folder."
      },
      {
        "letter": "C",
        "text": "Grant the DevOps group roles/viewer at the project level to downgrade their inherited permissions."
      },
      {
        "letter": "D",
        "text": "Disable the Compute Engine API in the parent folder properties in Google Cloud Console."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "In Google Cloud resource hierarchy, IAM permissions are inherited downward and are additive. You cannot revoke or reduce an inherited folder-level permission at the project level using standard allow policies. Moving the project to a separate folder with its own policy cleanly isolates permissions.",
    "distractors": {
      "B": "Removing a principal from project-level bindings has no effect on permissions inherited from the parent folder.",
      "C": "Granting roles/viewer at the project level is additive and does not restrict or downgrade the inherited roles/compute.admin role.",
      "D": "APIs are enabled or disabled at the individual project level, not at the folder level, and disabling the API breaks all VM workloads."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/access-control-folders",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-033",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Service Accounts",
      "Key Rotation",
      "gcloud CLI",
      "Security Best Practices"
    ],
    "title": "Managing and Rotating User-Managed Service Account Keys",
    "scenario": "A legacy on-premises application uses a user-managed service account JSON key to upload nightly batch files to Cloud Storage. Corporate security policy mandates periodic key rotation every 90 days with zero application downtime during the transition. Which workflow should you execute to rotate the key safely?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the old key with gcloud iam service-accounts keys delete, then create and deploy a new key."
      },
      {
        "letter": "B",
        "text": "Create a second service account with a new key, repoint the application, and delete the original account."
      },
      {
        "letter": "C",
        "text": "Disable the old key with gcloud iam service-accounts keys disable, then issue a new key and roll it out."
      },
      {
        "letter": "D",
        "text": "Create a new key, update the application configuration, verify functionality, and delete the old key."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud service accounts can have multiple active user-managed keys simultaneously. To rotate keys without downtime, generate a new key, configure the application to use the new key, test the connection, and then safely delete the old key using gcloud iam service-accounts keys delete.",
    "distractors": {
      "A": "Key deletion takes effect immediately and cannot be undone, so every nightly upload attempted between the deletion and the new key reaching the application fails authentication: exactly the downtime the policy forbids.",
      "B": "This replaces the identity instead of rotating the key. The new service account holds none of the bucket IAM bindings until they are granted again, and deleting the old account breaks anything else still relying on it.",
      "C": "A disabled key stops authenticating at once, so the batch job breaks in the same window as deleting it. Disabling belongs after the new key is verified, as a reversible step before the final delete."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys#rotating-keys",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-034",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Environment Variables",
      "SDK Configuration",
      "Automation"
    ],
    "title": "Overriding Cloud SDK Properties with Environment Variables",
    "scenario": "You are writing an automation script that executes gcloud commands across multiple projects in rapid sequence. You need to override the default project for individual script executions in the current shell process without modifying the persistent named configuration on the build runner. Which approach should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Execute gcloud config set project project-id globally before running each command line."
      },
      {
        "letter": "B",
        "text": "Modify the global /etc/gcloud/properties configuration file using inline sed scripts."
      },
      {
        "letter": "C",
        "text": "Set the CLOUDSDK_CORE_PROJECT environment variable in the script runtime process environment."
      },
      {
        "letter": "D",
        "text": "Reinstall the Google Cloud SDK binary bundle inside separate temporary subdirectories."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud CLI supports setting properties via environment variables. Setting CLOUDSDK_CORE_PROJECT overrides the active project property for that specific shell process and its child commands without mutating persistent named configuration files or affecting parallel processes.",
    "distractors": {
      "A": "Using gcloud config set project alters persistent disk configuration files and can cause race conditions in concurrent automation jobs.",
      "B": "Directly modifying system properties files is unsupported, error-prone, and affects all users on the host machine.",
      "D": "Reinstalling the Cloud SDK creates massive disk and network overhead and is completely unnecessary for setting per-command project scope."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-035",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Object Versioning",
      "Lifecycle Management",
      "Cost Optimization"
    ],
    "title": "Configuring Object Versioning and Noncurrent Object Lifecycle Deletion",
    "scenario": "You manage a Cloud Storage bucket gs://media-archive that stores daily digital asset updates. You must protect live files against accidental overwrites and deletions while automatically deleting noncurrent historical versions that are older than 30 days to control storage costs. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable Object Versioning on the bucket using gcloud storage buckets update with --versioning."
      },
      {
        "letter": "B",
        "text": "Lock the bucket retention policy for exactly 30 days using Cloud Storage Bucket Lock."
      },
      {
        "letter": "C",
        "text": "Create a Cloud Function triggered on object deletion to restore files from Cloud Logging."
      },
      {
        "letter": "D",
        "text": "Set the default storage class to Archive and disable all object lifecycle rules."
      },
      {
        "letter": "E",
        "text": "Apply a Lifecycle rule with action Delete and condition DaysSinceNoncurrentTime: 30."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Enabling Object Versioning preserves noncurrent versions of objects whenever an object is overwritten or deleted. To prevent storage costs from accumulating indefinitely, configure an Object Lifecycle Management rule with action Delete and condition DaysSinceNoncurrentTime set to 30 days.",
    "distractors": {
      "B": "Bucket Lock enforces retention periods and prevents deletion of objects, which would block automated cost-saving deletions.",
      "C": "Cloud Logging audit logs contain event metadata, not object payloads, and cannot be used by Cloud Functions to reconstruct deleted files.",
      "D": "Setting the Archive class without lifecycle rules retains all noncurrent versions indefinitely, causing storage costs to grow continuously."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/object-versioning",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-036",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Private Google Access",
      "VPC Subnets",
      "Cloud Storage",
      "Internal IP"
    ],
    "title": "Enabling Private Google Access on Subnets for Secure API Access",
    "scenario": "A backend Compute Engine VM in subnet-backend (10.0.1.0/24) in us-east1 has only an internal IP address and no external public IP address. The VM must download dataset files from a Cloud Storage bucket without routing traffic across the public internet. What configuration change should you make?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Private Google Access on the subnet-backend subnet configuration in us-east1."
      },
      {
        "letter": "B",
        "text": "Create a Cloud NAT gateway and attach an external static IP address to the VPC router."
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Interconnect dedicated attachment to route traffic to googleapis.com."
      },
      {
        "letter": "D",
        "text": "Assign an ephemeral public IPv4 address to the VM network interface and block port 80."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Private Google Access allows Compute Engine instances that have only internal (private) IP addresses to communicate securely with Google APIs and services (such as Cloud Storage and BigQuery) using Google's internal network without requiring external public IP addresses.",
    "distractors": {
      "B": "Cloud NAT allows internal VMs to reach outbound internet endpoints, but Private Google Access is the direct, secure mechanism for Google APIs.",
      "C": "Cloud Interconnect connects on-premises networks to Google Cloud VPCs, not internal VM-to-API communication.",
      "D": "Assigning an external IP address exposes the VM directly to the internet and violates the requirement to maintain private-only routing."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/configure-private-google-access",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-037",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Firewall",
      "Rule Priority",
      "Network Tags",
      "Ingress Filtering"
    ],
    "title": "Configuring VPC Ingress Firewall Rules Priority and Target Tags",
    "scenario": "A VPC network has an ingress firewall rule with priority 1000 that denies TCP port 443 traffic from 0.0.0.0/0 to all instances. You must allow external HTTPS traffic (port 443) exclusively to frontend web instances tagged with web-frontend without modifying the existing deny rule. How should you configure the new firewall rule?",
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress allow rule on port 443 for tag web-frontend with priority 1500."
      },
      {
        "letter": "B",
        "text": "Create an egress allow rule on port 443 targeting all instances with priority 100."
      },
      {
        "letter": "C",
        "text": "Assign the roles/compute.securityAdmin role to the web-frontend VM service account."
      },
      {
        "letter": "D",
        "text": "Create an ingress allow rule on port 443 for tag web-frontend with priority 500."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud VPC firewall rules are evaluated in order of numerical priority, where lower numbers take precedence (priority 0 is highest, 65535 is lowest). Creating an ingress allow rule with priority 500 ensures it is evaluated and matched before the broad deny rule at priority 1000.",
    "distractors": {
      "A": "Priority 1500 is evaluated after priority 1000, so matching packets are dropped by the priority 1000 deny rule before reaching this rule.",
      "B": "Inbound HTTPS web traffic requires an ingress firewall rule; egress rules filter outbound traffic leaving instances.",
      "C": "IAM roles control API management permissions and have no effect on packet-level VPC network firewall rule evaluation."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls#rule_evaluation",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-038",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Organization Policy",
      "Service Accounts",
      "constraints/iam.disableServiceAccountKeyCreation",
      "Security Governance"
    ],
    "title": "Enforcing Organization Policy to Disable Service Account Key Creation",
    "scenario": "Corporate security policy mandates that developers and automated scripts must never create or download user-managed service account private JSON keys in any project across the enterprise Google Cloud organization. You need to enforce this policy centrally with immediate effect. Which organization policy constraint should you enforce?",
    "options": [
      {
        "letter": "A",
        "text": "Enforce constraints/compute.disableSerialPortAccess on the default organization folders."
      },
      {
        "letter": "B",
        "text": "Remove the roles/iam.serviceAccountUser role from all developers across the organization."
      },
      {
        "letter": "C",
        "text": "Enforce constraints/iam.disableServiceAccountKeyCreation on the organization root node."
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy blocking resourcemanager.projects.delete on all active folders."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Enforcing the boolean organization policy constraint constraints/iam.disableServiceAccountKeyCreation at the organization root node blocks the creation of new user-managed service account keys across all projects in the organization, preventing key sprawl and leakage.",
    "distractors": {
      "A": "Disabling serial port access prevents interactive VM serial console debugging, not service account key generation.",
      "B": "Removing roles/iam.serviceAccountUser prevents attaching service accounts to resources, but does not block creating keys via API.",
      "D": "Blocking project deletion protects project resources from removal, but has no effect on service account key creation."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-service-accounts#disable-key-creation",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-039",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "IAM Recommender",
      "Least Privilege",
      "Role Mining",
      "IAM Policy"
    ],
    "title": "Remediating Overprivileged Roles Using IAM Recommender Insights",
    "scenario": "A developer was assigned the broad roles/editor primitive role on a production project. Over the past 90 days, the developer only deployed code to Cloud Run and read objects from Cloud Storage. You want to apply the principle of least privilege using automated Google Cloud recommendations. Which tool should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Export Cloud Logging data to BigQuery and write custom SQL scripts to calculate role bindings."
      },
      {
        "letter": "B",
        "text": "Review and apply role recommendations from the IAM Recommender in the Google Cloud Console."
      },
      {
        "letter": "C",
        "text": "Grant the developer roles/owner to allow automatic self-remediation of unused API permissions."
      },
      {
        "letter": "D",
        "text": "Configure Cloud Asset Inventory to delete inactive IAM policy bindings after 30 days."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "IAM Recommender uses machine learning and 90 days of Cloud Logging audit data to identify unused permissions in broad roles and automatically suggests more restrictive, predefined least-privilege roles without breaking existing workflows.",
    "distractors": {
      "A": "Writing custom SQL queries against BigQuery log exports requires substantial manual engineering when IAM Recommender provides automated insights natively.",
      "C": "Granting roles/owner escalates administrative privileges significantly and directly violates the principle of least privilege.",
      "D": "Cloud Asset Inventory provides point-in-time asset discovery and metadata export, but does not autonomously modify or delete IAM bindings."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/recommender-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-040",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "Project Linking",
      "Billing Account User",
      "Multi-Project Management"
    ],
    "title": "Associating Multiple Projects with a Single Cloud Billing Account",
    "scenario": "Your enterprise creates a master corporate Cloud Billing account to consolidate invoice payments. You need to link five separate project environments (proj-dev, proj-test, proj-stage, proj-prod, proj-shared) to this single billing account using the command line. Which command should you execute for each project?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud projects add-iam-policy-binding PROJECT_ID --member=billingAccount:ID for each."
      },
      {
        "letter": "B",
        "text": "Run gcloud billing projects link PROJECT_ID --billing-account=BILLING_ACCOUNT_ID for each."
      },
      {
        "letter": "C",
        "text": "Create five separate billing sub-accounts and merge them into a BigQuery dataset table."
      },
      {
        "letter": "D",
        "text": "Run gcloud resource-manager folders add-billing-account FOLDER_ID --account=BILLING_ID."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "To associate a Google Cloud project with a Cloud Billing account via CLI, execute gcloud billing projects link PROJECT_ID --billing-account=BILLING_ACCOUNT_ID. This operation requires the roles/billing.user role on the billing account and roles/resourcemanager.projectBillingManager on the project.",
    "distractors": {
      "A": "The gcloud projects add-iam-policy-binding command grants IAM roles on a project and cannot establish billing account associations.",
      "C": "Billing sub-accounts are intended for resellers and channel partners, not for standard internal multi-project invoice consolidation.",
      "D": "Billing accounts are attached directly to individual projects, not folders, and the command syntax shown is invalid."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/modify-project#link-project-to-billing-account",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D1-041",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Filters and Formats",
      "Compute Engine",
      "CLI Scripting"
    ],
    "title": "Formatting gcloud Output with Projections and Filter Expressions",
    "scenario": "You need to generate a compact terminal table showing only the name and internal IP address of all running Compute Engine instances in us-central1-a. You want the server to filter the results and format the output directly in the gcloud CLI without piping output to grep or awk. Which command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud compute instances describe --zone=us-central1-a --filter=\"status=RUNNING\" --format=\"table(name,networkIP)\"."
      },
      {
        "letter": "B",
        "text": "Run gcloud compute instances list --zone=us-central1-a | awk '{print $1, $4}' | grep RUNNING --format=\"table(name,ip)\"."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances list --filter=\"zone:us-central1-a AND status:RUNNING\" --format=\"table(name,networkInterfaces[0].networkIP)\"."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances export --zone=us-central1-a --filter=\"status:RUNNING\" --format=\"table(name,networkInterfaces[0].networkIP)\"."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud CLI supports server-side resource filtering using the --filter flag and output projection/formatting using the --format flag. Using --filter=\"zone:us-central1-a AND status:RUNNING\" and --format=\"table(name,networkInterfaces[0].networkIP)\" extracts the required fields natively.",
    "distractors": {
      "A": "The describe command targets a single instance rather than listing multiple instances, and networkIP is not a root-level property.",
      "B": "Piping to awk and grep relies on client-side text parsing rather than native gcloud server-side filtering and structured formatting.",
      "D": "The export sub-command does not exist in gcloud compute instances, and export operations are not used for formatted terminal listing."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/topic/filters",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-042",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Dual-Region",
      "High Availability",
      "Turbo Replication"
    ],
    "title": "Configuring Dual-Region Storage for Low-Latency Replication",
    "scenario": "An online gaming platform requires storing player profile assets with 99.99% availability and low-latency access across both us-central1 and us-east1. The company requires automated replication and failover between these two specific geographic areas without paying for a broader multi-region bucket. Which bucket location should be selected?",
    "options": [
      {
        "letter": "A",
        "text": "A Multi-Region US bucket with lifecycle rules configured to delete files in us-west1."
      },
      {
        "letter": "B",
        "text": "A single Regional bucket in us-central1 with a Cloud Function to copy files to us-east1."
      },
      {
        "letter": "C",
        "text": "Two independent regional buckets configured with automated cross-bucket IAM sync."
      },
      {
        "letter": "D",
        "text": "A predefined Dual-Region bucket located in nam4 (us-central1 and us-east1)."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Storage Dual-Region buckets (such as nam4 pairing us-central1 and us-east1) provide high availability (99.99%), low-latency access, and automatic geo-redundant replication across two specific regions without the cost of a full continental multi-region location.",
    "distractors": {
      "A": "Multi-Region buckets distribute data across all data centers in the US; lifecycle rules cannot restrict physical storage locations.",
      "B": "Custom Cloud Functions introduce asynchronous replication lag, lack 99.99% availability SLAs, and require ongoing maintenance.",
      "C": "Cloud Storage does not offer a native real-time cross-bucket IAM synchronization feature for object payloads."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#dual-regions",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-043",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Firewall",
      "Service Accounts",
      "Network Tags",
      "Least Privilege"
    ],
    "title": "Comparing Network Tags and Service Accounts for Firewall Filtering",
    "scenario": "A security architect discovers that developers with roles/compute.instanceAdmin.v1 can bypass network security controls by adding network tags (like allow-ssh-all) to their VMs. The architect requires a firewall filtering mechanism that developers cannot manipulate without security admin authorization. What should you recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Configure firewall rules to target specific Service Accounts rather than Network Tags."
      },
      {
        "letter": "B",
        "text": "Configure Cloud Armor security policies directly on internal VPC subnet CIDR ranges."
      },
      {
        "letter": "C",
        "text": "Set the default firewall rule priority to 0 for all tagged compute instance rules."
      },
      {
        "letter": "D",
        "text": "Disable all VPC firewall rules and rely exclusively on Linux iptables inside each VM."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Targeting VPC firewall rules by service account provides strong access control. Unlike network tags, which can be modified by anyone with instance admin permissions, assigning or changing a service account on an instance requires the roles/iam.serviceAccountUser permission, preventing unauthorized privilege escalation.",
    "distractors": {
      "B": "Cloud Armor security policies attach to external/internal HTTP(S) load balancers, not directly to internal VPC subnets.",
      "C": "Changing rule priorities does not prevent developers from attaching privileged network tags to their VM instances.",
      "D": "In-guest iptables cannot be enforced centrally, are difficult to audit, and can be bypassed by users with root access."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls#service-accounts-vs-tags",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-044",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Google Groups",
      "Cloud Identity",
      "IAM Governance",
      "Least Privilege"
    ],
    "title": "Implementing Google Groups for Enterprise IAM Governance",
    "scenario": "Your enterprise employs 250 developers who frequently transition between project teams. Assigning IAM roles directly to individual user accounts has become unmanageable and violates governance standards. Which two actions should you take to implement scalable, enterprise-grade IAM governance? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create individual custom IAM roles for each developer named after their employee ID."
      },
      {
        "letter": "B",
        "text": "Create job-function Google Groups in Cloud Identity or Google Workspace admin console."
      },
      {
        "letter": "C",
        "text": "Distribute a single shared service account private key to all 250 software engineers."
      },
      {
        "letter": "D",
        "text": "Assign predefined IAM roles to Google Group email addresses on target GCP resources."
      },
      {
        "letter": "E",
        "text": "Assign the primitive roles/owner role to all lead engineers across every cloud project."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Google Cloud best practices recommend creating Google Groups for job functions in Cloud Identity or Google Workspace, and assigning IAM roles to the group email addresses. When employees change teams, administrators simply add or remove them from groups without modifying project IAM policies.",
    "distractors": {
      "A": "Creating individual custom roles per employee creates massive administrative overhead and does not simplify group access.",
      "C": "Sharing service account private keys compromises audit trails, violates security standards, and risks credential leaks.",
      "E": "Granting primitive roles/owner provides excessive privileges and directly violates the principle of least privilege."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/groups-in-iam",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-045",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Organization Administrator",
      "Cloud Identity",
      "Super Admin",
      "Resource Hierarchy"
    ],
    "title": "Distinguishing Organization Administrator from Super Admin in Cloud Identity",
    "scenario": "A company is setting up its initial Google Cloud Organization. The IT department needs to distinguish between administrative roles in Cloud Identity and administrative roles in Google Cloud Platform. Which statement accurately describes the relationship between a Super Admin and an Organization Administrator?",
    "options": [
      {
        "letter": "A",
        "text": "A project Owner can delete the Organization Administrator role from the root node."
      },
      {
        "letter": "B",
        "text": "GCP Organization Admins can reset user passwords directly in Google Workspace."
      },
      {
        "letter": "C",
        "text": "Super Admins can grant Organization Admin roles, but have no default project access."
      },
      {
        "letter": "D",
        "text": "The Organization Administrator is automatically granted full admin rights in Active Directory."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A Cloud Identity Super Admin controls domain users, groups, and identity settings, and can assign the roles/resourcemanager.organizationAdmin role. However, Super Admins do not automatically possess permissions to view or manage resources inside Google Cloud projects unless explicitly assigned.",
    "distractors": {
      "A": "Project Owners only have administrative authority within their assigned project and cannot modify IAM bindings on the organization root node.",
      "B": "Google Cloud Organization Administrators manage cloud resource hierarchies and cannot reset Cloud Identity or Workspace passwords.",
      "D": "The Organization Administrator role is an IAM role within Google Cloud and does not grant privileges in external on-premises Active Directory domains."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/creating-managing-organization",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-046",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Shell",
      "Persistent Disk",
      "Ephemeral Container",
      "gcloud SDK"
    ],
    "title": "Leveraging Cloud Shell Persistent Storage and Ephemeral VM Execution",
    "scenario": "A cloud engineer uses Google Cloud Shell for daily administrative operations. The engineer clones Git repositories and writes utility scripts in their home directory ($HOME), and installs custom packages in /usr/local/bin. Which statement correctly describes Cloud Shell storage persistence across sessions?",
    "options": [
      {
        "letter": "A",
        "text": "All installed apt packages and system root files are permanently retained across restarts."
      },
      {
        "letter": "B",
        "text": "Cloud Shell deletes all files in $HOME immediately when the browser tab is closed."
      },
      {
        "letter": "C",
        "text": "Cloud Shell allocates a dedicated n2-standard-32 VM that runs 24/7 continuously without timeout."
      },
      {
        "letter": "D",
        "text": "The $HOME directory is backed by 5 GB of persistent disk, but system packages are ephemeral."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud Shell provisions a 5 GB persistent disk mounted as $HOME that persists across sessions. However, the underlying container VM is ephemeral, meaning any custom packages or binaries installed outside of $HOME (such as in /usr or /etc) are discarded upon session restart.",
    "distractors": {
      "A": "System files and packages installed outside $HOME are not preserved across VM container restarts.",
      "B": "The $HOME directory is backed by persistent disk storage and is not deleted when browser tabs close.",
      "C": "Cloud Shell provides a free, ephemeral environment that terminates automatically after 20 minutes of inactivity."
    },
    "officialDocUrl": "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-047",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Requester Pays",
      "Egress Costs",
      "Data Sharing"
    ],
    "title": "Configuring Requester Pays for Public Cloud Storage Datasets",
    "scenario": "A genomics research institute hosts 50 TB of open-source genomic sequence data in a Cloud Storage bucket for global researchers. The institute wants to make the data public to anyone with a Google Cloud account, but requires that the downloading party pay for their own network egress and API request charges. How should the bucket be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Requester Pays on the bucket using gcloud storage buckets update gs://genomics-data --requester-pays."
      },
      {
        "letter": "B",
        "text": "Deploy Compute Engine web proxy servers integrated with an external payment processing gateway."
      },
      {
        "letter": "C",
        "text": "Attach a Cloud Armor security policy requiring credit card token verification for downloads."
      },
      {
        "letter": "D",
        "text": "Create individual IAM service accounts and download keys for all external research organizations."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Enabling Requester Pays on a Cloud Storage bucket requires callers to specify a billing project (via the --billing-project flag in gcloud or API headers). The specified project is then billed for all network egress and API operation costs associated with accessing the data.",
    "distractors": {
      "B": "Deploying custom web proxies adds substantial infrastructure costs, operational overhead, and latency.",
      "C": "Cloud Armor protects web workloads against DDoS and web attacks; it does not process payments or manage storage egress billing.",
      "D": "Creating and distributing service accounts for external public users is unmanageable and does not shift egress charges to the callers' billing accounts."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/requester-pays",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-048",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Subnets",
      "Secondary IP Ranges",
      "GKE",
      "VPC-Native"
    ],
    "title": "Adding Secondary IP Ranges to an Existing VPC Subnet",
    "scenario": "An existing production subnet 10.10.0.0/24 in us-central1 was deployed without secondary IP ranges. You now need to deploy a new VPC-native GKE cluster into this subnet. How can you prepare the existing subnet for the GKE cluster without disrupting existing workloads?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the subnet and recreate it with primary and secondary IP CIDR blocks specified."
      },
      {
        "letter": "B",
        "text": "Run gcloud compute networks subnets update with --add-secondary-ranges to append the ranges."
      },
      {
        "letter": "C",
        "text": "Create a secondary VPC network and configure dynamic routing between networks using Cloud Router."
      },
      {
        "letter": "D",
        "text": "Configure Cloud NAT with multiple IP ranges to dynamically allocate pod addresses."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "You can add secondary IP address ranges to existing subnets at any time without recreating the subnet or interrupting running workloads by using the gcloud compute networks subnets update command with the --add-secondary-ranges flag.",
    "distractors": {
      "A": "Deleting and recreating the subnet requires terminating all running VMs, causing substantial production downtime.",
      "C": "Creating a secondary VPC adds routing complexity and does not fulfill the requirement to deploy GKE into the existing subnet.",
      "D": "Cloud NAT provides outbound internet connectivity for private VMs and cannot be used to assign internal pod and service IP ranges for GKE."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-subnets#add-secondary-range",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-049",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Workload Identity Federation",
      "Workload Identity Pools",
      "OIDC Providers",
      "Hybrid Cloud"
    ],
    "title": "Creating and Configuring Workload Identity Pools and Providers",
    "scenario": "Your enterprise wants to allow on-premises Kubernetes pods to securely authenticate to Google Cloud Pub/Sub and BigQuery without downloadable service account keys. You want to establish trust between an on-prem OIDC identity provider and Google Cloud IAM. Which two configuration steps must you complete? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a Workload Identity Pool in the project using gcloud iam workload-identity-pools create."
      },
      {
        "letter": "B",
        "text": "Deploy a dedicated Cloud VPN tunnel and route all IAM authentication traffic through on-prem."
      },
      {
        "letter": "C",
        "text": "Create an OIDC Workload Identity Provider in the pool specifying the issuer URL and mappings."
      },
      {
        "letter": "D",
        "text": "Generate a long-lived service account key and copy it into on-premises Kubernetes Secrets."
      },
      {
        "letter": "E",
        "text": "Enable Private Service Connect on the on-premises Kubernetes ingress controller endpoint."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To federate external identities with Google Cloud IAM, you must first create a Workload Identity Pool to manage external accounts, and then create a Workload Identity Provider inside that pool defining the external IdP (such as OIDC issuer URL and attribute mappings).",
    "distractors": {
      "B": "Cloud VPN establishes network-layer connectivity but does not establish IAM authentication trust with external OIDC providers.",
      "D": "Using long-lived service account keys creates severe security risks and violates the requirement for keyless authentication.",
      "E": "Private Service Connect provides private API consumption endpoints, not identity token federation for external workloads."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-050",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Resource Manager",
      "Project Liens",
      "Accidental Deletion",
      "Project Protection"
    ],
    "title": "Preventing Accidental Project Deletion Using Resource Manager Project Liens",
    "scenario": "A financial services company hosts its core transactional database and ledger inside the production project payment-ledger-prod. The engineering director mandates that no administrator, service account, or automated Terraform script can accidentally or maliciously delete this project under any circumstance. What should you configure to prevent project deletion until explicitly removed?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Project Lien on the project with restriction resourcemanager.projects.delete."
      },
      {
        "letter": "B",
        "text": "Remove the roles/resourcemanager.projectDeleter role from all project administrators."
      },
      {
        "letter": "C",
        "text": "Enable Object Retention and Bucket Lock on all Cloud Storage buckets in the project."
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy on compute.instances.delete for all service accounts."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Project Liens placed on a Google Cloud project with the restriction resourcemanager.projects.delete prevent any user or automated process from deleting the project until the lien is explicitly removed.",
    "distractors": {
      "B": "Project Owners possess project deletion permissions; removing specific sub-roles does not prevent Owners from deleting projects.",
      "C": "Bucket Lock protects individual storage objects from deletion, but does not block project-level deletion in Resource Manager.",
      "D": "An IAM Deny policy on compute.instances.delete protects VM instances from deletion, not the overarching project resource."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/project-liens",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D1-051",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud CLI",
      "Alpha Commands",
      "gcloud components",
      "Cloud SDK"
    ],
    "title": "Installing Alpha and Beta Command Groups in Google Cloud SDK",
    "scenario": "You are testing a preview feature on Compute Engine that is only available through the gcloud alpha CLI command group. When running gcloud alpha compute, the command fails with an error stating that the alpha component is not installed. You manage Cloud SDK installations on your local workstation and need to install the alpha commands quickly without reinstalling the entire SDK. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud config set core/component_manager alpha and restart the terminal session."
      },
      {
        "letter": "B",
        "text": "Run gcloud beta compute components install alpha using the preview package manager."
      },
      {
        "letter": "C",
        "text": "Run gcloud update --install-components=alpha to replace the existing SDK binaries."
      },
      {
        "letter": "D",
        "text": "Run gcloud components install alpha to download and install the required preview tool."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcloud CLI uses a component manager for standalone installations. Running gcloud components install alpha downloads and enables the alpha command group without needing to reinstall or modify core SDK configurations.",
    "distractors": {
      "A": "gcloud config set manages CLI properties such as project and region, but cannot install or enable new CLI components.",
      "B": "gcloud beta compute manages preview Compute Engine resources, not SDK package management commands.",
      "C": "gcloud components update updates currently installed components; the --install-components flag is not a valid option."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/components/install",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-052",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Storage",
      "Uniform Bucket-Level Access",
      "IAM Permissions",
      "Access Control Lists"
    ],
    "title": "Enforcing Uniform Bucket-Level Access for Cloud Storage Security",
    "scenario": "Your organization requires strict security governance for 50 Cloud Storage buckets containing sensitive financial data. Security policy mandates that all object permissions must be managed solely through project-level and bucket-level IAM policies, completely disabling legacy object Access Control Lists (ACLs). You need to configure this restriction while preventing accidental rollback to ACLs. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud storage buckets update with --pap=enforced across all target buckets."
      },
      {
        "letter": "B",
        "text": "Set an organization policy constraint requiring storage.retentionPolicySeconds on buckets."
      },
      {
        "letter": "C",
        "text": "Enable Uniform Bucket-Level Access on all buckets and lock the configuration after 90 days."
      },
      {
        "letter": "D",
        "text": "Apply custom IAM conditions on roles/storage.objectAdmin to block object-level ACL edits."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Uniform Bucket-Level Access (UBLA) disables legacy object ACLs, enforcing all access control exclusively through IAM. Once UBLA has been active on a bucket for 90 days, it can be permanently locked to prevent users from reverting to ACLs.",
    "distractors": {
      "A": "Public Access Prevention (--pap=enforced) prevents public sharing to allUsers, but does not disable object-level ACL evaluations.",
      "B": "Retention policies enforce object immutability durations for compliance, not IAM-only access control evaluation.",
      "D": "IAM conditions cannot dynamically intercept or disable legacy Cloud Storage XML API ACL evaluations."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/uniform-bucket-level-access",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-053",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "VPC Network Peering",
      "Custom Route Exchange",
      "Hybrid Networking",
      "Cloud Router"
    ],
    "title": "Importing and Exporting Custom Routes Across VPC Network Peering",
    "scenario": "Your company has established VPC Network Peering between vpc-hub and vpc-spoke. The vpc-hub network connects to an on-premises datacenter via Cloud Interconnect and advertises dynamic BGP routes. Compute Engine instances in vpc-spoke need to communicate with the on-premises datacenter through vpc-hub. Which two actions must you take to enable this route propagation? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable Cloud VPN between the vpc-hub subnets and vpc-spoke default gateway routers."
      },
      {
        "letter": "B",
        "text": "Update the peering in vpc-hub to export custom dynamic routes to the peered network."
      },
      {
        "letter": "C",
        "text": "Configure Cloud NAT on vpc-hub with endpoint-independent mapping for all spoke VMs."
      },
      {
        "letter": "D",
        "text": "Update the peering in vpc-spoke to import custom dynamic routes from the hub network."
      },
      {
        "letter": "E",
        "text": "Deploy a dual-nic proxy VM inside vpc-hub to route packets across the peering boundary."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "By default, VPC Network Peering only exchanges subnet routes. To pass dynamic BGP routes learned from Cloud Interconnect or Cloud VPN across peering, you must configure the peering connection in vpc-hub to export custom routes (--export-custom-routes) and configure the peering connection in vpc-spoke to import custom routes (--import-custom-routes).",
    "distractors": {
      "A": "VPC Network Peering already provides direct private connectivity; deploying Cloud VPN introduces unnecessary latency and tunneling overhead.",
      "C": "Cloud NAT provides outbound internet access for private instances, not private hybrid routing across peered VPC networks.",
      "E": "Dual-NIC proxy VMs introduce single points of failure and operational complexity when native VPC peering custom route exchange solves the requirement."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/importing-exporting-custom-routes",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-054",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Organization Policy",
      "Domain-Restricted Sharing",
      "IAM Governance",
      "Resource Hierarchy"
    ],
    "title": "Enforcing Domain-Restricted Sharing Across Google Cloud Organization",
    "scenario": "Your company wants to enforce a strict security perimeter preventing team members from granting IAM roles on corporate resources to external personal email accounts (such as @gmail.com or non-whitelisted domains). You need to enforce this policy centrally across all current and future projects in the organization with immediate effect. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Set the iam.allowedPolicyMemberDomains organization policy constraint with your directory ID."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Armor security policy containing IP rate limits and allow rules for your domain."
      },
      {
        "letter": "C",
        "text": "Configure a VPC Service Controls perimeter around all active projects using Access Context Manager."
      },
      {
        "letter": "D",
        "text": "Deploy an automated Cloud Function to scan IAM audit logs and revoke unauthorized email bindings."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The iam.allowedPolicyMemberDomains organization policy constraint (Domain-Restricted Sharing) restricts IAM policy member additions across the resource hierarchy exclusively to specified Cloud Identity or Google Workspace customer IDs.",
    "distractors": {
      "B": "Cloud Armor filters layer 7 web traffic at external HTTP(S) load balancers, not administrative IAM role grants.",
      "C": "VPC Service Controls perimeters prevent data exfiltration across Google Cloud APIs, but do not restrict IAM member identities.",
      "D": "Scanning audit logs reactively creates security gaps and operational overhead compared to preventative organization policy constraints."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-055",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud Audit Logs",
      "Data Access Logs",
      "Cloud Storage",
      "Log Sink"
    ],
    "title": "Enabling and Exporting Data Access Audit Logs for Sensitive Storage",
    "scenario": "A healthcare application stores patient medical records in Cloud Storage buckets. Auditors require continuous recording of all read and write object operations (ADMIN_READ, DATA_READ and DATA_WRITE), retained for 7 years and queryable in a BigQuery dataset named audit_analytics. Data Access audit logs are disabled by default because of their volume. Which two actions are required for the audit entries to land in that dataset? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable Object Versioning on buckets and export Cloud Monitoring access metrics to BigQuery tables."
      },
      {
        "letter": "B",
        "text": "Configure Cloud Storage Storage Insights inventory reports to run hourly exports to BigQuery."
      },
      {
        "letter": "C",
        "text": "Grant roles/logging.viewer to the audit group and schedule Cloud Functions to extract logs."
      },
      {
        "letter": "D",
        "text": "Enable Data Access audit logs in IAM audit config and create a Log Sink routing to BigQuery."
      },
      {
        "letter": "E",
        "text": "Grant the sink's writer identity the roles/bigquery.dataEditor role on the audit_analytics dataset."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Data Access logs for Cloud Storage must first be switched on in the project's IAM audit configuration, since only ADMIN_WRITE is captured by default, and a log sink then routes the matching entries to BigQuery. The sink is created with its own service identity, and Cloud Logging writes as that identity: until it holds roles/bigquery.dataEditor on the destination dataset every export silently fails and the dataset stays empty. Checking the sink's writer identity permission is the standard first diagnostic when an export produces no rows.",
    "distractors": {
      "A": "Object Versioning retains previous object payloads after an overwrite or delete, but it records nothing about who read an object.",
      "B": "Storage Insights produces inventory reports describing which objects exist; it is not a per-request record of API operations.",
      "C": "Polling logs from a Cloud Function adds latency and code to maintain, and roles/logging.viewer does not even grant access to Data Access logs."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/configure-data-access",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-056",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.2",
    "subsectionName": "Managing billing configuration",
    "conceptos": [
      "Cloud Billing",
      "Budgets and Alerts",
      "Pub/Sub",
      "Cloud Functions",
      "Cost Remediation"
    ],
    "title": "Triggering Automated Cost Remediation from Cloud Billing Budgets",
    "scenario": "Your finance department wants to prevent runaway cloud spending in a development project. You need to configure automated cost remediation so that when monthly project spend reaches 100% of the allocated budget, non-critical Compute Engine development instances are automatically stopped. Which two components must you configure? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a programmatic notification on the Cloud Billing budget connected to a Pub/Sub topic."
      },
      {
        "letter": "B",
        "text": "Configure a Cloud Monitoring alert policy with a Webhook notification pointing to Compute API."
      },
      {
        "letter": "C",
        "text": "Deploy a subscriber Cloud Function that parses the budget alert payload and stops VM instances."
      },
      {
        "letter": "D",
        "text": "Set an organization policy constraint on the project to disable the Compute Engine API at 100%."
      },
      {
        "letter": "E",
        "text": "Create a BigQuery scheduled query that deletes VM instances using an external Python connector."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Cloud Billing budgets cannot stop resources directly. To automate cost capping, you configure the budget to send programmatic JSON notifications to a Cloud Pub/Sub topic and deploy a subscriber Cloud Function (or Cloud Run service) that receives the message and executes instances.stop API calls on target VMs.",
    "distractors": {
      "B": "Cloud Monitoring webhook alerts cannot directly invoke authenticated Compute Engine mutation APIs without an intermediary compute worker.",
      "D": "Organization policy constraints cannot dynamically evaluate billing thresholds or conditionally disable APIs based on budget percentages.",
      "E": "BigQuery scheduled queries are designed for SQL data transformation, not real-time cloud resource lifecycle orchestration."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-057",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "gcloud auth",
      "Service Accounts",
      "CI/CD Pipelines",
      "Cloud SDK"
    ],
    "title": "Authenticating Google Cloud SDK in Headless CI/CD Runners",
    "scenario": "You are setting up an automated deployment script running inside an isolated Linux container on a self-hosted CI/CD build runner. The runner needs to authenticate non-interactively to Google Cloud using a dedicated service account and an authorized key file to execute gcloud and terraform deployments. Which command should you execute in the initialization script?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud config set auth/impersonate_service_account passing the target account identifier."
      },
      {
        "letter": "B",
        "text": "gcloud auth activate-service-account --key-file=sa-key.json specifying the key path."
      },
      {
        "letter": "C",
        "text": "gcloud auth login --no-launch-browser and pipe the authorization verification code."
      },
      {
        "letter": "D",
        "text": "gcloud auth application-default print-access-token and store it in an environment variable."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "gcloud auth activate-service-account --key-file=KEY_FILE sets up non-interactive authentication for the gcloud CLI in headless containerized environments using a service account credentials file.",
    "distractors": {
      "A": "gcloud config set auth/impersonate_service_account requires an already authenticated active identity with Service Account Token Creator permissions.",
      "C": "gcloud auth login --no-launch-browser is designed for interactive human user authentication requiring manual OAuth URL approval.",
      "D": "print-access-token prints a short-lived bearer token (1 hour) and requires existing Application Default Credentials."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-058",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Cloud KMS",
      "Customer-Managed Encryption Keys",
      "Cloud Storage",
      "CMEK"
    ],
    "title": "Configuring Default Customer-Managed Encryption Keys on Storage Buckets",
    "scenario": "Your company requires that all newly uploaded objects in a specific Cloud Storage bucket (sec-finance-data) must be automatically encrypted at rest using a Customer-Managed Encryption Key (CMEK) managed in Cloud KMS. Developers should not need to specify the KMS key in their upload API requests. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Set the bucket default KMS key and grant the Storage service agent the Encrypter/Decrypter role."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudkms.admin to all application developers and enforce custom IAM conditions."
      },
      {
        "letter": "C",
        "text": "Create a Cloud Storage lifecycle rule that encrypts unencrypted objects after 24 hours of creation."
      },
      {
        "letter": "D",
        "text": "Enable Customer-Supplied Encryption Keys (CSEK) in the Cloud Storage bucket metadata attributes."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Setting a bucket's default KMS key (gcloud storage buckets update gs://BUCKET --default-encryption-key=KEY) automatically encrypts all new objects written to that bucket. The Cloud Storage service agent must be granted roles/cloudkms.cryptoKeyEncrypterDecrypter on the KMS key.",
    "distractors": {
      "B": "Granting developers roles/cloudkms.admin violates least privilege and does not configure automatic default encryption on the bucket.",
      "C": "Lifecycle rules manage storage class transitions and object deletions, not retroactive encryption key bindings.",
      "D": "Customer-Supplied Encryption Keys (CSEK) require clients to pass raw AES keys with every upload request, violating transparent server-side enforcement."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/encryption/customer-managed-keys",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-059",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Shared VPC",
      "Compute Network User",
      "Subnet IAM",
      "Least Privilege"
    ],
    "title": "Granting Compute Network User Role on Specific Subnets in Shared VPC",
    "scenario": "Your organization operates a Shared VPC architecture where host-project manages all VPC networks and subnets. An engineering team manages instances in service-project-a. Following the principle of least privilege, developers in service-project-a must be permitted to deploy Compute Engine instances attached only to subnet-app (10.0.1.0/24), but must have no access to subnet-db (10.0.2.0/24). What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Grant the Network Admin role to developers at the host-project root level."
      },
      {
        "letter": "B",
        "text": "Grant the Compute Admin role to developers on the service-project-a resource."
      },
      {
        "letter": "C",
        "text": "Grant the Compute Network User role to developers at the host-project level."
      },
      {
        "letter": "D",
        "text": "Grant the Compute Network User role to developers on the subnet-app resource."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "In Shared VPC, granting roles/compute.networkUser at the individual subnet level (subnet-app) in the host project restricts developers in the service project to provisioning VMs only on that specific subnet.",
    "distractors": {
      "A": "roles/compute.networkAdmin gives full administrative control over all VPCs, firewalls, and routes in the host project, violating least privilege.",
      "B": "Granting Compute Admin in the service project allows VM management, but does not provide permissions to use subnets in the Shared VPC host project.",
      "C": "Granting Compute Network User at the host project level grants access to all subnets across all VPCs in the host project, violating the subnet-specific restriction."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc#iam_in_shared_vpc",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D1-060",
    "certId": "ace",
    "domainId": "ACE-D1",
    "sectionId": "ACE-1",
    "sectionName": "Setting up a cloud solution environment",
    "subsectionId": "ACE-1.1",
    "subsectionName": "Setting up cloud projects and accounts",
    "conceptos": [
      "Resource Manager Tags",
      "IAM Conditions",
      "Resource Hierarchy",
      "Conditional Access"
    ],
    "title": "Applying Conditional IAM Policies Using Resource Manager Tags",
    "scenario": "Your organization needs to manage IAM access permissions dynamically across hundreds of Compute Engine instances. Company policy mandates that database administrators must only have roles/compute.instanceAdmin.v1 permissions on virtual machines that are explicitly designated for development environments. You need to implement this governance centrally so that attaching or detaching an environment metadata label automatically updates access permissions. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Create custom Compute Engine network tags and write firewall rules filtering admin traffic."
      },
      {
        "letter": "B",
        "text": "Create an IAM group for database admins and manually manage project member lists per VM."
      },
      {
        "letter": "C",
        "text": "Set up VPC Service Controls perimeters with access levels matching VM IP ranges."
      },
      {
        "letter": "D",
        "text": "Bind Resource Manager tags to instances and grant IAM roles with tag-based conditions."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Resource Manager tags provide strongly typed, centrally governed key-value pairs that can be attached to Compute Engine instances. IAM conditions can evaluate these tags (resource.matchTag) to conditionally grant roles/compute.instanceAdmin.v1 only on matching development VMs.",
    "distractors": {
      "A": "Network tags apply only to VPC firewall rules and routing, and cannot be evaluated in IAM condition expressions.",
      "B": "Manually managing IAM groups per VM is unmaintainable at scale and does not dynamically react to resource metadata changes.",
      "C": "VPC Service Controls protect against data exfiltration across APIs, not per-instance IAM role authorization based on environment tags."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/tags-access-control",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-001",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Compute Engine",
      "Compute-Optimized Machine Family",
      "C2 Machine Series",
      "High-Frequency Workloads"
    ],
    "title": "Selecting Compute Engine Machine Family for High-Frequency Workloads",
    "scenario": "You are architecting a high-frequency trading calculation engine on Compute Engine. The workload is strictly single-threaded, CPU-bound, requires the highest possible per-core compute clock frequency (up to 3.8 GHz all-core turbo), and requires low memory latency. Cost is a secondary consideration. Which Compute Engine machine family should you select for this workload?",
    "options": [
      {
        "letter": "A",
        "text": "Memory-Optimized (M2 / M3) instance family configured with ultra-high RAM ratios."
      },
      {
        "letter": "B",
        "text": "Accelerator-Optimized (A2 / G2) instance family equipped with dedicated NVIDIA GPUs."
      },
      {
        "letter": "C",
        "text": "General-Purpose (E2 / N2D) instance family configured with standard shared vCPUs."
      },
      {
        "letter": "D",
        "text": "Compute-Optimized (C2 / C3) instance family offering ultra-high per-core performance."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Compute-Optimized machine types (C2, C2D, C3) offer the highest per-core performance, sustained high clock speeds (up to 3.8 GHz all-core turbo), and advanced CPU architecture optimized for compute-intensive and single-threaded financial simulations.",
    "distractors": {
      "A": "Memory-Optimized instances (M1/M2/M3) provide massive RAM capacity (up to 12 TB) for large in-memory databases, not maximum single-core clock speeds.",
      "B": "Accelerator-Optimized instances (A2/A3/G2) are built for massively parallel matrix operations and GPU training, not single-threaded scalar CPU tasks.",
      "C": "General-Purpose instances (E2/N2/N2D) offer cost-balanced compute and memory, but deliver lower single-core clock speeds than C2/C3."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/compute-optimized-machines",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-002",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Storage Classes",
      "Object Lifecycle Management",
      "Cost Optimization"
    ],
    "title": "Configuring Cost-Effective Cloud Storage Classes and Lifecycle Rules",
    "scenario": "Your organization ingests 10 TB of telemetry log files into Cloud Storage every month. Files are accessed frequently for the first 30 days during live operational analysis, accessed once or twice over the subsequent 60 days for compliance audits, and must be retained immutably for 365 days before permanent deletion. How should you configure the storage bucket to minimize overall storage costs?",
    "options": [
      {
        "letter": "A",
        "text": "Store files in Archive storage and use Cloud Functions to retrieve files on demand."
      },
      {
        "letter": "B",
        "text": "Store files in Coldline storage and set an Object Lifecycle rule to delete after 365 days."
      },
      {
        "letter": "C",
        "text": "Store in Standard class, transition to Nearline after 30 days, and delete after 365 days."
      },
      {
        "letter": "D",
        "text": "Store in Standard class, transition to Coldline after 30 days, and delete after 90 days."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Standard storage has no retrieval fees and is optimal for the active first 30 days. Transitioning to Nearline (designed for data accessed less than once a month, 30-day minimum duration) optimizes storage costs for days 31-90, while a 365-day lifecycle deletion rule satisfies the 1-year retention requirement.",
    "distractors": {
      "A": "Archive storage has high retrieval fees on frequent reads during the first 30 days and carries a 365-day minimum storage commitment.",
      "B": "Storing active operational data in Coldline incurs retrieval fees on frequent queries during the first 30 days.",
      "D": "Deleting objects after 90 days violates the mandatory 365-day compliance retention requirement."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/lifecycle",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-003",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud SQL",
      "High Availability",
      "Regional Instance",
      "Automated Failover"
    ],
    "title": "Planning Cloud SQL High Availability with Automated Regional Failover",
    "scenario": "You are provisioning a production Cloud SQL for MySQL database for an enterprise e-commerce portal. Business continuity requirements specify that the database must survive a complete datacenter (zonal) outage with a Recovery Point Objective (RPO) of 0 seconds and automated failover in under 60 seconds without requiring application code changes or IP reconfigurations. Which configuration should you choose?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a single-zone instance with automated daily backups and point-in-time recovery."
      },
      {
        "letter": "B",
        "text": "Configure the instance with High Availability (regional) to provision a standby node."
      },
      {
        "letter": "C",
        "text": "Deploy two independent zonal instances behind an Internal Application Load Balancer."
      },
      {
        "letter": "D",
        "text": "Provision an asynchronous cross-region read replica and manually promote on failure."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud SQL High Availability (HA) provisions a primary instance and a synchronous standby replica in separate zones in the same region. Persistent storage is synchronously replicated at the block level (RPO = 0), and automatic failover occurs in under 60 seconds maintaining the same IP endpoint.",
    "distractors": {
      "A": "Single-zone instances with backups do not provide automated sub-minute failover (RTO) during a zone outage.",
      "C": "Cloud SQL does not support active-active load balancing behind an Application Load Balancer without custom replication managers.",
      "D": "Asynchronous read replicas have replication lag (RPO > 0), require manual promotion, and change the connection IP address."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/high-availability",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-004",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Spanner",
      "Cloud SQL",
      "Global Scalability",
      "ACID Transactions"
    ],
    "title": "Selecting Cloud Spanner for Globally Distributed Relational Workloads",
    "scenario": "A global financial enterprise is designing a relational banking backend that will serve millions of concurrent transactions across North America, Europe, and Asia. The database requires strict ACID transactions, strong external consistency across all regions, horizontal write scalability without manual sharding, and 99.999% availability SLA. Which Google Cloud managed database service should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Spanner configured with a multi-region instance configuration."
      },
      {
        "letter": "B",
        "text": "Cloud SQL for PostgreSQL configured with cross-region read replicas."
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable configured with multi-cluster replication in SSD nodes."
      },
      {
        "letter": "D",
        "text": "Firestore in Datastore mode configured with multi-region replication."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Spanner is Google's fully managed relational database service that delivers horizontal write scaling, global ACID transactions, external consistency, and up to 99.999% availability SLA in multi-region configurations.",
    "distractors": {
      "B": "Cloud SQL is a single-region relational database with vertical scaling limits; cross-region replicas are read-only and asynchronously replicated.",
      "C": "Cloud Bigtable is a wide-column NoSQL store optimized for time-series analytics, but lacks relational SQL schemas and multi-row ACID transactions.",
      "D": "Firestore in Datastore mode is a document NoSQL database for server backends, not a global relational SQL database."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-005",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud NAT",
      "Cloud Router",
      "Private Subnets",
      "Egress Internet Access"
    ],
    "title": "Configuring Cloud NAT Gateway for Outbound Internet Connectivity",
    "scenario": "You are deploying an internal cluster of Compute Engine instances in a private subnet (10.10.0.0/24) without external public IP addresses. The applications must be able to initiate outbound HTTPS connections to external APIs and download OS updates from the public internet, but must strictly reject any unsolicited inbound connections from the internet. Which two networking resources must you configure in the VPC? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Deploy an external Network Load Balancer with target pools pointing to the private VMs."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Router in the specified region and VPC network to manage the gateway."
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall egress rule with target tag internet and action deny-all."
      },
      {
        "letter": "D",
        "text": "Configure a Cloud NAT gateway associated with the Cloud Router for the target subnet."
      },
      {
        "letter": "E",
        "text": "Configure Cloud Armor edge security policies on the private subnet default gateway."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Cloud NAT provides managed outbound internet connectivity for private instances without public IPs while blocking inbound internet traffic. To deploy Cloud NAT, you must create a Cloud Router in the target region and network, and then create a Cloud NAT gateway attached to that Cloud Router configuring the target subnet.",
    "distractors": {
      "A": "External Network Load Balancers route inbound traffic from the internet to instances, which exposes public endpoints instead of providing outbound NAT.",
      "C": "A firewall rule denying all egress traffic would block instances from accessing external APIs and OS update repositories.",
      "E": "Cloud Armor attaches to external HTTP(S) load balancers to mitigate inbound DDoS attacks, not private subnet egress NAT."
    },
    "officialDocUrl": "https://cloud.google.com/nat/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-006",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud Load Balancing",
      "Global External Application Load Balancer",
      "Anycast IP",
      "Multi-Region"
    ],
    "title": "Architecting Global External Application Load Balancer for Web Traffic",
    "scenario": "Your company is launching a global web application hosted on Compute Engine managed instance groups in three regions: us-central1, europe-west1, and asia-east1. You need a load balancing architecture that provides a single global Anycast IPv4 address, terminates SSL/TLS at Google's global edge network, and automatically routes users to the closest healthy backend region. Which load balancer should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Regional External Application Load Balancer configured in each region."
      },
      {
        "letter": "B",
        "text": "External Passthrough Network Load Balancer with global access enabled."
      },
      {
        "letter": "C",
        "text": "Global External Application Load Balancer with multi-region backends."
      },
      {
        "letter": "D",
        "text": "Internal Application Load Balancer with global cross-region routing."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Global External Application Load Balancer uses a single Anycast IPv4 address to terminate TLS at edge Google Front Ends (GFEs) worldwide and intelligently routes user requests to the closest healthy regional backend instance group.",
    "distractors": {
      "A": "Regional External Application Load Balancers operate in a single region with regional IPs and cannot route across multi-region backends through a single global Anycast IP.",
      "B": "External Passthrough Network Load Balancers operate at layer 4 without edge TLS termination or layer 7 content-based routing.",
      "D": "Internal Application Load Balancers route private internal VPC traffic, not public internet web clients."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/https",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-007",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Compute Engine",
      "Persistent Disk",
      "Read-Only Multi-Attach",
      "Filestore"
    ],
    "title": "Designing High-Performance Shared Read-Only Disk Architectures",
    "scenario": "An image rendering pipeline requires 20 Compute Engine worker VMs in the same zone (us-central1-a) to concurrently read a 500 GB static reference texture catalog. The catalog is updated once a week during a maintenance window. You need a block storage architecture that provides high read throughput, lowest storage cost, and allows simultaneous read access across all 20 VMs. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Provision a Filestore Enterprise instance and mount the NFS share on all VMs."
      },
      {
        "letter": "B",
        "text": "Create a Persistent Disk and attach it to all 20 worker instances in read-only mode."
      },
      {
        "letter": "C",
        "text": "Attach an individual Zonal Persistent Disk in read-write mode to each of the 20 VMs."
      },
      {
        "letter": "D",
        "text": "Attach a Local SSD to each worker VM and configure continuous background rsync."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Standard and SSD Persistent Disks can be attached simultaneously to multiple Compute Engine virtual machines in read-only mode (--mode=ro) within the same zone. This delivers high read throughput from a single 500 GB disk without paying for 20 separate disks or managed file servers.",
    "distractors": {
      "A": "Filestore provides managed NFS shares for multi-writer workloads, but costs significantly more per gigabyte than a single shared read-only Persistent Disk.",
      "C": "Attaching 20 separate 500 GB disks multiplies storage capacity and costs by 20x (10 TB total) unnecessarily.",
      "D": "Local SSDs are ephemeral, cannot be attached in shared multi-VM mode, and introduce synchronization complexity."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-008",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Bigtable",
      "Time-Series Ingestion",
      "NoSQL Database",
      "High Throughput"
    ],
    "title": "Selecting Cloud Bigtable for High-Throughput Time-Series Ingestion",
    "scenario": "An IoT fleet monitoring company needs to ingest telemetry data from 500,000 connected vehicles. The system receives over 100,000 write events per second with sub-10ms latency. The dataset will grow by 2 TB per day, consisting of time-series key-value sensor metrics that will be analyzed by downstream data analytics pipelines. Which storage solution should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Bigtable with an SSD cluster configuration and optimized row key schemas."
      },
      {
        "letter": "B",
        "text": "Cloud SQL for PostgreSQL with auto-scaling storage and multi-zone failover nodes."
      },
      {
        "letter": "C",
        "text": "Firestore in Native mode with automated collection indexing and document rules."
      },
      {
        "letter": "D",
        "text": "Cloud Memorystore for Redis with high availability standard tier replication."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Bigtable is Google Cloud's NoSQL wide-column database built for massive write throughput (hundreds of thousands of QPS), low latency (sub-10ms), and petabyte-scale time-series and IoT workloads.",
    "distractors": {
      "B": "Cloud SQL is a relational database designed for transactional OLTP workloads, not 100,000 writes/sec time-series ingestion which exceeds single-instance limits.",
      "C": "Firestore is designed for mobile/web document applications with transactional indexes; 100,000 writes/sec would exceed document write rate limits and incur high costs.",
      "D": "Memorystore for Redis is an in-memory cache with memory size limitations (up to 300 GB), making it unviable for terabytes of persistent historical telemetry."
    },
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-009",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud Interconnect",
      "Dedicated Interconnect",
      "VLAN Attachment",
      "Cloud Router",
      "BGP"
    ],
    "title": "Provisioning Dedicated Interconnect for High-Bandwidth Hybrid Connectivity",
    "scenario": "Your enterprise requires a dedicated 10 Gbps private physical network connection between its on-premises data center and Google Cloud VPC to transfer sensitive medical databases. The connection must not traverse the public internet and must support dynamic BGP routing with an industry-standard 99.99% availability SLA. Which two networking components must you configure in Google Cloud? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Order physical Dedicated Interconnect connections at a colocation facility."
      },
      {
        "letter": "B",
        "text": "Configure an IPsec Cloud VPN tunnel over public carrier transit connections."
      },
      {
        "letter": "C",
        "text": "Create a Cloud NAT gateway with static public IP addresses for on-prem CIDRs."
      },
      {
        "letter": "D",
        "text": "Create Interconnect VLAN attachments associated with a regional Cloud Router."
      },
      {
        "letter": "E",
        "text": "Configure Cloud CDN cache keys to accelerate on-premises private file transfers."
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Dedicated Interconnect provides direct physical 10 Gbps (or 100 Gbps) connections between an on-premises network and Google Cloud at a colocation facility. In the Google Cloud project, you provision VLAN attachments (interconnectAttachments) associated with a Cloud Router to establish BGP peering sessions over the dedicated link.",
    "distractors": {
      "B": "Cloud VPN traverses the public internet with IPsec encapsulation and cannot provide 10 Gbps dedicated physical line throughput.",
      "C": "Cloud NAT provides outbound internet access for private VMs, not private hybrid Layer 3 BGP routing over direct fiber links.",
      "E": "Cloud CDN caches public web HTTP content at edge PoPs, not private internal database transfers over Interconnect."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    "difficulty": "hard",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D2-010",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Compute Engine",
      "Spot VMs",
      "Managed Instance Groups",
      "Batch Processing",
      "Cost Optimization"
    ],
    "title": "Architecting Cost-Effective Batch Processing with Spot VMs in Regional MIG",
    "scenario": "You are designing a nightly batch video transcoding architecture that processes thousands of independent, idempotent encoding tasks. Each task takes 10 minutes to run and writes intermediate checkpoints to Cloud Storage. Management requires minimizing compute costs by at least 60% while ensuring the system automatically replaces any instances reclaimed during processing. How should you architect this compute cluster?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a single-zone unmanaged instance group using custom machine types and SSDs."
      },
      {
        "letter": "B",
        "text": "Deploy a Regional Managed Instance Group configured with Spot VMs and autohealing."
      },
      {
        "letter": "C",
        "text": "Provision Sole-Tenant Nodes with committed use discounts across two distinct zones."
      },
      {
        "letter": "D",
        "text": "Deploy high-memory N2 instances configured with sustained use discount policies."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Spot VMs provide 60-91% discounts compared to standard VM pricing. For stateless, fault-tolerant batch workloads with checkpoints, deploying a Regional Managed Instance Group (MIG) using Spot VMs automatically recreates preempted instances across zones to maintain target processing capacity.",
    "distractors": {
      "A": "Unmanaged instance groups lack autoscaling, autohealing, and automated replacement upon node preemption.",
      "C": "Sole-Tenant Nodes provide dedicated physical servers for licensing and compliance, carrying high costs unsuitable for disposable batch transcoding.",
      "D": "Standard on-demand instances with sustained use discounts provide at most 20-30% savings, far below the 60-91% discount of Spot VMs."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/spot",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-011",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Firestore",
      "Native Mode",
      "Datastore Mode",
      "Mobile SDK",
      "Real-Time Sync"
    ],
    "title": "Selecting Firestore Native Mode for Real-Time Client Applications",
    "scenario": "A software development team is building a new cross-platform mobile and web application. The frontend architecture requires direct client-to-database connections, real-time data synchronization using WebSockets, automated offline caching with background sync upon reconnection, and granular row-level security rules. Which database solution should you choose?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy Cloud SQL for PostgreSQL and configure client-side polling mechanisms."
      },
      {
        "letter": "B",
        "text": "Provision Cloud Bigtable with SSD storage nodes and expose custom REST APIs."
      },
      {
        "letter": "C",
        "text": "Configure Firestore in Native mode to provide mobile SDKs and live listeners."
      },
      {
        "letter": "D",
        "text": "Configure Firestore in Datastore mode to provide backend document scalability."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Firestore in Native mode provides client-side mobile/web SDKs with built-in real-time listeners, offline persistence with automatic synchronization, and Firestore Security Rules for direct, secure mobile client access.",
    "distractors": {
      "A": "Cloud SQL requires backend API connection pooling; client polling introduces high latency and wastes mobile battery and bandwidth.",
      "B": "Cloud Bigtable is designed for high-throughput server analytics and lacks mobile SDKs, client offline caching, and real-time WebSocket listeners.",
      "D": "Datastore mode is designed for server-side backends and App Engine; it does not support client real-time listeners or mobile SDKs."
    },
    "officialDocUrl": "https://cloud.google.com/firestore/docs/firestore-or-datastore",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-012",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud DNS",
      "Private Zones",
      "Internal Service Discovery",
      "VPC Networking"
    ],
    "title": "Designing Cloud DNS Private Zones for Multi-VPC Service Discovery",
    "scenario": "You are deploying microservices across three separate VPC networks (vpc-dev, vpc-staging, and vpc-prod) within a single Google Cloud project. You need internal domain name resolution for the private domain corp.internal so that instances in all three VPCs can resolve service hostnames without exposing DNS records to the public internet or managing DNS servers. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Public Managed Zone and attach an IAM deny policy blocking public IPs."
      },
      {
        "letter": "B",
        "text": "Deploy self-managed BIND DNS virtual machines in each VPC with zone transfers."
      },
      {
        "letter": "C",
        "text": "Configure static host entries in /etc/hosts on all VMs using startup scripts."
      },
      {
        "letter": "D",
        "text": "Create a Cloud DNS Private Zone for corp.internal authorized for all 3 VPCs."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud DNS Private Managed Zones provide internal DNS resolution for private domains. You can bind a single Private Managed Zone to multiple authorized VPC networks within a project, enabling unified private name resolution without public internet exposure.",
    "distractors": {
      "A": "Public Managed Zones publish DNS records to the global public internet root servers, exposing internal hostnames to external reconnaissance.",
      "B": "Self-managed BIND servers on VMs add maintenance overhead, single points of failure, and manual zone synchronization complexity.",
      "C": "Static /etc/hosts files cannot scale with dynamically autoscaling instances and require manual updates for IP changes."
    },
    "officialDocUrl": "https://cloud.google.com/dns/docs/zones/private-zones",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-013",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Network Service Tiers",
      "Premium Tier",
      "Standard Tier",
      "Global Backbone"
    ],
    "title": "Selecting Network Service Tiers for Low-Latency Global Performance",
    "scenario": "Your organization operates an interactive multiplayer gaming platform with players located worldwide. To minimize packet loss, jitter, and latency, player game traffic must enter Google's private global fiber network at the nearest edge Point of Presence (PoP) to the user and remain on Google's high-speed backbone until reaching the backend VMs. Cost is a secondary consideration. Which Network Service Tier should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Premium Tier for external IP addresses to leverage Google global fiber backbone."
      },
      {
        "letter": "B",
        "text": "Standard Tier for external IP addresses to route traffic through public ISPs."
      },
      {
        "letter": "C",
        "text": "Direct Peering Tier to connect player networks directly via internet exchanges."
      },
      {
        "letter": "D",
        "text": "Cloud CDN Tier to accelerate non-HTTP dynamic UDP packets at edge locations."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Premium Tier routes inbound traffic over Google's global private fiber network, ingesting packets at the edge PoP nearest to the user. This minimizes hops across the public internet, reducing latency and packet loss.",
    "distractors": {
      "B": "Standard Tier routes traffic over the public transit ISP network and only enters Google's network in the destination region, resulting in higher latency and jitter.",
      "C": "Direct Peering is a physical peering agreement for enterprise networks, not a Compute Engine network service tier option.",
      "D": "There is no 'Cloud CDN Tier' in Network Service Tiers; Cloud CDN caches HTTP(S) content, not dynamic UDP gaming traffic."
    },
    "officialDocUrl": "https://cloud.google.com/network-tiers/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-014",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Memorystore",
      "Redis",
      "In-Memory Caching",
      "High Availability"
    ],
    "title": "Selecting Cloud Memorystore for Low-Latency In-Memory Caching",
    "scenario": "A microservices web application running on Google Kubernetes Engine requires an in-memory session cache and message broker. The caching layer must deliver sub-millisecond read/write latencies, support complex data structures (hashes, sorted sets, lists), and provide automated cross-zone failover with a 99.9% availability SLA. Which managed Google Cloud database service should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Memorystore for Memcached configured with multiple shared cache nodes."
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Redis configured with Standard Tier high availability."
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable deployed with SSD storage nodes and single-cluster routing."
      },
      {
        "letter": "D",
        "text": "Cloud SQL for MySQL deployed with regional high availability instance pairs."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Memorystore for Redis Standard Tier provides fully managed, highly available in-memory caching with automatic cross-zone failover, 99.9% availability SLA, and native support for rich data structures (hashes, sorted sets, lists, pub/sub).",
    "distractors": {
      "A": "Memorystore for Memcached is a simple multithreaded key-value cache without persistence, complex data structures, or automated HA cross-zone failover.",
      "C": "Cloud Bigtable is a persistent disk/SSD-backed NoSQL store with single-digit millisecond latency (5-10ms), higher than in-memory sub-millisecond RAM caching.",
      "D": "Cloud SQL is a disk-based relational database designed for transactional OLTP, not ultra-low-latency in-memory session caching."
    },
    "officialDocUrl": "https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-015",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Compute Engine",
      "Regional Persistent Disk",
      "Disaster Recovery",
      "Zero RPO"
    ],
    "title": "Designing Disaster Recovery with Regional Persistent Disk Failover",
    "scenario": "You are designing a mission-critical database running on Compute Engine that cannot use database-level replication. Business requirements mandate that the architecture must survive a complete zone outage with a Recovery Point Objective (RPO) of 0 seconds and a Recovery Time Objective (RTO) under 2 minutes. How should you architect the underlying block storage?",
    "options": [
      {
        "letter": "A",
        "text": "Create a multi-region Cloud Storage bucket and mount it via Cloud Storage FUSE."
      },
      {
        "letter": "B",
        "text": "Attach Local SSDs to the instance and execute cron rsync scripts every minute."
      },
      {
        "letter": "C",
        "text": "Provision a Regional Persistent Disk synchronously replicated across two zones."
      },
      {
        "letter": "D",
        "text": "Schedule automated Zonal Persistent Disk snapshots to run every five minutes."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Regional Persistent Disks provide synchronous block-level replication across two zones in the same region, ensuring zero data loss (RPO = 0). If the active zone fails, the disk can be forcibly attached (--force-attach) to a standby VM in the secondary zone in under two minutes.",
    "distractors": {
      "A": "Cloud Storage FUSE does not support POSIX locking, has high network latency, and cannot serve as a high-performance database block storage device.",
      "B": "Local SSDs are ephemeral and do not survive VM stops; periodic rsync scripts introduce data loss (RPO > 0) and high operational overhead.",
      "D": "Snapshots run periodically at intervals (introducing data loss, failing RPO = 0) and take time to restore new disks, failing tight RTO goals."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/regional-persistent-disks",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-016",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Sole-Tenant Nodes",
      "Compute Engine",
      "BYOL licensing",
      "Physical hardware isolation",
      "Node affinity labels"
    ],
    "title": "Planning Sole-Tenant Nodes for Regulatory Hardware Isolation and BYOL",
    "scenario": "A healthcare organization is migrating licensed Windows Server and Microsoft SQL Server workloads to Compute Engine. Due to strict software licensing agreements (BYOL per physical socket/core) and HIPAA physical hardware isolation mandates, the company requires instances to run on dedicated, non-shared physical servers with full visibility over core allocation and maintenance schedules. What Compute Engine feature should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy VMs on N2 shared instances configured with Customer-Supplied Encryption Keys."
      },
      {
        "letter": "B",
        "text": "Create a Google Kubernetes Engine Autopilot cluster using isolated private nodes."
      },
      {
        "letter": "C",
        "text": "Provision standard E2 instances assigned to dedicated VPC subnet security perimeters."
      },
      {
        "letter": "D",
        "text": "Provision Sole-Tenant Node Groups and apply node affinity labels to VM instances."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Sole-Tenant Nodes provide dedicated physical Compute Engine servers for your exclusive use, ensuring physical hardware isolation, compliance with HIPAA/PCI-DSS standards, and support for Bring-Your-Own-License (BYOL) scenarios requiring visibility over physical cores and sockets. Affinity labels are used to schedule specific VMs onto designated node groups.",
    "distractors": {
      "A": "CSEK provides disk encryption at rest using customer keys but runs on multi-tenant physical hardware, violating physical isolation and per-socket software licensing mandates.",
      "B": "GKE Autopilot manages underlying node infrastructure across shared multi-tenant hosts and cannot satisfy physical host licensing or dedicated single-tenant server requirements.",
      "C": "VPC subnet security perimeters isolate network traffic but do not provide dedicated physical server hardware or socket-level host management."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-017",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Shared VPC",
      "Host Project",
      "Service Projects",
      "Centralized Network Administration",
      "VPC Network Peering"
    ],
    "title": "Choosing Between VPC Network Peering and Shared VPC",
    "scenario": "An enterprise has 15 autonomous business units, each in its own Google Cloud project. The central security team must administer all subnets, firewall rules, routes and Cloud NAT gateways from one project, while developers in each business unit project attach their own Compute Engine VMs to those centrally managed subnets. Which two actions are required? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Shared VPC with a central Host project and business unit Service projects."
      },
      {
        "letter": "B",
        "text": "Establish a full-mesh VPC Network Peering topology across all 15 individual projects."
      },
      {
        "letter": "C",
        "text": "Provision Cloud VPN gateways with dynamic BGP routing between all 15 individual VPCs."
      },
      {
        "letter": "D",
        "text": "Deploy all 15 business unit workloads inside a single project using IAM role perimeters."
      },
      {
        "letter": "E",
        "text": "Grant the business unit developers roles/compute.networkUser on the host project subnets."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Shared VPC puts the network in a host project and attaches the 15 business unit projects as service projects, which gives the security team single-point control of subnets, firewalls, routes and Cloud NAT. Attachment alone does not let anyone use the network: a service project principal can only create a VM on a shared subnet if they hold roles/compute.networkUser on that subnet (or on the host project). Skipping that grant is the most common Shared VPC failure, and it surfaces as subnets not appearing in the VM creation form.",
    "distractors": {
      "B": "VPC Network Peering joins autonomous VPCs but leaves each project owning its own subnets and firewall rules, so nothing is centralized.",
      "C": "Cloud VPN between 15 VPCs adds tunnel bandwidth limits and encryption overhead while still leaving network administration decentralized.",
      "D": "Collapsing 15 business units into one project destroys resource isolation and per-unit IAM and billing boundaries."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-018",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Coldline Storage",
      "Early Deletion Fee",
      "Minimum Storage Duration",
      "Object Lifecycle Management"
    ],
    "title": "Evaluating Cloud Storage Lifecycle Minimum Duration Penalties",
    "scenario": "An operations team writes automated temporary diagnostic logs (100 TB monthly) to a Cloud Storage bucket configured with default storage class Coldline. An Object Lifecycle Management rule deletes these diagnostic log objects after 10 days. At the end of the billing cycle, the invoice reflects unexpected high storage charges. What is the root cause of these unexpected charges?",
    "options": [
      {
        "letter": "A",
        "text": "Coldline storage charges an upfront provisioning fee of $0.05 per GB for all newly created objects."
      },
      {
        "letter": "B",
        "text": "Coldline enforces a 90-day minimum storage duration, charging an early deletion fee for 80 days."
      },
      {
        "letter": "C",
        "text": "Object Lifecycle Management incurs an egress bandwidth surcharge when deleting uncompressed data."
      },
      {
        "letter": "D",
        "text": "Deleting Coldline objects automatically triggers high-priority metadata replication to Archive tier."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Coldline storage has a 90-day minimum storage duration requirement. If an object is deleted or replaced before 90 days have elapsed, Google Cloud bills an early deletion fee equal to the remaining storage cost for the remainder of the 90-day commitment (in this case, 80 remaining days).",
    "distractors": {
      "A": "Cloud Storage does not charge upfront provisioning fees for object creation; charges are based on stored capacity and duration.",
      "C": "Object Lifecycle Management deletes objects asynchronously at no additional network egress bandwidth fee.",
      "D": "Deleting objects permanently deletes data and does not replicate metadata or objects into Archive storage."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes#coldline",
    "difficulty": "medium",
    "blockId": "BLOCK-2"
  },
  {
    "id": "ACE-D2-019",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Alias IP ranges",
      "VPC Subnets",
      "Secondary IP ranges",
      "Compute Engine",
      "Container Networking"
    ],
    "title": "Designing Subnet Topology for High-Density Microservices with Alias IPs",
    "scenario": "You are configuring a VPC custom subnet in us-central1 that will host 50 Compute Engine instances running container orchestration. Each instance will host up to 30 containerized microservice pods, and every container pod must be directly addressable within the private VPC network using its own distinct internal IP address. How should you design the subnet IP allocation?",
    "options": [
      {
        "letter": "A",
        "text": "Attach 30 independent virtual network interfaces (NICs) to each Compute Engine VM instance."
      },
      {
        "letter": "B",
        "text": "Assign 30 external ephemeral IP addresses to each Compute Engine VM instance for direct routing."
      },
      {
        "letter": "C",
        "text": "Configure a secondary subnet CIDR range and allocate an Alias IP range (/27) to each instance."
      },
      {
        "letter": "D",
        "text": "Provision 30 separate VPC networks connected to each VM instance through Cloud VPN gateways."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Alias IP ranges allow you to assign a range of internal IP addresses from a secondary subnet CIDR block to a single VM network interface. This allows hosted containers or pods on that VM to receive their own first-class private IP addresses on the VPC network without requiring multiple physical NICs.",
    "distractors": {
      "A": "Compute Engine limits instances to a maximum of 8 virtual network interfaces (NICs), making 30 NICs per instance technically impossible.",
      "B": "Assigning external IP addresses exposes internal microservices to the public internet and violates private VPC internal routing standards.",
      "D": "Provisioning 30 separate VPC networks creates extreme operational complexity and violates VPC routing limits without enabling pod-level addressing."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/alias-ip",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-020",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "External Passthrough Network Load Balancer",
      "Layer 4 Load Balancing",
      "UDP",
      "Direct Server Return",
      "Preserve Client IP"
    ],
    "title": "Selecting Cloud Load Balancer for Layer 4 Non-HTTP Protocols with Direct Server Return",
    "scenario": "You are deploying a multiplayer UDP game server and custom TCP streaming service on Compute Engine. The architecture requires high-throughput Layer 4 load balancing that preserves client source IP addresses, does not perform TLS/TCP termination proxying, and supports Direct Server Return (DSR) where backend server responses bypass the load balancer to minimize round-trip latency. Which load balancer should you choose?",
    "options": [
      {
        "letter": "A",
        "text": "Regional External Application Load Balancer with WebSockets enabled."
      },
      {
        "letter": "B",
        "text": "Global External Application Load Balancer with HTTP/2 proxying mode."
      },
      {
        "letter": "C",
        "text": "External Passthrough Network Load Balancer based on backend services."
      },
      {
        "letter": "D",
        "text": "External Proxy Network Load Balancer with TCP SSL termination enabled."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "External Passthrough Network Load Balancers operate at Layer 4 without proxying. They route UDP/TCP packets directly to backend instances with Direct Server Return (DSR), preserving client source IP addresses and delivering high throughput and low latency.",
    "distractors": {
      "A": "Application Load Balancers operate at Layer 7 (HTTP/HTTPS) and do not support raw UDP packet traffic or Direct Server Return.",
      "B": "Global External Application Load Balancers terminate connections at the Google edge proxy, altering client source IPs and rejecting UDP packets.",
      "D": "External Proxy Network Load Balancers terminate TCP connections at proxy instances and do not support UDP or Direct Server Return."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/passthrough-network-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-021",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "HA Cloud VPN",
      "99.99% SLA",
      "Cloud Router",
      "BGP dynamic routing",
      "Dual IPsec tunnels"
    ],
    "title": "Planning HA Cloud VPN Architecture with 99.99% Availability SLA",
    "scenario": "An enterprise is connecting its on-premises corporate data center to Google Cloud using Cloud VPN. Corporate governance mandates a 99.99% network availability SLA for production traffic across the hybrid connection. Which two architectural configurations must you implement to qualify for Google Cloud's 99.99% HA VPN SLA? Choose 2.",
    "options": [
      {
        "letter": "A",
        "text": "Configure static policy-based routes pointing to redundant on-premises gateway IPs."
      },
      {
        "letter": "B",
        "text": "Configure dynamic routing using Cloud Router with Border Gateway Protocol (BGP)."
      },
      {
        "letter": "C",
        "text": "Deploy two Classic VPN gateways in different regions connected via VPC Peering."
      },
      {
        "letter": "D",
        "text": "Enable Cloud Armor adaptive protection on the external VPN gateway interface IPs."
      },
      {
        "letter": "E",
        "text": "Deploy an HA VPN gateway with two active tunnels configured across both interfaces."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Google Cloud guarantees a 99.99% availability SLA for HA Cloud VPN only when: (1) An HA VPN gateway is deployed with two tunnels operating on separate gateway interfaces (interface 0 and interface 1) connected to peer gateway(s), and (2) dynamic routing is configured using Cloud Router and BGP.",
    "distractors": {
      "A": "HA VPN with a 99.99% SLA requires dynamic BGP routing with Cloud Router; static routing does not qualify for the 99.99% HA VPN SLA.",
      "C": "Classic VPN is deprecated for new designs and only supports a 99.9% availability SLA.",
      "D": "Cloud Armor protects HTTP(S) and TCP/UDP load balancers against web attacks, not IPsec VPN gateway tunnels."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/vpn/concepts/ha-vpn-topologies",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-022",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "BigQuery",
      "Table Partitioning",
      "Table Clustering",
      "FinOps",
      "Query Cost Optimization"
    ],
    "title": "Selecting BigQuery Storage Model: Partitioning vs Clustering for FinOps",
    "scenario": "A data analytics team runs hundreds of daily analytical queries over a 50 TB telemetry dataset in BigQuery. The vast majority of queries filter by event_timestamp within a 7-day rolling window and group by customer_id and region. To optimize query performance and minimize BigQuery on-demand analysis scan costs, how should you plan the table structure?",
    "options": [
      {
        "letter": "A",
        "text": "Partition the table by day on event_timestamp, and cluster the table by customer_id and region."
      },
      {
        "letter": "B",
        "text": "Shard the table into 365 individual daily tables named telemetry_events_YYYYMMDD in the dataset."
      },
      {
        "letter": "C",
        "text": "Cluster the table by event_timestamp and customer_id without defining any table partition keys."
      },
      {
        "letter": "D",
        "text": "Create external BigQuery tables referencing raw unpartitioned Parquet files in Cloud Storage."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Partitioning by day on the timestamp column allows BigQuery to prune unread date partitions, dramatically reducing the number of bytes scanned and cutting query costs. Adding clustering on customer_id and region further sorts the data within partitions, accelerating multi-column filtering and aggregations.",
    "distractors": {
      "B": "Date-sharded tables (e.g. table_YYYYMMDD) degrade query performance, increase schema maintenance overhead, and are an anti-pattern compared to native partitioned tables.",
      "C": "Clustering alone without partitioning does not eliminate unread date partitions, forcing BigQuery to scan more data blocks and incurring higher on-demand query fees.",
      "D": "External tables on Cloud Storage lack native BigQuery storage format optimizations, resulting in slower query performance and higher scan overhead."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/partitioned-tables",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-023",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Local SSD",
      "Persistent Disk",
      "Extreme IOPS",
      "Scratch Disk",
      "Compute Engine"
    ],
    "title": "Planning Local SSD vs Persistent Disk for Extreme IOPS Scratch Disks",
    "scenario": "A machine learning training pipeline running on Compute Engine requires an ultra-high-speed temporary scratch storage volume to store uncompressed image training batches. The pipeline requires over 800,000 read IOPS and sub-millisecond latency. The data is purely temporary and can be regenerated from Cloud Storage if the instance stops. Which disk type should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage bucket mounted inside the VM using the Cloud Storage FUSE driver."
      },
      {
        "letter": "B",
        "text": "Standard Persistent Disk (pd-standard) configured with maximum disk capacity."
      },
      {
        "letter": "C",
        "text": "Balanced Persistent Disk (pd-balanced) attached in read-write mode to the VM."
      },
      {
        "letter": "D",
        "text": "Local SSD NVMe disks attached directly to the physical Compute Engine host VM."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Local SSDs are physically attached to the host server running the VM instance, delivering very high IOPS (over 800,000 read IOPS with multiple partitions) and sub-millisecond latency. Because Local SSDs are ephemeral and tied to the physical host, they are ideal for temporary scratch space, caches, and ML processing.",
    "distractors": {
      "A": "Cloud Storage FUSE operates over network APIs with high latency and cannot deliver the 800,000 IOPS required for high-speed ML scratch workloads.",
      "B": "Standard Persistent Disk (pd-standard) is backed by standard HDDs with IOPS capped at a few thousand, far below 800,000 IOPS.",
      "C": "Balanced Persistent Disk (pd-balanced) caps out at 80,000 IOPS per VM, which cannot satisfy the 800,000 IOPS requirement of Local SSDs."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/local-ssd",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-024",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Custom Machine Types",
      "Compute Engine",
      "Resource Sizing",
      "FinOps",
      "Cost Optimization"
    ],
    "title": "Planning Custom Machine Types for Optimal Resource Sizing and Cost Efficiency",
    "scenario": "An internal monolithic application running on Compute Engine requires exactly 6 vCPUs and 45 GB of RAM to operate efficiently. The predefined n2-standard-8 (8 vCPUs, 32 GB RAM) lacks sufficient memory, while the n2-standard-16 (16 vCPUs, 64 GB RAM) wastes 10 vCPUs, inflating monthly compute costs. How should you provision the instance?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy two n2-standard-4 instances and split application memory across both servers."
      },
      {
        "letter": "B",
        "text": "Provision an m2-ultramem-208 instance configured with extended memory thresholds."
      },
      {
        "letter": "C",
        "text": "Create a Custom Machine Type specifying exactly 6 vCPUs and 45 GB of system memory."
      },
      {
        "letter": "D",
        "text": "Provision an n2-standard-8 instance and attach 8 Local SSD partitions as virtual swap."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Compute Engine allows you to create Custom Machine Types where you tailor the exact number of vCPUs and memory to match your workload requirements. This avoids overprovisioning unused vCPUs and optimizes monthly infrastructure costs.",
    "distractors": {
      "A": "Splitting a monolithic application across two smaller instances requires major software refactoring and does not provide unified memory.",
      "B": "M2 Ultra-memory instances are designed for massive SAP HANA databases (thousands of GB RAM) and are excessively expensive for a 45 GB workload.",
      "D": "Using SSD storage as OS swap space introduces severe latency penalties compared to physical RAM and degrades application performance."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-025",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud SQL",
      "Read Replicas",
      "Database Scaling",
      "Read Offloading",
      "High Availability"
    ],
    "title": "Architecting Cloud SQL Read Replicas for High-Volume Read Offloading",
    "scenario": "An e-commerce business runs its primary transactional database on Cloud SQL for MySQL. Business intelligence reporting queries drive CPU on the primary instance high during business hours and degrade checkout latency. You must offload the analytical reads without weakening write consistency. The primary instance was originally created with automated backups turned off. Which two steps are required? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Migrate the transactional database from Cloud SQL to a Cloud Memorystore Redis cluster."
      },
      {
        "letter": "B",
        "text": "Provision Cloud SQL read replicas and direct the reporting queries to replica endpoints."
      },
      {
        "letter": "C",
        "text": "Increase the automated backup frequency on the primary Cloud SQL instance to 15 minutes."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged MySQL VM instance on Compute Engine and run manual daily CSV dumps."
      },
      {
        "letter": "E",
        "text": "Enable automated backups and binary logging on the primary Cloud SQL instance."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Read replicas are the supported way to serve reporting traffic: they replicate asynchronously from the primary and are queried through their own endpoints, so the primary keeps its write consistency untouched. Cloud SQL builds that replication stream from the primary's binary logs, so a replica cannot be created until automated backups and binary logging are enabled on the primary. On an instance created without backups, that prerequisite step is what makes the 'create replica' action available at all.",
    "distractors": {
      "A": "Memorystore for Redis is an in-memory key-value cache; it cannot run relational reporting queries, joins, or ACID transactions.",
      "C": "More frequent backups produce more snapshots but run against the same instance and remove none of the reporting CPU load.",
      "D": "A self-managed MySQL VM fed by daily CSV dumps serves stale data and adds replication and patching work you would own."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/replication/create-replica",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-026",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Multi-Region Location",
      "High Availability",
      "Disaster Recovery",
      "Geo-redundancy"
    ],
    "title": "Planning Global Multi-Region Storage Class vs Single-Region Storage",
    "scenario": "A media streaming platform serves static video thumbnails and marketing assets to millions of end users distributed across the United States. Corporate policy mandates maximum availability (99.95%), automated failover across geographically separated data centers, and low-latency egress routing. Which Cloud Storage bucket location type should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Multi-Region location type (such as the US multi-region)."
      },
      {
        "letter": "B",
        "text": "Single Region location type (such as region us-central1)."
      },
      {
        "letter": "C",
        "text": "Dual-Region location type configured with Archive class."
      },
      {
        "letter": "D",
        "text": "Regional Persistent Disk mounted over NFS shared storage."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A Multi-Region Cloud Storage location stores object data redundantly across at least two geographic locations separated by at least 100 miles within a large geographic area (such as the US). This provides 99.95% availability SLA and geo-redundancy against regional disasters.",
    "distractors": {
      "B": "Single-region buckets store data redundantly across zones within one region (99.9% availability) but do not survive regional data center outages.",
      "C": "Archive storage class is designed for cold disaster recovery accessed less than once a year, incurring high retrieval costs for active video thumbnails.",
      "D": "Regional Persistent Disks are block storage devices attached to Compute Engine VMs, not globally accessible object storage buckets."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#location-mr",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-027",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Cloud Run",
      "Serverless Containers",
      "Concurrency",
      "Scale to Zero",
      "Microservices"
    ],
    "title": "Designing Serverless Compute: Cloud Run vs Cloud Functions vs GKE Autopilot",
    "scenario": "A development team is architecting a RESTful microservice backend. Requirements: 1) Deploy custom container images packaged with specific binary libraries. 2) Automatically scale down to zero instances when idle to eliminate compute costs. 3) Handle up to 80 concurrent requests per container instance to minimize cold starts. 4) Require zero underlying server or cluster infrastructure management. Which Google Cloud service should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine managed instance groups with custom scaling schedules."
      },
      {
        "letter": "B",
        "text": "Google Kubernetes Engine Standard mode with pre-warmed node pools."
      },
      {
        "letter": "C",
        "text": "Cloud Functions (1st gen) configured with HTTP triggers and timeouts."
      },
      {
        "letter": "D",
        "text": "Cloud Run (fully managed) configured with container concurrency."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Run is a fully managed serverless compute platform that runs stateless containers. It automatically scales from zero to hundreds of instances based on incoming traffic, supports configurable concurrency (up to 1,000 concurrent requests per container), and requires zero infrastructure management.",
    "distractors": {
      "A": "Compute Engine MIGs require VM OS maintenance, persistent base compute costs, and cannot instantly scale to zero on HTTP traffic.",
      "B": "GKE Standard requires ongoing Kubernetes control plane and node pool management, incurring minimum cluster management fees.",
      "C": "Cloud Functions 1st gen processes only 1 request concurrently per instance, causing cold starts under sudden traffic surges."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/about-instance-autoscaling",
    "difficulty": "medium",
    "blockId": "BLOCK-3"
  },
  {
    "id": "ACE-D2-028",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Shielded VM",
      "Secure Boot",
      "vTPM",
      "Integrity Monitoring",
      "Compute Engine Security"
    ],
    "title": "Planning Shielded VM Configuration for Boot Integrity and vTPM Security",
    "scenario": "A security compliance audit requires all production Compute Engine VM instances to defend against kernel-level malware, unauthorized bootloader modifications, and rootkits. The configuration must verify the digital signature of all boot components and generate integrity measurement logs in Cloud Logging. Which two Shielded VM features must you enable? Choose 2.",
    "options": [
      {
        "letter": "A",
        "text": "Secure Boot to verify digital signatures of firmware and kernel drivers."
      },
      {
        "letter": "B",
        "text": "Customer-Supplied Encryption Keys (CSEK) on root persistent boot disks."
      },
      {
        "letter": "C",
        "text": "Confidential VM hardware memory encryption with AMD SEV technology."
      },
      {
        "letter": "D",
        "text": "Virtual Trusted Platform Module (vTPM) with Integrity Monitoring enabled."
      },
      {
        "letter": "E",
        "text": "OS Login with two-factor authentication enabled across VPC subnets."
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Shielded VM features include: (1) Secure Boot, which ensures that the system only runs authentic software by verifying the digital signature of all boot components, and (2) Virtual Trusted Platform Module (vTPM) with Integrity Monitoring, which measures the boot process and compares it to a trusted baseline, logging integrity events to Cloud Logging.",
    "distractors": {
      "B": "CSEK encrypts disk data at rest using customer keys but does not inspect or validate bootloader integrity or digital signatures.",
      "C": "Confidential VM encrypts memory in-use against hypervisor inspection but is separate from the Shielded VM bootloader integrity suite.",
      "E": "OS Login manages POSIX user accounts and SSH key access via IAM but does not validate low-level firmware or kernel boot integrity."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/shielded-vm",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-029",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "GKE Autopilot",
      "GKE Standard",
      "Kubernetes Management",
      "Operational Overhead",
      "Google Cloud SRE"
    ],
    "title": "Selecting GKE Autopilot vs GKE Standard for Production Operations",
    "scenario": "A software company is modernizing its containerized microservices to Google Kubernetes Engine (GKE). The platform operations team wants to eliminate the administrative burden of provisioning, configuring, auto-repairing, and upgrading worker nodes, while enforcing Google-recommended security hardening by default and paying only for running pod resource requests. Which GKE operational mode should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "GKE Standard mode with cluster autoscaler and custom node pools."
      },
      {
        "letter": "B",
        "text": "GKE Autopilot mode with fully managed node lifecycle automation."
      },
      {
        "letter": "C",
        "text": "Unmanaged Compute Engine VM instances orchestrated with kubeadm."
      },
      {
        "letter": "D",
        "text": "Cloud Run on GKE deployed across bare-metal dedicated instances."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "GKE Autopilot is an automated mode of operation in GKE where Google manages the entire cluster infrastructure, including node provisioning, auto-scaling, auto-upgrades, security hardening, and OS maintenance. Customers are billed only for the CPU, memory, and storage requested by running pods.",
    "distractors": {
      "A": "GKE Standard mode leaves node provisioning, OS image management, node pool sizing, and underlying VM infrastructure maintenance to the customer.",
      "C": "Unmanaged VMs with kubeadm require manual Kubernetes control plane management, OS patching, and lack automated GKE integration.",
      "D": "Cloud Run on GKE requires managing the underlying GKE cluster nodes and Anthos infrastructure manually."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-030",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud Armor",
      "Security Policy",
      "WAF Rules",
      "Rate Limiting",
      "Backend Service"
    ],
    "title": "Planning Cloud Armor Security Policies for Web Application Defense",
    "scenario": "An online retail application receives millions of HTTP requests through an External Application Load Balancer. The security operations team must protect the web tier against SQL injection (SQLi) attacks and enforce rate limiting to throttle abusive clients sending more than 100 requests per minute from a single IP. Which two steps must you configure? Choose 2.",
    "options": [
      {
        "letter": "A",
        "text": "Create VPC egress firewall rules blocking destination port 80 for untrusted subnets."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Armor policy containing preconfigured WAF and rate-limiting rules."
      },
      {
        "letter": "C",
        "text": "Deploy Envoy proxy sidecars inside each backend VM to evaluate incoming SQL strings."
      },
      {
        "letter": "D",
        "text": "Enable Cloud NAT logging with packet inspection filters on the target VPC gateway."
      },
      {
        "letter": "E",
        "text": "Attach the Cloud Armor security policy to the target Load Balancer Backend Service."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To protect web backends with Cloud Armor: (1) Create a Cloud Armor security policy defining rules such as preconfigured WAF expressions (e.g. sqli-v33-stable) and rate-limiting thresholds, and (2) Attach the security policy to the target Backend Service of the External Application Load Balancer.",
    "distractors": {
      "A": "VPC firewall rules operate at Layer 3/4 (IP and port) and cannot inspect Layer 7 HTTP payloads for SQL injection or enforce per-client rate limits.",
      "C": "Deploying custom Envoy sidecars inside backend VMs adds unnecessary operational overhead and does not leverage Google edge DDoS/WAF protection.",
      "D": "Cloud NAT provides outbound internet access for private VMs and cannot filter or inspect incoming HTTP traffic."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs/security-policy-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-031",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Pub/Sub",
      "Asynchronous Decoupling",
      "Publish-Subscribe",
      "Independent Subscriptions",
      "Microservices"
    ],
    "title": "Architecting Google Cloud Pub/Sub for Asynchronous Decoupling",
    "scenario": "An e-commerce order processing system must handle massive flash-sale order spikes without dropping messages. When an order is placed, four downstream microservices (Inventory, Payment, Shipping, Analytics) must each receive and process a copy of the order independently and at their own processing rate. How should you design this messaging architecture using Google Cloud Pub/Sub?",
    "options": [
      {
        "letter": "A",
        "text": "Create a single Pub/Sub topic for orders and four separate subscriptions for downstream services."
      },
      {
        "letter": "B",
        "text": "Create four independent Pub/Sub topics and have the frontend publish to each topic sequentially."
      },
      {
        "letter": "C",
        "text": "Create a single Pub/Sub topic with one subscription shared across all four competing worker groups."
      },
      {
        "letter": "D",
        "text": "Provision a Cloud Tasks queue with four worker targets configured with rate-limiting throttling."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud Pub/Sub implements a 1-to-many publish-subscribe pattern. By publishing order messages to a single topic, multiple independent subscriptions can be attached to that topic. Each subscription receives a full copy of every published message and tracks message acknowledgment independently.",
    "distractors": {
      "B": "Publishing to 4 separate topics from the frontend increases network overhead, couples publisher logic to subscriber topology, and wastes egress bandwidth.",
      "C": "A single subscription distributes messages among competing consumers so each message is processed by only ONE service rather than all four.",
      "D": "Cloud Tasks is designed for point-to-point task execution with individual targets, not multi-subscriber fan-out messaging architectures."
    },
    "officialDocUrl": "https://cloud.google.com/pubsub/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-032",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud SQL",
      "Automatic Storage Increase",
      "Database Storage",
      "Zero Downtime",
      "Capacity Planning"
    ],
    "title": "Designing Cloud SQL Automated Storage Capacity Scaling",
    "scenario": "A fast-growing production database is hosted on Cloud SQL for PostgreSQL. If the database storage volume runs out of free space, the instance will shut down and cause a service outage. The operations team requires storage to expand automatically as data grows without manual intervention or scheduled downtime. What setting should you configure on the Cloud SQL instance?",
    "options": [
      {
        "letter": "A",
        "text": "Provision a 64 TB persistent storage volume upfront during initial setup."
      },
      {
        "letter": "B",
        "text": "Enable Automatic Storage Increase on the Cloud SQL instance configuration."
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Monitoring alert that executes a disk resize Cloud Run."
      },
      {
        "letter": "D",
        "text": "Migrate the database tables to Cloud Memorystore for automated SSD scaling."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "When Automatic Storage Increase is enabled, Cloud SQL checks available storage capacity regularly. When available space falls below a threshold (typically 10% of capacity), Cloud SQL automatically adds storage capacity without requiring database restarts or scheduled maintenance downtime.",
    "distractors": {
      "A": "Allocating 64 TB upfront incurs unnecessary persistent storage costs for unallocated data and wastes budget.",
      "C": "Custom scripts and Cloud Monitoring alerts introduce latency, permission dependencies, and failure risks compared to native built-in auto-expansion.",
      "D": "Cloud Memorystore is an in-memory key-value cache, not a durable relational PostgreSQL database engine."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/instance-settings#automatic-storage-increase",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-033",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "App Engine Standard",
      "App Engine Flexible",
      "Serverless Autoscaling",
      "Scale to Zero",
      "Runtime Environments"
    ],
    "title": "Selecting App Engine Standard vs App Engine Flexible Environment",
    "scenario": "A development team is deploying a lightweight Python 3.11 web service on Google App Engine. Requirements: 1) Scale rapidly from zero to hundreds of instances within seconds to absorb sudden traffic surges. 2) Scale to zero instances when idle to eliminate compute costs during off-peak hours. 3) Use standard language runtimes without custom OS packages or Dockerfile customization. Which environment should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "App Engine Flexible Environment with custom VM sizes."
      },
      {
        "letter": "B",
        "text": "Compute Engine Sole-Tenant Nodes with autoscaling."
      },
      {
        "letter": "C",
        "text": "App Engine Standard Environment with automatic scaling."
      },
      {
        "letter": "D",
        "text": "Google Kubernetes Engine Standard with dynamic nodes."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "App Engine Standard Environment runs applications in a sandbox using preconfigured language runtimes (such as Python 3.11). It can scale from 0 instances to hundreds in seconds, scales to zero when there is no traffic to minimize costs, and qualifies for the Google Cloud free tier.",
    "distractors": {
      "A": "App Engine Flexible runs inside Docker containers on Compute Engine VMs, taking minutes to scale up and cannot scale to zero instances.",
      "B": "Sole-Tenant Nodes run dedicated physical hardware with continuous hourly charges and cannot scale rapidly from zero instances.",
      "D": "GKE Standard requires underlying VM node provisioning and cannot instantly spin up isolated container instances in seconds from zero."
    },
    "officialDocUrl": "https://cloud.google.com/appengine/docs/the-appengine-environments",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-034",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Bucket Naming",
      "Global Namespace",
      "DNS Compliance",
      "Multi-tenancy"
    ],
    "title": "Designing Cloud Storage Bucket Naming and Global Uniqueness",
    "scenario": "You are creating an automation script using Terraform to provision Cloud Storage buckets for multiple enterprise clients. Which naming rule is strictly enforced by Google Cloud Storage and must be accommodated in your automation logic?",
    "options": [
      {
        "letter": "A",
        "text": "Bucket names are private to each project and can be duplicated across separate Google Cloud projects."
      },
      {
        "letter": "B",
        "text": "Bucket names must contain between 64 and 255 characters and include uppercase organizational prefixes."
      },
      {
        "letter": "C",
        "text": "Bucket names must include the target GCP region and project number as mandatory semicolon suffixes."
      },
      {
        "letter": "D",
        "text": "Bucket names share a single global namespace across all customers and must follow DNS naming standards."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Storage bucket names reside in a single global namespace shared across all Google Cloud accounts worldwide. Bucket names must be globally unique, conform to DNS naming conventions (3-63 characters, lowercase letters, numbers, hyphens), and cannot be duplicated by any other project or organization globally.",
    "distractors": {
      "A": "Bucket names are globally unique across all Google Cloud accounts worldwide; they cannot be reused in another project.",
      "B": "Bucket names must be 3 to 63 characters long and cannot contain uppercase letters.",
      "C": "Region names and project numbers are not mandatory bucket name components; semicolons are invalid characters."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/buckets#naming",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-035",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Compute Engine",
      "Live Migration",
      "OnHostMaintenance",
      "Availability Policy",
      "High Availability"
    ],
    "title": "Planning Compute Engine Instance Live Migration vs Restart Policy",
    "scenario": "A financial institution runs a stateful in-memory transaction processing engine on Compute Engine. During routine Google Cloud infrastructure maintenance events, the underlying physical host must be upgraded without interrupting the running VM, rebooting the operating system, or losing volatile memory state. How should you configure the instance availability policy?",
    "options": [
      {
        "letter": "A",
        "text": "Set the OnHostMaintenance availability policy to MIGRATE (Live Migration)."
      },
      {
        "letter": "B",
        "text": "Set the OnHostMaintenance availability policy to TERMINATE with restart."
      },
      {
        "letter": "C",
        "text": "Configure the VM instances to run as Spot VMs with preemptible scheduling."
      },
      {
        "letter": "D",
        "text": "Provision the Compute Engine instances across an Unmanaged Instance Group."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "When OnHostMaintenance is set to MIGRATE (the default for standard VMs), Compute Engine performs Live Migration during host maintenance events, seamlessly moving the running VM to another physical host in the same zone without rebooting, dropping network connections, or losing in-memory state.",
    "distractors": {
      "B": "Setting OnHostMaintenance to TERMINATE stops the instance during maintenance events, wiping in-memory state and causing downtime.",
      "C": "Spot VMs cannot perform live migration and are terminated whenever Compute Engine reclaims capacity.",
      "D": "Unmanaged Instance Groups do not control host maintenance policies and do not prevent host reboots."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/live-migration",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-036",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Regional Internal Application Load Balancer",
      "Three-Tier Architecture",
      "Private VPC",
      "Layer 7 Load Balancing",
      "Internal HTTP(S)"
    ],
    "title": "Architecting Internal HTTP(S) Load Balancing for Private Three-Tier Applications",
    "scenario": "You are designing a secure 3-tier enterprise architecture in Google Cloud (Web Tier -> App Tier -> Database Tier). The App Tier runs on Compute Engine VMs within a private VPC subnet. The Web Tier must send HTTP REST requests distributed across the App Tier VMs with URL routing capabilities. The App Tier must NEVER be accessible from the public internet. Which load balancing solution should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Global External Application Load Balancer with Cloud Armor edge policies."
      },
      {
        "letter": "B",
        "text": "Regional Internal Application Load Balancer with private subnet backends."
      },
      {
        "letter": "C",
        "text": "External Passthrough Network Load Balancer with public forwarding rules."
      },
      {
        "letter": "D",
        "text": "Internal Passthrough Network Load Balancer with DNS round-robin routing."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A Regional Internal Application Load Balancer operates at Layer 7 using a private internal IP address from a proxy-only subnet in your VPC. It enables URL path routing, header-based routing, and load balancing across private VM backends without exposing the application tier to the public internet.",
    "distractors": {
      "A": "Global External Application Load Balancers expose public external IP addresses, violating the requirement that the App Tier never be reachable from the internet.",
      "C": "External Passthrough Network Load Balancers use public IPs and operate at Layer 4, lacking HTTP URL path routing.",
      "D": "Internal Passthrough Network Load Balancers operate at Layer 4 (TCP/UDP) and cannot inspect HTTP requests or perform Layer 7 URL-based routing."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/l7-internal",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D2-037",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Compute Engine GPUs",
      "NVIDIA A100",
      "A2 Machine Types",
      "Deep Learning",
      "Tensor Cores"
    ],
    "title": "Selecting GPU Types for Deep Learning Acceleration on Compute Engine",
    "scenario": "A machine learning research lab is provisioning GPU-accelerated training infrastructure on Compute Engine for large language models (LLMs). The workload requires high-bandwidth memory (HBM2), high-speed NVLink GPU interconnects, and FP16/BF16 Tensor Core acceleration across multi-GPU nodes. Which Compute Engine accelerator configuration should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "NVIDIA T4 GPUs attached to cost-optimized E2 shared-core machine types."
      },
      {
        "letter": "B",
        "text": "NVIDIA K80 GPUs attached to general-purpose N1 standard machine types."
      },
      {
        "letter": "C",
        "text": "NVIDIA A100 Tensor Core GPUs attached to accelerator-optimized A2 types."
      },
      {
        "letter": "D",
        "text": "Sole-Tenant N2 instances configured with maximum persistent SSD storage."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The NVIDIA A100 Tensor Core GPU attached to A2 machine types is specifically designed for large deep learning model training and inference. It provides high-bandwidth memory (HBM2), third-generation Tensor Cores, and high-speed NVLink interconnects up to 600 GB/s between GPUs.",
    "distractors": {
      "A": "NVIDIA T4 GPUs do not support NVLink interconnects and provide lower memory bandwidth than A100/A2 instances; E2 instances cannot attach GPUs.",
      "B": "NVIDIA K80 GPUs are legacy architectures lacking modern Tensor Cores and NVLink support for large transformer training.",
      "D": "Sole-Tenant N2 instances provide CPU cores and disk throughput but lack GPU hardware accelerators for deep learning model training."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/gpus",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D2-038",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Regional Managed Instance Groups",
      "Autohealing",
      "Health Checks",
      "High Availability",
      "Compute Engine"
    ],
    "title": "Designing Managed Instance Groups (MIG) for High Availability and Autohealing",
    "scenario": "You are architecting a resilient, high-traffic web application on Compute Engine. The architecture must automatically detect and replace deadlocked or unhealthy VM instances without operator intervention, and protect against a full data center zone outage by distributing instances evenly across three availability zones. Which two configurations should you plan? Choose 2.",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Regional Managed Instance Group (MIG) distributing VMs across three zones."
      },
      {
        "letter": "B",
        "text": "Configure an Unmanaged Instance Group with manual snapshot restoration schedules."
      },
      {
        "letter": "C",
        "text": "Attach Customer-Managed Encryption Keys (CMEK) to all attached boot disk volumes."
      },
      {
        "letter": "D",
        "text": "Configure an application health check and attach it as the MIG autohealing policy."
      },
      {
        "letter": "E",
        "text": "Configure Cloud NAT with static port allocations across all three target subnets."
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "To achieve high availability and autohealing on Compute Engine: (1) A Regional MIG distributes instances evenly across multiple zones within a region to withstand zonal failures, and (2) An application-level health check attached as an autohealing policy proactively detects unresponsive instances and recreates them automatically.",
    "distractors": {
      "B": "Unmanaged Instance Groups do not support autoscaling, autohealing, or automated multi-zone distribution.",
      "C": "CMEK encrypts data at rest with customer keys but does not provide autohealing or zone failure protection.",
      "E": "Cloud NAT provides outbound connectivity for private VMs but does not monitor VM application health or distribute VMs across zones."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D2-039",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Turbo Replication",
      "Dual-Region",
      "Recovery Point Objective",
      "SLA"
    ],
    "title": "Planning Cloud Storage Turbo Replication for Dual-Region RPO SLA",
    "scenario": "A regulated financial institution uses a Dual-Region Cloud Storage bucket (us-central1 and us-east1) to store loan applications. Regulatory auditors mandate a guaranteed Recovery Point Objective (RPO) of 15 minutes or less, requiring 100% of newly written objects to replicate to the paired region within 15 minutes, backed by a service level agreement (SLA). What feature should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Turbo Replication on the Dual-Region Cloud Storage bucket configuration."
      },
      {
        "letter": "B",
        "text": "Object Versioning with a lifecycle rule retaining 20 historical versions."
      },
      {
        "letter": "C",
        "text": "Bucket Lock retention policy configured with a 15-minute compliance lock."
      },
      {
        "letter": "D",
        "text": "Storage Transfer Service configured to run hourly synchronization batches."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Turbo Replication is a feature for Dual-Region Cloud Storage buckets that shortens the replication window, replicating 100% of newly written objects to the secondary region within 15 minutes, backed by a 99.9% monthly service level agreement (SLA).",
    "distractors": {
      "B": "Object Versioning retains historical object states upon overwrite or deletion but does not accelerate cross-region geo-replication speed or provide a 15-minute RPO SLA.",
      "C": "Bucket Lock prevents object deletion or modification for a retention period but does not govern replication speed.",
      "D": "Storage Transfer Service performs periodic batch transfers between buckets rather than native real-time bucket replication backed by a 15-minute SLA."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/turbo-replication",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D2-040",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Firestore Native Mode",
      "Cloud Bigtable",
      "ACID Transactions",
      "Mobile SDKs",
      "NoSQL Document Store"
    ],
    "title": "Evaluating Firestore vs Cloud Bigtable for Mobile Gaming User Profiles",
    "scenario": "A mobile gaming company is designing the backend database for a new global game with 2 million daily active users. Requirements: 1) Store player profile JSON documents and inventory items. 2) Direct integration with client-side mobile iOS and Android SDKs with offline support. 3) Support ACID multi-document transactions when players trade items. 4) Scale automatically with zero cluster provisioning. Which database should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Firestore in Native mode configured with automated document scaling."
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable with SSD storage clusters and manual node autoscaling."
      },
      {
        "letter": "C",
        "text": "Cloud Spanner with multi-region replication and custom SQL schemas."
      },
      {
        "letter": "D",
        "text": "Cloud Memorystore for Redis with automated persistence snapshotting."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Firestore in Native mode is a serverless NoSQL document database that offers direct integration with iOS and Android client SDKs, offline data synchronization, automatic multi-region scaling, and support for ACID multi-document transactions.",
    "distractors": {
      "B": "Cloud Bigtable does not support multi-row ACID transactions or direct client-side mobile SDK integrations, and requires provisioned cluster nodes.",
      "C": "Cloud Spanner is a relational database designed for enterprise SQL workloads; it lacks direct client-side mobile SDKs and offline client data synchronization.",
      "D": "Cloud Memorystore is an in-memory caching service without direct client mobile SDKs or structured document querying capabilities."
    },
    "officialDocUrl": "https://cloud.google.com/firestore/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-5"
  },
  {
    "id": "ACE-D2-041",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud Armor",
      "Rate Limiting",
      "Application Load Balancer",
      "DDoS Protection"
    ],
    "title": "Architecting Google Cloud Armor Rate Limiting to Throttling API Abuse",
    "scenario": "You are designing security controls for a public REST API exposed through an external Application Load Balancer. The backend must be protected from brute-force authentication attacks and volumetric API abuse by enforcing a threshold of 100 requests per minute per client IP address. Legitimate traffic within limits must pass uninterrupted. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Cloud Armor security policy with a rate limit rule of 100 requests per minute per IP using a redirect action to an alternate landing page."
      },
      {
        "letter": "B",
        "text": "Configure a VPC firewall rule with packet rate limiting to drop incoming TCP traffic exceeding 100 packets per minute from external client networks."
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud NAT gateway with endpoint-independent mapping to limit incoming client session request rates to 100 connections per minute."
      },
      {
        "letter": "D",
        "text": "Create a Cloud Armor security policy with a rate limit rule of 100 requests per minute per IP using a deny action to throttle exceeding traffic."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Armor rate limiting rules allow you to throttle incoming traffic to an external Application Load Balancer based on client IP. Setting a threshold of 100 requests per minute with a deny action (HTTP 429 or 403) prevents API abuse while allowing legitimate traffic to pass through.",
    "distractors": {
      "A": "Using a redirect action sends users to an alternate URL instead of throttling and returning an HTTP 429 Too Many Requests status code.",
      "B": "VPC firewall rules operate at Layer 3/4 based on IP and port, and do not provide Layer 7 HTTP request-rate throttling.",
      "C": "Cloud NAT provides outbound internet connectivity for private VMs and cannot enforce inbound rate limiting on external load balancers."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs/rate-limiting-overview",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-042",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Compute Engine",
      "Persistent Disk",
      "pd-balanced",
      "pd-ssd",
      "IOPS Sizing"
    ],
    "title": "Selecting Persistent Disk Types: pd-standard vs pd-balanced vs pd-ssd vs pd-extreme",
    "scenario": "You are provisioning boot and data storage for several web application backend VMs on Compute Engine. The workload requires cost-effective storage that delivers reliable baseline performance and up to 3,000 IOPS for common business operations, without the high expense of dedicated enterprise SSDs. What Persistent Disk type should you select?",
    "options": [
      {
        "letter": "A",
        "text": "Provision standard persistent disks (pd-standard) to minimize storage costs for general application VMs."
      },
      {
        "letter": "B",
        "text": "Provision extreme persistent disks (pd-extreme) to guarantee provisioned IOPS capacity for transaction logs."
      },
      {
        "letter": "C",
        "text": "Provision balanced persistent disks (pd-balanced) to provide cost-effective SSD performance and baseline IOPS."
      },
      {
        "letter": "D",
        "text": "Provision local SSD scratch disks (local-ssd) to maximize temporary read throughput across VM restarts."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Balanced persistent disks (pd-balanced) use SSD-backed storage to deliver a middle tier of performance and price between standard HDDs (pd-standard) and Performance SSDs (pd-ssd), making them the recommended default for general-purpose web application workloads requiring several thousand IOPS.",
    "distractors": {
      "A": "Standard persistent disks (pd-standard) are backed by HDDs and cannot reliably sustain 3,000 IOPS for low-latency web application workloads.",
      "B": "Extreme persistent disks (pd-extreme) are designed for high-end databases with tens of thousands of custom provisioned IOPS, resulting in unnecessary costs.",
      "D": "Local SSDs are ephemeral storage tied to the physical host that lose all data when an instance is stopped, making them unsuitable for persistent VM data."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks#disk-types",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-043",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Cloud Run Jobs",
      "Cloud Scheduler",
      "Serverless Batch",
      "Compute Sizing"
    ],
    "title": "Designing Cloud Run Jobs for Asynchronous Scheduled Batch Ingestion",
    "scenario": "You need to plan the compute architecture for a batch data ingestion process that runs every night at midnight. The containerized task processes files from Cloud Storage, runs for up to 45 minutes to completion, and does not serve incoming HTTP traffic. You want a fully managed serverless solution with minimum operational overhead. What should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Cloud Run service triggered by Cloud Scheduler with request timeout configured to 45 minutes of processing."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Run job triggered by Cloud Scheduler to execute the container task to completion on demand."
      },
      {
        "letter": "C",
        "text": "Deploy a Compute Engine VM with an instance schedule to run the container task and shut down after execution."
      },
      {
        "letter": "D",
        "text": "Create a standard Google Kubernetes Engine cluster with a scheduled CronJob running across multiple worker nodes."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Run jobs are designed for containerized tasks that run to completion (up to 24 hours execution time) rather than serving persistent HTTP requests. Triggering a Cloud Run job via Cloud Scheduler provides a fully managed, serverless batch solution without managing VM or cluster infrastructure.",
    "distractors": {
      "A": "Cloud Run services are optimized for responding to incoming HTTP requests with a maximum request timeout of 60 minutes, but Cloud Scheduler HTTP invocation has limits and services expect web requests.",
      "C": "Compute Engine VMs require managing OS patching, instance lifecycle scripts, and incur higher operational maintenance than serverless jobs.",
      "D": "A standard GKE cluster requires managing node pools, cluster control plane upgrades, and incurs ongoing compute costs even when idle."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/create-jobs",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-044",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Dedicated Interconnect",
      "99.99% Availability",
      "Cloud Router",
      "High Availability"
    ],
    "title": "Planning Dedicated Interconnect Redundancy for 99.99% Enterprise SLA",
    "scenario": "Your enterprise requires a high-bandwidth hybrid connection between an on-premises data center and a Google Cloud VPC network with a 99.99% availability Service Level Agreement (SLA). The architecture must tolerate the failure of an entire colocation facility or edge availability domain. Which two architectural configurations must you implement? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Provision a single Dedicated Interconnect connection with two VLAN attachments in one metro facility."
      },
      {
        "letter": "B",
        "text": "Provision at least two Dedicated Interconnect circuits across two distinct metropolitan colocation zones."
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud VPN gateway with static routing as an automated standby failover link for the circuits."
      },
      {
        "letter": "D",
        "text": "Configure redundant Cloud Routers in two separate Google Cloud VPC regions with dynamic BGP routing."
      },
      {
        "letter": "E",
        "text": "Configure a single Cloud Router in one region with active-passive policy-based routes across all VLANs."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Achieving 99.99% SLA for Dedicated Interconnect requires 4 connections across 2 metros (two circuits per metro at distinct colocation facilities/edge availability domains) and configuring at least two redundant Cloud Routers in two different Google Cloud VPC regions with dynamic BGP routing and global dynamic routing enabled.",
    "distractors": {
      "A": "A single interconnect or single metro provides only 99.9% availability (or no SLA) because it cannot tolerate the loss of an entire colocation facility.",
      "C": "Cloud VPN as backup does not qualify for the 99.99% Dedicated Interconnect SLA and provides significantly lower throughput than dedicated circuits.",
      "E": "A single Cloud Router in one region represents a single point of failure and does not provide multi-region control plane redundancy for 99.99% SLA."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/high-availability",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-045",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Dual-Region",
      "Data Residency",
      "Replication",
      "Turbo Replication"
    ],
    "title": "Selecting Cloud Storage Dual-Region vs Multi-Region for Regulatory Data Residency",
    "scenario": "An enterprise must store customer transaction records in Cloud Storage with high availability and automatic cross-region failover. Strict government compliance mandates that all data must remain strictly within two specific regions inside the European Union (e.g., europe-west1 and europe-west4) and replicate with a 15-minute RPO. What bucket configuration should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Create a multi-region bucket in the EU location and configure Object Lifecycle Management rules."
      },
      {
        "letter": "B",
        "text": "Create two single-region buckets in different projects and synchronize them using automated Cloud Functions."
      },
      {
        "letter": "C",
        "text": "Create a single-region bucket in europe-west1 and enable cross-project bucket replication policies across regions."
      },
      {
        "letter": "D",
        "text": "Create a predefined or custom dual-region bucket with Turbo Replication enabled across the two regions."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Dual-region storage in Cloud Storage stores data redundantly across two specific Google Cloud regions within the same geographic area, providing automatic failover and meeting strict data residency requirements. Enabling Turbo Replication guarantees that 100% of objects replicate across regions within 15 minutes (RPO).",
    "distractors": {
      "A": "Multi-region buckets spread data across all EU member regions, which may violate strict regulatory mandates restricting storage to two designated regions.",
      "B": "Custom synchronization scripts using Cloud Functions introduce operational complexity, latency, and do not provide automatic native read/write failover.",
      "C": "A single-region bucket does not provide multi-region disaster recovery or automatic failover if the primary region experiences an outage."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#location-mr",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-046",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Cloud Load Balancing",
      "SSL Policies",
      "TLS 1.2",
      "HTTPS Target Proxy"
    ],
    "title": "Planning SSL Policy Minimum TLS Version for Load Balancers",
    "scenario": "Your organization security policy requires that all public web applications exposed through external Application Load Balancers drop legacy SSL/TLS connections and enforce a minimum version of TLS 1.2 with secure cipher suites. You want to apply this constraint centrally with minimal administrative overhead. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Cloud Armor security policy containing custom expression rules to drop legacy handshakes."
      },
      {
        "letter": "B",
        "text": "Configure backend Compute Engine VM web servers to reject incoming handshakes negotiating below TLS 1.2."
      },
      {
        "letter": "C",
        "text": "Create a custom or modern SSL policy with minimum TLS 1.2 and attach it directly to the HTTPS target proxies."
      },
      {
        "letter": "D",
        "text": "Create a VPC firewall rule on the frontend subnet that permits ingress traffic only on secure TCP port 443."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Google Cloud SSL Policies allow you to specify the minimum TLS version (TLS 1.0, 1.1, or 1.2) and cipher profile (COMPATIBLE, MODERN, RESTRICTED, or CUSTOM) accepted by external Application Load Balancers. The SSL policy is associated directly with the target HTTPS or target SSL proxy.",
    "distractors": {
      "A": "Cloud Armor evaluates HTTP request headers and Layer 7 attributes, but SSL/TLS handshake negotiation is managed by target proxies and SSL policies.",
      "B": "Terminating TLS at the load balancer means client handshakes never reach backend VM web servers directly, so backend configuration does not control edge cipher negotiation.",
      "D": "VPC firewall rules filter network packets by IP and port number, and cannot inspect or enforce SSL/TLS handshake protocol versions."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-047",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "VPC Network",
      "Private Google Access",
      "Subnets",
      "Cloud Storage"
    ],
    "title": "Designing Private Google Access for Cloud Storage Egress Optimization",
    "scenario": "Several Compute Engine virtual machines run in a VPC subnet with no external IP addresses. They must read and write objects in Cloud Storage over Google's internal network, without public internet egress and without paying for Cloud NAT. Which two conditions must hold for these VMs to reach the Cloud Storage API? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Attach a Public NAT gateway to the VPC network to route Google Cloud Storage API calls through external gateways."
      },
      {
        "letter": "B",
        "text": "Enable Private Google Access on the subnet containing the private Compute Engine virtual machines."
      },
      {
        "letter": "C",
        "text": "Assign ephemeral external IP addresses to all instances and configure egress VPC firewall rules on the subnet."
      },
      {
        "letter": "D",
        "text": "Create an internal Application Load Balancer with a serverless Network Endpoint Group for Cloud Storage buckets."
      },
      {
        "letter": "E",
        "text": "Confirm that the VPC still has a route for destination 0.0.0.0/0 whose next hop is the default internet gateway."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Private Google Access is a per-subnet setting that lets instances without external addresses reach Google API endpoints, so it has to be enabled on the subnet holding the VMs. It is not self-contained: the packets are still addressed to the Google API front-end ranges, so the VPC needs a default route (0.0.0.0/0) whose next hop is the default internet gateway for them to be forwarded. Deleting that default route to 'lock down' a private subnet is a common mistake and it silently breaks Private Google Access, even though no traffic ever leaves Google's network.",
    "distractors": {
      "A": "Cloud NAT does provide egress, but it sends the API calls out through external addresses and bills for data processing, which the requirement excludes.",
      "C": "Assigning external IP addresses puts every VM interface directly on the public internet, which is what the design is trying to avoid.",
      "D": "Internal Application Load Balancers distribute traffic to your own backends; they are not a client-side egress path to a Google API endpoint."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-google-access",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-048",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud SQL",
      "Point-in-Time Recovery",
      "Binary Logging",
      "Automated Backups"
    ],
    "title": "Architecting Cloud SQL Point-in-Time Recovery (PITR) and Transaction Log Archival",
    "scenario": "You are designing the backup and disaster recovery strategy for a production PostgreSQL instance on Cloud SQL. The business requires the ability to recover database state to any specific minute within the last 7 days in the event of accidental data corruption or human error. What configuration should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Enable automated daily backups and point-in-time recovery (PITR) with write-ahead log retention for recovery."
      },
      {
        "letter": "B",
        "text": "Configure Cloud Scheduler to trigger on-demand database export jobs to Cloud Storage every hour across regions."
      },
      {
        "letter": "C",
        "text": "Create daily disk snapshots of the underlying Compute Engine persistent disks using a snapshot schedule rule."
      },
      {
        "letter": "D",
        "text": "Deploy a high-availability regional standby replica to synchronize all database transaction writes in real time."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Point-in-Time Recovery (PITR) in Cloud SQL uses automated daily backups combined with continuous transaction logs (write-ahead logs in PostgreSQL, binary logs in MySQL) to allow restoration of the database instance to its exact state at any specific second within the retention window (up to 7 days).",
    "distractors": {
      "B": "Hourly exports create discrete dump files that consume extra I/O and cannot restore to an arbitrary minute between scheduled export intervals.",
      "C": "Disk snapshots of managed Cloud SQL disks are not directly accessible or coordinated with database buffer caches, risking corrupt transaction states.",
      "D": "High availability (HA) provides automatic instance failover in case of hardware failure, but replicates accidental deletions and corrupted data immediately to the standby."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-049",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Cloud Run",
      "Traffic Splitting",
      "Canary Deployment",
      "Revisions"
    ],
    "title": "Planning Cloud Run Traffic Allocation for Canary Releases and Blue-Green Deployments",
    "scenario": "You are releasing version 2 of an API microservice deployed on Cloud Run. You want to execute a canary deployment by directing 10% of production traffic to the new revision while keeping 90% on the stable version. If anomalies occur, you must be able to roll back 100% of traffic immediately. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy version 2 to a separate Cloud Run service and use Cloud DNS weighted records to distribute percentages."
      },
      {
        "letter": "B",
        "text": "Deploy version 2 to Compute Engine and configure an external load balancer backend service with weighted traffic."
      },
      {
        "letter": "C",
        "text": "Deploy version 2 as a separate Cloud Run service and route traffic requests using a Cloud Tasks rate limit queue."
      },
      {
        "letter": "D",
        "text": "Deploy version 2 as a revision to the existing service and adjust traffic allocation percentages in Cloud Run."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Run natively supports revision management and traffic splitting. When you deploy a new container version to an existing Cloud Run service without routing 100% of traffic, you can allocate 10% to the new revision and 90% to the previous revision, and roll back instantly with zero downtime.",
    "distractors": {
      "A": "DNS-based traffic splitting suffers from client-side DNS caching and TTL delays, preventing instantaneous traffic shift or rollback.",
      "B": "Deploying across separate Compute Engine VMs increases operational overhead and bypasses native Cloud Run serverless revision management.",
      "C": "Cloud Tasks is an asynchronous message queuing service for background tasks, not an HTTP reverse proxy for live request traffic splitting."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-split",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-050",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Spanner",
      "Processing Units",
      "Node Sizing",
      "Horizontal Scaling"
    ],
    "title": "Evaluating Cloud Spanner Node Sizing and Processing Units (PU)",
    "scenario": "You are provisioning a new Cloud Spanner database for an application with modest initial throughput requirements. The database needs full relational capabilities, global ACID transactions, and high availability, but provisioning a full 1-node instance (1,000 Processing Units) exceeds the initial development budget. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Cloud SQL instance and use database migration service to replicate tables to Cloud Spanner database."
      },
      {
        "letter": "B",
        "text": "Provision a Cloud Spanner instance with granular compute capacity using 100 to 500 Processing Units (PUs) scale."
      },
      {
        "letter": "C",
        "text": "Deploy a Bigtable cluster with HDD storage and configure an open-source relational SQL emulation layer for data."
      },
      {
        "letter": "D",
        "text": "Provision a Cloud Spanner multi-region instance configured with maximum auto-sharding and zero baseline nodes."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Spanner supports fractional compute capacity measured in Processing Units (PUs), where 1 node equals 1,000 PUs. You can provision instances in increments of 100 PUs (e.g., 100, 200, up to 900 PUs), allowing workloads with smaller throughput requirements to run on Spanner at a proportional fraction of the full node cost.",
    "distractors": {
      "A": "Replicating from Cloud SQL does not provide Spanner's native ACID global consistency or high availability for live application queries.",
      "C": "Cloud Bigtable is a NoSQL wide-column database that lacks native relational features, foreign keys, and multi-row ACID transactions.",
      "D": "Cloud Spanner does not support a serverless 'zero node' baseline tier; all active Spanner instances require at least 100 Processing Units."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs/compute-capacity",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-051",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "Dedicated Interconnect",
      "MACsec",
      "Layer 2 Encryption",
      "Network Security"
    ],
    "title": "Planning Cloud Interconnect MACsec Encryption for Physical Link Security",
    "scenario": "A financial institution is establishing a high-bandwidth 100 Gbps Dedicated Interconnect between an on-premises data center and Google Cloud. Security compliance mandates that all network traffic traversing the physical fiber connection must be hardware-encrypted at Layer 2 (Ethernet layer) at line rate. What feature should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Configure an IPsec VPN tunnel over the physical Dedicated Interconnect with high-availability dynamic routing."
      },
      {
        "letter": "B",
        "text": "Configure TLS 1.3 hardware encryption across all physical application services running on Compute Engine VMs."
      },
      {
        "letter": "C",
        "text": "Enable Media Access Control Security (MACsec) on the physical Dedicated Interconnect router ports."
      },
      {
        "letter": "D",
        "text": "Enable Cloud Armor adaptive protection and security policies on the ingress VPC physical interconnect gateway."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Media Access Control Security (MACsec, IEEE 802.1AE) provides point-to-point hardware encryption at Layer 2 (Ethernet) on Dedicated Interconnect physical links between customer on-premises edge routers and Google edge routers. MACsec encrypts all traffic at full line rate (up to 100 Gbps) without the CPU throughput overhead of Layer 3 IPsec.",
    "distractors": {
      "A": "IPsec VPN operates at Layer 3 (IP layer) and software-based IPsec gateways cannot match 100 Gbps line-rate throughput without significant CPU and packet overhead.",
      "B": "TLS 1.3 operates at Layer 7 (application layer) and leaves lower-level network protocol headers unencrypted, failing the Layer 2 hardware encryption mandate.",
      "D": "Cloud Armor is a web application firewall (WAF) for HTTP(S) load balancers and does not perform physical link layer encryption."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-052",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "BigQuery Editions",
      "Capacity Reservations",
      "Autoscaling Slots",
      "Cost Management"
    ],
    "title": "Selecting BigQuery Reservations and Editions (Standard, Enterprise, Enterprise Plus)",
    "scenario": "An enterprise runs mission-critical analytical dashboards in BigQuery with highly variable concurrency. Under the on-demand pricing model ($6.25 per TB scanned), monthly costs fluctuate unpredictably, and large queries occasionally face concurrency throttling. Management requires predictable monthly billing with dedicated compute slots and autoscaling. What should you plan?",
    "options": [
      {
        "letter": "A",
        "text": "Migrate all analytical tables to Cloud Bigtable clusters provisioned with fixed node reservations and capacity."
      },
      {
        "letter": "B",
        "text": "Export analytical datasets to Cloud Storage and query them using external tables in on-demand mode with slots."
      },
      {
        "letter": "C",
        "text": "Configure physical Compute Engine VMs running Apache Spark to process queries and load to BigQuery datasets."
      },
      {
        "letter": "D",
        "text": "Purchase a BigQuery Enterprise Edition capacity reservation configured with autoscaling slot pools."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "BigQuery Editions (Standard, Enterprise, Enterprise Plus) offer capacity-based pricing with dedicated compute slots. By setting up an Enterprise Edition reservation with autoscaling slots, organizations get predictable cost boundaries, dedicated slot pools that guarantee query execution for critical workloads, and automatic scaling during concurrency spikes.",
    "distractors": {
      "A": "Cloud Bigtable is a low-latency NoSQL database for operational time-series/key-value data, not an analytical SQL data warehouse for complex BI queries.",
      "B": "External tables over Cloud Storage still incur on-demand scan charges and offer lower query performance than native BigQuery managed storage.",
      "C": "Managing self-hosted Spark clusters on Compute Engine introduces high operational complexity and does not integrate natively with BigQuery BI dashboard tooling."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/editions-intro",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-053",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.2",
    "subsectionName": "Planning and configuring data storage options",
    "conceptos": [
      "Cloud Storage",
      "Bucket Lock",
      "Retention Policy",
      "WORM Compliance"
    ],
    "title": "Designing Cloud Storage Bucket Lock for Ransomware Protection and Immutable Compliance",
    "scenario": "A financial compliance team requires that archived PDF transaction records stored in a Cloud Storage bucket must remain completely immutable (cannot be deleted, modified, or overwritten) for exactly 3 years (94,608,000 seconds). The policy must be irreversible even by project owners and administrators. Which two steps must you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Retention Policy on the Cloud Storage bucket with a duration of 94608000 seconds."
      },
      {
        "letter": "B",
        "text": "Enable Object Versioning on the bucket and configure a lifecycle rule to retain 3 object versions."
      },
      {
        "letter": "C",
        "text": "Permanently lock the bucket retention policy using the Bucket Lock feature to enforce WORM rules."
      },
      {
        "letter": "D",
        "text": "Remove the storage.objects.delete IAM permission from all project principals and service accounts."
      },
      {
        "letter": "E",
        "text": "Set the default storage class of the bucket to Archive and configure customer-managed encryption."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Enforcing immutable Write-Once-Read-Many (WORM) storage in Cloud Storage requires two sequential steps: (1) creating a Retention Policy specifying the required retention duration (e.g., 94,608,000 seconds), and (2) locking the retention policy using Bucket Lock. Once locked, the policy cannot be removed, the retention period cannot be reduced, and objects cannot be deleted by anyone (including root/owners) until their retention period expires.",
    "distractors": {
      "B": "Object Versioning preserves older versions when overwritten, but does not prevent users with appropriate permissions from deleting the bucket, current objects, or noncurrent versions.",
      "D": "Modifying IAM permissions can easily be undone by any Project Owner or Administrator, failing strict compliance immutability standards.",
      "E": "Archive storage class and CMEK govern storage cost tiers and encryption keys, but do not provide legal WORM immutability or deletion prevention."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-054",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.1",
    "subsectionName": "Planning and configuring compute resources",
    "conceptos": [
      "Compute Engine",
      "Metadata",
      "Startup Scripts",
      "Automation"
    ],
    "title": "Planning Compute Engine Custom Metadata and Startup Script Execution",
    "scenario": "You are designing an automated deployment process for Compute Engine virtual machines based on standard Debian images. Each new instance must automatically install runtime dependencies, pull application code, and launch background services during its initial boot sequence without manual human intervention. How should you design this configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Store the initialization script in a private bucket and execute it manually via SSH after instance startup completes."
      },
      {
        "letter": "B",
        "text": "Specify the shell script via instance custom metadata using the startup-script or startup-script-url key."
      },
      {
        "letter": "C",
        "text": "Configure an OS login IAM role on the instance template that triggers bash execution upon user connection session."
      },
      {
        "letter": "D",
        "text": "Create a custom VPC firewall rule that invokes the initialization commands over secure shell port 22 automatically."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Compute Engine provides native support for startup scripts through custom metadata keys (startup-script for inline scripts or startup-script-url for scripts hosted in Cloud Storage or public URLs). The Compute Engine guest agent automatically retrieves and executes the script with root privileges during the operating system boot process.",
    "distractors": {
      "A": "Requiring manual SSH execution after boot violates the requirement for fully automated deployment without manual intervention.",
      "C": "OS Login manages POSIX user accounts and SSH key authentication; it does not execute automated provisioning scripts on instance boot.",
      "D": "VPC firewall rules control network traffic flow at the IP/port layer; they cannot run shell scripts inside guest operating systems."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/startup-scripts/linux",
    "difficulty": "medium",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D2-055",
    "certId": "ace",
    "domainId": "ACE-D2",
    "sectionId": "ACE-2",
    "sectionName": "Planning and configuring a cloud solution",
    "subsectionId": "ACE-2.3",
    "subsectionName": "Planning and configuring network resources",
    "conceptos": [
      "VPC Service Controls",
      "Service Perimeter",
      "Data Exfiltration",
      "PCI-DSS"
    ],
    "title": "Selecting Cloud Architecture for PCI-DSS Regulated Payment Gateway",
    "scenario": "An enterprise is deploying a credit card processing payment workload on Google Cloud subject to strict PCI-DSS regulatory compliance. You must isolate the Cardholder Data Environment (CDE) project so that sensitive data stored in Cloud Storage and BigQuery cannot be exfiltrated to external storage buckets or unauthorized networks, even if IAM credentials are compromised. What should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Configure standard IAM role bindings and enable Cloud Audit Logs across all project service accounts."
      },
      {
        "letter": "B",
        "text": "Deploy an unmanaged network proxy VM in a public subnet to inspect and filter all outbound API traffic requests."
      },
      {
        "letter": "C",
        "text": "Create a VPC Service Controls service perimeter enclosing the project and restricting protected APIs."
      },
      {
        "letter": "D",
        "text": "Configure Cloud NAT on the VPC network and attach egress firewall rules blocking outbound TCP port 80 traffic."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "VPC Service Controls (VPC SC) establishes a secure service perimeter around Google Cloud resources (such as Cloud Storage and BigQuery). It prevents data exfiltration by blocking API requests from within the perimeter that attempt to copy or write data to storage resources outside the perimeter, even if the caller has valid IAM credentials.",
    "distractors": {
      "A": "IAM controls authorization within the project, but does not prevent an authorized principal from exfiltrating data to an external, unauthorized GCP bucket.",
      "B": "Unmanaged proxy VMs introduce single points of failure, scaling bottlenecks, and do not protect against direct API invocations bypassing the proxy.",
      "D": "Cloud NAT and firewall rules filter network-level IP packets, but do not understand or restrict Google API requests directed at external public buckets."
    },
    "officialDocUrl": "https://cloud.google.com/vpc-service-controls/docs/overview",
    "difficulty": "hard",
    "blockId": "BLOCK-6"
  },
  {
    "id": "ACE-D3-001",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "conceptos": [
      "Compute Engine",
      "gcloud CLI",
      "Startup Scripts",
      "Instance Deployment"
    ],
    "title": "Deploying Compute Engine Instances with Startup Scripts and Custom Metadata",
    "scenario": "You need to deploy a new Compute Engine virtual machine named web-prod-1 in zone us-central1-a on subnet frontend-sub. The instance must automatically execute a local initialization script ./bootstrap.sh during its initial operating system startup. Which gcloud command should you run to deploy this instance?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --metadata-from-file=startup-script=./bootstrap.sh"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --metadata=startup-script=./bootstrap.sh"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --startup-script-file=./bootstrap.sh"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --guest-attributes=run-script=./bootstrap.sh"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The --metadata-from-file=startup-script=./bootstrap.sh flag reads the contents of the local file ./bootstrap.sh and assigns it to the startup-script metadata key on the VM. When the instance boots, the guest environment agent reads this key and executes the script as root.",
    "distractors": {
      "B": "The --metadata flag passes literal key-value strings; using it with ./bootstrap.sh stores the file path string rather than the script contents.",
      "C": "--startup-script-file is not a valid flag for gcloud compute instances create.",
      "D": "Guest attributes are for VM state storage, not automated boot script execution, and --guest-attributes does not execute scripts."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/startup-scripts/linux",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-002",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "GKE",
      "Private Cluster",
      "Master Authorized Networks",
      "gcloud CLI"
    ],
    "title": "Deploying a Private GKE Cluster with Master Authorized Networks",
    "scenario": "You are deploying a security-hardened Google Kubernetes Engine (GKE) cluster named prod-k8s in region us-central1. The cluster worker nodes must have private IP addresses only, the control plane must disable public internet access, and control plane management must be restricted to bastion hosts in CIDR 10.240.0.0/28. Which command should you run?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --enable-master-authorized-networks --master-authorized-networks=10.240.0.0/28 --no-enable-ip-alias --async"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --enable-private-endpoint --master-ipv4-cidr=172.16.0.0/28 --master-authorized-networks=10.240.0.0/28"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --master-ipv4-cidr=172.16.0.0/28 --master-authorized-networks=10.240.0.0/28 --no-private-endpoint --quiet"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --master-ipv4-cidr=172.16.0.0/28 --master-authorized-networks=10.240.0.0/28 --public-endpoint-only --async"
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Creating a private GKE cluster with private endpoints requires --enable-private-nodes (private worker nodes), --enable-private-endpoint (prevents public access to the Kubernetes API control plane), --master-ipv4-cidr (allocates an internal /28 range for the Google-managed control plane), and --master-authorized-networks (whitelists corporate CIDRs).",
    "distractors": {
      "A": "Private GKE clusters strictly require VPC-native Alias IP networking; using --no-enable-ip-alias causes cluster creation to fail.",
      "C": "Specifying --no-private-endpoint leaves the Kubernetes API control plane exposed to public internet endpoints.",
      "D": "--public-endpoint-only is an invalid flag that would contradict the requirement to disable public control plane access."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters",
    "difficulty": "hard",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-003",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Cloud Run",
      "Ingress Controls",
      "Internal Ingress",
      "gcloud CLI"
    ],
    "title": "Deploying a Serverless Container on Cloud Run with Least Privilege Ingress",
    "scenario": "You have packaged an internal ordering service into a container image us-docker.pkg.dev/my-proj/app-repo/order-api:v1. You need to deploy this container to Cloud Run in region us-east4 such that it accepts traffic ONLY from internal VPC clients and Cloud Load Balancing, while completely blocking direct public internet requests. Which command should you run?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud run deploy order-api --image=us-docker.pkg.dev/my-proj/app-repo/order-api:v1 --region=us-east4 --ingress=all --no-allow-unauthenticated"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy order-api --image=us-docker.pkg.dev/my-proj/app-repo/order-api:v1 --region=us-east4 --ingress=internal --vpc-egress=all-traffic --quiet"
      },
      {
        "letter": "C",
        "text": "gcloud run deploy order-api --image=us-docker.pkg.dev/my-proj/app-repo/order-api:v1 --region=us-east4 --ingress=internal-and-cloud-load-balancing"
      },
      {
        "letter": "D",
        "text": "gcloud run deploy order-api --image=us-docker.pkg.dev/my-proj/app-repo/order-api:v1 --region=us-east4 --ingress=private --network=internal-vpc-net"
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The --ingress=internal-and-cloud-load-balancing setting on Cloud Run restricts incoming traffic so that the service can only be reached by resources within the same VPC network (or VPC Service Controls perimeter) and external/internal Cloud Load Balancers, blocking direct public internet requests to the *.run.app URL.",
    "distractors": {
      "A": "Setting --ingress=all allows incoming requests directly from the public internet, relying solely on IAM authentication rather than network perimeter isolation.",
      "B": "Setting --ingress=internal permits traffic only from VPC networks and blocks traffic routed through external Application Load Balancers.",
      "D": "--ingress=private is not a valid ingress option for gcloud run deploy (the valid values are all, internal, and internal-and-cloud-load-balancing)."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/securing/ingress",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-004",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "GKE",
      "Workload Identity",
      "IAM Roles",
      "Kubernetes Service Account"
    ],
    "title": "Configuring Workload Identity Binding for Kubernetes Service Accounts",
    "scenario": "A containerized workload in GKE namespace backend needs to read objects from Cloud Storage using a Google Service Account gsa-storage@my-proj.iam.gserviceaccount.com. Workload Identity is enabled on the cluster. You have created a Kubernetes Service Account ksa-gcs in namespace backend. Which two steps must you perform to link these identities? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Generate a private JSON key for the GSA and mount it as a volume secret inside the application Pods."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.workloadIdentityUser to member serviceAccount:my-proj.svc.id.goog[backend/ksa-gcs] on the GSA."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountTokenCreator to the default Compute Engine service account on the project."
      },
      {
        "letter": "D",
        "text": "Add the annotation iam.gke.io/gcp-service-account=gsa-storage@my-proj.iam.gserviceaccount.com to the ksa-gcs KSA."
      },
      {
        "letter": "E",
        "text": "Grant roles/storage.objectViewer to member user:backend-ksa-gcs@kubernetes.internal at the project IAM level."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "GKE Workload Identity links a Kubernetes Service Account (KSA) to a Google Service Account (GSA) through two required actions: (1) Granting the roles/iam.workloadIdentityUser IAM role on the GSA to the principal serviceAccount:<PROJECT_ID>.svc.id.goog[<NAMESPACE>/<KSA_NAME>], and (2) Annotating the KSA metadata with iam.gke.io/gcp-service-account=<GSA_EMAIL>.",
    "distractors": {
      "A": "Mounting static JSON private keys reintroduces security vulnerabilities and defeats the purpose of keyless Workload Identity.",
      "C": "Granting token creation permissions to the node default service account grants excessive cluster-wide privilege to all node workloads.",
      "E": "GCP IAM policies do not recognize raw Kubernetes service account names directly without Workload Identity pool principal notation."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
    "difficulty": "hard",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-005",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud SQL",
      "MySQL",
      "High Availability",
      "Automated Backups",
      "gcloud CLI"
    ],
    "title": "Deploying Regional Cloud SQL Instance with High Availability and Automated Backups",
    "scenario": "You need to deploy a production MySQL 8.0 database instance named prod-mysql-db on Cloud SQL in region europe-west3. The database must have High Availability (regional standby failover), machine tier db-custom-4-16384, SSD storage, automated daily backups starting at 03:00 UTC, and point-in-time recovery enabled. Which command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --backup-start-time=03:00 --enable-point-in-time-recovery"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=ZONAL --backup-start-time=03:00 --enable-point-in-time-recovery --async"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --maintenance-window-hour=03:00 --no-backup --quiet"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --replication=SYNCHRONOUS --backup-window=03:00 --async"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "In gcloud sql instances create, configuring regional high availability with automated backups and PITR requires --availability-type=REGIONAL, --backup-start-time=03:00, --enable-point-in-time-recovery, and the appropriate --database-version and --tier parameters.",
    "distractors": {
      "B": "--availability-type=ZONAL deploys a single-zone instance without an automatic regional failover standby replica.",
      "C": "--no-backup disables automated daily backups, which also prevents point-in-time recovery from functioning.",
      "D": "--replication=SYNCHRONOUS and --backup-window are invalid flags for gcloud sql instances create."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/create-instance",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-006",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Cloud Functions",
      "2nd gen",
      "Cloud Storage",
      "Eventarc",
      "gcloud CLI"
    ],
    "title": "Deploying Event-Driven Cloud Functions Gen 2 Triggered by Cloud Storage Uploads",
    "scenario": "You are deploying an event-driven Python 3.11 Cloud Function named process-photo in region us-central1 using Cloud Functions (2nd gen). The function must execute automatically whenever a new image object is created or overwritten in Cloud Storage bucket raw-user-photos. Which command should you run to deploy this function?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --source=. --trigger-http --allow-unauthenticated --set-env-vars=STORAGE_BUCKET=raw-user-photos --ingress-settings=all --quiet"
      },
      {
        "letter": "B",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --source=. --trigger-event-filters=type=google.cloud.storage.object.v1.finalized --trigger-event-filters=bucket=raw-user-photos"
      },
      {
        "letter": "C",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --source=. --trigger-bucket=raw-user-photos --trigger-event=google.storage.object.finalize --set-env-vars=ENV=production --async"
      },
      {
        "letter": "D",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --source=. --trigger-topic=raw-user-photos-topic --trigger-event=providers/cloud.pubsub/eventTypes/topic.publish --quiet"
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Functions (2nd gen) uses Eventarc for event-driven routing. To trigger a function on Cloud Storage object creation, you specify --gen2 along with the Eventarc event filters --trigger-event-filters=type=google.cloud.storage.object.v1.finalized and --trigger-event-filters=bucket=raw-user-photos.",
    "distractors": {
      "A": "--trigger-http configures an HTTP endpoint for synchronous web requests, not an automated asynchronous Cloud Storage event trigger.",
      "C": "--trigger-bucket is 1st gen syntax and is not used for configuring Eventarc event triggers in Cloud Functions (2nd gen).",
      "D": "--trigger-topic with 1st gen provider syntax triggers on Pub/Sub topics rather than direct Cloud Storage object finalization events."
    },
    "officialDocUrl": "https://cloud.google.com/functions/docs/calling/storage",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-007",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "conceptos": [
      "VPC Network",
      "Subnets",
      "Private Google Access",
      "gcloud CLI"
    ],
    "title": "Creating a Custom VPC Network and Subnets via gcloud CLI",
    "scenario": "You are building a new landing zone in project corp-net-101. You must create a custom mode VPC network named enterprise-vpc and provision a subnet app-subnet-uscentral1 in us-central1 with CIDR block 10.10.0.0/24 and Private Google Access enabled. Which two commands should you run? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=custom --bgp-routing-mode=regional --description=enterprise-vpc-network"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=auto --bgp-routing-mode=regional --description=enterprise-vpc-network"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --no-enable-private-ip-google-access"
      },
      {
        "letter": "E",
        "text": "gcloud compute networks subnets create app-subnet-uscentral1 --network=default --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Creating a custom VPC network and provisioning a private subnet requires two steps: (1) gcloud compute networks create enterprise-vpc --subnet-mode=custom, which prevents automatic subnet creation, and (2) gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access, which creates the subnet in us-central1 with Private Google Access enabled.",
    "distractors": {
      "B": "--subnet-mode=auto creates default automatic /20 subnets in every Google Cloud region, violating custom IP schema requirements.",
      "D": "Using --no-enable-private-ip-google-access leaves Private Google Access disabled on the subnet.",
      "E": "Attaching the subnet to --network=default places the subnet in the default legacy VPC rather than the new enterprise-vpc."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/create-modify-vpc-networks",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-008",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "conceptos": [
      "Compute Engine",
      "Instance Templates",
      "Managed Instance Groups",
      "gcloud CLI"
    ],
    "title": "Creating an Instance Template for Auto-Scaling Managed Instance Groups",
    "scenario": "You are configuring automated scaling for a backend microservice. You need to create a Compute Engine Instance Template named api-server-template specifying machine type e2-standard-4, boot disk of 50 GB pd-balanced, network tag api-server, and service account api-sa@corp.iam.gserviceaccount.com. Which command creates this template?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create api-server-template --zone=us-central1-a --machine-type=e2-standard-4 --boot-disk-type=pd-balanced --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --boot-disk-type=pd-ssd --boot-disk-size=50GB --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --boot-disk-type=pd-balanced --boot-disk-size=50GB --tags=api-server --scopes=https://www.googleapis.com/auth/cloud-platform"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --boot-disk-type=pd-balanced --boot-disk-size=50GB --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com"
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "gcloud compute instance-templates create is the dedicated command to create an instance template (a non-running VM blueprint defining machine type, boot disk, network tags, service account, and metadata) used by Managed Instance Groups for automated scaling and rolling deployments.",
    "distractors": {
      "A": "This provisions one running VM pinned to us-central1-a. A managed instance group consumes a template, and a live instance cannot be passed to --template, so the autoscaling blueprint still does not exist.",
      "B": "Everything matches except the boot disk type: pd-ssd is provisioned where pd-balanced was specified, and a template's disk properties are immutable, so the template would have to be deleted and rebuilt.",
      "C": "Access scopes are not an identity. With no --service-account the template attaches the default Compute Engine service account, so every VM in the group runs as the wrong principal, merely with a broad scope."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-templates/create-instance-templates",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-009",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "conceptos": [
      "Compute Engine",
      "Managed Instance Groups",
      "Rolling Update",
      "Zero Downtime"
    ],
    "title": "Executing a Zero-Downtime Rolling Update on a Managed Instance Group",
    "scenario": "You updated an instance template to web-template-v2 for a production web application. You need to deploy this new version across an active regional Managed Instance Group (MIG) named web-mig in region us-central1. The rollout must maintain 100% capacity at all times with 0 allowed downtime during the update. Which command should you run?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed rolling-action start-update web-mig --region=us-central1 --version=template=web-template-v2 --max-surge=20% --max-unavailable=0%"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed rolling-action start-update web-mig --region=us-central1 --version=template=web-template-v2 --max-surge=0% --max-unavailable=20%"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed set-instance-template web-mig --region=us-central1 --template=web-template-v2 --all-instances-immediate-restart"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed replace-instances web-mig --region=us-central1 --template=web-template-v2 --replacement-method=substitute-all"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcloud compute instance-groups managed rolling-action start-update command initiates an automated rolling update. Setting --max-unavailable=0% ensures that no existing instances are taken offline until new healthy instances are running, and --max-surge=20% allows the MIG to provision temporary extra instances to maintain full service capacity.",
    "distractors": {
      "B": "Setting --max-unavailable=20% allows up to 20% of instances to be stopped before replacements become healthy, which reduces service capacity and violates zero-downtime requirements.",
      "C": "set-instance-template only updates the default template pointer for future instances; --all-instances-immediate-restart is not a valid flag and does not perform a safe rolling rollout.",
      "D": "--replacement-method=substitute-all is non-existent CLI syntax and replace-instances restarts instances simultaneously rather than managing surge and availability."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-010",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.6",
    "subsectionName": "Implementing resources through infrastructure as code",
    "conceptos": [
      "Cloud Build",
      "Artifact Registry",
      "Container Images",
      "gcloud CLI"
    ],
    "title": "Building Container Images with Google Cloud Build and Artifact Registry",
    "scenario": "You have created a Dockerfile in your local application directory. You need to build the container image using Google Cloud's managed build infrastructure and push the resulting image to Artifact Registry repository us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 without running Docker locally. Which command should you execute?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud artifacts docker images push us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 --source=. --build-remote --async"
      },
      {
        "letter": "B",
        "text": "gcloud container images build-and-push --repository=us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 --source=. --quiet"
      },
      {
        "letter": "C",
        "text": "gcloud builds submit --tag=us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 --region=us-central1 ."
      },
      {
        "letter": "D",
        "text": "gcloud artifacts repositories create-image us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 --source-context=. --async"
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The gcloud builds submit --tag=<IMAGE_TAG> . command packages the local source directory, uploads it to Cloud Storage, executes the build steps inside a Google Cloud Build managed worker environment, and automatically uploads the output image to the specified Artifact Registry repository.",
    "distractors": {
      "A": "gcloud artifacts docker images push is for pushing locally built Docker images using the local Docker client, not for building remote images with Cloud Build.",
      "B": "gcloud container images build-and-push is a non-existent gcloud command group.",
      "D": "gcloud artifacts repositories create-image is non-existent syntax (repositories are created with gcloud artifacts repositories create)."
    },
    "officialDocUrl": "https://cloud.google.com/build/docs/building/build-containers",
    "difficulty": "medium",
    "blockId": "BLOCK-1"
  },
  {
    "id": "ACE-D3-011",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "subtopic": "GKE Workload Deployment via Declarative Manifests",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Deploying Kubernetes Application Workloads Using Declarative Manifests",
    "scenario": "Your team has authored a declarative Kubernetes manifest file named frontend-app.yaml containing Deployment and Service specifications. You need to deploy and manage the lifecycle of these containerized resources on an active Google Kubernetes Engine (GKE) Standard cluster from your local terminal with minimal operational overhead. Which command should you execute?",
    "conceptos": [
      "GKE Workloads",
      "kubectl apply",
      "Kubernetes Deployment",
      "Declarative Management"
    ],
    "keywords": [
      "kubectl apply",
      "gke",
      "kubernetes",
      "manifest",
      "deployment",
      "service"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud container clusters update cluster-1 --manifest=frontend-app.yaml."
      },
      {
        "letter": "B",
        "text": "Run kubectl apply -f frontend-app.yaml against your active cluster context."
      },
      {
        "letter": "C",
        "text": "Run kubectl create -f frontend-app.yaml and avoid declarative object tracking."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances create-from-container using frontend-app.yaml."
      }
    ],
    "correct": "B",
    "explanation": "The standard and recommended method for deploying declarative Kubernetes resources to a GKE cluster is `kubectl apply -f <manifest>`, which creates or updates resources in-place while maintaining declarative configuration state in the cluster. `gcloud container clusters update` manages cluster-level properties (like autoscaling or release channels), not application workloads. `kubectl create` is imperative and fails if objects exist, while `create-from-container` is for standalone Compute Engine VMs.",
    "distractors": {
      "A": "gcloud container clusters update modifies cluster control plane settings and node pool configurations, not application-level Kubernetes workloads.",
      "C": "kubectl create performs imperative object creation that errors if objects already exist and does not support declarative in-place schema reconciliations.",
      "D": "gcloud compute instances create-from-container provisions individual Compute Engine VMs running a container, not multi-resource manifests in GKE clusters."
    },
    "gcloudCommand": "kubectl apply -f frontend-app.yaml",
    "architectureComponents": [
      "GKE Standard Cluster",
      "Kubernetes Deployment",
      "Kubernetes Service"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/deploying-workloads-overview"
  },
  {
    "id": "ACE-D3-012",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "subtopic": "Artifact Registry Docker Repository Creation",
    "difficulty": "easy",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 80,
    "caseStudy": null,
    "title": "Creating Artifact Registry Repositories for Docker Container Images",
    "scenario": "Your organization is migrating container image storage from deprecated Container Registry to Artifact Registry. You need to create a regional repository named backend-containers in us-central1 optimized for storing standard OCI container images with fine-grained IAM controls. Which Google Cloud CLI command should you run?",
    "conceptos": [
      "Artifact Registry",
      "Docker Repositories",
      "OCI Artifacts",
      "gcloud artifacts"
    ],
    "keywords": [
      "artifact registry",
      "docker",
      "repository",
      "us-central1",
      "gcloud artifacts"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud artifacts repositories create backend-containers --repository-format=docker --location=us-central1"
      },
      {
        "letter": "B",
        "text": "gcloud container images repositories create backend-containers --format=docker --location=us-central1"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets create gs://us-central1-docker.pkg.dev/backend-containers --location=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud compute images create backend-containers --source-format=docker --storage-location=us-central1"
      }
    ],
    "correct": "A",
    "explanation": "The command `gcloud artifacts repositories create <NAME> --repository-format=docker --location=<REGION>` creates an OCI-compliant Artifact Registry repository in the specified region. `gcloud container images` does not have a repository creation subcommand. Cloud Storage buckets and Compute Engine images are separate services that do not provide native Docker registry protocols.",
    "distractors": {
      "B": "gcloud container images manages Container Registry image tags and vulnerability summaries, but lacks a repositories create subcommand.",
      "C": "gcloud storage buckets create provisions object storage buckets rather than native OCI-compliant Artifact Registry package repositories.",
      "D": "gcloud compute images create provisions bootable VM disk images for Compute Engine, not container image repositories."
    },
    "gcloudCommand": "gcloud artifacts repositories create backend-containers --repository-format=docker --location=us-central1",
    "architectureComponents": [
      "Artifact Registry",
      "Docker Repository",
      "Cloud Run",
      "GKE"
    ],
    "officialDocUrl": "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  },
  {
    "id": "ACE-D3-013",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "subtopic": "Cloud NAT Gateway Deployment with Cloud Router",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 100,
    "caseStudy": null,
    "title": "Deploying Managed Cloud NAT Gateways for Secure Outbound Egress",
    "scenario": "You administer a custom VPC network with private subnets hosting Compute Engine instances without external IP addresses. The backend instances require secure outbound internet connectivity to download operating system security patches while strictly blocking all unsolicited inbound connections from the internet. You must deploy Cloud NAT in region us-east1. Which two steps should you execute? (Choose 2.)",
    "conceptos": [
      "Cloud NAT",
      "Cloud Router",
      "Outbound Connectivity",
      "Private Subnets"
    ],
    "keywords": [
      "cloud nat",
      "cloud router",
      "private subnet",
      "egress",
      "nat gateway"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Create an egress VPC firewall rule allowing all outbound TCP and UDP traffic to destination 0.0.0.0/0."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Router named nat-router in region us-east1 on the custom VPC network using gcloud compute routers create."
      },
      {
        "letter": "C",
        "text": "Deploy a custom Compute Engine instance running an iptables NAT proxy in each subnet with external IP addresses enabled."
      },
      {
        "letter": "D",
        "text": "Create a Cloud NAT gateway named nat-gw attached to nat-router in us-east1 using gcloud compute routers nats create."
      },
      {
        "letter": "E",
        "text": "Configure Private Google Access on all subnets in us-east1 to enable outbound internet gateway routing."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "explanation": "Deploying Google Cloud NAT requires two distinct actions: (1) creating a regional Cloud Router in the VPC (`gcloud compute routers create`) to establish the control plane, and (2) configuring the Cloud NAT service on that router (`gcloud compute routers nats create`). Egress firewall rules do not perform address translation. Custom proxy VMs introduce maintenance overhead and failure points. Private Google Access only connects to Google APIs, not the public internet.",
    "distractors": {
      "A": "VPC firewall rules perform stateful packet filtering but cannot perform network address translation for VMs lacking public IPs.",
      "C": "Custom VM-based NAT proxies introduce maintenance overhead, single points of failure, and bottleneck risks compared to managed Cloud NAT.",
      "E": "Private Google Access only enables private routing to Google APIs and services (*.googleapis.com), not outbound public internet access."
    },
    "gcloudCommand": "gcloud compute routers create nat-router --network=custom-vpc --region=us-east1; gcloud compute routers nats create nat-gw --router=nat-router --region=us-east1 --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges",
    "architectureComponents": [
      "VPC Network",
      "Cloud Router",
      "Cloud NAT Gateway",
      "Compute Engine VMs"
    ],
    "officialDocUrl": "https://cloud.google.com/nat/docs/gcloud-quickstart"
  },
  {
    "id": "ACE-D3-014",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud SQL SQL Dump Import",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Importing Relational SQL Dump Files into Cloud SQL Instances",
    "scenario": "Your team maintains a database migration pipeline. A 20 GB compressed MySQL dump file db-backup.sql.gz is stored in Cloud Storage bucket gs://corp-db-dumps/. You need to import this data into database app_db on an existing Cloud SQL instance named prod-mysql-1 using the Google Cloud CLI with minimal manual steps. Which command should you execute?",
    "conceptos": [
      "Cloud SQL",
      "gcloud sql import",
      "Cloud Storage Dump",
      "Database Migration"
    ],
    "keywords": [
      "cloud sql",
      "mysql",
      "import",
      "cloud storage",
      "gcloud sql import"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances restore-backup prod-mysql-1 --source=gs://corp-db-dumps/db-backup.sql.gz"
      },
      {
        "letter": "B",
        "text": "gcloud sql databases import-file prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db"
      },
      {
        "letter": "C",
        "text": "gcloud sql import sql prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db"
      },
      {
        "letter": "D",
        "text": "bq load --source_format=CSV corp_db.app_table gs://corp-db-dumps/db-backup.sql.gz --autodetect"
      }
    ],
    "correct": "C",
    "explanation": "The command `gcloud sql import sql <INSTANCE> <GCS_URI> --database=<DB_NAME>` asynchronously imports SQL dump files directly from Cloud Storage into a Cloud SQL database. `restore-backup` restores native Cloud SQL automated backups via backup IDs. `databases import-file` is not a valid gcloud command. `bq load` is for loading analytical data into BigQuery tables.",
    "distractors": {
      "A": "gcloud sql instances restore-backup is used to restore automated Cloud SQL backups by ID, not to import external SQL files from Cloud Storage.",
      "B": "gcloud sql databases import-file is not a valid gcloud command; the correct command group is gcloud sql import sql.",
      "D": "bq load is the BigQuery CLI tool used for loading structured data into BigQuery tables, not relational databases in Cloud SQL."
    },
    "gcloudCommand": "gcloud sql import sql prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db",
    "architectureComponents": [
      "Cloud SQL MySQL",
      "Cloud Storage Bucket",
      "Database Migration"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/import-export/importing"
  },
  {
    "id": "ACE-D3-015",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "subtopic": "App Engine Application Deployment and Traffic Promotion",
    "difficulty": "easy",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 80,
    "caseStudy": null,
    "title": "Deploying Applications to App Engine Standard with Immediate Traffic Routing",
    "scenario": "You have developed a Node.js web application with an app.yaml configuration file targeting the App Engine standard environment in your local source directory. You need to deploy the application to project retail-app-prod and ensure the newly deployed version immediately receives 100% of incoming production traffic. Which command should you execute?",
    "conceptos": [
      "App Engine Standard",
      "gcloud app deploy",
      "Traffic Promotion",
      "app.yaml"
    ],
    "keywords": [
      "app engine",
      "app.yaml",
      "gcloud app deploy",
      "promote",
      "traffic split"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud run deploy retail-app-prod --app-yaml=app.yaml --platform=managed in your directory."
      },
      {
        "letter": "B",
        "text": "Run gcloud app deploy app.yaml --project=retail-app-prod --promote from your local directory."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances create-from-app app.yaml --project=retail-app-prod --target-pool."
      },
      {
        "letter": "D",
        "text": "Run gsutil cp -r . gs://retail-app-prod-appengine/ && gcloud app versions start latest-v1."
      }
    ],
    "correct": "B",
    "explanation": "Running `gcloud app deploy app.yaml --project=<PROJECT> --promote` deploys the application source code to App Engine and immediately routes 100% of incoming traffic to the newly created version (`--promote` is the default behavior). `gcloud run deploy` does not accept `app.yaml` files. `create-from-app` is a non-existent command. Copying raw files to Cloud Storage via `gsutil cp` does not initiate App Engine builds or runtime staging.",
    "distractors": {
      "A": "gcloud run deploy is used for deploying container images to Cloud Run and does not parse App Engine app.yaml configuration files.",
      "C": "gcloud compute instances create-from-app is an invalid command; Compute Engine does not deploy App Engine descriptors.",
      "D": "Copying files to Cloud Storage via gsutil cp does not trigger App Engine buildpack compilation or version deployment."
    },
    "gcloudCommand": "gcloud app deploy app.yaml --project=retail-app-prod --promote",
    "architectureComponents": [
      "App Engine Standard",
      "Cloud Build",
      "Traffic Split"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/deploying-web-app"
  },
  {
    "id": "ACE-D3-016",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "subtopic": "GKE Spot Node Pool Creation",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Creating Spot VM Node Pools in Existing GKE Clusters",
    "scenario": "You manage an existing GKE Standard cluster named analytics-cluster in region us-central1. To run fault-tolerant batch processing workloads at significant cost savings, you need to provision a dedicated node pool named batch-pool containing 5 e2-standard-4 Spot VMs labeled with app=batch-worker. Which command should you execute?",
    "conceptos": [
      "GKE Node Pools",
      "Spot VMs",
      "Preemptible Nodes",
      "gcloud container node-pools"
    ],
    "keywords": [
      "gke",
      "node pool",
      "spot vms",
      "preemptible",
      "gcloud container node-pools"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud container node-pools create batch-pool --cluster=analytics-cluster --region=us-central1 --machine-type=e2-standard-4 --num-nodes=5 --spot --node-labels=app=batch-worker"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed create batch-pool --cluster=analytics-cluster --region=us-central1 --size=5 --preemptible --node-labels=app=batch-worker --template=e2-standard-4"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters update analytics-cluster --region=us-central1 --add-node-pool=batch-pool --machine-type=e2-standard-4 --num-nodes=5 --preemptible --labels=app=batch-worker"
      },
      {
        "letter": "D",
        "text": "kubectl create nodepool batch-pool --cluster=analytics-cluster --region=us-central1 --machine-type=e2-standard-4 --replicas=5 --spot-instances --labels=app=batch-worker --validate=true"
      }
    ],
    "correct": "A",
    "explanation": "The command `gcloud container node-pools create <POOL_NAME> --cluster=<CLUSTER> --region=<REGION> --machine-type=<TYPE> --num-nodes=<N> --spot --node-labels=<KEY=VAL>` creates a new node pool attached to an existing GKE cluster using Spot VMs. `gcloud compute instance-groups` creates standalone Compute Engine MIGs not managed by GKE. `clusters update` does not support adding node pools. `kubectl` cannot provision cloud compute infrastructure directly.",
    "distractors": {
      "B": "Standalone Compute Engine Managed Instance Groups are not managed by the GKE control plane as integrated Kubernetes node pools.",
      "C": "gcloud container clusters update modifies cluster-level properties; provisioning new node pools requires gcloud container node-pools create.",
      "D": "kubectl manages in-cluster Kubernetes objects and cannot invoke cloud provider infrastructure APIs to provision physical VM node pools."
    },
    "gcloudCommand": "gcloud container node-pools create batch-pool --cluster=analytics-cluster --region=us-central1 --machine-type=e2-standard-4 --num-nodes=5 --spot --node-labels=app=batch-worker",
    "architectureComponents": [
      "GKE Standard Cluster",
      "Spot VMs",
      "Kubernetes Node Pool"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools"
  },
  {
    "id": "ACE-D3-017",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "subtopic": "Application Load Balancer Backend Configuration",
    "difficulty": "hard",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 110,
    "caseStudy": null,
    "title": "Configuring Global Application Load Balancer Backend Services and Health Checks",
    "scenario": "You are configuring a Global External Application Load Balancer to distribute traffic across a Managed Instance Group (MIG) named web-mig-us located in region us-central1. You have already provisioned the MIG. You need to establish an HTTP health check and configure a global backend service that routes traffic to this MIG. Which two steps should you execute? (Choose 2.)",
    "conceptos": [
      "Application Load Balancer",
      "Backend Services",
      "Health Checks",
      "Managed Instance Groups"
    ],
    "keywords": [
      "load balancer",
      "backend service",
      "health check",
      "managed instance group",
      "global"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Create an HTTP health check named web-health-check on port 80 using gcloud compute health-checks create http."
      },
      {
        "letter": "B",
        "text": "Create a regional forwarding rule named web-fwd-rule pointing directly to the web-mig-us backend instances."
      },
      {
        "letter": "C",
        "text": "Create a global backend service with web-health-check attached and add web-mig-us as its backend endpoint."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud Armor security policy and configure it as the direct proxy target for the web-mig-us MIG."
      },
      {
        "letter": "E",
        "text": "Configure a target pool named web-pool on port 80 and register all individual VM instance IP addresses."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "explanation": "Configuring the backend tier of a Global External Application Load Balancer requires: (1) creating a health check (`gcloud compute health-checks create http`) to monitor backend instance health, and (2) creating a global backend service (`gcloud compute backend-services create --global`) that references the health check and attaching the Managed Instance Group (`backend-services add-backend`). Forwarding rules point to target proxies, not directly to backend instances. Target pools are for legacy Network Load Balancers. Cloud Armor policies attach to backend services, not as standalone routing proxies.",
    "distractors": {
      "B": "Forwarding rules in Application Load Balancers route traffic to target HTTP(S) proxies and URL maps, never directly to instance groups.",
      "D": "Cloud Armor policies attach to backend services for security filtering; they do not function as direct traffic routing proxies.",
      "E": "Target pools are legacy backend mechanisms used exclusively with external passthrough Network Load Balancers."
    },
    "gcloudCommand": "gcloud compute health-checks create http web-health-check --port=80; gcloud compute backend-services create web-backend-svc --protocol=HTTP --port-name=http --health-checks=web-health-check --global; gcloud compute backend-services add-backend web-backend-svc --instance-group=web-mig-us --instance-group-region=us-central1 --global",
    "architectureComponents": [
      "External Application Load Balancer",
      "Backend Service",
      "Health Check",
      "MIG"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/https/setup-global-ext-https-compute"
  },
  {
    "id": "ACE-D3-018",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "BigQuery Table Partitioning and Clustering Creation",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Creating Partitioned and Clustered Tables in BigQuery via bq CLI",
    "scenario": "You need to deploy a high-volume financial transactions table named transactions inside an existing BigQuery dataset corp_finance. To optimize query performance and control costs, the table must be partitioned daily on the transaction_time TIMESTAMP column, clustered by merchant_id and customer_id, and created with schema ./schema.json. Which command should you execute?",
    "conceptos": [
      "BigQuery",
      "Table Partitioning",
      "Clustering",
      "bq mk"
    ],
    "keywords": [
      "bigquery",
      "partitioning",
      "clustering",
      "bq mk",
      "time_partitioning_field"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "bq mk --table --schema=./schema.json --range_partitioning=transaction_time,1,100,1 --cluster_by=merchant_id corp_finance.transactions"
      },
      {
        "letter": "B",
        "text": "gcloud bigquery tables create transactions --dataset=corp_finance --partition-by=transaction_time --cluster-by=merchant_id,customer_id"
      },
      {
        "letter": "C",
        "text": "bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json"
      },
      {
        "letter": "D",
        "text": "bq load --source_format=CSV --time_partitioning_type=DAY --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json"
      }
    ],
    "correct": "C",
    "explanation": "The command `bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id <DATASET.TABLE> <SCHEMA_FILE>` creates a BigQuery table with timestamp-based partitioning and multi-column clustering. `--range_partitioning` is for integer ranges. `gcloud bigquery` is not a valid CLI command group. `bq load` ingests data records rather than creating empty table definitions from schemas.",
    "distractors": {
      "A": "--range_partitioning partitions tables by integer ranges rather than TIMESTAMP or DATE fields and uses non-standard clustering flags.",
      "B": "gcloud bigquery is not a standard Google Cloud CLI command group; BigQuery schemas and tables are managed via the bq CLI or SQL DDL.",
      "D": "bq load is used to load data rows from data files into tables, rather than creating an empty schema definition with partition metadata."
    },
    "gcloudCommand": "bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json",
    "architectureComponents": [
      "BigQuery Dataset",
      "Partitioned Table",
      "Clustered Table"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/creating-partitioned-tables"
  },
  {
    "id": "ACE-D3-019",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "subtopic": "GKE Ingress with Google-Managed SSL/TLS Certificates",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Configuring Google-Managed SSL Certificates for GKE Ingress",
    "scenario": "You are exposing an HTTPS web application on Google Kubernetes Engine through the GKE Ingress controller. Google Cloud must provision, attach and renew a trusted certificate for app.example.com with no manual rotation, and the certificate must actually reach ACTIVE status. Which two steps are required? (Choose 2.)",
    "conceptos": [
      "GKE Ingress",
      "Google-managed Certificates",
      "ManagedCertificate CRD",
      "SSL/TLS"
    ],
    "keywords": [
      "gke",
      "ingress",
      "managed certificate",
      "ssl",
      "tls",
      "networking.gke.io"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a cert-manager CronJob that downloads Let's Encrypt keys and updates Ingress secrets."
      },
      {
        "letter": "B",
        "text": "Deploy a ManagedCertificate custom resource and reference it in the Ingress annotations."
      },
      {
        "letter": "C",
        "text": "Deploy a Secret of type kubernetes.io/tls containing self-signed certs in the namespace."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud DNS record set containing public SSL private key pairs in TXT attributes."
      },
      {
        "letter": "E",
        "text": "Point the app.example.com DNS A record at the Ingress load balancer's static IP address."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "explanation": "The ManagedCertificate custom resource, referenced from the Ingress through the networking.gke.io/managed-certificates annotation, is what makes Google issue and auto-renew the certificate. Provisioning is validated over HTTP, so Google must find app.example.com already resolving to the load balancer's address: until the A record points at the Ingress IP the certificate stays in PROVISIONING and then reports FAILED_NOT_VISIBLE. Reserving a static IP and creating the record is therefore part of the deployment, not a follow-up task.",
    "distractors": {
      "A": "A self-run cert-manager CronJob works but reintroduces exactly the key handling and renewal maintenance the requirement rules out.",
      "C": "A self-signed kubernetes.io/tls Secret is untrusted by browsers and still has to be replaced by hand at every expiry.",
      "D": "Cloud DNS TXT records hold verification strings and metadata; they cannot carry a certificate or serve TLS termination material."
    },
    "gcloudCommand": "kubectl apply -f managed-cert.yaml; kubectl apply -f ingress.yaml",
    "architectureComponents": [
      "GKE Ingress",
      "ManagedCertificate CRD",
      "External Application Load Balancer"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs"
  },
  {
    "id": "ACE-D3-020",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud Bigtable Instance and Table Provisioning",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 95,
    "caseStudy": null,
    "title": "Creating Cloud Bigtable Instances and Schema Tables via CLI",
    "scenario": "You are provisioning a high-throughput time-series metrics storage backend. You need to create a Cloud Bigtable production instance named telemetry-db with an initial cluster of 4 SSD nodes in us-central1-b, and create a table named device-readings with column family cf1. Which sequence of commands should you execute?",
    "conceptos": [
      "Cloud Bigtable",
      "gcloud bigtable",
      "cbt CLI",
      "Column Families"
    ],
    "keywords": [
      "bigtable",
      "cbt",
      "column family",
      "ssd",
      "instances create",
      "createtable"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create telemetry-db --database-family=BIGTABLE --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD && cbt -instance=telemetry-db createtable device-readings 'families=cf1'"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD && cbt -instance=telemetry-db createtable device-readings 'families=cf1'"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create telemetry-db --zone=us-central1-b --custom-extensions=bigtable-ssd --cluster-num-nodes=4 --cluster-storage-type=SSD && cbt -instance=telemetry-db createtable device-readings 'families=cf1'"
      },
      {
        "letter": "D",
        "text": "bq mk --dataset --location=us-central1 telemetry-db && bq mk --table --storage_type=BIGTABLE_SSD telemetry-db.device-readings 'column_family:cf1' && cbt -instance=telemetry-db createtable device-readings 'families=cf1'"
      }
    ],
    "correct": "B",
    "explanation": "Creating a Cloud Bigtable instance and table requires: (1) `gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD` to provision the instance and storage nodes, and (2) `cbt -instance=telemetry-db createtable device-readings 'families=cf1'` to create the table and initial column family. `gcloud sql`, `gcloud compute`, and `bq` manage relational, VM, and analytical services respectively.",
    "distractors": {
      "A": "gcloud sql manages relational database instances (MySQL, PostgreSQL, SQL Server), not NoSQL Cloud Bigtable clusters.",
      "C": "gcloud compute instances create provisions Compute Engine virtual machines, not managed Bigtable storage clusters.",
      "D": "bq mk creates BigQuery datasets and analytical tables, not Cloud Bigtable instances or column family schemas."
    },
    "gcloudCommand": "gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD; cbt -instance=telemetry-db createtable device-readings 'families=cf1'",
    "architectureComponents": [
      "Cloud Bigtable Instance",
      "cbt CLI",
      "Column Family"
    ],
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/creating-instance"
  },
  {
    "id": "ACE-D3-021",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "subtopic": "Compute Engine Custom Image Creation from Disk",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Creating Custom VM Images and Image Families from Boot Disks",
    "scenario": "You have configured and stopped a hardened base virtual machine base-template-vm in zone us-east1-b. You need to create a reusable Compute Engine custom image named golden-ubuntu-v1 grouped under image family corp-ubuntu using the VM's source boot disk. Which Google Cloud CLI command should you execute?",
    "conceptos": [
      "Compute Engine",
      "Custom Images",
      "Image Families",
      "gcloud compute images"
    ],
    "keywords": [
      "compute engine",
      "custom image",
      "image family",
      "source-disk",
      "gcloud compute images"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances snapshot base-template-vm --zone=us-east1-b --snapshot-names=golden-ubuntu-v1 --family=corp-ubuntu"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks export base-template-vm --zone=us-east1-b --destination=gs://images/golden-ubuntu-v1 --family=corp-ubuntu"
      },
      {
        "letter": "C",
        "text": "gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-templates create golden-ubuntu-v1 --source-disk=base-template-vm --zone=us-east1-b --family=corp-ubuntu"
      }
    ],
    "correct": "C",
    "explanation": "The command `gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu` creates a reusable custom image from an existing boot disk and assigns it to an image family. Snapshots provide point-in-time backup copies, disk export creates offline storage files, and instance templates define VM provisioning metadata rather than the underlying OS image.",
    "distractors": {
      "A": "gcloud compute instances snapshot creates point-in-time disk backup snapshots, not custom boot images grouped under image families.",
      "B": "gcloud compute disks export copies raw disk images to Cloud Storage buckets as files rather than registering a custom image in the project.",
      "D": "gcloud compute instance-templates create defines complete VM provisioning specifications, not individual custom OS images."
    },
    "gcloudCommand": "gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu",
    "architectureComponents": [
      "Compute Engine VM",
      "Custom Image",
      "Image Family"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/images/create-custom"
  },
  {
    "id": "ACE-D3-022",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud Storage Dual-Region Bucket Provisioning",
    "difficulty": "easy",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 80,
    "caseStudy": null,
    "title": "Creating Dual-Region Cloud Storage Buckets with Uniform Bucket-Level Access",
    "scenario": "Your company requires a highly available Cloud Storage bucket named corp-customer-receipts deployed across dual-region us-central1 and us-east1. The bucket must enforce Standard storage class and enforce uniform bucket-level access for simplified IAM security. Which Google Cloud CLI command should you run?",
    "conceptos": [
      "Cloud Storage",
      "Dual-Region",
      "Uniform Bucket-Level Access",
      "gcloud storage buckets create"
    ],
    "keywords": [
      "cloud storage",
      "dual-region",
      "uniform bucket level access",
      "gcloud storage buckets create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://corp-customer-receipts --location=us-central1,us-east1 --storage-class=STANDARD --enable-uniform-bucket-level-access"
      },
      {
        "letter": "C",
        "text": "gsutil mb -c STANDARD -l us-central1,us-east1 -b on --dual-region=us-central1,us-east1 gs://corp-customer-receipts --enforce-uniform-bucket-access"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access"
      }
    ],
    "correct": "D",
    "explanation": "The command `gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access` creates a dual-region Cloud Storage bucket with Standard storage and Uniform Bucket-Level Access. `gcloud compute` does not manage storage buckets. `buckets update` modifies existing buckets. `gsutil mb` is the legacy CLI tool and uses invalid argument combinations.",
    "distractors": {
      "A": "gcloud compute buckets create is an invalid command; Cloud Storage buckets are managed under gcloud storage buckets.",
      "B": "gcloud storage buckets update is used to modify existing buckets, not to provision new buckets in a specified location.",
      "C": "gsutil mb is the legacy CLI tool and includes invalid syntax flags (--dual-region and --enforce-uniform-bucket-access)."
    },
    "gcloudCommand": "gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access",
    "architectureComponents": [
      "Cloud Storage Bucket",
      "Dual-Region",
      "Uniform Bucket-Level Access"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/creating-buckets"
  },
  {
    "id": "ACE-D3-023",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.6",
    "subsectionName": "Implementing resources through infrastructure as code",
    "subtopic": "Cloud Build Trigger Configuration for Git Repositories",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 95,
    "caseStudy": null,
    "title": "Configuring Automated CI/CD Build Triggers in Cloud Build",
    "scenario": "You are configuring continuous integration in Google Cloud. Whenever developers push new commits to the main branch of a GitHub repository named corp-app, Cloud Build must automatically invoke the build pipeline defined in cloudbuild.yaml. You need to set up this automated trigger with appropriate permissions. Which two actions should you take? (Choose 2.)",
    "conceptos": [
      "Cloud Build",
      "Build Triggers",
      "CI/CD Automation",
      "Git Repositories"
    ],
    "keywords": [
      "cloud build",
      "triggers create",
      "github",
      "cloudbuild.yaml",
      "service account"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Compute Engine VM configured with a cron job to poll git commits and run local build scripts."
      },
      {
        "letter": "B",
        "text": "Create a Cloud Build trigger for the connected repository filtering on the main branch via gcloud builds triggers create."
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Pub/Sub topic subscription that receives GitHub webhooks and executes gcloud builds submit."
      },
      {
        "letter": "D",
        "text": "Create a Cloud Storage bucket notification trigger that invokes Cloud Functions whenever source code changes."
      },
      {
        "letter": "E",
        "text": "Grant the Cloud Build service account the required IAM roles to access project resources during build execution."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "explanation": "Automating CI pipelines with Cloud Build requires: (1) creating a repository trigger (`gcloud builds triggers create github --repo-name=corp-app --branch-pattern='^main$' --build-config=cloudbuild.yaml`) to automatically start builds on Git push events, and (2) granting the Cloud Build service account the necessary IAM permissions to access build resources and target deployment environments. Cron polling, custom webhook subscriptions, and Cloud Storage triggers add unnecessary complexity.",
    "distractors": {
      "A": "Polling git repositories with cron scripts on Compute Engine adds operational maintenance and delays compared to native Cloud Build triggers.",
      "C": "Custom webhook forwarding architectures are redundant when Cloud Build provides native repository connection triggers.",
      "D": "Cloud Storage notifications respond to bucket archive uploads rather than native Git branch push events."
    },
    "gcloudCommand": "gcloud builds triggers create github --repo-name=corp-app --repo-owner=my-org --branch-pattern='^main$' --build-config=cloudbuild.yaml",
    "architectureComponents": [
      "Cloud Build",
      "Build Trigger",
      "GitHub Repository",
      "Service Account"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  },
  {
    "id": "ACE-D3-024",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "subtopic": "Managed Instance Group Autoscaling on Cloud Monitoring Metrics",
    "difficulty": "hard",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 105,
    "caseStudy": null,
    "title": "Configuring Managed Instance Group Autoscaling Based on Cloud Monitoring Metrics",
    "scenario": "You manage a regional Managed Instance Group (MIG) named worker-mig in us-central1 that pulls tasks from Cloud Pub/Sub. You must configure autoscaling between 2 and 50 instances based on the Cloud Monitoring metric pubsub.googleapis.com/subscription/num_undelivered_messages targeting 100 undelivered messages per instance. Which command should you execute?",
    "conceptos": [
      "Compute Engine",
      "Managed Instance Groups",
      "Autoscaling",
      "Cloud Monitoring Metrics"
    ],
    "keywords": [
      "compute engine",
      "autoscaling",
      "managed instance group",
      "custom metric",
      "pubsub"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --target-cpu-utilization=0.80 --target-load-balancing-utilization=0.80 --scale-in-control=max-scaled-in-replicas=5"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric=pubsub.googleapis.com/subscription/num_undelivered_messages --custom-metric-target=100 --custom-metric-target-type=GAUGE"
      },
      {
        "letter": "C",
        "text": "gcloud monitoring alert-policies create --display-name=scale-worker-mig --condition-filter=resource.type=pubsub_subscription --min-replicas=2 --max-replicas=50 --action-scale-mig=worker-mig --region=us-central1 --target-metric-value=100"
      },
      {
        "letter": "D",
        "text": "kubectl autoscale deployment worker-mig --min=2 --max=50 --cpu-percent=80 --custom-metric=pubsub.googleapis.com/subscription/num_undelivered_messages --metric-target=100 --region=us-central1 --target-type=AverageValue"
      }
    ],
    "correct": "B",
    "explanation": "The command `gcloud compute instance-groups managed set-autoscaling <MIG> --region=<REGION> --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric=<METRIC> --custom-metric-target=100 --custom-metric-target-type=GAUGE` configures Compute Engine autoscaling based on custom or standard Cloud Monitoring metrics. CPU autoscaling does not track queue backlog. Alert policies send alerts but cannot configure autoscalers. `kubectl` is for GKE workloads.",
    "distractors": {
      "A": "CPU and load balancer autoscaling policies do not scale based on queue depth and fail to respond to Pub/Sub message backlog.",
      "C": "Cloud Monitoring alert policies generate incident notifications but cannot configure Compute Engine MIG autoscaler policies.",
      "D": "kubectl autoscale configures Kubernetes Horizontal Pod Autoscalers, not Compute Engine Managed Instance Groups."
    },
    "gcloudCommand": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric='pubsub.googleapis.com/subscription/num_undelivered_messages' --custom-metric-target=100 --custom-metric-target-type=GAUGE",
    "architectureComponents": [
      "Compute Engine MIG",
      "Cloud Autoscaler",
      "Cloud Monitoring",
      "Cloud Pub/Sub"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics"
  },
  {
    "id": "ACE-D3-025",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "subtopic": "Cloud Run Secret Manager Integration",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Mounting Secret Manager Secrets in Cloud Run Container Deployments",
    "scenario": "A containerized backend API deployed on Cloud Run requires database credentials stored in Secret Manager secret db-password (version latest). The application expects this value in an environment variable named DATABASE_PASSWORD. Which command deploys this service in region us-central1 while following security best practices?",
    "conceptos": [
      "Cloud Run",
      "Secret Manager",
      "Environment Variables",
      "gcloud run deploy"
    ],
    "keywords": [
      "cloud run",
      "secret manager",
      "set-secrets",
      "environment variable",
      "gcloud run deploy"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud run deploy api-service --image=us-docker.pkg.dev/proj/api:v1 --region=us-central1 --set-env-vars=DATABASE_PASSWORD=db-password:latest"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy api-service --image=us-docker.pkg.dev/proj/api:v1 --region=us-central1 --set-custom-secrets=DATABASE_PASSWORD=/secrets/db-password"
      },
      {
        "letter": "C",
        "text": "gcloud run deploy api-service --image=us-docker.pkg.dev/proj/api:v1 --region=us-central1 --set-secrets=DATABASE_PASSWORD=db-password:latest"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create api-service --image=us-docker.pkg.dev/proj/api:v1 --zone=us-central1-a --set-secrets=DATABASE_PASSWORD=db-password"
      }
    ],
    "correct": "C",
    "explanation": "The command `gcloud run deploy <SERVICE> --image=<IMAGE> --region=<REGION> --set-secrets=ENV_VAR=SECRET_NAME:VERSION` injects the secret payload directly into the specified container environment variable securely. `--set-env-vars` sets plaintext string values. `--set-custom-secrets` is an invalid flag. `gcloud compute instances create` is for Compute Engine VMs.",
    "distractors": {
      "A": "--set-env-vars passes the literal string 'db-password:latest' into the environment variable rather than resolving the secret payload from Secret Manager.",
      "B": "--set-custom-secrets is an invalid gcloud command flag; Cloud Run uses --set-secrets to bind Secret Manager secrets.",
      "D": "gcloud compute instances create provisions Compute Engine virtual machines rather than deploying container services on Cloud Run."
    },
    "gcloudCommand": "gcloud run deploy api-service --image=us-docker.pkg.dev/proj/api:v1 --region=us-central1 --set-secrets=DATABASE_PASSWORD=db-password:latest",
    "architectureComponents": [
      "Cloud Run Service",
      "Secret Manager",
      "Artifact Registry"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/secrets"
  },
  {
    "id": "ACE-D3-026",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "subtopic": "VPC Firewall Rules for Load Balancer Health Checks",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Configuring VPC Firewall Rules for Load Balancer Health Check Probes",
    "scenario": "You deployed a backend Managed Instance Group (MIG) behind an External Application Load Balancer. The load balancer marks all backend VM instances as UNHEALTHY. You verify that your application is running on port 80 but VPC ingress firewall rules are blocking health check probes. Which firewall rule should you configure?",
    "conceptos": [
      "VPC Firewall Rules",
      "Health Checks",
      "Load Balancing",
      "Google IP Ranges"
    ],
    "keywords": [
      "firewall rules",
      "health checks",
      "35.191.0.0/16",
      "130.211.0.0/22",
      "load balancing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress rule allowing TCP port 80 traffic from source range 0.0.0.0/0 targeting all instances in the VPC network."
      },
      {
        "letter": "B",
        "text": "Create an egress rule allowing TCP port 80 traffic to Google public health probe ranges 35.191.0.0/16 and 130.211.0.0/22."
      },
      {
        "letter": "C",
        "text": "Create an ingress rule allowing all ICMP traffic from 10.0.0.0/8 to enable network ping responsiveness across all backend VMs."
      },
      {
        "letter": "D",
        "text": "Create an ingress rule allowing TCP port 80 from source IP ranges 35.191.0.0/16 and 130.211.0.0/22 to the target backend tag."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud load balancers probe backend instances from specific well-known IP ranges: `35.191.0.0/16` and `130.211.0.0/22` (for HTTP/HTTPS/TCP load balancing). To allow health check traffic, you must create a VPC ingress firewall rule allowing traffic on the application port from these exact probe ranges to the backend instances. Allowing `0.0.0.0/0` exposes the instances publicly. Health probes require ingress rules, not egress rules. ICMP ping does not satisfy application health checks.",
    "distractors": {
      "A": "Allowing ingress from 0.0.0.0/0 exposes backend VMs directly to the public internet, violating the principle of least privilege.",
      "B": "Health check probes originate from Google's infrastructure into backend instances, requiring an ingress rule rather than an egress rule.",
      "C": "Application Load Balancers perform TCP/HTTP application health checks, which cannot be satisfied by ICMP ping firewall rules."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-health-checks --network=custom-vpc --action=ALLOW --direction=INGRESS --source-ranges=35.191.0.0/16,130.211.0.0/22 --rules=tcp:80 --target-tags=http-server",
    "architectureComponents": [
      "VPC Firewall Rules",
      "Health Check Probes",
      "Application Load Balancer"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/health-checks#firewall_rules"
  },
  {
    "id": "ACE-D3-027",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.6",
    "subsectionName": "Implementing resources through infrastructure as code",
    "subtopic": "Cloud Deploy Continuous Delivery Pipelines",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Deploying Google Cloud Deploy Pipelines for Progressive GKE Delivery",
    "scenario": "You are implementing a continuous delivery pipeline using Google Cloud Deploy. The pipeline definition in clouddeploy.yaml specifies progressive rollouts from a staging GKE cluster to a production GKE cluster. You need to create and register this delivery pipeline resource in region us-central1. Which command should you execute?",
    "conceptos": [
      "Cloud Deploy",
      "Delivery Pipelines",
      "GKE Continuous Delivery",
      "gcloud deploy apply"
    ],
    "keywords": [
      "cloud deploy",
      "delivery pipeline",
      "gke",
      "gcloud deploy apply",
      "progressive rollout"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project=prod-project"
      },
      {
        "letter": "B",
        "text": "gcloud builds submit --config=clouddeploy.yaml --region=us-central1 --project=prod-project"
      },
      {
        "letter": "C",
        "text": "kubectl apply -f clouddeploy.yaml --namespace=cloud-deploy --context=gke-prod-cluster"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters apply --pipeline=clouddeploy.yaml --region=us-central1 --async"
      }
    ],
    "correct": "A",
    "explanation": "The command `gcloud deploy apply --file=clouddeploy.yaml --region=<REGION> --project=<PROJECT>` creates or updates Cloud Deploy delivery pipelines and target definitions declaratively. `gcloud builds submit` invokes Cloud Build builds. `kubectl apply` manages in-cluster Kubernetes objects, not Cloud Deploy control plane resources. `clusters apply` is an invalid command.",
    "distractors": {
      "B": "gcloud builds submit executes Cloud Build builds for artifact creation, not Cloud Deploy delivery pipeline registrations.",
      "C": "kubectl apply manages in-cluster Kubernetes objects, whereas Cloud Deploy pipelines are Google Cloud managed control plane resources.",
      "D": "gcloud container clusters apply is an invalid command; GKE clusters do not have a native --pipeline registration flag."
    },
    "gcloudCommand": "gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project=prod-project",
    "architectureComponents": [
      "Cloud Deploy",
      "Delivery Pipeline",
      "GKE Staging",
      "GKE Production"
    ],
    "officialDocUrl": "https://cloud.google.com/deploy/docs/create-pipeline"
  },
  {
    "id": "ACE-D3-028",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud Storage Object Lifecycle Management",
    "difficulty": "easy",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 80,
    "caseStudy": null,
    "title": "Applying Object Lifecycle Management Policies to Cloud Storage Buckets",
    "scenario": "You authored a lifecycle configuration file lifecycle-30d.json that transitions Cloud Storage objects older than 30 days to Nearline storage and deletes objects older than 365 days. You need to apply this policy to an existing bucket gs://corp-archive-vault using the Google Cloud CLI. Which command should you execute?",
    "conceptos": [
      "Cloud Storage",
      "Lifecycle Management",
      "Storage Classes",
      "gcloud storage buckets update"
    ],
    "keywords": [
      "cloud storage",
      "lifecycle",
      "nearline",
      "gcloud storage buckets update",
      "lifecycle-file"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage objects update gs://corp-archive-vault/* --lifecycle-file=lifecycle-30d.json"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://corp-archive-vault --lifecycle-file=lifecycle-30d.json"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets set-lifecycle gs://corp-archive-vault --config=lifecycle-30d.json"
      },
      {
        "letter": "D",
        "text": "bq update --lifecycle_file=lifecycle-30d.json gs://corp-archive-vault --project=archive"
      }
    ],
    "correct": "B",
    "explanation": "The command `gcloud storage buckets update gs://<BUCKET_NAME> --lifecycle-file=<CONFIG_FILE>` applies an object lifecycle management rule configuration to a Cloud Storage bucket. Lifecycle policies apply at the bucket level, not to individual object wildcards (`gs://bucket/*`). `set-lifecycle` is not a valid subcommand in `gcloud storage buckets`. `bq update` is for BigQuery resources.",
    "distractors": {
      "A": "Lifecycle rules are applied at the bucket level, not to individual object paths or wildcard expressions.",
      "C": "set-lifecycle is not a valid gcloud storage buckets subcommand; lifecycle configurations are set via --lifecycle-file on buckets update.",
      "D": "bq update is the BigQuery CLI tool and cannot configure Cloud Storage bucket lifecycle configurations."
    },
    "gcloudCommand": "gcloud storage buckets update gs://corp-archive-vault --lifecycle-file=lifecycle-30d.json",
    "architectureComponents": [
      "Cloud Storage Bucket",
      "Nearline Storage",
      "Lifecycle Management"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/managing-lifecycles"
  },
  {
    "id": "ACE-D3-029",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "subtopic": "Kubernetes ConfigMaps and Secrets as Volume Mounts",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Mounting Kubernetes ConfigMaps and Secrets as Container Volumes in Pods",
    "scenario": "You created a Kubernetes ConfigMap named app-config and a Secret named db-credentials in namespace prod. You need a Pod to consume configuration files at mount path /etc/app/config and database credentials at /etc/app/secrets as read-only files. How should you structure the Pod specification?",
    "conceptos": [
      "GKE Workloads",
      "ConfigMaps",
      "Kubernetes Secrets",
      "VolumeMounts"
    ],
    "keywords": [
      "kubernetes",
      "configmap",
      "secret",
      "volumemounts",
      "volumes",
      "pod"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Define hostPath volumes referencing the local worker node filesystem paths /etc/app/config and /etc/app/secrets."
      },
      {
        "letter": "B",
        "text": "Pass the raw Secret and ConfigMap key-value strings as command-line arguments in the container args definition."
      },
      {
        "letter": "C",
        "text": "Define volumes referencing the ConfigMap and Secret, and attach volumeMounts with target paths in the container."
      },
      {
        "letter": "D",
        "text": "Configure an initContainer that runs curl commands to download configurations and credentials into emptyDir volumes."
      }
    ],
    "correct": "C",
    "explanation": "To mount ConfigMaps and Secrets as directory files inside a container, you define `volumes` in the Pod spec referencing the `configMap` and `secret` names, and add matching `volumeMounts` in the container spec mapping those volumes to `/etc/app/config` and `/etc/app/secrets`. `hostPath` mounts node-local storage rather than Kubernetes objects. Passing secrets as command-line arguments exposes credentials in process tables. InitContainer downloading adds unnecessary complexity.",
    "distractors": {
      "A": "hostPath binds to the worker node's local filesystem, which bypasses Kubernetes Secrets and creates node-coupling dependencies.",
      "B": "Passing secrets via container command-line arguments exposes sensitive credentials in process listings and cluster metadata.",
      "D": "Downloading credentials via custom initContainers adds operational complexity and security risks compared to native volume mounts."
    },
    "gcloudCommand": "kubectl apply -f pod-spec.yaml",
    "architectureComponents": [
      "GKE Pod",
      "ConfigMap",
      "Kubernetes Secret",
      "VolumeMount"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod"
  },
  {
    "id": "ACE-D3-030",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud SQL Private IP and User Management",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 100,
    "caseStudy": null,
    "title": "Configuring Cloud SQL Database Users and Private IP Connectivity",
    "scenario": "You are setting up a Cloud SQL for PostgreSQL instance named app-db to communicate exclusively over Private IP with Compute Engine instances in VPC prod-vpc. You need to configure private service connectivity in the VPC and provision an application user named app_user. Which two actions should you take? (Choose 2.)",
    "conceptos": [
      "Cloud SQL",
      "Private IP",
      "Service Networking",
      "gcloud sql users create"
    ],
    "keywords": [
      "cloud sql",
      "postgresql",
      "private ip",
      "private services access",
      "gcloud sql users"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Assign static public IP addresses to all Compute Engine client VMs and allow them in Cloud SQL authorized networks."
      },
      {
        "letter": "B",
        "text": "Establish a private services access connection by peering an allocated IP range in prod-vpc to servicenetworking."
      },
      {
        "letter": "C",
        "text": "Deploy an intermediate proxy VM inside prod-vpc to forward database client connections over an unencrypted socket."
      },
      {
        "letter": "D",
        "text": "Create an IAM service account named app_user and grant it the Cloud SQL Admin role directly on the VPC network."
      },
      {
        "letter": "E",
        "text": "Create the database user app_user with a secure password using the gcloud sql users create command for instance app-db."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "explanation": "Configuring a private Cloud SQL instance and user authentication requires: (1) establishing Private Services Access by allocating an internal IP range in the VPC and creating a VPC network peering connection to `servicenetworking.googleapis.com`, and (2) creating the database application user (`gcloud sql users create app_user --instance=app-db --password=<PASSWORD>`). Authorized networks use public IPs. Custom proxies add unneeded management overhead. IAM Cloud SQL Admin grants administrative instance control, not database engine user credentials.",
    "distractors": {
      "A": "Authorized networks require public IP connectivity, which violates the requirement for private-only VPC database communication.",
      "C": "Deploying custom intermediate proxy VMs adds unneeded management overhead, single points of failure, and latency compared to native Private Services Access.",
      "D": "Cloud SQL Admin IAM role grants infrastructure administration permissions rather than database application user credentials."
    },
    "gcloudCommand": "gcloud compute addresses create google-managed-services-prod-vpc --global --purpose=VPC_PEERING --prefix-length=16 --network=prod-vpc; gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --ranges=google-managed-services-prod-vpc --network=prod-vpc; gcloud sql users create app_user --instance=app-db --password='SuperSecurePassword987!'",
    "architectureComponents": [
      "Cloud SQL PostgreSQL",
      "VPC Private IP",
      "Private Services Access",
      "Database User"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/create-manage-users"
  },
  {
    "id": "ACE-D3-031",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud Spanner Instance, Database, and Schema Deployment",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 95,
    "caseStudy": null,
    "title": "Deploying Cloud Spanner Instances, Databases, and DDL Schemas via CLI",
    "scenario": "You need to deploy a transactional database on Cloud Spanner. You must create an instance named spanner-orders in regional-us-central1 provisioned with 300 Processing Units, create a database orders_db, and define an Orders table schema with primary key OrderId. Which sequence of Google Cloud CLI commands should you run?",
    "conceptos": [
      "Cloud Spanner",
      "Processing Units",
      "gcloud spanner",
      "DDL Schema"
    ],
    "keywords": [
      "cloud spanner",
      "processing units",
      "gcloud spanner instances",
      "ddl",
      "primary key"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create spanner-orders --config=regional-us-central1 --processing-units=300 && gcloud compute databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36)) PRIMARY KEY (OrderId)'"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create spanner-orders --database-version=SPANNER --processing-units=300 && gcloud sql databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36)) PRIMARY KEY (OrderId)'"
      },
      {
        "letter": "C",
        "text": "bq mk --dataset --location=us-central1 spanner_orders && bq query --use_legacy_sql=false 'CREATE TABLE spanner_orders.orders_db (OrderId STRING(36)) PRIMARY KEY (OrderId)' --destination_table=spanner_orders.orders_db"
      },
      {
        "letter": "D",
        "text": "gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300 && gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36)) PRIMARY KEY (OrderId)'"
      }
    ],
    "correct": "D",
    "explanation": "Deploying Cloud Spanner resources via the CLI involves: (1) `gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300` to provision the instance, and (2) `gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36)) PRIMARY KEY (OrderId)'` to create the database with schema definitions. `gcloud compute`, `gcloud sql`, and `bq` manage VMs, relational SQL, and BigQuery data warehouses respectively.",
    "distractors": {
      "A": "gcloud compute manages virtual machines and network routes, not managed Cloud Spanner database clusters.",
      "B": "gcloud sql manages Cloud SQL relational databases (MySQL, Postgres, SQL Server), not Cloud Spanner instances.",
      "C": "bq creates BigQuery analytical datasets and tables, not transactional Cloud Spanner databases."
    },
    "gcloudCommand": "gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300 --description='Orders Spanner'; gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36) NOT NULL, Amount INT64) PRIMARY KEY (OrderId)'",
    "architectureComponents": [
      "Cloud Spanner Instance",
      "Cloud Spanner Database",
      "DDL Schema"
    ],
    "officialDocUrl": "https://cloud.google.com/spanner/docs/create-manage-databases"
  },
  {
    "id": "ACE-D3-032",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "subtopic": "Static External IP Address Reservation and VM Attachment",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Reserving Static External IP Addresses and Assigning to Compute Engine VMs",
    "scenario": "You manage an SFTP server hosted on Compute Engine instance sftp-gateway in zone us-east1-b. External trading partners require a permanent, unchanging public IP address to allowlist in their firewalls. You need to reserve a static external IPv4 address named sftp-static-ip in us-east1 and assign it to the VM. Which commands should you execute?",
    "conceptos": [
      "Compute Engine",
      "Static External IP",
      "gcloud compute addresses",
      "add-access-config"
    ],
    "keywords": [
      "compute engine",
      "static ip",
      "external ip",
      "gcloud compute addresses",
      "add-access-config"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Reserve the address with gcloud compute addresses create and update the VM using gcloud compute instances update --external-ip=sftp-static-ip."
      },
      {
        "letter": "B",
        "text": "Reserve the address with gcloud compute networks subnets add-ip and assign it to the VM using gcloud compute instances add-access-config."
      },
      {
        "letter": "C",
        "text": "Reserve the address with gcloud compute addresses create and assign it to the VM using gcloud compute instances add-access-config."
      },
      {
        "letter": "D",
        "text": "Create a Cloud DNS A record pointing to the ephemeral IP and enable automatic IP freezing using gcloud compute instances set-disk-auto-delete."
      }
    ],
    "correct": "C",
    "explanation": "To assign a static external IP to an existing Compute Engine VM: (1) reserve the regional static IP with `gcloud compute addresses create sftp-static-ip --region=us-east1`, and (2) attach it to the VM's network interface using `gcloud compute instances add-access-config sftp-gateway --zone=us-east1-b --address=<IP_ADDRESS>`. `instances update` does not configure access configs. Subnets do not manage external IPs. Cloud DNS records do not prevent ephemeral IPs from changing upon VM restart.",
    "distractors": {
      "A": "gcloud compute instances update does not support assigning external IP addresses to network interfaces; add-access-config is required.",
      "B": "gcloud compute networks subnets add-ip is an invalid command; static external IPs are reserved via gcloud compute addresses create.",
      "D": "DNS records do not prevent ephemeral external IPs from changing when instances stop and restart."
    },
    "gcloudCommand": "gcloud compute addresses create sftp-static-ip --region=us-east1; gcloud compute instances add-access-config sftp-gateway --zone=us-east1-b --address=$(gcloud compute addresses describe sftp-static-ip --region=us-east1 --format='value(address)')",
    "architectureComponents": [
      "Compute Engine VM",
      "Static External IP",
      "VPC Network Interface"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address"
  },
  {
    "id": "ACE-D3-033",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "subtopic": "GKE StatefulSets with Persistent Volume Claims",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": null,
    "title": "Deploying Kubernetes StatefulSets with PersistentVolumeClaims for Clustered Databases",
    "scenario": "You are deploying a 3-node Apache Cassandra database cluster on Google Kubernetes Engine (GKE). Each replica requires a deterministic, stable network identity (cassandra-0, cassandra-1, cassandra-2) and an independent persistent disk that automatically remounts to the same ordinal pod identity across rescheduling. Which Kubernetes controller should you deploy?",
    "conceptos": [
      "GKE StatefulSets",
      "PersistentVolumeClaims",
      "Headless Services",
      "Clustered Workloads"
    ],
    "keywords": [
      "gke",
      "statefulset",
      "persistentvolumeclaim",
      "volumeclaimtemplates",
      "cassandra"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a Kubernetes Deployment configured with replicas: 3 and an emptyDir volume shared across all container replicas."
      },
      {
        "letter": "B",
        "text": "Deploy a Kubernetes StatefulSet configured with volumeClaimTemplates and paired with a Headless Service definition."
      },
      {
        "letter": "C",
        "text": "Deploy a Kubernetes DaemonSet configured with hostPath persistent storage mounts on every available cluster node."
      },
      {
        "letter": "D",
        "text": "Deploy a Kubernetes ReplicaSet attached to a single ReadWriteMany PersistentVolumeClaim shared across all pods."
      }
    ],
    "correct": "B",
    "explanation": "Kubernetes `StatefulSet` is designed specifically for stateful clustered applications requiring stable network identities (`pod-0`, `pod-1`), ordered deployment, and dedicated persistent storage per pod via `volumeClaimTemplates` that reattaches automatically upon pod restart. `Deployment` treats pods as ephemeral clones. `DaemonSet` runs pods per node without ordinal identities. `ReplicaSet` with shared storage does not provide per-node independent storage for database clusters.",
    "distractors": {
      "A": "Kubernetes Deployments provide ephemeral pods with random hostnames, and emptyDir volumes lose all data upon pod termination.",
      "C": "DaemonSets run one pod per node without ordinal network identities or automated dynamic PVC binding per instance identity.",
      "D": "ReplicaSets do not maintain persistent ordinal pod network identifiers, and shared ReadWriteMany volumes do not provide dedicated per-replica storage for Cassandra nodes."
    },
    "gcloudCommand": "kubectl apply -f cassandra-statefulset.yaml",
    "architectureComponents": [
      "GKE StatefulSet",
      "PersistentVolumeClaim",
      "Headless Service",
      "Compute Engine Persistent Disk"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "ACE-D3-034",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "subtopic": "Persistent Disk Creation and Attachment",
    "difficulty": "easy",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Creating and Attaching Persistent Disks to Compute Engine Instances",
    "scenario": "You administer a Compute Engine virtual machine named data-processor-vm in zone us-central1-a. The workload requires an additional 200 GB SSD persistent disk attached to the running instance to store database index files without recreating the VM. Which Google Cloud CLI commands should you execute?",
    "conceptos": [
      "Compute Engine",
      "Persistent Disks",
      "attach-disk",
      "gcloud compute disks"
    ],
    "keywords": [
      "compute engine",
      "persistent disk",
      "pd-ssd",
      "attach-disk",
      "gcloud compute disks"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd && gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create data-processor-vm --zone=us-central1-a --add-disk=name=data-index-disk,size=200GB,type=pd-ssd && gcloud compute disks attach data-index-disk --instance=data-processor-vm"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets create gs://data-index-disk --location=us-central1 && gcloud compute instances attach-disk data-processor-vm --disk=gs://data-index-disk --zone=us-central1-a --device-name=pd-ssd"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd && gcloud compute instances restart data-processor-vm --add-persistent-disk=data-index-disk --zone=us-central1-a"
      }
    ],
    "correct": "A",
    "explanation": "To create and attach an additional disk to an existing Compute Engine VM: (1) `gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd` provisions the block storage volume, and (2) `gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a` attaches the disk to the running instance. `instances create` attempts to provision a new VM. Cloud Storage buckets cannot be attached as block devices via `attach-disk`. Restarting is not required to attach persistent disks.",
    "distractors": {
      "B": "gcloud compute instances create attempts to provision a new VM rather than attaching a disk to the existing instance.",
      "C": "Cloud Storage buckets are object storage systems and cannot be attached as block-level persistent disks via attach-disk.",
      "D": "gcloud compute instances restart does not accept an --add-persistent-disk flag; persistent disks are attached using attach-disk."
    },
    "gcloudCommand": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd; gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine VM",
      "SSD Persistent Disk",
      "Block Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/add-persistent-disk"
  },
  {
    "id": "ACE-D3-035",
    "certId": "ace",
    "blockId": "ACE-B03",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "subtopic": "Cloud SQL High Availability Failover Drills",
    "difficulty": "medium",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 85,
    "caseStudy": null,
    "title": "Executing Cloud SQL High Availability Failover Drills via CLI",
    "scenario": "As part of quarterly disaster recovery compliance testing, you need to conduct a simulated failover drill on a highly available regional Cloud SQL for MySQL instance named prod-master-db. You must verify that the standby instance in the secondary zone assumes primary operations without data loss. Which command should you execute?",
    "conceptos": [
      "Cloud SQL",
      "High Availability",
      "Failover Drill",
      "gcloud sql instances failover"
    ],
    "keywords": [
      "cloud sql",
      "high availability",
      "failover",
      "disaster recovery",
      "gcloud sql instances failover"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances reset prod-master-db --zone=us-central1-a --trigger-failover"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances restart prod-master-db --force-failover --secondary-zone"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances delete prod-master-db --failover-to-standby --immediate"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances failover prod-master-db --project=corporate-prod-project"
      }
    ],
    "correct": "D",
    "explanation": "The command `gcloud sql instances failover <INSTANCE_NAME>` explicitly triggers a high availability failover drill on a regional Cloud SQL instance, switching primary serving responsibilities to the standby replica in the secondary zone to validate disaster recovery readiness. `compute instances reset` resets VM hardware. `instances restart` reboots the database engine without failing over. `instances delete` deletes the instance.",
    "distractors": {
      "A": "gcloud compute instances reset resets a virtual machine guest OS and does not initiate managed Cloud SQL regional HA failover.",
      "B": "gcloud sql instances restart reboots the database instance without triggering a failover to the standby replica in the secondary zone.",
      "C": "gcloud sql instances delete permanently deletes the database instance and its storage volumes rather than conducting a drill."
    },
    "gcloudCommand": "gcloud sql instances failover prod-master-db",
    "architectureComponents": [
      "Cloud SQL MySQL",
      "High Availability",
      "Regional Instance",
      "Standby Replica"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/high-availability#testing"
  },
  {
    "id": "ACE-D3-036",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Storage Transfer Service",
      "Cloud Storage",
      "Recurring transfer schedule",
      "Checksum validation"
    ],
    "title": "Scheduling a Recurring 100 TB Amazon S3 to Cloud Storage Transfer",
    "scenario": "You must copy 100 TB of media from s3://media-source-bucket into gs://media-target-bucket and then keep the two in sync with a run every 24 hours. The nightly delta is under 400 GB, the source stays online in AWS, and integrity must be proven by checksum. You want the least operational effort and no servers to patch. Which service should you deploy?",
    "options": [
      {
        "letter": "A",
        "text": "Ship a Transfer Appliance to the AWS colocation site, load the objects, and return it to Google for ingest."
      },
      {
        "letter": "B",
        "text": "Schedule a BigQuery Data Transfer Service run that pulls the S3 prefix every 24 hours into a managed dataset."
      },
      {
        "letter": "C",
        "text": "Create a Storage Transfer Service job using gcloud transfer jobs create plus --schedule-repeats-every=24h."
      },
      {
        "letter": "D",
        "text": "Schedule a Dataflow batch pipeline that reads the S3 prefix nightly and writes the objects to the bucket."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Storage Transfer Service is a fully managed, agentless service for cloud-to-cloud transfers. It moves data over Google's network, validates every object with checksums, transfers only changed objects on later runs, and supports a repeating schedule, so no compute has to be provisioned or maintained.",
    "distractors": {
      "A": "A Transfer Appliance is a one-time offline shipment; it cannot run a 24-hour recurring sync and the source data already sits in a reachable cloud bucket.",
      "B": "The BigQuery Data Transfer Service loads S3 files into BigQuery tables, so the 100 TB of media objects never land in the target Cloud Storage bucket.",
      "D": "A Dataflow pipeline works but you own the code, the worker fleet and the checksum logic, which is far more operational effort than a managed transfer job."
    },
    "officialDocUrl": "https://cloud.google.com/storage-transfer/docs/overview",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-037",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Cloud Run",
      "Direct VPC egress",
      "Private services access",
      "Cloud SQL private IP"
    ],
    "title": "Reaching a Private Cloud SQL Instance and Private VMs from Cloud Run",
    "scenario": "A Cloud Run service must reach a Cloud SQL instance and several Compute Engine VMs in subnet backend-sub of prod-vpc. Company policy forbids any public IP on the database and forbids the traffic from leaving Google's network. The service handles 400 requests per second, so a connector that caps throughput is unacceptable. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the Cloud Run service with Direct VPC egress on subnet backend-sub and --vpc-egress=private-ranges-only."
      },
      {
        "letter": "B",
        "text": "Deploy the Cloud Run service with --add-cloudsql-instances so the built-in connector opens the database socket."
      },
      {
        "letter": "C",
        "text": "Enable Private Google Access on subnet backend-sub and add a Cloud NAT gateway in prod-vpc for the container."
      },
      {
        "letter": "D",
        "text": "Place the service and prod-vpc in one VPC Service Controls perimeter and grant roles/compute.networkUser on it."
      },
      {
        "letter": "E",
        "text": "Configure private services access in prod-vpc and give the Cloud SQL instance a private IP from that range."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "Direct VPC egress attaches the Cloud Run service straight to a subnet, so it can send traffic to internal addresses in prod-vpc and scales without the throughput ceiling of a Serverless VPC Access connector. A Cloud SQL instance only receives an internal address once a private services access peering range exists in that VPC.",
    "distractors": {
      "B": "The Cloud SQL connector reaches the instance over its public endpoint by default, and it does nothing for the Compute Engine VMs the service must also reach.",
      "C": "Private Google Access and Cloud NAT govern egress to Google APIs and the internet; neither gives a serverless container a route to RFC 1918 addresses inside the VPC.",
      "D": "A VPC Service Controls perimeter restricts API access at the boundary; it establishes no network path from the container to a private database address."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/vpc-direct-vpc",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-038",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "Horizontal Pod Autoscaler",
      "kubectl autoscale",
      "GKE",
      "CPU target utilization"
    ],
    "title": "Autoscaling a GKE Deployment Between Three and Twenty-Five Pods",
    "scenario": "The payment-gateway Deployment in a GKE cluster runs three replicas. During flash sales its average CPU utilisation passes 75% within a minute and requests start timing out. The node pool already has spare capacity. You must keep the replica count between 3 and 25 and let Kubernetes react without any operator action. Which command deploys this policy?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud container clusters update payment-gateway --enable-autoscaling --min-nodes=3 --max-nodes=25"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed set-autoscaling payment-gateway --target-cpu-utilization=0.75"
      },
      {
        "letter": "C",
        "text": "kubectl scale deployment payment-gateway --replicas=25 before each scheduled flash sale window"
      },
      {
        "letter": "D",
        "text": "kubectl autoscale deployment payment-gateway --min=3 --max=25 --cpu-percent=75 for the flash sales"
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "kubectl autoscale creates a HorizontalPodAutoscaler that reads CPU metrics for the Deployment's pods and changes the replica count between the configured minimum and maximum to hold average utilisation near the target percentage.",
    "distractors": {
      "A": "Cluster autoscaling changes the number of nodes, not pods; the Deployment stays at three replicas no matter how many nodes exist.",
      "B": "MIG autoscaling operates on the underlying instance group and is not aware of the Deployment, so pod replicas never change.",
      "C": "Scaling manually before each sale pins the cost at 25 replicas around the clock and still fails on an unannounced traffic spike."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/horizontal-pod-autoscaling",
    "difficulty": "easy",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-039",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "conceptos": [
      "Cloud DNS",
      "Managed zone",
      "Resource record set",
      "TTL"
    ],
    "title": "Publishing an A Record with a Five-Minute TTL in Cloud DNS",
    "scenario": "The public managed zone corp-public-zone already serves corp.com. A new load balancer is live at 34.120.50.80 and api.corp.com must resolve to it. No record for that name exists yet. Because a cutover is planned for next week, resolvers must not cache the answer longer than 300 seconds. Which single gcloud command publishes the record?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud dns record-sets update api.corp.com. --zone=corp-public-zone --type=A --ttl=300 --rrdatas=34.120.50.80"
      },
      {
        "letter": "B",
        "text": "gcloud dns record-sets create api.corp.com. --zone=corp-public-zone --type=CNAME --ttl=300 --rrdatas=34.120.50.80"
      },
      {
        "letter": "C",
        "text": "gcloud dns record-sets create api.corp.com. --zone=corp-public-zone --type=A --ttl=300 --rrdatas=\"34.120.50.80\""
      },
      {
        "letter": "D",
        "text": "gcloud dns record-sets transaction add 34.120.50.80 --name=api.corp.com. --ttl=300 --type=A --zone=corp-public-zone"
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "gcloud dns record-sets create adds a new record set to a managed zone in one call, taking the name, record type, TTL in seconds and the record data.",
    "distractors": {
      "A": "record-sets update replaces the data of a record set that already exists; with no api.corp.com A record in the zone the call fails.",
      "B": "A CNAME record must point at another domain name, so an IPv4 literal is rejected and the name would not resolve to the load balancer.",
      "D": "transaction add only stages a change inside a transaction that must first be started and afterwards executed, so this alone publishes nothing."
    },
    "officialDocUrl": "https://cloud.google.com/dns/docs/records",
    "difficulty": "easy",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-040",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Eventarc",
      "Cloud Audit Logs trigger",
      "Event filters",
      "Cloud Run"
    ],
    "title": "Triggering a Cloud Run Auditor on SetIamPolicy Audit Log Events",
    "scenario": "The audit-logger service runs on Cloud Run in us-central1. Compliance requires that every SetIamPolicy call in the project reach that service within 60 seconds, and that no other audit event be delivered, because the service bills per invocation. Admin Activity logs are already written. Which Eventarc trigger filter set should you create?",
    "options": [
      {
        "letter": "A",
        "text": "Event filters type=google.cloud.audit.log.v1.written, serviceName='iam.googleapis.com', methodName=SetIamPolicy."
      },
      {
        "letter": "B",
        "text": "Event filter type=google.cloud.pubsub.topic.v1.messagePublished with --transport-topic=iam-events on the project."
      },
      {
        "letter": "C",
        "text": "Event filters type=google.cloud.audit.log.v1.written and methodName=SetIamPolicy, with no serviceName filter set."
      },
      {
        "letter": "D",
        "text": "Event filters type=google.cloud.audit.log.v1.written, serviceName=iam.googleapis.com and methodName set to '*'."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "An Eventarc Cloud Audit Logs trigger requires the event type google.cloud.audit.log.v1.written together with the serviceName and methodName filters that identify the logged operation, which narrows delivery to exactly the SetIamPolicy calls.",
    "distractors": {
      "B": "A Pub/Sub message trigger only fires on messages you publish yourself; nothing routes IAM audit entries into that topic, so the service is never invoked.",
      "C": "Audit log triggers reject a filter set without serviceName, so the trigger cannot be created and no events are delivered.",
      "D": "The methodName filter matches an exact value and does not accept a wildcard, so the trigger creation fails validation."
    },
    "officialDocUrl": "https://cloud.google.com/eventarc/standard/docs/run/route-trigger-cloud-audit-logs",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-041",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud Logging sink",
      "BigQuery",
      "Writer identity",
      "Log filter"
    ],
    "title": "Streaming IAM Admin Activity Logs into a BigQuery Dataset",
    "scenario": "Security requires every IAM administrative activity entry in project corp-prod-101 to be queryable in the BigQuery dataset audit_analytics within five minutes of the event, for a seven-year retention window. The dataset already exists in the same project and no sink has been created yet. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a sink to a Cloud Storage bucket filtered on protoPayload.serviceName=\"iam.googleapis.com\" for archive."
      },
      {
        "letter": "B",
        "text": "Create a sink to bigquery.googleapis.com/projects/corp-prod-101/datasets/audit_analytics with that same filter."
      },
      {
        "letter": "C",
        "text": "Create a sink to a Pub/Sub topic and attach a BigQuery subscription that writes rows into the audit_analytics dataset."
      },
      {
        "letter": "D",
        "text": "Grant the writer identity returned by the sink roles/bigquery.dataEditor on the audit_analytics dataset."
      },
      {
        "letter": "E",
        "text": "Turn on Data Access audit logs for the IAM API in the project audit configuration before creating the sink."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "A log sink with a BigQuery destination streams matching entries into dataset tables as they arrive. Each sink is created with its own writer identity service account, and that principal must be granted permission to write to the destination or every entry is dropped.",
    "distractors": {
      "A": "Cloud Storage sinks write hourly batched files that are not queryable in BigQuery, so the five-minute query requirement is missed.",
      "C": "Routing through Pub/Sub adds a second service and its subscription to operate and pay for, when the sink can address the dataset directly.",
      "E": "SetIamPolicy is an Admin Activity entry, which is always written and cannot be disabled; enabling Data Access logs only adds unrelated volume and cost."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/export/configure_export_v2",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-042",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud SQL",
      "Cross-region read replica",
      "PostgreSQL",
      "Disaster recovery"
    ],
    "title": "Adding a Cross-Region Cloud SQL Read Replica in europe-west1",
    "scenario": "The Cloud SQL for PostgreSQL instance db-master-uscentral1 runs in us-central1. European users report read latency above 300 ms, and the DR plan demands a promotable copy outside the primary region. The primary cannot take any downtime during the change. Which command deploys the replica db-replica-eu?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create db-replica-eu --master-instance-name=db-master-uscentral1 --region=europe-west1"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create db-replica-eu --master-instance-name=db-master-uscentral1 --region=us-central1"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances clone db-master-uscentral1 db-replica-eu --point-in-time=2026-08-30T02:00:00.000Z"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch db-master-uscentral1 --availability-type=REGIONAL --secondary-zone=europe-west1-b"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Creating an instance with --master-instance-name makes it a read replica of that primary, and passing a different --region places the replica in another region, where it serves local reads and can later be promoted to a standalone instance.",
    "distractors": {
      "B": "A replica created in us-central1 replicates correctly but leaves European reads crossing the Atlantic and offers no protection against a regional outage.",
      "C": "A clone is a point-in-time copy that stops receiving changes the moment it is created, so it drifts from the primary and serves stale reads.",
      "D": "Regional high availability keeps the standby in a second zone of the same region; the secondary zone cannot be in another region and the standby serves no reads."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/replication/create-replica",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-043",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.1",
    "subsectionName": "Deploying and implementing Compute Engine resources",
    "conceptos": [
      "Managed instance groups",
      "Stateful policy",
      "Stateful IP addresses",
      "Persistent Disk"
    ],
    "title": "Preserving Disks and Internal IPs in an Elasticsearch Managed Instance Group",
    "scenario": "Three Elasticsearch nodes run in the MIG es-mig. Each node must come back with the same data disk and the same internal address after auto-healing and after a rolling update, because peer discovery is configured with static addresses and a rebuild costs four hours of reindexing. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Set a stateful policy on the group with --stateful-disk device-name=es-data,auto-delete=never for the data disk."
      },
      {
        "letter": "B",
        "text": "Create per-instance configurations with --stateful-internal-ip so each node keeps its address when it is recreated."
      },
      {
        "letter": "C",
        "text": "Declare the data disk in the instance template so that every instance the group creates receives that same disk."
      },
      {
        "letter": "D",
        "text": "Reserve three static internal addresses and hold the group at a fixed size of three with autoscaling switched off."
      },
      {
        "letter": "E",
        "text": "Enable auto-healing with an HTTP health check so an unhealthy node is recreated from the group instance template."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "A stateful policy tells the MIG to detach and reattach a named disk instead of deleting it when an instance is recreated, and stateful internal IP configuration makes the group reassign the same internal address to the recreated instance, which together keep node identity stable across updates and repairs.",
    "distractors": {
      "C": "A disk declared only in the template is recreated empty with each new instance, so the four hours of indexed data are lost on the first repair.",
      "D": "Reserving addresses does not bind one to a specific instance name, and freezing the size does not stop auto-healing from recreating a node with a new address.",
      "E": "Auto-healing is what recreates the instance in the first place; without a stateful policy it is precisely the event that discards the disk and the address."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/stateful-migs",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-044",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Cloud Run",
      "Minimum instances",
      "Cold start",
      "Instance autoscaling"
    ],
    "title": "Eliminating Cloud Run Cold Starts on a Payment Verification API",
    "scenario": "The payment-api Cloud Run service must answer in under 50 ms at the 99th percentile. Traffic drops to zero between 02:00 and 05:00, and the first request after each idle period takes 900 ms because the container starts from scratch. Finance has approved paying for two always-on instances. Which command configures this?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud run services update payment-api --region=us-central1 --max-instances=2 to keep two containers"
      },
      {
        "letter": "B",
        "text": "gcloud run services update payment-api --region=us-central1 --no-cpu-throttling for the idle window"
      },
      {
        "letter": "C",
        "text": "gcloud run services update payment-api --region=us-central1 --min-instances=2 for the service"
      },
      {
        "letter": "D",
        "text": "gcloud run services update payment-api --region=us-central1 --cpu-boost on container startup"
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The minimum instances setting keeps that many container instances running and warm even when the service receives no traffic, so an arriving request is served by an already initialised container instead of paying the start-up cost.",
    "distractors": {
      "A": "Maximum instances is a ceiling on scale-out; it never keeps an instance alive, so the service still scales to zero overnight.",
      "B": "Always-allocated CPU changes billing and background work for existing instances but does not prevent the service from scaling to zero.",
      "D": "Startup CPU boost shortens the cold start rather than removing it, which still leaves the first request far above the 50 ms target."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/min-instances",
    "difficulty": "easy",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-045",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "PodDisruptionBudget",
      "GKE node upgrades",
      "Voluntary disruption",
      "High availability"
    ],
    "title": "Guaranteeing Three Available Replicas During GKE Node Upgrades",
    "scenario": "A web Deployment runs five replicas in a GKE cluster with node auto-upgrade enabled. Capacity planning shows that fewer than three serving replicas breaks the 99.9% availability target. Node drains during upgrades currently evict several pods at once. You must cap voluntary evictions without changing the replica count. Which resource should you deploy?",
    "options": [
      {
        "letter": "A",
        "text": "A HorizontalPodAutoscaler for the web Deployment with minReplicas set to 3 and maxReplicas set to 10."
      },
      {
        "letter": "B",
        "text": "A topologySpreadConstraint on kubernetes.io/hostname so the five replicas land on five separate cluster nodes."
      },
      {
        "letter": "C",
        "text": "A Deployment rolling update strategy with maxUnavailable set to 2, so at most two of the five pods restart."
      },
      {
        "letter": "D",
        "text": "A PodDisruptionBudget with minAvailable set to 3 and a selector matching the web Deployment pod labels."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A PodDisruptionBudget constrains voluntary disruptions such as node drains during upgrades: the eviction API refuses to evict a pod when doing so would drop the number of available matching pods below minAvailable, so the drain waits instead.",
    "distractors": {
      "A": "An autoscaler adds replicas in response to load; it places no limit on how many pods a node drain evicts at the same moment.",
      "B": "Spreading pods over nodes reduces the blast radius of one node failing but does not stop the upgrade from draining several nodes in sequence.",
      "C": "The rolling update strategy only governs disruptions the Deployment controller itself causes, and it is ignored by node drains."
    },
    "officialDocUrl": "https://kubernetes.io/docs/tasks/run-application/configure-pdb/",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-046",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "gcloud storage rsync",
      "Cloud Storage",
      "Incremental synchronization",
      "Object deletion"
    ],
    "title": "Mirroring an On-Premises Asset Directory to Cloud Storage Nightly",
    "scenario": "The directory /var/www/assets holds 50 GB of catalogue images on an on-premises host, of which under 200 MB change daily. A nightly cron job must make gs://corp-product-assets an exact mirror: unchanged files must not be re-uploaded over the 100 Mbps link, and files deleted locally must disappear from the bucket. Which command accomplishes this?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage cp --recursive /var/www/assets gs://corp-product-assets, letting the service skip identical objects."
      },
      {
        "letter": "B",
        "text": "gcloud storage rsync --recursive --delete-unmatched-destination-objects /var/www/assets/ gs://corp-product-assets."
      },
      {
        "letter": "C",
        "text": "Install a Storage Transfer Service agent pool on the host and run a daily transfer job for that source directory."
      },
      {
        "letter": "D",
        "text": "gcloud storage rsync --recursive /var/www/assets gs://corp-product-assets, leaving destination-only objects alone."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "gcloud storage rsync compares names, sizes and checksums and copies only objects that are new or changed. Adding --delete-unmatched-destination-objects removes objects that no longer exist at the source, which makes the bucket an exact mirror of the directory.",
    "distractors": {
      "A": "The cp command has no delete behaviour and by default re-uploads every file it is given, saturating the 100 Mbps link with 50 GB each night.",
      "C": "An agent pool transfer works but requires installing and maintaining agent software on the host, which a single cron command already avoids.",
      "D": "Without the delete flag rsync uploads the changed files correctly but leaves deleted images in the bucket, so it is not an exact mirror."
    },
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/storage/rsync",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-047",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.5",
    "subsectionName": "Deploying and implementing networking resources",
    "conceptos": [
      "VPC Flow Logs",
      "Subnet configuration",
      "Sampling rate",
      "Network forensics"
    ],
    "title": "Capturing Every Flow on a Database Subnet for Forensics",
    "scenario": "A security team must reconstruct, after the fact, every connection that crossed subnet db-subnet in us-central1, including source and destination address, port, protocol and byte counts. Their forensic standard rejects any sampling, and the budget does not cover deploying and running collector instances. Which command enables the capture?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute networks subnets update db-subnet --region=us-central1 --enable-flow-logs --logging-sample-rate=0.1"
      },
      {
        "letter": "B",
        "text": "gcloud compute firewall-rules update allow-db-ingress --enable-logging --logging-metadata=include-all"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks subnets update db-subnet --region=us-central1 --enable-flow-logs --logging-sample-rate=1.0"
      },
      {
        "letter": "D",
        "text": "gcloud compute packet-mirrorings create db-mirror --region=us-central1 --mirrored-subnets=db-subnet --collector-ilb=fwd"
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "VPC Flow Logs are enabled per subnet and record connection metadata for the flows they sample. A sample rate of 1.0 keeps every sampled flow, which satisfies a forensic requirement that no connection be omitted.",
    "distractors": {
      "A": "A sample rate of 0.1 discards ninety percent of the flow records, so most connections are missing from the forensic record.",
      "B": "Firewall Rules Logging records only connections evaluated by that one rule, so traffic matched by any other rule in the subnet is never captured.",
      "D": "Packet Mirroring copies full payloads to collector instances behind an internal load balancer, which is exactly the compute cost the budget excludes."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/flow-logs",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-048",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "Kubernetes NetworkPolicy",
      "GKE network policy enforcement",
      "Pod isolation",
      "Ingress rules"
    ],
    "title": "Restricting Database Pod Ingress to the Backend API in GKE",
    "scenario": "In namespace prod of a GKE cluster with network policy enforcement enabled, pods labelled app=database must accept TCP connections on port 5432 only from pods labelled app=backend-api. Every other pod in the cluster must be refused, and an auditor will verify the rule from inside the cluster, so node-level controls are out of scope. Which manifest should you apply?",
    "options": [
      {
        "letter": "A",
        "text": "A NetworkPolicy in prod selecting app: backend-api with an egress rule allowing TCP 5432 to pods app: database."
      },
      {
        "letter": "B",
        "text": "A NetworkPolicy in prod matching app: database with an ingress rule opening TCP 5432 from pods app: backend-api."
      },
      {
        "letter": "C",
        "text": "A VPC firewall rule allowing TCP 5432 from the backend node pool tag and denying every other source on that port."
      },
      {
        "letter": "D",
        "text": "A NetworkPolicy in prod selecting app: database with an ingress rule listing TCP port 5432 and no from selector."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A NetworkPolicy applies to the pods matched by its podSelector, and an ingress rule combining a from podSelector with a port allows only that source to reach that port. Selecting the database pods for ingress isolates them and permits the backend API alone.",
    "distractors": {
      "A": "An egress policy on the backend pods restricts what those pods may send, and leaves every other pod in the namespace free to connect to the database.",
      "C": "Node pool firewall tags cannot distinguish pods, so any pod scheduled onto a backend node passes the rule and the auditor's in-cluster test fails.",
      "D": "An ingress rule with ports but no from selector admits traffic from every pod on port 5432, which is the opposite of the required isolation."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-049",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.3",
    "subsectionName": "Deploying and implementing Cloud Run and Cloud Functions resources",
    "conceptos": [
      "Cloud Tasks",
      "Queue rate limits",
      "HTTP targets",
      "Asynchronous dispatch"
    ],
    "title": "Capping Outbound Webhook Dispatch at Ten Requests per Second",
    "scenario": "Your order service posts webhooks to merchant endpoints that return HTTP 429 above 10 requests per second. Order bursts reach 800 events per minute and no event may be dropped; late delivery is acceptable, rejection is not. You need a managed queue that dispatches HTTP tasks at a fixed ceiling of ten per second with retries. Which command should you run?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud tasks queues create merchant-webhooks --location=us-central1 --max-concurrent-dispatches=10 --max-attempts=5"
      },
      {
        "letter": "B",
        "text": "gcloud scheduler jobs create http merchant-webhooks --location=us-central1 --schedule='* * * * *' --uri=https://m/hook"
      },
      {
        "letter": "C",
        "text": "gcloud pubsub subscriptions create merchant-hooks --topic=orders --push-endpoint=https://merchant.example.com/hook"
      },
      {
        "letter": "D",
        "text": "gcloud tasks queues create merchant-webhooks --location=us-central1 --max-dispatches-per-second=10 --max-attempts=5"
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A Cloud Tasks queue enforces a dispatch rate limit expressed in tasks per second, holding tasks in the queue and retrying failures, which keeps the outbound request rate at the merchant's documented ceiling without losing events.",
    "distractors": {
      "A": "Maximum concurrent dispatches limits requests in flight, not requests per second; ten fast handlers can easily exceed ten dispatches each second.",
      "C": "A Pub/Sub push subscription delivers as fast as it can and its flow control is not a fixed requests-per-second cap, so merchants keep returning 429.",
      "B": "Cloud Scheduler fires a job on a time schedule with a minimum granularity of one minute and carries no per-order task payload or backlog."
    },
    "officialDocUrl": "https://cloud.google.com/tasks/docs/configuring-queues",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-050",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud Storage ACLs",
      "Default object ACL",
      "Fine-grained access control",
      "allUsers"
    ],
    "title": "Making Newly Uploaded Objects Public in a Fine-Grained Bucket",
    "scenario": "Bucket gs://static-web-assets-pub uses fine-grained access control. Objects uploaded from now on must be readable by allUsers without a post-upload step, but a set of existing objects under /internal must stay private, so a bucket-wide grant that exposes all current content is not acceptable. Which command configures this?",
    "options": [
      {
        "letter": "A",
        "text": "Grant allUsers roles/storage.objectViewer on the bucket with gcloud storage buckets add-iam-policy-binding."
      },
      {
        "letter": "B",
        "text": "Enable uniform bucket-level access on the bucket so one bucket policy governs every object stored inside it."
      },
      {
        "letter": "C",
        "text": "Set the bucket default object ACL with gsutil defacl set public-read gs://static-web-assets-pub for uploads."
      },
      {
        "letter": "D",
        "text": "Apply gsutil acl ch -u AllUsers:R on the existing object prefix so the uploaded assets become world readable."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The default object ACL of a bucket is applied to every object written afterwards when the upload does not specify its own ACL. Setting it to public-read makes new objects world readable while leaving the ACLs of objects already stored untouched.",
    "distractors": {
      "A": "A bucket-level IAM binding for allUsers applies to every object in the bucket, which immediately exposes the objects under /internal that must stay private.",
      "B": "Uniform bucket-level access disables object ACLs entirely and forces one bucket-wide policy, removing the per-object distinction the requirement depends on.",
      "D": "Changing ACLs on existing objects does nothing for future uploads, so every new asset still needs a manual post-upload command."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/access-control/lists",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-051",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Memorystore for Redis",
      "Standard tier",
      "Automatic failover",
      "Alternative zone"
    ],
    "title": "Provisioning a Highly Available Memorystore Redis Session Cache",
    "scenario": "A session cache in us-east1 needs 10 GB of memory on Redis 7.0. The service level objective allows at most a few minutes of cache unavailability per year, so the cache must fail over automatically to a replica in a second zone without the application changing its endpoint. Which command creates this instance?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud redis instances create session-cache --size=10 --region=us-east1 --tier=BASIC --redis-version=redis_7_0"
      },
      {
        "letter": "B",
        "text": "gcloud redis instances create session-cache --size=10 --region=us-east1 --tier=STANDARD --redis-version=redis_7_0"
      },
      {
        "letter": "C",
        "text": "gcloud redis instances create session-cache --size=10 --region=us-east1 --tier=STANDARD --redis-version=redis_6_x"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create session-cache --machine-type=e2-highmem-2 --zone=us-east1-b --image-family=debian-12"
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Standard tier of Memorystore for Redis provisions a replica in a second zone of the region and fails over to it automatically, keeping the same instance endpoint, while the Redis version is selected with --redis-version.",
    "distractors": {
      "A": "The Basic tier is a single node with no replica, so a zonal failure takes the cache down and the whole dataset is lost.",
      "C": "This instance is highly available but pins Redis 6.x, which does not meet the stated requirement for the Redis 7.0 feature set.",
      "D": "A self-managed Redis on one Compute Engine VM has no managed replica or automatic failover, and you own patching and monitoring."
    },
    "officialDocUrl": "https://cloud.google.com/memorystore/docs/redis/redis-tiers",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-052",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "Resource requests and limits",
      "Pod scheduling",
      "CPU throttling",
      "OOMKilled"
    ],
    "title": "Setting Container Requests and Limits for a Burstable GKE Workload",
    "scenario": "A container must be scheduled only onto a node that can reserve 500m CPU and 1 GiB of memory for it. Under load it may burst, but the platform team requires it to be CPU throttled above 2 vCPUs and terminated once it reaches 4 GiB of memory, so that a leak cannot starve the other pods sharing the node. How should the container resources be defined?",
    "options": [
      {
        "letter": "A",
        "text": "Set resources.requests to cpu 500m and memory 1Gi, and resources.limits to cpu 2 and memory 4Gi on this container."
      },
      {
        "letter": "B",
        "text": "Set resources.requests to cpu 2 and memory 4Gi, and resources.limits to cpu 500m and memory 1Gi on the container."
      },
      {
        "letter": "C",
        "text": "Create a ResourceQuota in the namespace with requests.cpu 500m, requests.memory 1Gi, limits.cpu 2, limits.memory 4Gi."
      },
      {
        "letter": "D",
        "text": "Configure a VerticalPodAutoscaler in Auto mode with minAllowed cpu 500m memory 1Gi and maxAllowed cpu 2 memory 4Gi."
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Requests are what the scheduler reserves on a node, and limits are the ceiling the kubelet enforces at runtime: CPU above the limit is throttled and a container that reaches its memory limit is terminated with OOMKilled.",
    "distractors": {
      "B": "Inverting the values is rejected because a limit lower than the request is invalid, and it would also cap the container below what it needs to start.",
      "C": "A ResourceQuota bounds the aggregate consumption of the whole namespace and does not throttle or terminate this individual container.",
      "D": "A VerticalPodAutoscaler recommends and rewrites requests over time, restarting pods to apply them, rather than enforcing a hard runtime ceiling."
    },
    "officialDocUrl": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-053",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud Storage CORS",
      "Signed URLs",
      "Browser uploads",
      "Bucket configuration"
    ],
    "title": "Unblocking Browser Uploads to Cloud Storage with a CORS Policy",
    "scenario": "Browsers on https://app.example.com upload avatars straight to gs://user-avatars-vault with signed URLs. Every PUT is blocked by the browser before it leaves, with a CORS preflight error. The signed URLs are valid and the fix must not change who can read the bucket. You have written cors-policy.json allowing that one origin. Which command applies it?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage objects update gs://user-avatars-vault/** --custom-metadata=access-control-allow-origin=app"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://user-avatars-vault --cors-file=cors-policy.json to publish that policy"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://user-avatars-vault --uniform-bucket-level-access for the avatar bucket"
      },
      {
        "letter": "D",
        "text": "gcloud storage sign-url gs://user-avatars-vault/avatar.png --http-verb=PUT --duration=1h for each upload"
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "CORS is configured on the bucket, not on individual objects. Applying a CORS configuration file with the allowed origin, methods and headers makes Cloud Storage answer the browser preflight request so the PUT is permitted.",
    "distractors": {
      "A": "Custom object metadata is stored and returned as arbitrary key-value data; it is not the CORS configuration the preflight response is built from.",
      "C": "Uniform bucket-level access changes how permissions are evaluated and has no effect on the preflight response, so the browser still blocks the upload.",
      "D": "The signed URLs already work; regenerating them does not add the response headers the browser requires before it will send the request."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/using-cors",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-054",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud Bigtable",
      "Cluster replication",
      "Multi-cluster routing",
      "Availability SLA"
    ],
    "title": "Adding a European Bigtable Cluster for Cross-Region Replication",
    "scenario": "The Bigtable instance ad-bidding-engine has one SSD cluster in us-central1-b. European bidders need reads served locally under 10 ms, and the contract requires the 99.999% availability SLA, which is only offered when an instance replicates across regions. You must add a four-node cluster in europe-west1-b without recreating the instance. Which command deploys it?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud bigtable clusters create cluster-eu --instance=ad-bidding-engine --zone=us-central1-c --num-nodes=4 --storage-type=SSD"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable instances update ad-bidding-engine --cluster=cluster-eu --cluster-zone=europe-west1-b --cluster-num-nodes=4"
      },
      {
        "letter": "C",
        "text": "gcloud bigtable clusters create cluster-eu --instance=ad-bidding-engine --zone=europe-west1-b --num-nodes=4 --storage-type=HDD"
      },
      {
        "letter": "D",
        "text": "gcloud bigtable clusters create cluster-eu --instance=ad-bidding-engine --zone=europe-west1-b --num-nodes=4 --storage-type=SSD"
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Adding a cluster to an existing Bigtable instance with gcloud bigtable clusters create starts replication between the clusters automatically, and placing that cluster in a second region is what makes the instance eligible for the 99.999% availability SLA with multi-cluster routing.",
    "distractors": {
      "A": "A second cluster in us-central1-c replicates but keeps both copies in one region, so European reads still cross the Atlantic and the SLA stays 99.99%.",
      "B": "gcloud bigtable instances update changes instance-level properties such as the display name; a cluster is added through the clusters command group.",
      "C": "All clusters in a Bigtable instance must use the same storage type as the existing SSD cluster, and HDD read latency is far above the 10 ms target."
    },
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/replication-overview",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-055",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Pub/Sub notifications for Cloud Storage",
      "OBJECT_FINALIZE",
      "Event-driven ingestion",
      "Cloud Storage"
    ],
    "title": "Publishing a Pub/Sub Message When an Invoice Lands in a Bucket",
    "scenario": "An ingestion pipeline must react within seconds each time a new invoice file is written to gs://incoming-invoices-vault. The message must carry the object metadata and be published to the existing topic projects/corp-finance/topics/invoice-events. Metadata edits on files already stored must not trigger the pipeline. Which command establishes this?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets notifications create gs://incoming-invoices-vault --topic=invoice-events --event-types=OBJECT_FINALIZE"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets notifications create gs://incoming-invoices-vault --topic=invoice-events --event-types=OBJECT_METADATA_UPDATE"
      },
      {
        "letter": "C",
        "text": "gcloud eventarc triggers create invoice-events --destination-run-service=invoice-processor --event-filters=type=finalized"
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create invoice-sink pubsub.googleapis.com/projects/corp-finance/topics/invoice-events --log-filter=gcs"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "A Pub/Sub notification configuration on a bucket publishes a message containing the object metadata to the chosen topic. The OBJECT_FINALIZE event type fires when a new object is successfully written, and restricting the configuration to it excludes later metadata changes.",
    "distractors": {
      "B": "OBJECT_METADATA_UPDATE fires when metadata of an existing object changes, which is precisely the event the pipeline must ignore, and it misses new uploads.",
      "C": "An Eventarc trigger delivers the event to a Cloud Run service instead of publishing into the invoice-events topic the pipeline already consumes.",
      "D": "A logging sink forwards audit log entries describing the API call rather than the object metadata message the pipeline expects, and needs Data Access logs enabled."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/pubsub-notifications",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-056",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "BackendConfig CRD",
      "GKE Ingress",
      "Cloud Armor",
      "Health checks"
    ],
    "title": "Attaching a Custom Health Check and Cloud Armor Policy to a GKE Ingress Backend",
    "scenario": "A GKE Service is exposed through an Ingress-managed external Application Load Balancer. The backend service must use the health check path /api/v1/healthz, a 60-second backend timeout, and the existing Cloud Armor policy waf-policy. The settings must survive Ingress reconciliation, so changes made directly with gcloud are unacceptable. Which two actions should you take? (Choose 2.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a BackendConfig resource declaring the healthCheck path, timeoutSec 60 and the securityPolicy waf-policy."
      },
      {
        "letter": "B",
        "text": "Annotate the Kubernetes Service with cloud.google.com/backend-config naming that BackendConfig as the default."
      },
      {
        "letter": "C",
        "text": "Create a FrontendConfig resource carrying the health check path and the Cloud Armor policy, referenced by the Ingress."
      },
      {
        "letter": "D",
        "text": "Attach waf-policy to the generated backend service with gcloud compute backend-services update after each deploy."
      },
      {
        "letter": "E",
        "text": "Annotate the Ingress with ingress.kubernetes.io/health-check-path and cloud.google.com/armor-config for the backend."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "explanation": "The BackendConfig custom resource is where GKE Ingress reads backend service settings such as health check parameters, timeoutSec and the Cloud Armor security policy, and it only takes effect once the Service carries the cloud.google.com/backend-config annotation that binds it to the resource.",
    "distractors": {
      "C": "FrontendConfig configures load balancer frontend behaviour such as SSL policy and HTTP-to-HTTPS redirects, not backend health checks or Cloud Armor.",
      "D": "The Ingress controller reconciles the backend service it owns and overwrites out-of-band gcloud changes, which the requirement explicitly rules out.",
      "E": "Those annotation keys are not part of the GKE Ingress feature set, so the controller ignores them and the defaults remain in place."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features",
    "difficulty": "hard",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-057",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.2",
    "subsectionName": "Deploying and implementing Google Kubernetes Engine resources",
    "conceptos": [
      "Node auto-provisioning",
      "Cluster autoscaler",
      "GKE Standard",
      "Machine families"
    ],
    "title": "Letting GKE Create Node Pools for Unpredictable Workload Shapes",
    "scenario": "A multi-tenant GKE Standard cluster receives jobs that request high-memory, compute-optimised or GPU nodes, and the mix changes weekly. Pods currently stay Pending for hours until an operator builds a matching node pool. You must let the cluster create suitably shaped node pools on demand within CPU and memory ceilings you set. Which feature should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Cluster autoscaler on the existing default pool with gcloud container clusters update --enable-autoscaling --max-nodes=100."
      },
      {
        "letter": "B",
        "text": "Node auto-provisioning on the cluster with gcloud container clusters update --enable-autoprovisioning and resource limits."
      },
      {
        "letter": "C",
        "text": "A HorizontalPodAutoscaler per tenant with kubectl autoscale deployment --min=1 --max=50 --cpu-percent=70 for each job."
      },
      {
        "letter": "D",
        "text": "The optimize-utilization autoscaling profile with gcloud container clusters update --autoscaling-profile on the cluster."
      }
    ],
    "correct": "B",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Node auto-provisioning extends the cluster autoscaler so it can create and delete node pools whose machine type, accelerators and size match the requests of pending pods, bounded by the CPU, memory and GPU limits configured for the cluster.",
    "distractors": {
      "A": "The cluster autoscaler only adds nodes of the machine type already defined in an existing pool, so a GPU request stays Pending until someone builds that pool.",
      "C": "A HorizontalPodAutoscaler adds more pod replicas; it cannot make a node of a shape that does not exist anywhere in the cluster.",
      "D": "The optimize-utilization profile makes the autoscaler remove underused nodes faster and creates no new node pool shapes."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-058",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.4",
    "subsectionName": "Deploying and implementing data solutions",
    "conceptos": [
      "Cloud SQL",
      "Point-in-time recovery",
      "Binary logging",
      "Instance clone"
    ],
    "title": "Recovering a Cloud SQL Database to a Timestamp Two Minutes Before Corruption",
    "scenario": "A migration script corrupted data in the Cloud SQL instance customer-db at 14:32:00 UTC on 20 August 2026. Automated backups and point-in-time recovery are enabled and the last nightly backup ran at 03:00 UTC. The live instance must keep serving traffic, and the clean data is needed in a separate instance customer-db-restored. Which command should you run?",
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances clone customer-db customer-db-restored --point-in-time=2026-08-20T14:30:00Z"
      },
      {
        "letter": "B",
        "text": "gcloud sql backups restore 1755697200 --restore-instance=customer-db --backup-instance=customer-db"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances clone customer-db customer-db-restored --point-in-time=2026-08-20T14:32:00Z"
      },
      {
        "letter": "D",
        "text": "gcloud sql export sql customer-db gs://corp-backups/customer-db.sql --database=customer"
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloning an instance with --point-in-time uses the automated backup plus the transaction logs to build a new instance whose state matches the requested timestamp, leaving the source instance running and untouched.",
    "distractors": {
      "B": "Restoring a backup onto customer-db overwrites the live instance, causing downtime, and the 03:00 backup loses more than eleven hours of valid transactions.",
      "C": "The timestamp is the moment the corrupting script committed, so the restored instance contains exactly the damage you are trying to undo.",
      "D": "An export copies the current, already corrupted contents to a file and offers no way to select an earlier point in time."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-059",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.6",
    "subsectionName": "Implementing resources through infrastructure as code",
    "conceptos": [
      "Terraform",
      "Remote state backend",
      "State locking",
      "Cloud Storage versioning"
    ],
    "title": "Protecting Shared Terraform State from Concurrent Applies",
    "scenario": "Six engineers and a Cloud Build pipeline all run terraform apply against project prod-core. Two simultaneous applies last week corrupted the state file and cost a day of manual recovery. State must be locked for the duration of every apply, recoverable to a previous revision, and the team will not run extra infrastructure to host it. Which configuration should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Keep the gcs backend and serialise runs by allowing only one concurrent Cloud Build trigger for the repository."
      },
      {
        "letter": "B",
        "text": "Keep the local backend and commit the terraform.tfstate file to the shared Git repository after each apply."
      },
      {
        "letter": "C",
        "text": "Configure the Terraform gcs backend on a Cloud Storage bucket with object versioning turned on for the state."
      },
      {
        "letter": "D",
        "text": "Store the state file in Secret Manager and have each run read the newest secret version before it applies."
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Terraform gcs backend stores state in a Cloud Storage bucket and acquires a lock on it for the duration of operations that write state, so a second apply waits instead of overwriting. Enabling object versioning on the bucket keeps previous revisions of the state for recovery.",
    "distractors": {
      "B": "A local state file in Git has no locking at all, and two engineers applying at once produce a merge conflict after the infrastructure has already diverged.",
      "D": "Secret Manager versions a blob but offers no lock, so two runs can both read the same version and write conflicting successors.",
      "A": "Limiting build concurrency serialises pipeline runs but leaves the six engineers free to apply from their workstations at the same moment."
    },
    "officialDocUrl": "https://cloud.google.com/docs/terraform/resource-management/store-state",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-060",
    "certId": "ace",
    "domainId": "ACE-D3",
    "sectionId": "ACE-3",
    "sectionName": "Deploying and implementing a cloud solution",
    "subsectionId": "ACE-3.6",
    "subsectionName": "Implementing resources through infrastructure as code",
    "conceptos": [
      "Cloud Build service account",
      "IAM roles",
      "Terraform",
      "Least privilege"
    ],
    "title": "Granting Cloud Build the Roles Terraform Needs in a Production Project",
    "scenario": "A Cloud Build pipeline runs terraform apply in project prod-core to create Compute Engine instances and Cloud Storage buckets. Builds fail with permission denied on compute.instances.create. The pipeline must succeed unattended tonight, and security will not accept granting roles/owner or roles/editor on the project. Which grant resolves this?",
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/compute.admin and roles/storage.admin to the Compute Engine default service account in prod-core."
      },
      {
        "letter": "B",
        "text": "Grant roles/compute.viewer and roles/storage.objectAdmin to the Cloud Build service account in prod-core."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudbuild.builds.editor and roles/iam.serviceAccountUser to the Cloud Build service account."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin and roles/storage.admin to the Cloud Build service account in project prod-core."
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Builds act with the identity of the Cloud Build service account, so that principal is the one that needs create permissions on the resources Terraform manages. roles/compute.admin and roles/storage.admin cover those resource types without the project-wide scope of editor or owner.",
    "distractors": {
      "A": "The Compute Engine default service account is not the identity running the build, so the pipeline still fails with the same permission denied error.",
      "B": "roles/compute.viewer is read-only, so compute.instances.create is still denied and the unattended build fails again tonight.",
      "C": "Those roles let a principal launch builds and impersonate service accounts, but neither grants permission to create Compute Engine or Cloud Storage resources."
    },
    "officialDocUrl": "https://cloud.google.com/build/docs/cloud-build-service-account",
    "difficulty": "medium",
    "blockId": "BLOCK-4"
  },
  {
    "id": "ACE-D3-061",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes Secret Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Secrets from Literal Values via kubectl CLI",
    "scenario": "You need to create a Kubernetes Generic Secret named `api-tokens` in namespace `prod` containing two key-value pairs: `api-key=SecretTokenXYZ123` and `jwt-secret=SuperSecretSigningKey987`. Which kubectl command deploys this secret directly from the CLI?",
    "keywords": [
      "Kubernetes Secret",
      "kubectl create secret generic",
      "--from-literal",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl create configmap api-tokens --namespace=prod --from-literal=api-key='SecretTokenXYZ123' --from-literal=jwt-secret='SuperSecretSigningKey987'"
      },
      {
        "letter": "B",
        "text": "kubectl create secret generic api-tokens --namespace=prod --from-literal=api-key='SecretTokenXYZ123' --from-literal=jwt-secret='SuperSecretSigningKey987'"
      },
      {
        "letter": "C",
        "text": "kubectl create secret docker-registry api-tokens -n prod --docker-server=gcr.io --docker-username=api-key --docker-password=SecretTokenXYZ123"
      },
      {
        "letter": "D",
        "text": "kubectl create secret generic api-tokens --namespace=prod --from-file=api-key=SecretTokenXYZ123 --from-file=jwt-secret=SuperSecretSigningKey987"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl create secret generic <NAME> --from-literal=<KEY>=<VALUE>` creates a Kubernetes Secret object directly from CLI arguments, base64-encoding the values into the Kubernetes etcd cluster store.",
    "distractors": {
      "A": "Creates a ConfigMap instead of a Secret: the values land in a plain-text object that is not a Secret, so any Pod referencing them through secretKeyRef on api-tokens fails to start with a missing-Secret error.",
      "C": "Wrong secret subtype: docker-registry emits a kubernetes.io/dockerconfigjson Secret whose single key is .dockerconfigjson (registry credentials); it cannot carry the two arbitrary key-value pairs, and jwt-secret is lost entirely.",
      "D": "--from-file expects a path whose file contents become the value, so kubectl treats the literal token strings as filenames and aborts with 'error reading SecretTokenXYZ123: no such file or directory'; --from-literal is the flag for inline values."
    },
    "gcloudCommand": "kubectl create secret generic api-tokens --namespace=prod --from-literal=api-key='SecretTokenXYZ123' --from-literal=jwt-secret='SuperSecretSigningKey987'",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/"
  },
  {
    "id": "ACE-D3-062",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "BigQuery Data Transfer Service Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying BigQuery Data Transfer Service for Google Ads and Analytics Ingestion",
    "scenario": "A marketing analytics team needs to ingest daily campaign metrics from Google Ads and Google Analytics into a BigQuery dataset `marketing_dw` on an automated daily recurring schedule without writing custom Python ETL scripts. What service and deployment method should you configure?",
    "keywords": [
      "BigQuery Data Transfer Service",
      "Google Ads Ingestion",
      "ETL Automation",
      "Scheduled Transfers"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure BigQuery Data Transfer Service (via bq mk --transfer_config or Cloud Console) with the Google Ads transfer plugin."
      },
      {
        "letter": "B",
        "text": "Create a Storage Transfer Service job that pulls the daily Google Ads report exports into the marketing_dw dataset."
      },
      {
        "letter": "C",
        "text": "Schedule a recurring BigQuery scheduled query over a Drive-backed external table holding the exported Ads data."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud Composer environment running a daily Airflow DAG that calls the Google Ads API and loads marketing_dw."
      }
    ],
    "correct": "A",
    "explanation": "BigQuery Data Transfer Service (DTS) is a fully managed service that automates scheduled data transfers from SaaS applications (Google Ads, Campaign Manager, Google Analytics 4, YouTube) and cloud storage providers directly into BigQuery tables with zero custom code.",
    "distractors": {
      "C": "A scheduled query re-runs SQL over data BigQuery can already reach, so somebody still has to export Ads and Analytics to Drive every day. That manual export is precisely the recurring ingestion the service is supposed to own.",
      "B": "Storage Transfer Service moves objects between object stores (S3, Azure Blob, URL lists, other buckets). It cannot authenticate against the Google Ads API and its only sink is a Cloud Storage bucket, never a BigQuery dataset.",
      "D": "This does work, but it is the custom pipeline the requirement excludes: a DAG is Python code to write, test and maintain plus a permanently billed Composer environment, for a source BigQuery Data Transfer Service already supports natively."
    },
    "gcloudCommand": "bq mk --transfer_config --data_source=google_ads --target_dataset=marketing_dw --display_name='Daily Ads Sync' --params='{\"customer_id\":\"123-456-7890\"}'",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/google-ads-transfer"
  },
  {
    "id": "ACE-D3-063",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Armor Security Policy Rule Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Google Cloud Armor Web Application Firewall Security Rules",
    "scenario": "You have created a Cloud Armor security policy named `block-malicious-traffic`. You need to add a priority rule (priority 1000) that immediately denies all HTTP traffic originating from the malicious IP subnet `198.51.100.0/24` with an HTTP 403 Forbidden response. Which command deploys this rule?",
    "keywords": [
      "Cloud Armor",
      "gcloud compute security-policies rules create",
      "IP Deny Rule",
      "HTTP 403",
      "WAF"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-404 --description='Block known malicious subnet'"
      },
      {
        "letter": "B",
        "text": "gcloud compute security-policies rules create 2147483647 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-403 --description='Block malicious subnet'"
      },
      {
        "letter": "C",
        "text": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-403 --description='Block known malicious subnet'"
      },
      {
        "letter": "D",
        "text": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --expression=\"origin.region_code == 'US'\" --action=deny-403 --description='Block malicious subnet'"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud compute security-policies rules create <PRIORITY> --security-policy=<POLICY> --src-ip-ranges=<CIDR> --action=deny-403` adds an IP blocking rule to a Cloud Armor policy to filter requests at Google's global edge before reaching backend servers.",
    "distractors": {
      "B": "2147483647 is reserved for the policy's default rule, which already exists, so creating another rule at that priority is rejected; the default rule can only be changed with security-policies rules update.",
      "D": "Valid custom expression, wrong matcher: origin.region_code filters on the client's geolocated country, so it denies all US traffic while requests from 198.51.100.0/24 attributed to any other country pass straight through.",
      "A": "Blocks the subnet at the right priority but answers with HTTP 404 Not Found: the status code is part of the Cloud Armor deny action (deny-403, deny-404, deny-502), and only deny-403 returns the Forbidden response the requirement asks for."
    },
    "gcloudCommand": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-403 --description='Block known malicious subnet'",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/configure-security-policies"
  },
  {
    "id": "ACE-D3-064",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Retention Policy Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Storage Retention Policies via gcloud storage CLI",
    "scenario": "You are setting up compliance storage for transaction records in Cloud Storage bucket `gs://compliance-vault-2026`. You must configure a retention policy enforcing a 1-year (31,536,000 seconds) retention period on all objects uploaded to the bucket. Which command configures this retention policy?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage buckets update",
      "--retention-period",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --soft-delete-duration=90d"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --lifecycle-file=delete-365d.json"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --retention-period=31536000s"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --default-storage-class=ARCHIVE"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage buckets update <BUCKET> --retention-period=<DURATION>` configures a Bucket Retention Policy, preventing any object inside the bucket from being deleted or overwritten until its individual retention period has elapsed.",
    "distractors": {
      "D": "The Archive class carries a 365-day minimum storage duration for billing only: objects may still be deleted immediately, incurring an early-deletion charge rather than being retained.",
      "B": "A lifecycle rule schedules deletion once the age condition is met; it forbids nothing beforehand, so a transaction record can still be deleted or overwritten on its first day.",
      "A": "Soft delete only keeps already-deleted objects restorable, and its window tops out at 90 days: objects can still be deleted at will, so a one-year retention is never enforced."
    },
    "gcloudCommand": "gcloud storage buckets update gs://compliance-vault-2026 --retention-period=31536000s",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock"
  },
  {
    "id": "ACE-D3-065",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Snapshot Schedule Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Compute Engine Custom Resource Policies for Automated Disk Snapshot Schedules",
    "scenario": "To protect against data corruption and ensure disaster recovery, you need to create an automated daily snapshot schedule named `daily-backup-schedule` in region `us-central1` that takes snapshots of attached persistent disks every day at 02:00 UTC and retains snapshots for exactly 14 days. Which command creates this schedule?",
    "keywords": [
      "Compute Engine",
      "gcloud compute resource-policies create snapshot-schedule",
      "Snapshot Schedule",
      "Disaster Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --region=us-central1 --weekly-schedule=monday --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots"
      },
      {
        "letter": "B",
        "text": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --zone=us-central1-a --daily-schedule --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots"
      },
      {
        "letter": "C",
        "text": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --region=us-central1 --daily-schedule --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots"
      },
      {
        "letter": "D",
        "text": "gcloud scheduler jobs create http daily-backup-schedule --schedule='0 2 * * *' --time-zone=UTC --uri=https://compute.googleapis.com/compute/v1/projects/p/zones/us-central1-a/disks/data/createSnapshot"
      }
    ],
    "correct": "C",
    "explanation": "Automated persistent disk backups in Compute Engine are configured via Resource Policies using `gcloud compute resource-policies create snapshot-schedule <NAME> --region=<REGION> --daily-schedule --start-time=<UTC_TIME> --max-retention-days=<DAYS>`.",
    "distractors": {
      "B": "A snapshot schedule is a resource policy, and resource policies are regional resources attached to disks in their own region. The command exposes only --region, so --zone=us-central1-a is rejected as an unrecognised argument.",
      "A": "Every flag is valid and the retention window is right, but --weekly-schedule takes a single day of the week and fires once every seven days at 02:00. The requirement is one snapshot every day, so six days out of seven are left unprotected.",
      "D": "Cloud Scheduler can call createSnapshot at 02:00 UTC, but nothing ever deletes the results: there is no retention window, so the 14-day requirement is unmet and snapshots accumulate forever. The job also targets one hard-coded disk instead of a policy attached to the disks."
    },
    "gcloudCommand": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --region=us-central1 --daily-schedule --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/scheduled-snapshots"
  },
  {
    "id": "ACE-D3-066",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes DaemonSet Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes DaemonSets for Cluster-Wide Logging and Monitoring Agents",
    "scenario": "You need to deploy a custom log collection daemon across a GKE Standard cluster. The log collection Pod must run on EVERY current and future worker node in the cluster automatically, including newly autoscaled nodes. Which Kubernetes workload resource type should you deploy?",
    "keywords": [
      "Kubernetes DaemonSet",
      "GKE",
      "Node Agent",
      "Cluster-Wide Pod"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Kubernetes StatefulSet with 1 replica."
      },
      {
        "letter": "B",
        "text": "A Kubernetes CronJob running every minute."
      },
      {
        "letter": "C",
        "text": "A Kubernetes DaemonSet."
      },
      {
        "letter": "D",
        "text": "A Kubernetes Deployment with replicas: 100."
      }
    ],
    "correct": "C",
    "explanation": "A Kubernetes `DaemonSet` ensures that all (or some matching) nodes run a copy of a Pod. As new worker nodes are added to the cluster by the Cluster Autoscaler, DaemonSet pods are automatically scheduled onto them, making DaemonSets the standard mechanism for cluster-wide logging and security agents.",
    "distractors": {
      "D": "Deployments distribute replicas across available nodes based on scheduling algorithms, potentially leaving some nodes without log collectors.",
      "A": "StatefulSets are for ordered stateful clustered databases, not universal per-node monitoring agents.",
      "B": "CronJobs launch transient pods at time intervals rather than maintaining persistent per-node daemon processes."
    },
    "gcloudCommand": "kubectl apply -f logging-daemonset.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
  },
  {
    "id": "ACE-D3-067",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Pub/Sub Push Subscription Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Pub/Sub Push Subscriptions to Authenticated Cloud Run Endpoints",
    "scenario": "You have an order ingestion service deployed on Cloud Run at `https://orders-api-xyz.a.run.app/handle-order`. The Cloud Run service requires authentication (`--no-allow-unauthenticated`). You need to deploy a Cloud Pub/Sub push subscription that automatically delivers messages to this HTTPS endpoint, securely attaching an OIDC token signed by service account `pubsub-invoker@corp.iam.gserviceaccount.com`. Which command creates the subscription?",
    "keywords": [
      "Cloud Pub/Sub",
      "Push Subscription",
      "OIDC Token",
      "Cloud Run Authentication",
      "gcloud pubsub subscriptions create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order?token=SHARED_SECRET --ack-deadline=60 --message-retention-duration=7d --expiration-period=never"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --ack-deadline=60 && gcloud run services add-iam-policy-binding orders-api --member=serviceAccount:pubsub-invoker@corp.iam.gserviceaccount.com --role=roles/run.invoker"
      },
      {
        "letter": "C",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --push-auth-service-account=pubsub-invoker@corp.iam.gserviceaccount.com --push-auth-token-audience=https://orders-api-xyz.a.run.app"
      },
      {
        "letter": "D",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --push-auth-service-account=pubsub-invoker@corp.iam.gserviceaccount.com --push-auth-token-audience=https://pubsub.googleapis.com"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Pub/Sub Push Subscriptions support authenticated HTTP endpoints. Using `--push-auth-service-account` and `--push-auth-token-audience` causes Google Pub/Sub to sign a short-lived OpenID Connect (OIDC) JWT token and include it in the `Authorization: Bearer <TOKEN>` header of every push request.",
    "distractors": {
      "D": "The OIDC audience must match the Cloud Run service URL; a token minted for the Pub/Sub API audience fails the receiving service's token validation and every push is rejected with HTTP 401.",
      "B": "Without --push-endpoint the command creates a pull subscription, so Pub/Sub never calls the Cloud Run URL; the run.invoker binding authorizes an identity but initiates no delivery.",
      "A": "A shared secret in the query string is not a Google-signed OIDC token, so a Cloud Run service deployed with --no-allow-unauthenticated rejects every push with HTTP 401 before the handler runs."
    },
    "gcloudCommand": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --push-auth-service-account=pubsub-invoker@corp.iam.gserviceaccount.com --push-auth-token-audience=https://orders-api-xyz.a.run.app",
    "architectureComponents": [
      "Cloud Pub/Sub",
      "Cloud Run",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/pubsub/docs/push#push_service_account"
  },
  {
    "id": "ACE-D3-068",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Monitoring Alert Policy Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Custom Cloud Monitoring Metric-Based Alerting Policies via gcloud CLI",
    "scenario": "You have defined a JSON alerting policy `high-cpu-alert.json` that monitors Compute Engine VM CPU utilization and triggers an alert when average CPU exceeds 85% for 5 consecutive minutes, notifying notification channel `projects/corp-ops/notificationChannels/98765`. Which command deploys this alerting policy?",
    "keywords": [
      "Cloud Monitoring",
      "gcloud alpha monitoring policies create",
      "Alerting Policy",
      "SRE Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud alpha monitoring channels create --channel-content-from-file=high-cpu-alert.json"
      },
      {
        "letter": "B",
        "text": "gcloud monitoring dashboards create --config-from-file=high-cpu-alert.json"
      },
      {
        "letter": "C",
        "text": "gcloud alpha monitoring policies create --policy-from-file=high-cpu-alert.json"
      },
      {
        "letter": "D",
        "text": "gcloud logging metrics create high-cpu-alert --config-from-file=high-cpu-alert.json"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud alpha monitoring policies create --policy-from-file=<FILE>` is the Google Cloud CLI command to deploy declarative JSON/YAML alerting policy configurations to Google Cloud Monitoring.",
    "distractors": {
      "D": "A log-based metric counts log entries matching a filter; it is not an alerting policy. Even if the file parsed as a metric descriptor, a metric on its own has no threshold and no notification target, so no alert fires.",
      "A": "Right file, wrong resource: this creates a NotificationChannel, the destination of an alert, not the alert itself. The API rejects an AlertPolicy body here because the channel schema expects type and labels, and the 85% CPU condition is never evaluated.",
      "B": "A Dashboard only renders charts of existing metrics. It has no condition, no duration window and no notificationChannels field, so nothing is ever compared against 85% and channel 98765 is never notified."
    },
    "gcloudCommand": "gcloud alpha monitoring policies create --policy-from-file=high-cpu-alert.json",
    "architectureComponents": [
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/monitoring/alerts/using-alerting-api"
  },
  {
    "id": "ACE-D3-069",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Run CPU Allocation Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Run CPU Allocation: Always Allocated vs Request-Based",
    "scenario": "A team is deploying a WebSockets chat server and background message listener on Cloud Run. Unlike standard REST APIs, the container needs continuous CPU execution to maintain long-lived WebSocket connections and process background threads even when no active HTTP request is being processed. Which flag must be configured during deployment?",
    "keywords": [
      "Cloud Run",
      "--no-cpu-throttling",
      "CPU Always Allocated",
      "WebSockets",
      "Background Processing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy with --min-instances=1 to keep one warm instance running."
      },
      {
        "letter": "B",
        "text": "Deploy with the --no-cpu-throttling flag (CPU always allocated)."
      },
      {
        "letter": "C",
        "text": "Deploy with --session-affinity to pin WebSocket clients to instances."
      },
      {
        "letter": "D",
        "text": "Deploy with --timeout=3600 to allow one-hour long-lived requests."
      }
    ],
    "correct": "B",
    "explanation": "By default, Cloud Run throttles CPU to 0 outside of active HTTP request processing. To support WebSockets, streaming connections, and background thread execution, you must deploy with `--no-cpu-throttling` (CPU is always allocated throughout the instance lifecycle).",
    "distractors": {
      "D": "Raising the request timeout keeps a connection open longer, but CPU remains allocated only while a request is in flight, so the background message listener stays frozen between requests.",
      "A": "A minimum instance stays resident, but its CPU is still throttled to near zero between requests, so the background listener and WebSocket keepalive threads stop executing while idle.",
      "C": "Session affinity only makes the load balancer route a returning client to the same instance; it does not change when CPU is allocated, so background threads are still throttled."
    },
    "gcloudCommand": "gcloud run deploy chat-service --image=gcr.io/my-proj/chat:v1 --region=us-central1 --no-cpu-throttling",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/cpu-allocation"
  },
  {
    "id": "ACE-D3-070",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes PriorityClasses & Pod Preemption",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying GKE Pod PriorityClasses for Critical Workload Scheduling",
    "scenario": "In a crowded GKE cluster running both batch analytics and core payment processing, worker nodes occasionally experience resource contention. You need to ensure that payment processing Pods are NEVER evicted and can preempt lower-priority batch pods if node resources run low. What Kubernetes resource should you deploy and attach to the payment Pod spec?",
    "keywords": [
      "GKE",
      "PriorityClass",
      "Pod Preemption",
      "Critical Workload",
      "Kubernetes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a PodDisruptionBudget for the payment Deployment with minAvailable set to 100% so the scheduler refuses to evict any of its Pods."
      },
      {
        "letter": "B",
        "text": "Set identical CPU and memory requests and limits on the payment containers so they receive the Guaranteed QoS class and are evicted last."
      },
      {
        "letter": "C",
        "text": "Deploy a PriorityClass resource with a high integer value (e.g. 1000000) and set priorityClassName in the payment deployment Pod template."
      },
      {
        "letter": "D",
        "text": "Deploy a PriorityClass valued at 1000000 with preemptionPolicy: Never and reference it via priorityClassName in the payment Pod template."
      }
    ],
    "correct": "C",
    "explanation": "Kubernetes `PriorityClass` defines the scheduling priority of Pods. When high-priority Pods cannot be scheduled due to resource starvation, the Kubernetes scheduler preempts (evicts) lower-priority Pods to guarantee compute resources for critical workloads.",
    "distractors": {
      "B": "Guaranteed QoS only ranks victims for kubelet eviction under node pressure; it grants no scheduling priority, so a payment Pod that finds no free capacity stays Pending instead of preempting batch Pods.",
      "A": "A PodDisruptionBudget only guards voluntary disruptions such as node drains; it carries no scheduling priority, so it neither survives kubelet node-pressure eviction nor lets payment Pods preempt batch Pods.",
      "D": "preemptionPolicy: Never gives the Pod a head start in the scheduling queue but explicitly forbids evicting lower-priority Pods, so payment Pods wait for capacity instead of preempting batch workloads."
    },
    "gcloudCommand": "kubectl apply -f priority-class.yaml && kubectl apply -f payment-deployment.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/"
  },
  {
    "id": "ACE-D3-071",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Database Flags Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL Read-Only Connection Pooling with Database Flags",
    "scenario": "You have deployed a PostgreSQL database on Cloud SQL. To support high concurrent connections from microservices, you need to configure the PostgreSQL database flag `max_connections=500` and `shared_buffers=1048576` (1 GB) on instance `prod-pg-1`. Which gcloud command applies these database flags?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances patch",
      "--database-flags",
      "PostgreSQL",
      "Performance Tuning"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create prod-pg-1 --database-flags=max_connections=500,shared_buffers=1048576"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch prod-pg-1 --database-flags=shared_buffers=1048576 --activation-policy=ALWAYS"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances patch prod-pg-1 --tier=db-custom-4-16384 --availability-type=REGIONAL"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch prod-pg-1 --database-flags=max_connections=500,shared_buffers=1048576"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --database-flags=<FLAG1=VAL1,FLAG2=VAL2>` applies database engine configuration parameters (such as `max_connections`, `log_output`, `autovacuum`) directly to Cloud SQL managed instances.",
    "distractors": {
      "B": "--database-flags replaces the complete flag set on every patch, so sending only shared_buffers silently resets max_connections to the instance default instead of raising it to 500.",
      "C": "Resizing the machine only raises the memory-derived defaults; neither max_connections=500 nor shared_buffers=1048576 is actually set, and the concurrency requirement stays unmet.",
      "A": "create provisions a new instance; prod-pg-1 already exists, so the command aborts with ALREADY_EXISTS and neither flag reaches the running database."
    },
    "gcloudCommand": "gcloud sql instances patch prod-pg-1 --database-flags=max_connections=500,shared_buffers=1048576",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/flags"
  },
  {
    "id": "ACE-D3-072",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes Service Types: ClusterIP vs NodePort vs LoadBalancer",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Services with type: NodePort and Ingress Integration",
    "scenario": "You are configuring the Service manifest for a backend microservice running on GKE that will be exposed to external traffic via a Google Cloud L7 Ingress controller. What `type` of Kubernetes Service is standard and optimal when using GKE Ingress with container-native load balancing?",
    "keywords": [
      "GKE Ingress",
      "Kubernetes Service",
      "ClusterIP",
      "NEG",
      "Container-Native Load Balancing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "type: ClusterIP (using Network Endpoint Groups / NEG annotation for direct container-native routing)."
      },
      {
        "letter": "B",
        "text": "type: NodePort (Ingress builds instance-group backends reached through kube-proxy on each node port)."
      },
      {
        "letter": "C",
        "text": "type: LoadBalancer (one regional external passthrough Network Load Balancer per backend microservice)."
      },
      {
        "letter": "D",
        "text": "type: ExternalName (a CNAME to the internal record backend.prod.svc.example.internal in Cloud DNS)."
      }
    ],
    "correct": "A",
    "explanation": "In GKE, the standard best practice when using GKE Ingress is `type: ClusterIP` paired with Network Endpoint Groups (`cloud.google.com/neg: '{\"ingress\": true}'`). The Google Cloud Load Balancer routes traffic directly to individual Pod IPs (container-native routing), bypassing intermediate node kube-proxy hops.",
    "distractors": {
      "C": "LoadBalancer Services are not supported as GKE Ingress backends; it also provisions a separate L4 passthrough load balancer with its own IP per service, which bypasses the L7 Ingress the traffic is supposed to enter through.",
      "B": "Supported by Ingress, but it is the pre-NEG data path: the load balancer targets node ports on instance groups, adding a kube-proxy hop and losing the direct-to-Pod routing and Pod readiness-based health checking of container-native load balancing.",
      "D": "An ExternalName Service is nothing but a DNS CNAME: it has no selector and no endpoints, so the NEG controller has no Pod IPs to register and the Ingress cannot build a backend service for it."
    },
    "gcloudCommand": "kubectl apply -f clusterip-neg-service.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/container-native-load-balancing"
  },
  {
    "id": "ACE-D3-073",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "App Engine Multi-Service Routing with dispatch.yaml",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying App Engine Dispatch Routing Rules with dispatch.yaml",
    "scenario": "You have an App Engine application with two services: `default` (serving main website traffic) and `mobile-api` (serving mobile endpoints). You need incoming requests to `example.com/api/*` to be routed automatically to the `mobile-api` service, while all other requests route to `default`. Which file and command deploys this routing rule?",
    "keywords": [
      "App Engine",
      "dispatch.yaml",
      "gcloud app deploy dispatch.yaml",
      "Multi-Service Routing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Map the hostname api.example.com to the mobile-api service with gcloud app domain-mappings create and point a DNS record at it."
      },
      {
        "letter": "B",
        "text": "Add a dispatch: block routing '*/api/*' to mobile-api inside the default service's app.yaml and deploy it with gcloud app deploy app.yaml."
      },
      {
        "letter": "C",
        "text": "Run gcloud app services set-traffic mobile-api --splits=api=1 so that the /api/* requests are served by the mobile-api service."
      },
      {
        "letter": "D",
        "text": "Create a dispatch.yaml file mapping '*/api/*' to service 'mobile-api', and deploy it using gcloud app deploy dispatch.yaml."
      }
    ],
    "correct": "D",
    "explanation": "App Engine uses `dispatch.yaml` to configure path and domain routing across multiple microservices. Running `gcloud app deploy dispatch.yaml` registers the URL routing rules at the App Engine routing layer.",
    "distractors": {
      "C": "Traffic splitting distributes requests between versions of a single service by weight (or cookie/IP); it has no notion of URL paths and cannot move example.com/api/* from one service to another.",
      "A": "Domain mappings route by hostname, not by path: requests to example.com/api/* still land on the default service, and the requirement is path-based routing on the existing domain rather than a new subdomain.",
      "B": "Right routing rule, wrong file: dispatch is not a valid app.yaml element, so the deployment either fails validation or ignores the block. Dispatch rules only take effect from dispatch.yaml, deployed on its own."
    },
    "gcloudCommand": "gcloud app deploy dispatch.yaml",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/reference/dispatch-yaml"
  },
  {
    "id": "ACE-D3-074",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Serverless VPC Access Connector Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying VPC Serverless VPC Access Connectors for Serverless-to-VPC Connectivity",
    "scenario": "You are deploying a legacy Cloud Functions (1st gen) service that needs to query an internal Redis cache running on private IP `10.0.0.5` inside VPC network `corp-vpc`. You need to deploy a Serverless VPC Access connector named `serverless-conn` in region `us-central1` using IP range `10.8.0.0/28`. Which command provisions the connector?",
    "keywords": [
      "Serverless VPC Access",
      "gcloud compute networks vpc-access connectors create",
      "Cloud Functions",
      "Private IP"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute networks vpc-access connectors create serverless-conn --region=us-central1 --network=corp-vpc --range=10.8.0.0/28 --min-instances=2 --max-instances=10"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks vpc-access connectors create serverless-conn --region=us-central1 --network=corp-vpc --range=10.8.0.0/24 --min-instances=2 --max-instances=10"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks vpc-access connectors create serverless-conn --region=us-east1 --network=corp-vpc --range=10.8.0.0/28 --min-instances=2 --max-instances=10"
      },
      {
        "letter": "D",
        "text": "gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --network=corp-vpc --ranges=google-managed-services-corp-vpc --project=my-proj"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute networks vpc-access connectors create <NAME> --region=<REGION> --network=<NETWORK> --range=<CIDR>` creates a Serverless VPC Access connector, allowing serverless runtimes (Cloud Functions, Cloud Run, App Engine) to route private traffic into a VPC network.",
    "distractors": {
      "C": "The connector is created but lands in us-east1, and a connector can only be attached by a serverless service in the same region, so the Cloud Function deployed in us-central1 cannot use it to reach 10.0.0.5.",
      "D": "Configures Private Services Access, the peering that lets your VPC reach Google-managed producer services such as Cloud SQL or Memorystore on private IPs. It creates no connector, so the Function still has no egress path into corp-vpc.",
      "B": "Every value is right except the mask: a Serverless VPC Access connector gets its own dedicated subnet whose primary IPv4 range must be a /28, so a /24 is rejected when the connector is created."
    },
    "gcloudCommand": "gcloud compute networks vpc-access connectors create serverless-conn --region=us-central1 --network=corp-vpc --range=10.8.0.0/28 --min-instances=2 --max-instances=10",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Functions",
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/configure-serverless-vpc-access"
  },
  {
    "id": "ACE-D3-075",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Custom Metric Autoscaling with Prometheus",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Horizontal Pod Autoscaler with Custom Prometheus Metrics",
    "scenario": "You have an event-driven queue processing worker deployment in GKE. The deployment must scale out when the custom metric `queue_messages_ready` exposed by a Prometheus endpoint exceeds 50 messages per pod. What architecture should you deploy to allow Kubernetes HPA to autoscale based on this Prometheus metric?",
    "keywords": [
      "GKE",
      "Custom Metrics",
      "Prometheus",
      "HPA",
      "autoscaling/v2"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an autoscaling/v1 HorizontalPodAutoscaler with kubectl autoscale --cpu-percent=50 --min=1 --max=20 and enable the Vertical Pod Autoscaler in Auto mode so worker Pods are resized as the queue grows."
      },
      {
        "letter": "B",
        "text": "Enable node pool autoscaling with gcloud container clusters update --enable-autoscaling --min-nodes=1 --max-nodes=10 plus Node Auto-Provisioning, so capacity is added whenever the queue backs up."
      },
      {
        "letter": "C",
        "text": "Scrape the endpoint with Google Cloud Managed Service for Prometheus and create an autoscaling/v2 HPA whose metric block is of type Resource, named queue_messages_ready, with target averageValue 50."
      },
      {
        "letter": "D",
        "text": "Deploy the Custom Metrics Stackdriver Adapter (or Prometheus Adapter) in the cluster, and create an HPA manifest using apiVersion: autoscaling/v2 specifying metric type 'Pods' or 'External' with target value 50."
      }
    ],
    "correct": "D",
    "explanation": "Kubernetes HPA (`autoscaling/v2`) supports custom and external metrics. Deploying the Custom Metrics Adapter allows HPA to query Prometheus or Cloud Monitoring metrics and calculate required replica counts dynamically based on custom application queues.",
    "distractors": {
      "B": "The cluster autoscaler reacts to Pods that stay Pending for lack of capacity; it never changes the Deployment replica count. With a fixed number of replicas nothing is ever unschedulable, so no node is added and the Prometheus metric is never consulted.",
      "C": "A metric block of type Resource is served by metrics-server and only accepts the cpu and memory resources of the Pod, so the HPA reports FailedGetResourceMetric. Prometheus values must be surfaced as type Pods or External by a custom metrics API adapter.",
      "A": "autoscaling/v1 exposes only targetCPUUtilizationPercentage, so queue_messages_ready is never read and a worker blocked on I/O keeps CPU flat while messages pile up. VPA resizes Pod requests instead of adding replicas, and fights an HPA on the same workload."
    },
    "gcloudCommand": "kubectl apply -f custom-metric-hpa.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
  },
  {
    "id": "ACE-D4-001",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine IAP SSH Tunneling",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Connecting Securely to Private Compute Engine Instances via IAP Desktop/SSH Tunneling",
    "scenario": "You need to SSH into a backend Linux Compute Engine instance `backend-worker-1` located in a private VPC subnet with no external public IP address. Corporate policy forbids opening port 22 to the public internet or deploying a dedicated bastion host VM. How should you establish the SSH connection?",
    "keywords": [
      "Compute Engine",
      "IAP SSH Tunnel",
      "Identity-Aware Proxy",
      "roles/iap.tunnelResourceAccessor",
      "Private VM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure a Cloud Router and a Cloud NAT gateway for the subnet, then run gcloud compute ssh backend-worker-1 --zone=us-central1-a --internal-ip so the session reaches the instance on its private address."
      },
      {
        "letter": "B",
        "text": "Enable OS Login by setting the enable-oslogin=TRUE project metadata, grant roles/compute.osAdminLogin to the operators, then run gcloud compute ssh backend-worker-1 --zone=us-central1-a to open the session."
      },
      {
        "letter": "C",
        "text": "Connect using gcloud compute ssh backend-worker-1 --zone=us-central1-a --tunnel-through-iap, ensuring you have roles/iap.tunnelResourceAccessor and an ingress firewall rule allows port 22 from 35.235.240.0/20."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute ssh backend-worker-1 --zone=us-central1-a --tunnel-through-iap after granting roles/iap.tunnelResourceAccessor and allowing ingress on TCP 22 from 130.211.0.0/22 and 35.191.0.0/16."
      }
    ],
    "correct": "C",
    "explanation": "Identity-Aware Proxy (IAP) TCP forwarding allows authorized users to establish encrypted SSH connections to private instances with no public IPs over Google Cloud's edge infrastructure. Traffic originates from `35.235.240.0/20` and requires `roles/iap.tunnelResourceAccessor`.",
    "distractors": {
      "B": "OS Login manages SSH key provisioning and Linux account authorization, not connectivity; with no external IP and no tunnel there is still no network path to port 22 on the instance.",
      "D": "Those two ranges are the Google load balancer health check probes; IAP TCP forwarding traffic arrives from 35.235.240.0/20, so the firewall drops the tunnel and the connection times out.",
      "A": "Cloud NAT provides only outbound source translation and opens no inbound path, and --internal-ip requires the client to already be inside the VPC, so the SSH connection never reaches the VM."
    },
    "gcloudCommand": "gcloud compute ssh backend-worker-1 --zone=us-central1-a --tunnel-through-iap",
    "architectureComponents": [
      "Compute Engine",
      "Identity-Aware Proxy (IAP)",
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/connect/iap-using-ssh"
  },
  {
    "id": "ACE-D4-002",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Node Pool Upgrade Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Upgrading GKE Node Pools with Zero Downtime using Blue-Green or Surge Upgrades",
    "scenario": "You are upgrading a production GKE Standard cluster node pool `app-pool` from Kubernetes version 1.27 to 1.28. To guarantee that customer workloads do not experience downtime or capacity degradation during the rolling node upgrade, you need to configure the upgrade strategy to provision 1 extra node before draining an old node (`max-surge=1`) and allow 0 unavailable nodes (`max-unavailable=0`). Which command initiates the upgrade?",
    "keywords": [
      "GKE",
      "Node Pool Upgrade",
      "max-surge",
      "max-unavailable",
      "Zero Downtime"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud container clusters upgrade my-cluster --node-pool=app-pool --cluster-version=1.28 --region=us-central1"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters upgrade my-cluster --master --cluster-version=1.28 --region=us-central1"
      },
      {
        "letter": "C",
        "text": "gcloud container node-pools update app-pool --cluster=my-cluster --max-surge-upgrade=1 --region=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters upgrade my-cluster --node-pool=app-pool --cluster-version=1.28 --zone=us-central1-a"
      }
    ],
    "correct": "A",
    "explanation": "GKE node pool upgrades are initiated with `gcloud container clusters upgrade <CLUSTER> --node-pool=<POOL> --cluster-version=<VERSION>`. GKE uses configured surge upgrade parameters (`max-surge` and `max-unavailable`) to gracefully cordon, drain, and replace worker nodes sequentially.",
    "distractors": {
      "D": "The cluster is regional (--region=us-central1 in its creation), so addressing it with --zone=us-central1-a makes gcloud look for a zonal cluster of that name in a single zone and fail with a not-found error.",
      "B": "--master upgrades only the control plane. The app-pool nodes stay on 1.27: no node is cordoned, drained or recreated, so the node pool version the task asks for is never changed.",
      "C": "This configures the surge upgrade policy but starts no upgrade, so nodes keep running 1.27. Reaching zero unavailable nodes also requires --max-unavailable-upgrade=0 in the same call, which is missing here."
    },
    "gcloudCommand": "gcloud container clusters upgrade my-cluster --node-pool=app-pool --cluster-version=1.28.7-gke.1026000 --region=us-central1",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-pool-upgrades"
  },
  {
    "id": "ACE-D4-003",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine VM Machine Type Modification",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Resizing Compute Engine Virtual Machine Types via gcloud CLI",
    "scenario": "An application running on an `e2-standard-2` VM `batch-worker-1` in zone `us-central1-a` is experiencing severe CPU exhaustion. You need to upgrade the VM to an `e2-standard-8` (8 vCPUs, 32 GB RAM) with minimal downtime. Which sequence of operations must you perform?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instances set-machine-type",
      "VM Resizing",
      "Stop / Start"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Stop the instance using gcloud compute instances stop, change the machine type using gcloud compute instances set-machine-type batch-worker-1 --zone=us-central1-a --machine-type=e2-standard-8, and restart the instance with gcloud compute instances start."
      },
      {
        "letter": "B",
        "text": "Create a machine image with gcloud compute machine-images create batch-img --source-instance=batch-worker-1, create a new e2-standard-8 VM from that image in us-central1-a, and repoint the workload at the new instance."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances set-machine-type batch-worker-1 --zone=us-central1-a --machine-type=e2-standard-8 against the running VM, then apply the change with gcloud compute instances reset batch-worker-1 --zone=us-central1-a."
      },
      {
        "letter": "D",
        "text": "Add batch-worker-1 to a managed instance group, point the instance template at e2-standard-8, and roll the change out with gcloud compute instance-groups managed rolling-action start-update mig-batch --max-unavailable=0 --max-surge=1."
      }
    ],
    "correct": "A",
    "explanation": "To change the machine type of a standalone Compute Engine instance, the instance must first be in the `TERMINATED` (stopped) state. You stop the VM, execute `gcloud compute instances set-machine-type`, and start the VM.",
    "distractors": {
      "C": "The machine type can only be changed while the instance is in the TERMINATED state, so the API rejects the call on a running VM. reset is a hard power cycle that never releases the instance's host resources, so it cannot make the change take effect either.",
      "D": "A managed instance group only manages instances it creates from its own template; an existing standalone VM cannot be enrolled into one. A rolling update also replaces instances with brand-new ones rather than resizing batch-worker-1 in place.",
      "B": "This ends up with a second, differently named instance holding a new internal IP, and the downtime spans imaging the disk plus provisioning from the image. The requirement is minimal downtime on the existing VM, which set-machine-type delivers in seconds."
    },
    "gcloudCommand": "gcloud compute instances stop batch-worker-1 --zone=us-central1-a && gcloud compute instances set-machine-type batch-worker-1 --zone=us-central1-a --machine-type=e2-standard-8 && gcloud compute instances start batch-worker-1 --zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/changing-machine-type-of-stopped-instance"
  },
  {
    "id": "ACE-D4-004",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "BigQuery Dry-Run Query Analysis & FinOps",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Estimating BigQuery Query Scan Costs Using Dry-Run Execution",
    "scenario": "A data scientist is about to execute a complex SQL query on a multi-terabyte dataset in BigQuery. Before running the query, the scientist wants to verify the SQL syntax and know the exact number of bytes that will be scanned and billed, without incurring any query analysis charges. How should they execute the query?",
    "keywords": [
      "BigQuery",
      "Dry-Run Query",
      "bq query --dry_run",
      "Cost Optimization",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run the query in the BigQuery Console and read the exact bytes processed from the Job information tab once the job finishes."
      },
      {
        "letter": "B",
        "text": "Run SELECT COUNT(*) over the same tables first, then multiply the row count by the average row size shown in the table Details pane."
      },
      {
        "letter": "C",
        "text": "Query INFORMATION_SCHEMA.JOBS_BY_PROJECT and read total_bytes_processed for the job before it is submitted for execution."
      },
      {
        "letter": "D",
        "text": "Execute the query using the bq CLI with the --dry_run flag (e.g. bq query --dry_run --use_legacy_sql=false 'SELECT ...')."
      }
    ],
    "correct": "D",
    "explanation": "BigQuery dry-run queries validate SQL query syntax and calculate the exact number of bytes scanned without executing the query, creating jobs, or consuming on-demand query quota/budget.",
    "distractors": {
      "B": "BigQuery bills the bytes of the columns actually read. COUNT(*) is answered from table metadata (0 bytes billed) and says nothing about which columns the real query scans, so the multiplication is unrelated to the eventual cost.",
      "C": "The JOBS views only contain rows for jobs that have already been submitted, so there is nothing to read for a query that has not run yet, and the view performs no SQL syntax validation.",
      "A": "The job actually executes, so the multi-terabyte scan is billed; the requirement was to learn the byte count without incurring charges. Reading Job information happens after the money is already spent."
    },
    "gcloudCommand": "bq query --dry_run --use_legacy_sql=false 'SELECT customer_id, SUM(amount) FROM `corp_data.orders` WHERE order_date >= \"2026-01-01\" GROUP BY customer_id'",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/estimate-costs#dry-run"
  },
  {
    "id": "ACE-D4-005",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Logging Advanced Query Filters",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Filtering and Investigating Application Errors in Cloud Logging Explorer",
    "scenario": "Your production web service is returning HTTP 500 errors. You need to view all log entries in Cloud Logging from Compute Engine instances in project `prod-app` that contain a `severity` of `ERROR` or `CRITICAL` within the last 1 hour, filtering on resource type `gce_instance`. Which query filter expression should you enter in Cloud Logging Explorer?",
    "keywords": [
      "Cloud Logging",
      "Advanced Filter",
      "resource.type",
      "severity>=ERROR",
      "Troubleshooting"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "resource.type=\"gce_instance\" AND severity = \"ERROR\" AND timestamp >= \"2026-08-20T20:00:00Z\""
      },
      {
        "letter": "B",
        "text": "resource.labels.instance_id=\"gce_instance\" AND severity >= ERROR AND timestamp >= \"1h\""
      },
      {
        "letter": "C",
        "text": "resource.type=\"gce_instance\" AND severity>=(ERROR) AND timestamp >= \"2026-08-20T20:00:00Z\""
      },
      {
        "letter": "D",
        "text": "resource.type=\"gce_instance\" OR severity >= (ERROR) AND timestamp >= \"2026-08-20T20:00:00Z\""
      }
    ],
    "correct": "C",
    "explanation": "Cloud Logging Query Language uses structured key-value expressions. Filtering by `resource.type=\"gce_instance\"` and `severity>=(ERROR)` queries all error and emergency severity logs generated by Compute Engine VM guest agents and platform services.",
    "distractors": {
      "B": "instance_id holds the numeric VM identifier, not the resource type, so the label never equals 'gce_instance' and the query returns nothing. The Logging query language also has no relative-time literal such as \"1h\".",
      "D": "AND binds tighter than OR, so this parses as (resource.type=gce_instance) OR (severity>=ERROR AND timestamp...), returning every Compute Engine log line at any severity, INFO noise included, plus errors from other resource types.",
      "A": "An equality match returns only entries whose severity is exactly ERROR; CRITICAL, ALERT and EMERGENCY are distinct severity levels and are silently excluded, so the most serious events behind the HTTP 500s never appear."
    },
    "gcloudCommand": "gcloud logging read 'resource.type=\"gce_instance\" AND severity>=ERROR' --limit=50 --format=json",
    "architectureComponents": [
      "Cloud Logging",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/view/logging-query-language"
  },
  {
    "id": "ACE-D4-006",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Pod Troubleshooting & Log Diagnostics",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating GKE Pod Crashes and Application Stack Traces with kubectl",
    "scenario": "A Kubernetes Pod `checkout-service-78df9b-abcde` in namespace `prod` entered a `CrashLoopBackOff` state and restarted 12 times. You need to inspect the container application logs from the previous failed container execution instance before it crashed. Which kubectl command should you run?",
    "keywords": [
      "kubectl logs --previous",
      "CrashLoopBackOff",
      "Pod Troubleshooting",
      "GKE Diagnostics"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl describe node $(kubectl get pod checkout-service-78df9b-abcde -o jsonpath='{.spec.nodeName}')"
      },
      {
        "letter": "B",
        "text": "kubectl delete pod checkout-service-78df9b-abcde --force"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters restart prod-cluster"
      },
      {
        "letter": "D",
        "text": "kubectl logs checkout-service-78df9b-abcde --namespace=prod --previous"
      }
    ],
    "correct": "D",
    "explanation": "`kubectl logs <POD_NAME> --previous` retrieves the standard output and error logs from the previous instance of the container that exited or crashed, revealing fatal runtime exception stack traces.",
    "distractors": {
      "A": "`describe node` displays VM worker node conditions, not container application stdout/stderr logs.",
      "B": "Force-deleting the pod deletes active pod metadata and restarts the crash loop without diagnosing the root cause.",
      "C": "Restarting the entire GKE cluster causes cluster-wide downtime and does not fix container application bugs."
    },
    "gcloudCommand": "kubectl logs checkout-service-78df9b-abcde --namespace=prod --previous",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "ACE-D4-007",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Automated Backup Restoration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restoring a Cloud SQL Database from an Automated Backup via CLI",
    "scenario": "A developer corrupted a database table in Cloud SQL instance `prod-db`. You listed backups using `gcloud sql backups list --instance=prod-db` and identified the backup ID `1692540000000` created before the corruption occurred. Which command restores this backup to the instance?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql backups restore",
      "Automated Backup",
      "Disaster Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql backups restore 1692540000000 --backup-instance=prod-db"
      },
      {
        "letter": "B",
        "text": "gcloud sql backups create --instance=prod-db --description=pre-fix"
      },
      {
        "letter": "C",
        "text": "gcloud sql backups restore 1692540000000 --restore-instance=prod-db"
      },
      {
        "letter": "D",
        "text": "gcloud sql import sql prod-db gs://prod-db-backups/1692540000000.sql"
      }
    ],
    "correct": "C",
    "explanation": "Restoring a specific Cloud SQL backup to an instance uses `gcloud sql backups restore <BACKUP_ID> --restore-instance=<TARGET_INSTANCE>`.",
    "distractors": {
      "D": "Automated Cloud SQL backups live inside the service and are not exposed as SQL dump objects in a bucket. import sql only reads a dump you produced yourself with gcloud sql export sql.",
      "A": "--backup-instance only names the instance the backup was taken from; the flag that names the target of the restore is --restore-instance, and it is required, so this call is rejected for a missing argument.",
      "B": "This takes a new on-demand backup of the database in its current state, capturing the corrupted table instead of restoring the known-good backup 1692540000000."
    },
    "gcloudCommand": "gcloud sql backups restore 1692540000000 --restore-instance=prod-db",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/backup-recovery/restoring"
  },
  {
    "id": "ACE-D4-008",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Logging Exclusion Filters & Cost Control",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Cloud Logging Log Exclusion Filters to Reduce Log Ingestion Costs",
    "scenario": "Your Google Cloud billing report shows that Cloud Logging ingestion costs have surged due to millions of noisy HTTP 200 health check logs from load balancers. You need to create an exclusion filter on the `_Default` log bucket to discard these health check logs from ingestion while retaining all other logs. What configuration should you apply?",
    "keywords": [
      "Cloud Logging",
      "Log Exclusion Filter",
      "_Default Bucket",
      "FinOps",
      "Cost Reduction"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a sink routing resource.type=\"http_load_balancer\" AND httpRequest.status=200 to a Coldline Cloud Storage bucket so the health check entries are archived cheaply."
      },
      {
        "letter": "B",
        "text": "Create an Exclusion Filter on the _Default log sink with filter expression: resource.type=\"http_load_balancer\" AND httpRequest.status=200 AND httpRequest.userAgent=\"GoogleHC/1.0\"."
      },
      {
        "letter": "C",
        "text": "Run gcloud logging buckets update _Default --location=global --retention-days=1 so the health check entries are dropped from the bucket one day after they arrive."
      },
      {
        "letter": "D",
        "text": "Add an exclusion named skip-healthchecks to the _Required sink with the filter resource.type=\"http_load_balancer\" AND httpRequest.userAgent=\"GoogleHC/1.0\" at 100%."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Logging sinks (like `_Default`) allow creating Exclusion Filters (`--exclusion`). Excluded logs are discarded before ingestion and storage, incurring zero ingestion charges while allowing non-excluded logs to be retained.",
    "distractors": {
      "D": "Right filter, wrong sink. _Required is immutable: it accepts no exclusions and cannot be deleted or modified, and it only routes Admin Activity and System Event audit logs. Load balancer request logs flow through _Default, so nothing is excluded.",
      "C": "Retention controls how long entries are kept, not whether they are received. Cloud Logging bills ingestion by volume at the moment entries arrive, so the cost is identical; the first 30 days of storage in _Default are free anyway.",
      "A": "A sink is additive: routing a copy of the entries to Cloud Storage does not stop them being received by _Default, so the ingestion charge that caused the surge is unchanged and the archive bucket adds storage cost on top of it."
    },
    "gcloudCommand": "gcloud logging sinks update _Default --add-exclusion='name=exclude-health-checks,filter=\"resource.type=http_load_balancer AND httpRequest.userAgent=GoogleHC/1.0\"'",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud Billing"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/routing/overview#exclusions"
  },
  {
    "id": "ACE-D4-009",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "App Engine Version Operations & Traffic Splitting",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing App Engine Versions and Rolling Back Traffic via CLI",
    "scenario": "A new version `v2` of an App Engine standard service was deployed and started throwing unhandled exceptions. You need to immediately roll back 100% of live traffic to the previous stable version `v1` with zero downtime. Which command executes this instant rollback?",
    "keywords": [
      "App Engine",
      "gcloud app services set-traffic",
      "Instant Rollback",
      "Traffic Migration"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud app services set-traffic default --splits=v1=0.5,v2=0.5"
      },
      {
        "letter": "B",
        "text": "gcloud app versions stop v2 --service=default --project=corp-app"
      },
      {
        "letter": "C",
        "text": "gcloud app services set-traffic default --splits=v1=1 --migrate"
      },
      {
        "letter": "D",
        "text": "gcloud app deploy app.yaml --version=v1 --promote --quiet"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app services set-traffic <SERVICE> --splits=<VERSION>=1 --migrate` instantly routes 100% of incoming requests back to the specified stable version using App Engine traffic migration.",
    "distractors": {
      "D": "Rebuilds and redeploys the app as version v1, which takes minutes and overwrites the known-good artifact, instead of instantly shifting the existing traffic split.",
      "B": "Standard versions with automatic scaling cannot be stopped, and even so the traffic allocation would still point at v2 rather than moving requests back to v1.",
      "A": "Right command, wrong split: half of the live requests keep reaching the broken v2, so the unhandled exceptions continue for 50% of users instead of stopping."
    },
    "gcloudCommand": "gcloud app services set-traffic default --splits=v1=1 --migrate",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/migrating-traffic"
  },
  {
    "id": "ACE-D4-010",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Kubernetes Resource Monitoring & kubectl top",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating High CPU Contention on GKE Worker Nodes with kubectl top",
    "scenario": "Multiple Pods in a GKE cluster are running slowly. You suspect that certain worker nodes or specific container pods are consuming excessive CPU and memory resources. Which command displays live real-time CPU and memory metrics for all nodes in the cluster?",
    "keywords": [
      "kubectl top nodes",
      "kubectl top pods",
      "Metrics Server",
      "Performance Diagnostics",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl describe cluster --metrics"
      },
      {
        "letter": "B",
        "text": "kubectl top nodes"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances list --show-cpu"
      },
      {
        "letter": "D",
        "text": "cat /proc/cpuinfo | grep nodes"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl top nodes` queries the Kubernetes Metrics Server and displays real-time CPU (cores/millicores) and Memory (bytes/percentage) consumption across all active worker nodes in the cluster.",
    "distractors": {
      "D": "Running `/proc/cpuinfo` on a local machine shows local laptop processor specs, not remote GKE worker node metrics.",
      "C": "`--show-cpu` is not a valid flag on `gcloud compute instances list`.",
      "A": "`describe cluster --metrics` is invalid syntax."
    },
    "gcloudCommand": "kubectl top nodes && kubectl top pods --all-namespaces --sort-by=cpu",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/"
  },
  {
    "id": "ACE-D4-011",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Manual Snapshot Creation",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Compute Engine Disk Snapshots for Point-in-Time Backup",
    "scenario": "Before performing an operating system upgrade on a production VM `database-host-1` in zone `us-central1-b`, you need to take an immediate point-in-time snapshot of its boot persistent disk `database-boot-disk` named `snapshot-pre-upgrade-db`. Which command executes this snapshot?",
    "keywords": [
      "Compute Engine",
      "gcloud compute disks snapshot",
      "Snapshot",
      "Data Protection"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute disks snapshot database-boot-disk --zone=us-central1-b --description=snapshot-pre-upgrade-db"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks snapshot database-boot-disk --zone=us-central1-b --snapshot-names=snapshot-pre-upgrade-db"
      },
      {
        "letter": "C",
        "text": "gcloud compute images create snapshot-pre-upgrade-db --source-disk=database-boot-disk --source-disk-zone=us-central1-b"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks snapshot database-host-1 --zone=us-central1-b --snapshot-names=snapshot-pre-upgrade-db"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute disks snapshot <DISK_NAME> --zone=<ZONE> --snapshot-names=<SNAPSHOT_NAME>` creates a point-in-time incremental backup snapshot of the specified persistent disk.",
    "distractors": {
      "D": "Right command, wrong resource: database-host-1 is the VM instance, while gcloud compute disks snapshot takes a disk name, so the call fails with a disk not found error. The disk that must be captured is database-boot-disk.",
      "A": "--description only attaches free text to the resource. Without --snapshot-names the API generates the snapshot name itself, so the required snapshot-pre-upgrade-db name is never applied and the rollback procedure cannot address it.",
      "C": "This produces a custom image, which is a global, non-incremental resource; gcloud also refuses to build one from a disk attached to a running instance unless --force is passed, at the risk of an inconsistent image. The rollback point must be a snapshot."
    },
    "gcloudCommand": "gcloud compute disks snapshot database-boot-disk --zone=us-central1-b --snapshot-names=snapshot-pre-upgrade-db",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/create-snapshots"
  },
  {
    "id": "ACE-D4-012",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Monitoring Uptime Checks & Notification Channels",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Monitoring Multi-Channel Uptime Checks",
    "scenario": "You are configuring reliability monitoring for a public web application `https://store.example.com`. The uptime check must query the endpoint `/healthz` every 1 minute from 6 geographic regions worldwide, report an incident if the response code is not HTTP 200 within 10 seconds, and alert an on-call PagerDuty channel. What monitoring product should you configure?",
    "keywords": [
      "Cloud Monitoring",
      "Uptime Check",
      "PagerDuty Alerting",
      "Global Probing",
      "SRE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Cloud Scheduler job invoking a Cloud Function every minute that issues an HTTPS request to store.example.com/healthz and writes the status code to Cloud Logging, with a log-based alert routed to PagerDuty."
      },
      {
        "letter": "B",
        "text": "A Cloud Monitoring Synthetic Monitor running a Node.js script against store.example.com/healthz on a 1-minute schedule from a single region, with an Alerting Policy on a PagerDuty notification channel."
      },
      {
        "letter": "C",
        "text": "Cloud Monitoring Uptime Check configured for HTTPS on hostname store.example.com with path /healthz, check frequency 1 minute, and attached to an Alerting Policy with PagerDuty notification channel."
      },
      {
        "letter": "D",
        "text": "A Cloud Load Balancing HTTPS health check probing /healthz every 10 seconds from Google's global probers, with an Alerting Policy on the backend service health metric routed to PagerDuty."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Monitoring Uptime Checks probe public and private endpoints from multiple geographic locations worldwide, testing availability and HTTP status codes, and seamlessly integrating with Cloud Monitoring Alerting Policies and notification channels (PagerDuty, Slack, Email).",
    "distractors": {
      "A": "This works but rebuilds a managed feature by hand, and the Cloud Function runs in one region, so it cannot report from six geographic locations or distinguish a regional network problem from a real outage.",
      "B": "Synthetic Monitors are for multi-step browser journeys and run from a single region. For a plain endpoint availability check from six worldwide locations, the Uptime Check is the purpose-built product.",
      "D": "Load balancer health checks decide which backends receive traffic; they probe from inside Google's network and never validate the public hostname, DNS, or the TLS certificate a real user hits."
    },
    "gcloudCommand": "gcloud alpha monitoring uptime create store-uptime --display-name='Store Uptime' --hostname='store.example.com' --path='/healthz' --check-interval=1m",
    "architectureComponents": [
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/monitoring/uptime-checks"
  },
  {
    "id": "ACE-D4-013",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "BigQuery Partition Expiration Management",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing BigQuery Table Partition Expiration and Data Retention",
    "scenario": "A data engineering team stores event telemetry in a partitioned BigQuery table `analytics.events`. To satisfy data privacy mandates and prevent unbounded storage growth, all table partitions older than 90 days must be automatically deleted. Which `bq` command updates the table's partition expiration?",
    "keywords": [
      "BigQuery",
      "bq update --time_partitioning_expiration",
      "Data Retention",
      "FinOps",
      "Partition Pruning"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute disks snapshot delete --older-than=90d"
      },
      {
        "letter": "B",
        "text": "bq query 'DELETE FROM analytics.events WHERE _PARTITIONDATE < DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)' in a cron script"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://analytics-events --lifecycle-file=90d.json"
      },
      {
        "letter": "D",
        "text": "bq update --time_partitioning_expiration=7776000 analytics.events"
      }
    ],
    "correct": "D",
    "explanation": "`bq update --time_partitioning_expiration=<SECONDS> <DATASET.TABLE>` configures automatic partition expiration (90 days = 7,776,000 seconds). BigQuery automatically deletes partitions older than the expiration window for $0 query cost without requiring manual SQL delete jobs.",
    "distractors": {
      "A": "`compute disks snapshot delete` manages Compute Engine disk backups, not BigQuery table data.",
      "B": "Running recurring SQL DELETE queries incurs ongoing query processing costs and requires maintenance of external cron runners.",
      "C": "Cloud Storage lifecycle policies apply to Cloud Storage object buckets, not BigQuery internal managed tables."
    },
    "gcloudCommand": "bq update --time_partitioning_expiration=7776000 analytics.events",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/managing-partitioned-tables#partition-expiration"
  },
  {
    "id": "ACE-D4-014",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Trace Distributed Tracing & Latency Diagnostics",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Viewing and Investigating Latency Bottlenecks with Google Cloud Trace",
    "scenario": "Users report intermittent 5-second latency delays when submitting shopping carts in an App Engine and Cloud Run microservices architecture. Which Google Cloud observability tool allows developers to inspect distributed request spans, pinpoint the exact slow database query or API call, and visualize the call latency timeline?",
    "keywords": [
      "Cloud Trace",
      "Distributed Tracing",
      "Latency Bottlenecks",
      "Span Analysis",
      "Cloud Run"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Serial Port Console."
      },
      {
        "letter": "B",
        "text": "Google Cloud Storage Explorer."
      },
      {
        "letter": "C",
        "text": "VPC Flow Logs in Cloud Logging."
      },
      {
        "letter": "D",
        "text": "Google Cloud Trace."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Trace is a distributed tracing system that collects latency data from App Engine, Cloud Run, GKE, and VMs. It renders end-to-end request waterfall diagrams displaying individual span durations, identifying exactly which microservice or database call caused latency.",
    "distractors": {
      "C": "VPC Flow Logs record network connection 5-tuples and bytes, not application-level distributed code tracing spans.",
      "A": "Serial port console displays low-level Linux VM boot logs and hardware kernel messages.",
      "B": "Cloud Storage Explorer browses object files in buckets."
    },
    "gcloudCommand": "gcloud services enable cloudtrace.googleapis.com",
    "architectureComponents": [
      "Cloud Trace",
      "Cloud Run",
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/trace/docs/overview"
  },
  {
    "id": "ACE-D4-015",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Kubernetes Deployment Rollout Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing GKE Workload Rollout History, Status, and Undo Rollbacks",
    "scenario": "You deployed a new image version to a Kubernetes Deployment `api-deployment` in GKE. The new version causes unexpected application crashes. You need to view the rollout history, inspect previous revision numbers, and immediately undo the deployment to roll back to the previous stable revision. Which kubectl commands should you run?",
    "keywords": [
      "kubectl rollout history",
      "kubectl rollout undo",
      "Deployment Rollback",
      "GKE Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run kubectl rollout history deployment api-deployment followed by kubectl rollout undo deployment api-deployment."
      },
      {
        "letter": "B",
        "text": "Run kubectl rollout history deployment api-deployment followed by kubectl rollout pause deployment api-deployment."
      },
      {
        "letter": "C",
        "text": "Run kubectl rollout undo deployment api-deployment --to-revision=1 to return to the first recorded revision."
      },
      {
        "letter": "D",
        "text": "Run kubectl set image deployment/api-deployment api=api:latest and kubectl rollout restart deployment api-deployment."
      }
    ],
    "correct": "A",
    "explanation": "`kubectl rollout history deployment <NAME>` displays past deployment revisions, and `kubectl rollout undo deployment <NAME>` rolls back the workload to the previous revision instantly without recreating the deployment object.",
    "distractors": {
      "C": "--to-revision=1 pins the rollback to the very first revision in the history rather than the previous one, reintroducing an old image and configuration. Omitting the flag (or --to-revision=0) is what selects the last revision.",
      "B": "pause only freezes the Deployment controller so later template changes are not rolled out; it reverts no ReplicaSet and terminates none of the crashing pods. The broken version keeps serving, and the deployment stays stuck until it is resumed.",
      "D": "This rolls forward onto a mutable tag instead of reverting: api:latest can still resolve to the broken digest, and rollout restart merely recreates the pods of the current ReplicaSet, so the crash loop comes straight back."
    },
    "gcloudCommand": "kubectl rollout history deployment api-deployment && kubectl rollout undo deployment api-deployment",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment"
  },
  {
    "id": "ACE-D4-016",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Machine Image Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Machine Images for Cross-Project VM Duplication",
    "scenario": "You have a multi-disk Compute Engine instance `app-server-1` (including 1 OS boot disk and 2 attached data persistent disks) with specialized instance metadata, IAM service account configurations, and network tags. You need to capture the complete VM state (all disks, metadata, and configuration) into an immutable single resource to replicate identical VMs in other projects. What resource should you create?",
    "keywords": [
      "Compute Engine",
      "Machine Image",
      "Multi-Disk Backup",
      "gcloud compute machine-images create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Compute Engine Machine Image (via gcloud compute machine-images create)."
      },
      {
        "letter": "B",
        "text": "A snapshot of each of the three persistent disks (gcloud compute disks snapshot)."
      },
      {
        "letter": "C",
        "text": "A custom boot image built with gcloud compute images create --source-disk."
      },
      {
        "letter": "D",
        "text": "An instance template of the VM (gcloud compute instance-templates create)."
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine Machine Images capture all configuration, metadata, permissions, and multi-disk persistent storage data of a VM in a single comprehensive resource, making them superior to single-disk snapshots for complete system duplication and backup.",
    "distractors": {
      "D": "A template stores configuration such as machine type, tags and metadata, but it references source images instead of capturing the data currently written on the persistent disks.",
      "B": "Disk snapshots capture block data only: instance metadata, network tags and the attached service account are lost, and three separate snapshots are not one immutable resource.",
      "C": "A custom image captures the boot disk alone; the two attached data disks, the instance metadata and the network tags are absent from the resulting image."
    },
    "gcloudCommand": "gcloud compute machine-images create app-server-golden-image --source-instance=app-server-1 --source-instance-zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/machine-images"
  },
  {
    "id": "ACE-D4-017",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Error Reporting Diagnostics",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Monitoring and Debugging Application Exceptions with Google Cloud Error Reporting",
    "scenario": "Your microservices application running on GKE and Cloud Run is encountering unhandled runtime exceptions in production. The operations team needs a centralized dashboard that automatically groups identical stack traces, tracks exception frequency, and integrates with alerting channels without requiring external logging agents. Which Google Cloud service provides this?",
    "keywords": [
      "Cloud Error Reporting",
      "Stack Trace Grouping",
      "Exception Monitoring",
      "Alerting"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Logging log-based alerts."
      },
      {
        "letter": "B",
        "text": "Cloud Trace distributed tracing."
      },
      {
        "letter": "C",
        "text": "Google Cloud Error Reporting."
      },
      {
        "letter": "D",
        "text": "Cloud Monitoring uptime checks."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Error Reporting automatically aggregates, counts, and groups unhandled runtime exceptions and stack traces from Cloud Logging (Java, Python, Node.js, Go, PHP, Ruby, .NET) into a centralized dashboard with notification integrations.",
    "distractors": {
      "D": "An uptime check probes an endpoint from outside the service to prove it answers. It detects that the service is down or slow, never which exception was thrown inside it, and it groups nothing by stack trace.",
      "A": "A log-based alert fires per matching log entry and has no grouping model: identical stack traces are never deduplicated into one tracked error with an occurrence count, so you get a stream of notifications instead of the aggregated exception dashboard the team asked for.",
      "B": "Cloud Trace samples request latency across spans. It records timing and call structure, not exception payloads, so it cannot count unhandled runtime errors or group them by stack trace."
    },
    "gcloudCommand": "gcloud services enable clouderrorreporting.googleapis.com",
    "architectureComponents": [
      "Cloud Error Reporting",
      "Cloud Logging"
    ],
    "officialDocUrl": "https://cloud.google.com/error-reporting/docs"
  },
  {
    "id": "ACE-D4-018",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Storage Monitoring & Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud SQL Storage Automatic Resizing and Storage Threshold Monitoring",
    "scenario": "You are monitoring a mission-critical Cloud SQL MySQL database. The database storage usage is at 88% of provisioned capacity. While 'Automatic Storage Increase' is enabled, you want to manually increase the allocated SSD storage from 100 GB to 500 GB immediately to accommodate an upcoming weekend data migration. Which gcloud command applies this capacity upgrade?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances patch",
      "--storage-size",
      "Storage Resizing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances patch prod-mysql-db --storage-size=500GB"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks resize prod-mysql-db-data --size=500GB"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances patch prod-mysql-db --tier=db-n1-standard-8"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch prod-mysql-db --storage-auto-increase"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --storage-size=<SIZE_IN_GB>` increases the persistent disk capacity of a Cloud SQL instance online without downtime. Note that Cloud SQL storage can only be scaled up, never down.",
    "distractors": {
      "D": "This re-enables the automatic growth that is already on. It adds capacity in small increments only once free space is nearly exhausted, so it never pre-provisions the 500 GB the weekend migration needs.",
      "B": "The data disk of a Cloud SQL instance is provisioned inside a Google-managed tenant project and never appears among your own Compute Engine disks, so this returns NOT_FOUND; capacity is only changed through the Cloud SQL API.",
      "C": "--tier changes the machine type, that is vCPU and RAM, and restarts the instance. The provisioned disk stays at 100 GB, so the database is still sitting at 88% of its storage."
    },
    "gcloudCommand": "gcloud sql instances patch prod-mysql-db --storage-size=500GB",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/edit-instance#storage-size"
  },
  {
    "id": "ACE-D4-019",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Container Runtime Debugging",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Executing Interactive Container Debugging with kubectl exec",
    "scenario": "A developer needs to troubleshoot an active running web application container inside GKE Pod `web-app-8594-xyz` in namespace `staging`. The developer needs to open an interactive bash shell inside the running container to inspect local configuration files and run diagnostics. Which kubectl command should they execute?",
    "keywords": [
      "kubectl exec",
      "Interactive Shell",
      "Pod Debugging",
      "GKE Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl exec -it web-app-8594-xyz --namespace=staging -- /bin/bash"
      },
      {
        "letter": "B",
        "text": "kubectl logs -f web-app-8594-xyz --namespace=staging --container=web"
      },
      {
        "letter": "C",
        "text": "kubectl describe pod web-app-8594-xyz --namespace=staging --show-events"
      },
      {
        "letter": "D",
        "text": "kubectl run -it debug-box --image=busybox --namespace=staging -- /bin/sh"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl exec -it <POD_NAME> -- <COMMAND>` opens an interactive TTY terminal session directly inside the running container namespace, allowing developers to execute diagnostic commands in real time.",
    "distractors": {
      "C": "describe reads the pod object from the API server: spec, status, mounts and events. It never enters the container's namespace, so nothing on the container filesystem is visible and no command is executed.",
      "B": "This streams the container's stdout and stderr from the node's log files. It gives no TTY inside the container, so the local configuration files cannot be opened and no diagnostic command can be run.",
      "D": "This schedules a brand-new pod from a different image. Its filesystem, environment and processes belong to busybox, not to the running web application, so none of the app's configuration files can be inspected."
    },
    "gcloudCommand": "kubectl exec -it web-app-8594-xyz --namespace=staging -- /bin/bash",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/"
  },
  {
    "id": "ACE-D4-020",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine OS Login Management",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Instance Metadata and SSH Keys via OS Login",
    "scenario": "An enterprise security audit requires that developers must authenticate to Compute Engine instances using their centralized Google Cloud Identity credentials and 2FA, completely disabling static user-added SSH keys in instance metadata. What configuration must be enabled across project instances?",
    "keywords": [
      "OS Login",
      "enable-oslogin",
      "Two-Factor Authentication",
      "Cloud Identity",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable OS Login at the project metadata level by setting enable-oslogin=TRUE."
      },
      {
        "letter": "B",
        "text": "Set block-project-ssh-keys=TRUE in the metadata of every instance in the project."
      },
      {
        "letter": "C",
        "text": "Set enable-oslogin-2fa=TRUE in project metadata to force two-factor SSH logins."
      },
      {
        "letter": "D",
        "text": "Grant developers roles/compute.osAdminLogin and rotate their SSH keys quarterly."
      }
    ],
    "correct": "A",
    "explanation": "Enabling OS Login (`enable-oslogin=TRUE`) links Linux user accounts and SSH keys directly to Google Cloud Identity accounts and IAM roles (e.g. `roles/compute.osAdminLogin`, `roles/compute.osLogin`), enforcing central revocation, 2FA, and eliminating unmanaged static SSH keys.",
    "distractors": {
      "D": "The OS Login IAM roles are evaluated only once OS Login is enabled in project or instance metadata; without that key the grant authorizes nothing and existing static keys stay valid.",
      "C": "The 2FA metadata key is inert unless enable-oslogin=TRUE is set as well; with OS Login off, static metadata SSH keys keep working and no second factor is ever requested.",
      "B": "This only blocks project-wide keys: SSH keys added to each instance's own metadata still grant access, and logins remain local Linux accounts with no Cloud Identity binding and no 2FA."
    },
    "gcloudCommand": "gcloud compute project-info add-metadata --metadata=enable-oslogin=TRUE",
    "architectureComponents": [
      "Compute Engine",
      "Cloud IAM",
      "Cloud Identity"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/oslogin/set-up-oslogin"
  },
  {
    "id": "ACE-D4-021",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine MIG Health Check Diagnostics",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Inspecting Managed Instance Group Autohealing Health and Health Check Failures",
    "scenario": "Instances in a Managed Instance Group `frontend-mig` are continuously being destroyed and recreated every 5 minutes in an endless autohealing loop. You suspect the application health check endpoint `/health` is failing or timing out. Which gcloud command displays the exact health check status of instances in the MIG?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instance-groups managed list-instances",
      "Autohealing Diagnostics",
      "Health Status"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute health-checks describe frontend-hc --global --format='value(checkIntervalSec)'"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed list-instances frontend-mig --region=us-central1"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed describe frontend-mig --region=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud compute backend-services get-health frontend-backend --global --format=json"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed list-instances <MIG_NAME>` lists all member VM instances along with their current instance status (`RUNNING`), current action (`NONE`, `CREATING`, `RECREATING`), and their detailed health state (`HEALTHY`, `UNHEALTHY`, `TIMEOUT`).",
    "distractors": {
      "A": "This prints the health check's own configuration, such as port, path and interval; it returns no result for any VM, so the failing instances stay invisible.",
      "C": "describe returns the group's template, autohealing policy and aggregate currentActions counters, but never the per-instance HEALTHY or UNHEALTHY state that list-instances shows.",
      "D": "get-health reports the load balancer's own probing of backends, a separate health check resource from the autohealing one that is recreating the VMs in the MIG."
    },
    "gcloudCommand": "gcloud compute instance-groups managed list-instances frontend-mig --region=us-central1",
    "architectureComponents": [
      "Compute Engine",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs#checking_health_status"
  },
  {
    "id": "ACE-D4-022",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Node Maintenance & kubectl drain",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Cordoning and Draining GKE Worker Nodes for Scheduled Host Maintenance",
    "scenario": "You need to perform kernel diagnostics on physical GKE worker node `gke-prod-pool-1-abc1`. Before stopping the underlying VM, you must safely evict all running Pods from the node and reschedule them onto other healthy nodes in the cluster, ensuring that no new Pods are scheduled onto this node during maintenance. Which kubectl commands should you run?",
    "keywords": [
      "GKE",
      "kubectl cordon",
      "kubectl drain",
      "Node Eviction",
      "Maintenance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run kubectl drain gke-prod-pool-1-abc1 --ignore-daemonsets --disable-eviction --force to delete the Pods without waiting on the eviction API."
      },
      {
        "letter": "B",
        "text": "Run kubectl cordon gke-prod-pool-1-abc1 followed by kubectl drain gke-prod-pool-1-abc1 --ignore-daemonsets --delete-emptydir-data."
      },
      {
        "letter": "C",
        "text": "Run kubectl cordon gke-prod-pool-1-abc1 and wait for the Deployments to reschedule their Pods onto the remaining healthy nodes of the cluster."
      },
      {
        "letter": "D",
        "text": "Run kubectl taint nodes gke-prod-pool-1-abc1 maintenance=true:NoSchedule so the scheduler moves the running Pods onto the other nodes."
      }
    ],
    "correct": "B",
    "explanation": "`kubectl cordon <NODE>` marks the node as unschedulable (preventing new pods), and `kubectl drain <NODE>` gracefully evicts existing workloads following PodDisruptionBudgets, moving them safely to other cluster nodes.",
    "distractors": {
      "C": "cordon only marks the node unschedulable for new Pods; the Pods already running on it keep running there until a drain evicts them, so the node is never freed for maintenance.",
      "D": "A NoSchedule taint applies only to future scheduling decisions; Pods already bound to the node are not evicted, which would require a NoExecute taint or an explicit drain.",
      "A": "--disable-eviction deletes Pods through the API directly, bypassing the eviction subresource and every PodDisruptionBudget, so a replicated service can lose all its replicas at once."
    },
    "gcloudCommand": "kubectl cordon gke-prod-pool-1-abc1 && kubectl drain gke-prod-pool-1-abc1 --ignore-daemonsets --delete-emptydir-data",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"
  },
  {
    "id": "ACE-D4-023",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Network Intelligence Center Connectivity Tests",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating Network Connectivity and Packet Drops with Network Management Connectivity Tests",
    "scenario": "Compute Engine instances in VPC-A cannot reach a private database in peered VPC-B over port 5432. You want to diagnose whether the traffic is being dropped by a VPC firewall rule, an invalid VPC route table entry, or a missing peering export without deploying synthetic packet generators. Which Google Cloud tool should you use?",
    "keywords": [
      "Network Intelligence Center",
      "Connectivity Tests",
      "Packet Drop Analysis",
      "VPC Troubleshooting"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable VPC Flow Logs on the subnets of VPC-A and VPC-B with a 1.0 sampling rate, then query Cloud Logging for connection.dest_port=5432 to see where the packets stop."
      },
      {
        "letter": "B",
        "text": "Turn on Firewall Rules Logging for every allow and deny rule in both VPCs and inspect the hits on port 5432 to identify the rule dropping the connection."
      },
      {
        "letter": "C",
        "text": "Open Network Topology in Network Intelligence Center and inspect the traffic graph between VPC-A and VPC-B to find the hop where the 5432 flows disappear."
      },
      {
        "letter": "D",
        "text": "Run a Network Management Connectivity Test (via gcloud network-management connectivity-tests create) between the source VM IP and destination database IP on port 5432."
      }
    ],
    "correct": "D",
    "explanation": "Network Intelligence Center Connectivity Tests perform static graph analysis of the VPC configuration (routes, firewalls, peerings, Cloud Routers) and dynamic live packet tracing to identify the exact firewall rule or route dropping packets.",
    "distractors": {
      "C": "Network Topology visualises observed traffic and its metrics; it is built from flow data, not from configuration analysis. It never evaluates a specific source, destination and port against the firewall rules, routes and peering configuration that could be dropping the packets.",
      "B": "Firewall Rules Logging reports on firewall rules only, and only for traffic that is actually generated, so it cannot reveal an invalid route or an unexported peering range. The implied deny rule cannot have logging enabled, so the drop that matters leaves no entry.",
      "A": "Flow Logs are sampled records of packets that were actually forwarded. Traffic denied by a firewall rule, or with no matching route at all, produces no flow entry, so the logs show only an absence and never name the offending rule, route or missing peering export."
    },
    "gcloudCommand": "gcloud network-management connectivity-tests create vpc-a-to-b-test --source-instance=projects/p1/zones/us-central1-a/instances/app-vm --destination-ip=10.20.0.5 --destination-port=5432 --protocol=TCP",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Network Intelligence Center"
    ],
    "officialDocUrl": "https://cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview"
  },
  {
    "id": "ACE-D4-024",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Monitoring & Metrics Explorer",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Monitoring Cloud SQL CPU and Memory Utilization with Cloud Monitoring Metrics",
    "scenario": "A database administrator is investigating performance degradation on a production Cloud SQL PostgreSQL database. Which Cloud Monitoring metric should be queried to monitor CPU saturation and determine if the instance requires a higher compute tier?",
    "keywords": [
      "Cloud SQL",
      "Cloud Monitoring",
      "database/cpu/utilization",
      "Metrics Explorer"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "cloudsql.googleapis.com/database/cpu/usage_time"
      },
      {
        "letter": "B",
        "text": "cloudsql.googleapis.com/database/cpu/reserved_cores"
      },
      {
        "letter": "C",
        "text": "cloudsql.googleapis.com/database/cpu/utilization"
      },
      {
        "letter": "D",
        "text": "cloudsql.googleapis.com/database/memory/utilization"
      }
    ],
    "correct": "C",
    "explanation": "The official Cloud Monitoring metric for Cloud SQL instance CPU load is `cloudsql.googleapis.com/database/cpu/utilization` (fraction between 0.0 and 1.0).",
    "distractors": {
      "D": "The adjacent resource: the fraction of the RAM quota in use. It can sit flat while the CPU is pegged, so it does not justify moving to a higher compute tier.",
      "A": "A cumulative counter of CPU-seconds consumed. It grows with instance size and uptime and has to be divided by the reserved cores over the interval before it says anything about saturation.",
      "B": "This reports how many vCPUs are provisioned for the instance, a flat capacity figure that does not move when the database is overloaded, so it cannot show CPU pressure."
    },
    "gcloudCommand": "gcloud monitoring metrics-scopes list",
    "architectureComponents": [
      "Cloud SQL",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/monitoring"
  },
  {
    "id": "ACE-D4-025",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Serial Console Debugging",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Serial Console Access for Kernel Troubleshooting",
    "scenario": "A Linux VM `db-server-1` failed to boot after a kernel patch update and is completely unresponsive to SSH connections. You need to view the live boot console output and interact with the GRUB bootloader to select an older kernel. What feature must you enable and use?",
    "keywords": [
      "Compute Engine",
      "Serial Console",
      "serial-port-enable",
      "Kernel Debugging",
      "gcloud compute connect-to-serial-port"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable IAP TCP forwarding and connect with gcloud compute ssh db-server-1 --zone=us-central1-a --tunnel-through-iap after granting roles/iap.tunnelResourceAccessor."
      },
      {
        "letter": "B",
        "text": "Read the boot messages with gcloud compute instances get-serial-port-output db-server-1 --zone=us-central1-a --port=1 and pick the previous kernel from the output."
      },
      {
        "letter": "C",
        "text": "Enable serial port access by setting serial-port-enable=1 in instance metadata, and connect using gcloud compute connect-to-serial-port db-server-1 --zone=us-central1-a --port=1."
      },
      {
        "letter": "D",
        "text": "Detach the boot disk with gcloud compute instances detach-disk db-server-1, attach it to a rescue VM with gcloud compute instances attach-disk, and edit grub.cfg offline."
      }
    ],
    "correct": "C",
    "explanation": "Interactive serial console access (`serial-port-enable=1`) allows direct terminal access to the VM's serial ports (Ports 1-4) via `gcloud compute connect-to-serial-port`, enabling low-level boot diagnostics, GRUB menu interaction, and recovery of unbootable VMs.",
    "distractors": {
      "D": "The rescue-disk workflow can repair a broken configuration file, but it requires stopping the VM and offers neither live boot console output nor the GRUB menu, so the older kernel cannot be selected interactively as the scenario requires.",
      "B": "get-serial-port-output is a one-way dump of what the serial port has already emitted: it shows the kernel panic but accepts no keystrokes, so the GRUB menu cannot be navigated. Interactive access requires gcloud compute connect-to-serial-port.",
      "A": "IAP only changes how the SSH session is tunnelled; the connection still terminates on the sshd daemon inside the guest OS. A VM halted at the GRUB prompt has no booted kernel and no SSH daemon, so no variant of SSH reaches it and GRUB cannot be driven."
    },
    "gcloudCommand": "gcloud compute instances add-metadata db-server-1 --zone=us-central1-a --metadata=serial-port-enable=1 && gcloud compute connect-to-serial-port db-server-1 --zone=us-central1-a --port=1",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-using-serial-console"
  },
  {
    "id": "ACE-D4-026",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "BigQuery Query Execution Plan Diagnostics",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Analyzing BigQuery Query Execution Plans and Identifying Expensive Operators",
    "scenario": "A complex analytical query in BigQuery is running much slower than expected and consuming excessive slot milliseconds. You inspect the Query Execution Plan in BigQuery. The execution graph shows that Stage 3 has severe 'repartitioning' skew, high output rows, and excessive time spent in 'Compute' and 'Wait'. What is the most likely optimization to resolve this skew?",
    "keywords": [
      "BigQuery",
      "Query Execution Plan",
      "Slot Skew",
      "Clustering / Partitioning",
      "Query Optimization"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Partition the underlying table by ingestion time with PARTITION BY DATE(_PARTITIONTIME) so the scan is pruned and Stage 3 has fewer rows to repartition."
      },
      {
        "letter": "B",
        "text": "Buy extra slot capacity with a BigQuery Editions reservation and assign the project to it so Stage 3 gets more parallel workers and its Wait time falls."
      },
      {
        "letter": "C",
        "text": "Cluster the underlying table by the JOIN and GROUP BY keys to minimize shuffle repartitioning overhead, or rewrite the query to avoid high-cardinality CROSS JOINs."
      },
      {
        "letter": "D",
        "text": "Enable BI Engine acceleration on the dataset so the join and aggregation stages are served from the in-memory cache instead of being shuffled across slots."
      }
    ],
    "correct": "C",
    "explanation": "High wait and compute times in BigQuery execution stages with repartitioning indicate shuffle bottlenecks and data skew caused by non-clustered join/group-by operations or Cartesian products (CROSS JOIN). Clustering the table on join keys collocates related rows and eliminates data shuffling across slots.",
    "distractors": {
      "B": "Skew is a distribution problem, not a capacity problem: the oversized key still lands on a single worker, so the extra slots sit idle while that one finishes. Slot-milliseconds consumed and the bill rise while the stage takes just as long.",
      "D": "BI Engine caches columnar data to accelerate small, repeated dashboard queries; it does not execute large shuffle-heavy analytical joins. The repartition stage still runs in the normal slot engine with exactly the same skew on the same key.",
      "A": "Partitioning prunes input blocks only when the query filters on the partitioning column, and it does not change how rows are hashed for the shuffle. A skewed join or GROUP BY key still routes most rows to a handful of workers, so the repartition stage is unchanged."
    },
    "gcloudCommand": "bq query --use_legacy_sql=false --format=prettyjson 'EXPLAIN SELECT * FROM `analytics.orders` o JOIN `analytics.users` u ON o.user_id = u.id'",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/query-plan-explanation"
  },
  {
    "id": "ACE-D4-027",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine MIG Instance Recreate Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restarting and Recreating Unhealthy Instances in Managed Instance Groups via CLI",
    "scenario": "A specific VM `web-mig-4x8z` inside Managed Instance Group `web-mig` has corrupted OS files in its root filesystem. You need Compute Engine to immediately terminate this specific VM and recreate a brand-new instance from the group's instance template. Which command performs this recreation?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instance-groups managed recreate-instances",
      "Instance Recreation",
      "MIG Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed delete-instances web-mig --region=us-central1 --instances=web-mig-4x8z"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed recreate-instances web-mig --region=us-central1 --instances=web-mig-4x8z"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed abandon-instances web-mig --region=us-central1 --instances=web-mig-4x8z"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed rolling-action restart web-mig --region=us-central1 --max-unavailable=1"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed recreate-instances <MIG_NAME> --instances=<INSTANCE_LIST>` instructs the MIG control plane to stop, delete, and recreate the specified member VM instances from the current instance template.",
    "distractors": {
      "D": "Restarts every member of the group instead of the single named VM, and a restart reuses each instance's existing persistent boot disk, so the corrupted root filesystem comes straight back after the reboot.",
      "A": "Deletes the VM and decrements the group's target size at the same time, so no replacement is instantiated from the template and the group permanently runs one instance short of its intended capacity.",
      "C": "Abandoning only detaches the VM from the MIG and lowers the target size: the corrupted instance keeps running and billing outside the group, and no fresh instance is built from the template to replace it."
    },
    "gcloudCommand": "gcloud compute instance-groups managed recreate-instances web-mig --region=us-central1 --instances=web-mig-4x8z",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/recreating-instances-in-migs"
  },
  {
    "id": "ACE-D4-028",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Storage Insights Inventory Reports",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Monitoring Cloud Storage Bucket Inactive Data with Storage Insights Inventory Reports",
    "scenario": "A storage administrator needs to generate a daily CSV inventory report listing all 50 million objects across 10 Cloud Storage buckets, including object size, creation date, storage class, and last access time to plan lifecycle transition policies. What native feature should you configure?",
    "keywords": [
      "Cloud Storage",
      "Storage Insights",
      "Inventory Reports",
      "FinOps",
      "Object Metadata"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Data Access audit logs for Cloud Storage and route the ADMIN_READ and DATA_READ entries into BigQuery with a daily log sink."
      },
      {
        "letter": "B",
        "text": "Configure Storage Transfer Service jobs that copy the ten buckets into an analysis bucket every night and parse the resulting transfer operation logs."
      },
      {
        "letter": "C",
        "text": "Chart the Cloud Monitoring metrics storage/object_count and storage/total_bytes per bucket and storage class, exporting the daily time series to BigQuery."
      },
      {
        "letter": "D",
        "text": "Configure Cloud Storage Insights inventory reports to automatically generate daily object metadata CSV/Parquet files in a target analysis bucket."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Insights provides managed inventory reports that deliver daily or weekly CSV or Parquet files containing comprehensive object metadata (storage class, size, timestamps, CRC32c) directly into a destination bucket for fast BigQuery analysis without incurring millions of List API charges.",
    "distractors": {
      "C": "Those metrics are daily aggregates per bucket and storage class; they contain no per-object rows, so object names, sizes and last access times are unavailable for lifecycle planning.",
      "A": "Audit logs record only the API calls that actually happened; objects nobody touched generate no entry, so the export can never be a complete inventory of the 50 million objects.",
      "B": "Storage Transfer Service copies object payloads, duplicating 50 million objects and their storage cost daily, and its operation logs list only transferred objects with no last access time."
    },
    "gcloudCommand": "gcloud storage insights inventory-reports create --source-bucket=corp-media-vault --destination-bucket=corp-storage-analytics --schedule-frequency=daily --format=CSV",
    "architectureComponents": [
      "Cloud Storage",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/insights/inventory-reports"
  },
  {
    "id": "ACE-D4-029",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Profiler Continuous Performance Profiling",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Profiler to Identify CPU and Memory Hotspots in Production Code",
    "scenario": "Your Go microservice running on GKE is experiencing unexpected CPU spikes in production. You want to continuously profile CPU consumption, memory allocation, and lock contention at the code function and line level in production with under 5% CPU overhead and zero code instrumentation changes. Which Google Cloud tool should you enable?",
    "keywords": [
      "Cloud Profiler",
      "Continuous Profiling",
      "Flame Graphs",
      "CPU Hotspots",
      "Code Optimization"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace latency."
      },
      {
        "letter": "B",
        "text": "GKE workload metrics."
      },
      {
        "letter": "C",
        "text": "Google Cloud Profiler."
      },
      {
        "letter": "D",
        "text": "Ops Agent CPU metrics."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Profiler is a continuous statistical code profiling tool that captures CPU and heap memory allocations across production services, rendering interactive Flame Graphs that highlight exact code functions consuming resources.",
    "distractors": {
      "D": "The Ops Agent has to be installed on the nodes and samples per-process CPU and memory on the host, so it adds the instrumentation the scenario rules out and still stops short of function-level attribution.",
      "A": "Trace measures how long requests and spans take between services. It attributes time to RPCs, never CPU cycles to a function or a line, so it cannot show which code is burning the CPU.",
      "B": "Those report CPU, memory and restart counts per container and pod, one level above the code: they prove the pod is saturated but not which function inside it is responsible."
    },
    "gcloudCommand": "gcloud services enable cloudprofiler.googleapis.com",
    "architectureComponents": [
      "Cloud Profiler",
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/profiler/docs/about-profiler"
  },
  {
    "id": "ACE-D4-030",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Bigtable Node Scaling & Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing and Scaling Cloud Bigtable Cluster Nodes Dynamically",
    "scenario": "Your Cloud Bigtable cluster `cluster-us-central1` is experiencing CPU utilization above 80% due to an unexpected influx of IoT sensor traffic, causing write latency to spike above 50ms. You need to increase the cluster node count from 4 nodes to 12 nodes immediately to restore sub-10ms latency. Which command scales the cluster?",
    "keywords": [
      "Cloud Bigtable",
      "gcloud bigtable clusters update",
      "--num-nodes",
      "Latency Optimization"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud bigtable clusters create cluster-b --instance=iot-telemetry --num-nodes=12 --zone=us-central1-b"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable clusters update cluster-us-central1 --instance=iot-telemetry --num-nodes=12"
      },
      {
        "letter": "C",
        "text": "gcloud bigtable clusters update cluster-us-central1 --instance=iot-telemetry --autoscaling-max-nodes=12"
      },
      {
        "letter": "D",
        "text": "gcloud bigtable app-profiles update default --instance=iot-telemetry --route-any --force"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud bigtable clusters update <CLUSTER_ID> --instance=<INSTANCE_ID> --num-nodes=<COUNT>` dynamically scales the Bigtable cluster node count in seconds without restarting the cluster or interrupting streaming writes.",
    "distractors": {
      "C": "This swaps manual scaling for autoscaling: the autoscaling flag group also needs --autoscaling-min-nodes and --autoscaling-cpu-target, and even when complete it only sets a ceiling that the autoscaler approaches in gradual steps, so no immediate 4 to 12 resize happens.",
      "D": "Multi-cluster routing only spreads traffic across clusters that already exist. This instance has exactly one cluster, so the same 4 overloaded nodes serve every read and write and CPU utilization stays above 80%.",
      "A": "This adds a second replicated cluster instead of resizing the hot one. cluster-us-central1 keeps its 4 nodes, and a single-cluster-routing app profile keeps sending every write to it, so the 50ms write latency stays while storage cost doubles."
    },
    "gcloudCommand": "gcloud bigtable clusters update cluster-us-central1 --instance=iot-telemetry --num-nodes=12",
    "architectureComponents": [
      "Cloud Bigtable"
    ],
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/modifying-instance"
  },
  {
    "id": "ACE-D4-031",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Monitoring Log-Based Metrics",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Cloud Monitoring Log-Based Metrics for Application Monitoring",
    "scenario": "Your legacy application running on Compute Engine outputs log lines containing `PAYMENT_FAILURE: error_code=[code]`. You need to create a Cloud Monitoring Counter metric that counts every occurrence of this error string in real time so you can create an alerting policy. Which command creates this log-based metric?",
    "keywords": [
      "Cloud Monitoring",
      "Log-Based Metric",
      "gcloud logging metrics create",
      "SRE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud logging sinks create payment-failure-sink pubsub.googleapis.com/projects/prod-101/topics/errors --log-filter='textPayload:\"PAYMENT_FAILURE\"'"
      },
      {
        "letter": "B",
        "text": "gcloud alpha monitoring policies create --policy-from-file=payment-failure-alert.yaml --notification-channels=ops-oncall-channel"
      },
      {
        "letter": "C",
        "text": "gcloud logging metrics create payment_failure_count --description='Payment errors' --log-filter='severity>=ERROR AND resource.type=\"gce_instance\"'"
      },
      {
        "letter": "D",
        "text": "gcloud logging metrics create payment_failure_count --description='Count of payment failure errors' --log-filter='textPayload:\"PAYMENT_FAILURE\"'"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud logging metrics create <METRIC_NAME> --log-filter=<FILTER>` creates a Cloud Logging Log-Based Metric, turning matching log lines into numerical metrics that appear in Cloud Monitoring for charting and alerting.",
    "distractors": {
      "A": "A sink only copies matching entries to Pub/Sub. It creates no time series, so Cloud Monitoring has nothing to chart and an alerting policy has no metric to condition on; counting would have to happen in a subscriber.",
      "B": "An alerting policy condition must reference a metric type that already exists. logging.googleapis.com/user/payment_failure_count has not been created yet, so the policy is rejected: the log-based metric is the missing prior step.",
      "C": "Right command, wrong filter: it counts every ERROR any VM writes, folding in unrelated failures, while the legacy application prints PAYMENT_FAILURE as a plain text line that the agent ingests with DEFAULT severity, so the real events are missed."
    },
    "gcloudCommand": "gcloud logging metrics create payment_failure_count --description='Count of payment failure errors' --log-filter='textPayload:\"PAYMENT_FAILURE\"'",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/logs-based-metrics/counter-logs-based-metrics"
  },
  {
    "id": "ACE-D4-032",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Disk Detachment & Reattachment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Detaching and Attaching Disks Across Compute Engine Instances",
    "scenario": "VM instance `server-old` in zone `us-central1-a` is being decommissioned. Its non-boot data disk `data-volume-1` contains 500 GB of reports that must be moved and attached to a new VM `server-new` in the same zone. Which sequence of commands performs this disk migration?",
    "keywords": [
      "Compute Engine",
      "detach-disk",
      "attach-disk",
      "Persistent Disk Migration"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud compute snapshots create vol1-snap --source-disk=data-volume-1 --source-disk-zone=us-central1-a followed by gcloud compute disks create data-volume-1 --source-snapshot=vol1-snap --zone=us-central1-b."
      },
      {
        "letter": "B",
        "text": "Run gcloud compute ssh server-old --zone=us-central1-a --command='sudo umount /dev/sdb' followed by gcloud compute scp --recurse server-old:/mnt/reports server-new:/mnt/reports --zone=us-central1-a."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances detach-disk server-old --disk=data-volume-1 --zone=us-central1-a followed by gcloud compute instances attach-disk server-new --disk=data-volume-1 --zone=us-central1-a."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances attach-disk server-new --disk=data-volume-1 --zone=us-central1-a --mode=ro followed by gcloud compute instances stop server-old --zone=us-central1-a to release it."
      }
    ],
    "correct": "C",
    "explanation": "Moving a Persistent Disk between VMs in the same zone involves detaching it from the source instance (`gcloud compute instances detach-disk`) and attaching it to the target instance (`gcloud compute instances attach-disk`).",
    "distractors": {
      "B": "Copies files over SSH instead of moving the disk resource: 500 GB cross the network and must fit on the boot disk of server-new, while data-volume-1 remains attached to server-old and disappears with it if auto-delete is set on the decommissioned VM.",
      "A": "Restores the reports into a brand new disk in us-central1-b. attach-disk only accepts a disk that lives in the same zone as the target VM, so that copy can never be attached to server-new in us-central1-a, and the original disk stays on server-old.",
      "D": "attach-disk is rejected while data-volume-1 is still attached to server-old in read-write mode, and stopping the source VM does not release the attachment: only detach-disk (or deleting the instance) frees the disk. Read-only mode would also block writes."
    },
    "gcloudCommand": "gcloud compute instances detach-disk server-old --disk=data-volume-1 --zone=us-central1-a && gcloud compute instances attach-disk server-new --disk=data-volume-1 --zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/detach-reattach-pd"
  },
  {
    "id": "ACE-D4-033",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Kubeconfig Authentication & Context",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing GKE Cluster Credentials and Kubeconfig Context via gcloud CLI",
    "scenario": "You were newly granted `roles/container.developer` permissions on GKE cluster `prod-cluster` in region `us-central1`. When you run `kubectl get pods`, the CLI errors with `The connection to the server localhost:8080 was refused`. How should you initialize your local kubeconfig to target the GKE cluster?",
    "keywords": [
      "GKE",
      "gcloud container clusters get-credentials",
      "Kubeconfig",
      "Authentication"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud container clusters get-credentials prod-cluster --zone=us-central1-a."
      },
      {
        "letter": "B",
        "text": "Run gcloud auth application-default login and then retry kubectl get pods."
      },
      {
        "letter": "C",
        "text": "Run gcloud container clusters get-credentials prod-cluster --region=us-central1."
      },
      {
        "letter": "D",
        "text": "Run kubectl config set-cluster prod-cluster --server=https://34.72.15.8:443."
      }
    ],
    "correct": "C",
    "explanation": "`gcloud container clusters get-credentials <CLUSTER_NAME> --region=<REGION>` retrieves cluster control plane endpoint information and generates an authentication token in `~/.kube/config`, configuring `kubectl` to communicate with the GKE cluster.",
    "distractors": {
      "A": "Correct command, wrong location type: prod-cluster is registered as a regional cluster in us-central1, so a --zone lookup for us-central1-a returns 'cluster not found' and no kubeconfig entry is written.",
      "D": "This records an endpoint only. The context gets no cluster CA and no user with the gke-gcloud-auth-plugin exec block, so kubectl now fails certificate validation and is rejected as unauthenticated.",
      "B": "Application Default Credentials are consumed by client libraries, not by kubectl, which reads ~/.kube/config. That file still has no cluster entry, so kubectl keeps falling back to the default localhost:8080 endpoint."
    },
    "gcloudCommand": "gcloud container clusters get-credentials prod-cluster --region=us-central1",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"
  },
  {
    "id": "ACE-D4-034",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine MIG Abandon Instances Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Abandoning and Deleting Instances from Managed Instance Groups",
    "scenario": "A VM instance `worker-mig-7abc` inside Managed Instance Group `worker-mig` is exhibiting an elusive memory corruption bug. A senior engineer needs to isolate this VM from the MIG so it is NOT deleted, replaced, or health-checked by the MIG, allowing offline forensic analysis while the MIG provisions a replacement. Which command should you execute?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instance-groups managed abandon-instances",
      "MIG Isolation",
      "Forensics"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed delete-instances worker-mig --region=us-central1 --instances=worker-mig-7abc"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed abandon-instances worker-mig --region=us-central1 --instances=worker-mig-7abc"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed recreate-instances worker-mig --region=us-central1 --instances=worker-mig-7abc"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances update worker-mig-7abc --zone=us-central1-a --deletion-protection --update-labels=state=quarantined"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed abandon-instances <MIG_NAME> --instances=<INSTANCE>` removes the VM from the Managed Instance Group without deleting the underlying VM. The instance becomes a standalone VM that can be inspected without being terminated or auto-healed by the MIG.",
    "distractors": {
      "A": "delete-instances does remove the VM from the group and triggers a replacement, but it deletes the instance and its persistent disks. The corrupted machine the engineer needs for offline forensics no longer exists.",
      "C": "recreate-instances deletes the instance and rebuilds it from the instance template under the same name. The VM keeps its MIG membership and health checks, and the faulty state that had to be preserved is wiped by the rebuild.",
      "D": "Deletion protection and a label do not change group membership: the MIG still owns the instance, keeps health-checking and auto-healing it, and its own delete call on a protected instance now fails, so the replacement is never provisioned."
    },
    "gcloudCommand": "gcloud compute instance-groups managed abandon-instances worker-mig --region=us-central1 --instances=worker-mig-7abc",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/deleting-abandoning-instances-in-migs#abandoning_instances"
  },
  {
    "id": "ACE-D4-035",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Read Replica Promotion Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL Read Replica Promotion to Standalone Master Database",
    "scenario": "During a regional disaster recovery event in `us-central1`, the primary database becomes permanently unavailable. You have an existing active cross-region Read Replica `db-replica-uswest1` in `us-west1`. You need to promote this read replica to an independent, standalone primary read-write master database. Which gcloud command executes the promotion?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances promote-replica",
      "Disaster Recovery",
      "Replica Promotion"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances promote-replica db-replica-uswest1"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances update db-replica-uswest1 --role=master"
      },
      {
        "letter": "C",
        "text": "bq restore db-replica-uswest1"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restart db-replica-uswest1 --master"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql instances promote-replica <REPLICA_NAME>` stops replication from the primary and promotes the read replica into an independent, standalone read-write primary Cloud SQL instance.",
    "distractors": {
      "B": "`compute instances update` manages Compute Engine VMs, not Cloud SQL database replication topologies.",
      "C": "BigQuery (`bq`) does not manage Cloud SQL relational replica promotions.",
      "D": "`--master` is not a valid flag on `instances restart`."
    },
    "gcloudCommand": "gcloud sql instances promote-replica db-replica-uswest1",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/replication/manage-replicas#promote-replica"
  },
  {
    "id": "ACE-D4-036",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Node Pool Manual Resize Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Scaling GKE Node Pools Manually via gcloud CLI",
    "scenario": "You have an active GKE Standard node pool `worker-pool` currently running with 3 nodes in region `us-central1`. Due to an anticipated marketing promotion, you need to manually scale the node pool to 10 nodes immediately without waiting for autoscaler triggers. Which gcloud command resizes the node pool?",
    "keywords": [
      "GKE",
      "gcloud container clusters resize",
      "--node-pool",
      "--num-nodes",
      "Capacity Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud container node-pools update worker-pool --cluster=prod-cluster --region=us-central1 --num-nodes=10"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters update prod-cluster --node-pool=worker-pool --enable-autoscaling --min-nodes=3 --max-nodes=10"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed resize gke-prod-cluster-worker-pool-3f2a --size=10 --region=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters resize prod-cluster --node-pool=worker-pool --num-nodes=10 --region=us-central1"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud container clusters resize <CLUSTER_NAME> --node-pool=<POOL_NAME> --num-nodes=<COUNT>` manually scales the number of VM worker nodes in the specified GKE node pool.",
    "distractors": {
      "A": "node-pools update changes node pool configuration (autoscaling bounds, upgrade settings, node locations) and exposes no --num-nodes flag, so gcloud rejects it as an unrecognized argument; node count is changed with clusters resize.",
      "C": "Resizes the node pool's underlying managed instance group behind GKE's back; the node pool controller reconciles the MIG to the size registered for the pool, so the extra nodes are removed again.",
      "B": "Only installs autoscaling bounds. Nodes are added later, when unschedulable Pods appear, which is precisely the autoscaler trigger the scenario says cannot be waited for before the promotion."
    },
    "gcloudCommand": "gcloud container clusters resize prod-cluster --node-pool=worker-pool --num-nodes=10 --region=us-central1",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/resizing-a-cluster"
  },
  {
    "id": "ACE-D4-037",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Storage Event-Based & Temporary Holds",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud Storage Object Holds for Legal Evidence Preservation",
    "scenario": "A corporate legal department issues a litigation hold on specific contract files in Cloud Storage bucket `gs://customer-contracts-vault`. Objects with a legal hold must not be deleted or overwritten by any user until the lawsuit concludes, regardless of bucket retention policies or lifecycle rules. Which command applies a temporary legal hold to an object?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage objects update",
      "--temporary-hold",
      "Legal Hold",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets update gs://customer-contracts-vault --default-event-based-hold"
      },
      {
        "letter": "B",
        "text": "gcloud storage objects update gs://customer-contracts-vault/contract-2026-xyz.pdf --temporary-hold"
      },
      {
        "letter": "C",
        "text": "gcloud storage objects update gs://customer-contracts-vault/*.pdf --custom-time=2027-06-01T00:00:00Z"
      },
      {
        "letter": "D",
        "text": "gcloud storage objects update gs://customer-contracts-vault/contract-2026-xyz.pdf --storage-class=ARCHIVE"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage supports Temporary Holds (`--temporary-hold`) and Event-Based Holds. Placing a temporary hold on an object prevents it from being deleted or overwritten until an administrator explicitly removes the hold.",
    "distractors": {
      "A": "The default hold is a bucket setting that is stamped onto objects as they are created. The contract files under litigation already exist, so they receive no hold at all and stay deletable while the suit runs.",
      "C": "Custom time is only a user-defined timestamp in object metadata, used as a condition by lifecycle rules. It blocks no operation: any principal with storage.objects.delete can still delete or overwrite the contracts.",
      "D": "Changing the storage class rewrites the object and attaches a 365-day minimum storage duration charge, but Archive objects are deleted and overwritten exactly like Standard ones. Cost changes, deletability does not."
    },
    "gcloudCommand": "gcloud storage objects update gs://customer-contracts-vault/contract-2026-xyz.pdf --temporary-hold",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/holds-and-retention#holds"
  },
  {
    "id": "ACE-D4-038",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "App Engine Version Lifecycle & Cost Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Stopping and Starting App Engine Versions to Reduce Inactive Compute Costs",
    "scenario": "In a development project, multiple historical versions of an App Engine Flexible service `staging-api` are currently in the `SERVING` state, continuously consuming Compute Engine VM resources and incurring costs. You need to stop version `v1-beta` so it stops consuming compute resources while keeping its code available for future start. Which command stops the version?",
    "keywords": [
      "App Engine",
      "gcloud app versions stop",
      "Cost Reduction",
      "FinOps",
      "Lifecycle Management"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud app versions stop v1-beta --service=staging-api"
      },
      {
        "letter": "B",
        "text": "gcloud app versions delete v1-beta --service=staging-api"
      },
      {
        "letter": "C",
        "text": "gcloud app services set-traffic staging-api --splits=v2=1"
      },
      {
        "letter": "D",
        "text": "gcloud app versions stop v1-beta --service=default"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud app versions stop <VERSION> --service=<SERVICE>` stops an App Engine version from serving requests and releases underlying Compute Engine VM instances (for Flexible environment), stopping compute charges while preserving the version configuration.",
    "distractors": {
      "B": "delete does release the VM instances, but it removes the version and its deployed code permanently, so v1-beta can never be started again. The requirement is to keep the code available for a future start.",
      "C": "set-traffic only re-routes incoming requests to another version. v1-beta stays in the SERVING state with its Flexible VM instances provisioned, so the Compute Engine charges the scenario is trying to eliminate keep accruing.",
      "D": "Right command, wrong service: version IDs are scoped per service and v1-beta belongs to staging-api, so this targets the default service and fails with a version-not-found error."
    },
    "gcloudCommand": "gcloud app versions stop v1-beta --service=staging-api",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/managing-versions-and-services"
  },
  {
    "id": "ACE-D4-039",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine MIG Rolling Restart Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Instance Group Rolling Action Restarts",
    "scenario": "You have modified an application configuration file inside a shared NFS mount accessed by a Managed Instance Group `worker-mig` in `us-central1`. To force all worker VMs to reload the configuration, you need to perform a rolling reboot of all instances in the group without taking the entire group offline at once. Which command executes the rolling restart?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instance-groups managed rolling-action restart",
      "Rolling Reboot",
      "Zero Downtime"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed rolling-action restart worker-mig --zone=us-central1-a --max-unavailable=1"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed recreate-instances worker-mig --region=us-central1 --instances=worker-1,worker-2"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed set-autohealing worker-mig --region=us-central1 --health-check=app-hc --initial-delay=300"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed rolling-action restart worker-mig --region=us-central1 --max-unavailable=1"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute instance-groups managed rolling-action restart <MIG_NAME> --max-unavailable=<N>` performs a controlled, rolling reboot of all member instances in the MIG, restarting VMs in small batches while maintaining minimum required serving capacity.",
    "distractors": {
      "A": "worker-mig is a regional MIG in us-central1; --zone scopes the lookup to a zonal MIG of that name in us-central1-a, which does not exist, so the command fails with a not-found error and nothing is restarted.",
      "C": "Autohealing only recreates a VM once it fails the health check. Workers serving traffic with a stale configuration are perfectly healthy, so nothing is ever restarted: autohealing reacts to failure, it does not push a change.",
      "B": "recreate-instances rebuilds only the instances you name and ignores the group's update policy, so there is no --max-unavailable pacing and the listed VMs go down together; it also deletes and recreates them from the template instead of rebooting them."
    },
    "gcloudCommand": "gcloud compute instance-groups managed rolling-action restart worker-mig --region=us-central1 --max-unavailable=1",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#restart"
  },
  {
    "id": "ACE-D4-040",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Node Conditions & Troubleshooting",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating GKE Node Conditions and Out-of-Disk Eviction Events",
    "scenario": "A worker node in your GKE cluster is rejecting new Pod scheduling with condition `DiskPressure: True`. You need to inspect the full node condition details, allocatable resources, and recent system events on node `gke-prod-pool-1-node9`. Which command provides this detailed diagnostic output?",
    "keywords": [
      "GKE",
      "kubectl describe node",
      "DiskPressure",
      "Node Conditions",
      "Diagnostics"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl delete node gke-prod-pool-1-node9"
      },
      {
        "letter": "B",
        "text": "kubectl describe node gke-prod-pool-1-node9"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks describe gke-prod-pool-1-node9"
      },
      {
        "letter": "D",
        "text": "bq show nodes:gke-prod-pool-1-node9"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl describe node <NODE_NAME>` outputs complete Kubernetes node metadata, including Node Conditions (`Ready`, `MemoryPressure`, `DiskPressure`, `PIDPressure`), capacity vs allocatable resources, and system event messages (e.g. image garbage collection failures).",
    "distractors": {
      "D": "BigQuery does not store real-time Kubernetes node conditions.",
      "C": "`compute disks describe` shows raw GCP persistent disk parameters, but does not show Kubernetes kubelet conditions or pod pressure states.",
      "A": "Deleting the node abruptly evicts all workloads and does not diagnose why disk pressure occurred."
    },
    "gcloudCommand": "kubectl describe node gke-prod-pool-1-node9",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/architecture/nodes/#condition"
  },
  {
    "id": "ACE-D4-041",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Monitoring Dashboard Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Monitoring Custom Dashboards via JSON/MQL via CLI",
    "scenario": "An operations team has designed a standardized JSON dashboard template `microservices-dashboard.json` featuring Monitoring Query Language (MQL) charts for CPU, memory, request latency, and HTTP 5xx error rates. You need to deploy this dashboard programmatically into project `corp-monitoring-prod`. Which gcloud command deploys the dashboard?",
    "keywords": [
      "Cloud Monitoring",
      "gcloud monitoring dashboards create",
      "MQL",
      "Dashboards as Code",
      "SRE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud monitoring dashboards update 7418503927 --config-from-file=microservices-dashboard.json"
      },
      {
        "letter": "B",
        "text": "gcloud monitoring dashboards create --config-from-file=microservices-dashboard.json"
      },
      {
        "letter": "C",
        "text": "gcloud alpha monitoring policies create --policy-from-file=microservices-dashboard.json"
      },
      {
        "letter": "D",
        "text": "gcloud logging metrics create mql-charts --config-from-file=microservices-dashboard.json"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud monitoring dashboards create --config-from-file=<FILE.json>` imports declarative JSON dashboard templates into Cloud Monitoring, enabling Dashboards-as-Code practices across projects.",
    "distractors": {
      "D": "logging metrics create does take --config-from-file, but it registers a log-based metric; the dashboard JSON has no filter or valueExtractor field and no chart is ever rendered in Cloud Monitoring.",
      "C": "Creates an alerting policy, not a dashboard: the AlertPolicy API rejects the file because a dashboard document carries mosaicLayout widgets instead of the required conditions and notification channels.",
      "A": "update patches a dashboard identified by its existing numeric ID; the dashboard has never been created in corp-monitoring-prod, so the API answers NOT_FOUND and the template is never imported."
    },
    "gcloudCommand": "gcloud monitoring dashboards create --config-from-file=microservices-dashboard.json",
    "architectureComponents": [
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/monitoring/dashboards/api-dashboard"
  },
  {
    "id": "ACE-D4-042",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE OOMKilled Diagnostics & Resource Limits",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating GKE Out-of-Memory (OOMKilled) Container Terminations",
    "scenario": "An image processing container in GKE namespace `prod` periodically exits with exit code `137` and status reason `OOMKilled`. You need to confirm the container's memory limit vs actual usage, and identify why the kernel killer terminated the container. Which kubectl command shows the termination reason and exit code?",
    "keywords": [
      "GKE",
      "kubectl describe pod",
      "OOMKilled",
      "Exit Code 137",
      "Memory Limit"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl logs [POD_NAME] --namespace=prod --previous"
      },
      {
        "letter": "B",
        "text": "kubectl top pod [POD_NAME] --namespace=prod"
      },
      {
        "letter": "C",
        "text": "kubectl describe pod [POD_NAME] --namespace=prod"
      },
      {
        "letter": "D",
        "text": "kubectl get events -n prod --sort-by=.lastTimestamp"
      }
    ],
    "correct": "C",
    "explanation": "`kubectl describe pod <POD_NAME>` inspects container state details. Under the `Last State: Terminated` section, it explicitly shows `Reason: OOMKilled` and `Exit Code: 137`, indicating that the container exceeded its configured `resources.limits.memory` and was terminated by the Linux cgroup killer.",
    "distractors": {
      "D": "Events are retained about one hour by default, so a periodic OOM kill that happened earlier is gone, and the event text carries no exit code or resources.limits.memory value.",
      "B": "Reports live memory usage from the metrics server for the container that already restarted; it shows neither the configured limit nor the termination reason of the previous instance.",
      "A": "Prints the stdout of the killed container, but the cgroup OOM kill is performed by the kernel and writes nothing to the application log, so exit code 137 and the memory limit never appear."
    },
    "gcloudCommand": "kubectl describe pod image-processor-78dfb --namespace=prod",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/blog/products/containers-kubernetes/understanding-and-troubleshooting-oom-errors-in-kubernetes"
  },
  {
    "id": "ACE-D4-043",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Disk Snapshot Restoration",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restoring a Compute Engine Persistent Disk from a Snapshot via CLI",
    "scenario": "An analytics database disk `analytics-data-disk` in zone `us-central1-a` was corrupted. You have a verified healthy snapshot `snapshot-analytics-clean`. You need to create a new 500 GB SSD persistent disk named `analytics-data-disk-restored` in `us-central1-a` populated with data from this snapshot. Which command executes the disk restoration?",
    "keywords": [
      "Compute Engine",
      "gcloud compute disks create",
      "--source-snapshot",
      "Disaster Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute disks create analytics-data-disk-restored --zone=us-central1-a --source-snapshot=snapshot-analytics-clean --type=pd-ssd"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks create analytics-data-disk-restored --zone=us-central1-a --source-disk=analytics-data-disk --type=pd-ssd"
      },
      {
        "letter": "C",
        "text": "gcloud compute images create analytics-data-disk-restored --source-snapshot=snapshot-analytics-clean --storage-location=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks create analytics-data-disk-restored --zone=us-central1-a --size=500GB --type=pd-ssd --physical-block-size=4096"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute disks create <NEW_DISK_NAME> --source-snapshot=<SNAPSHOT_NAME> --zone=<ZONE>` restores an incremental snapshot into a brand-new persistent disk volume with identical data state.",
    "distractors": {
      "D": "Size, type and zone are right but no data source is given, so the command returns a blank, unformatted 500 GB volume. The snapshot is never referenced and none of the analytics data is recovered.",
      "B": "--source-disk clones the live disk, and the live disk is the corrupted volume being recovered from. The clone reproduces the corruption byte for byte; the restore has to read from the verified snapshot with --source-snapshot.",
      "C": "This creates a custom image, not a persistent disk. An image is a global resource that cannot be attached to an instance; it would still have to be materialised with gcloud compute disks create --image, so the restoration is not done."
    },
    "gcloudCommand": "gcloud compute disks create analytics-data-disk-restored --zone=us-central1-a --source-snapshot=snapshot-analytics-clean --type=pd-ssd",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/restore-and-create-snapshots#restore"
  },
  {
    "id": "ACE-D4-044",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Storage Storage Class Update Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud Storage Storage Class Transitions for Existing Objects via CLI",
    "scenario": "You have an existing Cloud Storage bucket `gs://corp-legal-archives` containing 5 TB of historical contracts currently stored in the `STANDARD` storage class. To reduce ongoing monthly storage costs, you need to transition all existing objects in this bucket to the `ARCHIVE` storage class immediately. Which command performs this bulk storage class update?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage objects update",
      "--storage-class=ARCHIVE",
      "Bulk Migration",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets update gs://corp-legal-archives --default-storage-class=ARCHIVE"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://corp-legal-archives --lifecycle-file=archive.json"
      },
      {
        "letter": "C",
        "text": "gcloud storage objects update gs://corp-legal-archives/** --storage-class=ARCHIVE"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://corp-legal-archives --enable-autoclass"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage objects update gs://<BUCKET>/** --storage-class=<CLASS>` updates the storage class of existing objects in-place without re-uploading or rewriting data over the network.",
    "distractors": {
      "B": "Lifecycle rules are evaluated asynchronously, roughly once every 24 hours, and act on conditions such as object age, so the transition is neither immediate nor applied to objects that do not yet match the rule.",
      "A": "The bucket default applies only to objects written after the change. The 5 TB already stored keeps its STANDARD class and its STANDARD price, so the existing bill does not move.",
      "D": "Autoclass reacts to access patterns over time: an untouched object reaches Nearline after 30 days and Archive only after 365, and it adds a per-object management fee. Nothing changes class today."
    },
    "gcloudCommand": "gcloud storage objects update gs://corp-legal-archives/** --storage-class=ARCHIVE",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/changing-storage-classes#objects"
  },
  {
    "id": "ACE-D4-045",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Network Intelligence Center Network Topology",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating Network Latency and Packet Loss with Network Topology in Network Intelligence Center",
    "scenario": "Network operations engineers report that users in Asia are experiencing high latency and intermittent packet retransmissions when communicating with backend services in `us-central1`. Which Google Cloud visualization and diagnostic tool displays real-time inter-region traffic throughput, packet loss percentage, and performance overlays across GCP infrastructure?",
    "keywords": [
      "Network Intelligence Center",
      "Network Topology",
      "Packet Loss",
      "Inter-Region Latency",
      "Network Performance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Network Intelligence Center: Network Topology."
      },
      {
        "letter": "B",
        "text": "Network Intelligence Center: Firewall Insights."
      },
      {
        "letter": "C",
        "text": "Network Intelligence Center: Connectivity Tests."
      },
      {
        "letter": "D",
        "text": "Cloud Trace: distributed request latency view."
      }
    ],
    "correct": "A",
    "explanation": "Network Topology in Network Intelligence Center provides real-time visualization of your global virtual network infrastructure, overlaying live network performance metrics (traffic volume, latency, packet loss percentage) across regions, zones, VPCs, and hybrid connections.",
    "distractors": {
      "B": "Firewall Insights reports on firewall rule usage: shadowed rules, rules with no hits, overly permissive ranges. It measures policy hygiene, not throughput, latency or packet loss between regions.",
      "C": "Connectivity Tests runs a static configuration analysis of one source and destination pair against routes, firewall rules and NAT. It answers whether a packet can reach the target, not how much loss the live path is showing.",
      "D": "Cloud Trace measures application request latency from instrumented spans inside services. It reports no network throughput or packet loss, and it only sees the traffic the application itself traces."
    },
    "gcloudCommand": "gcloud services enable networkmanagement.googleapis.com",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Network Intelligence Center"
    ],
    "officialDocUrl": "https://cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview"
  },
  {
    "id": "ACE-D4-046",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Run Concurrency & Max Scale Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud Run Revision Concurrency and Max Instances Configuration",
    "scenario": "Your microservice deployed on Cloud Run experiences latency spikes under heavy concurrent traffic because each container instance is only handling 1 request at a time. The application is stateless and tested to handle up to 80 concurrent HTTP requests per instance without performance degradation. Which command updates the concurrency setting on the Cloud Run service?",
    "keywords": [
      "Cloud Run",
      "gcloud run services update",
      "--concurrency",
      "Scale Tuning",
      "Performance Optimization"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud run services update order-service --region=us-central1 --max-instances=80"
      },
      {
        "letter": "B",
        "text": "gcloud run services update order-service --region=us-central1 --cpu=4 --memory=4Gi"
      },
      {
        "letter": "C",
        "text": "gcloud run services update order-service --region=us-central1 --no-cpu-throttling"
      },
      {
        "letter": "D",
        "text": "gcloud run services update order-service --region=us-central1 --concurrency=80"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud run services update <SERVICE> --concurrency=<COUNT>` configures container concurrency (number of maximum simultaneous requests routed to a single container instance). Increasing concurrency from 1 to 80 optimizes container utilization, reduces cold starts, and lowers cloud spend.",
    "distractors": {
      "B": "A larger container does not lift the per-instance request limit: while concurrency is 1 the extra vCPU and memory sit idle and the second request still waits for another instance to start.",
      "C": "That keeps CPU allocated outside request handling, which changes billing and background work but not how many simultaneous requests a single container instance is allowed to serve.",
      "A": "This raises the ceiling on how many instances may exist, not how many requests one instance accepts. With concurrency still at 1, the same traffic spins up 80 containers and the latency spikes simply cost more."
    },
    "gcloudCommand": "gcloud run services update order-service --region=us-central1 --concurrency=80",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/concurrency"
  },
  {
    "id": "ACE-D4-047",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Build Diagnostics & Log Inspection",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating Failed Cloud Build Pipelines and Build Step Logs",
    "scenario": "An automated Git commit triggered a Cloud Build execution `bfa72c3d-1234-5678`, but the build status reported `FAILURE` at Step 2 (`docker build`). You need to stream the full standard error logs from that specific build execution directly to your local terminal. Which gcloud command displays these logs?",
    "keywords": [
      "Cloud Build",
      "gcloud builds log",
      "Build Diagnostics",
      "CI/CD Troubleshooting"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud builds log bfa72c3d-1234-5678"
      },
      {
        "letter": "B",
        "text": "gsutil cat gs://cloud-build-logs/bfa72c3d-1234-5678.txt"
      },
      {
        "letter": "C",
        "text": "kubectl logs bfa72c3d-1234-5678"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances get-serial-port-output bfa72c3d-1234-5678"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud builds log <BUILD_ID>` streams the complete stdout/stderr logs of all executed build steps directly from Cloud Build, allowing developers to inspect exact compiler errors and failed step commands.",
    "distractors": {
      "C": "`kubectl logs` queries Kubernetes pods, not managed Google Cloud Build execution jobs.",
      "B": "Locating raw log files manually in GCS requires guessing log bucket naming conventions and paths.",
      "D": "`get-serial-port-output` is for Compute Engine VM kernel logs, not serverless Cloud Build pipelines."
    },
    "gcloudCommand": "gcloud builds log bfa72c3d-1234-5678 --stream",
    "architectureComponents": [
      "Cloud Build"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/view-build-results"
  },
  {
    "id": "ACE-D4-048",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Maintenance Window Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL Maintenance Windows and Reschedule Windows",
    "scenario": "A company has strict maintenance blackout windows on weekdays. For Cloud SQL instance `prod-db-1`, automated Google infrastructure and engine maintenance must ONLY occur on Sunday mornings between 02:00 UTC and 03:00 UTC, with a 1-hour maintenance buffer. Which command configures this maintenance window?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances patch",
      "--maintenance-window-day",
      "--maintenance-window-hour",
      "SRE Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-hour=14"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-release-channel=week5 --maintenance-window-hour=2"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-any"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-hour=2"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --maintenance-window-day=<DAY> --maintenance-window-hour=<UTC_HOUR>` restricts automated platform maintenance and security updates to the specified day and hour window, preventing disruptions during peak business hours.",
    "distractors": {
      "A": "Right flags, wrong value: --maintenance-window-hour takes the UTC hour the one-hour window starts at, so 14 schedules maintenance at 14:00 UTC on Sunday, well outside the mandated 02:00-03:00 UTC slot the compliance rule allows.",
      "B": "--maintenance-release-channel only decides how early this instance gets an update relative to other instances (week5 is the late track); it schedules nothing. With no --maintenance-window-day, the hour applies to any day, weekdays included.",
      "C": "--maintenance-window-any is the opposite of what is needed: its documented effect is to remove the user-specified maintenance window, leaving the instance eligible for maintenance at any day and hour, and it conflicts with the SUN value set alongside it."
    },
    "gcloudCommand": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-hour=2",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/maintenance"
  },
  {
    "id": "ACE-D4-049",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Storage Bucket Lock Operations",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud Storage Storage Bucket Lock to Prevent Policy Modification",
    "scenario": "You have configured a 7-year retention policy on Cloud Storage compliance bucket `gs://sec-archive-vault`. To satisfy SEC Rule 17a-4 compliance, you must lock the retention policy permanently so that NO ONE (including project owners and Google Cloud super admins) can reduce the retention period or remove the policy. Which command locks the policy?",
    "keywords": [
      "Cloud Storage",
      "Bucket Lock",
      "gcloud storage buckets update",
      "--lock-retention-policy",
      "SEC 17a-4 Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets update gs://sec-archive-vault --lock-retention-policy"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://sec-archive-vault --retention-period=P7Y"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://sec-archive-vault --default-event-based-hold"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://sec-archive-vault --soft-delete-duration=90d"
      }
    ],
    "correct": "A",
    "explanation": "Locking a retention policy (`--lock-retention-policy`) permanently cements the bucket's retention period. Once locked, the policy cannot be deleted, removed, or reduced in duration by any user or IAM role, guaranteeing immutable WORM (Write Once, Read Many) compliance.",
    "distractors": {
      "B": "This re-declares the 7-year period but leaves the policy unlocked, which is the state the bucket is already in. Any principal holding storage.buckets.update can still shorten it to one day or clear it, so nothing is immutable.",
      "D": "Soft delete only keeps already-deleted objects recoverable for a retention window (7 to 90 days). It does not stop the deletion, does not stop shortening the retention period, and expires long before the 7-year SEC window.",
      "C": "A default event-based hold is applied per object and can be released by anyone with storage.objects.update, and it applies only to objects created after the flag is set. The retention policy itself remains editable."
    },
    "gcloudCommand": "gcloud storage buckets update gs://sec-archive-vault --lock-retention-policy",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock#lock-bucket"
  },
  {
    "id": "ACE-D4-050",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Network Throughput & Egress Drops",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating Network Interface Drops and Throughput Limits on Compute Engine",
    "scenario": "A high-throughput file ingestion VM running on an `e2-standard-4` machine type (which has a 10 Gbps network egress cap) is experiencing dropped network packets and slow transfer rates when sending data to external endpoints. What Cloud Monitoring metric reveals whether the VM is hitting its maximum egress bandwidth bandwidth limits?",
    "keywords": [
      "Compute Engine",
      "Cloud Monitoring",
      "instance/network/sent_bytes_count",
      "Network Caps",
      "Egress Limits"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "compute.googleapis.com/instance/network/received_bytes_count (and instance/network/received_packets_count)."
      },
      {
        "letter": "B",
        "text": "compute.googleapis.com/instance/network/sent_bytes_count (and instance/network/dropped_packets_count)."
      },
      {
        "letter": "C",
        "text": "compute.googleapis.com/instance/disk/write_bytes_count (and instance/disk/throttled_write_bytes_count)."
      },
      {
        "letter": "D",
        "text": "loadbalancing.googleapis.com/https/request_bytes_count (and https/total_latencies, https/backend_request_count)."
      }
    ],
    "correct": "B",
    "explanation": "Compute Engine network bandwidth is capped per VM based on vCPU count. Monitoring `compute.googleapis.com/instance/network/sent_bytes_count` and `instance/network/dropped_packets_count` identifies egress bandwidth throttling when throughput hits the machine type's network limits.",
    "distractors": {
      "A": "The adjacent metric in the wrong direction: these count inbound traffic delivered to the VM, while the per-VM cap being hit and the drops under investigation are on the egress side of the same interface.",
      "D": "Only written for traffic that transits a Cloud Load Balancer front end; this VM sends directly to external endpoints, so no time series exists for it and the chart stays empty.",
      "C": "Measures the persistent disk path, where throughput limits come from disk size and machine type. It reveals storage throttling, not the network egress cap, and stays flat while packets are dropped on the wire."
    },
    "gcloudCommand": "gcloud monitoring metrics-scopes list",
    "architectureComponents": [
      "Compute Engine",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/network-bandwidth"
  },
  {
    "id": "ACE-D4-051",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE Cluster Autoscaler Profiles & Cost Optimization",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing GKE Cluster Autoscaler Profile: Balanced vs Optimize-Utilization",
    "scenario": "You manage a batch processing GKE cluster where workloads scale up and down frequently. During scale-downs, you want the GKE Cluster Autoscaler to aggressively pack Pods onto fewer nodes and rapidly terminate underutilized worker nodes to minimize compute spend, accepting occasional pod evictions. Which autoscaling profile should you configure on the cluster?",
    "keywords": [
      "GKE",
      "Cluster Autoscaler",
      "optimize-utilization",
      "Autoscaler Profile",
      "Cost Optimization"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set the autoscaling profile to optimize-utilization using gcloud container clusters update my-cluster --autoscaling-profile=optimize-utilization."
      },
      {
        "letter": "B",
        "text": "Keep the default profile explicitly with gcloud container clusters update my-cluster --autoscaling-profile=balanced for predictable scale-downs."
      },
      {
        "letter": "C",
        "text": "Enable node auto-provisioning with gcloud container clusters update my-cluster --enable-autoprovisioning --min-cpu=1 --max-cpu=64 --max-memory=256."
      },
      {
        "letter": "D",
        "text": "Define a PodDisruptionBudget with minAvailable: 1 per batch job and shrink the pool with gcloud container clusters resize my-cluster --num-nodes=3."
      }
    ],
    "correct": "A",
    "explanation": "GKE Cluster Autoscaler supports two profiles: `balanced` (default, balances scale-down speed with avoiding unnecessary evictions) and `optimize-utilization` (aggressively prioritizes bin packing and scale-down speed, evicting pods rapidly to shut down idle nodes and maximize cost savings).",
    "distractors": {
      "B": "balanced is the default profile and the conservative one: it protects running pods by waiting longer before removing underutilised nodes. Choosing it keeps idle capacity alive, which is the spend the team is trying to eliminate.",
      "D": "A manual resize is a one-off value the autoscaler overrides on the next scale-up, and the PodDisruptionBudget works against the goal: it blocks the autoscaler from evicting pods, so underutilised nodes cannot be drained and deleted at all.",
      "C": "Node auto-provisioning decides which node pools and machine shapes to create for pending pods. It does not change how aggressively the cluster autoscaler bin-packs pods or how quickly it drains underutilised nodes; that behaviour is set by the autoscaling profile."
    },
    "gcloudCommand": "gcloud container clusters update my-cluster --region=us-central1 --autoscaling-profile=optimize-utilization",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles"
  },
  {
    "id": "ACE-D4-052",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL High Availability Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL High Availability On-Demand Failover Drills via CLI",
    "scenario": "You are testing the operational disaster recovery readiness of a regional High Availability Cloud SQL PostgreSQL instance `prod-pg-ha`. You need to manually trigger an immediate failover to verify that client applications reconnect automatically to the standby replica. Which gcloud command triggers the failover?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances failover",
      "HA Testing",
      "Disaster Recovery Drill"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances delete prod-pg-ha-vm"
      },
      {
        "letter": "B",
        "text": "bq restore prod-pg-ha"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restart prod-pg-ha"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances failover prod-pg-ha"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances failover <INSTANCE_NAME>` initiates an immediate manual failover on a Regional High Availability Cloud SQL instance, switching primary serving duties to the standby replica zone.",
    "distractors": {
      "B": "BigQuery (`bq`) does not manage Cloud SQL relational database operations.",
      "C": "`instances restart` restarts the active primary instance without initiating a zone failover.",
      "A": "Underlying Cloud SQL VMs are managed by Google and cannot be deleted directly via `compute instances delete`."
    },
    "gcloudCommand": "gcloud sql instances failover prod-pg-ha",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/high-availability#testing"
  },
  {
    "id": "ACE-D4-053",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "BigQuery Table Snapshot Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing BigQuery Table Snapshots for Instant Historical Point-in-Time Backups",
    "scenario": "Before running a massive data transformation pipeline that updates 50 million rows in table `warehouse.customer_master`, you need to take an instant, zero-copy point-in-time snapshot named `warehouse.customer_master_snapshot_20260820` that preserves the exact state of the table before modification. Which `bq` command creates this snapshot?",
    "keywords": [
      "BigQuery",
      "Table Snapshot",
      "bq cp --clone / snapshot",
      "Point-in-Time Backup",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "bq cp warehouse.customer_master warehouse.customer_master_snapshot_20260820"
      },
      {
        "letter": "B",
        "text": "bq cp --snapshot warehouse.customer_master warehouse.customer_master_snapshot_20260820"
      },
      {
        "letter": "C",
        "text": "bq extract warehouse.customer_master gs://backups/customer_master_20260820-*.avro"
      },
      {
        "letter": "D",
        "text": "bq update --time_travel_hours=168 --description='pre-transform state' warehouse"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery table snapshots (`bq cp --snapshot <SOURCE_TABLE> <SNAPSHOT_TABLE>`) create instant, zero-byte incremental snapshots of a table. Storage costs only accrue for data rows that are subsequently modified or deleted in the base table.",
    "distractors": {
      "A": "Without --snapshot this is an ordinary table copy: it duplicates all 50 million rows into separately billed storage and takes a copy job to run, instead of an instant zero-byte snapshot.",
      "C": "Exports the rows to Cloud Storage files: the job reads the whole table, is neither instant nor zero-copy, and leaves no BigQuery table that can be queried or restored from in place.",
      "D": "Widens the dataset time travel window to its 7-day maximum, which only enables FOR SYSTEM_TIME AS OF queries for a week; it creates no named snapshot preserving the pre-transformation state."
    },
    "gcloudCommand": "bq cp --snapshot warehouse.customer_master warehouse.customer_master_snapshot_20260820",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/table-snapshots-create"
  },
  {
    "id": "ACE-D4-054",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Metadata Management Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Guest OS Attributes and Custom Metadata Changes",
    "scenario": "You have an existing virtual machine `api-gateway-1` in zone `us-central1-b`. You need to add a new metadata key-value pair `environment=production` and `release_version=3.2` to the VM instance without restarting or stopping the VM. Which command applies these metadata changes?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instances add-metadata",
      "Instance Metadata",
      "Live Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute project-info add-metadata --metadata=environment=production,release_version=3.2 --project=corp-prod"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances add-labels api-gateway-1 --zone=us-central1-b --labels=environment=production,release_version=3-2"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances add-metadata api-gateway-1 --zone=us-central1-b --metadata-from-file=startup-script=./env.sh"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances add-metadata api-gateway-1 --zone=us-central1-b --metadata=environment=production,release_version=3.2"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute instances add-metadata <VM_NAME> --metadata=<KEY=VALUE,...>` updates the instance's metadata dictionary online without stopping or rebooting the virtual machine.",
    "distractors": {
      "A": "Project-level metadata is inherited by every VM in corp-prod, not just api-gateway-1, and instance metadata overrides it. The requirement is a per-instance value, so this both misses the target and leaks the keys to unrelated VMs.",
      "B": "Labels are API-side key/value tags used for billing breakdowns and resource filtering. They are never served by the metadata endpoint at 169.254.169.254, so the guest cannot read them, and label values reject the dot in 3.2.",
      "C": "--metadata-from-file writes the key given before the equals sign, here startup-script, from the contents of env.sh. The environment and release_version keys are never created, and a startup script only executes on the next boot."
    },
    "gcloudCommand": "gcloud compute instances add-metadata api-gateway-1 --zone=us-central1-b --metadata=environment=production,release_version=3.2",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/metadata/setting-custom-metadata#set_instance_metadata"
  },
  {
    "id": "ACE-D4-055",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud NAT Port Exhaustion Troubleshooting",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating Cloud NAT Translation Errors and Port Exhaustion in Cloud Logging",
    "scenario": "Backend Compute Engine instances on private subnets are encountering intermittent connection timeouts when opening outbound connections to external SaaS REST APIs. You suspect the Cloud NAT gateway has exhausted its allocated NAT IP source ports. Which Cloud Logging filter identifies Cloud NAT port allocation drops?",
    "keywords": [
      "Cloud NAT",
      "Port Exhaustion",
      "Cloud Logging Filter",
      "Network Troubleshooting",
      "DROPPED"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "resource.type=\"nat_gateway\" AND jsonPayload.allocation_status=\"DROPPED\""
      },
      {
        "letter": "B",
        "text": "resource.type=\"nat_gateway\" AND jsonPayload.allocation_status=\"OK\""
      },
      {
        "letter": "C",
        "text": "resource.type=\"gce_subnetwork\" AND jsonPayload.disposition=\"DENIED\""
      },
      {
        "letter": "D",
        "text": "resource.type=\"gce_instance\" AND jsonPayload.allocation_status=\"DROPPED\""
      }
    ],
    "correct": "A",
    "explanation": "When Cloud NAT logging is enabled, dropped outbound connections caused by source port exhaustion are logged under `resource.type=\"nat_gateway\"` with `jsonPayload.allocation_status=\"DROPPED\"`.",
    "distractors": {
      "B": "OK is the status written when Cloud NAT did find a free source port and translated the connection. This filter returns precisely the successful translations and excludes every port-exhaustion drop being investigated.",
      "D": "The predicate is right but the monitored resource is wrong: Cloud NAT writes its entries against the nat_gateway resource on the Cloud Router, never against gce_instance, so this filter matches no log entries at all.",
      "C": "jsonPayload.disposition is the field of VPC firewall rules logging, whose entries are written against gce_subnetwork. It shows packets a firewall rule blocked, not connections Cloud NAT could not translate for lack of ports."
    },
    "gcloudCommand": "gcloud logging read 'resource.type=\"nat_gateway\" AND jsonPayload.allocation_status=\"DROPPED\"' --limit=20",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud NAT",
      "Cloud Logging"
    ],
    "officialDocUrl": "https://cloud.google.com/nat/docs/troubleshooting#dropped-connections"
  },
  {
    "id": "ACE-D4-056",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Storage KMS Encryption Key Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud Storage Storage Bucket Default Encryption Key Rotations",
    "scenario": "A security team has created a new Cloud KMS encryption key version `key-v2` in key ring `vault-ring`. You need to configure Cloud Storage bucket `gs://finance-records-vault` to encrypt all future uploaded objects using this specific Cloud KMS key by default. Which command sets the default KMS key?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage buckets update",
      "--default-encryption-key",
      "Cloud KMS",
      "Encryption Rotation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage objects update gs://finance-records-vault/** --encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://finance-records-vault --default-encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://finance-records-vault --default-encryption-key=projects/my-proj/locations/global/keyRings/vault-ring/cryptoKeys/key-v2"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets create gs://finance-records-vault --location=us-central1 --default-encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud storage buckets update <BUCKET> --default-encryption-key=<KMS_KEY_RESOURCE_ID>` sets Customer-Managed Encryption Keys (CMEK) as the default encryption mechanism for all future objects uploaded to the bucket.",
    "distractors": {
      "A": "Rewrites the objects that are already in the bucket under the CMEK, but never touches bucket metadata: encryption.defaultKmsKeyName stays empty, so every future upload is encrypted with a Google-managed key again.",
      "C": "Right command, wrong key resource: Cloud KMS key rings are location-scoped and vault-ring was created in us-central1, so the locations/global path names a key that does not exist and the update fails with NOT_FOUND.",
      "D": "Assumes the default CMEK can only be chosen when the bucket is created. gs://finance-records-vault already exists, so the create call fails with HTTP 409; default encryption is a mutable bucket property set with buckets update."
    },
    "gcloudCommand": "gcloud storage buckets update gs://finance-records-vault --default-encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud KMS"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/encryption/customer-managed-keys"
  },
  {
    "id": "ACE-D4-057",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "GKE PersistentVolumeClaim Diagnostics",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Investigating GKE Persistent Volume Claim Binding Failures (Pending State)",
    "scenario": "A stateful database Pod in GKE namespace `prod` is stuck in the `Pending` state. The Pod events report `0/3 nodes are available: persistentvolumeclaim 'db-data-pvc' not found (or waiting for first consumer)`. You need to inspect the status, requested storage class, and binding events of `db-data-pvc`. Which command provides this information?",
    "keywords": [
      "GKE",
      "kubectl describe pvc",
      "PersistentVolumeClaim",
      "Pending State",
      "Storage Diagnostics"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl describe pvc db-data-pvc --namespace=prod"
      },
      {
        "letter": "B",
        "text": "kubectl get pvc db-data-pvc --namespace=prod -o wide"
      },
      {
        "letter": "C",
        "text": "kubectl describe storageclass standard-rwo premium-rwo"
      },
      {
        "letter": "D",
        "text": "kubectl describe pod db-pod-0 --namespace=prod"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl describe pvc <PVC_NAME>` reveals the detailed lifecycle status of a PersistentVolumeClaim, including dynamic provisioner error messages (e.g., quota exceeded, unsupported zone, volumeBindingMode: WaitForFirstConsumer).",
    "distractors": {
      "C": "This dumps the provisioner and parameters of the GKE storage classes, which is cluster-wide configuration shared by every claim; it reports nothing about this PVC's binding state or the events recorded against it.",
      "B": "get prints status, capacity and storage class on one line but no event stream, so the provisioner message explaining why the claim is still unbound is exactly what is missing.",
      "D": "The pod's events only repeat the scheduling failure already visible. The requested storage class and the binding events belong to the PersistentVolumeClaim object, not to the pod."
    },
    "gcloudCommand": "kubectl describe pvc db-data-pvc --namespace=prod",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"
  },
  {
    "id": "ACE-D4-058",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud SQL Maintenance Reschedule Operations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL High-Availability Maintenance Rescheduling",
    "scenario": "Google Cloud scheduled an automated maintenance update for your production Cloud SQL MySQL instance during an unexpected peak sales window next Tuesday at 03:00 UTC. You need to reschedule this upcoming maintenance event to defer it by 1 week. Which gcloud command reschedules the maintenance?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql maintenance-events reschedule",
      "Maintenance Deferral",
      "Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql maintenance-events reschedule prod-mysql-instance --reschedule-type=SPECIFIC_TIME --schedule-time=2026-09-01T03:00:00Z"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch prod-mysql-instance --maintenance-window-day=SUN --maintenance-window-hour=10 --maintenance-release-channel=production"
      },
      {
        "letter": "C",
        "text": "gcloud sql maintenance-events reschedule prod-mysql-instance --reschedule-type=IMMEDIATE --schedule-time=2026-09-01T03:00:00Z"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances set-scheduling prod-mysql-instance --zone=us-central1-a --maintenance-policy=MIGRATE --no-restart-on-failure"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql maintenance-events reschedule <INSTANCE_NAME> --reschedule-type=SPECIFIC_TIME --schedule-time=<TIME>` allows administrators to reschedule or defer upcoming Cloud SQL system maintenance updates to an approved business window.",
    "distractors": {
      "B": "The maintenance window governs when future maintenance is scheduled; it does not move an event that Google has already scheduled and notified for next Tuesday. The pending event must be rescheduled explicitly.",
      "D": "This is the Compute Engine host-maintenance policy for VMs you own. The Cloud SQL instance runs on a Google-managed VM that gcloud compute cannot see, and host live migration is unrelated to a scheduled Cloud SQL version update.",
      "C": "IMMEDIATE tells Cloud SQL to apply the pending update right away - it starts within about five minutes and takes the instance down now, the exact opposite of deferring it; with this type the --schedule-time value is ignored."
    },
    "gcloudCommand": "gcloud sql maintenance-events reschedule prod-mysql-instance --reschedule-type=SPECIFIC_TIME --schedule-time=2026-09-01T03:00:00Z",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/maintenance#rescheduling-maintenance"
  },
  {
    "id": "ACE-D4-059",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Compute Engine Resource Policy Instance Schedule",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Compute Engine Instance Scheduling and Automatic Start/Stop Schedules",
    "scenario": "To eliminate compute spend over weekends for 50 non-production development VMs in project `dev-sandbox`, you need to create a resource policy schedule that automatically stops these VMs every Friday at 19:00 UTC and starts them every Monday at 07:00 UTC. Which command creates this instance schedule?",
    "keywords": [
      "Compute Engine",
      "gcloud compute resource-policies create instance-schedule",
      "Instance Schedule",
      "FinOps",
      "Cost Reduction"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute resource-policies create instance-schedule dev-vm-schedule --region=us-central1 --vm-start-schedule='0 7 * * 1' --vm-stop-schedule='0 19 * * 5' --timezone='UTC'"
      },
      {
        "letter": "B",
        "text": "gcloud compute resource-policies create instance-schedule dev-vm-schedule --zone=us-central1-a --vm-start-schedule='0 7 * * 1' --vm-stop-schedule='0 19 * * 5'"
      },
      {
        "letter": "C",
        "text": "gcloud compute resource-policies create snapshot-schedule dev-vm-schedule --region=us-central1 --weekly-schedule=friday --start-time=19:00 --max-retention-days=7"
      },
      {
        "letter": "D",
        "text": "gcloud scheduler jobs create pubsub stop-dev-vms --schedule='0 19 * * 5' --time-zone=UTC --topic=vm-ops --message-body='stop dev-sandbox' --location=us-central1"
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine Instance Schedules (via `gcloud compute resource-policies create instance-schedule`) natively automate the scheduled starting and stopping of virtual machine instances using standard cron expressions with zero custom scripts or running scheduler VMs.",
    "distractors": {
      "C": "This builds the other kind of resource policy, a snapshot schedule: it takes disk backups every Friday at 19:00 and keeps them a week. The 50 VMs keep running all weekend, so compute spend is unchanged and storage cost grows.",
      "B": "Resource policies are regional objects: the command takes --region, never --zone, and the policy has to live in the region of the VMs it will be attached to, so the call is rejected before any schedule exists.",
      "D": "Cloud Scheduler only publishes a message to the topic at the right minute. Nothing subscribes to it, so a Cloud Function or Cloud Run job that actually calls compute.instances.stop on the 50 VMs still has to be written and authorised."
    },
    "gcloudCommand": "gcloud compute resource-policies create instance-schedule dev-vm-schedule --region=us-central1 --vm-start-schedule='0 7 * * 1' --vm-stop-schedule='0 19 * * 5' --timezone='UTC'",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/schedule-instance-start-stop"
  },
  {
    "id": "ACE-D4-060",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "subtopic": "Cloud Logging Log Bucket Retention Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Logging Log Buckets with Extended 365-Day Retention",
    "scenario": "A financial regulatory compliance requirement mandates that all logs stored in the `_Default` log bucket of project `corp-finance-prod` must be retained for exactly 365 days (instead of the standard 30-day default retention period). Which command updates the log bucket retention?",
    "keywords": [
      "Cloud Logging",
      "gcloud logging buckets update",
      "--retention-days",
      "Compliance",
      "Retention Period"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud logging buckets update _Default --location=global --retention-days=365"
      },
      {
        "letter": "B",
        "text": "gcloud logging buckets update _Required --location=global --retention-days=365"
      },
      {
        "letter": "C",
        "text": "gcloud logging buckets create finance-365 --location=global --retention-days=365"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://corp-finance-prod-logs --retention-period=P365D"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud logging buckets update <BUCKET_ID> --location=<LOCATION> --retention-days=<DAYS>` configures the log retention period of Cloud Logging log buckets (such as `_Default` or `_Required`), extending retention from 30 days up to 3650 days (10 years).",
    "distractors": {
      "C": "This creates an empty second log bucket. Without a log sink whose destination is that bucket, entries keep being routed to _Default and are still deleted after 30 days, so nothing is retained for a year.",
      "D": "That is Cloud Storage object retention, which applies to exported log files sitting in a GCS bucket. It has no effect on the Cloud Logging log bucket _Default, whose retention is still the 30-day default.",
      "B": "_Required is immutable: its 400-day retention cannot be changed and the API rejects the update. It also holds only Admin Activity and System Event audit logs, while the regulated logs are being written to _Default."
    },
    "gcloudCommand": "gcloud logging buckets update _Default --location=global --retention-days=365",
    "architectureComponents": [
      "Cloud Logging"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/buckets#custom-retention"
  },
  {
    "id": "ACE-D5-001",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Predefined Roles & Principle of Least Privilege",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Least Privilege IAM Role for BigQuery Data Analysts",
    "scenario": "You have a team of data analysts in project `corp-analytics-prod`. The analysts need to query tables in BigQuery dataset `sales_dw` and run query jobs, but must NOT be allowed to create new datasets, delete existing tables, or modify IAM permissions. Which predefined IAM role should you grant to the analysts' Google Group?",
    "keywords": [
      "Cloud IAM",
      "BigQuery Roles",
      "roles/bigquery.dataViewer",
      "roles/bigquery.jobUser",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/bigquery.dataEditor on dataset sales_dw and roles/bigquery.jobUser at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/bigquery.user at the project level, which bundles running query jobs with dataset access."
      },
      {
        "letter": "C",
        "text": "Grant roles/bigquery.metadataViewer on sales_dw and roles/bigquery.jobUser at the project level."
      },
      {
        "letter": "D",
        "text": "Grant roles/bigquery.dataViewer on dataset sales_dw and roles/bigquery.jobUser at the project level."
      }
    ],
    "correct": "D",
    "explanation": "Following the Principle of Least Privilege: `roles/bigquery.jobUser` at the project level allows users to run query jobs and consume project slot quota, while `roles/bigquery.dataViewer` scoped to the dataset grants read-only access to table schemas and rows without granting table deletion or schema modification rights.",
    "distractors": {
      "C": "metadataViewer exposes only dataset, table and routine metadata (schemas, sizes, timestamps). It does not include bigquery.tables.getData, so the query jobs are accepted but every SELECT against sales_dw returns Access Denied on the table data.",
      "B": "Granted at the project level, roles/bigquery.user includes bigquery.datasets.create, so the analysts could create new datasets, which the requirement rules out. It also grants no read access to the rows of the pre-existing sales_dw tables.",
      "A": "dataEditor is a superset of dataViewer: it carries bigquery.tables.delete and bigquery.tables.update on every table in sales_dw, so the analysts could drop or rewrite exactly the tables the scenario forbids them to touch."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding corp-analytics-prod --member='group:analysts@corp.com' --role='roles/bigquery.jobUser'",
    "architectureComponents": [
      "Cloud IAM",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/access-control"
  },
  {
    "id": "ACE-D5-002",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Service Account User Role Binding",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Granting Service Account User Role for Compute Engine VM Deployment",
    "scenario": "A DevOps engineer needs to deploy Compute Engine instances that run under the authority of a dedicated service account `app-runner@corp.iam.gserviceaccount.com`. The engineer already has `roles/compute.instanceAdmin.v1` in project `corp-prod`. When attempting to launch the VM attached to the service account, the deployment fails with a 403 Forbidden error. Which IAM role must be granted to the engineer?",
    "keywords": [
      "Cloud IAM",
      "roles/iam.serviceAccountUser",
      "Compute Engine",
      "Service Account Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/iam.serviceAccountTokenCreator to the engineer on app-runner@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountAdmin to the engineer on project corp-prod to manage the service accounts."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountUser to the engineer on the service account app-runner@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin to the engineer on corp-prod, replacing the roles/compute.instanceAdmin.v1 binding."
      }
    ],
    "correct": "C",
    "explanation": "To attach a service account to a Compute Engine VM or Cloud Run service, the deploying identity must possess the `roles/iam.serviceAccountUser` role on that specific service account resource (or at project level), preventing unauthorized privilege escalation.",
    "distractors": {
      "B": "serviceAccountAdmin is the lifecycle role: create, delete, update and set the IAM policy of service accounts. It deliberately excludes iam.serviceAccounts.actAs, so the engineer can administer app-runner and still not attach it to an instance.",
      "D": "compute.admin is a superset of instanceAdmin.v1 for Compute resources, but no Compute role reaches across to the service account resource. The instances.create call checks iam.serviceAccounts.actAs on app-runner, which is still missing.",
      "A": "serviceAccountTokenCreator grants the impersonation permissions (generateAccessToken, signJwt, signBlob) used to call APIs as the service account. Attaching one to a VM is gated by a different permission, iam.serviceAccounts.actAs, so the 403 persists."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding app-runner@corp.iam.gserviceaccount.com --member='user:devops@corp.com' --role='roles/iam.serviceAccountUser'",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-permissions#user-role"
  },
  {
    "id": "ACE-D5-003",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Secret Manager IAM Roles & Least Privilege",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Secret Manager IAM Access for Serverless Workloads",
    "scenario": "A Cloud Run microservice `order-processor` running as service account `order-sa@corp.iam.gserviceaccount.com` needs to retrieve a database connection string stored in Google Secret Manager secret `prod-db-conn`. The service only needs to read the secret payload at startup. Which IAM role should be granted to `order-sa` on the secret?",
    "keywords": [
      "Secret Manager",
      "roles/secretmanager.secretAccessor",
      "Least Privilege",
      "Cloud Run"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/secretmanager.viewer to order-sa on the secret prod-db-conn."
      },
      {
        "letter": "B",
        "text": "Grant roles/secretmanager.secretAccessor to order-sa on the secret prod-db-conn."
      },
      {
        "letter": "C",
        "text": "Grant roles/secretmanager.secretVersionManager to order-sa on prod-db-conn."
      },
      {
        "letter": "D",
        "text": "Grant roles/secretmanager.secretAccessor to order-sa at the project level."
      }
    ],
    "correct": "B",
    "explanation": "`roles/secretmanager.secretAccessor` grants permission (`secretmanager.versions.access`) to read secret payloads and decrypt secret versions. `roles/secretmanager.viewer` only views secret metadata (names, creation times) without access to the actual secret payload.",
    "distractors": {
      "C": "secretVersionManager can add, enable, disable and destroy versions but has no secretmanager.versions.access, so the payload still cannot be read. It also hands a request-serving workload the ability to destroy the production credential.",
      "D": "Correct role, wrong scope: a project-level binding lets order-sa read the payload of every secret in the project, present and future. The requirement is read access to prod-db-conn only, so this violates least privilege.",
      "A": "viewer carries only metadata permissions (secretmanager.secrets.get, versions.list, versions.get). It lacks secretmanager.versions.access, so the AccessSecretVersion call at startup returns PERMISSION_DENIED and the service cannot build its connection string."
    },
    "gcloudCommand": "gcloud secrets add-iam-policy-binding prod-db-conn --member='serviceAccount:order-sa@corp.iam.gserviceaccount.com' --role='roles/secretmanager.secretAccessor'",
    "architectureComponents": [
      "Secret Manager",
      "Cloud IAM",
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs/access-control"
  },
  {
    "id": "ACE-D5-004",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Custom Role Creation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Custom IAM Roles for Granular Least Privilege Compliance",
    "scenario": "A security team requires a custom role `computeOperator` in project `corp-prod` that allows developers to start, stop, and reset Compute Engine VMs, but explicitly forbids creating new instances, deleting instances, or modifying disk attachments. Which command creates this custom role?",
    "keywords": [
      "Cloud IAM",
      "gcloud iam roles create",
      "Custom Role",
      "Compute Engine Permissions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --title='Compute Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.attachDisk,compute.instances.get --stage=GA"
      },
      {
        "letter": "B",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --title='Compute Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.get,compute.instances.list --stage=GA"
      },
      {
        "letter": "C",
        "text": "gcloud iam roles copy --source=roles/compute.instanceAdmin.v1 --destination=computeOperator --dest-project=corp-prod && gcloud iam roles update computeOperator --project=corp-prod --title='Compute Operator' --stage=GA"
      },
      {
        "letter": "D",
        "text": "gcloud projects add-iam-policy-binding corp-prod --member=group:developers@corp.example.com --role=roles/compute.instanceAdmin.v1 --condition='title=computeOperator,expression=resource.type==\"compute.googleapis.com/Instance\"'"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud iam roles create <ROLE_ID> --project=<PROJECT> --permissions=<COMMA_SEPARATED_PERMISSIONS>` creates a custom IAM role containing an exact list of granular GCP API permissions, adhering strictly to least privilege.",
    "distractors": {
      "D": "An IAM condition narrows which resources a role applies to, never which permissions it contains, so instanceAdmin.v1 still authorizes creating, deleting and reattaching disks on those instances.",
      "C": "Copying roles/compute.instanceAdmin.v1 reproduces its whole permission set, including compute.instances.create, compute.instances.delete and compute.instances.attachDisk, so the forbidden operations stay granted.",
      "A": "compute.instances.attachDisk authorizes modifying disk attachments, which the security team explicitly forbids; every other part of the command is correct, which is what makes it tempting."
    },
    "gcloudCommand": "gcloud iam roles create computeOperator --project=corp-prod --title='Compute Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.get,compute.instances.list --stage=GA",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/creating-custom-roles"
  },
  {
    "id": "ACE-D5-005",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Audit Logs Data Access Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Audit Logs: Enabling Data Access Logs for Storage and BigQuery",
    "scenario": "By default, Google Cloud enables Admin Activity logs for all services at no charge, but Data Access logs (Data Read, Data Write, Admin Read) for Cloud Storage and BigQuery are disabled. An enterprise compliance framework mandates logging every single read and write access to Cloud Storage objects across the project. How do you enable these logs?",
    "keywords": [
      "Cloud Audit Logs",
      "Data Access Logs",
      "Cloud Storage",
      "ADMIN_READ",
      "DATA_READ",
      "DATA_WRITE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Cloud Logging sink that routes storage.googleapis.com log entries from the _Default bucket into BigQuery for compliance retention."
      },
      {
        "letter": "B",
        "text": "Enable legacy Cloud Storage usage logs with gcloud storage buckets update --log-bucket, then load the delivered CSV reports into BigQuery."
      },
      {
        "letter": "C",
        "text": "Update the project's IAM Audit Config in Cloud Console or via gcloud to enable DATA_READ and DATA_WRITE log types for storage.googleapis.com."
      },
      {
        "letter": "D",
        "text": "Enable Object Versioning plus a bucket retention policy, so every object write creates a new generation recording the complete access history."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Audit Logs Data Access logs are configured via the project's IAM Audit Config (`auditConfigs`). Enabling `DATA_READ` and `DATA_WRITE` for `storage.googleapis.com` generates audit records for every `objects.get`, `objects.create`, and `objects.delete` API operation.",
    "distractors": {
      "D": "Versioning records writes only, as new object generations, and a retention policy protects data from deletion. Neither records a read, and neither identifies the caller. Data Read events exist only in Data Access audit logs.",
      "B": "Usage logs are a best-effort hourly CSV export of requests, not Cloud Audit Logs: delivery is not guaranteed complete, the records never reach Cloud Logging, and they lack the authenticated principal and authorization detail an audit mandate requires.",
      "A": "A sink only routes entries that are already being generated. Data Access logs for Cloud Storage remain disabled by default, so the sink exports Admin Activity entries and nothing at all about object reads and writes."
    },
    "gcloudCommand": "gcloud projects get-iam-policy corp-prod --format=json > policy.json && gcloud projects set-iam-policy corp-prod policy.json",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud Audit Logs",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/configure-data-access"
  },
  {
    "id": "ACE-D5-006",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "VPC Service Controls Perimeter Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying VPC Service Controls Service Perimeters to Prevent Data Exfiltration",
    "scenario": "A healthcare company processes HIPAA-regulated patient records in BigQuery and Cloud Storage within project `patient-data-prod`. To prevent rogue insiders or compromised service account credentials from copying or exfiltrating data to external Cloud Storage buckets or personal BigQuery datasets outside the enterprise organization, what security control should you deploy?",
    "keywords": [
      "VPC Service Controls",
      "Service Perimeter",
      "Data Exfiltration Prevention",
      "HIPAA Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enforce the storage.publicAccessPrevention and storage.uniformBucketLevelAccess Organization Policy constraints on the project patient-data-prod."
      },
      {
        "letter": "B",
        "text": "Define an Access Context Manager access level requiring corporate devices and IP ranges and apply it to BigQuery and Cloud Storage access in the project."
      },
      {
        "letter": "C",
        "text": "Enable Sensitive Data Protection discovery scans and de-identification templates over the BigQuery tables and Cloud Storage buckets in patient-data-prod."
      },
      {
        "letter": "D",
        "text": "Create a VPC Service Controls Service Perimeter enclosing project patient-data-prod and protecting the bigquery.googleapis.com and storage.googleapis.com services."
      }
    ],
    "correct": "D",
    "explanation": "VPC Service Controls (VPC SC) establishes security perimeters around Google-managed services (Cloud Storage, BigQuery). It blocks API requests that attempt to move data from inside the perimeter to storage resources outside the perimeter, even if the user has valid IAM permissions.",
    "distractors": {
      "A": "Those constraints stop buckets in the project from being shared publicly or through ACLs, but an authenticated insider can still read the records and copy them into a bucket they own elsewhere.",
      "B": "An access level only conditions who may reach the resources; with no service perimeter there is no egress boundary, so an approved caller can still copy data to external projects.",
      "C": "Sensitive Data Protection classifies content and can mask fields, but it inspects data instead of authorizing API calls, so it never blocks a copy to a destination outside the organization."
    },
    "gcloudCommand": "gcloud access-context-manager perimeters create patient_data_perimeter --title='Patient Data Perimeter' --resources=projects/123456789012 --restricted-services=storage.googleapis.com,bigquery.googleapis.com",
    "architectureComponents": [
      "VPC Service Controls",
      "Cloud Storage",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc-service-controls/docs/overview"
  },
  {
    "id": "ACE-D5-007",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud KMS CMEK Integration with Compute Engine",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud KMS Customer-Managed Encryption Keys (CMEK) for Compute Engine Disks",
    "scenario": "Financial compliance mandates that all Persistent Disks in project `finance-prod` must be encrypted using Customer-Managed Encryption Keys (CMEK) managed in Cloud KMS. Before creating CMEK-encrypted disks, which IAM role must you grant to the Compute Engine Service Agent (`service-[PROJECT_NUMBER]@compute-system.iam.gserviceaccount.com`) on the CryptoKey?",
    "keywords": [
      "Cloud KMS",
      "CMEK",
      "roles/cloudkms.cryptoKeyEncrypterDecrypter",
      "Compute Engine Service Agent"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/cloudkms.cryptoKeyEncrypterDecrypter to the Compute Engine Service Agent on the target CryptoKey."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudkms.cryptoKeyEncrypterDecrypter to the Cloud Storage Service Agent on the target CryptoKey."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudkms.admin to the Compute Engine Service Agent on the key ring that holds the CryptoKey."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudkms.cryptoKeyDecrypter to the Compute Engine Service Agent on the target CryptoKey."
      }
    ],
    "correct": "A",
    "explanation": "To enable Compute Engine to encrypt and decrypt persistent disks using CMEK, Google's Compute Engine Service Agent (`service-[PROJECT_NUM]@compute-system.iam.gserviceaccount.com`) must be granted `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the specific KMS CryptoKey.",
    "distractors": {
      "D": "cryptoKeyDecrypter only carries cryptoKeyVersions.useToDecrypt. Creating a CMEK disk first has to wrap the generated data-encryption key, which is an encrypt call, so provisioning fails even though an existing disk could be read.",
      "B": "Right role, wrong service agent: the Cloud Storage agent (service-PROJECT_NUMBER@gs-project-accounts.iam.gserviceaccount.com) wraps objects in buckets. Persistent disks are wrapped by the Compute Engine agent, which still has no binding on the key.",
      "C": "cloudkms.admin manages keys, key rings, rotation schedules and IAM policies, but Google keeps the cryptographic operations out of it: it grants neither cryptoKeyVersions.useToEncrypt nor useToDecrypt, so the agent cannot wrap the disk key."
    },
    "gcloudCommand": "gcloud kms keys add-iam-policy-binding disk-key --keyring=finance-ring --location=us-central1 --member='serviceAccount:service-123456789012@compute-system.iam.gserviceaccount.com' --role='roles/cloudkms.cryptoKeyEncrypterDecrypter'",
    "architectureComponents": [
      "Cloud KMS",
      "Compute Engine",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/customer-managed-encryption"
  },
  {
    "id": "ACE-D5-008",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Identity-Aware Proxy & Context-Aware Access",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Identity-Aware Proxy (IAP) Context-Aware Access Policies",
    "scenario": "Your company hosts an internal corporate web portal on App Engine. Corporate security mandates: 1) Employees must authenticate using Google Cloud Identity. 2) Access must ONLY be permitted from company-managed laptops connecting from the corporate office IP range (`198.51.100.0/24`) with disk encryption enabled. Which combination of GCP security services enforces this policy?",
    "keywords": [
      "Identity-Aware Proxy (IAP)",
      "Context-Aware Access",
      "Access Context Manager",
      "App Engine Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Identity-Aware Proxy (IAP) on the App Engine application and add App Engine firewall rules allowing 198.51.100.0/24 while denying every other source range."
      },
      {
        "letter": "B",
        "text": "Put an external Application Load Balancer with a serverless NEG in front of App Engine and attach a Cloud Armor policy matching origin.ip and the corporate user agent header."
      },
      {
        "letter": "C",
        "text": "Enable Identity-Aware Proxy (IAP) on the App Engine application and bind an Access Context Manager Access Level enforcing corporate IP subnet and device policy conditions."
      },
      {
        "letter": "D",
        "text": "Define an Access Context Manager access level for the corporate range and encrypted devices, then enforce it with a VPC Service Controls perimeter around the project."
      }
    ],
    "correct": "C",
    "explanation": "Google Identity-Aware Proxy (IAP) integrated with Access Context Manager provides Context-Aware Access (Zero Trust). It evaluates user identity, device security posture (disk encryption, OS version), and network origin IP before granting access to App Engine, Cloud Run, or GKE web applications.",
    "distractors": {
      "B": "Cloud Armor evaluates network and HTTP attributes only: it has no Cloud Identity session and no device posture signal, and the default appspot.com URL keeps serving the app directly unless ingress controls are added, bypassing the policy.",
      "D": "The access level is the right building block on the wrong enforcement point: VPC Service Controls gates Google Cloud API calls crossing the perimeter, not end-user HTTPS sessions to the web app. Binding the level to IAP is what applies it.",
      "A": "Identity and network origin are covered, but App Engine firewall rules match only the source IP address. No device signal is evaluated, so an employee's personal unencrypted laptop on the office network still passes the check."
    },
    "gcloudCommand": "gcloud iap web add-iam-policy-binding --resource-type=app-engine --member='group:employees@corp.com' --role='roles/iap.httpsResourceAccessor'",
    "architectureComponents": [
      "Identity-Aware Proxy (IAP)",
      "Access Context Manager",
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iap/docs/context-aware-access"
  },
  {
    "id": "ACE-D5-009",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Conditions & Time-Window Access",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Conditions for Time-Bound Temporary Elevated Access",
    "scenario": "An external contractor needs temporary access to administer Compute Engine instances in project `corp-prod` to perform a software patch. The contractor must have `roles/compute.instanceAdmin.v1`, but access must automatically expire on August 25, 2026 at 18:00 UTC without requiring manual administrative revocation. How should you grant this access?",
    "keywords": [
      "Cloud IAM",
      "IAM Conditions",
      "Time-Bound Access",
      "request.time",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/compute.instanceAdmin.v1 with an IAM Condition expression: request.time < timestamp(\"2026-08-25T18:00:00Z\")."
      },
      {
        "letter": "B",
        "text": "Grant roles/compute.instanceAdmin.v1 with the IAM Condition resource.type == \"compute.googleapis.com/Instance\" for the contractor."
      },
      {
        "letter": "C",
        "text": "Add the contractor to a group that already holds roles/compute.instanceAdmin.v1 and remove that membership once the patch is finished."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.instanceAdmin.v1 with the IAM Condition request.time.getFullYear(\"UTC\") < 2027 to bound the access."
      }
    ],
    "correct": "A",
    "explanation": "Cloud IAM Conditions allow attaching conditional expressions to role bindings. Using `request.time < timestamp(\"2026-08-25T18:00:00Z\")` ensures that the role binding is automatically invalidated by Google IAM the moment the timestamp passes.",
    "distractors": {
      "B": "That condition restricts which resource types the role covers, not how long it lasts; the binding carries no time attribute, so the contractor keeps instance admin rights indefinitely.",
      "D": "Right mechanism, wrong value: this binding stays valid until 31 December 2026, more than four months past the required expiry at 18:00 UTC on 25 August 2026.",
      "C": "Access ends only when an administrator deletes the group membership, which is exactly the manual revocation the requirement forbids; nothing lapses on 25 August by itself."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding corp-prod --member='user:contractor@partner.com' --role='roles/compute.instanceAdmin.v1' --condition='expression=request.time < timestamp(\"2026-08-25T18:00:00Z\"),title=ExpiringAccess'",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/conditions-overview"
  },
  {
    "id": "ACE-D5-010",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Workload Identity Federation & Keyless Auth",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Workload Identity Federation for AWS GitHub Actions CI/CD",
    "scenario": "A software development team deploys container images to Google Artifact Registry using GitHub Actions CI/CD workflows. To comply with security best practices, the team must eliminate long-lived service account JSON keys. What mechanism should you configure to allow GitHub Actions to authenticate to GCP using short-lived tokens?",
    "keywords": [
      "Workload Identity Federation",
      "GitHub Actions OIDC",
      "Keyless Authentication",
      "Security Best Practices"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a dedicated deployment service account with roles/artifactregistry.writer, store its JSON key in GitHub Secrets, and add a scheduled workflow calling gcloud iam service-accounts keys create to rotate that key every 30 days."
      },
      {
        "letter": "B",
        "text": "Configure Workload Identity Federation with an OIDC Workload Identity Pool and Provider for GitHub Actions, and grant the GitHub workflow principal permissions to impersonate the deployment service account."
      },
      {
        "letter": "C",
        "text": "Enable GKE Workload Identity on a cluster in the project and annotate a Kubernetes ServiceAccount with the deployment service account, then point the GitHub Actions job at that binding to obtain short-lived tokens."
      },
      {
        "letter": "D",
        "text": "Create a Workload Identity Pool with an AWS provider, map the GitHub Actions OIDC claims to pool attributes, and grant the mapped principal roles/artifactregistry.writer on the Artifact Registry repository."
      }
    ],
    "correct": "B",
    "explanation": "Workload Identity Federation allows external workloads (GitHub Actions, AWS, Azure, on-premises OIDC/SAML) to exchange external credentials for short-lived Google Cloud access tokens, completely eliminating the risks of downloadable long-lived service account JSON keys.",
    "distractors": {
      "D": "An AWS provider validates signed AWS GetCallerIdentity requests; GitHub Actions presents an OIDC JWT, so the pool needs an OIDC provider with issuer token.actions.githubusercontent.com.",
      "C": "GKE Workload Identity issues tokens only to Pods running inside that cluster, through the GKE metadata server; a GitHub-hosted runner sits outside Google Cloud and can never reach it.",
      "A": "Rotation shortens the exposure window but the workflow still holds a downloadable long-lived service account JSON key, which is exactly the credential the security requirement bans."
    },
    "gcloudCommand": "gcloud iam workload-identity-pools create github-pool --location=global --display-name='GitHub Actions Pool'",
    "architectureComponents": [
      "Cloud IAM",
      "Artifact Registry"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation"
  },
  {
    "id": "ACE-D5-011",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Storage Uniform Bucket-Level Access",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Uniform Bucket-Level Access (UBLA) for Simplified Security",
    "scenario": "An internal audit found that some objects in Cloud Storage bucket `gs://corp-sensitive-docs` have inconsistent object-level ACLs, granting unauthorized read access to external email addresses. You need to enforce a uniform security model where access is governed exclusively through Cloud IAM roles across all current and future objects in the bucket, disabling object ACLs entirely. Which command enforces this?",
    "keywords": [
      "Cloud Storage",
      "Uniform Bucket-Level Access",
      "UBLA",
      "gcloud storage buckets update",
      "Security Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets update gs://corp-sensitive-docs --no-uniform-bucket-level-access"
      },
      {
        "letter": "B",
        "text": "gcloud storage objects update gs://corp-sensitive-docs/** --predefined-acl=projectPrivate"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://corp-sensitive-docs --uniform-bucket-level-access"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://corp-sensitive-docs --public-access-prevention"
      }
    ],
    "correct": "C",
    "explanation": "Uniform Bucket-Level Access (UBLA) unifies access control exclusively to Google Cloud IAM, disabling individual object ACLs and preventing accidental exposure of individual files through fine-grained ACL leaks.",
    "distractors": {
      "B": "This rewrites the ACLs of the objects that exist right now. ACLs stay enabled on the bucket, so the next upload carries its own ACL and any principal with storage.objects.setIamPolicy can re-share a file externally.",
      "D": "Public access prevention only blocks grants to allUsers and allAuthenticatedUsers. An ACL naming a specific external email address is not public access, so those object-level grants keep working untouched.",
      "A": "The --no- form is the inverse switch: it returns the bucket to fine-grained mode, where per-object ACLs remain authoritative. That is exactly the mechanism the audit flagged, so the exposure is preserved, not removed."
    },
    "gcloudCommand": "gcloud storage buckets update gs://corp-sensitive-docs --uniform-bucket-level-access",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/uniform-bucket-level-access"
  },
  {
    "id": "ACE-D5-012",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "VPC Firewall Rules with Target Service Accounts",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating and Attaching VPC Firewall Rules Using Target Service Accounts",
    "scenario": "You have an e-commerce backend microservice running on Compute Engine instances. Multiple VMs in different subnets belong to the microservice. You need to allow inbound TCP traffic on port 8080 ONLY to VMs that run as the service account `backend-sa@corp.iam.gserviceaccount.com`, regardless of what network tags are added to the VMs. Which firewall rule configuration achieves this?",
    "keywords": [
      "VPC Firewall",
      "Target Service Account",
      "Security Hardening",
      "gcloud compute firewall-rules create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress firewall rule specifying --target-tags=backend-svc, --allow=tcp:8080 and the corporate source ranges, then attach that tag to every microservice VM."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule specifying --target-service-accounts=backend-sa@corp.iam.gserviceaccount.com, --allow=tcp:8080, and appropriate source IP ranges."
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule specifying --source-service-accounts=backend-sa@corp.iam.gserviceaccount.com, --allow=tcp:8080 and no target filter at all."
      },
      {
        "letter": "D",
        "text": "Create an ingress firewall rule specifying --target-service-accounts=123456-compute@developer.gserviceaccount.com, --allow=tcp:8080 and internal source ranges."
      }
    ],
    "correct": "B",
    "explanation": "Target Service Accounts in VPC firewall rules bind traffic permissions strictly to the cryptographically verified IAM identity running on the VM instance (`--target-service-accounts`), preventing developers from bypassing firewall rules by arbitrarily modifying network tags.",
    "distractors": {
      "D": "Right flag, wrong identity: the microservice VMs run as backend-sa@corp.iam.gserviceaccount.com, so a rule targeting the default Compute Engine service account matches other VMs and leaves port 8080 closed on the backend.",
      "C": "Filters the sender instead of the receiver: --source-service-accounts matches traffic emitted by VMs running as backend-sa, and with no target filter the rule opens tcp:8080 on every instance in the network.",
      "A": "Scopes the rule by network tag, and any principal holding compute.instances.setTags can add that tag to an unrelated VM or strip it from a microservice VM; the requirement is enforcement bound to the identity regardless of tags."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-backend-api --network=prod-vpc --allow=tcp:8080 --source-ranges=10.0.0.0/8 --target-service-accounts=backend-sa@corp.iam.gserviceaccount.com",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls#service-accounts"
  },
  {
    "id": "ACE-D5-013",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud DLP Sensitive Data Inspection & Masking",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Sensitive Data Protection (DLP) for PII De-Identification",
    "scenario": "A company ingests customer support tickets containing personally identifiable information (PII) such as credit card numbers (CCN) and Social Security Numbers (SSN). Before loading ticket text into BigQuery for public analysis, the security team must automatically detect, inspect, and mask credit card numbers with `[REDACTED]`. Which Google Cloud service should you deploy?",
    "keywords": [
      "Sensitive Data Protection (Cloud DLP)",
      "PII Redaction",
      "Credit Card Masking",
      "BigQuery Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "BigQuery column-level access control with a Dataplex policy tag on the ticket text column."
      },
      {
        "letter": "B",
        "text": "Cloud Natural Language API entity analysis to strip PII entities out of the ticket text."
      },
      {
        "letter": "C",
        "text": "Cloud Sensitive Data Protection (Cloud DLP) inspection and de-identification transform job."
      },
      {
        "letter": "D",
        "text": "BigQuery dynamic data masking bound to the ticket text column through a masking policy."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Sensitive Data Protection (Cloud DLP) provides automated discovery, classification, and de-identification (masking, tokenization, hashing, date shifting) of sensitive data (credit cards, SSNs, names) in Cloud Storage, BigQuery, and Datastore.",
    "distractors": {
      "D": "Dynamic masking applies one fixed rule (hash, nullify, default value) to the whole column for a principal group; it cannot find the card number inside the sentence, so the choice is a blank ticket or an unmasked one.",
      "B": "Entity analysis returns annotations such as PERSON or NUMBER, with no credit card or SSN infoType and no checksum validation, and it emits no de-identified copy of the text, so nothing becomes [REDACTED].",
      "A": "Policy tags expose or hide an entire column per principal. They cannot locate a credit card number inside free-form ticket text, and every analyst allowed to read the column still sees the raw CCN."
    },
    "gcloudCommand": "gcloud dlp jobs create ...",
    "architectureComponents": [
      "Cloud DLP (Sensitive Data Protection)",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/dlp/docs/transforming-sensitive-data"
  },
  {
    "id": "ACE-D5-014",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Deny Policies & Governance",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Deny Policies to Prevent Public Access Exemption",
    "scenario": "An enterprise Chief Information Security Officer (CISO) requires a permanent, non-overridable security rule at the Organization level that explicitly denies `allUsers` and `allAuthenticatedUsers` from being granted any Cloud Storage permissions (`storage.objects.get`), even if a project administrator attempts to grant it in their project IAM policies. Which feature enforces this restriction?",
    "keywords": [
      "Cloud IAM",
      "IAM Deny Policy",
      "allUsers",
      "Organization Security",
      "Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a custom organization-level IAM role that omits storage.objects.get and grant it to every project administrator in place of the predefined Storage roles."
      },
      {
        "letter": "B",
        "text": "Attach an IAM Deny Policy denying the principals 'allUsers' and 'allAuthenticatedUsers' the permission 'storage.objects.get' to each project in the organization."
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud IAM Deny Policy at the Organization level that denies principals 'allUsers' and 'allAuthenticatedUsers' the permission 'storage.objects.get'."
      },
      {
        "letter": "D",
        "text": "Enable Security Command Center Security Health Analytics and auto-remediate the PUBLIC_BUCKET_ACL finding with a Cloud Function subscribed to the findings feed."
      }
    ],
    "correct": "C",
    "explanation": "Cloud IAM Deny Policies take precedence over all IAM allow grants. A Deny Policy applied at the Organization or Folder level denying `allUsers` and `allAuthenticatedUsers` specific permissions (`storage.objects.get`) prevents public access universally, overriding any project-level allow bindings.",
    "distractors": {
      "D": "Detection is after the fact. The scanner runs on its own cadence, so the objects are publicly readable between the grant and the remediation, and nothing stops the administrator from adding the binding again straight away.",
      "A": "A custom role limits what that role conveys, not what an administrator may grant. Anyone still holding resourcemanager.projects.setIamPolicy can bind the predefined roles/storage.objectViewer to allUsers inside their own project.",
      "B": "Correct mechanism, wrong attachment point: a deny policy covers the resource it is attached to and its descendants, so projects created later are unprotected and a project administrator can detach it from their own project."
    },
    "gcloudCommand": "gcloud iam deny-policies create no-public-storage --organization=123456789012 --file=deny-policy.json",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/deny-overview"
  },
  {
    "id": "ACE-D5-015",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud KMS Key Rotation Policies",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud KMS Automatic Key Rotation Schedules",
    "scenario": "Corporate compliance policy requires that cryptographic keys used to encrypt databases in Cloud KMS must be automatically rotated every 90 days. Which command creates a CryptoKey with an automated 90-day rotation schedule?",
    "keywords": [
      "Cloud KMS",
      "gcloud kms keys create",
      "--rotation-period",
      "Key Rotation",
      "Security Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption --protection-level=hsm --destroy-scheduled-duration=90d"
      },
      {
        "letter": "B",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=asymmetric-signing --default-algorithm=rsa-sign-pkcs1-2048-sha256 --rotation-period=90d"
      },
      {
        "letter": "C",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption --rotation-period=90d --next-rotation-time=2026-11-20T00:00:00Z"
      },
      {
        "letter": "D",
        "text": "gcloud scheduler jobs create http kms-rotate --location=us-central1 --schedule='0 0 1 */3 *' --uri=https://cloudkms.googleapis.com/v1/.../db-crypto-key:updatePrimaryVersion"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud kms keys create <KEY_NAME> --rotation-period=<DURATION> --next-rotation-time=<TIMESTAMP>` configures Cloud KMS to automatically generate a new primary key version on schedule, ensuring seamless cryptographic hygiene without breaking decryption of data encrypted with older versions.",
    "distractors": {
      "B": "Automatic rotation is supported only for symmetric encryption keys: Cloud KMS rejects --rotation-period on asymmetric signing and asymmetric encryption keys, and a signing key cannot encrypt the database contents in the first place.",
      "A": "--destroy-scheduled-duration only sets how long a destroyed key version waits in DESTROY_SCHEDULED before permanent deletion. It never generates a new key version, so the key is never rotated; scheduled rotation needs --rotation-period.",
      "D": "updatePrimaryVersion only promotes a key version that already exists; no new version is created, so nothing actually rotates. A '1st of every third month' cron also drifts away from a strict 90-day interval and needs its own authorization and monitoring."
    },
    "gcloudCommand": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption --rotation-period=90d --next-rotation-time=2026-11-20T00:00:00Z",
    "architectureComponents": [
      "Cloud KMS"
    ],
    "officialDocUrl": "https://cloud.google.com/kms/docs/rotate-key"
  },
  {
    "id": "ACE-D5-016",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Security Command Center Findings & Posture",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Security Command Center (SCC) Security Findings and Assets",
    "scenario": "A security analyst needs a unified security and risk management platform in Google Cloud that continuously discovers cloud assets, identifies misconfigurations (such as public Cloud Storage buckets or open firewall ports), detects vulnerabilities, and reports threats across the entire organization. Which Google Cloud service provides this?",
    "keywords": [
      "Security Command Center",
      "SCC",
      "Vulnerability Management",
      "Threat Detection",
      "Asset Discovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Asset Inventory (CAI)."
      },
      {
        "letter": "B",
        "text": "Cloud Armor security policies."
      },
      {
        "letter": "C",
        "text": "Cloud Audit Logs in Logging."
      },
      {
        "letter": "D",
        "text": "Security Command Center (SCC)."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Security Command Center (SCC) is the centralized vulnerability and threat management platform for Google Cloud. It continuously monitors cloud asset inventory, surfaces security findings (Security Health Analytics, Event Threat Detection), and evaluates compliance posture.",
    "distractors": {
      "B": "Cloud Armor is an edge WAF and DDoS filter in front of load-balanced applications; it neither discovers assets nor reports organization-wide misconfigurations.",
      "C": "Audit logs record who did what and when; they must be queried by hand and never classify a finding such as a public bucket or an open firewall port.",
      "A": "CAI inventories resource metadata and IAM policies over time, but it emits no vulnerability, misconfiguration or threat findings and evaluates no compliance posture."
    },
    "gcloudCommand": "gcloud scc findings list 123456789012 --filter='state=\"ACTIVE\"'",
    "architectureComponents": [
      "Security Command Center (SCC)"
    ],
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-security-command-center-overview"
  },
  {
    "id": "ACE-D5-017",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Load Balancing SSL/TLS Policy Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Google Cloud SSL/TLS Policies for Cloud Load Balancers",
    "scenario": "To comply with modern PCI-DSS encryption standards, all HTTPS traffic terminating at an External HTTPS Load Balancer in project `corp-prod` must ONLY support TLS version 1.2 or higher, completely disabling legacy TLS 1.0 and TLS 1.1 protocols. Which sequence of commands creates and applies this SSL Policy?",
    "keywords": [
      "SSL Policy",
      "TLS 1.2 Minimum",
      "Cloud Load Balancing",
      "PCI-DSS",
      "Security Hardening"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an SSL policy using gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.2 --profile=RESTRICTED, and attach it to the Target HTTPS Proxy using gcloud compute target-https-proxies update my-proxy --ssl-policy=pci-ssl-policy."
      },
      {
        "letter": "B",
        "text": "Create an SSL policy using gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.2 --profile=RESTRICTED, and attach it to the backend service using gcloud compute backend-services update my-backend --ssl-policy=pci-ssl-policy."
      },
      {
        "letter": "C",
        "text": "Create an SSL policy using gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.0 --profile=MODERN, and attach it to the Target HTTPS Proxy using gcloud compute target-https-proxies update my-proxy --ssl-policy=pci-ssl-policy."
      },
      {
        "letter": "D",
        "text": "Create an SSL policy using gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.2 --profile=RESTRICTED, and attach it to the global forwarding rule using gcloud compute forwarding-rules update my-rule --ssl-policy=pci-ssl-policy."
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute ssl-policies create <NAME> --min-tls-version=1.2 --profile=RESTRICTED` defines modern TLS cipher standards, which are then attached to Target HTTPS Proxies (`gcloud compute target-https-proxies update --ssl-policy=<NAME>`) to enforce TLS 1.2+ at Google's global load balancing edge.",
    "distractors": {
      "D": "The global forwarding rule only maps the external IP and port to the proxy. It carries no TLS parameters; the negotiation settings live on the Target HTTPS Proxy.",
      "C": "The MODERN profile combined with --min-tls-version=1.0 still negotiates TLS 1.0 and 1.1, which is exactly what PCI-DSS prohibits. RESTRICTED plus a 1.2 floor is what disables the legacy protocols.",
      "B": "SSL policies attach to the Target HTTPS Proxy, which is where TLS is terminated. The backend service handles the connection from the load balancer to the backends and accepts no --ssl-policy flag."
    },
    "gcloudCommand": "gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.2 --profile=RESTRICTED && gcloud compute target-https-proxies update my-proxy --ssl-policy=pci-ssl-policy",
    "architectureComponents": [
      "Cloud Load Balancing",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/ssl-policies"
  },
  {
    "id": "ACE-D5-018",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Service Account Impersonation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Service Account Impersonation for Admin Workflows",
    "scenario": "To eliminate static JSON keys on developer workstations, an administrator wants a developer (`developer@corp.com`) to run deployment scripts by temporarily impersonating a deployment service account `deployer@corp.iam.gserviceaccount.com`. Which IAM role must be granted to the developer on the service account?",
    "keywords": [
      "Cloud IAM",
      "roles/iam.serviceAccountTokenCreator",
      "Impersonation",
      "Short-Lived Credentials"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/iam.serviceAccountUser to developer@corp.com on deployer@corp.iam.gserviceaccount.com so scripts can run as it."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountTokenCreator to developer@corp.com on the service account deployer@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.workloadIdentityUser on deployer@corp.iam.gserviceaccount.com to the developer's Google account for the deployment scripts."
      },
      {
        "letter": "D",
        "text": "Grant roles/iam.serviceAccountAdmin on the project to developer@corp.com so the developer can administer the deployer service account."
      }
    ],
    "correct": "B",
    "explanation": "Granting `roles/iam.serviceAccountTokenCreator` on a specific service account allows a user to generate short-lived OAuth access tokens and OIDC ID tokens to impersonate that service account (e.g. via `gcloud --impersonate-service-account`), eliminating the need for downloadable JSON keys.",
    "distractors": {
      "C": "workloadIdentityUser binds an external identity - a GKE Kubernetes service account or a federated principal from a workload identity pool - to the service account. A human Google account signed in through gcloud is not a federated workload, so the binding never applies.",
      "D": "serviceAccountAdmin manages the service account resource and its IAM policy but contains no iam.serviceAccounts.getAccessToken permission, so by itself it grants no impersonation; it is the role for managing the account's lifecycle, not for acting as it.",
      "A": "serviceAccountUser authorizes the ActAs check: attaching the service account to a resource you create (VM, Cloud Run revision, Dataflow job). It does not include iam.serviceAccounts.getAccessToken, so gcloud --impersonate-service-account is still denied."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding deployer@corp.iam.gserviceaccount.com --member='user:developer@corp.com' --role='roles/iam.serviceAccountTokenCreator'",
    "architectureComponents": [
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-permissions#token-creator-role"
  },
  {
    "id": "ACE-D5-019",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Access Transparency & Access Approval Governance",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Access Transparency and Access Approval for Regulatory Compliance",
    "scenario": "A financial institution subject to European banking regulations requires that any manual administrative access by Google Cloud engineers or support staff to customer production infrastructure must: 1) Require explicit prior approval from corporate security officers. 2) Generate an immutable audit log detailing why Google personnel accessed the system. Which Google Cloud services satisfy these requirements?",
    "keywords": [
      "Access Transparency",
      "Access Approval",
      "Compliance",
      "Google Support Governance",
      "Auditability"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Audit Logs with Admin Activity and Data Access logs enabled on every production project, reviewed weekly by the security officers."
      },
      {
        "letter": "B",
        "text": "Organization Policy constraints plus IAM deny policies applied to the Google support accounts, lifted case by case by the security officers."
      },
      {
        "letter": "C",
        "text": "Customer-Managed Encryption Keys on all production data plus Cloud DLP de-identification templates applied before any support ticket is opened."
      },
      {
        "letter": "D",
        "text": "Google Cloud Access Approval (for manual approval gates) and Access Transparency (for immutable access logs of Google personnel actions)."
      }
    ],
    "correct": "D",
    "explanation": "Access Transparency provides near real-time audit logs whenever Google administrators access customer data during support tickets. Access Approval extends this by requiring explicit customer approval before Google support engineers can access data.",
    "distractors": {
      "A": "Cloud Audit Logs record API calls made by the customer's own principals and service accounts; actions taken by Google support engineers are not written to the customer's audit logs. Reviewing them is also a detective control that cannot hold an access request until an officer approves it.",
      "C": "CMEK and DLP change how the data is protected, not who may operate on the infrastructure: Cloud KMS decrypts transparently for the service, so support access is still neither gated by an explicit approval nor logged with the reason it happened.",
      "B": "Organization Policy and IAM (including deny policies) govern the customer's own principals. Google's internal support access is not granted through the customer's IAM policy, so a deny rule neither blocks it nor produces the per-access justification record the regulator requires."
    },
    "gcloudCommand": "gcloud services enable accessapproval.googleapis.com",
    "architectureComponents": [
      "Access Transparency",
      "Access Approval",
      "Cloud Audit Logs"
    ],
    "officialDocUrl": "https://cloud.google.com/access-approval/docs/overview"
  },
  {
    "id": "ACE-D5-020",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Storage Signed URLs & Delegated Access",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Storage Signed URLs for Secure Time-Limited Direct Downloads",
    "scenario": "You have private video files stored in Cloud Storage bucket `gs://premium-course-videos` that must remain inaccessible to the public. When an authenticated student purchases a video lesson, your backend server must generate a secure, temporary download link that expires in exactly 15 minutes, allowing the student's browser to download the file directly from Google Cloud. What mechanism should you use?",
    "keywords": [
      "Cloud Storage",
      "Signed URL",
      "gcloud storage sign-url",
      "Temporary Access",
      "Time-Limited"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Generate a Cloud Storage Signed URL with a 15-minute expiration using a service account with Storage Object Viewer permissions."
      },
      {
        "letter": "B",
        "text": "Publish the bucket behind an external HTTPS load balancer and protect the media path with Cloud CDN signed cookies issued at purchase."
      },
      {
        "letter": "C",
        "text": "Add the student's account to the bucket IAM policy with roles/storage.objectViewer and remove the binding 15 minutes later via Cloud Scheduler."
      },
      {
        "letter": "D",
        "text": "Apply an Object Lifecycle rule whose Age condition deletes the video 15 minutes after the purchase and make the object publicly readable."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Signed URLs provide cryptographic delegation of read/write access for a limited time window (e.g. 15 minutes). The client can fetch the object directly from Cloud Storage without routing heavy media streaming bandwidth through backend application servers.",
    "distractors": {
      "D": "Lifecycle rules are evaluated asynchronously about once a day and the Age condition is expressed in days, so a 15-minute window cannot be encoded. It also destroys the master copy of the video instead of expiring a link.",
      "C": "An IAM binding is bucket-wide, so it exposes the whole catalogue rather than the purchased video; IAM changes also take minutes to propagate and the policy is capped at 1,500 principals, which rules it out as a per-request access mechanism.",
      "B": "Signed cookies authorize an entire URL prefix rather than one object, so a student who bought a single lesson can fetch every video under that path. They are built for many-object browsing sessions, not for delegating one purchased file."
    },
    "gcloudCommand": "gcloud storage sign-url gs://premium-course-videos/lesson-1.mp4 --duration=15m --private-key-file=sa-key.json",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/access-control/signed-urls"
  },
  {
    "id": "ACE-D5-021",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "VPC Firewall Rules for Multi-Tier Architecture",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring VPC Firewall Rules for Tiered Multi-Tier Application Isolation",
    "scenario": "You are configuring network security for a 3-tier application (Web, App, Database). The Database tier VMs have network tag `db-tier` and run MySQL on port 3306. To enforce strict network segmentation, database instances must ONLY accept connections from VMs carrying the network tag `app-tier`, blocking all other internal VMs and the public internet. Which firewall rule should you create?",
    "keywords": [
      "VPC Firewall",
      "Network Segmentation",
      "source-tags",
      "target-tags",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress firewall rule specifying --target-tags=app-tier, --source-tags=db-tier, and --allow=tcp:3306."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule specifying --target-tags=db-tier, --source-tags=app-tier, and --allow=tcp:3306."
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule specifying --target-tags=db-tier, --source-ranges=10.128.0.0/9, and --allow=tcp:3306."
      },
      {
        "letter": "D",
        "text": "Create an ingress rule specifying --action=DENY, --target-tags=db-tier, --source-ranges=0.0.0.0/0, and --rules=tcp:3306."
      }
    ],
    "correct": "B",
    "explanation": "Using `--target-tags=db-tier` with `--source-tags=app-tier` enforces strict L3/L4 microsegmentation, ensuring that only VMs tagged with `app-tier` can establish TCP connections on port 3306 to database instances.",
    "distractors": {
      "C": "Scoping by CIDR instead of by tag admits every VM whose NIC falls in that internal range, including the web tier and any workload created later in those subnets. The requirement is authorization by tag, not by address block.",
      "A": "The two tags are swapped, so the rule opens port 3306 on the app-tier VMs for traffic coming from the database VMs. Ingress to db-tier is still covered only by the implied deny rule, and the application cannot reach MySQL.",
      "D": "Ingress is already denied by the implied deny rule, so an extra deny adds nothing and, more importantly, no allow rule is ever created. The database ends up unreachable from the app tier and the application breaks."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-app-to-db --network=prod-vpc --allow=tcp:3306 --source-tags=app-tier --target-tags=db-tier",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls#target-tags"
  },
  {
    "id": "ACE-D5-022",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Armor Rate Limiting Security Rules",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Armor Rate Limiting Rules to Mitigate Layer 7 HTTP Flood Attacks",
    "scenario": "Your public API service behind a Global External HTTPS Load Balancer is experiencing Layer 7 DDoS attacks where single client IP addresses send over 500 requests per second to the `/api/login` endpoint. You need to configure a Cloud Armor security policy rule to rate-limit any client IP to a maximum of 100 requests per minute on `/api/login`, returning an HTTP 429 Too Many Requests response if exceeded. Which command configures this rate limiting rule?",
    "keywords": [
      "Cloud Armor",
      "Rate Limiting",
      "HTTP 429",
      "L7 DDoS Mitigation",
      "Security Policy"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --conform-action=allow --exceed-action=deny-403 --enforce-on-key=ALL --match-expr=\"request.path.startsWith('/api/login')\""
      },
      {
        "letter": "B",
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=IP --match-expr=\"request.path.startsWith('/api/login')\""
      },
      {
        "letter": "C",
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=1 --conform-action=allow --exceed-action=redirect --enforce-on-key=HTTP_HEADER --match-expr=\"request.path.startsWith('/api/login')\""
      },
      {
        "letter": "D",
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --action=rate-based-ban --ban-duration-sec=600 --rate-limit-threshold-count=500 --rate-limit-threshold-interval-sec=1 --conform-action=allow --enforce-on-key=IP"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor Rate Limiting rules (`--rate-limit-threshold-count`, `--rate-limit-threshold-interval-sec`, `--exceed-action=deny-429`, `--enforce-on-key=IP`) enforce rate caps per client IP or session key at Google's global edge, dropping volumetric L7 flood attacks before they reach backend instances.",
    "distractors": {
      "A": "--enforce-on-key=ALL counts every client into a single shared bucket, so 100 legitimate users together trip the limit and the whole API is throttled. The requirement is per client IP, and the response must be 429, not 403.",
      "D": "rate-based-ban blocks the client outright for 600 seconds once the threshold trips, rather than rate-limiting each request. The threshold is also 500 per second, which is above the attack volume, so it never engages.",
      "C": "An interval of 1 second enforces 100 requests per second, six thousand times looser than the 100 per minute required. redirect sends the client to reCAPTCHA instead of returning 429, and HTTP_HEADER additionally requires --enforce-on-key-name."
    },
    "gcloudCommand": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=IP --match-expr=\"request.path.startsWith('/api/login')\"",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/rate-limiting-overview"
  },
  {
    "id": "ACE-D5-023",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud SQL IAM Database Authentication",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL IAM Database Authentication for Keyless Microservice Logins",
    "scenario": "To eliminate static database passwords in source code, an engineering team wants a Cloud Run service running as service account `app-sa@corp.iam.gserviceaccount.com` to authenticate directly to a Cloud SQL PostgreSQL database using its Google Cloud IAM identity. What database flag and user configuration must be enabled?",
    "keywords": [
      "Cloud SQL",
      "IAM Database Authentication",
      "cloudsql.iam_authentication",
      "PostgreSQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable the cloudsql.iam_authentication=on database flag on the instance, and add an IAM database user for app-sa@corp.iam.gserviceaccount.com in Cloud SQL with type CLOUD_IAM_SERVICE_ACCOUNT."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudsql.client and roles/cloudsql.instanceUser to app-sa and run the Cloud SQL Auth Proxy with --auto-iam-authn; no instance flag or database user change is required."
      },
      {
        "letter": "C",
        "text": "Store the postgres password in Secret Manager, expose it to Cloud Run with --set-secrets=DB_PASS=db-password:latest, and grant app-sa the roles/secretmanager.secretAccessor role."
      },
      {
        "letter": "D",
        "text": "Set the database flag password_encryption=scram-sha-256 and create a native PostgreSQL role named app-sa@corp.iam with CREATE USER and a random password inside the database."
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL IAM database authentication (`cloudsql.iam_authentication=on`) enables applications to authenticate to PostgreSQL/MySQL using short-lived OAuth 2.0 access tokens generated by Google IAM service accounts, completely eliminating static database passwords.",
    "distractors": {
      "B": "The proxy does mint the OAuth token, but PostgreSQL refuses the login: the instance only honours IAM tokens once cloudsql.iam_authentication is on, and a matching database user must exist. IAM roles alone create no database role.",
      "D": "A role made with CREATE USER is an ordinary built-in database account that merely shares the name. Without cloudsql.iam_authentication the instance never validates OAuth tokens, and the role still needs the password that had to go.",
      "C": "The password leaves the source code but does not disappear: the service still authenticates with a long-lived static credential that has to be rotated by hand, and the session is not tied to the app-sa IAM identity as required."
    },
    "gcloudCommand": "gcloud sql instances patch prod-pg-instance --database-flags=cloudsql.iam_authentication=on && gcloud sql users create app-sa@corp.iam.gserviceaccount.com --instance=prod-pg-instance --type=CLOUD_IAM_SERVICE_ACCOUNT",
    "architectureComponents": [
      "Cloud SQL",
      "Cloud IAM",
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/authentication"
  },
  {
    "id": "ACE-D5-024",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "GKE RBAC vs Google Cloud IAM",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing GKE Role-Based Access Control (RBAC) and GCP IAM Synchronization",
    "scenario": "You need to grant a developer read-only access to view Pods and Deployments in a single Kubernetes namespace `development` within a GKE cluster, without granting them permission to view workloads in other namespaces or modify cluster infrastructure. How should permissions be granted?",
    "keywords": [
      "GKE",
      "Kubernetes RBAC",
      "RoleBinding",
      "Namespace Isolation",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant the developer roles/container.viewer at the GCP project level (to authenticate), and create a Kubernetes Role and RoleBinding in namespace development granting read access to pods and deployments."
      },
      {
        "letter": "B",
        "text": "Grant the developer roles/container.viewer at the project level and create a Kubernetes ClusterRole plus a ClusterRoleBinding granting get, list and watch on pods and deployments in the cluster."
      },
      {
        "letter": "C",
        "text": "Grant roles/container.clusterViewer at the project level with an IAM condition on resource.name that restricts the binding to the development namespace, so Cloud IAM alone enforces the scoping."
      },
      {
        "letter": "D",
        "text": "Grant roles/container.developer at the project level and have the developer run kubectl config set-context --current --namespace=development so that every query stays inside that namespace."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud IAM grants cluster-level access (`roles/container.viewer` allows listing clusters and obtaining kubeconfig credentials). Granular namespace-level permissions (e.g. read pods only in `development`) are governed inside the cluster via native Kubernetes RBAC `Role` and `RoleBinding` objects.",
    "distractors": {
      "C": "Cloud IAM's resource hierarchy for GKE stops at the cluster. Namespaces are Kubernetes objects that IAM does not model, so an IAM condition cannot reference one: the binding either applies to the entire cluster or is invalid. Namespace scoping is done with Kubernetes RBAC.",
      "B": "A ClusterRoleBinding binds the permissions across the whole cluster, so the developer can read pods and deployments in every namespace, kube-system included. Restricting the grant to one namespace requires a RoleBinding created inside the development namespace.",
      "D": "roles/container.developer grants full read and write access to all Kubernetes objects in every namespace of every cluster in the project. Setting the default namespace in kubeconfig is a client-side convenience the developer undoes with a single --namespace flag."
    },
    "gcloudCommand": "kubectl apply -f dev-rolebinding.yaml --namespace=development",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"
  },
  {
    "id": "ACE-D5-025",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Storage Customer-Supplied Encryption Keys (CSEK)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Storage Customer-Supplied Encryption Keys (CSEK) via gsutil/gcloud",
    "scenario": "A government defense contractor requires that satellite imagery files stored in Cloud Storage must be encrypted using raw 256-bit AES encryption keys generated and stored on on-premises Hardware Security Modules (HSM). Google Cloud must NEVER store the raw key on disk or retain it after the upload/download request finishes. Which encryption model should you implement?",
    "keywords": [
      "Cloud Storage",
      "CSEK",
      "Customer-Supplied Encryption Keys",
      "AES-256",
      "High Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud KMS Customer-Managed Encryption Keys with protection level HSM (Cloud HSM, FIPS 140-2 Level 3) set as the bucket default encryption key."
      },
      {
        "letter": "B",
        "text": "Cloud KMS Customer-Managed Encryption Keys built by wrapping the on-premises AES-256 material and running gcloud kms keys versions import into the key ring."
      },
      {
        "letter": "C",
        "text": "Cloud External Key Manager (Cloud EKM), referencing the key by URI so Cloud KMS delegates every wrap and unwrap call to the on-premises HSM."
      },
      {
        "letter": "D",
        "text": "Customer-Supplied Encryption Keys (CSEK), providing the base64-encoded AES-256 key in the encryption_key configuration header of each API/CLI request."
      }
    ],
    "correct": "D",
    "explanation": "Customer-Supplied Encryption Keys (CSEK) require the client to supply raw 256-bit AES encryption keys in HTTP request headers. Google Cloud uses the key in memory to encrypt/decrypt the object and immediately purges the key from memory without persisting it.",
    "distractors": {
      "C": "Cloud EKM can only reference keys hosted in a supported EKM partner service reached over the internet or a VPC, not an arbitrary on-premises HSM, and the client never supplies raw AES-256 bytes per request.",
      "A": "The AES-256 key is generated inside Google's own HSM cluster and persists there as a CryptoKey version that Google manages; the contractor requires material generated on their own HSM and never held by Google.",
      "B": "Import protects the material in transit, but once imported that key version is stored inside Cloud KMS and reused for every request, which is precisely the persistence the requirement forbids."
    },
    "gcloudCommand": "gsutil -o 'GSUtil:encryption_key=Base64KeyString==' cp secure-file.dat gs://defense-vault/",
    "architectureComponents": [
      "Cloud Storage",
      "Security & Encryption"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/encryption/customer-supplied-keys"
  },
  {
    "id": "ACE-D5-026",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Google Groups Architecture Best Practices",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Group-Based Access Control for High-Turnover Teams",
    "scenario": "An enterprise onboarding and offboarding process experiences frequent developer turnover. Granting and revoking individual IAM role bindings across 50 project IAM policies directly on user email addresses has led to administrative errors and dangling permissions. What is Google Cloud's recommended best practice for scalable IAM administration?",
    "keywords": [
      "Cloud IAM",
      "Google Groups",
      "Access Governance",
      "Least Privilege",
      "Onboarding Best Practices"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/resourcemanager.projectIamAdmin to every developer so each engineer can add and remove their own role bindings in the 50 project IAM policies as they join or leave a team."
      },
      {
        "letter": "B",
        "text": "Create one custom IAM role per developer containing exactly the permissions that person needs, and delete that custom role from the organization when the employee is offboarded."
      },
      {
        "letter": "C",
        "text": "Bind the required roles to each individual developer account once at the folder level, so that a single binding per person is inherited by all 50 projects underneath the folder."
      },
      {
        "letter": "D",
        "text": "Assign IAM roles exclusively to Google Groups in Google Workspace/Cloud Identity, and manage individual permissions by adding or removing users from the corresponding groups."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud IAM best practice mandates binding IAM roles to Google Groups (e.g. `developers@corp.com`, `data-analysts@corp.com`) rather than individual user accounts. Membership in groups is managed via Cloud Identity/Workspace, allowing instant access revocation upon employee offboarding.",
    "distractors": {
      "C": "Folder-level inheritance reduces the number of bindings, but the principal is still an individual user account: offboarding still requires editing IAM policies, and the grant now applies to every project in the folder. The lifecycle problem is fixed by changing the principal to a group, not the scope.",
      "A": "Delegating policy administration to the developers themselves is a privilege-escalation path (projectIamAdmin can grant any role, including to itself) and it changes nothing structurally: access is still bound to individual user emails, so offboarding still means hunting bindings across 50 policies.",
      "B": "Custom roles are bundles of permissions, not identities. Each developer still needs an individual binding in each of the 50 project policies, so the onboarding and offboarding work is unchanged, and organization custom roles are capped (300 per organization), so this scales worse than groups."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding corp-prod --member='group:developers@corp.com' --role='roles/viewer'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Identity"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles#google-groups"
  },
  {
    "id": "ACE-D5-027",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Armor Preconfigured WAF Core Rule Sets",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Armor Preconfigured WAF Rules for OWASP Top 10 Protection",
    "scenario": "Your company's e-commerce web application is protected by Google Cloud Armor. Security mandates require blocking common web application vulnerabilities (OWASP Top 10), specifically SQL Injection (SQLi) and Cross-Site Scripting (XSS) attacks before they reach backend instances. Which Cloud Armor rule expression should you configure?",
    "keywords": [
      "Cloud Armor",
      "OWASP Top 10",
      "SQL Injection",
      "XSS",
      "Preconfigured WAF Rules"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure a Cloud Armor rule with the expression origin.region_code == 'CN' || origin.region_code == 'RU' and action deny-403 at priority 1000 to stop the attacks."
      },
      {
        "letter": "B",
        "text": "Configure Cloud Armor rules using preconfigured WAF expressions: evaluatePreconfiguredExpr('sqli-v33-stable') and evaluatePreconfiguredExpr('xss-v33-stable') with action deny-403."
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Armor throttle rule with --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --enforce-on-key=IP and action rate-based-ban."
      },
      {
        "letter": "D",
        "text": "Configure evaluatePreconfiguredExpr('sqli-v33-stable') and evaluatePreconfiguredExpr('xss-v33-stable') with action deny-403 and the --preview flag set on both rules."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor provides preconfigured WAF rules based on ModSecurity Core Rule Set (CRS 3.3). Using `evaluatePreconfiguredExpr('sqli-v33-stable')` and `evaluatePreconfiguredExpr('xss-v33-stable')` automatically inspects HTTP payloads for SQL injection and cross-site scripting attack vectors at Google's global edge.",
    "distractors": {
      "C": "Rate limiting caps how many requests a client may send; it never inspects the query string or the request body. A single crafted SQLi or XSS request that stays under 100 per minute is forwarded to the backend instances unmodified.",
      "A": "Geo-based rules match on the source location of the request and never on its payload: an SQL injection or XSS string sent from any other country reaches the backends untouched, while legitimate customers in the blocked regions lose access to the shop.",
      "D": "The expressions are the right ones, but a rule in preview mode is evaluated for logging only: the match is recorded in Cloud Logging and Monitoring while the request is still passed to the backend. Nothing is blocked until preview is removed with --no-preview."
    },
    "gcloudCommand": "gcloud compute security-policies rules create 1000 --security-policy=waf-policy --expression=\"evaluatePreconfiguredExpr('sqli-v33-stable')\" --action=deny-403",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/waf-rules"
  },
  {
    "id": "ACE-D5-028",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud KMS Key Ring Creation & CryptoKey Admin",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud KMS Key Rings and CryptoKey Permissions",
    "scenario": "You are setting up a cryptographic key management hierarchy in region `us-east1`. You need to create a regional Key Ring named `app-keyring` and provision a CryptoKey named `customer-data-key` for symmetric encryption with 256-bit AES. Which sequence of gcloud commands creates the Key Ring and CryptoKey?",
    "keywords": [
      "Cloud KMS",
      "gcloud kms keyrings create",
      "gcloud kms keys create",
      "Key Management",
      "AES-256"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=encryption && gcloud kms keyrings create app-keyring --location=us-east1"
      },
      {
        "letter": "B",
        "text": "gcloud kms keyrings create app-keyring --location=global && gcloud kms keys create customer-data-key --keyring=app-keyring --location=global --purpose=encryption"
      },
      {
        "letter": "C",
        "text": "gcloud kms keyrings create app-keyring --location=us-east1 && gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=encryption"
      },
      {
        "letter": "D",
        "text": "gcloud kms keyrings create app-keyring --location=us-east1 && gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=asymmetric-signing"
      }
    ],
    "correct": "C",
    "explanation": "In Cloud KMS, keys belong to Key Rings. You create the Key Ring first (`gcloud kms keyrings create <NAME> --location=<LOC>`), then create the CryptoKey inside that Key Ring (`gcloud kms keys create <NAME> --keyring=<RING> --location=<LOC> --purpose=encryption`).",
    "distractors": {
      "D": "asymmetric-signing creates an RSA or EC key pair for signing and verification, which cannot encrypt data. Symmetric AES-256 requires --purpose=encryption, whose default algorithm is google-symmetric-encryption.",
      "B": "Location is set at creation and immutable: a key ring in global cannot be moved to us-east1 afterwards, and CMEK on a regional resource requires a key in that same region, so this hierarchy cannot encrypt the data it is meant for.",
      "A": "The two commands are right but chained in the wrong order: a CryptoKey can only be created inside an existing key ring, so the first call fails with NOT_FOUND on app-keyring and && never runs the second."
    },
    "gcloudCommand": "gcloud kms keyrings create app-keyring --location=us-east1 && gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=encryption",
    "architectureComponents": [
      "Cloud KMS"
    ],
    "officialDocUrl": "https://cloud.google.com/kms/docs/creating-keys"
  },
  {
    "id": "ACE-D5-029",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Service Account Hardening & Least Privilege",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Default Compute Engine Service Account Privilege Hardening",
    "scenario": "When the Compute Engine API is enabled, Google Cloud automatically creates the default Compute Engine service account (`[PROJECT_NUMBER]-compute@developer.gserviceaccount.com`) and automatically grants it the primitive `roles/editor` role. Security policy dictates eliminating this overprivileged default. What should you do to harden this?",
    "keywords": [
      "Service Account Hardening",
      "Primitive Role Deprecation",
      "Principle of Least Privilege",
      "Default Service Account"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Remove the roles/editor role from the default service account, enforce the Organization Policy 'iam.automaticIamGrantsForDefaultServiceAccounts' (Disable Default Role Grants), and create dedicated custom service accounts with least-privilege roles for all VMs."
      },
      {
        "letter": "B",
        "text": "Delete the default Compute Engine service account entirely from the project, then rely on the Google APIs service agent to authorize all existing VM workloads, and grant roles/editor directly to each individual user who needs to deploy new instances."
      },
      {
        "letter": "C",
        "text": "Keep roles/editor on the default service account but restrict the binding with an IAM Condition limited to business hours, download a JSON key file for each VM, and store those keys in Secret Manager so they can be revoked centrally later."
      },
      {
        "letter": "D",
        "text": "Leave the roles/editor binding in place and instead restrict every VM to the https://www.googleapis.com/auth/cloud-platform access scope, since access scopes always override and narrow the IAM roles granted to the attached service account."
      }
    ],
    "correct": "A",
    "explanation": "Google's enterprise security blueprint strongly recommends disabling automatic Editor grants on default service accounts (`iam.automaticIamGrantsForDefaultServiceAccounts` Org Policy), stripping existing Editor roles, and attaching custom dedicated service accounts with fine-grained least privilege roles to VMs.",
    "distractors": {
      "C": "An IAM Condition on time of day does not reduce the scope of roles/editor during working hours, and downloading long-lived JSON keys for VMs is the opposite of hardening: attached service accounts need no keys at all.",
      "B": "Deleting the default service account breaks every running VM still attached to it, and the Google APIs service agent authorizes Google's own internal operations, not your workloads. Moving roles/editor onto human users makes the overprivilege worse.",
      "D": "Access scopes are a legacy layer that can only narrow, never widen, and cloud-platform is the widest scope there is, so it narrows nothing. The effective permission is the intersection of scope and IAM role, and roles/editor stays fully in force."
    },
    "gcloudCommand": "gcloud projects remove-iam-policy-binding corp-prod --member='serviceAccount:123456789012-compute@developer.gserviceaccount.com' --role='roles/editor'",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine",
      "Organization Policies"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-using-and-managing-service-accounts#default-service-accounts"
  },
  {
    "id": "ACE-D5-030",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Private Service Connect Deployment & Security",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Private Service Connect (PSC) for Secure Private API Access",
    "scenario": "You have Compute Engine instances in a strictly private VPC subnet with no internet access and no external IP addresses. The VMs need to securely communicate with Google APIs (Cloud Storage, BigQuery) and a third-party SaaS provider hosted on GCP without traversing public IP endpoints or setting up complex routing tables. Which technology should you deploy?",
    "keywords": [
      "Private Service Connect",
      "PSC",
      "Private Google Access",
      "Secure Private Ingress",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Private Google Access on the subnet, routed to the private.googleapis.com VIP range 199.36.153.8/30 by a custom static route."
      },
      {
        "letter": "B",
        "text": "Cloud NAT in the region, so the VMs egress to the Google API endpoints and the SaaS provider through reserved static external IPs."
      },
      {
        "letter": "C",
        "text": "VPC Network Peering with the SaaS provider's producer VPC, plus custom route advertisement for the Google API address ranges."
      },
      {
        "letter": "D",
        "text": "Private Service Connect (PSC) endpoints (via forwarding rules with target-google-apis-bundle or service attachments)."
      }
    ],
    "correct": "D",
    "explanation": "Private Service Connect (PSC) allows private consumption of Google APIs and producer services using private internal IP addresses within your VPC, avoiding internet routing, complex VPC peering CIDR overlaps, and external IP vulnerabilities.",
    "distractors": {
      "B": "Cloud NAT solves 'the VM has no external IP', but the packets still leave the VPC and reach both Google and the SaaS provider over public IP endpoints, which is precisely what the requirement forbids.",
      "A": "Private Google Access covers Google APIs only. It gives the VMs no path to the third-party SaaS producer, which is reachable exclusively through a Private Service Connect endpoint pointing at the provider's service attachment.",
      "C": "Peering demands non-overlapping CIDR ranges, exposes every subnet on both sides, and is not transitive; it also carries no traffic to Google APIs. PSC exists to avoid exactly this CIDR and routing coupling."
    },
    "gcloudCommand": "gcloud compute forwarding-rules create psc-google-apis --global --network=prod-vpc --address=10.0.0.100 --target-google-apis-bundle=all-apis",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Private Service Connect"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-service-connect"
  },
  {
    "id": "ACE-D5-031",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Secret Manager Version Management & Security",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Secret Manager Secret Version Rotation and Destruction",
    "scenario": "A database password stored in Secret Manager secret `db-password` was compromised. You immediately generated a new strong password and added it as version 2. You now need to permanently destroy version 1 so that it can never be retrieved or decrypted again by any service account. Which command destroys version 1?",
    "keywords": [
      "Secret Manager",
      "gcloud secrets versions destroy",
      "Compromised Credentials",
      "Security Operations"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud secrets versions disable 1 --secret=db-password"
      },
      {
        "letter": "B",
        "text": "gcloud secrets versions destroy 1 --secret=db-password"
      },
      {
        "letter": "C",
        "text": "gcloud secrets versions destroy latest --secret=db-password"
      },
      {
        "letter": "D",
        "text": "gcloud secrets update db-password --version-destroy-ttl=24h"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud secrets versions destroy <VERSION_NUMBER> --secret=<SECRET_NAME>` permanently destroys the cryptographic payload of that specific secret version, making it irrecoverable while keeping other versions (and the secret metadata) active.",
    "distractors": {
      "A": "Disabling is reversible: the encrypted payload is retained, so anyone able to run versions enable can read the compromised password again. Only destroy removes the material.",
      "C": "Right command, wrong version selector: latest resolves to version 2, so this destroys the freshly rotated password and leaves the compromised version 1 intact and accessible.",
      "D": "This only configures delayed destruction for future requests. Version 1 is untouched, and with a TTL in place a later destroy call merely disables the version until the TTL expires, so it stays recoverable meanwhile."
    },
    "gcloudCommand": "gcloud secrets versions destroy 1 --secret=db-password",
    "architectureComponents": [
      "Secret Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs/destroying-secret-version"
  },
  {
    "id": "ACE-D5-032",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Resource-Level Hierarchy & Scoping",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Roles at the Resource-Level for Fine-Grained Access",
    "scenario": "You have 10 Cloud Storage buckets in project `corp-storage-prod`. A contractor needs read and write access to ONLY ONE specific bucket `gs://contractor-workspace`, and must NOT have access to any of the other 9 buckets in the project. At what level in the Google Cloud resource hierarchy should you bind the IAM role?",
    "keywords": [
      "Cloud IAM",
      "Resource-Level Binding",
      "Cloud Storage Bucket IAM",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "At the project level on corp-storage-prod, using roles/storage.objectAdmin."
      },
      {
        "letter": "B",
        "text": "At the organization level, so the binding is inherited by the target bucket."
      },
      {
        "letter": "C",
        "text": "At the Cloud Storage Bucket resource level on gs://contractor-workspace."
      },
      {
        "letter": "D",
        "text": "At the object prefix level on gs://contractor-workspace/uploads/*."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud IAM policies inherit downwards: Org -> Folder -> Project -> Resource. Binding IAM roles at the specific Resource level (the individual bucket `gs://contractor-workspace`) grants permissions exclusively to that single resource without granting access to other buckets in the project.",
    "distractors": {
      "D": "Cloud Storage IAM has no sub-bucket granularity: the smallest resource that accepts an IAM policy is the bucket itself, so no prefix-scoped binding can be created (only legacy per-object ACLs work below bucket level).",
      "B": "Even broader: an organization-level binding propagates to every folder, project and bucket in the organization, the widest possible grant when the requirement is a single bucket.",
      "A": "IAM bindings are inherited downward, so a role granted on the project applies to all ten buckets it contains, giving the contractor read/write on the nine that must stay off limits."
    },
    "gcloudCommand": "gcloud storage buckets add-iam-policy-binding gs://contractor-workspace --member='user:contractor@partner.com' --role='roles/storage.objectAdmin'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/resource-hierarchy-access-control"
  },
  {
    "id": "ACE-D5-033",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "VPC Service Controls Ingress/Egress Rules",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing VPC Service Controls Perimeter Ingress and Egress Rules for Secure Sharing",
    "scenario": "A data science project `analytics-proj` is protected inside VPC Service Controls Perimeter A. An external partner company running project `partner-proj` (in a different GCP Organization) needs to push analytical datasets into a BigQuery table inside Perimeter A. Instead of dismantling the perimeter, what configuration allows this specific cross-perimeter data exchange?",
    "keywords": [
      "VPC Service Controls",
      "Ingress/Egress Rules",
      "Cross-Organization Data Sharing",
      "Zero Trust"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Remove bigquery.googleapis.com from the restricted services of Perimeter A so the partner's calls into the BigQuery API are no longer blocked by the perimeter."
      },
      {
        "letter": "B",
        "text": "Configure VPC Service Controls Ingress and Egress rules on Perimeter A defining specific source identity, destination project, and API method permissions."
      },
      {
        "letter": "C",
        "text": "Publish a Private Service Connect endpoint for the BigQuery API in partner-proj so their uploads reach Perimeter A over private addressing instead of the internet."
      },
      {
        "letter": "D",
        "text": "Put partner-proj in its own perimeter and join it to Perimeter A with a perimeter bridge so the two perimeters can exchange the BigQuery datasets directly."
      }
    ],
    "correct": "B",
    "explanation": "VPC Service Controls supports directional Ingress and Egress rules. Administrators can establish fine-grained, identity-based and method-based exceptions to securely allow data to enter or leave the perimeter without weakening perimeter boundaries.",
    "distractors": {
      "C": "VPC Service Controls enforces on the identity and the project of the caller, not on the network path taken. A request originating in partner-proj, which sits outside Perimeter A, is still rejected as a perimeter violation even when it arrives over Private Service Connect.",
      "A": "This does unblock the partner, but only by taking BigQuery out of the perimeter altogether: every project inside Perimeter A loses VPC Service Controls protection for BigQuery, which is precisely the dismantling of the boundary the scenario rules out.",
      "D": "Perimeter bridges cannot include projects from different organizations; both perimeters must live in the same organization and access policy, and partner-proj is in another one. A bridge is also bidirectional, so it would expose Perimeter A's data back to the partner."
    },
    "gcloudCommand": "gcloud access-context-manager perimeters update perimeter-a --set-ingress-policies=ingress.yaml",
    "architectureComponents": [
      "VPC Service Controls",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  },
  {
    "id": "ACE-D5-034",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Armor IP Whitelisting Rules",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Armor IP Whitelisting and Blacklisting Rules via CLI",
    "scenario": "You have an administrative dashboard exposed through an External HTTPS Load Balancer. To secure the dashboard, you need to configure a Cloud Armor security policy `admin-waf` such that ONLY traffic from corporate headquarters CIDR `203.0.113.0/24` is allowed (priority 1000), and all other traffic from the public internet is denied with HTTP 403 (default rule 2147483647). Which sequence of commands configures this policy?",
    "keywords": [
      "Cloud Armor",
      "IP Whitelisting",
      "gcloud compute security-policies",
      "HTTP 403",
      "Security Hardening"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create policy admin-waf, keep the default rule at allow, and add a rule at priority 1000 denying src-ip-ranges 0.0.0.0/0 with deny-403."
      },
      {
        "letter": "B",
        "text": "Create policy admin-waf, set the default rule to deny-403, and add the allow rule for src-ip-ranges 203.0.113.0/24 at priority 2147483647."
      },
      {
        "letter": "C",
        "text": "Create policy admin-waf, update default rule to deny-403, and add a rule at priority 1000 allowing src-ip-ranges 203.0.113.0/24."
      },
      {
        "letter": "D",
        "text": "Create policy admin-waf, add a priority 1000 rule allowing src-ip-ranges 203.0.113.0/24, and attach the policy to the dashboard backend service."
      }
    ],
    "correct": "C",
    "explanation": "Creating a Cloud Armor IP Whitelist policy involves creating the policy (`gcloud compute security-policies create`), modifying the default rule (priority 2147483647) to `deny-403`, and adding a higher-priority rule (priority 1000) allowing source IP range `203.0.113.0/24` with action `allow`.",
    "distractors": {
      "D": "Allows headquarters but never denies anyone else: a newly created Cloud Armor policy ships with a default rule at priority 2147483647 whose action is allow, so all other internet traffic still reaches the dashboard.",
      "B": "2147483647 is the reserved priority of the policy's own default rule, so the allow rule cannot be created there; the whitelist entry has to sit at a lower priority number than the deny it is meant to override.",
      "A": "0.0.0.0/0 contains 203.0.113.0/24, and the deny at priority 1000 is evaluated before anything else, so headquarters is locked out of the dashboard along with the rest of the internet."
    },
    "gcloudCommand": "gcloud compute security-policies create admin-waf && gcloud compute security-policies rules update 2147483647 --security-policy=admin-waf --action=deny-403 && gcloud compute security-policies rules create 1000 --security-policy=admin-waf --src-ip-ranges=203.0.113.0/24 --action=allow",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/configure-security-policies#ip-lists"
  },
  {
    "id": "ACE-D5-035",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Audit Logs Security Incident Investigation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Audit Logs: Inspecting Security Access with Logs Explorer",
    "scenario": "A security incident responder is investigating an unauthorized modification to project IAM policies that occurred yesterday. Which Cloud Logging filter expression will return all Cloud Audit Log entries recording IAM policy changes (`SetIamPolicy`) across the project?",
    "keywords": [
      "Cloud Audit Logs",
      "SetIamPolicy",
      "Cloud Logging Filter",
      "Security Forensics",
      "protoPayload"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Fdata_access\" AND protoPayload.methodName=\"SetIamPolicy\""
      },
      {
        "letter": "B",
        "text": "logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"GetIamPolicy\""
      },
      {
        "letter": "C",
        "text": "protoPayload.serviceName=\"cloudresourcemanager.googleapis.com\" AND resource.type=\"project\" AND severity>=ERROR"
      },
      {
        "letter": "D",
        "text": "logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"SetIamPolicy\""
      }
    ],
    "correct": "D",
    "explanation": "Administrative IAM policy changes are recorded in the Admin Activity audit log (`cloudaudit.googleapis.com/activity`) with `protoPayload.methodName=\"SetIamPolicy\"` (or `google.iam.admin.v1.CreateRole`). This records the caller identity, timestamp, and the exact delta between policy versions.",
    "distractors": {
      "B": "Filters the read method instead of the write: GetIamPolicy only shows who inspected the policy, never who changed it, and those entries belong to the Data Access log rather than to the activity log named here.",
      "A": "Right method name, wrong log stream: SetIamPolicy is an administrative write and is always recorded in the activity log. The data_access log holds read operations and is disabled by default, so this filter returns no entries.",
      "C": "The severity floor throws away the evidence: successful Admin Activity entries, SetIamPolicy included, are written with severity NOTICE, so this query surfaces only failed or errored calls and misses the modification entirely."
    },
    "gcloudCommand": "gcloud logging read 'logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"SetIamPolicy\"' --limit=10 --format=json",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud Audit Logs",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit"
  },
  {
    "id": "ACE-D5-036",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud KMS Key Destruction Lifecycle",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud KMS CryptoKey Destruction Schedules and Key Versions",
    "scenario": "A compromised key version in Cloud KMS must be destroyed. To prevent immediate irreversible data loss in case the key is still decrypting archived backups, Cloud KMS enforces a 24-hour destruction schedule (`DESTROY_SCHEDULED` state) before permanent cryptographic destruction. Which command schedules the key version for destruction?",
    "keywords": [
      "Cloud KMS",
      "gcloud kms keys versions destroy",
      "Key Destruction Lifecycle",
      "DESTROY_SCHEDULED"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud kms keys versions disable 3 --key=customer-key --keyring=app-ring --location=us-central1"
      },
      {
        "letter": "B",
        "text": "gcloud kms keys versions destroy 3 --key=customer-key --keyring=app-ring --location=global"
      },
      {
        "letter": "C",
        "text": "gcloud kms keys versions destroy 3 --key=customer-key --keyring=app-ring --location=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud kms keys set-primary-version customer-key --version=4 --keyring=app-ring --location=us-central1"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud kms keys versions destroy <VERSION> --key=<KEY> --keyring=<RING> --location=<LOC>` transitions the key version into the `DESTROY_SCHEDULED` state with a 24-hour recovery window before the cryptographic key material is irreversibly destroyed.",
    "distractors": {
      "A": "Disabling moves the version to DISABLED, which blocks its use but leaves the key material intact and re-enablable at any moment; it never enters DESTROY_SCHEDULED, so the compromised material is never destroyed.",
      "B": "Right command, wrong location: Cloud KMS key rings are location-scoped and app-ring lives in us-central1, so the global path resolves to no resource and the call fails with NOT_FOUND, leaving version 3 active.",
      "D": "Promoting version 4 to primary only changes which version encrypts new data; version 3 stays ENABLED, can still decrypt everything it ever encrypted, and is never scheduled for destruction."
    },
    "gcloudCommand": "gcloud kms keys versions destroy 3 --key=customer-key --keyring=app-ring --location=us-central1",
    "architectureComponents": [
      "Cloud KMS"
    ],
    "officialDocUrl": "https://cloud.google.com/kms/docs/destroy-restore-key"
  },
  {
    "id": "ACE-D5-037",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Organization Policy Domain Restricted Sharing",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Organization Policies: Enforcing Domain Restricted Sharing",
    "scenario": "An enterprise security mandate dictates that project administrators must NEVER be able to grant IAM roles to external identities (such as personal `@gmail.com` or contractor domains). All IAM grants across all projects in the organization must be strictly restricted to corporate Google Workspace directory domain `corp.example.com`. Which Organization Policy constraint enforces this?",
    "keywords": [
      "Organization Policies",
      "Domain Restricted Sharing",
      "iam.allowedPolicyMemberDomains",
      "Directory Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enforce the Organization Policy constraint 'essentialcontacts.allowedContactDomains' with corp.example.com as the single allowed value."
      },
      {
        "letter": "B",
        "text": "Enforce the constraint 'iam.allowedPolicyMemberDomains' at the organization, listing the literal domain string corp.example.com in its allowed values."
      },
      {
        "letter": "C",
        "text": "Remove roles/resourcemanager.projectIamAdmin from project administrators and grant it only to the central security team across every project."
      },
      {
        "letter": "D",
        "text": "Enforce the Organization Policy constraint 'iam.allowedPolicyMemberDomains' specifying the Directory Customer ID for corp.example.com."
      }
    ],
    "correct": "D",
    "explanation": "The `iam.allowedPolicyMemberDomains` Organization Policy constraint (Domain Restricted Sharing) restricts IAM policy bindings exclusively to accounts within approved Google Workspace / Cloud Identity customer domains, preventing accidental or malicious addition of external personal Gmail accounts.",
    "distractors": {
      "B": "The allowed values of this constraint are Cloud Identity customer IDs or organization principal sets, not domain name strings, so the policy is rejected and no domain restriction takes effect.",
      "C": "This limits who may edit IAM policies but not which identities may be added; the security team can still bind an external gmail.com account, and nothing enforces the rule on new projects.",
      "A": "That constraint restricts which domains may receive Essential Contacts notifications; it never inspects IAM policy bindings, so an administrator can still grant a role to a gmail.com account."
    },
    "gcloudCommand": "gcloud resource-manager org-policies set-policy policy.json --organization=123456789012",
    "architectureComponents": [
      "Organization Policies",
      "Cloud IAM",
      "Cloud Identity"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains"
  },
  {
    "id": "ACE-D5-038",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud SQL SSL/TLS Enforcement Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL SSL/TLS Enforcement for Database Client Connections",
    "scenario": "A security compliance framework requires that all client connections to a Cloud SQL MySQL instance `corp-db-prod` must be strictly encrypted using SSL/TLS, rejecting any unencrypted plaintext TCP connections from application servers. Which command enforces SSL/TLS on the instance?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances patch",
      "--ssl-mode=ENCRYPTED_ONLY",
      "SSL Enforcement",
      "Data in Transit"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql ssl client-certs create app key.pem --instance=corp-db-prod"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch corp-db-prod --ssl-mode=ENCRYPTED_ONLY"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances patch corp-db-prod --authorized-networks=10.0.0.0/8"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances describe corp-db-prod --format=\"value(serverCaCert)\""
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --ssl-mode=ENCRYPTED_ONLY` (or `TRUSTED_CLIENT_CERTIFICATES`) enforces that all incoming client TCP connections must establish an SSL/TLS handshake, rejecting unencrypted plaintext SQL queries.",
    "distractors": {
      "C": "Authorized networks decide which source addresses may reach the instance, not whether the session is encrypted. Every host inside 10.0.0.0/8 can still open an unencrypted MySQL connection on port 3306.",
      "D": "describe is a read-only call that prints the server CA certificate so clients can verify the server. Distributing that certificate enables verification but never forces it: plaintext connections are still accepted.",
      "A": "Issuing a client certificate makes an encrypted connection possible but changes no server-side policy. With ssl-mode still allowing both, an application server that simply omits the certificate keeps connecting in plaintext."
    },
    "gcloudCommand": "gcloud sql instances patch corp-db-prod --ssl-mode=ENCRYPTED_ONLY",
    "architectureComponents": [
      "Cloud SQL",
      "Security & Encryption"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/configure-ssl-instance"
  },
  {
    "id": "ACE-D5-039",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Build IAM Security & Roles",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Roles for Cloud Build Trigger Execution",
    "scenario": "A developer needs to create and manage Cloud Build automated triggers and manually invoke builds from their CLI in project `ci-cd-prod`, but must NOT have permissions to modify IAM policies or delete storage buckets. Which predefined IAM role should be granted to the developer?",
    "keywords": [
      "Cloud Build",
      "roles/cloudbuild.builds.editor",
      "Least Privilege",
      "CI/CD Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/cloudbuild.builds.viewer at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudbuild.builds.approver at the project level."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudbuild.builds.editor at the project level."
      },
      {
        "letter": "D",
        "text": "Create a custom role holding only cloudbuild.builds.create."
      }
    ],
    "correct": "C",
    "explanation": "`roles/cloudbuild.builds.editor` provides permissions to create, edit, and run Cloud Build triggers and build executions (`cloudbuild.builds.create`, `cloudbuild.builds.get`, `cloudbuild.triggers.create`), without granting broad administrative access across the project.",
    "distractors": {
      "D": "That permission covers manually invoking a build, but the trigger permissions cloudbuild.triggers.create and cloudbuild.triggers.update are absent, so automated triggers still cannot be managed.",
      "B": "Approver only allows approving or rejecting builds that are already waiting at an approval gate. It carries no cloudbuild.triggers.create and no build invocation permission.",
      "A": "Viewer grants only get and list on builds. The developer could read build history but could not create a trigger or start a build from the CLI, which is the whole requirement."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding ci-cd-prod --member='user:developer@corp.com' --role='roles/cloudbuild.builds.editor'",
    "architectureComponents": [
      "Cloud Build",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/securing-builds/configure-user-access"
  },
  {
    "id": "ACE-D5-040",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Secret Manager Replication Policies",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Secret Manager Automatic Replication vs User-Managed Replication",
    "scenario": "When creating a new Secret Manager secret `payment-api-key`, you want Google Cloud to automatically replicate the secret across multiple Google Cloud regions worldwide without managing individual regional endpoints, ensuring high availability and low latency globally. Which replication policy should you specify?",
    "keywords": [
      "Secret Manager",
      "gcloud secrets create",
      "--replication-policy=automatic",
      "Global HA"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets create gs://payment-api-key --replication=global"
      },
      {
        "letter": "B",
        "text": "gcloud secrets create payment-api-key --replication-policy=automatic"
      },
      {
        "letter": "C",
        "text": "gcloud secrets create payment-api-key --replication-policy=user-managed --locations=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create payment-api-key --replicate=auto"
      }
    ],
    "correct": "B",
    "explanation": "Secret Manager supports `--replication-policy=automatic`, which automatically replicates secret payloads across multiple Google-managed geographical regions for resilience and high availability with zero manual location management.",
    "distractors": {
      "D": "Compute Engine instance creation provisions VMs, not Secret Manager secrets.",
      "C": "`user-managed` with a single region restricts the secret to that single zone/region, failing multi-region redundancy requirements.",
      "A": "Cloud Storage buckets are object stores, not Secret Manager secret objects."
    },
    "gcloudCommand": "gcloud secrets create payment-api-key --replication-policy=automatic",
    "architectureComponents": [
      "Secret Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets#creating_a_secret"
  },
  {
    "id": "ACE-D5-041",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud IAM Role Inheritance & Policy Troubleshooter",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Cloud IAM Role Inheritance and Policy Troubleshooter Diagnostics",
    "scenario": "A developer reports that they cannot delete objects in Cloud Storage bucket `gs://finance-vault`, receiving a 403 Access Denied error. You check the bucket IAM policy and find no role granted to the developer. However, the developer insists their team lead was granted Storage Admin at the Folder level. Which Google Cloud tool allows you to input a user email, resource, and permission to troubleshoot exactly which IAM binding or Deny policy is blocking access?",
    "keywords": [
      "Policy Troubleshooter",
      "Cloud IAM Diagnostics",
      "Role Inheritance",
      "Access Denied"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "IAM Policy Simulator, replaying past access logs against a proposed policy change."
      },
      {
        "letter": "B",
        "text": "Google Cloud Policy Troubleshooter (in Cloud Console or via gcloud policy-troubleshoot)."
      },
      {
        "letter": "C",
        "text": "Cloud Audit Logs filtered on protoPayload.authorizationInfo.granted=false for the bucket."
      },
      {
        "letter": "D",
        "text": "Cloud Asset Inventory, running gcloud asset search-all-iam-policies on the user's email."
      }
    ],
    "correct": "B",
    "explanation": "Policy Troubleshooter analyzes IAM policies across the Organization, Folder, Project, and Resource hierarchy, evaluating allow bindings, conditional policies, and IAM Deny policies to explain why a user was granted or denied a specific permission.",
    "distractors": {
      "D": "The search returns bindings whose members literally contain that email, so a grant inherited through a group or from the folder level, exactly what is happening here, is invisible, and deny policies are not evaluated at all.",
      "A": "Policy Simulator forecasts what a policy change you supply would alter, comparing access before and after over past requests. It needs a proposed policy as input and says nothing about why a live request is being denied now.",
      "C": "Data Access audit logs for Cloud Storage are off by default, so the denied call is likely never recorded; even when it is, the entry names the permission that was missing, not which binding, group inheritance or deny policy decided it."
    },
    "gcloudCommand": "gcloud policy-troubleshoot iam //storage.googleapis.com/projects/_/buckets/finance-vault --principal-email=developer@corp.com --permission=storage.objects.delete",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/troubleshooting-access"
  },
  {
    "id": "ACE-D5-042",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Armor Bot Management & reCAPTCHA Integration",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Armor Bot Management with reCAPTCHA Enterprise Integration",
    "scenario": "An automated bot network is executing credential stuffing attacks against your login portal. You need to integrate Google Cloud Armor with reCAPTCHA Enterprise so that incoming requests with reCAPTCHA risk scores below 0.3 (indicating automated bot traffic) are automatically redirected to a CAPTCHA challenge or blocked at the edge. Which service feature enables this?",
    "keywords": [
      "Cloud Armor",
      "Bot Management",
      "reCAPTCHA Enterprise",
      "Token Assessment",
      "Edge Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor Bot Management with reCAPTCHA Enterprise assessment token validation in security policy rules."
      },
      {
        "letter": "B",
        "text": "reCAPTCHA Enterprise score-based site key assessed by the application backend on every login POST."
      },
      {
        "letter": "C",
        "text": "A Cloud Armor rate-based ban rule keyed on the source IP address with a deny-429 exceed action."
      },
      {
        "letter": "D",
        "text": "Identity-Aware Proxy in front of the portal with Cloud Identity multi-factor authentication enforced."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor Bot Management integrates with reCAPTCHA Enterprise. Security policy rules evaluate `token.recaptcha_session.score` at Google's global edge and apply actions (allow, redirect, challenge, deny-403) to block automated fraud.",
    "distractors": {
      "C": "A distributed botnet rotates through thousands of source addresses and stays below any per-IP threshold. The rule never reads a reCAPTCHA score and cannot serve a challenge, only a blanket block once a limit is crossed.",
      "B": "The assessment runs after the request has crossed the load balancer and reached the service, so the stuffing traffic still consumes backend capacity and database lookups. Nothing is challenged or dropped at Google's edge.",
      "D": "IAP demands that every visitor sign in with a Google identity that has been granted a role on the resource, which is impossible for a public customer login page, and it produces no bot score for the traffic it does let through."
    },
    "gcloudCommand": "gcloud compute security-policies rules create 1000 --security-policy=login-waf --expression=\"token.recaptcha_session.score < 0.3\" --action=deny-403",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/bot-management-overview"
  },
  {
    "id": "ACE-D5-043",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Artifact Registry IAM Security & Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Roles for Artifact Registry Docker Image Pushes",
    "scenario": "A CI/CD runner service account `build-bot@corp.iam.gserviceaccount.com` needs permission to push new Docker container images to Artifact Registry repository `us-docker.pkg.dev/corp-prod/apps` and pull existing images for layer caching, but must NOT have permission to delete the repository or modify repository IAM policies. Which predefined IAM role should be granted?",
    "keywords": [
      "Artifact Registry",
      "roles/artifactregistry.writer",
      "Docker Push",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/artifactregistry.admin on the repository us-docker.pkg.dev/corp-prod/apps."
      },
      {
        "letter": "B",
        "text": "Grant roles/artifactregistry.writer on the Artifact Registry repository (or at project level)."
      },
      {
        "letter": "C",
        "text": "Grant roles/artifactregistry.reader on the repository plus roles/logging.logWriter on the project."
      },
      {
        "letter": "D",
        "text": "Grant roles/storage.objectAdmin on the artifacts.corp-prod.appspot.com Cloud Storage bucket."
      }
    ],
    "correct": "B",
    "explanation": "`roles/artifactregistry.writer` grants permissions to read and write (push and pull) artifacts and container images (`artifactregistry.repositories.uploadArtifacts`, `artifactregistry.repositories.downloadArtifacts`), without granting repository deletion or IAM administration rights.",
    "distractors": {
      "A": "admin does cover push and pull, but it also carries artifactregistry.repositories.delete and artifactregistry.repositories.setIamPolicy, the two capabilities the requirement explicitly forbids. It fails least privilege, not the push.",
      "D": "That is the legacy Container Registry model, where images were stored in a GCS bucket named artifacts.PROJECT-ID.appspot.com. Artifact Registry keeps images in Google-managed storage and authorises only through artifactregistry.* permissions.",
      "C": "reader provides downloadArtifacts, so the layer-cache pull works, but docker push needs artifactregistry.repositories.uploadArtifacts, which reader does not include; the build stops with a denied permission error on the very first layer upload."
    },
    "gcloudCommand": "gcloud artifacts repositories add-iam-policy-binding apps --location=us --member='serviceAccount:build-bot@corp.iam.gserviceaccount.com' --role='roles/artifactregistry.writer'",
    "architectureComponents": [
      "Artifact Registry",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/artifact-registry/docs/access-control"
  },
  {
    "id": "ACE-D5-044",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "VPC Private Google Access Security Configuration",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Private Google Access for Subnets Without External IP Addresses",
    "scenario": "Compute Engine instances in subnet `private-sub` (in region `us-central1`) have private IP addresses only and no public external IPs. Applications on these VMs need to read and write data to Cloud Storage (`storage.googleapis.com`) and BigQuery (`bigquery.googleapis.com`) without sending traffic through the public internet or deploying a NAT gateway. Which subnet setting must be enabled?",
    "keywords": [
      "Private Google Access",
      "Subnet Configuration",
      "Cloud Storage",
      "Private Subnet",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Cloud Router and a Cloud NAT gateway in us-central1 with gcloud compute routers nats create so the VMs egress to the API endpoints through managed public addresses."
      },
      {
        "letter": "B",
        "text": "Enable Private Google Access on the subnet using gcloud compute networks subnets update private-sub --region=us-central1 --enable-private-ip-google-access."
      },
      {
        "letter": "C",
        "text": "Enable Private Google Access for the whole network with gcloud compute networks update prod-vpc --enable-private-ip-google-access so every subnet inherits the setting."
      },
      {
        "letter": "D",
        "text": "Configure Private Services Access by allocating an internal IP range and running gcloud services vpc-peerings connect so the VMs reach the Google service producer network."
      }
    ],
    "correct": "B",
    "explanation": "Enabling Private Google Access (`--enable-private-ip-google-access`) on a VPC subnet allows VM instances with only internal private IP addresses to reach the public IP endpoints of Google APIs and services (Cloud Storage, BigQuery, Pub/Sub) directly over Google's internal private fiber backbone.",
    "distractors": {
      "A": "The requirement explicitly rules out a NAT gateway, and Cloud NAT sends the requests to the public API front ends through external addresses rather than over Google's internal path.",
      "C": "Private Google Access is a per-subnet property configured with gcloud compute networks subnets update; there is no network-level flag, so this command fails and private-sub stays without access.",
      "D": "Private Services Access peers the VPC with service producer networks for managed products such as Cloud SQL or Memorystore; the Cloud Storage and BigQuery API endpoints are not reachable over that peering."
    },
    "gcloudCommand": "gcloud compute networks subnets update private-sub --region=us-central1 --enable-private-ip-google-access",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Storage",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-google-access"
  },
  {
    "id": "ACE-D5-045",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Organization Policy Resource Location Constraint",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Organization Policy Constraints for Resource Locations",
    "scenario": "To comply with European General Data Protection Regulation (GDPR) data sovereignty laws, corporate compliance mandates that developers across all projects in the organization can ONLY provision cloud resources (VMs, Buckets, Databases) inside European regions (`in:europe-locations`). Any attempt to create resources in US or Asia regions must be blocked automatically. Which Organization Policy constraint should you enforce?",
    "keywords": [
      "Organization Policies",
      "gcp.resourceLocations",
      "GDPR Compliance",
      "Data Sovereignty"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enforce 'gcp.resourceLocations' with deniedValues set to 'in:us-locations' and 'in:asia-locations' at the organization node."
      },
      {
        "letter": "B",
        "text": "Add an IAM Condition to the developers' roles/editor binding allowing calls only when resource.name starts with 'zones/europe'."
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'gcp.resourceLocations' with allowedValues set to 'in:europe-locations'."
      },
      {
        "letter": "D",
        "text": "Run 'gcloud config set compute/region europe-west1' as the default configuration on every developer workstation and CI pipeline."
      }
    ],
    "correct": "C",
    "explanation": "The `gcp.resourceLocations` Organization Policy constraint restricts the physical geographic locations where resource creation (Compute Engine, GCS, Cloud SQL, BigQuery) is permitted, preventing resource provisioning outside allowed regions (e.g. `in:europe-locations`).",
    "distractors": {
      "A": "Deny-listing two value groups is not an allowlist: every location outside them stays permitted, so a developer can still provision in southamerica-east1 or australia-southeast1. GDPR sovereignty needs allowedValues set to 'in:europe-locations'.",
      "D": "A client-side default only decides what happens when the region is omitted. Any explicit --region/--zone flag, a Console form, a Terraform provider block or a direct REST call overrides it, so nothing is actually blocked.",
      "B": "An IAM condition constrains one binding at a time: any other principal (service accounts, Terraform pipelines, owners) still creates resources anywhere, and resource.name conditions do not govern the location chosen for a GCS bucket or a BigQuery dataset."
    },
    "gcloudCommand": "gcloud resource-manager org-policies set-policy policy.json --organization=123456789012",
    "architectureComponents": [
      "Organization Policies",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations"
  },
  {
    "id": "ACE-D5-046",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Secret Manager Conditional IAM Access",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Secret Manager Secret IAM Access with Conditional Expiration",
    "scenario": "An on-call engineer needs temporary access to read the production payment secret `stripe-prod-api-key` in Secret Manager. Access must be granted immediately, but must automatically expire in 4 hours (`2026-08-20T23:00:00Z`). Which command grants this conditional access?",
    "keywords": [
      "Secret Manager",
      "IAM Conditions",
      "roles/secretmanager.secretAccessor",
      "request.time"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.viewer' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'"
      },
      {
        "letter": "B",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'"
      },
      {
        "letter": "C",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time > timestamp(\"2026-08-20T23:00:00Z\"),title=OnCallShift'"
      },
      {
        "letter": "D",
        "text": "gcloud projects add-iam-policy-binding corp-prod --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'"
      }
    ],
    "correct": "B",
    "explanation": "Binding `roles/secretmanager.secretAccessor` with an IAM Condition (`request.time < timestamp(...)`) grants time-limited read access that automatically expires and invalidates at the exact specified cutoff time.",
    "distractors": {
      "C": "The comparison operator is inverted: request.time > timestamp(...) denies the binding for the next four hours and then grants it permanently from 23:00 onwards, the opposite of a window that closes by itself.",
      "D": "The expiry works, but binding at the project level grants payload access to every secret in the project for those four hours, including database credentials and signing keys, when only stripe-prod-api-key was in scope.",
      "A": "The condition expires exactly on time, but roles/secretmanager.viewer only carries metadata permissions (secrets.get, secrets.list, versions.list). Reading the payload needs secretmanager.versions.access, so the engineer still gets 403 on the value."
    },
    "gcloudCommand": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'",
    "architectureComponents": [
      "Secret Manager",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs/access-control#conditions"
  },
  {
    "id": "ACE-D5-047",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Functions Security & IAM Roles",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Roles for Cloud Functions Invocations",
    "scenario": "You have deployed a secure, private backend Cloud Function (2nd gen) `process-order` that requires authentication (`--no-allow-unauthenticated`). An external service account `order-client-sa@corp.iam.gserviceaccount.com` needs permission to invoke this function via authenticated HTTPS requests. Which IAM role should you grant to `order-client-sa` on the Cloud Function?",
    "keywords": [
      "Cloud Functions",
      "roles/cloudfunctions.invoker",
      "roles/run.invoker",
      "Private Cloud Function",
      "Authentication"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/cloudfunctions.viewer on the process-order function resource to order-client-sa."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountTokenCreator on order-client-sa so its OIDC identity token is accepted."
      },
      {
        "letter": "C",
        "text": "Redeploy process-order with --ingress-settings=internal-only so that only in-VPC callers reach it."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudfunctions.invoker (and roles/run.invoker for Gen 2) on the Cloud Function resource."
      }
    ],
    "correct": "D",
    "explanation": "Invoking secured Cloud Functions requires `roles/cloudfunctions.invoker` (and `roles/run.invoker` on the underlying Cloud Run service for 2nd gen functions). The calling service account presents a signed Google OIDC ID token to authenticate and invoke the function.",
    "distractors": {
      "B": "That role only decides who may mint tokens for the service account - authentication, not authorization. The function's own IAM policy still has no invoker binding for order-client-sa, so a perfectly valid ID token still returns 403.",
      "C": "Ingress settings filter by network origin, not by identity: they would additionally block a caller outside the VPC, and even an allowed internal request still needs the invoker role, so the authorization gap is untouched.",
      "A": "The viewer role is read-only access to function metadata and locations; it does not contain cloudfunctions.functions.invoke (nor run.invoker on the Gen 2 Cloud Run service), so the authenticated call is rejected with HTTP 403."
    },
    "gcloudCommand": "gcloud functions add-iam-policy-binding process-order --region=us-central1 --member='serviceAccount:order-client-sa@corp.iam.gserviceaccount.com' --role='roles/cloudfunctions.invoker'",
    "architectureComponents": [
      "Cloud Functions",
      "Cloud IAM",
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/functions/docs/securing/managing-access-iam"
  },
  {
    "id": "ACE-D5-048",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud Armor Adaptive Protection",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Armor Adaptive Protection for Automated Layer 7 DDoS Mitigation",
    "scenario": "Your high-traffic web application encounters frequent, sophisticated Layer 7 DDoS attacks that mimic legitimate user behavior. You need Google Cloud to use machine learning to automatically analyze normal traffic baselines, detect application-layer anomalies, generate custom Cloud Armor mitigation WAF rules, and alert security engineers in real time. Which feature should you enable?",
    "keywords": [
      "Cloud Armor",
      "Adaptive Protection",
      "Machine Learning DDoS",
      "L7 Anomaly Detection",
      "Edge Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Throttle the attackers with gcloud compute security-policies rules create 1000 --security-policy=my-policy --action=rate-based-ban --rate-limit-threshold-count=100."
      },
      {
        "letter": "B",
        "text": "Enable Cloud Armor Adaptive Protection on the security policy using gcloud compute security-policies update my-policy --enable-layer7-ddos-defense."
      },
      {
        "letter": "C",
        "text": "Add gcloud compute security-policies rules create 2000 --security-policy=my-policy --expression=\"evaluatePreconfiguredExpr('xss-v33-stable')\" --action=deny-403."
      },
      {
        "letter": "D",
        "text": "Deepen inspection with gcloud compute security-policies update my-policy --json-parsing=STANDARD --log-level=VERBOSE so engineers can study the traffic."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor Adaptive Protection leverages machine learning models to detect Layer 7 application DDoS attacks, identify the specific attack signature, and automatically generate recommended mitigation rules with one-click deployment.",
    "distractors": {
      "D": "Verbose logging and JSON body parsing only enrich what Cloud Armor records per request. No machine learning model runs, no alert is raised and no rule is proposed, so the attack is documented in detail instead of mitigated.",
      "C": "Preconfigured WAF (ModSecurity CRS) expressions match known injection signatures inside a request. An application-layer flood built from well-formed requests matches none of them, and the signature set is static, not learned.",
      "A": "A rate-based ban uses one fixed threshold per source IP; a botnet imitating real users spreads its requests over thousands of addresses and stays under it. Nothing learns a traffic baseline or generates a mitigation rule."
    },
    "gcloudCommand": "gcloud compute security-policies update my-policy --enable-layer7-ddos-defense",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/adaptive-protection-overview"
  },
  {
    "id": "ACE-D5-049",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Organization Policy Disable Service Account Key Creation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud IAM Organization Policy: Disabling Service Account Key Creation",
    "scenario": "To enforce modern identity governance and eliminate the risk of leaked static credentials, corporate security mandates that NO USER or administrator across any project in the organization shall be allowed to create downloadable service account JSON keys. Which Organization Policy constraint enforces this?",
    "keywords": [
      "Organization Policies",
      "iam.disableServiceAccountKeyCreation",
      "Service Account Security",
      "Key Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enforce the Organization Policy constraint 'iam.disableServiceAccountKeyUpload' at the Organization or Folder level."
      },
      {
        "letter": "B",
        "text": "Enforce the Organization Policy constraint 'iam.serviceAccountKeyExpiryHours' with an allowed value of 24 hours."
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'iam.disableServiceAccountKeyCreation' at the Organization or Folder level."
      },
      {
        "letter": "D",
        "text": "Enforce the Organization Policy constraint 'iam.disableServiceAccountCreation' at the Organization or Folder level."
      }
    ],
    "correct": "C",
    "explanation": "The `iam.disableServiceAccountKeyCreation` Organization Policy constraint blocks calls to `CreateServiceAccountKey`, preventing the generation and download of static private key JSON files while allowing keyless Workload Identity Federation and OAuth token impersonation.",
    "distractors": {
      "D": "It prevents new service accounts from being created but leaves every existing service account intact, so downloadable JSON keys can still be generated for them.",
      "B": "This only caps how long a newly created key remains valid; administrators can still create and download JSON key files, which the mandate forbids outright.",
      "A": "That constraint blocks uploading externally generated public keys onto a service account; Google-generated JSON private keys can still be created and downloaded normally."
    },
    "gcloudCommand": "gcloud resource-manager org-policies enable-enforce iam.disableServiceAccountKeyCreation --organization=123456789012",
    "architectureComponents": [
      "Organization Policies",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints"
  },
  {
    "id": "ACE-D5-050",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D5",
    "domainName": "Configuring access and security",
    "subtopic": "Cloud KMS Separation of Duties Architecture",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud KMS Cryptographic Separation of Duties (Admin vs Encrypter/Decrypter)",
    "scenario": "An enterprise security audit requires strict Separation of Duties for cryptographic key management in Cloud KMS. Key administrators must be able to manage key rings, create keys, and configure rotation schedules, but must NEVER have permission to encrypt or decrypt customer data. Data processing applications must be able to encrypt and decrypt data, but must NEVER be able to modify key configurations or rotate keys. How should IAM roles be assigned?",
    "keywords": [
      "Cloud KMS",
      "Separation of Duties",
      "roles/cloudkms.admin",
      "roles/cloudkms.cryptoKeyEncrypterDecrypter",
      "Security Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/cloudkms.admin to Key Administrators (grants management without encrypter/decrypter rights), and grant roles/cloudkms.cryptoKeyEncrypterDecrypter to Application Service Accounts (grants data crypto operations without management rights)."
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudkms.admin plus roles/cloudkms.cryptoKeyEncrypterDecrypter to Key Administrators so they can verify that a new key works, and grant roles/cloudkms.cryptoKeyEncrypterDecrypter to the application service accounts."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudkms.cryptoKeyEncrypter to the application service accounts and roles/cloudkms.cryptoKeyDecrypter to the Key Administrators, so that no single principal holds both halves of the cryptographic operation."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudkms.admin to the Key Administrators and to the application service accounts, and rely on Cloud KMS audit logs plus quarterly reviews of the key ring IAM policy bindings to detect and roll back any misuse."
      }
    ],
    "correct": "A",
    "explanation": "Cloud KMS strictly enforces Separation of Duties by segregating administrative permissions (`roles/cloudkms.admin` manages key rings, rotation schedules, and IAM policies but CANNOT encrypt/decrypt) from cryptographic data plane permissions (`roles/cloudkms.cryptoKeyEncrypterDecrypter` encrypts and decrypts payloads but CANNOT alter key configurations).",
    "distractors": {
      "D": "roles/cloudkms.admin deliberately excludes the encrypt and decrypt permissions, so the application service accounts cannot perform any cryptographic operation and the workload breaks. Audit review is a detective control and grants nothing the data plane needs.",
      "C": "The split is made on the wrong axis. It hands the Key Administrators the decrypt permission, which is the data access the audit forbids, while the applications can encrypt but never read back what they wrote, and nobody receives the key management role at all.",
      "B": "The applications are configured correctly, but the administrators now hold both halves: the encrypter/decrypter role lets them decrypt production data with the very keys they manage. That is the exact privilege combination separation of duties exists to prevent."
    },
    "gcloudCommand": "gcloud kms keyrings add-iam-policy-binding app-keyring --location=us-central1 --member='group:key-admins@corp.com' --role='roles/cloudkms.admin'",
    "architectureComponents": [
      "Cloud KMS",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/kms/docs/separation-of-duties"
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_ACE_QUESTIONS;
  }
  if (typeof global !== 'undefined') {
    global.GCP_ACE_QUESTIONS = GCP_ACE_QUESTIONS;
  }
})(typeof window !== 'undefined' ? window : global);
