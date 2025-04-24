import React from 'react'
import { tabProps } from '../common/types/types'
import { useSelector } from 'react-redux'
import { storedFormData } from '../redux/slice/formSlice'

const Tab:React.FC<tabProps> = (props) => {
    const {tab,selectTab,onClick}=props;
    const storedData = useSelector(storedFormData);
    
    return (
        <li
            key={tab.id}
            className={`nav-item nav-fill ${!(storedData.findIndex((data)=>data.title===tab.tab)===-1)&&'form-wizard__filled'}`}
            role="presentation"
        >
            <button
                onClick={()=>onClick(tab.id)}
                className={`nav-link ${selectTab === tab.id && 'active'}`}
                id="general-tab"
                data-bs-toggle="tab"
                data-bs-target="#general"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
            >
                <span className="form-wizard__completed" />
                <span className="form-wizard__no">0{tab.id}</span>
                {tab.tab}
            </button>
        </li>
    )
}

export default Tab