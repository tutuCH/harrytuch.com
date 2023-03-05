import "../../HomePage/index.scss";
const Skills = () => {
  const languages: Array<string> = [
    "JavaScript (ES6)",
    "TypeScript",
    "HTML",
    "CSS/Sass",
    "Python",
    "SQL",
    "R",
  ];
  const frameworks: Array<string> = [
    "Ember & Glimmer",
    "React",
    "Jekyll",
    "Node",
    "D3",
    "Wordpress",
    "Timber",
  ];
  const tools: Array<string> = [
    "Bash",
    "Git & Github",
    "Gulp & Grunt",
    "Chrome DevTools",
    "Postman",
    "MongoDB",
  ];
  return (
    <div id="Projects" className="section__container">
      <div className='section-header-right'>My Skills</div>
      <div className="skills-grid__container section-content-right">
        <div className="languages-elements">
          <h5 style={{textDecorationLine: 'underline'}}>Languages</h5>
          {languages.map((item: string) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="frameworks-elements">
          <h5 style={{textDecorationLine: 'underline'}}>Frameworks</h5>          
          {frameworks.map((item: string) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="tools-elements">
          <h5 style={{textDecorationLine: 'underline'}}>Tools</h5>          
          {tools.map((item: string) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
