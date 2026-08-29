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
    "scenario": "You manage a development Google Cloud project with a monthly budget limit of $2,000. If spending reaches 100% of the budget, you must automatically disable billing or cap resources programmatically to prevent further cloud charges without waiting for manual human email triage. What architecture should you implement?",
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
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Cloud Billing budgets can be configured to publish programmatic notifications to a Cloud Pub/Sub topic whenever budget thresholds are reached. A Cloud Function subscribed to that Pub/Sub topic can execute automated remediation, such as disabling billing or scaling down instances.",
    "distractors": {
      "B": "Cloud Billing email alerts only send notifications to human recipients and cannot directly trigger automated API webhooks without Pub/Sub.",
      "C": "Cloud Monitoring billing metrics are delayed and not designed for immediate programmatic spend capping.",
      "D": "Organization Policies control resource configuration and governance rules, not dynamic real-time financial spend thresholds."
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
    "scenario": "Your organization's security policy requires standardizing Cloud Storage permissions so that object access is managed exclusively via IAM policies rather than individual object Access Control Lists (ACLs). You must enforce this on an existing bucket gs://corp-financial-records. What should you do?",
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
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Enabling uniform bucket-level access disables object-level ACLs across the entire bucket, ensuring that access to all objects is controlled solely through IAM roles and permissions.",
    "distractors": {
      "B": "Setting default ACLs to private still permits object-level ACL modifications and does not disable ACLs uniformly.",
      "C": "Object Lifecycle Management manages object retention, transition, and deletion, not IAM or ACL security policies.",
      "D": "CMEK encrypts object data with customer-managed keys but does not disable Cloud Storage object ACL evaluation."
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
    "scenario": "You are preparing a custom VPC subnet 10.0.0.0/20 in europe-west1 to host a VPC-native Google Kubernetes Engine (GKE) cluster. The cluster requires dedicated, non-overlapping IP address ranges allocated for Kubernetes Pods and Services. How should you configure the subnet before deploying the cluster?",
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
      }
    ],
    "correct": "C",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "VPC-native GKE clusters use secondary IP ranges on the subnet for Kubernetes Pods and Services (via Alias IP ranges), allowing Pods to be first-class citizens on the VPC network without overlay encapsulation.",
    "distractors": {
      "A": "GKE VPC-native clusters allocate Pod and Service addresses from secondary ranges within the same subnet, not across peered VPCs.",
      "B": "Expanding the primary range expands node IP capacity, but VPC-native GKE explicitly requires secondary IP ranges for Pods and Services.",
      "D": "Cloud NAT translates internal private IPs to public IPs for outbound internet access, not internal cluster Pod and Service routing."
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
    "scenario": "An enterprise is organizing 80 Google Cloud projects across Development, Staging, and Production environments for three distinct business units. They need to enforce different IAM access controls and Organization Policies per environment while allowing policy inheritance from the organization root. How should they structure the Resource Manager hierarchy?",
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
      }
    ],
    "correct": "A",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "Using nested folders under the Organization node allows delegating administration and applying IAM policies and Organization Policies hierarchically across business units and environment tiers (dev, stage, prod) with full inheritance.",
    "distractors": {
      "B": "A flat structure eliminates policy inheritance, requiring high-maintenance per-project policy configuration across 80 projects.",
      "C": "Creating separate organizations fragments billing, centralized IAM administration, and Cloud Identity directory integration.",
      "D": "Cloud Billing sub-accounts are used for cost management and invoice routing, not resource access control or Organization Policies."
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
    "scenario": "A junior developer currently has the primitive Editor role on a production project. Security audit findings mandate adhering strictly to the principle of least privilege. The developer only needs to view project settings and manage Compute Engine instances (create, start, stop, delete), without modifying firewall rules or Cloud Storage buckets. Which IAM role should you grant?",
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
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Compute Instance Admin (v1) role (roles/compute.instanceAdmin.v1) provides full control over Compute Engine instances without granting rights to modify VPC firewalls or network configurations. Pairing it with Viewer allows viewing overall project resources.",
    "distractors": {
      "A": "roles/owner is a primitive role with full control over all resources, and roles/compute.admin allows modifying firewall rules and networks.",
      "B": "roles/compute.networkAdmin and roles/storage.admin grant network and storage management, but not VM instance creation/deletion.",
      "C": "Keeping the primitive Editor role violates least privilege principles and still grants broad modify permissions across other services."
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
    "scenario": "Developers in your engineering department have permission to create new Google Cloud projects. When creating a project, they must link it to the corporate Cloud Billing account 01A2B3-45C6D7-89E0F1. However, they must not be allowed to view spending across other projects or modify billing terms. Which role should you assign?",
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
      }
    ],
    "correct": "D",
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "explanation": "The Billing Account User role (roles/billing.user) allows users to link projects to a Cloud Billing account without granting permissions to view spend across other projects, modify payment instruments, or manage billing account administrators.",
    "distractors": {
      "A": "roles/billing.admin grants full administrative control over payment methods, billing accounts, and org-wide spend.",
      "B": "roles/billing.viewer allows viewing all cost details across all linked projects in the billing account, but does not allow linking projects.",
      "C": "roles/resourcemanager.projectCreator applies to organizations and folders, not Cloud Billing accounts."
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
        "text": "Generate a service account JSON key file configured with an expiration header timestamp."
      },
      {
        "letter": "B",
        "text": "Assign the role on the project and configure a Cloud Scheduler job to revoke permissions."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudsql.client on the project combined with a Cloud Armor access filter."
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
      "A": "Service account JSON key files do not support embedded expiration dates to automatically invalidate themselves.",
      "B": "Cloud Scheduler jobs introduce custom operational complexity and potential failure points compared to native declarative IAM Conditions.",
      "C": "roles/cloudsql.client does not grant database admin privileges, and Cloud Armor filters web requests rather than Google Cloud IAM APIs."
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
        "text": "Delete the existing active key first, then generate a new replacement key and deploy it."
      },
      {
        "letter": "B",
        "text": "Disable the service account in Cloud Console for 24 hours, then re-enable with a new key."
      },
      {
        "letter": "C",
        "text": "Edit the existing JSON key file locally and update the expiration timestamp property."
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
      "A": "Deleting the active key before configuring and deploying the new key causes immediate authentication failures and downtime.",
      "B": "Disabling the service account blocks all authentication attempts across all systems using that account, causing an immediate outage.",
      "C": "Service account keys use cryptographic signatures generated by Google; editing the local JSON file invalidates the key signature."
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
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud SDK Release Channels & Preview Features",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Installing Alpha and Beta Command Groups in gcloud SDK",
    "scenario": "You need to test an early-preview feature of Google Cloud that is currently only available under the `gcloud beta` or `gcloud alpha` CLI command groups. When executing the command, gcloud states that the component is not installed. What should you do?",
    "keywords": [
      "gcloud alpha",
      "gcloud beta",
      "gcloud components install",
      "Cloud SDK"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Switch your gcloud configuration account to a Google employee email address."
      },
      {
        "letter": "B",
        "text": "Install a third-party Python package from PyPI."
      },
      {
        "letter": "C",
        "text": "Run gcloud components install alpha and gcloud components install beta."
      },
      {
        "letter": "D",
        "text": "Download the raw source code of gcloud from GitHub and compile it locally."
      }
    ],
    "correct": "C",
    "explanation": "The `alpha` and `beta` command groups in Google Cloud SDK are packaged as optional SDK components. You can install them directly using `gcloud components install alpha` and `gcloud components install beta`.",
    "distractors": {
      "A": "Alpha/Beta CLI features are available to all GCP customers by installing the corresponding CLI component.",
      "D": "Compiling from source is unnecessary and unsupported for the gcloud binary distribution.",
      "B": "gcloud components are distributed and managed via the official Google Cloud SDK package manager, not PyPI."
    },
    "gcloudCommand": "gcloud components install alpha beta",
    "architectureComponents": [
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/docs/components"
  },
  {
    "id": "ACE-D1-052",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Access Control Models",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Auditing Legacy ACLs vs Uniform Bucket-Level Access in Cloud Storage",
    "scenario": "A compliance team is reviewing storage security across 40 Cloud Storage buckets. Some legacy buckets have fine-grained ACLs granting public read access to specific individual object blobs. The security team wants to guarantee that NO individual object can grant access outside of project IAM policies. What action should be taken?",
    "keywords": [
      "Cloud Storage",
      "Uniform Bucket-Level Access",
      "IAM Governance",
      "ACL Remediation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apply an egress firewall rule blocking Google Cloud Storage API."
      },
      {
        "letter": "B",
        "text": "Enable Uniform Bucket-Level Access on all buckets, which immediately nullifies and ignores all existing object ACLs."
      },
      {
        "letter": "C",
        "text": "Run a recursive gsutil rm command to remove all files and re-upload them."
      },
      {
        "letter": "D",
        "text": "Change bucket storage class from Nearline to Standard."
      }
    ],
    "correct": "B",
    "explanation": "Enabling Uniform Bucket-Level Access (UBLA) uniformly enforces IAM policies across all objects in the bucket, immediately disabling fine-grained ACLs and preventing object-level public grants from taking effect.",
    "distractors": {
      "C": "Deleting and re-uploading objects causes massive operational overhead, high bandwidth costs, and downtime.",
      "D": "Storage class changes have zero impact on access control or ACL evaluation.",
      "A": "Firewall rules govern VPC IP packets, not Cloud Storage API authorization models."
    },
    "gcloudCommand": "gcloud storage buckets update gs://audit-target-bucket --uniform-bucket-level-access",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/uniform-bucket-level-access"
  },
  {
    "id": "ACE-D1-053",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Peering Custom Route Exchange",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Importing and Exporting Custom Routes Across VPC Peering Connections",
    "scenario": "VPC-A is peered with VPC-B. An on-premises data center is connected to VPC-A via Cloud Interconnect. Compute Engine instances in VPC-B need to communicate with on-premises servers over the Interconnect connected to VPC-A. What must you configure on the VPC Peering connection?",
    "keywords": [
      "VPC Peering",
      "Custom Routes",
      "Export Routes",
      "Import Routes",
      "Hybrid Connectivity"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure the VPC Peering connection on VPC-A to export custom routes, and configure the peering connection on VPC-B to import custom routes."
      },
      {
        "letter": "B",
        "text": "Create an Unmanaged Instance Group in VPC-A to forward packets."
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud NAT gateway in VPC-B."
      },
      {
        "letter": "D",
        "text": "Change the MTU of both VPC networks to 9000 bytes."
      }
    ],
    "correct": "A",
    "explanation": "By default, VPC Peering only exchanges subnet routes. To allow a peered VPC (VPC-B) to reach on-premises networks routed via Cloud Interconnect/Cloud Router in VPC-A, you must explicitly enable 'Export custom routes' on VPC-A's peering configuration and 'Import custom routes' on VPC-B's peering configuration.",
    "distractors": {
      "D": "MTU changes adjust packet payload sizing, but do not advertise network routing tables.",
      "C": "Cloud NAT is for outbound internet traffic, not private hybrid RFC 1918 on-premises routing.",
      "B": "Software packet forwarders create performance bottlenecks and unnecessary maintenance."
    },
    "gcloudCommand": "gcloud compute networks peerings update peer-a-to-b --network=vpc-a --export-custom-routes && gcloud compute networks peerings update peer-b-to-a --network=vpc-b --import-custom-routes",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Interconnect",
      "Cloud Router"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/vpc-peering#custom-routes"
  },
  {
    "id": "ACE-D1-054",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Organization Policy Domain-Restricted Sharing",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restricting Public Sharing with Domain-Restricted Sharing Constraint",
    "scenario": "To prevent internal corporate documents and GCP resources from being shared with external personal Gmail accounts, your organization requires that IAM roles can ONLY be granted to identities belonging to the corporate Cloud Identity domain `corp.example.com`. How should you enforce this?",
    "keywords": [
      "Organization Policy",
      "Domain-Restricted Sharing",
      "Directory Customer ID",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enforce the Organization Policy constraint constraints/iam.allowedPolicyMemberDomains specifying your Cloud Identity Customer ID."
      },
      {
        "letter": "B",
        "text": "Write a weekly audit script using gcloud projects get-iam-policy to email violators."
      },
      {
        "letter": "C",
        "text": "Configure Cloud Armor IP filtering on Google Workspace."
      },
      {
        "letter": "D",
        "text": "Delete all external users from the Google Cloud Platform Console."
      }
    ],
    "correct": "A",
    "explanation": "The Organization Policy constraint `constraints/iam.allowedPolicyMemberDomains` (Domain-Restricted Sharing) restricts IAM policy member grants to only authorized Cloud Identity / Google Workspace domain customer IDs (e.g. `C01234567`), preventing accidental grants to external `@gmail.com` or third-party domain accounts.",
    "distractors": {
      "D": "Manually deleting users does not prevent future accidental grants to external email addresses.",
      "C": "Cloud Armor is an HTTP WAF and cannot govern IAM policy identity memberships.",
      "B": "Audit scripts detect violations after they happen, leaving a window of exposure."
    },
    "gcloudCommand": "gcloud resource-manager org-policies set-policy --organization=123456789012 policy-domain-restricted.yaml",
    "architectureComponents": [
      "Resource Manager",
      "Organization Policies",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains"
  },
  {
    "id": "ACE-D1-055",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Audit Logs & Data Access Logging",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enabling and Exporting Data Access Audit Logs for Sensitive Storage Buckets",
    "scenario": "A regulatory compliance requirement dictates that all read and write operations (Data Access Logs: `ADMIN_READ`, `DATA_READ`, `DATA_WRITE`) on Cloud Storage in project `healthcare-pii` must be captured and retained for 5 years in BigQuery. Data Access logs are disabled by default due to high volume. How should you enable and store them?",
    "keywords": [
      "Cloud Audit Logs",
      "Data Access Logs",
      "Cloud Logging Sink",
      "BigQuery",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable VPC Flow Logs on all subnets."
      },
      {
        "letter": "B",
        "text": "Enable Data Access audit logging for Google Cloud Storage in the project's IAM Audit Config, and create a Cloud Logging sink routing the logs to a BigQuery dataset."
      },
      {
        "letter": "C",
        "text": "Turn on Cloud Storage Object Versioning."
      },
      {
        "letter": "D",
        "text": "Deploy a Compute Engine agent on every storage bucket to stream access logs."
      }
    ],
    "correct": "B",
    "explanation": "Data Access audit logs (DATA_READ, DATA_WRITE) must be explicitly enabled in IAM Audit Configuration because they are off by default. Once enabled, a Cloud Logging Sink (`gcloud logging sinks create`) routes the generated audit logs to a BigQuery dataset for long-term analytics and retention.",
    "distractors": {
      "D": "Compute Engine agents cannot be installed on serverless Cloud Storage buckets.",
      "A": "VPC Flow Logs record network packet 5-tuples (IP/port), not application-level Cloud Storage object read/write operations.",
      "C": "Object Versioning retains object payloads, but does not generate structured caller audit logs."
    },
    "gcloudCommand": "gcloud logging sinks create storage-audit-sink bigquery.googleapis.com/projects/healthcare-pii/datasets/audit_logs --log-filter='protoPayload.serviceName=\"storage.googleapis.com\"'",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud Audit Logs",
      "BigQuery",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/configure-data-access"
  },
  {
    "id": "ACE-D1-056",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Billing Budgets & Serverless Remediation",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Triggering Serverless Automation from Cloud Billing Budget Alerts",
    "scenario": "You need to build an automated FinOps circuit breaker that triggers when an automated testing project exceeds $5,000 in monthly spend. The system must immediately revoke developer Compute Admin roles to halt runaway test clusters. What architecture should you implement?",
    "keywords": [
      "Cloud Billing",
      "Budget Pub/Sub",
      "Cloud Run / Functions",
      "Automated Remediation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Write a cron script in a developer laptop that checks billing every 10 minutes."
      },
      {
        "letter": "B",
        "text": "Set up a Cloud Monitoring alert that sends an SMS to the developer."
      },
      {
        "letter": "C",
        "text": "Use Cloud Armor to block HTTP traffic to the testing VMs."
      },
      {
        "letter": "D",
        "text": "Configure the Cloud Billing Budget with a 100% threshold publishing to a Pub/Sub topic that triggers an event-driven Cloud Function to update project IAM policies."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Billing budgets natively publish notification payloads to Cloud Pub/Sub topics. Connecting an event-driven Cloud Function (or Cloud Run service) to that topic allows executing immediate programmatic remediation (such as disabling billing, scaling down MIGs, or removing IAM roles) when budget thresholds are breached.",
    "distractors": {
      "C": "Cloud Armor protects HTTP applications against web attacks, not project financial budget overflows.",
      "A": "Running scripts on developer laptops is unreliable, unmonitored, and prone to laptop sleep/offline states.",
      "B": "SMS alerts require manual human action and do not provide immediate automated circuit-breaking."
    },
    "gcloudCommand": "gcloud functions deploy budget-circuit-breaker --runtime=python311 --trigger-topic=billing-budget-alerts --entry-point=handle_budget_event",
    "architectureComponents": [
      "Cloud Billing",
      "Cloud Pub/Sub",
      "Cloud Functions",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify#cap_spend"
  },
  {
    "id": "ACE-D1-057",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud auth activate-service-account in CI/CD",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Authenticating Cloud SDK in CI/CD Runners Using Service Account Keys",
    "scenario": "In a legacy on-premises Jenkins build agent, you need to authenticate the `gcloud` CLI tool non-interactively to deploy code to App Engine. You have a service account key file located at `/etc/jenkins/gcp-deployer-key.json`. Which command should the Jenkins pipeline execute?",
    "keywords": [
      "gcloud auth activate-service-account",
      "--key-file",
      "CI/CD",
      "Cloud SDK"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud config set account /etc/jenkins/gcp-deployer-key.json"
      },
      {
        "letter": "B",
        "text": "gcloud auth activate-service-account app-deployer@prod.iam.gserviceaccount.com --key-file=/etc/jenkins/gcp-deployer-key.json"
      },
      {
        "letter": "C",
        "text": "cat /etc/jenkins/gcp-deployer-key.json | gcloud init --force"
      },
      {
        "letter": "D",
        "text": "gcloud auth login --interactive=false --key=/etc/jenkins/gcp-deployer-key.json"
      }
    ],
    "correct": "B",
    "explanation": "The standard, non-interactive command to authenticate the Google Cloud SDK using a service account private key file is `gcloud auth activate-service-account [ACCOUNT] --key-file=[PATH_TO_KEY_FILE]`.",
    "distractors": {
      "A": "`gcloud config set account` sets an active email identity, but does not perform cryptographic key authentication.",
      "C": "`gcloud init` is an interactive guided setup wizard and cannot accept raw key JSON via standard input.",
      "D": "`gcloud auth login` is intended for browser-based interactive human user logins."
    },
    "gcloudCommand": "gcloud auth activate-service-account app-deployer@prod.iam.gserviceaccount.com --key-file=/etc/jenkins/gcp-deployer-key.json",
    "architectureComponents": [
      "Cloud SDK",
      "Cloud IAM",
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account"
  },
  {
    "id": "ACE-D1-058",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage CMEK & Cloud KMS",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Setting Default Customer-Managed Encryption Keys (CMEK) on Cloud Storage Buckets",
    "scenario": "A security policy requires all new objects uploaded to a Cloud Storage bucket `finance-vault` to be encrypted using a Customer-Managed Encryption Key (CMEK) stored in Cloud KMS. How should you configure the bucket so developers do not need to specify the KMS key on every individual upload?",
    "keywords": [
      "Cloud Storage",
      "CMEK",
      "Cloud KMS",
      "Default Encryption Key"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Upload all files as ZIP archives encrypted with standard AES-256."
      },
      {
        "letter": "B",
        "text": "Create an IAM Condition requiring developers to pass the key header."
      },
      {
        "letter": "C",
        "text": "Configure Cloud Armor to inject the KMS key into HTTP headers."
      },
      {
        "letter": "D",
        "text": "Set the default KMS key on the bucket using gcloud storage buckets update gs://finance-vault --default-encryption-key=projects/corp-sec/locations/us/keyRings/vault-ring/cryptoKeys/finance-key."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage allows setting a default Customer-Managed Encryption Key (`--default-encryption-key`) on a bucket. Once configured, all newly uploaded objects are automatically encrypted with the specified Cloud KMS key without requiring client-side encryption flags on each upload.",
    "distractors": {
      "B": "IAM Conditions cannot validate custom HTTP object upload headers.",
      "A": "Client-side ZIP encryption adds operational overhead and loses native Cloud Storage server-side encryption management.",
      "C": "Cloud Armor does not interface with Cloud Storage bucket encryption settings."
    },
    "gcloudCommand": "gcloud storage buckets update gs://finance-vault --default-encryption-key=projects/corp-sec/locations/us/keyRings/vault-ring/cryptoKeys/finance-key",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud KMS",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/encryption/customer-managed-keys#default-bucket"
  },
  {
    "id": "ACE-D1-059",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Shared VPC Subnet-Level IAM Delegation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Granting Network User Role on Specific Subnets in Shared VPC",
    "scenario": "In a Shared VPC environment, the security policy states that the engineering team in Service Project A may deploy Compute Engine instances into `subnet-a` only, and must be strictly blocked from attaching instances to `subnet-b`. How should the Shared VPC Admin configure permissions?",
    "keywords": [
      "Shared VPC",
      "roles/compute.networkUser",
      "Subnet-Level IAM",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant the roles/compute.networkUser role to the Service Project A service account / developers on subnet-a specifically in the Host Project."
      },
      {
        "letter": "B",
        "text": "Grant roles/compute.networkAdmin on the entire Host Project."
      },
      {
        "letter": "C",
        "text": "Grant roles/compute.networkUser at the root Organization level."
      },
      {
        "letter": "D",
        "text": "Create two separate Shared VPC Host projects."
      }
    ],
    "correct": "A",
    "explanation": "In Shared VPC, the `roles/compute.networkUser` role can be granted at the individual subnet level in the host project. This allows service project users to consume only authorized subnets while preventing access to unassigned subnets.",
    "distractors": {
      "D": "Creating multiple host projects duplicates infrastructure unnecessarily when subnet-level IAM natively solves this.",
      "B": "Granting `compute.networkAdmin` gives full rights to create, delete, and alter the entire VPC network.",
      "C": "Granting `networkUser` at the org level permits attaching VMs to every subnet in every project across the company."
    },
    "gcloudCommand": "gcloud compute networks subnets add-iam-policy-binding subnet-a --region=us-central1 --member='serviceAccount:1234567890@cloudservices.gserviceaccount.com' --role='roles/compute.networkUser'",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc#iam_in_shared_vpc"
  },
  {
    "id": "ACE-D1-060",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Resource Manager Tags & Conditional IAM",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Applying Conditional IAM Policies Using Resource Manager Tags",
    "scenario": "Your organization has attached Resource Manager Tags (`environment: production` and `environment: staging`) to projects. You need to grant the QA engineering group `roles/compute.admin` ONLY on projects that carry the `environment: staging` tag, without having to manually modify IAM policies when new staging projects are created. How should you configure this?",
    "keywords": [
      "Resource Manager Tags",
      "IAM Conditions",
      "resource.matchTag",
      "Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create network firewall rules filtering staging IP addresses."
      },
      {
        "letter": "B",
        "text": "Assign the primitive Editor role to all QA engineers on the entire Organization."
      },
      {
        "letter": "C",
        "text": "Add a manual cron script to check project names every night."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin to group:qa-team@corp.com at the Organization or Folder level with an IAM Condition checking resource.matchTag('123456/environment', 'staging')."
      }
    ],
    "correct": "D",
    "explanation": "Resource Manager Tags combined with IAM Conditions allow attribute-based access control (ABAC). Binding `roles/compute.admin` with a condition `resource.matchTag('TAG_KEY_ID', 'TAG_VALUE_ID')` at a parent folder or organization level automatically grants permissions on any project inheriting or bound to that tag.",
    "distractors": {
      "B": "Granting Editor at the organization level exposes all production systems to unauthorized changes.",
      "A": "Firewall rules govern network IP routing, not GCP Cloud IAM resource permissions.",
      "C": "Custom scripts are reactive and lack native atomic IAM evaluation."
    },
    "gcloudCommand": "gcloud organizations add-iam-policy-binding 123456789012 --member='group:qa-team@corp.com' --role='roles/compute.admin' --condition='expression=resource.matchTag(\"123456/env\", \"staging\"),title=Staging_Compute_Admin'",
    "architectureComponents": [
      "Resource Manager",
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/tags-access-control"
  },
  {
    "id": "ACE-D2-001",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Machine Families & C2 Optimization",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Compute Engine Machine Family for High-Frequency Trading Workloads",
    "scenario": "A financial engineering firm is migrating a single-threaded, high-frequency algorithmic pricing engine to Google Cloud. The workload is strictly CPU-bound, requires maximum per-core clock speed, ultra-low memory latency, and does not benefit from high core counts. Which Compute Engine machine family should you recommend?",
    "keywords": [
      "Compute Engine",
      "C2 Compute-Optimized",
      "Single-Threaded Performance",
      "Machine Family"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute-optimized (C2 or C2D) machine series."
      },
      {
        "letter": "B",
        "text": "Accelerator-optimized (A2) GPU machine series."
      },
      {
        "letter": "C",
        "text": "General-purpose (E2) shared-core machine series."
      },
      {
        "letter": "D",
        "text": "Memory-optimized (M1 or M2) machine series."
      }
    ],
    "correct": "A",
    "explanation": "Compute-optimized C2 instances offer the highest per-core performance with sustained high all-core turbo clock frequencies (up to 3.8 GHz) and dedicated L3 cache per core, making them ideal for compute-intensive, CPU-bound, and single-threaded financial models.",
    "distractors": {
      "D": "Memory-optimized (M-series) machines are designed for massive in-memory databases (SAP HANA), not ultra-high per-core clock speeds.",
      "C": "E2 machines are cost-effective general-purpose instances with variable/shared vCPUs unsuitable for high-frequency low-jitter workloads.",
      "B": "A2 instances are built for GPU-accelerated machine learning with NVIDIA Ampere GPUs, not single-threaded CPU execution."
    },
    "gcloudCommand": "gcloud compute instances create hft-pricing-engine --zone=us-central1-a --machine-type=c2-standard-4 --image-family=debian-11 --image-project=debian-cloud",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/compute-optimized-machines"
  },
  {
    "id": "ACE-D2-002",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Classes & Lifecycle Transitions",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Choosing Cost-Effective Cloud Storage Classes and Lifecycle Rules",
    "scenario": "Your company generates 10 TB of daily transaction logs. Business requirements dictate: 1) Active immediate access for the first 30 days. 2) Logs must be retained for 5 years for tax compliance, but are rarely accessed after day 90. 3) Minimize total storage costs without manual administrative tasks. What is the recommended strategy?",
    "keywords": [
      "Cloud Storage",
      "Lifecycle Management",
      "Standard",
      "Nearline",
      "Archive",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a bucket with default Standard class and configure an Object Lifecycle Management rule to transition objects to Nearline after 30 days, to Archive after 90 days, and delete them after 1825 days (5 years)."
      },
      {
        "letter": "B",
        "text": "Store data in Standard class and run a monthly cron script to move objects to Coldline using gsutil mv."
      },
      {
        "letter": "C",
        "text": "Store all data in Archive class from day 1 and accept retrieval fees during the first 30 days."
      },
      {
        "letter": "D",
        "text": "Store all logs on standard Persistent Disks attached to a Compute Engine VM."
      }
    ],
    "correct": "A",
    "explanation": "Object Lifecycle Management transitions objects automatically based on age: Standard (days 1-30, zero retrieval fee for high-frequency reads), Nearline (days 31-90), Archive (days 91-1825, lowest GB/month cost), and deletion at 5 years (1825 days).",
    "distractors": {
      "D": "Persistent Disks cost significantly more per GB/month than Cloud Storage Archive class and lack automated tiered archival.",
      "C": "Archive storage incurs substantial retrieval fees ($0.05/GB) and minimum storage duration penalties if accessed frequently in the first 30 days.",
      "B": "Manual scripts create unnecessary operational risk, cron failure points, and data egress overhead."
    },
    "gcloudCommand": "gcloud storage buckets update gs://company-audit-logs --lifecycle-file=lifecycle-policy.json",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/lifecycle"
  },
  {
    "id": "ACE-D2-003",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud SQL HA Architecture & Failover",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud SQL High Availability with Regional Failover",
    "scenario": "You are designing the relational database tier for an e-commerce checkout application on Cloud SQL for PostgreSQL. The SLA requires high availability with automated failover in case of a zone outage, zero manual DNS reconfiguration, and point-in-time recovery for the past 7 days. How should you configure the instance?",
    "keywords": [
      "Cloud SQL",
      "High Availability",
      "Regional",
      "Automated Failover",
      "Point-in-Time Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure the Cloud SQL instance as Regional with High Availability (HA) enabled, automated daily backups, and Point-in-Time Recovery (PITR) enabled via transaction write-ahead logs."
      },
      {
        "letter": "B",
        "text": "Deploy two independent Zonal Cloud SQL instances in different regions and synchronize them using custom pg_dump scripts."
      },
      {
        "letter": "C",
        "text": "Use Cloud Spanner configured with a single read-only replica."
      },
      {
        "letter": "D",
        "text": "Deploy a single Zonal Cloud SQL instance with SSD storage and 100 Read Replicas."
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL High Availability (HA) configuration provisions a primary instance in one zone and a synchronous standby replica in a secondary zone within the same region. If the primary zone fails, Cloud SQL automatically triggers failover to the standby with no endpoint IP changes. PITR uses binary logs/WAL to restore to any exact second.",
    "distractors": {
      "D": "Read replicas offload read queries but do not provide automated master write failover during zonal failure.",
      "C": "Cloud Spanner is a globally distributed database that is over-engineered and requires application rewriting for standard PostgreSQL apps.",
      "B": "Manual pg_dump replication is asynchronous, introduces data loss, and lacks automated zero-touch failover."
    },
    "gcloudCommand": "gcloud sql instances create checkout-db-ha --database-version=POSTGRES_15 --tier=db-custom-4-16384 --region=us-central1 --availability-type=REGIONAL --backup-start-time=02:00 --enable-point-in-time-recovery",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/high-availability"
  },
  {
    "id": "ACE-D2-004",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Database Selection: Cloud Spanner vs Cloud SQL",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Spanner vs Cloud SQL for Global Multi-Region Scalability",
    "scenario": "A multinational banking application requires a relational database with strict ACID transactions, schema consistency, horizontal write scalability across North America, Europe, and Asia, and 99.999% availability SLA with zero scheduled maintenance downtime. Which database solution should you architect?",
    "keywords": [
      "Cloud Spanner",
      "ACID",
      "Horizontal Scaling",
      "Multi-Region",
      "99.999% SLA"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Firestore in Datastore mode."
      },
      {
        "letter": "B",
        "text": "Cloud SQL for MySQL configured with cross-region read replicas."
      },
      {
        "letter": "C",
        "text": "Cloud Spanner configured with a Multi-Region instance configuration."
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable with multi-cluster replication."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Spanner is Google's globally distributed, horizontally scalable NewSQL relational database that delivers external consistency, full ACID transactions, multi-region write scalability, and up to 99.999% availability SLA.",
    "distractors": {
      "B": "Cloud SQL is a single-node write architecture and cannot scale relational writes horizontally across continents.",
      "D": "Cloud Bigtable is a NoSQL wide-column store and does not support multi-table relational ACID transactions or SQL joins.",
      "A": "Firestore is a NoSQL document database, not a distributed SQL relational database."
    },
    "gcloudCommand": "gcloud spanner instances create global-bank-spanner --config=nam-eur-asia1 --nodes=3 --description='Global Core Banking Spanner'",
    "architectureComponents": [
      "Cloud Spanner"
    ],
    "officialDocUrl": "https://cloud.google.com/spanner/docs/instance-configurations"
  },
  {
    "id": "ACE-D2-005",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud NAT Port Allocation & Sizing",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud NAT Gateway Sizing and Port Allocation",
    "scenario": "You are planning network egress for 500 private Compute Engine backend VMs running microservices that communicate with external SaaS APIs. Each VM opens up to 120 concurrent outbound connections. You deploy a Cloud NAT Gateway. To prevent port exhaustion while conserving external IP address costs, how should you configure port allocation?",
    "keywords": [
      "Cloud NAT",
      "Port Allocation",
      "min-ports-per-vm",
      "SNAT",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Assign a dedicated public IP address to each of the 500 VMs."
      },
      {
        "letter": "B",
        "text": "Disable Cloud NAT and route outbound traffic through a single e2-micro VM running iptables."
      },
      {
        "letter": "C",
        "text": "Set min-ports-per-vm to 64,000 so one IP covers all VMs."
      },
      {
        "letter": "D",
        "text": "Set the minimum number of ports per VM (`--min-ports-per-vm`) to 256 and enable dynamic port allocation on the Cloud NAT gateway."
      }
    ],
    "correct": "D",
    "explanation": "Cloud NAT assigns a fixed block of source NAT ports to each private VM based on `--min-ports-per-vm` (default is 64). Sizing it to 256 (or enabling Dynamic Port Allocation) ensures VMs requiring up to 120 concurrent connections never experience SNAT port exhaustion while minimizing the number of required external NAT IPs.",
    "distractors": {
      "B": "A single e2-micro proxy is a severe bottleneck, lacks high availability, and caps network throughput at 1 Gbps.",
      "A": "Public IPs on private backend microservices violate security isolation and incur high static IP reservation costs.",
      "C": "A single IPv4 address only has 64,512 usable NAT ports total; allocating 64,000 ports per VM would limit the entire NAT gateway to 1 VM per IP."
    },
    "gcloudCommand": "gcloud compute routers nats create nat-gateway --router=nat-router --region=us-central1 --auto-allocate-nat-external-ips --min-ports-per-vm=256 --enable-dynamic-port-allocation",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud NAT",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/nat/docs/ports-and-addresses"
  },
  {
    "id": "ACE-D2-006",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Load Balancing: Global External HTTPS LB",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Cloud Load Balancing for Global Anycast HTTPS Routing",
    "scenario": "A media publishing platform serves web traffic to users in North America, Europe, and Asia. You need a load balancing architecture that provides a single global Anycast IPv4 address, terminates TLS connections at Google Edge Points of Presence (PoPs), routes users to the closest healthy backend MIG region, and integrates with Cloud CDN and Cloud Armor. Which load balancer should you choose?",
    "keywords": [
      "Cloud Load Balancing",
      "Global External HTTPS LB",
      "Anycast IP",
      "Cloud CDN",
      "Cloud Armor"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Network Load Balancer (External Passthrough)."
      },
      {
        "letter": "B",
        "text": "TCP Proxy Load Balancer with port 443."
      },
      {
        "letter": "C",
        "text": "Internal HTTP(S) Load Balancer."
      },
      {
        "letter": "D",
        "text": "Global External HTTP(S) Load Balancer (Application Load Balancer)."
      }
    ],
    "correct": "D",
    "explanation": "The Global External Application Load Balancer (HTTP/HTTPS) uses Google's Anycast IP routing to terminate client TLS connections at the nearest Google edge PoP, supports URL path routing, and natively integrates with Cloud CDN and Cloud Armor WAF security policies.",
    "distractors": {
      "C": "Internal Load Balancers are only accessible from within the private VPC, not the public internet.",
      "B": "TCP Proxy operates at Layer 4 and does not support HTTP URL-map path routing, Cloud CDN, or HTTP-layer Cloud Armor rules.",
      "A": "Network Load Balancer is regional, non-proxied (passthrough), does not terminate SSL at the edge, and cannot integrate with Cloud CDN or Cloud Armor."
    },
    "gcloudCommand": "gcloud compute target-https-proxies create global-https-proxy --url-map=web-url-map --ssl-certificates=managed-cert",
    "architectureComponents": [
      "Cloud Load Balancing",
      "Cloud CDN",
      "Cloud Armor"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/https"
  },
  {
    "id": "ACE-D2-007",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Multi-Writer Persistent Disks",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing High-Durability Shared Persistent Disk Architecture",
    "scenario": "An enterprise is clustering two Compute Engine VMs running an active-passive clustering solution. Both VMs require concurrent read and write access to the same shared block-storage Persistent Disk volume using a cluster-aware file system (OCFS2). How should you configure the Persistent Disk?",
    "keywords": [
      "Compute Engine",
      "Persistent Disk",
      "Multi-Writer",
      "Shared Storage"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Use Cloud Storage FUSE on both VMs."
      },
      {
        "letter": "B",
        "text": "Create an SSD Persistent Disk (pd-ssd) or Balanced Persistent Disk (pd-balanced) in multi-writer mode (READ_WRITE_MANY) and attach it to both instances in the same zone."
      },
      {
        "letter": "C",
        "text": "Create a standard HDD (pd-standard) disk and share it using NFS over the public internet."
      },
      {
        "letter": "D",
        "text": "Attach a Local SSD NVMe drive to both VMs simultaneously."
      }
    ],
    "correct": "B",
    "explanation": "Compute Engine allows attaching SSD Persistent Disks (`pd-ssd`) or Extreme Persistent Disks to up to two instances simultaneously in multi-writer mode (`--mode=rw` with multi-writer enabled). The application must utilize a cluster-aware filesystem to prevent filesystem corruption.",
    "distractors": {
      "C": "NFS over the public internet introduces high latency, security vulnerabilities, and lacks native disk attachment.",
      "D": "Local SSDs are physically tied to a single physical host server and cannot be attached to multiple independent VM instances.",
      "A": "Cloud Storage FUSE provides object-to-file semantics, but is not a POSIX block-level disk suitable for low-latency database clustering."
    },
    "gcloudCommand": "gcloud compute instances attach-disk vm-node-1 --disk=shared-cluster-disk --mode=rw --zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms"
  },
  {
    "id": "ACE-D2-008",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Bigtable vs Firestore vs BigQuery",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Bigtable for High-Throughput Time-Series Sensor Ingestion",
    "scenario": "An IoT telematics company ingests 500,000 telemetry data points per second from vehicle sensors. The solution requires sub-10ms write latency at massive scale, linear read/write throughput scaling by adding nodes, and single-row lookups based on a timestamp and vehicle ID key structure. Which storage engine should you plan?",
    "keywords": [
      "Cloud Bigtable",
      "Time-Series",
      "IoT Telemetry",
      "Sub-10ms Latency",
      "Wide-Column"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Bigtable with SSD storage."
      },
      {
        "letter": "B",
        "text": "Cloud SQL for PostgreSQL with 10 read replicas."
      },
      {
        "letter": "C",
        "text": "Firestore in Native Mode."
      },
      {
        "letter": "D",
        "text": "Cloud Storage with 1 JSON file written per sensor event."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Bigtable is Google's NoSQL wide-column store designed for high-throughput (millions of QPS), low-latency (<10ms) streaming writes, IoT sensor data, and time-series telemetry.",
    "distractors": {
      "D": "Writing 500k individual JSON files per second to Cloud Storage produces extreme API request charges and is an architectural anti-pattern.",
      "B": "Cloud SQL cannot handle 500,000 streaming writes per second due to single-master write concurrency bottlenecks.",
      "C": "Firestore is designed for mobile/web app state and document hierarchies; it cannot ingest 500k writes/sec cost-effectively."
    },
    "gcloudCommand": "gcloud bigtable instances create telemetry-cluster --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=10 --cluster-storage-type=SSD --display-name='IoT Telemetry Cluster'",
    "architectureComponents": [
      "Cloud Bigtable"
    ],
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/overview"
  },
  {
    "id": "ACE-D2-009",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Hybrid Connectivity: Dedicated vs Partner Interconnect",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Dedicated Interconnect vs Partner Interconnect for Hybrid Networking",
    "scenario": "An enterprise is planning hybrid connectivity between their corporate data center and Google Cloud. Their data center is located in a colocation facility that does NOT have a Google Cloud Interconnect colocation facility Point of Presence (PoP). They require a private, SLA-backed connection with 5 Gbps bandwidth. Which hybrid connectivity product should they select?",
    "keywords": [
      "Partner Interconnect",
      "Dedicated Interconnect",
      "Hybrid Connectivity",
      "Direct Peering"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Direct Peering over the public internet."
      },
      {
        "letter": "B",
        "text": "Standard Cloud VPN with a single tunnel."
      },
      {
        "letter": "C",
        "text": "Dedicated Interconnect with 100 Gbps circuits."
      },
      {
        "letter": "D",
        "text": "Partner Interconnect through a certified service provider."
      }
    ],
    "correct": "D",
    "explanation": "Dedicated Interconnect requires customer routing equipment to physically colocate in a designated Google colocation facility. When a customer's data center is outside Google colocation facilities, Partner Interconnect provides private, SLA-backed, high-bandwidth (50 Mbps to 10 Gbps) connectivity through a supported third-party carrier.",
    "distractors": {
      "A": "Direct Peering provides public Google Workspace access, not private RFC 1918 VPC routing, and carries no SLA.",
      "B": "Standard Cloud VPN tunnels are capped at 3 Gbps per tunnel, travel across the public internet, and do not provide 5 Gbps private line SLA.",
      "C": "Dedicated Interconnect requires direct physical fiber connection in a Google colocation facility, which the customer lacks."
    },
    "gcloudCommand": "gcloud compute interconnects attachments partner create my-vlan-attachment --region=us-east4 --router=corp-router --edge-availability-domain=AVAILABILITY_DOMAIN_1",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Interconnect",
      "Cloud Router"
    ],
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview"
  },
  {
    "id": "ACE-D2-010",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Spot VMs & Fault Tolerance",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Fault-Tolerant Batch Processing with Spot / Preemptible VMs",
    "scenario": "You are designing a batch video transcoding architecture that processes 10,000 video files nightly. The transcoding jobs are containerized, stateless, idempotent, and checkpoint progress every 30 seconds to Cloud Storage. To minimize computing costs by up to 60-91%, which Compute Engine provisioning model should you plan for the worker pool?",
    "keywords": [
      "Compute Engine",
      "Spot VMs",
      "Preemptible",
      "Cost Optimization",
      "Stateless Batch"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "On-demand M2 memory-optimized instances."
      },
      {
        "letter": "B",
        "text": "Unmanaged Instance Group of e2-micro instances with no restart policy."
      },
      {
        "letter": "C",
        "text": "Sole-tenant nodes with 3-year committed use discounts."
      },
      {
        "letter": "D",
        "text": "Spot VMs within a Regional Managed Instance Group configured with autoscaling."
      }
    ],
    "correct": "D",
    "explanation": "Spot VMs (and Preemptible VMs) offer massive discounts (60-91%) compared to standard on-demand pricing. Because the transcoding jobs are stateless, idempotent, and frequently checkpointed, preemption can be tolerated seamlessly, especially when managed by a Regional MIG.",
    "distractors": {
      "C": "Sole-tenant nodes are dedicated physical servers designed for licensing/compliance, not cheap disposable batch processing.",
      "A": "M2 instances are ultra-expensive memory-optimized hosts designed for huge in-memory databases, not batch video encoding.",
      "B": "Unmanaged instance groups lack autoscaling, autohealing, and automated replacement upon node reclamation."
    },
    "gcloudCommand": "gcloud compute instance-templates create video-worker-template --provisioning-model=SPOT --machine-type=e2-standard-8 --image-family=debian-11 --image-project=debian-cloud",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/spot"
  },
  {
    "id": "ACE-D2-011",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Database Selection: Firestore Native vs Datastore Mode",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Firestore Native Mode vs Datastore Mode",
    "scenario": "A software development team is building a new mobile and single-page web application. The frontend requires real-time data synchronization (listening to database changes over WebSockets) and client-side offline caching with automatic sync when reconnected. Which database mode should you choose?",
    "keywords": [
      "Firestore",
      "Native Mode",
      "Datastore Mode",
      "Real-Time Sync",
      "Offline Caching"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Firestore in Native mode."
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable with SSD storage."
      },
      {
        "letter": "C",
        "text": "Firestore in Datastore mode."
      },
      {
        "letter": "D",
        "text": "Cloud SQL for PostgreSQL with polling."
      }
    ],
    "correct": "A",
    "explanation": "Firestore in Native mode provides client-side SDKs with built-in real-time listeners, offline data persistence, and security rules for direct web/mobile access. Datastore mode is intended for backend server-to-server workloads and does not support client real-time synchronization.",
    "distractors": {
      "D": "Polling Cloud SQL introduces high database load, latency, and lacks native client offline sync libraries.",
      "C": "Datastore mode is designed for legacy App Engine server backends and lacks mobile SDKs and real-time listeners.",
      "B": "Cloud Bigtable is a heavy NoSQL engine that cannot be accessed directly from mobile/web clients."
    },
    "gcloudCommand": "gcloud firestore databases create --location=nam5 --type=firestore-native",
    "architectureComponents": [
      "Firestore"
    ],
    "officialDocUrl": "https://cloud.google.com/firestore/docs/firestore-or-datastore"
  },
  {
    "id": "ACE-D2-012",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud DNS Private Zones & VPC Resolution",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Cloud DNS Private Zones for Internal Service Discovery",
    "scenario": "You are deploying microservices across three separate VPC networks (`vpc-dev`, `vpc-staging`, `vpc-prod`) within your organization. You need internal domain name resolution for the private domain `corp.internal` such that instances in all three VPCs can resolve service endpoints without exposing DNS records to the public internet. What should you configure?",
    "keywords": [
      "Cloud DNS",
      "Private Managed Zone",
      "VPC Resolution",
      "Service Discovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Public Managed Zone and create an IAM deny policy on external IPs."
      },
      {
        "letter": "B",
        "text": "Deploy BIND DNS servers on Compute Engine VMs in each VPC and synchronize zone files manually."
      },
      {
        "letter": "C",
        "text": "Modify the /etc/hosts file across all VMs using a startup script."
      },
      {
        "letter": "D",
        "text": "Create a Cloud DNS Private Managed Zone for domain 'corp.internal' and authorize vpc-dev, vpc-staging, and vpc-prod to resolve from the zone."
      }
    ],
    "correct": "D",
    "explanation": "Cloud DNS Private Managed Zones provide managed internal DNS resolution for private domains. You can bind a single Private Managed Zone to multiple VPC networks within a project, enabling unified, secure internal DNS resolution across all attached networks.",
    "distractors": {
      "B": "Self-managed BIND servers add unnecessary maintenance overhead, scaling issues, and single points of failure.",
      "C": "Static `/etc/hosts` files cannot scale with dynamic autoscaled instances and lack automated updates.",
      "A": "Public zones publish DNS records to authoritative internet root servers, exposing internal hostnames to external recon."
    },
    "gcloudCommand": "gcloud dns managed-zones create corp-internal-zone --dns-name='corp.internal.' --description='Internal DNS' --visibility=private --networks=vpc-dev,vpc-staging,vpc-prod",
    "architectureComponents": [
      "Cloud DNS",
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/dns/docs/zones/private-zones"
  },
  {
    "id": "ACE-D2-013",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Network Service Tiers (Premium vs Standard)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Network Service Tiers: Premium vs Standard Tier",
    "scenario": "Your company runs a global SaaS platform with end-users worldwide. Management wants web traffic to enter Google's global private fiber backbone as close to the end user as possible to minimize packet loss and latency. Cost is a secondary consideration. Which Network Service Tier should you configure for external IP addresses?",
    "keywords": [
      "Network Service Tiers",
      "Premium Tier",
      "Standard Tier",
      "Global Backbone",
      "Latency"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Direct Peering Tier"
      },
      {
        "letter": "B",
        "text": "Standard Tier"
      },
      {
        "letter": "C",
        "text": "Cloud CDN Tier"
      },
      {
        "letter": "D",
        "text": "Premium Tier"
      }
    ],
    "correct": "D",
    "explanation": "Premium Tier routes user traffic over Google's global, private, low-latency fiber network, ingesting traffic at the Google edge point of presence (PoP) nearest to the user. Standard Tier routes traffic over the public transit ISP network and enters Google's network only in the destination region.",
    "distractors": {
      "B": "Standard Tier uses the public internet for long-haul transport, resulting in variable latency and higher jitter.",
      "C": "There is no 'Cloud CDN Tier' in Google Cloud Network Service Tiers.",
      "A": "Direct Peering is a physical peering agreement, not a Compute Engine network service tier option."
    },
    "gcloudCommand": "gcloud compute addresses create saas-vip --region=us-central1 --network-tier=PREMIUM",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/network-tiers/docs/overview"
  },
  {
    "id": "ACE-D2-014",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Memorystore for Redis vs Memcached",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Memorystore for Low-Latency In-Memory Caching",
    "scenario": "A Python web application hosted on Cloud Run needs an in-memory session cache and pub/sub message broker with sub-millisecond response times, automated high availability failover, and support for complex data structures (hashes, sorted sets, lists). Which managed service should you plan?",
    "keywords": [
      "Cloud Memorystore",
      "Redis",
      "Memcached",
      "In-Memory Cache",
      "Sub-Millisecond"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage in Standard class."
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Memcached."
      },
      {
        "letter": "C",
        "text": "Cloud Memorystore for Redis with Standard Tier (High Availability)."
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable with SSD storage."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Memorystore for Redis Standard Tier provides fully managed, highly available in-memory caching with automatic cross-zone failover, 99.9% availability SLA, and native support for rich data structures (hashes, lists, sets, pub/sub). Memcached is a simple multithreaded key-value cache without persistence or complex data structures.",
    "distractors": {
      "A": "Cloud Storage is object storage with latency in tens to hundreds of milliseconds, unsuitable for real-time web sessions.",
      "B": "Memcached does not support complex data structures (sets, hashes, sorted sets) or automated HA failover replicas.",
      "D": "Cloud Bigtable latency is 5-10ms, which is higher than in-memory sub-millisecond RAM caching."
    },
    "gcloudCommand": "gcloud redis instances create session-cache --size=5 --region=us-central1 --tier=STANDARD --redis-version=redis_6_x",
    "architectureComponents": [
      "Cloud Memorystore",
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  },
  {
    "id": "ACE-D2-015",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Regional Persistent Disks",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Disaster Recovery and Regional Persistent Disk Failover",
    "scenario": "You are designing a high-availability database on Compute Engine that cannot use database-native replication. The database must survive a total zone failure with a Recovery Point Objective (RPO) of zero seconds and Recovery Time Objective (RTO) under 2 minutes. How should you architect the underlying block storage?",
    "keywords": [
      "Regional Persistent Disk",
      "Synchronous Replication",
      "Zero RPO",
      "High Availability"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a multi-region Cloud Storage bucket and mount it as a block device."
      },
      {
        "letter": "B",
        "text": "Use Local SSDs and configure rsync cron jobs between zones every 5 minutes."
      },
      {
        "letter": "C",
        "text": "Use a Regional Persistent Disk (pd-balanced or pd-ssd) synchronously replicated across two zones in the same region, and attach it with --force-attach to a standby VM if the primary zone fails."
      },
      {
        "letter": "D",
        "text": "Take daily snapshots of a Zonal Persistent Disk and restore them in the secondary zone."
      }
    ],
    "correct": "C",
    "explanation": "Regional Persistent Disks provide synchronous block-level replication across two zones in the same region with zero RPO. If the active instance or primary zone crashes, the disk can be forcibly attached (`--force-attach`) to a standby VM in the secondary zone in seconds.",
    "distractors": {
      "B": "Local SSDs cannot survive host termination and rsync scripts cause data loss and operational overhead.",
      "A": "Cloud Storage cannot be mounted as a native high-performance POSIX block device with atomic disk locks.",
      "D": "Daily snapshots result in up to 24 hours of data loss, failing the zero-RPO requirement."
    },
    "gcloudCommand": "gcloud compute disks create db-regional-disk --region=us-central1 --replica-zones=us-central1-a,us-central1-b --size=500GB --type=pd-ssd",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/regional-persistent-disks"
  },
  {
    "id": "ACE-D2-016",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Sole-Tenant Nodes",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Sole-Tenant Nodes for Regulatory Hardware Isolation and BYOL",
    "scenario": "A healthcare company is migrating on-premises licensed Windows Server and Microsoft SQL Server workloads to Compute Engine. Due to strict software licensing agreements (BYOL per physical socket/core) and HIPAA physical hardware isolation mandates, the company requires instances to run on dedicated, non-shared physical hardware servers. What Compute Engine feature should they plan?",
    "keywords": [
      "Sole-Tenant Nodes",
      "BYOL",
      "Hardware Isolation",
      "HIPAA Compliance",
      "Node Groups"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Preemptible N2 instances with Shielded VM enabled."
      },
      {
        "letter": "B",
        "text": "Google Kubernetes Engine with Autopilot mode."
      },
      {
        "letter": "C",
        "text": "Standard multi-tenant E2 instances with custom machine types."
      },
      {
        "letter": "D",
        "text": "Sole-Tenant Node Groups."
      }
    ],
    "correct": "D",
    "explanation": "Sole-tenant nodes provide dedicated physical Compute Engine servers allocated exclusively to a single customer's VMs, ensuring physical hardware isolation for regulatory compliance (HIPAA/PCI) and enabling Bring-Your-Own-License (BYOL) based on physical core and socket counts.",
    "distractors": {
      "A": "Preemptible VMs run on shared multi-tenant physical hardware and are subject to termination at any time.",
      "C": "Standard instances share underlying physical hardware hosts with other cloud tenants, violating strict physical isolation.",
      "B": "GKE Autopilot runs on shared multi-tenant infrastructure and does not provide physical server core visibility for legacy BYOL."
    },
    "gcloudCommand": "gcloud compute node-templates create sole-tenant-tmpl --region=us-central1 --node-type=c2-node-60-240 && gcloud compute node-groups create my-node-group --zone=us-central1-a --template=sole-tenant-tmpl --target-size=2",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes"
  },
  {
    "id": "ACE-D2-017",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Network Architecture: VPC Peering vs Shared VPC",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Choosing Between VPC Network Peering and Shared VPC",
    "scenario": "An enterprise has 15 business units with separate GCP projects. The central security team requires centralized administration of all VPC subnets, firewall rules, and Cloud NAT gateways in a single project, while allowing developers in business unit projects to attach VMs to those centralized subnets. Which networking architecture should be planned?",
    "keywords": [
      "Shared VPC",
      "VPC Peering",
      "Centralized Governance",
      "Network Admin"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Single massive project containing all 15 business unit workloads without project separation."
      },
      {
        "letter": "B",
        "text": "VPC Network Peering mesh between all 15 independent VPCs."
      },
      {
        "letter": "C",
        "text": "Cloud VPN tunnels interconnecting 15 separate VPCs."
      },
      {
        "letter": "D",
        "text": "Shared VPC with a central Host project and business unit Service projects."
      }
    ],
    "correct": "D",
    "explanation": "Shared VPC enables a central Network Administrator team in a Host project to manage networks, subnets, firewalls, and routing, while delegating subnet usage to Service Projects. VPC Peering maintains separate administrative domains in each project and does not allow centralized firewall/subnet governance.",
    "distractors": {
      "A": "A single project destroys billing boundaries, IAM isolation, and project resource quotas.",
      "B": "A full 15-project VPC Peering mesh requires configuring and maintaining dozens of bidirectional peering links and decentralizes firewall administration.",
      "C": "Cloud VPN introduces bandwidth costs, encryption overhead, and 3 Gbps tunnel caps for intra-cloud networking."
    },
    "gcloudCommand": "gcloud compute shared-vpc enable host-net-proj && gcloud compute shared-vpc service-projects associate bu1-service-proj --host-project=host-net-proj",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc"
  },
  {
    "id": "ACE-D2-018",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Minimum Duration Charges & FinOps",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Evaluating Cloud Storage Lifecycle Minimum Duration Penalties",
    "scenario": "An operations team writes temporary debug log files to a Cloud Storage bucket configured with default storage class `Coldline`. The debug logs are created and then automatically deleted by a script after 10 days. At the end of the month, the cloud bill shows unexpected high storage charges. What is the root cause of the extra charge?",
    "keywords": [
      "Cloud Storage",
      "Coldline",
      "Early Deletion Fee",
      "Minimum Duration Penalty",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Objects in Coldline cannot be deleted until 1 year has passed."
      },
      {
        "letter": "B",
        "text": "Cloud Logging automatically replicates all Coldline buckets to BigQuery."
      },
      {
        "letter": "C",
        "text": "Coldline storage has a 90-day minimum storage duration; deleting objects after 10 days incurs an early deletion fee equivalent to the remaining 80 days of storage."
      },
      {
        "letter": "D",
        "text": "Coldline storage charges $100 per GB for object deletion requests."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage infrequency tiers enforce minimum storage duration commitments: Nearline (30 days), Coldline (90 days), and Archive (365 days). Deleting or overwriting an object before its minimum duration incurs an early deletion charge for the remaining unfulfilled days.",
    "distractors": {
      "B": "Cloud Logging does not automatically replicate Cloud Storage object payloads to BigQuery.",
      "A": "Objects can be deleted at any time, but early deletion penalties apply if deleted before the minimum duration.",
      "D": "Delete API calls themselves are free; the charge is the prorated remaining minimum duration storage cost."
    },
    "gcloudCommand": "gcloud storage buckets update gs://debug-temp-logs --default-storage-class=STANDARD",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud Billing"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes#coldline"
  },
  {
    "id": "ACE-D2-019",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "VPC Subnet Sizing & Alias IPs",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Subnet Topology for High-Density Microservices with Alias IPs",
    "scenario": "You are sizing a new VPC custom subnet in us-central1 that will host 50 Compute Engine instances running container orchestration. Each instance will host up to 30 containerized microservice pods, and every container pod must be directly addressable on the VPC network with its own private IP address. How should you design the IP allocation?",
    "keywords": [
      "VPC Subnet",
      "Alias IP Ranges",
      "CIDR Sizing",
      "Compute Engine",
      "Containers"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy 30 network interface controllers (NICs) on each VM instance."
      },
      {
        "letter": "B",
        "text": "Assign 30 external public IP addresses to each VM instance."
      },
      {
        "letter": "C",
        "text": "Assign a primary subnet CIDR of 10.0.0.0/24 for instance primary IPs, and allocate an Alias IP range (/27) to each instance from a secondary subnet range (10.1.0.0/16)."
      },
      {
        "letter": "D",
        "text": "Create 30 separate VPC networks connected via Cloud VPN."
      }
    ],
    "correct": "C",
    "explanation": "Alias IP ranges allow attaching multiple internal IP addresses (or secondary CIDR blocks) to a single VM's primary network interface (`nic0`). This allows containers or services running inside the VM to be directly routable on the VPC without requiring multiple physical NICs or public IPs.",
    "distractors": {
      "B": "Public IPs expose internal containers to the internet and exhaust IPv4 quotas.",
      "A": "Compute Engine supports a maximum of 8 network interfaces (NICs) per instance, so 30 NICs is physically impossible.",
      "D": "Multiple VPCs with VPNs add massive latency, routing complexity, and cost."
    },
    "gcloudCommand": "gcloud compute instances network-interfaces update my-vm --zone=us-central1-a --aliases='10.1.0.0/27'",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/alias-ip"
  },
  {
    "id": "ACE-D2-020",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Network Load Balancing: External Passthrough (DSR)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Load Balancer for Layer 4 Non-HTTP Protocols with Direct Server Return",
    "scenario": "You are deploying a multiplayer UDP game server and custom TCP messaging engine on Compute Engine. The architecture requires high-throughput Layer 4 load balancing that preserves client source IP addresses, does NOT perform TLS/TCP termination proxying, and supports Direct Server Return (DSR) where responses bypass the load balancer to minimize latency. Which load balancer should you choose?",
    "keywords": [
      "External TCP/UDP Network Load Balancer",
      "Layer 4 Passthrough",
      "Direct Server Return",
      "DSR",
      "Low Latency"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor Managed Proxy."
      },
      {
        "letter": "B",
        "text": "Global External HTTPS Load Balancer."
      },
      {
        "letter": "C",
        "text": "External Passthrough Network Load Balancer (backend service based)."
      },
      {
        "letter": "D",
        "text": "SSL Proxy Load Balancer."
      }
    ],
    "correct": "C",
    "explanation": "The External Passthrough Network Load Balancer is a Layer 4 regional load balancer built on Google Maglev. It routes TCP and UDP traffic directly to backend VMs without proxy termination, preserves client source IP, and uses Direct Server Return (DSR) for maximum throughput and minimum latency.",
    "distractors": {
      "A": "Cloud Armor is a security policy layer on proxies, not a standalone passthrough load balancer.",
      "B": "External HTTPS LB terminates HTTP/HTTPS proxy traffic at Layer 7 and does not support arbitrary UDP game traffic.",
      "D": "SSL Proxy terminates TLS connections and only supports TCP port 443 (not UDP)."
    },
    "gcloudCommand": "gcloud compute forwarding-rules create udp-game-forwarding-rule --region=us-central1 --ports=7777 --backend-service=udp-game-backend",
    "architectureComponents": [
      "Cloud Load Balancing",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/network"
  },
  {
    "id": "ACE-D2-021",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud HA VPN & Dynamic BGP Routing",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning HA Cloud VPN Architecture with 99.99% Availability SLA",
    "scenario": "An enterprise is connecting its on-premises corporate data center to Google Cloud using Cloud VPN. Corporate compliance mandates a 99.99% availability SLA. What network topology must you plan to achieve the 99.99% SLA?",
    "keywords": [
      "HA VPN",
      "99.99% SLA",
      "BGP",
      "Cloud Router",
      "Two Tunnels"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Use VPC Peering over the public internet."
      },
      {
        "letter": "B",
        "text": "Deploy a Cloud HA VPN gateway with two active tunnels configured against an on-premises peer gateway across two separate IPsec interfaces, using dynamic routing with Cloud Router and BGP."
      },
      {
        "letter": "C",
        "text": "Deploy a single HA VPN tunnel with static routes."
      },
      {
        "letter": "D",
        "text": "Deploy two Classic VPN gateways with static routes."
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud HA VPN provides a 99.99% availability SLA when configured with two tunnels (one on each of the HA VPN gateway's two public IP interfaces: `interface 0` and `interface 1`) paired with dynamic routing via Cloud Router and BGP.",
    "distractors": {
      "C": "A single tunnel provides only 99.9% SLA; two active tunnels are required for 99.99% SLA.",
      "A": "VPC Peering connects two GCP VPCs, not an on-premises data center.",
      "D": "Classic VPN is deprecated for new designs and only carries a 99.9% SLA."
    },
    "gcloudCommand": "gcloud compute vpn-gateways create corp-ha-vpn --network=prod-vpc --region=us-central1",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Router"
    ],
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/vpn/concepts/ha-vpn-topologies"
  },
  {
    "id": "ACE-D2-022",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "BigQuery Table Design: Partitioning & Clustering",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting BigQuery Storage Model: Partitioning vs Clustering for FinOps",
    "scenario": "A data warehouse team runs frequent daily analytical queries over a 50 TB telemetry dataset in BigQuery. 90% of queries filter by `event_timestamp` within a 7-day date range and filter by `customer_id` and `region`. To optimize query performance and reduce BigQuery on-demand analysis scan costs, how should you plan the table structure?",
    "keywords": [
      "BigQuery",
      "Time Partitioning",
      "Clustering",
      "Cost Optimization",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create 365 separate daily tables (sharded tables) named table_YYYYMMDD."
      },
      {
        "letter": "B",
        "text": "Partition the table by day on the event_timestamp column, and cluster the table by customer_id and region."
      },
      {
        "letter": "C",
        "text": "Cluster the table by event_timestamp without any partitioning."
      },
      {
        "letter": "D",
        "text": "Store the data in Cloud Storage and query it using BigQuery external tables with no schema."
      }
    ],
    "correct": "B",
    "explanation": "BigQuery Partitioning by timestamp segments the data by date boundaries, allowing BigQuery to prune unread partitions and drastically reduce scanned bytes. Adding Clustering on high-cardinality query filter columns (`customer_id`, `region`) further collocates related data within partitions, maximizing query speed and minimizing cost.",
    "distractors": {
      "A": "Date-sharded tables (`table_YYYYMMDD`) are a legacy anti-pattern with higher query latency, schema maintenance headaches, and partition limits.",
      "C": "Clustering alone without partitioning does not prune whole date blocks cleanly for time-windowed queries.",
      "D": "External tables over Cloud Storage have significantly slower query performance and lack metadata indexing."
    },
    "gcloudCommand": "bq mk --table --time_partitioning_field=event_timestamp --clustering_fields=customer_id,region corp_analytics:telemetry_events schema.json",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/partitioned-tables"
  },
  {
    "id": "ACE-D2-023",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Storage Selection: Local SSD vs Persistent Disk",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Local SSD vs Persistent Disk for Extreme IOPS Scratch Disks",
    "scenario": "A machine learning training pipeline running on Compute Engine requires an ultra-high-speed temporary scratch storage volume to store uncompressed image training batches. The pipeline requires over 800,000 read IOPS and microsecond latency. The data is temporary and can be regenerated if the instance stops. Which disk type should you plan?",
    "keywords": [
      "Local SSD",
      "NVMe",
      "Extreme IOPS",
      "Microsecond Latency",
      "Temporary Scratch"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Local SSD NVMe disks attached to the VM."
      },
      {
        "letter": "B",
        "text": "Cloud Storage bucket mounted with gcsfuse."
      },
      {
        "letter": "C",
        "text": "Standard Persistent Disk (pd-standard)."
      },
      {
        "letter": "D",
        "text": "Balanced Persistent Disk (pd-balanced)."
      }
    ],
    "correct": "A",
    "explanation": "Local SSDs are physically attached to the host server running the VM instance, delivering sub-millisecond latency and up to millions of IOPS. However, because Local SSDs are ephemeral (data is lost on VM stop/terminate), they are specifically engineered for temporary scratch spaces, caches, and ML processing buffers.",
    "distractors": {
      "B": "Cloud Storage FUSE introduces high network overhead and lacks microsecond IOPS performance.",
      "C": "pd-standard is HDD-backed storage capped at low IOPS, completely unable to achieve 800k IOPS.",
      "D": "pd-balanced is network-attached and capped at much lower IOPS limits compared to directly attached Local NVMe SSDs."
    },
    "gcloudCommand": "gcloud compute instances create ml-trainer --zone=us-central1-a --machine-type=n2-standard-16 --local-ssd=interface=NVME",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/local-ssd"
  },
  {
    "id": "ACE-D2-024",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Custom Machine Types",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Custom Machine Types for Optimal Resource Sizing and Cost Efficiency",
    "scenario": "You have an in-house application that requires exactly 6 vCPUs and 45 GB of RAM to run efficiently. The predefined `n2-standard-8` (8 vCPUs, 32 GB RAM) has too little memory, while the `n2-standard-16` (16 vCPUs, 64 GB RAM) has excessive unused vCPUs, wasting budget. What should you configure?",
    "keywords": [
      "Compute Engine",
      "Custom Machine Types",
      "Cost Optimization",
      "Right-Sizing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Custom Machine Type specifying 6 vCPUs and 45 GB of memory (e.g. custom-6-46080)."
      },
      {
        "letter": "B",
        "text": "Deploy two n2-standard-4 instances and split the application logic across them."
      },
      {
        "letter": "C",
        "text": "Provision an m2-ultramem instance."
      },
      {
        "letter": "D",
        "text": "Attach 10 Local SSDs to make up for the RAM shortage."
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine allows configuring Custom Machine Types (`--custom-cpu` and `--custom-memory`), allowing exact matching of required vCPU and memory ratios to right-size workloads and prevent overpaying for unnecessary predefined vCPUs or RAM.",
    "distractors": {
      "C": "M2 instances are massively oversized and cost thousands of dollars per month.",
      "D": "SSDs are disk storage, not system RAM, and cannot substitute for memory requirements.",
      "B": "Rewriting single-node applications for multi-VM distribution introduces development overhead and architecture complexity."
    },
    "gcloudCommand": "gcloud compute instances create custom-workload --zone=us-central1-a --custom-cpu=6 --custom-memory=45GB",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type"
  },
  {
    "id": "ACE-D2-025",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud SQL Read Replicas & Scaling",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Cloud SQL Read Replicas for High-Volume Read Offloading",
    "scenario": "An e-commerce reporting dashboard is executing heavy analytical read queries against the primary Cloud SQL OLTP database, causing high CPU utilization and slowing down customer checkout transactions. You need to relieve pressure on the primary database without altering write consistency. What should you architect?",
    "keywords": [
      "Cloud SQL",
      "Read Replicas",
      "Read Offloading",
      "OLTP Performance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Convert the database to Cloud Datastore."
      },
      {
        "letter": "B",
        "text": "Deploy one or more Cloud SQL Read Replicas and configure the reporting dashboard to query the Read Replica endpoints exclusively."
      },
      {
        "letter": "C",
        "text": "Increase the backup frequency of the primary instance to every 10 minutes."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged PostgreSQL VM and configure manual daily CSV exports."
      }
    ],
    "correct": "B",
    "explanation": "Cloud SQL Read Replicas replicate data asynchronously from the primary instance. Directing heavy reporting, BI, and analytical read queries to read replicas offloads read I/O from the primary master, safeguarding OLTP write transaction performance.",
    "distractors": {
      "A": "Converting a relational schema to NoSQL requires complete application rewrites.",
      "C": "Frequent backups increase disk I/O load on the primary instance, worsening the performance issue.",
      "D": "Manual CSV exports provide stale data and add continuous operational maintenance."
    },
    "gcloudCommand": "gcloud sql instances create reporting-replica-1 --master-instance-name=primary-oltp-db --region=us-central1 --tier=db-custom-4-16384",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/replication/create-replica"
  },
  {
    "id": "ACE-D2-026",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Geographic Redundancy Planning",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Global Multi-Region Storage Class vs Single-Region Storage",
    "scenario": "A digital marketing agency delivers static web banners and promotional videos to website visitors across all continents. The agency wants maximum content availability across multiple geographic regions within the US, automatic failover, and high network egress throughput. What bucket location type should be planned?",
    "keywords": [
      "Cloud Storage",
      "Multi-Region",
      "High Availability",
      "Global Content Delivery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Multi-Region location (e.g. US multi-region)."
      },
      {
        "letter": "B",
        "text": "Single Region location (e.g. us-central1)."
      },
      {
        "letter": "C",
        "text": "Archive bucket in europe-west1."
      },
      {
        "letter": "D",
        "text": "Zonal Persistent Disk mounted over NFS."
      }
    ],
    "correct": "A",
    "explanation": "Multi-Region Cloud Storage buckets replicate data across at least two geographic locations separated by at least 160 km within a multi-region area (e.g. US, EU, ASIA), providing 99.95% availability SLA and disaster recovery against full regional outages.",
    "distractors": {
      "C": "Archive class is for long-term cold data with heavy retrieval penalties, completely unsuitable for high-frequency web assets.",
      "B": "Single Region buckets do not provide cross-region redundancy if the entire region experiences an outage.",
      "D": "Zonal Persistent Disks are tied to a single datacenter zone and cannot serve global web traffic directly."
    },
    "gcloudCommand": "gcloud storage buckets create gs://global-static-assets --location=US --default-storage-class=STANDARD",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#location-mr"
  },
  {
    "id": "ACE-D2-027",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Serverless Compute Selection",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Serverless Compute: Cloud Run vs Cloud Functions vs GKE Autopilot",
    "scenario": "A team is designing a new RESTful microservice backend. Requirements: 1) Deploy custom Docker container images. 2) Automatically scale down to 0 instances when idle to minimize costs. 3) Support concurrent requests per container instance (up to 80 requests/container) to avoid cold starts for each request. 4) Zero server or cluster management. Which service should you choose?",
    "keywords": [
      "Cloud Run",
      "Serverless Containers",
      "Concurrency",
      "Scale to Zero",
      "Microservices"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine unmanaged VMs with cron shutdown."
      },
      {
        "letter": "B",
        "text": "GKE Standard with custom node pools."
      },
      {
        "letter": "C",
        "text": "Cloud Functions (1st gen)."
      },
      {
        "letter": "D",
        "text": "Cloud Run (fully managed)."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Run is a fully managed serverless platform that runs container images, automatically scales to zero, and uniquely supports multi-concurrency (handling up to 1,000 concurrent requests per container instance), drastically reducing instance count and eliminating per-request cold starts.",
    "distractors": {
      "B": "GKE Standard requires configuring and paying for underlying VM nodes even when idle, and does not scale to zero VMs automatically without cluster autoscaler scale-down delays.",
      "A": "Compute Engine VMs do not natively scale on HTTP request concurrency and require heavy operational maintenance.",
      "C": "Cloud Functions 1st gen handles only 1 concurrent request per function instance, resulting in frequent cold starts under bursty load."
    },
    "gcloudCommand": "gcloud run deploy rest-microservice --image=gcr.io/corp-proj/api:v1 --platform=managed --concurrency=80 --min-instances=0",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/about-instance-autoscaling"
  },
  {
    "id": "ACE-D2-028",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Shielded VM Features",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Shielded VM Configuration for Boot Integrity and vTPM Security",
    "scenario": "An enterprise financial application running on Compute Engine requires cryptographic protection against rootkits, bootkits, and unauthorized modifications to the VM kernel during the boot sequence. What Compute Engine security features should be planned?",
    "keywords": [
      "Shielded VM",
      "Secure Boot",
      "vTPM",
      "Integrity Monitoring",
      "Boot Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Shielded VM with Secure Boot, Virtual Trusted Platform Module (vTPM), and Integrity Monitoring."
      },
      {
        "letter": "B",
        "text": "Deploy a third-party antivirus scanner in the VM startup script."
      },
      {
        "letter": "C",
        "text": "Encrypt the VPC subnet using Cloud VPN."
      },
      {
        "letter": "D",
        "text": "Attach a Cloud KMS key to the serial port."
      }
    ],
    "correct": "A",
    "explanation": "Shielded VMs provide verifiable boot integrity using Secure Boot (ensures only signed kernel and drivers load), vTPM (validates guest OS pre-boot and boot measurements), and Integrity Monitoring (generates alerts if the baseline measurements change).",
    "distractors": {
      "D": "Cloud KMS does not monitor or cryptographically verify VM guest boot sequences.",
      "B": "In-guest antivirus runs after the operating system boots and cannot prevent rootkits loaded prior to the kernel.",
      "C": "Cloud VPN encrypts network transit packets, but does not protect VM host hypervisor or guest boot integrity."
    },
    "gcloudCommand": "gcloud compute instances create secure-fin-vm --zone=us-central1-a --shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/shielded-vm"
  },
  {
    "id": "ACE-D2-029",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Kubernetes Planning: GKE Autopilot vs Standard",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting GKE Autopilot vs GKE Standard for Production Operations",
    "scenario": "A software company wants to deploy microservices onto Google Kubernetes Engine (GKE). The engineering team wants Google to fully manage, provision, auto-scale, and secure the underlying node infrastructure according to GKE best practices, charging only for the Pods' requested CPU, memory, and storage rather than unallocated VM node capacity. Which mode should they choose?",
    "keywords": [
      "GKE Autopilot",
      "GKE Standard",
      "Pod-Level Billing",
      "Node Management"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run for Anthos on-premises."
      },
      {
        "letter": "B",
        "text": "GKE Standard mode with custom node pools."
      },
      {
        "letter": "C",
        "text": "Compute Engine unmanaged instances with kubeadm."
      },
      {
        "letter": "D",
        "text": "GKE Autopilot mode."
      }
    ],
    "correct": "D",
    "explanation": "GKE Autopilot is a fully managed mode of operation where Google manages the cluster configuration, node provisioning, autoscaling, and security hardening. Users pay strictly for the compute resources requested by their running Pods rather than whole VM worker nodes.",
    "distractors": {
      "A": "Cloud Run for Anthos requires managing underlying Anthos clusters and is intended for hybrid deployments.",
      "B": "GKE Standard requires users to manage node pools, machine sizing, OS upgrades, and pay for whole node VM capacity.",
      "C": "Self-managed Kubernetes via kubeadm adds immense operational maintenance and patching burden."
    },
    "gcloudCommand": "gcloud container clusters create-auto production-k8s --region=us-central1",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  },
  {
    "id": "ACE-D2-030",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Armor WAF Planning",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud Armor Security Policies for Web Application Defense",
    "scenario": "An e-commerce website exposed via a Global External HTTP(S) Load Balancer is experiencing distributed denial-of-service (DDoS) attempts, SQL injection attacks, and malicious bot scraping originating from specific geographic countries. How should the architecture be hardened?",
    "keywords": [
      "Cloud Armor",
      "WAF",
      "OWASP Top 10",
      "Geo-Blocking",
      "Rate Limiting",
      "Global HTTPS LB"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create VPC firewall rules on port 80/443 for each individual malicious IP address."
      },
      {
        "letter": "B",
        "text": "Disable external public IP addresses on the load balancer forwarding rule."
      },
      {
        "letter": "C",
        "text": "Attach a Cloud Armor Security Policy to the Load Balancer Backend Service with pre-configured WAF rules (OWASP Top 10), rate limiting, and geo-blocking rules."
      },
      {
        "letter": "D",
        "text": "Deploy an Nginx proxy VM in front of each Compute Engine instance."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) capabilities integrated natively into the Global External HTTP(S) Load Balancer. It supports preconfigured OWASP Top 10 rules (SQLi, XSS), IP allow/denylists, geographic filtering, and rate limiting at Google's edge.",
    "distractors": {
      "D": "Self-managed Nginx proxies create bottlenecks and cannot absorb multi-terabit edge DDoS volume.",
      "B": "Disabling the public IP on the load balancer takes the entire public e-commerce website offline.",
      "A": "VPC firewall rules cannot evaluate HTTP request payloads (SQLi/XSS), geo-location headers, or Layer 7 rate limits."
    },
    "gcloudCommand": "gcloud compute security-policies create edge-waf-policy && gcloud compute backend-services update web-backend-svc --security-policy=edge-waf-policy --global",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/security-policy-overview"
  },
  {
    "id": "ACE-D2-031",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Pub/Sub Messaging Architecture",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Google Cloud Pub/Sub for Asynchronous Decoupling",
    "scenario": "You are designing an order processing pipeline where a high-volume frontend web application publishes purchase orders that multiple independent downstream microservices (Inventory, Billing, Shipping, Analytics) must consume and process asynchronously at their own individual processing rates. What messaging architecture should you plan?",
    "keywords": [
      "Cloud Pub/Sub",
      "Asynchronous Messaging",
      "Fan-Out",
      "Decoupling",
      "Microservices"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a single Cloud Pub/Sub topic for orders, and create separate independent Pub/Sub subscriptions for Inventory, Billing, Shipping, and Analytics."
      },
      {
        "letter": "B",
        "text": "Use synchronous REST HTTP POST calls from the frontend directly to each microservice sequentially."
      },
      {
        "letter": "C",
        "text": "Create a Cloud Storage bucket and write 1 file per order."
      },
      {
        "letter": "D",
        "text": "Have the frontend web app write orders directly into a shared MySQL database table with locks."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Pub/Sub provides a fully managed, durable, highly available publish/subscribe messaging system. A 1-to-many fan-out architecture is achieved by attaching multiple independent subscriptions to a single topic, allowing each downstream consumer to pull messages at its own pace without coupling.",
    "distractors": {
      "D": "Writing directly to a shared SQL database creates severe write contention, tight schema coupling, and database connection exhaustion.",
      "B": "Synchronous REST chains create cascading failure risks: if Billing is slow or down, frontend checkouts fail immediately.",
      "C": "Cloud Storage object creation is not an asynchronous event-driven messaging queue."
    },
    "gcloudCommand": "gcloud pubsub topics create order-events && gcloud pubsub subscriptions create inventory-sub --topic=order-events",
    "architectureComponents": [
      "Cloud Pub/Sub"
    ],
    "officialDocUrl": "https://cloud.google.com/pubsub/docs/overview"
  },
  {
    "id": "ACE-D2-032",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud SQL Automatic Storage Increase",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Cloud SQL Automated Storage Capacity Scaling",
    "scenario": "A fast-growing mobile app database is hosted on Cloud SQL. If the database disk runs out of storage space, the database will shut down and cause an outage. Management wants to ensure that the database automatically expands storage capacity as data grows without requiring scheduled maintenance downtime or manual resizing. What feature should be enabled?",
    "keywords": [
      "Cloud SQL",
      "Automatic Storage Increase",
      "Disk Expansion",
      "Zero Downtime"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Migrate the database to Cloud Memorystore."
      },
      {
        "letter": "B",
        "text": "Enable Automatic Storage Increase on the Cloud SQL instance."
      },
      {
        "letter": "C",
        "text": "Write a cron script that polls df -h and runs gcloud sql instances patch."
      },
      {
        "letter": "D",
        "text": "Allocate a 64 TB persistent disk upfront immediately."
      }
    ],
    "correct": "B",
    "explanation": "Cloud SQL 'Automatic Storage Increase' monitors available disk space. When free space falls below a safe threshold (typically 10-20%), Cloud SQL automatically increases the storage capacity in-place without restarting the database or interrupting application traffic.",
    "distractors": {
      "A": "Cloud Memorystore is an ephemeral in-memory cache, not a durable relational database.",
      "D": "Allocating 64 TB upfront incurs unnecessary high persistent disk costs for unallocated space.",
      "C": "Custom polling scripts are fragile and can trigger disk resize API rate limits or delayed scaling."
    },
    "gcloudCommand": "gcloud sql instances patch my-sql-instance --enable-storage-auto-increase",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/instance-settings#automatic-storage-increase"
  },
  {
    "id": "ACE-D2-033",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "App Engine Environments: Standard vs Flexible",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting App Engine Standard vs App Engine Flexible Environment",
    "scenario": "A developer needs to deploy a Python web application on Google App Engine. Requirements: 1) Instant startup and scaling from 0 to hundreds of instances in seconds to handle sudden traffic spikes. 2) Free tier eligibility and scale to 0 cost when idle. 3) Standard Python 3.11 runtime with no custom OS binaries. Which App Engine environment should be planned?",
    "keywords": [
      "App Engine Standard",
      "App Engine Flexible",
      "Scale to Zero",
      "Instant Scaling",
      "Python"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "App Engine Standard Environment."
      },
      {
        "letter": "B",
        "text": "Compute Engine Sole-Tenant Node."
      },
      {
        "letter": "C",
        "text": "App Engine Flexible Environment."
      },
      {
        "letter": "D",
        "text": "GKE Standard with N2D nodes."
      }
    ],
    "correct": "A",
    "explanation": "App Engine Standard runs applications in fine-grained sandbox environments that scale up in milliseconds, scale down to 0 instances when idle, and include a daily free tier. App Engine Flexible runs inside Docker containers on Compute Engine VMs, which take minutes to scale and cannot scale to zero.",
    "distractors": {
      "B": "Sole-tenant nodes are dedicated physical servers with high monthly fixed costs.",
      "D": "GKE Standard requires continuous cluster and node pool operational management.",
      "C": "App Engine Flexible provisions underlying Compute Engine VM instances, taking several minutes to start up and cannot scale to 0 instances."
    },
    "gcloudCommand": "gcloud app deploy app.yaml",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/the-appengine-environments"
  },
  {
    "id": "ACE-D2-034",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Bucket Naming & DNS Conventions",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Cloud Storage Bucket Naming and Global Uniqueness",
    "scenario": "You are automating the creation of Cloud Storage buckets for new customer tenants. Which rule must be followed when choosing names for Google Cloud Storage buckets?",
    "keywords": [
      "Cloud Storage",
      "Bucket Naming",
      "Global Namespace",
      "DNS Compliant"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Bucket names can contain uppercase letters and underscore characters at any position."
      },
      {
        "letter": "B",
        "text": "Bucket names reside in a single global namespace across all Google Cloud customers, must be DNS-compliant (3-63 characters, lowercase, numbers, hyphens), and cannot be duplicated by any other project globally."
      },
      {
        "letter": "C",
        "text": "Bucket names only need to be unique within a single VPC subnet."
      },
      {
        "letter": "D",
        "text": "Bucket names must start with the string 'gcp-bucket-'."
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Storage bucket names are globally unique across all GCP accounts worldwide because buckets can be addressed via global DNS URLs (`storage.googleapis.com/<bucket_name>`). Bucket names must be 3 to 63 characters long, contain only lowercase letters, numbers, and hyphens.",
    "distractors": {
      "C": "Bucket namespace is global, not scoped to individual VPC subnets or projects.",
      "A": "Uppercase characters are strictly forbidden in Cloud Storage bucket names.",
      "D": "There is no mandatory prefix requirement for bucket naming."
    },
    "gcloudCommand": "gcloud storage buckets create gs://corp-tenant-alpha-storage-101 --location=us-central1",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/buckets#naming"
  },
  {
    "id": "ACE-D2-035",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Availability Policies: Live Migration",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Compute Engine Instance Live Migration vs Restart Policy",
    "scenario": "A company is hosting stateful, in-memory financial cache software on Compute Engine. During Google Cloud regular physical host maintenance events, the VMs must continue running without disruption or rebooting. How should the instance availability policy be configured?",
    "keywords": [
      "Compute Engine",
      "Live Migration",
      "OnHostMaintenance",
      "MIG",
      "SLA"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set the OnHostMaintenance policy to TERMINATE."
      },
      {
        "letter": "B",
        "text": "Attach an extreme persistent disk."
      },
      {
        "letter": "C",
        "text": "Set the OnHostMaintenance policy to MIGRATE (Live Migration)."
      },
      {
        "letter": "D",
        "text": "Enable Spot VM provisioning."
      }
    ],
    "correct": "C",
    "explanation": "By default, standard Compute Engine instances have `onHostMaintenance` set to `MIGRATE`. During infrastructure maintenance, Google live-migrates the running VM to another physical host in the same zone without restarting the guest OS or dropping network connections.",
    "distractors": {
      "B": "Disk type has no effect on host hypervisor live migration policies.",
      "A": "`TERMINATE` stops or restarts the VM on a new host, causing reboot downtime and cache state loss.",
      "D": "Spot VMs do not support Live Migration and are terminated during host events."
    },
    "gcloudCommand": "gcloud compute instances create stateful-cache --zone=us-central1-a --maintenance-policy=MIGRATE",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/live-migration"
  },
  {
    "id": "ACE-D2-036",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Load Balancing: Internal HTTP(S) LB",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Internal HTTP(S) Load Balancing for Private Three-Tier Applications",
    "scenario": "You are designing a secure 3-tier enterprise architecture on GCP (Web Tier -> App Tier -> DB Tier). The App Tier runs on private Compute Engine VMs in a custom VPC subnet. The Web Tier needs to send HTTP REST API requests to the App Tier balanced across multiple backend VMs. The App Tier must NEVER be reachable from outside the VPC. Which load balancing solution should you choose?",
    "keywords": [
      "Internal HTTPS Load Balancer",
      "Private Subnet",
      "Envoy Proxy",
      "Three-Tier Architecture"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Global External HTTPS Load Balancer."
      },
      {
        "letter": "B",
        "text": "Regional Internal Application Load Balancer (Internal HTTP(S) Load Balancer)."
      },
      {
        "letter": "C",
        "text": "DNS Round-Robin using public DNS records."
      },
      {
        "letter": "D",
        "text": "Cloud Armor with public VIP."
      }
    ],
    "correct": "B",
    "explanation": "The Regional Internal Application Load Balancer (Internal HTTP(S) LB) is an Envoy proxy-based private load balancer that operates inside your VPC using private RFC 1918 IP addresses. It supports Layer 7 URL routing, path matching, and health checking without exposing backends to external networks.",
    "distractors": {
      "D": "Cloud Armor protects public external endpoints, not private internal VPC communication.",
      "C": "DNS round-robin lacks instant health checking, fails over slowly, and public DNS records expose internal topology.",
      "A": "Global External Load Balancer allocates a public Anycast IP reachable from the internet, violating the private isolation requirement."
    },
    "gcloudCommand": "gcloud compute forwarding-rules create app-internal-lb --region=us-central1 --load-balancing-scheme=INTERNAL_MANAGED --network=prod-vpc --subnet=app-subnet --ports=80 --backend-service=app-backend-svc",
    "architectureComponents": [
      "Cloud Load Balancing",
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/l7-internal"
  },
  {
    "id": "ACE-D2-037",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine GPU Accelerator Planning",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting GPU Types for Deep Learning Acceleration on Compute Engine",
    "scenario": "A machine learning research team is planning GPU-accelerated training infrastructure on Compute Engine for large transformer language models. The workload requires high-bandwidth memory (HBM2e), NVLink interconnects between GPUs, and FP16 tensor core acceleration. Which GPU accelerator series should they plan?",
    "keywords": [
      "Compute Engine",
      "NVIDIA A100",
      "GPUs",
      "Machine Learning",
      "Deep Learning"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "NVIDIA A100 (or H100) Tensor Core GPUs attached to A2 (or A3) machine types."
      },
      {
        "letter": "B",
        "text": "NVIDIA T4 GPUs on E2 shared-core machines."
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable with GPU indexing."
      },
      {
        "letter": "D",
        "text": "Sole-tenant N1 instances with no attached accelerators."
      }
    ],
    "correct": "A",
    "explanation": "NVIDIA A100 and H100 GPUs provide high-bandwidth HBM2e memory and high-speed NVLink GPU-to-GPU mesh interconnects, offered natively on Compute Engine Accelerator-Optimized (A2 / A3) machine series for large-scale distributed deep learning training.",
    "distractors": {
      "B": "NVIDIA T4 is intended for cost-effective inference and lightweight graphics, not massive large-model training, and E2 does not support GPUs.",
      "C": "Cloud Bigtable is a NoSQL database and does not provide GPU compute accelerators.",
      "D": "Sole-tenant N1 without GPUs lacks tensor cores and hardware matrix accelerators."
    },
    "gcloudCommand": "gcloud compute instances create ml-gpu-trainer --zone=us-central1-a --machine-type=a2-highgpu-1g --image-family=common-cu113 --image-project=deeplearning-platform-release",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/gpus"
  },
  {
    "id": "ACE-D2-038",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine MIG & Autohealing Planning",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Managed Instance Groups (MIG) for High Availability and Autohealing",
    "scenario": "You are designing a high-traffic web service running on Compute Engine. The service must automatically recover if an instance freezes or application processes deadlock, scale out during traffic peaks, and distribute instances across three distinct zones within a region for disaster resilience. What architecture should you configure?",
    "keywords": [
      "Regional MIG",
      "Autohealing",
      "Health Check",
      "Autoscaling",
      "High Availability"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Regional Managed Instance Group (MIG) with an application Health Check for autohealing, CPU/HTTP autoscaling policy, and instance distribution across three zones."
      },
      {
        "letter": "B",
        "text": "A Zonal MIG with a cron script that restarts instances at midnight."
      },
      {
        "letter": "C",
        "text": "Three standalone VMs with manual snapshot restores."
      },
      {
        "letter": "D",
        "text": "An Unmanaged Instance Group spanning three regions."
      }
    ],
    "correct": "A",
    "explanation": "A Regional Managed Instance Group (Regional MIG) automatically spreads instances evenly across multiple zones within a region. Pairing the MIG with a specialized application Health Check enables automated Autohealing (recreating unhealthy instances), while autoscaling dynamically adjusts instance count to match demand.",
    "distractors": {
      "C": "Manual standalone VMs require human intervention during failures and lack automated load scaling.",
      "D": "Unmanaged Instance Groups do not support autohealing, autoscaling, or automated rolling updates.",
      "B": "Zonal MIGs cannot survive a complete zone outage, and scheduled cron restarts do not detect application deadlocks in real-time."
    },
    "gcloudCommand": "gcloud compute instance-groups managed create web-mig-regional --region=us-central1 --template=web-tmpl --size=3 --health-check=web-health-check --initial-delay=300",
    "architectureComponents": [
      "Compute Engine",
      "Cloud Monitoring"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs"
  },
  {
    "id": "ACE-D2-039",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Turbo Replication & RPO",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud Storage Turbo Replication for Dual-Region RPO SLA",
    "scenario": "A regulated bank uses a Dual-Region Cloud Storage bucket (`us-central1` and `us-east1`) to store mortgage loan application documents. The regulatory auditor requires a guaranteed Recovery Point Objective (RPO) SLA of 15 minutes or less for 100% of newly written objects replicated to the secondary region. What feature must you enable on the bucket?",
    "keywords": [
      "Cloud Storage",
      "Turbo Replication",
      "Dual-Region",
      "15-Minute RPO SLA",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Turbo Replication (enabled via gcloud storage buckets update --turbo-replication)."
      },
      {
        "letter": "B",
        "text": "Bucket Lock with 15-minute retention."
      },
      {
        "letter": "C",
        "text": "Object Versioning with 10 versions."
      },
      {
        "letter": "D",
        "text": "Standard Multi-Region storage class."
      }
    ],
    "correct": "A",
    "explanation": "Turbo Replication is a feature for Dual-Region Cloud Storage buckets that provides a 15-minute Recovery Point Objective (RPO) backed by a 99.9% service level agreement, ensuring that 100% of newly written objects replicate across paired regions in under 15 minutes.",
    "distractors": {
      "B": "Bucket Lock enforces retention duration, not inter-regional replication speed.",
      "D": "Standard Multi-Region replicates asynchronously without the contractual 15-minute RPO SLA of Turbo Replication.",
      "C": "Object Versioning preserves overwritten objects but does not accelerate cross-region replication speed."
    },
    "gcloudCommand": "gcloud storage buckets update gs://bank-mortgage-vault --turbo-replication",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/turbo-replication"
  },
  {
    "id": "ACE-D2-040",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "NoSQL Database Selection: Firestore vs Bigtable",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Evaluating Firestore vs Cloud Bigtable for Mobile Gaming User Profiles",
    "scenario": "A gaming studio is designing the backend database for a new global mobile game with 2 million daily active users. Requirements: 1) Store player profile documents, inventory JSON, and game achievements. 2) Direct integration with mobile iOS/Android client SDKs. 3) Support ACID multi-document transactions when trading items between players. 4) Automatic horizontal scaling. Which database is the best architectural fit?",
    "keywords": [
      "Firestore",
      "Mobile SDK",
      "Multi-Document Transactions",
      "NoSQL",
      "Document Database"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Bigtable with HDD disks."
      },
      {
        "letter": "B",
        "text": "Firestore in Native mode."
      },
      {
        "letter": "C",
        "text": "Cloud Storage CSV files."
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable."
      }
    ],
    "correct": "B",
    "explanation": "Firestore Native mode is a document-oriented NoSQL database that offers native mobile/web SDKs, automatic scaling, and ACID multi-document transactions (crucial for atomic player inventory item transfers and purchases).",
    "distractors": {
      "D": "Cloud Bigtable does not support multi-row ACID transactions, lacks direct mobile client SDKs, and requires backend API servers.",
      "C": "Cloud Storage CSV files lack transactional atomicity, concurrency controls, and real-time query capabilities.",
      "A": "Bigtable with HDD is intended for cold batch analytics, not transactional interactive mobile gaming."
    },
    "gcloudCommand": "gcloud firestore databases create --location=nam5 --type=firestore-native",
    "architectureComponents": [
      "Firestore"
    ],
    "officialDocUrl": "https://cloud.google.com/firestore/docs/overview"
  },
  {
    "id": "ACE-D2-041",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Armor Rate Limiting Policies",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Google Cloud Armor Rate Limiting to Throttling API Abuse",
    "scenario": "A public REST API is hosted behind a Global External HTTPS Load Balancer. To protect backend database servers from being overwhelmed by credential stuffing or scraper bots, you need to enforce a rate limit of no more than 100 requests per minute per client IP address, returning HTTP 429 Too Many Requests when the limit is exceeded. What should you configure?",
    "keywords": [
      "Cloud Armor",
      "Rate Limiting",
      "HTTP 429",
      "DDoS Defense",
      "Global Load Balancer"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy an API Gateway with an IAM Deny policy on all users."
      },
      {
        "letter": "B",
        "text": "Add a Rate Limiting rule to the Cloud Armor Security Policy with threshold 100 requests / 60 seconds, conform action 'allow', and exceed action 'deny-429'."
      },
      {
        "letter": "C",
        "text": "Configure Cloud CDN to cache all POST requests."
      },
      {
        "letter": "D",
        "text": "Create a VPC firewall rule blocking IP addresses that send more than 100 packets."
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Armor Rate Limiting rules allow administrators to define request thresholds per client IP (or cookie/header key). When a client exceeds the defined rate (e.g. 100 reqs/min), Cloud Armor automatically throttles or blocks the client returning HTTP 429 (Too Many Requests) or HTTP 403 at Google's edge.",
    "distractors": {
      "A": "Denying all users blocks legitimate application traffic completely.",
      "D": "VPC firewall rules operate at Layer 3/4 and cannot count or rate-limit HTTP request application rates.",
      "C": "Cloud CDN does not cache mutable REST POST/PUT requests by default, nor does it enforce client rate limits."
    },
    "gcloudCommand": "gcloud compute security-policies rules create 1000 --security-policy=api-protection-policy --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --action=rate-based-ban --ban-duration-sec=300 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=IP",
    "architectureComponents": [
      "Cloud Armor",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/armor/docs/rate-limiting-overview"
  },
  {
    "id": "ACE-D2-042",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Persistent Disk Performance Tiers",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Persistent Disk Types: pd-standard vs pd-balanced vs pd-ssd vs pd-extreme",
    "scenario": "You are configuring the storage volume for a high-transaction SAP HANA database on Compute Engine. The database requires 100,000 sustained random write IOPS and 1,200 MB/s disk throughput. Which Persistent Disk type is designed to scale IOPS independently of disk capacity to meet these extreme requirements?",
    "keywords": [
      "Extreme Persistent Disk",
      "pd-extreme",
      "High IOPS",
      "SAP HANA",
      "Block Storage"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Balanced Persistent Disk (pd-balanced)."
      },
      {
        "letter": "B",
        "text": "Standard Persistent Disk (pd-standard)."
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive bucket."
      },
      {
        "letter": "D",
        "text": "Extreme Persistent Disk (pd-extreme) or Hyperdisk Extreme."
      }
    ],
    "correct": "D",
    "explanation": "`pd-extreme` (and Hyperdisk Extreme) is Google Cloud's highest performance block storage tier, allowing provisioning of custom target IOPS (up to 120,000+ IOPS) independently of disk capacity for extreme database workloads like SAP HANA and Oracle.",
    "distractors": {
      "A": "pd-balanced caps IOPS and throughput well below extreme SAP HANA requirements unless provisioned with massive multi-terabyte sizes.",
      "C": "Cloud Storage Archive is object storage for cold multi-year backups and cannot act as a VM block disk.",
      "B": "pd-standard is mechanical HDD storage capped at very low IOPS (<1,000 IOPS)."
    },
    "gcloudCommand": "gcloud compute disks create sap-db-disk --zone=us-central1-a --size=1000GB --type=pd-extreme --provisioned-iops=100000",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/extreme-persistent-disks"
  },
  {
    "id": "ACE-D2-043",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Selection: Cloud Run Services vs Cloud Run Jobs",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Cloud Run Jobs for Asynchronous Scheduled Batch Ingestion",
    "scenario": "A finance team needs to run an automated nightly batch calculation script packaged in a container. The script runs for 45 minutes, executes to completion, processes financial spreadsheets, and exits with status 0. It does not listen on an HTTP port. Which serverless execution product should be planned?",
    "keywords": [
      "Cloud Run Jobs",
      "Batch Processing",
      "Serverless",
      "Scheduled Tasks",
      "Cloud Scheduler"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Functions 1st gen."
      },
      {
        "letter": "B",
        "text": "Cloud Run Service with HTTP health checks."
      },
      {
        "letter": "C",
        "text": "Cloud Run Jobs, triggered on a schedule via Cloud Scheduler."
      },
      {
        "letter": "D",
        "text": "Compute Engine 24/7 VM with no shutdown script."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run Jobs are built specifically for containerized run-to-completion batch processing tasks that do not listen for HTTP requests and can execute for up to 24 hours. Triggering the job via Cloud Scheduler provides serverless scheduled automation.",
    "distractors": {
      "B": "Cloud Run Services require listening on an HTTP port and are intended for persistent web servers/APIs.",
      "A": "Cloud Functions 1st gen has a maximum execution timeout of 9 minutes, failing the 45-minute runtime requirement.",
      "D": "Running a 24/7 Compute Engine VM wastes compute budget for 23+ idle hours per day."
    },
    "gcloudCommand": "gcloud run jobs create nightly-finance-batch --image=gcr.io/corp/finance-batch:latest --max-retries=3 --task-timeout=3600s --region=us-central1",
    "architectureComponents": [
      "Cloud Run",
      "Cloud Scheduler"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/create-jobs"
  },
  {
    "id": "ACE-D2-044",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Interconnect High Availability (99.99% SLA)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Dedicated Interconnect Redundancy for 99.99% Enterprise SLA",
    "scenario": "An enterprise is designing a Dedicated Interconnect connection to Google Cloud. The architecture must achieve a 99.99% availability SLA for mission-critical production operations. What physical infrastructure topology is required?",
    "keywords": [
      "Dedicated Interconnect",
      "99.99% SLA",
      "Two Colocation Facilities",
      "Four Circuits",
      "Cloud Router"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Classic VPN connection paired with static routes."
      },
      {
        "letter": "B",
        "text": "A single Dedicated Interconnect 100 Gbps circuit in one colocation facility."
      },
      {
        "letter": "C",
        "text": "At least four Dedicated Interconnect circuits deployed across two distinct Google Cloud Colocation Facilities (two circuits per metro facility in separate Edge Availability Domains), connected to redundant Cloud Routers in a multi-region or regional VPC configuration with dynamic BGP routing."
      },
      {
        "letter": "D",
        "text": "Two circuits connected to the same physical switch in a single facility."
      }
    ],
    "correct": "C",
    "explanation": "To qualify for Google's 99.99% SLA on Dedicated Interconnect, the architecture requires 4 physical circuits: 2 connections in Colocation Facility A (in Edge Availability Domain 1 and 2) and 2 connections in Colocation Facility B (in Edge Availability Domain 1 and 2), with dynamic BGP routing across dual Cloud Routers.",
    "distractors": {
      "A": "Classic VPN is deprecated, travels over the public internet, and does not provide 99.99% enterprise physical line SLA.",
      "B": "A single circuit has no physical hardware redundancy and carries no SLA.",
      "D": "Two circuits in a single facility provide only 99.9% SLA (vulnerable to facility-wide power/fiber loss)."
    },
    "gcloudCommand": "gcloud compute interconnects create prod-interconnect-metro1-a --customer-name='Corp IT' --interconnect-type=DEDICATED --link-type=LINK_TYPE_ETHERNET_100G_LR --location=iad-zone1-1",
    "architectureComponents": [
      "Cloud Interconnect",
      "Cloud Router",
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/high-availability"
  },
  {
    "id": "ACE-D2-045",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Storage Selection: Dual-Region vs Multi-Region",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Storage Dual-Region vs Multi-Region for Regulatory Data Residency",
    "scenario": "A legal firm in Germany must store electronic case records with automated geo-redundancy and cross-datacenter failover. However, strict German data sovereignty laws prohibit data from being stored or replicated in any datacenter outside of Germany (specifically, data cannot be placed in the Netherlands, Belgium, or Ireland). Which bucket location should be planned?",
    "keywords": [
      "Cloud Storage",
      "Dual-Region",
      "Data Sovereignty",
      "Germany",
      "europe-west3"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A predefined Dual-Region pairing Frankfurt (europe-west3) and Berlin (europe-west10), or dual-region strictly within Germany."
      },
      {
        "letter": "B",
        "text": "A single zonal persistent disk in us-central1."
      },
      {
        "letter": "C",
        "text": "The standard EU Multi-Region location."
      },
      {
        "letter": "D",
        "text": "The US Multi-Region location."
      }
    ],
    "correct": "A",
    "explanation": "EU Multi-Region spreads data across data centers in Germany, Netherlands, Belgium, Finland, etc., which violates the national residency constraint. Selecting a custom or predefined Dual-Region strictly within Germany (e.g. `europe-west3` and `europe-west10`) provides geo-redundancy while strictly confining data to German soil.",
    "distractors": {
      "B": "Zonal disks in the US violate both German residency laws and cross-zone disaster recovery standards.",
      "D": "US Multi-Region stores data in North America, completely breaching European GDPR and German legal mandates.",
      "C": "EU Multi-Region places data replicas in multiple European countries outside Germany, violating German sovereignty laws."
    },
    "gcloudCommand": "gcloud storage buckets create gs://german-legal-vault --location=europe-west3,europe-west10 --default-storage-class=STANDARD",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#dual-regions"
  },
  {
    "id": "ACE-D2-046",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Load Balancing SSL Policies & Cipher Suites",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning SSL Policy Minimum TLS Version for Load Balancers",
    "scenario": "An enterprise security audit mandates that all public web endpoints terminate TLS connections using at least TLS 1.2 or TLS 1.3, completely disabling outdated and vulnerable TLS 1.0 and TLS 1.1 protocols and weak cipher suites. What configuration should be planned on the Google Cloud Load Balancer?",
    "keywords": [
      "SSL Policies",
      "TLS 1.2",
      "Cloud Load Balancing",
      "Cipher Suites",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an SSL Policy with min-tls-version=TLS_1_2 and profile=MODERN (or RESTRICTED), and attach it to the Target HTTPS Proxy of the Load Balancer."
      },
      {
        "letter": "B",
        "text": "Change the DNS records to point to an unencrypted HTTP port."
      },
      {
        "letter": "C",
        "text": "Install TLS certificates directly on backend Compute Engine instances and bypass the load balancer."
      },
      {
        "letter": "D",
        "text": "Write a firewall rule to reject TCP packets containing TLS 1.0 headers."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Load Balancer SSL Policies allow controlling the SSL/TLS protocol versions and cipher suites accepted by the Target HTTPS or Target SSL proxy. Setting `--min-tls-version=TLS_1_2` with the `MODERN` or `RESTRICTED` profile drops legacy TLS 1.0/1.1 client connections at the Google edge.",
    "distractors": {
      "D": "VPC firewall rules inspect L3/L4 headers and cannot decode or filter TLS handshake protocol versions.",
      "C": "Managing certificates on hundreds of individual backend VMs eliminates centralized SSL offloading and Anycast edge caching.",
      "B": "Downgrading to plain HTTP sends unencrypted plaintext traffic over the internet, causing critical security failure."
    },
    "gcloudCommand": "gcloud compute ssl-policies create modern-tls-policy --profile=MODERN --min-tls-version=TLS_1_2 && gcloud compute target-https-proxies update global-https-proxy --ssl-policy=modern-tls-policy",
    "architectureComponents": [
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/ssl-policies"
  },
  {
    "id": "ACE-D2-047",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Private Google Access Architecture & Sizing",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Private Google Access for Cloud Storage Egress Optimization",
    "scenario": "You have 100 private Compute Engine instances in subnet `10.50.0.0/20` in `us-west1` with no external IP addresses. The VMs need to download 20 TB of training data from a Cloud Storage bucket in `us-west1`. What network design provides the fastest throughput and zero NAT data processing charges?",
    "keywords": [
      "Private Google Access",
      "Subnet",
      "Zero NAT Charges",
      "High Throughput",
      "Cloud Storage"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Assign public IPs to all 100 instances and allow internet egress."
      },
      {
        "letter": "B",
        "text": "Deploy a squid proxy VM with an external IP address."
      },
      {
        "letter": "C",
        "text": "Route all traffic through a Cloud NAT gateway with 10 static IPs."
      },
      {
        "letter": "D",
        "text": "Enable Private Google Access on the subnet, allowing VMs to route directly to Google APIs over Google's high-speed internal network with no NAT gateway charges."
      }
    ],
    "correct": "D",
    "explanation": "Private Google Access allows instances with internal-only IP addresses to communicate directly with Google Cloud services (such as Cloud Storage and BigQuery) via Google's internal software-defined network. This avoids Cloud NAT data processing fees and maximizes data transfer speeds.",
    "distractors": {
      "A": "Assigning public IPs introduces internet attack surface and incurs static IP reservation costs.",
      "C": "Cloud NAT incurs data processing fees per GB and introduces unnecessary translation overhead for native Google APIs.",
      "B": "Proxy VMs introduce network bandwidth bottlenecks, single points of failure, and operational maintenance."
    },
    "gcloudCommand": "gcloud compute networks subnets update ml-private-sub --region=us-west1 --enable-private-ip-google-access",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-google-access"
  },
  {
    "id": "ACE-D2-048",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud SQL Point-in-Time Recovery Planning",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Architecting Cloud SQL Point-in-Time Recovery (PITR) and Transaction Log Archival",
    "scenario": "A database administrator is planning the backup strategy for a PostgreSQL database on Cloud SQL. The business requires the ability to restore the database to any specific second in time over the last 7 days in the event of an accidental SQL DROP TABLE statement. Which combination of features must be configured?",
    "keywords": [
      "Cloud SQL",
      "Automated Backups",
      "Point-in-Time Recovery",
      "PITR",
      "WAL Logs"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Cloud Storage Object Versioning on the database volume."
      },
      {
        "letter": "B",
        "text": "Create a read replica and pause replication at midnight."
      },
      {
        "letter": "C",
        "text": "Take a manual SQL dump once every 24 hours using pg_dump."
      },
      {
        "letter": "D",
        "text": "Enable Automated Backups with a 7-day retention window and enable Point-in-Time Recovery (PITR) using write-ahead logging (WAL)."
      }
    ],
    "correct": "D",
    "explanation": "Point-in-Time Recovery (PITR) in Cloud SQL requires automated daily backups to provide base snapshots, combined with continuous transaction log archival (binary logs in MySQL or write-ahead logs in PostgreSQL). This allows rolling forward transactions to any exact minute and second within the retention window.",
    "distractors": {
      "A": "Object versioning applies to Cloud Storage buckets, not active Cloud SQL relational database transaction logs.",
      "B": "Pausing read replicas stops replication and does not provide arbitrary second-level historical restoration.",
      "C": "Daily dumps only restore to the exact time of the dump, losing all data created between dumps (up to 24 hours of data loss)."
    },
    "gcloudCommand": "gcloud sql instances patch my-postgres-db --enable-point-in-time-recovery --backup-start-time=01:00",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr"
  },
  {
    "id": "ACE-D2-049",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Run Traffic Management & Rollout Strategy",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud Run Traffic Allocation for Canary Releases and Blue-Green Deployments",
    "scenario": "You are deploying a new version (Revision `v2`) of a microservice on Cloud Run. To validate performance and minimize blast radius before a full rollout, you want to route exactly 10% of live production traffic to `v2` and keep 90% of traffic on the stable `v1` revision. What gcloud command should you plan?",
    "keywords": [
      "Cloud Run",
      "Traffic Splitting",
      "Canary Deployment",
      "Blue-Green",
      "Revisions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an nginx container in front of Cloud Run with a random number generator."
      },
      {
        "letter": "B",
        "text": "gcloud run deploy my-service --image=v2 --split-traffic=10"
      },
      {
        "letter": "C",
        "text": "gcloud run services update-traffic my-service --to-revisions=my-service-v1=90,my-service-v2=10"
      },
      {
        "letter": "D",
        "text": "Deploy two separate Cloud Run services and use DNS weights."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run natively supports percentage-based traffic splitting across revisions using `gcloud run services update-traffic <service_name> --to-revisions=<rev1>=<pct1>,<rev2>=<pct2>`, enabling instant zero-downtime canary testing and instant rollback.",
    "distractors": {
      "B": "`--split-traffic` is not a valid flag on `gcloud run deploy`.",
      "D": "DNS-based traffic splitting causes cache latency, TTL stickiness, and lacks instant rollback capabilities.",
      "A": "Custom Nginx proxies add unnecessary infrastructure maintenance when Cloud Run provides native edge traffic splitting."
    },
    "gcloudCommand": "gcloud run services update-traffic my-service --to-revisions=my-service-v1=90,my-service-v2=10",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-split"
  },
  {
    "id": "ACE-D2-050",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Spanner Sizing & Processing Units",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Evaluating Cloud Spanner Node Sizing and Processing Units (PU)",
    "scenario": "A software company is deploying a small microservice on Cloud Spanner. The database will store 150 GB of data and experience low traffic (500 QPS). Management wants to minimize hourly infrastructure costs while still benefiting from Spanner's global ACID transactions. How should the instance be sized?",
    "keywords": [
      "Cloud Spanner",
      "Processing Units",
      "PU",
      "Cost Optimization",
      "Microservice Sizing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Provision a 10-node Spanner cluster and shut it down every weekend."
      },
      {
        "letter": "B",
        "text": "Store data in BigQuery and query it via Spanner federated queries."
      },
      {
        "letter": "C",
        "text": "Deploy Cloud Spanner on a Compute Engine e2-micro instance."
      },
      {
        "letter": "D",
        "text": "Provision the Cloud Spanner instance using Processing Units (e.g. 100 or 200 Processing Units, which represent fractional nodes) instead of a full 1-node instance."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Spanner supports granular sizing via Processing Units (1 node = 1,000 Processing Units). Customers with small databases or low QPS can provision fractional capacity (100, 200, 300, 400, or 500 PUs), significantly lowering the entry barrier cost while maintaining full ACID Spanner features.",
    "distractors": {
      "B": "BigQuery is an analytical data warehouse and cannot support low-latency transactional microservice writes.",
      "A": "A 10-node cluster is massively over-provisioned for 500 QPS and scheduled shutdown causes total service downtime.",
      "C": "Cloud Spanner is a fully managed cloud service and cannot be installed on a self-hosted Compute Engine VM."
    },
    "gcloudCommand": "gcloud spanner instances create small-spanner --config=regional-us-central1 --processing-units=200 --description='Lightweight Spanner DB'",
    "architectureComponents": [
      "Cloud Spanner"
    ],
    "officialDocUrl": "https://cloud.google.com/spanner/docs/compute-capacity"
  },
  {
    "id": "ACE-D2-051",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Interconnect MACsec Layer 2 Encryption",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Cloud Interconnect MACsec Encryption for Physical Link Security",
    "scenario": "A government defense agency is establishing a 100 Gbps Dedicated Interconnect between an on-premises data center and Google Cloud. Security compliance mandates that all data in transit across the physical fiber circuits must be hardware-encrypted at Layer 2 (Ethernet layer). What technology should you plan?",
    "keywords": [
      "Cloud Interconnect",
      "MACsec",
      "Layer 2 Encryption",
      "Dedicated Interconnect",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a software IPsec VPN VM inside Compute Engine."
      },
      {
        "letter": "B",
        "text": "Enable Media Access Control Security (MACsec) on the Dedicated Interconnect physical links using pre-shared keys stored in Cloud KMS or Secret Manager."
      },
      {
        "letter": "C",
        "text": "Convert the Interconnect into a public Cloud Storage bucket."
      },
      {
        "letter": "D",
        "text": "Rely on standard TLS 1.3 at the application layer only."
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud supports MACsec (IEEE 802.1AE) Layer 2 point-to-point encryption on Dedicated Interconnect circuits. MACsec encrypts all Ethernet frames at line-rate speed (up to 100 Gbps) directly on router hardware between on-premises and Google edge routers.",
    "distractors": {
      "A": "Software IPsec VMs cap bandwidth at a fraction of 100 Gbps line rate and introduce severe CPU bottlenecks.",
      "C": "Cloud Storage is an object storage service and cannot encrypt physical network transmission lines.",
      "D": "Application-layer TLS does not encrypt network Layer 2/3 headers and fails strict physical transport encryption mandates."
    },
    "gcloudCommand": "gcloud compute interconnects create dedicated-macsec-conn --customer-name='Defense IT' --interconnect-type=DEDICATED --link-type=LINK_TYPE_ETHERNET_100G_LR --location=iad-zone1-1 --enable-macsec",
    "architectureComponents": [
      "Cloud Interconnect",
      "Cloud KMS"
    ],
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/macsec"
  },
  {
    "id": "ACE-D2-052",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "BigQuery Editions & Slot Capacity Planning",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting BigQuery Reservations and Editions (Standard, Enterprise, Enterprise Plus)",
    "scenario": "An enterprise runs hundreds of critical business intelligence dashboards with unpredictable query concurrency in BigQuery. Under the on-demand query pricing model ($6.25/TB scanned), monthly costs fluctuate wildly, and large complex queries occasionally fail due to query concurrency limits. Management wants predictable fixed monthly billing with dedicated compute slots and autoscaling capacity. What BigQuery model should be planned?",
    "keywords": [
      "BigQuery Editions",
      "Capacity Reservations",
      "Slots",
      "FinOps",
      "Predictable Cost"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Purchase a BigQuery Enterprise Edition capacity reservation with autoscaling slots."
      },
      {
        "letter": "B",
        "text": "Export all data from BigQuery to a single PostgreSQL database."
      },
      {
        "letter": "C",
        "text": "Remain on on-demand pricing and ask analysts to query smaller datasets."
      },
      {
        "letter": "D",
        "text": "Migrate all tables to Cloud Storage and query using Cloud Functions."
      }
    ],
    "correct": "A",
    "explanation": "BigQuery Editions (Standard, Enterprise, Enterprise Plus) provide capacity-based pricing with dedicated or autoscaling slot reservations. This delivers consistent query performance, isolated slot pools for mission-critical BI, and predictable, budget-controlled monthly costs.",
    "distractors": {
      "C": "Verbal requests to data analysts do not guarantee cost caps and fail to prevent runaway scan costs.",
      "B": "PostgreSQL cannot scale to handle multi-terabyte / petabyte enterprise analytical queries.",
      "D": "Cloud Functions has memory and timeout limits and cannot replace a massively parallel analytical query engine."
    },
    "gcloudCommand": "gcloud bigquery reservations create prod-bi-reservation --project=analytics-corp --location=US --slots=500 --edition=ENTERPRISE",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/editions-intro"
  },
  {
    "id": "ACE-D2-053",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Cloud Storage Bucket Lock & WORM Planning",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Designing Cloud Storage Bucket Lock for Ransomware Protection and Immutable Compliance",
    "scenario": "A legal compliance team requires that signed PDF contract agreements stored in a Cloud Storage bucket must remain completely immutable (cannot be deleted, modified, or overwritten) for exactly 3 years (94,608,000 seconds) to comply with regulatory document preservation laws. What Cloud Storage feature should be implemented?",
    "keywords": [
      "Cloud Storage",
      "Bucket Lock",
      "Retention Policy",
      "WORM",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure a Retention Policy with a retention period of 94608000s and lock the policy using Bucket Lock."
      },
      {
        "letter": "B",
        "text": "Enable Object Versioning with 3 versions."
      },
      {
        "letter": "C",
        "text": "Set the storage class to Coldline."
      },
      {
        "letter": "D",
        "text": "Remove the storage.objects.delete permission from developers only."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Retention Policies with Bucket Lock enforce Write-Once-Read-Many (WORM) storage. Once a retention policy is locked, the retention duration cannot be reduced or deleted, ensuring objects cannot be modified or deleted by anyone until their individual retention period expires.",
    "distractors": {
      "D": "Removing developer permissions does not prevent Project Owners or compromised admin credentials from deleting objects.",
      "B": "Object versioning retains prior versions when overwritten, but does not block deleting objects or versions.",
      "C": "Storage classes govern pricing tiers and access frequency, not immutable deletion protection."
    },
    "gcloudCommand": "gcloud storage buckets update gs://contracts-vault --retention-period=94608000s && gcloud storage retention-policies lock gs://contracts-vault",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock"
  },
  {
    "id": "ACE-D2-054",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compute Engine Startup Scripts & Metadata",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Planning Compute Engine Custom Metadata and Startup Script Execution",
    "scenario": "You are deploying a Compute Engine VM from a standard Ubuntu base image. The VM needs to automatically install Apache web server, fetch code from a repository, and start the web service immediately upon initial boot without human intervention. How should you supply this configuration?",
    "keywords": [
      "Compute Engine",
      "Startup Script",
      "Metadata",
      "Automation",
      "Instance Creation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Save the script in an Archive storage bucket and set an IAM deny rule."
      },
      {
        "letter": "B",
        "text": "Create a custom VPC firewall rule that executes the script over port 22."
      },
      {
        "letter": "C",
        "text": "Pass the shell script via instance metadata using the startup-script or startup-script-url key during instance creation."
      },
      {
        "letter": "D",
        "text": "SSH into the instance manually after boot and type the commands."
      }
    ],
    "correct": "C",
    "explanation": "Compute Engine supports `startup-script` (inline code) and `startup-script-url` (Cloud Storage script URL) custom metadata keys. Compute Engine guest environment agents detect this metadata and execute the script automatically with root privileges during the operating system boot process.",
    "distractors": {
      "B": "Firewall rules inspect and filter network traffic; they cannot execute arbitrary bash commands inside guest VMs.",
      "A": "Saving a script with an IAM deny rule blocks access and does not execute anything on boot.",
      "D": "Manual SSH configuration cannot scale with autoscaling and requires human intervention."
    },
    "gcloudCommand": "gcloud compute instances create web-server --zone=us-central1-a --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --metadata-from-file=startup-script=install-web.sh",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/startup-scripts/linux"
  },
  {
    "id": "ACE-D2-055",
    "certId": "ace",
    "blockId": "BLOCK-6",
    "domainId": "ACE-D2",
    "domainName": "Planning and configuring a cloud solution",
    "subtopic": "Compliance Architecture: PCI-DSS & VPC Service Controls",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Selecting Cloud Architecture for PCI-DSS Regulated Payment Gateway",
    "scenario": "An enterprise is building a credit card processing payment microservice on Google Cloud. The system must comply with strict PCI-DSS Level 1 compliance requirements: 1) Isolate cardholder data environment (CDE) in a dedicated GCP project. 2) Block data exfiltration to unauthorized Google services or external public storage buckets. 3) Enforce end-to-end TLS encryption. What perimeter security capability should be planned?",
    "keywords": [
      "VPC Service Controls",
      "Service Perimeter",
      "PCI-DSS",
      "Data Exfiltration Prevention",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy an unmanaged proxy server on a public subnet."
      },
      {
        "letter": "B",
        "text": "Rely entirely on standard IAM permissions without perimeter boundaries."
      },
      {
        "letter": "C",
        "text": "Define a VPC Service Controls (VPC SC) Service Perimeter enclosing the CDE project, restricting Cloud Storage and BigQuery API access to authorized networks and identities."
      },
      {
        "letter": "D",
        "text": "Disable SSL certificates on internal database connections."
      }
    ],
    "correct": "C",
    "explanation": "VPC Service Controls (VPC SC) creates security perimeters around Google Cloud resources (Cloud Storage, BigQuery, Cloud SQL) to prevent data exfiltration. Even if an attacker compromises a valid IAM credential, API calls attempting to copy data to external buckets or unauthorized networks outside the perimeter are blocked.",
    "distractors": {
      "B": "IAM alone does not protect against insider data exfiltration to legitimate external GCP buckets or credential theft.",
      "D": "Disabling SSL violates core PCI-DSS encryption-in-transit requirements.",
      "A": "Public proxy servers introduce severe security vulnerabilities and expand the PCI-DSS audit scope unnecessarily."
    },
    "gcloudCommand": "gcloud access-context-manager perimeters create cde_perimeter --title='PCI-DSS CDE Perimeter' --resources='projects/123456789012' --restricted-services='storage.googleapis.com,bigquery.googleapis.com' --policy=9876543210",
    "architectureComponents": [
      "VPC Service Controls",
      "Cloud Storage",
      "BigQuery",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc-service-controls/docs/overview"
  },
  {
    "id": "ACE-D3-001",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Instance Deployment & Automation",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Compute Engine Instances with Startup Scripts and Custom Metadata",
    "scenario": "You need to deploy a Compute Engine VM named `web-prod-1` in zone `us-central1-a` attached to custom subnet `frontend-sub`. The VM must automatically execute a provisioning shell script located locally at `./bootstrap.sh` upon its first boot. Which gcloud command should you execute?",
    "keywords": [
      "Compute Engine",
      "gcloud compute instances create",
      "startup-script",
      "Metadata",
      "Subnet"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --metadata-from-file=startup-script=./bootstrap.sh"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances start web-prod-1 --metadata=bootstrap=./bootstrap.sh"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --script=./bootstrap.sh"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --metadata=run=./bootstrap.sh"
      }
    ],
    "correct": "A",
    "explanation": "The `--metadata-from-file` flag with key `startup-script` passes a local shell script file to the Compute Engine instance metadata service, which executes automatically with root privileges upon instance startup.",
    "distractors": {
      "D": "`--metadata=run=...` sets an arbitrary metadata key `run` which is not recognized by the guest OS startup agent.",
      "C": "`--script` is not a valid flag on `gcloud compute instances create`.",
      "B": "`instances start` is used to start an existing stopped instance, not create a new VM."
    },
    "gcloudCommand": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --metadata-from-file=startup-script=./bootstrap.sh",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/startup-scripts/linux"
  },
  {
    "id": "ACE-D3-002",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Private Cluster Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying a Private GKE Cluster with Master Authorized Networks",
    "scenario": "You are deploying a hardened production Google Kubernetes Engine (GKE) cluster in region `us-central1`. Security mandates: 1) Worker nodes must have private internal IP addresses only. 2) The Kubernetes API control plane must not be accessible to public internet scans. 3) Only corporate bastion jump hosts from CIDR `10.240.0.0/28` can reach the master API endpoint. What command creates this cluster?",
    "keywords": [
      "GKE",
      "Private Cluster",
      "Master Authorized Networks",
      "enable-private-nodes",
      "CIDR"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --enable-private-endpoint --master-ipv4-cidr=172.16.0.0/28 --enable-master-authorized-networks --master-authorized-networks=10.240.0.0/28"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters create prod-k8s --zone=us-central1-a --disable-ip-alias"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters create prod-k8s --public-cluster --master-authorized-networks=0.0.0.0/0"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create prod-k8s-master --private-ip-only"
      }
    ],
    "correct": "A",
    "explanation": "Deploying a fully private GKE cluster requires `--enable-private-nodes` (private worker nodes), `--enable-private-endpoint` (disables public master endpoint), `--master-ipv4-cidr` (allocates a /28 CIDR for the Google-managed master plane), and `--enable-master-authorized-networks` (whitelists management CIDRs).",
    "distractors": {
      "B": "Private clusters require VPC-native Alias IPs; disabling IP alias prevents private cluster creation.",
      "D": "GKE master nodes are managed by Google Cloud and cannot be created via `gcloud compute instances create`.",
      "C": "Public clusters assign external IPs to nodes and master-authorized-networks of 0.0.0.0/0 permits public internet access."
    },
    "gcloudCommand": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --enable-private-endpoint --master-ipv4-cidr=172.16.0.0/28 --enable-master-authorized-networks --master-authorized-networks=10.240.0.0/28",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters"
  },
  {
    "id": "ACE-D3-003",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Run Deployment & Ingress Settings",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying a Serverless Container on Cloud Run with Least Privilege Ingress",
    "scenario": "You have built a container image `gcr.io/my-corp/order-api:v1` for an internal order-processing service. You need to deploy this service to Cloud Run in `us-east4` such that it can ONLY receive traffic from internal VPC resources or Cloud Load Balancing, and is blocked from direct public internet invocations. Which command should you run?",
    "keywords": [
      "Cloud Run",
      "Ingress Internal",
      "Serverless",
      "Security",
      "Container Deployment"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud run deploy order-api --image=gcr.io/my-corp/order-api:v1 --region=us-east4 --ingress=internal-and-cloud-load-balancing"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy order-api --image=gcr.io/my-corp/order-api:v1 --region=us-east4 --ingress=all --allow-unauthenticated"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create order-api --image=gcr.io/my-corp/order-api:v1"
      },
      {
        "letter": "D",
        "text": "gcloud app deploy --image=gcr.io/my-corp/order-api:v1"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run supports `--ingress` settings: `all` (default, public internet), `internal` (VPC/Direct VPC egress only), and `internal-and-cloud-load-balancing` (allows traffic from internal VPCs and Cloud Load Balancing while rejecting direct public internet requests).",
    "distractors": {
      "B": "`--ingress=all --allow-unauthenticated` exposes the microservice directly to the public internet.",
      "D": "App Engine does not deploy raw GCR container images using `gcloud app deploy` without app.yaml.",
      "C": "Compute Engine instance creation is for VMs, not fully managed serverless Cloud Run services."
    },
    "gcloudCommand": "gcloud run deploy order-api --image=gcr.io/my-corp/order-api:v1 --region=us-east4 --ingress=internal-and-cloud-load-balancing",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/securing/ingress"
  },
  {
    "id": "ACE-D3-004",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Workload Identity Implementation",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Workload Identity Binding for Kubernetes Service Accounts",
    "scenario": "A Kubernetes Deployment running in GKE namespace `backend` needs to read objects from a Cloud Storage bucket `corp-data-vault`. To avoid static JSON keys, you enabled Workload Identity on the GKE cluster. You created a Google IAM Service Account `gcs-reader@corp.iam.gserviceaccount.com` with Storage Object Viewer role, and a Kubernetes Service Account (KSA) `ksa-gcs` in namespace `backend`. What IAM binding must you apply?",
    "keywords": [
      "Workload Identity",
      "roles/iam.workloadIdentityUser",
      "GKE",
      "KSA",
      "Cloud Storage"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a JSON key for gcs-reader and mount it as a Kubernetes Secret in the Pod."
      },
      {
        "letter": "B",
        "text": "Grant roles/owner to ksa-gcs at the project level."
      },
      {
        "letter": "C",
        "text": "Set the Cloud Storage bucket ACL to public read."
      },
      {
        "letter": "D",
        "text": "Grant roles/iam.workloadIdentityUser to the member 'serviceAccount:corp.svc.id.goog[backend/ksa-gcs]' on the Google Service Account gcs-reader@corp.iam.gserviceaccount.com."
      }
    ],
    "correct": "D",
    "explanation": "GKE Workload Identity bridges Kubernetes identities to GCP IAM. Binding `roles/iam.workloadIdentityUser` to `serviceAccount:<PROJECT_ID>.svc.id.goog[<NAMESPACE>/<KSA_NAME>]` on the target Google IAM Service Account authorizes the Kubernetes Pod to assume the GCP identity automatically.",
    "distractors": {
      "C": "Making the bucket public exposes sensitive data to the world.",
      "B": "Kubernetes service accounts cannot be granted GCP IAM roles directly without Workload Identity pool bindings.",
      "A": "Mounting JSON keys as secrets bypasses Workload Identity and reintroduces static key compromise risks."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding gcs-reader@corp.iam.gserviceaccount.com --role=roles/iam.workloadIdentityUser --member='serviceAccount:corp.svc.id.goog[backend/ksa-gcs]'",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud IAM",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity"
  },
  {
    "id": "ACE-D3-005",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Deployment & HA Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Regional Cloud SQL Instance with High Availability and Automated Backups",
    "scenario": "You are deploying a production MySQL 8.0 instance on Cloud SQL in region `europe-west3`. The database must have High Availability (regional failover standby), 4 vCPUs, 16 GB RAM, SSD storage, and daily automated backups starting at 03:00 UTC with point-in-time recovery. Which command accomplishes this?",
    "keywords": [
      "Cloud SQL",
      "MySQL 8.0",
      "Regional HA",
      "Backups",
      "PITR"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create prod-mysql-db --image-family=mysql-8"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-n1-standard-1 --availability-type=ZONAL"
      },
      {
        "letter": "C",
        "text": "gcloud spanner instances create prod-mysql-db --config=regional-europe-west3"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --backup-start-time=03:00 --enable-point-in-time-recovery --storage-type=SSD"
      }
    ],
    "correct": "D",
    "explanation": "Deploying a production Cloud SQL instance with HA and backups requires `gcloud sql instances create` specifying `--availability-type=REGIONAL`, `--database-version=MYSQL_8_0`, `--tier=db-custom-4-16384`, `--backup-start-time=03:00`, and `--enable-point-in-time-recovery`.",
    "distractors": {
      "A": "Compute Engine instance creation provisions an unmanaged VM, not managed Cloud SQL.",
      "C": "Cloud Spanner is a different database engine and does not run native MySQL 8.0.",
      "B": "ZONAL availability lacks standby regional failover and n1-standard-1 does not meet the 4 vCPU / 16GB RAM spec."
    },
    "gcloudCommand": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --backup-start-time=03:00 --enable-point-in-time-recovery --storage-type=SSD",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/create-instance"
  },
  {
    "id": "ACE-D3-006",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Functions Gen 2 Eventarc Storage Trigger",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Event-Driven Cloud Functions Gen 2 Triggered by Cloud Storage Uploads",
    "scenario": "You are implementing an image processing pipeline. Whenever a new JPEG image object is finalized and uploaded to Cloud Storage bucket `gs://raw-user-photos`, an automated Python 3.11 Cloud Function must immediately resize the image and generate a thumbnail. Which gcloud command deploys this function?",
    "keywords": [
      "Cloud Functions",
      "Gen 2",
      "Eventarc",
      "Cloud Storage Trigger",
      "google.cloud.storage.object.v1.finalized"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --trigger-event-filters='type=google.cloud.storage.object.v1.finalized' --trigger-event-filters='bucket=raw-user-photos' --entry-point=handle_photo_upload"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy process-photo --trigger-cron='* * * * *'"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create process-photo --storage-trigger=raw-user-photos"
      },
      {
        "letter": "D",
        "text": "gcloud functions deploy process-photo --trigger-http --allow-unauthenticated"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Functions (2nd gen) leverages Eventarc for event-driven triggers. Specifying `--gen2`, `--trigger-event-filters='type=google.cloud.storage.object.v1.finalized'`, and `--trigger-event-filters='bucket=raw-user-photos'` wires the storage upload event directly to the function handler.",
    "distractors": {
      "D": "`--trigger-http` configures an HTTP endpoint, not an automated storage event trigger.",
      "B": "Cloud Run does not accept `--trigger-cron` syntax directly in `gcloud run deploy`.",
      "C": "Compute Engine instances do not support direct native Cloud Storage event triggers."
    },
    "gcloudCommand": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --trigger-event-filters='type=google.cloud.storage.object.v1.finalized' --trigger-event-filters='bucket=raw-user-photos' --entry-point=handle_photo_upload",
    "architectureComponents": [
      "Cloud Functions",
      "Cloud Storage",
      "Eventarc"
    ],
    "officialDocUrl": "https://cloud.google.com/functions/docs/calling/storage"
  },
  {
    "id": "ACE-D3-007",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "VPC Network & Subnet Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Custom VPC Network and Subnets via gcloud CLI",
    "scenario": "You are establishing a new landing zone in project `corp-net-101`. You must create a custom mode VPC network named `enterprise-vpc` and provision a subnet `app-subnet-uscentral1` in `us-central1` with CIDR block `10.10.0.0/24` and Private Google Access enabled. Which sequence of commands should you run?",
    "keywords": [
      "VPC",
      "Custom Mode",
      "Subnet Creation",
      "Private Google Access",
      "gcloud compute networks"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute subnets create app-subnet-uscentral1 --network=default --cidr=10.10.0.0/24"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=auto"
      },
      {
        "letter": "C",
        "text": "gcloud organizations networks create enterprise-vpc --range=10.10.0.0/24"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=custom && gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access"
      }
    ],
    "correct": "D",
    "explanation": "Creating a custom VPC network requires `gcloud compute networks create <name> --subnet-mode=custom`. Subnets are then added with `gcloud compute networks subnets create <subnet_name> --network=<net> --region=<region> --range=<cidr> --enable-private-ip-google-access`.",
    "distractors": {
      "C": "`gcloud organizations networks create` is a non-existent command.",
      "B": "`--subnet-mode=auto` creates default automatic /20 subnets in every region, violating the custom IP architecture.",
      "A": "`gcloud compute subnets create` is invalid syntax; the command group is `compute networks subnets`."
    },
    "gcloudCommand": "gcloud compute networks create enterprise-vpc --subnet-mode=custom && gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/create-modify-vpc-networks"
  },
  {
    "id": "ACE-D3-008",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Instance Template Creation",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating an Instance Template for Auto-Scaling Managed Instance Groups",
    "scenario": "You are preparing an automated scaling architecture for a microservice. You need to create a Compute Engine Instance Template named `api-server-template` specifying an `e2-standard-4` machine type, Debian 11 boot disk of 50 GB balanced SSD, network tag `api-server`, and service account `api-sa@corp.iam.gserviceaccount.com`. Which command creates the template?",
    "keywords": [
      "Instance Template",
      "Compute Engine",
      "e2-standard-4",
      "pd-balanced",
      "Service Account"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --image-family=debian-11 --image-project=debian-cloud --boot-disk-size=50GB --boot-disk-type=pd-balanced --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com --scopes=cloud-platform"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks snapshot create api-server-template --type=template"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create api-server-template --template-mode=true"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed create api-server-template --size=5"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute instance-templates create` defines the instance blueprint (machine type, image family, disk type/size, network tags, service account, and OAuth scopes) used by Managed Instance Groups to instantiate identical VM instances.",
    "distractors": {
      "D": "`instance-groups managed create` creates the MIG itself, which requires an existing template reference.",
      "B": "`disks snapshot` creates persistent disk point-in-time backups, not instance templates.",
      "C": "`--template-mode` is not a valid flag on `gcloud compute instances create`."
    },
    "gcloudCommand": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --image-family=debian-11 --image-project=debian-cloud --boot-disk-size=50GB --boot-disk-type=pd-balanced --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com --scopes=cloud-platform",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-templates/create-instance-templates"
  },
  {
    "id": "ACE-D3-009",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine MIG Rolling Action Start-Update",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Executing a Zero-Downtime Rolling Update on a Managed Instance Group",
    "scenario": "You have updated your application instance template to `web-template-v2`. You need to deploy this new version across an active Managed Instance Group (MIG) named `web-mig` in region `us-central1`. The deployment must proceed gradually, replacing 20% of instances at a time with 0 allowed downtime during the rollout. Which command executes the rolling update?",
    "keywords": [
      "MIG Rolling Update",
      "start-update",
      "max-surge",
      "max-unavailable",
      "Zero Downtime"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances reset-all --group=web-mig --template=web-template-v2"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed rolling-action start-update web-mig --region=us-central1 --version=template=web-template-v2 --max-surge=20% --max-unavailable=0%"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete web-mig && gcloud compute instance-groups managed create web-mig --template=web-template-v2"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed set-template web-mig --force-restart"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed rolling-action start-update` initiates a gradual rolling deployment. Setting `--max-surge=20%` (creates new VMs first) and `--max-unavailable=0%` ensures that full capacity is maintained throughout the update with zero downtime.",
    "distractors": {
      "C": "Deleting the MIG causes complete outage and destroys active customer sessions.",
      "A": "`instances reset-all` is non-existent syntax.",
      "D": "`set-template` only updates the template pointer for future instances; it does not automatically roll out changes to existing VMs without `rolling-action`."
    },
    "gcloudCommand": "gcloud compute instance-groups managed rolling-action start-update web-mig --region=us-central1 --version=template=web-template-v2 --max-surge=20% --max-unavailable=0%",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups"
  },
  {
    "id": "ACE-D3-010",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Build Container Compilation & Storage",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Building Container Images with Google Cloud Build and Artifact Registry",
    "scenario": "You have written a Dockerfile in your local application repository. You need to build the container image using Google's serverless build infrastructure and store the resulting artifact in Google Artifact Registry repository `us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0`. Which command executes this build?",
    "keywords": [
      "Cloud Build",
      "Artifact Registry",
      "gcloud builds submit",
      "Docker Image"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud container images compile --source=. --repo=app-repo"
      },
      {
        "letter": "B",
        "text": "docker build . && gsutil cp image.tar gs://my-proj-artifacts/"
      },
      {
        "letter": "C",
        "text": "gcloud artifacts docker push us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0"
      },
      {
        "letter": "D",
        "text": "gcloud builds submit --tag=us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 ."
      }
    ],
    "correct": "D",
    "explanation": "`gcloud builds submit --tag=<IMAGE_URL> .` compresses the local directory, uploads it to Cloud Build, executes `docker build` remotely on managed build workers, and automatically pushes the final image to the designated Artifact Registry repository.",
    "distractors": {
      "A": "`gcloud container images compile` is non-existent CLI syntax.",
      "B": "Building locally requires local Docker daemon overhead and copying tarballs to Cloud Storage is not an OCI container registry.",
      "C": "`gcloud artifacts docker push` requires local Docker daemon authentication and manual prior build."
    },
    "gcloudCommand": "gcloud builds submit --tag=us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 .",
    "architectureComponents": [
      "Cloud Build",
      "Artifact Registry"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/building/build-containers"
  },
  {
    "id": "ACE-D3-011",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Workload Deployment & LoadBalancer Service",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Deployments and LoadBalancer Services via kubectl",
    "scenario": "You have an application manifest `frontend-app.yaml` defining a Kubernetes Deployment of 3 replicas of an Nginx web server and a Service of `type: LoadBalancer` exposing port 80. How do you deploy this workload to your active GKE cluster?",
    "keywords": [
      "kubectl apply",
      "Kubernetes Deployment",
      "LoadBalancer Service",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Upload frontend-app.yaml to a Cloud Storage bucket and restart the GKE cluster."
      },
      {
        "letter": "B",
        "text": "Run kubectl apply -f frontend-app.yaml in your configured terminal session."
      },
      {
        "letter": "C",
        "text": "Run gcloud container clusters update --manifest=frontend-app.yaml."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances create-from-yaml frontend-app.yaml."
      }
    ],
    "correct": "B",
    "explanation": "`kubectl apply -f <filename.yaml>` is the authoritative declarative Kubernetes CLI command to create and update Deployments, Services, ConfigMaps, and Ingress resources on a Google Kubernetes Engine cluster.",
    "distractors": {
      "A": "Uploading YAML files to Cloud Storage does not trigger GKE cluster deployment without a CI/CD pipeline or Anthos Config Sync.",
      "C": "`gcloud container clusters update` modifies cluster infrastructure (node counts, network settings), not container workload manifests.",
      "D": "`create-from-yaml` is not a valid gcloud compute command for Kubernetes manifests."
    },
    "gcloudCommand": "kubectl apply -f frontend-app.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/deploying-workloads-overview"
  },
  {
    "id": "ACE-D3-012",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Artifact Registry Repository Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Artifact Registry Repositories for Docker and Helm OCI Artifacts",
    "scenario": "Your company is migrating from legacy Container Registry (`gcr.io`) to Google Artifact Registry. You need to create a regional Docker container repository named `backend-containers` in region `us-central1`. Which gcloud command creates this repository?",
    "keywords": [
      "Artifact Registry",
      "Docker Repository",
      "Regional",
      "OCI",
      "gcloud artifacts repositories create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets create gs://us-docker.pkg.dev/backend-containers"
      },
      {
        "letter": "B",
        "text": "gcloud container images repositories create backend-containers --region=us-central1"
      },
      {
        "letter": "C",
        "text": "gcloud artifacts repositories create backend-containers --repository-format=docker --location=us-central1 --description='Docker repository for backend services'"
      },
      {
        "letter": "D",
        "text": "gcloud compute repositories create backend-containers --type=DOCKER"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud artifacts repositories create` is the command to provision new Artifact Registry repositories, requiring `--repository-format=docker` (or npm, maven, python) and `--location=<region>`.",
    "distractors": {
      "B": "`gcloud container images` is the legacy GCR command group and cannot create new Artifact Registry repositories.",
      "A": "Artifact Registry is a managed OCI registry service, not a plain Cloud Storage bucket URL.",
      "D": "`gcloud compute repositories` is non-existent CLI syntax."
    },
    "gcloudCommand": "gcloud artifacts repositories create backend-containers --repository-format=docker --location=us-central1 --description='Docker repository for backend services'",
    "architectureComponents": [
      "Artifact Registry"
    ],
    "officialDocUrl": "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  },
  {
    "id": "ACE-D3-013",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud NAT & Cloud Router Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying a Managed Cloud NAT Gateway with Cloud Router via CLI",
    "scenario": "You have created a custom VPC network with private subnets. The VMs need outbound internet access to download software packages, but must not receive unsolicited inbound internet connections. You need to deploy Cloud NAT in region `us-east1`. What sequence of gcloud commands should you run?",
    "keywords": [
      "Cloud NAT",
      "Cloud Router",
      "Outbound Internet",
      "SNAT",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute firewall-rules create allow-outbound-nat --allow=all --direction=EGRESS"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks update my-vpc --enable-nat"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create nat-gateway --image-family=nat --region=us-east1"
      },
      {
        "letter": "D",
        "text": "Create a Cloud Router using gcloud compute routers create nat-router --network=my-vpc --region=us-east1, then create the NAT gateway using gcloud compute routers nats create nat-gw --router=nat-router --region=us-east1 --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges."
      }
    ],
    "correct": "D",
    "explanation": "Cloud NAT operates in conjunction with a Cloud Router in the target region. You first create the Cloud Router (`gcloud compute routers create`), then attach the Cloud NAT service (`gcloud compute routers nats create`) specifying `--auto-allocate-nat-external-ips` and `--nat-all-subnet-ip-ranges`.",
    "distractors": {
      "B": "`--enable-nat` is not a valid network flag on `gcloud compute networks update`.",
      "C": "Self-managed NAT VM instances introduce single points of failure, scaling bottlenecks, and operational maintenance overhead.",
      "A": "Firewall rules govern traffic permissions; they do not perform Source Network Address Translation (SNAT)."
    },
    "gcloudCommand": "gcloud compute routers create nat-router --network=my-vpc --region=us-east1 && gcloud compute routers nats create nat-gw --router=nat-router --region=us-east1 --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud NAT",
      "Cloud Router"
    ],
    "officialDocUrl": "https://cloud.google.com/nat/docs/gcloud-quickstart"
  },
  {
    "id": "ACE-D3-014",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Data Import & IAM Roles",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL High-Speed Data Import from Cloud Storage SQL Dump",
    "scenario": "You have an automated database migration pipeline. A 20 GB gzipped MySQL dump file `db-backup.sql.gz` is stored in Cloud Storage bucket `gs://corp-db-dumps/`. You need to import this SQL dump into an active Cloud SQL MySQL instance `prod-mysql-1`. Which gcloud command performs the import?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql import sql",
      "Cloud Storage",
      "Database Migration"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances restore prod-mysql-1 --source=gs://corp-db-dumps/db-backup.sql.gz"
      },
      {
        "letter": "B",
        "text": "gcloud sql import sql prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db"
      },
      {
        "letter": "C",
        "text": "cat db-backup.sql.gz | gcloud sql connect prod-mysql-1"
      },
      {
        "letter": "D",
        "text": "bq load --source_format=SQL app_db gs://corp-db-dumps/db-backup.sql.gz"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql import sql <INSTANCE_NAME> <GCS_URI> --database=<DB_NAME>` initiates an asynchronous server-side database import from Cloud Storage directly into the Cloud SQL instance engine.",
    "distractors": {
      "C": "Piping large gzip dumps over `gcloud sql connect` is slow, unmonitored, and prone to client network disconnects.",
      "D": "`bq load` loads data into BigQuery tables, not Cloud SQL MySQL databases.",
      "A": "`sql instances restore` is for restoring Cloud SQL automated backups, not importing SQL dump text files from GCS."
    },
    "gcloudCommand": "gcloud sql import sql prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db",
    "architectureComponents": [
      "Cloud SQL",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/import-export/importing"
  },
  {
    "id": "ACE-D3-015",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "App Engine Standard Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying App Engine Application via gcloud CLI and app.yaml",
    "scenario": "You have written a Node.js web application with an `app.yaml` file configured for the standard environment in your root source directory. You need to deploy this application to project `retail-app-prod` and ensure it immediately receives 100% of live production traffic. What command should you run?",
    "keywords": [
      "App Engine",
      "gcloud app deploy",
      "app.yaml",
      "Node.js",
      "Standard Environment"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create-app app.yaml"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy retail-app --app-yaml=app.yaml"
      },
      {
        "letter": "C",
        "text": "gsutil cp app.yaml gs://retail-app-prod-appengine/"
      },
      {
        "letter": "D",
        "text": "gcloud app deploy app.yaml --project=retail-app-prod --promote"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud app deploy <app.yaml>` deploys the application source code to Google App Engine. Passing `--promote` (which is default true) routes 100% of all incoming application traffic to the newly deployed version immediately.",
    "distractors": {
      "A": "`create-app` is not a valid gcloud compute command.",
      "B": "Cloud Run uses Docker containers and does not parse App Engine `app.yaml` configurations.",
      "C": "Copying YAML files to Cloud Storage does not deploy App Engine code without Cloud Build / CD pipelines."
    },
    "gcloudCommand": "gcloud app deploy app.yaml --project=retail-app-prod --promote",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/deploying-web-app"
  },
  {
    "id": "ACE-D3-016",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Node Pool Creation & Preemptible Sizing",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Preemptible Node Pool in an Existing GKE Cluster",
    "scenario": "You have an existing GKE Standard cluster named `analytics-cluster`. To run ephemeral batch workloads at a 70% cost reduction, you need to add a new node pool named `batch-pool` containing 5 `e2-standard-4` Spot / Preemptible worker nodes with the `app=batch-worker` node label. What command should you run?",
    "keywords": [
      "GKE",
      "Node Pool",
      "Preemptible / Spot",
      "gcloud container node-pools create",
      "Labels"
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
        "text": "gcloud compute instances create batch-pool-node-[1-5] --preemptible"
      },
      {
        "letter": "C",
        "text": "kubectl scale deployment batch-pool --replicas=5"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters update analytics-cluster --add-nodes=5 --spot"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud container node-pools create <POOL_NAME> --cluster=<CLUSTER>` adds a discrete node pool with specific machine sizing, `--spot` (or `--preemptible`), node count, and Kubernetes node labels.",
    "distractors": {
      "C": "`kubectl scale deployment` scales Kubernetes Pods, not physical VM worker node infrastructure.",
      "D": "`clusters update` cannot create new named node pools with custom labels.",
      "B": "Creating standalone Compute Engine VMs manually does not register them as managed worker nodes in the GKE control plane."
    },
    "gcloudCommand": "gcloud container node-pools create batch-pool --cluster=analytics-cluster --region=us-central1 --machine-type=e2-standard-4 --num-nodes=5 --spot --node-labels=app=batch-worker",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools"
  },
  {
    "id": "ACE-D3-017",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Load Balancing: Backend Service & Health Checks",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Global External HTTPS Load Balancer Backend Service with Health Checks",
    "scenario": "You are configuring a Global External HTTP(S) Load Balancer. You have already created a Managed Instance Group `web-mig-us` in `us-central1`. You need to create an HTTP health check, create a global backend service utilizing HTTP protocol on port 80, attach the health check, and add `web-mig-us` as a backend. Which sequence of gcloud commands accomplishes this?",
    "keywords": [
      "Cloud Load Balancing",
      "Backend Service",
      "Health Check",
      "MIG Backend",
      "Global LB"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute target-http-proxies create web-backend-svc --health-check=web-health-check"
      },
      {
        "letter": "B",
        "text": "gcloud compute forwarding-rules create web-backend-svc --ports=80 --global"
      },
      {
        "letter": "C",
        "text": "gcloud compute health-checks create http web-health-check --port=80 && gcloud compute backend-services create web-backend-svc --protocol=HTTP --port-name=http --health-checks=web-health-check --global && gcloud compute backend-services add-backend web-backend-svc --instance-group=web-mig-us --instance-group-region=us-central1 --global"
      },
      {
        "letter": "D",
        "text": "gcloud compute url-maps create web-backend-svc --instance-group=web-mig-us"
      }
    ],
    "correct": "C",
    "explanation": "Configuring load balancer backends follows a strict dependency order: 1) Create the Health Check (`health-checks create http`), 2) Create the Backend Service with the health check (`backend-services create --global`), 3) Add the instance group backend to the service (`backend-services add-backend --global`).",
    "distractors": {
      "A": "Target HTTP proxies connect URL maps to forwarding rules and do not attach health checks.",
      "D": "URL maps route URLs to backend services, not directly to raw instance groups.",
      "B": "Forwarding rules route incoming traffic to target proxies, not manage backend instance groups directly."
    },
    "gcloudCommand": "gcloud compute health-checks create http web-health-check --port=80 && gcloud compute backend-services create web-backend-svc --protocol=HTTP --port-name=http --health-checks=web-health-check --global && gcloud compute backend-services add-backend web-backend-svc --instance-group=web-mig-us --instance-group-region=us-central1 --global",
    "architectureComponents": [
      "Cloud Load Balancing",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/https/setup-global-ext-https-compute"
  },
  {
    "id": "ACE-D3-018",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "BigQuery Table Creation & Schema Loading",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating BigQuery Partitioned and Clustered Tables via bq CLI",
    "scenario": "You are deploying a new financial transactions table in BigQuery dataset `corp_finance`. The table must be partitioned by transaction date (`transaction_time` TIMESTAMP field), clustered by `merchant_id` and `customer_id`, and loaded with schema from `./schema.json`. Which `bq` CLI command creates the table?",
    "keywords": [
      "BigQuery",
      "bq mk --table",
      "time_partitioning_field",
      "clustering_fields",
      "Schema"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json"
      },
      {
        "letter": "B",
        "text": "bq create table corp_finance.transactions --partition=transaction_time --cluster=merchant_id"
      },
      {
        "letter": "C",
        "text": "bq load --autodetect corp_finance.transactions ./schema.json"
      },
      {
        "letter": "D",
        "text": "gcloud bigquery tables create transactions --dataset=corp_finance --schema=./schema.json"
      }
    ],
    "correct": "A",
    "explanation": "The `bq mk --table` command creates tables in BigQuery. Adding `--time_partitioning_field=<COLUMN>` defines the time partition column and `--clustering_fields=<COL1,COL2>` configures clustering columns alongside the schema JSON definition.",
    "distractors": {
      "B": "`bq create table` is invalid syntax; `bq mk` is the table creation command.",
      "D": "BigQuery table schema creation is managed via the `bq` CLI tool or API, not `gcloud bigquery tables create`.",
      "C": "`bq load` ingests data rows into a table from a data file, not creating empty schema definitions."
    },
    "gcloudCommand": "bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json",
    "architectureComponents": [
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/creating-partitioned-tables"
  },
  {
    "id": "ACE-D3-019",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Ingress & Managed Certificates",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Ingress Controller with Google-Managed SSL Certificates",
    "scenario": "You are exposing a web application on GKE using an Ingress object. You want Google to automatically provision, configure, and auto-renew a free public SSL/TLS certificate for domain `app.example.com` without managing certbot scripts or storing TLS secrets manually. Which Kubernetes objects should you deploy?",
    "keywords": [
      "GKE Ingress",
      "ManagedCertificate CRD",
      "Google-Managed SSL",
      "networking.gke.io/managed-certificates"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy an Nginx sidecar container running Certbot in every Pod."
      },
      {
        "letter": "B",
        "text": "Configure Cloud DNS to inject SSL keys into DNS TXT records."
      },
      {
        "letter": "C",
        "text": "Deploy a ManagedCertificate custom resource defining domain 'app.example.com' and annotate the Kubernetes Ingress object with 'networking.gke.io/managed-certificates: my-managed-cert'."
      },
      {
        "letter": "D",
        "text": "Generate a self-signed certificate and store it in a Kubernetes Secret of type kubernetes.io/tls."
      }
    ],
    "correct": "C",
    "explanation": "GKE provides the `ManagedCertificate` custom resource definition (CRD). When an Ingress is annotated with `networking.gke.io/managed-certificates: <CERT_NAME>`, Google Cloud Load Balancing automatically provisions and auto-renews public Google-managed SSL certificates for the specified domains.",
    "distractors": {
      "B": "Cloud DNS cannot terminate SSL/TLS connections or inject private decryption keys.",
      "D": "Self-signed certificates trigger browser security warnings and require manual secret rotation.",
      "A": "Certbot sidecars introduce high maintenance, lack load balancer edge termination, and add unnecessary complexity."
    },
    "gcloudCommand": "kubectl apply -f managed-cert.yaml && kubectl apply -f ingress.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud Load Balancing"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs"
  },
  {
    "id": "ACE-D3-020",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Bigtable Deployment & CBT CLI",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Cloud Bigtable Instances and Tables via CLI",
    "scenario": "You are deploying a high-throughput time-series metrics ingestion engine. You need to create a Cloud Bigtable instance named `telemetry-db` in zone `us-central1-b` with 4 SSD nodes, and create a table named `device-readings` with a column family named `cf1`. Which sequence of commands should you run?",
    "keywords": [
      "Cloud Bigtable",
      "gcloud bigtable instances create",
      "cbt createtable",
      "SSD",
      "Column Family"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create telemetry-db --database-version=BIGTABLE_1"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD --display-name='Telemetry DB' && cbt -instance=telemetry-db createtable device-readings 'families=cf1'"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create telemetry-db --storage-type=bigtable"
      },
      {
        "letter": "D",
        "text": "bq mk --dataset telemetry-db && bq mk --table device-readings"
      }
    ],
    "correct": "B",
    "explanation": "Provisioning a Cloud Bigtable instance uses `gcloud bigtable instances create` specifying cluster zone, node count, and storage type (SSD/HDD). Table and column family provisioning is performed using the `cbt` CLI (`cbt createtable <table_name> 'families=<family_name>'`).",
    "distractors": {
      "D": "`bq mk` creates BigQuery tables, which are analytical data warehouses, not sub-millisecond Bigtable clusters.",
      "C": "Compute Engine instances create VMs, not managed Bigtable instances.",
      "A": "`gcloud sql` is for relational engines (MySQL/Postgres/SQL Server), not Bigtable NoSQL wide-column."
    },
    "gcloudCommand": "gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD --display-name='Telemetry DB' && cbt -instance=telemetry-db createtable device-readings 'families=cf1'",
    "architectureComponents": [
      "Cloud Bigtable"
    ],
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/creating-instance"
  },
  {
    "id": "ACE-D3-021",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Custom Image Creation",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Custom Images from Source Boot Disks via gcloud CLI",
    "scenario": "You have configured a golden base VM `base-template-vm` in zone `us-east1-b` with custom security patches and corporate agent software. The VM has been stopped. You need to create a reusable Compute Engine Custom Image named `golden-ubuntu-v1` in image family `corp-ubuntu` from this instance's boot disk. Which command should you run?",
    "keywords": [
      "Custom Image",
      "Image Family",
      "gcloud compute images create",
      "source-disk",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gsutil cp /dev/sda1 gs://my-images/golden-ubuntu-v1.img"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks export base-template-vm --format=qcow2"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances snapshot base-template-vm --image=golden-ubuntu-v1"
      },
      {
        "letter": "D",
        "text": "gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu --description='Golden hardened Ubuntu base image'"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute images create <IMAGE_NAME> --source-disk=<DISK> --source-disk-zone=<ZONE> --family=<FAMILY>` creates an immutable custom image from a stopped VM's persistent disk and adds it to an image family for automated instance template rollouts.",
    "distractors": {
      "C": "`instances snapshot` is invalid syntax; snapshots are created via `gcloud compute disks snapshot`.",
      "B": "Exporting raw qcow2 disks adds unnecessary data transfer and conversion overhead compared to native image creation.",
      "A": "Copying raw block devices directly via gsutil produces corrupt image states."
    },
    "gcloudCommand": "gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu --description='Golden hardened Ubuntu base image'",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/images/create-custom"
  },
  {
    "id": "ACE-D3-022",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Bucket Provisioning & Configuration",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Buckets with Dual-Region Location and Default Encryption",
    "scenario": "You need to create a Cloud Storage bucket named `corp-customer-receipts` in dual-region `us-central1,us-east1` with default storage class `STANDARD` and Uniform Bucket-Level Access enabled. Which command should you execute?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage buckets create",
      "Dual-Region",
      "Uniform Bucket-Level Access"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access"
      },
      {
        "letter": "B",
        "text": "gcloud compute buckets create gs://corp-customer-receipts --dual-region=us-central1,us-east1"
      },
      {
        "letter": "C",
        "text": "gcloud storage objects create gs://corp-customer-receipts --location=nam4"
      },
      {
        "letter": "D",
        "text": "gsutil mb -c STANDARD -l GLOBAL gs://corp-customer-receipts"
      }
    ],
    "correct": "A",
    "explanation": "The `gcloud storage buckets create` command supports specifying custom dual-region pairs (`--location=us-central1,us-east1`), `--default-storage-class=STANDARD`, and `--uniform-bucket-level-access` in a single declarative command.",
    "distractors": {
      "C": "`gcloud storage objects create` uploads files, not creates buckets.",
      "D": "`GLOBAL` is not a valid location for Cloud Storage buckets.",
      "B": "`gcloud compute buckets` is invalid syntax; storage is managed under `gcloud storage`."
    },
    "gcloudCommand": "gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/creating-buckets"
  },
  {
    "id": "ACE-D3-023",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Build Git Triggers Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Build Build Triggers for Automated Git CI/CD",
    "scenario": "You are setting up automated continuous integration. Whenever a developer pushes a commit to the `main` branch of a connected GitHub repository `corp-app`, Cloud Build must automatically execute a build pipeline defined in `cloudbuild.yaml` in the root repository directory. Which command creates this trigger?",
    "keywords": [
      "Cloud Build",
      "Build Trigger",
      "GitHub",
      "cloudbuild.yaml",
      "CI/CD"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gsutil notification create -t build-topic -e OBJECT_FINALIZE gs://my-repo"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters update --enable-git-sync=corp-app"
      },
      {
        "letter": "C",
        "text": "gcloud builds triggers create github --repo-name=corp-app --repo-owner=my-org --branch-pattern='^main$' --build-config=cloudbuild.yaml"
      },
      {
        "letter": "D",
        "text": "gcloud compute triggers create github --repo=corp-app"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud builds triggers create github` creates an automated CI trigger that listens to Git webhook events from a connected GitHub repository and initiates a build based on branch patterns and `cloudbuild.yaml`.",
    "distractors": {
      "B": "`--enable-git-sync` is not a valid GKE cluster update flag.",
      "A": "`gsutil notification` configures Cloud Storage object notifications, not Git repository build triggers.",
      "D": "`gcloud compute triggers` is non-existent CLI syntax."
    },
    "gcloudCommand": "gcloud builds triggers create github --repo-name=corp-app --repo-owner=my-org --branch-pattern='^main$' --build-config=cloudbuild.yaml",
    "architectureComponents": [
      "Cloud Build"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  },
  {
    "id": "ACE-D3-024",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Custom Metric Autoscaling",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Managed Instance Group Autoscaling Based on Cloud Monitoring Metric",
    "scenario": "You have an existing Managed Instance Group `worker-mig` in `us-central1`. The worker VMs pull tasks from a Cloud Pub/Sub queue. You need to configure the MIG to automatically scale between 2 and 50 instances based on the Pub/Sub metric `pubsub.googleapis.com/subscription/num_undelivered_messages`, scaling out when the number of undelivered messages per instance exceeds 100. Which command configures this autoscaler?",
    "keywords": [
      "MIG Autoscaling",
      "Custom Metric",
      "Cloud Monitoring",
      "Pub/Sub Queue",
      "gcloud compute instance-groups managed set-autoscaling"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --target-cpu-utilization=0.8"
      },
      {
        "letter": "B",
        "text": "gcloud monitoring alert-policies create --scale-mig=worker-mig"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric='pubsub.googleapis.com/subscription/num_undelivered_messages' --custom-metric-target=100 --custom-metric-type=GAUGE --custom-metric-utilization-target-type=PER_INSTANCE"
      },
      {
        "letter": "D",
        "text": "kubectl autoscale deployment worker-mig --min=2 --max=50"
      }
    ],
    "correct": "C",
    "explanation": "Managed Instance Groups support autoscaling based on Cloud Monitoring custom metrics. Specifying `--custom-metric-metric`, `--custom-metric-target=100`, and `--custom-metric-utilization-target-type=PER_INSTANCE` dynamically calculates the required number of VM replicas based on real queue depth.",
    "distractors": {
      "A": "CPU utilization does not accurately reflect Pub/Sub message backlog depth for I/O bound worker processes.",
      "D": "`kubectl autoscale` is for Kubernetes Pods, not Compute Engine Managed Instance Groups.",
      "B": "Monitoring alerting policies trigger notifications (email, pager), not native MIG autoscaler controller loops."
    },
    "gcloudCommand": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric='pubsub.googleapis.com/subscription/num_undelivered_messages' --custom-metric-target=100 --custom-metric-type=GAUGE --custom-metric-utilization-target-type=PER_INSTANCE",
    "architectureComponents": [
      "Compute Engine",
      "Cloud Monitoring",
      "Cloud Pub/Sub"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics"
  },
  {
    "id": "ACE-D3-025",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Run Secret Manager Integration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Mounting Google Secret Manager Secrets in Cloud Run Container Deployments",
    "scenario": "A containerized API on Cloud Run needs to connect to a database using a password stored in Google Secret Manager secret `db-password` (version `latest`). The container expects the password to be available in an environment variable named `DATABASE_PASSWORD`. Which command deploys the service with the secret mounted securely?",
    "keywords": [
      "Cloud Run",
      "Secret Manager",
      "Environment Variable",
      "DATABASE_PASSWORD",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud run deploy api-service --image=gcr.io/my-proj/api:v1 --region=us-central1 --set-secrets=DATABASE_PASSWORD=db-password:latest"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy api-service --image=gcr.io/my-proj/api:v1 --region=us-central1 --set-env-vars=DATABASE_PASSWORD='plainTextPassword123'"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create api-service --secret=db-password"
      },
      {
        "letter": "D",
        "text": "gsutil cp gs://my-secrets/db-pass.txt /etc/secret"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run natively integrates with Secret Manager via `--set-secrets=<ENV_VAR>=<SECRET_NAME>:<VERSION>`. Cloud Run fetches the secret dynamically at runtime and injects it as an environment variable (or volume mount) into the container without exposing plaintext passwords in build files.",
    "distractors": {
      "D": "Plain text files in Cloud Storage lack automated secret versioning, encryption in memory, and IAM secret governance.",
      "B": "Hardcoding plaintext credentials into `--set-env-vars` exposes database passwords in console logs and revision metadata.",
      "C": "`gcloud compute instances create` is for VMs, not Cloud Run serverless services."
    },
    "gcloudCommand": "gcloud run deploy api-service --image=gcr.io/my-proj/api:v1 --region=us-central1 --set-secrets=DATABASE_PASSWORD=db-password:latest",
    "architectureComponents": [
      "Cloud Run",
      "Secret Manager",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/secrets"
  },
  {
    "id": "ACE-D3-026",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "VPC Firewall Rules for GCP Health Check Probes",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying VPC Firewall Rules for Health Check Probes",
    "scenario": "You have deployed a backend Managed Instance Group on private subnets behind a Google Cloud Load Balancer. The Load Balancer health check reports all instances as `UNHEALTHY`. You discover that the VPC firewall rules are blocking Google health check probe IP ranges. Which firewall rule must you create to allow health checks?",
    "keywords": [
      "VPC Firewall",
      "Health Check Probes",
      "35.191.0.0/16",
      "130.211.0.0/22",
      "Load Balancer"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress firewall rule allowing TCP traffic on your application port from source IP ranges 35.191.0.0/16 and 130.211.0.0/22 targeting your backend network tags."
      },
      {
        "letter": "B",
        "text": "Create an egress firewall rule allowing port 80 to 8.8.8.8."
      },
      {
        "letter": "C",
        "text": "Assign public IP addresses to all backend Compute Engine instances."
      },
      {
        "letter": "D",
        "text": "Create an ingress firewall rule allowing all traffic from 0.0.0.0/0."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Load Balancer health checking systems probe instances from well-known IP ranges: `35.191.0.0/16` and `130.211.0.0/22` (and `209.85.152.0/22`, `209.85.204.0/22` for legacy LBs). An ingress firewall rule must explicitly allow these CIDR blocks to reach the backend VM instances.",
    "distractors": {
      "B": "Egress rules to Google Public DNS (8.8.8.8) do not allow inbound health check probes into backend ports.",
      "C": "Assigning public IPs does not bypass firewall rules and introduces public internet vulnerabilities.",
      "D": "Allowing 0.0.0.0/0 opens the backend VMs to the entire public internet, violating security isolation."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-health-checks --network=prod-vpc --allow=tcp:80,tcp:443 --source-ranges=35.191.0.0/16,130.211.0.0/22 --target-tags=web-backend",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Load Balancing",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/health-checks#firewall_rules"
  },
  {
    "id": "ACE-D3-027",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Deploy & Delivery Pipelines",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Google Cloud Deploy Pipelines for Progressive GKE Delivery",
    "scenario": "You are implementing an automated multi-target CD pipeline using Google Cloud Deploy. The pipeline must deploy a Kubernetes application first to a `staging` GKE cluster, require manual promotion approval, and then deploy to a `production` GKE cluster. Which command registers this delivery pipeline defined in `clouddeploy.yaml`?",
    "keywords": [
      "Cloud Deploy",
      "Delivery Pipeline",
      "GKE",
      "gcloud deploy apply",
      "CI/CD"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "kubectl apply -f clouddeploy.yaml"
      },
      {
        "letter": "B",
        "text": "gcloud builds submit --config=clouddeploy.yaml"
      },
      {
        "letter": "C",
        "text": "gcloud deploy apply --file=clouddeploy.yaml --region=us-central1"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters apply --pipeline=clouddeploy.yaml"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Deploy delivery pipelines and target definitions are applied to the Cloud Deploy service using `gcloud deploy apply --file=<PIPELINE_FILE> --region=<REGION>`.",
    "distractors": {
      "A": "`kubectl apply` applies manifests to an in-cluster Kubernetes API server, not the managed Google Cloud Deploy service.",
      "D": "`container clusters apply` is non-existent CLI syntax.",
      "B": "`gcloud builds submit` invokes Cloud Build steps, not Cloud Deploy multi-target delivery pipelines."
    },
    "gcloudCommand": "gcloud deploy apply --file=clouddeploy.yaml --region=us-central1",
    "architectureComponents": [
      "Cloud Deploy",
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/deploy/docs/create-pipeline"
  },
  {
    "id": "ACE-D3-028",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Lifecycle JSON Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Object Lifecycle Management Configurations",
    "scenario": "You have authored a lifecycle rule JSON file `lifecycle-30d.json` that instructs Cloud Storage to transition objects older than 30 days to `NEARLINE` and delete objects older than 365 days. Which command applies this lifecycle configuration to bucket `gs://corp-archive-vault`?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage buckets update",
      "--lifecycle-file",
      "Lifecycle Management"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage objects update gs://corp-archive-vault/* --lifecycle=lifecycle-30d.json"
      },
      {
        "letter": "B",
        "text": "bq update --lifecycle=lifecycle-30d.json corp-archive-vault"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://corp-archive-vault --lifecycle-file=lifecycle-30d.json"
      },
      {
        "letter": "D",
        "text": "gsutil lifecycle delete gs://corp-archive-vault"
      }
    ],
    "correct": "C",
    "explanation": "The `gcloud storage buckets update <BUCKET> --lifecycle-file=<FILE>` command applies an Object Lifecycle Management JSON configuration to a Cloud Storage bucket, enabling automated storage class transitions and object purges.",
    "distractors": {
      "B": "`bq update` is for BigQuery dataset and table metadata updates.",
      "D": "`gsutil lifecycle delete` removes existing lifecycle rules rather than applying new JSON configurations.",
      "A": "Lifecycle rules are configured at the bucket level, not on individual object paths."
    },
    "gcloudCommand": "gcloud storage buckets update gs://corp-archive-vault --lifecycle-file=lifecycle-30d.json",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/managing-lifecycles"
  },
  {
    "id": "ACE-D3-029",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes ConfigMap & Secret Volume Mounts",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes ConfigMaps and Secrets as Volume Mounts in Pods",
    "scenario": "You have created a Kubernetes ConfigMap `app-config` and Secret `db-credentials` in namespace `prod`. You need your Pod to mount the configuration files as directory `/etc/app/config` and secrets as `/etc/app/secrets`. How should the Pod manifest be configured?",
    "keywords": [
      "Kubernetes Pod",
      "ConfigMap Volume",
      "Secret Volume",
      "VolumeMounts",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Hardcode the configuration and passwords into the Dockerfile image layers."
      },
      {
        "letter": "B",
        "text": "Define volumes in the Pod spec referencing the configMap and secret names, and add volumeMounts in the container spec mapping those volumes to the target mountPaths."
      },
      {
        "letter": "C",
        "text": "Pass the secret data as URL query parameters in the Kubernetes Ingress host."
      },
      {
        "letter": "D",
        "text": "Download the secrets from Cloud Storage in the container ENTRYPOINT script via public URLs."
      }
    ],
    "correct": "B",
    "explanation": "In Kubernetes, ConfigMaps and Secrets are decoupled from container images by mounting them as volumes. Specifying `volumes.configMap` and `volumes.secret` with matching `volumeMounts` in the container spec safely exposes configurations as file paths inside the container filesystem.",
    "distractors": {
      "D": "Public storage URLs expose credentials to unauthorized external access.",
      "C": "URL query parameters expose secrets in browser histories, web server logs, and HTTP proxies.",
      "A": "Hardcoding credentials into container images exposes sensitive passwords in image registries."
    },
    "gcloudCommand": "kubectl apply -f pod-config-volumes.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod"
  },
  {
    "id": "ACE-D3-030",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Private IP & User Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL Database Users and Private IP Network Peering",
    "scenario": "You have provisioned a Cloud SQL PostgreSQL instance `app-db` configured with a Private IP address in VPC `prod-vpc`. You need to create an application database user `app_user` with a strong password and grant permissions to connect from Compute Engine instances in `prod-vpc`. Which command creates the user?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql users create",
      "Private IP",
      "PostgreSQL",
      "Database Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql users create app_user --instance=app-db --password='SuperSecurePassword987!'"
      },
      {
        "letter": "B",
        "text": "gcloud compute users create app_user --instance=app-db"
      },
      {
        "letter": "C",
        "text": "gcloud iam service-accounts create app_user --cloud-sql-user"
      },
      {
        "letter": "D",
        "text": "gcloud sql databases create app_user --instance=app-db"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql users create <USERNAME> --instance=<INSTANCE> --password=<PASSWORD>` creates database user accounts in Cloud SQL instances, allowing applications to authenticate over Private IP connections.",
    "distractors": {
      "B": "`gcloud compute users create` is for OS Login POSIX user accounts, not database users.",
      "C": "IAM service accounts are GCP identities, which require Cloud SQL IAM database authentication setup, not standard native SQL passwords.",
      "D": "`gcloud sql databases create` provisions empty logical database schemas, not user credentials."
    },
    "gcloudCommand": "gcloud sql users create app_user --instance=app-db --password='SuperSecurePassword987!'",
    "architectureComponents": [
      "Cloud SQL",
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/create-manage-users"
  },
  {
    "id": "ACE-D3-031",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Spanner Deployment & DDL Execution",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Google Cloud Spanner Instances, Databases, and DDL Schemas",
    "scenario": "You are deploying a global order management database on Cloud Spanner. You need to create a regional instance `spanner-orders` in `us-central1` with 300 Processing Units, create a database named `orders_db`, and execute a DDL statement creating an `Orders` table with primary key `OrderId STRING(36)`. Which sequence of commands accomplishes this?",
    "keywords": [
      "Cloud Spanner",
      "Processing Units",
      "DDL",
      "gcloud spanner databases create",
      "NewSQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create spanner-orders --spanner-units=300"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create spanner-orders --type=SPANNER --ddl='CREATE TABLE Orders...'"
      },
      {
        "letter": "C",
        "text": "bq mk --dataset spanner_orders && bq query 'CREATE TABLE Orders...'"
      },
      {
        "letter": "D",
        "text": "gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300 --description='Orders Spanner' && gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36) NOT NULL, Amount INT64) PRIMARY KEY (OrderId)'"
      }
    ],
    "correct": "D",
    "explanation": "Provisioning Cloud Spanner requires creating the instance (`gcloud spanner instances create --processing-units=300`), then creating the database with initial DDL schema definitions (`gcloud spanner databases create --ddl='...'`).",
    "distractors": {
      "A": "Compute Engine instance creation is for VMs, not managed Spanner instances.",
      "B": "`gcloud sql` does not support Cloud Spanner instances.",
      "C": "BigQuery (`bq`) creates analytical datasets, not transactional Cloud Spanner relational tables."
    },
    "gcloudCommand": "gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300 --description='Orders Spanner' && gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36) NOT NULL, Amount INT64) PRIMARY KEY (OrderId)'",
    "architectureComponents": [
      "Cloud Spanner"
    ],
    "officialDocUrl": "https://cloud.google.com/spanner/docs/create-manage-databases"
  },
  {
    "id": "ACE-D3-032",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "VPC Static External IP Reservation & Attachment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating VPC Static External IP Reservations and Attaching to Compute Instances",
    "scenario": "You have an SFTP gateway VM on Compute Engine that external trading partners connect to. The trading partners firewall require a static, unchanging public IP address. You need to reserve a static regional external IPv4 address named `sftp-static-ip` in `us-east1` and assign it to an existing VM `sftp-gateway`. Which sequence of commands executes this?",
    "keywords": [
      "Static IP",
      "gcloud compute addresses create",
      "gcloud compute instances add-access-config",
      "Network Interface"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute addresses create sftp-static-ip --region=us-east1 && gcloud compute instances add-access-config sftp-gateway --zone=us-east1-b --address=$(gcloud compute addresses describe sftp-static-ip --region=us-east1 --format='value(address)')"
      },
      {
        "letter": "B",
        "text": "gcloud dns records create sftp-gateway --ip-type=static"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances restart sftp-gateway --make-ip-static"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks update sftp-gateway --static-ip=true"
      }
    ],
    "correct": "A",
    "explanation": "Reserving a static regional IP address uses `gcloud compute addresses create <NAME> --region=<REGION>`. To attach this reserved static IP to an existing VM's network interface, use `gcloud compute instances add-access-config` (or update the existing access config).",
    "distractors": {
      "B": "Cloud DNS maps hostnames to IP addresses, but does not allocate static external GCP IP addresses.",
      "C": "`--make-ip-static` is not a valid flag on `gcloud compute instances restart`.",
      "D": "`compute networks update` updates network mode/MTU, not individual VM interface IP assignments."
    },
    "gcloudCommand": "gcloud compute addresses create sftp-static-ip --region=us-east1 && gcloud compute instances add-access-config sftp-gateway --zone=us-east1-b --address=34.140.10.20",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address"
  },
  {
    "id": "ACE-D3-033",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes StatefulSet & PVC Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes StatefulSets with PersistentVolumeClaims for Clustered Databases",
    "scenario": "You are deploying a 3-node clustered Apache Cassandra database on Google Kubernetes Engine (GKE). Each replica requires a unique, stable network hostname (`cassandra-0`, `cassandra-1`, `cassandra-2`) and a dedicated persistent disk that reattaches automatically to the same pod identity if the pod restarts on another node. Which Kubernetes workload controller should you deploy?",
    "keywords": [
      "StatefulSet",
      "PersistentVolumeClaim",
      "Headless Service",
      "GKE",
      "Stateful Workload"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Kubernetes Deployment with 3 replicas and a single shared ReadWriteMany PersistentVolume."
      },
      {
        "letter": "B",
        "text": "A Kubernetes Job with a restartPolicy of Always."
      },
      {
        "letter": "C",
        "text": "A Kubernetes StatefulSet paired with a Headless Service and volumeClaimTemplates."
      },
      {
        "letter": "D",
        "text": "A Kubernetes DaemonSet with hostPath volumes."
      }
    ],
    "correct": "C",
    "explanation": "Kubernetes StatefulSets provide stable, ordered network identifiers (`pod-0`, `pod-1`) and dedicated persistent storage via `volumeClaimTemplates`. When pods restart or migrate to other nodes, the storage volume automatically reattaches to the exact same pod ordinal identity.",
    "distractors": {
      "A": "Standard Deployments treat Pods as fungible/stateless with random hash names and cannot guarantee stable volume-to-pod identity bindings.",
      "D": "DaemonSets run one Pod per node and `hostPath` volumes tie data to physical worker nodes without cloud disk detachment/reattachment.",
      "B": "Kubernetes Jobs are for run-to-completion batch tasks, not persistent 24/7 databases."
    },
    "gcloudCommand": "kubectl apply -f cassandra-statefulset.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "ACE-D3-034",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Disk Creation & Attachment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating and Attaching Disks to Existing Compute Engine Instances",
    "scenario": "You have an existing virtual machine `data-processor-vm` in zone `us-central1-a`. The application requires an additional 200 GB SSD persistent disk formatted as ext4 to store database index files. Which sequence of gcloud commands creates and attaches the disk?",
    "keywords": [
      "Compute Engine",
      "gcloud compute disks create",
      "gcloud compute instances attach-disk",
      "pd-ssd"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances create data-processor-vm --add-disk=data-index-disk"
      },
      {
        "letter": "B",
        "text": "gcloud storage objects create gs://data-index-disk --size=200GB"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks attach data-index-disk --instance=data-processor-vm"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd && gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a"
      }
    ],
    "correct": "D",
    "explanation": "Creating and attaching extra block storage involves: 1) `gcloud compute disks create <DISK_NAME> --size=<SIZE> --type=<TYPE> --zone=<ZONE>`, and 2) `gcloud compute instances attach-disk <VM_NAME> --disk=<DISK_NAME> --zone=<ZONE>`.",
    "distractors": {
      "C": "`gcloud compute disks attach` is invalid syntax; the command is `gcloud compute instances attach-disk`.",
      "A": "`instances create` fails because the VM already exists.",
      "B": "Cloud Storage objects are not block-level persistent disks for VM filesystems."
    },
    "gcloudCommand": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd && gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/add-persistent-disk"
  },
  {
    "id": "ACE-D3-035",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Failover Simulation & Testing",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL High Availability Failover Drills via CLI",
    "scenario": "As part of disaster recovery compliance testing, you need to execute a simulated high availability failover drill on an active Regional Cloud SQL instance `prod-master-db` to verify that the standby replica in the secondary zone becomes the primary master. Which gcloud command triggers this failover?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances failover",
      "Disaster Recovery",
      "Failover Drill"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances failover prod-master-db"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances reset prod-master-db-primary"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restart prod-master-db --force-failover"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances delete prod-master-db"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql instances failover <INSTANCE_NAME>` explicitly triggers an intentional failover on a Regional High Availability Cloud SQL instance, promoting the standby replica to the primary master for DR validation.",
    "distractors": {
      "B": "Cloud SQL underlying VMs are managed by Google and cannot be addressed directly via `gcloud compute instances reset`.",
      "D": "Deleting the database destroys production data and takes down the application.",
      "C": "`instances restart` reboots the current master in-place rather than initiating regional standby failover."
    },
    "gcloudCommand": "gcloud sql instances failover prod-master-db",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/high-availability#testing"
  },
  {
    "id": "ACE-D3-036",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Storage Transfer Service Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Transfer Service for High-Throughput S3 Migration",
    "scenario": "Your company is migrating 100 TB of media assets from an Amazon Web Services S3 bucket `s3://media-source-bucket` to a Google Cloud Storage bucket `gs://media-target-bucket`. The migration must run on Google's high-speed backbone, perform automated checksum validations, and run on a recurring daily sync schedule. Which service should you deploy?",
    "keywords": [
      "Storage Transfer Service",
      "AWS S3 Migration",
      "Cloud Storage",
      "Automated Checksums"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A shell script running gsutil cp -r on an e2-micro VM."
      },
      {
        "letter": "B",
        "text": "BigQuery Data Transfer Service."
      },
      {
        "letter": "C",
        "text": "Google Storage Transfer Service (via gcloud transfer jobs create)."
      },
      {
        "letter": "D",
        "text": "Cloud VPN tunnel connecting to AWS VPC."
      }
    ],
    "correct": "C",
    "explanation": "Google Storage Transfer Service is a fully managed, scalable data migration service designed to transfer petabytes of data from Amazon S3, Azure Blob, or HTTP endpoints to Cloud Storage with automated parallelization, retries, and MD5 checksum validation.",
    "distractors": {
      "A": "Running `gsutil cp` on a single VM is slow, unmonitored, bottlenecks on VM network interfaces, and lacks automated fault tolerance.",
      "D": "Cloud VPN requires managing IPsec infrastructure and is unnecessary for S3-to-GCS cloud-to-cloud migration.",
      "B": "BigQuery Data Transfer Service is for loading analytical data into BigQuery tables, not transferring unstructured object files between storage buckets."
    },
    "gcloudCommand": "gcloud transfer jobs create s3://media-source-bucket/ gs://media-target-bucket/ --name='daily-s3-sync' --schedule-start-date=2026-09-01",
    "architectureComponents": [
      "Storage Transfer Service",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage-transfer/docs/overview"
  },
  {
    "id": "ACE-D3-037",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Run Direct VPC Egress & Serverless VPC Access",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Run Direct VPC Egress for Private Microservice Communication",
    "scenario": "You have deployed a backend service on Cloud Run. The container needs to connect directly to a private Cloud SQL instance and private Compute Engine VMs inside VPC `prod-vpc` subnet `backend-sub` without sending traffic through the public internet. Which configuration should you apply to the Cloud Run service?",
    "keywords": [
      "Cloud Run",
      "Direct VPC Egress",
      "Serverless VPC Access",
      "Private Subnet",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy the Cloud Run service with Direct VPC Egress configured to subnet backend-sub with --vpc-egress=all-traffic (or private-ranges-only)."
      },
      {
        "letter": "B",
        "text": "Assign a public IP address to the private Cloud SQL instance."
      },
      {
        "letter": "C",
        "text": "Create an open firewall rule on port 0-65535 on 0.0.0.0/0."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged Squid Proxy VM on a public subnet."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run supports Direct VPC Egress (or Serverless VPC Access connectors), allowing serverless container instances to route outbound traffic directly into a VPC subnet (`--network` and `--subnet`) to securely reach private IP addresses without leaving the Google network.",
    "distractors": {
      "D": "Self-managed proxy VMs create latency, maintenance overhead, and single points of failure.",
      "B": "Public IPs on private databases expose database ports to internet scanning and brute-force attacks.",
      "C": "Opening firewall rules to 0.0.0.0/0 destroys VPC security isolation."
    },
    "gcloudCommand": "gcloud run services update backend-api --region=us-central1 --network=prod-vpc --subnet=backend-sub --vpc-egress=private-ranges-only",
    "architectureComponents": [
      "Cloud Run",
      "Virtual Private Cloud (VPC)",
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/vpc-direct-vpc"
  },
  {
    "id": "ACE-D3-038",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes Horizontal Pod Autoscaler (HPA)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Horizontal Pod Autoscaler (HPA) with Metric Server",
    "scenario": "You have deployed a Kubernetes Deployment named `payment-gateway` in GKE. During flash sales, CPU utilization spikes rapidly. You need to configure Kubernetes to automatically scale the deployment between a minimum of 3 Pods and a maximum of 25 Pods whenever the average CPU utilization exceeds 75%. Which command deploys this autoscaling policy?",
    "keywords": [
      "GKE",
      "kubectl autoscale deployment",
      "HorizontalPodAutoscaler",
      "HPA",
      "Target CPU"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
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
        "text": "kubectl scale deployment payment-gateway --replicas=25"
      },
      {
        "letter": "D",
        "text": "kubectl autoscale deployment payment-gateway --min=3 --max=25 --cpu-percent=75"
      }
    ],
    "correct": "D",
    "explanation": "`kubectl autoscale deployment <NAME> --min=<MIN> --max=<MAX> --cpu-percent=<TARGET>` creates a HorizontalPodAutoscaler (HPA) resource that queries the Kubernetes metrics-server and adjusts Pod replica counts dynamically based on workload CPU demand.",
    "distractors": {
      "C": "`kubectl scale` sets a static replica count and does not dynamically autoscale based on real-time CPU utilization.",
      "A": "`clusters update --enable-autoscaling` configures Cluster Autoscaler (scaling worker VM nodes), not Pod-level HPA.",
      "B": "`gcloud compute instance-groups` scales Compute Engine VM instance groups, not Kubernetes Pods."
    },
    "gcloudCommand": "kubectl autoscale deployment payment-gateway --min=3 --max=25 --cpu-percent=75",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "ACE-D3-039",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud DNS Record Creation & Management",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud DNS Managed Zones and Resource Record Sets via CLI",
    "scenario": "You have registered the domain `api.corp.com` in a Cloud DNS Public Managed Zone named `corp-public-zone`. You need to create an `A` record pointing `api.corp.com` to the external IP address `34.120.50.80` with a TTL of 300 seconds. Which gcloud command creates this record?",
    "keywords": [
      "Cloud DNS",
      "gcloud dns record-sets create",
      "A Record",
      "TTL",
      "DNS Deployment"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute networks update corp-public-zone --dns-a-record=34.120.50.80"
      },
      {
        "letter": "B",
        "text": "bq query 'INSERT INTO dns_records VALUES (api.corp.com, 34.120.50.80)'"
      },
      {
        "letter": "C",
        "text": "gcloud dns record-sets create api.corp.com. --zone=corp-public-zone --type=A --ttl=300 --rrdatas=34.120.50.80"
      },
      {
        "letter": "D",
        "text": "gcloud dns managed-zones add-record corp-public-zone --type=A --ip=34.120.50.80"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud dns record-sets create <FQDN> --zone=<ZONE_NAME> --type=<TYPE> --ttl=<TTL> --rrdatas=<IP_OR_VALUE>` adds DNS resource records (A, CNAME, TXT, MX) to a Cloud DNS managed zone.",
    "distractors": {
      "A": "`compute networks update` is for VPC network properties, not DNS record registration.",
      "D": "`managed-zones add-record` is non-existent syntax.",
      "B": "BigQuery is an analytical SQL engine, not an authoritative public DNS server."
    },
    "gcloudCommand": "gcloud dns record-sets create api.corp.com. --zone=corp-public-zone --type=A --ttl=300 --rrdatas=34.120.50.80",
    "architectureComponents": [
      "Cloud DNS"
    ],
    "officialDocUrl": "https://cloud.google.com/dns/docs/records"
  },
  {
    "id": "ACE-D3-040",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Eventarc Triggers & Cloud Run Event Processing",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Eventarc Triggers for Cloud Run Services",
    "scenario": "You have deployed a containerized audit logging service `audit-logger` on Cloud Run. You need to configure Eventarc to automatically invoke this Cloud Run service whenever an IAM Policy change event occurs in the project (Cloud Audit Log: `SetIamPolicy`). Which command creates this Eventarc trigger?",
    "keywords": [
      "Eventarc",
      "Cloud Run",
      "Audit Logs",
      "SetIamPolicy",
      "Event-Driven Architecture"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud eventarc triggers create iam-audit-trigger --destination-run-service=audit-logger --destination-run-region=us-central1 --location=us-central1 --event-filters='type=google.cloud.audit.log.v1.written' --event-filters='serviceName=iam.googleapis.com' --event-filters='methodName=SetIamPolicy' --service-account=eventarc-sa@corp.iam.gserviceaccount.com"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub topics create iam-events && gcloud pubsub subscriptions create --cron='* * * * *'"
      },
      {
        "letter": "C",
        "text": "gcloud logging sinks create iam-audit-sink cloudrun.googleapis.com/audit-logger"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create iam-listener --service=audit-logger"
      }
    ],
    "correct": "A",
    "explanation": "Eventarc allows routing Cloud Audit Logs directly to Cloud Run services without custom polling. Specifying `--event-filters='type=google.cloud.audit.log.v1.written'`, `--event-filters='serviceName=iam.googleapis.com'`, and `--event-filters='methodName=SetIamPolicy'` triggers the Cloud Run destination on policy changes.",
    "distractors": {
      "B": "Pub/Sub subscriptions do not take cron syntax.",
      "C": "Cloud Logging sinks cannot directly route HTTP push requests to Cloud Run services (they route to Pub/Sub, BigQuery, GCS, or log buckets).",
      "D": "Compute Engine instance creation does not configure serverless event-driven triggers."
    },
    "gcloudCommand": "gcloud eventarc triggers create iam-audit-trigger --destination-run-service=audit-logger --destination-run-region=us-central1 --location=us-central1 --event-filters='type=google.cloud.audit.log.v1.written' --event-filters='serviceName=iam.googleapis.com' --event-filters='methodName=SetIamPolicy' --service-account=eventarc-sa@corp.iam.gserviceaccount.com",
    "architectureComponents": [
      "Eventarc",
      "Cloud Run",
      "Cloud Audit Logs"
    ],
    "officialDocUrl": "https://cloud.google.com/eventarc/docs/run/create-trigger-audit-logs"
  },
  {
    "id": "ACE-D3-041",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Logging Sink Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Logging Sinks to Export Audit Logs to BigQuery",
    "scenario": "A security policy mandates that all Google Cloud IAM administrative activity logs across project `corp-prod-101` must be streamed in real-time to a BigQuery dataset `audit_analytics` for compliance retention and SIEM queries. Which gcloud command deploys this logging sink?",
    "keywords": [
      "Cloud Logging",
      "gcloud logging sinks create",
      "BigQuery Export",
      "Audit Logs",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gsutil notification create -f bigquery gs://corp-logs"
      },
      {
        "letter": "B",
        "text": "bq mk --transfer_config --destination=audit_analytics --source=logs"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks update --export-logs-to-bigquery"
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create iam-audit-bq-sink bigquery.googleapis.com/projects/corp-prod-101/datasets/audit_analytics --log-filter='protoPayload.serviceName=\"iam.googleapis.com\"'"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud logging sinks create <SINK_NAME> <DESTINATION_URI> --log-filter=<FILTER>` creates a Cloud Logging Sink that continuously routes matching log entries to BigQuery, Cloud Storage, or Pub/Sub.",
    "distractors": {
      "A": "`gsutil notification` is for Cloud Storage Pub/Sub notifications, not Cloud Logging BigQuery streaming.",
      "C": "`compute networks update` does not configure IAM audit log sinks.",
      "B": "BigQuery Data Transfer Service does not stream live Cloud Logging entries."
    },
    "gcloudCommand": "gcloud logging sinks create iam-audit-bq-sink bigquery.googleapis.com/projects/corp-prod-101/datasets/audit_analytics --log-filter='protoPayload.serviceName=\"iam.googleapis.com\"'",
    "architectureComponents": [
      "Cloud Logging",
      "BigQuery"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/export/configure-export-v2"
  },
  {
    "id": "ACE-D3-042",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Cross-Region Read Replica Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating and Deploying Cloud SQL Read Replicas across Regions for Disaster Recovery",
    "scenario": "You have a primary Cloud SQL PostgreSQL instance `db-master-uscentral1` in `us-central1`. To support disaster recovery and provide low-latency read performance for European users, you need to deploy a cross-region Read Replica named `db-replica-europewest1` in region `europe-west1`. Which command deploys this replica?",
    "keywords": [
      "Cloud SQL",
      "Read Replica",
      "Cross-Region",
      "Disaster Recovery",
      "PostgreSQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create db-replica-europewest1 --master-instance-name=db-master-uscentral1 --region=europe-west1"
      },
      {
        "letter": "B",
        "text": "gcloud spanner instances create db-replica-europewest1 --source=db-master-uscentral1"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances clone db-master-uscentral1 db-replica-europewest1 --region=europe-west1"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create db-replica-europewest1 --replica-of=db-master-uscentral1"
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL Read Replicas are created with `gcloud sql instances create <REPLICA_NAME> --master-instance-name=<PRIMARY_NAME> --region=<TARGET_REGION>`. When the target region differs from the master, Cloud SQL provisions a Cross-Region Read Replica.",
    "distractors": {
      "C": "`instances clone` creates a static point-in-time clone in the same region, not an actively replicating live replica.",
      "D": "`compute instances create` provisions Compute Engine VMs, not managed Cloud SQL database replicas.",
      "B": "Cloud Spanner cannot act as a direct read replica for Cloud SQL PostgreSQL."
    },
    "gcloudCommand": "gcloud sql instances create db-replica-europewest1 --master-instance-name=db-master-uscentral1 --region=europe-west1",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/postgres/replication/create-replica"
  },
  {
    "id": "ACE-D3-043",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Compute Engine Stateful MIG Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Stateful Managed Instance Groups with Preserved Persistent Disks",
    "scenario": "You are deploying a cluster of 3 Elasticsearch nodes in a Compute Engine Managed Instance Group `es-mig`. Each node must retain its specific data disk and internal IP address across instance restarts, auto-healing events, and rolling software updates. How should you configure the MIG?",
    "keywords": [
      "Stateful MIG",
      "Stateful Policy",
      "Persistent Disks",
      "Stateful IP",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set the instance template to use Spot VMs."
      },
      {
        "letter": "B",
        "text": "Use Local SSDs with cron snapshot scripts."
      },
      {
        "letter": "C",
        "text": "Configure the Managed Instance Group with a Stateful Policy preserving the data disk device name (e.g. --stateful-disk) and network interfaces."
      },
      {
        "letter": "D",
        "text": "Deploy an Unmanaged Instance Group and disable autoscaling."
      }
    ],
    "correct": "C",
    "explanation": "Stateful MIGs allow defining a Stateful Policy on persistent disks (`--stateful-disk`) and IP addresses. During auto-healing or rolling updates, Compute Engine preserves and reattaches the exact individual data disk to the recreated instance.",
    "distractors": {
      "A": "Spot VMs are frequently preempted and do not provide stateful disk preservation guarantees.",
      "D": "Unmanaged Instance Groups lack automated autohealing and managed rolling updates.",
      "B": "Local SSDs lose all data upon VM stop/recreation and cannot be preserved in stateful policies."
    },
    "gcloudCommand": "gcloud compute instance-groups managed update web-mig --stateful-disk=device-name=data-disk,auto-delete=never",
    "architectureComponents": [
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs"
  },
  {
    "id": "ACE-D3-044",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Run Min Instances & Concurrency Optimization",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Run Services with Minimum Instances to Eliminate Cold Starts",
    "scenario": "A mission-critical payment verification API hosted on Cloud Run requires sub-50ms response times for all incoming requests. To prevent container cold start latencies during idle periods, you need to ensure that at least 2 container instances are always pre-warmed and running 24/7. Which command configures this?",
    "keywords": [
      "Cloud Run",
      "min-instances",
      "Zero Cold Starts",
      "Concurrency",
      "Serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud run services update payment-api --region=us-central1 --max-instances=2"
      },
      {
        "letter": "B",
        "text": "Deploy an e2-micro VM running a loop curl command."
      },
      {
        "letter": "C",
        "text": "gcloud run services update payment-api --region=us-central1 --min-instances=2"
      },
      {
        "letter": "D",
        "text": "Create a Cloud Scheduler job that sends an HTTP ping every 5 minutes."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run supports `--min-instances=<COUNT>`. Setting minimum instances keeps the specified number of container instances initialized and warm in memory, eliminating cold starts for subsequent incoming requests.",
    "distractors": {
      "D": "Periodic HTTP pings only keep 1 instance warm intermittently and fail under concurrent traffic bursts.",
      "B": "Custom ping loops on VMs add infrastructure maintenance and are an unnecessary anti-pattern.",
      "A": "`--max-instances=2` limits maximum scale-out capacity, but allows instances to scale down to 0 when idle."
    },
    "gcloudCommand": "gcloud run services update payment-api --region=us-central1 --min-instances=2",
    "architectureComponents": [
      "Cloud Run"
    ],
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/min-instances"
  },
  {
    "id": "ACE-D3-045",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes Pod Disruption Budgets (PDB)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying GKE Pod Disruption Budgets (PDB) for High Availability During Upgrades",
    "scenario": "You are configuring a mission-critical web deployment in GKE that runs with 5 replicas. During automated GKE node pool upgrades or voluntary node maintenance, you must ensure that at least 3 replicas remain available and serving traffic at all times. What Kubernetes resource should you deploy?",
    "keywords": [
      "GKE",
      "PodDisruptionBudget",
      "PDB",
      "minAvailable",
      "High Availability"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a PodDisruptionBudget (PDB) resource with minAvailable: 3 matching the web deployment pod selector."
      },
      {
        "letter": "B",
        "text": "Set the node pool autoscaling min-nodes to 3."
      },
      {
        "letter": "C",
        "text": "Disable the GKE node auto-upgrade feature permanently."
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy preventing node pool upgrades."
      }
    ],
    "correct": "A",
    "explanation": "A Kubernetes `PodDisruptionBudget` (PDB) specifies the minimum number (`minAvailable`) or maximum number (`maxUnavailable`) of Pod replicas that must be running simultaneously during voluntary disruptions (such as node drain, cluster upgrades, or autoscaler downscaling).",
    "distractors": {
      "B": "Node pool min-nodes controls VM worker count, but does not prevent multiple pods on the same node from being drained simultaneously.",
      "D": "IAM Deny policies block administrative actions, not Kubernetes scheduler eviction logic.",
      "C": "Disabling auto-upgrades leaves worker nodes unpatched and vulnerable to security CVEs."
    },
    "gcloudCommand": "kubectl apply -f web-pdb.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/tasks/run-application/configure-pdb/"
  },
  {
    "id": "ACE-D3-046",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Data Synchronization with gsutil/storage rsync",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Storage Dual-Directional rsync Data Synchronization",
    "scenario": "You have an on-premises directory `/var/www/assets/` containing 50 GB of product catalog images. You need to synchronize this local directory to a Cloud Storage bucket `gs://corp-product-assets/` such that only new or modified files are uploaded, avoiding re-uploading identical existing files. Which command accomplishes this?",
    "keywords": [
      "Cloud Storage",
      "storage rsync",
      "Data Sync",
      "Incremental Upload",
      "gcloud storage"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage cp /var/www/assets/* gs://corp-product-assets/ --overwrite"
      },
      {
        "letter": "B",
        "text": "bq load --source_format=CSV gs://corp-product-assets/ /var/www/assets/"
      },
      {
        "letter": "C",
        "text": "gcloud compute scp /var/www/assets/ gs://corp-product-assets/"
      },
      {
        "letter": "D",
        "text": "gcloud storage rsync /var/www/assets/ gs://corp-product-assets/ --recursive"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud storage rsync` (or `gsutil rsync`) compares source and destination checksums/timestamps and synchronizes only newly added or modified files, minimizing bandwidth consumption and transfer time.",
    "distractors": {
      "C": "`gcloud compute scp` transfers files between Compute Engine VMs, not to Cloud Storage bucket endpoints.",
      "A": "`storage cp` blindly copies all files, re-uploading unchanged objects and wasting network bandwidth.",
      "B": "`bq load` loads tabular data into BigQuery tables, not unstructured files into Cloud Storage."
    },
    "gcloudCommand": "gcloud storage rsync /var/www/assets/ gs://corp-product-assets/ --recursive",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/gcloud-storage#rsync"
  },
  {
    "id": "ACE-D3-047",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "VPC Flow Logs Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying VPC Flow Logs on Subnets for Network Traffic Telemetry",
    "scenario": "A security operations team requires continuous network traffic metadata capture (source/destination IP, port, protocol, packet count, latency) for all connections traversing subnet `db-subnet` in `us-central1` to perform network security forensics. What command enables VPC Flow Logs on the subnet?",
    "keywords": [
      "VPC Flow Logs",
      "Subnet",
      "Network Telemetry",
      "gcloud compute networks subnets update",
      "Security Forensics"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances update-all --enable-packet-capture"
      },
      {
        "letter": "B",
        "text": "gcloud logging sinks create db-flow-sink vpc.googleapis.com/db-subnet"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks subnets update db-subnet --region=us-central1 --enable-flow-logs --logging-sample-rate=1.0 --logging-metadata=include-all"
      },
      {
        "letter": "D",
        "text": "gcloud compute firewall-rules create log-all --network=prod-vpc --action=LOG"
      }
    ],
    "correct": "C",
    "explanation": "VPC Flow Logs are enabled on subnets via `gcloud compute networks subnets update <SUBNET> --enable-flow-logs`. Specifying `--logging-sample-rate=1.0` and `--logging-metadata=include-all` captures 100% of network flow 5-tuples and rich VM metadata into Cloud Logging.",
    "distractors": {
      "D": "Firewall rule logging only records packets evaluated by that specific firewall rule, not all subnet internal traffic.",
      "A": "`update-all --enable-packet-capture` is non-existent syntax.",
      "B": "Cloud Logging sinks route already-generated log entries; they do not activate subnet packet telemetry at the hypervisor layer."
    },
    "gcloudCommand": "gcloud compute networks subnets update db-subnet --region=us-central1 --enable-flow-logs --logging-sample-rate=1.0 --logging-metadata=include-all",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Cloud Logging"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/using-flow-logs"
  },
  {
    "id": "ACE-D3-048",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Kubernetes NetworkPolicy Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes NetworkPolicies for Microservice Pod Isolation",
    "scenario": "You have an e-commerce microservices cluster in GKE. Security policy dictates that Pods with label `app=database` in namespace `prod` must ONLY accept incoming TCP connections on port 5432 from Pods carrying the label `app=backend-api`, blocking all other Pods and external traffic. What manifest should you apply?",
    "keywords": [
      "NetworkPolicy",
      "Kubernetes",
      "Pod Isolation",
      "ingress.from.podSelector",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set the database Service type to NodePort."
      },
      {
        "letter": "B",
        "text": "Deploy a Kubernetes NetworkPolicy with podSelector matching 'app: database' and an ingress rule allowing port 5432 from podSelector 'app: backend-api'."
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule targeting network tag 'app-database'."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud Armor policy targeting port 5432."
      }
    ],
    "correct": "B",
    "explanation": "Kubernetes NetworkPolicies enforce Pod-to-Pod L3/L4 network segmentation inside a cluster. Specifying `spec.podSelector: {matchLabels: {app: database}}` and `ingress.from.podSelector: {matchLabels: {app: backend-api}}` ensures only authorized backend pods can communicate with the database.",
    "distractors": {
      "C": "VPC firewall rules apply to VM node instances, not individual Pods sharing the same node IP/overlay.",
      "D": "Cloud Armor protects HTTP/HTTPS external load balancers, not internal Kubernetes Pod-to-Pod traffic.",
      "A": "`NodePort` opens a port on all worker nodes, increasing attack surface rather than restricting access."
    },
    "gcloudCommand": "kubectl apply -f db-network-policy.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy"
  },
  {
    "id": "ACE-D3-049",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Tasks Queue Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Cloud Tasks Queues for Rate-Limited Asynchronous Webhook Dispatch",
    "scenario": "Your web application processes order notifications by sending webhooks to external third-party merchant servers. Some merchant servers can only handle up to 10 requests per second. To prevent overwhelming external merchant systems, you need to deploy an asynchronous task queue that dispatches HTTP tasks at a strictly controlled rate of 10 tasks/second. What service and command should you use?",
    "keywords": [
      "Cloud Tasks",
      "gcloud tasks queues create",
      "max-dispatches-per-second",
      "Rate Limiting"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud logging sinks create webhook-sink --rate=10"
      },
      {
        "letter": "B",
        "text": "gcloud tasks queues create merchant-webhook-queue --location=us-central1 --max-dispatches-per-second=10 --max-concurrent-dispatches=5"
      },
      {
        "letter": "C",
        "text": "gcloud pubsub topics create merchant-webhook-topic --max-rate=10"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create webhook-proxy --rate-limit=10"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Tasks provides managed task execution with granular rate limiting and backoff controls. Using `gcloud tasks queues create` with `--max-dispatches-per-second=10` strictly throttles outbound execution rates to protect downstream third-party systems.",
    "distractors": {
      "A": "Cloud Logging sinks route log records, not execute rate-limited HTTP webhook calls.",
      "C": "Cloud Pub/Sub is an event streaming platform and does not support per-second dispatch rate throttling.",
      "D": "Compute Engine instance creation does not provide managed task queuing or automated token-bucket rate limits."
    },
    "gcloudCommand": "gcloud tasks queues create merchant-webhook-queue --location=us-central1 --max-dispatches-per-second=10 --max-concurrent-dispatches=5",
    "architectureComponents": [
      "Cloud Tasks"
    ],
    "officialDocUrl": "https://cloud.google.com/tasks/docs/configuring-queues"
  },
  {
    "id": "ACE-D3-050",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Access Control & Public Read",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Default Object Access Control Lists (ACLs)",
    "scenario": "You have a public website asset bucket `gs://static-web-assets-pub` that uses fine-grained access control. You need to configure the bucket so that all newly uploaded objects automatically inherit public read permissions (`allUsers:READER`) by default. Which command configures this default object ACL?",
    "keywords": [
      "Cloud Storage",
      "Default Object ACL",
      "allUsers",
      "gsutil defacl set",
      "Public Assets"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud iam service-accounts create allUsers --role=roles/viewer"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks update static-web-assets-pub --make-public"
      },
      {
        "letter": "C",
        "text": "gsutil defacl set public-read gs://static-web-assets-pub"
      },
      {
        "letter": "D",
        "text": "bq mk --dataset_acl=public-read static-web-assets-pub"
      }
    ],
    "correct": "C",
    "explanation": "On buckets using fine-grained access control, `gsutil defacl set public-read <BUCKET_URI>` configures the default object Access Control List (ACL) so that every newly uploaded object is automatically granted public read access (`allUsers:READER`).",
    "distractors": {
      "A": "`allUsers` is a special IAM identifier, not a service account you create manually.",
      "D": "`bq mk` is for BigQuery datasets, not Cloud Storage buckets.",
      "B": "`compute networks update` manages VPC networks, not Cloud Storage buckets."
    },
    "gcloudCommand": "gsutil defacl set public-read gs://static-web-assets-pub",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/access-control/create-manage-lists#defaultobjects"
  },
  {
    "id": "ACE-D3-051",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Memorystore Redis Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating Cloud Memorystore for Redis Instances with High Availability",
    "scenario": "You are deploying a session caching tier for an e-commerce platform in region `us-east1`. The cache requires 10 GB of memory, Redis 7.0, and High Availability with automatic regional failover to a standby replica in a secondary zone. Which command creates this instance?",
    "keywords": [
      "Cloud Memorystore",
      "Redis",
      "STANDARD Tier",
      "High Availability",
      "gcloud redis instances create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances create session-cache-ha --database-version=REDIS_7"
      },
      {
        "letter": "B",
        "text": "gcloud redis instances create session-cache-ha --size=10 --region=us-east1 --tier=STANDARD --redis-version=redis_7_0 --zone=us-east1-b --alternative-zone=us-east1-c"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create session-cache-ha --redis=true"
      },
      {
        "letter": "D",
        "text": "gcloud redis instances create session-cache-ha --size=10 --region=us-east1 --tier=BASIC"
      }
    ],
    "correct": "B",
    "explanation": "Deploying a High Availability Redis instance in Cloud Memorystore requires specifying `--tier=STANDARD` (which includes cross-zone replication and automated failover) along with primary `--zone` and `--alternative-zone`.",
    "distractors": {
      "D": "`BASIC` tier is standalone single-node with no cross-zone replica and no HA failover SLA.",
      "A": "Cloud SQL manages relational SQL engines (MySQL/PostgreSQL/SQL Server), not Redis.",
      "C": "Compute Engine instance creation creates unmanaged VMs, not managed Memorystore Redis instances."
    },
    "gcloudCommand": "gcloud redis instances create session-cache-ha --size=10 --region=us-east1 --tier=STANDARD --redis-version=redis_7_0 --zone=us-east1-b --alternative-zone=us-east1-c",
    "architectureComponents": [
      "Cloud Memorystore"
    ],
    "officialDocUrl": "https://cloud.google.com/memorystore/docs/redis/creating-managing-instances"
  },
  {
    "id": "ACE-D3-052",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Pod Resource Requests & Limits",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying GKE Workloads with Resource Requests and Limits",
    "scenario": "You have an application container that requires a guaranteed minimum of 500m CPU and 1 GiB memory to start, but must be throttled if it exceeds 2 vCPUs and terminated (OOMKilled) if memory consumption reaches 4 GiB to protect other Pods on the node. How should the container resources be defined in the Kubernetes YAML?",
    "keywords": [
      "Kubernetes Pod",
      "resources.requests",
      "resources.limits",
      "OOMKilled",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set resources.requests with cpu: '500m', memory: '1Gi' and resources.limits with cpu: '2', memory: '4Gi' in the container spec."
      },
      {
        "letter": "B",
        "text": "Create an HPA policy with min-cpu=500m."
      },
      {
        "letter": "C",
        "text": "Configure Cloud Monitoring alerts to kill the node."
      },
      {
        "letter": "D",
        "text": "Set node pool machine type to custom-2-4096."
      }
    ],
    "correct": "A",
    "explanation": "In Kubernetes manifests, `resources.requests` defines the minimum compute capacity reserved by the scheduler for the Pod, while `resources.limits` enforces hard caps on CPU throttling and memory OOM termination.",
    "distractors": {
      "C": "Killing entire nodes causes catastrophic collateral impact on all co-located pods.",
      "D": "Setting node machine type sizes the whole VM worker, not individual container pod constraints.",
      "B": "HPA scales replica counts based on target metrics, but does not configure per-pod resource request/limit boundaries."
    },
    "gcloudCommand": "kubectl apply -f pod-resources.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
  },
  {
    "id": "ACE-D3-053",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage CORS Configuration",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Storage CORS Policies for Cross-Origin Web Uploads",
    "scenario": "A web application hosted at `https://app.example.com` allows users to upload profile pictures directly from their web browsers to a Cloud Storage bucket `gs://user-avatars-vault` using signed URLs. When users attempt to upload, the browser blocks the PUT request due to Cross-Origin Resource Sharing (CORS) security errors. Which command applies the JSON CORS policy?",
    "keywords": [
      "Cloud Storage",
      "CORS",
      "gcloud storage buckets update --cors-file",
      "Browser Uploads"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute firewall-rules create allow-cors --allow=tcp:443"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://user-avatars-vault --cors-file=cors-policy.json"
      },
      {
        "letter": "C",
        "text": "gsutil defacl set public-read gs://user-avatars-vault"
      },
      {
        "letter": "D",
        "text": "bq update --cors=cors-policy.json user-avatars-vault"
      }
    ],
    "correct": "B",
    "explanation": "Browser cross-origin AJAX/fetch uploads to Cloud Storage require a CORS configuration on the target bucket. `gcloud storage buckets update <BUCKET> --cors-file=<JSON_FILE>` sets allowed origins (e.g. `https://app.example.com`), HTTP methods (PUT, GET), and headers.",
    "distractors": {
      "C": "Default ACLs change object permissions, but do not satisfy browser CORS pre-flight OPTIONS checks.",
      "D": "`bq update` manages BigQuery tables, not Cloud Storage buckets.",
      "A": "VPC firewall rules govern network packets, not browser HTTP CORS response headers."
    },
    "gcloudCommand": "gcloud storage buckets update gs://user-avatars-vault --cors-file=cors-policy.json",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/using-cors"
  },
  {
    "id": "ACE-D3-054",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Bigtable Multi-Cluster Replication Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Multi-Region Bigtable Instances with Cross-Cluster Replication",
    "scenario": "You have an existing Cloud Bigtable instance `ad-bidding-engine` with a single cluster `cluster-us-central1` in `us-central1-b`. To achieve high availability, 99.999% read SLA, and active-active cross-region replication for European bidding servers, you need to add a second cluster `cluster-europe-west1` in zone `europe-west1-b` with 4 SSD nodes. Which command deploys this cluster?",
    "keywords": [
      "Cloud Bigtable",
      "Multi-Cluster",
      "Cross-Region Replication",
      "gcloud bigtable clusters create"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud bigtable instances create cluster-europe-west1 --replicate-from=cluster-us-central1"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create cluster-europe-west1 --bigtable-cluster=true"
      },
      {
        "letter": "C",
        "text": "cbt replicate-cluster cluster-europe-west1"
      },
      {
        "letter": "D",
        "text": "gcloud bigtable clusters create cluster-europe-west1 --instance=ad-bidding-engine --zone=europe-west1-b --num-nodes=4 --storage-type=SSD"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Bigtable supports adding clusters dynamically to an existing instance using `gcloud bigtable clusters create <CLUSTER_ID> --instance=<INSTANCE_ID> --zone=<ZONE> --num-nodes=<NODES> --storage-type=<SSD/HDD>`. Google Bigtable automatically establishes bidirectional asynchronous data replication.",
    "distractors": {
      "A": "`instances create` creates an entirely new isolated instance rather than attaching a cluster to the existing instance.",
      "B": "`compute instances create` is for Compute Engine VMs.",
      "C": "`cbt replicate-cluster` is not a valid cbt CLI command."
    },
    "gcloudCommand": "gcloud bigtable clusters create cluster-europe-west1 --instance=ad-bidding-engine --zone=europe-west1-b --num-nodes=4 --storage-type=SSD",
    "architectureComponents": [
      "Cloud Bigtable"
    ],
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/replication-overview"
  },
  {
    "id": "ACE-D3-055",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Storage Pub/Sub Notification Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Cloud Storage Pub/Sub Object Change Notifications via CLI",
    "scenario": "You have an automated ingestion pipeline. Whenever a new file is uploaded to Cloud Storage bucket `gs://incoming-invoices-vault`, a message containing object metadata must be published immediately to Cloud Pub/Sub topic `projects/corp-finance/topics/invoice-events`. Which command establishes this notification pipeline?",
    "keywords": [
      "Cloud Storage",
      "gcloud storage notification-configurations create",
      "Pub/Sub Notification",
      "OBJECT_FINALIZE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage notification-configurations create --topic=projects/corp-finance/topics/invoice-events --event-types=OBJECT_FINALIZE gs://incoming-invoices-vault"
      },
      {
        "letter": "B",
        "text": "gcloud logging sinks create invoice-sink pubsub.googleapis.com/projects/corp-finance/topics/invoice-events"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create invoice-watcher --bucket=incoming-invoices-vault"
      },
      {
        "letter": "D",
        "text": "gcloud pubsub subscriptions create invoice-sub --bucket=incoming-invoices-vault"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud storage notification-configurations create` (or `gsutil notification create`) configures native Cloud Storage Pub/Sub notifications, sending structured JSON notification messages to the designated topic whenever an object event (e.g. `OBJECT_FINALIZE`) occurs.",
    "distractors": {
      "C": "Compute Engine watcher VMs require continuous polling scripts and introduce single points of failure.",
      "D": "Pub/Sub subscriptions attach to Pub/Sub topics, not directly to Cloud Storage buckets.",
      "B": "Cloud Logging sinks export log records, not structured object metadata payloads for event-driven pipelines."
    },
    "gcloudCommand": "gcloud storage notification-configurations create --topic=projects/corp-finance/topics/invoice-events --event-types=OBJECT_FINALIZE gs://incoming-invoices-vault",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud Pub/Sub"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/reporting-changes"
  },
  {
    "id": "ACE-D3-056",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE BackendConfig CRD & Load Balancer Settings",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Services with Cloud Load Balancing BackendConfig CRD",
    "scenario": "You are exposing a GKE microservice through a Google Cloud HTTP(S) Load Balancer via Ingress. You need to configure a custom health check path (`/api/v1/healthz`), a 60-second connection timeout, and attach a Cloud Armor security policy `waf-policy` directly to the GKE backend service. What Kubernetes resource must you deploy and associate with your Service?",
    "keywords": [
      "BackendConfig CRD",
      "GKE Ingress",
      "Cloud Armor",
      "cloud.google.com/backend-config"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Manually edit the GCP Load Balancer in the Cloud Console after every deployment."
      },
      {
        "letter": "B",
        "text": "Create a VPC firewall rule with a 60-second timeout."
      },
      {
        "letter": "C",
        "text": "Deploy an Nginx sidecar container in every Pod."
      },
      {
        "letter": "D",
        "text": "Deploy a BackendConfig custom resource defining the health check, timeoutSec, and securityPolicy, and annotate the Kubernetes Service with 'cloud.google.com/backend-config: {\"default\": \"my-backend-config\"}'."
      }
    ],
    "correct": "D",
    "explanation": "GKE Ingress controller uses the `BackendConfig` CRD to configure Google Cloud Load Balancer Backend Service features (Cloud Armor, custom health checks, timeouts, CDN, IAP). Annotating the Kubernetes Service with `cloud.google.com/backend-config` links the Kubernetes Service to the GCP Backend Service parameters.",
    "distractors": {
      "C": "Sidecar proxies cannot configure GCP edge Cloud Armor policies or Cloud Load Balancer backend service timeouts.",
      "B": "Firewall rules inspect L3/L4 packets and do not configure HTTP backend service connection timeouts or WAF policies.",
      "A": "Manual console edits are overwritten or drift during Kubernetes Ingress reconciliations."
    },
    "gcloudCommand": "kubectl apply -f backend-config.yaml && kubectl apply -f service.yaml",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)",
      "Cloud Load Balancing",
      "Cloud Armor"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#backendconfig_cr"
  },
  {
    "id": "ACE-D3-057",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "GKE Node Auto-Provisioning Deployment",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying Kubernetes Node Auto-Provisioning in GKE Clusters",
    "scenario": "You manage a multi-tenant GKE Standard cluster where developers submit jobs requiring widely varying resource shapes (some require high-memory, others compute-optimized, and others GPU accelerators). Instead of manually creating dozens of node pools with different machine types in advance, you want GKE to automatically provision and size specialized node pools on demand whenever pending Pods request them. Which cluster feature should you enable?",
    "keywords": [
      "GKE",
      "Node Auto-Provisioning",
      "NAP",
      "Cluster Autoscaler",
      "Dynamic Node Pools"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an unmanaged Compute Engine instance group with 100 n2-standard-4 instances."
      },
      {
        "letter": "B",
        "text": "Enable Node Auto-Provisioning (NAP) on the cluster using gcloud container clusters update --enable-autoprovisioning."
      },
      {
        "letter": "C",
        "text": "Deploy a Horizontal Pod Autoscaler for each namespace."
      },
      {
        "letter": "D",
        "text": "Write a bash cron script that polls kubectl get pods and runs gcloud compute instances create."
      }
    ],
    "correct": "B",
    "explanation": "Node Auto-Provisioning (NAP) extends the GKE Cluster Autoscaler by automatically creating, configuring, and deleting new node pools with the exact machine types, CPU/memory specifications, accelerators, and taint/toleration requirements needed by unscheduled Pods.",
    "distractors": {
      "C": "Horizontal Pod Autoscaler scales Pod replica counts, but cannot provision new physical VM node pools or hardware machine types.",
      "A": "Static unmanaged instance groups waste massive compute budget on unallocated VM capacity.",
      "D": "Custom polling scripts are fragile, unstandardized, and lack atomic cluster scheduling integration."
    },
    "gcloudCommand": "gcloud container clusters update my-cluster --region=us-central1 --enable-autoprovisioning --max-cpu=1000 --max-memory=4000",
    "architectureComponents": [
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning"
  },
  {
    "id": "ACE-D3-058",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud SQL Restore & Point-in-Time Recovery",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud SQL Point-in-Time Database Restoration via CLI",
    "scenario": "A developer accidentally executed a data-corrupting SQL migration script on database `customer-db` at 14:32:00 UTC on August 20, 2026. The instance has automated backups and binary logging (PITR) enabled. You need to restore the database to an exact clean state as of 14:30:00 UTC on the same day into a new instance `customer-db-restored`. Which command executes this point-in-time clone/restore?",
    "keywords": [
      "Cloud SQL",
      "gcloud sql instances clone",
      "Point-in-Time Recovery",
      "PITR Restore",
      "Database Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud sql instances clone customer-db customer-db-restored --point-in-time=2026-08-20T14:30:00.000Z"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances restore customer-db --time=14:30:00"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restore-backup customer-db --backup-time=14:30"
      },
      {
        "letter": "D",
        "text": "gsutil cp gs://backups/db.sql | gcloud sql connect customer-db"
      }
    ],
    "correct": "A",
    "explanation": "Point-in-Time Recovery in Cloud SQL is performed via `gcloud sql instances clone <SOURCE_INSTANCE> <TARGET_INSTANCE> --point-in-time=<ISO_TIMESTAMP>`. This creates a new fully functional instance containing database state exactly as of that specified millisecond without modifying or overwriting the original instance.",
    "distractors": {
      "D": "Manual SQL streaming is slow, requires manual file extraction, and does not leverage managed WAL log replay.",
      "C": "`restore-backup` restores to a daily snapshot point, losing transaction granularity between snapshots.",
      "B": "Compute Engine instance restore does not manage relational database write-ahead log replay."
    },
    "gcloudCommand": "gcloud sql instances clone customer-db customer-db-restored --point-in-time=2026-08-20T14:30:00.000Z",
    "architectureComponents": [
      "Cloud SQL"
    ],
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/clone-instance#point-in-time"
  },
  {
    "id": "ACE-D3-059",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "App Engine Cron Service Deployment",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Deploying App Engine Cron Service via cron.yaml",
    "scenario": "You have an App Engine application that needs to execute an internal HTTP endpoint `/tasks/cleanup-sessions` every 12 hours. You have written a `cron.yaml` configuration file specifying the URL, schedule, and description. Which command deploys the cron schedule to App Engine?",
    "keywords": [
      "App Engine",
      "cron.yaml",
      "gcloud app deploy cron.yaml",
      "Scheduled Tasks"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gsutil cp cron.yaml gs://appengine-cron/"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances add-cron cron.yaml"
      },
      {
        "letter": "C",
        "text": "gcloud app deploy cron.yaml"
      },
      {
        "letter": "D",
        "text": "kubectl apply -f cron.yaml"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app deploy cron.yaml` deploys the scheduled task definitions to Google App Engine Cron Service, which automatically triggers the specified application endpoints on schedule without requiring external cron daemons.",
    "distractors": {
      "D": "Kubernetes manifests use `CronJob` kinds, not App Engine proprietary `cron.yaml` syntax.",
      "A": "Copying to Cloud Storage does not register scheduled execution jobs with App Engine.",
      "B": "`compute instances add-cron` is non-existent syntax."
    },
    "gcloudCommand": "gcloud app deploy cron.yaml",
    "architectureComponents": [
      "App Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/nodejs/scheduling-jobs-with-cron-yaml"
  },
  {
    "id": "ACE-D3-060",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D3",
    "domainName": "Deploying and implementing a cloud solution",
    "subtopic": "Cloud Build IAM & Terraform Deployment",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Cloud Build Service Account IAM Roles for Terraform Infrastructure Deployment",
    "scenario": "You are implementing GitOps infrastructure-as-code deployments where Cloud Build runs `terraform apply` against project `prod-core`. By default, the Cloud Build Service Account (`[PROJECT_NUMBER]@cloudbuild.gserviceaccount.com`) lacks permissions to provision Compute Engine and Cloud Storage resources, causing build failures. Which IAM roles must be granted to the Cloud Build service account?",
    "keywords": [
      "Cloud Build",
      "Cloud IAM",
      "Terraform",
      "roles/compute.admin",
      "roles/storage.admin"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Download the project owner's JSON key and embed it into the Git repository."
      },
      {
        "letter": "B",
        "text": "Grant primitive roles/viewer to the Cloud Build service account."
      },
      {
        "letter": "C",
        "text": "Disable IAM role checks in Cloud Build settings."
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin and roles/storage.admin to the Cloud Build service account in the prod-core project."
      }
    ],
    "correct": "D",
    "explanation": "When using Cloud Build for Terraform infrastructure automation, the Cloud Build default service account (`<PROJECT_NUMBER>@cloudbuild.gserviceaccount.com`) must be granted the specific administrative predefined roles (`roles/compute.admin`, `roles/storage.admin`, etc.) corresponding to the cloud resources being provisioned.",
    "distractors": {
      "B": "`roles/viewer` is read-only and will cause Terraform provisioning commands (`create`, `update`, `delete`) to fail with 403 Forbidden.",
      "A": "Committing static JSON keys into Git repositories violates security policies and creates critical leak vulnerabilities.",
      "C": "IAM authorization is an immutable platform security requirement and cannot be 'disabled' in Cloud Build."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding prod-core --member='serviceAccount:123456789012@cloudbuild.gserviceaccount.com' --role='roles/compute.admin'",
    "architectureComponents": [
      "Cloud Build",
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/build/docs/securing-builds/configure-access-for-cloud-build-service-account"
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
        "text": "gsutil cp api-tokens.txt gs://k8s-secrets-prod/"
      },
      {
        "letter": "B",
        "text": "kubectl create secret generic api-tokens --namespace=prod --from-literal=api-key='SecretTokenXYZ123' --from-literal=jwt-secret='SuperSecretSigningKey987'"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create api-tokens --secret-values='api-key=XYZ'"
      },
      {
        "letter": "D",
        "text": "kubectl apply secret api-tokens --key=SecretTokenXYZ123"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl create secret generic <NAME> --from-literal=<KEY>=<VALUE>` creates a Kubernetes Secret object directly from CLI arguments, base64-encoding the values into the Kubernetes etcd cluster store.",
    "distractors": {
      "A": "Copying to Cloud Storage does not create Kubernetes Secret objects in the GKE cluster.",
      "C": "Compute Engine instances create VMs, not Kubernetes Secrets.",
      "D": "`kubectl apply secret` without a manifest file or standard creation syntax is invalid."
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
        "text": "Deploy a Cloud Storage Transfer job from Ads URLs."
      },
      {
        "letter": "C",
        "text": "Export Google Ads data to Google Drive and use BigQuery external tables."
      },
      {
        "letter": "D",
        "text": "Write a Python cron script on Compute Engine that calls Google Ads API and runs bq load."
      }
    ],
    "correct": "A",
    "explanation": "BigQuery Data Transfer Service (DTS) is a fully managed service that automates scheduled data transfers from SaaS applications (Google Ads, Campaign Manager, Google Analytics 4, YouTube) and cloud storage providers directly into BigQuery tables with zero custom code.",
    "distractors": {
      "C": "Google Drive external tables have strict query rate limits and poor analytical performance.",
      "B": "Cloud Storage Transfer Service transfers object files to GCS buckets, not tabular schemas into BigQuery.",
      "D": "Custom Python scripts require ongoing maintenance, credential refresh management, and VM compute costs."
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
        "text": "bq query 'DELETE FROM traffic WHERE ip LIKE \"198.51.100.%\"'"
      },
      {
        "letter": "B",
        "text": "gcloud compute firewall-rules create block-malicious --action=DENY --source-ranges=198.51.100.0/24"
      },
      {
        "letter": "C",
        "text": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-403 --description='Block known malicious subnet'"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks subnets update --block-ip=198.51.100.0/24"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud compute security-policies rules create <PRIORITY> --security-policy=<POLICY> --src-ip-ranges=<CIDR> --action=deny-403` adds an IP blocking rule to a Cloud Armor policy to filter requests at Google's global edge before reaching backend servers.",
    "distractors": {
      "B": "VPC firewall rules drop network packets at the hypervisor layer, but do not return an application-level HTTP 403 response.",
      "D": "`networks subnets update` does not support IP blocking flags.",
      "A": "BigQuery queries operate on stored tables, not real-time network traffic filtering."
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
        "text": "gcloud compute disks snapshot create gs://compliance-vault-2026 --retention=1y"
      },
      {
        "letter": "B",
        "text": "gsutil versioning set on gs://compliance-vault-2026"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --retention-period=31536000s"
      },
      {
        "letter": "D",
        "text": "bq update --retention=31536000 compliance-vault-2026"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage buckets update <BUCKET> --retention-period=<DURATION>` configures a Bucket Retention Policy, preventing any object inside the bucket from being deleted or overwritten until its individual retention period has elapsed.",
    "distractors": {
      "D": "`bq update` is for BigQuery dataset configurations.",
      "B": "Versioning keeps historical versions but does not enforce minimum retention time or block deletion.",
      "A": "`disks snapshot create` is for Compute Engine persistent disks, not Cloud Storage buckets."
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
        "text": "bq mk --snapshot_schedule daily-backup-schedule"
      },
      {
        "letter": "B",
        "text": "gcloud app deploy backup-cron.yaml"
      },
      {
        "letter": "C",
        "text": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --region=us-central1 --daily-schedule --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks snapshot-schedule create daily-backup-schedule --time=02:00"
      }
    ],
    "correct": "C",
    "explanation": "Automated persistent disk backups in Compute Engine are configured via Resource Policies using `gcloud compute resource-policies create snapshot-schedule <NAME> --region=<REGION> --daily-schedule --start-time=<UTC_TIME> --max-retention-days=<DAYS>`.",
    "distractors": {
      "B": "App Engine cron does not manage native Compute Engine block storage hypervisor snapshots.",
      "A": "`bq mk` is for BigQuery dataset tables, not Compute Engine persistent disks.",
      "D": "`compute disks snapshot-schedule` is invalid CLI syntax."
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
        "text": "gcloud compute instances create order-pusher --topic=order-events"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --unauthenticated"
      },
      {
        "letter": "C",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --push-auth-service-account=pubsub-invoker@corp.iam.gserviceaccount.com --push-auth-token-audience=https://orders-api-xyz.a.run.app"
      },
      {
        "letter": "D",
        "text": "gsutil notification create -e PUSH https://orders-api-xyz.a.run.app"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Pub/Sub Push Subscriptions support authenticated HTTP endpoints. Using `--push-auth-service-account` and `--push-auth-token-audience` causes Google Pub/Sub to sign a short-lived OpenID Connect (OIDC) JWT token and include it in the `Authorization: Bearer <TOKEN>` header of every push request.",
    "distractors": {
      "D": "`gsutil notification` is for Cloud Storage object changes, not Cloud Pub/Sub push subscription definitions.",
      "B": "Unauthenticated push requests are rejected with HTTP 401 Unauthorized by secured Cloud Run services.",
      "A": "Compute Engine instance creation does not configure serverless Pub/Sub push pipelines."
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
        "text": "bq mk --alert_policy=high-cpu-alert.json"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create-alert high-cpu-alert.json"
      },
      {
        "letter": "C",
        "text": "gcloud alpha monitoring policies create --policy-from-file=high-cpu-alert.json"
      },
      {
        "letter": "D",
        "text": "kubectl apply -f high-cpu-alert.json"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud alpha monitoring policies create --policy-from-file=<FILE>` is the Google Cloud CLI command to deploy declarative JSON/YAML alerting policy configurations to Google Cloud Monitoring.",
    "distractors": {
      "D": "`kubectl apply` applies Kubernetes manifests, not Google Cloud Monitoring alerting policy JSON definitions.",
      "A": "`bq mk` is for BigQuery database objects, not Cloud Monitoring alert policies.",
      "B": "`compute instances create-alert` is non-existent syntax."
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
        "text": "Set memory limits to 32 GiB."
      },
      {
        "letter": "B",
        "text": "Deploy with the --no-cpu-throttling flag (CPU always allocated)."
      },
      {
        "letter": "C",
        "text": "Set min-instances to 0."
      },
      {
        "letter": "D",
        "text": "Deploy with the --cpu-throttling flag (CPU allocated only during requests)."
      }
    ],
    "correct": "B",
    "explanation": "By default, Cloud Run throttles CPU to 0 outside of active HTTP request processing. To support WebSockets, streaming connections, and background thread execution, you must deploy with `--no-cpu-throttling` (CPU is always allocated throughout the instance lifecycle).",
    "distractors": {
      "D": "`--cpu-throttling` shuts off CPU between requests, freezing background tasks and dropping WebSocket connections.",
      "A": "Increasing memory does not prevent CPU throttling between requests.",
      "C": "Setting `min-instances=0` allows instances to scale to zero, terminating persistent background tasks."
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
        "text": "Set node pool autoscaling max-nodes to 1000."
      },
      {
        "letter": "B",
        "text": "Deploy an unmanaged Compute Engine instance group."
      },
      {
        "letter": "C",
        "text": "Deploy a PriorityClass resource with a high integer value (e.g. 1000000) and set priorityClassName in the payment deployment Pod template."
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy on batch developers."
      }
    ],
    "correct": "C",
    "explanation": "Kubernetes `PriorityClass` defines the scheduling priority of Pods. When high-priority Pods cannot be scheduled due to resource starvation, the Kubernetes scheduler preempts (evicts) lower-priority Pods to guarantee compute resources for critical workloads.",
    "distractors": {
      "B": "Unmanaged instance groups lack native Kubernetes pod scheduling integration.",
      "A": "Increasing max-nodes provisions new VMs over time, but does not solve immediate in-cluster pod scheduling contention during bursts.",
      "D": "IAM policies manage GCP control plane permissions, not Kubernetes in-cluster pod scheduling priorities."
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
        "text": "gcloud compute instances update prod-pg-1 --pg-flags='max_connections=500'"
      },
      {
        "letter": "B",
        "text": "SSH into the Cloud SQL instance and edit postgresql.conf directly."
      },
      {
        "letter": "C",
        "text": "bq update --flags='max_connections=500' prod-pg-1"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch prod-pg-1 --database-flags=max_connections=500,shared_buffers=1048576"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --database-flags=<FLAG1=VAL1,FLAG2=VAL2>` applies database engine configuration parameters (such as `max_connections`, `log_output`, `autovacuum`) directly to Cloud SQL managed instances.",
    "distractors": {
      "B": "Cloud SQL is a fully managed service; direct SSH access to the underlying database host OS is not permitted.",
      "C": "`bq update` is for BigQuery dataset and table metadata.",
      "A": "`gcloud compute instances update` manages Compute Engine VMs, not Cloud SQL database engine flags."
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
        "text": "type: ExternalName with a public DNS host."
      },
      {
        "letter": "C",
        "text": "type: LoadBalancer with an external IP on every microservice."
      },
      {
        "letter": "D",
        "text": "type: hostPort."
      }
    ],
    "correct": "A",
    "explanation": "In GKE, the standard best practice when using GKE Ingress is `type: ClusterIP` paired with Network Endpoint Groups (`cloud.google.com/neg: '{\"ingress\": true}'`). The Google Cloud Load Balancer routes traffic directly to individual Pod IPs (container-native routing), bypassing intermediate node kube-proxy hops.",
    "distractors": {
      "C": "Deploying `type: LoadBalancer` on every microservice creates separate L4 Network Load Balancers with separate public IPs and high cost.",
      "B": "`ExternalName` maps a Service to an external DNS CNAME, not internal Pod selector backends.",
      "D": "`hostPort` binds ports directly to worker node host network namespaces, creating port conflict scheduling limitations."
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
        "text": "Create a VPC route in Cloud Router for /api/*."
      },
      {
        "letter": "B",
        "text": "Configure Cloud DNS with a path-based CNAME record."
      },
      {
        "letter": "C",
        "text": "Write a bash script running in cron to redirect traffic."
      },
      {
        "letter": "D",
        "text": "Create a dispatch.yaml file mapping '*/api/*' to service 'mobile-api', and deploy it using gcloud app deploy dispatch.yaml."
      }
    ],
    "correct": "D",
    "explanation": "App Engine uses `dispatch.yaml` to configure path and domain routing across multiple microservices. Running `gcloud app deploy dispatch.yaml` registers the URL routing rules at the App Engine routing layer.",
    "distractors": {
      "C": "Cron scripts cannot intercept real-time HTTP client requests.",
      "A": "Cloud Router operates at Layer 3/IP routing and does not evaluate HTTP URL paths.",
      "B": "Cloud DNS maps domain names to IP addresses; DNS does not support HTTP URL path-based routing."
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
        "text": "gcloud compute routers create serverless-conn --network=corp-vpc"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create serverless-conn --image-family=serverless-vpc"
      },
      {
        "letter": "D",
        "text": "gsutil notification create -f vpc gs://serverless-conn"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute networks vpc-access connectors create <NAME> --region=<REGION> --network=<NETWORK> --range=<CIDR>` creates a Serverless VPC Access connector, allowing serverless runtimes (Cloud Functions, Cloud Run, App Engine) to route private traffic into a VPC network.",
    "distractors": {
      "C": "`compute instances create` does not create managed Serverless VPC Access connectors.",
      "D": "`gsutil notification` is for Cloud Storage object notifications.",
      "B": "Cloud Router provides dynamic BGP routing for VPN/Interconnect, not serverless container VPC ingress."
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
        "text": "Set the node pool autoscaler target CPU to 50%."
      },
      {
        "letter": "B",
        "text": "Write a bash script that scales the deployment via kubectl scale in a continuous while loop."
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Storage bucket lifecycle policy."
      },
      {
        "letter": "D",
        "text": "Deploy the Custom Metrics Stackdriver Adapter (or Prometheus Adapter) in the cluster, and create an HPA manifest using apiVersion: autoscaling/v2 specifying metric type 'Pods' or 'External' with target value 50."
      }
    ],
    "correct": "D",
    "explanation": "Kubernetes HPA (`autoscaling/v2`) supports custom and external metrics. Deploying the Custom Metrics Adapter allows HPA to query Prometheus or Cloud Monitoring metrics and calculate required replica counts dynamically based on custom application queues.",
    "distractors": {
      "B": "Continuous shell loops on developer workstations are fragile, unmonitored, and lack atomic cluster reconciliation.",
      "C": "Cloud Storage lifecycle policies manage object retention, not Kubernetes Pod autoscaling.",
      "A": "Target CPU on node pools scales VM node count based on CPU, not Pod replica count based on custom message queue depth."
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
        "text": "Connect using standard telnet over port 23."
      },
      {
        "letter": "B",
        "text": "Mount the VM boot disk to your local workstation using Cloud Storage FUSE."
      },
      {
        "letter": "C",
        "text": "Connect using gcloud compute ssh backend-worker-1 --zone=us-central1-a --tunnel-through-iap, ensuring you have roles/iap.tunnelResourceAccessor and an ingress firewall rule allows port 22 from 35.235.240.0/20."
      },
      {
        "letter": "D",
        "text": "Assign an ephemeral public IP address to the instance and connect directly over the public internet."
      }
    ],
    "correct": "C",
    "explanation": "Identity-Aware Proxy (IAP) TCP forwarding allows authorized users to establish encrypted SSH connections to private instances with no public IPs over Google Cloud's edge infrastructure. Traffic originates from `35.235.240.0/20` and requires `roles/iap.tunnelResourceAccessor`.",
    "distractors": {
      "B": "Cloud Storage FUSE does not mount active Compute Engine VM root boot disks.",
      "D": "Assigning public IPs violates security compliance policies and increases attack surface.",
      "A": "Telnet is unencrypted plaintext and transmits passwords in the clear."
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
        "text": "gcloud container clusters update my-cluster --disable-addons=HttpLoadBalancing"
      },
      {
        "letter": "C",
        "text": "kubectl delete nodes --all && kubectl create nodes --version=1.28"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances delete $(kubectl get nodes -o name)"
      }
    ],
    "correct": "A",
    "explanation": "GKE node pool upgrades are initiated with `gcloud container clusters upgrade <CLUSTER> --node-pool=<POOL> --cluster-version=<VERSION>`. GKE uses configured surge upgrade parameters (`max-surge` and `max-unavailable`) to gracefully cordon, drain, and replace worker nodes sequentially.",
    "distractors": {
      "D": "Deleting raw Compute Engine VM nodes abruptly disrupts Kubernetes state and causes ungraceful pod termination.",
      "B": "Disabling load balancing addons disrupts external traffic ingress without performing node upgrades.",
      "C": "Deleting all nodes simultaneously causes catastrophic application downtime."
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
        "text": "Attach 6 additional persistent disks to increase CPU capacity."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances set-machine-type on the live running instance without stopping it."
      },
      {
        "letter": "D",
        "text": "Delete the VM and recreate it from a fresh OS image."
      }
    ],
    "correct": "A",
    "explanation": "To change the machine type of a standalone Compute Engine instance, the instance must first be in the `TERMINATED` (stopped) state. You stop the VM, execute `gcloud compute instances set-machine-type`, and start the VM.",
    "distractors": {
      "C": "Compute Engine does not support dynamic live-resizing of machine types while a VM is active/running.",
      "D": "Deleting the VM destroys installed software, local state, and assigned internal IP configurations.",
      "B": "Attaching persistent disks adds storage capacity, not vCPU compute cores."
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
        "text": "Run the query with LIMIT 10 appended."
      },
      {
        "letter": "B",
        "text": "Run the query on a Cloud SQL database instead."
      },
      {
        "letter": "C",
        "text": "Export the data to Cloud Storage and check the file size in the console."
      },
      {
        "letter": "D",
        "text": "Execute the query using the bq CLI with the --dry_run flag (e.g. bq query --dry_run --use_legacy_sql=false 'SELECT ...')."
      }
    ],
    "correct": "D",
    "explanation": "BigQuery dry-run queries validate SQL query syntax and calculate the exact number of bytes scanned without executing the query, creating jobs, or consuming on-demand query quota/budget.",
    "distractors": {
      "B": "Cloud SQL is a relational database and cannot execute BigQuery petabyte-scale analytics.",
      "C": "Exporting data runs an extraction job and does not estimate the column-pruned scan size of an arbitrary SQL query.",
      "A": "In columnar storage databases like BigQuery, `LIMIT 10` does NOT reduce scanned bytes for full table scans."
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
        "text": "logName=\"all\" AND error=true"
      },
      {
        "letter": "B",
        "text": "SELECT * FROM logs WHERE type='vm' AND status=500"
      },
      {
        "letter": "C",
        "text": "resource.type=\"gce_instance\" AND severity>=(ERROR) AND timestamp >= \"2026-08-20T20:00:00Z\""
      },
      {
        "letter": "D",
        "text": "gcloud compute instances list --filter='errors'"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Logging Query Language uses structured key-value expressions. Filtering by `resource.type=\"gce_instance\"` and `severity>=(ERROR)` queries all error and emergency severity logs generated by Compute Engine VM guest agents and platform services.",
    "distractors": {
      "B": "Cloud Logging Explorer uses logging filter expressions, not raw SQL SELECT statements (unless using BigQuery Log Analytics).",
      "D": "`compute instances list` displays instance metadata, not application stderr log streams.",
      "A": "`logName=\"all\"` is invalid filter syntax."
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
        "text": "gcloud sql instances restore prod-db --backup-id=1692540000000"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks restore prod-db --snapshot=1692540000000"
      },
      {
        "letter": "C",
        "text": "gcloud sql backups restore 1692540000000 --restore-instance=prod-db"
      },
      {
        "letter": "D",
        "text": "bq restore prod-db:1692540000000"
      }
    ],
    "correct": "C",
    "explanation": "Restoring a specific Cloud SQL backup to an instance uses `gcloud sql backups restore <BACKUP_ID> --restore-instance=<TARGET_INSTANCE>`.",
    "distractors": {
      "D": "`bq restore` is for BigQuery historical table snapshots, not Cloud SQL instances.",
      "A": "`sql instances restore` is invalid syntax; backups are restored via `sql backups restore`.",
      "B": "Compute Engine disk restore does not manage relational database state and transaction logs."
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
        "text": "Delete the _Default log sink completely."
      },
      {
        "letter": "B",
        "text": "Create an Exclusion Filter on the _Default log sink with filter expression: resource.type=\"http_load_balancer\" AND httpRequest.status=200 AND httpRequest.userAgent=\"GoogleHC/1.0\"."
      },
      {
        "letter": "C",
        "text": "Turn off VPC logging globally across all subnets."
      },
      {
        "letter": "D",
        "text": "Disable the Load Balancer health checks."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Logging sinks (like `_Default`) allow creating Exclusion Filters (`--exclusion`). Excluded logs are discarded before ingestion and storage, incurring zero ingestion charges while allowing non-excluded logs to be retained.",
    "distractors": {
      "D": "Disabling health checks prevents the load balancer from detecting instance failures, causing severe customer outages.",
      "C": "Disabling VPC logging globally destroys network visibility and fails security audits.",
      "A": "Deleting the `_Default` sink stops all standard logs from being ingested, blinding operations teams."
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
        "text": "gcloud app deploy v1/app.yaml --no-promote"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances restart --service=appengine"
      },
      {
        "letter": "C",
        "text": "gcloud app services set-traffic default --splits=v1=1 --migrate"
      },
      {
        "letter": "D",
        "text": "gcloud app versions delete v2 --force"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app services set-traffic <SERVICE> --splits=<VERSION>=1 --migrate` instantly routes 100% of incoming requests back to the specified stable version using App Engine traffic migration.",
    "distractors": {
      "D": "Deleting the actively serving version `v2` while it receives 100% traffic can cause dropped requests before routing adjusts.",
      "B": "`compute instances restart` does not manage App Engine serverless service version traffic routing.",
      "A": "Re-deploying an old codebase takes several minutes, while `set-traffic` changes routing in milliseconds."
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
        "text": "bq mk --snapshot database-boot-disk"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks snapshot database-boot-disk --zone=us-central1-b --snapshot-names=snapshot-pre-upgrade-db"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances snapshot database-host-1 --name=snapshot-pre-upgrade-db"
      },
      {
        "letter": "D",
        "text": "gcloud storage objects copy database-boot-disk gs://my-snapshots/"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute disks snapshot <DISK_NAME> --zone=<ZONE> --snapshot-names=<SNAPSHOT_NAME>` creates a point-in-time incremental backup snapshot of the specified persistent disk.",
    "distractors": {
      "D": "Cloud Storage copy cannot read raw active persistent disk block storage devices directly.",
      "A": "`bq mk` manages BigQuery tables, not Compute Engine block persistent disks.",
      "C": "`compute instances snapshot` is non-existent syntax."
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
        "text": "A cron script on an e2-micro VM running curl in a loop."
      },
      {
        "letter": "B",
        "text": "A VPC egress firewall rule blocking non-200 packets."
      },
      {
        "letter": "C",
        "text": "Cloud Monitoring Uptime Check configured for HTTPS on hostname store.example.com with path /healthz, check frequency 1 minute, and attached to an Alerting Policy with PagerDuty notification channel."
      },
      {
        "letter": "D",
        "text": "Cloud Trace latency sampling."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Monitoring Uptime Checks probe public and private endpoints from multiple geographic locations worldwide, testing availability and HTTP status codes, and seamlessly integrating with Cloud Monitoring Alerting Policies and notification channels (PagerDuty, Slack, Email).",
    "distractors": {
      "A": "Self-hosted curl loops provide single-point monitoring, lack multi-region geographic probes, and require server maintenance.",
      "B": "Firewall rules inspect IP/port headers, not HTTP application response codes.",
      "D": "Cloud Trace samples distributed request execution traces, but does not provide active periodic synthetic health probing."
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
        "text": "Run gcloud container clusters update --rollback=api-deployment."
      },
      {
        "letter": "C",
        "text": "Run kubectl delete deployment api-deployment && kubectl create deployment api-deployment."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances reset-all."
      }
    ],
    "correct": "A",
    "explanation": "`kubectl rollout history deployment <NAME>` displays past deployment revisions, and `kubectl rollout undo deployment <NAME>` rolls back the workload to the previous revision instantly without recreating the deployment object.",
    "distractors": {
      "C": "Deleting and recreating the deployment causes downtime and destroys deployment revision history.",
      "B": "`clusters update --rollback` is non-existent CLI syntax.",
      "D": "Resetting VMs restarts worker node hardware, but does not rollback Kubernetes deployment container images."
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
        "text": "A standard Zonal Persistent Disk Snapshot of the boot disk only."
      },
      {
        "letter": "C",
        "text": "A Cloud Storage bucket containing tar.gz archives of /etc."
      },
      {
        "letter": "D",
        "text": "An App Engine version configuration."
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine Machine Images capture all configuration, metadata, permissions, and multi-disk persistent storage data of a VM in a single comprehensive resource, making them superior to single-disk snapshots for complete system duplication and backup.",
    "distractors": {
      "D": "App Engine manages serverless web runtimes, not Compute Engine virtual machine images.",
      "B": "A single persistent disk snapshot only captures one disk and omits secondary disks, instance metadata, and network tags.",
      "C": "Tar archives of `/etc` do not preserve partition tables, bootloaders, or attached disk storage blocks."
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
        "text": "Cloud DNS Analytics."
      },
      {
        "letter": "B",
        "text": "Google Cloud Bigtable."
      },
      {
        "letter": "C",
        "text": "Google Cloud Error Reporting."
      },
      {
        "letter": "D",
        "text": "Cloud Billing Reports."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Error Reporting automatically aggregates, counts, and groups unhandled runtime exceptions and stack traces from Cloud Logging (Java, Python, Node.js, Go, PHP, Ruby, .NET) into a centralized dashboard with notification integrations.",
    "distractors": {
      "D": "Cloud Billing reports monetary infrastructure spend, not application software crash stack traces.",
      "A": "Cloud DNS manages domain name resolution, not application runtime errors.",
      "B": "Cloud Bigtable is a NoSQL wide-column database and does not provide exception aggregation dashboards."
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
        "text": "gcloud compute disks resize prod-mysql-db --size=500GB"
      },
      {
        "letter": "C",
        "text": "bq update --storage_gb=500 prod-mysql-db"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restart prod-mysql-db --expand-disk=500"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --storage-size=<SIZE_IN_GB>` increases the persistent disk capacity of a Cloud SQL instance online without downtime. Note that Cloud SQL storage can only be scaled up, never down.",
    "distractors": {
      "D": "`--expand-disk` is not a valid flag on `gcloud sql instances restart`.",
      "B": "Underlying Cloud SQL disks are managed by Google and cannot be directly targeted with `gcloud compute disks resize`.",
      "C": "`bq update` manages BigQuery tables, not Cloud SQL instances."
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
        "text": "gcloud compute ssh web-app-8594-xyz"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters ssh web-app-8594-xyz"
      },
      {
        "letter": "D",
        "text": "kubectl attach web-app-8594-xyz --restart"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl exec -it <POD_NAME> -- <COMMAND>` opens an interactive TTY terminal session directly inside the running container namespace, allowing developers to execute diagnostic commands in real time.",
    "distractors": {
      "C": "`gcloud container clusters ssh` is not a valid gcloud command.",
      "B": "`gcloud compute ssh` connects to the underlying VM host operating system, not the container namespace inside the Pod.",
      "D": "`kubectl attach` connects to the main container stdout stream rather than spawning a new interactive shell process."
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
        "text": "Add individual developer SSH public keys to the project-wide metadata manually."
      },
      {
        "letter": "C",
        "text": "Disable Compute Engine networking."
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy on port 22."
      }
    ],
    "correct": "A",
    "explanation": "Enabling OS Login (`enable-oslogin=TRUE`) links Linux user accounts and SSH keys directly to Google Cloud Identity accounts and IAM roles (e.g. `roles/compute.osAdminLogin`, `roles/compute.osLogin`), enforcing central revocation, 2FA, and eliminating unmanaged static SSH keys.",
    "distractors": {
      "D": "Denying port 22 completely blocks all SSH management traffic.",
      "C": "Disabling networking breaks all instance communications and services.",
      "B": "Project-wide metadata SSH keys bypass IAM role governance and lack 2FA enforcement."
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
        "text": "gcloud compute instances delete frontend-mig"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed list-instances frontend-mig --region=us-central1"
      },
      {
        "letter": "C",
        "text": "kubectl describe healthchecks"
      },
      {
        "letter": "D",
        "text": "bq show instance_health"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed list-instances <MIG_NAME>` lists all member VM instances along with their current instance status (`RUNNING`), current action (`NONE`, `CREATING`, `RECREATING`), and their detailed health state (`HEALTHY`, `UNHEALTHY`, `TIMEOUT`).",
    "distractors": {
      "A": "Deleting the MIG causes total application outage.",
      "C": "`kubectl describe healthchecks` is invalid syntax for GCE MIGs.",
      "D": "BigQuery does not store real-time Compute Engine MIG instance health state."
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
        "text": "Run kubectl delete pods --all --force."
      },
      {
        "letter": "B",
        "text": "Run kubectl cordon gke-prod-pool-1-abc1 followed by kubectl drain gke-prod-pool-1-abc1 --ignore-daemonsets --delete-emptydir-data."
      },
      {
        "letter": "C",
        "text": "Run gcloud container clusters delete prod-cluster."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances delete gke-prod-pool-1-abc1."
      }
    ],
    "correct": "B",
    "explanation": "`kubectl cordon <NODE>` marks the node as unschedulable (preventing new pods), and `kubectl drain <NODE>` gracefully evicts existing workloads following PodDisruptionBudgets, moving them safely to other cluster nodes.",
    "distractors": {
      "C": "Deleting the cluster destroys the entire production infrastructure.",
      "D": "Deleting the VM directly terminates workloads abruptly without graceful SIGTERM shutdown or budget validation.",
      "A": "Deleting all pods across the cluster causes cluster-wide service downtime."
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
        "text": "Deploy an unmanaged traceroute VM in the public subnet."
      },
      {
        "letter": "B",
        "text": "Disable all firewall rules in both VPCs."
      },
      {
        "letter": "C",
        "text": "Delete and recreate both VPC networks."
      },
      {
        "letter": "D",
        "text": "Run a Network Management Connectivity Test (via gcloud network-management connectivity-tests create) between the source VM IP and destination database IP on port 5432."
      }
    ],
    "correct": "D",
    "explanation": "Network Intelligence Center Connectivity Tests perform static graph analysis of the VPC configuration (routes, firewalls, peerings, Cloud Routers) and dynamic live packet tracing to identify the exact firewall rule or route dropping packets.",
    "distractors": {
      "C": "Recreating networks destroys IP assignments and causes immense downtime.",
      "B": "Disabling firewall rules creates catastrophic security vulnerabilities.",
      "A": "Standard traceroute does not analyze internal GCP SDN control plane firewall drop states accurately."
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
        "text": "storage.googleapis.com/storage/object_count"
      },
      {
        "letter": "B",
        "text": "logging.googleapis.com/byte_count"
      },
      {
        "letter": "C",
        "text": "cloudsql.googleapis.com/database/cpu/utilization"
      },
      {
        "letter": "D",
        "text": "compute.googleapis.com/instance/cpu/usage_time"
      }
    ],
    "correct": "C",
    "explanation": "The official Cloud Monitoring metric for Cloud SQL instance CPU load is `cloudsql.googleapis.com/database/cpu/utilization` (fraction between 0.0 and 1.0).",
    "distractors": {
      "D": "`compute.googleapis.com/instance/cpu/usage_time` measures raw Compute Engine VMs, not managed Cloud SQL instances.",
      "A": "`storage/object_count` counts files in Cloud Storage buckets.",
      "B": "`logging/byte_count` measures log volume ingestion."
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
        "text": "SSH into the VM over public internet using port 80."
      },
      {
        "letter": "B",
        "text": "Delete the VM and recreate it from a Debian image."
      },
      {
        "letter": "C",
        "text": "Enable serial port access by setting serial-port-enable=1 in instance metadata, and connect using gcloud compute connect-to-serial-port db-server-1 --zone=us-central1-a --port=1."
      },
      {
        "letter": "D",
        "text": "Upload the VM to BigQuery for analysis."
      }
    ],
    "correct": "C",
    "explanation": "Interactive serial console access (`serial-port-enable=1`) allows direct terminal access to the VM's serial ports (Ports 1-4) via `gcloud compute connect-to-serial-port`, enabling low-level boot diagnostics, GRUB menu interaction, and recovery of unbootable VMs.",
    "distractors": {
      "D": "BigQuery is an analytical SQL database and cannot ingest or run virtual machine kernels.",
      "B": "Deleting the VM destroys stored database data and local configuration.",
      "A": "SSH cannot connect if the operating system kernel failed to boot."
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
        "text": "Add LIMIT 10 to the subquery."
      },
      {
        "letter": "B",
        "text": "Export the data to CSV in Cloud Storage before querying."
      },
      {
        "letter": "C",
        "text": "Cluster the underlying table by the JOIN and GROUP BY keys to minimize shuffle repartitioning overhead, or rewrite the query to avoid high-cardinality CROSS JOINs."
      },
      {
        "letter": "D",
        "text": "Convert the BigQuery dataset to Cloud Datastore."
      }
    ],
    "correct": "C",
    "explanation": "High wait and compute times in BigQuery execution stages with repartitioning indicate shuffle bottlenecks and data skew caused by non-clustered join/group-by operations or Cartesian products (CROSS JOIN). Clustering the table on join keys collocates related rows and eliminates data shuffling across slots.",
    "distractors": {
      "B": "Querying raw CSV files in Cloud Storage has significantly worse performance than native Capacitor columnar storage.",
      "D": "Cloud Datastore is a transactional NoSQL database that cannot process multi-terabyte analytical joins.",
      "A": "`LIMIT` inside subqueries is evaluated after full table scans and does not eliminate join skew."
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
        "text": "gcloud compute instance-groups managed delete web-mig"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed recreate-instances web-mig --region=us-central1 --instances=web-mig-4x8z"
      },
      {
        "letter": "C",
        "text": "kubectl delete pod web-mig-4x8z"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances delete web-mig-4x8z"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed recreate-instances <MIG_NAME> --instances=<INSTANCE_LIST>` instructs the MIG control plane to stop, delete, and recreate the specified member VM instances from the current instance template.",
    "distractors": {
      "D": "Deleting the instance manually with `instances delete` causes the MIG to report an instance error before recreating.",
      "A": "Deleting the entire MIG destroys all other healthy instances and causes total application outage.",
      "C": "`kubectl delete pod` is for Kubernetes pods, not Compute Engine virtual machine instances."
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
        "text": "Run gsutil ls -lR gs://bucket/** in a daily bash script."
      },
      {
        "letter": "B",
        "text": "SSH into each storage bucket and run ls -la."
      },
      {
        "letter": "C",
        "text": "Deploy a Compute Engine instance group to crawl the buckets."
      },
      {
        "letter": "D",
        "text": "Configure Cloud Storage Insights inventory reports to automatically generate daily object metadata CSV/Parquet files in a target analysis bucket."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Insights provides managed inventory reports that deliver daily or weekly CSV or Parquet files containing comprehensive object metadata (storage class, size, timestamps, CRC32c) directly into a destination bucket for fast BigQuery analysis without incurring millions of List API charges.",
    "distractors": {
      "C": "Custom VM crawlers add compute cost and operational maintenance compared to native Storage Insights.",
      "A": "Running `gsutil ls -lR` over 50 million objects takes hours, incurs massive List API costs, and fails on network timeouts.",
      "B": "Cloud Storage buckets are object endpoints and do not support SSH shell connections."
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
        "text": "Cloud DNS Analytics."
      },
      {
        "letter": "B",
        "text": "Google Cloud Armor."
      },
      {
        "letter": "C",
        "text": "Google Cloud Profiler."
      },
      {
        "letter": "D",
        "text": "VPC Flow Logs."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Profiler is a continuous statistical code profiling tool that captures CPU and heap memory allocations across production services, rendering interactive Flame Graphs that highlight exact code functions consuming resources.",
    "distractors": {
      "D": "VPC Flow Logs inspect network IP packet headers, not application code memory allocations.",
      "A": "Cloud DNS manages domain name lookups.",
      "B": "Cloud Armor is an HTTP WAF security service for load balancers."
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
        "text": "gcloud compute instances create bigtable-node-[5-12]"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable clusters update cluster-us-central1 --instance=iot-telemetry --num-nodes=12"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances patch iot-telemetry --num-nodes=12"
      },
      {
        "letter": "D",
        "text": "cbt updatecluster cluster-us-central1 --nodes=12"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud bigtable clusters update <CLUSTER_ID> --instance=<INSTANCE_ID> --num-nodes=<COUNT>` dynamically scales the Bigtable cluster node count in seconds without restarting the cluster or interrupting streaming writes.",
    "distractors": {
      "C": "`gcloud sql` manages relational SQL databases, not Bigtable NoSQL wide-column clusters.",
      "D": "`cbt` CLI is for data and table schema operations, not cluster infrastructure node scaling.",
      "A": "Compute Engine instance creation does not attach worker nodes to Cloud Bigtable clusters."
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
        "text": "gcloud compute instances update --count-errors"
      },
      {
        "letter": "B",
        "text": "bq mk --metric payment_failure_count"
      },
      {
        "letter": "C",
        "text": "kubectl autoscale deployment --metric=payment_failure"
      },
      {
        "letter": "D",
        "text": "gcloud logging metrics create payment_failure_count --description='Count of payment failure errors' --log-filter='textPayload:\"PAYMENT_FAILURE\"'"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud logging metrics create <METRIC_NAME> --log-filter=<FILTER>` creates a Cloud Logging Log-Based Metric, turning matching log lines into numerical metrics that appear in Cloud Monitoring for charting and alerting.",
    "distractors": {
      "A": "`--count-errors` is not a valid Compute Engine flag.",
      "B": "`bq mk` is for BigQuery database resources.",
      "C": "`kubectl autoscale` configures Pod autoscaling, not Cloud Monitoring metric definitions."
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
        "text": "Run bq cp data-volume-1 server-new."
      },
      {
        "letter": "B",
        "text": "Run gsutil mv /dev/sdb server-new:/dev/sdb."
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances detach-disk server-old --disk=data-volume-1 --zone=us-central1-a followed by gcloud compute instances attach-disk server-new --disk=data-volume-1 --zone=us-central1-a."
      },
      {
        "letter": "D",
        "text": "Run gcloud compute disks delete data-volume-1 && gcloud compute disks create data-volume-1."
      }
    ],
    "correct": "C",
    "explanation": "Moving a Persistent Disk between VMs in the same zone involves detaching it from the source instance (`gcloud compute instances detach-disk`) and attaching it to the target instance (`gcloud compute instances attach-disk`).",
    "distractors": {
      "B": "gsutil does not copy raw Linux block device nodes over the network.",
      "A": "`bq cp` copies BigQuery tables, not Compute Engine persistent disks.",
      "D": "Deleting the disk destroys all 500 GB of stored report data permanently."
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
        "text": "Edit ~/.kube/config manually and paste your Google Cloud password."
      },
      {
        "letter": "B",
        "text": "SSH into the GKE master node directly."
      },
      {
        "letter": "C",
        "text": "Run gcloud container clusters get-credentials prod-cluster --region=us-central1."
      },
      {
        "letter": "D",
        "text": "Run kubectl config set-cluster prod-cluster --server=http://localhost:8080."
      }
    ],
    "correct": "C",
    "explanation": "`gcloud container clusters get-credentials <CLUSTER_NAME> --region=<REGION>` retrieves cluster control plane endpoint information and generates an authentication token in `~/.kube/config`, configuring `kubectl` to communicate with the GKE cluster.",
    "distractors": {
      "A": "Kubernetes uses OAuth tokens and certs; hardcoding passwords into kubeconfig is invalid and insecure.",
      "D": "Pointing server to localhost:8080 points to your local machine, where no Kubernetes API server is running.",
      "B": "GKE master nodes are fully managed by Google and do not permit direct SSH access."
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
        "text": "kubectl cordon worker-mig-7abc"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed abandon-instances worker-mig --region=us-central1 --instances=worker-mig-7abc"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete-instances worker-mig --instances=worker-mig-7abc"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances stop worker-mig-7abc"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed abandon-instances <MIG_NAME> --instances=<INSTANCE>` removes the VM from the Managed Instance Group without deleting the underlying VM. The instance becomes a standalone VM that can be inspected without being terminated or auto-healed by the MIG.",
    "distractors": {
      "A": "`kubectl cordon` is for Kubernetes nodes, not GCE VM instance groups.",
      "C": "`delete-instances` deletes the VM immediately, destroying the memory state needed for forensics.",
      "D": "Stopping the instance causes the MIG auto-healer to detect an unhealthy VM and immediately recreate/delete it."
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
        "text": "kubectl scale node-pool worker-pool --nodes=10"
      },
      {
        "letter": "B",
        "text": "bq update --nodes=10 worker-pool"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances resize worker-pool --size=10"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters resize prod-cluster --node-pool=worker-pool --num-nodes=10 --region=us-central1"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud container clusters resize <CLUSTER_NAME> --node-pool=<POOL_NAME> --num-nodes=<COUNT>` manually scales the number of VM worker nodes in the specified GKE node pool.",
    "distractors": {
      "A": "`kubectl scale` scales workload objects (Deployments, StatefulSets), not infrastructure node pools.",
      "C": "`compute instances resize` is non-existent CLI syntax.",
      "B": "BigQuery (`bq`) does not manage Kubernetes cluster infrastructure."
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
        "text": "bq update --legal_hold contract-2026-xyz"
      },
      {
        "letter": "B",
        "text": "gcloud storage objects update gs://customer-contracts-vault/contract-2026-xyz.pdf --temporary-hold"
      },
      {
        "letter": "C",
        "text": "gsutil rm -d gs://customer-contracts-vault/contract-2026-xyz.pdf"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks snapshot create --hold gs://customer-contracts-vault"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage supports Temporary Holds (`--temporary-hold`) and Event-Based Holds. Placing a temporary hold on an object prevents it from being deleted or overwritten until an administrator explicitly removes the hold.",
    "distractors": {
      "A": "BigQuery does not manage Cloud Storage PDF blob legal holds.",
      "C": "`gsutil rm` deletes objects, causing catastrophic loss of legal evidence.",
      "D": "Compute Engine disk snapshots do not place legal holds on Cloud Storage objects."
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
        "text": "kubectl delete pod --version=v1-beta"
      },
      {
        "letter": "C",
        "text": "bq update --stop-service staging-api"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances stop appengine-v1-beta"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud app versions stop <VERSION> --service=<SERVICE>` stops an App Engine version from serving requests and releases underlying Compute Engine VM instances (for Flexible environment), stopping compute charges while preserving the version configuration.",
    "distractors": {
      "B": "Kubernetes commands do not manage App Engine serverless service versions.",
      "C": "`bq update` manages BigQuery datasets, not App Engine services.",
      "D": "Underlying App Engine Flexible VMs are managed by the App Engine control plane; manual VM stops will cause App Engine to recreate them."
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
        "text": "gcloud compute instances reset-all --group=worker-mig"
      },
      {
        "letter": "B",
        "text": "kubectl rollout restart daemonset worker-mig"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete worker-mig"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed rolling-action restart worker-mig --region=us-central1 --max-unavailable=1"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute instance-groups managed rolling-action restart <MIG_NAME> --max-unavailable=<N>` performs a controlled, rolling reboot of all member instances in the MIG, restarting VMs in small batches while maintaining minimum required serving capacity.",
    "distractors": {
      "A": "`instances reset-all` is non-existent CLI syntax.",
      "C": "Deleting the MIG destroys the group and terminates all processing.",
      "B": "`kubectl rollout restart` manages Kubernetes workloads, not Compute Engine virtual machine instance groups."
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
        "text": "gcloud compute instances create-dashboard microservices-dashboard.json"
      },
      {
        "letter": "B",
        "text": "gcloud monitoring dashboards create --config-from-file=microservices-dashboard.json"
      },
      {
        "letter": "C",
        "text": "bq mk --dashboard=microservices-dashboard.json"
      },
      {
        "letter": "D",
        "text": "kubectl apply -f microservices-dashboard.json"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud monitoring dashboards create --config-from-file=<FILE.json>` imports declarative JSON dashboard templates into Cloud Monitoring, enabling Dashboards-as-Code practices across projects.",
    "distractors": {
      "D": "`kubectl apply` applies Kubernetes manifests, not Google Cloud Monitoring JSON dashboard definitions.",
      "C": "BigQuery (`bq`) does not manage Cloud Monitoring dashboards.",
      "A": "`compute instances create-dashboard` is invalid syntax."
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
        "text": "cat /var/log/messages | grep oom"
      },
      {
        "letter": "B",
        "text": "kubectl get nodes -o yaml"
      },
      {
        "letter": "C",
        "text": "kubectl describe pod [POD_NAME] --namespace=prod"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances list --filter='oom'"
      }
    ],
    "correct": "C",
    "explanation": "`kubectl describe pod <POD_NAME>` inspects container state details. Under the `Last State: Terminated` section, it explicitly shows `Reason: OOMKilled` and `Exit Code: 137`, indicating that the container exceeded its configured `resources.limits.memory` and was terminated by the Linux cgroup killer.",
    "distractors": {
      "D": "`instances list --filter='oom'` is invalid; VM instance status does not report container-level cgroup OOM kills.",
      "B": "`get nodes` shows worker node state, but does not display specific container pod termination reasons.",
      "A": "Running grep on a local machine does not inspect remote GKE container cgroup logs."
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
        "text": "gcloud compute instances restore-disk analytics-data-disk --snapshot=snapshot-analytics-clean"
      },
      {
        "letter": "C",
        "text": "gsutil cp gs://snapshots/snapshot-analytics-clean /dev/sda1"
      },
      {
        "letter": "D",
        "text": "bq restore snapshot-analytics-clean analytics-data-disk"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute disks create <NEW_DISK_NAME> --source-snapshot=<SNAPSHOT_NAME> --zone=<ZONE>` restores an incremental snapshot into a brand-new persistent disk volume with identical data state.",
    "distractors": {
      "D": "BigQuery (`bq`) does not manage Compute Engine persistent disk snapshots.",
      "B": "`instances restore-disk` is not a valid gcloud command.",
      "C": "Snapshots are stored internally by Compute Engine block storage, not as plain downloadable files in Cloud Storage."
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
        "text": "bq update --storage_class=ARCHIVE corp-legal-archives"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks update gs://corp-legal-archives --type=ARCHIVE"
      },
      {
        "letter": "C",
        "text": "gcloud storage objects update gs://corp-legal-archives/** --storage-class=ARCHIVE"
      },
      {
        "letter": "D",
        "text": "gsutil delete-storage-class STANDARD gs://corp-legal-archives/**"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage objects update gs://<BUCKET>/** --storage-class=<CLASS>` updates the storage class of existing objects in-place without re-uploading or rewriting data over the network.",
    "distractors": {
      "B": "`compute disks update` manages Compute Engine block storage disks, not Cloud Storage object buckets.",
      "A": "BigQuery (`bq`) does not manage Cloud Storage bucket object storage classes.",
      "D": "`gsutil delete-storage-class` is non-existent CLI syntax."
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
        "text": "Cloud Billing Dashboard."
      },
      {
        "letter": "C",
        "text": "BigQuery Slot Analyzer."
      },
      {
        "letter": "D",
        "text": "Cloud Storage Transfer Service."
      }
    ],
    "correct": "A",
    "explanation": "Network Topology in Network Intelligence Center provides real-time visualization of your global virtual network infrastructure, overlaying live network performance metrics (traffic volume, latency, packet loss percentage) across regions, zones, VPCs, and hybrid connections.",
    "distractors": {
      "B": "Cloud Billing reports monetary charges, not live network packet loss or inter-region latency.",
      "C": "BigQuery Slot Analyzer profiles SQL query compute slot utilization.",
      "D": "Cloud Storage Transfer Service manages bulk object file transfers between buckets."
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
        "text": "gcloud compute instances update order-service --threads=80"
      },
      {
        "letter": "B",
        "text": "kubectl autoscale deployment order-service --concurrency=80"
      },
      {
        "letter": "C",
        "text": "gcloud run services update order-service --region=us-central1 --max-instances=80"
      },
      {
        "letter": "D",
        "text": "gcloud run services update order-service --region=us-central1 --concurrency=80"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud run services update <SERVICE> --concurrency=<COUNT>` configures container concurrency (number of maximum simultaneous requests routed to a single container instance). Increasing concurrency from 1 to 80 optimizes container utilization, reduces cold starts, and lowers cloud spend.",
    "distractors": {
      "B": "`kubectl autoscale` does not configure Cloud Run managed serverless services.",
      "C": "`--max-instances=80` sets the upper limit on container instance scaling, not the concurrent request capacity per instance.",
      "A": "`compute instances update` manages Compute Engine VMs, not Cloud Run serverless services."
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
        "text": "gcloud compute instances set-maintenance prod-db-1 --day=SUN"
      },
      {
        "letter": "B",
        "text": "gcloud app deploy maintenance.yaml"
      },
      {
        "letter": "C",
        "text": "bq update --maintenance_schedule=SUN_02 prod-db-1"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-hour=2"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --maintenance-window-day=<DAY> --maintenance-window-hour=<UTC_HOUR>` restricts automated platform maintenance and security updates to the specified day and hour window, preventing disruptions during peak business hours.",
    "distractors": {
      "A": "`compute instances set-maintenance` is non-existent CLI syntax.",
      "B": "App Engine maintenance.yaml is non-existent.",
      "C": "BigQuery (`bq`) does not manage Cloud SQL instance maintenance schedules."
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
        "text": "bq update --lock-dataset sec-archive-vault"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks snapshot lock gs://sec-archive-vault"
      },
      {
        "letter": "D",
        "text": "gsutil rm -r gs://sec-archive-vault"
      }
    ],
    "correct": "A",
    "explanation": "Locking a retention policy (`--lock-retention-policy`) permanently cements the bucket's retention period. Once locked, the policy cannot be deleted, removed, or reduced in duration by any user or IAM role, guaranteeing immutable WORM (Write Once, Read Many) compliance.",
    "distractors": {
      "B": "BigQuery (`bq`) does not manage Cloud Storage bucket lock policies.",
      "D": "`gsutil rm` attempts to delete the bucket, which is rejected on locked buckets.",
      "C": "Compute Engine disk snapshot lock does not manage Cloud Storage WORM compliance buckets."
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
        "text": "logging.googleapis.com/byte_count."
      },
      {
        "letter": "B",
        "text": "compute.googleapis.com/instance/network/sent_bytes_count (and instance/network/dropped_packets_count)."
      },
      {
        "letter": "C",
        "text": "storage.googleapis.com/storage/object_count."
      },
      {
        "letter": "D",
        "text": "bigquery.googleapis.com/query/scanned_bytes."
      }
    ],
    "correct": "B",
    "explanation": "Compute Engine network bandwidth is capped per VM based on vCPU count. Monitoring `compute.googleapis.com/instance/network/sent_bytes_count` and `instance/network/dropped_packets_count` identifies egress bandwidth throttling when throughput hits the machine type's network limits.",
    "distractors": {
      "A": "`logging/byte_count` measures log volume ingestion rate.",
      "D": "`bigquery/query/scanned_bytes` measures data scanned by BigQuery analytical queries.",
      "C": "`storage/object_count` counts stored files in Cloud Storage."
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
        "text": "Set the autoscaling profile to balanced."
      },
      {
        "letter": "C",
        "text": "Disable the Cluster Autoscaler."
      },
      {
        "letter": "D",
        "text": "Deploy an HPA on the kube-system namespace."
      }
    ],
    "correct": "A",
    "explanation": "GKE Cluster Autoscaler supports two profiles: `balanced` (default, balances scale-down speed with avoiding unnecessary evictions) and `optimize-utilization` (aggressively prioritizes bin packing and scale-down speed, evicting pods rapidly to shut down idle nodes and maximize cost savings).",
    "distractors": {
      "B": "`balanced` is the default conservative profile that delays node removals to prevent pod disruption.",
      "D": "HPA in `kube-system` does not configure cluster worker node autoscaling profile behaviors.",
      "C": "Disabling the autoscaler prevents nodes from scaling down completely, driving up costs."
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
        "text": "gcloud compute disks snapshot warehouse.customer_master"
      },
      {
        "letter": "B",
        "text": "bq cp --snapshot warehouse.customer_master warehouse.customer_master_snapshot_20260820"
      },
      {
        "letter": "C",
        "text": "gsutil cp gs://bq-data/master gs://bq-data/backup"
      },
      {
        "letter": "D",
        "text": "bq export warehouse.customer_master gs://my-backups/customer.csv"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery table snapshots (`bq cp --snapshot <SOURCE_TABLE> <SNAPSHOT_TABLE>`) create instant, zero-byte incremental snapshots of a table. Storage costs only accrue for data rows that are subsequently modified or deleted in the base table.",
    "distractors": {
      "A": "`compute disks snapshot` is for Compute Engine persistent disks, not BigQuery tables.",
      "C": "`gsutil cp` does not operate on internal BigQuery storage structures.",
      "D": "Exporting full tables to CSV in Cloud Storage takes time, incurs extraction compute, and doubles storage charges."
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
        "text": "gcloud compute instances stop api-gateway-1 && gcloud compute instances set-machine-type api-gateway-1 --metadata=..."
      },
      {
        "letter": "B",
        "text": "gcloud storage objects update gs://api-gateway-1 --metadata=..."
      },
      {
        "letter": "C",
        "text": "kubectl annotate node api-gateway-1 environment=production"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances add-metadata api-gateway-1 --zone=us-central1-b --metadata=environment=production,release_version=3.2"
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute instances add-metadata <VM_NAME> --metadata=<KEY=VALUE,...>` updates the instance's metadata dictionary online without stopping or rebooting the virtual machine.",
    "distractors": {
      "A": "Stopping the VM is completely unnecessary for metadata updates.",
      "B": "Cloud Storage objects are not Compute Engine virtual machines.",
      "C": "`kubectl annotate` is for Kubernetes nodes, not standalone Compute Engine VM metadata."
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
        "text": "gcloud compute routers delete nat-router"
      },
      {
        "letter": "C",
        "text": "SELECT * FROM nat_logs WHERE status='error'"
      },
      {
        "letter": "D",
        "text": "resource.type=\"gce_instance\" AND severity=DEBUG"
      }
    ],
    "correct": "A",
    "explanation": "When Cloud NAT logging is enabled, dropped outbound connections caused by source port exhaustion are logged under `resource.type=\"nat_gateway\"` with `jsonPayload.allocation_status=\"DROPPED\"`.",
    "distractors": {
      "B": "Deleting the router terminates all outbound internet connectivity for all private VMs.",
      "D": "`gce_instance` logs with DEBUG severity do not specifically isolate Cloud NAT gateway packet drops.",
      "C": "Cloud Logging filter syntax is not raw SQL (unless using Log Analytics)."
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
        "text": "gcloud compute disks update gs://finance-records-vault --kms-key=key-v2"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://finance-records-vault --default-encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2"
      },
      {
        "letter": "C",
        "text": "bq update --kms_key=key-v2 finance-records-vault"
      },
      {
        "letter": "D",
        "text": "gsutil set-kms-key gs://finance-records-vault --key=key-v2"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud storage buckets update <BUCKET> --default-encryption-key=<KMS_KEY_RESOURCE_ID>` sets Customer-Managed Encryption Keys (CMEK) as the default encryption mechanism for all future objects uploaded to the bucket.",
    "distractors": {
      "A": "`compute disks update` is for Compute Engine persistent disks, not Cloud Storage buckets.",
      "C": "`bq update` is for BigQuery datasets and tables.",
      "D": "`gsutil set-kms-key` is non-existent syntax."
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
        "text": "kubectl delete pvc db-data-pvc --force"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks describe db-data-pvc"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters restart prod-cluster"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl describe pvc <PVC_NAME>` reveals the detailed lifecycle status of a PersistentVolumeClaim, including dynamic provisioner error messages (e.g., quota exceeded, unsupported zone, volumeBindingMode: WaitForFirstConsumer).",
    "distractors": {
      "C": "`compute disks describe` fails if the volume provisioner has not yet created the underlying GCP disk.",
      "B": "Force-deleting the PVC deletes the volume request without identifying why provisioning failed.",
      "D": "Restarting the cluster causes unnecessary downtime and does not resolve storage provisioner issues."
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
        "text": "bq update --defer-maintenance prod-mysql-instance"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances set-maintenance prod-mysql-instance --cancel"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restart prod-mysql-instance --no-maintenance"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql maintenance-events reschedule <INSTANCE_NAME> --reschedule-type=SPECIFIC_TIME --schedule-time=<TIME>` allows administrators to reschedule or defer upcoming Cloud SQL system maintenance updates to an approved business window.",
    "distractors": {
      "B": "BigQuery (`bq`) does not manage Cloud SQL relational instances.",
      "D": "`--no-maintenance` is not a valid flag on `instances restart`.",
      "C": "`compute instances set-maintenance` does not manage Cloud SQL database maintenance schedules."
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
        "text": "kubectl apply -f vm-cronjob.yaml"
      },
      {
        "letter": "C",
        "text": "gcloud app deploy dev-schedule.yaml"
      },
      {
        "letter": "D",
        "text": "Write a python script on a dedicated VM that runs gcloud compute instances stop in crontab."
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine Instance Schedules (via `gcloud compute resource-policies create instance-schedule`) natively automate the scheduled starting and stopping of virtual machine instances using standard cron expressions with zero custom scripts or running scheduler VMs.",
    "distractors": {
      "C": "App Engine does not manage native Compute Engine VM power schedules.",
      "B": "Kubernetes CronJobs manage in-cluster pods, not native Compute Engine VM hypervisor power states.",
      "D": "Dedicated VM cron scripts incur compute overhead, require key maintenance, and are prone to single-point-of-failure outages."
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
        "text": "bq update --retention=365 logging_dataset"
      },
      {
        "letter": "C",
        "text": "gsutil retention set 365d gs://logging-default-bucket"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks update --log-retention=365"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud logging buckets update <BUCKET_ID> --location=<LOCATION> --retention-days=<DAYS>` configures the log retention period of Cloud Logging log buckets (such as `_Default` or `_Required`), extending retention from 30 days up to 3650 days (10 years).",
    "distractors": {
      "C": "`gsutil retention` is for Cloud Storage buckets, not Cloud Logging managed log buckets.",
      "D": "`compute networks update` does not manage Cloud Logging log bucket retention policies.",
      "B": "`bq update` manages BigQuery tables, not Cloud Logging log buckets."
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
        "text": "Grant primitive roles/editor at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/bigquery.admin at the project level."
      },
      {
        "letter": "C",
        "text": "Grant roles/bigquery.dataOwner on the project."
      },
      {
        "letter": "D",
        "text": "Grant roles/bigquery.dataViewer on dataset sales_dw and roles/bigquery.jobUser at the project level."
      }
    ],
    "correct": "D",
    "explanation": "Following the Principle of Least Privilege: `roles/bigquery.jobUser` at the project level allows users to run query jobs and consume project slot quota, while `roles/bigquery.dataViewer` scoped to the dataset grants read-only access to table schemas and rows without granting table deletion or schema modification rights.",
    "distractors": {
      "C": "`roles/bigquery.dataOwner` grants full control over tables and datasets, including table deletion.",
      "B": "`roles/bigquery.admin` grants full administrative control including deleting datasets and altering IAM access.",
      "A": "`roles/editor` grants broad primitive edit permissions across all GCP resources in the project."
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
        "text": "Grant roles/owner to the engineer on the project."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountKeyAdmin to the engineer."
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountUser to the engineer on the service account app-runner@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "D",
        "text": "Set the Compute Engine default service account to have primitive Editor role."
      }
    ],
    "correct": "C",
    "explanation": "To attach a service account to a Compute Engine VM or Cloud Run service, the deploying identity must possess the `roles/iam.serviceAccountUser` role on that specific service account resource (or at project level), preventing unauthorized privilege escalation.",
    "distractors": {
      "B": "`roles/iam.serviceAccountKeyAdmin` allows creating and downloading static JSON keys, which is unnecessary and creates security risk.",
      "D": "Granting Editor to the default service account violates least privilege and exposes the entire project.",
      "A": "Granting `roles/owner` gives excessive project-wide privileges violating security policy."
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
        "text": "Grant primitive roles/editor at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/secretmanager.secretAccessor to order-sa on the secret prod-db-conn."
      },
      {
        "letter": "C",
        "text": "Grant roles/secretmanager.admin at the project level."
      },
      {
        "letter": "D",
        "text": "Grant roles/secretmanager.viewer on the secret."
      }
    ],
    "correct": "B",
    "explanation": "`roles/secretmanager.secretAccessor` grants permission (`secretmanager.versions.access`) to read secret payloads and decrypt secret versions. `roles/secretmanager.viewer` only views secret metadata (names, creation times) without access to the actual secret payload.",
    "distractors": {
      "C": "`roles/secretmanager.admin` grants permission to delete, modify, and manage secrets across the entire project.",
      "D": "`roles/secretmanager.viewer` allows viewing secret metadata but explicitly DENIES reading secret payload contents.",
      "A": "`roles/editor` grants broad primitive access across all cloud resources in the project."
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
        "text": "gcloud compute roles create computeOperator --permissions=start,stop,reset"
      },
      {
        "letter": "B",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --title='Compute Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.get,compute.instances.list --stage=GA"
      },
      {
        "letter": "C",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --role=roles/compute.instanceAdmin.v1"
      },
      {
        "letter": "D",
        "text": "gcloud organizations roles create computeOperator --all-permissions"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud iam roles create <ROLE_ID> --project=<PROJECT> --permissions=<COMMA_SEPARATED_PERMISSIONS>` creates a custom IAM role containing an exact list of granular GCP API permissions, adhering strictly to least privilege.",
    "distractors": {
      "D": "`organizations roles create --all-permissions` creates an overprivileged organizational role.",
      "C": "Passing an existing predefined role name is not valid custom role creation syntax.",
      "A": "`gcloud compute roles create` is non-existent CLI syntax."
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
        "text": "Create a VPC egress firewall rule on port 443 with logging enabled."
      },
      {
        "letter": "B",
        "text": "Grant roles/logging.admin to all storage users."
      },
      {
        "letter": "C",
        "text": "Update the project's IAM Audit Config in Cloud Console or via gcloud to enable DATA_READ and DATA_WRITE log types for storage.googleapis.com."
      },
      {
        "letter": "D",
        "text": "Deploy a Cloud Function that polls bucket object metadata every 10 seconds."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Audit Logs Data Access logs are configured via the project's IAM Audit Config (`auditConfigs`). Enabling `DATA_READ` and `DATA_WRITE` for `storage.googleapis.com` generates audit records for every `objects.get`, `objects.create`, and `objects.delete` API operation.",
    "distractors": {
      "D": "Polling scripts do not capture who initiated read requests or when objects were downloaded.",
      "B": "Granting logging admin permissions gives users administrative access to log buckets, but does not enable Data Access log generation.",
      "A": "VPC firewall rules do not inspect Google Cloud control plane API invocations or generate Cloud Audit Log entries."
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
        "text": "Create an egress firewall rule blocking all traffic to 0.0.0.0/0."
      },
      {
        "letter": "B",
        "text": "Set Cloud Storage bucket permissions to public read-only."
      },
      {
        "letter": "C",
        "text": "Deploy an unmanaged proxy VM running iptables in the subnet."
      },
      {
        "letter": "D",
        "text": "Create a VPC Service Controls Service Perimeter enclosing project patient-data-prod and protecting the bigquery.googleapis.com and storage.googleapis.com services."
      }
    ],
    "correct": "D",
    "explanation": "VPC Service Controls (VPC SC) establishes security perimeters around Google-managed services (Cloud Storage, BigQuery). It blocks API requests that attempt to move data from inside the perimeter to storage resources outside the perimeter, even if the user has valid IAM permissions.",
    "distractors": {
      "A": "VPC firewall rules apply to VM-to-VM traffic, not Google Cloud API control plane calls (e.g. `gsutil cp` between GCP buckets).",
      "B": "Making buckets public causes catastrophic data leaks violating HIPAA.",
      "C": "Proxy VMs do not enforce organizational boundaries on managed GCP serverless API endpoints."
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
        "text": "Grant roles/owner to the Compute Engine default service account."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudkms.admin to the VM instance user."
      },
      {
        "letter": "D",
        "text": "Download the KMS private key and store it in instance metadata."
      }
    ],
    "correct": "A",
    "explanation": "To enable Compute Engine to encrypt and decrypt persistent disks using CMEK, Google's Compute Engine Service Agent (`service-[PROJECT_NUM]@compute-system.iam.gserviceaccount.com`) must be granted `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the specific KMS CryptoKey.",
    "distractors": {
      "D": "Cloud KMS private keys cannot be downloaded; storing keys in metadata violates security compliance.",
      "B": "Granting Owner to the default service account gives excessive project permissions and does not grant KMS key access to the system service agent.",
      "C": "KMS admin permissions manage key metadata, not runtime encryption/decryption by the hypervisor."
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
        "text": "Deploy an unmanaged VPN gateway VM on Compute Engine."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule in the default VPC network."
      },
      {
        "letter": "C",
        "text": "Enable Identity-Aware Proxy (IAP) on the App Engine application and bind an Access Context Manager Access Level enforcing corporate IP subnet and device policy conditions."
      },
      {
        "letter": "D",
        "text": "Store username and password hashes in Cloud Storage."
      }
    ],
    "correct": "C",
    "explanation": "Google Identity-Aware Proxy (IAP) integrated with Access Context Manager provides Context-Aware Access (Zero Trust). It evaluates user identity, device security posture (disk encryption, OS version), and network origin IP before granting access to App Engine, Cloud Run, or GKE web applications.",
    "distractors": {
      "B": "VPC firewall rules do not protect App Engine standard serverless web endpoints.",
      "D": "Storing passwords in Cloud Storage creates critical data leak risks and lacks Zero Trust integration.",
      "A": "VPN gateways require network infrastructure management and lack application-level device security verification."
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
        "text": "Grant roles/compute.instanceAdmin.v1 and set a calendar reminder on your phone to delete the role manually."
      },
      {
        "letter": "C",
        "text": "Grant primitive roles/editor at the organization level."
      },
      {
        "letter": "D",
        "text": "Create an unmanaged cron script on an e2-micro VM that deletes the user on August 25."
      }
    ],
    "correct": "A",
    "explanation": "Cloud IAM Conditions allow attaching conditional expressions to role bindings. Using `request.time < timestamp(\"2026-08-25T18:00:00Z\")` ensures that the role binding is automatically invalidated by Google IAM the moment the timestamp passes.",
    "distractors": {
      "B": "Manual reminders rely on human memory and risk forgetting to revoke elevated access.",
      "D": "Custom cron scripts add failure points, require credential maintenance, and are unnecessary.",
      "C": "Organizational Editor grants permanent, excessively broad permissions across all projects."
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
        "text": "Grant roles/owner to github-actions@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "B",
        "text": "Configure Workload Identity Federation with an OIDC Workload Identity Pool and Provider for GitHub Actions, and grant the GitHub workflow principal permissions to impersonate the deployment service account."
      },
      {
        "letter": "C",
        "text": "Generate a service account JSON key and store it in GitHub Secrets."
      },
      {
        "letter": "D",
        "text": "Make the Artifact Registry repository publicly accessible without authentication."
      }
    ],
    "correct": "B",
    "explanation": "Workload Identity Federation allows external workloads (GitHub Actions, AWS, Azure, on-premises OIDC/SAML) to exchange external credentials for short-lived Google Cloud access tokens, completely eliminating the risks of downloadable long-lived service account JSON keys.",
    "distractors": {
      "D": "Making repositories public exposes proprietary corporate container images to the world.",
      "C": "Storing long-lived JSON keys in external secret stores violates modern security mandates and risks credential leaks.",
      "A": "Granting Owner role gives excessive privileges and does not solve key management security."
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
        "text": "gsutil acl set public-read gs://corp-sensitive-docs"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks update sensitive-docs --enable-ubla"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://corp-sensitive-docs --uniform-bucket-level-access"
      },
      {
        "letter": "D",
        "text": "bq update --uniform_access corp-sensitive-docs"
      }
    ],
    "correct": "C",
    "explanation": "Uniform Bucket-Level Access (UBLA) unifies access control exclusively to Google Cloud IAM, disabling individual object ACLs and preventing accidental exposure of individual files through fine-grained ACL leaks.",
    "distractors": {
      "B": "`compute networks update` manages VPC networks, not Cloud Storage buckets.",
      "D": "BigQuery (`bq`) does not manage Cloud Storage bucket ACL settings.",
      "A": "Setting ACLs to public-read exposes all objects to the entire internet."
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
        "text": "Grant roles/compute.admin to the backend service account."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule specifying --target-service-accounts=backend-sa@corp.iam.gserviceaccount.com, --allow=tcp:8080, and appropriate source IP ranges."
      },
      {
        "letter": "C",
        "text": "Allow all traffic from 0.0.0.0/0 on port 8080 without target filters."
      },
      {
        "letter": "D",
        "text": "Create an ingress firewall rule specifying --target-tags=all."
      }
    ],
    "correct": "B",
    "explanation": "Target Service Accounts in VPC firewall rules bind traffic permissions strictly to the cryptographically verified IAM identity running on the VM instance (`--target-service-accounts`), preventing developers from bypassing firewall rules by arbitrarily modifying network tags.",
    "distractors": {
      "D": "Network tags can be modified by instance administrators, whereas service accounts provide cryptographically bound identity enforcement.",
      "C": "Opening port 8080 without target filters allows traffic to every VM in the network.",
      "A": "Granting Compute Admin role modifies control plane permissions, not packet-filtering firewall rules."
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
        "text": "Cloud DNS forwarding rules."
      },
      {
        "letter": "B",
        "text": "Cloud Armor security policy."
      },
      {
        "letter": "C",
        "text": "Cloud Sensitive Data Protection (Cloud DLP) inspection and de-identification transform job."
      },
      {
        "letter": "D",
        "text": "Compute Engine Serial Console."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Sensitive Data Protection (Cloud DLP) provides automated discovery, classification, and de-identification (masking, tokenization, hashing, date shifting) of sensitive data (credit cards, SSNs, names) in Cloud Storage, BigQuery, and Datastore.",
    "distractors": {
      "D": "Serial console provides low-level Linux VM terminal debugging.",
      "B": "Cloud Armor is an edge WAF service, not a data payload de-identification engine.",
      "A": "Cloud DNS resolves domain names to IP addresses."
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
        "text": "Set up a cron script that scans IAM policies daily."
      },
      {
        "letter": "B",
        "text": "Delete the default VPC network in all projects."
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud IAM Deny Policy at the Organization level that denies principals 'allUsers' and 'allAuthenticatedUsers' the permission 'storage.objects.get'."
      },
      {
        "letter": "D",
        "text": "Revoke Owner roles from all project administrators."
      }
    ],
    "correct": "C",
    "explanation": "Cloud IAM Deny Policies take precedence over all IAM allow grants. A Deny Policy applied at the Organization or Folder level denying `allUsers` and `allAuthenticatedUsers` specific permissions (`storage.objects.get`) prevents public access universally, overriding any project-level allow bindings.",
    "distractors": {
      "D": "Revoking Owner roles restricts project admins but does not provide declarative policy enforcement.",
      "A": "Daily scanning scripts detect violations retroactively after data may have already leaked.",
      "B": "Deleting VPC networks does not prevent public API access to Cloud Storage buckets."
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
        "text": "gcloud compute disks update --rotate-keys=90d"
      },
      {
        "letter": "B",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption && set a calendar reminder to click Rotate Key"
      },
      {
        "letter": "C",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption --rotation-period=90d --next-rotation-time=2026-11-20T00:00:00Z"
      },
      {
        "letter": "D",
        "text": "bq update --kms_rotation=90d db-key"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud kms keys create <KEY_NAME> --rotation-period=<DURATION> --next-rotation-time=<TIMESTAMP>` configures Cloud KMS to automatically generate a new primary key version on schedule, ensuring seamless cryptographic hygiene without breaking decryption of data encrypted with older versions.",
    "distractors": {
      "B": "Manual rotation reminders are error-prone and violate continuous compliance automation standards.",
      "A": "`compute disks update --rotate-keys` is non-existent syntax.",
      "D": "`bq update` manages BigQuery tables, not Cloud KMS key rotation schedules."
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
        "text": "BigQuery Data Transfer Service."
      },
      {
        "letter": "B",
        "text": "Cloud Trace."
      },
      {
        "letter": "C",
        "text": "Cloud Billing Reports."
      },
      {
        "letter": "D",
        "text": "Security Command Center (SCC)."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Security Command Center (SCC) is the centralized vulnerability and threat management platform for Google Cloud. It continuously monitors cloud asset inventory, surfaces security findings (Security Health Analytics, Event Threat Detection), and evaluates compliance posture.",
    "distractors": {
      "B": "Cloud Trace monitors application request latency.",
      "C": "Cloud Billing reports monetary charges and costs.",
      "A": "BigQuery Data Transfer Service ingests data into BigQuery tables."
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
        "text": "Create a VPC firewall rule blocking port 80."
      },
      {
        "letter": "C",
        "text": "Set Cloud Storage bucket permissions to private."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged Nginx VM to terminate SSL."
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute ssl-policies create <NAME> --min-tls-version=1.2 --profile=RESTRICTED` defines modern TLS cipher standards, which are then attached to Target HTTPS Proxies (`gcloud compute target-https-proxies update --ssl-policy=<NAME>`) to enforce TLS 1.2+ at Google's global load balancing edge.",
    "distractors": {
      "D": "Self-managed Nginx VMs lose global multi-region edge anycast termination benefits and add maintenance overhead.",
      "C": "Bucket permissions govern storage objects, not load balancer HTTPS termination protocols.",
      "B": "Firewall rules block TCP ports, but cannot enforce TLS handshake version requirements."
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
        "text": "Grant roles/iam.serviceAccountKeyAdmin to the developer."
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountTokenCreator to developer@corp.com on the service account deployer@corp.iam.gserviceaccount.com."
      },
      {
        "letter": "C",
        "text": "Grant roles/owner to developer@corp.com at the project level."
      },
      {
        "letter": "D",
        "text": "Create and download a service account JSON key file."
      }
    ],
    "correct": "B",
    "explanation": "Granting `roles/iam.serviceAccountTokenCreator` on a specific service account allows a user to generate short-lived OAuth access tokens and OIDC ID tokens to impersonate that service account (e.g. via `gcloud --impersonate-service-account`), eliminating the need for downloadable JSON keys.",
    "distractors": {
      "C": "Granting project Owner provides excessive permissions and does not follow the impersonation security pattern.",
      "D": "Creating JSON keys introduces key leak and credential theft risks.",
      "A": "`roles/iam.serviceAccountKeyAdmin` creates and deletes keys, but is not needed for keyless impersonation."
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
        "text": "Compute Engine Serial Console and OS Login."
      },
      {
        "letter": "B",
        "text": "Cloud DNS and Cloud NAT."
      },
      {
        "letter": "C",
        "text": "VPC Flow Logs and Cloud Armor."
      },
      {
        "letter": "D",
        "text": "Google Cloud Access Approval (for manual approval gates) and Access Transparency (for immutable access logs of Google personnel actions)."
      }
    ],
    "correct": "D",
    "explanation": "Access Transparency provides near real-time audit logs whenever Google administrators access customer data during support tickets. Access Approval extends this by requiring explicit customer approval before Google support engineers can access data.",
    "distractors": {
      "A": "Serial Console and OS Login govern customer user logins, not Google support staff access governance.",
      "C": "VPC Flow Logs capture network traffic, not Google internal administrative support actions.",
      "B": "Cloud DNS and Cloud NAT are networking services."
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
        "text": "Make the Cloud Storage bucket public."
      },
      {
        "letter": "C",
        "text": "Grant roles/storage.objectViewer to allUsers in IAM."
      },
      {
        "letter": "D",
        "text": "Stream the video binary data through an e2-micro VM in a custom Flask app."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Signed URLs provide cryptographic delegation of read/write access for a limited time window (e.g. 15 minutes). The client can fetch the object directly from Cloud Storage without routing heavy media streaming bandwidth through backend application servers.",
    "distractors": {
      "D": "Proxying high-bandwidth video streams through application servers bottlenecks CPU and network bandwidth.",
      "C": "Granting objectViewer to allUsers makes all files publicly readable.",
      "B": "Making the bucket public allows anyone on the internet to download copyrighted video files for free."
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
        "text": "Create an egress firewall rule on db-tier to allow port 3306."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule specifying --target-tags=db-tier, --source-tags=app-tier, and --allow=tcp:3306."
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule specifying --source-ranges=0.0.0.0/0 and --allow=tcp:3306."
      },
      {
        "letter": "D",
        "text": "Assign public IP addresses to all database instances."
      }
    ],
    "correct": "B",
    "explanation": "Using `--target-tags=db-tier` with `--source-tags=app-tier` enforces strict L3/L4 microsegmentation, ensuring that only VMs tagged with `app-tier` can establish TCP connections on port 3306 to database instances.",
    "distractors": {
      "C": "Allowing 0.0.0.0/0 exposes the database port to the entire internet.",
      "A": "Egress rules control outbound traffic leaving the VM, not inbound connection requests from the app tier.",
      "D": "Public IPs on database VMs expose databases to internet port scanners."
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
        "text": "bq update --rate_limit=100 api_table"
      },
      {
        "letter": "B",
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=IP --match-expr=\"request.path.startsWith('/api/login')\""
      },
      {
        "letter": "C",
        "text": "gcloud logging sinks create rate-limit-sink cloudarmor.googleapis.com/api"
      },
      {
        "letter": "D",
        "text": "gcloud compute firewall-rules create limit-api --allow=tcp:443 --rate-limit=100"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor Rate Limiting rules (`--rate-limit-threshold-count`, `--rate-limit-threshold-interval-sec`, `--exceed-action=deny-429`, `--enforce-on-key=IP`) enforce rate caps per client IP or session key at Google's global edge, dropping volumetric L7 flood attacks before they reach backend instances.",
    "distractors": {
      "A": "BigQuery (`bq`) manages analytical tables, not edge HTTP web traffic rate limiting.",
      "D": "VPC firewall rules do not support HTTP request path matching or application-level rate limiting.",
      "C": "Cloud Logging sinks route log records, not throttle live HTTP client traffic."
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
        "text": "Create an open firewall rule on port 5432 to 0.0.0.0/0."
      },
      {
        "letter": "C",
        "text": "Hardcode the PostgreSQL postgres master password into the Cloud Run Dockerfile."
      },
      {
        "letter": "D",
        "text": "Store database passwords in a public Cloud Storage bucket."
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL IAM database authentication (`cloudsql.iam_authentication=on`) enables applications to authenticate to PostgreSQL/MySQL using short-lived OAuth 2.0 access tokens generated by Google IAM service accounts, completely eliminating static database passwords.",
    "distractors": {
      "B": "Opening firewall rules to 0.0.0.0/0 creates severe network vulnerabilities and does not solve authentication.",
      "D": "Storing passwords in public buckets exposes credentials to the world.",
      "C": "Hardcoding credentials into Dockerfiles leaks passwords in container images."
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
        "text": "Grant primitive roles/editor on the project."
      },
      {
        "letter": "C",
        "text": "Grant roles/container.admin at the GCP project level."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged Kubernetes cluster on Compute Engine."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud IAM grants cluster-level access (`roles/container.viewer` allows listing clusters and obtaining kubeconfig credentials). Granular namespace-level permissions (e.g. read pods only in `development`) are governed inside the cluster via native Kubernetes RBAC `Role` and `RoleBinding` objects.",
    "distractors": {
      "C": "`roles/container.admin` grants full administrative control across all namespaces in all clusters.",
      "B": "`roles/editor` grants broad primitive edit permissions across the entire GCP project.",
      "D": "Unmanaged clusters increase operational overhead without solving RBAC authorization requirements."
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
        "text": "Google default encryption at rest."
      },
      {
        "letter": "B",
        "text": "Cloud KMS Customer-Managed Encryption Keys (CMEK)."
      },
      {
        "letter": "C",
        "text": "Public bucket access with client SSL encryption."
      },
      {
        "letter": "D",
        "text": "Customer-Supplied Encryption Keys (CSEK), providing the base64-encoded AES-256 key in the encryption_key configuration header of each API/CLI request."
      }
    ],
    "correct": "D",
    "explanation": "Customer-Supplied Encryption Keys (CSEK) require the client to supply raw 256-bit AES encryption keys in HTTP request headers. Google Cloud uses the key in memory to encrypt/decrypt the object and immediately purges the key from memory without persisting it.",
    "distractors": {
      "C": "Client SSL encrypts in transit but leaves stored at-rest objects unprotected from public download.",
      "A": "Google default encryption uses Google-managed keys stored in Google KMS.",
      "B": "Cloud KMS CMEK stores and manages the encryption keys inside Google Cloud KMS."
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
        "text": "Write a nightly cron script that deletes and recreates all IAM policies."
      },
      {
        "letter": "B",
        "text": "Grant primitive roles/editor directly to individual developer personal Gmail accounts."
      },
      {
        "letter": "C",
        "text": "Share a single service account JSON key among all developers."
      },
      {
        "letter": "D",
        "text": "Assign IAM roles exclusively to Google Groups in Google Workspace/Cloud Identity, and manage individual permissions by adding or removing users from the corresponding groups."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud IAM best practice mandates binding IAM roles to Google Groups (e.g. `developers@corp.com`, `data-analysts@corp.com`) rather than individual user accounts. Membership in groups is managed via Cloud Identity/Workspace, allowing instant access revocation upon employee offboarding.",
    "distractors": {
      "C": "Sharing service account keys destroys individual accountability and creates massive credential compromise risks.",
      "A": "Recreating IAM policies daily causes intermittent authorization drops and severe outage risks.",
      "B": "Binding roles to individual personal Gmail accounts violates enterprise identity governance and creates dangling permissions."
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
        "text": "Deploy an unmanaged Snort IDS VM on Compute Engine."
      },
      {
        "letter": "B",
        "text": "Configure Cloud Armor rules using preconfigured WAF expressions: evaluatePreconfiguredExpr('sqli-v33-stable') and evaluatePreconfiguredExpr('xss-v33-stable') with action deny-403."
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule blocking port 80 and 443."
      },
      {
        "letter": "D",
        "text": "Set Cloud Storage bucket permissions to private."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor provides preconfigured WAF rules based on ModSecurity Core Rule Set (CRS 3.3). Using `evaluatePreconfiguredExpr('sqli-v33-stable')` and `evaluatePreconfiguredExpr('xss-v33-stable')` automatically inspects HTTP payloads for SQL injection and cross-site scripting attack vectors at Google's global edge.",
    "distractors": {
      "C": "Blocking ports 80 and 443 shuts down all legitimate web traffic.",
      "A": "Self-managed IDS VMs introduce scaling bottlenecks and require ongoing signature rule maintenance.",
      "D": "Bucket permissions govern storage objects, not HTTP application layer attacks."
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
        "text": "gcloud storage keys create customer-data-key --keyring=app-keyring"
      },
      {
        "letter": "B",
        "text": "gcloud compute keys create customer-data-key --region=us-east1"
      },
      {
        "letter": "C",
        "text": "gcloud kms keyrings create app-keyring --location=us-east1 && gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=encryption"
      },
      {
        "letter": "D",
        "text": "bq mk --kms_key customer-data-key"
      }
    ],
    "correct": "C",
    "explanation": "In Cloud KMS, keys belong to Key Rings. You create the Key Ring first (`gcloud kms keyrings create <NAME> --location=<LOC>`), then create the CryptoKey inside that Key Ring (`gcloud kms keys create <NAME> --keyring=<RING> --location=<LOC> --purpose=encryption`).",
    "distractors": {
      "D": "BigQuery does not create raw KMS cryptographic key resources.",
      "B": "`gcloud compute keys` is non-existent CLI syntax.",
      "A": "`gcloud storage keys` is non-existent CLI syntax."
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
        "text": "Store the service account private key in a public Git repository."
      },
      {
        "letter": "C",
        "text": "Delete all VPC networks in the project."
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to the default service account."
      }
    ],
    "correct": "A",
    "explanation": "Google's enterprise security blueprint strongly recommends disabling automatic Editor grants on default service accounts (`iam.automaticIamGrantsForDefaultServiceAccounts` Org Policy), stripping existing Editor roles, and attaching custom dedicated service accounts with fine-grained least privilege roles to VMs.",
    "distractors": {
      "C": "Deleting VPC networks breaks network connectivity without addressing IAM privilege risks.",
      "B": "Committing private keys to Git creates severe security compromise vulnerabilities.",
      "D": "Granting Owner increases the risk of complete project compromise if any VM is exploited."
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
        "text": "Deploy an unmanaged Squid proxy VM with an external IP."
      },
      {
        "letter": "B",
        "text": "Assign public IPv4 addresses to all VMs and open firewall port 443."
      },
      {
        "letter": "C",
        "text": "Cloud DNS public forwarding."
      },
      {
        "letter": "D",
        "text": "Private Service Connect (PSC) endpoints (via forwarding rules with target-google-apis-bundle or service attachments)."
      }
    ],
    "correct": "D",
    "explanation": "Private Service Connect (PSC) allows private consumption of Google APIs and producer services using private internal IP addresses within your VPC, avoiding internet routing, complex VPC peering CIDR overlaps, and external IP vulnerabilities.",
    "distractors": {
      "B": "Public IPs violate enterprise isolation policies and expose VMs to public internet scans.",
      "A": "Proxy VMs introduce latency, management overhead, and single points of failure.",
      "C": "Cloud DNS public forwarding resolves public IPs rather than routing traffic over private SDN endpoints."
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
        "text": "bq query 'DELETE FROM secrets WHERE version=1'"
      },
      {
        "letter": "B",
        "text": "gcloud secrets versions destroy 1 --secret=db-password"
      },
      {
        "letter": "C",
        "text": "gcloud secrets delete db-password --force"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances delete db-password"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud secrets versions destroy <VERSION_NUMBER> --secret=<SECRET_NAME>` permanently destroys the cryptographic payload of that specific secret version, making it irrecoverable while keeping other versions (and the secret metadata) active.",
    "distractors": {
      "A": "BigQuery does not manage Secret Manager secret stores.",
      "C": "Deleting the entire secret deletes version 2 as well, causing immediate application database connection outages.",
      "D": "`compute instances delete` manages Compute Engine VMs, not Secret Manager secrets."
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
        "text": "At the Project level for corp-storage-prod."
      },
      {
        "letter": "B",
        "text": "At the Organization level."
      },
      {
        "letter": "C",
        "text": "At the Cloud Storage Bucket resource level on gs://contractor-workspace."
      },
      {
        "letter": "D",
        "text": "At the Folder level."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud IAM policies inherit downwards: Org -> Folder -> Project -> Resource. Binding IAM roles at the specific Resource level (the individual bucket `gs://contractor-workspace`) grants permissions exclusively to that single resource without granting access to other buckets in the project.",
    "distractors": {
      "D": "Folder-level bindings inherit to all projects inside the folder.",
      "B": "Organization-level bindings grant permissions across all projects in the company.",
      "A": "Project-level bindings inherit to all 10 buckets in the project, violating least privilege."
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
        "text": "Make the BigQuery dataset public to allUsers."
      },
      {
        "letter": "B",
        "text": "Configure VPC Service Controls Ingress and Egress rules on Perimeter A defining specific source identity, destination project, and API method permissions."
      },
      {
        "letter": "C",
        "text": "Delete Perimeter A completely."
      },
      {
        "letter": "D",
        "text": "Deploy an open VPN tunnel between the two projects."
      }
    ],
    "correct": "B",
    "explanation": "VPC Service Controls supports directional Ingress and Egress rules. Administrators can establish fine-grained, identity-based and method-based exceptions to securely allow data to enter or leave the perimeter without weakening perimeter boundaries.",
    "distractors": {
      "C": "Deleting the perimeter removes all data exfiltration protections for the entire project.",
      "A": "Making the dataset public causes critical corporate data leaks.",
      "D": "VPN tunnels route IP packets, but do not bypass Google Cloud API VPC Service Controls enforcement."
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
        "text": "Deploy an unmanaged proxy VM in the subnet."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule in default VPC allowing 203.0.113.0/24."
      },
      {
        "letter": "C",
        "text": "Create policy admin-waf, update default rule to deny-403, and add a rule at priority 1000 allowing src-ip-ranges 203.0.113.0/24."
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to 203.0.113.0/24 in IAM."
      }
    ],
    "correct": "C",
    "explanation": "Creating a Cloud Armor IP Whitelist policy involves creating the policy (`gcloud compute security-policies create`), modifying the default rule (priority 2147483647) to `deny-403`, and adding a higher-priority rule (priority 1000) allowing source IP range `203.0.113.0/24` with action `allow`.",
    "distractors": {
      "D": "IP addresses cannot be granted IAM roles; IAM roles are granted to user identities and service accounts.",
      "B": "VPC firewall rules apply to backend VMs, but do not block traffic at Google's global edge load balancer or return HTTP 403.",
      "A": "Proxy VMs add infrastructure maintenance and lack edge DDoS protection."
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
        "text": "gcloud compute instances list --filter='iam'"
      },
      {
        "letter": "B",
        "text": "SELECT * FROM iam_table WHERE action='modify'"
      },
      {
        "letter": "C",
        "text": "resource.type=\"gce_instance\" AND severity=DEBUG"
      },
      {
        "letter": "D",
        "text": "logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"SetIamPolicy\""
      }
    ],
    "correct": "D",
    "explanation": "Administrative IAM policy changes are recorded in the Admin Activity audit log (`cloudaudit.googleapis.com/activity`) with `protoPayload.methodName=\"SetIamPolicy\"` (or `google.iam.admin.v1.CreateRole`). This records the caller identity, timestamp, and the exact delta between policy versions.",
    "distractors": {
      "B": "Logging filter expressions are not raw SQL SELECT statements (unless using Log Analytics).",
      "A": "`compute instances list` displays VM metadata, not administrative IAM audit trail history.",
      "C": "`gce_instance` logs with DEBUG severity do not record project-level IAM API changes."
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
        "text": "gcloud kms keys delete customer-key --force"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks delete customer-key"
      },
      {
        "letter": "C",
        "text": "gcloud kms keys versions destroy 3 --key=customer-key --keyring=app-ring --location=us-central1"
      },
      {
        "letter": "D",
        "text": "bq update --delete_kms customer-key"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud kms keys versions destroy <VERSION> --key=<KEY> --keyring=<RING> --location=<LOC>` transitions the key version into the `DESTROY_SCHEDULED` state with a 24-hour recovery window before the cryptographic key material is irreversibly destroyed.",
    "distractors": {
      "A": "Cloud KMS does not permit instant hard deletion of key resources; keys must undergo scheduled destruction.",
      "B": "`compute disks delete` manages persistent disks, not Cloud KMS keys.",
      "D": "BigQuery does not manage KMS key lifecycles."
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
        "text": "Delete all default VPC networks."
      },
      {
        "letter": "B",
        "text": "Deploy a Cloud Function that checks IAM every hour."
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule blocking all foreign IPs."
      },
      {
        "letter": "D",
        "text": "Enforce the Organization Policy constraint 'iam.allowedPolicyMemberDomains' specifying the Directory Customer ID for corp.example.com."
      }
    ],
    "correct": "D",
    "explanation": "The `iam.allowedPolicyMemberDomains` Organization Policy constraint (Domain Restricted Sharing) restricts IAM policy bindings exclusively to accounts within approved Google Workspace / Cloud Identity customer domains, preventing accidental or malicious addition of external personal Gmail accounts.",
    "distractors": {
      "B": "Cloud Functions provide delayed detective scanning rather than real-time preventative control plane enforcement.",
      "C": "VPC firewall rules govern network packets, not Cloud IAM identity email validation.",
      "A": "Deleting VPC networks does not prevent IAM role assignments to external users."
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
        "text": "gcloud compute firewall-rules create allow-ssl --allow=tcp:3306"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch corp-db-prod --ssl-mode=ENCRYPTED_ONLY"
      },
      {
        "letter": "C",
        "text": "gcloud app deploy ssl.yaml"
      },
      {
        "letter": "D",
        "text": "bq update --ssl=true corp-db-prod"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --ssl-mode=ENCRYPTED_ONLY` (or `TRUSTED_CLIENT_CERTIFICATES`) enforces that all incoming client TCP connections must establish an SSL/TLS handshake, rejecting unencrypted plaintext SQL queries.",
    "distractors": {
      "C": "App Engine `ssl.yaml` is non-existent.",
      "D": "BigQuery (`bq`) does not manage Cloud SQL instance SSL parameters.",
      "A": "VPC firewall rules allow TCP traffic but do not enforce SSL/TLS encryption handshakes at the database protocol layer."
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
        "text": "Grant primitive roles/editor at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/owner at the project level."
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudbuild.builds.editor at the project level."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudbuild.builds.viewer at the project level."
      }
    ],
    "correct": "C",
    "explanation": "`roles/cloudbuild.builds.editor` provides permissions to create, edit, and run Cloud Build triggers and build executions (`cloudbuild.builds.create`, `cloudbuild.builds.get`, `cloudbuild.triggers.create`), without granting broad administrative access across the project.",
    "distractors": {
      "D": "`roles/cloudbuild.builds.viewer` is read-only and prevents creating triggers or executing builds.",
      "B": "Granting Owner gives excessive administrative privileges across the entire project.",
      "A": "`roles/editor` grants broad access to all GCP resources in the project, violating least privilege."
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
        "text": "Compute Engine Serial Console."
      },
      {
        "letter": "B",
        "text": "Google Cloud Policy Troubleshooter (in Cloud Console or via gcloud policy-troubleshoot)."
      },
      {
        "letter": "C",
        "text": "VPC Flow Logs in Cloud Logging."
      },
      {
        "letter": "D",
        "text": "BigQuery Data Profiler."
      }
    ],
    "correct": "B",
    "explanation": "Policy Troubleshooter analyzes IAM policies across the Organization, Folder, Project, and Resource hierarchy, evaluating allow bindings, conditional policies, and IAM Deny policies to explain why a user was granted or denied a specific permission.",
    "distractors": {
      "D": "BigQuery Data Profiler analyzes dataset statistical distributions.",
      "A": "Serial Console is for Linux VM kernel diagnostics.",
      "C": "VPC Flow Logs capture network IP packet flows, not IAM permission evaluation graphs."
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
        "text": "Cloud DNS TXT records."
      },
      {
        "letter": "C",
        "text": "A VPC firewall rule blocking port 80."
      },
      {
        "letter": "D",
        "text": "Compute Engine instance groups with Spot VMs."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor Bot Management integrates with reCAPTCHA Enterprise. Security policy rules evaluate `token.recaptcha_session.score` at Google's global edge and apply actions (allow, redirect, challenge, deny-403) to block automated fraud.",
    "distractors": {
      "C": "Firewall rules block all TCP traffic, terminating legitimate customer access.",
      "B": "DNS TXT records hold domain verification strings, not edge bot mitigation logic.",
      "D": "Spot VMs are ephemeral compute instances and have no bot detection capabilities."
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
        "text": "Grant roles/owner at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/artifactregistry.writer on the Artifact Registry repository (or at project level)."
      },
      {
        "letter": "C",
        "text": "Grant roles/artifactregistry.admin at the project level."
      },
      {
        "letter": "D",
        "text": "Grant roles/artifactregistry.reader at the project level."
      }
    ],
    "correct": "B",
    "explanation": "`roles/artifactregistry.writer` grants permissions to read and write (push and pull) artifacts and container images (`artifactregistry.repositories.uploadArtifacts`, `artifactregistry.repositories.downloadArtifacts`), without granting repository deletion or IAM administration rights.",
    "distractors": {
      "A": "Project Owner grants full unrestricted control over all GCP resources.",
      "D": "`roles/artifactregistry.reader` is read-only (pull only) and fails image push operations with 403 Forbidden.",
      "C": "`roles/artifactregistry.admin` allows deleting repositories and modifying IAM access control policies."
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
        "text": "Deploy an unmanaged Squid Proxy VM on a public subnet."
      },
      {
        "letter": "B",
        "text": "Enable Private Google Access on the subnet using gcloud compute networks subnets update private-sub --region=us-central1 --enable-private-ip-google-access."
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule allowing port 80 to 0.0.0.0/0."
      },
      {
        "letter": "D",
        "text": "Assign public IP addresses to all VM instances."
      }
    ],
    "correct": "B",
    "explanation": "Enabling Private Google Access (`--enable-private-ip-google-access`) on a VPC subnet allows VM instances with only internal private IP addresses to reach the public IP endpoints of Google APIs and services (Cloud Storage, BigQuery, Pub/Sub) directly over Google's internal private fiber backbone.",
    "distractors": {
      "A": "Proxy VMs add latency, cost, and maintenance overhead compared to native Private Google Access.",
      "C": "Firewall rules do not route private VM packets to Google public VIPs without Private Google Access enabled.",
      "D": "Assigning public IPs violates isolation policies and exposes private VMs to internet inbound attacks."
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
        "text": "Create a VPC firewall rule blocking US IP addresses."
      },
      {
        "letter": "B",
        "text": "Revoke Owner roles from all project administrators."
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'gcp.resourceLocations' with allowedValues set to 'in:europe-locations'."
      },
      {
        "letter": "D",
        "text": "Delete all subnets in US regions manually."
      }
    ],
    "correct": "C",
    "explanation": "The `gcp.resourceLocations` Organization Policy constraint restricts the physical geographic locations where resource creation (Compute Engine, GCS, Cloud SQL, BigQuery) is permitted, preventing resource provisioning outside allowed regions (e.g. `in:europe-locations`).",
    "distractors": {
      "A": "Firewall rules control packet transmission, not resource deployment region validation in the GCP control plane.",
      "D": "Deleting subnets does not prevent developers from creating multi-region US buckets or global resources.",
      "B": "Revoking Owner roles does not establish declarative data residency guardrails for authorized admins."
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
        "text": "Email the secret plaintext in an encrypted email."
      },
      {
        "letter": "B",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'"
      },
      {
        "letter": "C",
        "text": "Make the secret public for 4 hours."
      },
      {
        "letter": "D",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.admin'"
      }
    ],
    "correct": "B",
    "explanation": "Binding `roles/secretmanager.secretAccessor` with an IAM Condition (`request.time < timestamp(...)`) grants time-limited read access that automatically expires and invalidates at the exact specified cutoff time.",
    "distractors": {
      "C": "Making secrets public exposes payment credentials to the world.",
      "D": "Secret Admin role gives excessive permissions to modify and delete the secret and lacks automatic expiration.",
      "A": "Transmitting secrets via email violates security standards and creates persistent plaintext records."
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
        "text": "Grant roles/cloudfunctions.admin at the project level."
      },
      {
        "letter": "B",
        "text": "Grant roles/owner at the project level."
      },
      {
        "letter": "C",
        "text": "Deploy the function with --allow-unauthenticated."
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudfunctions.invoker (and roles/run.invoker for Gen 2) on the Cloud Function resource."
      }
    ],
    "correct": "D",
    "explanation": "Invoking secured Cloud Functions requires `roles/cloudfunctions.invoker` (and `roles/run.invoker` on the underlying Cloud Run service for 2nd gen functions). The calling service account presents a signed Google OIDC ID token to authenticate and invoke the function.",
    "distractors": {
      "B": "Project Owner grants full control over all project resources.",
      "C": "`--allow-unauthenticated` exposes the function to the public internet without authentication.",
      "A": "`roles/cloudfunctions.admin` allows deleting, updating, and deploying function code, violating least privilege."
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
        "text": "Set Cloud Storage bucket retention to 10 years."
      },
      {
        "letter": "B",
        "text": "Enable Cloud Armor Adaptive Protection on the security policy using gcloud compute security-policies update my-policy --enable-layer7-ddos-defense."
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule blocking port 80."
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged Snort VM in the VPC."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor Adaptive Protection leverages machine learning models to detect Layer 7 application DDoS attacks, identify the specific attack signature, and automatically generate recommended mitigation rules with one-click deployment.",
    "distractors": {
      "D": "Self-managed Snort VMs lack Google edge scale, machine learning baseline analytics, and DDoS mitigation capacity.",
      "C": "Blocking port 80 cuts off all customer traffic.",
      "A": "Cloud Storage retention governs object immutability, not network DDoS defense."
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
        "text": "Delete all service accounts across all projects."
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule on port 22."
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'iam.disableServiceAccountKeyCreation' at the Organization or Folder level."
      },
      {
        "letter": "D",
        "text": "Revoke Owner roles from all developers."
      }
    ],
    "correct": "C",
    "explanation": "The `iam.disableServiceAccountKeyCreation` Organization Policy constraint blocks calls to `CreateServiceAccountKey`, preventing the generation and download of static private key JSON files while allowing keyless Workload Identity Federation and OAuth token impersonation.",
    "distractors": {
      "D": "Revoking Owner roles does not prevent other IAM admins from generating keys unless governed by Org Policy.",
      "B": "Firewall rules control network packets, not IAM control plane API operations.",
      "A": "Deleting all service accounts breaks active application workloads."
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
        "text": "Grant primitive roles/editor to both Key Administrators and Application Service Accounts."
      },
      {
        "letter": "C",
        "text": "Store the KMS private key in a shared Cloud Storage bucket."
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to Key Administrators at the project level."
      }
    ],
    "correct": "A",
    "explanation": "Cloud KMS strictly enforces Separation of Duties by segregating administrative permissions (`roles/cloudkms.admin` manages key rings, rotation schedules, and IAM policies but CANNOT encrypt/decrypt) from cryptographic data plane permissions (`roles/cloudkms.cryptoKeyEncrypterDecrypter` encrypts and decrypts payloads but CANNOT alter key configurations).",
    "distractors": {
      "D": "Project Owner grants unrestricted control over everything in the project.",
      "C": "Cloud KMS symmetric keys cannot be exported or stored as files in Cloud Storage.",
      "B": "Primitive Editor grants both management and crypto permissions to everyone, violating separation of duties."
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
