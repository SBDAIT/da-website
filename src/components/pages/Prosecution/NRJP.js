import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import { ChevronRight } from 'react-bootstrap-icons';

import '../../../App.css';

class NRJP extends Component {
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
                                   Neighborhood Restorative Justice Program
                                </div>
                                <h6 className="mt-5"><strong>What is the NEIGHBORHOOD Restorative Justice Program?</strong></h6>
                                <p className="mt-4">The Neighborhood Restorative Justice Program (NRJP) is a community-driven, pre-filing diversion program designed to divert low-level misdemeanor offenses from entering the criminal justice system.</p>
                                <p className="mt-4">Offenders are given an opportunity to take responsibility and repair the harm they caused through a community-based process using restorative justice principles instead of a courtroom. The Neighborhood Restorative Justice Program addresses criminal violations that impact the quality of life in the community and are an alternative to entering into criminal court.</p>
                                <p className="mt-4">The purpose of the program is to reduce recidivism by understanding why offenders offend, address the harm the offense had on the victim (if applicable) and the community and, using restorative principles rather than punitive principles, effectively and efficiently restore the local community, victim, and offender back into the community.</p>
                                <p className="mt-4"><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/NRJP-Brochure-SBCo.pdf">NRJP Brochure</a></p>

                                <h6 className="mt-4"><strong>How does the NEIGHBORHOOD Restorative Justice Program Work?</strong></h6>
                                <p className="mt-4">The District Attorney’s Office diverts eligible cases into the Neighborhood Restorative Justice Program. While participation is voluntary and confidential, offenders must be willing to take responsibility for their actions that caused harm. Victims are invited to participate. A Panel of trained community volunteers meets with the offender and victim (if applicable) in a relaxed, confidential space, in what is called a Conference. During the Conference, volunteers, panelists, and offenders discuss harms caused to the victim (if applicable) and the community and the root of why the crime happened. Panelists and offenders work together to select specific, reasonable, attainable, and restorative directives to the offender, victim, and community.</p>
                                <p className="mt-4">Once the offender successfully completes the directives, the charge(s) will not be filed against the offender and there will be no record of conviction. If needed, the offender may be referred to additional services offered in the community. If a case is not resolved in the Neighborhood Restorative Justice Program, it will be re-routed to the District Attorney’s Office for the regular court process.</p>
                                <p className="mt-4"><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/Offender Rights.pdf">Offender Rights</a></p>
                                <p className=""><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/Offender Q&A.pdf">Offender Q&amp;A</a></p>

                                <h6 className="mt-4"><strong>Requirements to become a volunteer Panelist or Facilitator: </strong></h6>
                                <ul className="mt-4">
                                    <li>1. Complete the application</li>
                                    <li>2. Pass a background check (Immigrant status will not be checked)</li>
                                    <li>3. Complete volunteer Facilitator and Panelist training • Observe two Neighborhood Restorative Justice Program conferences</li>
                                    <li>4. Two-year time commitment (1 year if student)</li>
                                </ul>
                                <p className="mt-4"><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/Volunteer Q&amp;A.pdf">Volunteer Q&amp;A</a></p>
                                <p className=""><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/Facilitator Packet update 1020.pdf">NRJP Facilitator Information &amp; Application</a></p>
                                <p className=""><ChevronRight size={16} className="ml-2 mb-1 font-extrabold text-mustard inline" /><a className="underline" href="https://countyofsb.org/da/msm_county/documents/Panelist Packet 1020.pdf">NRJP Panelist Information &amp; Application</a></p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                <p>Joanne Flores</p>
                                <a href="mailto:sbdaneighborhoodrjp@countyofsb.org" className="break-all">sbdaneighborhoodrjp@countyofsb.org</a>
                                <p>(805) 403-0448</p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default NRJP;