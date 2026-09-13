# CONTENT

Single source for what the site says and how it says it. The CV is the source of truth for
facts; this file is the source of truth for site wording. When the two disagree, fix the CV
first, then this file, then `src/portfolio.js` and `public/index.html`.

CV source: `~/projects/playground/Awesome-CV`, branch `cv/post-ptc`, files under
`examples/resume/`. Built PDF: `examples/resume.pdf`.

Last aligned: 2026-09-12.

---

## 1. Canonical facts

Every value below appears verbatim in the CV. The site must not vary spelling, casing, dates
or titles.

| Field | Value |
|---|---|
| Name | Abdelwahab Mahmoud |
| Title | Senior Software Engineer · Backend & Platform |
| Location | Cairo, Egypt (UTC+3) |
| Email | abdelwahabahmed93@gmail.com |
| Phone | +20 114 778 4094 |
| Career start | January 2018 |
| Years | "eight years" or "8+ years" (recheck each January) |
| GitHub | github.com/abdelwahab313 |
| LinkedIn | linkedin.com/in/abdelwahab313 |
| Site | abdelwahab.dev |

### Employment

| Company | Location | Title | Dates |
|---|---|---|---|
| OnTheGoSystems | Remote (Hong Kong) | Senior Software Engineer | Dec 2024 – Sep 2026 |
| Dailymealz | Riyadh, Saudi Arabia | Senior Software Engineer | Dec 2021 – Dec 2024 |
| Nformacy | Cairo, Egypt | Full-Stack Developer | Oct 2020 – Dec 2021 |
| DevSquads | Cairo, Egypt | Software Engineer | Aug 2018 – Oct 2020 |
| Fikr Labs | Cairo, Egypt | Software Engineer | Jan 2018 – Aug 2018 |

No job is current. Every entry is past tense.

### Skills (same rows as the CV)

| Row | Skills |
|---|---|
| Languages | Ruby, JavaScript, TypeScript, Python, PHP, Java |
| Backend | Ruby on Rails, Node.js, FastAPI, Delayed Job, REST APIs, Laravel, Java Spring |
| Frontend | React, Next.js, Redux, Hotwire (Turbo & Stimulus), React Native, Tailwind CSS |
| AI & LLM | AWS Bedrock, OpenAI, Gemini, Claude Agent SDK, MCP, prompt versioning, evaluation harnesses |
| Cloud & Infrastructure | AWS (ECS Fargate, Lambda, Step Functions, CloudWatch, S3, IAM), Terraform, Docker, GitLab CI |
| Databases | MySQL, Aurora, PostgreSQL, DynamoDB, Redis |
| Testing | RSpec, Capybara, Playwright, Cypress, Jest, VCR |

Site skill icons are a subset of this table, in this order: Ruby on Rails, AWS, Terraform,
Docker, MySQL, PostgreSQL, Redis, Python, React, JavaScript, React Native, Node.js. Anything
not in the table above does not get an icon (drops Laravel, Firebase, html-5, css3, sass).

---

## 2. Tone

The CV is terse and third person. The site is first person and a little warmer. Same facts,
same numbers, same order of emphasis: platform and backend first, LLM systems second,
frontend last.

Rules, in priority order:

1. **Past tense for every job.** None is current.
2. **Concrete over abstract.** A bullet names a system, a change, and why. "Built full-stack
   features across the translation pipeline" says nothing. "Moved the product off a single EC2
   host onto ECS Fargate" says something.
3. **Numbers only when defensible in an interview.** Odd, specific numbers (7.33M rows, 1,013
   calls, 7 milliseconds) are fine. Round percentages with no source ("30% faster") are not.
4. **No template voice.** Banned: "cool stuff", "like a pro", "whipping up", "slick",
   "silky-smooth", "crush goals", "all the things", "leveling up", "tech tricks", "love affair",
   "I'm that guy". No exclamation marks.
5. **No emoji in prose.** Emoji may remain only where the template uses them as icons
   (section headings), not inside sentences.
6. **No em dashes.** Use a full stop or a comma.
7. **No self-assessment numbers.** Proficiency bars off (`viewSkillBars: false`).
8. **One sentence on availability**, in the hero. Location, timezone, what roles.
9. **No filler lines.** The Geophysics "leveraged strong analytical skills" sentence goes.
10. **Company and product names exactly as in section 1.** Not "DailyMealz", "nformacy",
    "Devsquads", "Fikrlabs".

---

## 3. Site copy

Paste-ready. Keys refer to `src/portfolio.js` unless noted.

### Hero (`greeting.title`, `greeting.subTitle`)

Title: `Hi, I'm Abdelwahab`

Subtitle:

> Senior software engineer, eight years in. I write the feature and then own the platform
> under it. The last two years went to a Rails translation product: its LLM engine layer, its
> move onto ECS Fargate, and the credits that meter it. I am usually the one who finds out why
> production broke. Cairo, UTC+3. Open to remote senior backend, platform and AI-platform roles.

### Meta (`public/index.html` title, description, og, twitter)

Title: `Abdelwahab Mahmoud | Senior Software Engineer, Backend & Platform`

Description:

> Abdelwahab Mahmoud, senior software engineer in Cairo. Ruby on Rails, AWS (ECS Fargate,
> Lambda, Terraform) and LLM platforms over Bedrock, OpenAI and Gemini. Eight years building
> and operating production systems.

### Skills section (`skillsSection.title`, `skillsSection.subTitle`, `skillsSection.skills`)

Title: `What I do`

Subtitle:

> Backend and platform first: Ruby on Rails, AWS and the database under it. LLM systems over
> Bedrock, OpenAI and Gemini, with the reliability work that makes them boring. React and
> Hotwire when the feature needs a front end.

Bullets (replace all six):

- Backend systems in Ruby on Rails, from background job internals to metered billing.
- AWS platform work: ECS Fargate, Lambda, Terraform and CloudWatch, from capacity study to deploy pipeline.
- LLM integration: a provider-agnostic engine over Bedrock, OpenAI and Gemini, with fallback chains, evaluation harnesses and MCP.
- Root-cause investigation on production incidents, separating what is verified from what is inferred.
- Frontend when it is needed: React, Hotwire, React Native.

### Work experience (`workExperiences.experience`)

**OnTheGoSystems**, Senior Software Engineer, December 2024 – September 2026

> I worked on Private Translation Cloud (PTC), an AI translation platform from the team behind
> WPML, the multilingual plugin that powers over a million WordPress sites. Product work in
> Rails and React, and the AWS platform underneath it.

- Moved the product off a single EC2 host onto ECS Fargate, sizing the worker fleet from a capacity study of 12,500 jobs across 12 configurations, then wrote the Terraform and the deploy pipeline.
- Replaced ECS autoscaling with a queue-depth autoscaler on Lambda that drains workers instead of stopping them, because these jobs run from 30 seconds to 2 hours.
- Built the provider-agnostic engine layer over Claude on Bedrock, OpenAI and Gemini, with ordered fallback chains and rate limits treated as reschedules, not failures.
- Owned credits and billing for a metered LLM product, and found the 7 millisecond check-then-act race that had been silently pausing work.
- Traced an Aurora CPU saturation to a query plan examining 7.33M rows per call, and throttled the caller from 1,013 calls to about 100.
- Shipped an agent-driven triage platform for production exceptions.

**Dailymealz**, Senior Software Engineer, December 2021 – December 2024

> Built and scaled a meal subscription platform serving customers across Saudi Arabia.

- Led a team of five on the driver app's background location check-in system (React Native, Node.js).
- Built the App Center pipeline for store deployment and internal testing.
- Added Datadog and OpenTelemetry monitors on the main flows, and automated CI/CD and infrastructure on Docker and AWS.

**Nformacy**, Full-Stack Developer, October 2020 – December 2021

> Built Nformacy, a knowledge marketplace that connects business advisors with companies that
> need their expertise. Full-stack work in React and Ruby on Rails, from the first MVP to the
> beta launch, plus the cloud infrastructure and deploy pipelines.

**DevSquads**, Software Engineer, August 2018 – October 2020

> Worked at an agile consultancy that takes XP seriously: TDD, pair programming and continuous
> delivery. Delivered products for international clients, including Shapa, a US health tech
> platform (React, React Native, Node.js, Java Spring).

**Fikr Labs**, Software Engineer, January 2018 – August 2018

> My first job in tech. Built web apps for early stage products at a Cairo based venture studio
> and learned how to ship thin vertical slices with tests.

#### Timeline metadata (`duration`, `location`, `tags` on each entry)

The experience section renders as a vertical timeline. Each entry carries a duration and a
short location next to the date, and a row of tech chips under the text. Duration is the
month difference between the two dates. Tags may only name tech that already appears in that
entry's own description or bullets.

| Company | duration | location | tags |
|---|---|---|---|
| OnTheGoSystems | 1 yr 9 mo | Remote | Ruby on Rails, React, ECS Fargate, Lambda, Terraform, Aurora, Bedrock |
| Dailymealz | 3 yrs | Riyadh | React Native, Node.js, Docker, AWS, Datadog |
| Nformacy | 1 yr 2 mo | Cairo | React, Ruby on Rails |
| DevSquads | 2 yrs 2 mo | Cairo | React, React Native, Node.js, Java Spring, TDD |
| Fikr Labs | 7 mo | Cairo | none |

Entries with more than three bullets show three and a "Show N more" toggle.

### Big projects (`bigProjects.subtitle`, `bigProjects.projects`)

Subtitle: `Products I helped build`

**Private Translation Cloud**

> AI translation service from the team behind WPML. I worked on the platform that translates
> websites automatically, and on the AWS infrastructure and LLM engine layer underneath it.

Other three cards unchanged except names per section 1.

### Education (`educationInfo.schools[0]`)

subHeader: `BSc in Geophysics`. duration: `2012 – 2016`. desc: empty.

### Contact (`contactInfo.subtitle`, `contactInfo.email_address`)

> Hiring for a senior backend or platform role, or stuck on a production problem? Email me.

Email per section 1.

### Footer

Keep the theme credit as a single small line. Remove "Made with ❤️ by DeveloperFolio Team".

---

## 4. Field map

Where each fact lives, so an edit in one place is mirrored in the others.

| Fact | CV (`examples/resume/`) | Site |
|---|---|---|
| Title line | `../resume.tex` position field | `greeting.subTitle`, meta description |
| Summary | `summary.tex` | `greeting.subTitle` |
| Jobs, titles, dates | `experience.tex` | `workExperiences.experience[]` |
| OTGS bullets | `experience.tex` first `cventry` | `workExperiences.experience[0].descBullets` |
| Skills | `skills.tex` | `skillsSection.softwareSkills`, `skillsSection.skills` |
| Email, phone | `../resume.tex` header | `socialMediaLinks.gmail`, `contactInfo` |
| Education | `education.tex` | `educationInfo` |
| Years figure | `summary.tex` | `greeting.subTitle`, `CONTEXT.md` Positioning |

Resume button (`greeting.resumeLink`) points at `/resume.pdf`, which is `public/resume.pdf`
in this repo and ships with every build as `https://abdelwahab.dev/resume.pdf`. On every CV
build, copy `examples/resume.pdf` from the CV repo over `public/resume.pdf` and redeploy.

---

## 5. Open items against the live site (2026-09-12)

- No `og:image`.
- OnTheGoSystems bullets on the site include the 12,500-job capacity study and the Aurora
  7.33M rows / 1,013 calls bullets. Current CV HEAD dropped those for an ISO 27001 / disaster
  recovery bullet. Pick one side and mirror it.
- Everything else in this list as of the morning of 2026-09-12 (present tense, email, titles
  and dates, hero and meta, skill icons, proficiency bars, font preloads) is applied in the
  working tree and awaits deploy.
