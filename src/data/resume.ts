import type { Profile, Experience, Education, Skill, Project } from '../types/resume';

export const profile: Profile = {
  name: "Sara Makawi", // adjust to your preferred display name
  title: "Full-Stack Software Engineer",
  tagline: "Software engineer with cross-domain experience spanning data engineering, enterprise platforms, and full-stack web development.",
  email: "saramakawi@alumni.usc.edu",
  location: "Buffalo, NY",
  githubUrl: "https://github.com/saramakawi",
  linkedinUrl: "https://linkedin.com/in/sara-makawi",
};

export const experiences: Experience[] = [
  {
    company: "M&T Bank",
    role: "Software Engineer",
    location: "Buffalo, NY",
    startDate: "2024",
    endDate: "Present",
    bullets: [
      // Action verb + what you did + measurable impact
      "Developed the UI/UX redesign in Figma and custom configurations through HTML, CSS, and JavaScript for the ServiceNow portal, enhancing employee experience and aligning the platform with enterprise branding standards.",
      "Drove the migration effort from legacy Service Portal to new Employee Center system by leading focus groups across different departments at the bank and coordinating rollout and communication across the enterprise.",
      "Created and maintained ServiceNow Service Catalog solutions, translating business requests into efficient technical solutions, supporting over 300 items used across the enterprise while balancing platform standards, performance, and customer needs.",
      "Managed and centralized data ingestion on ETL data pipelines utilizing Informatica data tools for all consumer data.",
      "Supported enterprise-wide data migration by converting Hadoop table mappings to Snowflake for ODBC-compliant database sources, and testing and validating Automic workflows and jobs.",
      "Diagnosed and solved production failures and problems, reducing our average number of incidents a month by 80%."
    ],
    technologies: ["ServiceNow", "JavaScript", "HTML", "CSS", "REST APIs", "Figma", "Snowflake", "Informatica", "Hadoop"],
  },
  {
    company: "M&T Bank",
    role: "Front-End Software Engineering Intern",
    location: "Buffalo, NY",
    startDate: "2022",
    endDate: "2022",
    bullets: [
      "Developed and automated U.S. Treasury Money Market Fund data by utilizing an API to pull monthly data for the Wilmington Trust website using Adobe Experience Manager.",
      "Enhanced UX by testing designs in Figma and integrating Bootstrap CSS into M&T and Wilmington Trust websites."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Figma", "Bootstrap", "Adobe Experience Manager"], // adjust to your real stack
  },
  // Add your earliest role here
];

export const education: Education[] = [
  {
    institution: "University of Southern California",
    degree: "Bachelor of Arts",
    field: "Applied and Computational Mathematics", // adjust
    location: "Los Angeles, CA",
    graduationDate: "2023",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Web Development",
    ],
  },
];

export const skills: Skill[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "C++", "Java", "REST APIs"] },
  { category: "Data", items: ["Snowflake", "SQL", "Hadoop"] },
  { category: "Tools", items: ["Git", "ServiceNow", "Figma", "VS Code"] },
];

export const projects: Project[] = [
  {
    name: "Personal Website",
    description: "My personal site: a full-stack portfolio built with React, TypeScript, Tailwind, and a Node/Express backend with a working contact form.",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Express"],
    githubUrl: "https://github.com/saramakawi/personal-website",
    liveUrl: "", // fill in after Phase 8 deployment
  },
  // We'll add the 2-3 gap-targeting projects from Phase 7 here later
];