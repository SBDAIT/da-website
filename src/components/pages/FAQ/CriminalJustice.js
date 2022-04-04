import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import cjs from '../../../assets/criminaljusticesystem.gif'

import '../../../App.css';
import './FAQ.css';

class CriminalJustice extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                        <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Criminal Justice System
                                </div>
                            <p className="mt-4">The criminal justice system may appear complex and overwhelming to those who encounter it for the first time. We hope the explanation that follows helps you understand how the system is organized and what role our office plays in the process.</p>
                            
                            <div className="cjs-container">
                                <img 
                                    alt="Criminal justice system"
                                    src={cjs}
                                    className="cjs-photo"
                                />
                            </div>

                            <h6 className="font-semibold">Arrest</h6>
                            <p className="mt-4">When a crime is committed, law enforcement gets the first call. In this county, it is the responsibility of local police and the Sheriff’s Departments to investigate crimes and arrest suspects. In many instances, suspects are immediately taken into custody and jailed. However, if the crime is not violent and the charge is minor, an individual may be directed in writing to appear in court on a specific date.</p>
                            <p className="mt-4">In California there are three major classes of offenses for which a person may be prosecuted: infractions, misdemeanors and felonies. Some are defined in the California Penal Code, and others can be found in local ordinances or statutes such as the Vehicle Code. An infraction is the least serious offense and often results in a fine. Many traffic violations, including speeding, are infractions.</p>
                            <p className="mt-4">A misdemeanor is a more significant crime that can result in jail time. Examples of misdemeanors are first offenses for shoplifting or driving under the influence of alcohol. A felony is the most serious crime and carries a penalty of more than one year of imprisonment. Examples of felonies are robbery, burglary, sale of narcotics and murder.</p>

                            <h6>THE DISTRICT ATTORNEY'S OFFICE</h6>
                            <p className="mt-4">The District Attorney’s office represents the People of the State of California. Prosecutors bring criminal charges against suspects in courts of law.</p>
                            <p className="mt-4">Before issuing a case, a DDA will review the facts with police investigators and sometimes meet with the victim of the crime. The DDA evaluates whether there is enough evidence to support the charges originally brought by police. If the evidence is convincing, the prosecutor will determine the final charges and compile an official list known as the complaint.</p>
                            <p className="mt-4">In some cases, the DDA may decide not to proceed with a case against a defendant. A prosecutor may decline to prosecute or “reject” a case if there is insufficient evidence.</p>

                            <h6>THE COURTS:</h6>
                            <p className="mt-4">Criminal cases are prosecuted in several different geographic areas of Santa Barbara County: Santa Barbara, Santa Maria,, and Lompoc. Juvenile crimes are handled at the court complex assigned for Juvenile and Dependency matters. Infractions are generally heard by Commissioners. With a few exceptions (economic fraud cases and child abuse cases), criminal complaints are generally filed in the courthouse closest to where the crime occurred.</p>

                            <h6>ARRAIGNMENT:</h6>
                            <p className="mt-4">Once a prosecutor issues a case and files a complaint, the case is placed on the court’s calendar, and the defendant is brought before a judge for arraignment. In Santa Barbara County, criminal defendants who are in custody are arraigned within seventy-two hours of their arrest if they are not able to post bail. If the defendant cannot afford an attorney, one is appointed. During an arraignment, the defendant is informed of the charges in the complaint and enters a plea. The judge sets the amount of bail, if any, and selects dates for three hearings: Bail Review, Disposition Conference and Preliminary Examination. The Preliminary Examination (or Hearing) must take place within a certain amount of time unless the defendant agrees to “waive time,” in which case the hearing is set for a date convenient to all parties.</p>
                            <p className="mt-4">NOTE: An Information is generated at the conclusion of a Preliminary Examination or at the time of an indictment by a Grand Jury. An Information is similar in appearance and content to the Complaint, and it requires a second arraignment. The Defendant typically waives reading of the Information and enters a plea of not guilty. At this second arraignment the Court will set future dates including Motions, Readiness and Trial.</p>

                            <h6>About Bail:</h6>
                            <p className="mt-4">Bail is set at the time of the arrest and is often required to ensure the defendant returns to court at a future date. The amount of bail is dictated by a written schedule that reflects the seriousness of the crime. At the arraignment, the prosecutor will request bail in a particular amount, and the defense attorney will usually argue for a reduction. Sometimes, the DDA may ask the judge to attach conditions to a defendant’s release such as having no contact with the victim or restrictions on travel. The judge has the final word.</p>
                            <p className="mt-4">If the defendant posts the amount of money required to make bail, he or she will be released. This is often accomplished by collateralizing a loan or paying a premium to a bail-bonding agency. Some defendants are released without bail on their “own recognizance.” This happens when the judge is confidant they can be counted on to appear in court for all proceedings. If bail is set, a defense attorney may request a bail review hearing at a future date to reconsider the amount of bail. The issue of bail may be raised at subsequent hearings.</p>

                            <h6>FELONY DISPOSITION CONFERENCE / READINESS CONFERENCE:</h6>
                            <p className="mt-4">Typically there are two formal opportunities for the prosecution and defense to negotiate a disposition (plea bargain) on a case. The first occurs before the preliminary hearing; the second occurs after the preliminary hearing and before trial. In both instances a judge will sit “in conference” with the DDA and the defense attorney and must approve any negotiated settlement. Many cases are resolved in plea bargains at either stage of the proceedings.</p>

                            <h6>GUILTY PLEAS:</h6>
                            <p className="mt-4">Guilty pleas occur when the defendant either admits all of the charges or enters into a plea bargain in which the prosecution and the defendant have mutually agreed upon the charges. Plea bargains will include either a stipulated sentence or a sentencing recommendation. A judge must approve all negotiated pleas.</p>

                            <h6>MOTIONS AND HEARINGS:</h6>
                            <p className="mt-4">Sometimes legal issues must be resolved before a plea bargain or trial may take place. Most motions are considered in a special Superior Court Department on a date set when the defendant appears for arraignment on the Information.</p>

                            <h6>TRIAL:</h6>
                            <p className="mt-4">A criminal trial is a search for the truth. It proceeds through the examination of evidence (which includes the statements of witnesses) in a courtroom before a judge or a jury to determine whether a defendant is guilty of the charges in the Information beyond a reasonable doubt.</p>
                            

                            <h6>Jury selection:</h6>
                            <p className="mt-4">Voir Dire is the name given to jury selection. Twelve jurors and several alternates are chosen to hear a criminal case. When prospective jurors are summoned to the courtroom, the judge will explain certain principles of law and question the prospective jurors. The DDA and the defense attorney will also ask questions and “explore for bias.” After questioning, each side may exercise a limited number of “peremptory challenges” to excuse jurors they don’t want. The process continues until the 12 jurors and two or more alternates are chosen and sworn.</p>

                            <h6>The Parts of a Trial:</h6>
                            <p className="mt-4">Opening Statement: At the beginning of the trial, the DDA makes an Opening Statement that outlines the prosecution’s case against the defendant. A defense attorney may elect to make an Opening Statement as well, but it is not required. No argument is permitted.</p>
                            <p className="mt-4">Case In Chief: The case brought by the District Attorney's Office generally involves calling witnesses and introducing other evidence. The DDA questions each witness. Afterwards, the defense attorney may question or cross-examine the witness. The DDA can follow up with more questions on redirect. This process continues until all of the prosecution's witnesses in the case have testified. At the end of the prosecution’s case, the defendant may ask the judge to dismiss the charges - a request that on the theory that the trial evidence is insufficient to establish the crime(s) charged.</p>
                            <p className="mt-4">Defense Case: The defendant is not required to testify, to present any witnesses, or to present any evidence. If defense witnesses are called, the DDA may cross-examine each witness.</p>
                            <p className="mt-4">Rebuttal: The District Attorney's Office may present witnesses or evidence to rebut information presented by the defense</p>
                            <p className="mt-4">Concluding Argument: The DDA delivers a summation, at which time the evidence is reviewed and arguments supporting a guilty verdict are offered. The defense presents its closing argument after the prosecution. The DDA is allowed time for rebuttal after the defense’s arguments. At the conclusion of closing arguments the judge gives final instructions on the law and explains the elements of each crime charged.</p>
                            <p className="mt-4">Deliberation: The jury may find the defendant guilty, not guilty, or may be unable to agree on a verdict (hung). If the jury cannot come to a verdict, with the court’s approval, the case may be tried again.</p>
                            
                            <h6>* DISCLAIMER:</h6>
                            <p className="mt-4">The information provided above is meant to offer a general overview of the California state legal system and should not be relied upon as legal advice.</p>
                            
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default CriminalJustice;