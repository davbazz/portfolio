import Bluedot from "/projects/bluedot.png";
import EnergyAssessment from "/projects/energy-assessment.png";
import Rowden from "/projects/rowden.png";
import ZapUI from "/projects/zapui.png";
import Alchem from "/projects/alchem.png";
import Together from "/projects/together.png";
import EAISF from "/projects/eaisf.png";
import Thrive from "/projects/thrive.png";
import type { ProjectProps } from "@/components/core";

export const projectsBuilt: ProjectProps[] = [
  {
    image: Bluedot,
    url: "https://bluedot-network.org",
    title: "Bluedot Network",
    description:
      "Led website development for the Bluedot Network, a G7-backed infrastructure initiative. Key features include an interactive map and embeddable certification badges to showcase awarded projects globally.",
    tech: ["Next.js", "Typescript", "Strapi CMS"],
  },
  {
    image: EnergyAssessment,
    url: "https://energyassessment.eco",
    title: "Energy Assessment (built for Google)",
    description:
      "Worked with a small team to build two iterations of an Energy Assessment tool for Google, helping organizations evaluate and reduce their energy spendings. Focused on frontend and API integrations.",
    tech: ["Angular", "Typescript", "NestJS"],
  },
  {
    image: Rowden,
    url: "https://www.rowdentech.com",
    title: "Rowden Technologies",
    description:
      "Migrated content architecture from Sanity to Strapi and rebuilt key parts of application to support it. Implemented dunamic routing and content page templating, including draft mode. Rowden delivers advanced AI and software systems for defence and national security.",
    tech: ["Next.js", "Typescript", "Strapi CMS"],
  },
  {
    image: ZapUI,
    url: "https://zapui.togethercreative.co.uk",
    title: "ZapUI Documentation",
    description:
      "Co-developed documentation site for our open-source Angular component library used across Together Creative projects to streamline UI development.",
    tech: ["Angular", "Typescript"],
  },
];

export const projectsMainteined: ProjectProps[] = [
  {
    image: Alchem,
    url: "https://www.alchemtechnologies.com",
    title: "Alchem Technologies",
    description:
      "Been implementing small changes and bugfixes, as well as code maintenace",
    tech: ["Next.js", "Typescript", "Strapi CMS"],
  },
  {
    image: Together,
    url: "https://togethercreative.co.uk",
    title: "Together Creative",
    description:
      "Improved Lighthouse performance by 35%, migrated the site from Next.js 12 to 14, and continue to maintain the company’s main brand website.",
    tech: ["Next.js", "Strapi CMS"],
  },
  {
    image: EAISF,
    url: "https://europeanaifund.org",
    title: "Europen Artificial Intelligence & Society Fund",
    description:
      "Refactored 30% of the site and added multiple new pages. Provide ongoing plugin updates. The fund supports responsible AI policy and research across Europe.",
    tech: ["Php", "Wordpress"],
  },
  {
    image: Thrive,
    url: "https://thriveldn.co.uk",
    title: "Thrive LDN",
    description:
      "Provide ongoing technical support for a public mental health initiative in London. Handle regular bugfixes, code edits, and plugin maintenance.",
    tech: ["Php", "Wordpress"],
  },
];

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
