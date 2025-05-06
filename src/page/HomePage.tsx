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

const HomePage = () => {
  const storedData=useSelector(storedFormData)

  const [activeTab, setActiveTab] = useState<string>('appInfo');

 
    const tabSelection = () => {
      switch (activeTab) {
        case 'appInfo':
          return (
            <AppInfo handleTab={handleTab}/>
          )
        case 'documents':
          return (
            <Documents handleTab={handleTab}/>
          )
        case 'addInfo':
          return (
            <AddInfo handleTab={handleTab}/>
          )
        case 'summary':
          return (
            <SummaryComponent handleTab={handleTab}/>
          )
      }
    }
    
    const handleTab = (tab: string) => {
      const currentValidate = checkValidation({
        storedData: findFormData({ savedData: storedData, title: activeTab }),
        title: activeTab,
      });
      const isValidate=checkValidation({storedData:findFormData({savedData:storedData,title:tab}),title:tab});

      if (currentValidate) {
        setActiveTab(tab);
      }else if(isValidate){
        setActiveTab(tab);
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
                <TabWizard handleTab={handleTab} activeTab={activeTab}/>
                {tabSelection()}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>


  )
}

export default HomePage