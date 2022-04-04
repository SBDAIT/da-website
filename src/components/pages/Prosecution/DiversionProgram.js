import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class DiversionProgram extends Component {
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
                                   Diversion Programs
                                </div>
                            <p className="mt-4"><strong>Misdemeanor Diversion Program (MDP)</strong></p>
                            <p>Misdemeanor Diversion Program (MDP) is a pre-filing 90-day program, in which defendants are required to attend a class offered by Pacific Educational Services (PES) and show the DA’s office proof of completion. If MDP is not completed, the charges will then be filed and the defendant will go into the criminal justice system. There are two levels of the program: (1) MDP Program (Level I) - $250; and (2) DEJ Program (Level II) - $450. If restitution is involved, defendant will pay a $25 monthly restitution collection fee in which PES collects, monitors, and distributes. Flexibility is granted to filers. In order to be eligible for MDP, defendant must: (1) not be on probation; (2) never have had a previous grant of probation terminated unsuccessfully; (3) never had inflicted an injury upon the victim or any other person during the commission of the crime; and (4) not have had exhibited criminal sophistication through his or her modus operandi, or criminal intent.</p>

          <p className="mt-4"><strong>Theft  Awareness Program (TAP)</strong><br />
            Theft Awareness Program  (TAP) is a pre-plea 90 day program for first time defendants with minor theft  offenses. Defendant is required to attend a class, return to court with proof  of completion and pay a $300 admin fee, in which the case is continued and  eventually dismissed. If TAP is not completed, the defendant must enter plea to  charges against them.</p>
          

          <p className="mt-4"><strong>Credo  47</strong> <br />
            Credo 47 is a grant-funded diversion program administered by the Public Defender and Behavioral Wellness, which benefits minor criminal offenders and low-level  felony offenders who have serious mental illness/homelessness/substance use  disorders.</p>
          <p><br />
            <strong>Pre-Arrest:</strong></p>
          <ul>
            <li>If the person is willing to participate in  program, no arrest will be made and the person will be taken to either the Sobering Center or the South County Crisis Services hub for stabilization and referral to  treatment, housing, and mental health services.</li>
            </ul>
          <p>&nbsp;</p>
<p><strong>Post-Arrest:</strong></p>
          <ul>
            <li>If defendant lacks willingness to  participate in program, but would still be a great candidate, will be referred  to the DA for consideration pre-filing, and participation may be allowed. </li>
            </ul>
          <p>&nbsp;</p>
<p><strong>Post-filing/Pre-arraignment:</strong></p>
          <ul>
            <li>If entry to the program is requested after  charges have been filed, cases must be screened and approved, and arraignment  will be continued for 60-90 days.</li>
            </ul>
          
          <p className="mt-4"><strong>Military  Diversion Program &ndash; PC1001.80 (MILD)</strong><br />
            Military Diversion  Program (MILD) is a pre-plea diversion program for veterans and active duty  military members who commit misdemeanors offenses and can establish that their  offense was caused by substance abuse, PTSD, depression, traumatic brain  injury, or sexual trauma due to their military service&nbsp; per PC 1001.80. With consent and waiver of  defendant&rsquo;s speedy trial right, the court is authorized to postpone prosecution  of a misdemeanor. If defendant&rsquo;s  performance is not satisfactory, criminal proceedings can be reinstated; if  defendant completes program satisfactorily, the charges are dismissed.</p>
          <p>&nbsp;</p>
          <p><strong>Mental  Health Diversion &ndash; PC&nbsp; 1001.36 (MHD) </strong><br />
            Mental Health Diversion  (MHD) is a pre-plea diversion program for felony and misdemeanor charges. Defendants  charged with an applicable offense do not enter a guilty or no contest plea. With  consent and waiver of defendant&rsquo;s speedy trial right, the court is authorized  to postpone prosecution. If defendant&rsquo;s performance is not satisfactory,  criminal proceedings can be reinstated; if defendant completes program satisfactorily, charges are dismissed.</p>
          <p>&nbsp;</p>

          <p><strong>Pre-Plea  Substance Abuse Treatment (SATC)</strong><br />
            Pre-Plea Substance Abuse  Treatment (SATC) is for those charged with misdemeanors and first time felonies involving theft and substance abuse. They can complete a drug treatment  program without having to enter a guilty plea or suffer a conviction.&nbsp; Upon successful completion of the program,  the charges are dismissed, and the defendant never suffers a conviction. Misdemeanors  participate for at least 6-9 months, felonies for at least 12 months. Waives his/her right to speedy trial. If defendant fails program, the court decides guilt based on police/lab reports and sentences thereafter. If defendant successfully completes the program, the case is dismissed</p>
            <p>&nbsp;</p>
                
        
<p><strong>Post Plea Treatment Programs:</strong></p>
          <p><strong>Dual  Diagnosis Court (DDX)</strong> <br />
            Dual Diagnosis Court  (DDX) is a post-plea 12-18 month program in which defendants are on supervised  probation. DDX serves a smaller population of felony offenders experiencing  co-occurring disorders of mental illness and substance abuse, and is an alternative  to Mental Health Treatment Court when defendant has co-occurring disorder.</p>
          <p>&nbsp;</p>
          <p><strong>Mental  Health Treatment Court (MHTC)</strong> <br />
            Mental Health Treatment  Court (MHTC) is a post-plea 12-18 month program in which defendants are on  supervised probation. Each candidate will be reviewed and considered for the  program based on their criminal and mental health history. Defendant must  participate in all recommended mental health therapies and take all  recommended medications. A post-plea admission results in an added term and  condition to probation.</p>
          <p>&nbsp;</p>
          <p><strong>Veterans  Treatment Court (VTC)</strong><br />
            Veterans Treatment Court  (VTC) is a Post-Plea program with supervised probation that provides treatment programs for military veterans and active  duty service members. Upon successful completion, the court may consider  on a case-by-case basis if probation should be terminated, and whether a  dismissal of charges pursuant to PC 1203.4 should be granted.</p>
<p><br />
  </p>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default DiversionProgram;