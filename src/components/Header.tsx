
const Header = () => {
  return (
    <>
      <header className="page-header clearfix">
        <div className="header-top">
          <div className="header-top__logo">
            <div className="col col-sm-auto">
              <a href="">
                <img
                  src="images/logo/caa-logo.svg"
                  className="header-top__caa-logo"
                  alt="Civil Aviation Authority logo"
                />
              </a>
            </div>
            <div className="col col-sm-auto header-top--middle">
              <a href="">
                <img
                  src="images/logo/qda-logo.png"
                  className="header-top__qda-logo"
                  alt="qatar digital governmanet logo"
                />
              </a>
            </div>
            <div className="col col-sm-auto">
              <a href="">
                <img
                  src="images/logo/state-qatar-logo.svg"
                  className="header-top__qda-logo"
                  alt="state qatar logo"
                />
              </a>
            </div>
          </div>
          <div className="header-top__sm">
            <div className="header-top__phone">
              <span />
              44557333
            </div>
            <div className="d-flex align-items-center">
              <div className="laguage-switcher">
                <span
                  className="dropdown-toggle"
                  role="button"
                  id="languagedropdownmenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="laguage-switcher-flag">
                    <img
                      src="images/icons/flag-en.svg"
                      alt="english flag"
                      className="img-fluid"
                    />
                  </span>{" "}
                  English
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="languagedropdownmenu"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="laguage-switcher-flag">
                        <img
                          src="images/icons/flag-ar.svg"
                          alt="arabic flag"
                          className="img-fluid"
                        />
                      </span>{" "}
                      عربي
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="laguage-switcher-flag">
                        <img
                          src="images/icons/flag-en.svg"
                          alt="english flag"
                          className="img-fluid"
                        />
                      </span>{" "}
                      English
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-top__notification">
                <a href="#">
                  <img
                    src="images/icons/notification-bell.svg"
                    alt="notification icon"
                  />
                  <span>12</span>
                </a>
              </div>
              <div className="header-top__right">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  id="languagedropdownmenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>JK</span>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="languagedropdownmenu"
                >
                  <div className="dropdown-menu__user">
                    <a href="#">
                      <span>JK</span>
                    </a>
                    <p>Hi, Jinukumar</p>
                    <div className="dropdown-menu__image">
                      <img
                        src="images/placeholder/national-dropdown.jpg"
                        className="img-fluid"
                        alt="National Authentication System"
                      />
                      <img
                        src="images/placeholder/tawtheeq-dropdown.jpg"
                        className="img-fluid"
                        alt="Tawtheeq"
                      />
                    </div>
                  </div>
                  <div className="dropdown-menu__links">
                    <h2>Quick Links</h2>
                    <ul>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                      <li>
                        <a href="#">Setting</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-logout">
                      Log out
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-top__right">
                <a href="#">
                  <span>
                    <img
                      src="images/icons/user-icon.svg"
                      alt="user icon"
                      className="img-fluid"
                    />
                  </span>
                </a>
              </div>
              <div className="header-top__right hamberger">
                <a href="#">
                  <span>
                    <img
                      src="images/icons/hamberger.svg"
                      className="header-top__right__menu"
                      alt="menu icon"
                    />
                    <img
                      src="images/icons/menu-close.svg"
                      className="header-top__right__close"
                      alt="menu close"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inside-header inside-header--space-below">
          <div className="container">
            <div className="row">
              <div className="col-12 inside-header__top">
                <div className="inside-header__top__start">
                  <nav aria-label="breadcrumb" className="breadcrumb-outer">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Crew Member Certificate Requests</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Apply
                      </li>
                    </ol>
                  </nav>
                  <div className="inside-header__icon">
                    <img
                      src="images/icons/crew-member-icon.svg"
                      alt="heading icon"
                    />
                  </div>
                  <h1>
                    Crew Member Certificate Requests application form
                    <small>QCAA Regulations No. 068 of 2020</small>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="inside-header__image">
            <img src="images/bg/header-side-image.png" alt="header graphics" />
          </div>
        </div>
      </header>
      {/*  */}
      <div className="main-menu">
        <div className="d-flex main-menu__scroll">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="main-menu__heading">
              <p>MENU</p>
            </div>
            <a
              className="nav-link active"
              id="v-pills-about-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-about"
              type="button"
              role="tab"
              aria-controls="v-pills-about"
              aria-selected="true"
            >
              About CAA
            </a>
            <a
              className="nav-link"
              id="v-pills-participation-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-participation"
              type="button"
              role="tab"
              aria-controls="v-pills-participation"
              aria-selected="false"
            >
              E Participations
            </a>
            <a
              className="nav-link"
              id="v-pills-service-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-service"
              type="button"
              role="tab"
              aria-controls="v-pills-service"
              aria-selected="false"
            >
              E Services
            </a>
            <a
              className="nav-link"
              id="v-pills-law-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-law"
              type="button"
              role="tab"
              aria-controls="v-pills-law"
              aria-selected="false"
            >
              Laws And Regulations
            </a>
            <a
              className="nav-link"
              id="v-pills-media-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-media"
              type="button"
              role="tab"
              aria-controls="v-pills-media"
              aria-selected="false"
            >
              Media Center
            </a>
            <a
              className="nav-link"
              id="v-pills-data-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-data"
              type="button"
              role="tab"
              aria-controls="v-pills-data"
              aria-selected="false"
            >
              Open Data
            </a>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="main-menu__search">
              <div className="form-group">
                <label htmlFor="search">
                  Search Website
                  <img src="images/icons/search.svg" alt="" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Search Website"
                />
              </div>
            </div>
            <div
              className="tab-pane fade show active"
              id="v-pills-about"
              role="tabpanel"
              aria-labelledby="v-pills-about-tab"
            >
              <div className="main-menu__column">
                <p>Who we are</p>
                <ul>
                  <li>
                    <a href="">Brief</a>
                  </li>
                  <li>
                    <a href="">President Message</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu__column main-menu__column--two">
                <p>Departments and Units</p>
                <ul>
                  <li>
                    <a href="">International Cooperation</a>
                  </li>
                  <li>
                    <a href="">Internal Audit</a>
                  </li>
                  <li>
                    <a href="">Planning and Quality</a>
                  </li>
                  <li>
                    <a href="">Legal Affairs</a>
                  </li>
                  <li>
                    <a href="">Public Relations and Communication</a>
                  </li>
                  <li>
                    <a href="">Air Accidents &amp; Incidents Investigation</a>
                  </li>
                  <li>
                    <a href="">Human Resources</a>
                  </li>
                  <li>
                    <a href="">Financial and Administrative Affairs</a>
                  </li>
                  <li>
                    <a href="">Air Navigation</a>
                  </li>
                  <li>
                    <a href="">Planning and Quality</a>
                  </li>
                  <li>
                    <a href="">Information Systems</a>
                  </li>
                  <li>
                    <a href="">Meteorology</a>
                  </li>
                  <li>
                    <a href="">Legal Affairs</a>
                  </li>
                  <li>
                    <a href="">Air Safety</a>
                  </li>
                  <li>
                    <a href="">Airport Affairs</a>
                  </li>
                  <li>
                    <a href="">Public Relations and Communication</a>
                  </li>
                  <li>
                    <a href="">Air Transport</a>
                  </li>
                  <li>
                    <a href="">Fire Fighting and Rescue</a>
                  </li>
                  <li>
                    <a href="">Air Accidents &amp; Incidents Investigation</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu__column">
                <p>Who we are</p>
                <ul>
                  <li>
                    <a href="">Brief</a>
                  </li>
                  <li>
                    <a href="">President Message</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-participation"
              role="tabpanel"
              aria-labelledby="v-pills-participation-tab"
            >
              <div className="main-menu__column">
                <p>E-Participations</p>
                <ul>
                  <li>
                    <a href="">E-Participations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-service"
              role="tabpanel"
              aria-labelledby="v-pills-service-tab"
            >
              <div className="main-menu__column">
                <p>Inquiry</p>
                <ul>
                  <li>
                    <a href="">Air Cargo Agencies Directory</a>
                  </li>
                  <li>
                    <a href="">Travel Agencies Directory</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu__column">
                <p>Travel &amp; Air Cargo Agencies</p>
                <ul>
                  <li>
                    <a href="">Agencies Special Request</a>
                  </li>
                  <li>
                    <a href="">Agency Cancelation</a>
                  </li>
                  <li>
                    <a href="">Agency Data Modification</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-law"
              role="tabpanel"
              aria-labelledby="v-pills-law-tab"
            >
              <div className="main-menu__column">
                <p>Civil Aviation Regulations</p>
                <ul>
                  <li>
                    <a href="">Air Safety Regulations</a>
                  </li>
                  <li>
                    <a href="">Air Transport Regulations</a>
                  </li>
                  <li>
                    <a href="">Safety Directives</a>
                  </li>
                  <li>
                    <a href="">Information Leaflets</a>
                  </li>
                  <li>
                    <a href="">Publications</a>
                  </li>
                  <li>
                    <a href="">Notice Of Proposed Amendment</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu__column">
                <p>Aviation Laws</p>
                <li>
                  <a href="">General</a>
                </li>
                <li>
                  <a href="">Air Transport &amp; Airport Affairs Laws</a>
                </li>
                <li>
                  <a href="">Aviation Security Laws</a>
                </li>
                <li>
                  <a href="">Airport User Regulation</a>
                </li>
              </div>
              <div className="main-menu__column">
                <p>Air Safety Forms</p>
                <ul>
                  <li>
                    <a href="">Airworthiness</a>
                  </li>
                  <li>
                    <a href="">Aerodromes</a>
                  </li>
                  <li>
                    <a href="">Flight Operations</a>
                  </li>
                  <li>
                    <a href="">Air Navigation Services</a>
                  </li>
                  <li>
                    <a href="">General Forms</a>
                  </li>
                  <li>
                    <a href="">Safety Management Systems</a>
                  </li>
                  <li>
                    <a href="">Licensing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-media"
              role="tabpanel"
              aria-labelledby="v-pills-media-tab"
            >
              <div className="main-menu__column">
                <p>News</p>
                <ul>
                  <li>
                    <a href="">Aviation News</a>
                  </li>
                  <li>
                    <a href="">QCAA News</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu__column">
                <p>Procedures</p>
                <ul>
                  <li>
                    <a href="">Air Travel/ Air Cargo Offices</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-data"
              role="tabpanel"
              aria-labelledby="v-pills-data-tab"
            >
              <div className="main-menu__column">
                <p>Open Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  )
}

export default Header