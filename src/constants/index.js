import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  frontend,
  bootstrap,
  Hotel,
  figma,
  ctop,
  openSource,
  terra,
  upwork,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Terra Learning",
    icon: terra,
    iconBg: "#383E56",
    date: "March 2021 - Jun 2021",
    points: [
      "Crafting dynamic web applications using React.js and its complementary technologies.",
"Engaging with cross-functional squads encompassing designers, product managers, and developers to deliver real-time, premium products.",
"Enforcing responsive design principles and ensuring seamless performance across diverse browsers.",
"Taking an active role in code evaluations and furnishing constructive insights to fellow developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ctop",
    icon: ctop,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Remote Developers OpenSource Github",
    icon: openSource,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Pioneered a critical open-source React.js library, garnering a dedicated user base and fostering community engagement, evident in a significant increase in stars, forks, and active discussions on GitHub.",
      "Revitalized the user interface of a prominent open-source project, leveraging cutting-edge frontend technologies to enhance usability and accessibility, resulting in a marked uptick in adoption and positive user feedback.",
      "Led a collaborative effort within the open-source community to address a pressing compatibility issue between React.js and a major browser, earning commendation for playing a pivotal role in resolving the challenge and ensuring a smoother user experience.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      'Independently designing, and developing web applications using React.js and complementary technologies, showcasing a track record of self-driven project completion and client satisfaction.',
      "Successfully translating client visions into reality by meticulously crafting web applications with React.js, achieving not only functional excellence but also exceeding expectations in terms of aesthetics and user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Earning a reputation for swift problem-solving as evidenced by consistently identifying and rectifying complex bugs and technical glitches within web applications, minimizing downtime and ensuring seamless functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Joe proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Joe does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Joe optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JJ-Hotel Resort",
    description:"A Web-based hub where users can effortlessly explore, book, and oversee your perfect hotel escape. Discover accommodations, amenities, and book stress-free. Your journey begins here.",
    tags:[
      {
      name:"react",
      color:"blue-text-gradient",
    },
    {
      name:"bootstrap",
      color:"pink-text-gradient",
    },
    {
      name: "mongodb",
     color: "green-text-gradient",
     },
    ],
    image: Hotel,
    live_link:"https://guileless-sundae.netlify.app/",
    source_code_link: "https://github.com/Thebigjoe10/jj-hotel-resort",
  },
];

export { services, technologies, experiences, testimonials, projects };
