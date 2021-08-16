import React from "react";
import BannerSmall from "../components/BannerSmall";
import "./Download.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Downloads = () => {
  return (
    <>
      <BannerSmall />
      <div className="container">
        <div className="brochurerow1">
          <div className="brochure1">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>
              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <a
              className="download"
              href="https://drive.google.com/file/d/1ZXvODRAZi7kVVOUYiEibb9e67OVO7NfK/view"
            >
              <b>Download Brochure</b>
            </a>
          </div>

          <div className="brochure2">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>

              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <b>Download Brochure</b>
          </div>

          <div className="brochure3">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>

              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <b>Download Brochure</b>
          </div>
        </div>

        <div className="brochurerow2">
          <div className="brochure1">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>
              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <b>Download Brochure</b>
          </div>

          <div className="brochure2">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>

              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <b>Download Brochure</b>
          </div>

          <div className="brochure3">
            <h4>CONFERENCE BROCHURE</h4>

            <div className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faFilePdf} size="4x" />
              </div>

              <p>
                Click here to get to know the complete program details of 4th
                ICASETM,2021
              </p>
            </div>
            <b>Download Brochure</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
