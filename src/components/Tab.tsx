import React from 'react'
import { tabProps } from '../common/types/types'

const Tab:React.FC<tabProps> = (props) => {
    const {tab,selectTab,handelNext}=props
    return (
        <li
            key={tab.id}
            className="nav-item "
            role="presentation"
        >
            <button
                // onClick={handelNext}
                className={`nav-link ${selectTab === tab.id ? 'active' : ''}`}
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