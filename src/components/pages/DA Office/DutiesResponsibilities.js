import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';



class Duties extends Component {
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
                                   Duties and Responsibilities
                                </div>
                                <p className="mt-4">The Santa Barbara County District Attorney has six offices in three locations in the County: Santa Barbara, Santa Maria and Lompoc.</p>
                                <p className="mt-4">The District Attorney is elected by the People for a four-year term of office.</p>
                                <p className="mt-4">The staff of the District Attorney's Office is selected and promoted under Civil Service Rules. The District Attorney may appoint one Assistant District Attorney, and three Chief Deputy District Attorneys, one in North County and two in South County.</p>
                                <p className="mt-4">Investigative activities of the Office are the responsibility of the Bureau of Investigation which is comprised of sworn peace officers and investigative assistants.</p>
                                <p className="mt-4">The Office includes an active Victim/Witness Advocacy Program. This unit assists victims of violent crimes in obtaining restitution, coordinates witness appearances and handles counseling and referral information for the victims of domestic violence. The Program is also responsible for verifying claims for losses victims experienced as a result of crime, and now determines and expedites financial recovery.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p className="mt-4"><a href="/contact"><strong>Santa Barbara</strong></a><br />
                                    District Attorney Office <br />
                                    1112 Santa Barbara Street<br />
                                    Santa Barbara, CA 93101<br />
                                    Telephone: (805) 568-2300</p>
                                <p className="mt-4"><strong>Santa Maria</strong></p>
                                <p><a href="/contact">Main Office</a></p>
                                <p>312-D E Cook St</p>
                                <p>Santa Maria, CA. 93454</p>
                                <p>(805) 346-7540</p>
                                <p className="mt-4"><strong>Juvenile </strong></p>
                                <p>4285 California Blvd</p>
                                <p>Santa Maria, CA 93455</p>
                                <p>(805) 934-6975</p>
                                <p className="mt-4">Welfare Fraud</p>
                                <p>2125 Centerpointe Parkway</p>
                                <p>Santa Maria, CA 93455</p>
                                <p>(805) 346-7134</p>
                                <p className="mt-4"><strong>Lompoc</strong></p>
                                <p><a href="/contact">Main Office</a></p>
                                <p>115 Civic Center Plaza</p>
                                <p>Lompoc, CA 93436</p>
                                <p>(805) 737-7760</p>
                                <p className="mt-4">Welfare Fraud</p>
                                <p>1133 North H St Suite F</p>
                                <p>Lompoc, CA 93436</p>
                                <p>(805) 740-0301</p>
                            </div>
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default Duties;