// import { width } from '@material-ui/system';
import React from 'react';
import Colors from '../assets/colors';
import './Timeline.css';
import TimelineData from './TimelineData';

const Card = (props) =>{

    return(
    <div className="tcard" style={{color:Colors.light, backgroundColor:Colors.secondary}}>
        <div className="timeline-date-text" >
            <div className="tdate" > {props.tdate} </div>
            <div className="ttext" style={{color:Colors.light}}> {props.tevent}</div>
        </div>
    </div>
    );
};

const Timeline = () => {

    
    return(
        <>
        <section style={{backgroundColor:Colors.classic, width:"100%"}} className="timeline" id="timeLine">
            <div>
            <h1 className="theading" style={{color:Colors.primary}} >Important Dates </h1>
            </div>

            <div className="schedule"> 

                <div className="tcards" style={{color:Colors.primary}} >
                   {
                       TimelineData.map(function ncards(val){
                           return(
                               <Card
                                    tdate={val.tdate}
                                    tevent={val.tevent}
                                />

                           );
                       })
                   }
                </div>

            </div>
   
        </section>
        </>
    );
};

export default Timeline;

