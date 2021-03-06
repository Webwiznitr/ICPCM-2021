import React from "react";
import BannerSmall from "../components/BannerSmall";
import {GoDesktopDownload} from 'react-icons/go'
import {FaFileDownload} from 'react-icons/fa'
import {IoMdDownload} from 'react-icons/io'
import { Link } from "react-router-dom";

const deskDown = <GoDesktopDownload size= "40px" />
const flyDown  = <FaFileDownload size = "40px"/>
const logoDown = <IoMdDownload size = "40px"/>

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
    <div className= "download_section">
      <BannerSmall/>
      {Down.map(element => {
        return (
         
          <div className = "download_container">
            <div className = "inner_container">
            <div className = "download_logo">{element.logo}</div>
            <div className = "download_info">
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
