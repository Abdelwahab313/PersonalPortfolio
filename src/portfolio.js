/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

const greeting = {
  username: "Abdelwahab",
  title: "Hi, I'm Abdelwahab",
  subTitle:
    "Senior software engineer, eight years in. I write the feature and then own the platform under it. The last two years went to a Rails translation product: its LLM engine layer, its move onto ECS Fargate, and the credits that meter it. I am usually the one who finds out why production broke. Cairo, UTC+3. Open to remote senior backend, platform and AI-platform roles.",
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
      company: "OnTheGoSystems",
      companylogo: require("./assets/images/otgsLogo.png"),
      logoWidth: 180,
      logoHeight: 180,
      date: "December 2024 – September 2026",
      duration: "1 yr 9 mo",
      location: "Remote",
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
        "Built the Rails translation engine across Claude on Bedrock, OpenAI and Gemini: ordered fallback chains when a provider fails, JSON repair, Langfuse tracing, and rate-limit retries for the errors behind 65% of review failures.",
        "Moved the product off a single EC2 host onto ECS Fargate, then owned that platform and its Terraform for 16 months, running the worker fleet 90% on Spot.",
        "Replaced ECS autoscaling with a queue-depth autoscaler on Lambda that drains workers instead of stopping them, because scale-in kills tasks abruptly and these jobs run from 30 seconds to 2 hours.",
        "Owned credits and billing correctness for a metered LLM product, found the 7 millisecond check-then-act race that had been silently pausing work, and replaced the scattered credit checks with one authorization architecture, written up across four ADRs.",
        "Traced Aurora at 100% CPU to a status broadcast whose query plan examined 7.33M rows per call, dropped the join and throttled the caller from 1,013 calls to about 100.",
        "Shipped an agent-driven triage platform for production exceptions, with the pass and fail call in code rather than the prompt. Replayed on past incidents, it caught three false passes.",
        "Wrote the ISO 27001 audit checklist and the risk profiles behind it, then built the disaster recovery and data loss prevention programs to a documented 30-minute RTO and 15-minute RPO."
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
      tags: ["React Native", "Node.js", "Docker", "AWS", "Datadog"],
      desc: "Built and scaled a meal subscription platform serving customers across Saudi Arabia.",
      descBullets: [
        "Led a team of five on the driver app's background location check-in system (React Native, Node.js).",
        "Built the App Center pipeline for store deployment and internal testing.",
        "Added Datadog and OpenTelemetry monitors on the main flows, and automated CI/CD and infrastructure on Docker and AWS."
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
      desc: "Built Nformacy, a knowledge marketplace that connects business advisors with companies that need their expertise. Full-stack work in React and Ruby on Rails, from the first MVP to the beta launch, plus the cloud infrastructure and deploy pipelines."
    },
    {
      role: "Software Engineer",
      company: "DevSquads",
      companylogo: require("./assets/images/devsquads.webp"),
      logoWidth: 170,
      logoHeight: 170,
      date: "August 2018 – October 2020",
      duration: "2 yrs 2 mo",
      location: "Cairo",
      tags: ["React", "React Native", "Node.js", "Java Spring", "TDD"],
      desc: "Worked at an agile consultancy that takes XP seriously: TDD, pair programming and continuous delivery. Delivered products for international clients, including Shapa, a US health tech platform (React, React Native, Node.js, Java Spring)."
    },
    {
      role: "Software Engineer",
      company: "Fikr Labs",
      companylogo: require("./assets/images/fikrlabs.jpeg"),
      logoWidth: 280,
      logoHeight: 280,
      date: "January 2018 – August 2018",
      duration: "7 mo",
      location: "Cairo",
      desc: "My first job in tech. Built web apps for early stage products at a Cairo based venture studio and learned how to ship thin vertical slices with tests."
    }
  ]
};

// Case studies section

const caseStudies = {
  title: "Case studies",
  subtitle:
    "Four systems from the last two years. What was there, what I decided, what it cost, and what changed.",
  cases: [
    {
      id: "fargate",
      title: "Draining, not stopping",
      product: "Private Translation Cloud",
      link: "https://ptc.wpml.org/",
      diagram: "fargate",
      diagramCaption:
        "Queue depth drives the autoscaler. Workers drain, then stop.",
      situation:
        "The product ran on a single EC2 host. Translation jobs run from 30 seconds to 2 hours, and ECS scale-in kills tasks abruptly, so a naive autoscaler can throw away up to two hours of work per worker.",
      decision:
        "Move onto ECS Fargate, and replace ECS autoscaling with a queue-depth autoscaler on Lambda that tells workers to drain before they stop.",
      tradeoff:
        "Draining costs a few idle minutes per shutdown. Stopping costs the whole job, because a killed job re-runs from the start. For jobs this long, draining wins.",
      outcome:
        "I owned that platform and its Terraform for 16 months, and ran the worker fleet 90% on Spot."
    },
    {
      id: "engine",
      title: "One engine, three providers",
      product: "Private Translation Cloud",
      link: "https://ptc.wpml.org/",
      diagram: "engine",
      diagramCaption:
        "One request path through the engine, ordered providers with fallback, credits metered on the side.",
      situation:
        "A metered LLM product behind one provider is at that provider's mercy. Rate limit errors were responsible for 65% of review failures.",
      decision:
        "A provider-agnostic engine layer over Claude on Bedrock, OpenAI and Gemini, with ordered fallback chains. Rate limits are treated as reschedules, not failures. Responses get JSON repair before anything downstream sees them, and Langfuse traces every hop.",
      tradeoff:
        "The abstraction means no provider's unique features come for free, and cost varies by which branch of the chain runs. In exchange, a provider outage stops being our outage.",
      outcome:
        "I owned credits and billing correctness on top of the engine, found a 7 millisecond check-then-act race that had been silently pausing work, and replaced the scattered credit checks with one authorization architecture, written up across four ADRs."
    },
    {
      id: "aurora",
      title: "7.33M rows per call",
      product: "Private Translation Cloud",
      link: "https://ptc.wpml.org/",
      diagram: "aurora",
      diagramCaption:
        "One broadcast, many clients, one query plan doing the damage.",
      situation:
        "Aurora hit 100% CPU. The suspect was a status broadcast that pushes state to clients, called 1,013 times.",
      decision:
        "Read the plan before touching the query. It examined 7.33M rows per call, which is a scan, not a lookup. Drop the join rather than tune it, and throttle the caller.",
      tradeoff:
        "The throttle means some clients see state less often than they did. The instance staying up is worth more than broadcast freshness.",
      outcome:
        "CPU back to baseline, the caller down from 1,013 calls to about 100."
    },
    {
      id: "triage",
      title: "The verdict lives in code, not the prompt",
      product: "Private Translation Cloud",
      link: "https://ptc.wpml.org/",
      diagram: "triage",
      diagramCaption:
        "Agents investigate inside guardrails. The verdict gate is code. Writes stay human.",
      situation:
        "Production exceptions needed triage before a human looked at them. An agent that only explains an incident is easy to trust and easy to fool.",
      decision:
        "An agent-driven triage platform where the pass and fail call lives in code, not in the prompt. Agents run behind production tooling: read-only data access with a rollback wrapper, an audit log, and a human-only write gate.",
      tradeoff:
        "Code verdicts mean maintaining a test harness instead of a clever prompt. Deterministic checks are worth that maintenance, because a false pass is worse than no answer.",
      outcome:
        "Replayed on past incidents, it caught three false passes. It now also adjudicates support claims."
    }
  ]
};

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
  caseStudies,
  openSource,
  bigProjects,
  contactInfo
};
