
import React from "react";
import './SCSS/Rourkela.scss';
import R_img1 from "../assets/Rourkela/R_img1.jpg";
import R_img2 from "../assets/Rourkela/R_img2.jpg";
import R_img3 from "../assets/Rourkela/R_img3.jpg";
import R_img4 from "../assets/Rourkela/R_img4.jpg";


class Rourkela extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [ R_img1, R_img2, R_img3, R_img4  ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 5000);
  }

  render() {
    return (
      <div className="Rourkela_container" style = {
          {
              backgroundImage: `url('${this.state.images[this.state.currentImage]}')`
          }
      }>

          <h1 className = "rourkela_name" >Rourkela: The Steel City of India</h1>
          <p className = "About_rourkela">
          Rourkela city is located in the northern part of Odisha. It is surrounded by a range of hills
and encircled by rivers. It has one of the largest steel plants of the Steel Authority of India
Limited (SAIL) known as Rourkela Steel Plant.

Rourkela railway station is on the Tatanagar–Bilaspur section of Howrah-Nagpur-Mumbai
line under Chakradharpur rail division. Rourkela city is connected with NH 143 (former NH-
23). Independent three-wheeler auto, taxis without meters and local self-governance are the
most important mode of transportation in the city. Sampark buses, introduced in September
2006, connect various areas in the city.

Major Tourist Destinations in Rourkela are Hanuman Vatika, Ramkrishna Mission,
Hamirpur, Sector-19, Vedvyas Temple, Mandira Dam, Vaishnodevi Temple Rourkela, Indira
Gandhi Park, Pitamahal Dam, Jubilee Park, Nehru Traffic Park, Ispat Nehru Park,
Khandadhar Falls, Darjeeng Picnic Spot, Blue Stone Picnic Area, Tarkera Dam, Rani Sati
Mandir (Birmitrapur) and Sri Sai Mandir (Vedvyas).
          </p>
      </div>
    );
  }}

  export default Rourkela; 