import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class CrimeVictimAssistance extends Component {
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
                                    Local Crime Victim Services
                                </div>
                                <p>Our Victim Advocates are available to assist you and your loved ones understand the criminal justice process and obtain the services and resources necessary to minimize the impact the crime has on your day to day life.</p>
                                <p><strong>Orientation to the Criminal Justice System:</strong> Information regarding the location, procedures and functioning of the local criminal justice system.</p>
                                <p> <br />
                                        <strong>Criminal Case Status Information:</strong> Upon request victims can receive timely information regarding case developments.<br />
                                        <br />
                                        <strong>Court Support and Escort:</strong> Upon request, staff is available to accompany victims to criminal court proceedings.<br />
                                        <br />
                                        <strong>Restitution Assistance:</strong> If you have suffered losses as a result of the crime the Victim Witness staff can help you obtain restitution by ascertaining your losses and acting as a liaison with the Deputy District Attorney handling your case, the court and the Probation department.</p>
                                <p><em>For more information regarding restitution and the laws that govern restitution to crime victims go to: </em><a href="http://www.vcgcb.ca.gov/restitution/default.aspx">Government Restitution</a><strong> </strong><em>or if you are owed restitution from an inmate in a state prison <br />
                                    go to: </em><a href="http://www.cdcr.ca.gov/Victim_Services/restitution.html">Victim Services</a></p>
                                <p><strong>Property Return:</strong> Upon request, staff can assist the victim obtain the return of their property held as evidence by the law enforcement agency who conducted the investigation.<br />
                                        <br />
                                        <strong>Crisis Intervention Counseling: </strong>In person or telephone contact to assist a person with an emotional crisis as a result of a crime. We also offer a Mental Health Clinician Directory for Victims and their loved ones seeking ongoing counseling services.<br />
                                        <br />
                                        <strong>Referral to Community Resources and Services:</strong> Our staff can help assess a victim&rsquo;s needs and refer to the appropriate individuals and/or agencies for necessary goods and services which otherwise are not provided by our program.<br />
                                        <br />
                                        <strong>Crime Prevention Information and Witness Protection:</strong> If you have any fears of retaliation because of your involvement in the case, contact local law enforcement. Contact the Victim-Witness Assistance program for crime prevention and restraining order information.<br />
                                        <br />
                                        <strong>Temporary Restraining Order Assistance: </strong>Civil Restraining Order Assistance is available through the Legal Aid Foundation and/or the Legal Resource Centers. <br />
                                        <br />
                                        <strong>Creditor Intervention:</strong> Upon request, we can intervene on a victim&rsquo;s behalf to inform creditors of their temporary inability to meet current financial obligations due to the aftermath of the crime.<br />
                                        <br />
                                        <strong>Employer and Housing Intervention:</strong> Upon request, our Victim Witness Staff can intervene to inform the employer or landlord that a crime was committed and to assist the victim minimize any loss of housing, pay or benefits. <br />
                                        <br />
                                        <strong>Transportation Assistance: </strong>Assist with arranging transportation for victims and witnesses who are in need of services or called to testify in court.<br />
                                        <br />
                                        <strong>Emergency Assistance:</strong> If you have immediate financial concerns, we may be able to provide limited financial assistance and/or arrange referrals to emergency services that offer temporary shelter, food and clothing.<br />
                                        <br />
                                        <strong>Compensation for Crime Related Expenses:</strong> We can help victims and their loved ones apply for compensation for crime related expenses.</p>
                                <p>&nbsp;</p>
                                <p><a href="https://countyofsb.org/da/msm_county/documents/EngSpanBrochure.pdf">Downloadable Brochure in English and Spanish</a> </p>
                                <h4>&nbsp;</h4>
                                <p>&nbsp;</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max mb-3">
                                   Contact Information
                                </div>
                                <p><a href="/contact"target="_blank">Santa Barbara</a></p>
                                <p><a href="mailto:mriker@co.santa-barbara.ca.us">Megan Riker-Rheinschild</a><br/>
                                    Director<br/>
                                    (805) 568-2408 </p>
                                <p>&nbsp;</p>
                                <p><a href="https://countyofsb.org/da/msm_county/documents/EngSpanBrochure.pdf">Downloadable Brochure in English and Spanish</a></p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default CrimeVictimAssistance;