import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class IdentityTheft extends Component {
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
                                   Identity Theft
                                </div>
                                <h6 className="mt-4 font-bold">What is Identity theft?</h6>
                                <p className="mt-4">Identity theft occurs when someone represents that he/she is you by using your personal information and does so for either fraudulent or other unlawful, improper purposes. Identity theft can occur when someone uses your personal information to open a “new account,” such as a bank account or credit card account.  It also occurs in cyberspace when someone uses your personal information to post online in Facebook, craigslist, chat rooms, and more.</p>
                                
                                <h6 className="font-bold mt-4">Where do they get your personal information?</h6>
                                <p className="mt-4">Although computer "hacking" gets the biggest headlines, mail theft, dumpster diving, and theft of company records by employees continue to be the most common ways of obtaining personal information.  The safest way to protect yourself from being a victim of identity fraud is to shred all documents containing account numbers or other personal information before throwing it way in the trash. Bank and other financial statements, ATM and credit card receipts, and pre-approved credit offers are among criminals’ favorite sources of information.</p>
                                <p className="mt-4">Never give anyone a credit card number or related information over the phone unless you initiated the call or are dealing with someone you know. Similarly, avoid confirming such information to a stranger on the telephone.</p>
                                <p className="mt-4">Do not carry your Social Security number, birth certificate, passport, or extra credit cards with you.</p>
                                <p className="mt-4">When using an ATM or public telephone, shield the viewing screen or keypad so that others cannot read your Personal Identification Number (PIN).</p>
                                <p className="mt-4">Do not write your Social Security number or credit card numbers on checks. Social Security numbers are a prime target of criminals and provide  with the key to unlock a variety of personal information.</p>
                                
                                <h6 className="font-bold mt-4">What laws are used to prosecute cases of ID theft?</h6>
                                <p className="mt-4">In California, Penal Code section 530.5, Using Personal Information of Another, is perhaps the most common law charged in connection with Identity Theft.  It can be charged as a misdemeanor or as a felony.  It is commonly charged in conjunction with other charges including grand theft, credit card fraud and burglary statutes.</p>
                                <h6 className="font-bold mt-4">What should I do if I am a victim?</h6>
                                <p className="mt-4">Gather as much information as you can about disputed charges or other indications of identity theft.</p>
                                <p className="mt-4">Notify the financial institution of the theft.</p>
                                <p className="mt-4">Be sure to report the crime to your local law enforcement agency.  Obtain a copy of the police report.</p>
                                <p className="mt-4">Make photocopies of the police report.</p>
                                <p className="mt-4">Contact the three major credit reporting companies.  Send them a copy of the police report with a letter of explanation. Ask them to place a fraud alert on your credit report and to indicate on your reports "My ID has been used to apply for credit fraudulently.  Contact me at [telephone number] to verify all applications."  Ask the credit bureaus to remove inquiries generated due to the fraudulent accounts and to remove the items that are due to the criminal activity of the identity thief.</p>
                            </div>
                            
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
                                <p>&nbsp;</p>
                                <p>Please contact your local law enforcement agency and: </p>
                                <p>&nbsp;</p>
                                <p><a href="http://www.equifax.com/" >Equifax</a><br />
                                P.O. Box 740241<br />
                                Atlanta, GA 30374<br />
                                1-888-766-0008</p>
                                        <p>&nbsp;</p>
                                        <p><a href="http://www.experian.com/" >Experian</a><br />
                                P.O. Box 2104<br />
                                Allen, TX 75013<br />
                                1-888-397-3742 </p>
                                        <p><br />
                                            <a href="http://www.transunion.com/" >TransUnion</a><br />
                                P.O. Box 6790<br />
                                Fullerton, CA 92834<br />
                                1-800-680-7289</p>
                            </div>
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default IdentityTheft;