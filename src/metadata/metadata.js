module.exports = {
  name: "Huynh Anh Tuan",
  title: "Senior Backend / Cloud Engineer",
  facts: {
    Residence:
      '<i class="fa fa-home fact-icon"></i>District 8, HCM',
    Phone:
      '<i class="fa fa-phone fact-icon"></i>0778651959',
    LinkedIn:
      '<a href="https://www.linkedin.com/in/tuan-huynh-584710210/"><i class="fab fa-linkedin fact-icon"></i>Tuan Huynh</a>',
    GitHub:
      '<a href="https://github.com/anhtuan240599"><i class="fab fa-github fact-icon"></i>tuanhuynh</a>',
    Email:
      '<a href="mailto:anhtuan240599@gmail.com">anhtuan240599@gmail.com</a>',

  },
  skills: [
    ["AWS"],
    ["VPC"],
    ["Docker"],
    ["IaC"],
    ["CI/CD"],
    ["Linux"],
    ["Kubernetes"],
    ["TypeScript"],
    ["MongoDB"],
    ["MySQL"],
    ["ES"],
    ["MessageQ"],
  ],
  summary:
    "I'm a Cloud Engineer with 5 years of experience, specializing in designing and building scalable, reliable backend systems on the cloud. My focus is on architecting large-scale systems, optimizing performance and cost, and ensuring high availability. I'm working toward becoming a Solution Architect, with a strong interest in system design, cloud architecture, and building end-to-end solutions that align with business needs..",
  positions: [
    {
      company: "PNJ",
      location: "HCM",
      title: "Senior Cloud Engineer",
      period: "June 2023 - Present",
      skills: [
        "Typescript",
        "NodeJS",
        "AWS",
        "VPC",
        "EKS",
        "Docker",
        "MongoDB",
        "Mysql",
        "ES",
        "Lambda",
        "S3",
        "RDS",
        "EC2"
      ],
      contents: `
Senior Cloud Engineer at PNJ — Vietnam's top jewelry manufacturer & retailer, operating cloud platform for nationwide retail and e-commerce.

**Responsibilities:**

* Own end-to-end DevOps lifecycle on AWS (VPC, EC2, S3, RDS, Lambda, EKS, CloudFormation, CloudWatch, IAM, SQS, SNS, KMS, API Gateway, Route 53...) for production e-commerce and retail systems.
* Design, provision, and operate cloud infrastructure as code with **CloudFormation CDK/Terraform**, ensuring reproducible, version-controlled environments across staging, and production.
* Build and maintain **CI/CD pipelines** on BitBucket AWS CodePipeline/CodeBuild
* Operate and tune **Kubernetes (EKS)** clusters — HPA, cluster autoscaler, ingress, service mesh — to support microservices at scale.
* Lead **cost optimization** initiatives (rightsizing, Spot/Savings Plans, lifecycle policies) and capacity planning for peak campaigns.
* Partner with **SecOps** on cloud security: IAM least-privilege, WAF, DDoS protection, and audit compliance.
* Mentor backend developers on cloud-native patterns and self-service deployment workflows.

**Achievements:**

* Sustained **99.95% uptime** for AWS infrastructure serving **400+ retail stores** through peak campaigns (Tet, God of Wealth Day) with multi-AZ EKS, auto-scaling, and active-passive failover.
* Cut monthly AWS spend by **~20%** via EC2/RDS rightsizing and instance type, Spot & Savings Plans, and S3 lifecycle policies — no impact on SLOs.
* Standardized provisioning with **CloudFormation/Terraform (IaC)**, dropping new-environment spin-up from days to under an hour.
* Built an **AWS-equivalent local dev environment** with Floci & Docker Compose cutting dev cloud cost and enabling offline development with faster feedback loops.
* Collaborated closely with **SecOps** to deliver secure services and harden the platform against 95% **DDoS attacks** using Cloudflare, WAF.
* Bootstrapped **multiple AWS accounts from scratch** for new projects — from network foundation (VPC, subnets, NAT, Route 53, VPN, Transit Gateway) to core infrastructure (EKS, RDS, IAM, CI/CD, monitoring) — delivering production-ready environments with consistent security baselines.
`,


    },
    {
      company: "YouNet Media",
      location: "HCM",
      title: "Backend Engineer",
      period: "Aug 2021 - June 2023",
      skills: [
        "NestJS",
        "Typescript",
        "NodeJS",
        "Kubernetes",
        "RabbitMQ",
        "Docker",
        "Solr",
        "Mysql",
        "Airflow",
        "Google Bigquery"
      ],
      contents: `
Backend Engineer of the best company providing social media analytics solutions (Social Media Analytics) in Vietnam.

**Responsibilities:**

* Work on the E-commerce Intelligence project, develop services to collect and analyze sales of e-commerce sites. Most data come from E-commerce site like Shopee, Lazada, Tiki
* Working on microservice project using NestJS, RabbitMQ, K8s, Solr, MySQL... 
* Handle and improve ELT services using NestJS with monorepo architecture and use Lerna to manage it
* Develop and implement cron jobs worker to compute raw data to analytics data
* Contribute solutions to improve data processing more and more efficiently
* Deep understanding of existing architecture data to solve problems or export adhoc data for customers

**Achievements:**

* Good completion handle and improve ELT services with more than **80 million documents** per day
* Develop and improve services to compute data and scalable
* Reduced compute data time for 1 week from **48 hours to 6 hours**
* Applied Apache Airflow to manage sequentially running data processing services
* Hosted tech talks. Topics: what is airflow and how it work?.
* Applied Slack to monitoring services
* Quickly handle data problems and support customer requests for data with more than **2 billion documents**
`,


    },
    {
      company: "2359 Media",
      location: "HCM",
      title: "Backend Engineer Intern",
      period: "May 2021 - July 2021",
      skills: [
        "NodeJS",
        "Express",
        "Javascript",
        "PostgreSQL",
        "Redis",
        "Socket io"
      ],
      contents: `
Backend Engineer Intern of Asia's leading digital consultancy and the preferred choice for cross platform engagement strategies.

**Responsibilities:**

* Learn git workflow, known and working with scrum agile
* Create the website allows you to zip the files you want to share with others or for
yourself
* Deploy and apply CI/CD for website

**Achievements:**

* Works well with git workflow and agile scrum
* Improve technical skill, coding better
* Complete the tasks on time
* Completion create and deploy website
* **https://sharefilesz.herokuapp.com**
`,


    },
  ],

  certificates: [
    {
      contents: []
    },
  ],

  others: [
    {
      contents1: ['Communication and teamwork'],
      contents2: ['Withstand pressure of work'],
      contents3: ['Adapt quickly to new knowledge']
    },
  ]
};
