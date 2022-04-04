import React, { Component, Fragment } from 'react';
import Navbar from '../UI/Navbar';

import './Contact.css';

class Contact extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex font-display text-base">
                        <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Office Locations &amp; Numbers
                                </div>
                            <div className="mt-4">
                                <div className="">
                                    <h6 className="font-semibold"><u>Santa Barbara</u></h6>
                                    <p className="mt-4"><h6>Main Office</h6></p>
                                    <div className="">
                                        <p>1112 Santa Barbara Street</p>
                                        <p>Santa Barbara, CA. 93101</p>
                                        <p>(805) 568-2300</p>
                                    </div>
                                    
                                 </div>
                                <div className="mt-4">
                                     <h6 className="font-semibold"><u>Santa Maria</u></h6>
                                    <p className="mt-4"><h6>Main Office</h6></p>
                                    <div className="">
                                        <p>312-D E Cook St</p>
                                        <p>Santa Maria, CA 93454</p>
                                        <p>(805) 346-7540</p>
                                    </div>

                                    <p className="mt-4"><h6>Juvenile</h6></p>
                                    <div className="">
                                        <p>4285 California Blvd.</p>
                                        <p>Santa Maria, CA 93455</p>
                                        <p>(805) 934-6975</p>
                                    </div>

                                    <p className="mt-4"><h6>Welfare Fraud</h6></p>
                                    <div className="">
                                        <p>2125 Centerpointe Parkway</p>
                                        <p>Santa Maria, CA 93455</p>
                                        <p>(805) 346-7134</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                     <h6 className="font-semibold"><u>Lompoc</u></h6>
                                    <p className="mt-4"><h6>Main Office</h6></p>
                                    <div className="">
                                        <p>115 Civic Center Plaza</p>
                                        <p>Lompoc, CA 93436</p>
                                        <p>(805) 737-7760</p>
                                    </div>

                                    <p className="mt-4"><h6>Welfare Fraud</h6></p>
                                    <div className="">
                                        <p>115 Civic Center Plaza</p>
                                        <p>Lompoc, CA 93436</p>
                                        <p>(805) 737-7837</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Contact;