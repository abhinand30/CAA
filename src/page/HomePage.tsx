import AppInfo from '../components/AppInfo';
import AddInfo from '../components/AddInfo';
import Documents from '../components/Documents';
import SummaryComponent from '../components/SummaryComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

// import { formArray } from '../common/data/dataArray';



const HomePage = () => {
  const [activeTab, setActiveTab] = useState('appInfo');

  const handleTab=(tab:string)=>{
    setActiveTab(tab);
  }
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


  return (
    <div>
      <Header />
      {tabSelection()}
      <Footer />
    </div>

  )
}

export default HomePage