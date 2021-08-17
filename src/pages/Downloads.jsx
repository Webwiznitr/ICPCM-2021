import React from "react";
import BannerSmall from "../components/BannerSmall";
import "./Download.css";
import {GoDesktopDownload} from 'react-icons/go'
import {FaFileDownload} from 'react-icons/fa'
import {IoMdDownload} from 'react-icons/io'

const deskDown = <GoDesktopDownload size= "40px" />
const flyDown  = <FaFileDownload size = "40px"/>
const logoDown = <IoMdDownload size = "40px"/>

const Down = [
   {
     logo: deskDown, 
     name: "ICPCM 21 Abstract template",
     downloadLink:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629233646/redsea/Downloads/Abstract_template_ibdm5b.png"
   }
   ,
   {
    logo: flyDown, 
    name: "Flyer",
    downloadLink: "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629233982/redsea/Downloads/Flyer_ICPCM_2021_eopcoj.jpg"
  },
  {
    logo: logoDown, 
    name: "ICPCM logo",
    downloadLink: "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629239170/redsea/landingpage/Icpcm_logo_dodmlm.png"
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
            <a href={element.downloadLink} download >Download</a>
            </div>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default Download;
