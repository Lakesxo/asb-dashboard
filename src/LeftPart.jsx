import React, { Component } from 'react';
class LeftPart extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="divSummary">
                    <div className="divHead">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747474/divisionSum_nbdemr.png" alt="icon" draggable="false"/>
                        <p className="dHead">Division Summary</p>
                    </div>
                    <div className="phone">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747476/svgphone_moikfz.svg" draggable="false" className="oc" alt="icon phone"/>
                        <p className="sumDeets">0801 234 5678</p>
                    </div>
                    <div className="mail">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747474/envelope_ap8jxm.svg" draggable="false" className="oc" alt="icon mail"/>
                        <p className="sumDeets">asbfefr@gmail.com</p>
                    </div>
                    <div className="location">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747476/location_kfqvg4.svg" draggable="false" className="oc" alt="icon location"/>
                        <p className="sumDeets">Mojidi, Lagos</p>
                    </div>
                    <div className="journal">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747475/journal_ykyst8.svg" draggable="false" className="oc" alt="icon journal"/>
                        <p className="sumDeets blue">2 Journal entries</p>
                    </div>
                    <div className="print">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747474/fingerprint_vrdygu.svg" draggable="false" className="oc" alt="icon print"/>
                        <p className="sumDeets">24 fingerprints enrolled</p>
                    </div>
                </div>
                <div className="moduleHistory">
                    <div className="divHead">
                        <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747478/module_noo2l3.png" alt="icon" draggable="false"/>
                        <p className="dHead">Module History</p>
                    </div>
                    <ul className="modu">
                        <li className="first">
                            <p className="modHead">Searched "Journal Entries" on Division module</p>
                            <p className="modDeets">
                                22:10 15/09/2020 <span className="dot"><i className="fas fa-circle"></i></span> Web
                            </p>
                        </li>
                        <li className="second">
                        <p className="modHead">Searched "Fingerprint record" on Division module</p>
                        <p className="modDeets">
                            22:10 15/09/2020 <span className="dot"><i className="fas fa-circle"></i></span> Web
                        </p>
                        </li>
                        <li className="third">
                            <p className="modHead">Searched "Journal Entries" on Division module</p>
                            <p className="modDeets">
                                22:10 15/09/2020 <span className="dot"><i className="fas fa-circle"></i></span> Web
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default LeftPart;