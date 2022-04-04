import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import hernandez from '../../../assets/Hernandez2.jpg'
import tdix from '../../../assets/tdix.jpg'
import Weichbrod from '../../../assets/Weichbrod.jpg'
import bittner from '../../../assets/lbittner.jpg'

import './DAOffice.css';

class Externship extends Component {
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
                                   District Attorney Externship Program
                                </div>
                                <p className="mt-4">The District Attorneys office provides an externship program to introduce new lawyers to the field of criminal prosecutions. Presently, in District Attorney’s offices across the state, there are many more applicants than are there open positions. We are often asked by new attorneys for the opportunity to clerk and gain valuable prosecution experience. New attorneys willing to commit to a six month externship program will do research and writing, argue motions, resolve cases on the readiness and settlement calendar, conduct preliminary hearings and when ready, will try cases before juries. They will also participate in the same training programs our lawyers are given. Our externs must pass a background check have the requisite Juris Doctor degree and be licensed to practice law in the State of California.</p>
                                <p className="mt-5 text-xl font-semibold border-b-2 border-mustard w-max">Testimonials</p>

                                <div className="team-member-wrapper">
                                    <div className="img-wrapper">
                                        <img alt="dudley"
                                        src={tdix}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                    </div>
                                    <div className="team-member-description">
                                        <h6>Tiffany Dix</h6>
                                        <h6>Deputy District Attorney</h6>
                                        <h6>Nevada County District Attorney's Office</h6>
                                        <p className="mt-4">I was a certified law clerk in the Santa Maria office from August of 2011 until I received my bar results in May of 2012.  During this time I had the opportunity to conduct research, write several motions, and argue several 1538.5  motions under the supervision of Mai Trieu and Anne Nudson.  I learned an incredible amount and fell in love with criminal law and prosecution.</p>
                                        <p className="mt-4">I began the externship program in June of 2012 under the supervision and training of Anne Nudson.  Ms. Nudson was an incredible mentor and taught me how to be an effective and professional misdemeanor calendar deputy.</p>
                                        <p className="mt-4">I was hired on as a Deputy District Attorney in Nevada County in October of 2012.  Anna Ferguson, the Assistant District Attorney, informed me that it was my externship experience that caused me to stand out among the other applicants.  I just finished my 3rd jury trial this week and received guilty verdicts in all 3 trials.  My success here in Nevada County is largely due to the experience and  training I received while interning and externing at the Santa Maria Office.  I want to extend my gratitude and appreciation to you and all of the prosecutors in the Santa Maria Office!</p>
                                    </div>
                                </div>
                                <div className="team-member-wrapper">
                                    <div className="img-wrapper">
                                        <img alt="dudley"
                                        src={Weichbrod}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                    </div>
                                    <div className="team-member-description">
                                        <h6>Kevin Weichbrod</h6>
                                        <h6>Deputy District Attorney</h6>
                                        <h6>Santa Barbara County District Attorney's Office</h6>
                                        <p className="mt-4">The Santa Barbara District Attorney’s Office Volunteer program provides a great advantage for starting a career as a District Attorney. There are certain skills and experience that law schools simply cannot provide. This program allows new lawyers the opportunity to gain vital courtroom experience by conducting hearings, motions, and even jury trials. The volunteer DA program trains enthusiastic new attorneys, allowing them to gain an understanding of the criminal justice system and develop their talents by working with dedicated and experienced professionals. This program has given me the ability to confidently enter a courtroom, conduct hearings motions or trials, and zealously represent The People of the State of California. In addition, I have learned investigative techniques, communication and negotiation skills, as well as, developing contacts and relationships throughout legal and law enforcement communities. This program has jump started my career as a criminal prosecutor in helping to protect our beautiful community of Santa Barbara County.</p>
                                    </div>
                                </div>
                                <div className="team-member-wrapper">
                                    <div className="img-wrapper">
                                        <img alt="dudley"
                                        src={hernandez}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                    </div>
                                    <div className="team-member-description">
                                        <h6>Ethel Hernandez</h6>
                                        <h6>Deputy District Attorney</h6>
                                        <h6>Ventura County District Attorney's Office</h6>
                                        <p className="mt-4">I will always be grateful to the Santa Barbara District Attorneys Office for the opportunity to participate in the Externship Program. I was able to develop and hone my prosecutorial skills in a very supportive atmosphere. This office encouraged me to partake in every courtroom experience possible, including handling preliminary hearings and motions. I was responsible for handling a caseload from readiness and settlement all the way through trial. During trial, even when handling my first solo trial, there was always someone I could turn to when a difficult situation arose. The sense of team effort permeated the group dynamic. I could always turn to my supervisor or co-workers with any question or concern. Additionally, a unique aspect of this program was the ability to help out in arraignment court and file custody cases. Handling arraignment court was a great learning experience because it allows a relatively new prosecutor the ability to understand the charging process and the penalties a person faces. I am certain that my future as a successful Deputy District Attorney was made possible by the opportunities I was able to seize as a participant in the Externship Program</p>
                                    </div>
                                </div>
                                <div className="team-member-wrapper">
                                    <div className="img-wrapper">
                                        <img alt="dudley"
                                        src={bittner}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                    </div>
                                    <div className="team-member-description">
                                        <h6>Lindsey Bittner</h6>
                                        <h6>Deputy District Attorney</h6>
                                        <h6>Fresno County District Attorney's Office</h6>
                                        <p className="mt-4">I was one of Santa Barbara District Attorney’s Office’s first externs. I volunteered first time as a misdemeanor deputy for seven months. I was part of the five person misdemeanor team. I was assigned a specified letter block, and I was able to prosecute my cases from arraignment through trial. Although I have been exposed to criminal law my entire life, my externship with the Santa Barbara District Attorney’s office gave me the ability to practice criminal law for the first time in my life. I learned how to evaluate a misdemeanor case, and learn what it is worth. I learned how to tow the line between negotiation and upholding justice. I learned how to choose my battles. My peers in the office were helpful and learned attorneys. Even more importantly, my peers were good people. Without exception, every DDA I asked offered me assistance. I was under the supervision of a very experienced misdemeanor deputy. I had a chief who was willing to talk to me directly about my cases. He was even willing and eager to listen to my arguments before I made them in court.</p>
                                        <p className="mt-4">I have since been hired as a full-time DDA in the Fresno County District Attorney’s Office. I now prosecute general felonies, and have a case load of over 100 felony cases. I can say with certainty that my externship in Santa Barbara was a huge factor in me getting a full time DDA job offer. I love my job in Fresno County, and I owe it, in large part, to my friends and co-workers in the Santa Barbara District Attorney’s Office.</p>                                    
                                    </div>
                                </div>
                            </div>
                           <div className="secondary-content">
                                <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                               <p className="mt-4"><a href="mailto:jsavrnoch@co.santa-barbara.ca.us">Chief
                                 Deputy DA John Savrnoch</a></p>
                                 <p className="mt-2">1112 Santa Barbara St</p>
                                <p>Santa Barbara, CA 93101</p>
                                <p>Tel: (805) 568-2300</p>  
                           </div>
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default Externship;