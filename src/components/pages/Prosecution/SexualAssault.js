import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class SexualAssault extends Component {
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
                                   Sexual Assault and Vulnerable Victims Unit
                                </div>
                                
                                <p className="mt-4">Cases of sexual assault vertically prosecuted by specially trained attorneys assigned to the Sexual Assault units benefit from vertical prosecution meaning one lawyer handles the case from filing through sentencing.  In this way we can assure each of these cases receives the attention necessary to see justice done and that the victims of sexual assault experience continuity through out the criminal justice process. Law enforcement, medical personnel and victim advocate groups form the SART (Sexual Assault Response Team). The mission of the SART project is to begin the healing process for all child, adolescent and adult survivors of sexual assault and abuse at the first contact with the legal system by responding with a coordinated team effort involving law enforcement and supportive social service agencies.</p>
                                <p className="mt-4">Victims of sexual assault are guaranteed anonymity throughout the court process and a victim's address is prevented by state law from disclosure. (California Penal Code sections 293 and 293.5.) The Sexual Assault attorneys also obtain search warrants for defendants' blood to test for HIV in appropriate cases. (California Penal Code section 1524.2.) The local health department will inform the victim of the result in a medically confidential manner and provide professional counseling. (California Penal Code section 1524.1(f)(g)(h).)</p>
                                <p className="mt-4">After conviction, all felony sex offenders are required to give DNA samples for inclusion in the State of California's database. (Penal Code section 295 et seq.)</p>
                          
                                <h6 className="mt-4 font-bold">If you are a victim of Sexual Assault:</h6>
                                <p className="mt-2">Get help quickly. Call the police, sheriff, a rape crisis center, doctor, friend or relative. Do not wash, douche, change clothes or clean up in any way until after talking to the police and going to the hospital. (You could destroy valuable evidence.) Advocates are available to help survivors navigate the criminal justice system and connect them with counseling services.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
        
            <p>&nbsp;</p>
          <p><span class="bldTxt"><a href="/contact"><strong>Santa Barbara</strong></a></span><br /></p>
          <p>            District Attorney Office <br />
            1112 Santa Barbara Street<br />
            Santa Barbara, CA 93101<br />
            Telephone: (805) 568-2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br /></p>
          <p>
            District Attorney Office <br />
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

export default SexualAssault;