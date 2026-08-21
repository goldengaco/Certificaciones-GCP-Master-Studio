/**
 * Google Cloud Certification Training Platform (Master Edition)
 * Authoritative PCA Case Studies Database
 * 
 * Contains complete, rich enterprise case study architectures for:
 * 1. Mountkirk Games (Mobile Gaming, Agones/GKE, Spanner, Redis, Dataflow)
 * 2. TerramEarth (Connected Vehicles, Bigtable, GCS Lifecycle, Vertex AI, Apigee)
 * 3. EHR Healthcare (Healthcare SaaS, HIPAA/HITECH, Cloud Healthcare API, Interconnect, Private GKE, DLP)
 * 4. Helicopter Racing League (Sports Live Stream, Transcoder API, Cloud CDN, Video Intelligence, Cloud Run)
 */

(function (global) {
  'use strict';

  const GCP_CASE_STUDIES = {
    version: '2.0.0',
    lastUpdated: '2026-08-21',

    studies: {
      mountkirk_games: {
        id: 'mountkirk_games',
        name: 'Mountkirk Games',
        tagline: 'Next-Generation Global Multiplayer Mobile Gaming Platform',
        badge: 'Gaming / Multi-Region',
        color: '#4285F4',
        icon: 'sports_esports',

        companyOverview: 'Mountkirk Games makes popular, highly rated mobile games for iOS and Android. They have recently seen exponential growth and are preparing to launch a flagship multiplayer game anticipated to attract 10x their current player base globally across North America, Europe, and Asia. They require a scalable, reliable, and cost-effective cloud-native architecture on Google Cloud that can automatically handle unpredictable game traffic spikes, ensure sub-100ms global latency for real-time matches, provide global ACID-compliant transactional consistency for player purchases and inventories, and deliver streaming telemetry analytics.',

        existingInfrastructure: [
          'Monolithic game server binaries running on self-managed Linux virtual machines hosted in traditional on-premises colocation facilities and legacy cloud providers across North America and Europe.',
          'Self-managed MySQL database clusters with custom master-slave replication and complex manual sharding scripts that suffer from replication lag and single points of failure.',
          'Self-hosted Memcached clusters used for caching player profiles and session tokens, requiring manual memory rebalancing and node provisioning.',
          'Custom Bash deployment scripts and cron-based log shipping routines transmitting raw log files to local SAN storage arrays, delaying operational observability by several hours.',
          'Infrastructure provisioning is entirely static; servers are pre-allocated for peak loads, resulting in immense financial waste during off-peak hours and severe connection drops, lag, and downtime during viral game launch spikes.'
        ],

        businessRequirements: [
          'Dynamically scale backend compute capacity to seamlessly support rapid, unpredictable surges in active concurrent players during global launch events.',
          'Minimize infrastructure management and operational overhead by adopting fully managed and automated Google Cloud services.',
          'Maximize player retention and competitive integrity by delivering consistent sub-100ms global network latency for all multiplayer matches worldwide.',
          'Enable continuous integration and zero-downtime deployment of game updates and patches without interrupting active game sessions.',
          'Gain real-time business and player behavioral insights via streaming telemetry analytics to optimize in-game monetization, virtual economy balance, and marketing campaigns.',
          'Optimize overall cloud infrastructure costs by aggressively leveraging ephemeral, discounted compute resources without compromising availability.'
        ],

        technicalRequirements: [
          'Containerize dedicated game servers and orchestrate them dynamically using Google Kubernetes Engine (GKE) with Agones (open-source game server lifecycle controller).',
          'Leverage GKE Spot VMs (formerly Preemptible VMs) for match-based game server node pools with automated fallback to standard nodes to reduce compute costs by 60-80%.',
          'Deploy a globally distributed, horizontally scalable transactional database (Cloud Spanner) providing strong ACID consistency, multi-region high availability (99.999% SLA), and automated sharding for player accounts, inventories, and microtransactions.',
          'Deploy Cloud Memorystore for Redis (Cluster mode) to provide sub-millisecond read/write latency for global player leaderboards, match queues, and session caching.',
          'Ingest, process, and analyze millions of real-time player telemetry events per second using Cloud Pub/Sub, Cloud Dataflow (Apache Beam windowing), and BigQuery with time-partitioned tables.',
          'Implement Global Anycast IP routing via Google Cloud External Application Load Balancer with Cloud Armor WAF and Cloud CDN to mitigate DDoS attacks and accelerate static asset delivery.'
        ],

        prescribedArchitecture: {
          compute: 'Google Kubernetes Engine (GKE) running containerized dedicated game server workloads managed by Agones. Node pools are partitioned into: (1) Match Server Node Pool utilizing Spot VMs with graceful drain signals for ephemeral game sessions, and (2) Core Services Node Pool utilizing standard multi-zone instances for persistent APIs. GKE Workload Identity is configured for secure credential-less GCP service access.',
          storage: 'Cloud Spanner configured as a Multi-Region Instance (nam-eur-asia) providing global external consistency, zero-downtime schema migrations, and 99.999% availability for user profiles, inventories, and transaction logs. Cloud Storage Standard with multi-region replication and Cloud CDN integration for game assets, patch binaries, and media.',
          networking: 'Global External Application Load Balancer with Anycast IP routing game traffic over Google’s dedicated global fiber backbone. Cloud Armor security policies protect against L3/L4/L7 volumetric DDoS attacks and exploit attempts. Cloud NAT provides outbound connectivity for private GKE nodes.',
          security: 'GKE Workload Identity eliminates static JSON service account keys. Cloud KMS manages encryption keys with automated envelope encryption. Secret Manager securely injects game server secrets and third-party API credentials into Kubernetes pods at runtime.',
          dataAnalytics: 'Streaming Ingestion Pipeline: In-game telemetry -> Cloud Pub/Sub (global message buffer) -> Cloud Dataflow (Apache Beam autoscaling stream processing for sessionization and deduplication) -> BigQuery (time-partitioned, clustered tables) for executive reporting and Looker dashboards. Cloud Memorystore for Redis (Cluster mode) handles high-speed sorted sets for real-time global leaderboards.'
        },

        executiveSummary: 'Mountkirk Games transitioned from a brittle, monolithic legacy architecture to an ultra-resilient, globally distributed cloud-native architecture on Google Cloud. By combining GKE with Agones on Spot VMs, Cloud Spanner for multi-region transactional consistency, Cloud Memorystore for Redis for real-time leaderboards, and an end-to-end Pub/Sub -> Dataflow -> BigQuery streaming analytics pipeline, Mountkirk achieved sub-100ms global latency, 99.999% availability, 70% compute cost savings, and real-time operational visibility for millions of concurrent players.',

        keyMetrics: [
          'Target Latency: < 100ms global multiplayer network latency',
          'Availability SLA: 99.999% for player data and transactional storage (Cloud Spanner Multi-Region)',
          'Telemetry Ingestion Scale: 10M+ player events per second with zero message loss',
          'Compute Cost Optimization: Up to 70% reduction in game server infrastructure costs via GKE Spot VMs',
          'Leaderboard Query Latency: < 1ms response time via Cloud Memorystore for Redis Cluster'
        ]
      },

      terramearth: {
        id: 'terramearth',
        name: 'TerramEarth',
        tagline: 'Connected Heavy Equipment Telemetry & Predictive Maintenance Platform',
        badge: 'IoT / Petabyte Analytics',
        color: '#34A853',
        icon: 'agriculture',

        companyOverview: 'TerramEarth manufactures heavy agricultural, forestry, and construction equipment deployed across 6 continents. With over 20 million connected vehicles worldwide equipped with hundreds of embedded telemetry sensors monitoring engine speed, hydraulic pressure, oil viscosity, fuel consumption, and temperature, TerramEarth captures critical operational data to revolutionize equipment reliability, proactively prevent catastrophic machine failures, and monetize predictive diagnostic insights for authorized global dealer networks.',

        existingInfrastructure: [
          '20 million connected vehicles worldwide generating continuous sensor telemetry.',
          'Cellular Connectivity: Vehicles equipped with cellular modems transmit ~200 KB per hour per vehicle while operating in areas with cellular coverage, though connectivity is frequently intermittent in remote agricultural fields, deep forests, and mining pits.',
          'Depot / Dealer Maintenance Connectivity: Vehicles upload 20 MB to 500 MB of detailed uncompressed raw diagnostic log files via depot Wi-Fi networks during routine maintenance and servicing visits.',
          'Centralized on-premises data centers running legacy relational databases and enterprise SAN/NAS storage arrays, creating severe ingestion bottlenecks and storage capacity exhaustion.',
          'Batch data processing cycles require several weeks to ingest, transform, and report on uploaded sensor logs, causing missed opportunities for proactive field maintenance before catastrophic component failures occur.',
          'International operations must comply with diverse regional data privacy, residency, and sovereignty regulations across the Americas, European Union, and Asia-Pacific.'
        ],

        businessRequirements: [
          'Drastically reduce costly machine downtime and catastrophic engine/hydraulic failures through real-time automated predictive maintenance alerts.',
          'Monetize equipment telemetry by exposing secure, managed, and rate-limited diagnostic APIs to global dealer networks, certified mechanics, and fleet operators.',
          'Lower operational infrastructure and data management costs through automated data ingestion, serverless processing, and intelligent storage lifecycle management.',
          'Accelerate engineering feedback loops by enabling data science teams to rapidly train and deploy machine learning models on petabyte-scale historical sensor datasets.',
          'Ensure strict adherence to international data privacy and regional data sovereignty regulations (e.g., GDPR).'
        ],

        technicalRequirements: [
          'Implement dual-path ingestion architecture: (1) Real-time streaming pipeline for intermittent cellular telemetry (~200 KB/hr/vehicle), and (2) High-throughput batch ingestion for heavy depot Wi-Fi diagnostic uploads (20-500 MB/vehicle).',
          'Deploy high-throughput, horizontally scalable NoSQL storage (Cloud Bigtable) optimized for time-series sensor ingestion with custom row-key design (vehicle_id#reverse_timestamp).',
          'Store raw diagnostic files in Cloud Storage with automated Object Lifecycle Management rules (Standard -> Coldline after 30 days -> Archive after 365 days) to minimize long-term storage costs.',
          'Deploy enterprise API management with Apigee to secure, rate-limit, authenticate (OAuth 2.0), and monetize dealer diagnostic APIs.',
          'Build distributed machine learning pipelines with Vertex AI to train, evaluate, and serve predictive failure models.',
          'Implement Customer-Managed Encryption Keys (CMEK) via Cloud KMS across regional storage buckets to satisfy strict data sovereignty requirements.'
        ],

        prescribedArchitecture: {
          compute: 'Serverless event-driven processing utilizing Cloud Functions and Cloud Run for ingestion webhooks, file validation, and metadata extraction. Vertex AI Training and Pipelines (Kubeflow) for distributed ML training on sensor telemetry. Apigee API Gateway for dealer-facing microservices.',
          storage: 'Cloud Bigtable with multi-cluster replication across regions for high-throughput time-series sensor readings, utilizing an optimized row key format (vehicle_id#timestamp_reversed) to prevent write hotspots. Cloud Storage with Object Lifecycle Management (Standard -> Coldline at 30d -> Archive at 365d) for raw diagnostic bundles. BigQuery for fleet-wide analytical warehousing and SQL queries.',
          networking: 'Cloud Pub/Sub as the global asynchronous message broker absorbing fluctuating streaming cellular telemetry. Global External Application Load Balancer with Cloud Armor fronting Apigee API endpoints. Cloud Interconnect establishing secure private connectivity between TerramEarth corporate headquarters and GCP VPC.',
          security: 'Apigee API Management enforcing OAuth 2.0 access tokens, API key validation, quotas, and spike arrest policies for external dealer access. Cloud KMS with Customer-Managed Encryption Keys (CMEK) assigned to regional buckets in the EU and APAC for regulatory compliance. IAM least-privilege service accounts.',
          dataAnalytics: 'Cellular Stream Ingestion: MQTT / Cellular Gateways -> Cloud Pub/Sub -> Cloud Dataflow (streaming windowing & anomaly detection) -> Cloud Bigtable. Depot Batch Ingestion: Depot Wi-Fi -> Cloud Storage Bucket -> GCS Notification -> Cloud Dataflow (batch ETL) -> BigQuery. Vertex AI Feature Store and Model Registry for predictive maintenance inference.'
        },

        executiveSummary: 'TerramEarth modernized its connected vehicle infrastructure by deploying a hybrid streaming/batch data architecture on Google Cloud. Intermittent cellular telemetry streams through Pub/Sub, Dataflow, and Cloud Bigtable with optimized time-series row keys, while large depot Wi-Fi uploads are processed through Cloud Storage and BigQuery with automated Coldline/Archive lifecycle tiering. Apigee securely monetizes diagnostic APIs for global dealers, and Vertex AI predictive models reduce unpredicted equipment downtime by over 65%.',

        keyMetrics: [
          'Connected Fleet Size: 20 Million active vehicles worldwide',
          'Cellular Ingestion Volume: 200 KB/hour/vehicle (streaming with intermittent tolerance)',
          'Depot Upload Volume: 20 MB - 500 MB batch payload per vehicle maintenance session',
          'Data Storage Tiering: Automated transition from Standard -> Coldline (30d) -> Archive (365d), cutting storage TCO by 80%',
          'Predictive Failure Window: Alerts generated 48-72 hours prior to mechanical failure'
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

      helicopter_racing_league: {
        id: 'helicopter_racing_league',
        name: 'Helicopter Racing League',
        tagline: 'Global Live High-Speed Sports Streaming & Real-Time Telemetry Platform',
        badge: 'Media / Serverless AI',
        color: '#FBBC04',
        icon: 'sports_score',

        companyOverview: 'Helicopter Racing League (HRL) is a world-class global sports entertainment organization operating competitive, high-speed helicopter races across iconic international locations. Each race event features high-performance racing helicopters equipped with multiple 4K onboard video cameras, biometric telemetry monitors attached to pilots, and avionics sensor arrays streaming high-frequency positional and mechanical metrics. HRL requires a modern, cloud-native video streaming and real-time telemetry platform that can handle extreme traffic bursts during race weekends while scaling to zero during off-season periods.',

        existingInfrastructure: [
          'Self-hosted media processing hardware appliances deployed in on-premises data centers and mobile broadcast production trucks stationed at race venues.',
          'Monolithic web and API backend hosted on fixed-capacity virtual servers in a single regional cloud provider.',
          'Severe operational cost inefficiency: servers and hardware run continuously 24/7/365, even though live racing events occur on only 15 weekends per year (2 to 3 hours per live race).',
          'Live video broadcasts experience high global latency (15-30 seconds), causing visible desynchronization between the live video stream and real-time cockpit telemetry.',
          'Video highlight creation is performed manually by video editing staff, resulting in hours of delay before race overtakes and finish-line moments are published to digital channels.'
        ],

        businessRequirements: [
          'Deliver broadcast-quality, low-latency (< 5 seconds) 4K live video streams to millions of concurrent web and mobile subscribers worldwide.',
          'Eliminate idle off-season infrastructure costs by adopting an entirely serverless, scale-to-zero compute architecture between race weekends.',
          'Automatically identify race incidents, dramatic overtakes, and photo finishes using AI/ML video intelligence to generate and distribute real-time highlight clips within seconds of occurrence.',
          'Provide an interactive, gamified fan engagement mobile application featuring real-time synchronized telemetry (airspeed, altitude, G-force, pilot heart rate, and 3D positioning).',
          'Rapidly expand into new global broadcast territories without deploying physical broadcast infrastructure.'
        ],

        technicalRequirements: [
          'Build a serverless live video transcoding and packaging pipeline leveraging Google Cloud Transcoder API and Live Stream API capable of outputting adaptive bitrate HLS/DASH streams.',
          'Deploy a global content delivery network using Cloud CDN and Media CDN fronted by Global External Application Load Balancing for low-latency media segment delivery.',
          'Implement an event-driven serverless backend using Cloud Run with min-instances: 0 to scale from zero to tens of thousands of container instances instantly during live race bursts.',
          'Deploy high-throughput NoSQL storage (Cloud Bigtable) for ingesting high-frequency helicopter telemetry, coupled with Firestore in Native Mode for real-time mobile app state synchronization.',
          'Utilize Vertex AI and Cloud Video Intelligence API to automate race event classification, camera angle switching, and automated highlight video clipping.'
        ],

        prescribedArchitecture: {
          compute: 'Cloud Run (fully managed serverless container platform) for fan-facing APIs, telemetry ingestion webhooks, and backend services, configured with min-instances: 0 to scale to zero between races and auto-scale to thousands of instances in seconds during race events. Vertex AI Custom Training and Prediction for computer vision models.',
          storage: 'Cloud Bigtable with SSD storage for high-throughput, sub-10ms latency time-series telemetry ingestion (avionics, biometric, and GPS data). Cloud Storage Multi-Region for raw master video archives and transcoded video segments. Firestore in Native Mode for real-time fan leaderboards, live race telemetry push updates, and interactive chat.',
          networking: 'Live Broadcast Stream -> Cloud Video Ingestion -> Transcoder API -> Cloud Storage -> Global External Application Load Balancer with Cloud CDN / Media CDN delivering low-latency cached HLS/DASH video chunks to global viewers. Cloud Pub/Sub ingesting high-frequency helicopter telemetry streams.',
          security: 'Firebase Authentication integrated with Google Cloud Identity Platform for fan login and identity federation. Cloud Armor security policies providing L7 WAF protection, rate limiting, and geo-fencing. Secret Manager for secure storage of API credentials and broadcast encoder keys.',
          dataAnalytics: 'Video Intelligence API and Vertex AI for automated real-time shot detection, object tracking, and instant highlight reel generation. Telemetry Pipeline: Helicopter avionics -> Cloud Pub/Sub -> Cloud Dataflow -> Cloud Bigtable (real-time telemetry) + Firestore (app synchronization) + BigQuery (historical race analytics, engine performance metrics, and fan viewer behavior).'
        },

        executiveSummary: 'Helicopter Racing League transformed its global broadcast operations by adopting a 100% serverless, AI-powered architecture on Google Cloud. Using Transcoder API, Cloud CDN, Cloud Run (scale-to-zero), Cloud Bigtable, and Vertex AI / Video Intelligence API, HRL reduced off-season infrastructure idle costs to near zero while delivering sub-5-second 4K video latency, synchronized real-time cockpit telemetry to millions of fans, and generating automated AI race highlights within seconds.',

        keyMetrics: [
          'Live Stream Latency: < 5 seconds glass-to-glass global video latency',
          'Cost Optimization: 90%+ reduction in off-season infrastructure spend via serverless scale-to-zero (Cloud Run min-instances: 0)',
          'Telemetry Ingestion Throughput: 100,000+ telemetry events/second per racing helicopter with < 50ms processing latency',
          'Automated AI Highlight Generation: Clip generated and published within 15 seconds of race event detection',
          'Concurrent Viewers Scale: Seamless elasticity from 0 to 5M+ concurrent global streams'
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
