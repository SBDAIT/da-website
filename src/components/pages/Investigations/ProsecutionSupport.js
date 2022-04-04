import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class ProsecutionSupport extends Component {
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
                                   Bureau of Investigations
                                </div>
                            
                            <p className="mt-4">The mission of the Bureau of Investigation is to provide quality and timely investigation and support for the prosecutorial functions of the Office of the District Attorney. Generally, the Bureau conducts follow-up investigations on cases submitted to the District Attorney by local law enforcement agencies and other county departments, such as serious felony cases, homicides, sexual assaults, robberies, gang cases, narcotics, insurance fraud, career criminal prosecutions, arson, child abduction investigations, and other major cases. District Attorney Investigators also assist other law enforcement agencies, upon request, where assistance, manpower, or additional expertise may be desired.</p>
                            <p className="mt-4">However, the Bureau also assumes original jurisdiction and is the primary investigative agency in a wide variety of cases including (but not limited to): abuse of judicial process (perjury, witness intimidation, falsification of evidence, conspiracy to obstruct justice), welfare fraud, non-sufficient checks, parental child abductions, Brown Act violations, Election Code violations, crimes committed by public officials, Fair Political Practices Act violations, Corporation Code violations, environmental health violations, high-tech crime, and so on.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Info
                                </div>
          <p>&nbsp;</p>
          <p><a href="mailto:kperkins@co.santa-barbara.ca.us">Kristina Perkins</a></p>
          <p>Commander</p>
          <p>805-737-7871</p>
          <p>&nbsp;</p>
          <p><a href="mailto:rlowry@co.santa-barbara.ca.us">Robert Lowry</a></p>
          <p>Supervising Investigator</p>
          <p>805-568-2357</p>
          <p>&nbsp;</p>
          <p><a href="mailto:eolsen@co.santa-barbara.ca.us">Ed Olsen</a></p>
          <p>Supervising Investigator:</p>
          <p>805-346-7534</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default ProsecutionSupport;