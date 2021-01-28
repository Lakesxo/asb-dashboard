import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
class Main extends Component {
    state = {  }
    render() { 
        return (
            <div className="main">
                <div className="left">
                    <LeftPart />
                </div>
                <div className="right">
                    <RightPart />
                </div>
            </div>
        );
    }
}
 
export default Main;