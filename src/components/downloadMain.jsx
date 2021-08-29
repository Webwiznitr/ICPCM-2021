import React from "react";
import {GoDesktopDownload} from 'react-icons/go'
import {FaFileDownload} from 'react-icons/fa'
import {IoMdDownload} from 'react-icons/io'
import { Link } from "react-router-dom";
import './SCSS/DownloadMain.scss';

const deskDown = <GoDesktopDownload size= "30px" />
const flyDown  = <FaFileDownload size = "30px"/>
const logoDown = <IoMdDownload size = "30px"/>

const Down = [
   {
     logo: deskDown, 
     name: "ICPCM 21 Abstract template",
     downloadLink:"/files/abstractTemplate.docx"
   }
   ,
   {
    logo: flyDown, 
    name: "Flyer",
    downloadLink: "/files/Flyer.pdf"
  },
  {
    logo: logoDown, 
    name: "ICPCM logo",
    downloadLink: "/icpcm logo no bg.png"
  }
]


const Download = () => {
  return (
    <div className= "download_section_main">
        <h1 style = { { textAlign: "center"}}> Downloads</h1>
        <hr style = { {
          width: "96%",
          marginLeft: "2%"
          
        }
      }
      />
      {Down.map(element => {
        return (
         
          <div className = "download_container_main">
            <div className = "inner_container_main">
            <div className = "download_logo_main">{element.logo}</div>
            <div className = "download_info_main">
            <snap> {element.name}</snap>
            <Link to={element.downloadLink} target = "_blank" download >Download</Link>
            </div>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default Download;
