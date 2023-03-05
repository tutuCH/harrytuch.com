import { pastExp } from '../../../assets/data/data';
import PortTabs from '../components/Tabs/PortTabs';
import "../../HomePage/index.scss"

const Experiences = () => {
  return (
    <div id="Experiences" className="section__container">
      <div className='section-header-left'>My Experiences</div>
      {/* <div className='section-content-left'> */}
        <PortTabs
          alignment={pastExp.alignment}
          items={pastExp.items}
        />
      </div>
    // </div>
  );
};

export default Experiences;