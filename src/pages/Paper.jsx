import React from 'react';
import BannerSmall from "../components/BannerSmall"
import '../components/glimpses.scss'


class CallforPaper extends React.Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state = {
        currentImage: 0,
        
   images:[
    {
      label: '2011 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180658/redsea/NCPCM_2011_wiihwo.png',
    },
    {
      label: '2012 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180652/redsea/NCPCM_2012_enrtd8.png',
    },
    {
      label: '2013 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180659/redsea/NCPCM_2013_lxi2ld.png',
    },
    {
      label: '2014 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180651/redsea/NCPCM_2014_gate7a.png',
    },
    {
      label: '2015 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180652/redsea/NCPCM_2015_u4jial.png',
    },
    {
      label: '2016 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180649/redsea/NCPCM_2016_mouhl1.png',
    },
    {
      label: '2017 Conference',
      imgPath:
        'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180651/redsea/NCPCM_2017_dqylem.png',
    },
    {
      label : '2018 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629314758/redsea/NCPCM_2018_uzaxol.png"
    },
    {
      label : '2018 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629314798/redsea/NCPCM_2018_2_mmmz2z.png"
    },
    {
      label : '2019 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629314812/redsea/NCPCM_2019_1_pwd6zm.png"
    },
    {
      label : '2019 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629314818/redsea/NCPCM_2019_3_anu9mp.png"},
    {
      label : '2019 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629314818/redsea/NCPCM_2019_4_qni3hp.png"
    },
    {
      label : '2019 Conference',
      imgPath: 
      "https://res.cloudinary.com/manjeetdhayal/image/upload/q_55/v1629314817/redsea/NCPCM_2019_2_oc0vtv.png"
    },
  
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
      setInterval(this.switchImage, 5000);
    }
  
    render() {
      return (
         
        <div className="prev_conferences">
             <BannerSmall/>
             <div className = "container_conference" style = {
            {
                width: "80vw",
                paddingTop: "20px",
                fontSize: "1.5rem",
                fontColor: 'black',
                fontWeight: "1000"
            }
             }>You are invited to submit abstracts and contribute to the conference. ISBN publication will be produced for all the accepted abstracts and full papers. Our previous publication partners:</div>
            <h1 className="Name_of_conference" > {this.state.images[this.state.currentImage].label} </h1>
          <img className="prev_conference_images"
            src={this.state.images[this.state.currentImage].imgPath}
            alt="cleaning images"
          />
        </div>
      );
    }}
  

export default CallforPaper;
