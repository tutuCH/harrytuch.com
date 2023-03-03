// import { SetStateAction, useState } from "react";
// import { v4 } from "uuid";
import { pastExp } from '../../../../assets/data/data';
import { TabsDef, } from '../../../../assets/data/dataDef';
import PortTabs from '../../components/Tabs/PortTabs';
import './Details.scss';

const Details = () => {
  return (
    <div className="details-section__container">
      <div className='row'>
        <PortTabs
          alignment={pastExp.alignment}
          items={pastExp.items}
        />
      </div>
    </div>
  );
};

export default Details;