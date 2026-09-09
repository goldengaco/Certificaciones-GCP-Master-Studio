const fs = require('fs');
const path = require('path');

const DOMINIOS_DOC = /^https:\/\/(cloud\.google\.com|ai\.google|sre\.google|firebase\.google\.com|workspace\.google\.com|developers\.google\.com|kubernetes\.io|beam\.apache\.org|agones\.dev|open-match\.dev|protobuf\.dev|developer\.hashicorp\.com|12factor\.net)(\/|$)/;

function letraCorrecta(id, numOpciones) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % numOpciones;
}

const batch1Questions = [
  {
    id: 'ACE-D1-001',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Resource Hierarchy', 'IAM Policies', 'Cloud Asset Inventory'],
    title: 'Auditing Organization IAM Policies Across All Projects',
    scenario: 'You need to generate an inventory report of all IAM policy bindings across 150 projects in your Google Cloud organization. You want to retrieve this metadata efficiently with minimal API rate-limiting issues and without iterating through each project individually with custom scripts. What should you do?',
    options: [
      { letter: 'A', text: 'Run gcloud projects get-iam-policy sequentially across all 150 individual project IDs.' },
      { letter: 'B', text: 'Assign roles/viewer at the organization level and download the IAM console CSV export.' },
      { letter: 'C', text: 'Use Cloud Asset Inventory export to analyze IAM policies across the organization hierarchy.' },
      { letter: 'D', text: 'Query Cloud Logging for recent SetIamPolicy audit log entries across all active folders.' }
    ],
    correct: 'C',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Cloud Asset Inventory provides a centralized inventory service that allows you to export all resource metadata and IAM policies across an entire organization, folder, or project hierarchy in a single operation without making per-resource API calls.',
    distractors: {
      A: 'Executing gcloud projects get-iam-policy per project generates excessive API calls, hits rate limits, and requires custom scripting.',
      B: 'The Cloud Console IAM page does not provide an automated full-hierarchy CSV export across 150 distinct projects.',
      D: 'Cloud Logging audit logs only capture point-in-time modification events and do not provide a complete point-in-time inventory of all effective policies.'
    },
    officialDocUrl: 'https://cloud.google.com/asset-inventory/docs/exporting-to-cloud-storage',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-002',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Service Accounts', 'IAM Roles', 'Impersonation', 'gcloud CLI'],
    title: 'Enforcing Keyless Service Account Impersonation for Developers',
    scenario: 'Your organization security policy prohibits downloading service account private JSON keys to local developer workstations. A developer needs to deploy Cloud Functions using the dedicated service account deployer@project-id.iam.gserviceaccount.com. You want to grant them the necessary permissions to authenticate securely using service account impersonation. Which two actions should you take? (Choose 2.)',
    options: [
      { letter: 'A', text: 'Create and download a service account JSON key file to the developer workstation.' },
      { letter: 'B', text: 'Grant the developer roles/iam.serviceAccountTokenCreator on the service account.' },
      { letter: 'C', text: 'Grant the developer roles/iam.serviceAccountUser at the project resource level.' },
      { letter: 'D', text: 'Configure the developer\'s gcloud CLI using --impersonate-service-account.' },
      { letter: 'E', text: 'Grant the developer roles/iam.workloadIdentityUser on the default GCE account.' }
    ],
    correct: ['B', 'D'],
    isMultiSelect: true,
    expectedSelectCount: 2,
    explanation: 'Service account impersonation allows users to generate short-lived credentials for a service account without downloading long-lived private keys. The user needs the Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) on the target service account and must pass the --impersonate-service-account flag in gcloud (or set it in gcloud config).',
    distractors: {
      A: 'Downloading JSON private key files violates the corporate security policy prohibiting long-lived local keys.',
      C: 'The Service Account User role (roles/iam.serviceAccountUser) allows attaching a service account to resources like Compute Engine, but does not permit generating tokens for CLI impersonation.',
      E: 'Workload Identity User is designed for Kubernetes workloads and external IdPs to assume service accounts, not local gcloud workstation impersonation.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/impersonating-service-accounts',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-003',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.2',
    subsectionName: 'Managing billing configuration',
    conceptos: ['Cloud Billing', 'Budgets and Alerts', 'Cloud Pub/Sub', 'Cloud Functions'],
    title: 'Automating Billing Budget Notifications via Pub/Sub',
    scenario: 'You manage a development Google Cloud project with a monthly budget limit of $2,000. If spending reaches 100% of the budget, you must automatically disable billing or cap resources programmatically to prevent further cloud charges without waiting for manual human email triage. What architecture should you implement?',
    options: [
      { letter: 'A', text: 'Configure a Cloud Billing budget to publish alerts to a Pub/Sub topic triggering Cloud Functions.' },
      { letter: 'B', text: 'Configure an email alert in Cloud Billing with an automated webhook to the Compute Engine API.' },
      { letter: 'C', text: 'Create a Cloud Monitoring metric alert on billing.googleapis.com to stop active instances.' },
      { letter: 'D', text: 'Configure an Organization Policy with a hard financial quota to terminate running resources.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Cloud Billing budgets can be configured to publish programmatic notifications to a Cloud Pub/Sub topic whenever budget thresholds are reached. A Cloud Function subscribed to that Pub/Sub topic can execute automated remediation, such as disabling billing or scaling down instances.',
    distractors: {
      B: 'Cloud Billing email alerts only send notifications to human recipients and cannot directly trigger automated API webhooks without Pub/Sub.',
      C: 'Cloud Monitoring billing metrics are delayed and not designed for immediate programmatic spend capping.',
      D: 'Organization Policies control resource configuration and governance rules, not dynamic real-time financial spend thresholds.'
    },
    officialDocUrl: 'https://cloud.google.com/billing/docs/how-to/notify',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-004',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.2',
    subsectionName: 'Managing billing configuration',
    conceptos: ['Cloud Billing', 'BigQuery', 'Billing Export', 'FinOps'],
    title: 'Configuring Daily Cloud Billing Export to BigQuery for FinOps Analysis',
    scenario: 'Your finance team requires historical daily cost breakdown and resource label attribution across all projects in the organization. You need to configure automated, continuous export of detailed Cloud Billing data to BigQuery for analytical SQL reporting. Which two configuration steps must you complete? (Choose 2.)',
    options: [
      { letter: 'A', text: 'Configure a Cloud Storage transfer job to export monthly billing invoice files.' },
      { letter: 'B', text: 'Create a BigQuery dataset in a dedicated centralized administration project.' },
      { letter: 'C', text: 'Grant the finance analytics team roles/billing.admin on all active projects.' },
      { letter: 'D', text: 'Export Cloud Logging audit logs directly into a multi-region Cloud Spanner DB.' },
      { letter: 'E', text: 'Enable Detailed usage cost export in the Google Cloud Billing export console.' }
    ],
    correct: ['B', 'E'],
    isMultiSelect: true,
    expectedSelectCount: 2,
    explanation: 'To set up continuous Cloud Billing export to BigQuery, you must first create a target BigQuery dataset in a project, and then enable detailed usage cost export in the Cloud Billing console pointing to that dataset. Detailed export includes SKU-level costs and resource labels.',
    distractors: {
      A: 'Cloud Storage transfer jobs for invoice PDFs do not provide raw, queryable granular billing data with resource label attribution.',
      C: 'Granting roles/billing.admin gives excessive management permissions and does not configure automated data export to BigQuery.',
      D: 'Cloud Logging audit logs do not contain the calculated pricing, discounts, and SKU metadata required for FinOps cost analysis.'
    },
    officialDocUrl: 'https://cloud.google.com/billing/docs/how-to/export-data-bigquery',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-005',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['gcloud CLI', 'Named Configurations', 'SDK Management'],
    title: 'Managing Multiple GCP Environments with gcloud Named Configurations',
    scenario: 'You regularly switch between managing resources in a staging project (proj-staging-101) and a production project (proj-prod-202). You need a fast, error-free method to switch your active gcloud account, default project, and compute region in the terminal without re-authenticating every time. What command should you use?',
    options: [
      { letter: 'A', text: 'Run gcloud auth login --update-adc interactively each time you switch between project environments.' },
      { letter: 'B', text: 'Set the CLOUDSDK_CORE_PROJECT shell environment variable manually before running commands.' },
      { letter: 'C', text: 'Create named configurations and switch profiles with gcloud config configurations activate.' },
      { letter: 'D', text: 'Install separate Google Cloud SDK binary directories for each target project environment.' }
    ],
    correct: 'C',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Named configurations in the Google Cloud CLI allow you to define, maintain, and quickly switch between distinct groups of settings (such as authenticated account, active project, compute region, and zone) using gcloud config configurations activate.',
    distractors: {
      A: 'Re-running gcloud auth login requires manual interactive browser authentication each time you switch contexts.',
      B: 'Setting CLOUDSDK_CORE_PROJECT only changes the project, leaving region, zone, and account unchanged.',
      D: 'Maintaining separate binary installations is complex, error-prone, and unnecessary when named configurations exist natively.'
    },
    officialDocUrl: 'https://cloud.google.com/sdk/gcloud/reference/config/configurations',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-006',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['gcloud CLI', 'SDK Configuration', 'Compute Engine Defaults'],
    title: 'Setting Default Region and Zone Properties in gcloud SDK',
    scenario: 'You are provisioning multiple Compute Engine VMs in us-central1-a using the gcloud CLI. To streamline operations and avoid typing the --zone and --region flags on every single command, you want to set persistent default compute properties for your active CLI profile. Which command should you execute?',
    options: [
      { letter: 'A', text: 'Run gcloud compute zones set-default us-central1-a --region=us-central1 in the shell.' },
      { letter: 'B', text: 'Define DEFAULT_ZONE=us-central1-a in the /etc/gcloud/properties configuration file.' },
      { letter: 'C', text: 'Run gcloud projects add-metadata --metadata=default-zone=us-central1-a on the project.' },
      { letter: 'D', text: 'Run gcloud config set compute/zone us-central1-a in your active configuration profile.' }
    ],
    correct: 'D',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The gcloud config set command modifies the active configuration profile properties. Setting compute/zone and compute/region provides default values for all compute commands without requiring explicit CLI flags.',
    distractors: {
      A: 'The command gcloud compute zones set-default is not a valid gcloud command syntax.',
      B: 'Setting variables in /etc/gcloud/properties is non-standard and does not update user-level named CLI configurations.',
      C: 'Project metadata sets instance-level metadata attributes inside the project, not local CLI client default properties.'
    },
    officialDocUrl: 'https://cloud.google.com/compute/docs/regions-zones/changing-default-zone-region',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-007',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Cloud Storage', 'Uniform Bucket-Level Access', 'IAM Security'],
    title: 'Enforcing Uniform Bucket-Level Access for Simplified Object Permissions',
    scenario: 'Your organization\'s security policy requires standardizing Cloud Storage permissions so that object access is managed exclusively via IAM policies rather than individual object Access Control Lists (ACLs). You must enforce this on an existing bucket gs://corp-financial-records. What should you do?',
    options: [
      { letter: 'A', text: 'Enable uniform bucket-level access on the Cloud Storage bucket using gcloud storage.' },
      { letter: 'B', text: 'Set default object ACLs to private and remove all individual user ACL assignments.' },
      { letter: 'C', text: 'Configure an Object Lifecycle Management rule to expire object-level ACLs daily.' },
      { letter: 'D', text: 'Create a Customer-Managed Encryption Key (CMEK) to enforce KMS decrypt permissions.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Enabling uniform bucket-level access disables object-level ACLs across the entire bucket, ensuring that access to all objects is controlled solely through IAM roles and permissions.',
    distractors: {
      B: 'Setting default ACLs to private still permits object-level ACL modifications and does not disable ACLs uniformly.',
      C: 'Object Lifecycle Management manages object retention, transition, and deletion, not IAM or ACL security policies.',
      D: 'CMEK encrypts object data with customer-managed keys but does not disable Cloud Storage object ACL evaluation.'
    },
    officialDocUrl: 'https://cloud.google.com/storage/docs/uniform-bucket-level-access',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-008',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['VPC Networks', 'Subnets', 'CIDR Expansion', 'Compute Engine'],
    title: 'Expanding Subnet CIDR Range in a Custom Mode VPC Network',
    scenario: 'A custom mode subnet in us-east4 has the IP range 10.10.0.0/24 (256 addresses) and is running out of available IP addresses due to rapid VM growth. You need to expand the primary IP range to accommodate at least 500 VMs with zero downtime and without re-creating existing instances. What should you do?',
    options: [
      { letter: 'A', text: 'Delete the existing subnet and recreate it with 10.10.0.0/22 in the same region.' },
      { letter: 'B', text: 'Run gcloud compute networks subnets expand-ip-range with prefix 10.10.0.0/23.' },
      { letter: 'C', text: 'Run gcloud compute networks subnets update to shrink the prefix to 10.10.0.0/25.' },
      { letter: 'D', text: 'Add an alias secondary IP range of 10.20.0.0/24 to serve as the primary network.' }
    ],
    correct: 'B',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The command gcloud compute networks subnets expand-ip-range allows increasing the size of an existing subnet IP range (e.g. from /24 to /23) without recreating the subnet, affecting running instances, or causing network downtime.',
    distractors: {
      A: 'You cannot delete a subnet while active Compute Engine instances are attached to it without causing downtime.',
      C: 'VPC subnets cannot be shrunk in Google Cloud, and /25 provides fewer IP addresses (128) rather than expanding capacity.',
      D: 'Secondary IP ranges are used for alias IPs or GKE Pods/Services, not for the primary VM network interface range.'
    },
    officialDocUrl: 'https://cloud.google.com/vpc/docs/use-vpc#expand-subnet',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-009',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['VPC Networks', 'GKE', 'Secondary IP Ranges', 'VPC-native'],
    title: 'Configuring Secondary IP Ranges for GKE Pods and Services',
    scenario: 'You are preparing a custom VPC subnet 10.0.0.0/20 in europe-west1 to host a VPC-native Google Kubernetes Engine (GKE) cluster. The cluster requires dedicated, non-overlapping IP address ranges allocated for Kubernetes Pods and Services. How should you configure the subnet before deploying the cluster?',
    options: [
      { letter: 'A', text: 'Create two separate VPC networks and connect them using VPC Network Peering.' },
      { letter: 'B', text: 'Expand the primary subnet CIDR range from 10.0.0.0/20 to 10.0.0.0/16 directly.' },
      { letter: 'C', text: 'Add two secondary IP ranges to the subnet designated for Pods and Services.' },
      { letter: 'D', text: 'Configure Cloud NAT on the subnet to dynamically translate internal Pod IPs.' }
    ],
    correct: 'C',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'VPC-native GKE clusters use secondary IP ranges on the subnet for Kubernetes Pods and Services (via Alias IP ranges), allowing Pods to be first-class citizens on the VPC network without overlay encapsulation.',
    distractors: {
      A: 'GKE VPC-native clusters allocate Pod and Service addresses from secondary ranges within the same subnet, not across peered VPCs.',
      B: 'Expanding the primary range expands node IP capacity, but VPC-native GKE explicitly requires secondary IP ranges for Pods and Services.',
      D: 'Cloud NAT translates internal private IPs to public IPs for outbound internet access, not internal cluster Pod and Service routing.'
    },
    officialDocUrl: 'https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-010',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Resource Manager', 'Folders', 'Hierarchy', 'Governance'],
    title: 'Structuring Resource Manager Folder Hierarchy for Multi-Environment Governance',
    scenario: 'An enterprise is organizing 80 Google Cloud projects across Development, Staging, and Production environments for three distinct business units. They need to enforce different IAM access controls and Organization Policies per environment while allowing policy inheritance from the organization root. How should they structure the Resource Manager hierarchy?',
    options: [
      { letter: 'A', text: 'Create folders for business units, nest environment folders, and place projects inside.' },
      { letter: 'B', text: 'Place all projects in a flat organization root and assign IAM policies project by project.' },
      { letter: 'C', text: 'Create separate Google Cloud organization nodes for each business unit and environment.' },
      { letter: 'D', text: 'Use Cloud Billing sub-accounts to control IAM inheritance and Organization Policies.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Using nested folders under the Organization node allows delegating administration and applying IAM policies and Organization Policies hierarchically across business units and environment tiers (dev, stage, prod) with full inheritance.',
    distractors: {
      B: 'A flat structure eliminates policy inheritance, requiring high-maintenance per-project policy configuration across 80 projects.',
      C: 'Creating separate organizations fragments billing, centralized IAM administration, and Cloud Identity directory integration.',
      D: 'Cloud Billing sub-accounts are used for cost management and invoice routing, not resource access control or Organization Policies.'
    },
    officialDocUrl: 'https://cloud.google.com/resource-manager/docs/creating-managing-folders',
    difficulty: 'medium',
    blockId: 'BLOCK-1'
  },
  {
    id: 'ACE-D1-011',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['IAM', 'Predefined Roles', 'Least Privilege', 'Compute Engine'],
    title: 'Transitioning from Primitive Roles to Predefined IAM Roles',
    scenario: 'A junior developer currently has the primitive Editor role on a production project. Security audit findings mandate adhering strictly to the principle of least privilege. The developer only needs to view project settings and manage Compute Engine instances (create, start, stop, delete), without modifying firewall rules or Cloud Storage buckets. Which IAM role should you grant?',
    options: [
      { letter: 'A', text: 'Grant roles/compute.admin and roles/owner on the production project.' },
      { letter: 'B', text: 'Grant roles/compute.networkAdmin and roles/storage.admin on the project.' },
      { letter: 'C', text: 'Maintain roles/editor and apply an IAM Deny rule for Cloud Storage buckets.' },
      { letter: 'D', text: 'Grant roles/compute.instanceAdmin.v1 and roles/viewer on the project.' }
    ],
    correct: 'D',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The Compute Instance Admin (v1) role (roles/compute.instanceAdmin.v1) provides full control over Compute Engine instances without granting rights to modify VPC firewalls or network configurations. Pairing it with Viewer allows viewing overall project resources.',
    distractors: {
      A: 'roles/owner is a primitive role with full control over all resources, and roles/compute.admin allows modifying firewall rules and networks.',
      B: 'roles/compute.networkAdmin and roles/storage.admin grant network and storage management, but not VM instance creation/deletion.',
      C: 'Keeping the primitive Editor role violates least privilege principles and still grants broad modify permissions across other services.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/understanding-roles#compute-engine-roles',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-012',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Service Accounts', 'IAM Roles', 'Compute Engine', 'Least Privilege'],
    title: 'Granting Service Account User Role on Specific Service Accounts',
    scenario: 'A software engineer needs to deploy Compute Engine VM instances in project proj-backend and attach a dedicated service account api-sa@proj-backend.iam.gserviceaccount.com to those instances. In accordance with least privilege, the engineer must not be able to use or manage any other service accounts in the project. Which two IAM roles should you grant to the engineer? (Choose 2.)',
    options: [
      { letter: 'A', text: 'Grant roles/iam.serviceAccountUser on the target service account resource.' },
      { letter: 'B', text: 'Grant roles/iam.serviceAccountUser at the target project resource level.' },
      { letter: 'C', text: 'Grant roles/iam.serviceAccountAdmin on the target service account resource.' },
      { letter: 'D', text: 'Grant roles/compute.instanceAdmin.v1 at the target project resource level.' },
      { letter: 'E', text: 'Grant roles/compute.admin and roles/iam.securityAdmin at the project level.' }
    ],
    correct: ['A', 'D'],
    isMultiSelect: true,
    expectedSelectCount: 2,
    explanation: 'To attach a specific service account to a VM instance, the user needs roles/compute.instanceAdmin.v1 at the project level to create VMs, and roles/iam.serviceAccountUser granted directly on the target service account resource (rather than at the project level).',
    distractors: {
      B: 'Granting Service Account User at the project level permits using all service accounts in the project, violating least privilege.',
      C: 'roles/iam.serviceAccountAdmin allows deleting and modifying the service account itself, which is not required to attach it to VMs.',
      E: 'roles/compute.admin and roles/iam.securityAdmin provide excessive administrative power over networking and IAM security policies.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/service-account-permissions#user-role',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-013',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Organization Policy', 'Compute Engine', 'External IP Restriction', 'Security'],
    title: 'Restricting VM External IP Addresses via Organization Policies',
    scenario: 'Your organization requires that no Compute Engine virtual machine instances in the dev-folder folder are assigned public external IP addresses, preventing unauthorized public internet exposure. You need to enforce this guardrail centrally across all current and future projects in that folder. What should you do?',
    options: [
      { letter: 'A', text: 'Create a VPC firewall rule with priority 1 blocking all traffic to 0.0.0.0/0.' },
      { letter: 'B', text: 'Set the compute.vmExternalIpAccess organization policy constraint on the folder.' },
      { letter: 'C', text: 'Remove roles/compute.networkAdmin from all user accounts across the folder.' },
      { letter: 'D', text: 'Deploy a Cloud Function to automatically terminate any VM launched with a public IP.' }
    ],
    correct: 'B',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The Organization Policy constraint compute.vmExternalIpAccess defines whether VM instances can have external IP addresses. Applying this constraint with Deny All at the folder level ensures that no current or future VM in any project in that folder can receive an external IP.',
    distractors: {
      A: 'VPC firewall rules filter traffic packets but do not prevent instances from being provisioned with external public IP addresses.',
      C: 'Users with instance admin roles can still launch VMs with external IPs even without the networkAdmin role.',
      D: 'A reactive Cloud Function introduces operational latency and does not proactively block VM creation at the API level.'
    },
    officialDocUrl: 'https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#restrict_external_ip',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-014',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Organization Policy', 'Resource Location', 'Data Sovereignty', 'Compliance'],
    title: 'Enforcing Data Sovereignty with Resource Location Constraint',
    scenario: 'Strict data residency regulations mandate that all cloud storage and compute services across your organization must be provisioned exclusively within European Union boundaries (europe-west1 and europe-west3). You need to prevent developers from provisioning resources in any non-EU regions. What should you configure?',
    options: [
      { letter: 'A', text: 'Configure the gcp.resourceLocations organization policy constraint for EU regions.' },
      { letter: 'B', text: 'Delete all non-EU Google Cloud region configurations via the Resource Manager API.' },
      { letter: 'C', text: 'Assign IAM conditions checking request.location.region.startsWith(\'europe-\') globally.' },
      { letter: 'D', text: 'Create Cloud Monitoring alert policies to notify admins when non-EU VMs are launched.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The gcp.resourceLocations organization policy constraint restricts the set of Google Cloud locations (regions and multi-regions) in which location-based resources can be created, enforcing compliance and data sovereignty at provisioning time.',
    distractors: {
      B: 'Google Cloud regions are managed by Google infrastructure and cannot be deleted or disabled via API.',
      C: 'IAM conditions do not evaluate the physical geographic deployment region of provisioned backend resources.',
      D: 'Cloud Monitoring alerts are reactive notifications and do not enforce preventative compliance at provisioning time.'
    },
    officialDocUrl: 'https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-015',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.2',
    subsectionName: 'Managing billing configuration',
    conceptos: ['Cloud Billing', 'IAM Roles', 'Billing Account User', 'Project Creation'],
    title: 'Assigning Billing Account User Role to Project Creators',
    scenario: 'Developers in your engineering department have permission to create new Google Cloud projects. When creating a project, they must link it to the corporate Cloud Billing account 01A2B3-45C6D7-89E0F1. However, they must not be allowed to view spending across other projects or modify billing terms. Which role should you assign?',
    options: [
      { letter: 'A', text: 'Grant roles/billing.admin on the corporate Cloud Billing account.' },
      { letter: 'B', text: 'Grant roles/billing.viewer on the corporate Cloud Billing account.' },
      { letter: 'C', text: 'Grant roles/resourcemanager.projectCreator on the billing account.' },
      { letter: 'D', text: 'Grant roles/billing.user on the corporate Cloud Billing account.' }
    ],
    correct: 'D',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The Billing Account User role (roles/billing.user) allows users to link projects to a Cloud Billing account without granting permissions to view spend across other projects, modify payment instruments, or manage billing account administrators.',
    distractors: {
      A: 'roles/billing.admin grants full administrative control over payment methods, billing accounts, and org-wide spend.',
      B: 'roles/billing.viewer allows viewing all cost details across all linked projects in the billing account, but does not allow linking projects.',
      C: 'roles/resourcemanager.projectCreator applies to organizations and folders, not Cloud Billing accounts.'
    },
    officialDocUrl: 'https://cloud.google.com/billing/docs/how-to/billing-access',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-016',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['gcloud CLI', 'Application Default Credentials', 'Authentication', 'SDK'],
    title: 'Authenticating Local Development Workstation for Google Cloud Client Libraries',
    scenario: 'A software developer is testing a Python application locally on their workstation. The application uses the official Google Cloud Storage client library to access buckets in proj-data-dev. What is the recommended, secure command to authenticate their local environment without creating or downloading service account keys?',
    options: [
      { letter: 'A', text: 'Run gcloud auth login and set GOOGLE_APPLICATION_CREDENTIALS to the raw token string.' },
      { letter: 'B', text: 'Generate a service account key and export GOOGLE_APPLICATION_CREDENTIALS in the shell.' },
      { letter: 'C', text: 'Run gcloud auth application-default login to generate local default credentials.' },
      { letter: 'D', text: 'Run gcloud config set auth/disable_ssl_validation true in your active CLI profile.' }
    ],
    correct: 'C',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Running gcloud auth application-default login obtains user access credentials via a web flow and writes them to a well-known local path for Application Default Credentials (ADC), allowing client libraries to authenticate without managing service account keys.',
    distractors: {
      A: 'GOOGLE_APPLICATION_CREDENTIALS must point to a file path, not an access token string, and tokens expire after one hour.',
      B: 'Downloading service account keys creates long-lived secret management overhead and security risks.',
      D: 'Disabling SSL validation is a critical security vulnerability and does not establish Google Cloud API authentication.'
    },
    officialDocUrl: 'https://cloud.google.com/docs/authentication/provide-credentials-adc',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-017',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Cloud Storage', 'Storage Classes', 'Dual-Region', 'gcloud storage'],
    title: 'Creating a Cloud Storage Bucket with Archive Class and Dual-Region Redundancy',
    scenario: 'A healthcare regulatory compliance mandate requires creating a Cloud Storage bucket for long-term clinical data retention. Data will be retained for 7 years, accessed less than once a year, and must be geo-redundantly protected across two specific regions (us-central1 and us-east1). Which gcloud command should you execute?',
    options: [
      { letter: 'A', text: 'gcloud storage buckets create gs://med-archive --location=US --default-storage-class=COLDLINE' },
      { letter: 'B', text: 'gcloud storage buckets create gs://med-archive --location=us-central1,us-east1 --default-storage-class=ARCHIVE' },
      { letter: 'C', text: 'gcloud storage buckets create gs://med-archive --location=us-central1 --default-storage-class=ARCHIVE' },
      { letter: 'D', text: 'gcloud storage buckets create gs://med-archive --location=global --default-storage-class=NEARLINE' }
    ],
    correct: 'B',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The gcloud storage buckets create command accepts predefined or custom dual-region pairs (e.g. location=us-central1,us-east1) and sets the default storage class to ARCHIVE, which is optimized for data accessed less than once a year.',
    distractors: {
      A: 'Location US is a multi-region spanning all US data centers rather than specific dual-region redundancy, and COLDLINE has higher storage costs than ARCHIVE.',
      C: 'Specifying a single region location=us-central1 does not provide dual-region geo-redundancy across us-east1.',
      D: 'Location global is not a valid Cloud Storage bucket location, and NEARLINE is designed for monthly access.'
    },
    officialDocUrl: 'https://cloud.google.com/storage/docs/creating-buckets',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-018',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['VPC Networks', 'Auto Mode', 'Custom Mode', 'Subnets'],
    title: 'Converting Auto Mode VPC Network to Custom Mode for Production Best Practices',
    scenario: 'A development environment project was created with an Auto Mode VPC network. Enterprise networking guidelines require all VPC networks connected to on-premises via Cloud VPN or Interconnect to operate in Custom Mode to avoid IP subnet conflicts. How should you convert this VPC network to Custom Mode with zero downtime?',
    options: [
      { letter: 'A', text: 'Run gcloud compute networks switch-mode default --mode=custom to convert the network.' },
      { letter: 'B', text: 'Delete the default VPC network and create a new custom VPC network with custom subnets.' },
      { letter: 'C', text: 'Create a new custom VPC network and configure VPC Network Peering to the default VPC.' },
      { letter: 'D', text: 'Run gcloud compute networks subnets update on each regional subnet to modify its mode.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'An Auto Mode VPC network can be converted to Custom Mode using the command gcloud compute networks switch-mode <NETWORK_NAME> --mode=custom. This conversion is permanent, preserves all existing subnets and running VM instances, and involves zero downtime.',
    distractors: {
      B: 'Deleting the default VPC network requires terminating all active resources and causes substantial downtime.',
      C: 'Peering does not convert the auto mode VPC, and its predefined CIDR ranges still create potential IP overlap issues.',
      D: 'VPC network mode is a network-level configuration property, not a per-subnet setting.'
    },
    officialDocUrl: 'https://cloud.google.com/vpc/docs/use-vpc#switch-mode',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-019',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Shared VPC', 'Host Project', 'Service Project', 'VPC Networking'],
    title: 'Configuring Shared VPC Host and Service Projects',
    scenario: 'You are implementing a centralized Shared VPC topology. The network engineering team manages all VPC subnets in project net-host-prod, while the application team provisions Compute Engine instances in project app-service-prod. Which two configuration steps are required to establish this architecture? (Choose 2.)',
    options: [
      { letter: 'A', text: 'Configure VPC Network Peering between VPC networks in both projects.' },
      { letter: 'B', text: 'Enable project net-host-prod as a centralized Shared VPC host project.' },
      { letter: 'C', text: 'Establish an IPsec Cloud VPN tunnel between subnets in both projects.' },
      { letter: 'D', text: 'Attach project app-service-prod as a service project to net-host-prod.' },
      { letter: 'E', text: 'Grant the roles/owner role on net-host-prod to the application team.' }
    ],
    correct: ['B', 'D'],
    isMultiSelect: true,
    expectedSelectCount: 2,
    explanation: 'Configuring Shared VPC requires two primary steps: (1) Enabling the centralized project (net-host-prod) as a Shared VPC host project, and (2) Associating the service project (app-service-prod) with that host project so instances can attach to the host subnets.',
    distractors: {
      A: 'VPC Peering connects independent VPC networks but does not configure centralized Shared VPC host/service project relationships.',
      C: 'IPsec Cloud VPN tunnels are used for encrypted inter-network or hybrid connections, not Shared VPC attachment.',
      E: 'Granting roles/owner to application developers grants total project control and violates centralized security governance.'
    },
    officialDocUrl: 'https://cloud.google.com/vpc/docs/shared-vpc',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-020',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['IAM', 'Custom Roles', 'Least Privilege', 'Compute Engine'],
    title: 'Creating a Custom IAM Role from Predefined Role Definition',
    scenario: 'Your security team requires a custom IAM role for tier-1 support technicians. The role must permit starting, stopping, and resetting Compute Engine instances, but must strictly prohibit creating new instances, deleting existing instances, or modifying instance metadata. No predefined role matches these exact requirements. How should you create this role?',
    options: [
      { letter: 'A', text: 'Assign roles/compute.instanceAdmin.v1 and use Cloud Armor to block delete API calls.' },
      { letter: 'B', text: 'Assign roles/viewer and grant temporary local root sudo privileges on the guest VMs.' },
      { letter: 'C', text: 'Grant roles/compute.admin combined with an IAM Condition restricting business hours.' },
      { letter: 'D', text: 'Create a custom IAM role at the project level containing only the required permissions.' }
    ],
    correct: 'D',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'When no predefined role satisfies the principle of least privilege for a specific workload or team, you create a custom IAM role containing only the exact permissions needed (e.g. compute.instances.start, compute.instances.stop, compute.instances.reset).',
    distractors: {
      A: 'Cloud Armor filters incoming HTTP traffic to load balancers, not Google Cloud management API calls.',
      B: 'roles/viewer does not permit starting or stopping VMs via the Cloud Console, and guest OS access does not grant cloud API control.',
      C: 'roles/compute.admin with time conditions still allows full VM creation and deletion during allowed hours.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/creating-custom-roles',
    difficulty: 'medium',
    blockId: 'BLOCK-2'
  },
  {
    id: 'ACE-D1-021',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Service Accounts', 'IAM Roles', 'Token Creator', 'Cloud Build'],
    title: 'Delegating Short-Lived Token Generation with Service Account Token Creator',
    scenario: 'A CI/CD deployment pipeline in Cloud Build needs to generate short-lived signed JWT tokens using a dedicated service account jwt-signer@corp.iam.gserviceaccount.com. In accordance with Google Cloud security best practices, no long-lived private key files should be generated or stored. How should you configure authorization?',
    options: [
      { letter: 'A', text: 'Grant roles/iam.serviceAccountTokenCreator to Cloud Build on the target service account.' },
      { letter: 'B', text: 'Generate a service account JSON key file and store it encrypted inside Secret Manager.' },
      { letter: 'C', text: 'Grant roles/iam.serviceAccountUser and roles/owner to Cloud Build at the project level.' },
      { letter: 'D', text: 'Configure Workload Identity Federation between Cloud Build and Google Workspace domains.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) allows principals to generate short-lived OAuth 2.0 access tokens, OpenID Connect (OIDC) ID tokens, and sign JWT assertions without managing long-lived private JSON keys.',
    distractors: {
      B: 'Exporting JSON keys creates long-lived credentials that must be managed, rotated, and secured, violating keyless best practices.',
      C: 'roles/owner is overly broad, and Service Account User allows attaching service accounts to resources, not signing tokens.',
      D: 'Workload Identity Federation connects external identity providers (AWS, Azure, GitHub) rather than internal Cloud Build service accounts.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/service-account-overview#token-creator-role',
    difficulty: 'medium',
    blockId: 'BLOCK-3'
  },
  {
    id: 'ACE-D1-022',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['Cloud Identity', 'Directory Sync', 'Active Directory', 'GCDS'],
    title: 'Synchronizing On-Premises Active Directory Users with Google Cloud Directory Sync',
    scenario: 'An enterprise maintains 4,000 employee identities in on-premises Microsoft Active Directory. As part of their Google Cloud adoption, they need to synchronize users and security groups to Cloud Identity in an automated, one-way fashion without synchronizing or exposing Active Directory password hashes to Google Cloud. Which tool should they deploy?',
    options: [
      { letter: 'A', text: 'Deploy Azure AD Connect with password hash synchronization to Google Cloud.' },
      { letter: 'B', text: 'Deploy Google Cloud Directory Sync (GCDS) in the on-premises environment.' },
      { letter: 'C', text: 'Configure Anthos Config Management to mirror on-premises LDAP directories.' },
      { letter: 'D', text: 'Create individual Cloud Identity accounts using the Admin Console CSV upload.' }
    ],
    correct: 'B',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Google Cloud Directory Sync (GCDS) is an on-premises tool that synchronizes users, groups, and non-password metadata from Microsoft Active Directory or LDAP directories to Cloud Identity in a one-way, automated fashion without transmitting passwords.',
    distractors: {
      A: 'Azure AD Connect is used to synchronize with Microsoft Entra ID (Azure AD), not directly to Google Cloud Identity.',
      C: 'Anthos Config Management manages Kubernetes cluster policies via Git repositories, not enterprise LDAP identity synchronization.',
      D: 'Admin Console CSV upload is a one-time manual process that does not automate ongoing employee onboarding and offboarding.'
    },
    officialDocUrl: 'https://cloud.google.com/architecture/identity/syncing-active-directory-to-cloud-identity',
    difficulty: 'medium',
    blockId: 'BLOCK-3'
  },
  {
    id: 'ACE-D1-023',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.2',
    subsectionName: 'Managing billing configuration',
    conceptos: ['gcloud CLI', 'Resource Manager', 'Cloud Billing', 'Project Creation'],
    title: 'Creating a Project and Linking to Billing Account via CLI',
    scenario: 'You are developing an infrastructure automation script using the gcloud CLI. The script must create a new project analytics-prod-99, place it under folder ID 1234567890, and associate it with billing account 01A2B3-45C6D7-89E0F1. Which sequence of commands should your script execute?',
    options: [
      { letter: 'A', text: 'Run gcloud compute projects create analytics-prod-99 --folder=1234567890 --billing-account=01A2B3-45C6D7-89E0F1.' },
      { letter: 'B', text: 'Run gcloud organizations create-project analytics-prod-99 --folder=1234567890 --billing=01A2B3-45C6D7-89E0F1.' },
      { letter: 'C', text: 'Run gcloud projects create analytics-prod-99 --folder=1234567890 then gcloud billing projects link analytics-prod-99.' },
      { letter: 'D', text: 'Run gcloud resource-manager folders add-project 1234567890 --project=analytics-prod-99 --billing-account=01A2B3-45C6D7.' }
    ],
    correct: 'C',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'Projects are created with gcloud projects create <PROJECT_ID> --folder=<FOLDER_ID>. Once created, the project is linked to the billing account using gcloud billing projects link <PROJECT_ID> --billing-account=<ACCOUNT_ID>.',
    distractors: {
      A: 'gcloud compute projects create is not a valid command for creating Google Cloud projects.',
      B: 'The gcloud organizations group does not provide a create-project command.',
      D: 'gcloud resource-manager folders add-project is invalid syntax; project creation and placement are handled under gcloud projects create.'
    },
    officialDocUrl: 'https://cloud.google.com/sdk/gcloud/reference/billing/projects/link',
    difficulty: 'medium',
    blockId: 'BLOCK-3'
  },
  {
    id: 'ACE-D1-024',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['IAM', 'IAM Conditions', 'Cloud SQL', 'Temporary Access'],
    title: 'Applying IAM Conditions for Time-Bound Temporary Contractor Access',
    scenario: 'An external consultant is hired to perform database maintenance on project finance-prod. The maintenance window starts immediately and ends on September 30, 2026 at 23:59:59 UTC. You must grant them roles/cloudsql.admin such that access expires automatically at the deadline without requiring manual administrator intervention. What should you do?',
    options: [
      { letter: 'A', text: 'Generate a service account JSON key file configured with an expiration header timestamp.' },
      { letter: 'B', text: 'Assign the role on the project and configure a Cloud Scheduler job to revoke permissions.' },
      { letter: 'C', text: 'Grant roles/cloudsql.client on the project combined with a Cloud Armor access filter.' },
      { letter: 'D', text: 'Grant roles/cloudsql.admin with an IAM Condition checking request.time < timestamp(\'2026-09-30T23:59:59Z\').' }
    ],
    correct: 'D',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'IAM Conditions allow attaching attribute-based conditional expressions to role bindings. Using request.time < timestamp("2026-09-30T23:59:59Z") grants temporary access that automatically and immediately expires at the specified timestamp without administrative action.',
    distractors: {
      A: 'Service account JSON key files do not support embedded expiration dates to automatically invalidate themselves.',
      B: 'Cloud Scheduler jobs introduce custom operational complexity and potential failure points compared to native declarative IAM Conditions.',
      C: 'roles/cloudsql.client does not grant database admin privileges, and Cloud Armor filters web requests rather than Google Cloud IAM APIs.'
    },
    officialDocUrl: 'https://cloud.google.com/iam/docs/conditions-overview',
    difficulty: 'medium',
    blockId: 'BLOCK-3'
  },
  {
    id: 'ACE-D1-025',
    certId: 'ace',
    domainId: 'ACE-D1',
    sectionId: 'ACE-1',
    sectionName: 'Setting up a cloud solution environment',
    subsectionId: 'ACE-1.1',
    subsectionName: 'Setting up cloud projects and accounts',
    conceptos: ['gcloud CLI', 'Components', 'GKE', 'kubectl'],
    title: 'Updating and Installing gcloud CLI Additional Components',
    scenario: 'You installed the Google Cloud CLI on a Linux workstation to administer Google Kubernetes Engine (GKE) clusters. You need to install kubectl and the required gke-gcloud-auth-plugin component using the native CLI package manager to begin managing clusters. Which command should you execute?',
    options: [
      { letter: 'A', text: 'Run gcloud components install kubectl gke-gcloud-auth-plugin in the shell.' },
      { letter: 'B', text: 'Run gcloud config set components/enable kubectl gke-gcloud-auth-plugin.' },
      { letter: 'C', text: 'Run gcloud compute instances add-metadata --metadata=components=kubectl.' },
      { letter: 'D', text: 'Run gcloud alpha kubernetes install-plugins --all-components in the shell.' }
    ],
    correct: 'A',
    isMultiSelect: false,
    expectedSelectCount: 1,
    explanation: 'The command gcloud components install installs additional Google Cloud CLI components (such as kubectl and gke-gcloud-auth-plugin) that are not included in the default installation bundle.',
    distractors: {
      B: 'gcloud config set is used to modify local CLI configuration settings, not to install or update binary components.',
      C: 'compute instances add-metadata applies metadata attributes to Compute Engine VM instances, not the local client machine.',
      D: 'gcloud alpha kubernetes install-plugins is not a valid gcloud command group or syntax.'
    },
    officialDocUrl: 'https://cloud.google.com/sdk/docs/components',
    difficulty: 'medium',
    blockId: 'BLOCK-3'
  }
];

// Validation checks
console.log('=== VALIDATING BATCH 1 REWRITE ===');
let errors = 0;

if (batch1Questions.length !== 25) {
  console.error(`ERROR: Expected 25 questions, got ${batch1Questions.length}`);
  errors++;
}

const multiCount = batch1Questions.filter(q => q.isMultiSelect).length;
console.log(`Multi-select count: ${multiCount}/25 (${(multiCount/25*100).toFixed(1)}%)`);
if (multiCount !== 4) {
  console.error(`ERROR: Expected exactly 4 multi-select questions, got ${multiCount}`);
  errors++;
}

batch1Questions.forEach((q, idx) => {
  const letters = q.options.map(o => o.letter);
  const lens = q.options.map(o => o.text.length);
  const maxLen = Math.max(...lens);
  const minLen = Math.min(...lens);
  const diffPct = (maxLen - minLen) / maxLen;

  if (diffPct > 0.25) {
    console.error(`[${q.id}] Option length diff exceeds 25%: min=${minLen}, max=${maxLen}, diff=${(diffPct*100).toFixed(1)}%`);
    errors++;
  }

  // Check multi-select consistency
  if (q.isMultiSelect) {
    if (q.options.length !== 5) {
      console.error(`[${q.id}] Multi-select must have 5 options, got ${q.options.length}`);
      errors++;
    }
    if (!Array.isArray(q.correct) || q.correct.length !== q.expectedSelectCount) {
      console.error(`[${q.id}] Multi-select correct array length mismatch`);
      errors++;
    }
    if (!q.scenario.includes('Choose 2') && !q.scenario.includes('Choose 3')) {
      console.error(`[${q.id}] Multi-select scenario must include '(Choose 2.)' or '(Choose 3.)'`);
      errors++;
    }
  } else {
    if (q.options.length !== 4) {
      console.error(`[${q.id}] Single-select must have 4 options, got ${q.options.length}`);
      errors++;
    }
    const hash = letraCorrecta(q.id, 4);
    const expectedLetter = ['A','B','C','D'][hash];
    if (q.correct !== expectedLetter) {
      console.error(`[${q.id}] Single-select correct letter mismatch: hash=${expectedLetter}, got=${q.correct}`);
      errors++;
    }
  }

  // Check schema fields
  if (!q.sectionId || !q.subsectionId || !q.sectionName || !q.subsectionName || !Array.isArray(q.conceptos) || !q.conceptos.length) {
    console.error(`[${q.id}] Missing taxonomy schema fields`);
    errors++;
  }
  if (q.isTrap !== undefined || q.trapType !== undefined) {
    console.error(`[${q.id}] Deprecated trap fields present`);
    errors++;
  }

  // Check officialDocUrl
  if (!DOMINIOS_DOC.test(q.officialDocUrl)) {
    console.error(`[${q.id}] Invalid officialDocUrl: ${q.officialDocUrl}`);
    errors++;
  }

  // Check distractors object
  const correctLetters = Array.isArray(q.correct) ? q.correct : [q.correct];
  const incorrectLetters = letters.filter(l => !correctLetters.includes(l));
  incorrectLetters.forEach(l => {
    if (!q.distractors[l]) {
      console.error(`[${q.id}] Missing distractor explanation for option ${l}`);
      errors++;
    }
  });
  correctLetters.forEach(l => {
    if (q.distractors[l]) {
      console.error(`[${q.id}] Distractors object must not contain correct letter ${l}`);
      errors++;
    }
  });

  // Check word count of scenario
  const wordCount = q.scenario.trim().split(/\s+/).length;
  if (wordCount < 35 || wordCount > 95) {
    console.warn(`[${q.id}] Scenario word count is ${wordCount} (expected 40-90)`);
  }
});

console.log(`Validation finished with ${errors} errors.`);

if (errors === 0) {
  const outputPath = path.resolve(__dirname, 'draft_batch1.json');
  fs.writeFileSync(outputPath, JSON.stringify(batch1Questions, null, 2));
  console.log(`SUCCESS: Saved 25 verified questions to ${outputPath}`);
}
