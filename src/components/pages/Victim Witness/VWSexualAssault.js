import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class VWSexualAssault extends Component {
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
                                    border-b-2 border-mustard w-max mb-4">
                                   Sexual Assault Response Team (SART)
                                </div>
                                <p>The Sexual Assault Response Team began in Santa Barbara County in 1986 as an initiative between the Public Health Department, District Attorney, County Executive Office, law enforcement, County Counsel, CALM of Santa Barbara, Santa Barbara Cottage Hospital, the Junior League, and the Department of Social Services. The goal was to use a multidisciplinary approach to assure that sexual abuse survivors receive care in the most positive therapeutic environment possible through a medical-legal examination, medical treatment, emotional support, advocacy, counseling referrals, and other support services for the victim and his/her family.</p>
                                <p>Over the years, the collaboration has grown to 21 SART partners. Together, these partners have created a variety of inter-agency strategies to coordinate a comprehensive response to sexual abuse including a Policy Council, case review meetings, case tracking, advisory committee, and SART protocol.<br />
                                        <br />
                                    SART has grown from one location donated by Cottage Hospital in Santa Barbara to two additional sites donated by Marian Medical Center and the Lompoc District Hospital to accommodate the vast geographical distribution of the County. Each of these safe locations has been established to accommodate medical examinations, forensic interviews, and related services.<br />
                                    <br />
                                    In 2008 the District Attorney&rsquo;s Office Victim-Witness Assistance Program assumed administrative responsibility of the SART Program making significant improvements including an expansion of medical examinations and forensic interviews, development of a funding strategy to assure sustainable infrastructure, services, and centralized service coordination and oversight.<br />
                                </p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max mb-4">
                                   Contact Information
                                </div>
                            <p>Megan Rheinschild:</p>
                            <p>(805) 568-2408 or <a href="mailto:mriker@co.santa-barbara.ca.us">mriker@co.santa-barbara.ca.us</a><br />
                                    <br />
                                If you or someone you care about has been a victim of child sexual
                                abuse, helpful information is available in our brochure: <a href="https://countyofsb.org/da/msm_county/documents/AssistChild_Brochure.pdf">&ldquo;Assisting
                                Your Child&quot;</a></p>
                            <p>&nbsp;</p>
                            <p> Information to help you and your child begin
                                the healing process.</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default VWSexualAssault;