import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class WorkersCompFraud extends Component {
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
                                   Workers Compensation Fraud
                                </div>
                                <p className="mt-4">Workers’ Compensation Fraud is a community and statewide issue which impacts industry, employers, the medical profession, insurance companies, employees, and local businesses. $10 billion in workers’ compensation claims are filed each year in the state of California. It is estimated that 10% to 30% of those claims are fraudulent, costing California consumers $5 billion per year.</p>
                                <p className="mt-4">There is a direct correlation between workers’ compensation fraud and increases in insurance premiums. Fraud results in higher insurance premiums for all employers which, in turn, is passed on to the consumer through an increase in costs of goods and services we use every day. A large portion of Santa Barbara County’s workforce is employed in the agriculture, service, manufacturing, and construction industries. These types of jobs greatly impact the State’s Worker’s Compensation program in that the physical nature of the work lends itself to industrial injuries. Thus, employers pay high Worker’s Compensation premiums and employees recurrently utilize the program. Compounding the problem is the fact that many of our area jobs are temporary positions, and some workers are willing to make false Workers’ Compensation insurance claims to ensure income when their positions end.</p>
                                <p className="mt-4">These factors led the Santa Barbara County District Attorney’s Office to develop the Workers’ Compensation Fraud Program which brings local businesses, the Department of Insurance, and the District Attorney’s Office together to tackle Workers’ Compensation Fraud in Santa Barbara County. The program is designed to investigate allegations of Workers’ Compensation Fraud, arrest offenders, prosecute violators, and seek restitution for funds lost through fraudulent claims.</p>

                                <p className="mt-4">Employee Circumstances</p>
                                <ul>
                                    <li>Disgruntled, soon-to-retire, facing imminent firing or layoff</li>
                                    <li>Involved in seasonal work that is about to end</li>
                                    <li>Nomadic and have a history of short-term employment</li>
                                    <li>New on the job</li>
                                    <li>Have a history or reporting subjective injuries</li>
                                    <li>Protests about returning to work and never seems to improve</li>
                                </ul>

                                <p className="mt-4">Accident/Injury Circumstances</p>
                                <ul>
                                    <li>Occurs late Friday afternoon or shortly after employee reports to work on Monday</li>
                                    <li>Not witnessed, or witnesses’ version of accident conflict with applicant’s version or with one another’s</li>
                                    <li>Fellow workers hear rumors circulating that accident was not legitimate</li>
                                    <li>Accident occurs just prior to a disciplinary action or near end of probationary period</li>
                                    <li>Details of accident are vague or contradictory, have inconsistencies, are not credible</li>
                                    <li>Incident is not promptly reported by employee to supervisor</li>
                                    <li>Injuries are all subjective (complaints of pain or soft tissue injury claims)</li>
                                </ul>

                                <p className="mt-4">Questions Frequently Asked by Employers:</p>
                                <p className="mt-4">Do I need to have workers’ compensation insurance? Yes… California law requires employers to have workers’ compensation insurance coverage if an employee is regularly employed in California or a contract of employment is entered into here.</p>

                                <p className="mt-4">What is Employer Fraud?</p>
                                <p className="mt-4">It is unlawful to make or cause to be made any knowingly false or fraudulent statement, whether made orally or in writing, of any fact material to the determination of the premium, rate or cost of any policy of workers’ compensation insurance, for the purpose of reducing the premium rate or cost of the insurance.</p>

                                <p className="mt-4">What are the penalties for Workers’ Compensation Fraud?</p>
                                <p className="mt-4">Any person, employer or employee, who commits Workers’ Comp. fraud can be convicted of a FELONY punishable by:</p>
                                <ol>
                                    <li>Up to 5 years in prison</li>
                                    <li>Fines up to $50,000 or double the value of the fraud (whichever is greater)</li>
                                    <li>Restitution benefits wrongly obtained</li>
                                </ol>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                <p><a href="mailto:mharvill@co.santa-barbara.ca.us">Matthew Harvill</a></p>
                                <p>805-568-2409</p>
                                <p>&nbsp;</p>
                                <p><a href="https://countyofsb.org/da/msm_county/documents/WCEnglishbrochure.pdf">English Brochure</a></p>
                                <p>&nbsp;</p>
                                <p>To View a Video on Workers Compensation Fraud click this<a href="http://sbcounty.granicus.com/MediaPlayer.php?view_id=5&amp;clip_id=158&amp;publish_id=&amp;event_id="> link.</a></p>
                                <p>&nbsp;</p>
                                <p><a href="https://countyofsb.org/da/msm_county/documents/WorkersCompensationBrochure.pdf">Workers' Compensation Insurance Brochure</a></p>
                            </div>
                            
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default WorkersCompFraud;