/**
 * Google Cloud Associate Cloud Engineer (ACE) Question Bank
 * 300 Tactical High-Fidelity Practice Questions
 * 6 Full-Length Blocks (50 Qs / block)
 */
if (typeof window === 'undefined') {
  global.window = {};
}

window.GCP_ACE_QUESTIONS = [
  {
    "id": "ACE-D1-001",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "IAM Organization Hierarchy & Security Reviewer",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Auditing Organization IAM Policies Across All Projects",
    "scenario": "Your organization manages over 80 GCP projects structured under departmental folders. The central compliance and security audit team requires read-only visibility into IAM policies, asset metadata, and audit configurations across all existing and future projects. You must grant access following the principle of least privilege and minimizing operational maintenance overhead.",
    "keywords": [
      "IAM Hierarchy",
      "Least Privilege",
      "Google Groups",
      "Organization Level",
      "Security Reviewer"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Google Group containing all security auditors and grant the group the roles/iam.securityReviewer role at the Organization node.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Assign the roles/viewer role to each auditor's corporate email address on every project individually.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Create a service account with roles/owner at the Organization level and distribute its downloaded private JSON key to the auditors.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Assign the roles/iam.securityAdmin role to individual auditor accounts at the root Organization level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Granting roles/iam.securityReviewer to a Google Group at the Organization node allows inherited read-only security auditing across all existing and future child folders and projects. Using Google Groups eliminates manual per-user permission management.",
    "distractors": {
      "A": "Correct. Inherited at the Organization node, roles/iam.securityReviewer provides dedicated read-only security visibility without management overhead.",
      "B": "Primitive roles/viewer grants excessive data inspection permissions and project-by-project assignment fails to cover newly created projects automatically.",
      "C": "Service accounts are designed for workloads, not human users. Sharing JSON keys creates severe credential leak risks, and roles/owner violates least privilege.",
      "D": "roles/iam.securityAdmin grants write/mutation permissions to modify IAM policies, violating least privilege for read-only auditors."
    },
    "gcloudCommand": "gcloud organizations add-iam-policy-binding 123456789012 --member='group:sec-auditors@example.com' --role='roles/iam.securityReviewer'",
    "architectureComponents": [
      "Cloud IAM",
      "Resource Manager",
      "Google Cloud Organization"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles#security-roles"
  },
  {
    "id": "ACE-D1-002",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Service Account Security & Impersonation",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enforcing Keyless Service Account Impersonation for Developers",
    "scenario": "A software engineering team needs to run automated database migration scripts from their local machines against Cloud SQL in the staging project. Corporate security policy strictly forbids the generation and download of static Service Account JSON keys to engineer laptops. You need to enable developers to execute the scripts securely.",
    "keywords": [
      "Service Account Impersonation",
      "No JSON Keys",
      "Service Account Token Creator",
      "gcloud auth"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Assign developers the roles/iam.serviceAccountUser role at the project level and instruct them to export GOOGLE_APPLICATION_CREDENTIALS.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Create a service account with Cloud SQL Client role, grant developers roles/iam.serviceAccountTokenCreator on that service account, and instruct them to use gcloud with --impersonate-service-account.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Generate short-lived JSON keys using gcloud iam service-accounts keys create and configure a cron script to delete them every 24 hours.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Grant developers the roles/cloudsql.admin role directly on their user accounts in the staging project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "Binding roles/iam.serviceAccountTokenCreator to the developer user/group on the target service account allows them to generate short-lived OAuth 2.0 access tokens and impersonate the service account via gcloud CLI without ever creating or exporting static JSON private keys.",
    "distractors": {
      "A": "roles/iam.serviceAccountUser allows attaching the service account to compute resources (e.g., VMs), not generating direct short-lived tokens for local execution.",
      "B": "Correct. Service Account impersonation via roles/iam.serviceAccountTokenCreator eliminates static credentials and fulfills enterprise security requirements.",
      "C": "Downloading JSON keys to developer laptops violates the security prohibition, even if scripted deletion is attempted.",
      "D": "Granting direct admin permissions to developers violates least privilege and bypasses workload-specific identity isolation."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding migration-sa@proj-staging.iam.gserviceaccount.com --member='group:developers@example.com' --role='roles/iam.serviceAccountTokenCreator'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud SQL",
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-overview#impersonation"
  },
  {
    "id": "ACE-D1-003",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Billing Budgets & Programmatic Notifications",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Automating Billing Budget Notifications via Pub/Sub",
    "scenario": "The finance department wants real-time programmatic notifications when cloud spend across the enterprise reaches 50%, 90%, and 100% of the $50,000 monthly budget. When the 100% threshold is exceeded, an automated Cloud Function must disable non-essential compute instances. How should you configure the billing alert pipeline?",
    "keywords": [
      "Cloud Billing",
      "Budget Alerts",
      "Cloud Pub/Sub",
      "Cloud Functions",
      "Cost Control"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a billing budget in the Cloud Console, define threshold rules at 50%, 90%, and 100%, and configure the budget to publish messages to a Cloud Pub/Sub topic connected to your Cloud Function.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Write a custom Python script running on a Compute Engine VM that polls gcloud billing budgets list every hour and publishes to Pub/Sub.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Configure standard email notifications to billing administrators and configure an email parser to trigger Cloud Functions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Set up a Cloud Monitoring uptime check that queries the Billing API every 5 minutes and triggers a webhook notification.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Billing allows linking a budget directly to a Cloud Pub/Sub topic. Whenever a threshold is reached or spend updates occur, Cloud Billing publishes JSON budget status messages to the topic, which can trigger Cloud Functions for automated remediation.",
    "distractors": {
      "A": "Correct. Native Pub/Sub integration on Cloud Billing budgets provides immediate, reliable programmatic event delivery to downstream serverless functions.",
      "B": "Polling the Billing API via a continuous VM introduces infrastructure cost, maintenance overhead, and delayed alerting compared to native budget Pub/Sub pushes.",
      "C": "Parsing emails is fragile, unstandardized, and introduces unacceptable operational latency compared to direct Pub/Sub topic integration.",
      "D": "Cloud Monitoring uptime checks verify web endpoint availability, not billing account spend metrics."
    },
    "gcloudCommand": "gcloud billing budgets create --billing-account=012345-6789AB-CDEF01 --display-name='Enterprise-Monthly-Budget' --budget-amount=50000USD --threshold-rule=percent=0.5 --threshold-rule=percent=0.9 --threshold-rule=percent=1.0 --notifications-rule-pubsub-topic='projects/corp-billing/topics/billing-alerts'",
    "architectureComponents": [
      "Cloud Billing",
      "Cloud Pub/Sub",
      "Cloud Functions"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify"
  },
  {
    "id": "ACE-D1-004",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Billing Export to BigQuery",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Daily Cloud Billing Export to BigQuery for FinOps Analysis",
    "scenario": "Your FinOps team needs to perform granular, SQL-based cost analysis, resource-level SKU breakdown, and pricing attribution across 20 distinct projects. You must establish an automated, continuous export of detailed usage billing data into BigQuery with minimal latency and zero custom ETL scripting.",
    "keywords": [
      "Billing Export",
      "BigQuery",
      "Standard Usage",
      "Detailed Usage",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Write a daily Cloud Scheduler job that exports CSV billing reports to Cloud Storage and runs a bq load command into BigQuery.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create a BigQuery dataset in a dedicated billing analysis project, navigate to Billing > Billing Export in the Cloud Console, and enable Detailed usage cost export to that dataset.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Logging sink that filters for billing log entries and routes them to a BigQuery dataset.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Use the Google Sheets Data Connector to pull billing records daily and stream them into BigQuery tables.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Billing provides native BigQuery Export. Enabling 'Detailed usage cost export' (and standard usage cost export) automatically streams itemized daily and real-time cost, resource tags, project hierarchy, and SKU metrics into partitioned BigQuery tables natively.",
    "distractors": {
      "A": "Building custom Cloud Scheduler CSV export pipelines creates unnecessary maintenance and lacks the real-time continuous streaming of native billing export.",
      "B": "Correct. Native BigQuery Billing Export provides zero-code, real-time, resource-level data ingestion into BigQuery for automated FinOps SQL querying.",
      "C": "Cloud Logging does not capture granular monetary SKU cost metrics or itemized pricing calculation details.",
      "D": "Google Sheets connectors have strict row limits, lack automated schema evolution, and are not suitable for enterprise billing ingestion."
    },
    "gcloudCommand": "bq mk --dataset --location=US corp-billing-analytics:gcp_billing_export",
    "architectureComponents": [
      "Cloud Billing",
      "BigQuery",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery"
  },
  {
    "id": "ACE-D1-005",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud CLI Named Configurations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Multiple GCP Environments with gcloud Named Configurations",
    "scenario": "As a Cloud Engineer, you frequently switch between three different client GCP environments: 'dev-corp', 'staging-corp', and 'prod-corp'. Each environment uses different default project IDs, target compute regions, and distinct corporate IAM service accounts. You want to switch between these environments quickly and reliably in your CLI without re-entering parameters.",
    "keywords": [
      "gcloud config configurations",
      "CLI Contexts",
      "Named Configurations",
      "Cloud SDK"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pass --project, --zone, and --account flags explicitly in every single gcloud command you run.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Maintain separate shell script files that run gcloud auth login and gcloud config set project every time you switch context.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create distinct named configurations using gcloud config configurations create for each environment, set their properties, and switch between them using gcloud config configurations activate.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Create three different user profiles on your operating system and log in with different OS accounts.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "gcloud CLI configurations (named configurations) allow defining groups of properties (account, project, compute region/zone). You can create them with `gcloud config configurations create <name>` and switch instantly using `gcloud config configurations activate <name>`.",
    "distractors": {
      "A": "Manually typing explicit flags for every command is slow, tedious, and highly prone to human error.",
      "B": "Writing custom shell scripts for re-authentication is slow, requires constant browser interaction, and is error-prone.",
      "C": "Correct. Named configurations represent the official, standard mechanism for managing distinct project/credential contexts in gcloud SDK.",
      "D": "Creating separate OS user accounts is excessive, slow, and adds unnecessary operating system overhead."
    },
    "gcloudCommand": "gcloud config configurations create prod-corp && gcloud config set project prod-corp-10293 && gcloud config set compute/region us-central1 && gcloud config configurations activate prod-corp",
    "architectureComponents": [
      "Cloud SDK",
      "Compute Engine",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/config/configurations"
  },
  {
    "id": "ACE-D1-006",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud CLI Properties & Defaults",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Setting Default Region and Zone Properties in gcloud SDK",
    "scenario": "You are setting up a newly provisioned developer workstation. The developer will exclusively deploy Compute Engine resources into the us-east4 region and us-east4-c zone for project ecommerce-web-prod. You need to configure the developer's gcloud environment so they do not have to specify the region and zone on every command.",
    "keywords": [
      "gcloud config set",
      "compute/region",
      "compute/zone",
      "CLI Properties"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an instance template in Compute Engine with us-east4-c hardcoded in the metadata.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "Run gcloud compute instances set-defaults --region=us-east4 --zone=us-east4-c.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Edit the /etc/hosts file on the local machine and add DNS entries for us-east4 and us-east4-c.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Run gcloud config set compute/region us-east4 and gcloud config set compute/zone us-east4-c.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "The standard command to set default properties in gcloud is `gcloud config set <section>/<property> <value>`. Setting `compute/region` and `compute/zone` configures the defaults for all subsequent Compute Engine CLI operations in the active configuration.",
    "distractors": {
      "A": "Instance templates do not set client-side gcloud CLI default parameter settings.",
      "B": "The command `gcloud compute instances set-defaults` is invalid syntax; properties are configured via `gcloud config set`.",
      "C": "Editing /etc/hosts has no effect on gcloud CLI API target parameter resolution.",
      "D": "Correct. `gcloud config set compute/region` and `compute/zone` establish persistent default regional/zonal targets for the CLI."
    },
    "gcloudCommand": "gcloud config set compute/region us-east4 && gcloud config set compute/zone us-east4-c",
    "architectureComponents": [
      "Cloud SDK",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/config/set"
  },
  {
    "id": "ACE-D1-007",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Uniform Bucket-Level Access",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enforcing Uniform Bucket-Level Access for Simplified Object Permissions",
    "scenario": "A financial application stores customer statement PDFs in a Google Cloud Storage bucket. Compliance standards require that access permissions must be managed strictly and uniformly via Cloud IAM policies across all objects in the bucket, completely disabling legacy per-object Access Control Lists (ACLs) to prevent accidental data exposure. What should you do?",
    "keywords": [
      "Cloud Storage",
      "Uniform Bucket-Level Access",
      "IAM",
      "ACLs Disabled",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Uniform Bucket-Level Access on the Cloud Storage bucket using gcloud storage buckets update --uniform-bucket-level-access.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Run a daily cron job with gsutil acl ch -d AllUsers gs://bucket/*.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Apply a Retention Policy with Bucket Lock to the storage bucket.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Change the default storage class of the bucket to Archive.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Uniform Bucket-Level Access (UBLA) disables per-object ACLs on the bucket and forces all access decisions to be evaluated solely through Cloud IAM roles. This simplifies permission auditing and prevents object-level ACL overrides.",
    "distractors": {
      "A": "Correct. Enabling uniform bucket-level access disables legacy object ACLs and enforces centralized Cloud IAM governance.",
      "B": "Running periodic ACL alteration scripts is error-prone, does not prevent newly uploaded objects from having ACLs, and is an operational anti-pattern.",
      "C": "Bucket Lock prevents object deletion or modification for a retention duration, but does not control ACL versus IAM access evaluation.",
      "D": "Storage class defines durability/cost tier, not access control mechanisms."
    },
    "gcloudCommand": "gcloud storage buckets update gs://customer-statements-corp-101 --uniform-bucket-level-access",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/uniform-bucket-level-access"
  },
  {
    "id": "ACE-D1-008",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Subnet IP Planning & CIDR Expansion",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Expanding Subnet CIDR Range in a Custom Mode VPC Network",
    "scenario": "Your production VPC network was created in custom mode with a subnet 10.0.0.0/24 in us-central1. Due to rapid growth in Compute Engine workloads, the subnet has run out of available private IP addresses. You need to expand the subnet capacity to at least 1,000 IP addresses with zero downtime and without disrupting existing instances. What should you do?",
    "keywords": [
      "VPC",
      "Custom Subnet",
      "CIDR Expansion",
      "Zero Downtime",
      "Subnet Expansion"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Convert the VPC from custom mode to auto mode so Google automatically handles subnet sizing.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Use gcloud compute networks subnets expand-ip-range to expand the subnet prefix from /24 to /22 (e.g., 10.0.0.0/22).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Delete the existing subnet and recreate it with 10.0.0.0/20.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Create a secondary IP range on the subnet and migrate all existing VMs to the secondary range.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "In Google Cloud VPCs, you can expand the primary CIDR range of any custom mode subnet dynamically without downtime by reducing the subnet mask prefix (e.g., /24 to /22). The new IP range must encompass the original range and must not overlap with other subnets in the VPC.",
    "distractors": {
      "A": "You cannot convert a custom mode VPC network back to auto mode, and auto mode uses fixed /20 subnets without flexibility.",
      "B": "Correct. `expand-ip-range` allows expanding the primary IPv4 range seamlessly without recreating the subnet or stopping running VMs.",
      "C": "A subnet cannot be deleted while active instances or network interfaces are attached to it.",
      "D": "Secondary IP ranges in Google Cloud VPC are used for GKE Pods and Services or Alias IPs, not primary VM network interfaces."
    },
    "gcloudCommand": "gcloud compute networks subnets expand-ip-range prod-sub-uscentral1 --region=us-central1 --prefix-length=22",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-subnets#expand-subnet"
  },
  {
    "id": "ACE-D1-009",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Subnets & GKE Secondary Ranges",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Secondary IP Ranges for GKE Pods and Services",
    "scenario": "You are preparing a dedicated custom VPC subnet in europe-west1 to host a high-density VPC-native Google Kubernetes Engine (GKE) cluster. The cluster will host up to 200 nodes and thousands of Pods. How must you configure the subnet before deploying the GKE cluster?",
    "keywords": [
      "VPC Subnet",
      "Secondary IP Ranges",
      "GKE VPC-Native",
      "Alias IPs",
      "Pod CIDR"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure a single /16 primary CIDR and enable Cloud NAT on the subnet without secondary ranges.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "Deploy a Cloud Router with BGP in the subnet to dynamically allocate IP ranges to Pods on demand.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Create a subnet with a primary IPv4 CIDR range for node VMs, and define two secondary IPv4 ranges: one dedicated for Pods and one for Services.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Create three separate VPC networks and connect them via VPC Peering to isolate Nodes, Pods, and Services.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "VPC-native GKE clusters use Alias IPs which require secondary IP ranges defined on the subnet: the primary range assigns internal IPs to Node VMs, while secondary ranges are allocated for Pod IP addresses and Service ClusterIP addresses.",
    "distractors": {
      "A": "Without secondary IP ranges, a VPC-native GKE cluster cannot be instantiated in the subnet.",
      "B": "Cloud Router and BGP are for hybrid WAN/VPN routing, not internal Kubernetes Pod IP allocation.",
      "C": "Correct. VPC-native GKE clusters require a primary range for node instances and secondary ranges for Pod and Service IP allocations.",
      "D": "GKE VPC-native clusters operate within a single subnet utilizing secondary ranges, not across three peered VPCs."
    },
    "gcloudCommand": "gcloud compute networks subnets create gke-subnet-eu1 --network=prod-vpc --region=europe-west1 --range=10.100.0.0/24 --secondary-range=pods=10.101.0.0/16,services=10.102.0.0/20",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips"
  },
  {
    "id": "ACE-D1-010",
    "certId": "ace",
    "blockId": "BLOCK-1",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Resource Manager Folder Hierarchy & Policy Inheritance",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Structuring Resource Manager Folder Hierarchy for Multi-Environment Governance",
    "scenario": "A retail enterprise is onboarding to Google Cloud. They have two independent business units: 'Retail Operations' and 'Online E-Commerce'. Each business unit requires strict isolation between Development, Staging, and Production environments, with distinct billing tracking and environment-specific IAM policies. How should you design the resource hierarchy?",
    "keywords": [
      "Resource Hierarchy",
      "Organization",
      "Folders",
      "Projects",
      "IAM Inheritance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Google Cloud Organization for each environment (Dev Org, Staging Org, Prod Org).",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Place all Projects directly under the root Organization node and use project naming conventions to manage permissions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create a single Project for Retail and a single Project for Online, and use IAM tags inside the project to separate environments.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Under the Organization node, create top-level Folders for each Business Unit, create subfolders for Dev, Staging, and Prod under each Business Unit folder, and place individual Projects inside these subfolders.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud best practices recommend a single root Organization with a nested Folder structure reflecting Business Units and Lifecycle Environments (Dev/Staging/Prod). Projects reside within these leaf folders, allowing seamless IAM policy and Organization Policy inheritance.",
    "distractors": {
      "A": "An enterprise should use a single Organization node tied to their primary Cloud Identity/Google Workspace domain to maintain unified governance.",
      "B": "Flat project layouts under the root node eliminate the power of folder-level policy inheritance and create unmanageable operational overhead.",
      "C": "Single projects mixing Dev and Prod breach critical security blast-radius isolation, quota separation, and billing boundaries.",
      "D": "Correct. Multi-tier folder hierarchy allows applying environment-specific IAM policies and org constraints with clean billing export grouping."
    },
    "gcloudCommand": "gcloud resource-manager folders create --display-name='E-Commerce' --organization=123456789012 && gcloud resource-manager folders create --display-name='Production' --folder=987654321098",
    "architectureComponents": [
      "Resource Manager",
      "Cloud IAM",
      "Cloud Billing"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/creating-managing-folders"
  },
  {
    "id": "ACE-D1-011",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Predefined vs Primitive IAM Roles",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Transitioning from Primitive Roles to Predefined IAM Roles",
    "scenario": "A junior engineer was granted the primitive Editor role on a production project. During an audit, security discovered that the engineer has permission to delete critical Cloud Storage buckets and modify firewall rules. You must restrict their permissions so they can only manage Compute Engine virtual machines without having access to network security or storage assets.",
    "keywords": [
      "Cloud IAM",
      "Primitive Roles",
      "Predefined Roles",
      "Least Privilege",
      "Compute Instance Admin"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a custom role from scratch by manually selecting all 4,000 Compute Engine permissions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Remove the Editor role and grant the predefined roles/compute.instanceAdmin.v1 role on the project.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Keep the Editor role and add an IAM Deny policy on storage.buckets.*.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Change the role to primitive Viewer and assign Compute Network Admin.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "Primitive roles (Owner, Editor, Viewer) grant coarse, overly broad access across all services. Predefined roles such as roles/compute.instanceAdmin.v1 grant full control over Compute Engine instances while preventing modification of networking firewalls or Cloud Storage buckets, adhering to least privilege.",
    "distractors": {
      "A": "Predefined roles are maintained and updated by Google; creating custom roles with thousands of permissions creates severe maintenance overhead.",
      "B": "Correct. Predefined roles/compute.instanceAdmin.v1 scopes permissions specifically to Compute Engine VM lifecycle operations.",
      "C": "Relying on primitive Editor plus complex Deny policies is difficult to audit and maintains overly broad permissions across un-denied services.",
      "D": "Viewer role provides read-only access and Compute Network Admin grants network modification rather than VM lifecycle control."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding prod-app-992 --member='user:dev@example.com' --role='roles/compute.instanceAdmin.v1' && gcloud projects remove-iam-policy-binding prod-app-992 --member='user:dev@example.com' --role='roles/editor'",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles#compute-engine-roles"
  },
  {
    "id": "ACE-D1-012",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Service Account User Role Scoping",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Granting Service Account User Role on Specific Service Accounts",
    "scenario": "A CI/CD automated pipeline needs to launch Compute Engine VMs configured to run with a highly privileged database proxy service account db-proxy-sa@prod.iam.gserviceaccount.com. You need to allow the CI/CD service account cicd-runner@prod.iam.gserviceaccount.com to attach this proxy identity to new VMs without allowing it to attach or misuse any other service account in the project.",
    "keywords": [
      "roles/iam.serviceAccountUser",
      "Least Privilege",
      "Service Account Level Binding",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Grant roles/iam.serviceAccountAdmin to cicd-runner at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Download the JSON private key of db-proxy-sa and pass it to cicd-runner in the VM startup script.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountUser to cicd-runner@prod.iam.gserviceaccount.com specifically on the resource db-proxy-sa@prod.iam.gserviceaccount.com.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant roles/iam.serviceAccountUser to cicd-runner at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "Granting roles/iam.serviceAccountUser at the resource level (on the specific target service account) allows the user/caller to attach only that specific identity to Compute Engine instances or services, preventing privilege escalation to other service accounts in the project.",
    "distractors": {
      "A": "roles/iam.serviceAccountAdmin allows creating, deleting, and altering service accounts, which is unnecessary and overprivileged.",
      "B": "Storing and embedding static JSON keys inside startup scripts exposes private credentials in metadata.",
      "C": "Correct. Resource-level binding of roles/iam.serviceAccountUser strictly limits identity attachment to the designated service account.",
      "D": "Granting serviceAccountUser at the project level allows the runner to attach any service account in the project, including high-privilege project owner accounts."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding db-proxy-sa@prod.iam.gserviceaccount.com --member='serviceAccount:cicd-runner@prod.iam.gserviceaccount.com' --role='roles/iam.serviceAccountUser'",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-permissions#user-role"
  },
  {
    "id": "ACE-D1-013",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Organization Policy Constraints & VM Security",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restricting VM External IP Addresses via Organization Policies",
    "scenario": "To prevent accidental internet exposure of backend infrastructure, your Chief Information Security Officer (CISO) mandates that no Compute Engine instance in the development folder may be assigned an external public IP address. How should you enforce this guardrail centrally?",
    "keywords": [
      "Organization Policy",
      "compute.vmExternalIpAccess",
      "Constraints",
      "Security Guardrail"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apply the Organization Policy constraint constraints/compute.vmExternalIpAccess with a deny-all policy at the Development folder level.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Create an egress firewall rule with priority 1000 denying all traffic to 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "Write a weekly Cloud Function to scan all VMs and delete public IP addresses.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Remove the roles/compute.networkAdmin role from all developers in the project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Organization Policy constraints provide declarative governance. The constraints/compute.vmExternalIpAccess constraint applied with 'Deny all' on a folder or organization completely blocks the creation or attachment of external IP addresses on any VM instance in that scope.",
    "distractors": {
      "A": "Correct. Organization Policy compute.vmExternalIpAccess enforces preventative control at the API level, blocking external IP allocation.",
      "B": "Egress firewall rules do not prevent public IPs from being assigned or receiving inbound traffic.",
      "C": "Reactive scanning scripts allow a window of vulnerability and incur ongoing operational maintenance.",
      "D": "Even without networkAdmin, instance admins can attach ephemeral external IPs during VM creation unless blocked by org policy."
    },
    "gcloudCommand": "gcloud resource-manager org-policies set-policy --folder=456789123012 policy-deny-external-ips.yaml",
    "architectureComponents": [
      "Resource Manager",
      "Organization Policies",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#org-policy"
  },
  {
    "id": "ACE-D1-014",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Organization Policy Resource Locations",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enforcing Data Sovereignty with Resource Location Constraint",
    "scenario": "Due to European Union GDPR compliance requirements, all cloud resources (Compute Engine disks, Cloud Storage buckets, Cloud SQL instances) created under the 'EU-Operations' folder must strictly reside in European Google Cloud regions (europe-west1, europe-west3, europe-west4). How should you enforce this?",
    "keywords": [
      "Organization Policy",
      "constraints/gcp.resourceLocations",
      "GDPR",
      "Data Sovereignty"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create VPC subnets only in europe-west1 and delete all global VPC routes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Set the Organization Policy constraint constraints/gcp.resourceLocations on the EU-Operations folder with an allowlist restricted to in:europe-locations.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Configure DNS routing policies in Cloud DNS to drop traffic routed to US IP addresses.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Instruct all developers to only select European regions in the console UI.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "The Organization Policy constraint constraints/gcp.resourceLocations enforces data residency and sovereignty by restricting the physical geographic locations where GCP resources can be provisioned. Setting the value to European locations blocks creation of resources in US/Asia.",
    "distractors": {
      "A": "VPC subnets do not restrict Cloud Storage multi-region or global service provisioning.",
      "B": "Correct. constraints/gcp.resourceLocations declaratively restricts resource provisioning to approved geographic regions.",
      "C": "Cloud DNS cannot restrict where developers spin up VMs or create storage buckets.",
      "D": "Manual verbal instructions lack automated enforcement and fail compliance audit standards."
    },
    "gcloudCommand": "gcloud resource-manager org-policies set-policy --folder=789012345678 policy-resource-locations.yaml",
    "architectureComponents": [
      "Resource Manager",
      "Organization Policies",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations"
  },
  {
    "id": "ACE-D1-015",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Billing Roles & Permissions",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Assigning Billing Account User Role to Project Creators",
    "scenario": "Your organization wants project leads to be able to create new GCP projects and link them to the corporate Cloud Billing account, without giving them permission to view financial invoices, alter payment credit cards, or modify billing account settings. What role should you assign them on the Cloud Billing account?",
    "keywords": [
      "Cloud Billing",
      "roles/billing.user",
      "Project Creator",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "roles/billing.viewer",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "roles/resourcemanager.organizationAdmin",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "roles/billing.user",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "roles/billing.admin",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "roles/billing.user (Billing Account User) allows principals to associate (link) projects to the billing account and view basic account metadata, without granting permissions to view payment instruments, modify billing admins, or cancel the billing account.",
    "distractors": {
      "A": "roles/billing.viewer allows viewing invoices and spend data but does not grant permission to link new projects to the billing account.",
      "B": "Organization Admin grants full control over the entire resource hierarchy, massively violating least privilege.",
      "C": "Correct. roles/billing.user grants exact permission to link projects to the billing account without administrative or invoice access.",
      "D": "roles/billing.admin grants full control over the billing account, including modifying payment methods and managing billing roles."
    },
    "gcloudCommand": "gcloud billing accounts add-iam-policy-binding 012345-6789AB-CDEF01 --member='group:project-creators@example.com' --role='roles/billing.user'",
    "architectureComponents": [
      "Cloud Billing",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/billing-access"
  },
  {
    "id": "ACE-D1-016",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Application Default Credentials (ADC)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Authenticating Local Development Workstation for Google Cloud Client Libraries",
    "scenario": "A developer is writing a local Python script that uses the official @google-cloud/storage client library to read objects from a Cloud Storage bucket. When running the script locally, it throws an AuthMetadataPluginError: Application Default Credentials not found. How should the developer authenticate their local workstation?",
    "keywords": [
      "gcloud auth application-default login",
      "ADC",
      "Client Libraries",
      "Cloud Storage SDK"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud auth login and copy the OAuth token into the Python source code.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Download the project owner's service account JSON key to ~/.gcp/credentials.json.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Change the bucket permissions to public (allUsers:objectViewer) so authentication is not needed.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Run gcloud auth application-default login in the terminal to obtain user credentials for Application Default Credentials (ADC).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "gcloud auth application-default login acquires user credentials and writes them to the standard Application Default Credentials (ADC) well-known file path, allowing Google Cloud client libraries to automatically authenticate local API calls.",
    "distractors": {
      "A": "gcloud auth login sets credentials for the gcloud CLI itself, but does not configure ADC for code SDKs/libraries.",
      "B": "Downloading service account keys to local machines violates credential security guidelines.",
      "C": "Making the bucket public exposes sensitive data and causes severe security compliance violations.",
      "D": "Correct. gcloud auth application-default login configures the standard ADC file used by all Google Cloud client libraries."
    },
    "gcloudCommand": "gcloud auth application-default login",
    "architectureComponents": [
      "Cloud SDK",
      "Cloud Storage",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/auth/application-default/login"
  },
  {
    "id": "ACE-D1-017",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Classes & Resiliency",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Cloud Storage Bucket with Archive Class and Dual-Region Redundancy",
    "scenario": "A healthcare compliance system requires creating a Cloud Storage bucket for long-term medical image archival. The images will be retained for 10 years, accessed less than once a year, and must be geo-redundantly protected across two specific US regions (us-central1 and us-east1). What gcloud command should you execute?",
    "keywords": [
      "Cloud Storage",
      "Archive Class",
      "Dual-Region",
      "gcloud storage",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud storage buckets create gs://medical-archive-10yr --location=us-central1,us-east1 --default-storage-class=ARCHIVE",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets create gs://medical-archive-10yr --location=global --default-storage-class=NEARLINE",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets create gs://medical-archive-10yr --location=US --default-storage-class=COLDLINE",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gsutil mb -c STANDARD -l us-central1 gs://medical-archive-10yr",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "The gcloud storage buckets create command supports specifying dual-region locations (--location=us-central1,us-east1) and setting --default-storage-class=ARCHIVE for optimal multi-year cold archive storage costs.",
    "distractors": {
      "A": "Correct. Dual-region location pairing with ARCHIVE storage class fulfills the long-term geo-redundancy and cost requirements.",
      "B": "There is no 'global' location for Cloud Storage buckets; buckets are regional, dual-region, or multi-region.",
      "C": "US multi-region is broader than the two requested regions and COLDLINE is more expensive for 10-year archival than ARCHIVE.",
      "D": "STANDARD class is designed for active data and single region us-central1 lacks cross-region disaster recovery."
    },
    "gcloudCommand": "gcloud storage buckets create gs://medical-archive-10yr --location=us-central1,us-east1 --default-storage-class=ARCHIVE",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/creating-buckets"
  },
  {
    "id": "ACE-D1-018",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Network Modes & Architecture",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Converting Auto Mode VPC Network to Custom Mode for Production Best Practices",
    "scenario": "A development project was initially launched using an Auto Mode VPC network (default). The network architecture team mandates that all VPC networks connected to enterprise on-premises networks must be in Custom Mode to prevent IP address overlaps with on-prem subnets. What should you do?",
    "keywords": [
      "VPC Auto Mode",
      "Custom Mode",
      "Subnet Overlap",
      "gcloud compute networks switch-mode"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a new custom VPC and use VPC Peering to route between Auto and Custom VPCs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Switch the VPC network from auto mode to custom mode using gcloud compute networks switch-mode default --mode=custom.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Auto mode VPCs cannot be converted; you must delete the entire project and start over.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Delete all subnets in the auto VPC and recreate the auto VPC.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud allows a one-way conversion of an Auto Mode VPC to a Custom Mode VPC using `gcloud compute networks switch-mode <network_name> --mode=custom`. Existing subnets and IP ranges remain intact, but no new automatic subnets will be created in future regions.",
    "distractors": {
      "A": "Converting the existing VPC is a single non-disruptive command; setting up new VPCs and peerings adds unnecessary complexity.",
      "B": "Correct. gcloud compute networks switch-mode converts auto mode VPCs to custom mode in-place without deleting resources.",
      "C": "Auto mode networks can be converted to custom mode (though the reverse conversion from custom to auto is not supported).",
      "D": "Deleting subnets does not convert the network mode property of the VPC network."
    },
    "gcloudCommand": "gcloud compute networks switch-mode default --mode=custom",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-vpc#switch-mode"
  },
  {
    "id": "ACE-D1-019",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Shared VPC Architecture & Service Projects",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Shared VPC Host and Service Projects",
    "scenario": "You are setting up a Shared VPC architecture where the centralized networking team manages the VPC network in project net-host-prod, and the application team deploys Compute Engine instances in project app-service-prod. How should you configure this relationship?",
    "keywords": [
      "Shared VPC",
      "Host Project",
      "Service Project",
      "Network Admin",
      "Centralized Networking"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure VPC Network Peering between net-host-prod and app-service-prod.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create an IPsec Cloud VPN tunnel between net-host-prod and app-service-prod.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Enable Shared VPC host in net-host-prod, and associate app-service-prod as a service project to net-host-prod.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant the application team roles/owner on the net-host-prod project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "Shared VPC allows an organization to connect resources from multiple service projects to a common VPC network in a host project. The Shared VPC Admin enables the host project (shared-vpc enable) and attaches the service project (shared-vpc service-projects associate).",
    "distractors": {
      "A": "VPC Peering connects two separate VPCs with distinct administrative domains, whereas Shared VPC allows instances in service projects to share subnets directly.",
      "B": "Cloud VPN is designed for hybrid or inter-cloud IPsec connectivity, not intra-organization multi-project network sharing.",
      "C": "Correct. Enabling the host project and associating the service project establishes the native Shared VPC structure.",
      "D": "Granting Owner on the host project violates separation of duties between central network engineers and application developers."
    },
    "gcloudCommand": "gcloud compute shared-vpc enable net-host-prod && gcloud compute shared-vpc service-projects associate app-service-prod --host-project=net-host-prod",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc"
  },
  {
    "id": "ACE-D1-020",
    "certId": "ace",
    "blockId": "BLOCK-2",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Custom IAM Roles & YAML Definitions",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Custom IAM Role from Predefined Role Definition",
    "scenario": "Your security team requires a specialized IAM role for tier-1 helpdesk support that allows starting, stopping, and resetting Compute Engine instances, but prevents creating instances, deleting instances, or modifying instance metadata. How should you create this role efficiently?",
    "keywords": [
      "Custom IAM Role",
      "Least Privilege",
      "gcloud iam roles create",
      "YAML Definition"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Service Account with Owner permissions and share the password with helpdesk staff.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Assign the primitive Viewer role and instruct users never to click the delete button in the console.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Assign roles/compute.instanceAdmin.v1 and write a Cloud Armor rule to block deletion API calls.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Create a custom IAM role at the project or organization level using gcloud iam roles create with specific permissions (compute.instances.start, compute.instances.stop, compute.instances.reset, compute.instances.get, compute.instances.list).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "When predefined roles grant excessive permissions, creating a Custom IAM Role with specific granular permissions (e.g. compute.instances.start, compute.instances.stop, compute.instances.reset) enforces precise least-privilege access.",
    "distractors": {
      "A": "Sharing service accounts with Owner permissions violates basic security identity and auditing requirements.",
      "B": "Viewer role does not permit starting, stopping, or resetting instances, and verbal policies are unenforceable.",
      "C": "Cloud Armor is an HTTP/WAF security tool for load balancers, not an IAM API policy gate.",
      "D": "Correct. A custom IAM role with exact VM lifecycle operation permissions satisfies the security constraint without excess rights."
    },
    "gcloudCommand": "gcloud iam roles create helpdeskVMOperator --project=prod-app-992 --title='Helpdesk VM Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.get,compute.instances.list --stage=GA",
    "architectureComponents": [
      "Cloud IAM",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/creating-custom-roles"
  },
  {
    "id": "ACE-D1-021",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Service Account Token Generation & Impersonation",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Delegating Short-Lived Token Generation with Service Account Token Creator",
    "scenario": "A deployment script running in Cloud Build needs to call an external API that requires a signed JWT assertion signed by a specific service account jwt-signer@corp.iam.gserviceaccount.com. How should you authorize Cloud Build without exporting private keys?",
    "keywords": [
      "Cloud Build",
      "Service Account Token Creator",
      "JWT Signing",
      "Keyless Auth"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Assign roles/owner to the Cloud Build service account at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Enable Google Workspace Domain-Wide Delegation on the Cloud Build service account.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant roles/iam.serviceAccountTokenCreator to the Cloud Build service account on jwt-signer@corp.iam.gserviceaccount.com.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Generate a JSON key for jwt-signer and store it in Secret Manager, then download it during build.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "The roles/iam.serviceAccountTokenCreator role allows a principal (such as the Cloud Build service account) to create short-lived OAuth 2.0 access tokens, OpenID Connect (OIDC) ID tokens, and sign JWT payloads on behalf of the target service account directly via the IAM Credentials API without private keys.",
    "distractors": {
      "A": "roles/owner does not automatically grant IAM Credentials API signing permissions and severely violates least privilege.",
      "B": "Domain-Wide Delegation is for Google Workspace OAuth scopes, not GCP internal IAM token creation.",
      "C": "Correct. roles/iam.serviceAccountTokenCreator allows programmatic keyless JWT signing via the IAM Credentials API.",
      "D": "Storing static JSON keys in Secret Manager still relies on static credentials that require rotation."
    },
    "gcloudCommand": "gcloud iam service-accounts add-iam-policy-binding jwt-signer@corp.iam.gserviceaccount.com --member='serviceAccount:1234567890@cloudbuild.gserviceaccount.com' --role='roles/iam.serviceAccountTokenCreator'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Build"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-overview#token-creator-role"
  },
  {
    "id": "ACE-D1-022",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Identity & Directory Sync (GCDS)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Synchronizing On-Premises Active Directory Users with Google Cloud Directory Sync",
    "scenario": "An enterprise maintains 5,000 corporate identities in an on-premises Microsoft Active Directory. They are adopting Google Cloud and want all employee accounts, groups, and membership changes in Active Directory to automatically synchronize to Cloud Identity in one direction without exposing user passwords to the cloud. Which tool should they deploy?",
    "keywords": [
      "Cloud Identity",
      "GCDS",
      "Active Directory",
      "User Provisioning",
      "SAML SSO"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Write a PowerShell script that exports AD users to CSV and runs gcloud iam service-accounts create.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Configure Anthos Config Management to mirror Active Directory LDAP trees.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Grant all on-prem users individual personal Gmail accounts and add them to IAM policies.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Install and configure Google Cloud Directory Sync (GCDS) in the on-premises environment.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Directory Sync (GCDS) is Google's authoritative tool for one-way synchronization of users, groups, and organizational units from Microsoft Active Directory / LDAP to Google Cloud Identity / Google Workspace.",
    "distractors": {
      "A": "Employees are human users in Cloud Identity, not GCP service accounts, and custom scripts lack delta sync and conflict resolution.",
      "B": "Anthos Config Management manages Kubernetes cluster configurations from Git, not Active Directory identity synchronization.",
      "C": "Using personal consumer Gmail accounts for enterprise infrastructure access violates corporate governance and security auditing.",
      "D": "Correct. GCDS performs one-way automated synchronization of users and groups from Active Directory to Cloud Identity."
    },
    "gcloudCommand": "gcloud identity groups memberships search --group-email='all-engineers@corp.com'",
    "architectureComponents": [
      "Cloud Identity",
      "Cloud IAM",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/architecture/identity/syncing-active-directory-to-cloud-identity"
  },
  {
    "id": "ACE-D1-023",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud CLI Project & Billing Operations",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating a Project and Linking to Billing Account via CLI",
    "scenario": "You are writing an automated onboarding script. The script must create a new project named 'mobile-analytics-prod', place it under folder ID 9876543210, and link it to the corporate billing account '01A2B3-45C6D7-89E0F1'. Which sequence of gcloud commands accomplishes this?",
    "keywords": [
      "gcloud projects create",
      "gcloud beta billing projects link",
      "CLI Automation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Run gcloud projects create mobile-analytics-prod --folder=9876543210 followed by gcloud billing projects link mobile-analytics-prod --billing-account=01A2B3-45C6D7-89E0F1.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Run gcloud resource-manager folders add-project mobile-analytics-prod --billing-account=01A2B3-45C6D7-89E0F1.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Run gcloud compute projects create mobile-analytics-prod --billing=01A2B3-45C6D7-89E0F1.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Run gcloud organizations create mobile-analytics-prod and attach the billing card.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Creating a project under a folder uses `gcloud projects create <PROJECT_ID> --folder=<FOLDER_ID>`, and associating a billing account uses `gcloud billing projects link <PROJECT_ID> --billing-account=<ACCOUNT_ID>`.",
    "distractors": {
      "A": "Correct. `gcloud projects create` creates the resource in the hierarchy, and `gcloud billing projects link` links the billing account.",
      "B": "`gcloud resource-manager folders add-project` is invalid CLI syntax.",
      "C": "`gcloud compute projects create` is invalid syntax; project creation belongs to the `projects` command group.",
      "D": "`gcloud organizations create` is invalid; organizations are provisioned via Cloud Identity/Workspace, not CLI commands."
    },
    "gcloudCommand": "gcloud projects create mobile-analytics-prod --folder=9876543210 && gcloud billing projects link mobile-analytics-prod --billing-account=01A2B3-45C6D7-89E0F1",
    "architectureComponents": [
      "Resource Manager",
      "Cloud Billing",
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/billing/projects/link"
  },
  {
    "id": "ACE-D1-024",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud IAM Conditions & Temporary Access",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Applying IAM Conditions for Time-Bound Temporary Contractor Access",
    "scenario": "An external database consultant is hired to assist with performance tuning for a 48-hour maintenance window ending on September 30, 2026 at 23:59 UTC. You must grant them roles/cloudsql.admin on project finance-prod that automatically expires precisely at the deadline without requiring manual admin intervention.",
    "keywords": [
      "IAM Conditions",
      "Time-Bound Access",
      "request.time",
      "Least Privilege",
      "Cloud SQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Issue a Service Account key with an expiration date embedded in the JSON file header.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudsql.admin with an IAM Condition expression checking request.time < timestamp('2026-09-30T23:59:59Z').",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Assign the role on a VM instance metadata tag rather than IAM.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Create a calendar reminder for the administrator to manually revoke the role on September 30.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "IAM Conditions allow attaching conditional logic to IAM role bindings. Using the built-in attribute `request.time < timestamp('...')` guarantees that the permission is automatically denied once the timestamp passes, with zero administrative overhead.",
    "distractors": {
      "A": "Standard Service Account JSON private keys do not have built-in client-side expiration headers enforced by GCP IAM.",
      "B": "Correct. Native IAM Conditions evaluate `request.time` on every API request and automatically deactivate access after the expiration timestamp.",
      "C": "IAM permissions are evaluated on IAM policy bindings, not arbitrary VM metadata tags.",
      "D": "Manual reminders introduce severe risk of orphaned privileges if an administrator forgets or is delayed."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding finance-prod --member='user:consultant@partner.com' --role='roles/cloudsql.admin' --condition='expression=request.time < timestamp(\"2026-09-30T23:59:59Z\"),title=Temporary_Tuning_Access'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud SQL",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/conditions-overview"
  },
  {
    "id": "ACE-D1-025",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud Components Management",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Updating and Installing gcloud CLI Additional Components",
    "scenario": "You installed the Google Cloud SDK on your Linux workstation. You now need to deploy and manage a Google Kubernetes Engine (GKE) cluster, which requires the kubectl CLI and the GKE authentication plugin (gke-gcloud-auth-plugin). How should you install these components?",
    "keywords": [
      "gcloud components install",
      "kubectl",
      "gke-gcloud-auth-plugin",
      "Cloud SDK"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Download kubectl from Docker Hub and copy it into the /tmp directory.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Reinstall the entire Google Cloud SDK from scratch choosing the Kubernetes bundle.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Run gcloud components install kubectl gke-gcloud-auth-plugin.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Run gcloud config set components/enable kubectl.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud components install <component_id>` is the standard command to install additional tools and utilities bundled with the Google Cloud SDK, including `kubectl`, `gke-gcloud-auth-plugin`, `cbt`, and `bq`.",
    "distractors": {
      "A": "Downloading random binaries from third-party hubs bypasses package management and official version compatibility.",
      "B": "Reinstalling the entire SDK is unnecessary when `gcloud components install` adds packages dynamically.",
      "C": "Correct. `gcloud components install` installs officially supported SDK tools and dependencies.",
      "D": "`gcloud config set components/enable` is invalid syntax."
    },
    "gcloudCommand": "gcloud components install kubectl gke-gcloud-auth-plugin",
    "architectureComponents": [
      "Cloud SDK",
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/docs/components"
  },
  {
    "id": "ACE-D1-026",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Retention Policy & Bucket Lock",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Protecting Regulatory Data with Cloud Storage Bucket Lock and Retention Policy",
    "scenario": "Under SEC Rule 17a-4 compliance, an investment firm must store electronic trading transaction logs in Cloud Storage such that objects cannot be deleted, modified, or overwritten by ANY user (including project owners and Google Cloud administrators) for a strict duration of 7 years (220,752,000 seconds). How must you configure the bucket?",
    "keywords": [
      "Cloud Storage",
      "Retention Policy",
      "Bucket Lock",
      "WORM Storage",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apply a CMEK encryption key and destroy the key after writing the data.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Remove the storage.objects.delete permission from all IAM roles on the project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Enable Object Versioning on the bucket with 10 maximum versions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Set a Retention Policy of 220752000s on the bucket and permanently lock it using gcloud storage retention-policies lock.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Retention Policies enforce Write Once, Read Many (WORM) compliance. Once a retention policy is locked using Bucket Lock (`gcloud storage retention-policies lock`), the policy becomes permanent and immutable: no one, not even Project Owners, can delete the policy or delete objects until their individual retention period expires.",
    "distractors": {
      "A": "Destroying the CMEK key renders the data unreadable, destroying the business records rather than preserving them for audit.",
      "B": "Removing IAM delete permissions can be undone at any time by Project Owners and does not satisfy SEC WORM immutable compliance.",
      "C": "Object Versioning retains older versions but allows deleting the bucket or objects if permissions exist.",
      "D": "Correct. Applying a retention policy and locking it guarantees immutable WORM storage compliance."
    },
    "gcloudCommand": "gcloud storage buckets update gs://trading-records-immutable --retention-period=220752000s && gcloud storage retention-policies lock gs://trading-records-immutable",
    "architectureComponents": [
      "Cloud Storage",
      "Compliance",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock"
  },
  {
    "id": "ACE-D1-027",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Network Peering Route Exchange",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Understanding VPC Network Peering Route Exchange & Transitivity",
    "scenario": "Network Engineering has connected VPC-A to VPC-B using VPC Network Peering, and connected VPC-B to VPC-C using VPC Network Peering. A virtual machine in VPC-A attempts to send traffic to a virtual machine in VPC-C. The connection fails. Why is traffic unable to flow between VPC-A and VPC-C?",
    "keywords": [
      "VPC Peering",
      "Non-Transitive Routing",
      "Network Architecture",
      "VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "VPC Network Peering is non-transitive; VPC-A cannot reach VPC-C through VPC-B without a direct peering connection between VPC-A and VPC-C.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "VPC-B requires an external HTTP load balancer to proxy the traffic.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "VPC Peering requires both networks to share the exact same CIDR range.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "VPC Peering only supports ICMP ping packets, not TCP/UDP traffic.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud VPC Network Peering is strictly non-transitive. If VPC-A is peered with VPC-B, and VPC-B is peered with VPC-C, routes from VPC-C are NOT advertised to VPC-A. Direct communication requires creating a direct peering between VPC-A and VPC-C (or using a VPN/Interconnect hub-and-spoke or Network Connectivity Center).",
    "distractors": {
      "A": "Correct. VPC Network Peering is non-transitive by design in Google Cloud.",
      "B": "VPC Peering is a private L3 routing mechanism, not an L7 HTTP proxying requirement.",
      "C": "Peered VPCs must have non-overlapping IP address ranges; identical CIDRs cause peering creation to fail.",
      "D": "VPC Peering supports all standard IP protocols (TCP, UDP, ICMP, ESP, etc.), not just ICMP."
    },
    "gcloudCommand": "gcloud compute networks peerings create peer-a-to-c --network=vpc-a --peer-network=vpc-c --auto-create-routes",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/vpc-peering#non-transitive"
  },
  {
    "id": "ACE-D1-028",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud IAM Deny Policies & Precedence",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Evaluating IAM Deny Policies Precedence and Scope",
    "scenario": "A security team configured an IAM Deny policy on the 'Production-Databases' folder denying the permission cloudsql.instances.delete to allPrincipals except group:ciso-emergency@corp.com. A developer who has the primitive Owner role on a project inside this folder attempts to delete a Cloud SQL instance. What will happen and why?",
    "keywords": [
      "Cloud IAM Deny Policies",
      "Precedence Order",
      "Owner Role",
      "Least Privilege"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "The deletion request will succeed because the primitive Owner role has absolute override authority over Deny policies.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "The deletion request will be denied because IAM Deny policies are evaluated first and always override any allow policies, including Owner role permissions.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "The deletion request will succeed because project-level Allow policies take precedence over folder-level Deny policies.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "The Cloud SQL instance will enter a suspended state for 24 hours before being deleted.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "In Google Cloud IAM policy evaluation, Deny policies take precedence over all Allow policies. When an API call is made, GCP evaluates Deny policies first: if a matching Deny rule applies to the principal, access is immediately denied regardless of any Allow rules (even primitive roles like Owner or Editor).",
    "distractors": {
      "A": "Primitive Owner role does NOT bypass IAM Deny policies.",
      "B": "Correct. IAM Deny policies always override Allow policies in the evaluation hierarchy.",
      "C": "Resource hierarchy inheritance does not allow child Allow policies to override parent Deny policies.",
      "D": "Cloud SQL deletion is rejected immediately by the IAM control plane with HTTP 403 Forbidden."
    },
    "gcloudCommand": "gcloud iam deny-policies create deny-sql-delete --folder=9876543210 --policy-file=deny-sql-rule.json",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud SQL",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/deny-overview"
  },
  {
    "id": "ACE-D1-029",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Workload Identity Federation",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Implementing Workload Identity Federation for AWS/GitHub Actions",
    "scenario": "Your continuous integration pipeline runs on GitHub Actions. The workflow needs to deploy container images to Google Artifact Registry in project app-deploy-prod. Corporate security policy prohibits creating, managing, or downloading static Service Account JSON keys. How should you authenticate GitHub Actions to GCP?",
    "keywords": [
      "Workload Identity Federation",
      "GitHub Actions",
      "OIDC",
      "No Service Account Keys"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Set the Artifact Registry repository permissions to public read/write.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Generate a 1-year service account key and encrypt it using GitHub Secrets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Configure a Workload Identity Pool and Provider for GitHub OIDC, and grant the GitHub repository identity permission to impersonate the deployment Service Account.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Store the GCP root administrator credentials in GitHub Actions environment variables.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "Workload Identity Federation enables external workloads (GitHub Actions, AWS, Azure, GitLab) to authenticate to Google Cloud using short-lived OpenID Connect (OIDC) tokens. GCP verifies the token via the Workload Identity Pool Provider and exchanges it for a temporary GCP STS token, completely eliminating static JSON keys.",
    "distractors": {
      "A": "Making the artifact repository public allows anyone on the internet to push malicious code into your production registry.",
      "B": "Storing long-lived JSON keys in GitHub Secrets still carries risk of secret exfiltration and requires key rotation.",
      "C": "Correct. Workload Identity Federation allows keyless OIDC token exchange directly between GitHub Actions and Google Cloud IAM.",
      "D": "Root admin credentials in CI/CD pipeline variables creates a catastrophic security vulnerability."
    },
    "gcloudCommand": "gcloud iam workload-identity-pools providers create-oidc github-provider --workload-identity-pool=ci-pool --location=global --issuer-uri='https://token.actions.githubusercontent.com' --attribute-mapping='google.subject=assertion.sub,attribute.repository=assertion.repository'",
    "architectureComponents": [
      "Cloud IAM",
      "Artifact Registry",
      "Cloud Build"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation"
  },
  {
    "id": "ACE-D1-030",
    "certId": "ace",
    "blockId": "BLOCK-3",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Logging IAM Roles & Access Control",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Restricting Sensitive Audit Log Visibility with Private Logs Viewer Role",
    "scenario": "A junior security analyst needs to view standard operational application logs and GCE system logs in Cloud Logging across the production project, but must be strictly blocked from viewing sensitive Data Access Audit Logs (such as BigQuery data reads or Cloud Storage object access records). What IAM role should you assign?",
    "keywords": [
      "Cloud Logging",
      "roles/logging.viewer",
      "Private Logs Viewer",
      "Data Access Logs"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "roles/logging.admin",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "roles/viewer",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "roles/logging.privateLogViewer",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "roles/logging.viewer",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "roles/logging.viewer (Logs Viewer) grants access to standard system and application logs, but explicitly does NOT grant access to sensitive Data Access audit logs in the _Default or _Required log views. Accessing Data Access audit logs requires the elevated roles/logging.privateLogViewer role.",
    "distractors": {
      "A": "roles/logging.admin grants full read/write/delete permissions across all logs and log sinks.",
      "B": "Primitive Viewer role grants broad viewing across many other unrelated GCP services.",
      "C": "roles/logging.privateLogViewer grants explicit access to view sensitive Data Access audit logs, which violates the restriction.",
      "D": "Correct. roles/logging.viewer excludes sensitive Data Access audit logs, satisfying least privilege."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding prod-core-1102 --member='user:analyst@corp.com' --role='roles/logging.viewer'",
    "architectureComponents": [
      "Cloud Logging",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/logging/docs/access-control"
  },
  {
    "id": "ACE-D1-031",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Billing Credits & Budget Caps",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Billing Credit Allocations and Spend Caps",
    "scenario": "A startup received $100,000 in Google Cloud promotional credits. The CFO wants to ensure that cloud spend is strictly capped and that promotional credits are not accidentally consumed by an experimental project. How should the billing administrator structure the billing setup?",
    "keywords": [
      "Cloud Billing",
      "Promotional Credits",
      "Project Association",
      "Cost Allocation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Cloud Billing account for the experimental project tied to a standard corporate credit card, keeping production projects linked to the credit-funded billing account.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Link all projects to the same billing account and rely on monthly budget alerts to stop VMs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Set the maximum spend limit to $0 in the project metadata.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Use IAM deny policies to block billing charges on the experimental project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Promotional credits are applied at the Cloud Billing account level across all linked projects. To prevent experimental workloads from consuming promotional credits, you must create a distinct billing account backed by a separate payment method and link the experimental project to it.",
    "distractors": {
      "A": "Correct. Creating separate billing accounts provides complete financial isolation and prevents credit burn by non-eligible projects.",
      "B": "Promotional credits apply automatically across all projects on that billing account regardless of alerts.",
      "C": "GCP does not support hard spending caps via project metadata.",
      "D": "IAM policies control API authorization, not monetary billing credit consumption."
    },
    "gcloudCommand": "gcloud billing projects link experimental-ai-lab --billing-account=01B890-CDEF12-345678",
    "architectureComponents": [
      "Cloud Billing",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/manage-billing-account"
  },
  {
    "id": "ACE-D1-032",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "IAM Inheritance & Hierarchy Overrides",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing Folder-Level IAM Inheritance and Least Privilege Overrides",
    "scenario": "A developer is granted `roles/compute.viewer` at the root Organization node, and `roles/compute.instanceAdmin.v1` on a specific child project `frontend-dev`. What effective Compute Engine permissions will the developer have in project `frontend-dev`?",
    "keywords": [
      "IAM Inheritance",
      "Union of Permissions",
      "Effective Permissions",
      "Hierarchy"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Access is blocked until the Organization Admin approves a role exception.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Read-only viewer permissions because higher-level Organization permissions always override lower-level project permissions.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "No access because conflicting roles cancel each other out.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Full administrative control over Compute Engine instances in frontend-dev because IAM permissions are additive (union of all inherited roles).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "In Google Cloud IAM, permissions are strictly additive (the union of all policy bindings applied at the organization, folder, project, and resource levels). Granting Viewer at the org level and Instance Admin at the project level results in the developer having full Instance Admin rights in that project.",
    "distractors": {
      "A": "IAM evaluates immediately without manual per-action approval queues.",
      "B": "Higher-level policies do not restrict or override more permissive child allow policies.",
      "C": "IAM roles do not cancel each other out; permissions are the union of all granted roles.",
      "D": "Correct. IAM policy evaluation combines all inherited and direct role bindings additively."
    },
    "gcloudCommand": "gcloud projects get-iam-policy frontend-dev --format=json",
    "architectureComponents": [
      "Cloud IAM",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-hierarchy"
  },
  {
    "id": "ACE-D1-033",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Service Account Key Rotation & Deprecation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Managing and Rotating User-Managed Service Account Keys",
    "scenario": "A legacy third-party on-premises application uses a static user-managed Service Account JSON key to upload nightly batches to Cloud Storage. Corporate compliance mandates key rotation every 90 days with zero downtime. How should the cloud engineer perform this rotation?",
    "keywords": [
      "Service Account Keys",
      "Zero Downtime Key Rotation",
      "Cloud Storage",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a new secondary JSON key for the service account, deploy the new key to the application, verify successful uploads, and delete the old key.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Change the password of the service account in Cloud Identity.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Rotate the Cloud KMS master encryption key.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Delete the existing key first, then create a new key and update the application.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "A service account can have multiple active user-managed keys concurrently. Zero-downtime rotation involves: 1) creating the new key, 2) deploying the new key to the client application, 3) verifying application functionality, and 4) deleting the retired old key.",
    "distractors": {
      "A": "Correct. Staged key rotation with dual active keys ensures uninterrupted application operation.",
      "B": "Service accounts do not have passwords in Cloud Identity; they authenticate via cryptographic keys or tokens.",
      "C": "Cloud KMS keys encrypt data at rest, but do not authenticate the service account to the Cloud Storage API.",
      "D": "Deleting the existing key prior to deployment immediately breaks running workloads."
    },
    "gcloudCommand": "gcloud iam service-accounts keys create ./new-key.json --iam-account=uploader-sa@corp-data.iam.gserviceaccount.com && gcloud iam service-accounts keys delete OLD_KEY_ID --iam-account=uploader-sa@corp-data.iam.gserviceaccount.com",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Storage",
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys#key-rotation"
  },
  {
    "id": "ACE-D1-034",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud SDK Environment Variables",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Overriding Cloud SDK Properties with Environment Variables",
    "scenario": "You are writing a bash automation script that runs in an automated CI container. You want all `gcloud` CLI commands within the script execution to target project `billing-pipeline-prod` without modifying the global or persistent local gcloud configuration files on the runner. What environment variable should you set?",
    "keywords": [
      "CLOUDSDK_CORE_PROJECT",
      "Environment Variables",
      "Cloud SDK",
      "CI/CD Automation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "export GCP_ACTIVE_PROJECT=billing-pipeline-prod",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "export CLOUDSDK_CORE_PROJECT=billing-pipeline-prod",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "export GOOGLE_CLOUD_PROJECT_ID=billing-pipeline-prod",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "export GCLOUD_PROJECT_DEFAULT=billing-pipeline-prod",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "The Google Cloud SDK recognizes `CLOUDSDK_CORE_PROJECT` as the authoritative environment variable to override the active project property for all executing gcloud commands in the process environment.",
    "distractors": {
      "A": "`GCP_ACTIVE_PROJECT` is not an official gcloud CLI recognized environment variable.",
      "B": "Correct. `CLOUDSDK_CORE_PROJECT` is the official SDK environment variable for overriding the core/project configuration.",
      "C": "`GOOGLE_CLOUD_PROJECT_ID` is not recognized by standard gcloud CLI tools (though some client libraries recognize `GOOGLE_CLOUD_PROJECT`).",
      "D": "`GCLOUD_PROJECT_DEFAULT` is invalid."
    },
    "gcloudCommand": "export CLOUDSDK_CORE_PROJECT=billing-pipeline-prod && gcloud compute instances list",
    "architectureComponents": [
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables"
  },
  {
    "id": "ACE-D1-035",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Object Versioning & Lifecycle",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Object Versioning and Noncurrent Object Lifecycle Deletion",
    "scenario": "A content management application frequently overwrites images in a Cloud Storage bucket. To protect against accidental overwrites or malicious deletions, you must enable Object Versioning. However, to control storage costs, noncurrent (archived) versions must be permanently deleted after 30 days. How should you configure the bucket?",
    "keywords": [
      "Cloud Storage",
      "Object Versioning",
      "Lifecycle Rule",
      "Noncurrent Versions",
      "Cost Control"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Change the default storage class to Coldline.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Enable Bucket Lock with a 30-day retention duration.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Enable Object Versioning on the bucket and configure a Lifecycle rule with condition 'DaysSinceNoncurrentTime: 30' and action 'Delete'.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Schedule a daily cron job running gsutil rm -r gs://bucket/**.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Object Versioning keeps historical versions of objects when overwritten or deleted. Combining Object Versioning with a lifecycle rule utilizing `DaysSinceNoncurrentTime: 30` (or `NumNewerVersions` / `Age`) automatically purges noncurrent versions after 30 days to optimize cost.",
    "distractors": {
      "A": "Changing storage class does not manage object version retention or deletion.",
      "B": "Bucket Lock prevents deletion of all objects (including live ones) and does not manage version lifecycles.",
      "C": "Correct. Object versioning preserves deleted/overwritten objects while lifecycle rules clean up aged noncurrent versions.",
      "D": "Running recursive delete scripts deletes active live objects and risks total data loss."
    },
    "gcloudCommand": "gcloud storage buckets update gs://media-cms-bucket --versioning && gcloud storage buckets update gs://media-cms-bucket --lifecycle-file=lifecycle-noncurrent.json",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/object-versioning"
  },
  {
    "id": "ACE-D1-036",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Private Google Access & VPC Subnets",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enabling Private Google Access on Subnets for Secure API Access",
    "scenario": "You have Compute Engine virtual machines in a custom subnet `10.20.0.0/24` in `us-east1`. None of the VMs have external public IP addresses. The applications on these VMs need to read and write data to Google Cloud Storage and BigQuery without traversing the public internet. What configuration must you apply?",
    "keywords": [
      "Private Google Access",
      "VPC Subnet",
      "Cloud Storage",
      "BigQuery",
      "Internal IP"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Deploy a squid proxy VM with a public IP in the subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Assign an ephemeral public IP address to each VM and create an ingress firewall rule.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Create a Cloud NAT Gateway and attach an external static IP.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "Enable Private Google Access on the subnet us-east1 in the VPC network.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Private Google Access allows Compute Engine instances with only internal IP addresses in a subnet to reach Google APIs and services (Cloud Storage, BigQuery, Pub/Sub) via internal Google routing without requiring external public IP addresses or NAT.",
    "distractors": {
      "A": "Third-party proxy VMs introduce single points of failure and operational maintenance.",
      "B": "Assigning public IPs violates the security constraint and exposes instances to inbound scans.",
      "C": "Cloud NAT is for outbound internet access to general 3rd-party websites, not internal Google API access.",
      "D": "Correct. Private Google Access enabled on the subnet enables private routing to Google APIs directly."
    },
    "gcloudCommand": "gcloud compute networks subnets update prod-sub-useast1 --region=us-east1 --enable-private-ip-google-access",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-google-access"
  },
  {
    "id": "ACE-D1-037",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Firewall Rules & Priority Evaluation",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring VPC Ingress Firewall Rules Priority and Target Tags",
    "scenario": "You need to allow incoming HTTPS (port 443) traffic from the public internet (0.0.0.0/0) only to Compute Engine instances with the network tag `web-frontend`, while blocking all other ingress traffic. How should you configure firewall rules in the VPC?",
    "keywords": [
      "VPC Firewall",
      "Target Tags",
      "Priority",
      "Ingress Rules",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an ingress firewall rule with priority 1000, target tag 'web-frontend', allowed protocol/port tcp:443, source IP range 0.0.0.0/0, and rely on the implied default deny ingress rule (priority 65535).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Create a single firewall rule allowing port 443 with priority 65535 and no target tags.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Delete the default VPC ingress deny rule and add a custom deny rule at priority 0.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Create an egress rule allowing 443 and attach it to the VPC route table.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "VPC networks have an implied default deny ingress rule with priority 65535. Creating an allow ingress rule with higher priority (e.g. 1000) targeting specific network tags (`--target-tags=web-frontend`) permits traffic strictly to tagged instances while all untagged instances remain protected.",
    "distractors": {
      "A": "Correct. Specific allow rule targeting tags at priority 1000 combined with implied deny rule (priority 65535) provides secure isolation.",
      "B": "A rule with no target tags applies to all instances in the VPC, exposing backend instances.",
      "C": "Implied default rules cannot be deleted, and priority 0 deny blocks all traffic including management.",
      "D": "Inbound web traffic requires an ingress rule, not an egress rule."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-https-web --network=prod-vpc --allow=tcp:443 --target-tags=web-frontend --source-ranges=0.0.0.0/0 --direction=INGRESS --priority=1000",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls"
  },
  {
    "id": "ACE-D1-038",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Organization Policy SA Key Restriction",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Enforcing Organization Policy to Disable Service Account Key Creation",
    "scenario": "To prevent credential leakage to GitHub repositories, your security director requires that NO user in the organization may create user-managed Service Account JSON keys. How should you enforce this guardrail enterprise-wide?",
    "keywords": [
      "Organization Policy",
      "iam.disableServiceAccountKeyCreation",
      "Guardrails",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure Cloud Build to scan developer code repositories for JSON strings.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Enforce the Organization Policy constraint constraints/iam.disableServiceAccountKeyCreation at the Organization root node.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Revoke the roles/owner role from all project administrators.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Write a Cloud Function to poll IAM API and delete service accounts when keys are detected.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "The boolean Organization Policy constraint `constraints/iam.disableServiceAccountKeyCreation` set to `enforced: true` at the Organization level completely blocks any API request attempting to generate user-managed service account keys across all projects.",
    "distractors": {
      "A": "Scanning Git repositories only detects committed keys after they have already been created and possibly leaked.",
      "B": "Correct. `constraints/iam.disableServiceAccountKeyCreation` is the authoritative Google-recommended org constraint to eliminate SA key generation.",
      "C": "Revoking Owner role disrupts operations and does not prevent users with Service Account Key Admin from creating keys.",
      "D": "Reactive scanning is imperfect and allows a window of credential exposure before deletion."
    },
    "gcloudCommand": "gcloud resource-manager org-policies enable-enforce iam.disableServiceAccountKeyCreation --organization=123456789012",
    "architectureComponents": [
      "Resource Manager",
      "Organization Policies",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/organization-policy-service-accounts#disable-key-creation"
  },
  {
    "id": "ACE-D1-039",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "IAM Recommender & Least Privilege",
    "difficulty": "intermediate",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Remediating Overprivileged Roles Using IAM Recommender Insights",
    "scenario": "Your company's IAM security dashboard flags several project accounts with high risk scores. You want to use Google Cloud IAM Recommender to identify unused permissions and replace broad primitive roles with right-sized predefined roles. How should you view and apply these recommendations?",
    "keywords": [
      "IAM Recommender",
      "Least Privilege",
      "Role Right-Sizing",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Disable Cloud IAM audit logging to silence recommender warnings.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Convert all project users to Organization Admins.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Review recommendations in the IAM section of Cloud Console or run gcloud recommender recommendations list, inspect the suggested predefined roles, and apply the policy binding update.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Delete the flagged user accounts and require users to submit new access request tickets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud IAM Recommender analyzes role grant usage over a 90-day window using machine learning and provides actionable recommendations to replace overly permissive roles (like Editor or Owner) with least-privilege predefined roles.",
    "distractors": {
      "A": "Disabling logging hides security issues and destroys compliance audit trails.",
      "B": "Granting Org Admin drastically expands attack surface and completely violates security policy.",
      "C": "Correct. IAM Recommender provides ML-driven, right-sized role recommendations based on actual observed permission usage.",
      "D": "Deleting active user accounts abruptly breaks ongoing business tasks and team productivity."
    },
    "gcloudCommand": "gcloud recommender recommendations list --project=prod-core-1102 --location=global --recommender=google.iam.policy.Recommender",
    "architectureComponents": [
      "Cloud IAM",
      "Recommender"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/recommender-overview"
  },
  {
    "id": "ACE-D1-040",
    "certId": "ace",
    "blockId": "BLOCK-4",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Billing Multi-Tenant Organization",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Associating Multiple Projects with a Single Multi-Tenant Cloud Billing Account",
    "scenario": "A corporate IT department manages 50 projects for various internal business divisions. To simplify invoicing and consolidate volume discount tiering, management wants all 50 projects billed on a single consolidated monthly corporate invoice. How should this be configured?",
    "keywords": [
      "Cloud Billing",
      "Billing Association",
      "Consolidated Invoicing",
      "Resource Hierarchy"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create 50 separate billing accounts with the same bank account details.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Merge all 50 projects into a single massive GCP project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Transfer project ownership to a third-party billing reseller.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Link all 50 projects to the same centralized Cloud Billing Account.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "A single Cloud Billing account can be linked to hundreds of Google Cloud projects across an organization, producing a unified consolidated invoice with itemized sub-charges while maximizing enterprise volume discounts.",
    "distractors": {
      "A": "Multiple billing accounts result in 50 separate monthly invoices and fragmented credit card management.",
      "B": "Merging projects destroys critical resource isolation, blast radius boundaries, and quota limits.",
      "C": "Involving third-party resellers is unnecessary for standard consolidated internal billing.",
      "D": "Correct. A 1-to-many relationship between a Billing Account and Projects allows unified consolidated invoicing."
    },
    "gcloudCommand": "gcloud billing projects link analytics-prod --billing-account=012345-6789AB-CDEF01",
    "architectureComponents": [
      "Cloud Billing",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/manage-billing-account"
  },
  {
    "id": "ACE-D1-041",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "gcloud CLI Output Formatting & Filtering",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Formatting gcloud Output with Projections and Filter Expressions",
    "scenario": "You are writing a script to inventory active Compute Engine instances in a project. You only want the output to display the VM name, zone, internal IP address, and status formatted as a clean tab-delimited table, filtering out stopped instances. Which gcloud command should you use?",
    "keywords": [
      "gcloud CLI",
      "--format",
      "--filter",
      "Compute Engine",
      "CLI Automation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "gcloud compute instances list --filter='status=RUNNING' --format='table(name,zone.basename(),networkInterfaces[0].networkIP:label=INTERNAL_IP,status)'",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute instances list --only-running --columns=name,zone,ip",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances list | grep RUNNING | awk '{print $1, $2, $4}'",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances describe all --format=csv",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "The gcloud CLI has built-in server-side and client-side filtering (`--filter`) and output transformations (`--format`). The `table()` format with column projections (like `zone.basename()` and nested slice `networkInterfaces[0].networkIP`) provides robust, scriptable structured formatting.",
    "distractors": {
      "A": "Correct. Using native `--filter` and `--format='table(...)'` is robust, structured, and resilient to CLI output changes.",
      "B": "`--only-running` and `--columns` are non-existent flags in gcloud compute instances list.",
      "C": "Piping through grep/awk is brittle, relies on positional column assumptions, and fails when output formatting shifts.",
      "D": "`describe all` is invalid syntax; `describe` operates on a single instance."
    },
    "gcloudCommand": "gcloud compute instances list --filter='status=RUNNING' --format='table(name,zone.basename(),networkInterfaces[0].networkIP:label=INTERNAL_IP,status)'",
    "architectureComponents": [
      "Cloud SDK",
      "Compute Engine"
    ],
    "officialDocUrl": "https://cloud.google.com/sdk/gcloud/reference/topic/filters"
  },
  {
    "id": "ACE-D1-042",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Dual-Region Architecture",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Dual-Region Storage for Low-Latency Active-Active Replication",
    "scenario": "An online gaming platform requires storing player profile assets with 99.99% availability and low-latency reads across both US East and US Central regions. The company requires automated replication and failover between these two specific geographic areas without paying for a full 3-region multi-region bucket. Which bucket location should be selected?",
    "keywords": [
      "Cloud Storage",
      "Dual-Region",
      "High Availability",
      "Turbo Replication"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A Multi-Region US bucket with lifecycle rules deleting files in us-west1.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "A predefined Dual-Region such as nam4 (us-central1 and us-east1) or custom dual-region pairing us-central1 and us-east1.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Two independent regional buckets configured with cross-bucket IAM sync.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "A single Regional bucket in us-central1 with a Cloud Function to copy files to us-east1.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage Dual-Region buckets provide geo-redundant storage with automatic cross-region replication and transparent failover between two designated regions (e.g. `us-central1` and `us-east1`) under a single bucket namespace.",
    "distractors": {
      "A": "Multi-Region buckets distribute data across all US data centers, not just two designated regions, and lifecycle rules cannot restrict region placement.",
      "B": "Correct. Dual-Region buckets provide native active-active geo-redundancy across two specific regions with a single unified bucket URL.",
      "C": "Cloud Storage does not offer 'cross-bucket IAM sync' for automated object synchronization.",
      "D": "Custom replication scripts introduce lag, high operational maintenance, and lack transparent failover."
    },
    "gcloudCommand": "gcloud storage buckets create gs://game-player-profiles --location=us-central1,us-east1 --default-storage-class=STANDARD",
    "architectureComponents": [
      "Cloud Storage"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations#dual-regions"
  },
  {
    "id": "ACE-D1-043",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Firewall Service Accounts vs Tags",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Comparing Network Tags and Service Accounts for Firewall Filtering",
    "scenario": "A security architect discovers that developers who have `roles/compute.instanceAdmin.v1` can bypass network security controls by adding network tags (e.g. `allow-ssh-all`) to their instances. The architect requires a firewall filtering mechanism that developers cannot manipulate without security admin authorization. What should you recommend?",
    "keywords": [
      "VPC Firewall",
      "Service Accounts",
      "Network Tags",
      "Least Privilege",
      "Security"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configure firewall rules to target specific Service Accounts rather than Network Tags, and restrict permissions to grant those Service Accounts.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Disable all firewall rules and rely exclusively on Linux iptables inside each VM.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Set the firewall rule priority to 0 for all tagged rules.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Use Cloud Armor security policies on the internal VPC subnets.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "Network tags can be modified by anyone with Compute Instance Admin permissions on a VM. In contrast, target Service Accounts in firewall rules provide cryptographically enforced, IAM-governed identity: only users with `roles/iam.serviceAccountUser` on the authorized service account can attach it to an instance, preventing tag-tampering privilege escalation.",
    "distractors": {
      "A": "Correct. Firewall rules based on Service Accounts enforce strict IAM access control over who can deploy instances subject to the rule.",
      "B": "Relying on in-guest iptables is unmanageable at scale and lacks centralized cloud perimeter enforcement.",
      "C": "Changing priority does not prevent unauthorized developers from applying the target tag to arbitrary VMs.",
      "D": "Cloud Armor is designed for HTTP/HTTPS Load Balancers, not subnet-level L3/L4 VPC packet filtering."
    },
    "gcloudCommand": "gcloud compute firewall-rules create allow-db-ingress --network=prod-vpc --allow=tcp:5432 --source-service-accounts=web-app-sa@prod.iam.gserviceaccount.com --target-service-accounts=db-sa@prod.iam.gserviceaccount.com",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Compute Engine",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/firewalls#service-accounts-vs-tags"
  },
  {
    "id": "ACE-D1-044",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "IAM Governance & Google Groups",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Implementing Google Groups for Scalable Enterprise IAM Governance",
    "scenario": "A company has 200 software developers who frequently rotate between development, staging, and analytics projects. To adhere to Google Cloud enterprise best practices, how should the IAM administrator manage permissions for these developers?",
    "keywords": [
      "Cloud IAM",
      "Google Groups",
      "Onboarding",
      "Scalable Governance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a Custom Role for each individual developer named after their employee ID.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create Google Groups (e.g. backend-devs@corp.com, frontend-devs@corp.com), assign IAM roles to the groups, and manage user access by adding/removing users from the groups in Cloud Identity.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Assign predefined IAM roles directly to each developer's individual email address on each project.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Create a shared service account and distribute the private key file to all 200 developers.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "Google's authoritative IAM best practice is to assign roles to Google Groups rather than individual users. Adding or removing a user from a Google Group automatically grants or revokes all associated GCP permissions across all projects, drastically reducing operational overhead and preventing orphaned permissions.",
    "distractors": {
      "A": "Creating hundreds of per-user custom roles is unmaintainable and hits GCP project custom role limits.",
      "B": "Correct. Google Groups centralize identity lifecycle management without requiring per-project IAM policy updates.",
      "C": "Per-user direct bindings create administrative chaos, policy bloat, and high risk of lingering permissions during offboarding.",
      "D": "Sharing service account keys completely destroys audit attribution and creates catastrophic security risks."
    },
    "gcloudCommand": "gcloud projects add-iam-policy-binding backend-dev-project --member='group:backend-devs@corp.com' --role='roles/developer'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Identity",
      "Resource Manager"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/groups-in-iam"
  },
  {
    "id": "ACE-D1-045",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Organization Admin vs Cloud Identity Super Admin",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Distinguishing Organization Administrator from Super Admin in Cloud Identity",
    "scenario": "A company is setting up its initial Google Cloud Organization. The IT department needs to distinguish between administrative roles in Cloud Identity / Google Workspace and administrative roles in Google Cloud Platform. Which statement accurately describes the relationship between a Super Admin and an Organization Administrator?",
    "keywords": [
      "Cloud Identity",
      "Super Admin",
      "Organization Administrator",
      "Resource Manager"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "GCP Organization Admins can reset user passwords in Google Workspace.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "A project Owner can delete the Organization Administrator role from the root node.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "A Cloud Identity Super Admin can assign the roles/resourcemanager.organizationAdmin role to themselves or others, but does not automatically possess GCP project-level permissions unless explicitly assigned.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "The Organization Administrator is automatically granted full admin rights in Microsoft Active Directory.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Identity / Google Workspace Super Admins have root authority over user accounts and domains. When an Organization is first created, Super Admins can assign the `roles/resourcemanager.organizationAdmin` role to manage GCP resource hierarchy, but they do not automatically hold resource-level roles (like Compute Admin or Storage Admin) unless granted.",
    "distractors": {
      "A": "GCP Org Admin manages cloud resources and IAM, not Workspace/Cloud Identity user account password resets.",
      "B": "Project-level owners have no permission on parent Organization or Folder nodes.",
      "C": "Correct. Super Admin manages the Identity directory and delegates the initial GCP Org Admin role.",
      "D": "GCP Organization Admin has no authority over on-premises Active Directory."
    },
    "gcloudCommand": "gcloud organizations add-iam-policy-binding 123456789012 --member='user:admin@corp.com' --role='roles/resourcemanager.organizationAdmin'",
    "architectureComponents": [
      "Resource Manager",
      "Cloud Identity",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/creating-managing-organization"
  },
  {
    "id": "ACE-D1-046",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Shell Architecture & Persistence",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Leveraging Cloud Shell Persistent Storage and Ephemeral VM Execution",
    "scenario": "A cloud engineer uses Google Cloud Shell for daily administrative tasks. The engineer clones Git repositories and writes utility scripts in their home directory (`$HOME`). Which of the following correctly describes Cloud Shell persistence and runtime behavior?",
    "keywords": [
      "Cloud Shell",
      "Persistent Home Directory",
      "5GB Storage",
      "Ephemeral VM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "All installed apt packages and system root files are permanently retained forever across all VM restarts.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud Shell deletes all files in $HOME immediately when the browser tab is closed.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Shell allocates a dedicated n2-standard-32 VM that runs 24/7 continuously without timeout.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "The $HOME directory is backed by 5 GB of persistent disk storage that persists across sessions, but installed packages outside $HOME and the underlying container VM are ephemeral.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Shell provisions an ephemeral Debian-based Docker container VM. Each user is allocated 5 GB of persistent disk storage mounted as `$HOME` which persists between sessions, while changes outside `$HOME` (such as `/usr` or `/etc`) are reset when the session terminates.",
    "distractors": {
      "A": "System-wide packages installed in root directories outside `$HOME` are lost after session inactivity shutdown.",
      "B": "Files inside `$HOME` are saved persistently and not deleted upon closing the browser tab.",
      "C": "Cloud Shell uses lightweight VMs with an inactivity timeout (terminating after 20-120 minutes of idle time).",
      "D": "Correct. Cloud Shell provides 5 GB persistent `$HOME` storage while the execution VM container is ephemeral."
    },
    "gcloudCommand": "echo 'export CLOUDSDK_CORE_PROJECT=my-project' >> ~/.bashrc",
    "architectureComponents": [
      "Cloud Shell",
      "Cloud SDK"
    ],
    "officialDocUrl": "https://cloud.google.com/shell/docs/how-cloud-shell-works"
  },
  {
    "id": "ACE-D1-047",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Cloud Storage Requester Pays",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Configuring Requester Pays for Public Cloud Storage Datasets",
    "scenario": "A genomics research institute hosts 50 TB of open-source genomic sequence data in a Cloud Storage bucket for global researchers. The institute wants to make the data public to anyone with a Google Cloud account, but requires that the downloading party pay for their own network egress and API request charges. How should the bucket be configured?",
    "keywords": [
      "Cloud Storage",
      "Requester Pays",
      "Billing",
      "Open Data",
      "Network Egress"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Enable Requester Pays on the bucket using gcloud storage buckets update gs://genomics-data --requester-pays.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Host the files on Compute Engine web servers with PayPal integration.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create individual IAM service accounts for all researchers worldwide.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Attach a Cloud Armor security policy requiring credit card authentication.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Enabling 'Requester Pays' on a Cloud Storage bucket ensures that the requester (downloading user/project) pays all network transfer, data access, and API request costs, while the bucket owner pays only for the base storage of the data.",
    "distractors": {
      "A": "Correct. Requester Pays requires callers to provide their own billing project flag (`--billing-project`) to cover egress costs.",
      "B": "Custom web servers add unnecessary infrastructure cost and operational overhead compared to native Cloud Storage.",
      "C": "Managing manual credentials for thousands of external researchers is completely unscalable.",
      "D": "Cloud Armor does not process credit cards or manage Cloud Storage billing attribution."
    },
    "gcloudCommand": "gcloud storage buckets update gs://genomics-open-data --requester-pays",
    "architectureComponents": [
      "Cloud Storage",
      "Cloud Billing"
    ],
    "officialDocUrl": "https://cloud.google.com/storage/docs/requester-pays"
  },
  {
    "id": "ACE-D1-048",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "VPC Subnet Secondary IP Range Expansion",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Adding Secondary IP Ranges to an Existing VPC Subnet",
    "scenario": "An existing production subnet `10.10.0.0/24` in `us-central1` was deployed without secondary IP ranges. You now need to deploy a new VPC-native GKE cluster into this subnet. How can you prepare the existing subnet for the GKE cluster without disrupting existing workloads?",
    "keywords": [
      "VPC Subnet",
      "Secondary IP Ranges",
      "GKE",
      "gcloud compute networks subnets update"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create a secondary VPC network and route between them with Cloud Router.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "Run gcloud compute networks subnets update with --add-secondary-ranges to append the Pod and Service ranges to the subnet.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Secondary ranges can only be configured at subnet creation time; you must migrate to a new region.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Delete the subnet and recreate it with the secondary ranges included.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud VPC allows adding secondary IPv4 ranges to existing subnets dynamically without downtime using `gcloud compute networks subnets update <subnet_name> --add-secondary-ranges=<range_name>=<cidr>`.",
    "distractors": {
      "A": "GKE secondary ranges reside within the local subnet, not across separate VPC networks.",
      "B": "Correct. `subnets update --add-secondary-ranges` dynamically attaches new secondary IP blocks to existing subnets.",
      "C": "Secondary ranges can be added to existing subnets at any time.",
      "D": "Deleting the subnet causes total outage for all existing workloads running on that subnet."
    },
    "gcloudCommand": "gcloud compute networks subnets update prod-subnet --region=us-central1 --add-secondary-ranges=gke-pods=10.200.0.0/16,gke-services=10.201.0.0/20",
    "architectureComponents": [
      "Virtual Private Cloud (VPC)",
      "Google Kubernetes Engine (GKE)"
    ],
    "officialDocUrl": "https://cloud.google.com/vpc/docs/use-subnets#add-secondary-range"
  },
  {
    "id": "ACE-D1-049",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "IAM Workload Identity Pool Setup",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Creating and Configuring Workload Identity Pools",
    "scenario": "Your enterprise wants to allow on-premises Kubernetes pods running on bare metal to securely authenticate to Google Cloud Pub/Sub. You want to establish trust between the on-prem OIDC identity provider and Google Cloud IAM. What is the first resource you must create in GCP?",
    "keywords": [
      "Workload Identity Pool",
      "OIDC Provider",
      "Cloud IAM",
      "Keyless Federation"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Generate a long-lived service account key and copy it into Kubernetes Secrets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Deploy a dedicated Cloud VPN tunnel and route all IAM traffic through on-prem.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create a Workload Identity Pool in the project using gcloud iam workload-identity-pools create.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant the Kubernetes cluster public IP address access in the IAM policy.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "To federate external identities (such as on-prem OIDC, AWS, or Azure) into GCP IAM, you must first create a Workload Identity Pool (`gcloud iam workload-identity-pools create`), which acts as the container and trust boundary for external identity providers.",
    "distractors": {
      "A": "Static keys violate keyless security best practices.",
      "B": "Workload Identity Federation operates at the application/OIDC identity layer via HTTPS, not requiring VPN tunnels.",
      "C": "Correct. Creating a Workload Identity Pool is the foundational first step for configuring keyless external federation.",
      "D": "IAM does not authenticate client requests based on source IP address whitelisting."
    },
    "gcloudCommand": "gcloud iam workload-identity-pools create onprem-k8s-pool --location=global --display-name='On-Premises K8s Pool'",
    "architectureComponents": [
      "Cloud IAM",
      "Cloud Pub/Sub"
    ],
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation"
  },
  {
    "id": "ACE-D1-050",
    "certId": "ace",
    "blockId": "BLOCK-5",
    "domainId": "ACE-D1",
    "domainName": "Setting up a cloud solution environment",
    "subtopic": "Resource Manager Project Liens",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 120,
    "caseStudy": "none",
    "title": "Preventing Accidental Project Deletion Using Resource Manager Project Liens",
    "scenario": "A mission-critical financial transaction project `finance-ledger-prod` must be safeguarded against accidental deletion by an administrator or automated script. What Google Cloud feature should you configure to block project deletion until explicitly removed?",
    "keywords": [
      "Project Lien",
      "resourcemanager.projects.delete",
      "Resource Protection",
      "Compliance"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Create an IAM Deny policy on compute.instances.delete.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Enable Object Versioning on all disks in the project.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Remove the roles/billing.admin role from all users.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Create a Project Lien on the project with restriction 'resourcemanager.projects.delete' using gcloud alpha resource-manager liens create.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "A Google Cloud Project Lien (`resourcemanager.projects.delete`) places a protective lock on a project, completely preventing anyone from deleting the project until the lien is intentionally removed by an authorized principal.",
    "distractors": {
      "A": "Denying instance deletion prevents deleting individual VMs, but does not block deleting the entire project.",
      "B": "Object Versioning applies to Cloud Storage, not project-level deletion protection.",
      "C": "Billing admin roles manage financial accounts, but do not prevent project owners from deleting projects.",
      "D": "Correct. Project Liens explicitly protect critical projects from accidental or unauthorized deletion."
    },
    "gcloudCommand": "gcloud alpha resource-manager liens create --project=finance-ledger-prod --restrictions='resourcemanager.projects.delete' --reason='Mission critical ledger project'",
    "architectureComponents": [
      "Resource Manager",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/project-liens"
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
        "text": "Switch your gcloud configuration account to a Google employee email address.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Download the raw source code of gcloud from GitHub and compile it locally.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Run gcloud components install alpha and gcloud components install beta.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Install a third-party Python package from PyPI.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "The `alpha` and `beta` command groups in Google Cloud SDK are packaged as optional SDK components. You can install them directly using `gcloud components install alpha` and `gcloud components install beta`.",
    "distractors": {
      "A": "Alpha/Beta CLI features are available to all GCP customers by installing the corresponding CLI component.",
      "B": "Compiling from source is unnecessary and unsupported for the gcloud binary distribution.",
      "C": "Correct. Installing the `alpha` and `beta` components enables preview CLI command trees.",
      "D": "gcloud components are distributed and managed via the official Google Cloud SDK package manager, not PyPI."
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
        "text": "Run a recursive gsutil rm command to remove all files and re-upload them.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Change bucket storage class from Nearline to Standard.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Apply an egress firewall rule blocking Google Cloud Storage API.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Enable Uniform Bucket-Level Access on all buckets, which immediately nullifies and ignores all existing object ACLs.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Enabling Uniform Bucket-Level Access (UBLA) uniformly enforces IAM policies across all objects in the bucket, immediately disabling fine-grained ACLs and preventing object-level public grants from taking effect.",
    "distractors": {
      "A": "Deleting and re-uploading objects causes massive operational overhead, high bandwidth costs, and downtime.",
      "B": "Storage class changes have zero impact on access control or ACL evaluation.",
      "C": "Firewall rules govern VPC IP packets, not Cloud Storage API authorization models.",
      "D": "Correct. Enabling UBLA disables object ACLs in-place without deleting or re-uploading data."
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
        "text": "Configure the VPC Peering connection on VPC-A to export custom routes, and configure the peering connection on VPC-B to import custom routes.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Change the MTU of both VPC networks to 9000 bytes.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud NAT gateway in VPC-B.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "Create an Unmanaged Instance Group in VPC-A to forward packets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "By default, VPC Peering only exchanges subnet routes. To allow a peered VPC (VPC-B) to reach on-premises networks routed via Cloud Interconnect/Cloud Router in VPC-A, you must explicitly enable 'Export custom routes' on VPC-A's peering configuration and 'Import custom routes' on VPC-B's peering configuration.",
    "distractors": {
      "A": "Correct. Exporting custom routes from VPC-A and importing them in VPC-B propagates dynamic BGP on-prem routes across the peering.",
      "B": "MTU changes adjust packet payload sizing, but do not advertise network routing tables.",
      "C": "Cloud NAT is for outbound internet traffic, not private hybrid RFC 1918 on-premises routing.",
      "D": "Software packet forwarders create performance bottlenecks and unnecessary maintenance."
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
        "text": "Delete all external users from the Google Cloud Platform Console.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Enforce the Organization Policy constraint constraints/iam.allowedPolicyMemberDomains specifying your Cloud Identity Customer ID.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Configure Cloud Armor IP filtering on Google Workspace.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Write a weekly audit script using gcloud projects get-iam-policy to email violators.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "The Organization Policy constraint `constraints/iam.allowedPolicyMemberDomains` (Domain-Restricted Sharing) restricts IAM policy member grants to only authorized Cloud Identity / Google Workspace domain customer IDs (e.g. `C01234567`), preventing accidental grants to external `@gmail.com` or third-party domain accounts.",
    "distractors": {
      "A": "Manually deleting users does not prevent future accidental grants to external email addresses.",
      "B": "Correct. `iam.allowedPolicyMemberDomains` provides declarative preventive enforcement blocking external identities from being added to IAM policies.",
      "C": "Cloud Armor is an HTTP WAF and cannot govern IAM policy identity memberships.",
      "D": "Audit scripts detect violations after they happen, leaving a window of exposure."
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
        "text": "Deploy a Compute Engine agent on every storage bucket to stream access logs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Enable VPC Flow Logs on all subnets.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Enable Data Access audit logging for Google Cloud Storage in the project's IAM Audit Config, and create a Cloud Logging sink routing the logs to a BigQuery dataset.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Turn on Cloud Storage Object Versioning.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Data Access audit logs (DATA_READ, DATA_WRITE) must be explicitly enabled in IAM Audit Configuration because they are off by default. Once enabled, a Cloud Logging Sink (`gcloud logging sinks create`) routes the generated audit logs to a BigQuery dataset for long-term analytics and retention.",
    "distractors": {
      "A": "Compute Engine agents cannot be installed on serverless Cloud Storage buckets.",
      "B": "VPC Flow Logs record network packet 5-tuples (IP/port), not application-level Cloud Storage object read/write operations.",
      "C": "Correct. Enabling Data Access logs in IAM Audit Config and creating a Logging sink to BigQuery satisfies the compliance requirement natively.",
      "D": "Object Versioning retains object payloads, but does not generate structured caller audit logs."
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
        "text": "Use Cloud Armor to block HTTP traffic to the testing VMs.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Write a cron script in a developer laptop that checks billing every 10 minutes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Set up a Cloud Monitoring alert that sends an SMS to the developer.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Configure the Cloud Billing Budget with a 100% threshold publishing to a Pub/Sub topic that triggers an event-driven Cloud Function to update project IAM policies.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Billing budgets natively publish notification payloads to Cloud Pub/Sub topics. Connecting an event-driven Cloud Function (or Cloud Run service) to that topic allows executing immediate programmatic remediation (such as disabling billing, scaling down MIGs, or removing IAM roles) when budget thresholds are breached.",
    "distractors": {
      "A": "Cloud Armor protects HTTP applications against web attacks, not project financial budget overflows.",
      "B": "Running scripts on developer laptops is unreliable, unmonitored, and prone to laptop sleep/offline states.",
      "C": "SMS alerts require manual human action and do not provide immediate automated circuit-breaking.",
      "D": "Correct. Budget -> Pub/Sub -> Cloud Function is the official Google architecture pattern for automated billing circuit breakers."
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
        "text": "gcloud auth activate-service-account app-deployer@prod.iam.gserviceaccount.com --key-file=/etc/jenkins/gcp-deployer-key.json",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud config set account /etc/jenkins/gcp-deployer-key.json",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "cat /etc/jenkins/gcp-deployer-key.json | gcloud init --force",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud auth login --interactive=false --key=/etc/jenkins/gcp-deployer-key.json",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "The standard, non-interactive command to authenticate the Google Cloud SDK using a service account private key file is `gcloud auth activate-service-account [ACCOUNT] --key-file=[PATH_TO_KEY_FILE]`.",
    "distractors": {
      "A": "Correct. `gcloud auth activate-service-account` is the official command for headless CLI authentication.",
      "B": "`gcloud config set account` sets an active email identity, but does not perform cryptographic key authentication.",
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
        "text": "Create an IAM Condition requiring developers to pass the key header.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Set the default KMS key on the bucket using gcloud storage buckets update gs://finance-vault --default-encryption-key=projects/corp-sec/locations/us/keyRings/vault-ring/cryptoKeys/finance-key.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Upload all files as ZIP archives encrypted with standard AES-256.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Configure Cloud Armor to inject the KMS key into HTTP headers.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage allows setting a default Customer-Managed Encryption Key (`--default-encryption-key`) on a bucket. Once configured, all newly uploaded objects are automatically encrypted with the specified Cloud KMS key without requiring client-side encryption flags on each upload.",
    "distractors": {
      "A": "IAM Conditions cannot validate custom HTTP object upload headers.",
      "B": "Correct. Setting `--default-encryption-key` enforces automatic CMEK encryption on all new objects at the bucket level.",
      "C": "Client-side ZIP encryption adds operational overhead and loses native Cloud Storage server-side encryption management.",
      "D": "Cloud Armor does not interface with Cloud Storage bucket encryption settings."
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
        "text": "Create two separate Shared VPC Host projects.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Grant roles/compute.networkAdmin on the entire Host Project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant the roles/compute.networkUser role to the Service Project A service account / developers on subnet-a specifically in the Host Project.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.networkUser at the root Organization level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "In Shared VPC, the `roles/compute.networkUser` role can be granted at the individual subnet level in the host project. This allows service project users to consume only authorized subnets while preventing access to unassigned subnets.",
    "distractors": {
      "A": "Creating multiple host projects duplicates infrastructure unnecessarily when subnet-level IAM natively solves this.",
      "B": "Granting `compute.networkAdmin` gives full rights to create, delete, and alter the entire VPC network.",
      "C": "Correct. Subnet-level assignment of `roles/compute.networkUser` enforces fine-grained subnet isolation in Shared VPC.",
      "D": "Granting `networkUser` at the org level permits attaching VMs to every subnet in every project across the company."
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
        "text": "Assign the primitive Editor role to all QA engineers on the entire Organization.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Create network firewall rules filtering staging IP addresses.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Add a manual cron script to check project names every night.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin to group:qa-team@corp.com at the Organization or Folder level with an IAM Condition checking resource.matchTag('123456/environment', 'staging').",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Resource Manager Tags combined with IAM Conditions allow attribute-based access control (ABAC). Binding `roles/compute.admin` with a condition `resource.matchTag('TAG_KEY_ID', 'TAG_VALUE_ID')` at a parent folder or organization level automatically grants permissions on any project inheriting or bound to that tag.",
    "distractors": {
      "A": "Granting Editor at the organization level exposes all production systems to unauthorized changes.",
      "B": "Firewall rules govern network IP routing, not GCP Cloud IAM resource permissions.",
      "C": "Custom scripts are reactive and lack native atomic IAM evaluation.",
      "D": "Correct. Tag-based IAM Conditions automatically enforce least-privilege governance across dynamically provisioned resources."
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
        "text": "Compute-optimized (C2 or C2D) machine series.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Memory-optimized (M1 or M2) machine series.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "General-purpose (E2) shared-core machine series.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "Accelerator-optimized (A2) GPU machine series.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "Compute-optimized C2 instances offer the highest per-core performance with sustained high all-core turbo clock frequencies (up to 3.8 GHz) and dedicated L3 cache per core, making them ideal for compute-intensive, CPU-bound, and single-threaded financial models.",
    "distractors": {
      "A": "Correct. C2 compute-optimized instances deliver the highest clock speed and execution performance for CPU-bound computations.",
      "B": "Memory-optimized (M-series) machines are designed for massive in-memory databases (SAP HANA), not ultra-high per-core clock speeds.",
      "C": "E2 machines are cost-effective general-purpose instances with variable/shared vCPUs unsuitable for high-frequency low-jitter workloads.",
      "D": "A2 instances are built for GPU-accelerated machine learning with NVIDIA Ampere GPUs, not single-threaded CPU execution."
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
        "text": "Store all logs on standard Persistent Disks attached to a Compute Engine VM.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create a bucket with default Standard class and configure an Object Lifecycle Management rule to transition objects to Nearline after 30 days, to Archive after 90 days, and delete them after 1825 days (5 years).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Store all data in Archive class from day 1 and accept retrieval fees during the first 30 days.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Store data in Standard class and run a monthly cron script to move objects to Coldline using gsutil mv.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Object Lifecycle Management transitions objects automatically based on age: Standard (days 1-30, zero retrieval fee for high-frequency reads), Nearline (days 31-90), Archive (days 91-1825, lowest GB/month cost), and deletion at 5 years (1825 days).",
    "distractors": {
      "A": "Persistent Disks cost significantly more per GB/month than Cloud Storage Archive class and lack automated tiered archival.",
      "B": "Correct. Automated lifecycle transitions optimize cost according to access frequency without retrieval penalties.",
      "C": "Archive storage incurs substantial retrieval fees ($0.05/GB) and minimum storage duration penalties if accessed frequently in the first 30 days.",
      "D": "Manual scripts create unnecessary operational risk, cron failure points, and data egress overhead."
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
        "text": "Deploy a single Zonal Cloud SQL instance with SSD storage and 100 Read Replicas.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Use Cloud Spanner configured with a single read-only replica.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "Configure the Cloud SQL instance as Regional with High Availability (HA) enabled, automated daily backups, and Point-in-Time Recovery (PITR) enabled via transaction write-ahead logs.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy two independent Zonal Cloud SQL instances in different regions and synchronize them using custom pg_dump scripts.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Cloud SQL High Availability (HA) configuration provisions a primary instance in one zone and a synchronous standby replica in a secondary zone within the same region. If the primary zone fails, Cloud SQL automatically triggers failover to the standby with no endpoint IP changes. PITR uses binary logs/WAL to restore to any exact second.",
    "distractors": {
      "A": "Read replicas offload read queries but do not provide automated master write failover during zonal failure.",
      "B": "Cloud Spanner is a globally distributed database that is over-engineered and requires application rewriting for standard PostgreSQL apps.",
      "C": "Correct. Regional HA paired with automated backups and PITR fulfills 99.95% HA SLA and point-in-time disaster recovery.",
      "D": "Manual pg_dump replication is asynchronous, introduces data loss, and lacks automated zero-touch failover."
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
        "text": "Cloud SQL for MySQL configured with cross-region read replicas.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable with multi-cluster replication.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "C",
        "text": "Firestore in Datastore mode.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Cloud Spanner configured with a Multi-Region instance configuration.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Spanner is Google's globally distributed, horizontally scalable NewSQL relational database that delivers external consistency, full ACID transactions, multi-region write scalability, and up to 99.999% availability SLA.",
    "distractors": {
      "A": "Cloud SQL is a single-node write architecture and cannot scale relational writes horizontally across continents.",
      "B": "Cloud Bigtable is a NoSQL wide-column store and does not support multi-table relational ACID transactions or SQL joins.",
      "C": "Firestore is a NoSQL document database, not a distributed SQL relational database.",
      "D": "Correct. Cloud Spanner provides horizontal relational write scalability and global multi-region ACID consistency."
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
        "text": "Set the minimum number of ports per VM (`--min-ports-per-vm`) to 256 and enable dynamic port allocation on the Cloud NAT gateway.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Disable Cloud NAT and route outbound traffic through a single e2-micro VM running iptables.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Assign a dedicated public IP address to each of the 500 VMs.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Set min-ports-per-vm to 64,000 so one IP covers all VMs.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "Cloud NAT assigns a fixed block of source NAT ports to each private VM based on `--min-ports-per-vm` (default is 64). Sizing it to 256 (or enabling Dynamic Port Allocation) ensures VMs requiring up to 120 concurrent connections never experience SNAT port exhaustion while minimizing the number of required external NAT IPs.",
    "distractors": {
      "A": "Correct. Sizing `--min-ports-per-vm` appropriately (or enabling dynamic port allocation) prevents packet drops caused by port exhaustion.",
      "B": "A single e2-micro proxy is a severe bottleneck, lacks high availability, and caps network throughput at 1 Gbps.",
      "C": "Public IPs on private backend microservices violate security isolation and incur high static IP reservation costs.",
      "D": "A single IPv4 address only has 64,512 usable NAT ports total; allocating 64,000 ports per VM would limit the entire NAT gateway to 1 VM per IP."
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
        "text": "Internal HTTP(S) Load Balancer.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Global External HTTP(S) Load Balancer (Application Load Balancer).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "TCP Proxy Load Balancer with port 443.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "Network Load Balancer (External Passthrough).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "The Global External Application Load Balancer (HTTP/HTTPS) uses Google's Anycast IP routing to terminate client TLS connections at the nearest Google edge PoP, supports URL path routing, and natively integrates with Cloud CDN and Cloud Armor WAF security policies.",
    "distractors": {
      "A": "Internal Load Balancers are only accessible from within the private VPC, not the public internet.",
      "B": "Correct. Global External HTTPS Load Balancer provides Anycast IP, edge SSL termination, Cloud CDN caching, and Cloud Armor WAF.",
      "C": "TCP Proxy operates at Layer 4 and does not support HTTP URL-map path routing, Cloud CDN, or HTTP-layer Cloud Armor rules.",
      "D": "Network Load Balancer is regional, non-proxied (passthrough), does not terminate SSL at the edge, and cannot integrate with Cloud CDN or Cloud Armor."
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
        "text": "Create a standard HDD (pd-standard) disk and share it using NFS over the public internet.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Attach a Local SSD NVMe drive to both VMs simultaneously.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create an SSD Persistent Disk (pd-ssd) or Balanced Persistent Disk (pd-balanced) in multi-writer mode (READ_WRITE_MANY) and attach it to both instances in the same zone.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Use Cloud Storage FUSE on both VMs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Compute Engine allows attaching SSD Persistent Disks (`pd-ssd`) or Extreme Persistent Disks to up to two instances simultaneously in multi-writer mode (`--mode=rw` with multi-writer enabled). The application must utilize a cluster-aware filesystem to prevent filesystem corruption.",
    "distractors": {
      "A": "NFS over the public internet introduces high latency, security vulnerabilities, and lacks native disk attachment.",
      "B": "Local SSDs are physically tied to a single physical host server and cannot be attached to multiple independent VM instances.",
      "C": "Correct. Multi-writer persistent disks provide native shared block-level storage for clustered active-passive applications.",
      "D": "Cloud Storage FUSE provides object-to-file semantics, but is not a POSIX block-level disk suitable for low-latency database clustering."
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
        "text": "Cloud Storage with 1 JSON file written per sensor event.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud SQL for PostgreSQL with 10 read replicas.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "C",
        "text": "Firestore in Native Mode.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable with SSD storage.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Bigtable is Google's NoSQL wide-column store designed for high-throughput (millions of QPS), low-latency (<10ms) streaming writes, IoT sensor data, and time-series telemetry.",
    "distractors": {
      "A": "Writing 500k individual JSON files per second to Cloud Storage produces extreme API request charges and is an architectural anti-pattern.",
      "B": "Cloud SQL cannot handle 500,000 streaming writes per second due to single-master write concurrency bottlenecks.",
      "C": "Firestore is designed for mobile/web app state and document hierarchies; it cannot ingest 500k writes/sec cost-effectively.",
      "D": "Correct. Cloud Bigtable with SSD storage excels at massive-scale streaming writes and low-latency time-series queries."
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
        "text": "Partner Interconnect through a certified service provider.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Direct Peering over the public internet.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Standard Cloud VPN with a single tunnel.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Dedicated Interconnect with 100 Gbps circuits.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "Dedicated Interconnect requires customer routing equipment to physically colocate in a designated Google colocation facility. When a customer's data center is outside Google colocation facilities, Partner Interconnect provides private, SLA-backed, high-bandwidth (50 Mbps to 10 Gbps) connectivity through a supported third-party carrier.",
    "distractors": {
      "A": "Correct. Partner Interconnect connects on-prem data centers to Google Cloud through supported third-party telecommunications partners.",
      "B": "Direct Peering provides public Google Workspace access, not private RFC 1918 VPC routing, and carries no SLA.",
      "C": "Standard Cloud VPN tunnels are capped at 3 Gbps per tunnel, travel across the public internet, and do not provide 5 Gbps private line SLA.",
      "D": "Dedicated Interconnect requires direct physical fiber connection in a Google colocation facility, which the customer lacks."
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
        "text": "Spot VMs within a Regional Managed Instance Group configured with autoscaling.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Sole-tenant nodes with 3-year committed use discounts.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "On-demand M2 memory-optimized instances.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Unmanaged Instance Group of e2-micro instances with no restart policy.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Spot VMs (and Preemptible VMs) offer massive discounts (60-91%) compared to standard on-demand pricing. Because the transcoding jobs are stateless, idempotent, and frequently checkpointed, preemption can be tolerated seamlessly, especially when managed by a Regional MIG.",
    "distractors": {
      "A": "Correct. Spot VMs in a Regional MIG provide maximum cost savings and automatic instance replacement upon preemption.",
      "B": "Sole-tenant nodes are dedicated physical servers designed for licensing/compliance, not cheap disposable batch processing.",
      "C": "M2 instances are ultra-expensive memory-optimized hosts designed for huge in-memory databases, not batch video encoding.",
      "D": "Unmanaged instance groups lack autoscaling, autohealing, and automated replacement upon node reclamation."
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
        "text": "Cloud SQL for PostgreSQL with polling.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Firestore in Native mode.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Firestore in Datastore mode.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable with SSD storage.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      }
    ],
    "correct": "B",
    "explanation": "Firestore in Native mode provides client-side SDKs with built-in real-time listeners, offline data persistence, and security rules for direct web/mobile access. Datastore mode is intended for backend server-to-server workloads and does not support client real-time synchronization.",
    "distractors": {
      "A": "Polling Cloud SQL introduces high database load, latency, and lacks native client offline sync libraries.",
      "B": "Correct. Firestore Native mode includes web/mobile SDKs with real-time listeners and offline sync capabilities.",
      "C": "Datastore mode is designed for legacy App Engine server backends and lacks mobile SDKs and real-time listeners.",
      "D": "Cloud Bigtable is a heavy NoSQL engine that cannot be accessed directly from mobile/web clients."
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
        "text": "Deploy BIND DNS servers on Compute Engine VMs in each VPC and synchronize zone files manually.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Modify the /etc/hosts file across all VMs using a startup script.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create a Cloud DNS Private Managed Zone for domain 'corp.internal' and authorize vpc-dev, vpc-staging, and vpc-prod to resolve from the zone.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Create a Public Managed Zone and create an IAM deny policy on external IPs.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "Cloud DNS Private Managed Zones provide managed internal DNS resolution for private domains. You can bind a single Private Managed Zone to multiple VPC networks within a project, enabling unified, secure internal DNS resolution across all attached networks.",
    "distractors": {
      "A": "Self-managed BIND servers add unnecessary maintenance overhead, scaling issues, and single points of failure.",
      "B": "Static `/etc/hosts` files cannot scale with dynamic autoscaled instances and lack automated updates.",
      "C": "Correct. Cloud DNS Private Managed Zones authorized across multiple VPCs provide zero-maintenance internal DNS.",
      "D": "Public zones publish DNS records to authoritative internet root servers, exposing internal hostnames to external recon."
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
        "text": "Standard Tier",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud CDN Tier",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Direct Peering Tier",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Premium Tier",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Premium Tier routes user traffic over Google's global, private, low-latency fiber network, ingesting traffic at the Google edge point of presence (PoP) nearest to the user. Standard Tier routes traffic over the public transit ISP network and enters Google's network only in the destination region.",
    "distractors": {
      "A": "Standard Tier uses the public internet for long-haul transport, resulting in variable latency and higher jitter.",
      "B": "There is no 'Cloud CDN Tier' in Google Cloud Network Service Tiers.",
      "C": "Direct Peering is a physical peering agreement, not a Compute Engine network service tier option.",
      "D": "Correct. Premium Tier delivers highest performance and lowest latency by leveraging Google's private global fiber network."
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
        "text": "Cloud Memorystore for Redis with Standard Tier (High Availability).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage in Standard class.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud Memorystore for Memcached.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable with SSD storage.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Memorystore for Redis Standard Tier provides fully managed, highly available in-memory caching with automatic cross-zone failover, 99.9% availability SLA, and native support for rich data structures (hashes, lists, sets, pub/sub). Memcached is a simple multithreaded key-value cache without persistence or complex data structures.",
    "distractors": {
      "A": "Correct. Memorystore for Redis Standard Tier provides HA failover and rich data structure support for session caching.",
      "B": "Cloud Storage is object storage with latency in tens to hundreds of milliseconds, unsuitable for real-time web sessions.",
      "C": "Memcached does not support complex data structures (sets, hashes, sorted sets) or automated HA failover replicas.",
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
        "text": "Use Local SSDs and configure rsync cron jobs between zones every 5 minutes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Use a Regional Persistent Disk (pd-balanced or pd-ssd) synchronously replicated across two zones in the same region, and attach it with --force-attach to a standby VM if the primary zone fails.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Create a multi-region Cloud Storage bucket and mount it as a block device.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Take daily snapshots of a Zonal Persistent Disk and restore them in the secondary zone.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Regional Persistent Disks provide synchronous block-level replication across two zones in the same region with zero RPO. If the active instance or primary zone crashes, the disk can be forcibly attached (`--force-attach`) to a standby VM in the secondary zone in seconds.",
    "distractors": {
      "A": "Local SSDs cannot survive host termination and rsync scripts cause data loss and operational overhead.",
      "B": "Correct. Regional PDs provide synchronous active-active block replication between two zones, guaranteeing zero data loss (RPO = 0).",
      "C": "Cloud Storage cannot be mounted as a native high-performance POSIX block device with atomic disk locks.",
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
        "text": "Preemptible N2 instances with Shielded VM enabled.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Standard multi-tenant E2 instances with custom machine types.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Sole-Tenant Node Groups.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Kubernetes Engine with Autopilot mode.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      }
    ],
    "correct": "C",
    "explanation": "Sole-tenant nodes provide dedicated physical Compute Engine servers allocated exclusively to a single customer's VMs, ensuring physical hardware isolation for regulatory compliance (HIPAA/PCI) and enabling Bring-Your-Own-License (BYOL) based on physical core and socket counts.",
    "distractors": {
      "A": "Preemptible VMs run on shared multi-tenant physical hardware and are subject to termination at any time.",
      "B": "Standard instances share underlying physical hardware hosts with other cloud tenants, violating strict physical isolation.",
      "C": "Correct. Sole-tenant nodes guarantee dedicated physical hardware isolation and support core-based software licensing compliance.",
      "D": "GKE Autopilot runs on shared multi-tenant infrastructure and does not provide physical server core visibility for legacy BYOL."
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
        "text": "Single massive project containing all 15 business unit workloads without project separation.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "VPC Network Peering mesh between all 15 independent VPCs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud VPN tunnels interconnecting 15 separate VPCs.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Shared VPC with a central Host project and business unit Service projects.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Shared VPC enables a central Network Administrator team in a Host project to manage networks, subnets, firewalls, and routing, while delegating subnet usage to Service Projects. VPC Peering maintains separate administrative domains in each project and does not allow centralized firewall/subnet governance.",
    "distractors": {
      "A": "A single project destroys billing boundaries, IAM isolation, and project resource quotas.",
      "B": "A full 15-project VPC Peering mesh requires configuring and maintaining dozens of bidirectional peering links and decentralizes firewall administration.",
      "C": "Cloud VPN introduces bandwidth costs, encryption overhead, and 3 Gbps tunnel caps for intra-cloud networking.",
      "D": "Correct. Shared VPC centralizes network governance in a single host project while preserving project isolation for developers."
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
        "text": "Coldline storage has a 90-day minimum storage duration; deleting objects after 10 days incurs an early deletion fee equivalent to the remaining 80 days of storage.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Logging automatically replicates all Coldline buckets to BigQuery.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Objects in Coldline cannot be deleted until 1 year has passed.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Coldline storage charges $100 per GB for object deletion requests.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage infrequency tiers enforce minimum storage duration commitments: Nearline (30 days), Coldline (90 days), and Archive (365 days). Deleting or overwriting an object before its minimum duration incurs an early deletion charge for the remaining unfulfilled days.",
    "distractors": {
      "A": "Correct. Coldline requires a 90-day minimum retention; deleting at day 10 triggers an early deletion fee for the remaining 80 days.",
      "B": "Cloud Logging does not automatically replicate Cloud Storage object payloads to BigQuery.",
      "C": "Objects can be deleted at any time, but early deletion penalties apply if deleted before the minimum duration.",
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
        "text": "Assign a primary subnet CIDR of 10.0.0.0/24 for instance primary IPs, and allocate an Alias IP range (/27) to each instance from a secondary subnet range (10.1.0.0/16).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Assign 30 external public IP addresses to each VM instance.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Deploy 30 network interface controllers (NICs) on each VM instance.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Create 30 separate VPC networks connected via Cloud VPN.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Alias IP ranges allow attaching multiple internal IP addresses (or secondary CIDR blocks) to a single VM's primary network interface (`nic0`). This allows containers or services running inside the VM to be directly routable on the VPC without requiring multiple physical NICs or public IPs.",
    "distractors": {
      "A": "Correct. Alias IP ranges allocate internal IP blocks from secondary subnet ranges directly to individual VM interfaces for container addressing.",
      "B": "Public IPs expose internal containers to the internet and exhaust IPv4 quotas.",
      "C": "Compute Engine supports a maximum of 8 network interfaces (NICs) per instance, so 30 NICs is physically impossible.",
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
        "text": "Cloud Armor Managed Proxy.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "External Passthrough Network Load Balancer (backend service based).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Global External HTTPS Load Balancer.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "SSL Proxy Load Balancer.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "The External Passthrough Network Load Balancer is a Layer 4 regional load balancer built on Google Maglev. It routes TCP and UDP traffic directly to backend VMs without proxy termination, preserves client source IP, and uses Direct Server Return (DSR) for maximum throughput and minimum latency.",
    "distractors": {
      "A": "Cloud Armor is a security policy layer on proxies, not a standalone passthrough load balancer.",
      "B": "Correct. External Passthrough Network Load Balancer supports UDP/TCP, preserves source IP, and utilizes DSR.",
      "C": "External HTTPS LB terminates HTTP/HTTPS proxy traffic at Layer 7 and does not support arbitrary UDP game traffic.",
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
        "text": "Deploy a single HA VPN tunnel with static routes.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Use VPC Peering over the public internet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud HA VPN gateway with two active tunnels configured against an on-premises peer gateway across two separate IPsec interfaces, using dynamic routing with Cloud Router and BGP.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy two Classic VPN gateways with static routes.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud HA VPN provides a 99.99% availability SLA when configured with two tunnels (one on each of the HA VPN gateway's two public IP interfaces: `interface 0` and `interface 1`) paired with dynamic routing via Cloud Router and BGP.",
    "distractors": {
      "A": "A single tunnel provides only 99.9% SLA; two active tunnels are required for 99.99% SLA.",
      "B": "VPC Peering connects two GCP VPCs, not an on-premises data center.",
      "C": "Correct. Cloud HA VPN with dual interfaces and BGP dynamic routing is mandatory to qualify for the 99.99% SLA.",
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
        "text": "Create 365 separate daily tables (sharded tables) named table_YYYYMMDD.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Cluster the table by event_timestamp without any partitioning.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "Store the data in Cloud Storage and query it using BigQuery external tables with no schema.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Partition the table by day on the event_timestamp column, and cluster the table by customer_id and region.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "BigQuery Partitioning by timestamp segments the data by date boundaries, allowing BigQuery to prune unread partitions and drastically reduce scanned bytes. Adding Clustering on high-cardinality query filter columns (`customer_id`, `region`) further collocates related data within partitions, maximizing query speed and minimizing cost.",
    "distractors": {
      "A": "Date-sharded tables (`table_YYYYMMDD`) are a legacy anti-pattern with higher query latency, schema maintenance headaches, and partition limits.",
      "B": "Clustering alone without partitioning does not prune whole date blocks cleanly for time-windowed queries.",
      "C": "External tables over Cloud Storage have significantly slower query performance and lack metadata indexing.",
      "D": "Correct. Partitioning by date plus clustering by high-cardinality filter fields is the standard best practice for cost and performance optimization in BigQuery."
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
        "text": "Local SSD NVMe disks attached to the VM.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage bucket mounted with gcsfuse.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Standard Persistent Disk (pd-standard).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Balanced Persistent Disk (pd-balanced).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Local SSDs are physically attached to the host server running the VM instance, delivering sub-millisecond latency and up to millions of IOPS. However, because Local SSDs are ephemeral (data is lost on VM stop/terminate), they are specifically engineered for temporary scratch spaces, caches, and ML processing buffers.",
    "distractors": {
      "A": "Correct. Local SSD delivers maximum IOPS and lowest latency for ephemeral scratch and training data.",
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
        "text": "Provision an m2-ultramem instance.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create a Custom Machine Type specifying 6 vCPUs and 45 GB of memory (e.g. custom-6-46080).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Attach 10 Local SSDs to make up for the RAM shortage.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Deploy two n2-standard-4 instances and split the application logic across them.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Compute Engine allows configuring Custom Machine Types (`--custom-cpu` and `--custom-memory`), allowing exact matching of required vCPU and memory ratios to right-size workloads and prevent overpaying for unnecessary predefined vCPUs or RAM.",
    "distractors": {
      "A": "M2 instances are massively oversized and cost thousands of dollars per month.",
      "B": "Correct. Custom machine types allow tailoring vCPU and RAM to match exact application requirements without paying for unused cores.",
      "C": "SSDs are disk storage, not system RAM, and cannot substitute for memory requirements.",
      "D": "Rewriting single-node applications for multi-VM distribution introduces development overhead and architecture complexity."
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
        "text": "Convert the database to Cloud Datastore.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Increase the backup frequency of the primary instance to every 10 minutes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Deploy one or more Cloud SQL Read Replicas and configure the reporting dashboard to query the Read Replica endpoints exclusively.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged PostgreSQL VM and configure manual daily CSV exports.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Cloud SQL Read Replicas replicate data asynchronously from the primary instance. Directing heavy reporting, BI, and analytical read queries to read replicas offloads read I/O from the primary master, safeguarding OLTP write transaction performance.",
    "distractors": {
      "A": "Converting a relational schema to NoSQL requires complete application rewrites.",
      "B": "Frequent backups increase disk I/O load on the primary instance, worsening the performance issue.",
      "C": "Correct. Read replicas isolate analytical read traffic, protecting primary database write capacity.",
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
        "text": "Archive bucket in europe-west1.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Single Region location (e.g. us-central1).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Zonal Persistent Disk mounted over NFS.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Multi-Region location (e.g. US multi-region).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Multi-Region Cloud Storage buckets replicate data across at least two geographic locations separated by at least 160 km within a multi-region area (e.g. US, EU, ASIA), providing 99.95% availability SLA and disaster recovery against full regional outages.",
    "distractors": {
      "A": "Archive class is for long-term cold data with heavy retrieval penalties, completely unsuitable for high-frequency web assets.",
      "B": "Single Region buckets do not provide cross-region redundancy if the entire region experiences an outage.",
      "C": "Zonal Persistent Disks are tied to a single datacenter zone and cannot serve global web traffic directly.",
      "D": "Correct. Multi-Region buckets provide geo-redundant durability and high availability across an entire continent."
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
        "text": "Cloud Run (fully managed).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "GKE Standard with custom node pools.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Compute Engine unmanaged VMs with cron shutdown.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud Functions (1st gen).",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run is a fully managed serverless platform that runs container images, automatically scales to zero, and uniquely supports multi-concurrency (handling up to 1,000 concurrent requests per container instance), drastically reducing instance count and eliminating per-request cold starts.",
    "distractors": {
      "A": "Correct. Cloud Run supports arbitrary container images, multi-request concurrency per container, and automatic scale-to-zero.",
      "B": "GKE Standard requires configuring and paying for underlying VM nodes even when idle, and does not scale to zero VMs automatically without cluster autoscaler scale-down delays.",
      "C": "Compute Engine VMs do not natively scale on HTTP request concurrency and require heavy operational maintenance.",
      "D": "Cloud Functions 1st gen handles only 1 concurrent request per function instance, resulting in frequent cold starts under bursty load."
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
        "text": "Enable Shielded VM with Secure Boot, Virtual Trusted Platform Module (vTPM), and Integrity Monitoring.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Attach a Cloud KMS key to the serial port.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Deploy a third-party antivirus scanner in the VM startup script.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Encrypt the VPC subnet using Cloud VPN.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "Shielded VMs provide verifiable boot integrity using Secure Boot (ensures only signed kernel and drivers load), vTPM (validates guest OS pre-boot and boot measurements), and Integrity Monitoring (generates alerts if the baseline measurements change).",
    "distractors": {
      "A": "Correct. Shielded VM with Secure Boot and vTPM verifies kernel signature and boot integrity against kernel rootkits.",
      "B": "Cloud KMS does not monitor or cryptographically verify VM guest boot sequences.",
      "C": "In-guest antivirus runs after the operating system boots and cannot prevent rootkits loaded prior to the kernel.",
      "D": "Cloud VPN encrypts network transit packets, but does not protect VM host hypervisor or guest boot integrity."
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
        "text": "Cloud Run for Anthos on-premises.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "GKE Autopilot mode.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "GKE Standard mode with custom node pools.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Compute Engine unmanaged instances with kubeadm.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "GKE Autopilot is a fully managed mode of operation where Google manages the cluster configuration, node provisioning, autoscaling, and security hardening. Users pay strictly for the compute resources requested by their running Pods rather than whole VM worker nodes.",
    "distractors": {
      "A": "Cloud Run for Anthos requires managing underlying Anthos clusters and is intended for hybrid deployments.",
      "B": "Correct. GKE Autopilot eliminates worker node operational overhead and bills per running Pod resource request.",
      "C": "GKE Standard requires users to manage node pools, machine sizing, OS upgrades, and pay for whole node VM capacity.",
      "D": "Self-managed Kubernetes via kubeadm adds immense operational maintenance and patching burden."
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
        "text": "Deploy an Nginx proxy VM in front of each Compute Engine instance.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Disable external public IP addresses on the load balancer forwarding rule.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Attach a Cloud Armor Security Policy to the Load Balancer Backend Service with pre-configured WAF rules (OWASP Top 10), rate limiting, and geo-blocking rules.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Create VPC firewall rules on port 80/443 for each individual malicious IP address.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) capabilities integrated natively into the Global External HTTP(S) Load Balancer. It supports preconfigured OWASP Top 10 rules (SQLi, XSS), IP allow/denylists, geographic filtering, and rate limiting at Google's edge.",
    "distractors": {
      "A": "Self-managed Nginx proxies create bottlenecks and cannot absorb multi-terabit edge DDoS volume.",
      "B": "Disabling the public IP on the load balancer takes the entire public e-commerce website offline.",
      "C": "Correct. Cloud Armor attached to backend services provides edge filtering against Layer 7 attacks, geo-blocking, and WAF rules.",
      "D": "VPC firewall rules cannot evaluate HTTP request payloads (SQLi/XSS), geo-location headers, or Layer 7 rate limits."
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
        "text": "Have the frontend web app write orders directly into a shared MySQL database table with locks.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Use synchronous REST HTTP POST calls from the frontend directly to each microservice sequentially.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Create a Cloud Storage bucket and write 1 file per order.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Create a single Cloud Pub/Sub topic for orders, and create separate independent Pub/Sub subscriptions for Inventory, Billing, Shipping, and Analytics.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Pub/Sub provides a fully managed, durable, highly available publish/subscribe messaging system. A 1-to-many fan-out architecture is achieved by attaching multiple independent subscriptions to a single topic, allowing each downstream consumer to pull messages at its own pace without coupling.",
    "distractors": {
      "A": "Writing directly to a shared SQL database creates severe write contention, tight schema coupling, and database connection exhaustion.",
      "B": "Synchronous REST chains create cascading failure risks: if Billing is slow or down, frontend checkouts fail immediately.",
      "C": "Cloud Storage object creation is not an asynchronous event-driven messaging queue.",
      "D": "Correct. 1 topic with multiple subscriptions implements the classic scalable fan-out asynchronous pattern."
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
        "text": "Enable Automatic Storage Increase on the Cloud SQL instance.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Migrate the database to Cloud Memorystore.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Allocate a 64 TB persistent disk upfront immediately.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "D",
        "text": "Write a cron script that polls df -h and runs gcloud sql instances patch.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL 'Automatic Storage Increase' monitors available disk space. When free space falls below a safe threshold (typically 10-20%), Cloud SQL automatically increases the storage capacity in-place without restarting the database or interrupting application traffic.",
    "distractors": {
      "A": "Correct. Automatic Storage Increase scales disk capacity dynamically without downtime or manual intervention.",
      "B": "Cloud Memorystore is an ephemeral in-memory cache, not a durable relational database.",
      "C": "Allocating 64 TB upfront incurs unnecessary high persistent disk costs for unallocated space.",
      "D": "Custom polling scripts are fragile and can trigger disk resize API rate limits or delayed scaling."
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
        "text": "Compute Engine Sole-Tenant Node.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "App Engine Standard Environment.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "GKE Standard with N2D nodes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "App Engine Flexible Environment.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "App Engine Standard runs applications in fine-grained sandbox environments that scale up in milliseconds, scale down to 0 instances when idle, and include a daily free tier. App Engine Flexible runs inside Docker containers on Compute Engine VMs, which take minutes to scale and cannot scale to zero.",
    "distractors": {
      "A": "Sole-tenant nodes are dedicated physical servers with high monthly fixed costs.",
      "B": "Correct. App Engine Standard provides rapid millisecond scaling and true scale-to-zero for standard runtimes.",
      "C": "GKE Standard requires continuous cluster and node pool operational management.",
      "D": "App Engine Flexible provisions underlying Compute Engine VM instances, taking several minutes to start up and cannot scale to 0 instances."
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
        "text": "Bucket names only need to be unique within a single VPC subnet.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Bucket names can contain uppercase letters and underscore characters at any position.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Bucket names reside in a single global namespace across all Google Cloud customers, must be DNS-compliant (3-63 characters, lowercase, numbers, hyphens), and cannot be duplicated by any other project globally.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Bucket names must start with the string 'gcp-bucket-'.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Storage bucket names are globally unique across all GCP accounts worldwide because buckets can be addressed via global DNS URLs (`storage.googleapis.com/<bucket_name>`). Bucket names must be 3 to 63 characters long, contain only lowercase letters, numbers, and hyphens.",
    "distractors": {
      "A": "Bucket namespace is global, not scoped to individual VPC subnets or projects.",
      "B": "Uppercase characters are strictly forbidden in Cloud Storage bucket names.",
      "C": "Correct. Bucket names are globally unique and strictly DNS-compliant across the entire platform.",
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
        "text": "Attach an extreme persistent disk.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Set the OnHostMaintenance policy to TERMINATE.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Enable Spot VM provisioning.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Set the OnHostMaintenance policy to MIGRATE (Live Migration).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "By default, standard Compute Engine instances have `onHostMaintenance` set to `MIGRATE`. During infrastructure maintenance, Google live-migrates the running VM to another physical host in the same zone without restarting the guest OS or dropping network connections.",
    "distractors": {
      "A": "Disk type has no effect on host hypervisor live migration policies.",
      "B": "`TERMINATE` stops or restarts the VM on a new host, causing reboot downtime and cache state loss.",
      "C": "Spot VMs do not support Live Migration and are terminated during host events.",
      "D": "Correct. Live Migration (`MIGRATE`) seamlessly moves active running VMs during host maintenance events."
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
        "text": "Regional Internal Application Load Balancer (Internal HTTP(S) Load Balancer).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Armor with public VIP.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "DNS Round-Robin using public DNS records.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Global External HTTPS Load Balancer.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "A",
    "explanation": "The Regional Internal Application Load Balancer (Internal HTTP(S) LB) is an Envoy proxy-based private load balancer that operates inside your VPC using private RFC 1918 IP addresses. It supports Layer 7 URL routing, path matching, and health checking without exposing backends to external networks.",
    "distractors": {
      "A": "Correct. Internal HTTP(S) Load Balancer provides Layer 7 routing and load distribution strictly within the private VPC.",
      "B": "Cloud Armor protects public external endpoints, not private internal VPC communication.",
      "C": "DNS round-robin lacks instant health checking, fails over slowly, and public DNS records expose internal topology.",
      "D": "Global External Load Balancer allocates a public Anycast IP reachable from the internet, violating the private isolation requirement."
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
        "text": "NVIDIA A100 (or H100) Tensor Core GPUs attached to A2 (or A3) machine types.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "NVIDIA T4 GPUs on E2 shared-core machines.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable with GPU indexing.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Sole-tenant N1 instances with no attached accelerators.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "A",
    "explanation": "NVIDIA A100 and H100 GPUs provide high-bandwidth HBM2e memory and high-speed NVLink GPU-to-GPU mesh interconnects, offered natively on Compute Engine Accelerator-Optimized (A2 / A3) machine series for large-scale distributed deep learning training.",
    "distractors": {
      "A": "Correct. NVIDIA A100/H100 GPUs on A2/A3 instances provide optimal tensor core architecture and NVLink memory bandwidth for large AI model training.",
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
        "text": "Three standalone VMs with manual snapshot restores.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "A Regional Managed Instance Group (MIG) with an application Health Check for autohealing, CPU/HTTP autoscaling policy, and instance distribution across three zones.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "An Unmanaged Instance Group spanning three regions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "A Zonal MIG with a cron script that restarts instances at midnight.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "A Regional Managed Instance Group (Regional MIG) automatically spreads instances evenly across multiple zones within a region. Pairing the MIG with a specialized application Health Check enables automated Autohealing (recreating unhealthy instances), while autoscaling dynamically adjusts instance count to match demand.",
    "distractors": {
      "A": "Manual standalone VMs require human intervention during failures and lack automated load scaling.",
      "B": "Correct. Regional MIG + Application Health Check Autohealing + Autoscaling provides complete high availability, self-healing, and elastic scaling.",
      "C": "Unmanaged Instance Groups do not support autohealing, autoscaling, or automated rolling updates.",
      "D": "Zonal MIGs cannot survive a complete zone outage, and scheduled cron restarts do not detect application deadlocks in real-time."
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
        "text": "Bucket Lock with 15-minute retention.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Standard Multi-Region storage class.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Turbo Replication (enabled via gcloud storage buckets update --turbo-replication).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Object Versioning with 10 versions.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Turbo Replication is a feature for Dual-Region Cloud Storage buckets that provides a 15-minute Recovery Point Objective (RPO) backed by a 99.9% service level agreement, ensuring that 100% of newly written objects replicate across paired regions in under 15 minutes.",
    "distractors": {
      "A": "Bucket Lock enforces retention duration, not inter-regional replication speed.",
      "B": "Standard Multi-Region replicates asynchronously without the contractual 15-minute RPO SLA of Turbo Replication.",
      "C": "Correct. Turbo Replication guarantees 15-minute RPO replication between paired dual regions backed by Google SLA.",
      "D": "Object Versioning preserves overwritten objects but does not accelerate cross-region replication speed."
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
        "text": "Cloud Bigtable.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Cloud Storage CSV files.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable with HDD disks.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Firestore in Native mode.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Firestore Native mode is a document-oriented NoSQL database that offers native mobile/web SDKs, automatic scaling, and ACID multi-document transactions (crucial for atomic player inventory item transfers and purchases).",
    "distractors": {
      "A": "Cloud Bigtable does not support multi-row ACID transactions, lacks direct mobile client SDKs, and requires backend API servers.",
      "B": "Cloud Storage CSV files lack transactional atomicity, concurrency controls, and real-time query capabilities.",
      "C": "Bigtable with HDD is intended for cold batch analytics, not transactional interactive mobile gaming.",
      "D": "Correct. Firestore Native mode provides document JSON storage, native mobile client SDKs, and multi-document ACID transactions."
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
        "text": "Add a Rate Limiting rule to the Cloud Armor Security Policy with threshold 100 requests / 60 seconds, conform action 'allow', and exceed action 'deny-429'.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy an API Gateway with an IAM Deny policy on all users.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule blocking IP addresses that send more than 100 packets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Configure Cloud CDN to cache all POST requests.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Armor Rate Limiting rules allow administrators to define request thresholds per client IP (or cookie/header key). When a client exceeds the defined rate (e.g. 100 reqs/min), Cloud Armor automatically throttles or blocks the client returning HTTP 429 (Too Many Requests) or HTTP 403 at Google's edge.",
    "distractors": {
      "A": "Correct. Cloud Armor rate limiting rule with `deny-429` action enforces client IP throttling at the Google edge.",
      "B": "Denying all users blocks legitimate application traffic completely.",
      "C": "VPC firewall rules operate at Layer 3/4 and cannot count or rate-limit HTTP request application rates.",
      "D": "Cloud CDN does not cache mutable REST POST/PUT requests by default, nor does it enforce client rate limits."
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
        "text": "Balanced Persistent Disk (pd-balanced).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Extreme Persistent Disk (pd-extreme) or Hyperdisk Extreme.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive bucket.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Standard Persistent Disk (pd-standard).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`pd-extreme` (and Hyperdisk Extreme) is Google Cloud's highest performance block storage tier, allowing provisioning of custom target IOPS (up to 120,000+ IOPS) independently of disk capacity for extreme database workloads like SAP HANA and Oracle.",
    "distractors": {
      "A": "pd-balanced caps IOPS and throughput well below extreme SAP HANA requirements unless provisioned with massive multi-terabyte sizes.",
      "B": "Correct. `pd-extreme` / Hyperdisk Extreme allows provisioning dedicated high IOPS targets for extreme enterprise database workloads.",
      "C": "Cloud Storage Archive is object storage for cold multi-year backups and cannot act as a VM block disk.",
      "D": "pd-standard is mechanical HDD storage capped at very low IOPS (<1,000 IOPS)."
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
        "text": "Cloud Run Service with HTTP health checks.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud Functions 1st gen.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud Run Jobs, triggered on a schedule via Cloud Scheduler.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Compute Engine 24/7 VM with no shutdown script.",
        "isTrap": true,
        "trapType": "premature_optimization"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run Jobs are built specifically for containerized run-to-completion batch processing tasks that do not listen for HTTP requests and can execute for up to 24 hours. Triggering the job via Cloud Scheduler provides serverless scheduled automation.",
    "distractors": {
      "A": "Cloud Run Services require listening on an HTTP port and are intended for persistent web servers/APIs.",
      "B": "Cloud Functions 1st gen has a maximum execution timeout of 9 minutes, failing the 45-minute runtime requirement.",
      "C": "Correct. Cloud Run Jobs run containerized batch workloads to completion without requiring an HTTP web server.",
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
        "text": "A Classic VPN connection paired with static routes.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "A single Dedicated Interconnect 100 Gbps circuit in one colocation facility.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Two circuits connected to the same physical switch in a single facility.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "At least four Dedicated Interconnect circuits deployed across two distinct Google Cloud Colocation Facilities (two circuits per metro facility in separate Edge Availability Domains), connected to redundant Cloud Routers in a multi-region or regional VPC configuration with dynamic BGP routing.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "To qualify for Google's 99.99% SLA on Dedicated Interconnect, the architecture requires 4 physical circuits: 2 connections in Colocation Facility A (in Edge Availability Domain 1 and 2) and 2 connections in Colocation Facility B (in Edge Availability Domain 1 and 2), with dynamic BGP routing across dual Cloud Routers.",
    "distractors": {
      "A": "Classic VPN is deprecated, travels over the public internet, and does not provide 99.99% enterprise physical line SLA.",
      "B": "A single circuit has no physical hardware redundancy and carries no SLA.",
      "C": "Two circuits in a single facility provide only 99.9% SLA (vulnerable to facility-wide power/fiber loss).",
      "D": "Correct. 4 circuits spanning two physical metropolitan colocation facilities is the mandatory Google architecture for 99.99% Interconnect SLA."
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
        "text": "A predefined Dual-Region pairing Frankfurt (europe-west3) and Berlin (europe-west10), or dual-region strictly within Germany.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "A single zonal persistent disk in us-central1.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "The US Multi-Region location.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "The standard EU Multi-Region location.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "EU Multi-Region spreads data across data centers in Germany, Netherlands, Belgium, Finland, etc., which violates the national residency constraint. Selecting a custom or predefined Dual-Region strictly within Germany (e.g. `europe-west3` and `europe-west10`) provides geo-redundancy while strictly confining data to German soil.",
    "distractors": {
      "A": "Correct. In-country Dual-Region provides disaster recovery failover while respecting strict national data sovereignty boundaries.",
      "B": "Zonal disks in the US violate both German residency laws and cross-zone disaster recovery standards.",
      "C": "US Multi-Region stores data in North America, completely breaching European GDPR and German legal mandates.",
      "D": "EU Multi-Region places data replicas in multiple European countries outside Germany, violating German sovereignty laws."
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
        "text": "Write a firewall rule to reject TCP packets containing TLS 1.0 headers.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create an SSL Policy with min-tls-version=TLS_1_2 and profile=MODERN (or RESTRICTED), and attach it to the Target HTTPS Proxy of the Load Balancer.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Install TLS certificates directly on backend Compute Engine instances and bypass the load balancer.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Change the DNS records to point to an unencrypted HTTP port.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Load Balancer SSL Policies allow controlling the SSL/TLS protocol versions and cipher suites accepted by the Target HTTPS or Target SSL proxy. Setting `--min-tls-version=TLS_1_2` with the `MODERN` or `RESTRICTED` profile drops legacy TLS 1.0/1.1 client connections at the Google edge.",
    "distractors": {
      "A": "VPC firewall rules inspect L3/L4 headers and cannot decode or filter TLS handshake protocol versions.",
      "B": "Correct. Attaching an SSL policy with `min-tls-version=TLS_1_2` to the target proxy enforces modern cryptographic compliance at Google's edge.",
      "C": "Managing certificates on hundreds of individual backend VMs eliminates centralized SSL offloading and Anycast edge caching.",
      "D": "Downgrading to plain HTTP sends unencrypted plaintext traffic over the internet, causing critical security failure."
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
        "text": "Enable Private Google Access on the subnet, allowing VMs to route directly to Google APIs over Google's high-speed internal network with no NAT gateway charges.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Assign public IPs to all 100 instances and allow internet egress.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Route all traffic through a Cloud NAT gateway with 10 static IPs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Deploy a squid proxy VM with an external IP address.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Private Google Access allows instances with internal-only IP addresses to communicate directly with Google Cloud services (such as Cloud Storage and BigQuery) via Google's internal software-defined network. This avoids Cloud NAT data processing fees and maximizes data transfer speeds.",
    "distractors": {
      "A": "Correct. Private Google Access is free of NAT processing fees and provides direct high-throughput line-rate access to Google APIs.",
      "B": "Assigning public IPs introduces internet attack surface and incurs static IP reservation costs.",
      "C": "Cloud NAT incurs data processing fees per GB and introduces unnecessary translation overhead for native Google APIs.",
      "D": "Proxy VMs introduce network bandwidth bottlenecks, single points of failure, and operational maintenance."
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
        "text": "Enable Cloud Storage Object Versioning on the database volume.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Enable Automated Backups with a 7-day retention window and enable Point-in-Time Recovery (PITR) using write-ahead logging (WAL).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Create a read replica and pause replication at midnight.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Take a manual SQL dump once every 24 hours using pg_dump.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Point-in-Time Recovery (PITR) in Cloud SQL requires automated daily backups to provide base snapshots, combined with continuous transaction log archival (binary logs in MySQL or write-ahead logs in PostgreSQL). This allows rolling forward transactions to any exact minute and second within the retention window.",
    "distractors": {
      "A": "Object versioning applies to Cloud Storage buckets, not active Cloud SQL relational database transaction logs.",
      "B": "Correct. Automated backups + PITR provides continuous transactional recovery to any exact point in time.",
      "C": "Pausing read replicas stops replication and does not provide arbitrary second-level historical restoration.",
      "D": "Daily dumps only restore to the exact time of the dump, losing all data created between dumps (up to 24 hours of data loss)."
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
        "text": "gcloud run deploy my-service --image=v2 --split-traffic=10",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Deploy two separate Cloud Run services and use DNS weights.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud run services update-traffic my-service --to-revisions=my-service-v1=90,my-service-v2=10",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Create an nginx container in front of Cloud Run with a random number generator.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run natively supports percentage-based traffic splitting across revisions using `gcloud run services update-traffic <service_name> --to-revisions=<rev1>=<pct1>,<rev2>=<pct2>`, enabling instant zero-downtime canary testing and instant rollback.",
    "distractors": {
      "A": "`--split-traffic` is not a valid flag on `gcloud run deploy`.",
      "B": "DNS-based traffic splitting causes cache latency, TTL stickiness, and lacks instant rollback capabilities.",
      "C": "Correct. `gcloud run services update-traffic` assigns precise percentage-based traffic splits across revisions natively.",
      "D": "Custom Nginx proxies add unnecessary infrastructure maintenance when Cloud Run provides native edge traffic splitting."
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
        "text": "Store data in BigQuery and query it via Spanner federated queries.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Provision a 10-node Spanner cluster and shut it down every weekend.",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "C",
        "text": "Deploy Cloud Spanner on a Compute Engine e2-micro instance.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Provision the Cloud Spanner instance using Processing Units (e.g. 100 or 200 Processing Units, which represent fractional nodes) instead of a full 1-node instance.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Spanner supports granular sizing via Processing Units (1 node = 1,000 Processing Units). Customers with small databases or low QPS can provision fractional capacity (100, 200, 300, 400, or 500 PUs), significantly lowering the entry barrier cost while maintaining full ACID Spanner features.",
    "distractors": {
      "A": "BigQuery is an analytical data warehouse and cannot support low-latency transactional microservice writes.",
      "B": "A 10-node cluster is massively over-provisioned for 500 QPS and scheduled shutdown causes total service downtime.",
      "C": "Cloud Spanner is a fully managed cloud service and cannot be installed on a self-hosted Compute Engine VM.",
      "D": "Correct. Processing Units allow cost-effective fractional node provisioning (down to 100 PUs) for smaller workloads."
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
        "text": "Enable Media Access Control Security (MACsec) on the Dedicated Interconnect physical links using pre-shared keys stored in Cloud KMS or Secret Manager.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy a software IPsec VPN VM inside Compute Engine.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Convert the Interconnect into a public Cloud Storage bucket.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Rely on standard TLS 1.3 at the application layer only.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud supports MACsec (IEEE 802.1AE) Layer 2 point-to-point encryption on Dedicated Interconnect circuits. MACsec encrypts all Ethernet frames at line-rate speed (up to 100 Gbps) directly on router hardware between on-premises and Google edge routers.",
    "distractors": {
      "A": "Correct. MACsec provides wire-speed Layer 2 hardware encryption directly on Dedicated Interconnect physical circuits.",
      "B": "Software IPsec VMs cap bandwidth at a fraction of 100 Gbps line rate and introduce severe CPU bottlenecks.",
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
        "text": "Remain on on-demand pricing and ask analysts to query smaller datasets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Purchase a BigQuery Enterprise Edition capacity reservation with autoscaling slots.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Export all data from BigQuery to a single PostgreSQL database.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Migrate all tables to Cloud Storage and query using Cloud Functions.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery Editions (Standard, Enterprise, Enterprise Plus) provide capacity-based pricing with dedicated or autoscaling slot reservations. This delivers consistent query performance, isolated slot pools for mission-critical BI, and predictable, budget-controlled monthly costs.",
    "distractors": {
      "A": "Verbal requests to data analysts do not guarantee cost caps and fail to prevent runaway scan costs.",
      "B": "Correct. BigQuery Enterprise Edition slot reservations deliver predictable monthly FinOps budgeting and guaranteed query compute capacity.",
      "C": "PostgreSQL cannot scale to handle multi-terabyte / petabyte enterprise analytical queries.",
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
        "text": "Remove the storage.objects.delete permission from developers only.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Enable Object Versioning with 3 versions.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Configure a Retention Policy with a retention period of 94608000s and lock the policy using Bucket Lock.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Set the storage class to Coldline.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage Retention Policies with Bucket Lock enforce Write-Once-Read-Many (WORM) storage. Once a retention policy is locked, the retention duration cannot be reduced or deleted, ensuring objects cannot be modified or deleted by anyone until their individual retention period expires.",
    "distractors": {
      "A": "Removing developer permissions does not prevent Project Owners or compromised admin credentials from deleting objects.",
      "B": "Object versioning retains prior versions when overwritten, but does not block deleting objects or versions.",
      "C": "Correct. Retention Policy locked with Bucket Lock enforces irreversible immutable retention for the specified 3-year duration.",
      "D": "Storage classes govern pricing tiers and access frequency, not immutable deletion protection."
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
        "text": "Create a custom VPC firewall rule that executes the script over port 22.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Save the script in an Archive storage bucket and set an IAM deny rule.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "SSH into the instance manually after boot and type the commands.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Pass the shell script via instance metadata using the startup-script or startup-script-url key during instance creation.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Compute Engine supports `startup-script` (inline code) and `startup-script-url` (Cloud Storage script URL) custom metadata keys. Compute Engine guest environment agents detect this metadata and execute the script automatically with root privileges during the operating system boot process.",
    "distractors": {
      "A": "Firewall rules inspect and filter network traffic; they cannot execute arbitrary bash commands inside guest VMs.",
      "B": "Saving a script with an IAM deny rule blocks access and does not execute anything on boot.",
      "C": "Manual SSH configuration cannot scale with autoscaling and requires human intervention.",
      "D": "Correct. Setting `startup-script` metadata automatically executes provisioning commands during VM boot."
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
        "text": "Define a VPC Service Controls (VPC SC) Service Perimeter enclosing the CDE project, restricting Cloud Storage and BigQuery API access to authorized networks and identities.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Rely entirely on standard IAM permissions without perimeter boundaries.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Disable SSL certificates on internal database connections.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged proxy server on a public subnet.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "A",
    "explanation": "VPC Service Controls (VPC SC) creates security perimeters around Google Cloud resources (Cloud Storage, BigQuery, Cloud SQL) to prevent data exfiltration. Even if an attacker compromises a valid IAM credential, API calls attempting to copy data to external buckets or unauthorized networks outside the perimeter are blocked.",
    "distractors": {
      "A": "Correct. VPC Service Controls establishes cryptographic and network perimeters around sensitive PCI-DSS cardholder data environments.",
      "B": "IAM alone does not protect against insider data exfiltration to legitimate external GCP buckets or credential theft.",
      "C": "Disabling SSL violates core PCI-DSS encryption-in-transit requirements.",
      "D": "Public proxy servers introduce severe security vulnerabilities and expand the PCI-DSS audit scope unnecessarily."
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
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --metadata=run=./bootstrap.sh",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --subnet=frontend-sub --metadata-from-file=startup-script=./bootstrap.sh",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create web-prod-1 --zone=us-central1-a --script=./bootstrap.sh",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances start web-prod-1 --metadata=bootstrap=./bootstrap.sh",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "The `--metadata-from-file` flag with key `startup-script` passes a local shell script file to the Compute Engine instance metadata service, which executes automatically with root privileges upon instance startup.",
    "distractors": {
      "A": "`--metadata=run=...` sets an arbitrary metadata key `run` which is not recognized by the guest OS startup agent.",
      "B": "Correct. `--metadata-from-file=startup-script=./bootstrap.sh` is the standard syntax for passing startup scripts to new VM instances.",
      "C": "`--script` is not a valid flag on `gcloud compute instances create`.",
      "D": "`instances start` is used to start an existing stopped instance, not create a new VM."
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
        "text": "gcloud container clusters create prod-k8s --zone=us-central1-a --disable-ip-alias",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create prod-k8s-master --private-ip-only",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters create prod-k8s --region=us-central1 --enable-private-nodes --enable-private-endpoint --master-ipv4-cidr=172.16.0.0/28 --enable-master-authorized-networks --master-authorized-networks=10.240.0.0/28",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud container clusters create prod-k8s --public-cluster --master-authorized-networks=0.0.0.0/0",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "Deploying a fully private GKE cluster requires `--enable-private-nodes` (private worker nodes), `--enable-private-endpoint` (disables public master endpoint), `--master-ipv4-cidr` (allocates a /28 CIDR for the Google-managed master plane), and `--enable-master-authorized-networks` (whitelists management CIDRs).",
    "distractors": {
      "A": "Private clusters require VPC-native Alias IPs; disabling IP alias prevents private cluster creation.",
      "B": "GKE master nodes are managed by Google Cloud and cannot be created via `gcloud compute instances create`.",
      "C": "Correct. Private nodes, private endpoint, master CIDR, and master authorized networks provide complete GKE network hardening.",
      "D": "Public clusters assign external IPs to nodes and master-authorized-networks of 0.0.0.0/0 permits public internet access."
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
        "text": "gcloud run deploy order-api --image=gcr.io/my-corp/order-api:v1 --region=us-east4 --ingress=all --allow-unauthenticated",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "gcloud app deploy --image=gcr.io/my-corp/order-api:v1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create order-api --image=gcr.io/my-corp/order-api:v1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud run deploy order-api --image=gcr.io/my-corp/order-api:v1 --region=us-east4 --ingress=internal-and-cloud-load-balancing",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Run supports `--ingress` settings: `all` (default, public internet), `internal` (VPC/Direct VPC egress only), and `internal-and-cloud-load-balancing` (allows traffic from internal VPCs and Cloud Load Balancing while rejecting direct public internet requests).",
    "distractors": {
      "A": "`--ingress=all --allow-unauthenticated` exposes the microservice directly to the public internet.",
      "B": "App Engine does not deploy raw GCR container images using `gcloud app deploy` without app.yaml.",
      "C": "Compute Engine instance creation is for VMs, not fully managed serverless Cloud Run services.",
      "D": "Correct. `--ingress=internal-and-cloud-load-balancing` blocks direct public internet access while enabling internal and load balanced routing."
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
        "text": "Grant roles/iam.workloadIdentityUser to the member 'serviceAccount:corp.svc.id.goog[backend/ksa-gcs]' on the Google Service Account gcs-reader@corp.iam.gserviceaccount.com.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Set the Cloud Storage bucket ACL to public read.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Grant roles/owner to ksa-gcs at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Create a JSON key for gcs-reader and mount it as a Kubernetes Secret in the Pod.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "GKE Workload Identity bridges Kubernetes identities to GCP IAM. Binding `roles/iam.workloadIdentityUser` to `serviceAccount:<PROJECT_ID>.svc.id.goog[<NAMESPACE>/<KSA_NAME>]` on the target Google IAM Service Account authorizes the Kubernetes Pod to assume the GCP identity automatically.",
    "distractors": {
      "A": "Correct. `roles/iam.workloadIdentityUser` binding to the `corp.svc.id.goog[namespace/ksa]` principal establishes keyless Workload Identity federation.",
      "B": "Making the bucket public exposes sensitive data to the world.",
      "C": "Kubernetes service accounts cannot be granted GCP IAM roles directly without Workload Identity pool bindings.",
      "D": "Mounting JSON keys as secrets bypasses Workload Identity and reintroduces static key compromise risks."
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
        "text": "gcloud compute instances create prod-mysql-db --image-family=mysql-8",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --backup-start-time=03:00 --enable-point-in-time-recovery --storage-type=SSD",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud spanner instances create prod-mysql-db --config=regional-europe-west3",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-n1-standard-1 --availability-type=ZONAL",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Deploying a production Cloud SQL instance with HA and backups requires `gcloud sql instances create` specifying `--availability-type=REGIONAL`, `--database-version=MYSQL_8_0`, `--tier=db-custom-4-16384`, `--backup-start-time=03:00`, and `--enable-point-in-time-recovery`.",
    "distractors": {
      "A": "Compute Engine instance creation provisions an unmanaged VM, not managed Cloud SQL.",
      "B": "Correct. Complete gcloud command setting regional HA, custom sizing, SSD storage, and PITR backups.",
      "C": "Cloud Spanner is a different database engine and does not run native MySQL 8.0.",
      "D": "ZONAL availability lacks standby regional failover and n1-standard-1 does not meet the 4 vCPU / 16GB RAM spec."
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
        "text": "gcloud functions deploy process-photo --trigger-http --allow-unauthenticated",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy process-photo --trigger-cron='* * * * *'",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud functions deploy process-photo --gen2 --runtime=python311 --region=us-central1 --trigger-event-filters='type=google.cloud.storage.object.v1.finalized' --trigger-event-filters='bucket=raw-user-photos' --entry-point=handle_photo_upload",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create process-photo --storage-trigger=raw-user-photos",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Functions (2nd gen) leverages Eventarc for event-driven triggers. Specifying `--gen2`, `--trigger-event-filters='type=google.cloud.storage.object.v1.finalized'`, and `--trigger-event-filters='bucket=raw-user-photos'` wires the storage upload event directly to the function handler.",
    "distractors": {
      "A": "`--trigger-http` configures an HTTP endpoint, not an automated storage event trigger.",
      "B": "Cloud Run does not accept `--trigger-cron` syntax directly in `gcloud run deploy`.",
      "C": "Correct. Gen 2 Eventarc event filter syntax triggers function execution on object finalization in the specified bucket.",
      "D": "Compute Engine instances do not support direct native Cloud Storage event triggers."
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
        "text": "gcloud organizations networks create enterprise-vpc --range=10.10.0.0/24",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=auto",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute subnets create app-subnet-uscentral1 --network=default --cidr=10.10.0.0/24",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks create enterprise-vpc --subnet-mode=custom && gcloud compute networks subnets create app-subnet-uscentral1 --network=enterprise-vpc --region=us-central1 --range=10.10.0.0/24 --enable-private-ip-google-access",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Creating a custom VPC network requires `gcloud compute networks create <name> --subnet-mode=custom`. Subnets are then added with `gcloud compute networks subnets create <subnet_name> --network=<net> --region=<region> --range=<cidr> --enable-private-ip-google-access`.",
    "distractors": {
      "A": "`gcloud organizations networks create` is a non-existent command.",
      "B": "`--subnet-mode=auto` creates default automatic /20 subnets in every region, violating the custom IP architecture.",
      "C": "`gcloud compute subnets create` is invalid syntax; the command group is `compute networks subnets`.",
      "D": "Correct. `networks create --subnet-mode=custom` followed by `subnets create` with `--enable-private-ip-google-access`."
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
        "text": "gcloud compute instance-templates create api-server-template --machine-type=e2-standard-4 --image-family=debian-11 --image-project=debian-cloud --boot-disk-size=50GB --boot-disk-type=pd-balanced --tags=api-server --service-account=api-sa@corp.iam.gserviceaccount.com --scopes=cloud-platform",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed create api-server-template --size=5",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks snapshot create api-server-template --type=template",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create api-server-template --template-mode=true",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute instance-templates create` defines the instance blueprint (machine type, image family, disk type/size, network tags, service account, and OAuth scopes) used by Managed Instance Groups to instantiate identical VM instances.",
    "distractors": {
      "A": "Correct. Standard syntax for provisioning instance templates with disk sizing, network tags, and service account bindings.",
      "B": "`instance-groups managed create` creates the MIG itself, which requires an existing template reference.",
      "C": "`disks snapshot` creates persistent disk point-in-time backups, not instance templates.",
      "D": "`--template-mode` is not a valid flag on `gcloud compute instances create`."
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
        "text": "gcloud compute instance-groups managed delete web-mig && gcloud compute instance-groups managed create web-mig --template=web-template-v2",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed rolling-action start-update web-mig --region=us-central1 --version=template=web-template-v2 --max-surge=20% --max-unavailable=0%",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances reset-all --group=web-mig --template=web-template-v2",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed set-template web-mig --force-restart",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed rolling-action start-update` initiates a gradual rolling deployment. Setting `--max-surge=20%` (creates new VMs first) and `--max-unavailable=0%` ensures that full capacity is maintained throughout the update with zero downtime.",
    "distractors": {
      "A": "Deleting the MIG causes complete outage and destroys active customer sessions.",
      "B": "Correct. `rolling-action start-update` with `--max-unavailable=0%` ensures seamless zero-downtime rolling upgrades.",
      "C": "`instances reset-all` is non-existent syntax.",
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
        "text": "gcloud container images compile --source=. --repo=app-repo",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "docker build . && gsutil cp image.tar gs://my-proj-artifacts/",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud builds submit --tag=us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0 .",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud artifacts docker push us-docker.pkg.dev/my-proj/app-repo/web-svc:v1.0",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud builds submit --tag=<IMAGE_URL> .` compresses the local directory, uploads it to Cloud Build, executes `docker build` remotely on managed build workers, and automatically pushes the final image to the designated Artifact Registry repository.",
    "distractors": {
      "A": "`gcloud container images compile` is non-existent CLI syntax.",
      "B": "Building locally requires local Docker daemon overhead and copying tarballs to Cloud Storage is not an OCI container registry.",
      "C": "Correct. `gcloud builds submit --tag=...` executes serverless container builds and pushes to Artifact Registry in a single step.",
      "D": "`gcloud artifacts docker push` requires local Docker daemon authentication and manual prior build."
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
        "text": "Upload frontend-app.yaml to a Cloud Storage bucket and restart the GKE cluster.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Run gcloud container clusters update --manifest=frontend-app.yaml.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances create-from-yaml frontend-app.yaml.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Run kubectl apply -f frontend-app.yaml in your configured terminal session.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`kubectl apply -f <filename.yaml>` is the authoritative declarative Kubernetes CLI command to create and update Deployments, Services, ConfigMaps, and Ingress resources on a Google Kubernetes Engine cluster.",
    "distractors": {
      "A": "Uploading YAML files to Cloud Storage does not trigger GKE cluster deployment without a CI/CD pipeline or Anthos Config Sync.",
      "B": "`gcloud container clusters update` modifies cluster infrastructure (node counts, network settings), not container workload manifests.",
      "C": "`create-from-yaml` is not a valid gcloud compute command for Kubernetes manifests.",
      "D": "Correct. `kubectl apply -f` submits declarative manifests to the Kubernetes API server."
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
        "text": "gcloud artifacts repositories create backend-containers --repository-format=docker --location=us-central1 --description='Docker repository for backend services'",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud container images repositories create backend-containers --region=us-central1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets create gs://us-docker.pkg.dev/backend-containers",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute repositories create backend-containers --type=DOCKER",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud artifacts repositories create` is the command to provision new Artifact Registry repositories, requiring `--repository-format=docker` (or npm, maven, python) and `--location=<region>`.",
    "distractors": {
      "A": "Correct. `artifacts repositories create` with format `docker` and location `us-central1` provisions the Artifact Registry container repo.",
      "B": "`gcloud container images` is the legacy GCR command group and cannot create new Artifact Registry repositories.",
      "C": "Artifact Registry is a managed OCI registry service, not a plain Cloud Storage bucket URL.",
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
        "text": "gcloud compute networks update my-vpc --enable-nat",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Create a Cloud Router using gcloud compute routers create nat-router --network=my-vpc --region=us-east1, then create the NAT gateway using gcloud compute routers nats create nat-gw --router=nat-router --region=us-east1 --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create nat-gateway --image-family=nat --region=us-east1",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud compute firewall-rules create allow-outbound-nat --allow=all --direction=EGRESS",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Cloud NAT operates in conjunction with a Cloud Router in the target region. You first create the Cloud Router (`gcloud compute routers create`), then attach the Cloud NAT service (`gcloud compute routers nats create`) specifying `--auto-allocate-nat-external-ips` and `--nat-all-subnet-ip-ranges`.",
    "distractors": {
      "A": "`--enable-nat` is not a valid network flag on `gcloud compute networks update`.",
      "B": "Correct. Creating the Cloud Router followed by `routers nats create` deploys managed Cloud NAT for all subnets in the region.",
      "C": "Self-managed NAT VM instances introduce single points of failure, scaling bottlenecks, and operational maintenance overhead.",
      "D": "Firewall rules govern traffic permissions; they do not perform Source Network Address Translation (SNAT)."
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
        "text": "cat db-backup.sql.gz | gcloud sql connect prod-mysql-1",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud sql import sql prod-mysql-1 gs://corp-db-dumps/db-backup.sql.gz --database=app_db",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq load --source_format=SQL app_db gs://corp-db-dumps/db-backup.sql.gz",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restore prod-mysql-1 --source=gs://corp-db-dumps/db-backup.sql.gz",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql import sql <INSTANCE_NAME> <GCS_URI> --database=<DB_NAME>` initiates an asynchronous server-side database import from Cloud Storage directly into the Cloud SQL instance engine.",
    "distractors": {
      "A": "Piping large gzip dumps over `gcloud sql connect` is slow, unmonitored, and prone to client network disconnects.",
      "B": "Correct. `gcloud sql import sql` is the standard CLI command to load SQL or CSV dumps from Cloud Storage into Cloud SQL.",
      "C": "`bq load` loads data into BigQuery tables, not Cloud SQL MySQL databases.",
      "D": "`sql instances restore` is for restoring Cloud SQL automated backups, not importing SQL dump text files from GCS."
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
        "text": "gcloud compute instances create-app app.yaml",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud run deploy retail-app --app-yaml=app.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud app deploy app.yaml --project=retail-app-prod --promote",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gsutil cp app.yaml gs://retail-app-prod-appengine/",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app deploy <app.yaml>` deploys the application source code to Google App Engine. Passing `--promote` (which is default true) routes 100% of all incoming application traffic to the newly deployed version immediately.",
    "distractors": {
      "A": "`create-app` is not a valid gcloud compute command.",
      "B": "Cloud Run uses Docker containers and does not parse App Engine `app.yaml` configurations.",
      "C": "Correct. `gcloud app deploy --promote` deploys App Engine apps and routes 100% traffic to the new version.",
      "D": "Copying YAML files to Cloud Storage does not deploy App Engine code without Cloud Build / CD pipelines."
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
        "text": "kubectl scale deployment batch-pool --replicas=5",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters update analytics-cluster --add-nodes=5 --spot",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create batch-pool-node-[1-5] --preemptible",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud container node-pools create batch-pool --cluster=analytics-cluster --region=us-central1 --machine-type=e2-standard-4 --num-nodes=5 --spot --node-labels=app=batch-worker",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud container node-pools create <POOL_NAME> --cluster=<CLUSTER>` adds a discrete node pool with specific machine sizing, `--spot` (or `--preemptible`), node count, and Kubernetes node labels.",
    "distractors": {
      "A": "`kubectl scale deployment` scales Kubernetes Pods, not physical VM worker node infrastructure.",
      "B": "`clusters update` cannot create new named node pools with custom labels.",
      "C": "Creating standalone Compute Engine VMs manually does not register them as managed worker nodes in the GKE control plane.",
      "D": "Correct. `node-pools create` with `--spot` and `--node-labels` is the official command for adding specialized node pools."
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
        "text": "gcloud compute health-checks create http web-health-check --port=80 && gcloud compute backend-services create web-backend-svc --protocol=HTTP --port-name=http --health-checks=web-health-check --global && gcloud compute backend-services add-backend web-backend-svc --instance-group=web-mig-us --instance-group-region=us-central1 --global",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute target-http-proxies create web-backend-svc --health-check=web-health-check",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute url-maps create web-backend-svc --instance-group=web-mig-us",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute forwarding-rules create web-backend-svc --ports=80 --global",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "Configuring load balancer backends follows a strict dependency order: 1) Create the Health Check (`health-checks create http`), 2) Create the Backend Service with the health check (`backend-services create --global`), 3) Add the instance group backend to the service (`backend-services add-backend --global`).",
    "distractors": {
      "A": "Correct. Proper sequence: health check creation, global backend service definition, and MIG backend association.",
      "B": "Target HTTP proxies connect URL maps to forwarding rules and do not attach health checks.",
      "C": "URL maps route URLs to backend services, not directly to raw instance groups.",
      "D": "Forwarding rules route incoming traffic to target proxies, not manage backend instance groups directly."
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
        "text": "bq create table corp_finance.transactions --partition=transaction_time --cluster=merchant_id",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "bq mk --table --time_partitioning_field=transaction_time --clustering_fields=merchant_id,customer_id corp_finance.transactions ./schema.json",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud bigquery tables create transactions --dataset=corp_finance --schema=./schema.json",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq load --autodetect corp_finance.transactions ./schema.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "The `bq mk --table` command creates tables in BigQuery. Adding `--time_partitioning_field=<COLUMN>` defines the time partition column and `--clustering_fields=<COL1,COL2>` configures clustering columns alongside the schema JSON definition.",
    "distractors": {
      "A": "`bq create table` is invalid syntax; `bq mk` is the table creation command.",
      "B": "Correct. `bq mk --table` with `--time_partitioning_field` and `--clustering_fields` creates partitioned and clustered tables.",
      "C": "BigQuery table schema creation is managed via the `bq` CLI tool or API, not `gcloud bigquery tables create`.",
      "D": "`bq load` ingests data rows into a table from a data file, not creating empty schema definitions."
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
        "text": "Configure Cloud DNS to inject SSL keys into DNS TXT records.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Generate a self-signed certificate and store it in a Kubernetes Secret of type kubernetes.io/tls.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Deploy a ManagedCertificate custom resource defining domain 'app.example.com' and annotate the Kubernetes Ingress object with 'networking.gke.io/managed-certificates: my-managed-cert'.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy an Nginx sidecar container running Certbot in every Pod.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "GKE provides the `ManagedCertificate` custom resource definition (CRD). When an Ingress is annotated with `networking.gke.io/managed-certificates: <CERT_NAME>`, Google Cloud Load Balancing automatically provisions and auto-renews public Google-managed SSL certificates for the specified domains.",
    "distractors": {
      "A": "Cloud DNS cannot terminate SSL/TLS connections or inject private decryption keys.",
      "B": "Self-signed certificates trigger browser security warnings and require manual secret rotation.",
      "C": "Correct. `ManagedCertificate` CRD + Ingress annotation provides fully automated, zero-touch Google-managed SSL/TLS.",
      "D": "Certbot sidecars introduce high maintenance, lack load balancer edge termination, and add unnecessary complexity."
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
        "text": "bq mk --dataset telemetry-db && bq mk --table device-readings",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create telemetry-db --storage-type=bigtable",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances create telemetry-db --database-version=BIGTABLE_1",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "gcloud bigtable instances create telemetry-db --cluster=c1 --cluster-zone=us-central1-b --cluster-num-nodes=4 --cluster-storage-type=SSD --display-name='Telemetry DB' && cbt -instance=telemetry-db createtable device-readings 'families=cf1'",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Provisioning a Cloud Bigtable instance uses `gcloud bigtable instances create` specifying cluster zone, node count, and storage type (SSD/HDD). Table and column family provisioning is performed using the `cbt` CLI (`cbt createtable <table_name> 'families=<family_name>'`).",
    "distractors": {
      "A": "`bq mk` creates BigQuery tables, which are analytical data warehouses, not sub-millisecond Bigtable clusters.",
      "B": "Compute Engine instances create VMs, not managed Bigtable instances.",
      "C": "`gcloud sql` is for relational engines (MySQL/Postgres/SQL Server), not Bigtable NoSQL wide-column.",
      "D": "Correct. `gcloud bigtable instances create` provisions the cluster and `cbt createtable` creates the table and column family."
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
        "text": "gcloud compute images create golden-ubuntu-v1 --source-disk=base-template-vm --source-disk-zone=us-east1-b --family=corp-ubuntu --description='Golden hardened Ubuntu base image'",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute instances snapshot base-template-vm --image=golden-ubuntu-v1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks export base-template-vm --format=qcow2",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gsutil cp /dev/sda1 gs://my-images/golden-ubuntu-v1.img",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute images create <IMAGE_NAME> --source-disk=<DISK> --source-disk-zone=<ZONE> --family=<FAMILY>` creates an immutable custom image from a stopped VM's persistent disk and adds it to an image family for automated instance template rollouts.",
    "distractors": {
      "A": "Correct. `gcloud compute images create` creates an image from a source disk and organizes it into an image family.",
      "B": "`instances snapshot` is invalid syntax; snapshots are created via `gcloud compute disks snapshot`.",
      "C": "Exporting raw qcow2 disks adds unnecessary data transfer and conversion overhead compared to native image creation.",
      "D": "Copying raw block devices directly via gsutil produces corrupt image states."
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
        "text": "gcloud storage objects create gs://corp-customer-receipts --location=nam4",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets create gs://corp-customer-receipts --location=us-central1,us-east1 --default-storage-class=STANDARD --uniform-bucket-level-access",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gsutil mb -c STANDARD -l GLOBAL gs://corp-customer-receipts",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute buckets create gs://corp-customer-receipts --dual-region=us-central1,us-east1",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "The `gcloud storage buckets create` command supports specifying custom dual-region pairs (`--location=us-central1,us-east1`), `--default-storage-class=STANDARD`, and `--uniform-bucket-level-access` in a single declarative command.",
    "distractors": {
      "A": "`gcloud storage objects create` uploads files, not creates buckets.",
      "B": "Correct. Standard syntax for provisioning dual-region buckets with uniform IAM access control.",
      "C": "`GLOBAL` is not a valid location for Cloud Storage buckets.",
      "D": "`gcloud compute buckets` is invalid syntax; storage is managed under `gcloud storage`."
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
        "text": "gcloud container clusters update --enable-git-sync=corp-app",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gsutil notification create -t build-topic -e OBJECT_FINALIZE gs://my-repo",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud builds triggers create github --repo-name=corp-app --repo-owner=my-org --branch-pattern='^main$' --build-config=cloudbuild.yaml",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute triggers create github --repo=corp-app",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud builds triggers create github` creates an automated CI trigger that listens to Git webhook events from a connected GitHub repository and initiates a build based on branch patterns and `cloudbuild.yaml`.",
    "distractors": {
      "A": "`--enable-git-sync` is not a valid GKE cluster update flag.",
      "B": "`gsutil notification` configures Cloud Storage object notifications, not Git repository build triggers.",
      "C": "Correct. `gcloud builds triggers create github` links GitHub branch events to Cloud Build pipeline execution.",
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
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --target-cpu-utilization=0.8",
        "isTrap": true,
        "trapType": "premature_optimization"
      },
      {
        "letter": "B",
        "text": "kubectl autoscale deployment worker-mig --min=2 --max=50",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud monitoring alert-policies create --scale-mig=worker-mig",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed set-autoscaling worker-mig --region=us-central1 --min-num-replicas=2 --max-num-replicas=50 --custom-metric-metric='pubsub.googleapis.com/subscription/num_undelivered_messages' --custom-metric-target=100 --custom-metric-type=GAUGE --custom-metric-utilization-target-type=PER_INSTANCE",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Managed Instance Groups support autoscaling based on Cloud Monitoring custom metrics. Specifying `--custom-metric-metric`, `--custom-metric-target=100`, and `--custom-metric-utilization-target-type=PER_INSTANCE` dynamically calculates the required number of VM replicas based on real queue depth.",
    "distractors": {
      "A": "CPU utilization does not accurately reflect Pub/Sub message backlog depth for I/O bound worker processes.",
      "B": "`kubectl autoscale` is for Kubernetes Pods, not Compute Engine Managed Instance Groups.",
      "C": "Monitoring alerting policies trigger notifications (email, pager), not native MIG autoscaler controller loops.",
      "D": "Correct. `set-autoscaling` with custom metric parameters configures dynamic queue-based VM auto-scaling."
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
        "text": "gcloud run deploy api-service --image=gcr.io/my-proj/api:v1 --region=us-central1 --set-secrets=DATABASE_PASSWORD=db-password:latest",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gsutil cp gs://my-secrets/db-pass.txt /etc/secret",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud run deploy api-service --image=gcr.io/my-proj/api:v1 --region=us-central1 --set-env-vars=DATABASE_PASSWORD='plainTextPassword123'",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create api-service --secret=db-password",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run natively integrates with Secret Manager via `--set-secrets=<ENV_VAR>=<SECRET_NAME>:<VERSION>`. Cloud Run fetches the secret dynamically at runtime and injects it as an environment variable (or volume mount) into the container without exposing plaintext passwords in build files.",
    "distractors": {
      "A": "Correct. `--set-secrets=DATABASE_PASSWORD=db-password:latest` injects Secret Manager secrets securely into the container runtime.",
      "B": "Plain text files in Cloud Storage lack automated secret versioning, encryption in memory, and IAM secret governance.",
      "C": "Hardcoding plaintext credentials into `--set-env-vars` exposes database passwords in console logs and revision metadata.",
      "D": "`gcloud compute instances create` is for VMs, not Cloud Run serverless services."
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
        "text": "Create an egress firewall rule allowing port 80 to 8.8.8.8.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule allowing TCP traffic on your application port from source IP ranges 35.191.0.0/16 and 130.211.0.0/22 targeting your backend network tags.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Assign public IP addresses to all backend Compute Engine instances.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Create an ingress firewall rule allowing all traffic from 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Load Balancer health checking systems probe instances from well-known IP ranges: `35.191.0.0/16` and `130.211.0.0/22` (and `209.85.152.0/22`, `209.85.204.0/22` for legacy LBs). An ingress firewall rule must explicitly allow these CIDR blocks to reach the backend VM instances.",
    "distractors": {
      "A": "Egress rules to Google Public DNS (8.8.8.8) do not allow inbound health check probes into backend ports.",
      "B": "Correct. `35.191.0.0/16` and `130.211.0.0/22` are the official Google Cloud Load Balancer health checker probe IP ranges.",
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
        "text": "kubectl apply -f clouddeploy.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters apply --pipeline=clouddeploy.yaml",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud deploy apply --file=clouddeploy.yaml --region=us-central1",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud builds submit --config=clouddeploy.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Deploy delivery pipelines and target definitions are applied to the Cloud Deploy service using `gcloud deploy apply --file=<PIPELINE_FILE> --region=<REGION>`.",
    "distractors": {
      "A": "`kubectl apply` applies manifests to an in-cluster Kubernetes API server, not the managed Google Cloud Deploy service.",
      "B": "`container clusters apply` is non-existent CLI syntax.",
      "C": "Correct. `gcloud deploy apply` registers the Cloud Deploy delivery pipeline configuration across target environments.",
      "D": "`gcloud builds submit` invokes Cloud Build steps, not Cloud Deploy multi-target delivery pipelines."
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
        "text": "bq update --lifecycle=lifecycle-30d.json corp-archive-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gsutil lifecycle delete gs://corp-archive-vault",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud storage objects update gs://corp-archive-vault/* --lifecycle=lifecycle-30d.json",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://corp-archive-vault --lifecycle-file=lifecycle-30d.json",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "The `gcloud storage buckets update <BUCKET> --lifecycle-file=<FILE>` command applies an Object Lifecycle Management JSON configuration to a Cloud Storage bucket, enabling automated storage class transitions and object purges.",
    "distractors": {
      "A": "`bq update` is for BigQuery dataset and table metadata updates.",
      "B": "`gsutil lifecycle delete` removes existing lifecycle rules rather than applying new JSON configurations.",
      "C": "Lifecycle rules are configured at the bucket level, not on individual object paths.",
      "D": "Correct. `gcloud storage buckets update --lifecycle-file` is the modern CLI command to configure bucket lifecycle rules."
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
        "text": "Define volumes in the Pod spec referencing the configMap and secret names, and add volumeMounts in the container spec mapping those volumes to the target mountPaths.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Download the secrets from Cloud Storage in the container ENTRYPOINT script via public URLs.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Pass the secret data as URL query parameters in the Kubernetes Ingress host.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Hardcode the configuration and passwords into the Dockerfile image layers.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "A",
    "explanation": "In Kubernetes, ConfigMaps and Secrets are decoupled from container images by mounting them as volumes. Specifying `volumes.configMap` and `volumes.secret` with matching `volumeMounts` in the container spec safely exposes configurations as file paths inside the container filesystem.",
    "distractors": {
      "A": "Correct. Standard declarative Kubernetes pattern for injecting ConfigMaps and Secrets via volume mounts.",
      "B": "Public storage URLs expose credentials to unauthorized external access.",
      "C": "URL query parameters expose secrets in browser histories, web server logs, and HTTP proxies.",
      "D": "Hardcoding credentials into container images exposes sensitive passwords in image registries."
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
        "text": "gcloud compute users create app_user --instance=app-db",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud sql users create app_user --instance=app-db --password='SuperSecurePassword987!'",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud iam service-accounts create app_user --cloud-sql-user",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud sql databases create app_user --instance=app-db",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql users create <USERNAME> --instance=<INSTANCE> --password=<PASSWORD>` creates database user accounts in Cloud SQL instances, allowing applications to authenticate over Private IP connections.",
    "distractors": {
      "A": "`gcloud compute users create` is for OS Login POSIX user accounts, not database users.",
      "B": "Correct. `gcloud sql users create` creates database-native authentication credentials on the Cloud SQL instance.",
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
        "text": "gcloud compute instances create spanner-orders --spanner-units=300",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create spanner-orders --type=SPANNER --ddl='CREATE TABLE Orders...'",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud spanner instances create spanner-orders --config=regional-us-central1 --processing-units=300 --description='Orders Spanner' && gcloud spanner databases create orders_db --instance=spanner-orders --ddl='CREATE TABLE Orders (OrderId STRING(36) NOT NULL, Amount INT64) PRIMARY KEY (OrderId)'",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "bq mk --dataset spanner_orders && bq query 'CREATE TABLE Orders...'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Provisioning Cloud Spanner requires creating the instance (`gcloud spanner instances create --processing-units=300`), then creating the database with initial DDL schema definitions (`gcloud spanner databases create --ddl='...'`).",
    "distractors": {
      "A": "Compute Engine instance creation is for VMs, not managed Spanner instances.",
      "B": "`gcloud sql` does not support Cloud Spanner instances.",
      "C": "Correct. `spanner instances create` followed by `spanner databases create --ddl` provisions the instance, database, and tables.",
      "D": "BigQuery (`bq`) creates analytical datasets, not transactional Cloud Spanner relational tables."
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
        "text": "gcloud dns records create sftp-gateway --ip-type=static",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances restart sftp-gateway --make-ip-static",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute networks update sftp-gateway --static-ip=true",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute addresses create sftp-static-ip --region=us-east1 && gcloud compute instances add-access-config sftp-gateway --zone=us-east1-b --address=$(gcloud compute addresses describe sftp-static-ip --region=us-east1 --format='value(address)')",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Reserving a static regional IP address uses `gcloud compute addresses create <NAME> --region=<REGION>`. To attach this reserved static IP to an existing VM's network interface, use `gcloud compute instances add-access-config` (or update the existing access config).",
    "distractors": {
      "A": "Cloud DNS maps hostnames to IP addresses, but does not allocate static external GCP IP addresses.",
      "B": "`--make-ip-static` is not a valid flag on `gcloud compute instances restart`.",
      "C": "`compute networks update` updates network mode/MTU, not individual VM interface IP assignments.",
      "D": "Correct. Reserving the IP via `compute addresses create` and binding it with `add-access-config` assigns the static external IP."
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
        "text": "A Kubernetes StatefulSet paired with a Headless Service and volumeClaimTemplates.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "A Kubernetes Deployment with 3 replicas and a single shared ReadWriteMany PersistentVolume.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "A Kubernetes DaemonSet with hostPath volumes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "A Kubernetes Job with a restartPolicy of Always.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Kubernetes StatefulSets provide stable, ordered network identifiers (`pod-0`, `pod-1`) and dedicated persistent storage via `volumeClaimTemplates`. When pods restart or migrate to other nodes, the storage volume automatically reattaches to the exact same pod ordinal identity.",
    "distractors": {
      "A": "Correct. StatefulSets provide stable network identities and dedicated per-replica PersistentVolumeClaims for stateful databases.",
      "B": "Standard Deployments treat Pods as fungible/stateless with random hash names and cannot guarantee stable volume-to-pod identity bindings.",
      "C": "DaemonSets run one Pod per node and `hostPath` volumes tie data to physical worker nodes without cloud disk detachment/reattachment.",
      "D": "Kubernetes Jobs are for run-to-completion batch tasks, not persistent 24/7 databases."
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
        "text": "gcloud compute disks attach data-index-disk --instance=data-processor-vm",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks create data-index-disk --zone=us-central1-a --size=200GB --type=pd-ssd && gcloud compute instances attach-disk data-processor-vm --disk=data-index-disk --zone=us-central1-a",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create data-processor-vm --add-disk=data-index-disk",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud storage objects create gs://data-index-disk --size=200GB",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Creating and attaching extra block storage involves: 1) `gcloud compute disks create <DISK_NAME> --size=<SIZE> --type=<TYPE> --zone=<ZONE>`, and 2) `gcloud compute instances attach-disk <VM_NAME> --disk=<DISK_NAME> --zone=<ZONE>`.",
    "distractors": {
      "A": "`gcloud compute disks attach` is invalid syntax; the command is `gcloud compute instances attach-disk`.",
      "B": "Correct. Standard two-step workflow to provision persistent disks and attach them to running Compute Engine VMs.",
      "C": "`instances create` fails because the VM already exists.",
      "D": "Cloud Storage objects are not block-level persistent disks for VM filesystems."
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
        "text": "gcloud compute instances reset prod-master-db-primary",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances delete prod-master-db",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances failover prod-master-db",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restart prod-master-db --force-failover",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud sql instances failover <INSTANCE_NAME>` explicitly triggers an intentional failover on a Regional High Availability Cloud SQL instance, promoting the standby replica to the primary master for DR validation.",
    "distractors": {
      "A": "Cloud SQL underlying VMs are managed by Google and cannot be addressed directly via `gcloud compute instances reset`.",
      "B": "Deleting the database destroys production data and takes down the application.",
      "C": "Correct. `gcloud sql instances failover` is the official CLI command to test regional Cloud SQL automated failover.",
      "D": "`instances restart` reboots the current master in-place rather than initiating regional standby failover."
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
        "text": "A shell script running gsutil cp -r on an e2-micro VM.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud VPN tunnel connecting to AWS VPC.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "BigQuery Data Transfer Service.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Google Storage Transfer Service (via gcloud transfer jobs create).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Storage Transfer Service is a fully managed, scalable data migration service designed to transfer petabytes of data from Amazon S3, Azure Blob, or HTTP endpoints to Cloud Storage with automated parallelization, retries, and MD5 checksum validation.",
    "distractors": {
      "A": "Running `gsutil cp` on a single VM is slow, unmonitored, bottlenecks on VM network interfaces, and lacks automated fault tolerance.",
      "B": "Cloud VPN requires managing IPsec infrastructure and is unnecessary for S3-to-GCS cloud-to-cloud migration.",
      "C": "BigQuery Data Transfer Service is for loading analytical data into BigQuery tables, not transferring unstructured object files between storage buckets.",
      "D": "Correct. Storage Transfer Service delivers serverless, high-bandwidth data transfers from S3 to GCS with automated checksum integrity."
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
        "text": "Deploy the Cloud Run service with Direct VPC Egress configured to subnet backend-sub with --vpc-egress=all-traffic (or private-ranges-only).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy an unmanaged Squid Proxy VM on a public subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Assign a public IP address to the private Cloud SQL instance.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Create an open firewall rule on port 0-65535 on 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run supports Direct VPC Egress (or Serverless VPC Access connectors), allowing serverless container instances to route outbound traffic directly into a VPC subnet (`--network` and `--subnet`) to securely reach private IP addresses without leaving the Google network.",
    "distractors": {
      "A": "Correct. Direct VPC Egress routes outbound Cloud Run traffic directly into designated VPC subnets privately.",
      "B": "Self-managed proxy VMs create latency, maintenance overhead, and single points of failure.",
      "C": "Public IPs on private databases expose database ports to internet scanning and brute-force attacks.",
      "D": "Opening firewall rules to 0.0.0.0/0 destroys VPC security isolation."
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
        "text": "kubectl scale deployment payment-gateway --replicas=25",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "kubectl autoscale deployment payment-gateway --min=3 --max=25 --cpu-percent=75",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud container clusters update payment-gateway --enable-autoscaling --min-nodes=3 --max-nodes=25",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute instance-groups managed set-autoscaling payment-gateway --target-cpu-utilization=0.75",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl autoscale deployment <NAME> --min=<MIN> --max=<MAX> --cpu-percent=<TARGET>` creates a HorizontalPodAutoscaler (HPA) resource that queries the Kubernetes metrics-server and adjusts Pod replica counts dynamically based on workload CPU demand.",
    "distractors": {
      "A": "`kubectl scale` sets a static replica count and does not dynamically autoscale based on real-time CPU utilization.",
      "B": "Correct. `kubectl autoscale deployment` configures native Kubernetes Pod HPA autoscaling.",
      "C": "`clusters update --enable-autoscaling` configures Cluster Autoscaler (scaling worker VM nodes), not Pod-level HPA.",
      "D": "`gcloud compute instance-groups` scales Compute Engine VM instance groups, not Kubernetes Pods."
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
        "text": "gcloud compute networks update corp-public-zone --dns-a-record=34.120.50.80",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud dns record-sets create api.corp.com. --zone=corp-public-zone --type=A --ttl=300 --rrdatas=34.120.50.80",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud dns managed-zones add-record corp-public-zone --type=A --ip=34.120.50.80",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq query 'INSERT INTO dns_records VALUES (api.corp.com, 34.120.50.80)'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud dns record-sets create <FQDN> --zone=<ZONE_NAME> --type=<TYPE> --ttl=<TTL> --rrdatas=<IP_OR_VALUE>` adds DNS resource records (A, CNAME, TXT, MX) to a Cloud DNS managed zone.",
    "distractors": {
      "A": "`compute networks update` is for VPC network properties, not DNS record registration.",
      "B": "Correct. `gcloud dns record-sets create` is the official CLI command to provision DNS records.",
      "C": "`managed-zones add-record` is non-existent syntax.",
      "D": "BigQuery is an analytical SQL engine, not an authoritative public DNS server."
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
        "text": "gcloud pubsub topics create iam-events && gcloud pubsub subscriptions create --cron='* * * * *'",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud logging sinks create iam-audit-sink cloudrun.googleapis.com/audit-logger",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud eventarc triggers create iam-audit-trigger --destination-run-service=audit-logger --destination-run-region=us-central1 --location=us-central1 --event-filters='type=google.cloud.audit.log.v1.written' --event-filters='serviceName=iam.googleapis.com' --event-filters='methodName=SetIamPolicy' --service-account=eventarc-sa@corp.iam.gserviceaccount.com",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create iam-listener --service=audit-logger",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Eventarc allows routing Cloud Audit Logs directly to Cloud Run services without custom polling. Specifying `--event-filters='type=google.cloud.audit.log.v1.written'`, `--event-filters='serviceName=iam.googleapis.com'`, and `--event-filters='methodName=SetIamPolicy'` triggers the Cloud Run destination on policy changes.",
    "distractors": {
      "A": "Pub/Sub subscriptions do not take cron syntax.",
      "B": "Cloud Logging sinks cannot directly route HTTP push requests to Cloud Run services (they route to Pub/Sub, BigQuery, GCS, or log buckets).",
      "C": "Correct. `gcloud eventarc triggers create` with audit log filters connects IAM changes directly to Cloud Run.",
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
        "text": "gsutil notification create -f bigquery gs://corp-logs",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks update --export-logs-to-bigquery",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "bq mk --transfer_config --destination=audit_analytics --source=logs",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create iam-audit-bq-sink bigquery.googleapis.com/projects/corp-prod-101/datasets/audit_analytics --log-filter='protoPayload.serviceName=\"iam.googleapis.com\"'",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud logging sinks create <SINK_NAME> <DESTINATION_URI> --log-filter=<FILTER>` creates a Cloud Logging Sink that continuously routes matching log entries to BigQuery, Cloud Storage, or Pub/Sub.",
    "distractors": {
      "A": "`gsutil notification` is for Cloud Storage Pub/Sub notifications, not Cloud Logging BigQuery streaming.",
      "B": "`compute networks update` does not configure IAM audit log sinks.",
      "C": "BigQuery Data Transfer Service does not stream live Cloud Logging entries.",
      "D": "Correct. `gcloud logging sinks create` with BigQuery destination URI streams filtered logs to BigQuery."
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
        "text": "gcloud sql instances create db-replica-europewest1 --master-instance-name=db-master-uscentral1 --region=europe-west1",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud sql instances clone db-master-uscentral1 db-replica-europewest1 --region=europe-west1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create db-replica-europewest1 --replica-of=db-master-uscentral1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud spanner instances create db-replica-europewest1 --source=db-master-uscentral1",
        "isTrap": true,
        "trapType": "non_relational_fit"
      }
    ],
    "correct": "A",
    "explanation": "Cloud SQL Read Replicas are created with `gcloud sql instances create <REPLICA_NAME> --master-instance-name=<PRIMARY_NAME> --region=<TARGET_REGION>`. When the target region differs from the master, Cloud SQL provisions a Cross-Region Read Replica.",
    "distractors": {
      "A": "Correct. `gcloud sql instances create --master-instance-name` in a different region deploys a cross-region replica.",
      "B": "`instances clone` creates a static point-in-time clone in the same region, not an actively replicating live replica.",
      "C": "`compute instances create` provisions Compute Engine VMs, not managed Cloud SQL database replicas.",
      "D": "Cloud Spanner cannot act as a direct read replica for Cloud SQL PostgreSQL."
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
        "text": "Set the instance template to use Spot VMs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Configure the Managed Instance Group with a Stateful Policy preserving the data disk device name (e.g. --stateful-disk) and network interfaces.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Deploy an Unmanaged Instance Group and disable autoscaling.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Use Local SSDs with cron snapshot scripts.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "Stateful MIGs allow defining a Stateful Policy on persistent disks (`--stateful-disk`) and IP addresses. During auto-healing or rolling updates, Compute Engine preserves and reattaches the exact individual data disk to the recreated instance.",
    "distractors": {
      "A": "Spot VMs are frequently preempted and do not provide stateful disk preservation guarantees.",
      "B": "Correct. Stateful MIGs preserve unique per-instance persistent disks and IP addresses across VM recreation.",
      "C": "Unmanaged Instance Groups lack automated autohealing and managed rolling updates.",
      "D": "Local SSDs lose all data upon VM stop/recreation and cannot be preserved in stateful policies."
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
        "text": "Create a Cloud Scheduler job that sends an HTTP ping every 5 minutes.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Deploy an e2-micro VM running a loop curl command.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud run services update payment-api --region=us-central1 --min-instances=2",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud run services update payment-api --region=us-central1 --max-instances=2",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run supports `--min-instances=<COUNT>`. Setting minimum instances keeps the specified number of container instances initialized and warm in memory, eliminating cold starts for subsequent incoming requests.",
    "distractors": {
      "A": "Periodic HTTP pings only keep 1 instance warm intermittently and fail under concurrent traffic bursts.",
      "B": "Custom ping loops on VMs add infrastructure maintenance and are an unnecessary anti-pattern.",
      "C": "Correct. `--min-instances=2` keeps two container instances permanently warm to avoid cold start latency.",
      "D": "`--max-instances=2` limits maximum scale-out capacity, but allows instances to scale down to 0 when idle."
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
        "text": "Set the node pool autoscaling min-nodes to 3.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create an IAM Deny policy preventing node pool upgrades.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Disable the GKE node auto-upgrade feature permanently.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Deploy a PodDisruptionBudget (PDB) resource with minAvailable: 3 matching the web deployment pod selector.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "A Kubernetes `PodDisruptionBudget` (PDB) specifies the minimum number (`minAvailable`) or maximum number (`maxUnavailable`) of Pod replicas that must be running simultaneously during voluntary disruptions (such as node drain, cluster upgrades, or autoscaler downscaling).",
    "distractors": {
      "A": "Node pool min-nodes controls VM worker count, but does not prevent multiple pods on the same node from being drained simultaneously.",
      "B": "IAM Deny policies block administrative actions, not Kubernetes scheduler eviction logic.",
      "C": "Disabling auto-upgrades leaves worker nodes unpatched and vulnerable to security CVEs.",
      "D": "Correct. A `PodDisruptionBudget` with `minAvailable: 3` prevents the Kubernetes control plane from evicting too many pods concurrently."
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
        "text": "gcloud storage rsync /var/www/assets/ gs://corp-product-assets/ --recursive",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute scp /var/www/assets/ gs://corp-product-assets/",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud storage cp /var/www/assets/* gs://corp-product-assets/ --overwrite",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "bq load --source_format=CSV gs://corp-product-assets/ /var/www/assets/",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud storage rsync` (or `gsutil rsync`) compares source and destination checksums/timestamps and synchronizes only newly added or modified files, minimizing bandwidth consumption and transfer time.",
    "distractors": {
      "A": "Correct. `gcloud storage rsync --recursive` incrementally synchronizes only changed/new files efficiently.",
      "B": "`gcloud compute scp` transfers files between Compute Engine VMs, not to Cloud Storage bucket endpoints.",
      "C": "`storage cp` blindly copies all files, re-uploading unchanged objects and wasting network bandwidth.",
      "D": "`bq load` loads tabular data into BigQuery tables, not unstructured files into Cloud Storage."
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
        "text": "gcloud compute firewall-rules create log-all --network=prod-vpc --action=LOG",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks subnets update db-subnet --region=us-central1 --enable-flow-logs --logging-sample-rate=1.0 --logging-metadata=include-all",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances update-all --enable-packet-capture",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create db-flow-sink vpc.googleapis.com/db-subnet",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "VPC Flow Logs are enabled on subnets via `gcloud compute networks subnets update <SUBNET> --enable-flow-logs`. Specifying `--logging-sample-rate=1.0` and `--logging-metadata=include-all` captures 100% of network flow 5-tuples and rich VM metadata into Cloud Logging.",
    "distractors": {
      "A": "Firewall rule logging only records packets evaluated by that specific firewall rule, not all subnet internal traffic.",
      "B": "Correct. `subnets update --enable-flow-logs` configures native VPC network traffic capture.",
      "C": "`update-all --enable-packet-capture` is non-existent syntax.",
      "D": "Cloud Logging sinks route already-generated log entries; they do not activate subnet packet telemetry at the hypervisor layer."
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
        "text": "Create a VPC firewall rule targeting network tag 'app-database'.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Deploy a Cloud Armor policy targeting port 5432.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Deploy a Kubernetes NetworkPolicy with podSelector matching 'app: database' and an ingress rule allowing port 5432 from podSelector 'app: backend-api'.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Set the database Service type to NodePort.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "Kubernetes NetworkPolicies enforce Pod-to-Pod L3/L4 network segmentation inside a cluster. Specifying `spec.podSelector: {matchLabels: {app: database}}` and `ingress.from.podSelector: {matchLabels: {app: backend-api}}` ensures only authorized backend pods can communicate with the database.",
    "distractors": {
      "A": "VPC firewall rules apply to VM node instances, not individual Pods sharing the same node IP/overlay.",
      "B": "Cloud Armor protects HTTP/HTTPS external load balancers, not internal Kubernetes Pod-to-Pod traffic.",
      "C": "Correct. Kubernetes NetworkPolicy declaratively isolates Pod-level microservice communication.",
      "D": "`NodePort` opens a port on all worker nodes, increasing attack surface rather than restricting access."
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
        "text": "gcloud logging sinks create webhook-sink --rate=10",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub topics create merchant-webhook-topic --max-rate=10",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create webhook-proxy --rate-limit=10",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud tasks queues create merchant-webhook-queue --location=us-central1 --max-dispatches-per-second=10 --max-concurrent-dispatches=5",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Tasks provides managed task execution with granular rate limiting and backoff controls. Using `gcloud tasks queues create` with `--max-dispatches-per-second=10` strictly throttles outbound execution rates to protect downstream third-party systems.",
    "distractors": {
      "A": "Cloud Logging sinks route log records, not execute rate-limited HTTP webhook calls.",
      "B": "Cloud Pub/Sub is an event streaming platform and does not support per-second dispatch rate throttling.",
      "C": "Compute Engine instance creation does not provide managed task queuing or automated token-bucket rate limits.",
      "D": "Correct. `gcloud tasks queues create` with `--max-dispatches-per-second=10` enforces precise outbound rate limiting."
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
        "text": "gsutil defacl set public-read gs://static-web-assets-pub",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud iam service-accounts create allUsers --role=roles/viewer",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "bq mk --dataset_acl=public-read static-web-assets-pub",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute networks update static-web-assets-pub --make-public",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "On buckets using fine-grained access control, `gsutil defacl set public-read <BUCKET_URI>` configures the default object Access Control List (ACL) so that every newly uploaded object is automatically granted public read access (`allUsers:READER`).",
    "distractors": {
      "A": "Correct. `gsutil defacl set public-read` applies default public-read ACL inheritance to future uploaded objects.",
      "B": "`allUsers` is a special IAM identifier, not a service account you create manually.",
      "C": "`bq mk` is for BigQuery datasets, not Cloud Storage buckets.",
      "D": "`compute networks update` manages VPC networks, not Cloud Storage buckets."
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
        "text": "gcloud redis instances create session-cache-ha --size=10 --region=us-east1 --tier=BASIC",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances create session-cache-ha --database-version=REDIS_7",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud redis instances create session-cache-ha --size=10 --region=us-east1 --tier=STANDARD --redis-version=redis_7_0 --zone=us-east1-b --alternative-zone=us-east1-c",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create session-cache-ha --redis=true",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Deploying a High Availability Redis instance in Cloud Memorystore requires specifying `--tier=STANDARD` (which includes cross-zone replication and automated failover) along with primary `--zone` and `--alternative-zone`.",
    "distractors": {
      "A": "`BASIC` tier is standalone single-node with no cross-zone replica and no HA failover SLA.",
      "B": "Cloud SQL manages relational SQL engines (MySQL/PostgreSQL/SQL Server), not Redis.",
      "C": "Correct. `gcloud redis instances create --tier=STANDARD` provisions an HA Redis cluster with automated cross-zone failover.",
      "D": "Compute Engine instance creation creates unmanaged VMs, not managed Memorystore Redis instances."
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
        "text": "Configure Cloud Monitoring alerts to kill the node.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Set node pool machine type to custom-2-4096.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Create an HPA policy with min-cpu=500m.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Set resources.requests with cpu: '500m', memory: '1Gi' and resources.limits with cpu: '2', memory: '4Gi' in the container spec.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "In Kubernetes manifests, `resources.requests` defines the minimum compute capacity reserved by the scheduler for the Pod, while `resources.limits` enforces hard caps on CPU throttling and memory OOM termination.",
    "distractors": {
      "A": "Killing entire nodes causes catastrophic collateral impact on all co-located pods.",
      "B": "Setting node machine type sizes the whole VM worker, not individual container pod constraints.",
      "C": "HPA scales replica counts based on target metrics, but does not configure per-pod resource request/limit boundaries.",
      "D": "Correct. Defining `requests` and `limits` in the container spec guarantees reserved capacity and enforces resource boundaries."
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
        "text": "gcloud storage buckets update gs://user-avatars-vault --cors-file=cors-policy.json",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gsutil defacl set public-read gs://user-avatars-vault",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "bq update --cors=cors-policy.json user-avatars-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute firewall-rules create allow-cors --allow=tcp:443",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Browser cross-origin AJAX/fetch uploads to Cloud Storage require a CORS configuration on the target bucket. `gcloud storage buckets update <BUCKET> --cors-file=<JSON_FILE>` sets allowed origins (e.g. `https://app.example.com`), HTTP methods (PUT, GET), and headers.",
    "distractors": {
      "A": "Correct. `--cors-file` attaches the JSON CORS policy to the Cloud Storage bucket to authorize browser cross-origin requests.",
      "B": "Default ACLs change object permissions, but do not satisfy browser CORS pre-flight OPTIONS checks.",
      "C": "`bq update` manages BigQuery tables, not Cloud Storage buckets.",
      "D": "VPC firewall rules govern network packets, not browser HTTP CORS response headers."
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
        "text": "gcloud bigtable instances create cluster-europe-west1 --replicate-from=cluster-us-central1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud bigtable clusters create cluster-europe-west1 --instance=ad-bidding-engine --zone=europe-west1-b --num-nodes=4 --storage-type=SSD",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create cluster-europe-west1 --bigtable-cluster=true",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "cbt replicate-cluster cluster-europe-west1",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Bigtable supports adding clusters dynamically to an existing instance using `gcloud bigtable clusters create <CLUSTER_ID> --instance=<INSTANCE_ID> --zone=<ZONE> --num-nodes=<NODES> --storage-type=<SSD/HDD>`. Google Bigtable automatically establishes bidirectional asynchronous data replication.",
    "distractors": {
      "A": "`instances create` creates an entirely new isolated instance rather than attaching a cluster to the existing instance.",
      "B": "Correct. `gcloud bigtable clusters create` adds a secondary cluster to an existing instance and activates automated multi-cluster replication.",
      "C": "`compute instances create` is for Compute Engine VMs.",
      "D": "`cbt replicate-cluster` is not a valid cbt CLI command."
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
        "text": "gcloud compute instances create invoice-watcher --bucket=incoming-invoices-vault",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub subscriptions create invoice-sub --bucket=incoming-invoices-vault",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud storage notification-configurations create --topic=projects/corp-finance/topics/invoice-events --event-types=OBJECT_FINALIZE gs://incoming-invoices-vault",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create invoice-sink pubsub.googleapis.com/projects/corp-finance/topics/invoice-events",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage notification-configurations create` (or `gsutil notification create`) configures native Cloud Storage Pub/Sub notifications, sending structured JSON notification messages to the designated topic whenever an object event (e.g. `OBJECT_FINALIZE`) occurs.",
    "distractors": {
      "A": "Compute Engine watcher VMs require continuous polling scripts and introduce single points of failure.",
      "B": "Pub/Sub subscriptions attach to Pub/Sub topics, not directly to Cloud Storage buckets.",
      "C": "Correct. `notification-configurations create` establishes native bucket-to-Pub/Sub event notification.",
      "D": "Cloud Logging sinks export log records, not structured object metadata payloads for event-driven pipelines."
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
        "text": "Deploy an Nginx sidecar container in every Pod.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create a VPC firewall rule with a 60-second timeout.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Manually edit the GCP Load Balancer in the Cloud Console after every deployment.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Deploy a BackendConfig custom resource defining the health check, timeoutSec, and securityPolicy, and annotate the Kubernetes Service with 'cloud.google.com/backend-config: {\"default\": \"my-backend-config\"}'.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "GKE Ingress controller uses the `BackendConfig` CRD to configure Google Cloud Load Balancer Backend Service features (Cloud Armor, custom health checks, timeouts, CDN, IAP). Annotating the Kubernetes Service with `cloud.google.com/backend-config` links the Kubernetes Service to the GCP Backend Service parameters.",
    "distractors": {
      "A": "Sidecar proxies cannot configure GCP edge Cloud Armor policies or Cloud Load Balancer backend service timeouts.",
      "B": "Firewall rules inspect L3/L4 packets and do not configure HTTP backend service connection timeouts or WAF policies.",
      "C": "Manual console edits are overwritten or drift during Kubernetes Ingress reconciliations.",
      "D": "Correct. `BackendConfig` CRD + Service annotation declaratively configures Cloud Load Balancing parameters in GKE."
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
        "text": "Enable Node Auto-Provisioning (NAP) on the cluster using gcloud container clusters update --enable-autoprovisioning.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy a Horizontal Pod Autoscaler for each namespace.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Create an unmanaged Compute Engine instance group with 100 n2-standard-4 instances.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Write a bash cron script that polls kubectl get pods and runs gcloud compute instances create.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Node Auto-Provisioning (NAP) extends the GKE Cluster Autoscaler by automatically creating, configuring, and deleting new node pools with the exact machine types, CPU/memory specifications, accelerators, and taint/toleration requirements needed by unscheduled Pods.",
    "distractors": {
      "A": "Correct. Node Auto-Provisioning (`--enable-autoprovisioning`) automatically creates and sizes dynamic node pools to match Pod requirements.",
      "B": "Horizontal Pod Autoscaler scales Pod replica counts, but cannot provision new physical VM node pools or hardware machine types.",
      "C": "Static unmanaged instance groups waste massive compute budget on unallocated VM capacity.",
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
        "text": "gsutil cp gs://backups/db.sql | gcloud sql connect customer-db",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances clone customer-db customer-db-restored --point-in-time=2026-08-20T14:30:00.000Z",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restore-backup customer-db --backup-time=14:30",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances restore customer-db --time=14:30:00",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Point-in-Time Recovery in Cloud SQL is performed via `gcloud sql instances clone <SOURCE_INSTANCE> <TARGET_INSTANCE> --point-in-time=<ISO_TIMESTAMP>`. This creates a new fully functional instance containing database state exactly as of that specified millisecond without modifying or overwriting the original instance.",
    "distractors": {
      "A": "Manual SQL streaming is slow, requires manual file extraction, and does not leverage managed WAL log replay.",
      "B": "Correct. `gcloud sql instances clone --point-in-time` creates a new instance restored to the exact target timestamp.",
      "C": "`restore-backup` restores to a daily snapshot point, losing transaction granularity between snapshots.",
      "D": "Compute Engine instance restore does not manage relational database write-ahead log replay."
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
        "text": "kubectl apply -f cron.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gsutil cp cron.yaml gs://appengine-cron/",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud app deploy cron.yaml",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances add-cron cron.yaml",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app deploy cron.yaml` deploys the scheduled task definitions to Google App Engine Cron Service, which automatically triggers the specified application endpoints on schedule without requiring external cron daemons.",
    "distractors": {
      "A": "Kubernetes manifests use `CronJob` kinds, not App Engine proprietary `cron.yaml` syntax.",
      "B": "Copying to Cloud Storage does not register scheduled execution jobs with App Engine.",
      "C": "Correct. `gcloud app deploy cron.yaml` is the standard command to register scheduled cron tasks in App Engine.",
      "D": "`compute instances add-cron` is non-existent syntax."
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
        "text": "Grant primitive roles/viewer to the Cloud Build service account.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Download the project owner's JSON key and embed it into the Git repository.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Disable IAM role checks in Cloud Build settings.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin and roles/storage.admin to the Cloud Build service account in the prod-core project.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "When using Cloud Build for Terraform infrastructure automation, the Cloud Build default service account (`<PROJECT_NUMBER>@cloudbuild.gserviceaccount.com`) must be granted the specific administrative predefined roles (`roles/compute.admin`, `roles/storage.admin`, etc.) corresponding to the cloud resources being provisioned.",
    "distractors": {
      "A": "`roles/viewer` is read-only and will cause Terraform provisioning commands (`create`, `update`, `delete`) to fail with 403 Forbidden.",
      "B": "Committing static JSON keys into Git repositories violates security policies and creates critical leak vulnerabilities.",
      "C": "IAM authorization is an immutable platform security requirement and cannot be 'disabled' in Cloud Build.",
      "D": "Correct. Granting specific resource admin roles to the Cloud Build service account authorizes Terraform execution."
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
        "text": "kubectl create secret generic api-tokens --namespace=prod --from-literal=api-key='SecretTokenXYZ123' --from-literal=jwt-secret='SuperSecretSigningKey987'",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gsutil cp api-tokens.txt gs://k8s-secrets-prod/",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create api-tokens --secret-values='api-key=XYZ'",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "kubectl apply secret api-tokens --key=SecretTokenXYZ123",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl create secret generic <NAME> --from-literal=<KEY>=<VALUE>` creates a Kubernetes Secret object directly from CLI arguments, base64-encoding the values into the Kubernetes etcd cluster store.",
    "distractors": {
      "A": "Correct. `kubectl create secret generic --from-literal` is the standard command to deploy Kubernetes secrets.",
      "B": "Copying to Cloud Storage does not create Kubernetes Secret objects in the GKE cluster.",
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
        "text": "Export Google Ads data to Google Drive and use BigQuery external tables.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Configure BigQuery Data Transfer Service (via bq mk --transfer_config or Cloud Console) with the Google Ads transfer plugin.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Deploy a Cloud Storage Transfer job from Ads URLs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Write a Python cron script on Compute Engine that calls Google Ads API and runs bq load.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery Data Transfer Service (DTS) is a fully managed service that automates scheduled data transfers from SaaS applications (Google Ads, Campaign Manager, Google Analytics 4, YouTube) and cloud storage providers directly into BigQuery tables with zero custom code.",
    "distractors": {
      "A": "Google Drive external tables have strict query rate limits and poor analytical performance.",
      "B": "Correct. BigQuery Data Transfer Service provides zero-code, fully managed scheduled ingestion from Google marketing platforms.",
      "C": "Cloud Storage Transfer Service transfers object files to GCS buckets, not tabular schemas into BigQuery.",
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
        "text": "gcloud compute firewall-rules create block-malicious --action=DENY --source-ranges=198.51.100.0/24",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute security-policies rules create 1000 --security-policy=block-malicious-traffic --src-ip-ranges=198.51.100.0/24 --action=deny-403 --description='Block known malicious subnet'",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute networks subnets update --block-ip=198.51.100.0/24",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq query 'DELETE FROM traffic WHERE ip LIKE \"198.51.100.%\"'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute security-policies rules create <PRIORITY> --security-policy=<POLICY> --src-ip-ranges=<CIDR> --action=deny-403` adds an IP blocking rule to a Cloud Armor policy to filter requests at Google's global edge before reaching backend servers.",
    "distractors": {
      "A": "VPC firewall rules drop network packets at the hypervisor layer, but do not return an application-level HTTP 403 response.",
      "B": "Correct. `security-policies rules create` with `--action=deny-403` drops matching client requests at the edge.",
      "C": "`networks subnets update` does not support IP blocking flags.",
      "D": "BigQuery queries operate on stored tables, not real-time network traffic filtering."
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
        "text": "bq update --retention=31536000 compliance-vault-2026",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gsutil versioning set on gs://compliance-vault-2026",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://compliance-vault-2026 --retention-period=31536000s",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute disks snapshot create gs://compliance-vault-2026 --retention=1y",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud storage buckets update <BUCKET> --retention-period=<DURATION>` configures a Bucket Retention Policy, preventing any object inside the bucket from being deleted or overwritten until its individual retention period has elapsed.",
    "distractors": {
      "A": "`bq update` is for BigQuery dataset configurations.",
      "B": "Versioning keeps historical versions but does not enforce minimum retention time or block deletion.",
      "C": "Correct. `gcloud storage buckets update --retention-period` sets the retention policy duration.",
      "D": "`disks snapshot create` is for Compute Engine persistent disks, not Cloud Storage buckets."
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
        "text": "gcloud app deploy backup-cron.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bq mk --snapshot_schedule daily-backup-schedule",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks snapshot-schedule create daily-backup-schedule --time=02:00",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute resource-policies create snapshot-schedule daily-backup-schedule --region=us-central1 --daily-schedule --start-time=02:00 --max-retention-days=14 --on-source-disk-delete=keep-auto-snapshots",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Automated persistent disk backups in Compute Engine are configured via Resource Policies using `gcloud compute resource-policies create snapshot-schedule <NAME> --region=<REGION> --daily-schedule --start-time=<UTC_TIME> --max-retention-days=<DAYS>`.",
    "distractors": {
      "A": "App Engine cron does not manage native Compute Engine block storage hypervisor snapshots.",
      "B": "`bq mk` is for BigQuery dataset tables, not Compute Engine persistent disks.",
      "C": "`compute disks snapshot-schedule` is invalid CLI syntax.",
      "D": "Correct. `resource-policies create snapshot-schedule` creates managed automated persistent disk backup schedules."
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
        "text": "A Kubernetes DaemonSet.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "A Kubernetes Deployment with replicas: 100.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "A Kubernetes StatefulSet with 1 replica.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "A Kubernetes CronJob running every minute.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "A Kubernetes `DaemonSet` ensures that all (or some matching) nodes run a copy of a Pod. As new worker nodes are added to the cluster by the Cluster Autoscaler, DaemonSet pods are automatically scheduled onto them, making DaemonSets the standard mechanism for cluster-wide logging and security agents.",
    "distractors": {
      "A": "Correct. DaemonSets automatically place exactly one agent pod on every node in the cluster.",
      "B": "Deployments distribute replicas across available nodes based on scheduling algorithms, potentially leaving some nodes without log collectors.",
      "C": "StatefulSets are for ordered stateful clustered databases, not universal per-node monitoring agents.",
      "D": "CronJobs launch transient pods at time intervals rather than maintaining persistent per-node daemon processes."
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
        "text": "gsutil notification create -e PUSH https://orders-api-xyz.a.run.app",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --push-auth-service-account=pubsub-invoker@corp.iam.gserviceaccount.com --push-auth-token-audience=https://orders-api-xyz.a.run.app",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud pubsub subscriptions create order-push-sub --topic=order-events --push-endpoint=https://orders-api-xyz.a.run.app/handle-order --unauthenticated",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create order-pusher --topic=order-events",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Pub/Sub Push Subscriptions support authenticated HTTP endpoints. Using `--push-auth-service-account` and `--push-auth-token-audience` causes Google Pub/Sub to sign a short-lived OpenID Connect (OIDC) JWT token and include it in the `Authorization: Bearer <TOKEN>` header of every push request.",
    "distractors": {
      "A": "`gsutil notification` is for Cloud Storage object changes, not Cloud Pub/Sub push subscription definitions.",
      "B": "Correct. `gcloud pubsub subscriptions create` with `--push-auth-service-account` and audience securely authenticates push deliveries.",
      "C": "Unauthenticated push requests are rejected with HTTP 401 Unauthorized by secured Cloud Run services.",
      "D": "Compute Engine instance creation does not configure serverless Pub/Sub push pipelines."
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
        "text": "kubectl apply -f high-cpu-alert.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bq mk --alert_policy=high-cpu-alert.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud alpha monitoring policies create --policy-from-file=high-cpu-alert.json",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create-alert high-cpu-alert.json",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud alpha monitoring policies create --policy-from-file=<FILE>` is the Google Cloud CLI command to deploy declarative JSON/YAML alerting policy configurations to Google Cloud Monitoring.",
    "distractors": {
      "A": "`kubectl apply` applies Kubernetes manifests, not Google Cloud Monitoring alerting policy JSON definitions.",
      "B": "`bq mk` is for BigQuery database objects, not Cloud Monitoring alert policies.",
      "C": "Correct. `monitoring policies create --policy-from-file` registers declarative alerting policies in Cloud Monitoring.",
      "D": "`compute instances create-alert` is non-existent syntax."
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
        "text": "Deploy with the --cpu-throttling flag (CPU allocated only during requests).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Set memory limits to 32 GiB.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Set min-instances to 0.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Deploy with the --no-cpu-throttling flag (CPU always allocated).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "By default, Cloud Run throttles CPU to 0 outside of active HTTP request processing. To support WebSockets, streaming connections, and background thread execution, you must deploy with `--no-cpu-throttling` (CPU is always allocated throughout the instance lifecycle).",
    "distractors": {
      "A": "`--cpu-throttling` shuts off CPU between requests, freezing background tasks and dropping WebSocket connections.",
      "B": "Increasing memory does not prevent CPU throttling between requests.",
      "C": "Setting `min-instances=0` allows instances to scale to zero, terminating persistent background tasks.",
      "D": "Correct. `--no-cpu-throttling` keeps CPU active outside of HTTP request lifecycles for WebSockets and background tasks."
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
        "text": "Deploy a PriorityClass resource with a high integer value (e.g. 1000000) and set priorityClassName in the payment deployment Pod template.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy an unmanaged Compute Engine instance group.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Set node pool autoscaling max-nodes to 1000.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Create an IAM Deny policy on batch developers.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Kubernetes `PriorityClass` defines the scheduling priority of Pods. When high-priority Pods cannot be scheduled due to resource starvation, the Kubernetes scheduler preempts (evicts) lower-priority Pods to guarantee compute resources for critical workloads.",
    "distractors": {
      "A": "Correct. `PriorityClass` + `priorityClassName` guarantees critical pods are prioritized and can preempt non-critical batch pods.",
      "B": "Unmanaged instance groups lack native Kubernetes pod scheduling integration.",
      "C": "Increasing max-nodes provisions new VMs over time, but does not solve immediate in-cluster pod scheduling contention during bursts.",
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
        "text": "SSH into the Cloud SQL instance and edit postgresql.conf directly.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch prod-pg-1 --database-flags=max_connections=500,shared_buffers=1048576",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq update --flags='max_connections=500' prod-pg-1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances update prod-pg-1 --pg-flags='max_connections=500'",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --database-flags=<FLAG1=VAL1,FLAG2=VAL2>` applies database engine configuration parameters (such as `max_connections`, `log_output`, `autovacuum`) directly to Cloud SQL managed instances.",
    "distractors": {
      "A": "Cloud SQL is a fully managed service; direct SSH access to the underlying database host OS is not permitted.",
      "B": "Correct. `gcloud sql instances patch --database-flags` is the official command to configure database engine parameters.",
      "C": "`bq update` is for BigQuery dataset and table metadata.",
      "D": "`gcloud compute instances update` manages Compute Engine VMs, not Cloud SQL database engine flags."
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
        "text": "type: LoadBalancer with an external IP on every microservice.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "type: ExternalName with a public DNS host.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "type: ClusterIP (using Network Endpoint Groups / NEG annotation for direct container-native routing).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "type: hostPort.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "In GKE, the standard best practice when using GKE Ingress is `type: ClusterIP` paired with Network Endpoint Groups (`cloud.google.com/neg: '{\"ingress\": true}'`). The Google Cloud Load Balancer routes traffic directly to individual Pod IPs (container-native routing), bypassing intermediate node kube-proxy hops.",
    "distractors": {
      "A": "Deploying `type: LoadBalancer` on every microservice creates separate L4 Network Load Balancers with separate public IPs and high cost.",
      "B": "`ExternalName` maps a Service to an external DNS CNAME, not internal Pod selector backends.",
      "C": "Correct. `ClusterIP` + NEGs provides direct container-native load balancing from Google Cloud Load Balancers to Pods.",
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
        "text": "Write a bash script running in cron to redirect traffic.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create a VPC route in Cloud Router for /api/*.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Configure Cloud DNS with a path-based CNAME record.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Create a dispatch.yaml file mapping '*/api/*' to service 'mobile-api', and deploy it using gcloud app deploy dispatch.yaml.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "App Engine uses `dispatch.yaml` to configure path and domain routing across multiple microservices. Running `gcloud app deploy dispatch.yaml` registers the URL routing rules at the App Engine routing layer.",
    "distractors": {
      "A": "Cron scripts cannot intercept real-time HTTP client requests.",
      "B": "Cloud Router operates at Layer 3/IP routing and does not evaluate HTTP URL paths.",
      "C": "Cloud DNS maps domain names to IP addresses; DNS does not support HTTP URL path-based routing.",
      "D": "Correct. `dispatch.yaml` deployed via `gcloud app deploy dispatch.yaml` routes specific URL path prefixes to designated App Engine services."
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
        "text": "gcloud compute networks vpc-access connectors create serverless-conn --region=us-central1 --network=corp-vpc --range=10.8.0.0/28 --min-instances=2 --max-instances=10",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute instances create serverless-conn --image-family=serverless-vpc",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gsutil notification create -f vpc gs://serverless-conn",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute routers create serverless-conn --network=corp-vpc",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute networks vpc-access connectors create <NAME> --region=<REGION> --network=<NETWORK> --range=<CIDR>` creates a Serverless VPC Access connector, allowing serverless runtimes (Cloud Functions, Cloud Run, App Engine) to route private traffic into a VPC network.",
    "distractors": {
      "A": "Correct. `vpc-access connectors create` provisions managed VPC connectors for serverless private communication.",
      "B": "`compute instances create` does not create managed Serverless VPC Access connectors.",
      "C": "`gsutil notification` is for Cloud Storage object notifications.",
      "D": "Cloud Router provides dynamic BGP routing for VPN/Interconnect, not serverless container VPC ingress."
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
        "text": "Write a bash script that scales the deployment via kubectl scale in a continuous while loop.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Deploy the Custom Metrics Stackdriver Adapter (or Prometheus Adapter) in the cluster, and create an HPA manifest using apiVersion: autoscaling/v2 specifying metric type 'Pods' or 'External' with target value 50.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Configure a Cloud Storage bucket lifecycle policy.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Set the node pool autoscaler target CPU to 50%.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Kubernetes HPA (`autoscaling/v2`) supports custom and external metrics. Deploying the Custom Metrics Adapter allows HPA to query Prometheus or Cloud Monitoring metrics and calculate required replica counts dynamically based on custom application queues.",
    "distractors": {
      "A": "Continuous shell loops on developer workstations are fragile, unmonitored, and lack atomic cluster reconciliation.",
      "B": "Correct. Custom Metrics Adapter + `autoscaling/v2` HPA manifest allows autoscaling on arbitrary custom application metrics.",
      "C": "Cloud Storage lifecycle policies manage object retention, not Kubernetes Pod autoscaling.",
      "D": "Target CPU on node pools scales VM node count based on CPU, not Pod replica count based on custom message queue depth."
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
        "text": "Mount the VM boot disk to your local workstation using Cloud Storage FUSE.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Assign an ephemeral public IP address to the instance and connect directly over the public internet.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Connect using gcloud compute ssh backend-worker-1 --zone=us-central1-a --tunnel-through-iap, ensuring you have roles/iap.tunnelResourceAccessor and an ingress firewall rule allows port 22 from 35.235.240.0/20.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Connect using standard telnet over port 23.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "Identity-Aware Proxy (IAP) TCP forwarding allows authorized users to establish encrypted SSH connections to private instances with no public IPs over Google Cloud's edge infrastructure. Traffic originates from `35.235.240.0/20` and requires `roles/iap.tunnelResourceAccessor`.",
    "distractors": {
      "A": "Cloud Storage FUSE does not mount active Compute Engine VM root boot disks.",
      "B": "Assigning public IPs violates security compliance policies and increases attack surface.",
      "C": "Correct. `gcloud compute ssh --tunnel-through-iap` provides secure keyless bastion-free access to private VMs.",
      "D": "Telnet is unencrypted plaintext and transmits passwords in the clear."
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
        "text": "gcloud compute instances delete $(kubectl get nodes -o name)",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud container clusters update my-cluster --disable-addons=HttpLoadBalancing",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "kubectl delete nodes --all && kubectl create nodes --version=1.28",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters upgrade my-cluster --node-pool=app-pool --cluster-version=1.28 --region=us-central1",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "GKE node pool upgrades are initiated with `gcloud container clusters upgrade <CLUSTER> --node-pool=<POOL> --cluster-version=<VERSION>`. GKE uses configured surge upgrade parameters (`max-surge` and `max-unavailable`) to gracefully cordon, drain, and replace worker nodes sequentially.",
    "distractors": {
      "A": "Deleting raw Compute Engine VM nodes abruptly disrupts Kubernetes state and causes ungraceful pod termination.",
      "B": "Disabling load balancing addons disrupts external traffic ingress without performing node upgrades.",
      "C": "Deleting all nodes simultaneously causes catastrophic application downtime.",
      "D": "Correct. `clusters upgrade --node-pool` triggers managed rolling node pool upgrades with graceful pod eviction."
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
        "text": "Stop the instance using gcloud compute instances stop, change the machine type using gcloud compute instances set-machine-type batch-worker-1 --zone=us-central1-a --machine-type=e2-standard-8, and restart the instance with gcloud compute instances start.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Run gcloud compute instances set-machine-type on the live running instance without stopping it.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Delete the VM and recreate it from a fresh OS image.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Attach 6 additional persistent disks to increase CPU capacity.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "To change the machine type of a standalone Compute Engine instance, the instance must first be in the `TERMINATED` (stopped) state. You stop the VM, execute `gcloud compute instances set-machine-type`, and start the VM.",
    "distractors": {
      "A": "Correct. Proper sequence: Stop instance -> `set-machine-type` -> Start instance.",
      "B": "Compute Engine does not support dynamic live-resizing of machine types while a VM is active/running.",
      "C": "Deleting the VM destroys installed software, local state, and assigned internal IP configurations.",
      "D": "Attaching persistent disks adds storage capacity, not vCPU compute cores."
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
        "text": "Run the query on a Cloud SQL database instead.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Execute the query using the bq CLI with the --dry_run flag (e.g. bq query --dry_run --use_legacy_sql=false 'SELECT ...').",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Export the data to Cloud Storage and check the file size in the console.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Run the query with LIMIT 10 appended.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery dry-run queries validate SQL query syntax and calculate the exact number of bytes scanned without executing the query, creating jobs, or consuming on-demand query quota/budget.",
    "distractors": {
      "A": "Cloud SQL is a relational database and cannot execute BigQuery petabyte-scale analytics.",
      "B": "Correct. `bq query --dry_run` validates SQL syntax and returns estimated bytes processed for $0 cost.",
      "C": "Exporting data runs an extraction job and does not estimate the column-pruned scan size of an arbitrary SQL query.",
      "D": "In columnar storage databases like BigQuery, `LIMIT 10` does NOT reduce scanned bytes for full table scans."
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
        "text": "SELECT * FROM logs WHERE type='vm' AND status=500",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances list --filter='errors'",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "resource.type=\"gce_instance\" AND severity>=(ERROR) AND timestamp >= \"2026-08-20T20:00:00Z\"",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "logName=\"all\" AND error=true",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Logging Query Language uses structured key-value expressions. Filtering by `resource.type=\"gce_instance\"` and `severity>=(ERROR)` queries all error and emergency severity logs generated by Compute Engine VM guest agents and platform services.",
    "distractors": {
      "A": "Cloud Logging Explorer uses logging filter expressions, not raw SQL SELECT statements (unless using BigQuery Log Analytics).",
      "B": "`compute instances list` displays instance metadata, not application stderr log streams.",
      "C": "Correct. Cloud Logging query language syntax filtering on resource type, severity comparison, and timestamp.",
      "D": "`logName=\"all\"` is invalid filter syntax."
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
        "text": "kubectl describe node $(kubectl get pod checkout-service-78df9b-abcde -o jsonpath='{.spec.nodeName}')",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "kubectl delete pod checkout-service-78df9b-abcde --force",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters restart prod-cluster",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "kubectl logs checkout-service-78df9b-abcde --namespace=prod --previous",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`kubectl logs <POD_NAME> --previous` retrieves the standard output and error logs from the previous instance of the container that exited or crashed, revealing fatal runtime exception stack traces.",
    "distractors": {
      "A": "`describe node` displays VM worker node conditions, not container application stdout/stderr logs.",
      "B": "Force-deleting the pod deletes active pod metadata and restarts the crash loop without diagnosing the root cause.",
      "C": "Restarting the entire GKE cluster causes cluster-wide downtime and does not fix container application bugs.",
      "D": "Correct. `kubectl logs --previous` outputs the crash logs from the terminated container instance."
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
        "text": "gcloud sql backups restore 1692540000000 --restore-instance=prod-db",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "bq restore prod-db:1692540000000",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restore prod-db --backup-id=1692540000000",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute disks restore prod-db --snapshot=1692540000000",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "Restoring a specific Cloud SQL backup to an instance uses `gcloud sql backups restore <BACKUP_ID> --restore-instance=<TARGET_INSTANCE>`.",
    "distractors": {
      "A": "Correct. `gcloud sql backups restore <ID> --restore-instance=<NAME>` is the official CLI command.",
      "B": "`bq restore` is for BigQuery historical table snapshots, not Cloud SQL instances.",
      "C": "`sql instances restore` is invalid syntax; backups are restored via `sql backups restore`.",
      "D": "Compute Engine disk restore does not manage relational database state and transaction logs."
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
        "text": "Disable the Load Balancer health checks.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create an Exclusion Filter on the _Default log sink with filter expression: resource.type=\"http_load_balancer\" AND httpRequest.status=200 AND httpRequest.userAgent=\"GoogleHC/1.0\".",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Turn off VPC logging globally across all subnets.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Delete the _Default log sink completely.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Logging sinks (like `_Default`) allow creating Exclusion Filters (`--exclusion`). Excluded logs are discarded before ingestion and storage, incurring zero ingestion charges while allowing non-excluded logs to be retained.",
    "distractors": {
      "A": "Disabling health checks prevents the load balancer from detecting instance failures, causing severe customer outages.",
      "B": "Correct. Exclusion filters on the `_Default` sink drop matching noisy log entries, immediately lowering monthly logging bills.",
      "C": "Disabling VPC logging globally destroys network visibility and fails security audits.",
      "D": "Deleting the `_Default` sink stops all standard logs from being ingested, blinding operations teams."
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
        "text": "gcloud app versions delete v2 --force",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances restart --service=appengine",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud app services set-traffic default --splits=v1=1 --migrate",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud app deploy v1/app.yaml --no-promote",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud app services set-traffic <SERVICE> --splits=<VERSION>=1 --migrate` instantly routes 100% of incoming requests back to the specified stable version using App Engine traffic migration.",
    "distractors": {
      "A": "Deleting the actively serving version `v2` while it receives 100% traffic can cause dropped requests before routing adjusts.",
      "B": "`compute instances restart` does not manage App Engine serverless service version traffic routing.",
      "C": "Correct. `gcloud app services set-traffic` immediately points 100% traffic to version `v1`.",
      "D": "Re-deploying an old codebase takes several minutes, while `set-traffic` changes routing in milliseconds."
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
        "text": "cat /proc/cpuinfo | grep nodes",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances list --show-cpu",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "kubectl describe cluster --metrics",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "kubectl top nodes",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`kubectl top nodes` queries the Kubernetes Metrics Server and displays real-time CPU (cores/millicores) and Memory (bytes/percentage) consumption across all active worker nodes in the cluster.",
    "distractors": {
      "A": "Running `/proc/cpuinfo` on a local machine shows local laptop processor specs, not remote GKE worker node metrics.",
      "B": "`--show-cpu` is not a valid flag on `gcloud compute instances list`.",
      "C": "`describe cluster --metrics` is invalid syntax.",
      "D": "Correct. `kubectl top nodes` (and `kubectl top pods`) provides immediate real-time node resource consumption data."
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
        "text": "gcloud storage objects copy database-boot-disk gs://my-snapshots/",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks snapshot database-boot-disk --zone=us-central1-b --snapshot-names=snapshot-pre-upgrade-db",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq mk --snapshot database-boot-disk",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances snapshot database-host-1 --name=snapshot-pre-upgrade-db",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute disks snapshot <DISK_NAME> --zone=<ZONE> --snapshot-names=<SNAPSHOT_NAME>` creates a point-in-time incremental backup snapshot of the specified persistent disk.",
    "distractors": {
      "A": "Cloud Storage copy cannot read raw active persistent disk block storage devices directly.",
      "B": "Correct. `gcloud compute disks snapshot` is the standard command to capture persistent disk snapshots.",
      "C": "`bq mk` manages BigQuery tables, not Compute Engine block persistent disks.",
      "D": "`compute instances snapshot` is non-existent syntax."
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
        "text": "A cron script on an e2-micro VM running curl in a loop.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "A VPC egress firewall rule blocking non-200 packets.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud Monitoring Uptime Check configured for HTTPS on hostname store.example.com with path /healthz, check frequency 1 minute, and attached to an Alerting Policy with PagerDuty notification channel.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Trace latency sampling.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Monitoring Uptime Checks probe public and private endpoints from multiple geographic locations worldwide, testing availability and HTTP status codes, and seamlessly integrating with Cloud Monitoring Alerting Policies and notification channels (PagerDuty, Slack, Email).",
    "distractors": {
      "A": "Self-hosted curl loops provide single-point monitoring, lack multi-region geographic probes, and require server maintenance.",
      "B": "Firewall rules inspect IP/port headers, not HTTP application response codes.",
      "C": "Correct. Cloud Monitoring Uptime Checks provide managed, globally distributed health probing with automated alerting.",
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
        "text": "gcloud compute disks snapshot delete --older-than=90d",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bq query 'DELETE FROM analytics.events WHERE _PARTITIONDATE < DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)' in a cron script",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://analytics-events --lifecycle-file=90d.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "bq update --time_partitioning_expiration=7776000 analytics.events",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`bq update --time_partitioning_expiration=<SECONDS> <DATASET.TABLE>` configures automatic partition expiration (90 days = 7,776,000 seconds). BigQuery automatically deletes partitions older than the expiration window for $0 query cost without requiring manual SQL delete jobs.",
    "distractors": {
      "A": "`compute disks snapshot delete` manages Compute Engine disk backups, not BigQuery table data.",
      "B": "Running recurring SQL DELETE queries incurs ongoing query processing costs and requires maintenance of external cron runners.",
      "C": "Cloud Storage lifecycle policies apply to Cloud Storage object buckets, not BigQuery internal managed tables.",
      "D": "Correct. `bq update --time_partitioning_expiration=7776000` enables native automated zero-cost partition purging."
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
        "text": "Google Cloud Trace.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "VPC Flow Logs in Cloud Logging.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Compute Engine Serial Port Console.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Google Cloud Storage Explorer.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Trace is a distributed tracing system that collects latency data from App Engine, Cloud Run, GKE, and VMs. It renders end-to-end request waterfall diagrams displaying individual span durations, identifying exactly which microservice or database call caused latency.",
    "distractors": {
      "A": "Correct. Cloud Trace provides distributed request span waterfall visualizations to pinpoint latency bottlenecks.",
      "B": "VPC Flow Logs record network connection 5-tuples and bytes, not application-level distributed code tracing spans.",
      "C": "Serial port console displays low-level Linux VM boot logs and hardware kernel messages.",
      "D": "Cloud Storage Explorer browses object files in buckets."
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
        "text": "Run kubectl delete deployment api-deployment && kubectl create deployment api-deployment.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Run kubectl rollout history deployment api-deployment followed by kubectl rollout undo deployment api-deployment.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Run gcloud container clusters update --rollback=api-deployment.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Run gcloud compute instances reset-all.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl rollout history deployment <NAME>` displays past deployment revisions, and `kubectl rollout undo deployment <NAME>` rolls back the workload to the previous revision instantly without recreating the deployment object.",
    "distractors": {
      "A": "Deleting and recreating the deployment causes downtime and destroys deployment revision history.",
      "B": "Correct. `kubectl rollout history` and `kubectl rollout undo` are the standard declarative Kubernetes commands to manage and reverse rollouts.",
      "C": "`clusters update --rollback` is non-existent CLI syntax.",
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
        "text": "An App Engine version configuration.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "A standard Zonal Persistent Disk Snapshot of the boot disk only.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "A Compute Engine Machine Image (via gcloud compute machine-images create).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "A Cloud Storage bucket containing tar.gz archives of /etc.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Compute Engine Machine Images capture all configuration, metadata, permissions, and multi-disk persistent storage data of a VM in a single comprehensive resource, making them superior to single-disk snapshots for complete system duplication and backup.",
    "distractors": {
      "A": "App Engine manages serverless web runtimes, not Compute Engine virtual machine images.",
      "B": "A single persistent disk snapshot only captures one disk and omits secondary disks, instance metadata, and network tags.",
      "C": "Correct. Machine Images store all disk data (boot + attached disks) and VM metadata for instant full VM cloning.",
      "D": "Tar archives of `/etc` do not preserve partition tables, bootloaders, or attached disk storage blocks."
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
        "text": "Cloud Billing Reports.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud DNS Analytics.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Google Cloud Bigtable.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "D",
        "text": "Google Cloud Error Reporting.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Error Reporting automatically aggregates, counts, and groups unhandled runtime exceptions and stack traces from Cloud Logging (Java, Python, Node.js, Go, PHP, Ruby, .NET) into a centralized dashboard with notification integrations.",
    "distractors": {
      "A": "Cloud Billing reports monetary infrastructure spend, not application software crash stack traces.",
      "B": "Cloud DNS manages domain name resolution, not application runtime errors.",
      "C": "Cloud Bigtable is a NoSQL wide-column database and does not provide exception aggregation dashboards.",
      "D": "Correct. Cloud Error Reporting groups application crashes and stack traces automatically from log streams."
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
        "text": "gcloud sql instances patch prod-mysql-db --storage-size=500GB",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud sql instances restart prod-mysql-db --expand-disk=500",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks resize prod-mysql-db --size=500GB",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq update --storage_gb=500 prod-mysql-db",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --storage-size=<SIZE_IN_GB>` increases the persistent disk capacity of a Cloud SQL instance online without downtime. Note that Cloud SQL storage can only be scaled up, never down.",
    "distractors": {
      "A": "Correct. `gcloud sql instances patch --storage-size=500GB` expands the database storage online.",
      "B": "`--expand-disk` is not a valid flag on `gcloud sql instances restart`.",
      "C": "Underlying Cloud SQL disks are managed by Google and cannot be directly targeted with `gcloud compute disks resize`.",
      "D": "`bq update` manages BigQuery tables, not Cloud SQL instances."
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
        "text": "gcloud container clusters ssh web-app-8594-xyz",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "kubectl exec -it web-app-8594-xyz --namespace=staging -- /bin/bash",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute ssh web-app-8594-xyz",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "kubectl attach web-app-8594-xyz --restart",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`kubectl exec -it <POD_NAME> -- <COMMAND>` opens an interactive TTY terminal session directly inside the running container namespace, allowing developers to execute diagnostic commands in real time.",
    "distractors": {
      "A": "`gcloud container clusters ssh` is not a valid gcloud command.",
      "B": "Correct. `kubectl exec -it -- /bin/bash` opens an interactive shell session inside the target container.",
      "C": "`gcloud compute ssh` connects to the underlying VM host operating system, not the container namespace inside the Pod.",
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
        "text": "Create an IAM Deny policy on port 22.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Disable Compute Engine networking.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Enable OS Login at the project metadata level by setting enable-oslogin=TRUE.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Add individual developer SSH public keys to the project-wide metadata manually.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Enabling OS Login (`enable-oslogin=TRUE`) links Linux user accounts and SSH keys directly to Google Cloud Identity accounts and IAM roles (e.g. `roles/compute.osAdminLogin`, `roles/compute.osLogin`), enforcing central revocation, 2FA, and eliminating unmanaged static SSH keys.",
    "distractors": {
      "A": "Denying port 22 completely blocks all SSH management traffic.",
      "B": "Disabling networking breaks all instance communications and services.",
      "C": "Correct. `enable-oslogin=TRUE` enforces centralized Cloud Identity POSIX account and 2FA authentication.",
      "D": "Project-wide metadata SSH keys bypass IAM role governance and lack 2FA enforcement."
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
        "text": "gcloud compute instances delete frontend-mig",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "kubectl describe healthchecks",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed list-instances frontend-mig --region=us-central1",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "bq show instance_health",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud compute instance-groups managed list-instances <MIG_NAME>` lists all member VM instances along with their current instance status (`RUNNING`), current action (`NONE`, `CREATING`, `RECREATING`), and their detailed health state (`HEALTHY`, `UNHEALTHY`, `TIMEOUT`).",
    "distractors": {
      "A": "Deleting the MIG causes total application outage.",
      "B": "`kubectl describe healthchecks` is invalid syntax for GCE MIGs.",
      "C": "Correct. `instance-groups managed list-instances` shows member instance health check results and autohealing actions.",
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
        "text": "Run gcloud container clusters delete prod-cluster.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Run gcloud compute instances delete gke-prod-pool-1-abc1.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Run kubectl delete pods --all --force.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Run kubectl cordon gke-prod-pool-1-abc1 followed by kubectl drain gke-prod-pool-1-abc1 --ignore-daemonsets --delete-emptydir-data.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`kubectl cordon <NODE>` marks the node as unschedulable (preventing new pods), and `kubectl drain <NODE>` gracefully evicts existing workloads following PodDisruptionBudgets, moving them safely to other cluster nodes.",
    "distractors": {
      "A": "Deleting the cluster destroys the entire production infrastructure.",
      "B": "Deleting the VM directly terminates workloads abruptly without graceful SIGTERM shutdown or budget validation.",
      "C": "Deleting all pods across the cluster causes cluster-wide service downtime.",
      "D": "Correct. `cordon` + `drain` is the standard Kubernetes operational procedure for safe node maintenance."
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
        "text": "Run a Network Management Connectivity Test (via gcloud network-management connectivity-tests create) between the source VM IP and destination database IP on port 5432.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Delete and recreate both VPC networks.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Disable all firewall rules in both VPCs.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged traceroute VM in the public subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Network Intelligence Center Connectivity Tests perform static graph analysis of the VPC configuration (routes, firewalls, peerings, Cloud Routers) and dynamic live packet tracing to identify the exact firewall rule or route dropping packets.",
    "distractors": {
      "A": "Correct. Connectivity Tests provide hop-by-hop analysis of VPC firewall and routing policies to pinpoint reachability failures.",
      "B": "Recreating networks destroys IP assignments and causes immense downtime.",
      "C": "Disabling firewall rules creates catastrophic security vulnerabilities.",
      "D": "Standard traceroute does not analyze internal GCP SDN control plane firewall drop states accurately."
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
        "text": "compute.googleapis.com/instance/cpu/usage_time",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "cloudsql.googleapis.com/database/cpu/utilization",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "storage.googleapis.com/storage/object_count",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "logging.googleapis.com/byte_count",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "The official Cloud Monitoring metric for Cloud SQL instance CPU load is `cloudsql.googleapis.com/database/cpu/utilization` (fraction between 0.0 and 1.0).",
    "distractors": {
      "A": "`compute.googleapis.com/instance/cpu/usage_time` measures raw Compute Engine VMs, not managed Cloud SQL instances.",
      "B": "Correct. `cloudsql.googleapis.com/database/cpu/utilization` is the native metric measuring Cloud SQL CPU usage percentage.",
      "C": "`storage/object_count` counts files in Cloud Storage buckets.",
      "D": "`logging/byte_count` measures log volume ingestion."
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
        "text": "Upload the VM to BigQuery for analysis.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Delete the VM and recreate it from a Debian image.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Enable serial port access by setting serial-port-enable=1 in instance metadata, and connect using gcloud compute connect-to-serial-port db-server-1 --zone=us-central1-a --port=1.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "SSH into the VM over public internet using port 80.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "Interactive serial console access (`serial-port-enable=1`) allows direct terminal access to the VM's serial ports (Ports 1-4) via `gcloud compute connect-to-serial-port`, enabling low-level boot diagnostics, GRUB menu interaction, and recovery of unbootable VMs.",
    "distractors": {
      "A": "BigQuery is an analytical SQL database and cannot ingest or run virtual machine kernels.",
      "B": "Deleting the VM destroys stored database data and local configuration.",
      "C": "Correct. `serial-port-enable=1` + `connect-to-serial-port` provides out-of-band management for unbootable instances.",
      "D": "SSH cannot connect if the operating system kernel failed to boot."
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
        "text": "Export the data to CSV in Cloud Storage before querying.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Convert the BigQuery dataset to Cloud Datastore.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "C",
        "text": "Add LIMIT 10 to the subquery.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Cluster the underlying table by the JOIN and GROUP BY keys to minimize shuffle repartitioning overhead, or rewrite the query to avoid high-cardinality CROSS JOINs.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "High wait and compute times in BigQuery execution stages with repartitioning indicate shuffle bottlenecks and data skew caused by non-clustered join/group-by operations or Cartesian products (CROSS JOIN). Clustering the table on join keys collocates related rows and eliminates data shuffling across slots.",
    "distractors": {
      "A": "Querying raw CSV files in Cloud Storage has significantly worse performance than native Capacitor columnar storage.",
      "B": "Cloud Datastore is a transactional NoSQL database that cannot process multi-terabyte analytical joins.",
      "C": "`LIMIT` inside subqueries is evaluated after full table scans and does not eliminate join skew.",
      "D": "Correct. Clustering on join/group keys collocates data, reducing expensive shuffle repartitioning across slots."
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
        "text": "gcloud compute instance-groups managed recreate-instances web-mig --region=us-central1 --instances=web-mig-4x8z",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute instances delete web-mig-4x8z",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete web-mig",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "kubectl delete pod web-mig-4x8z",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute instance-groups managed recreate-instances <MIG_NAME> --instances=<INSTANCE_LIST>` instructs the MIG control plane to stop, delete, and recreate the specified member VM instances from the current instance template.",
    "distractors": {
      "A": "Correct. `recreate-instances` is the official MIG command to replace specific damaged VM members.",
      "B": "Deleting the instance manually with `instances delete` causes the MIG to report an instance error before recreating.",
      "C": "Deleting the entire MIG destroys all other healthy instances and causes total application outage.",
      "D": "`kubectl delete pod` is for Kubernetes pods, not Compute Engine virtual machine instances."
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
        "text": "Deploy a Compute Engine instance group to crawl the buckets.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Configure Cloud Storage Insights inventory reports to automatically generate daily object metadata CSV/Parquet files in a target analysis bucket.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Run gsutil ls -lR gs://bucket/** in a daily bash script.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "SSH into each storage bucket and run ls -la.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage Insights provides managed inventory reports that deliver daily or weekly CSV or Parquet files containing comprehensive object metadata (storage class, size, timestamps, CRC32c) directly into a destination bucket for fast BigQuery analysis without incurring millions of List API charges.",
    "distractors": {
      "A": "Custom VM crawlers add compute cost and operational maintenance compared to native Storage Insights.",
      "B": "Correct. Storage Insights inventory reports automate massive-scale metadata exports without custom scripting or List API rate limits.",
      "C": "Running `gsutil ls -lR` over 50 million objects takes hours, incurs massive List API costs, and fails on network timeouts.",
      "D": "Cloud Storage buckets are object endpoints and do not support SSH shell connections."
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
        "text": "VPC Flow Logs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud DNS Analytics.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Google Cloud Profiler.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Cloud Armor.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Profiler is a continuous statistical code profiling tool that captures CPU and heap memory allocations across production services, rendering interactive Flame Graphs that highlight exact code functions consuming resources.",
    "distractors": {
      "A": "VPC Flow Logs inspect network IP packet headers, not application code memory allocations.",
      "B": "Cloud DNS manages domain name lookups.",
      "C": "Correct. Cloud Profiler generates interactive Flame Graphs showing CPU/memory usage per function in production.",
      "D": "Cloud Armor is an HTTP WAF security service for load balancers."
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
        "text": "gcloud sql instances patch iot-telemetry --num-nodes=12",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "cbt updatecluster cluster-us-central1 --nodes=12",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances create bigtable-node-[5-12]",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud bigtable clusters update cluster-us-central1 --instance=iot-telemetry --num-nodes=12",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud bigtable clusters update <CLUSTER_ID> --instance=<INSTANCE_ID> --num-nodes=<COUNT>` dynamically scales the Bigtable cluster node count in seconds without restarting the cluster or interrupting streaming writes.",
    "distractors": {
      "A": "`gcloud sql` manages relational SQL databases, not Bigtable NoSQL wide-column clusters.",
      "B": "`cbt` CLI is for data and table schema operations, not cluster infrastructure node scaling.",
      "C": "Compute Engine instance creation does not attach worker nodes to Cloud Bigtable clusters.",
      "D": "Correct. `gcloud bigtable clusters update --num-nodes=12` immediately scales compute nodes online."
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
        "text": "gcloud compute instances update --count-errors",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud logging metrics create payment_failure_count --description='Count of payment failure errors' --log-filter='textPayload:\"PAYMENT_FAILURE\"'",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq mk --metric payment_failure_count",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "kubectl autoscale deployment --metric=payment_failure",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud logging metrics create <METRIC_NAME> --log-filter=<FILTER>` creates a Cloud Logging Log-Based Metric, turning matching log lines into numerical metrics that appear in Cloud Monitoring for charting and alerting.",
    "distractors": {
      "A": "`--count-errors` is not a valid Compute Engine flag.",
      "B": "Correct. `gcloud logging metrics create` creates counter or distribution metrics from log stream patterns.",
      "C": "`bq mk` is for BigQuery database resources.",
      "D": "`kubectl autoscale` configures Pod autoscaling, not Cloud Monitoring metric definitions."
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
        "text": "Run gsutil mv /dev/sdb server-new:/dev/sdb.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Run bq cp data-volume-1 server-new.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Run gcloud compute instances detach-disk server-old --disk=data-volume-1 --zone=us-central1-a followed by gcloud compute instances attach-disk server-new --disk=data-volume-1 --zone=us-central1-a.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Run gcloud compute disks delete data-volume-1 && gcloud compute disks create data-volume-1.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Moving a Persistent Disk between VMs in the same zone involves detaching it from the source instance (`gcloud compute instances detach-disk`) and attaching it to the target instance (`gcloud compute instances attach-disk`).",
    "distractors": {
      "A": "gsutil does not copy raw Linux block device nodes over the network.",
      "B": "`bq cp` copies BigQuery tables, not Compute Engine persistent disks.",
      "C": "Correct. Detaching from the old instance and attaching to the new instance moves the block storage device without data transfer overhead.",
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
        "text": "Edit ~/.kube/config manually and paste your Google Cloud password.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Run kubectl config set-cluster prod-cluster --server=http://localhost:8080.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "SSH into the GKE master node directly.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Run gcloud container clusters get-credentials prod-cluster --region=us-central1.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud container clusters get-credentials <CLUSTER_NAME> --region=<REGION>` retrieves cluster control plane endpoint information and generates an authentication token in `~/.kube/config`, configuring `kubectl` to communicate with the GKE cluster.",
    "distractors": {
      "A": "Kubernetes uses OAuth tokens and certs; hardcoding passwords into kubeconfig is invalid and insecure.",
      "B": "Pointing server to localhost:8080 points to your local machine, where no Kubernetes API server is running.",
      "C": "GKE master nodes are fully managed by Google and do not permit direct SSH access.",
      "D": "Correct. `gcloud container clusters get-credentials` configures local kubeconfig contexts automatically."
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
        "text": "gcloud compute instance-groups managed abandon-instances worker-mig --region=us-central1 --instances=worker-mig-7abc",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "kubectl cordon worker-mig-7abc",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete-instances worker-mig --instances=worker-mig-7abc",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances stop worker-mig-7abc",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute instance-groups managed abandon-instances <MIG_NAME> --instances=<INSTANCE>` removes the VM from the Managed Instance Group without deleting the underlying VM. The instance becomes a standalone VM that can be inspected without being terminated or auto-healed by the MIG.",
    "distractors": {
      "A": "Correct. `abandon-instances` detaches the instance from the MIG while keeping the VM running for forensic debugging.",
      "B": "`kubectl cordon` is for Kubernetes nodes, not GCE VM instance groups.",
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
        "text": "gcloud compute instances update db-replica-uswest1 --role=master",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances promote-replica db-replica-uswest1",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq restore db-replica-uswest1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances restart db-replica-uswest1 --master",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql instances promote-replica <REPLICA_NAME>` stops replication from the primary and promotes the read replica into an independent, standalone read-write primary Cloud SQL instance.",
    "distractors": {
      "A": "`compute instances update` manages Compute Engine VMs, not Cloud SQL database replication topologies.",
      "B": "Correct. `gcloud sql instances promote-replica` promotes the replica to an independent primary database.",
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
        "text": "kubectl scale node-pool worker-pool --nodes=10",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances resize worker-pool --size=10",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud container clusters resize prod-cluster --node-pool=worker-pool --num-nodes=10 --region=us-central1",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "bq update --nodes=10 worker-pool",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud container clusters resize <CLUSTER_NAME> --node-pool=<POOL_NAME> --num-nodes=<COUNT>` manually scales the number of VM worker nodes in the specified GKE node pool.",
    "distractors": {
      "A": "`kubectl scale` scales workload objects (Deployments, StatefulSets), not infrastructure node pools.",
      "B": "`compute instances resize` is non-existent CLI syntax.",
      "C": "Correct. `gcloud container clusters resize --node-pool` is the official CLI command to manually adjust node pool sizing.",
      "D": "BigQuery (`bq`) does not manage Kubernetes cluster infrastructure."
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
        "text": "bq update --legal_hold contract-2026-xyz",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gsutil rm -d gs://customer-contracts-vault/contract-2026-xyz.pdf",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud compute disks snapshot create --hold gs://customer-contracts-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud storage objects update gs://customer-contracts-vault/contract-2026-xyz.pdf --temporary-hold",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage supports Temporary Holds (`--temporary-hold`) and Event-Based Holds. Placing a temporary hold on an object prevents it from being deleted or overwritten until an administrator explicitly removes the hold.",
    "distractors": {
      "A": "BigQuery does not manage Cloud Storage PDF blob legal holds.",
      "B": "`gsutil rm` deletes objects, causing catastrophic loss of legal evidence.",
      "C": "Compute Engine disk snapshots do not place legal holds on Cloud Storage objects.",
      "D": "Correct. `gcloud storage objects update --temporary-hold` places an immutable legal hold on the specified object."
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
        "text": "gcloud app versions stop v1-beta --service=staging-api",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "kubectl delete pod --version=v1-beta",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "bq update --stop-service staging-api",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances stop appengine-v1-beta",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud app versions stop <VERSION> --service=<SERVICE>` stops an App Engine version from serving requests and releases underlying Compute Engine VM instances (for Flexible environment), stopping compute charges while preserving the version configuration.",
    "distractors": {
      "A": "Correct. `gcloud app versions stop` halts inactive App Engine versions to eliminate unnecessary compute costs.",
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
        "text": "gcloud compute instances reset-all --group=worker-mig",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud compute instance-groups managed rolling-action restart worker-mig --region=us-central1 --max-unavailable=1",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute instance-groups managed delete worker-mig",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "kubectl rollout restart daemonset worker-mig",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instance-groups managed rolling-action restart <MIG_NAME> --max-unavailable=<N>` performs a controlled, rolling reboot of all member instances in the MIG, restarting VMs in small batches while maintaining minimum required serving capacity.",
    "distractors": {
      "A": "`instances reset-all` is non-existent CLI syntax.",
      "B": "Correct. `rolling-action restart` executes graceful, rolling reboots across MIG instances with zero total outage.",
      "C": "Deleting the MIG destroys the group and terminates all processing.",
      "D": "`kubectl rollout restart` manages Kubernetes workloads, not Compute Engine virtual machine instance groups."
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
        "text": "bq show nodes:gke-prod-pool-1-node9",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute disks describe gke-prod-pool-1-node9",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "kubectl describe node gke-prod-pool-1-node9",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "kubectl delete node gke-prod-pool-1-node9",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "`kubectl describe node <NODE_NAME>` outputs complete Kubernetes node metadata, including Node Conditions (`Ready`, `MemoryPressure`, `DiskPressure`, `PIDPressure`), capacity vs allocatable resources, and system event messages (e.g. image garbage collection failures).",
    "distractors": {
      "A": "BigQuery does not store real-time Kubernetes node conditions.",
      "B": "`compute disks describe` shows raw GCP persistent disk parameters, but does not show Kubernetes kubelet conditions or pod pressure states.",
      "C": "Correct. `kubectl describe node` displays all Kubernetes conditions, capacity, taints, and scheduling events.",
      "D": "Deleting the node abruptly evicts all workloads and does not diagnose why disk pressure occurred."
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
        "text": "kubectl apply -f microservices-dashboard.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bq mk --dashboard=microservices-dashboard.json",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud monitoring dashboards create --config-from-file=microservices-dashboard.json",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute instances create-dashboard microservices-dashboard.json",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "C",
    "explanation": "`gcloud monitoring dashboards create --config-from-file=<FILE.json>` imports declarative JSON dashboard templates into Cloud Monitoring, enabling Dashboards-as-Code practices across projects.",
    "distractors": {
      "A": "`kubectl apply` applies Kubernetes manifests, not Google Cloud Monitoring JSON dashboard definitions.",
      "B": "BigQuery (`bq`) does not manage Cloud Monitoring dashboards.",
      "C": "Correct. `gcloud monitoring dashboards create --config-from-file` provisions Cloud Monitoring dashboards programmatically.",
      "D": "`compute instances create-dashboard` is invalid syntax."
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
        "text": "gcloud compute instances list --filter='oom'",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "kubectl get nodes -o yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "cat /var/log/messages | grep oom",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "kubectl describe pod [POD_NAME] --namespace=prod",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`kubectl describe pod <POD_NAME>` inspects container state details. Under the `Last State: Terminated` section, it explicitly shows `Reason: OOMKilled` and `Exit Code: 137`, indicating that the container exceeded its configured `resources.limits.memory` and was terminated by the Linux cgroup killer.",
    "distractors": {
      "A": "`instances list --filter='oom'` is invalid; VM instance status does not report container-level cgroup OOM kills.",
      "B": "`get nodes` shows worker node state, but does not display specific container pod termination reasons.",
      "C": "Running grep on a local machine does not inspect remote GKE container cgroup logs.",
      "D": "Correct. `kubectl describe pod` provides container lifecycle states, exit codes (137 = OOM), and termination reasons."
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
        "text": "gcloud compute disks create analytics-data-disk-restored --zone=us-central1-a --source-snapshot=snapshot-analytics-clean --type=pd-ssd",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "bq restore snapshot-analytics-clean analytics-data-disk",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances restore-disk analytics-data-disk --snapshot=snapshot-analytics-clean",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gsutil cp gs://snapshots/snapshot-analytics-clean /dev/sda1",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud compute disks create <NEW_DISK_NAME> --source-snapshot=<SNAPSHOT_NAME> --zone=<ZONE>` restores an incremental snapshot into a brand-new persistent disk volume with identical data state.",
    "distractors": {
      "A": "Correct. `gcloud compute disks create --source-snapshot` provisions a new disk initialized with snapshot data.",
      "B": "BigQuery (`bq`) does not manage Compute Engine persistent disk snapshots.",
      "C": "`instances restore-disk` is not a valid gcloud command.",
      "D": "Snapshots are stored internally by Compute Engine block storage, not as plain downloadable files in Cloud Storage."
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
        "text": "gcloud compute disks update gs://corp-legal-archives --type=ARCHIVE",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud storage objects update gs://corp-legal-archives/** --storage-class=ARCHIVE",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq update --storage_class=ARCHIVE corp-legal-archives",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gsutil delete-storage-class STANDARD gs://corp-legal-archives/**",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud storage objects update gs://<BUCKET>/** --storage-class=<CLASS>` updates the storage class of existing objects in-place without re-uploading or rewriting data over the network.",
    "distractors": {
      "A": "`compute disks update` manages Compute Engine block storage disks, not Cloud Storage object buckets.",
      "B": "Correct. `gcloud storage objects update --storage-class=ARCHIVE` converts object storage classes in-place.",
      "C": "BigQuery (`bq`) does not manage Cloud Storage bucket object storage classes.",
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
        "text": "Cloud Billing Dashboard.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "BigQuery Slot Analyzer.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Network Intelligence Center: Network Topology.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Transfer Service.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Network Topology in Network Intelligence Center provides real-time visualization of your global virtual network infrastructure, overlaying live network performance metrics (traffic volume, latency, packet loss percentage) across regions, zones, VPCs, and hybrid connections.",
    "distractors": {
      "A": "Cloud Billing reports monetary charges, not live network packet loss or inter-region latency.",
      "B": "BigQuery Slot Analyzer profiles SQL query compute slot utilization.",
      "C": "Correct. Network Topology visualizes real-time inter-region throughput, latency, and packet loss metrics across networks.",
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
        "text": "kubectl autoscale deployment order-service --concurrency=80",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud run services update order-service --region=us-central1 --max-instances=80",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances update order-service --threads=80",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud run services update order-service --region=us-central1 --concurrency=80",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud run services update <SERVICE> --concurrency=<COUNT>` configures container concurrency (number of maximum simultaneous requests routed to a single container instance). Increasing concurrency from 1 to 80 optimizes container utilization, reduces cold starts, and lowers cloud spend.",
    "distractors": {
      "A": "`kubectl autoscale` does not configure Cloud Run managed serverless services.",
      "B": "`--max-instances=80` sets the upper limit on container instance scaling, not the concurrent request capacity per instance.",
      "C": "`compute instances update` manages Compute Engine VMs, not Cloud Run serverless services.",
      "D": "Correct. `--concurrency=80` instructs Cloud Run to pack up to 80 concurrent HTTP requests into each container instance."
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
        "text": "gcloud builds log bfa72c3d-1234-5678",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "kubectl logs bfa72c3d-1234-5678",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gsutil cat gs://cloud-build-logs/bfa72c3d-1234-5678.txt",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances get-serial-port-output bfa72c3d-1234-5678",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud builds log <BUILD_ID>` streams the complete stdout/stderr logs of all executed build steps directly from Cloud Build, allowing developers to inspect exact compiler errors and failed step commands.",
    "distractors": {
      "A": "Correct. `gcloud builds log` streams the complete execution log for a specific Cloud Build job.",
      "B": "`kubectl logs` queries Kubernetes pods, not managed Google Cloud Build execution jobs.",
      "C": "Locating raw log files manually in GCS requires guessing log bucket naming conventions and paths.",
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
        "text": "gcloud compute instances set-maintenance prod-db-1 --day=SUN",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances patch prod-db-1 --maintenance-window-day=SUN --maintenance-window-hour=2",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud app deploy maintenance.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "bq update --maintenance_schedule=SUN_02 prod-db-1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --maintenance-window-day=<DAY> --maintenance-window-hour=<UTC_HOUR>` restricts automated platform maintenance and security updates to the specified day and hour window, preventing disruptions during peak business hours.",
    "distractors": {
      "A": "`compute instances set-maintenance` is non-existent CLI syntax.",
      "B": "Correct. `gcloud sql instances patch --maintenance-window-day=SUN --maintenance-window-hour=2` locks maintenance to Sunday 02:00 UTC.",
      "C": "App Engine maintenance.yaml is non-existent.",
      "D": "BigQuery (`bq`) does not manage Cloud SQL instance maintenance schedules."
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
        "text": "bq update --lock-dataset sec-archive-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gsutil rm -r gs://sec-archive-vault",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "gcloud storage buckets update gs://sec-archive-vault --lock-retention-policy",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "gcloud compute disks snapshot lock gs://sec-archive-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Locking a retention policy (`--lock-retention-policy`) permanently cements the bucket's retention period. Once locked, the policy cannot be deleted, removed, or reduced in duration by any user or IAM role, guaranteeing immutable WORM (Write Once, Read Many) compliance.",
    "distractors": {
      "A": "BigQuery (`bq`) does not manage Cloud Storage bucket lock policies.",
      "B": "`gsutil rm` attempts to delete the bucket, which is rejected on locked buckets.",
      "C": "Correct. `gcloud storage buckets update --lock-retention-policy` permanently locks the retention policy for compliance.",
      "D": "Compute Engine disk snapshot lock does not manage Cloud Storage WORM compliance buckets."
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
        "text": "logging.googleapis.com/byte_count.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bigquery.googleapis.com/query/scanned_bytes.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "storage.googleapis.com/storage/object_count.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "compute.googleapis.com/instance/network/sent_bytes_count (and instance/network/dropped_packets_count).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Compute Engine network bandwidth is capped per VM based on vCPU count. Monitoring `compute.googleapis.com/instance/network/sent_bytes_count` and `instance/network/dropped_packets_count` identifies egress bandwidth throttling when throughput hits the machine type's network limits.",
    "distractors": {
      "A": "`logging/byte_count` measures log volume ingestion rate.",
      "B": "`bigquery/query/scanned_bytes` measures data scanned by BigQuery analytical queries.",
      "C": "`storage/object_count` counts stored files in Cloud Storage.",
      "D": "Correct. `instance/network/sent_bytes_count` tracks VM network egress rate relative to maximum network bandwidth limits."
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
        "text": "Set the autoscaling profile to balanced.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Deploy an HPA on the kube-system namespace.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Set the autoscaling profile to optimize-utilization using gcloud container clusters update my-cluster --autoscaling-profile=optimize-utilization.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Disable the Cluster Autoscaler.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "GKE Cluster Autoscaler supports two profiles: `balanced` (default, balances scale-down speed with avoiding unnecessary evictions) and `optimize-utilization` (aggressively prioritizes bin packing and scale-down speed, evicting pods rapidly to shut down idle nodes and maximize cost savings).",
    "distractors": {
      "A": "`balanced` is the default conservative profile that delays node removals to prevent pod disruption.",
      "B": "HPA in `kube-system` does not configure cluster worker node autoscaling profile behaviors.",
      "C": "Correct. `--autoscaling-profile=optimize-utilization` optimizes for maximum bin-packing and aggressive node scale-down.",
      "D": "Disabling the autoscaler prevents nodes from scaling down completely, driving up costs."
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
        "text": "bq restore prod-pg-ha",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud sql instances restart prod-pg-ha",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances delete prod-pg-ha-vm",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances failover prod-pg-ha",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances failover <INSTANCE_NAME>` initiates an immediate manual failover on a Regional High Availability Cloud SQL instance, switching primary serving duties to the standby replica zone.",
    "distractors": {
      "A": "BigQuery (`bq`) does not manage Cloud SQL relational database operations.",
      "B": "`instances restart` restarts the active primary instance without initiating a zone failover.",
      "C": "Underlying Cloud SQL VMs are managed by Google and cannot be deleted directly via `compute instances delete`.",
      "D": "Correct. `gcloud sql instances failover` triggers manual HA failover for disaster recovery validation."
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
        "text": "bq cp --snapshot warehouse.customer_master warehouse.customer_master_snapshot_20260820",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute disks snapshot warehouse.customer_master",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gsutil cp gs://bq-data/master gs://bq-data/backup",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "bq export warehouse.customer_master gs://my-backups/customer.csv",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery table snapshots (`bq cp --snapshot <SOURCE_TABLE> <SNAPSHOT_TABLE>`) create instant, zero-byte incremental snapshots of a table. Storage costs only accrue for data rows that are subsequently modified or deleted in the base table.",
    "distractors": {
      "A": "Correct. `bq cp --snapshot` creates an instantaneous, cost-effective point-in-time table snapshot.",
      "B": "`compute disks snapshot` is for Compute Engine persistent disks, not BigQuery tables.",
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
        "text": "gcloud compute instances stop api-gateway-1 && gcloud compute instances set-machine-type api-gateway-1 --metadata=...",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute instances add-metadata api-gateway-1 --zone=us-central1-b --metadata=environment=production,release_version=3.2",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud storage objects update gs://api-gateway-1 --metadata=...",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "kubectl annotate node api-gateway-1 environment=production",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud compute instances add-metadata <VM_NAME> --metadata=<KEY=VALUE,...>` updates the instance's metadata dictionary online without stopping or rebooting the virtual machine.",
    "distractors": {
      "A": "Stopping the VM is completely unnecessary for metadata updates.",
      "B": "Correct. `gcloud compute instances add-metadata` applies custom metadata key-value pairs dynamically.",
      "C": "Cloud Storage objects are not Compute Engine virtual machines.",
      "D": "`kubectl annotate` is for Kubernetes nodes, not standalone Compute Engine VM metadata."
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
        "text": "gcloud compute routers delete nat-router",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "resource.type=\"gce_instance\" AND severity=DEBUG",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "resource.type=\"nat_gateway\" AND jsonPayload.allocation_status=\"DROPPED\"",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "SELECT * FROM nat_logs WHERE status='error'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "When Cloud NAT logging is enabled, dropped outbound connections caused by source port exhaustion are logged under `resource.type=\"nat_gateway\"` with `jsonPayload.allocation_status=\"DROPPED\"`.",
    "distractors": {
      "A": "Deleting the router terminates all outbound internet connectivity for all private VMs.",
      "B": "`gce_instance` logs with DEBUG severity do not specifically isolate Cloud NAT gateway packet drops.",
      "C": "Correct. `resource.type=\"nat_gateway\" AND jsonPayload.allocation_status=\"DROPPED\"` explicitly isolates NAT port exhaustion events.",
      "D": "Cloud Logging filter syntax is not raw SQL (unless using Log Analytics)."
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
        "text": "gcloud compute disks update gs://finance-records-vault --kms-key=key-v2",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "bq update --kms_key=key-v2 finance-records-vault",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gsutil set-kms-key gs://finance-records-vault --key=key-v2",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets update gs://finance-records-vault --default-encryption-key=projects/my-proj/locations/us-central1/keyRings/vault-ring/cryptoKeys/key-v2",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud storage buckets update <BUCKET> --default-encryption-key=<KMS_KEY_RESOURCE_ID>` sets Customer-Managed Encryption Keys (CMEK) as the default encryption mechanism for all future objects uploaded to the bucket.",
    "distractors": {
      "A": "`compute disks update` is for Compute Engine persistent disks, not Cloud Storage buckets.",
      "B": "`bq update` is for BigQuery datasets and tables.",
      "C": "`gsutil set-kms-key` is non-existent syntax.",
      "D": "Correct. `gcloud storage buckets update --default-encryption-key` assigns the CMEK key to the bucket."
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
        "text": "kubectl describe pvc db-data-pvc --namespace=prod",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "gcloud compute disks describe db-data-pvc",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "kubectl delete pvc db-data-pvc --force",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud container clusters restart prod-cluster",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "`kubectl describe pvc <PVC_NAME>` reveals the detailed lifecycle status of a PersistentVolumeClaim, including dynamic provisioner error messages (e.g., quota exceeded, unsupported zone, volumeBindingMode: WaitForFirstConsumer).",
    "distractors": {
      "A": "Correct. `kubectl describe pvc` shows volume provisioning conditions, storage class mapping, and binding events.",
      "B": "`compute disks describe` fails if the volume provisioner has not yet created the underlying GCP disk.",
      "C": "Force-deleting the PVC deletes the volume request without identifying why provisioning failed.",
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
        "text": "bq update --defer-maintenance prod-mysql-instance",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud sql maintenance-events reschedule prod-mysql-instance --reschedule-type=SPECIFIC_TIME --schedule-time=2026-09-01T03:00:00Z",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud sql instances restart prod-mysql-instance --no-maintenance",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances set-maintenance prod-mysql-instance --cancel",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud sql maintenance-events reschedule <INSTANCE_NAME> --reschedule-type=SPECIFIC_TIME --schedule-time=<TIME>` allows administrators to reschedule or defer upcoming Cloud SQL system maintenance updates to an approved business window.",
    "distractors": {
      "A": "BigQuery (`bq`) does not manage Cloud SQL relational instances.",
      "B": "Correct. `gcloud sql maintenance-events reschedule` changes the timing of upcoming scheduled maintenance.",
      "C": "`--no-maintenance` is not a valid flag on `instances restart`.",
      "D": "`compute instances set-maintenance` does not manage Cloud SQL database maintenance schedules."
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
        "text": "gcloud app deploy dev-schedule.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "kubectl apply -f vm-cronjob.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute resource-policies create instance-schedule dev-vm-schedule --region=us-central1 --vm-start-schedule='0 7 * * 1' --vm-stop-schedule='0 19 * * 5' --timezone='UTC'",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Write a python script on a dedicated VM that runs gcloud compute instances stop in crontab.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Compute Engine Instance Schedules (via `gcloud compute resource-policies create instance-schedule`) natively automate the scheduled starting and stopping of virtual machine instances using standard cron expressions with zero custom scripts or running scheduler VMs.",
    "distractors": {
      "A": "App Engine does not manage native Compute Engine VM power schedules.",
      "B": "Kubernetes CronJobs manage in-cluster pods, not native Compute Engine VM hypervisor power states.",
      "C": "Correct. `resource-policies create instance-schedule` is the native managed service to automate VM start/stop schedules.",
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
        "text": "gsutil retention set 365d gs://logging-default-bucket",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud compute networks update --log-retention=365",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "bq update --retention=365 logging_dataset",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud logging buckets update _Default --location=global --retention-days=365",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud logging buckets update <BUCKET_ID> --location=<LOCATION> --retention-days=<DAYS>` configures the log retention period of Cloud Logging log buckets (such as `_Default` or `_Required`), extending retention from 30 days up to 3650 days (10 years).",
    "distractors": {
      "A": "`gsutil retention` is for Cloud Storage buckets, not Cloud Logging managed log buckets.",
      "B": "`compute networks update` does not manage Cloud Logging log bucket retention policies.",
      "C": "`bq update` manages BigQuery tables, not Cloud Logging log buckets.",
      "D": "Correct. `gcloud logging buckets update _Default --retention-days=365` extends log retention to 1 year."
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
        "text": "Grant roles/bigquery.dataViewer on dataset sales_dw and roles/bigquery.jobUser at the project level.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Grant roles/bigquery.dataOwner on the project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant roles/bigquery.admin at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Grant primitive roles/editor at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Following the Principle of Least Privilege: `roles/bigquery.jobUser` at the project level allows users to run query jobs and consume project slot quota, while `roles/bigquery.dataViewer` scoped to the dataset grants read-only access to table schemas and rows without granting table deletion or schema modification rights.",
    "distractors": {
      "A": "Correct. `roles/bigquery.jobUser` (to execute queries) + `roles/bigquery.dataViewer` (to read data) strictly fulfills least privilege.",
      "B": "`roles/bigquery.dataOwner` grants full control over tables and datasets, including table deletion.",
      "C": "`roles/bigquery.admin` grants full administrative control including deleting datasets and altering IAM access.",
      "D": "`roles/editor` grants broad primitive edit permissions across all GCP resources in the project."
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
        "text": "Grant roles/iam.serviceAccountKeyAdmin to the engineer.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Grant roles/iam.serviceAccountUser to the engineer on the service account app-runner@corp.iam.gserviceaccount.com.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Set the Compute Engine default service account to have primitive Editor role.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to the engineer on the project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "To attach a service account to a Compute Engine VM or Cloud Run service, the deploying identity must possess the `roles/iam.serviceAccountUser` role on that specific service account resource (or at project level), preventing unauthorized privilege escalation.",
    "distractors": {
      "A": "`roles/iam.serviceAccountKeyAdmin` allows creating and downloading static JSON keys, which is unnecessary and creates security risk.",
      "B": "Correct. `roles/iam.serviceAccountUser` on the target service account authorizes the user to bind the service account to compute instances.",
      "C": "Granting Editor to the default service account violates least privilege and exposes the entire project.",
      "D": "Granting `roles/owner` gives excessive project-wide privileges violating security policy."
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
        "text": "Grant roles/secretmanager.admin at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Grant roles/secretmanager.viewer on the secret.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Grant roles/secretmanager.secretAccessor to order-sa on the secret prod-db-conn.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant primitive roles/editor at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "`roles/secretmanager.secretAccessor` grants permission (`secretmanager.versions.access`) to read secret payloads and decrypt secret versions. `roles/secretmanager.viewer` only views secret metadata (names, creation times) without access to the actual secret payload.",
    "distractors": {
      "A": "`roles/secretmanager.admin` grants permission to delete, modify, and manage secrets across the entire project.",
      "B": "`roles/secretmanager.viewer` allows viewing secret metadata but explicitly DENIES reading secret payload contents.",
      "C": "Correct. `roles/secretmanager.secretAccessor` allows reading the decrypted secret payload.",
      "D": "`roles/editor` grants broad primitive access across all cloud resources in the project."
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
        "text": "gcloud organizations roles create computeOperator --all-permissions",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --role=roles/compute.instanceAdmin.v1",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "gcloud compute roles create computeOperator --permissions=start,stop,reset",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud iam roles create computeOperator --project=corp-prod --title='Compute Operator' --permissions=compute.instances.start,compute.instances.stop,compute.instances.reset,compute.instances.get,compute.instances.list --stage=GA",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud iam roles create <ROLE_ID> --project=<PROJECT> --permissions=<COMMA_SEPARATED_PERMISSIONS>` creates a custom IAM role containing an exact list of granular GCP API permissions, adhering strictly to least privilege.",
    "distractors": {
      "A": "`organizations roles create --all-permissions` creates an overprivileged organizational role.",
      "B": "Passing an existing predefined role name is not valid custom role creation syntax.",
      "C": "`gcloud compute roles create` is non-existent CLI syntax.",
      "D": "Correct. `gcloud iam roles create` with explicit `compute.instances.start,stop,reset,get,list` permissions defines the custom role."
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
        "text": "Update the project's IAM Audit Config in Cloud Console or via gcloud to enable DATA_READ and DATA_WRITE log types for storage.googleapis.com.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Deploy a Cloud Function that polls bucket object metadata every 10 seconds.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Grant roles/logging.admin to all storage users.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Create a VPC egress firewall rule on port 443 with logging enabled.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Audit Logs Data Access logs are configured via the project's IAM Audit Config (`auditConfigs`). Enabling `DATA_READ` and `DATA_WRITE` for `storage.googleapis.com` generates audit records for every `objects.get`, `objects.create`, and `objects.delete` API operation.",
    "distractors": {
      "A": "Correct. Configuring the IAM Audit Policy for `storage.googleapis.com` activates Cloud Audit Data Access logging.",
      "B": "Polling scripts do not capture who initiated read requests or when objects were downloaded.",
      "C": "Granting logging admin permissions gives users administrative access to log buckets, but does not enable Data Access log generation.",
      "D": "VPC firewall rules do not inspect Google Cloud control plane API invocations or generate Cloud Audit Log entries."
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
        "text": "Create an egress firewall rule blocking all traffic to 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Create a VPC Service Controls Service Perimeter enclosing project patient-data-prod and protecting the bigquery.googleapis.com and storage.googleapis.com services.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Set Cloud Storage bucket permissions to public read-only.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged proxy VM running iptables in the subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "B",
    "explanation": "VPC Service Controls (VPC SC) establishes security perimeters around Google-managed services (Cloud Storage, BigQuery). It blocks API requests that attempt to move data from inside the perimeter to storage resources outside the perimeter, even if the user has valid IAM permissions.",
    "distractors": {
      "A": "VPC firewall rules apply to VM-to-VM traffic, not Google Cloud API control plane calls (e.g. `gsutil cp` between GCP buckets).",
      "B": "Correct. VPC Service Controls service perimeters effectively prevent data exfiltration across Google Cloud API boundaries.",
      "C": "Making buckets public causes catastrophic data leaks violating HIPAA.",
      "D": "Proxy VMs do not enforce organizational boundaries on managed GCP serverless API endpoints."
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
        "text": "Download the KMS private key and store it in instance metadata.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Grant roles/owner to the Compute Engine default service account.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant roles/cloudkms.cryptoKeyEncrypterDecrypter to the Compute Engine Service Agent on the target CryptoKey.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudkms.admin to the VM instance user.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "To enable Compute Engine to encrypt and decrypt persistent disks using CMEK, Google's Compute Engine Service Agent (`service-[PROJECT_NUM]@compute-system.iam.gserviceaccount.com`) must be granted `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the specific KMS CryptoKey.",
    "distractors": {
      "A": "Cloud KMS private keys cannot be downloaded; storing keys in metadata violates security compliance.",
      "B": "Granting Owner to the default service account gives excessive project permissions and does not grant KMS key access to the system service agent.",
      "C": "Correct. Granting `roles/cloudkms.cryptoKeyEncrypterDecrypter` to the Compute Engine service agent authorizes disk encryption.",
      "D": "KMS admin permissions manage key metadata, not runtime encryption/decryption by the hypervisor."
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
        "text": "Create an ingress firewall rule in the default VPC network.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Store username and password hashes in Cloud Storage.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Deploy an unmanaged VPN gateway VM on Compute Engine.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Enable Identity-Aware Proxy (IAP) on the App Engine application and bind an Access Context Manager Access Level enforcing corporate IP subnet and device policy conditions.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Identity-Aware Proxy (IAP) integrated with Access Context Manager provides Context-Aware Access (Zero Trust). It evaluates user identity, device security posture (disk encryption, OS version), and network origin IP before granting access to App Engine, Cloud Run, or GKE web applications.",
    "distractors": {
      "A": "VPC firewall rules do not protect App Engine standard serverless web endpoints.",
      "B": "Storing passwords in Cloud Storage creates critical data leak risks and lacks Zero Trust integration.",
      "C": "VPN gateways require network infrastructure management and lack application-level device security verification.",
      "D": "Correct. IAP + Access Context Manager enforces identity and device context-aware access policies seamlessly."
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
        "text": "Grant roles/compute.instanceAdmin.v1 and set a calendar reminder on your phone to delete the role manually.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create an unmanaged cron script on an e2-micro VM that deletes the user on August 25.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Grant primitive roles/editor at the organization level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.instanceAdmin.v1 with an IAM Condition expression: request.time < timestamp(\"2026-08-25T18:00:00Z\").",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud IAM Conditions allow attaching conditional expressions to role bindings. Using `request.time < timestamp(\"2026-08-25T18:00:00Z\")` ensures that the role binding is automatically invalidated by Google IAM the moment the timestamp passes.",
    "distractors": {
      "A": "Manual reminders rely on human memory and risk forgetting to revoke elevated access.",
      "B": "Custom cron scripts add failure points, require credential maintenance, and are unnecessary.",
      "C": "Organizational Editor grants permanent, excessively broad permissions across all projects.",
      "D": "Correct. Native IAM Conditions with `request.time` enforce automatic time-bound expiration with zero administrative overhead."
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
        "text": "Configure Workload Identity Federation with an OIDC Workload Identity Pool and Provider for GitHub Actions, and grant the GitHub workflow principal permissions to impersonate the deployment service account.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Make the Artifact Registry repository publicly accessible without authentication.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Generate a service account JSON key and store it in GitHub Secrets.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to github-actions@corp.iam.gserviceaccount.com.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Workload Identity Federation allows external workloads (GitHub Actions, AWS, Azure, on-premises OIDC/SAML) to exchange external credentials for short-lived Google Cloud access tokens, completely eliminating the risks of downloadable long-lived service account JSON keys.",
    "distractors": {
      "A": "Correct. Workload Identity Federation provides keyless, secure, short-lived token authentication for GitHub Actions.",
      "B": "Making repositories public exposes proprietary corporate container images to the world.",
      "C": "Storing long-lived JSON keys in external secret stores violates modern security mandates and risks credential leaks.",
      "D": "Granting Owner role gives excessive privileges and does not solve key management security."
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
        "text": "gcloud compute networks update sensitive-docs --enable-ubla",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud storage buckets update gs://corp-sensitive-docs --uniform-bucket-level-access",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "bq update --uniform_access corp-sensitive-docs",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gsutil acl set public-read gs://corp-sensitive-docs",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "B",
    "explanation": "Uniform Bucket-Level Access (UBLA) unifies access control exclusively to Google Cloud IAM, disabling individual object ACLs and preventing accidental exposure of individual files through fine-grained ACL leaks.",
    "distractors": {
      "A": "`compute networks update` manages VPC networks, not Cloud Storage buckets.",
      "B": "Correct. `gcloud storage buckets update --uniform-bucket-level-access` enforces IAM-only governance on the bucket.",
      "C": "BigQuery (`bq`) does not manage Cloud Storage bucket ACL settings.",
      "D": "Setting ACLs to public-read exposes all objects to the entire internet."
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
        "text": "Create an ingress firewall rule specifying --target-tags=all.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Allow all traffic from 0.0.0.0/0 on port 8080 without target filters.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule specifying --target-service-accounts=backend-sa@corp.iam.gserviceaccount.com, --allow=tcp:8080, and appropriate source IP ranges.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant roles/compute.admin to the backend service account.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "Target Service Accounts in VPC firewall rules bind traffic permissions strictly to the cryptographically verified IAM identity running on the VM instance (`--target-service-accounts`), preventing developers from bypassing firewall rules by arbitrarily modifying network tags.",
    "distractors": {
      "A": "Network tags can be modified by instance administrators, whereas service accounts provide cryptographically bound identity enforcement.",
      "B": "Opening port 8080 without target filters allows traffic to every VM in the network.",
      "C": "Correct. `target-service-accounts` enforces strict, tamper-proof IAM identity-based firewall filtering.",
      "D": "Granting Compute Admin role modifies control plane permissions, not packet-filtering firewall rules."
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
        "text": "Compute Engine Serial Console.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "Cloud Armor security policy.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud DNS forwarding rules.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "Cloud Sensitive Data Protection (Cloud DLP) inspection and de-identification transform job.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Sensitive Data Protection (Cloud DLP) provides automated discovery, classification, and de-identification (masking, tokenization, hashing, date shifting) of sensitive data (credit cards, SSNs, names) in Cloud Storage, BigQuery, and Datastore.",
    "distractors": {
      "A": "Serial console provides low-level Linux VM terminal debugging.",
      "B": "Cloud Armor is an edge WAF service, not a data payload de-identification engine.",
      "C": "Cloud DNS resolves domain names to IP addresses.",
      "D": "Correct. Cloud DLP identifies sensitive infoTypes and applies transformations like character masking and redaction."
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
        "text": "Deploy a Cloud IAM Deny Policy at the Organization level that denies principals 'allUsers' and 'allAuthenticatedUsers' the permission 'storage.objects.get'.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Revoke Owner roles from all project administrators.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Set up a cron script that scans IAM policies daily.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Delete the default VPC network in all projects.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Cloud IAM Deny Policies take precedence over all IAM allow grants. A Deny Policy applied at the Organization or Folder level denying `allUsers` and `allAuthenticatedUsers` specific permissions (`storage.objects.get`) prevents public access universally, overriding any project-level allow bindings.",
    "distractors": {
      "A": "Correct. IAM Deny policies provide centralized, non-overridable access blocks that override all allow grants.",
      "B": "Revoking Owner roles restricts project admins but does not provide declarative policy enforcement.",
      "C": "Daily scanning scripts detect violations retroactively after data may have already leaked.",
      "D": "Deleting VPC networks does not prevent public API access to Cloud Storage buckets."
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
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption && set a calendar reminder to click Rotate Key",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "gcloud kms keys create db-crypto-key --keyring=db-ring --location=us-central1 --purpose=encryption --rotation-period=90d --next-rotation-time=2026-11-20T00:00:00Z",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute disks update --rotate-keys=90d",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq update --kms_rotation=90d db-key",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud kms keys create <KEY_NAME> --rotation-period=<DURATION> --next-rotation-time=<TIMESTAMP>` configures Cloud KMS to automatically generate a new primary key version on schedule, ensuring seamless cryptographic hygiene without breaking decryption of data encrypted with older versions.",
    "distractors": {
      "A": "Manual rotation reminders are error-prone and violate continuous compliance automation standards.",
      "B": "Correct. `gcloud kms keys create --rotation-period=90d` enables automated hands-free key rotation.",
      "C": "`compute disks update --rotate-keys` is non-existent syntax.",
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
        "text": "Cloud Trace.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud Billing Reports.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Security Command Center (SCC).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "BigQuery Data Transfer Service.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Security Command Center (SCC) is the centralized vulnerability and threat management platform for Google Cloud. It continuously monitors cloud asset inventory, surfaces security findings (Security Health Analytics, Event Threat Detection), and evaluates compliance posture.",
    "distractors": {
      "A": "Cloud Trace monitors application request latency.",
      "B": "Cloud Billing reports monetary charges and costs.",
      "C": "Correct. Security Command Center is the centralized security, vulnerability, and compliance management platform.",
      "D": "BigQuery Data Transfer Service ingests data into BigQuery tables."
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
        "text": "Deploy an unmanaged Nginx VM to terminate SSL.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Set Cloud Storage bucket permissions to private.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule blocking port 80.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Create an SSL policy using gcloud compute ssl-policies create pci-ssl-policy --min-tls-version=1.2 --profile=RESTRICTED, and attach it to the Target HTTPS Proxy using gcloud compute target-https-proxies update my-proxy --ssl-policy=pci-ssl-policy.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud compute ssl-policies create <NAME> --min-tls-version=1.2 --profile=RESTRICTED` defines modern TLS cipher standards, which are then attached to Target HTTPS Proxies (`gcloud compute target-https-proxies update --ssl-policy=<NAME>`) to enforce TLS 1.2+ at Google's global load balancing edge.",
    "distractors": {
      "A": "Self-managed Nginx VMs lose global multi-region edge anycast termination benefits and add maintenance overhead.",
      "B": "Bucket permissions govern storage objects, not load balancer HTTPS termination protocols.",
      "C": "Firewall rules block TCP ports, but cannot enforce TLS handshake version requirements.",
      "D": "Correct. `ssl-policies create` + `target-https-proxies update --ssl-policy` enforces minimum TLS versions on Cloud Load Balancers."
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
        "text": "Grant roles/iam.serviceAccountTokenCreator to developer@corp.com on the service account deployer@corp.iam.gserviceaccount.com.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Grant roles/owner to developer@corp.com at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Create and download a service account JSON key file.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Grant roles/iam.serviceAccountKeyAdmin to the developer.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Granting `roles/iam.serviceAccountTokenCreator` on a specific service account allows a user to generate short-lived OAuth access tokens and OIDC ID tokens to impersonate that service account (e.g. via `gcloud --impersonate-service-account`), eliminating the need for downloadable JSON keys.",
    "distractors": {
      "A": "Correct. `roles/iam.serviceAccountTokenCreator` enables secure token-based service account impersonation.",
      "B": "Granting project Owner provides excessive permissions and does not follow the impersonation security pattern.",
      "C": "Creating JSON keys introduces key leak and credential theft risks.",
      "D": "`roles/iam.serviceAccountKeyAdmin` creates and deletes keys, but is not needed for keyless impersonation."
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
        "text": "Compute Engine Serial Console and OS Login.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Google Cloud Access Approval (for manual approval gates) and Access Transparency (for immutable access logs of Google personnel actions).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "VPC Flow Logs and Cloud Armor.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Cloud DNS and Cloud NAT.",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "Access Transparency provides near real-time audit logs whenever Google administrators access customer data during support tickets. Access Approval extends this by requiring explicit customer approval before Google support engineers can access data.",
    "distractors": {
      "A": "Serial Console and OS Login govern customer user logins, not Google support staff access governance.",
      "B": "Correct. Access Approval provides explicit authorization controls and Access Transparency provides audit logs for Google personnel actions.",
      "C": "VPC Flow Logs capture network traffic, not Google internal administrative support actions.",
      "D": "Cloud DNS and Cloud NAT are networking services."
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
        "text": "Stream the video binary data through an e2-micro VM in a custom Flask app.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Grant roles/storage.objectViewer to allUsers in IAM.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Generate a Cloud Storage Signed URL with a 15-minute expiration using a service account with Storage Object Viewer permissions.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Make the Cloud Storage bucket public.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage Signed URLs provide cryptographic delegation of read/write access for a limited time window (e.g. 15 minutes). The client can fetch the object directly from Cloud Storage without routing heavy media streaming bandwidth through backend application servers.",
    "distractors": {
      "A": "Proxying high-bandwidth video streams through application servers bottlenecks CPU and network bandwidth.",
      "B": "Granting objectViewer to allUsers makes all files publicly readable.",
      "C": "Correct. Signed URLs grant temporary, time-bound, direct read access to private objects securely.",
      "D": "Making the bucket public allows anyone on the internet to download copyrighted video files for free."
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
        "text": "Create an ingress firewall rule specifying --source-ranges=0.0.0.0/0 and --allow=tcp:3306.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Create an egress firewall rule on db-tier to allow port 3306.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Assign public IP addresses to all database instances.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Create an ingress firewall rule specifying --target-tags=db-tier, --source-tags=app-tier, and --allow=tcp:3306.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Using `--target-tags=db-tier` with `--source-tags=app-tier` enforces strict L3/L4 microsegmentation, ensuring that only VMs tagged with `app-tier` can establish TCP connections on port 3306 to database instances.",
    "distractors": {
      "A": "Allowing 0.0.0.0/0 exposes the database port to the entire internet.",
      "B": "Egress rules control outbound traffic leaving the VM, not inbound connection requests from the app tier.",
      "C": "Public IPs on database VMs expose databases to internet port scanners.",
      "D": "Correct. Target tag `db-tier` + source tag `app-tier` restricts MySQL traffic strictly to application layer VMs."
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
        "text": "gcloud compute security-policies rules create 100 --security-policy=api-protection --rate-limit-threshold-count=100 --rate-limit-threshold-interval-sec=60 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=IP --match-expr=\"request.path.startsWith('/api/login')\"",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "bq update --rate_limit=100 api_table",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute firewall-rules create limit-api --allow=tcp:443 --rate-limit=100",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud logging sinks create rate-limit-sink cloudarmor.googleapis.com/api",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor Rate Limiting rules (`--rate-limit-threshold-count`, `--rate-limit-threshold-interval-sec`, `--exceed-action=deny-429`, `--enforce-on-key=IP`) enforce rate caps per client IP or session key at Google's global edge, dropping volumetric L7 flood attacks before they reach backend instances.",
    "distractors": {
      "A": "Correct. `gcloud compute security-policies rules create` with rate-limit parameters configures edge throttling.",
      "B": "BigQuery (`bq`) manages analytical tables, not edge HTTP web traffic rate limiting.",
      "C": "VPC firewall rules do not support HTTP request path matching or application-level rate limiting.",
      "D": "Cloud Logging sinks route log records, not throttle live HTTP client traffic."
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
        "text": "Create an open firewall rule on port 5432 to 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Enable the cloudsql.iam_authentication=on database flag on the instance, and add an IAM database user for app-sa@corp.iam.gserviceaccount.com in Cloud SQL with type CLOUD_IAM_SERVICE_ACCOUNT.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Store database passwords in a public Cloud Storage bucket.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Hardcode the PostgreSQL postgres master password into the Cloud Run Dockerfile.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "B",
    "explanation": "Cloud SQL IAM database authentication (`cloudsql.iam_authentication=on`) enables applications to authenticate to PostgreSQL/MySQL using short-lived OAuth 2.0 access tokens generated by Google IAM service accounts, completely eliminating static database passwords.",
    "distractors": {
      "A": "Opening firewall rules to 0.0.0.0/0 creates severe network vulnerabilities and does not solve authentication.",
      "B": "Correct. Enabling `cloudsql.iam_authentication` + provisioning a `CLOUD_IAM_SERVICE_ACCOUNT` user enables keyless IAM logins.",
      "C": "Storing passwords in public buckets exposes credentials to the world.",
      "D": "Hardcoding credentials into Dockerfiles leaks passwords in container images."
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
        "text": "Grant roles/container.admin at the GCP project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Grant primitive roles/editor on the project.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant the developer roles/container.viewer at the GCP project level (to authenticate), and create a Kubernetes Role and RoleBinding in namespace development granting read access to pods and deployments.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy an unmanaged Kubernetes cluster on Compute Engine.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud IAM grants cluster-level access (`roles/container.viewer` allows listing clusters and obtaining kubeconfig credentials). Granular namespace-level permissions (e.g. read pods only in `development`) are governed inside the cluster via native Kubernetes RBAC `Role` and `RoleBinding` objects.",
    "distractors": {
      "A": "`roles/container.admin` grants full administrative control across all namespaces in all clusters.",
      "B": "`roles/editor` grants broad primitive edit permissions across the entire GCP project.",
      "C": "Correct. IAM `roles/container.viewer` (cluster authentication) + in-cluster Kubernetes `RoleBinding` (namespace authorization) enforces least privilege.",
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
        "text": "Public bucket access with client SSL encryption.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Google default encryption at rest.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Cloud KMS Customer-Managed Encryption Keys (CMEK).",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Customer-Supplied Encryption Keys (CSEK), providing the base64-encoded AES-256 key in the encryption_key configuration header of each API/CLI request.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Customer-Supplied Encryption Keys (CSEK) require the client to supply raw 256-bit AES encryption keys in HTTP request headers. Google Cloud uses the key in memory to encrypt/decrypt the object and immediately purges the key from memory without persisting it.",
    "distractors": {
      "A": "Client SSL encrypts in transit but leaves stored at-rest objects unprotected from public download.",
      "B": "Google default encryption uses Google-managed keys stored in Google KMS.",
      "C": "Cloud KMS CMEK stores and manages the encryption keys inside Google Cloud KMS.",
      "D": "Correct. CSEK requires supplying the raw AES-256 key with every request, and Google never stores the key."
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
        "text": "Share a single service account JSON key among all developers.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Write a nightly cron script that deletes and recreates all IAM policies.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Grant primitive roles/editor directly to individual developer personal Gmail accounts.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Assign IAM roles exclusively to Google Groups in Google Workspace/Cloud Identity, and manage individual permissions by adding or removing users from the corresponding groups.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud IAM best practice mandates binding IAM roles to Google Groups (e.g. `developers@corp.com`, `data-analysts@corp.com`) rather than individual user accounts. Membership in groups is managed via Cloud Identity/Workspace, allowing instant access revocation upon employee offboarding.",
    "distractors": {
      "A": "Sharing service account keys destroys individual accountability and creates massive credential compromise risks.",
      "B": "Recreating IAM policies daily causes intermittent authorization drops and severe outage risks.",
      "C": "Binding roles to individual personal Gmail accounts violates enterprise identity governance and creates dangling permissions.",
      "D": "Correct. Managing IAM through Google Groups provides centralized, scalable, audit-compliant access governance."
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
        "text": "Configure Cloud Armor rules using preconfigured WAF expressions: evaluatePreconfiguredExpr('sqli-v33-stable') and evaluatePreconfiguredExpr('xss-v33-stable') with action deny-403.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Create a VPC firewall rule blocking port 80 and 443.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Deploy an unmanaged Snort IDS VM on Compute Engine.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Set Cloud Storage bucket permissions to private.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor provides preconfigured WAF rules based on ModSecurity Core Rule Set (CRS 3.3). Using `evaluatePreconfiguredExpr('sqli-v33-stable')` and `evaluatePreconfiguredExpr('xss-v33-stable')` automatically inspects HTTP payloads for SQL injection and cross-site scripting attack vectors at Google's global edge.",
    "distractors": {
      "A": "Correct. Preconfigured WAF expressions provide turnkey edge mitigation against SQLi, XSS, and L7 attacks.",
      "B": "Blocking ports 80 and 443 shuts down all legitimate web traffic.",
      "C": "Self-managed IDS VMs introduce scaling bottlenecks and require ongoing signature rule maintenance.",
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
        "text": "bq mk --kms_key customer-data-key",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "gcloud kms keyrings create app-keyring --location=us-east1 && gcloud kms keys create customer-data-key --keyring=app-keyring --location=us-east1 --purpose=encryption",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute keys create customer-data-key --region=us-east1",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "gcloud storage keys create customer-data-key --keyring=app-keyring",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "B",
    "explanation": "In Cloud KMS, keys belong to Key Rings. You create the Key Ring first (`gcloud kms keyrings create <NAME> --location=<LOC>`), then create the CryptoKey inside that Key Ring (`gcloud kms keys create <NAME> --keyring=<RING> --location=<LOC> --purpose=encryption`).",
    "distractors": {
      "A": "BigQuery does not create raw KMS cryptographic key resources.",
      "B": "Correct. `gcloud kms keyrings create` followed by `gcloud kms keys create` establishes the KMS hierarchy.",
      "C": "`gcloud compute keys` is non-existent CLI syntax.",
      "D": "`gcloud storage keys` is non-existent CLI syntax."
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
        "text": "Delete all VPC networks in the project.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Store the service account private key in a public Git repository.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Remove the roles/editor role from the default service account, enforce the Organization Policy 'iam.automaticIamGrantsForDefaultServiceAccounts' (Disable Default Role Grants), and create dedicated custom service accounts with least-privilege roles for all VMs.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Grant roles/owner to the default service account.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "C",
    "explanation": "Google's enterprise security blueprint strongly recommends disabling automatic Editor grants on default service accounts (`iam.automaticIamGrantsForDefaultServiceAccounts` Org Policy), stripping existing Editor roles, and attaching custom dedicated service accounts with fine-grained least privilege roles to VMs.",
    "distractors": {
      "A": "Deleting VPC networks breaks network connectivity without addressing IAM privilege risks.",
      "B": "Committing private keys to Git creates severe security compromise vulnerabilities.",
      "C": "Correct. Revoking Editor and deploying dedicated least-privilege service accounts eliminates critical lateral movement attack surfaces.",
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
        "text": "Assign public IPv4 addresses to all VMs and open firewall port 443.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "Deploy an unmanaged Squid proxy VM with an external IP.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud DNS public forwarding.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Private Service Connect (PSC) endpoints (via forwarding rules with target-google-apis-bundle or service attachments).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Private Service Connect (PSC) allows private consumption of Google APIs and producer services using private internal IP addresses within your VPC, avoiding internet routing, complex VPC peering CIDR overlaps, and external IP vulnerabilities.",
    "distractors": {
      "A": "Public IPs violate enterprise isolation policies and expose VMs to public internet scans.",
      "B": "Proxy VMs introduce latency, management overhead, and single points of failure.",
      "C": "Cloud DNS public forwarding resolves public IPs rather than routing traffic over private SDN endpoints.",
      "D": "Correct. Private Service Connect connects private VMs directly to Google APIs and managed services over private internal IPs."
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
        "text": "gcloud secrets versions destroy 1 --secret=db-password",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "bq query 'DELETE FROM secrets WHERE version=1'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud secrets delete db-password --force",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "gcloud compute instances delete db-password",
        "isTrap": true,
        "trapType": "legacy_service"
      }
    ],
    "correct": "A",
    "explanation": "`gcloud secrets versions destroy <VERSION_NUMBER> --secret=<SECRET_NAME>` permanently destroys the cryptographic payload of that specific secret version, making it irrecoverable while keeping other versions (and the secret metadata) active.",
    "distractors": {
      "A": "Correct. `gcloud secrets versions destroy` securely purges compromised secret versions.",
      "B": "BigQuery does not manage Secret Manager secret stores.",
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
        "text": "At the Folder level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "At the Cloud Storage Bucket resource level on gs://contractor-workspace.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "At the Organization level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "At the Project level for corp-storage-prod.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud IAM policies inherit downwards: Org -> Folder -> Project -> Resource. Binding IAM roles at the specific Resource level (the individual bucket `gs://contractor-workspace`) grants permissions exclusively to that single resource without granting access to other buckets in the project.",
    "distractors": {
      "A": "Folder-level bindings inherit to all projects inside the folder.",
      "B": "Correct. Resource-level IAM binding restricts permissions strictly to that target bucket.",
      "C": "Organization-level bindings grant permissions across all projects in the company.",
      "D": "Project-level bindings inherit to all 10 buckets in the project, violating least privilege."
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
        "text": "Delete Perimeter A completely.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Make the BigQuery dataset public to allUsers.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Configure VPC Service Controls Ingress and Egress rules on Perimeter A defining specific source identity, destination project, and API method permissions.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Deploy an open VPN tunnel between the two projects.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "VPC Service Controls supports directional Ingress and Egress rules. Administrators can establish fine-grained, identity-based and method-based exceptions to securely allow data to enter or leave the perimeter without weakening perimeter boundaries.",
    "distractors": {
      "A": "Deleting the perimeter removes all data exfiltration protections for the entire project.",
      "B": "Making the dataset public causes critical corporate data leaks.",
      "C": "Correct. Ingress and Egress rules enable secure, controlled cross-perimeter and cross-org API communications.",
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
        "text": "Grant roles/owner to 203.0.113.0/24 in IAM.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule in default VPC allowing 203.0.113.0/24.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Deploy an unmanaged proxy VM in the subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "D",
        "text": "Create policy admin-waf, update default rule to deny-403, and add a rule at priority 1000 allowing src-ip-ranges 203.0.113.0/24.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Creating a Cloud Armor IP Whitelist policy involves creating the policy (`gcloud compute security-policies create`), modifying the default rule (priority 2147483647) to `deny-403`, and adding a higher-priority rule (priority 1000) allowing source IP range `203.0.113.0/24` with action `allow`.",
    "distractors": {
      "A": "IP addresses cannot be granted IAM roles; IAM roles are granted to user identities and service accounts.",
      "B": "VPC firewall rules apply to backend VMs, but do not block traffic at Google's global edge load balancer or return HTTP 403.",
      "C": "Proxy VMs add infrastructure maintenance and lack edge DDoS protection.",
      "D": "Correct. Proper Cloud Armor IP whitelisting structure: default deny-403 + priority allow rule for authorized CIDRs."
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
        "text": "logName=\"projects/corp-prod/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"SetIamPolicy\"",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "SELECT * FROM iam_table WHERE action='modify'",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute instances list --filter='iam'",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "resource.type=\"gce_instance\" AND severity=DEBUG",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "A",
    "explanation": "Administrative IAM policy changes are recorded in the Admin Activity audit log (`cloudaudit.googleapis.com/activity`) with `protoPayload.methodName=\"SetIamPolicy\"` (or `google.iam.admin.v1.CreateRole`). This records the caller identity, timestamp, and the exact delta between policy versions.",
    "distractors": {
      "A": "Correct. `logName=.../cloudaudit.googleapis.com%2Factivity AND protoPayload.methodName=\"SetIamPolicy\"` isolates IAM modifications.",
      "B": "Logging filter expressions are not raw SQL SELECT statements (unless using Log Analytics).",
      "C": "`compute instances list` displays VM metadata, not administrative IAM audit trail history.",
      "D": "`gce_instance` logs with DEBUG severity do not record project-level IAM API changes."
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
        "text": "gcloud kms keys delete customer-key --force",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud kms keys versions destroy 3 --key=customer-key --keyring=app-ring --location=us-central1",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud compute disks delete customer-key",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "D",
        "text": "bq update --delete_kms customer-key",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "`gcloud kms keys versions destroy <VERSION> --key=<KEY> --keyring=<RING> --location=<LOC>` transitions the key version into the `DESTROY_SCHEDULED` state with a 24-hour recovery window before the cryptographic key material is irreversibly destroyed.",
    "distractors": {
      "A": "Cloud KMS does not permit instant hard deletion of key resources; keys must undergo scheduled destruction.",
      "B": "Correct. `gcloud kms keys versions destroy` schedules the key version for destruction.",
      "C": "`compute disks delete` manages persistent disks, not Cloud KMS keys.",
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
        "text": "Deploy a Cloud Function that checks IAM every hour.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule blocking all foreign IPs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'iam.allowedPolicyMemberDomains' specifying the Directory Customer ID for corp.example.com.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Delete all default VPC networks.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "The `iam.allowedPolicyMemberDomains` Organization Policy constraint (Domain Restricted Sharing) restricts IAM policy bindings exclusively to accounts within approved Google Workspace / Cloud Identity customer domains, preventing accidental or malicious addition of external personal Gmail accounts.",
    "distractors": {
      "A": "Cloud Functions provide delayed detective scanning rather than real-time preventative control plane enforcement.",
      "B": "VPC firewall rules govern network packets, not Cloud IAM identity email validation.",
      "C": "Correct. `iam.allowedPolicyMemberDomains` enforces organization-wide domain restricted sharing at the control plane.",
      "D": "Deleting VPC networks does not prevent IAM role assignments to external users."
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
        "text": "gcloud app deploy ssl.yaml",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "bq update --ssl=true corp-db-prod",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "gcloud compute firewall-rules create allow-ssl --allow=tcp:3306",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud sql instances patch corp-db-prod --ssl-mode=ENCRYPTED_ONLY",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`gcloud sql instances patch <INSTANCE_NAME> --ssl-mode=ENCRYPTED_ONLY` (or `TRUSTED_CLIENT_CERTIFICATES`) enforces that all incoming client TCP connections must establish an SSL/TLS handshake, rejecting unencrypted plaintext SQL queries.",
    "distractors": {
      "A": "App Engine `ssl.yaml` is non-existent.",
      "B": "BigQuery (`bq`) does not manage Cloud SQL instance SSL parameters.",
      "C": "VPC firewall rules allow TCP traffic but do not enforce SSL/TLS encryption handshakes at the database protocol layer.",
      "D": "Correct. `gcloud sql instances patch --ssl-mode=ENCRYPTED_ONLY` rejects unencrypted connections."
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
        "text": "Grant roles/cloudbuild.builds.editor at the project level.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Grant roles/cloudbuild.builds.viewer at the project level.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Grant roles/owner at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Grant primitive roles/editor at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "`roles/cloudbuild.builds.editor` provides permissions to create, edit, and run Cloud Build triggers and build executions (`cloudbuild.builds.create`, `cloudbuild.builds.get`, `cloudbuild.triggers.create`), without granting broad administrative access across the project.",
    "distractors": {
      "A": "Correct. `roles/cloudbuild.builds.editor` grants necessary trigger and build execution permissions.",
      "B": "`roles/cloudbuild.builds.viewer` is read-only and prevents creating triggers or executing builds.",
      "C": "Granting Owner gives excessive administrative privileges across the entire project.",
      "D": "`roles/editor` grants broad access to all GCP resources in the project, violating least privilege."
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
        "text": "gcloud compute instances create payment-api-key --replicate=auto",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "B",
        "text": "gcloud secrets create payment-api-key --replication-policy=automatic",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "gcloud secrets create payment-api-key --replication-policy=user-managed --locations=us-central1",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "gcloud storage buckets create gs://payment-api-key --replication=global",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Secret Manager supports `--replication-policy=automatic`, which automatically replicates secret payloads across multiple Google-managed geographical regions for resilience and high availability with zero manual location management.",
    "distractors": {
      "A": "Compute Engine instance creation provisions VMs, not Secret Manager secrets.",
      "B": "Correct. `--replication-policy=automatic` provides managed multi-region secret replication.",
      "C": "`user-managed` with a single region restricts the secret to that single zone/region, failing multi-region redundancy requirements.",
      "D": "Cloud Storage buckets are object stores, not Secret Manager secret objects."
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
        "text": "BigQuery Data Profiler.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Compute Engine Serial Console.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Google Cloud Policy Troubleshooter (in Cloud Console or via gcloud policy-troubleshoot).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "VPC Flow Logs in Cloud Logging.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "C",
    "explanation": "Policy Troubleshooter analyzes IAM policies across the Organization, Folder, Project, and Resource hierarchy, evaluating allow bindings, conditional policies, and IAM Deny policies to explain why a user was granted or denied a specific permission.",
    "distractors": {
      "A": "BigQuery Data Profiler analyzes dataset statistical distributions.",
      "B": "Serial Console is for Linux VM kernel diagnostics.",
      "C": "Correct. Policy Troubleshooter pinpoints the exact IAM policy hierarchy binding granting or denying permissions.",
      "D": "VPC Flow Logs capture network IP packet flows, not IAM permission evaluation graphs."
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
        "text": "A VPC firewall rule blocking port 80.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Cloud DNS TXT records.",
        "isTrap": true,
        "trapType": "legacy_service"
      },
      {
        "letter": "C",
        "text": "Compute Engine instance groups with Spot VMs.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Cloud Armor Bot Management with reCAPTCHA Enterprise assessment token validation in security policy rules.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Armor Bot Management integrates with reCAPTCHA Enterprise. Security policy rules evaluate `token.recaptcha_session.score` at Google's global edge and apply actions (allow, redirect, challenge, deny-403) to block automated fraud.",
    "distractors": {
      "A": "Firewall rules block all TCP traffic, terminating legitimate customer access.",
      "B": "DNS TXT records hold domain verification strings, not edge bot mitigation logic.",
      "C": "Spot VMs are ephemeral compute instances and have no bot detection capabilities.",
      "D": "Correct. Cloud Armor Bot Management + reCAPTCHA Enterprise provides automated risk scoring and edge bot mitigation."
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
        "text": "Grant roles/artifactregistry.writer on the Artifact Registry repository (or at project level).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Grant roles/owner at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Grant roles/artifactregistry.reader at the project level.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Grant roles/artifactregistry.admin at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "`roles/artifactregistry.writer` grants permissions to read and write (push and pull) artifacts and container images (`artifactregistry.repositories.uploadArtifacts`, `artifactregistry.repositories.downloadArtifacts`), without granting repository deletion or IAM administration rights.",
    "distractors": {
      "A": "Correct. `roles/artifactregistry.writer` strictly fulfills push/pull requirements under least privilege.",
      "B": "Project Owner grants full unrestricted control over all GCP resources.",
      "C": "`roles/artifactregistry.reader` is read-only (pull only) and fails image push operations with 403 Forbidden.",
      "D": "`roles/artifactregistry.admin` allows deleting repositories and modifying IAM access control policies."
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
        "text": "Deploy an unmanaged Squid Proxy VM on a public subnet.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Enable Private Google Access on the subnet using gcloud compute networks subnets update private-sub --region=us-central1 --enable-private-ip-google-access.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Create an ingress firewall rule allowing port 80 to 0.0.0.0/0.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Assign public IP addresses to all VM instances.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      }
    ],
    "correct": "B",
    "explanation": "Enabling Private Google Access (`--enable-private-ip-google-access`) on a VPC subnet allows VM instances with only internal private IP addresses to reach the public IP endpoints of Google APIs and services (Cloud Storage, BigQuery, Pub/Sub) directly over Google's internal private fiber backbone.",
    "distractors": {
      "A": "Proxy VMs add latency, cost, and maintenance overhead compared to native Private Google Access.",
      "B": "Correct. `subnets update --enable-private-ip-google-access` allows private VMs to communicate with Google APIs.",
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
        "text": "Create a VPC firewall rule blocking US IP addresses.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "B",
        "text": "Delete all subnets in US regions manually.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'gcp.resourceLocations' with allowedValues set to 'in:europe-locations'.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Revoke Owner roles from all project administrators.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "The `gcp.resourceLocations` Organization Policy constraint restricts the physical geographic locations where resource creation (Compute Engine, GCS, Cloud SQL, BigQuery) is permitted, preventing resource provisioning outside allowed regions (e.g. `in:europe-locations`).",
    "distractors": {
      "A": "Firewall rules control packet transmission, not resource deployment region validation in the GCP control plane.",
      "B": "Deleting subnets does not prevent developers from creating multi-region US buckets or global resources.",
      "C": "Correct. `gcp.resourceLocations` enforces data residency and geographical resource creation boundaries across the organization.",
      "D": "Revoking Owner roles does not establish declarative data residency guardrails for authorized admins."
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
        "text": "Make the secret public for 4 hours.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "B",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.admin'",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Email the secret plaintext in an encrypted email.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "gcloud secrets add-iam-policy-binding stripe-prod-api-key --member='user:oncall@corp.com' --role='roles/secretmanager.secretAccessor' --condition='expression=request.time < timestamp(\"2026-08-20T23:00:00Z\"),title=ExpiringSecretAccess'",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Binding `roles/secretmanager.secretAccessor` with an IAM Condition (`request.time < timestamp(...)`) grants time-limited read access that automatically expires and invalidates at the exact specified cutoff time.",
    "distractors": {
      "A": "Making secrets public exposes payment credentials to the world.",
      "B": "Secret Admin role gives excessive permissions to modify and delete the secret and lacks automatic expiration.",
      "C": "Transmitting secrets via email violates security standards and creates persistent plaintext records.",
      "D": "Correct. `gcloud secrets add-iam-policy-binding` with condition expression enforces time-bound secret access."
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
        "text": "Grant roles/cloudfunctions.invoker (and roles/run.invoker for Gen 2) on the Cloud Function resource.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Grant roles/owner at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Deploy the function with --allow-unauthenticated.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudfunctions.admin at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      }
    ],
    "correct": "A",
    "explanation": "Invoking secured Cloud Functions requires `roles/cloudfunctions.invoker` (and `roles/run.invoker` on the underlying Cloud Run service for 2nd gen functions). The calling service account presents a signed Google OIDC ID token to authenticate and invoke the function.",
    "distractors": {
      "A": "Correct. `roles/cloudfunctions.invoker` / `roles/run.invoker` grants permission to invoke authenticated functions.",
      "B": "Project Owner grants full control over all project resources.",
      "C": "`--allow-unauthenticated` exposes the function to the public internet without authentication.",
      "D": "`roles/cloudfunctions.admin` allows deleting, updating, and deploying function code, violating least privilege."
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
        "text": "Deploy an unmanaged Snort VM in the VPC.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Enable Cloud Armor Adaptive Protection on the security policy using gcloud compute security-policies update my-policy --enable-layer7-ddos-defense.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Create a VPC firewall rule blocking port 80.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "D",
        "text": "Set Cloud Storage bucket retention to 10 years.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor Adaptive Protection leverages machine learning models to detect Layer 7 application DDoS attacks, identify the specific attack signature, and automatically generate recommended mitigation rules with one-click deployment.",
    "distractors": {
      "A": "Self-managed Snort VMs lack Google edge scale, machine learning baseline analytics, and DDoS mitigation capacity.",
      "B": "Correct. `gcloud compute security-policies update --enable-layer7-ddos-defense` enables Cloud Armor Adaptive Protection.",
      "C": "Blocking port 80 cuts off all customer traffic.",
      "D": "Cloud Storage retention governs object immutability, not network DDoS defense."
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
        "text": "Revoke Owner roles from all developers.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Create an ingress firewall rule on port 22.",
        "isTrap": true,
        "trapType": "wrong_storage_class_penalty"
      },
      {
        "letter": "C",
        "text": "Enforce the Organization Policy constraint 'iam.disableServiceAccountKeyCreation' at the Organization or Folder level.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Delete all service accounts across all projects.",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "C",
    "explanation": "The `iam.disableServiceAccountKeyCreation` Organization Policy constraint blocks calls to `CreateServiceAccountKey`, preventing the generation and download of static private key JSON files while allowing keyless Workload Identity Federation and OAuth token impersonation.",
    "distractors": {
      "A": "Revoking Owner roles does not prevent other IAM admins from generating keys unless governed by Org Policy.",
      "B": "Firewall rules control network packets, not IAM control plane API operations.",
      "C": "Correct. `iam.disableServiceAccountKeyCreation` prevents creating static service account JSON keys organization-wide.",
      "D": "Deleting all service accounts breaks active application workloads."
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
        "text": "Grant roles/owner to Key Administrators at the project level.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "B",
        "text": "Store the KMS private key in a shared Cloud Storage bucket.",
        "isTrap": true,
        "trapType": "public_ip_security_risk"
      },
      {
        "letter": "C",
        "text": "Grant primitive roles/editor to both Key Administrators and Application Service Accounts.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "D",
        "text": "Grant roles/cloudkms.admin to Key Administrators (grants management without encrypter/decrypter rights), and grant roles/cloudkms.cryptoKeyEncrypterDecrypter to Application Service Accounts (grants data crypto operations without management rights).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud KMS strictly enforces Separation of Duties by segregating administrative permissions (`roles/cloudkms.admin` manages key rings, rotation schedules, and IAM policies but CANNOT encrypt/decrypt) from cryptographic data plane permissions (`roles/cloudkms.cryptoKeyEncrypterDecrypter` encrypts and decrypts payloads but CANNOT alter key configurations).",
    "distractors": {
      "A": "Project Owner grants unrestricted control over everything in the project.",
      "B": "Cloud KMS symmetric keys cannot be exported or stored as files in Cloud Storage.",
      "C": "Primitive Editor grants both management and crypto permissions to everyone, violating separation of duties.",
      "D": "Correct. `roles/cloudkms.admin` for administrators + `roles/cloudkms.cryptoKeyEncrypterDecrypter` for workloads enforces classic cryptographic separation of duties."
    },
    "gcloudCommand": "gcloud kms keyrings add-iam-policy-binding app-keyring --location=us-central1 --member='group:key-admins@corp.com' --role='roles/cloudkms.admin'",
    "architectureComponents": [
      "Cloud KMS",
      "Cloud IAM"
    ],
    "officialDocUrl": "https://cloud.google.com/kms/docs/separation-of-duties"
  }
];

if (typeof window !== 'undefined') {
  window.GCP_QUESTIONS_ACE = window.GCP_ACE_QUESTIONS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.GCP_ACE_QUESTIONS;
}
