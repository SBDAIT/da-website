import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class NarcoticUnit extends Component {
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
                                   Narcotic Unit
                                </div>
                                <p className="mt-4">The Narcotics Unit prosecutes high-level narcotics sales, possession for sale and manufacturing cases.  Members of the Narcotics Unit also handle major cannabis enforcement actions.  Prosecutors in the Narcotics Unit work closely with law enforcement from all over the county.  They review search and arrest warrants, and discuss case issues during investigation stage.  These vertical unit prosecutors often deal with complex multi-defendant cases occuring in Santa Barbara county and its shores.</p>
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
          <p> 312-D
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

export default NarcoticUnit;