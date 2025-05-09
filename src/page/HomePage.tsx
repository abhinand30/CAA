import { useSelector } from 'react-redux';
import { useState } from 'react';

import AppInfo from '../components/AppInfo';
import AddInfo from '../components/AddInfo';
import Documents from '../components/Documents';
import SummaryComponent from '../components/SummaryComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabWizard from '../components/TabWizard';
import { storedFormData } from '../redux/slice/formSlice';
import { checkValidation, findFormData } from '../utils/utils';
import { formArray } from '../common/data/dataArray';


const HomePage = () => {
  const storedData = useSelector(storedFormData)

  // const [activeTab, setActiveTab] = useState<number>(1);


  // const tabSelection = () => {
  //   switch (activeTab) {
  //     case 1:
  //       return (
  //         <AppInfo handleTab={handleTab} activeTab={activeTab} />
  //       )
  //     case 2:
  //       return (
  //         <Documents handleTab={handleTab} activeTab={activeTab} />
  //       )
  //     case 3:
  //       return (
  //         <AddInfo handleTab={handleTab} activeTab={activeTab} />
  //       )
  //     case 4:
  //       return (
  //         <SummaryComponent />
  //       )
  //   }
  // }

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>, tabKey: string) => {
  

    document.addEventListener("show.bs.tab", function (event) {
      // Get the tab being activated
      const nextTabId = event.target.getAttribute("data-bs-target")?.replace("#", tabKey);
      if (!nextTabId) return;
      const storedDataForTab = findFormData({ savedData: storedData, title: tabKey });
    
      const isValid = checkValidation({
        storedData: storedDataForTab,
        title: nextTabId
      });
    
      if (!isValid) {
        event.preventDefault();
      }
    });
    
    }
   

  



  return (
    <div>
      <Header />
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">

              <div className="content-area">
                <TabWizard handleTab={handleTabClick}  />
                <div className="content-area__main">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="appInfo">
                      <AppInfo handleTab={handleTabClick}/>
                    </div>
                    <div className="tab-pane fade" id="documents">
                      <Documents handleTab={handleTabClick}/>
                    </div>
                    <div className="tab-pane fade" id="addInfo">
                      <AddInfo handleTab={handleTabClick} />
                    </div>
                    <div className="tab-pane fade" id="summary">
                      <SummaryComponent />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
  <Footer />
    </div >


  )
}

export default HomePage