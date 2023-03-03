import { TabItemsDef } from "../../../../assets/data/dataDef";

const PortTabItems = (props: TabItemsDef) => {
  const { title, period, content } = props;

  return (
    <div className="tab-items-container">
      <div>
        <h3>{title}</h3>
        <p>{`${period}`}</p>
        <p>
          {content.map((sentence: string) => {
            return sentence;
          })}
        </p>
      </div>
      {/* <button onClick={deleteItem} className="remove">
        刪除
      </button> */}
    </div>
  );
};

export default PortTabItems;
