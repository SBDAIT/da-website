import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class DomesticViolence extends Component {
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
                                   Domestic Violence Unit
                                </div>
                                <p className="mt-4">The Domestic Violence Unit is a vertical prosecution program whose purpose is to enhance prosecution of spousal and domestic violence cases and minimize the emotional trauma to victims during the legal proceedings. The vertical handling ensures continuity as the case progresses through the system. The unit's staff is trained on the dynamics of domestic violence and function as a team as they follow each case from the filing review stage through its completion.</p>
                                <p className="mt-4">The Domestic Violence Unit is a multidisciplinary team of attorneys, advocates, investigators and support staff who prosecute only domestic violence cases. Domestic violence crimes are unique. The defendant and victim know each other and often have children together. Victims are often reluctant to follow through because of fear, both physical and economic, a misplaced sense of loyalty to the perpetrator, guilt, concern for the children or other reasons. The abuse unless broken becomes cyclic.</p>
                                <p className="mt-4">For these reasons, the Domestic Violence Unit is comprised, not only of prosecutors, but also advocates and support staff. They provide assistance to victims by giving them information about counseling, medical treatment and court assistance. The advocate is someone who keeps them informed of the court proceedings, results and other pertinent information. They assist the victim through the court process, accompany them to court, refer them to needed community resources and assist them in getting reimbursement for their injuries or counseling for the victim and their children.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                            <p>&nbsp;</p>
                            <p><a href="/contact"><strong>Santa Barbara</strong></a><br /> </p>
                            <p>            1112 Santa Barbara Street<br />
                                Santa Barbara, CA 93101<br />
                                Telephone: (805) 568-2300</p>
                            <p>&nbsp;</p>
                            <p><a href="/contact"><strong>Santa Maria</strong></a><br /></p>
                            <p>
                                312-D East Cook Street<br />
                                Santa Maria, CA 93454<br />
                                Telephone: (805) 346-7540</p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default DomesticViolence;