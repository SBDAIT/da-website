import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class GangUnit extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper font-display text-base">
                            <div className="main-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Gang Unit
                                </div>
                            <p className="mt-4">Gangs continue to be a major crime problem. In response, like so many other offices, the District Attorney created specialized prosecution units staffed by a specially trained deputy district attorney.</p>
                            <p className="mt-4">What is a criminal gang? A criminal street gang is defined as any ongoing organization, association, or group of three or more persons, whether formal or informal, having as one of its primary activites the commission of certain criminal actions, and who have a common name or common identifying sign or symbol, and whose members individually or collectively engage in or have engaged in, a pattern of criminal gang activity.</p>
                            <p className="mt-4">Working closely with gang units and local law enforcement agencies, the unit's attorneys vertically prosecute all adult and juvenile gang offenses.</p>
                            
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
          <p>&nbsp;</p>
          <p><span class="bldTxt"><a href="/contact"><strong>Santa Barbara</strong></a></span><br />
          </p>
          <p>
            1112 Santa Barbara Street<br />
            Santa Barbara, CA 93101<br />
            Telephone: 805.568-2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br />
          </p>
          <p>
            312-D East Cook Street<br />
            Santa Maria, CA 93454<br />
            Telephone: 805.346-7540 </p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default GangUnit;