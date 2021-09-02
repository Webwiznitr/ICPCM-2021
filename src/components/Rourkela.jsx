
import React from "react";
import './SCSS/Rourkela.scss';


class Rourkela extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [ 
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1630487701/redsea/Rourkela/R_img1_h706qs.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1630487705/redsea/Rourkela/R_img2_nmisif.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1630487705/redsea/Rourkela/R_img3_lm4pht.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1630487703/redsea/Rourkela/R_img4_qvemtt.jpg",
        
    
        ]
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
    setInterval(this.switchImage, 7000);
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