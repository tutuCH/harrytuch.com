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
      content:
        "The Chinese University of Hong Kong - B.Sc. in Computer Science (2017-2021)",
      link: "https://www.credly.com/badges/cc66b438-9096-4850-9f34-7b0a06ae2545/public_url",
      src: '../../../assets/images/cuhk-logo.png',
    },
  ],
  certificates: [
    {
      content: "AWS Certified Solution Architect - Associate (2022)",
      link: "https://www.credly.com/badges/f9120788-0540-45a7-b93d-50f892faf8f7/linked_in_profile",
      src: "../../../assets/images/aws-saa-logo.png"
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
        "Tech consultant at FWD, a multinational insurance company based in Hong Kong.",
        "Responsible for frontend development for award-winning FWD agent assist portal platform using AngularJs",
        "Tech consultant at Value Partners Group, a Hong Kong-based independent asset management firm",
        "Conduct database updates and reduced SQL query execution time by >50%.",
      ],
    },
    {
      tabsHeader: "Aigniter",
      title: "Software Engineer Intern",
      period: "June,2020 - June,2021",
      content: [
        "Responsible for full stack development of a third-party payment app and front-end development for delivery applications and using VueJs for frontend and ExpressJS for backend",
        "Manage database with millions of data using mySQL",
        "Conduct a major application layout update",
        "Experience in Agile developing environment",
      ],
    },
    {
      tabsHeader: "SimPlus",
      title: "Software Engineer Intern",
      period: "June, 2019 - August, 2019",
      content: [
        "Responsible for developing and debugging for a Java Spring Boot application with features including as data visualization, real-time data update etc.",
        "Hand on experience in Sybase",
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
        "ExpressJS",
        "NestJS",
        "Tensorflow",
        "Django",
    ],
    Tools: [
        "Bash",
        "Git & Github & Gitlab",
        "Amazon Web Services",
        "Google Colab",
        "Jupyter Notebook",
        "Docker",
        "Jira",
        "Postman",
        "MySQL",
        "MsSQL",
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