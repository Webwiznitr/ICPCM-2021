
import React from "react";
import './glimpses.scss';


class Rourkela extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234388/redsea/rourkela_blur/image_5_fqgmlx.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234404/redsea/rourkela_blur/Image_3_szgyfx.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234393/redsea/rourkela_blur/image_4_sqrctq.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234384/redsea/rourkela_blur/image_6_nynfbb.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234376/redsea/rourkela_blur/image_7_glksx9.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234353/redsea/rourkela_blur/image_10_uhq3fd.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234363/redsea/rourkela_blur/image_9_wzz136.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234369/redsea/rourkela_blur/image_8_mqjsr9.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234332/redsea/rourkela_blur/image_11_z4qouk.jpg",
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234328/redsea/rourkela_blur/image_12_ydbhcd.jpg",



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
    setInterval(this.switchImage, 2000);
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