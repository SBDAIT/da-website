import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';
import { ChevronRight } from 'react-bootstrap-icons';

import '../../../App.css';

class ConsumerProtection extends Component {
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
                                   Consumer Protection
                                </div>
                                <p className="mt-4">The District Attorney's Consumer Protection Unit serves the public's interest in maintaining an even playing field for competing businesses and between businesses and consumers.</p>
                                <p className="mt-4">The unit investigates and prosecutes, both civilly and criminally, unlawful, unfair, fraudulent business practices. Examples of such cases include, sweepstakes or telemarketing schemes aimed at the elderly and other scams which target elderly citizens; reference pricing cases involving phony sales; phony going-out-business sales; and many other types of cases involving unfair business practices.</p>
                                <p className="mt-4">Many complaints received by the Consumer Unit involve problems that are more appropriately handled by a state or federal agency that has specific jurisdiction relating to the particular problem experienced by the consumer. In these cases, the investigative staff of the Unit will refer consumer complaints to the appropriate state, local, or federal agency.</p>

                                <p className="mt-4">Services provided by this unit include:</p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Investigation of complaints from individuals and businesses
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Prosecution of civil and criminal consumer fraud violations
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Mediation of consumer complaints by volunteer staff
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Referral to agencies with appropriate jurisdiction to assist complainants
                                </p>

                                <p className="mt-4">If you wish to file a consumer fraud complaint against a company or an individual, please follow these instructions::</p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Download and complete the form below
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Print the form
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Sign and Date the form
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Mail the form to the address on the last page of the form
                                </p>
                                <p className="mt-4"><strong>Download:</strong></p>
                                <p className="mt-4"><a className="text-mustard" href="http://countyofsb.org/da/msm_county/documents/ConsumerComplaintForm_Fillable.pdf">Consumer Complaint Form: English</a></p>
                                <p className="mt-4"><a className="text-mustard" href="http://countyofsb.org/da/msm_county/documents/CCFormSPANISHFillable.pdf">Consumer Complaint Form: Español/Spanish</a></p>
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
            Senior Deputy District Attorney <br />
            1112 Santa Barbara Street<br />
            Santa Barbara, CA 93101<br />
            Tel: (805) 568-2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br /></p>
          <p>Senior Deputy District Attorney <br />
            312-D East Cook Street<br />
            Santa Maria, CA 93454<br />
            Tel: (805) 346-7540</p>
          <p><br />
                <a href="/contact"><strong>Lompoc</strong></a><br /></p>
          <p>Supervising Deputy District Attorney <br />
            115 E. Civic Center Plaza<br />
            Lompoc, CA 93436<br />
            Tel: (805) 737-7760</p>
                            </div>
                            
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default ConsumerProtection;