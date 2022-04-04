import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import { ChevronRight } from 'react-bootstrap-icons';

class Budget extends Component {
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
                                    Budget
                                </div>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/3608">FY 2018-2019 Recommended Budget Book Pages</a></p>
                                <p className="mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/2691">FY 2016-18 Budget Workshop Materials</a></p>
                                <p className="mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/2819">FY 2016-18 Recommended Budget Book Pages</a></p>
                                <p className="mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/2352">FY 2015-17 Budget Workshop Materials</a></p>
                                <p className="mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/2449">FY 2015-17 Recommended Budget Book Pages</a></p>
                                <p className="mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" /><a href="http://countyofsb.org/ceo/asset.c/1449">FY 2014-16 Budget Workshop Materials</a></p>
                            </div>
                            <div className="secondary-content">
                            <p>For More Information Contact:</p>
                            <p className="mt-4"><a href="/contact">Santa Barbara</a><br/>
                                District Attorney Office <br />
                                1112 Santa Barbara Street<br />
                                Santa Barbara, CA 93101<br />
                                Telephone: (805) 568-2300</p>
                            </div>

                        </div>
                    </div>
                
            </Fragment>
        )
    }
}

export default Budget;