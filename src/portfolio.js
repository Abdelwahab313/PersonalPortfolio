/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

const greeting = {
  username: "Abdelwahab",
  title: "Hi, I'm Abdelwahab",
  subTitle:
    "Senior software engineer, eight years in. I build production AWS systems and own them from architecture through deployment to reliability: Node.js and TypeScript services, a delivery platform serving 100K daily users, and WPML's LLM translation and agent platform on 1.5M+ WordPress sites. I am usually the one who finds out why production broke. Cairo, UTC+3. Open to remote senior backend, platform and AI-platform roles.",
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdelwahab313",
  linkedin: "https://www.linkedin.com/in/abdelwahab313/",
  gmail: "abdelwahabahmed93@gmail.com",
  gitlab: "https://gitlab.com/abdelwahab313",
  twitter: "https://twitter.com/Abdelwahab313",
  stackoverflow: "https://stackoverflow.com/users/6846745/abdelwahab-mahmoud",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend and platform first: Ruby on Rails, AWS and the database under it. LLM systems over Bedrock, OpenAI and Gemini, with the reliability work that makes them boring. React and Hotwire when the feature needs a front end.",
  skills: [
    "Backend systems in Ruby on Rails, from background job internals to metered billing.",
    "AWS platform work: ECS Fargate, Lambda, Terraform and CloudWatch, from capacity study to deploy pipeline.",
    "LLM integration: a provider-agnostic engine over Bedrock, OpenAI and Gemini, with fallback chains, evaluation harnesses and MCP.",
    "Root-cause investigation on production incidents, separating what is verified from what is inferred.",
    "Frontend when it is needed: React, Hotwire, React Native."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cairo University",
      logo: require("./assets/images/CairoUniversity.png"),
      subHeader: "BSc in Geophysics",
      duration: "2012 – 2016",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "91%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "65%"
    },
    {
      Stack: "Testing",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "OnTheGoSystems (WPML — WordPress plugins)",
      companylogo: require("./assets/images/otgsLogo.png"),
      logoWidth: 180,
      logoHeight: 180,
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
      companylogo: require("./assets/images/dailymealzLogo.png"),
      logoWidth: 336,
      logoHeight: 96,
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
      companylogo: require("./assets/images/nformacy.png"),
      logoWidth: 398,
      logoHeight: 156,
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
      companylogo: require("./assets/images/devsquads.webp"),
      logoWidth: 170,
      logoHeight: 170,
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

// Blog posts live in src/content/blog/ (see docs/BLOG.md). Nothing to register here.

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Products",
  subtitle: "Products I helped build",
  projects: [
    {
      image: require("./assets/images/ptcLogo.png"),
      imageWidth: 192,
      imageHeight: 192,
      projectName: "Private Translation Cloud",
      projectDesc:
        "AI translation service from the team behind WPML. I worked on the platform that translates websites automatically, and on the AWS infrastructure and LLM engine layer underneath it.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ptc.wpml.org/"
        }
      ]
    },
    {
      image: require("./assets/images/dailymealzLogo.png"),
      imageWidth: 336,
      imageHeight: 96,
      projectName: "Dailymealz",
      projectDesc:
        "Meal subscription service in Saudi Arabia. I spent three years building its apps, dashboards and the infrastructure behind them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dailymealz.com/"
        }
      ]
    },
    {
      image: require("./assets/images/shapa.png"),
      imageWidth: 480,
      imageHeight: 480,
      projectName: "Shapa",
      projectDesc:
        "US health product built around a numberless smart scale and a behavior change program. I worked on the mobile app and the backend behind it.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shapahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nformacy.png"),
      imageWidth: 398,
      imageHeight: 156,
      projectName: "Nformacy",
      projectDesc:
        "Knowledge marketplace that connects business advisors with companies that need their expertise. I built it from the first MVP to the beta launch.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nformacy.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact me",
  subtitle:
    "Hiring for a senior backend or platform role, or stuck on a production problem? Email me.",
  number: "+20-1147784094",
  email_address: "abdelwahabahmed93@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo
};
