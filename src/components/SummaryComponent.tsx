import { useSelector } from 'react-redux';

import { storedFormData } from '../redux/slice/formSlice';

const SummaryComponent = () => {
    const storedData = useSelector(storedFormData);
    // console.log(storedData)
    return (
        // <div
        //     className="tab-pane fade"
        //     id="submit"
        //     role="tabpanel"
        //     aria-labelledby="submit-tab"
        // >
        <div className="section-wrapper">
            <div className="row">
                <div className="col-12">
                    
                    {storedData.map((data,idx) => (

                        <div key={idx} className="info">
                            <h3>
                                <span>{data?.title}</span>
                            </h3>
                            {data?.title==='Application Information'&&(
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
                                            {Array.isArray(data.formData[key])?(
                                                <td>{data.formData[key].map((file:File,id:number)=>(
                                                    <span key={id}>{file.name}, </span>
                                                ))}</td>
                                            ):(
                                                <td>{data.formData[key]}</td>
                                            )}
                                            
                                           
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    ))}
                    {/* 
                     {Array.isArray(data.formData[key]) ? (
                                                <td>
                                                    {data.formData[key].map((file: File, idx: number) => (
                                                        <span key={idx}>{file.name}, </span>
                                                    ))}
                                                </td>
                                            ) : (
                                                <td>{data.formData[key]}</td>
                                            )}data?.formData[key].isArray?
                                         data?.formData[key].map((each)=>(
                                        <p>each</p>
                                         ))}
                        <div className="info">
                            <h3>
                                <span>Applicant Information</span>
                            </h3>
                            <div className="info__profile">
                                <img
                                    src="images/placeholder/profile-image.png"
                                    alt="profile-image"
                                />
                            </div>
                            <table className="table table-borderless table-review">
                                <tbody>
                                    <tr>
                                        <td width="32%">First Name</td>
                                        <td>Alhasan Alsammarraie</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>Alsammarie</td>
                                    </tr>
                                    <tr>
                                        <td>Name of Employer</td>
                                        <td>Applab</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number</td>
                                        <td>70960649</td>
                                    </tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <td>Alsammarie</td>
                                    </tr>
                                    <tr>
                                        <td>Passport Validity</td>
                                        <td>Applab</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td>70960649</td>
                                    </tr>
                                    <tr>
                                        <td>Validity (Residence ID)</td>
                                        <td>709660649</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    {/* <div className="info">
                            <h3>
                                <span>Document Required</span>
                            </h3>
                            <table className="table table-borderless table-review">
                                <tbody>
                                    <tr>
                                        <td width="32%">
                                            Passport Showing Personal Information{" "}
                                        </td>
                                        <td>
                                            {" "}
                                            <img
                                                src="images/placeholder/word-document.svg"
                                                alt="pdf icon"
                                            />{" "}
                                            Passport copy.word
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Valid Staff ID</td>
                                        <td>
                                            <img
                                                src="images/placeholder/pdf.svg"
                                                alt="pdf icon"
                                            />{" "}
                                            Passport copy.pdf
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Passport Showing Personal Information </td>
                                        <td>
                                            <img
                                                src="images/placeholder/pdf.svg"
                                                alt="pdf icon"
                                            />{" "}
                                            Passport copy.pdf
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Valid Staff ID</td>
                                        <td>
                                            <img
                                                src="images/placeholder/pdf.svg"
                                                alt="pdf icon"
                                            />{" "}
                                            Passport copy.pdf
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
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
        // </div>
    )
}

export default SummaryComponent;