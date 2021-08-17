import React from "react";
import BannerSmall from "../components/BannerSmall";
import "./Download.css";
import {GoDesktopDownload} from 'react-icons/go'
import {FaFileDownload} from 'react-icons/fa'
import {IoMdDownload} from 'react-icons/io'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

// const Downloads = () => {
//   return (
//     <>
//       <BannerSmall />
//       <div className="container" style={{ height: "50vh"}}>
//         <div className="brochurerow1">
//           <div className="brochure1">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>
//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <a
//               className="download"
//               href="https://drive.google.com/file/d/1ZXvODRAZi7kVVOUYiEibb9e67OVO7NfK/view" download
//               target="_blank" rel="noreferrer"
              
//             >
//               <b>Download Brochure</b>
//             </a>
//           </div>

//           <div className="brochure2">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>

//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <b>Download Brochure</b>
//           </div>

//           <div className="brochure3">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>

//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <b>Download Brochure</b>
//           </div>
//         </div>

//         <div className="brochurerow2">
//           <div className="brochure1">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>
//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <b>Download Brochure</b>
//           </div>

//           <div className="brochure2">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>

//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <b>Download Brochure</b>
//           </div>

//           <div className="brochure3">
//             <h4>CONFERENCE BROCHURE</h4>

//             <div className="content">
//               <div className="icon">
//                 <FontAwesomeIcon icon={faFilePdf} size="4x" />
//               </div>

//               <p>
//                 Click here to get to know the complete program details of 4th
//                 ICASETM,2021
//               </p>
//             </div>
//             <b>Download Brochure</b>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Down = [
   {
     logo: GoDesktopDownload, 
     name: "ICPCM 21 Abstract template",
     downloadLink:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629233646/redsea/Downloads/Abstract_template_ibdm5b.png"
   }
   ,
   {
    logo: FaFileDownload, 
    name: "Flyer",
    downloadLink: "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629233982/redsea/Downloads/Flyer_ICPCM_2021_eopcoj.jpg"
  },
  {
    logo: GoDesktopDownload, 
    name: "ICPCM logo",
    downloadLink: ""
  }
]


const Download = () => {
  return (
    "hello"
  )
}

export default Download;
