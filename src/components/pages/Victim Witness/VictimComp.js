import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class VictimComp extends Component {
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
                                   Victim Compensation Program
                                </div>
                                <h6>Restitution Information</h6>
                                <p className="mt-4"></p>
                                <ul>
                                    <li>Medical and dental expenses for crime-related injuries</li>
                                    <li>Funeral/burial expense</li>
                                    <li>Relocation expenses</li>
                                    <li>Mental Health and counseling expenses</li>
                                    <li>Lost, damaged, or stolen property</li>
                                    <li>Financial losses resulting from theft, forgery, embezzlement, etc.</li>
                                    <li>Income loss</li>
                                </ul>
                                <p className="mt-4">The District Attorney’s Office and Probation Department assist victims to obtain restitution from convicted defendants in every appropriate case.  It is recommended that you keep copies of bills, receipts and estimates of expenses related to the crime to help calculate the amount of your restitution.  Prosecutors can seek a restitution order from the judge handling the criminal case at the time of sentencing.  If the defendant’s sentence includes probation, the Deputy Probation Officer may contact you for your restitution input in order to determine restitution and collect as a condition of probation.</p>
                                <p className="mt-4">The District Attorney Victim-Witness Assistance staff is available to assist victims in making an application to the Victim Compensation & Government Claims Board (The VCGCB).  The VCGCB administers a program that will assist eligible victim with losses that may be reimbursable by the program.  Those losses do NOT include financial and property losses, but may include assistance with crime-related medical, dental, mental health, relocation and funeral/burial expenses, among other losses.</p>
                                <p className="mt-4">For more information about victim restitution contact the District Attorney’s Office Victim-Witness Assistance Program or, click here: <a href="https://victims.ca.gov/docs/brochures/RestVictims.pdf?12-28-16">Financial Recovery: A Victim's Guide to Restitution</a></p>
                                <p className="mt-4">For more information about the Victim Compensation &amp; Government Claims Board services, click here: <a href="http://www.vcgcb.ca.gov/victims/">http://www.vcgcb.ca.gov/victims/</a></p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max mb-4">
                                   Contact Information
                                </div>
                            <p><a href="/contact"target="_blank"><strong>Santa Barbara</strong></a><br/>
                                1112 Santa Barbara Street<br/>
                                Santa Barbara, CA 93101<br/>
                                Tel: (805)568-2300</p>
                            
                                <p>&nbsp;</p>
                            <p><a href="/contact" target="_blank"><strong>Santa
                                    Maria</strong></a><br/>
                                312-D East Cook Street<br/>
                                Santa Maria, CA 93454<br/>
                                Tel: (805)346-7540</p>
                            <p>&nbsp;</p>
                            <p><a href="/contact"target="_blank"><strong>Lompoc</strong></a><br/>
                                115 E. Civic Center Plaza<br/>
                                Lompoc, CA 93436<br/>
                            Tel: (805)737-7760</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default VictimComp;