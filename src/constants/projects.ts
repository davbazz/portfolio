import Trellis from "/projects/trellis.png";
import EnergyAssessment from "/projects/energy-assessment.png";
import Bluedot from "/projects/bluedot.png";
import AnnualReport from "/projects/annual-report.png";
import Rowden from "/projects/rowden.png";
import Together from "/projects/together.png";
import Alchem from "/projects/alchem.png";
import ZapUI from "/projects/zapui.png";
import type { ProjectProps } from "@/components/core";

export const projectsBuilt: ProjectProps[] = [
  {
    image: Trellis,
    url: "https://trellisapp.co.uk",
    project: "Trellis Platform",
    title: "Software Engineer",
    description: [
      "Owned full-stack feature delivery, written in Go — from database schema design through API route implementation to frontend integration in Angular",
      "Built the HR and CRM modules end-to-end: leave/absence management and allocation tracking, plus contact management, each taken from data model to shipped UI",
      "Contributed ~30% of the production codebase as one of a small engineering team working daily across the stack",
    ],
    tech: ["Go", "Typescript"],
  },
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
  {
    image: Together,
    url: "https://togethercreative.co.uk",
    project: "Website for Together Creative",
    title: "Software Engineer",
    description: [
      "Improved Lighthouse performance by 35%",
      "Migrated the site from Next.js 12 to 14",
      "Built additional pages using Next.js and Strapi CMS",
    ],
    tech: ["Next.js", "TypeScript", "Strapi CMS"],
  },
  {
    image: Alchem,
    url: "https://www.alchemtechnologies.com",
    project: "Website for Alchem Technologies",
    title: "Software Engineer",
    description: [
      "Implemented user-friendly, responsive UI updates on key pages",
      "Built additional pages using Next.js and Strapi CMS",
      "Provided ongoing support and maintenance for the company’s main website",
    ],
    tech: ["Next.js", "TypeScript", "Strapi CMS"],
  },
  {
    image: ZapUI,
    url: "https://zapui.togethercreative.co.uk",
    project: "ZapUI Documentation Website",
    title: "Software Engineer",
    description: [
      "Wrote over 50% of the documentation for the open-source component library in Angular",
      "Built and tested components included in the library",
    ],
    tech: ["Angular", "TypeScript"],
  },
];
