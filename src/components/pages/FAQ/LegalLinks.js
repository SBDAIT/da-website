import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import { ChevronRight } from 'react-bootstrap-icons';

class LegalLinks extends Component {
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
                                   Legal Links
                                </div>
                            <ul className="mt-4 font-display text-base">
                                <li><p className="font-semibold mb-3">Local</p>
                                    <ul>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.sbsheriff.org">Santa Barbara County
                                        Sheriff's Department</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.sbpd.com/">Santa Barbara Police Department</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.santabarbaraca.gov/gov/depts/attorney/default.asp">Santa
                                        Barbara City Attorney's Office</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.sbcourts.org">Santa Barbara County
                                        Superior Court</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.countyofsb.org">Santa Barbara County Homepage</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.cityoflompoc.com/police/">Lompoc Police Department</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://cityofsantamaria.org/city-government/departments/police-services">Santa
                                        Maria Police Department</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://ci.guadalupe.ca.us/index.php/city-government/departments/police">Guadalupe
                                        Police Department</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.police.ucsb.edu/contact-us/report-crime">U.C.S.B. Police
                                        Department</a> <br />
                                                <br />
                                    </li>
                                    </ul>
                                </li>
                                <li><p className="font-semibold mb-3">State</p>
                                    <ul>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.cdaa.org/">California District Attorney's
                                        Association</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.courtinfo.ca.gov/">California Courts</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://caag.state.ca.us/">State Attorney General</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.chp.ca.gov/">California Highway Patrol</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.dca.ca.gov/">Consumer Affairs Department</a><br />
                                        <br />
                                    </li>
                                    </ul>
                                </li>
                                <li><p className="font-semibold mb-3">National Criminal Justice Links</p>
                                    <ul>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.ndaa.org/">National District Attorneys
                                        Association</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.ojp.usdoj.gov/bjs/">Bureau of Justice
                                        Statistics</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.ojp.usdoj.gov/ovc/">Office for Victims
                                        of Crime</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.usdoj.gov/">United States Department
                                        of Justice</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.fbi.gov/homepage.htm">Federal Bureau
                                        of Investigation</a> </li>
                                    <li><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://www.usdoj.gov/ag/">U. S. Attorney General</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default LegalLinks;