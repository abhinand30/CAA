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

  const [activeTab, setActiveTab] = useState<number>(1);


  const tabSelection = () => {
    switch (activeTab) {
      case 1:
        return (
          <AppInfo handleTab={handleTab} activeTab={activeTab} />
        )
      case 2:
        return (
          <Documents handleTab={handleTab} activeTab={activeTab} />
        )
      case 3:
        return (
          <AddInfo handleTab={handleTab} activeTab={activeTab} />
        )
      case 4:
        return (
          <SummaryComponent/>
        )
    }
  }
 
  const handleTab = (id: number) => {
    
    if (activeTab===3){
      setActiveTab(id);
      return
    }
  
    const currentTab = Object.keys(formArray);
    if (activeTab > id) {
        setActiveTab(id);
        return;
    }

    const isValidate = checkValidation({
      storedData: findFormData({ savedData: storedData, title: currentTab[activeTab - 1] }),
      title: currentTab[activeTab - 1]
    });

    if (isValidate) {
        setActiveTab(id);
    }
};



  return (
    <div>
      <Header />
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              
              <div className="content-area">
                
                <TabWizard handleTab={handleTab} activeTab={activeTab} />
                
                {tabSelection()}
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>


  )
}

export default HomePage