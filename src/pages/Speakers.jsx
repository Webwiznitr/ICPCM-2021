import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Speaker.css';
import SpeakersImage from "../Speaker_Images/circle-cropped.png";
import Styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImageSpeakerPlaceholder = Styled.img`

 width: 95%; 
 height: 95%; 
 margin-left: 8px;
 margin-top:10px;

`;

export default function Speakers() {
  const classes = useStyles();

  return (
    // <div><h1>Speakers</h1></div>
    <div className="Cards">
      <div className="card" id="card-1">
        <Card className={classes.root} id="random">
          <CardActionArea>
            

            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: "2rem", fontWeight: "bold" , }}>
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem", align: 'centre' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{}}>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>

          </CardActions>
        </Card>
      </div>
      <div className="card" id="card-2">
        <Card className={classes.root} id="random">
          <CardActionArea>
            
            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="Name" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="card" id="card-3">
        <Card className={classes.root} id="random">
          <CardActionArea>
           

            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="Name" style={{ fontSize: "2rem", fontWeight: "bold" }} >
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="card" id="card-4">
        <Card className={classes.root} id="random" >
          <CardActionArea>
            
            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="Name" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="card" id="card-5">
        <Card className={classes.root} id="random">
          <CardActionArea>
            
            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="Name" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="card" id="card-6">
        <Card className={classes.root} id="random">
          <CardActionArea>
            

            <ImageSpeakerPlaceholder src={SpeakersImage}>

            </ImageSpeakerPlaceholder>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="Name" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'whitesmoke', fontSize: "1.2rem" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="white" style={{ color: 'white', margin: '0px auto' }} onClick={() => window.open("https://www.google.co.in/?gfe_rd=cr&ei=ZZ_fU_OYMM-FvASr5IGIBg&gws_rd=ssl", "_blank")}>
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
}
