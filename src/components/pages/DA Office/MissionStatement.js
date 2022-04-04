import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import './DAOffice.css';

class MissionStatement extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex font-display text-base " style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Our Mission
                                </div>
                            <p className="mt-4">To pursue truth and justice by employing the highest ethical standards in vigorously prosecuting the guilty, protecting the innocent, and preventing crime.</p>​
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default MissionStatement;