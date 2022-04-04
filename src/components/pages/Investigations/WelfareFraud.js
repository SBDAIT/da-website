import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class WelfareFraud extends Component {
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
                                   Welfare Fraud
                                </div>
                                <p className="mt-4">The Welfare Fraud Unit's mission is to maintain the integrity of the welfare system.</p>
                                <p className="mt-4">The Welfare Fraud Division of the Santa Barbara County District Attorney's Office has a team of two sworn investigators and three investigative assistants located in Santa Barbara, Lompoc, and Santa Maria, under the supervision of a Senior Criminal Investigator. The Unit investigates cases of known or suspected violations of the law related to the fraudulent receipt of welfare funds. Investigators trace, locate, and contact suspects, witnesses, employers, other law enforcement agencies and other public and private entities to secure and verify information related to welfare fraud. Suspects and witnesses are interviewed and their testimony is analyzed to determine allegations of fraud or forgeries related to welfare benefits.</p>
                                <p className="mt-4">Welfare fraud most commonly consists of welfare recipients failing to report income, failing to report that an absent parent is no longer absent, or failing to report that aided children no longer live in the aided household. Through this fraud, welfare recipients receive cash aid and/or food stamps for which they are ineligible. Whether enforcement action is criminal or civil, the primary goals of litigation are restitution to the taxpayers for the fraudulently obtained services and deterrence.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                
                                    <p><a href="/contact"><strong>Santa Barbara</strong></a><br />
                                    Welfare Fraud Unit<br />
                                    1112 Santa Barbara St<br />
                                    Santa Barbara, CA 93101<br />
                                    Tel: 805-568-2322</p>
                                <p>&nbsp;</p>
                                <p><a href="/contact"><strong>Santa Maria</strong></a><br />
                                    Welfare Fraud Unit<br />
                                    2125 So. Centerpointe Parkway <br />
                                    Santa Maria, CA 93454<br />
                                    Tel: 805-346-7209</p>
                                <p><br />
                                        <a href="/contact"><strong>Lompoc</strong></a><br />
                                    Welfare Fraud Unit<br />
                                    115 E. Civic Center Plaza<br />
                                    Lompoc, CA 93436<br />
                                Tel: 805-737-7837</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default WelfareFraud;