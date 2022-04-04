import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class ElderAbuse extends Component {
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
                                   Elder/Dependent Adult Abuse Unit
                                </div>
                            <p className="mt-4">As our population ages, elder abuse is becoming one of the fastest growing crimes in the nation. More than two million elderly Americans are victims of neglect or mistreatment every year. Those are the cases we know about. Experts estimate that for every case of elder abuse that comes to the attention of law enforcement, many others go unreported. Seniors also lose billions of dollars each year to telemarketing and internet scammers who specifically target this population.</p>
                            <p className="mt-4">Out of concern and realizing the unique vulnerability of seniors, the District Attorney created Santa Barbara County's Elder/Dependent Adult Abuse Unit consisting of an attorney, investigator and advocate; operational in both North and South Counties. The Advocate coordinates with Adult Protective Services, the Long-Term Care Ombudsman Office and local law enforcement agencies and resources to help victims and families cope with the effects of abuse, neglect, and exploitation. The attorney and investigator identify, review, investigate and prosecute the cases. All provide services to elder and dependent adults as well as ongoing training programs for local law enforcement and gatekeepers. The purpose of the project is to ensure the safety of our community's elders and dependent adults and to heighten the community's awareness of this form of crime.</p>
                            <p className="mt-4">The Deputy District Attorneys in our Elder/Dependent Adult Abuse Unit receive special training in the laws specific to these crimes. These experienced lawyers are available to speak to your group or organization providing training in recognizing the signs of physical abuse, protecting the financial assets of clients, where to report suspected abuse, and how to gather the information necessary to help law enforcement successfully prosecute and offender. Our office also offers presentations on Scams Targeting Seniors, in an effort to educate and protect our elders from being victimized by these predators. </p>
                            <h5 className="mt-4">Elder/Dependent Adult Financial Abuse</h5>
                            <p className="mt-4">Annuites</p>
                            <p className="mt-4">Power Against Fraud: A Program designed for the detection and prevention of fraud targeting seniors.</p>
                            <p className="mt-4">Please Download:</p>
                            <p className="mt-4">Informative pamphlet</p>
                            <p className="mt-4">or</p>
                            <p className="mt-4">Click on this link to view online</p>
                            <br></br>
                            <p className="mt-4">Stand up Against Elder Abuse Pledge Form</p>
                            </div>

                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                <p><span class="bldTxt"><a href="/contact"><strong>Santa Barbara</strong></a></span></p>
                                <p>
                                    1112 Santa Barbara Street<br />
                                    Santa Barbara, CA 93101<br />
                                    Telephone: 805.568.2300</p>
                                <p>&nbsp;</p>
                                <p><a href="/contact"><strong>Santa Maria</strong></a></p>
                                <p>
                                    312-D East Cook Street<br />
                                    Santa Maria, CA 93454<br />
                                Telephone: 805.346.7540</p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default ElderAbuse;