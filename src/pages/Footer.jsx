import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="waves-section">
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/*column1*/}
              <div className="col1">
                <i class="fa fa-map-marker"></i>
                <p className="markicon">📌</p>
                <div className="Address">
                  <h4>Address</h4>

                  <p>National Institute of</p>
                  <p>Technology Rourkela</p>
                  <p>Odisha,India,769008</p>
                </div>
              </div>

              {/*column2*/}

              <div className="col2">
                <p className="phoneicon">☎️</p>
                <div className=" number">
                  <h4>Phone Number</h4>

                  <li>+91 62XXXXXXXX</li>
                  <li>+91 62XXXXXXXX</li>
                </div>
              </div>

              {/*column3*/}

              <div className="col3">
                <div className="mail">
                  <p className="mailicon">📫</p>
                  <div className="mailcon">
                    <h4>Email Address</h4>
                  </div>

                  <div className="mail">
                    <li>icpcm2021@gmail.com</li>
                  </div>
                </div>
              </div>
            </div>

            <svg viewBox="0 0 120 20">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="1"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                   1 0 0 0 0  
                   0 1 0 0 0  
                   0 0 1 0 0  
                   0 0 0 13 -9"
                    result="goo"
                  />
                  <xfeBlend in="SourceGraphic" in2="goo" />
                </filter>

                <path
                  id="wave"
                  d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
                />
              </defs>

              <use id="wave3" class="wave" href="#wave" x="0" y="-7"></use>
              <use id="wave2" class="wave" href="#wave" x="0" y="-5"></use>
              <use id="wave1" class="wave" href="#wave" x="0" y="0"></use>
            </svg>

            <div className="footer-bottom">
              <p className="text-xs-center">
                ICPCM &copy;{new Date().getFullYear()} - All Rights Reserved
              </p>
              <p className="end">
                Designed and Developed by Team WEBWIZ with ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
