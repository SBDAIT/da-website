import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class EnvironmentalLaw extends Component {
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
                                   Protecting the Environment
                                </div>
                                <p className="mt-4">The Environmental Protection Unit focuses on enforcing public health laws, protecting the environment, and ensuring workplace safety.  The Unit investigates and prosecutes matters involving unlawful treatment, transportation, storage, and disposal of hazardous materials and wastes; violations of pesticide laws; asbestos violations; water pollution; unlawful lake and streambed alterations; and harm to wildlife.  Prosecutions are often based on the Health and Safety Code, Penal Code, Water Code, or the Fish and Game Code.</p>
                                <p className="mt-4">Agencies that investigate alleged violations include local fire departments, police departments, the Santa Barbara County Sheriff’s Department, code compliance inspectors, the California Department of Fish and Wildlife, CHP, and Cal-OSHA.</p>
                                <p className="mt-4">Prosecutions can be civil or criminal, and they can result in monetary penalties, recovery of damages, restitution, injunctive provisions, and for criminal prosecutions, incarceration. </p>
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

export default EnvironmentalLaw;