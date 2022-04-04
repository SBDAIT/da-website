import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class ChildAbuse extends Component {
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
                                   Child Abuse and Neglect
                                </div>
                                <p className="mt-4">Each Year Santa Barbara County Child Welfare Services receives approximately 4000 reports of potential child abuse and neglect. Of those 4000 reports, Child Welfare Services investigated 2,500 incidents. Many of these cases are not referred to the District Attorney’s Office for prosecution or the Victim-Witness Assistance Program for services. However, mental health and medical benefits and services may be available to Abused and Neglected Children, their siblings, non offending parents, grandparents, and primary caretakers when all other resources have been exhausted.</p>
                                <p className="mt-4">If you or someone you care for has been:</p>
                                <ul>
                                    <li>Physically or sexually abused</li>
                                    <li>Abandoned or neglected</li>
                                    <li>A victim or witness to domestic violence</li>
                                    <li>Exposed to dangerous conditions in the household</li>
                                    <li>Placed in foster care due to a parent’s inability to care for the child</li>
                                </ul>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
          <p>&nbsp;</p>
          
            <p>South County:</p>
          <p>(805) 568-2400<br />
            North County:</p>
          <p>(805) 346-7529</p>
          <p>&nbsp;</p>
          <p>Child Abuse and Neglect Hotline Monday through Friday: 8 a.m. to 5 p.m. (800) 367-0166</p>
          <p><br />
            After Hours: Sheriff&rsquo;s Dispatch (805) 683-2724<br />
            <br />
            If a Child is in immediate danger, CALL 911</p>
          <p>&nbsp;</p>
          <p>For Additional Information and Resources 
            regarding Abused and Neglected Children see helpful links below:</p>
          <p><br />
                  <a href="http://www.211sbcounty.org/">211sbcounty</a> <br />
                  <a href="http://www.calm4kids.org/services.asp">calm4kids.org</a><br />
          <a href="http://www.countyofsb.org/kidsnet/">Kidsnet</a></p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default ChildAbuse;