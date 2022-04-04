import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class RuralCrime extends Component {
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
                                   Rural Crimes
                                </div>
                            <p className="mt-4">Rural crimes fall into two general categories:  crimes that occur in remote and/or undeveloped locations and agricultural related crimes that occur anywhere. Rural crimes that occur in remote locations are typically crimes such as burglary, theft, vandalism and trespassing.  These crimes affect farmers, ranchers, vintners or construction companies.  Our office has prosecuted rural crimes that occur on landfills, transfer stations, water treatment plants, railroad tracks, recycling centers, and golf courses.  In addition, rural crimes can also occur in the local national forests including hunting and weapons violations.</p>
                            <p className="mt-4">Agricultural related crimes that are not dependent upon the location of the crime tend to include crimes violating health and safety regulations for food, wine, and animals.  Our office has prosecuted crimes for the illegal sale of unprocessed cheese in markets, processing wine without a license, and raising chickens for the illegal sport of cockfighting.</p>
                            <p className="mt-4">The District Attorney’s Office works closely with several agencies in its prosecution of rural crimes, including the Santa Barbara County Sheriff’s Office, the California Department of Food and Agriculture, California Department of Fish and Game, and Santa Barbara County Animal Services.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
        <p>&nbsp;</p>
          <p>Santa Maria</p>
          <p>
            312 D E Cook St <br />
            Santa Maria, CA 93454<br />
            Tel: (805) 346-7540</p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default RuralCrime;