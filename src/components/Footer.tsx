

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-block">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="app-store">
                Get our apps
                <span>
                  <img src="images/icons/app-store.svg" alt="app store" />
                </span>
                <span>
                  <img src="images/icons/google-play.svg" alt="app store" />
                </span>
              </div>
              <div className="footer-top-block__social">
                <span>Stay connected</span>
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <span className="link">
                  <a href="#">caaqatar</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex footer">
            <nav className="d-flex footer__menu">
              <div className="footer__contact">
                <a href="">
                  <img
                    src="images/logo/footer-logo-white-text.svg"
                    className="footer__caa-logo"
                    alt="Civil Aviation Authority logo"
                  />
                </a>
                <ul>
                  <li className="link">
                    <img
                      src="images/icons/footer-location-icon.svg"
                      alt="footer location"
                    />
                    <a href="">Old Salata - P.O.Box: 3000 Doha - Qatar.</a>
                  </li>
                  <li>
                    <ul>
                      <li className="no-link">
                        <img
                          src="images/icons/footer-phone-icon.svg"
                          alt="phone"
                        />
                        <a href="">+974 4494 9666</a>
                      </li>
                      <li className="no-link">
                        <img src="images/icons/footer-fax-icon.svg" alt="fax" />
                        <a href="">00974 44557103</a>
                      </li>
                      <li>
                        <img src="images/icons/footer-mail-icon.svg" alt="mail" />
                        <a href="">pr@caa.gov.qa</a>
                      </li>
                      <li>
                        <img src="images/icons/footer-note-icon.svg" alt="" />
                        <a href="">Send a Note</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="footer__links">
                <ul>
                  <li>Important Links</li>
                  <li>
                    <a href="">ICAO</a>
                  </li>
                  <li>
                    <a href="">IATA</a>
                  </li>
                  <li>
                    <a href="">EASA</a>
                  </li>
                </ul>
                <ul>
                  <li>Staff</li>
                  <li>
                    <a href="">Staff Email</a>
                  </li>
                  <li>
                    <a href="">Mawared</a>
                  </li>
                  <li>
                    <a href="">System</a>
                  </li>
                </ul>
                <ul>
                  <li>Directory</li>
                  <li>
                    <a href="">Travel Agencies Directory</a>
                  </li>
                  <li>
                    <a href="">Air Cargo Directory</a>
                  </li>
                  <li>
                    <a href="">Travel Agencies Directory</a>
                  </li>
                  <li>
                    <a href="">Air Cargo Directory</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-lowerpart">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between p-0">
              <p>© 2021 Civil Aviation Authority - Qatar</p>
              <ul className="inline-links">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Use </a>
                </li>
                <li>
                  <a href="">Cookie Preferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="scrollup" style={{ display: "inline" }}>
        <span>Top</span>
      </a>
    </footer>
  )
}

export default Footer