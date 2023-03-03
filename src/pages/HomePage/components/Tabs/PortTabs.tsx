import { time } from "console";
import { useState, SetStateAction } from "react";
import { Nav } from "react-bootstrap";
import { v4 } from "uuid";
import { TabItemsDef, TabsDef } from "../../../../assets/data/dataDef";
import PortTabItems from "./PortTabItems";

const List = (props: TabsDef) => {
  //todo: alignment will be used in the future for selecting vertical/ horizontal tab 
  const { alignment, items } = props
  const [selectedTab, setSelectedTab] = useState(-1);
  function selectedTabChange(e: number) {
    setSelectedTab(e);
  }  
  return (
    <div className="PortTabs__container">
      <div>
        <Nav className="flex-column">
            {items.map((item: TabItemsDef, index: number) => {
                return (
                  <Nav.Link onClick={() => selectedTabChange(index)} eventKey={index}>{item.tabsHeader}</Nav.Link>
                );
              })}     
        </Nav>    
      </div>    
      <div className="list">
        {items.map((item, index) => {
          return (
            selectedTab === index && 
            <PortTabItems
              tabsHeader={item.tabsHeader}
              title={item.title}
              period={item.period}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
    

  );
};

export default List;