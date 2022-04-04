import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class VWUnit extends Component {
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
                                    border-b-2 border-mustard w-max mb-4">
                                   Victim Witness Unit
                                </div>
                                <h6>Victim-Witness Assistance Program</h6>
                                <p className="mt-4">A violent crime can impact many aspects of a person's life. Not only does crime affect the victim but also their loved ones and sometimes, an entire community. A crime can have long lasting physical, emotional and financial effects.</p>
                                <p className="mt-4">Often the needs of crime victims can appear to be overshadowed by the focus on the investigation and prosecution of the accused. The Santa Barbara County District Attorney's Office Victim-Witness Assistance Program seeks to make the criminal justice system more understandable, accessible and responsive to the concerns of victims and witnesses.</p>
                                <p className="mt-4">Our Victim Advocates are available to ensure that crime victims and their family members are kept informed and supported throughout the criminal justice process.</p>
                                <p className="mt-4">We have specially trained advocates to assist victims of elder/dependent adult abuse and domestic violence.</p>
                                <p className="mt-4"><i>Legal Residency is not required in order to receive Victim-Witness Assistance Services.</i></p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max mb-4">
                                   Resources For You
                                </div>
          <p>&nbsp;</p>
          
            <p><span class="bldTxt"><a href="/contact"><strong>Santa Barbara</strong></a></span><br />
              1112 Santa Barbara St<br />
              Santa Barbara, CA 93101<br />
              Tel: (805) 568-2400</p>
            <p>or </p>
            <p>Toll Free: 855-840-3232</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br />
            312-D East Cook Street<br />
            Santa Maria, CA 93454<br />
            Tel: (805) 346-7529</p>
          <p>or </p>
          <p>Toll Free: 855-840-3233</p>
          <p><br />
                  <a href="/contact"><strong>Lompoc</strong></a><br />
            115 Civic Center Plaza<br />
            Lompoc, CA 93436<br />
          Tel: (805) 737-7910</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default VWUnit;