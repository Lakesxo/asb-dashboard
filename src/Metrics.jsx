import React, { Component } from 'react';
class Metrics extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="metricCont">
                    <div className="singMetric">
                        <div className="flex">
                            <p className="numb">31454</p>
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611781505/Frame_vbhayi.svg" className="info" alt="info" draggable="false"/>
                        </div>
                        <p className="metricSts">Ongoing metric</p>
                    </div>
                    <div className="singMetric">
                        <div className="flex">
                            <p className="numb">2344</p>
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611781505/Frame_vbhayi.svg" className="info" alt="info" draggable="false"/>
                        </div>
                        <p className="metricSts">Past metric</p>
                    </div>
                    <div className="singMetric">
                        <div className="flex">
                            <p className="numb">14224</p>
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611781505/Frame_vbhayi.svg" className="info" alt="info" draggable="false"/>
                        </div>
                        <p className="metricSts">Missed metric</p>
                    </div>
                    <div className="singMetric">
                        <div className="flex">
                            <p className="numb">635</p>
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611781505/Frame_vbhayi.svg" className="info" alt="info" draggable="false"/>
                        </div>
                        <p className="metricSts">Failed metric</p>
                    </div>
                    <div className="singMetric rmMarginRght">
                        <div className="flex">
                            <p className="numb">11334</p>
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611781505/Frame_vbhayi.svg" className="info" alt="info" draggable="false"/>
                        </div>
                        <p className="metricSts">Pending metric</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Metrics;