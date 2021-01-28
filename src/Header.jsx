import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="head">
                    <div className="leftHead">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611747476/logo_pwituk.svg" alt="logo"/>
                            <p className="logoTxt">FE Engineer Test 1</p>
                        </div>
                        <ul className="navs">
                            <li className="home"><span className="home"><i className="fas fa-home"></i></span> Home</li>
                            <li className="entry"><span className="entry"><i className="fas fa-archive"></i></span> Entries</li>
                            <li className="divi"><span className="divi"><img className="divii" src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1611773333/Opportunitiy_f1pjp7.svg" alt="icon" draggable="false"/></span> Divisions</li>
                        </ul>
                    </div>
                    <div className="rightHead">
                        <input type="search" className="fontAwesome" name="search" id="search" placeholder="&#xF002;"/>
                        <div className="bell"><i className="fas fa-bell"></i></div>
                        <div className="user"><i className="fas fa-user"></i></div>
                        <div className="caret"><i className ="fas fa-angle-down"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;
