import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class HateCrimes extends Component {
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
                                   Hate Crimes
                                </div>
                                <h6 className="mt-4">What is a Hate Crime?</h6>
                                <p className="mt-4">Hate crimes are criminal acts or attempted criminal acts against an individual or group of individuals because of their actual or perceived race, color, religion, ancestry, national origin, sexual orientation, gender, or disability. Because they are targeted for who they are, victims of hate crimes continue to feel threatened long after an attack. These crimes victimize everyone – individuals and our entire community.</p>
                                <p className="mt-4">Some hate-motivated offenses do not rise to the level of a crime that can be charged in court. These acts are called hate incidents. Although they may not meet the definition of a crime, they leave individuals feeling victimized and can escalate into criminal behavior. Free speech is protected by the United States Constitution and is not a hate crime. However, speech that carries a credible threat of violence against an individual or group of people is criminal.</p>
                                <p className="mt-4">The following acts are examples of hate crimes under California law when they are motivated by the victim’s actual or perceived race, color, religion, ancestry, national origin, sexual orientation, gender, or disability:</p>
                                <ul>
                                    <li>Using force or threatening to use force to injure, intimidate, or interfere with another person who is exercising his or her constitutional rights</li>
                                    <li>Defacing or damaging another person’s property to intimidate or interfere with that person’s free exercise of his or her constitutional rights</li>
                                    <li>Desecrating a religious symbol or displaying a swastika on another person’s property with the intent to terrorize another person</li>
                                    <li>Vandalizing, burning, or bombing a church, synagogue, mosque, or other house of worship to terrorize other persons</li>
                                </ul>
                                <h6>Prosecuting Hate Crimes</h6>
                                <p className="mt-4">California has a number of laws which specifically apply to hate crimes. They can be prosecuted either as misdemeanors or felonies, depending on the severity of the offense. Misdemeanors can be elevated to felonies if they are hate-motivated crimes. Convictions of felonies with hate crime enhancements can result in the standard sentence plus an additional one to four years in state prison.</p>
                                <h6>Reporting Hate Crimes to Police</h6>
                                <p className="mt-4">If you are a victim of a hate crime, it is important that you report it to law enforcement. To report a hate crime, please call your local law enforcement agency.</p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                <p>Please contact your local law enforcement agency. </p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default HateCrimes;