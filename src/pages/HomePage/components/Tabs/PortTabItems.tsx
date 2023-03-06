import { TabItemsDef } from "../../../../assets/data/dataDef";

const PortTabItems = (props: TabItemsDef) => {
  const { title, period, content } = props;

  return (
    <div className="tab-items-container">
      <div>
        <h5>{title}</h5>
        <p>{`${period}`}</p>
        
          {content.map((sentence: string, index: number) => {
            return (<p key={index}><i className="arrow right"></i>{sentence}</p>);
          })}
        
      </div>
    </div>
  );
};

export default PortTabItems;
