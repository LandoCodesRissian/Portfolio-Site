import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    UofU,
    giftGenie,
    threejs,
    Freelance,
    bookSearch,
    noteTaker,
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
      title: "API Specialist",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech enthusiast",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      title: "Full-Stack Web Development Bootcamp",
      company_name: "Univeristy Of Utah",
      icon: UofU,
      iconBg: "#383E56",
      date: "August 2023 - February 2024",
      points: [
        "Responsive Web Design: Mastering HTML5, CSS3, and design frameworks to create visually appealing, mobile-first websites.",
        "Deep dived into JavaScript, ES6+, and popular frameworks/libraries like React, Angular, or Vue.js for dynamic client-side scripting.",
        "Server-Side Development: Learning back-end technologies such as Node.js, Express, covering RESTful API development and server logic.",
        "Database Management: Understanding relational (SQL) and non-relational (NoSQL) databases, ORM tools, and how to interact with data securely and efficiently",
        "DevOps and Deployment: Gaining insights into version control with Git, cloud services (AWS, Heroku), and CI/CD practices for application deployment.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "Freelance",
      icon: Freelance,
      iconBg: "#383E56",
      date: "February 2024 - Current",
      points: [
        "Taught myself how to use python and flask to create a Website",
        "Managed a MySQL Database using python",
        "Created a C# program that creates security badges for a company",
        "Dived lightly into CyberSecurity",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Landon was a standout in our final project, bringing both innovative ideas and the technical prowess to implement them into our gift-finding app. His insightful contributions and delightful approach made the development process both efficient and enjoyable. Landon's skill and dedication were crucial in transforming our concept into a successful reality.",
      name: "Joshua G. Slem",
      designation: "Project Lead",
      company: "Coding Bootcamp Course Final Project",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Landon, might be the single greatest coder of our generation.",
      name: "Abraham Lincoln",
      designation: "COO",
      company: "MaG Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Landon is a web development wizard—fast, efficient, and innovative. His work elevates projects, making complex tasks seem easy.",
      name: "Ava Chen",
      designation: "CTO",
      company: "212 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gift Genie",
      description:
        "A website that is built to help a user find a gift for someone, allows them to save items and link to purchase said items",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: giftGenie,
      source_code_link: "https://github.com/LandoCodesRissian/Gift-Genie?tab=readme-ov-file",
      live_link: "https://giftgenie-vfsj.onrender.com"
    },
    {
      name: "Book Search",
      description:
        "Simple site where users can make an account and search for books, and save searches to view later",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bookSearch,
      source_code_link: "https://github.com/LandoCodesRissian/books-api-apollo?tab=readme-ov-file",
      live_link: "https://booksearchforyourease.onrender.com"
    },
    {
      name: "Express Note Taker",
      description:
        "Website for users to take notes, save them to local storage to view later, and remove them when not needed anymore",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: noteTaker,
      source_code_link: "https://github.com/LandoCodesRissian/expressNoteTaker?tab=readme-ov-file",
      live_link: "https://express-notes-takers-998af2a3d024.herokuapp.com"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };