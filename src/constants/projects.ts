import Bluedot from "/projects/bluedot.png";
import EnergyAssessment from "/projects/energy-assessment.png";
import AnnualReport from "/projects/annual-report.png";
import Rowden from "/projects/rowden.png";
// import ZapUI from "/projects/zapui.png";
// import Alchem from "/projects/alchem.png";
// import Together from "/projects/together.png";
// import EAISF from "/projects/eaisf.png";
// import Thrive from "/projects/thrive.png";
import type { ProjectProps } from "@/components/core";

// Lead Software Engineer
// Website for Blue Dot Network
// Led development of an entire site with Next.js and Strapi to create a delightful user experience for the client to manage Blue Dot–certified projects.
// Developed a secure, embeddable widget for displaying issued certifications on approved third-party websites.
// Built an interactive map to dynamically display all certified project locations.
// Together Creative
// Software Engineer
// Energy Assessment Platform for Google
// Built a sustainability-sector platform for Google that helps manufacturers reduce costs and lower emissions
// Developed an API with complex calculation systems using Nest.js to help users map industrial data and identify potential cost-saving opportunities.
// Delivered a multilingual, user-friendly front-end interface using Angular.
// Lead Software Engineer
// Annual Report for European AI Fund
// Led the development of an interactive Annual Report with React for the European AI Fund, enhancing engagement and usability.
// Implemented seamless, animated transitions between report sections to create a polished browsing experience.
// Built an internal library of reusable React components to accelerate future report development.
// Software Engineer
// Website for Rowden Technologies
// Migrated the entire backend from Sanity to Strapi to improve performance, content management, and client experience.
// Built a dynamic page generation feature with Next.js and Strapi, enabling the client to scale with ease.
// Implemented draft mode for content creation to streamline editorial workflows.

export const projectsBuilt: ProjectProps[] = [
  {
    image: EnergyAssessment,
    url: "https://energyassessment.eco",
    project: "Energy Assessment Platform for Google",
    title: "Software Engineer",
    description: [
      "Built a sustainability-sector platform for Google that helps manufacturers reduce costs and lower emissions.",
      "Developed an API with complex calculation systems using Nest.js to help users map industrial data and identify potential cost-saving opportunities.",
      "Delivered a multilingual, user-friendly front-end interface using Angular.",
    ],
    tech: ["Angular", "Typescript", "NestJS"],
  },
  {
    image: Bluedot,
    url: "https://bluedot-network.org",
    project: "Website for Blue Dot Network",
    title: "Lead Software Engineer",
    description: [
      "Led development of an entire site with Next.js and Strapi to create a delightful user experience for the client to manage Blue Dot–certified projects.",
      "Developed a secure, embeddable widget for displaying issued certifications on approved third-party websites.",
      "Built an interactive map to dynamically display all certified project locations.",
    ],
    tech: ["Next.js", "Typescript", "Strapi CMS"],
  },
  {
    image: AnnualReport,
    url: "https://annual-report.europeanaifund.org",
    project: "Annual Report for European AI Fund",
    title: "Lead Software Engineer",
    description: [
      "Led the development of an interactive Annual Report with React for the European AI Fund, enhancing engagement and usability.",
      "Implemented seamless, animated transitions between report sections to create a polished browsing experience.",
      "Built an internal library of reusable React components to accelerate future report development.",
    ],
    tech: ["React", "Vite", "Typescript"],
  },
  {
    image: Rowden,
    url: "https://www.rowdentech.com",
    project: "Website for Rowden Technologies",
    title: "Software Engineer",
    description: [
      "Migrated the entire backend from Sanity to Strapi to improve performance, content management, and client experience.",
      "Built a dynamic page generation feature with Next.js and Strapi, enabling the client to scale with ease.",
      "Implemented draft mode for content creation to streamline editorial workflows.",
    ],
    tech: ["Next.js", "Typescript", "Strapi CMS"],
  },
  // {
  //   image: ZapUI,
  //   url: "https://zapui.togethercreative.co.uk",
  //   title: "ZapUI Documentation",
  //   description:
  //     "Co-developed documentation site for our open-source Angular component library used across Together Creative projects to streamline UI development.",
  //   tech: ["Angular", "Typescript"],
  // },
];

// export const projectsMainteined: ProjectProps[] = [
//   {
//     image: Alchem,
//     url: "https://www.alchemtechnologies.com",
//     project: "Website for Alchem Technologies",
//     title: "Software Engineer",
//     // description:
//     //   "Been implementing small changes and bugfixes, as well as code maintenace",
//     description: [
//       ''
//     ],
//     tech: ["Next.js", "Typescript", "Strapi CMS"],
//   },
//   {
//     image: Together,
//     url: "https://togethercreative.co.uk",
//     title: "Together Creative",
//     description:
//       "Improved Lighthouse performance by 35%, migrated the site from Next.js 12 to 14, and continue to maintain the company’s main brand website.",
//     tech: ["Next.js", "Strapi CMS"],
//   },
//   {
//     image: EAISF,
//     url: "https://europeanaifund.org",
//     title: "Europen Artificial Intelligence & Society Fund",
//     description:
//       "Refactored 30% of the site and added multiple new pages. Provide ongoing plugin updates. The fund supports responsible AI policy and research across Europe.",
//     tech: ["Php", "Wordpress"],
//   },
//   {
//     image: Thrive,
//     url: "https://thriveldn.co.uk",
//     title: "Thrive LDN",
//     description:
//       "Provide ongoing technical support for a public mental health initiative in London. Handle regular bugfixes, code edits, and plugin maintenance.",
//     tech: ["Php", "Wordpress"],
//   },
// ];

// list of projects
// - bluedot
// - Google
// - rowden
// - annual report
// - togetherhub
// - zap

// maintained
// - alchem
// - together brand
// - eiasf
// - thrive
