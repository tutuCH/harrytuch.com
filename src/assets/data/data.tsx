import { PersonalInfo, NavBarTabs, TabsDef, SkillsDef, ProjectsDef } from "./dataDef";

export const landingInfo = {
  subtitle: "Nice to meet you, I'm",
  title: "Harry Tu",
};
export const navBarInfos: NavBarTabs = {
  title: "Hi there",
};

export const basicInfo: PersonalInfo = {
  content:
    "Hi guys! I am a passionate and motivated individual with a strong foundation in web development. I am always eager to learn new technologies and techniques, and I am committed to delivering high-quality, scalable, and maintainable code. I am a team player with excellent communication skills who loves to work with people. Feel free to have a look at my education background and professional certificate below.",
  education: [
    {
      imageType: "CUHK",
      content:
        "The Chinese University of Hong Kong - B.Sc. in Computer Science (2017-2021)",
      link: "https://www.credly.com/badges/cc66b438-9096-4850-9f34-7b0a06ae2545/public_url",
      src: '../../../assets/images/cuhk-logo.png',
    },
  ],
  certificates: [
    {
      imageType: "AWS-SAA",
      content: "AWS Certified Solution Architect - Associate (2022)",
      link: "https://www.credly.com/badges/f9120788-0540-45a7-b93d-50f892faf8f7/linked_in_profile",
      src: "../../../assets/images/aws-saa-logo.png"
    },
    {
      imageType: "APOLLO-GRAPHQL",
      content: "Apollo Graph Developer - Associate (2023)",
      link: "https://www.apollographql.com/tutorials/certifications/7e431e6e-0f53-40c0-84b9-0ff645734ad1",
      src: "../../../assets/images/graphql.svg"
    },    
  ],
};

export const pastExp: TabsDef = {
  alignment: "vertical",
  items: [
    {
      tabsHeader: "GienTech",
      title: "Software Developer",
      period: "June, 2021 - Oct, 2022",
      content: [
        "Implemented 10 new features and resolved 50 bugs across a digital project.",
        "Developed and maintained 3 web applications using Angular, Node.js, and other technologies.",
        "Collaborated with a team of 7 individuals, including a Project Manager, a Technical Lead, a Business Analyst, and several Developers.",
        "Administered over 1M units of financial business data.",
        "Accelerated SQL query execution by over 50% through database updates and maintenance.",
        "Developed an award-winning digital project, owned by a multinational insurance company and recognized by Bloomberg Businessweek.",
        "Coordinated software development throughout agile project life cycles.",
        "Partnered with cross-functional teams to implement changes and produce comprehensive documentation for knowledge sharing and future maintenance.",
        "",
        
      ],
    },
    {
      tabsHeader: "Aigniter",
      title: "Software Engineer Intern",
      period: "June,2020 - June,2021",
      content: [
        "Demonstrated full-stack development expertise while working on a third-party payment app, and contributed to front-end development for delivery applications using Vue.js for the frontend and Express.js for the backend.",
        "Participated in a major application revamp for Jumppoint, a e-Commerce Logistics Technology Platform, using Vue.js for the frontend, showcasing development skills.",
        "Designed and developed an internal dashboard using Vue.js and Express.js, providing real-time insights into revenue and business performance to facilitate data-driven decision-making.",
      ],
    },
    {
      tabsHeader: "SimPlus",
      title: "Software Engineer Intern",
      period: "June, 2019 - August, 2019",
      content: [
        "Responsible for developing and debugging for a Java Spring Boot application with features including as data visualization, real-time data update etc.",
        "Created RESTful Web Service APIs for Anchorage View Project's server in Java using Spring MVC.",
        "Converted the Anchorage View Project's web application to use REST web service calls.",
        "Designed and implemented an interface to fetch data from MDH-MPA APIs and store it in Sybase TSQL using Java.",
      ],
    },
  ],
};

export const skills: SkillsDef = {
    Languages: [
        "JavaScript (ES6)",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "SQL",  
        "HTML",
        "CSS/Sass",
    ],
    Frameworks: [
        "Angular",
        "React",
        "Vue",
        "Bootstrap",
        "Tailwindcss",
        "ExpressJS",
        "NestJS",
        "Tensorflow",
        "Flask",
        "GraphQL",
        "Ionic",
        "Capacitor",
    ],
    Tools: [
        "Bash",
        "Git",
        "Amazon Web Services",
        "Google Colab",
        "Jupyter Notebook",
        "Docker",
        "Jira",
        "Postman",
        "MySQL",
        "MsSQL",
        "Heroku",
    ]
}

export const contactMessage: string =
  "Looking for a software engineer? Whether you need a simple or complex site, I'm up for the challenge. Let's work together to create a website that reflects your unique brand. Contact me to get started!";

export const projects: Array<ProjectsDef> = [
  { 
    title: "Rental Price Prediction",
    content: "The website is a rental price predictor for properties in Toronto. It uses a neural network regression model trained on past rental data to make predictions. The frontend is built with React and TypeScript, while the backend is built with Flask. The user can enter the details of a property and the website will predict the rental price based on the provided information. ",
    url: "https://tutuch.github.io/toronto_rental_prediction/",
    github: "https://github.com/tutuCH/toronto_rental_prediction",
  }
]