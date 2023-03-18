import { useState } from "react";
import { Nav } from "react-bootstrap";
import { TabItemsDef, TabsDef } from "../../../../assets/data/dataDef";
import PortTabItems from "./PortTabItems";
import "../../../HomePage/index.scss";

const PortTabs = (props: TabsDef) => {
  //todo: alignment will be used in the future for selecting vertical/ horizontal tab
  const { items } = props;
  const [selectedTab, setSelectedTab] = useState(0);
  function selectedTabChange(e: number) {
    setSelectedTab(e);
  }
  return (
    <div className="port-tabs__container">
      <div>
        <Nav className="flex-column">
          {items.map((item: TabItemsDef, index: number) => (
            <Nav.Item key={item.tabsHeader}>
              <Nav.Link
                active={index === 0}
                className={`tab-button__element ${selectedTab !== index? 'hidden-tab-button__element' : ''}`}
                key={item.tabsHeader}
                onClick={() => selectedTabChange(index)}
                eventKey={index}
              >
                {item.tabsHeader}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div className="port-tabs-items__container">
        {items.map((item, index) => {
          return (
            selectedTab === index && (
              <PortTabItems
                key={index}
                tabsHeader={item.tabsHeader}
                title={item.title}
                period={item.period}
                content={item.content}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default PortTabs;
