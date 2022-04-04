import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar-old';

import '../../../App.css';

class DomesticViolence extends Component {
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
                                   Grooming for Online Predators
                                </div>
                                <p className="mt-4">The Internet is a wonderful tool for learning. Unfortunately, it is also a powerful tool for predators that prey upon innocent children. Did you know?</p>
                                <ul>
                                    <li>Internet crime is the fastest growing crime in the U.S., and children are the fastest growing victim pool</li>
                                    <li>In the U.S., 95% of schools are now connected to the Internet</li>
                                    <li>Over 45 million children ages 10 through 17 use the Internet. Among them:</li>
                                    <li>One in five has been sexually solicited</li>
                                    <li>One in four has encountered unwanted pornography</li>
                                    <li>Close to 60% of teens have received an e-mail or instant message from a stranger and half have communicated back</li>
                                    <li>Over 75% of Internet crimes involving sexual solicitations of children and exposure to unwanted pornography is not reported to police or parents</li>
                                </ul>
                                <p className="mt-4">Most children know more about the Internet than adults do. As a result, many parents do not supervise their children's Internet use. Here are some surprising statistics:</p>
                                <ul>
                                    <li>An estimated 20% of parents do not supervise their children's Internet use at all</li>
                                    <li>Only 52% of parents moderately supervise their children's Internet use</li>
                                    <li>Some 71% of parents stop supervising Internet use by their children after the age of 14, yet 72% of all Internet-related missing children cases involve children who are 15 years of age or older</li>
                                    <li>Close to 62% of teens say their parents know little or nothing about the websites they visit</li>
                                </ul>
                                <h5>Do you know who is talking to your children on the Internet?  Do you know what websites your children visit?</h5>
                                <p className="mt-4">Knowing the places and people your children "visit" online is just as important as knowing their friends and the places they go in the real world. Unless you know what your child is doing in cyberspace, he or she could be in danger. Every minute of the day, children are solicited and victimized online. Predators are relentless in their pursuit of children. To combat Internet crimes against children, we must work together because the responsibility to protect children belongs to all of us. The Santa Barbara County District Attorney’s Office is working with law enforcement, educators, and others to develop a program that teaches parents and community leaders how to protect children on the Internet. Our goal is to reduce online victimization, increase the level of reporting of criminal activity, and provide resources for families to help them guard against Internet dangers.</p>
                            </div>
                            <div className="secondary-content">
                                <p><a href="https://countyofsb.org/da/msm_county/documents/TIPSFORPARENTS.pdf">Tips for parents</a></p>
                                <p>&nbsp;</p>
                                <p><a href="https://countyofsb.org/da/msm_county/documents/FAMILYCONTRACT.pdf">Family contract</a></p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default DomesticViolence;