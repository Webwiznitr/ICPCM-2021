import React from 'react';

import './Timeline.css';
import TimelineData from './TimelineData';

const Card = (props) =>{

    return(
    <div className="tcard">
        <div className="timeline-date-text" >
            <div className="tdate" > {props.tdate} </div>
            <div className="ttext"> {props.tevent}</div>
        </div>
    </div>
    );
};

const Timeline = () => {

    
    return(
        <>
        <section className="timeline">
            <div>
            <h1 className="heading" >Important Dates </h1>
            </div>

            <div className="schedule"> 

                <div className="tcards" >
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

