// import { width } from '@material-ui/system';
import React from 'react';
import Colors from '../assets/colors';
import styled from 'styled-components'
import TimelineData from './TimelineData';

// const Card = (props) =>{

//     return(
//     <div className="tcard" style={{color:Colors.light, backgroundColor:Colors.secondary}}>
//         <div className="timeline-date-text" >
//             <div className="tdate" > {props.tdate} </div>
//             <div className="ttext" style={{color:Colors.light}}> {props.tevent}</div>
//         </div>
//     </div>
//     );
// };

// const Timeline = () => {

    
//     return(
//         <>
//         <section style={{backgroundColor:Colors.classic, width:"100%"}} className="timeline" id="timeLine">
//             <div>
//             <h1 className="theading" style={{color:Colors.primary}} >Important Dates </h1>
//             </div>

//             <div className="schedule"> 

//                 <div className="tcards" style={{color:Colors.primary}} >
//                    {
//                        TimelineData.map(function ncards(val){
//                            return(
//                                <Card
//                                     tdate={val.tdate}
//                                     tevent={val.tevent}
//                                 />

//                            );
//                        })
//                    }
//                 </div>

//             </div>
   
//         </section>
//         </>
//     );
// };

const ImpDates = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 350px; 
    background-color: #FFECDA;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;

    @media screen and (max-width: 900px) {
        width: 70vw;
    }
    `; 

const Timeline = ()=> {
   return (<ImpDates >
       <h1 className = "Important_dates" style = {
                          {
                              textAlign: 'center',
                              marginBottom: '2px'
                          }
                      }>Important Dates</h1>
     
          {TimelineData.map(element=> {
              return (
                  <div className="single_date_card"
                  style = { 
                      {
                          marginLeft: '1vw'
                      }
                  }>
                      
                <div className="timeline_heading"  style = {
                    {
                        fontSize: "1.1rem",
                        fontWeight: "bold"
                    }
                }>
                    {element.tevent}
                     </div>
                     <div className = "timeline_date"> {element.tdate} </div>
                     </div>
              )
          })}
     
   </ImpDates>)
}

export default Timeline;

