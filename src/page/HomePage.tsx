// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import { formArray, tabArray } from '../common/data/dataArray'
// import { FormType, tabTypes } from '../common/types/types'
// import Tab from '../components/Tab'

// import { addForm, storedFormData } from '../redux/slice/formSlice'
// import FormComponent from '../components/FormComponent'
import AppInfo from '../components/AppInfo';
import AddInfo from '../components/AddInfo';
import Documents from '../components/Documents';
import SummaryComponent from '../components/SummaryComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { formArray } from '../common/data/dataArray';



const HomePage = () => {
  


  return (
    <>
     <Header />

          <AppInfo />
          <Documents />
          <AddInfo />
          <SummaryComponent/>
     <Footer />
   
    </>

  )
}

export default HomePage