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
        "Built an award-winning digital project owned by a multinational insurance company with a substantial user base of 5000+ active insurance agents.",
        "Developed and maintained 2 web applications using Angular, Angular Material, Sass, RxJS, NgRx for frontend development and Jenkins for CI/CD.",
        "Constructed a web form generation tool featuring diverse input types and validations, streamlining the form-building process for future development efforts.",
        "Optimized the search functionality by implementing a generic search component, resulting in a reduction of 2 man-days of development time per sprint.",
        "Managed and processed over 1M+ units of financial business data while optimizing MSSQL query execution by over 50% through efficient database updates.",
        "Implemented unit testing procedures using Mocha and Playwright, resulting in a significant improvement in software quality and reducing post-release defects by 10%.",
        "Successfully coordinated software development throughout 10+ agile project life cycles, with 100% on-time delivery for each sprint.",
        "Partnered with cross-functional and offshore teams using Jira, Slack, Adobe XD, and produced documentation for future maintenance using Confluence.",
      ],
    },
    {
      tabsHeader: "Aigniter",
      title: "Software Engineer Intern",
      period: "June,2020 - June,2021",
      content: [
        "Contributed to the full-stack development of Jumppoint, a delivery application, using Vue, Vuetify, CSS3, HTML5, ExpressJS, MySQL, AWS EC2, and AWS S3.",
        "Utilized Capacitor plugins to develop PWA features, including Camera for QR code scanning, while implementing features for the complete courier pick-up process.",
        "Collaborated with a UI/UX designer to implement a new layout across 5+ pages for Jumppoint, leading to its adoption by over 10,000 active merchants.",
        "Designed and implemented an user-friendly real time dashboard using VueJS, ExpressJS and MySQL. The real time revenue and business performance enabled the organization to make data driven decisions.",
      ],
    },
    {
      tabsHeader: "SimPlus",
      title: "Software Engineer Intern",
      period: "June, 2019 - August, 2019",
      content: [
        "Contributed to the development of a Java Spring Boot application, incorporating features such as data visualization and real-time data updates.",
        "Created Spring MVC-based RESTful APIs in Java for the Anchorage View Project's server, providing real-time vessel positions.",
        "Converted the Anchorage View Project's web application to use REST web service calls.",
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
        "DynamoDB",
        "MongoDB",
    ],
    Tools: [
        "Bash",
        "Git",
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "AWS Cloudformation",
        "Google Colab",
        "Jupyter Notebook",
        "Docker",
        "Jira",
        "Postman",
        "MySQL",
        "MsSQL",
        "Heroku",
        "Jenkins",
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
    pathToImage: "../../../assets/images/toronto-rental-prediction.png",
  },
  { 
    title: "OneHub Business Consulting Report Manager",
    content: "OneHub Business Consulting Report Manager is a platform designed to help the company to manage their images and information for strategic planning reports. The website provides easy-to-use tools for uploading, organizing, and categorizing images and data, allowing businesses to streamline their strategic planning process. With the website, the company can access and share their strategic planning information securely and efficiently.",
  }  

]