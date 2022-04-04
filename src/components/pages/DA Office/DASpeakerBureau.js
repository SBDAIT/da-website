import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import { ChevronRight } from 'react-bootstrap-icons';

class DASpeakerBureau extends Component {
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
                                    Speaker's Bureau
                                </div>
                                <p className="mt-4">District Attorney Joyce Dudley, prosecutors, investigators and victim advocate staff are available to speak to community groups on criminal justice and crime victim issues of interest. Presentations may focus on elder abuse, child abuse, cyber bullying, juvenile justice, domestic violence, gang violence, workers’ compensation fraud, identity theft, careers in the legal field for high school students and other areas of concern and interest.</p>
                                <p className="mt-4">Below is a description of a few of the areas:</p>
                                <h5>Gang Violence</h5>
                                <p className="mt-4">Santa Barbara County District Attorney’s Office provides in-depth presentations on the impact of gang violence and the mechanics of gang prosecutions throughout Santa Barbara County.  During the presentation, the Deputy District Attorneys from the office’s gang unit discuss the formation and present structure of many criminal street gangs currently operating in our county.  The attorneys provide valuable information on common habits, customs, symbols and culture of criminal street gangs based on past prosecutorial experience.</p>
                                <p className="mt-4">Deputy District Attorneys will also discuss the current law as relates to gang violence and how gang cases are handled in the judicial system.  They can provide insight as to what legal tools are available to law enforcement and the local community to combat gang violence.</p>
                                <h5>Elder Abuse</h5>
                                <p className="mt-4">Are you concerned about ensuring the welfare of a dependent adult or elder family member?   Do you regularly have contact with elders or dependent adults and want to be familiar with the signs of abuse?  Are you a mandatory reporter?  The Deputy District Attorneys in our Elder/Dependent Adult Unit receive special training in the laws specific to crimes against these particularly vulnerable members of our community. </p>
                                <p className="mt-4">We are available to speak to your group or organization providing training in recognizing the signs of physical abuse, protecting the financial assets of clients, where to report suspected abuse, and how to gather the information necessary to help law enforcement successfully prosecute an offender.</p>
                                <h5>Sex Offenses</h5>
                                <p className="mt-4">Sex offenders come from all walks of life, all professions, all races, all levels of education and all socio-economic groups. Although most people worry about "stranger danger" in reality sexual assaults are more often committed by someone known to the victim. This is especially true for offenses against children.</p>
                                <p className="mt-4">The Deputy District Attorneys in our Sex Crimes Unit receive particularized training helping them to understand the complexities of sexual offenses and the offenders who commit them.  Lawyers from the unit are available to discuss important issues in this area including:</p>
                                <p>&nbsp;</p>
                                <ul>
                                    <li> Sex Offender Registration – Who has to register and for how long? Are all registered sex offenders listed on the internet site?  Who is monitoring these offenders?</li>
                                    <li>Child Molestation – Recognize the “red flags” that a child is being molested.  Learn how to protect children online.  Identify “grooming” patterns by offenders.</li>
                                    <li>Alcohol Facilitated Sexual Assault – Ascertain vulnerable populations.  Review educational steps to prevent victimization.  Know what steps to take if an assault is committed.</li>
                                </ul>
                                <h5>Careers in the Legal Field (for high school students)</h5>
                                <p className="mt-4">The presentation focuses on the value of education and the opportunities that are available to people in the legal field. It is a 30-50 minute PowerPoint presentation that is geared toward high school juniors/seniors. I provided some history and perspectives on jurisprudence and the many ways it impacts students' lives. The presentation also illustrates the Wooden “Pyramid of Success” as a means to motivate and persuade students to start a plan for success. The presentation provides details on traditional legal jobs as well as alternative legal careers that appeal to a wide range of students.</p>
                                <p className="mt-4">Overall, the presentation is intended to be instructional and motivational. The presentation voices the District Attorney’s dedication to the education and protection of the children in Santa Barbara County.</p>
                                <h5>Victim-Witness Assistance</h5>
                                <p className="mt-4">VW Advocates, Supervisor and Manager routinely conduct outreach presentations. They are available to speak to community groups and organizations who want to know about Victim’s Rights, Victim-Witness Assistance Services, Crime Victim Compensation and related crime prevention and intervention resources.</p>
                            </div>
                            
                            
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                    Speaker's Bureau Requests
                                </div>
                                <p>&nbsp;</p>
                                <p>Please send us an {" "}
                                <a href="mailto:DAinfo@co.santa-barbara.ca.us" class="style7">email</a> with the
                                following information:</p>
                                <p>&nbsp;</p>
                                <p>Your topics(s) of concern\interest</p>
                                {/* <p>&nbsp;</p>
                                <table width="200" border="0">
                                    <tr>
                                    <td width="97">Child Abuse </td>
                                    <td width="93">Consumer Fraud </td>
                                    </tr>
                                    <tr>
                                    <td>Drugs &amp; Narcotics </td>
                                    <td>Domestic Violence </td>
                                    </tr>
                                    <tr>
                                    <td>Elder Abuse </td>
                                    <td>Environmental Protection </td>
                                    </tr>
                                    <tr>
                                    <td>Gang Crimes </td>
                                    <td>Hate Crimes </td>
                                    </tr>
                                    <tr>
                                    <td>Identity Theft </td>
                                    <td>Juvenile Crime </td>
                                    </tr>
                                    <tr>
                                    <td>Sexual Assault </td>
                                    <td>Driving Under the Influence </td>
                                    </tr>
                                    <tr>
                                    <td>Insurance Fraud </td>
                                    <td>Rural Crime </td>
                                    </tr>
                                    <tr>
                                    <td>Welfare Fraud </td>
                                    <td>Real Estate Fraud </td>
                                    </tr>
                                    <tr>
                                    <td>Cyberbullying</td>
                                    <td>Online Predators </td>
                                    </tr>
                                    <tr>
                                    <td>Careers in the Legal Field </td>
                                    <td>Any other area of Concern/Interest </td>
                                    </tr>
                                </table>           */}
                                <p className="mt-4"> <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" /> Name of your organization</p>
                                <p><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" /> Type of Event</p>
                                <p> <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" /> Date/Time</p>
                                <p><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" /> Length of Presentation (30-60 mins)</p>
                                <p>&nbsp;</p>
                                <p>Contact Information:</p>
                                <p>&nbsp;</p>
                                <p><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" />Name of Person requesting</p>
                                <p><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" />Telephone number</p>
                                <p><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline" />Other Details       </p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default DASpeakerBureau;