/**
 * Google Cloud Certification Training Platform (Master Edition)
 * Authoritative PCA Case Studies Database (Verified 2026-08-26)
 * 
 * Official Google Cloud Professional Cloud Architect Case Studies:
 * 1. Altostrat Media (Digital Media, Global Streaming, Multi-Region Compute)
 * 2. Cymbal Retail (E-Commerce, Omnichannel Retail, Inventory, BigQuery)
 * 3. EHR Healthcare (Healthcare SaaS, HIPAA/HITECH, Zero Trust, Private GKE, Cloud DLP)
 * 4. Knightmotives Automotive (Connected Fleet IoT, Predictive Maintenance, Edge AI)
 */

(function (global) {
  'use strict';

  const GCP_CASE_STUDIES = {
    version: '3.0.0',
    lastUpdated: '2026-08-26',

    studies: {
      altostrat_media: {
        id: 'altostrat_media',
        name: 'Altostrat Media',
        tagline: 'Global Digital Media, Entertainment & Real-Time Content Delivery Platform',
        badge: 'Media / Streaming',
        color: '#4285F4',
        icon: 'movie',

        companyOverview: 'Altostrat Media is a global digital media and entertainment company providing streaming video on demand (SVOD), live broadcasting, and interactive digital gaming platforms to over 50 million active global subscribers across North America, Europe, and Asia-Pacific. They are migrating their legacy data center footprint to Google Cloud to deliver sub-second content ingestion, global low-latency stream distribution, high-throughput user profile management, and AI-driven automated content recommendations.',

        existingInfrastructure: [
          'Monolithic media transcoders and streaming microservices running on VMware virtual machines across colocation data centers in North America and Europe.',
          'Self-managed MySQL and Redis clusters suffering from replication lag during global peak viewing hours and viral release events.',
          'Legacy hardware-based appliances for media encoding with static provisioning, causing high idle capital expenses between major streaming events.',
          'Decentralized file storage systems across regional data centers without automated global synchronization, creating content delivery bottlenecks.'
        ],

        businessRequirements: [
          'Deliver broadcast-quality, low-latency (< 5s) live and VOD streams to millions of concurrent viewers globally with 99.999% availability.',
          'Adopt an agile, cloud-native architecture that scales dynamically during major release spikes and scales down during off-peak hours to minimize OpEx.',
          'Protect premium copyrighted media assets against piracy, token spoofing, and DDoS attacks with enterprise-grade edge security.',
          'Enable real-time viewer behavior analytics to power personalized AI recommendations and optimize subscriber retention.',
          'Ensure zero-downtime continuous deployment for all customer-facing streaming APIs and mobile applications.'
        ],

        technicalRequirements: [
          'Containerize media processing and API services on Google Kubernetes Engine (GKE) and Cloud Run with automated horizontal autoscaling.',
          'Deploy External Passthrough Network Load Balancing for UDP/stateful streaming protocols and Global External Application Load Balancing with Cloud CDN and Media CDN for video segment caching.',
          'Deploy Cloud Spanner as a multi-region transactional database for subscriber accounts, subscriptions, and digital rights licensing with strict ACID consistency.',
          'Deploy Cloud Memorystore for Redis Cluster for sub-millisecond session caching and real-time viewing queues.',
          'Ingest and process streaming user telemetry using Cloud Pub/Sub, Cloud Dataflow (Apache Beam), and BigQuery partitioned tables.',
          'Utilize Cloud KMS Customer-Managed Encryption Keys (CMEK) and Secret Manager for token verification and DRM encryption keys.'
        ],

        prescribedArchitecture: {
          compute: 'Google Kubernetes Engine (GKE) Enterprise clusters across us-east4, europe-west1, and asia-east1 with GKE Autopilot / Node Auto-Provisioning. Cloud Run for serverless webhooks and stateless viewer APIs.',
          storage: 'Cloud Spanner (Multi-Region Instance) for subscriber accounts and entitlements. Cloud Storage with Cloud CDN / Media CDN for VOD content and HLS/DASH media segments. Cloud Memorystore for Redis Cluster for active session caching.',
          networking: 'Global External Application Load Balancer with Cloud CDN for HTTP media streaming; External Passthrough Network Load Balancer for low-latency UDP streams. Cloud Armor with Adaptive Protection for WAF and DDoS mitigation.',
          security: 'Cloud KMS with CMEK for media bucket encryption; Secret Manager for DRM keys and API tokens; Workload Identity for secure GKE pod authentication without static credentials.',
          dataAnalytics: 'Viewer Telemetry Pipeline: Client Apps -> Cloud Pub/Sub -> Cloud Dataflow (streaming deduplication) -> BigQuery (clustered by user_id and content_id). Vertex AI for personalized recommendation models.'
        },

        executiveSummary: 'Altostrat Media modernized its global entertainment platform on Google Cloud using GKE, Cloud Spanner, Media CDN, and Vertex AI. The architecture delivers sub-5s live stream latency, 99.999% uptime, global external ACID consistency for subscriptions, and real-time analytics for 50M+ viewers.',

        keyMetrics: [
          'Global Streaming Latency: < 5s glass-to-glass for live broadcasts',
          'Database Availability SLA: 99.999% via Cloud Spanner Multi-Region',
          'Telemetry Scale: 15M+ events/second ingested with zero loss via Pub/Sub and Dataflow',
          'Cache Hit Ratio: > 92% at the edge via Cloud CDN / Media CDN'
        ]
      },

      cymbal_retail: {
        id: 'cymbal_retail',
        name: 'Cymbal Retail',
        tagline: 'Omnichannel Retail, Global Supply Chain & Smart E-Commerce Platform',
        badge: 'Retail / E-Commerce',
        color: '#FBBC04',
        icon: 'shopping_cart',

        companyOverview: 'Cymbal Retail is a multinational retail enterprise operating over 2,000 physical department stores and a high-volume global e-commerce marketplace serving 40 million online shoppers. They are executing an omnichannel digital transformation on Google Cloud to unify in-store point-of-sale (POS) systems, warehouse inventory management, and digital storefronts into a real-time, event-driven retail ecosystem.',

        existingInfrastructure: [
          'Disparate on-premises POS servers in stores connecting via batch overnight SFTP jobs to central data centers.',
          'Monolithic Java e-commerce application hosted on legacy enterprise VMs with fixed capacity, frequently failing during Black Friday sales.',
          'Legacy Oracle inventory database with batch updates, causing stockout discrepancies and canceled customer orders.',
          'Decentralized customer support databases preventing unified 360-degree customer relationship management.'
        ],

        businessRequirements: [
          'Maintain real-time global inventory synchronization across all physical stores, regional distribution centers, and online storefronts.',
          'Scale e-commerce infrastructure instantly during seasonal shopping surges (10x traffic spikes) with zero checkout failure.',
          'Ensure strict PCI-DSS Level 1 compliance and protect customer payment data with Zero Trust perimeters.',
          'Provide sub-second personalized product recommendations and dynamic pricing based on shopper browsing patterns.',
          'Reduce supply chain logistics costs through predictive inventory allocation and demand forecasting.'
        ],

        technicalRequirements: [
          'Migrate e-commerce microservices to GKE Private Clusters and Cloud Run with automated canary deployments via Cloud Deploy.',
          'Deploy Cloud Spanner or Cloud SQL Enterprise Plus for transactional order processing and checkout ACID transactions.',
          'Implement event-driven inventory tracking using Cloud Pub/Sub, Datastream for Change Data Capture (CDC), and BigQuery for real-time stock analytics.',
          'Deploy Apigee API Management to securely expose supplier and vendor integration APIs with OAuth 2.0 and rate limiting.',
          'Leverage BigQuery ML and Vertex AI Search and Conversation for intelligent product discovery and personalized promotions.',
          'Enforce VPC Service Controls and Cloud DLP (Sensitive Data Protection) around customer PII and payment data stores.'
        ],

        prescribedArchitecture: {
          compute: 'Google Kubernetes Engine (GKE) for core checkout and cart microservices; Cloud Run for stateless promotion and catalogue microservices; Apigee X for external supplier API governance.',
          storage: 'Cloud Spanner for multi-region globally consistent inventory and order ledger; Cloud Storage with lifecycle rules for product images; BigQuery for real-time customer data platform (CDP).',
          networking: 'Global External Application Load Balancer with Cloud Armor WAF and bot management; Dedicated Cloud Interconnect connecting warehouse fulfillment centers to Google Cloud VPCs.',
          security: 'Cloud DLP for credit card and PII masking; VPC Service Controls isolating PCI-DSS scoped environments; Customer-Managed Encryption Keys via Cloud KMS.',
          dataAnalytics: 'Omnichannel Ingestion: POS & Web Events -> Cloud Pub/Sub -> Cloud Dataflow -> BigQuery (partitioned by transaction_date). Vertex AI Recommendations for real-time personalization.'
        },

        executiveSummary: 'Cymbal Retail unified its retail operations on Google Cloud with GKE, Cloud Spanner, Apigee, and BigQuery. The architecture eliminated inventory synchronization lag, achieved 100% checkout uptime during peak holiday traffic, and delivered a 25% increase in conversion through Vertex AI personalized search.',

        keyMetrics: [
          'Checkout Latency: < 200ms end-to-end payment processing',
          'Inventory Sync Delay: < 2 seconds from physical POS scan to global digital catalog',
          'Peak Concurrency: 500,000 simultaneous checkouts with zero dropped carts',
          'Security Compliance: 100% PCI-DSS Level 1 certified'
        ]
      },

      ehr_healthcare: {
        id: 'ehr_healthcare',
        name: 'EHR Healthcare',
        tagline: 'Multi-Tenant Healthcare SaaS & Protected Health Information (PHI) Cloud Migration',
        badge: 'Healthcare / Zero Trust',
        color: '#EA4335',
        icon: 'local_hospital',

        companyOverview: 'EHR Healthcare is a leading healthcare software-as-a-service (SaaS) provider delivering Electronic Health Records (EHR) management, clinical workflow automation, medical billing, and insurance claims processing to thousands of hospital systems, outpatient medical centers, and private physician practices across the United States. They are executing an enterprise migration from legacy on-premises colocation facilities to Google Cloud to achieve 99.99% availability, strict HIPAA/HITECH regulatory compliance, zero-trust security perimeters, and advanced clinical analytics capabilities.',

        existingInfrastructure: [
          'Multiple colocated enterprise data centers in Midwestern and Eastern United States hosting monolithic Java applications on VMware vSphere clusters.',
          'On-premises enterprise SAN and NAS storage arrays running Microsoft SQL Server and Oracle RAC database clusters with physical disk replication.',
          'Legacy IPsec VPN tunnels connecting hospital networks to EHR data centers with inconsistent bandwidth, high latency jitter, and lack of hardware-layer encryption.',
          'Disaster recovery relies on active-passive failover with a 4-hour Recovery Time Objective (RTO) and 1-hour Recovery Point Objective (RPO), requiring manual intervention and annual scheduled downtime drills.',
          'Audit compliance logging is performed via centralized syslog servers with manual log parsing, resulting in delayed incident discovery and cumbersome HIPAA audit reporting.'
        ],

        businessRequirements: [
          'Ensure 99.99% multi-region system availability with continuous, automated disaster recovery (RTO < 15 minutes, RPO near zero).',
          'Strictly comply with federal healthcare regulations including HIPAA Security and Privacy Rules, HITECH Act, PCI-DSS Level 1, and SOC 2 Type II certifications.',
          'Modernize monolithic applications into secure, loosely coupled containerized microservices while increasing continuous integration and deployment velocity.',
          'Establish private, highly resilient, and hardware-encrypted connectivity between Google Cloud and on-premises hospital network environments.',
          'Enable secure, privacy-preserving clinical data sharing and machine learning research while completely protecting patient privacy.'
        ],

        technicalRequirements: [
          'Provision redundant 10 Gbps Dedicated Cloud Interconnect circuits with MACsec (Media Access Control Security) for hardware-layer Layer 2 encryption in transit.',
          'Deploy Private Google Kubernetes Engine (GKE) clusters across multiple GCP regions (us-east4 and us-central1) with Workload Identity, Shielded GKE Nodes, and Binary Authorization to guarantee that only cryptographically verified, vulnerability-scanned container images can be deployed.',
          'Deploy Cloud Healthcare API (FHIR, HL7v2, DICOM) to natively ingest, store, and interoperate with hospital clinical data standards.',
          'Integrate Cloud Data Loss Prevention (Sensitive Data Protection / Cloud DLP) to automatically discover, classify, mask, and de-identify Protected Health Information (PHI) and Personally Identifiable Information (PII) before loading data into analytical data warehouses.',
          'Implement VPC Service Controls to construct a Zero Trust security perimeter around sensitive storage and analytics services, preventing data exfiltration.',
          'Enforce Customer-Managed Encryption Keys (CMEK) backed by Cloud KMS and Cloud HSM (FIPS 140-2 Level 3) with separate cryptographic key custodian roles.'
        ],

        prescribedArchitecture: {
          compute: 'Private Google Kubernetes Engine (GKE) Enterprise Clusters across us-east4 and us-central1 without public IP addresses on nodes or pods. Features enabled: GKE Workload Identity, Shielded Nodes, Node Auto-Provisioning, and Binary Authorization integrated with Cloud Build and Artifact Registry to enforce image signing policies.',
          storage: 'Cloud SQL for PostgreSQL (Enterprise Plus) with cross-region High Availability and Read Replicas for relational application data. Cloud Spanner for multi-region globally consistent patient registry indexing. Cloud Storage with Bucket Lock (WORM compliance) and CMEK for medical records and DICOM imaging archives.',
          networking: 'Dual Dedicated Cloud Interconnect (10 Gbps redundant circuits) configured with MACsec encryption in transit between hospital data centers and GCP VPCs. Cloud VPN as secondary backup path. VPC Service Controls creating a hardened perimeter around BigQuery, Cloud Storage, and Healthcare API datasets. Cloud Armor with OWASP Top 10 rules and WAF filtering.',
          security: 'Cloud KMS with Cloud HSM (FIPS 140-2 Level 3) for Customer-Managed Encryption Keys with automated 90-day rotation. Cloud DLP (Sensitive Data Protection) for real-time de-identification and tokenization of patient PHI. Cloud Audit Logs exported in real-time via log sinks to BigQuery for immutable compliance audit trails. BeyondCorp Enterprise for context-aware Zero Trust employee access.',
          dataAnalytics: 'Cloud Healthcare API managing FHIR, HL7v2, and DICOM data stores with automated streaming export to BigQuery. BigQuery configured with Column-Level Security (Data Catalog policy tags) and Row-Level Security to restrict clinical data access based on user role and consent parameters.'
        },

        executiveSummary: 'EHR Healthcare migrated its mission-critical EHR platform to Google Cloud, establishing a Zero Trust, HIPAA-compliant multi-region infrastructure. Using Private GKE with Binary Authorization and Workload Identity, Dedicated Cloud Interconnect with MACsec, VPC Service Controls, Cloud KMS HSM keys, Cloud Healthcare API, and Cloud DLP for PHI de-identification, EHR Healthcare achieved 99.99% availability, sub-15 minute RTO, zero data exfiltration vulnerability, and automated compliance auditing across all hospital partner integrations.',

        keyMetrics: [
          'Availability SLA: 99.99% multi-region uptime',
          'Disaster Recovery Targets: RTO < 15 minutes, RPO near-zero (< 1 minute)',
          'Network Security: 10 Gbps Dedicated Interconnect with Layer 2 MACsec line-rate encryption',
          'Regulatory Compliance: 100% HIPAA, HITECH, PCI-DSS, SOC 2 Type II compliance validation',
          'PHI De-identification Latency: Real-time automated inspection and masking via Cloud DLP'
        ]
      },

      knightmotives_automotive: {
        id: 'knightmotives_automotive',
        name: 'Knightmotives Automotive',
        tagline: 'Connected Vehicle Telemetry, Fleet IoT & Autonomous Edge Intelligence',
        badge: 'Automotive / Edge IoT',
        color: '#34A853',
        icon: 'directions_car',

        companyOverview: 'Knightmotives Automotive is a global commercial vehicle manufacturer producing connected electric trucks, autonomous delivery vans, and specialized fleet machinery operating across North America, Europe, and Asia. Over 10 million connected vehicles continuously generate sensor telemetry (battery thermals, motor torque, brake wear, GPS routes). Knightmotives is building a cloud-native IoT and AI platform on Google Cloud to predict component failures, deliver over-the-air (OTA) firmware updates, and provide edge computing for autonomous driving assistance.',

        existingInfrastructure: [
          '10 million commercial vehicles equipped with cellular modems and local edge compute hardware.',
          'Intermittent Connectivity: Vehicles operate in rural and remote logistics corridors with frequent cellular dropouts lasting hours to days.',
          'High-throughput Wi-Fi depot uploads: Vehicles transmit 50 MB to 500 MB of detailed diagnostic logs when docking at fleet service centers.',
          'On-premises legacy data warehouses failing to ingest real-time telematics streams at scale, delaying warranty and safety defect analysis by weeks.',
          'Strict regulatory requirements for automotive safety and regional data sovereignty (GDPR in Europe, UNECE WP.29 for vehicle cybersecurity).'
        ],

        businessRequirements: [
          'Predict catastrophic battery and transmission failures 72 hours in advance to eliminate roadside breakdowns and schedule preventive maintenance.',
          'Distribute cryptographically secure Over-The-Air (OTA) firmware updates to global vehicle fleets with automated rollback capabilities.',
          'Monetize fleet analytics by exposing secure, rate-limited telemetry APIs to commercial logistics partners and certified maintenance depots.',
          'Enforce strict compliance with European GDPR data residency and international vehicle safety regulations.',
          'Execute low-latency edge computer vision inference (< 30ms) on-vehicle for autonomous hazard detection without cloud network dependency.'
        ],

        technicalRequirements: [
          'Deploy Google Distributed Cloud (GDC) Edge on-vehicle with optimized TensorFlow Lite models for offline real-time computer vision inference.',
          'Build a dual-path ingestion architecture: Cloud Pub/Sub for real-time streaming cellular telemetry and Cloud Storage with Signed URLs for depot Wi-Fi diagnostic log dumps.',
          'Deploy Cloud Bigtable with optimized row key design (vehicle_id#reverse_timestamp) for high-throughput time-series sensor ingestion.',
          'Automate multi-tier log archival using Cloud Storage Object Lifecycle Management (Standard -> Nearline at 30d -> Coldline at 90d -> Archive at 365d).',
          'Deploy Apigee X API Management with OAuth 2.0, quota management, and developer portals for commercial partner telemetry access.',
          'Apply Organization Resource Location Policies and Regional Cloud KMS CMEK keys to enforce European data residency for EU vehicle telemetry.'
        ],

        prescribedArchitecture: {
          compute: 'Google Distributed Cloud (GDC) Edge / containerized runtimes with TensorFlow Lite on-vehicle for local inference. Cloud Run and GKE for backend microservices in Google Cloud. Vertex AI Training and Pipelines for predictive maintenance MLOps.',
          storage: 'Cloud Bigtable (multi-cluster replication) for real-time sensor time-series data. Cloud Storage with automated Lifecycle Management for multi-petabyte raw diagnostic bundles. BigQuery for fleet-wide analytical queries and warranty analytics.',
          networking: 'Cloud Pub/Sub for high-throughput streaming telemetry buffering. Global External Application Load Balancer with Cloud CDN for OTA firmware distribution. External Passthrough Network Load Balancer for low-latency vehicle gateway connections.',
          security: 'Apigee X enforcing token verification, spike arrest, and API product monetization. Cloud KMS CMEK enforcing regional cryptographic boundaries. Binary Authorization verifying OTA firmware container signatures.',
          dataAnalytics: 'Streaming Path: Vehicle Cellular Modems -> Cloud Pub/Sub -> Cloud Dataflow (sliding window aggregations) -> Cloud Bigtable. Batch Path: Depot Wi-Fi -> Cloud Storage -> Dataflow -> BigQuery. Vertex AI Model Registry and Endpoints for fleet predictive maintenance.'
        },

        executiveSummary: 'Knightmotives Automotive transformed its connected fleet platform on Google Cloud with GDC Edge, Cloud Bigtable, Pub/Sub, Dataflow, and Apigee. The architecture delivers sub-30ms offline edge ML inference, predictive component failure alerts 72 hours in advance, and 100% GDPR data sovereignty compliance.',

        keyMetrics: [
          'Connected Fleet: 10 Million commercial vehicles worldwide',
          'Edge ML Inference Latency: < 30ms on-vehicle without internet connectivity',
          'Telemetry Ingestion Throughput: 5M+ streaming events/sec with zero message loss',
          'Storage Cost Reduction: 85% savings on 50 PB diagnostic archives via GCS Lifecycle Management',
          'Predictive Maintenance Accuracy: > 94% true positive rate for battery/motor failure prediction'
        ]
      }
    },

    // Helper methods for runtime lookups and UI rendering
    helpers: {
      getStudy(id) {
        return GCP_CASE_STUDIES.studies[id] || null;
      },
      getAllStudies() {
        return Object.values(GCP_CASE_STUDIES.studies);
      },
      getStudyIds() {
        return Object.keys(GCP_CASE_STUDIES.studies);
      },
      getStudyNames() {
        const names = {};
        for (const [id, study] of Object.entries(GCP_CASE_STUDIES.studies)) {
          names[id] = study.name;
        }
        return names;
      },
      validateStudySchema(study) {
        if (!study || typeof study !== 'object') return false;
        const requiredKeys = [
          'id', 'name', 'tagline', 'companyOverview',
          'businessRequirements', 'technicalRequirements',
          'existingInfrastructure', 'prescribedArchitecture',
          'executiveSummary', 'keyMetrics'
        ];
        for (const key of requiredKeys) {
          if (!study[key]) return false;
        }
        if (!Array.isArray(study.businessRequirements) || study.businessRequirements.length === 0) return false;
        if (!Array.isArray(study.technicalRequirements) || study.technicalRequirements.length === 0) return false;
        if (!Array.isArray(study.existingInfrastructure) || study.existingInfrastructure.length === 0) return false;
        if (!Array.isArray(study.keyMetrics) || study.keyMetrics.length === 0) return false;
        
        const archKeys = ['compute', 'storage', 'networking', 'security', 'dataAnalytics'];
        for (const ak of archKeys) {
          if (!study.prescribedArchitecture[ak]) return false;
        }
        return true;
      }
    }
  };

  // Attach to global window in browser, or export for Node.js test harness
  global.GCP_CASE_STUDIES = GCP_CASE_STUDIES;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_CASE_STUDIES;
  }
})(typeof window !== 'undefined' ? window : global);
