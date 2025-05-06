import { useSelector } from 'react-redux';

import { storedFormData } from '../redux/slice/formSlice';

import { formArray } from '../common/data/dataArray';

const SummaryComponent = (props) => {

    // const { handleTab } = props;
    const storedData = useSelector(storedFormData);

    return (


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

                                {storedData.slice(0, storedData.length - 1).map((data, idx) => (

                                    <div key={idx} className="info">
                                        <h3>
                                            <span>{formArray[data?.title].title}</span>
                                        </h3>
                                        {data?.title === 'appInfo' && (
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
                                                            <td>{data.formData[key].map((file, id) => (
                                                                <span key={id}>{file.fileName}, </span>
                                                            ))}</td>
                                                        ) : (
                                                            <td>{data.formData[key]}</td>
                                                        )}

                                                        {/* <td>{key}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    </div>
                                ))}

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

                </div>
            </div>
        </div>


    )
}

export default SummaryComponent;