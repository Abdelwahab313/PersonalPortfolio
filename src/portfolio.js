/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

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
        "Moved the product off a single EC2 host onto ECS Fargate, sizing the worker fleet from a capacity study of 12,500 jobs across 12 configurations, then wrote the Terraform and the deploy pipeline.",
        "Replaced ECS autoscaling with a queue-depth autoscaler on Lambda that drains workers instead of stopping them, because these jobs run from 30 seconds to 2 hours.",
        "Built the provider-agnostic engine layer over Claude on Bedrock, OpenAI and Gemini, with ordered fallback chains and rate limits treated as reschedules, not failures.",
        "Owned credits and billing for a metered LLM product, and found the 7 millisecond check-then-act race that had been silently pausing work.",
        "Traced an Aurora CPU saturation to a query plan examining 7.33M rows per call, and throttled the caller from 1,013 calls to about 100.",
        "Shipped an agent-driven triage platform for production exceptions."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dailymealz",
      companylogo: require("./assets/images/dailymealzLogo.png"),
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
      date: "January 2018 – August 2018",
      duration: "7 mo",
      location: "Cairo",
      desc: "My first job in tech. Built web apps for early stage products at a Cairo based venture studio and learned how to ship thin vertical slices with tests."
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
  title: "Big Projects",
  subtitle: "Products I helped build",
  projects: [
    {
      image: require("./assets/images/ptcLogo.png"),
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
      projectName: "Nformacy",
      projectDesc:
        "Knowledge marketplace that connects business advisors with companies that need their expertise. I built it from the first MVP to the beta launch.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://beta.nformacy.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Hiring for a senior backend or platform role, or stuck on a production problem? Email me.",
  number: "+20-1147784094",
  email_address: "abdelwahabahmed93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "abdelwahab313", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
