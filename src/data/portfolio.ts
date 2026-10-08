// Site content. Source of truth for wording: CONTENT.md. CV is source of
// truth for facts.

export const greeting = {
  username: "Abdelwahab",
  title: "Hi, I'm Abdelwahab",
  subTitle:
    "Senior software engineer, eight years in. I build production AWS systems and own them from architecture through deployment to reliability: Node.js and TypeScript services, a delivery platform serving 100K daily users, and WPML's LLM translation and agent platform on 1.5M+ WordPress sites. I am usually the one who finds out why production broke. Cairo, UTC+3. Open to remote senior backend, platform and AI-platform roles.",
  resumeLink: "/resume.pdf"
};

export const socialMediaLinks = {
  github: "https://github.com/abdelwahab313",
  linkedin: "https://www.linkedin.com/in/abdelwahab313/",
  gmail: "abdelwahabahmed93@gmail.com",
  gitlab: "https://gitlab.com/abdelwahab313",
  twitter: "https://twitter.com/Abdelwahab313",
  stackoverflow: "https://stackoverflow.com/users/6846745/abdelwahab-mahmoud"
};

// Same rows as the CV (CONTENT.md section 1).
export const cvStack = {
  languages: [
    "PHP",
    "TypeScript",
    "JavaScript",
    "Go",
    "Ruby",
    "Java (Spring)",
    "Python",
    "SQL"
  ],
  backend: [
    "Ruby on Rails",
    "Node.js",
    "REST API design",
    "service-oriented architecture",
    "SQS",
    "Kafka"
  ],
  frontend: [
    "Next.js",
    "React",
    "Redux",
    "Hotwire (Turbo & Stimulus)",
    "React Native",
    "Tailwind CSS"
  ],
  ai_llm: [
    "AWS Bedrock",
    "OpenAI",
    "Gemini",
    "agentic workflows",
    "Claude Agent SDK",
    "MCP",
    "Langfuse",
    "evals"
  ],
  cloud: [
    "AWS (ECS Fargate, Lambda, SQS, Step Functions, CloudWatch, S3, IAM)",
    "Kubernetes",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "GitLab CI"
  ],
  observability: [
    "Datadog",
    "OpenTelemetry",
    "AWS CloudWatch",
    "Langfuse tracing"
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "Aurora",
    "Redis",
    "DynamoDB",
    "ClickHouse"
  ],
  testing: [
    "TDD",
    "Spec-driven development",
    "RSpec",
    "Capybara",
    "Playwright",
    "Cypress",
    "Jest",
    "VCR"
  ],
  wordpress: [
    "WPML ecosystem",
    "plugin update safety",
    "backwards compatibility",
    "i18n"
  ],
  spoken: ["English", "Arabic (native)"]
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend and platform first: Ruby on Rails, AWS and the database under it. LLM systems over Bedrock, OpenAI and Gemini, with the reliability work that makes them boring. React and Hotwire when the feature needs a front end.",
  skills: [
    "Backend systems in Ruby on Rails, from background job internals to metered billing.",
    "AWS platform work: ECS Fargate, Lambda, Terraform and CloudWatch, from capacity study to deploy pipeline.",
    "LLM integration: a provider-agnostic engine over Bedrock, OpenAI and Gemini, with fallback chains, evaluation harnesses and MCP.",
    "Root-cause investigation on production incidents, separating what is verified from what is inferred.",
    "Frontend when it is needed: React, Hotwire, React Native."
  ]
};

export const educationInfo = {
  schools: [
    {
      schoolName: "Cairo University",
      logo: "/img/CairoUniversity.png",
      subHeader: "BSc in Geophysics",
      duration: "2012 – 2016"
    }
  ]
};

// CV durations/tags. Same rows as CONTENT.md section 3.
export const workExperiences = {
  experience: [
    {
      role: "Senior Software Engineer",
      company: "OnTheGoSystems (WPML — WordPress plugins)",
      companylogo: "/img/otgsLogo.png",
      date: "December 2024 – Present",
      duration: "1 yr 10 mo",
      location: "Remote (Hong Kong)",
      tags: [
        "Ruby on Rails",
        "React",
        "ECS Fargate",
        "Lambda",
        "Terraform",
        "Aurora",
        "Bedrock"
      ],
      desc: "I worked on Private Translation Cloud (PTC), an AI translation platform from the team behind WPML, the multilingual plugin that powers over a million WordPress sites. Product work in Rails and React, and the AWS platform underneath it.",
      descBullets: [
        "Built the multi-provider translation LLM engine behind WPML (Bedrock, OpenAI, Gemini): fallback chains, JSON repair and rate-limit retries keep translations flowing when a provider degrades.",
        "Built the guardrails agents run behind: an MCP server exposing live databases, logs and selected APIs through authenticated, monitored access, adopted as the team's standard agent integration path.",
        "Owned credits and billing correctness for a metered LLM product; one authorization architecture to replace scattered permission checks.",
        "Own an agentic triage platform that handles first-line incident and support inquiries, cutting Mean Time To Resolve.",
        "Cleared Aurora MySQL's worst-query backlog query by query: rewritten plans, covering indexes and restructured hot reads, until CPU pressure stopped turning into incidents.",
        "Replaced ECS autoscaling with a queue-depth Lambda autoscaler that drains long-running jobs instead of killing them.",
        "Owned the GitLab CI/CD pipelines: build, e2e test, SAST and deploy gates for every service in the product.",
        "Kept plugin APIs backwards compatible across releases with deprecation paths and contract tests.",
        "Migrated the product onto AWS ECS Fargate running Docker containers, and own the platform and its Terraform."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dailymealz",
      companylogo: "/img/dailymealzLogo.png",
      date: "December 2021 – December 2024",
      duration: "3 yrs",
      location: "Riyadh",
      tags: ["React Native", "Node.js", "AWS", "Datadog", "Redis"],
      desc: "Built and scaled a meal subscription platform serving customers across Saudi Arabia, with a React Native driver app and the Node.js services behind it.",
      descBullets: [
        "Built the real-time order service behind a 100,000 daily-user delivery product: kitchen, driver and delivery status pushed to mobile and web clients over Node.js and Socket.IO.",
        "Cut Mean Time To Resolve by 30% by instrumenting order, driver and kitchen flows with Datadog and OpenTelemetry.",
        "Decomposed the fulfillment component out of the PHP/Laravel monolith into a standalone service in a distributed event-driven architecture, passing state changes over AWS SQS behind a REST API contract.",
        "Chose incremental extraction over a full event-driven rewrite, because a team of six could not freeze features for months to run two partially consistent systems.",
        "Served hot order state from Redis in a write-behind cache pattern with MySQL behind it, keeping status fan-out off the transactional path.",
        "Migrated the real-time order service from JavaScript to TypeScript so event and message payload mismatches fail at compile time, not at runtime in front of customers.",
        "Led a team of five building a driver location check-in system: planning, reviews and pairing across the driver app."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Nformacy",
      companylogo: "/img/nformacy.png",
      date: "October 2020 – December 2021",
      duration: "1 yr 2 mo",
      location: "Cairo",
      tags: ["React", "Ruby on Rails"],
      desc: "Built Nformacy, a knowledge marketplace that connects business advisors with companies that need their expertise. Full-stack work in React and Ruby on Rails, from the first MVP to the beta launch, plus the cloud infrastructure and deploy pipelines.",
      descBullets: [
        "Led full-stack features from requirements to deployment, and moved the web apps to a SaaS model.",
        "Built mentor calendar booking with Zoom, ClickUp and calendar integrations.",
        "Wrote BDD tests and managed CI/CD pipelines."
      ]
    },
    {
      role: "Software Engineer",
      company: "DevSquads (formerly Fikr Labs)",
      companylogo: "/img/devsquads.webp",
      date: "January 2018 – October 2020",
      duration: "2 yrs 9 mo",
      location: "Cairo",
      tags: ["React", "React Native", "Node.js", "Java Spring", "TDD"],
      desc: "My first job in tech, at a Cairo venture studio that became DevSquads, an agile consultancy that takes XP seriously: TDD, pair programming and continuous delivery. Delivered products for international clients, including Shapa, a US health tech platform (React, React Native, Node.js, Java Spring).",
      descBullets: [
        "Built software in self-organizing Extreme Programming teams with TDD, thin vertical slices and test-covered refactoring of legacy code, across React Native, Ruby on Rails, Java Spring and React.",
        "Mentored teams adopting XP and Agile practices: pairing, code review discipline and iterative planning."
      ]
    }
  ]
};

export const bigProjects = {
  title: "Products",
  subtitle: "Products I helped build",
  projects: [
    {
      image: "/img/ptcLogo.png",
      projectName: "Private Translation Cloud",
      projectDesc:
        "AI translation service from the team behind WPML. I worked on the platform that translates websites automatically, and on the AWS infrastructure and LLM engine layer underneath it.",
      footerLink: [{name: "Visit Website", url: "https://ptc.wpml.org/"}]
    },
    {
      image: "/img/dailymealzLogo.png",
      projectName: "Dailymealz",
      projectDesc:
        "Meal subscription service in Saudi Arabia. I spent three years building its apps, dashboards and the infrastructure behind them.",
      footerLink: [{name: "Visit Website", url: "https://dailymealz.com/"}]
    },
    {
      image: "/img/shapa.png",
      projectName: "Shapa",
      projectDesc:
        "US health product built around a numberless smart scale and a behavior change program. I worked on the mobile app and the backend behind it.",
      footerLink: [{name: "Visit Website", url: "https://shapahealth.com/"}]
    },
    {
      image: "/img/nformacy.png",
      projectName: "Nformacy",
      projectDesc:
        "Knowledge marketplace that connects business advisors with companies that need their expertise. I built it from the first MVP to the beta launch.",
      footerLink: [{name: "Visit Website", url: "https://nformacy.com/"}]
    }
  ]
};

export const contactInfo = {
  title: "Contact me",
  subtitle:
    "Hiring for a senior backend or platform role, or stuck on a production problem? Email me.",
  email_address: "abdelwahabahmed93@gmail.com"
};

// The one profile, translated. CV-listed facts only (CONTENT.md section 1).
export const codeSnippets = [
  {
    label: "typescript",
    filename: "engineer.ts",
    lang: "ts",
    code: `interface Engineer {
  name: "Abdelwahab Mahmoud";
  basedIn: "Cairo, Egypt";
  since: 2018;
  stack: ["rails", "aws", "typescript", "go", "sql"];
  cares: ["reliability", "tests", "fast queries"];
  status: "open to remote work";
}`
  },
  {
    label: "ruby",
    filename: "engineer.rb",
    lang: "ruby",
    code: `class Engineer
  def initialize
    @name     = "Abdelwahab Mahmoud"
    @based_in = "Cairo, Egypt"
    @since    = 2018
    @stack    = %i[rails aws typescript go sql]
    @cares    = %i[reliability tests fast_queries]
    @status   = :open_to_remote_work
  end
end`
  },
  {
    label: "go",
    filename: "engineer.go",
    lang: "go",
    code: `type Engineer struct {
  Name    string
  BasedIn string
  Since   int
  Stack   []string
  Cares   []string
  Status  string
}

var me = Engineer{
  Name:    "Abdelwahab Mahmoud",
  BasedIn: "Cairo, Egypt",
  Since:   2018,
  Stack:   []string{"rails", "aws", "typescript", "go", "sql"},
  Cares:   []string{"reliability", "tests", "fast queries"},
  Status:  "open to remote work",
}`
  },
  {
    label: "sql",
    filename: "query.sql",
    lang: "sql",
    code: `SELECT name, based_in, since, stack, status
FROM engineers
WHERE based_in = 'Cairo, Egypt'
  AND status = 'open to remote work';`
  }
];
