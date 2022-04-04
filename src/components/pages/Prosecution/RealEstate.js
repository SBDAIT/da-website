import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class RealEstate extends Component {
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
                                   Real Estate Fraud
                                </div>
                                <p className="mt-4">Unfortunately, our community has seen an increase in fraud associated with the real estate market.  Consequently, the District Attorney’s Office has an investigator and prosecutor assigned specifically to Real Estate Fraud.  This team focuses on cases involving real property investments (including deeds of trust and real property securities), foreclosures scams, loan modification scams, and fraud in connection with real property transactions.  They coordinate with other county, state, and federal agencies as real estate cases tend to span multiple jurisdictions.</p>
                                <p className="mt-4">If you have a case involving real estate fraud, please download the Real Estate Fraud Complaint Form.  Complete the form, attach any supporting documentation, and forward it to the address provided for review.    </p>
                                
                                <p className="font-bold mt-4">Complaint Forms</p>
                                <a href="https://countyofsb.org/da/msm_county/documents/refraudenglish.pdf">English/</a>
                                <a href="https://countyofsb.org/da/msm_county/documents/refraudspanish.pdf">Spanish</a>
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
          <p>            1112 Santa Barbara Street <br />
            Santa Barbara, CA 93101 <br />
            Telephone: 805.568.2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a></p>
          <p>312-D
              East Cook Street<br />
            Santa Maria, CA 93454<br />
            Telephone: (805) 346-7540 </p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default RealEstate;