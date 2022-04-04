import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';
import dudley from '../../../assets/Joyce_Dudley.jpg'
import balleste from '../../../assets/Balleste.jpg'
import ross from '../../../assets/BRoss.jpg'
import savrnoch from '../../../assets/JSavrnoch.jpg'
import kelly from '../../../assets/Kelly3.jpg'
import nicola from '../../../assets/MagNicola.jpg'
import megan from '../../../assets/Megan.jpg'
import soderman from '../../../assets/Msoderman.jpg'
import perkins from '../../../assets/Perkins.jpg'


class ManagementTeam extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex font-display text-base" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="dudley"
                                    src={dudley}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />
                                </div>
                                <div className="team-member-description">
                                    <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Joyce Dudley, District Attorney
                                    </div>
                                    <p className="mt-4">Joyce E. Dudley has a BA in psychology, and two Master’s Degrees in Education; one with an emphasis on Early Childhood Education and the other with an emphasis on Educational Administration. In 1990 Joyce received her JD degree. The day she passed the Bar she was hired by the Santa Barbara County District Attorney’s office. For 20 years Joyce was a Deputy District Attorney specializing in prosecuting violent crimes against vulnerable victims. In 2010 she was elected District Attorney.</p>
                                    <p className="mt-4">In 2016 she was appointed by Governor Brown to be the Chair of the Police Officers Standards and Training Commission (POST), a position she still retains. Joyce also presently serves on the Executive Board of Fight Crime Invest in Kids and is the National Co-Chair of Prosecutors Against Gun Violence.</p>
                                    <p className="mt-4">Joyce has received numerous awards including: Woman of the Year (Democratic Women) 2021, Attorney of the Year (Santa Barbara Women Lawyers), Woman of the Year (Junior League), and Mentor of the Year (Council on Alcohol and Drug Abuse).</p>
                                </div>
                                <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="savrnoch"
                                    src={savrnoch}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />
                                </div>
                                
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    John Savrnoch, Assistant District Attorney
                                    </div>
                                    <p className="mt-4">John Savrnoch has been a Deputy District Attorney for the Santa Barbara County District Attorney’s Office assigned to the Lompoc Division since January of 2015.  Prior to coming to Santa Barbara County, John was an attorney for the Fresno County District Attorney’s Office for almost 23 years.  John’s career in Fresno included representing abused children, prosecuting insurance fraud, and prosecuting serious financial crimes before spending the last decade as a supervisor/administrator.  John’s administrative assignments in Fresno County included supervising the financial crimes and consumer protection unit, supervising the misdemeanor prosecution unit, serving as an Assistant District Attorney, and serving as the Chief Assistant District Attorney.</p>
                                    <p className="mt-4">John received both a Bachelor of Science and a Master of Business Administration from Marquette University in Milwaukee, Wisconsin.  John attended law school at the University of Wisconsin where he received his Juris Doctor in 1990.</p>
                                    <p className="mt-4">In March 2016 John was appointed to serve as a Chief Deputy District Attorney by Santa Barbara County District Attorney Joyce Dudley. John now serves as the Chief Deputy District Attorney for the Santa Barbara office.</p>
                                    
                                </div>
                            </div>
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="balleste"
                                    src={balleste}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />  
                                </div>
                                <div className="team-member-description">
                                     <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Sonia Balleste, Chief Deputy District Attorney, North County
                                    </div>
                                    <p className="mt-4">Sonia is a graduate of the University of California Irvine where she earned a degree in Social Ecology. She received her juris doctor from Thomas Jefferson School of Law in San Diego.</p>
                                    <p className="mt-4">Sonia began her career as Deputy District Attorney in Southern California where she prosecuted violent crime cases. Sonia specialized in homicide trials and investigations. She successfully litigated capital cases, gang cases and domestic violence cases.  Sonia is also proficient in forensic investigation and litigation including her experience in Rapid DNA and genetic genealogy investigations.</p>
                                    <p className="mt-4">Sonia joined the Santa Barbara County District Attorney's office in 2019 prosecuting arson, gang and homicide cases. In May of 2020 she was promoted to the position of Chief Deputy by District Attorney Joyce Dudley.</p>
                                    <p className="mt-4">As Chief Deputy, Sonia's primary responsivities include the supervision of all Deputy District Attorneys assigned to the Santa Maria Office, she also acts as the Rapid DNA liaison and is in charge of cold case investigations.</p>
                                </div>
                                
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="perkins"
                                        src={perkins}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        
                                        />
                                </div>
                                
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Kristina Perkins, Chief Criminal Investigator
                                    </div>
                                    <p className="mt-4">Kristina Perkins was appointed to the position of interim Chief investigator of the Santa Barbara County District Attorney’s Office in December 2021.</p>
                                    <p className="mt-4">Kristina began her law enforcement career in 2007 as a police officer for the University of California, Santa Barbara Police Department. In 2013, Kristina began her employment at the Santa Barbara County District Attorney’s Office as an investigator where she worked assignments in the Welfare Fraud Unit, Cannabis Compliance Team, Arson, Environmental Crimes, and Consumer Fraud.  In 2020, Kristina was promoted to the position of Commander of the Special Investigations Unit and Lompoc Criminal Investigative Team.</p>
                                    <p className="mt-4">Kristina was born in Santa Barbara and raised in Ojai, CA. She attended Santa Barbara City College, California State University, San Marcos and California State University, Northridge. She possesses an Associate’s Degree in Administration of Justice, a Bachelor’s Degree in Political Science and a Master’s Degree in Public Administration. </p>
                                    <p className="mt-4">Chief Perkins is the first woman in the history of the Santa Barbara County District Attorney’s office to be named Chief.</p>
                                </div>
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="kelly"
                                    src={kelly}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />
                                </div>
                                
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Kelly Duncan, Chief Deputy District Attorney, North County
                                    </div>
                                    <p className="mt-4">Kelly Duncan was appointed to the position of Chief Deputy District Attorney in August 2012.   Kelly's primary responsibility is supervising  the District Attorney’s Litigation Operations in a Major Gang Case in Santa Maria. Kelly is also responsible for Brady compliance and ethics for the District Attorney’s Office.</p>
                                    <p className="mt-4">Prior to her appointment with the District Attorney’s Office Kelly was Deputy County Counsel for the County of Santa Barbara where she represented the Sheriff and District Attorney.  At county counsel she specialized in civil rights litigation and was in-house counsel to the Sheriff’s Office.  Kelly began her legal career with the California Department of Transportation where she litigated cases involving allegations of dangerous conditions of public property, inverse condemnation, eminent domain, and employment law.</p>
                                    <p className="mt-4">Kelly grew up in Baton Rouge, Louisiana, and came to California to attend Pepperdine University where she obtained a Bachelor of Arts degree in English and later a law degree from Pepperdine. </p>
                                    
                                </div>
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="nicola"
                                    src={nicola}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />
                                </div>
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Mag Nicola, Chief Deputy District Attorney, North County
                                    </div>
                                    <p className="mt-4">Mag Nicola grew up in San Diego where he attended the University of California, San Diego, and California Western School of Law.  He earned his law degree in 1993.</p>
                                    <p className="mt-4">Mag began his career in public service with the San Diego County District Attorney’s Office in 1993 as a contract Deputy District Attorney with their Major Narcotics Prosecution Unit, before joining the Santa Barbara County District Attorney’s Office in 1994.  Over his career, he has successfully prosecuted all types of serious crimes including murders, kidnappings, gang-violence, major narcotics, child abuse and sexual assaults.  Mag has twice received the Santa Maria Elk’s Law Enforcement Appreciation award for Outstanding Performance, was recognized as Deputy District Attorney of the Year in 1998 and 2005, and is a recipient of the H. Thomas Guerry Award for Outstanding Performance. Mag was appointed to the position of Chief Deputy District Attorney in August 2013.</p>
                                    <p className="mt-4">Mag supervises the attorneys in the Lompoc and Santa Maria Juvenile offices, oversees all administrative operations for the north county offices and serves as the liaison for law enforcement, probation, courts, and other state and federal allied agencies.  He is the District Attorney’s countywide representative for Collaborative Treatment Courts, Human Trafficking, AB 109, and the Juvenile Justice Coordinating Council. </p>
                                
                                </div>
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="megan"
                                        src={megan}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                </div>
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Megan Rheinschild, Victim-Witness Assistance Program Director
                                    </div>
                                    <p className="mt-4">Megan Rheinschild graduated from the University of California, Santa Barbara and studied at the National Autonomous University in Mexico City receiving her degree in Sociology and Spanish.</p>
                                    <p className="mt-4">Megan has been employed in the Santa Barbara County District Attorney’s Office Victim Witness Assistance Program since 1994 and has been the Director of the Countywide Program since 1997. She is responsible for oversight of a program whose staff annually serves over 3,500 victims of violent crime and their family members countywide.</p>
                                    <p className="mt-4">She oversees a range of victim service programs including the Human Trafficking, Elder and Dependent Abuse Units, the Victim Compensation and Restitution Recovery Contracts with the State of California. She also has administrative oversight of the Countywide Sexual Assault ResponseTeam.</p>
                                    <p className="mt-4">In addition to her local responsibilities, Megan is on the Board of the California Crime Victim Assistance Association and is Chair of the Statewide Training Committee.</p>
                                </div>
                            </div>
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="ross"
                                        src={ross}
                                        style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                        />
                                </div>
                                
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Barbara Ross, Executive Assistant to Joyce Dudley
                                    </div>
                                    <p className="mt-4">Barbara Ross joined the District Attorney's Office as Executive Assistant to District Attorney Joyce Dudley in December 2019.  She also provides administrative support for the Executive Staff.  Prior to joining the DA Team, Barbara was Executive Assistant to developer and philanthropist Michael Towbes for over 22 years.  She has a BA in Political Science from Allegheny College.  Barbara moved from the east coast (Washington, DC) to Southern California (Santa Barbara) in 1995.</p>
                                    <p className="mt-4">Barbara enjoys cooking and has become a very proficient sourdough bread maker.  She has a passion for the nonprofit community in Santa Barbara and is an active volunteer at the Santa Barbara Zoo.</p>
                                    
                                </div>
                            </div>
                           
                            <div className="team-member-wrapper">
                                <div className="img-wrapper">
                                    <img alt="soderman"
                                    src={soderman}
                                    style={{objectFit: 'contain', display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}
                                    />
                                </div>
                                
                                <div className="team-member-description">
                                <div className="
                                        align-self-center
                                        font-bold text-xl font-display 
                                        border-b-2 border-mustard w-max">
                                    Michael Soderman, Chief Financial &amp; Administrative Officer
                                    </div>
                                    <p className="mt-4">Michael Soderman has been an integral part of the Santa Barbara County District Attorney’s Office since October 2015. He was brought on as Business Manager and has served in his current role as Chief Financial and Administrative Officer since 2017. Michael is responsible for all Finance &amp; Accounting, Human Resources, and Legal Office Support.</p>
                                    <p className="mt-4">Prior to joining the District Attorney’s Office, Michael served as Accounting Supervisor for the Santa Barbara County Department of Behavior Wellness. Michael’s work history also includes managerial accounting experience within the private sector. Michael’s diverse background in both sectors provides him with a unique vision to navigate the District Attorney’s Office toward innovative and effective business solutions. He has been instrumental in developing and implementing financial and administrative improvements.</p>
                                    <p className="mt-4">Michael grew up in Santa Barbara County and moved to Northern California to attend California State University, Sacramento, where he earned his Bachelor’s Degree in Business Administration with an emphasis in Accounting. Michael feels fortunate to be able to bring his accounting and finance skill set back to his hometown where he can be a part of Santa Barbara County public service.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default ManagementTeam;