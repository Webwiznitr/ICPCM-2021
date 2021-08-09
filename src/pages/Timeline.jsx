import React from 'react';

import './Timeline.css';

const Timeline = () => {
    return(
        <>
        <section className="timeline">
            <div>
            <h1 className="heading" >Important Dates </h1>
            </div>

            <div className="schedule"> 

                <div className="cards" >
                    <div className="card">
                        <div className="timeline-date" >
                        <p className="date" > 10th October 2021 <span>Abstract submission deadline</span></p> 
                            {/* <div className="box"></div> */}
                        </div>

                        {/* <div className="timeline-text">
                        <span className="text"> </span>
                        </div> */}
                    </div>
                    <div className="card">
                        <div className="timeline-date">
                        <p className="date" > 30th October 2021 <span>Notification of acceptance/rejection</span> </p>
                        </div>

                        {/* <div className="timeline-text">
                        <p className="text"> Notification of acceptance/rejection</p>
                        </div> */}
                    </div>

                    <div className="card">
                        <div className="timeline-date">
                        <p className="date" > 15th November 2021 <span>Final paper submission deadline</span> </p>
                        </div>

                        {/* <div className="timeline-text">
                        <p className="text"> Final paper submission deadline</p>
                        </div> */}
                    </div>

                    <div className="card">
                        <div className="timeline-date">
                        <p className="date" > 30th October 2021 <span>Abstract submission deadline</span> </p>
                        </div>

                        {/* <div className="timeline-text">
                        <p className="text"> Abstract submission deadline</p>
                        </div> */}
                    </div>
                </div>

            </div>
   
        </section>
        </>
    );
};

export default Timeline;

