import { useSelector } from 'react-redux';

import { storedFormData } from '../redux/slice/formSlice';

import Tab from './TabWizard';
import TabWizard from './TabWizard';

const SummaryComponent = (props) => {
    // const {formArray}=props;
    const {handleTab}=props;
    const storedData = useSelector(storedFormData);
    // console.log(storedData)
    return (
        <>
           
            <main>
                <div className="container ">
                    <div className="row">
                        <div className="col-12">

                            <div className="content-area">
                                <TabWizard handleTab={handleTab} tabItem={'summary'}/>

                                <div className="content-area__main">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="general"
                                            role="tabpanel"
                                            aria-labelledby="general-tab"
                                        >
                                            <div className="section-wrapper">
                                                <div className="row">
                                                    <div className="col-12">

                                                        {/* {storedData.map((data, idx) => (

                                                            <div key={idx} className="info">
                                                                <h3>
                                                                    <span>{data?.title}</span>
                                                                </h3>
                                                                {data?.title === 'Application Information' && (
                                                                    <div className="info__profile">
                                                                        <img
                                                                            src="images/placeholder/profile-image.png"
                                                                            alt="profile-image"
                                                                        />
                                                                    </div>
                                                                )}

                                                                <table className="table table-borderless table-review">
                                                                    <tbody>
                                                                        {Object.keys(data.formData).map((key, index) => (
                                                                            <tr key={index}>
                                                                                <td className="text-capitalize" width="32%">{key}</td>
                                                                                {Array.isArray(data.formData[key]) ? (
                                                                                    <td>{data.formData[key].map((file: File, id: number) => (
                                                                                        <span key={id}>{file.name}, </span>
                                                                                    ))}</td>
                                                                                ) : (
                                                                                    <td>{data.formData[key]}</td>
                                                                                )}


                                                                            </tr>
                                                                        ))}
                                                                    </tbody>

                                                                </table>
                                                            </div>
                                                        ))} */}

                                                        <div className="btn-pagination btn-pagination__review">
                                                            <button className="btn btn-cancel">Cancel</button>
                                                            <button className="btn btn-save">
                                                                Save as Draft
                                                            </button>
                                                            <button className="btn btn-primary btn-continue">
                                                                Submit Form
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <FormComponent currentTab={currentTab} handelNext={handelNext} formData={formData}
                          setFormData={setFormData} errors={errors} setErrors={setErrors} /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            



        </>
    )
}

export default SummaryComponent;