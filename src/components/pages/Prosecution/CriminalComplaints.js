import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class CriminalComplaints extends Component {
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
                                   Criminal Complaints
                                </div>
                                <p className="mt-4">Generally, criminal complaint requests arrive at our offices from law enforcement agencies. The Complaint Review Unit is responsible for reviewing the reports for criminal conduct and for determining whether or not the evidence warrants filing of a felony, misdemeanor or infraction. If the complaint review deputy believes that sufficient evidence exists, a complaint is filed; if not, prosecution is declined or additional information and investigation is requested from the law enforcement agency.</p>
                                <p className="mt-4">Within the criminal division there are areas of specialty to which attorneys are assigned. These include among others, domestic violence, sexual assault, elder abuse, gangs and three strikes prosecutions. Often the filing review decision will be done by the attorneys assigned to these specialty units.</p>
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
            Tel: (805) 568-2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br /></p>
          <p>
            312-D East Cook Street<br />
            Santa Maria, CA 93454<br />
            Tel: (805) 346-7540</p>
          <p><br />
                <a href="/contact"><strong>Lompoc</strong></a><br /></p>
          <p>
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

export default CriminalComplaints;