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
  subTitle: emoji(
    `Senior Full-stack Engineer 🚀 with 8+ years of building cool stuff. I speak fluent React, Node.js, Laravel and Ruby on Rails, and I get way too excited about DevOps. Led teams to slash delivery times and boost app performance. Always up for a coding challenge or a tech chat. `
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vHl-dLYdT35yFkSiE0RiGss61iSB-Wws/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdelwahab313",
  linkedin: "https://www.linkedin.com/in/abdelwahab313/",
  gmail: "abdelwahab313m@gmail.com",
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
    "I'm all about React and React Native on the front end, and I can switch gears to Node.js, Ruby on Rails, or Java Spring when it's time to dive into the back end. And don't get me started on my love affair with DevOps – I'm that guy who gets excited about Automation and Infrastructure as Code.",
  skills: [
    emoji("⚡ Leading dev teams to crush goals and ship awesome products 🏆"),
    emoji("⚡ Juggling full-stack projects like a pro 🤹‍♂️"),
    emoji("⚡ Whipping up slick frontends with React and React Native 📱✨"),
    emoji(
      "⚡ Crafting robust backends using Node.js, Ruby on Rails, and Java Spring 🛠️"
    ),
    emoji("⚡ Automating all the things for silky-smooth CI/CD pipelines 🤖"),
    emoji("⚡ Always leveling up and learning the latest tech tricks 📚🆙")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "Java Spring",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Reactjs",
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
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      subHeader: "Bsc of Science in Geophysics",
      duration: "2012 - 2016",
      desc: "Leveraged strong analytical skills from Geophysics to solve complex problems in software development.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      date: "December 2024 – Present",
      desc: "I work on Private Translation Cloud (PTC), an AI translation platform from the team behind WPML, the multilingual plugin that powers over a million WordPress sites.",
      descBullets: [
        "Build full-stack features across the translation pipeline with Ruby on Rails, React and AWS ECS",
        "Keep production healthy: monitoring, digging through logs and handling incidents on AWS",
        "Use product analytics (PostHog) to learn what users actually need before building it"
      ]
    },
    {
      role: "Senior Full-stack Engineer",
      company: "DailyMealz",
      companylogo: require("./assets/images/dailymealzLogo.png"),
      date: "December 2021 – December 2024",
      desc: "Built and scaled a meal subscription platform serving customers across Saudi Arabia.",
      descBullets: [
        "Led development of the customer apps and internal operations dashboards (React, React Native, Node.js)",
        "Mentored engineers and streamlined our delivery process, cutting release cycle time",
        "Improved app performance and automated CI/CD pipelines and infrastructure (Docker, AWS)"
      ]
    },
    {
      role: "Software Engineer",
      company: "nformacy",
      companylogo: require("./assets/images/nformacy.png"),
      date: "Oct 2020 – Dec 2021",
      desc: "Built nformacy, a knowledge marketplace that connects business advisors with companies that need their expertise. Full-stack work with React and Ruby on Rails, from the first MVP to the beta launch."
    },
    {
      role: "Software Engineer",
      company: "Devsquads",
      companylogo: require("./assets/images/devsquads.webp"),
      date: "Sep 2018 – Oct 2020",
      desc: "Worked at an agile consultancy that takes XP seriously: TDD, pair programming and continuous delivery. Delivered products for international clients, including Shapa, a US health tech platform (React, React Native, Node.js)."
    },
    {
      role: "Jr Software Engineer",
      company: "Fikrlabs",
      companylogo: require("./assets/images/fikrlabs.jpeg"),
      date: "Jan 2018 – Sep 2018",
      desc: "My first job in tech. Built web apps for early stage products at a Cairo based venture studio (Laravel, JavaScript) and learned how to ship fast."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ptcLogo.png"),
      projectName: "Private Translation Cloud",
      projectDesc:
        "AI translation service from the team behind WPML. I work on the platform that translates websites automatically while keeping the quality close to human translators.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ptc.wpml.org/"
        }
      ]
    },
    {
      image: require("./assets/images/dailymealzLogo.png"),
      projectName: "DailyMealz",
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
      projectName: "nformacy",
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20-1147784094",
  email_address: "abdelwahab313m@gmail.com"
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

// Kanban Game Simulation
//      React SPA Board Game to simulate the concepts and mechanics of Kanban for software development.
