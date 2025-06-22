import Google from "/public/Company/google.png";
import Meta from "/public/Company/Meta.png";
import Netflix from "/public/Company/netflix.png";
import Figma from "/public/Company/Figma.png";
import Oracle from "/public/Company/Oracle.png";
import Amazon from "/public/Company/Amazon.png";
import Walmart from "/public/Company/Walmart.png";
import Flipkart from "/public/Company/Flipkart.png";
import LinkedIn from "/public/Company/LinkedIn.png";
import Slack from "/public/Company/Slack.png";
import Stripe from "/public/Company/Stripe.png";
import Apple from "/public/Company/apple.png";
import Shopify from "/public/Company/shopify.png";
import Tesla from "/public/Company/Tesla.png";
import IBM from "/public/Company/ibm.png";
import Dell from "/public/Company/dell.png";
import Asana from "/public/Company/asana.png";
import Spotify from "/public/Company/spotify.png";
import Samsung from "/public/Company/samsung.png";
import Dropbox from "/public/Company/dropbox.png";
import Uber from "/public/Company/uber.png";
import Adobe from "/public/Company/Adobe.png";
import Zoom from "/public/Company/zoom.png";
import digital from "../assets/digital-marketing.png";
import monitor from "../assets/monitor.jpg";
import resume from "../assets/resume.jpg";
import hired from "../assets/hired.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import {
  IconBriefcase,
  IconMapPin,
  IconPremiumRights,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

export const arr = [
  Google,
  Netflix,
  Meta,
  Figma,
  Oracle,
  Walmart,
  Amazon,
  Flipkart,
  LinkedIn,
  Slack,
  Stripe,
];

export const jobCategory = [
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
  {
    img: digital,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, quibusdam veniam non nisi tempore recusandae hic neque cupiditate culpa!",
    post: "20K+ new job posted",
  },
];

export const work = [
  {
    img: resume,
    name: "Build your Resume",
    desc: "Create a standout resume with youe skills.",
  },
  {
    img: monitor,
    name: "Apply for job",
    desc: "Find and apply for job that match your skills.",
  },
  {
    img: hired,
    name: "Get hired",
    desc: "Connect with employers and start your new job",
  },
];

export const testimonials = [
  {
    avatar: avatar1,
    name: "Shivam Patel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta aliquid. Illo quia, tempore impedit quibusdam doloribus quidem accusamus porro.",
    rating: 4,
  },
  {
    avatar: avatar2,
    name: "John",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta aliquid. Illo quia, tempore impedit quibusdam doloribus quidem accusamus porro.",
    rating: 5,
  },
  {
    avatar: avatar3,
    name: "Isha",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta aliquid. Illo quia, tempore impedit quibusdam doloribus quidem accusamus porro.",
    rating: 3,
  },
  {
    avatar: avatar4,
    name: "Kanish",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta aliquid. Illo quia, tempore impedit quibusdam doloribus quidem accusamus porro.",
    rating: 4,
  },
];

export const footerLinks = [
  { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
  {
    title: "Company",
    links: ["About us", "Contact us", "Privacy Policy", "Terms & Conditions"],
  },
  { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] },
];

export const dropDown = [
  {
    title: "Job Title",
    icon: <IconSearch />,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Excecutive",
      "Customer Support",
      "Content Writer",
    ],
  },
  {
    title: "Location",
    icon: <IconMapPin />,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "Noida",
      "Hyderabad",
      "London",
      "Poland",
      "Germany",
    ],
  },
  {
    title: "Experience",
    icon: <IconBriefcase />,
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: <IconRecharging />,
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
];

export const jobs = [
  {
    company: Meta,
    title: "Product Designer",
    experience: "Entry Level",
    location: "New York",
    jobType: "Full Time",
    package: "24 LPA",
    applicants: 10,
    postedDaysAgo: "10 days ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    company: Google,
    title: "UX Designer",
    experience: "Mid Level",
    location: "San Francisco",
    jobType: "Part Time",
    package: "30 LPA",
    postedDaysAgo: "5 days ago",
    description: "Experience in designing user interfaces for mobile and web.",
  },
  {
    company: Apple,
    title: "Product Designer",
    experience: "Senior",
    location: "Cupertino",
    jobType: "Full Time",
    package: "45 LPA",
    postedDaysAgo: "20 days ago",
    description:
      "Looking for a seasoned designer to lead product UI/UX projects.",
  },
  {
    company: Meta,
    title: "Design Lead",
    experience: "Senior",
    location: "Seattle",
    jobType: "Contract",
    package: "50 LPA",
    postedDaysAgo: "15 days ago",
    description: "Lead the design efforts for enterprise SaaS products.",
  },
  {
    company: Amazon,
    title: "Visual Designer",
    experience: "Entry Level",
    location: "Kolkata",
    jobType: "Full Time",
    package: "20 LPA",
    postedDaysAgo: "8 days ago",
    description: "Create compelling visual content for e-commerce platforms.",
  },
  {
    company: Netflix,
    title: "UI Designer",
    experience: "Mid Level",
    location: "Los Angeles",
    jobType: "Freelance",
    package: "22 LPA",
    postedDaysAgo: "12 days ago",
    description: "Designing engaging user interfaces for streaming apps.",
  },
  {
    company: Tesla,
    title: "Product Designer",
    experience: "Entry Level",
    location: "Palo Alto",
    jobType: "Full Time",
    package: "26 LPA",
    postedDaysAgo: "18 days ago",
    description:
      "Innovate user-centered designs for electric vehicle interfaces.",
  },
  {
    company: IBM,
    title: "Experience Designer",
    experience: "Mid Level",
    location: "New York",
    jobType: "Part Time",
    package: "28 LPA",
    postedDaysAgo: "7 days ago",
    description: "Focus on enterprise user experience improvements.",
  },
  {
    company: Samsung,
    title: "Mobile UI Designer",
    experience: "Entry Level",
    location: "Seoul",
    jobType: "Full Time",
    package: "23 LPA",
    postedDaysAgo: "11 days ago",
    description: "Design mobile interfaces for latest flagship devices.",
  },
  {
    company: Adobe,
    title: "Interaction Designer",
    experience: "Senior",
    location: "San Jose",
    jobType: "Full Time",
    package: "40 LPA",
    postedDaysAgo: "22 days ago",
    description:
      "Create seamless interactions for creative cloud applications.",
  },
  {
    company: Uber,
    title: "Product Experience Designer",
    experience: "Mid Level",
    location: "San Francisco",
    jobType: "Full Time",
    package: "35 LPA",
    postedDaysAgo: "4 days ago",
    description: "Improve rider and driver app experience.",
  },
  {
    company: LinkedIn,
    title: "UX Researcher",
    experience: "Entry Level",
    location: "Sunnyvale",
    jobType: "Full Time",
    package: "25 LPA",
    postedDaysAgo: "9 days ago",
    description: "Conduct research to enhance platform usability.",
  },
  {
    company: Dell,
    title: "Hardware & UX Designer",
    experience: "Mid Level",
    location: "Round Rock",
    jobType: "Full Time",
    package: "29 LPA",
    postedDaysAgo: "14 days ago",
    description: "Design integrated hardware and software experiences.",
  },
  {
    company: Spotify,
    title: "Music App Designer",
    experience: "Entry Level",
    location: "Stockholm",
    jobType: "Full Time",
    package: "24 LPA",
    postedDaysAgo: "13 days ago",
    description: "Design intuitive interfaces for music streaming apps.",
  },
  {
    company: Slack,
    title: "Product Designer",
    experience: "Senior",
    location: "San Francisco",
    jobType: "Full Time",
    package: "42 LPA",
    postedDaysAgo: "6 days ago",
    description: "Lead design projects to enhance collaboration tools.",
  },
  {
    company: Asana,
    title: "UI/UX Designer",
    experience: "Mid Level",
    location: "San Francisco",
    jobType: "Full Time",
    package: "33 LPA",
    postedDaysAgo: "16 days ago",
    description: "Design task management platform interfaces.",
  },
  {
    company: Zoom,
    title: "Video Conferencing Designer",
    experience: "Entry Level",
    location: "San Jose",
    jobType: "Full Time",
    package: "22 LPA",
    postedDaysAgo: "17 days ago",
    description: "Design seamless video conferencing experiences.",
  },
  {
    company: Shopify,
    title: "E-commerce Product Designer",
    experience: "Mid Level",
    location: "Ottawa",
    jobType: "Full Time",
    package: "30 LPA",
    postedDaysAgo: "19 days ago",
    description: "Create engaging shopping experiences for users.",
  },
  {
    company: Dropbox,
    title: "Cloud Storage UI Designer",
    experience: "Senior",
    location: "San Francisco",
    jobType: "Full Time",
    package: "46 LPA",
    postedDaysAgo: "21 days ago",
    description: "Optimize user interfaces for cloud storage services.",
  },
];

export const searchFields = [
  {
    title: "Job Title",
    icon: <IconSearch />,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Excecutives",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: <IconMapPin />,
    options: [
      "Delhi",
      "New York",
      "London",
      "San Francisco",
      "Berlin",
      "Tokyo",
      "Toronto",
      "Sydney",
    ],
  },
  {
    title: "Skills",
    icon: <IconRecharging />,
    options: [
      "HTML",
      "CSS",
      "Java",
      "React",
      "Angular",
      "Node",
      "Python",
      "Ruby",
      "PHP",
      "SQl",
      "MongoDb",
      "AWS",
      "DevOps",
      "Azure",
      "Google Cloud",
      "Debugging",
      "Agile Methodologies",
      "API Development",
    ],
  },
];

export const talent = [
  {
    id: 1,
    name: "Pankaj Sethi",
    role: "Security Analyst",
    company: "Infosys",
    topSkills: ["Penetration Testing", "Security Audits", "Firewalls"],
    about: "Protects organizational data assets.",
    expectedCtc: "7 LPA - 75 LPA",
    location: "Bangalore, India",
    experience: {
      title: "Software Engineer III",
      company: "Google",
      location: "New York, United States",
      startDate: "April 2022",
      endDate: "Present",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    certifications: [
      {
        name: "Google Professional Cloud",
        issueDate: "Aug 2023",
        certificateId: "CDAW23324FDWR",
      },
    ],
  },
  {
    id: 2,
    name: "Anjali Mehta",
    role: "Data Engineer",
    company: "Accenture",
    topSkills: ["ETL", "Spark", "SQL"],
    about: "Designs data pipelines for analytics.",
    expectedCtc: "12 LPA - 18 LPA",
    location: "Delhi, India",
    experience: {
      title: "Data Engineer",
      company: "Accenture",
      location: "Delhi, India",
      startDate: "May 2020",
      endDate: "Present",
      description: "Builds scalable data pipelines for client needs.",
    },
    certifications: [
      {
        name: "Cloudera Data Platform Certified",
        issueDate: "June 2021",
        certificateId: "CDP2021",
      },
    ],
  },
  {
    id: 3,
    name: "Rahul Das",
    role: "Frontend Developer",
    company: "Tata ELXSI",
    topSkills: ["React", "Angular", "CSS"],
    about: "Creates interactive web interfaces.",
    expectedCtc: "8 LPA - 14 LPA",
    location: "Mumbai, India",
    experience: {
      title: "Web Developer",
      company: "Tata ELXSI",
      location: "Mumbai, India",
      startDate: "August 2019",
      endDate: "Present",
      description: "Designs rich UI/UX for enterprise web apps.",
    },
    certifications: [
      {
        name: "React Developer Certification",
        issueDate: "Jan 2020",
        certificateId: "REACTCERT",
      },
    ],
  },
  {
    id: 4,
    name: "Sneha Roy",
    role: "Backend Developer",
    company: "Wipro",
    topSkills: ["Node.js", "MongoDB", "REST APIs"],
    about: "Builds server-side applications.",
    expectedCtc: "6 LPA - 12 LPA",
    location: "Kolkata, India",
    experience: {
      title: "Backend Engineer",
      company: "Wipro",
      location: "Kolkata, India",
      startDate: "March 2021",
      endDate: "Present",
      description: "Develops scalable APIs and services.",
    },
    certifications: [
      {
        name: "Node.js Associate",
        issueDate: "Dec 2020",
        certificateId: "NODE2020",
      },
    ],
  },
  {
    id: 5,
    name: "Vikram Patel",
    role: "UI/UX Designer",
    company: "Infosys",
    topSkills: ["Figma", "Adobe XD", "User Research"],
    about: "Designs user interfaces and experiences.",
    expectedCtc: "5 LPA - 10 LPA",
    location: "Bangalore, India",
    experience: {
      title: "UI/UX Designer",
      company: "Infosys",
      location: "Bangalore, India",
      startDate: "July 2018",
      endDate: "Present",
      description: "Creates user-centric designs for enterprise apps.",
    },
    certifications: [
      {
        name: "Certified UX Professional",
        issueDate: "May 2019",
        certificateId: "UX2019",
      },
    ],
  },
  {
    id: 6,
    name: "Deepa Nair",
    role: "DevOps Engineer",
    company: "Capgemini",
    topSkills: ["Docker", "Kubernetes", "Azure"],
    about: "Automates deployment pipelines.",
    expectedCtc: "9 LPA - 15 LPA",
    location: "Hyderabad, India",
    experience: {
      title: "DevOps Specialist",
      company: "Capgemini",
      location: "Hyderabad, India",
      startDate: "January 2017",
      endDate: "Present",
      description: "Optimizes CI/CD pipelines for efficiency.",
    },
    certifications: [
      {
        name: "Kubernetes Administrator",
        issueDate: "Nov 2020",
        certificateId: "K8S2020",
      },
    ],
  },
  {
    id: 7,
    name: "Rohit Verma",
    role: "Mobile App Developer",
    company: "Myntra",
    topSkills: ["Swift", "iOS", "UI Design"],
    about: "Builds iOS shopping apps.",
    expectedCtc: "6 LPA - 11 LPA",
    location: "Bangalore, India",
    experience: {
      title: "iOS Developer",
      company: "Myntra",
      location: "Bangalore, India",
      startDate: "April 2019",
      endDate: "Present",
      description: "Developed shopping apps for iPhone.",
    },
    certifications: [
      {
        name: "Apple Certified iOS Developer",
        issueDate: "Aug 2020",
        certificateId: "ACiOS2020",
      },
    ],
  },
  {
    id: 8,
    name: "Maya Joshi",
    role: "Cybersecurity Specialist",
    company: "Deloitte",
    topSkills: ["Threat Analysis", "Firewalls", "Vulnerability Management"],
    about: "Protects enterprise networks.",
    expectedCtc: "10 LPA - 20 LPA",
    location: "Delhi, India",
    experience: {
      title: "Cybersecurity Analyst",
      company: "Deloitte",
      location: "Delhi, India",
      startDate: "May 2016",
      endDate: "Present",
      description:
        "Investigates cyber threats and implements security measures.",
    },
    certifications: [
      {
        name: "Certified Ethical Hacker",
        issueDate: "June 2018",
        certificateId: "CEH2018",
      },
    ],
  },
  {
    id: 9,
    name: "Siddharth Kumar",
    role: "AI/ML Engineer",
    company: "Infosys",
    topSkills: ["TensorFlow", "Python", "NLP"],
    about: "Creates AI models for enterprise automation.",
    expectedCtc: "12 LPA - 25 LPA",
    location: "Bangalore, India",
    experience: {
      title: "AI Engineer",
      company: "Infosys",
      location: "Bangalore, India",
      startDate: "July 2019",
      endDate: "Present",
      description: "Develops AI-driven solutions for complex problems.",
    },
    certifications: [
      {
        name: "Deep Learning Specialization",
        issueDate: "Dec 2020",
        certificateId: "DLS2020",
      },
    ],
  },
  {
    id: 10,
    name: "Kavita Singh",
    role: "Business Analyst",
    company: "HDFC Bank",
    topSkills: ["Excel", "SQL", "Data Analysis"],
    about: "Supports data-driven banking decisions.",
    expectedCtc: "6 LPA - 9 LPA",
    location: "Mumbai, India",
    experience: {
      title: "Business Analyst",
      company: "HDFC Bank",
      location: "Mumbai, India",
      startDate: "January 2017",
      endDate: "Present",
      description: "Provides insights for strategic banking initiatives.",
    },
    certifications: [
      {
        name: "Certified Business Analysis Professional",
        issueDate: "March 2019",
        certificateId: "CBAP2019",
      },
    ],
  },
];

const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Engineer",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Excecutive",
      "Customer Support",
      "Content Writer",
    ],
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Meta",
      "Adobe",
      "Apple",
      "Netflix",
      "Amazon",
      "Spotify",
    ],
  },
  {
    label: "Job Type",
    placeholder: "Enter Job Type",
    options: ["Full Time", "Internship", "Freelance"],
  },
  {
    label: "Experience",
    placeholder: "Enter Experience Level",
    options: ["Entery Level", "Intermediate", "Expert"],
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
    options: ["Delhi", "New York", "San Francisco", "Noida", "Hyderabad"],
  },
  {
    label: "Salary",
    placeholder: "Enter Salary",
    options: ["10 LPA", "20 LPA", "23 LPA", "12 LPA"],
  },
];

const content =
  "<h4>About the job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and skills</h4><ul><li>Add required qualifications and skills here...</li></ul>";

export { fields, content };

export const card = [
  {
    name: "Location",
    icon: IconMapPin,
    value: "New York",
  },
  {
    name: "Experience",
    icon: IconBriefcase,
    value: "Expert",
  },
  {
    name: "Salary",
    icon: IconPremiumRights,
    value: "45 LPA",
  },
  {
    name: "Job Type",
    icon: IconRecharging,
    value: "Full Time",
  },
];

export const skills = [
  "Spring Boot",
  "React",
  "Java",
  "Bootstrap",
  "CSS",
  "HTML",
  "MongoDB",
  "Express js",
  "Node js",
];

export const desc =
  "<h4>Your Mission:</h4><p>Design, deploy, and maintain cutting-edge network infrastructure. Troubleshoot, optimize, and ensure network security while focusing on quality checks.</p><h4>Roles and Responsibilities:</h4><ul><li>Design, configure, and maintain network infrastructure.</li><li>Conduct network audits, including quality checks for Optical Fibre Cable (OFC) installations.</li><li>Perform network performance analysis and recommend optimization measures.</li><li>Troubleshoot complex network issues and ensure timely resolutions.</li><li>Test and maintain network equipment, including OTDR, Laser Source, Power Meter, and Cable Locators.</li><li>Ensure RFP compliance through regular quality audits.</li><li>Provide quarterly and monthly audit reports.</li><li>Collaborate with SI teams to resolve non-compliance issues.</li></ul><h4>Qualifications:</h4><ul><li>BE/BTech degree in Electronics & Communication, Computer Science, Information Technology, or Electrical & Electronics (recognized by AICTE/UGC/Ministry of HRD). </li> <li>Minimum 1 year of relevant post-qualification experience in IT/Telecommunication Systems/Optical Fibres for degree holders.</li><li>For Diploma holders (recognized by AICTE/UGC/Ministry of HRD), a minimum of 6 years of post-qualification experience in the relevant field is required.</li></ul>";

export const companyData = {
  name: "Google",
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam obcaecati expedita? Quisquam, incidunt ea. Iure vero eos numquam quae.",
  industry: "Internet Software & Technology Services",
  website: "https://www.google.com",
  headQuater: "Mountain View, California, Unities States",
  specialties: ["Search Engines", "Online Advertising"],
};

export const companies = [
  {
    name: "Meta",
    icon: Meta,
    employees: 12000,
  },
  {
    name: "Google",
    icon: Google,
    employees: 9000,
  },
  {
    icon: Netflix,
    name: "Netflix",
    employees: 10000,
  },
  {
    icon: Stripe,
    name: "Stripe",
    employees: 30000,
  },
];

const activeJobs = [
  {
    jobTitle: "Mobile App Developer",
    location: "Austin, USA",
    posted: "8 days ago",
  },
  {
    jobTitle: "Data Analyst",
    location: "New York, United States",
    posted: "10 days ago",
  },
  {
    jobTitle: "Cloud Architecture",
    location: "Noida",
    posted: "20 days ago",
  },
  {
    jobTitle: "Software Developer",
    location: "Hyderabad",
    posted: "9 days ago",
  },
];

const drafts = [
  {
    jobTitle: "Web Developer",
    location: "Poland",
    posted: "8 days ago",
  },
  {
    jobTitle: "Data Analyst",
    location: "New York, United States",
    posted: "10 days ago",
  },
];

export { activeJobs, drafts };

export const profile = [
  {
    id: 1,
    name: "Pankaj Sethi",
    role: "Security Analyst",
    company: "Infosys",
    topSkills: ["Penetration Testing", "Security Audits", "Firewalls"],
    about: "Protects organizational data assets.",
    expectedCtc: "7 LPA - 75 LPA",
    location: "Bangalore, India",
    experience: {
      title: "Software Engineer III",
      company: "Google",
      location: "New York, United States",
      startDate: "April 2022",
      endDate: "Present",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    certifications: [
      {
        name: "Google Professional Cloud",
        issueDate: "Aug 2023",
        certificateId: "CDAW23324FDWR",
      },
    ],
  },
];

export const selectfields = [
  {
    label: "Job Title",
    leftSection: IconSearch,
    placeholder: "Enter Job Title",
    // value: "Software Engineer",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Excecutives",
      "Content Writer",
      "Customer Support",
      "Software Engineer",
    ],
  },
  {
    label: "Location",
    leftSection: IconMapPin,
    placeholder: "Enter Job Location",
    // value: "New York, United States",
    options: [
      // "Noida",
      "Delhi",
      "New York",
      "London",
      "San Francisco",
      "Berlin",
      "Tokyo",
      "Toronto",
      "Sydney",
    ],
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    leftSection: IconBriefcase,
    // value: "Goole",
    options: [
      "Google",
      "Meta",
      "Adobe",
      "Apple",
      "Netflix",
      "Amazon",
      "Spotify",
    ],
  },
];
