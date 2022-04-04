import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';
import { ChevronRight } from 'react-bootstrap-icons';

import '../../../App.css';

class ConsumerMediation extends Component {
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
                                   Consumer Mediation
                                </div>
                                <p className="mt-4">The District Attorney has a Consumer Mediation Unit. Mediation services are totally voluntary between the parties. We cannot compel a resolution or enforce agreements. 
                                However, we hope to assist community-members in reaching resolutions to consumer disputes with businesses.</p>

                                <p className="mt-4">Complaints handled by Consumer Mediation include:</p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Retail Sales
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Automobile Repairs
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Home Improvement
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                    Online Sales
                                </p>
                                <p className="mt-4">If you would like to submit a complaint for mediation, you may download the <a className="text-mustard" href="http://countyofsb.org/da/msm_county/documents/MediationRequest.pdf">consumer complaint form.</a></p>
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

export default ConsumerMediation;