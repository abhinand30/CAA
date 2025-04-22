import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { tabArray } from '../common/data/dataArray'

const HomePage = () => {
  return (
    <>


      {/* <link href="css/main-ar.css" rel="stylesheet"> */}

    <Header/>
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="content-area">
                <div className="content-area__head-block">
                  <div className="content-area__head-block__wrapper">
                    <div className="nav-scroller">
                      <button
                        type="button"
                        className="nav-scroller-btn nav-scroller-btn--left"
                        aria-label="Scroll left"
                      >
                        <svg
                          title="Left arrow"
                          className="nav-scroller-icon"
                          width={21}
                          height={32}
                          viewBox="0 0 21 32"
                        >
                          <path d="M0 16l4.736-4.768L16 0l4.736 4.736L9.504 16l11.232 11.264L16 32 4.736 20.736z" />
                        </svg>
                      </button>
                      <ul
                         className="nav nav-tabs nav-pills nav-fill form-wizard"
                         id="myTab"
                         role="tablist"
                       >
            
                      {tabArray.map((tab)=>(
                         <li
                         key={tab.id}
                           className="nav-item form-wizard__filled"
                           role="presentation"
                         >
                           <button
                             className="nav-link active"
                             id="general-tab"
                             data-bs-toggle="tab"
                             data-bs-target="#general"
                             type="button"
                             role="tab"
                             aria-controls="home"
                             aria-selected="true"
                           >
                             <span className="form-wizard__completed" />
                             <span className="form-wizard__no">01</span>
                             General Information
                           </button>
                         </li>
                      ))}
                      </ul>
                     
                      <button
                        type="button"
                        className="nav-scroller-btn nav-scroller-btn--right"
                        aria-label="Scroll right"
                      >
                        <svg
                          title="Right arrow"
                          className="nav-scroller-icon"
                          width={21}
                          height={32}
                          viewBox="0 0 21 32"
                        >
                          <path d="M0 27.264L11.264 16 0 4.736 4.736 0 16 11.232 20.736 16l-16 16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

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
                          <div className="col-12 col-md-9 section-wrapper-content">
                            <span className="number-line">01</span>
                            <aside>
                              <h3>General Information</h3>
                              <p className="content-opacity">
                                A sub-heading is a mini-headline given to a
                                subsection or paragraph within a main piece of
                                writing. They're smaller than the main headline but
                                larger than the paragraph text of the article.
                              </p>
                              {/* <ul class="validation-wrapper">
                                          <li>
                                             <a>test error</a>
                                          </li>
                                       </ul> */}
                              {/* <form className="form-wrapper mt-3">
                                <label
                                  htmlFor="application"
                                  id="application"
                                  className="label-radiobutton"
                                >
                                  Application Type
                                </label>
                                <div
                                  className="input-radio d-flex flex-wrap"
                                  role="radiogroup"
                                  aria-labelledby="application"
                                >
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="application"
                                      id="Issue"
                                      aria-labelledby="application Issue"
                                      autoComplete="off"
                                      defaultChecked=""
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Issue"
                                    >
                                      Issue
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="application"
                                      id="Renewal"
                                      aria-labelledby="application Renewal"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Renewal"
                                    >
                                      Renewal
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="application"
                                      id="Re-issue"
                                      aria-labelledby="application Re-issue"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Re-issue"
                                    >
                                      Re- Issue
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="application"
                                      id="Change"
                                      aria-labelledby="application Change"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Change"
                                    >
                                      Change/Correct
                                    </label>
                                  </div>
                                </div>
                                <label
                                  htmlFor="apply"
                                  id="apply"
                                  className="label-radiobutton"
                                >
                                  Applying For
                                </label>
                                <div
                                  className="input-radio d-flex flex-wrap"
                                  role="radiogroup"
                                  aria-labelledby="apply"
                                >
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Flight-Deck"
                                      aria-labelledby="apply Flight-Deck"
                                      autoComplete="off"
                                      defaultChecked=""
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Flight-Deck"
                                    >
                                      Flight Deck Crew
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Cabin"
                                      aria-labelledby="apply Cabin"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Cabin"
                                    >
                                      Cabin Crew
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Aircraft"
                                      aria-labelledby="apply Aircraft"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Aircraft"
                                    >
                                      Aircraft Maintenance Personnel
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Loadmaster"
                                      aria-labelledby="apply Loadmaster"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Loadmaster"
                                    >
                                      Loadmaster
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Load-Controller"
                                      aria-labelledby="apply Load-Controller"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Load-Controller"
                                    >
                                      Load Controller
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Flight-Dispatcher"
                                      aria-labelledby="apply Flight-Dispatcher"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Flight-Dispatcher"
                                    >
                                      Flight Dispatcher
                                    </label>
                                  </div>
                                  <div className="checkbox-button">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="apply"
                                      id="Other"
                                      aria-labelledby="apply Other"
                                      autoComplete="off"
                                      readOnly=""
                                    />
                                    <label
                                      className="btn btn-checkbox"
                                      htmlFor="Other"
                                    >
                                      Other
                                    </label>
                                  </div>
                                </div>
                                <div className="btn-pagination">
                                  <button className="btn btn-primary">Next</button>
                                </div>
                              </form>
                            </aside>
                          </div>
                          <div className="col-12 col-md-3 section-wrapper-box">
                            <div className="information-box">
                              <img src="images/icons/information-icon.svg" />
                              <h4>General information</h4>
                              <p>
                                This form in only Applicable for Qatar Airways
                                Staffs. You will be asked to provide proof to verify
                                it.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12 col-md-9 section-wrapper-content">
                            <span className="number-line">02</span>
                            <aside>
                              <h3>Applicant Information</h3>
                              <p className="content-opacity">
                                A sub-heading is a mini-headline given to a
                                subsection or paragraph within a main piece of
                                writing. They're smaller than the main headline but
                                larger than the paragraph text of the article.
                              </p>
                              <form className="form-wrapper">
                                <div className="upload-section">
                                  <div className="upload-wrap">
                                    <input
                                      className="upload-wrap-input"
                                      type="file"
                                    />
                                    <a href="#">
                                      <span className="upload-wrap__close-icon">
                                        <i
                                          className="fa fa-times"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </a>
                                    <div className="upload-wrap-content">
                                      <img
                                        src="images/icons/plus.svg"
                                        alt="upload icon"
                                      />
                                      <p>Upload Photo</p>
                                    </div>
                                  </div>
                                  {/* <div class="upload-wrap upload-wrap__placeholder">
                                                <input class="upload-wrap-input" type="file">
                                                <div class="upload-wrap-content">
                                                   <img src="images/placeholder/highlight-block.png" alt="upload icon"/>
                                                </div>
                                             </div> */}
                                  {/* <p className="upload-section-error">
                                    Accepted Formats png &amp; jpeg <br />
                                    <span>Recommended size 100px x 100px</span>
                                  </p>
                                </div>
                                <div className="row">
                                  <div className="row m-0 p-0">
                                    <label htmlFor="last-name">
                                      Name as shown in Passport
                                    </label>
                                    <div className="col-12 col-md-4 form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="first-name"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div className="col-12 col-md-4 form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Sur-name"
                                        placeholder="Sur Name"
                                      />
                                    </div>
                                    <div className="col-12 col-md-4 form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Last-name"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                  </div>
                                 
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="first-name">
                                      Name of Employer
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="last-name"
                                      placeholder="Name of Employer"
                                    />
                                  </div>
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="last-name">
                                      Contact Number
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="last-name"
                                      placeholder="Contact Number"
                                    />
                                  </div>
                                  <div className="col-12 form-group">
                                    <label>Gender</label>
                                    <div className="d-flex">
                                      <div className="form-radio">
                                        <input
                                          className="form-radio-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="form-radio-label"
                                          htmlFor="flexRadioDefault1"
                                        >
                                          Male
                                        </label>
                                      </div>
                                      <div className="form-radio">
                                        <input
                                          className="form-radio-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                        />
                                        <label
                                          className="form-radio-label"
                                          htmlFor="flexRadioDefault2"
                                        >
                                          Female
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="nationality">Nationality</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="nationality"
                                      placeholder="Nationality"
                                    />
                                  </div>
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="p-validity">
                                      Passport Validity
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="p-validity"
                                      placeholder="Passport Validity"
                                    />
                                  </div>
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="dob">Date Of Birth</label>
                                    <div className="date-wrapper">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="dob"
                                        placeholder="Choose Date"
                                      />
                                      <span className="calender-icon">
                                        <i className="fa fa-calendar-o" />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 form-group">
                                    <label htmlFor="id">
                                      Validity (Residence ID)
                                    </label>
                                    <div className="date-wrapper">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="is"
                                        placeholder="Choose Date"
                                      />
                                      <span className="calender-icon">
                                        <i className="fa fa-calendar-o" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <label>Date Of Flights</label>
                                    <div className="range-area">
                                      <div className="d-flex">
                                        <div className="form-radio">
                                          <input
                                            className="form-radio-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="range"
                                            defaultChecked=""
                                          />
                                          <label
                                            className="form-radio-label"
                                            htmlFor="range"
                                          >
                                            Range Of Selection
                                          </label>
                                        </div>
                                        <div className="form-radio">
                                          <input
                                            className="form-radio-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="select"
                                          />
                                          <label
                                            className="form-radio-label"
                                            htmlFor="select"
                                          >
                                            Multiple Dates
                                          </label>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 col-md-4 form-group">
                                          <div className="date-wrapper">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="f-date"
                                              placeholder="From"
                                            />
                                            <span className="calender-icon">
                                              <i className="fa fa-calendar-o" />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-4 form-group">
                                          <div className="date-wrapper">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="t-date"
                                              placeholder="To"
                                            />
                                            <span className="calender-icon">
                                              <i className="fa fa-calendar-o" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 col-md-4 form-group">
                                          <div className="date-wrapper">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="select-date"
                                              placeholder="Select Date"
                                            />
                                            <span className="calender-icon">
                                              <i className="fa fa-calendar-o" />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col-12 multiple-upload">
                                          <a href="javascript:void(0)">
                                            <span
                                              href="#"
                                              className="multiple-upload__plus"
                                            >
                                              <i
                                                className="fa fa-plus"
                                                aria-hidden="true"
                                              />
                                            </span>
                                            Add new Record
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="table-responsive custom-table">
                                  <label>Flight Schedule</label>
                                  <table className="table table-striped ">
                                    <thead>
                                      <tr>
                                        <td>
                                          Departure
                                          <br /> Flight No.
                                        </td>
                                        <td>
                                          Departure
                                          <br /> Aerodrome
                                        </td>
                                        <td>
                                          Date of
                                          <br />
                                          Departure
                                        </td>
                                        <td>
                                          Time of
                                          <br />
                                          Departure
                                        </td>
                                        <td>
                                          Arrival
                                          <br /> Flight No.
                                        </td>
                                        <td>
                                          Arrival
                                          <br /> Aerodrome
                                        </td>
                                        <td>
                                          Date of
                                          <br /> Arrival
                                        </td>
                                        <td>
                                          Time&nbsp;of
                                          <br /> Arrival
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>15:35</td>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>17:30</td>
                                      </tr>
                                      <tr>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>15:35</td>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>17:30</td>
                                      </tr>
                                      <tr>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>15:35</td>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>17:30</td>
                                      </tr>
                                      <tr>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>15:35</td>
                                        <td>ICAO CALL SIGN</td>
                                        <td>4 letter ICAO CODE</td>
                                        <td>14/10/2021</td>
                                        <td>17:30</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="btn-pagination">
                                  <button className="btn btn-primary">Next</button>
                                </div>
                              </form>
                            </aside>
                          </div>
                          <div className="col-12 col-md-3 section-wrapper-box">
                            <div className="information-box">
                              <img src="images/icons/information-icon.svg" />
                              <h4>General information</h4>
                              <p>
                                This form in only Applicable for Qatar Airways
                                Staffs. You will be asked to provide proof to verify
                                it.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12 col-md-9 section-wrapper-content">
                            <span className="number-line">03</span>
                            <aside>
                              <h3>Document Required</h3>
                              <p className="content-opacity mb-5">
                                A sub-heading is a mini-headline given to a
                                subsection or paragraph within a main piece of
                                writing. They're smaller than the main headline but
                                larger than the paragraph text of the article.
                              </p>
                              <div className="call-out-box">
                                <p>
                                  New Trainee applicants are not required to submit
                                  these documents during application for Initial
                                  Issue of CMC. Said documents shall be sent to the
                                  QCAA following completion of training.
                                </p>
                                <div className="d-flex align-items-center">
                                  Yes, I'm a Trainee
                                  <div className="form-switch">
                                    <label className="switch">
                                      <input type="checkbox" defaultChecked="" />
                                      <span className="slider round" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <form className="form-wrapper">
                                <div className="row">
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Passport Showing Personal Information
                                      <div className="custom-popover">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={16}
                                          height={16}
                                          fill="currentColor"
                                          className="bi bi-info-circle-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                        <div className="custom-popover__drop">
                                          <p>
                                            Applicants are required to submit this
                                            documents <a href="">View more</a>
                                          </p>
                                        </div>
                                      </div>
                                    </label>
                                    <div className="fileUpload fileUpload--preview fileUpload--loader">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <button>
                                        <i
                                          className="fa fa-times"
                                          aria-hidden="true"
                                        />
                                      </button>
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Valid Staff ID
                                      <div className="custom-popover">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={16}
                                          height={16}
                                          fill="currentColor"
                                          className="bi bi-info-circle-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                        <div className="custom-popover__drop">
                                          <p>
                                            A sub-heading is a mini-headline given
                                            to a subsection or paragraph within a
                                            main piece of writing. They're smaller
                                            than the main headline but larger than
                                            the paragraph text
                                          </p>
                                        </div>
                                      </div>
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Qatar Residence ID
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Recent ID Photo (Specifications As Indicated
                                      Above)
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Expired CMC Held (Renewal)
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Valid Medical Certificate{" "}
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-6 form-group">
                                    <label htmlFor="first-name">
                                      Qatar Pilot License With Certificate Of Type
                                      Rating{" "}
                                    </label>
                                    <div className="fileUpload">
                                      <input
                                        id="attachment1"
                                        type="file"
                                        className="uploadBtn upload"
                                      />
                                      <input
                                        className="uploadFile path"
                                        placeholder="Choose file"
                                      />
                                      <span>Upload</span>
                                    </div>
                                    <span className="upload-error">
                                      Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-12 form-group">
                                    <div className="checkbox-wrapper">
                                      <input type="checkbox" id="html" />
                                      <label htmlFor="html">
                                        I hereby certify that the I am qualified for
                                        the position detailed in the application and
                                        meets the QCAA requirements for Crew Member
                                        Certificate.
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="btn-pagination">
                                  <button className="btn btn-primary btn-continue">
                                    Continue
                                  </button>
                                </div>
                              </form> */}
                            {/* </aside>
                          </div>
                          <div className="col-12 col-md-3 section-wrapper-box">
                            <div className="information-box">
                              <img src="images/icons/information-icon.svg" />
                              <h4>General information</h4>
                              <p>
                                This form in only Applicable for Qatar Airways
                                Staffs. You will be asked to provide proof to verify
                                it.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12 col-md-9 section-wrapper-content">
                            <span className="number-line">04</span>
                            <aside>
                              <h3>Additional Information</h3>
                              <p className="content-opacity mb-5">
                                A sub-heading is a mini-headline given to a
                                subsection or paragraph within a main piece of
                                writing. They're smaller than the main headline but
                                larger than the paragraph text of the article.
                              </p>
                              <form className="form-wrapper">
                                <div className="row">
                                  <div className="col-12 col-xl-12 form-group">
                                    <label htmlFor="first-name">
                                      Additional Details
                                    </label>
                                    <textarea
                                      className="form-control"
                                      placeholder="Please provide additional details"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="col-12 col-xl-8 form-group">
                                    <div className="multiple-upload">
                                      <aside>
                                        <label htmlFor="first-name">
                                          Attachment
                                        </label>
                                        <div className="fileUpload">
                                          <input
                                            id="attachment1"
                                            type="file"
                                            className="uploadBtn upload"
                                          />
                                          <input
                                            className="uploadFile path"
                                            placeholder="Choose file"
                                          />
                                          <span>Upload</span>
                                        </div>
                                        <span className="upload-error">
                                          Accepted Formats (.pdf/.xlsx/.png/.jpeg){" "}
                                        </span>
                                      </aside>
                                      <a href="#" className="multiple-upload__plus">
                                        <i
                                          className="fa fa-plus"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="btn-pagination btn-pagination__review">
                                  <button className="btn btn-cancel">Cancel</button>
                                  <button className="btn btn-primary btn-continue">
                                    Next
                                  </button>
                                </div>
                              </form> */}
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="submit"
                      role="tabpanel"
                      aria-labelledby="submit-tab"
                    >
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12">
                            <div className="info">
                              <h3>
                                <span>General Information</span>
                              </h3>
                              <table className="table table-borderless table-review">
                                <tbody>
                                  <tr>
                                    <td width="32%">Application Type</td>
                                    <td>
                                      <img
                                        src="images/icons/table-tick.svg"
                                        className="info__tick-icon"
                                        alt="tick icon"
                                      />{" "}
                                      Renewal
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Applying For</td>
                                    <td>
                                      <img
                                        src="images/icons/table-tick.svg"
                                        className="info__tick-icon"
                                        alt="tick icon"
                                      />
                                      Aircraft Maintenance Personnel
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
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
                            </div>
                            <div className="info">
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
                            </div>
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
              </div>
            </div>
          </div>
        </div>
      </main>
       <Footer/>                               
      {/*  */}
    </>

  )
}

export default HomePage