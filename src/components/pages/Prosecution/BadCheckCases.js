import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar-old';

import '../../../App.css';

class BadCheckCases extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex font-display text-base" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                        <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Bad Check Cases
                                </div>
                            <p className="mt-4">The District Attorney’s office previously participated in a Bad Check Program whereby a private vendor processed, handled, and investigated bad check referrals made to the office until an ethics opinion criticized the use of private firms engaged by District Attorney offices for this type of activity.  As of December 2014, this program is no longer available.</p>
                            <p className="mt-4">The District Attorney’s office is committed to delivering justice, and to that end provides the following information to merchants about the law and remedies surrounding passing of bad checks.</p>
                            <p className="mt-4">The vast majority of bad check complaints can be filed in small claims court.  Small claims courts have jurisdiction over monetary disputes so long as the losses alleged are less than $5,000.  The statute of limitations for these types of claims is typically three years.  In small claims courts, filing fees are minimal, and if the complaining party prevails, judges are required to order the defendant to pay for the victim’s court costs.</p>
                            <p className="mt-4">Victims can also be made whole by referring a case to law enforcement.  Knowingly passing a bad check is fraud, and the District Attorney’s office will continue to criminally prosecute those who knowingly pass bad checks.</p>
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default BadCheckCases;