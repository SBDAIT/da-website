import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import '../../../App.css';

class FAQ extends Component {
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
                            Frequently Asked Questions
                          </div>
          <p>&nbsp;</p>
          {/* <ul>
              <li><a href="#1">Can I report a crime to the District Attorney's 
                Office?</a></li>
              <li><a href="#2">I am the victim of a crime and I want to drop charges 
                </a></li>
              <li><a href="#3">How do I file a domestic violence complaint with 
                your office? </a></li>
              <li><a href="#4">I was the victim of a violent crime. Will the District 
                Attorney's Office pay for my hospital bill and my lost wages? 
                Will the District Attorney's Office help me collect for pain and 
                suffering?</a></li>
              <li><a href="cp_bad_check_cases.html">I am a merchant who received a bad check. Can the 
                D.A.'s Office help me collect on this bad check? </a></li> 
              <li><a href="#6">I was the victim of a crime. Can you tell me the 
                defendant's next court date?</a></li>
              <li><a href="#7">In court, the judge ordered the defendant to pay 
                me restitution. So far, I have not received anything. Can anyone 
                help me?</a></li>
              <li><a href="#8">I think I have been cheated by a contractor, tradesman 
                or other person who provides labor or services. Can the District 
                Attorney's Office help me?</a></li>
              <li><a href="#9">I want a divorce. [Or, I want to sue someone. Or, 
                I want to adopt a child.] Can the D.A.'s Office help me?</a></li>
              <li><a href="#10">I want a restraining order to keep my [husband/wife,
                   boyfriend/girlfriend, or other person away from me]. Will
                  the D.A.'s  Office do this for me?</a></li>
              <li><a href="#11">I need child support. Can you help me?</a></li>
              <li><a href="#12">I have been subpoenaed by the District Attorney 
                to appear as a witness in a criminal case. Can I get witness fees? 
                What if I can't attend on the date stated in the subpoena?</a></li>
              <li><a href="#13">I was cited and released by the police. Can you 
                tell me if the D.A. filed charges against me?</a></li>
              <li><a href="#14">Can I talk to Mrs. Dudley? I think she's the 
                person handling my case since her name is on all the documents 
                in my case.</a></li>
              <li><a href="#15">I am a defendant and I don't like the attorney 
                who is representing me. Can I talk to you or one of your deputies 
                about my case?</a></li>
              <li><a href="#16">I am a defendant and I want to get a copy of the 
                police report. How do I get a copy? Is there any cost?</a></li>
              <li><a href="#17">I have a complaint about your office. How do I 
                contact you and will you respond?</a></li>
              <li><a href="#18">Can you help me file a Small Claims Court case 
              against a merchant or someone I have a dispute with?</a></li>
              <li><a href="#19">What information can I get on someone's
                  case?</a></li>
              <li><a href="#20">If my case is closed how can I get my property?</a></li>
              <li><a href="#21">If someone is arrested what is the time frame
                  they will be in court?</a></li>
              <li><a href="#22">Can anyone watch court proceedings?</a></li>
              <li><a href="#23">If I have more information about a pending criminal
                  case, who do I give that information too?</a></li>
              <li><a href="#24">How can I expunge my record?</a></li>
              <li><a href="#25">How can I get my criminal history?</a></li>
              <li><a href="#25">Can I report a crime anonymously?</a></li>
              <li><a href="#26">Where can I report Internet Crimes?</a>
              </li>
          </ul> */}
            <hr className="my-3" width="75%" />
            <p><b><font color="074abb">Q: Can I report a crime 
              to the District Attorney's Office?</font></b></p>
            <blockquote> 
              <p><b>A: </b>In most cases, a crime must be reported to the police 
                department or other law enforcement agency which has jurisdiction 
                over the city or county where the crime occurred.</p>
              <p>For example, if the crime occurred in the City of Santa Barbara, 
                Lompoc or Santa Maria, it should be reported to the local police 
                department. If the crime was committed in the unincorporated area 
                of Santa Barbara County, the crime should be reported to the Sheriff's 
                Office. However, there are certain exceptions. Crimes involving 
                consumer fraud, bad checks, and environmental crimes should be 
                reported directly to the District Attorney's Consumer/Environmental 
                Protection Unit.</p>
              <p>Note, however, that reports of officer misconduct should be reported 
                to the Internal Affairs sections of the officer's department.              </p>
            </blockquote>
            <p><b><font color="074abb">Q: I am the victim of a 
              crime and I want to drop charges. </font></b></p>
            <blockquote> 
              <p><b>A:</b> Crimes are charged by the District Attorney's Office 
                on behalf of the People of the State of California, not on behalf 
                of any particular victim. The decision to file charges in any 
                criminal prosecution can only be made by an attorney in the District 
                Attorney's Office. A victim's wishes will be considered, but the 
                final determination whether or not charges will be filed or dismissed 
                rests with the D.A.'s Office.</p>
            </blockquote>
            <p><b><font color="074abb">Q: How do I file a domestic 
              violence complaint with your office?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Contact your local law enforcement agency. They are 
                responsible for the investigation of domestic violence cases. 
                Our Domestic Violence Unit will review the investigation report 
                and file any appropriate criminal charges.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I was the victim of 
              a violent crime. Will the District Attorney's Office pay for my 
              hospital bill and my lost wages? Will the District Attorney's Office 
              help me collect for pain and suffering?</font></b></p>
            <blockquote> 
              <p><b>A: </b>The District Attorney's Office may be able to help 
                you file for recovery of unreimbursed medical expenses and lost 
                income. You should contact the District Attorney Victim Witness 
                Assistance program at (805) 568-2400 in Santa Barbara and at (805) 
                346-7529 in Santa Maria. To obtain compensation for pain and suffering, 
                you may need to contact a private attorney. If you do not have 
                a private attorney, you can contact the Santa Barbara County Bar 
                Association at (805) 569-5511 for a referral. If you cannot afford 
                a lawyer, you may call the Legal Aid Foundation of Santa Barbara 
                County at (805) 963-6754.</p>
            </blockquote>
<p><b><font color="074abb">Q: I was the victim of 
              a crime. Can you tell me the defendant's next court date?</font></b></p>
            <blockquote> 
              <p><b>A: </b>The District Attorney's Office can provide you with 
                the next court date if we have filed charges against the defendant. 
                To obtain this information, call (805) 568-2300 for assistance.</p>
            </blockquote>
            <p><b><font color="074abb">Q: In court, the judge 
              ordered the defendant to pay me restitution. So far, I have not 
              received anything. Can anyone help me?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Call the Probation Department at (805) 882-3700 and 
                ask for the probation officer assigned to your case. The officer 
                can help you get your money if restitution was a condition of 
                the defendant's probation.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I think I have been 
              cheated by a contractor, tradesman or other person who provides 
              labor or services. Can the District Attorney's Office help me?</font></b></p>
            <blockquote> 
              <p><b>A: </b>The District Attorney's Consumer Fraud Unit may be 
                able to help or they may refer you to an agency that can help 
                you. The Consumer Fraud Unit also helps consumers who have been 
                victims of false or misleading advertising and unlawful business 
                practices. <a href="http://countyofsb.org/da/civ_consumer_protection.html">CLICK 
                here</a>.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I want a divorce. [Or, 
              I want to sue someone. Or, I want to adopt a child.] Can the D.A.'s 
              Office help me?</font></b></p>
            <blockquote> 
              <p><b>A: </b>No, but a private attorney may be able to help you. 
                If you do not have a lawyer, you can contact the Lawyer Referral 
                Service of Santa Barbara County at (805) 569-9400, which is operated 
                by the Santa Barbara County Bar Association (805) 569-5511. If 
                you cannot afford a lawyer, you may call the Legal Aid Foundation 
                of Santa Barbara County at (805) 963-6754.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I want a restraining 
              order to keep my [husband/wife, boyfriend/girlfriend, or other person 
              away from me. Will the D.A.'s Office do this for me?</font></b></p>
            <blockquote> 
              <p><b>A:</b> No, but a private attorney may be able to help you. 
                If you do not have a lawyer, you can contact Lawyer Referral Service 
                of Santa Barbara County at (805) 569-9400, which is operated by 
                the Santa Barbara County Bar Association (805) 569-5511. If you 
                cannot afford a lawyer, you may call the Legal Aid Foundation 
                of Santa Barbara County at (805) 963-6754. You can also file the 
                paperwork yourself. Forms can be obtained at the County Clerk-Record's 
                Office located in the Courthouse.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I need child support. 
              Can you help me?</font></b></p>
            <blockquote> 
              <p><b>A: </b>No. Child support enforcement is done by the Department 
                of Child Support Services. They have offices in Santa Barbara, 
                Lompoc and Santa Maria. <a href="http://countyofsb.org/css">CLICK 
                here</a> for more information.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I have been subpoenaed 
              by the District Attorney to appear as a witness in a criminal case. 
              Can I get witness fees? What if I can't attend on the date stated 
              in the subpoena?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Whether a witness receives any witness fee is within 
                the discretion of the court. A court can order that you receive 
                witness fees (not to exceed $18 per day) plus reasonable and necessary 
                expenses after testifying. If you have a conflict with the date 
                on the subpoena, contact the Deputy District Attorney handling 
                the case before the appearance date and discuss your conflict. 
                The name and phone number of the attorney handling that case is 
                on your subpoena.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I was cited and released 
              by the police. Can you tell me if the D.A. filed charges against 
              me?</font></b></p>
            <blockquote> 
              <p><b>A: </b>To find out whether charges have been filed against 
                you, telephone the D.A.'s Office located in the judicial district 
                where the crime occurred. In Santa Barbara call (805) 568-2300. 
                In Lompoc call (805) 737-7760. In Santa Maria call (805) 346-7540.</p>
            </blockquote>
            <p><b><font color="074abb">Q: Can I talk to Mrs. 
              Dudley? I think she's the person handling my case since her name 
              is on all the documents in my case.</font></b></p>
            <blockquote> 
              <p><b>A: </b>Mrs. Dudley is the Santa Barbara County District Attorney 
                and her name appears on most court documents in your case. Mrs. 
                Dudley's name also appears on most District Attorney's Office 
                correspondence in your case just above the signature of the employee 
                who wrote the letter. The person working on your case is most 
                likely the person who actually signed the court document or letter. 
                This is the person you should contact.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I am a defendant and 
              I don't like the attorney who is representing me. Can I talk to 
              you or one of your deputies about my case?</font></b></p>
            <blockquote> 
              <p><b>A: </b>No. All attorneys are governed by a code of ethics 
                which prevents them from speaking directly to anyone who has an 
                attorney. As long as you are represented by an attorney, we may 
                speak only to your attorney. Any questions that you have about 
                your case should be answered by your attorney.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I am a defendant and 
              I want to get a copy of the police report. How do I get a copy? 
              Is there any cost?</font></b></p>
            <blockquote> 
              <p><b>A: </b>If you are a defendant in a case, and you have an attorney, 
                he or she will obtain a copy of the police report from our discovery 
                clerk. If you do not have an attorney and you have been charged 
                with an offense, you can obtain a copy of the police report. You 
                will be charged $10.00 for initial discovery and $.25 per page for supplemental and $10.00 when media and you must 
                pay cash and appear in person at the District Attorney's Office 
                with a picture identification. <a href="contact_us.html">CLICK 
                here</a> for locations.</p>
            </blockquote>
            <p><b><font color="074abb">Q: I have a complaint 
              about your office. How do I contact you and will you respond?</font></b></p>
            <blockquote> 
              <p><b>A:</b>  Please click <a href="msm_county/documents/Complaintstringsp.pdf">HERE</a> for complaints against sworn personnel. Please click <a href="msm_county/documents/Complaintstringnsp.pdf">HERE</a> for complaints against non sworn personnel.</p>
            </blockquote>
            <p><b><font color="074abb">Q: Can you help me file 
              a Small Claims Court case against a merchant or someone I have a 
              dispute with?</font></b></p>
            <blockquote> 
              <p><b>A: </b>No. If you want to file a Small Claims Court case, 
                you can go to the Small Claims Court and obtain the necessary 
                forms. In Santa Barbara it is located in the Courthouse, Superior 
                Court Clerk's Office, 1100 Anacapa Street, 2nd Floor, Santa Barbara, 
                California 93101. Telephone: (805) 568-2770. In Lompoc it is located 
                at Superior Court, 115 Civic Center Plaza, Lompoc, California 
                93436-6967. Telephone: (805) 737-7790. In Santa Maria it is located 
                at Superior Court-Cook Division, 312-C East Cook Street, Santa 
                Maria, California 93456-5369. Telephone: (805) 346-7414.</p>
            </blockquote>         
			            <p><b><font color="074abb">Q: What information can I get on someone's
                  case?</font></b></p>
            <blockquote> 
              <p><b>A: </b>The name of the defendant, the charges and the next
                court date. </p>
            </blockquote>         
			            <p><b><font color="074abb">Q: If my case
	                    is closed how can I get my property?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Our office sends a property release to the law enforcement
                agency that handled the case; the agency will then contact you
                once they receive a signed release from our office.&nbsp;Expect
                to wait&nbsp;at least&nbsp;two weeks or more.   &nbsp;Please
                contact us if you haven&rsquo;t received your property in 21
              days.</p>
            </blockquote>         
			            <p><b><font color="074abb">Q: If someone is arrested
	                    what is the time frame they will be in court?</font></b></p>
            <blockquote> 
              <p><b>A: </b>In most circumstances they will appear in court in
              2 court days.</p>
            </blockquote>         
			            <p><b><font color="074abb">Q: If I have more
			                  information about a pending criminal case, who
	                    do I give that information to?</font></b></p>
            <blockquote> 
              <p><b>A: </b>You can report it to the agency&nbsp;who&nbsp;took
              the report.</p>
            </blockquote>         
			            <p><b><font color="074abb">Q: How can I expunge
	                    my record?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Go to the court clerk&rsquo;s office             
                 for documents&nbsp;or see a criminal defense attorney or the
              public defender.</p>
            </blockquote>         
			            <p><b><font color="074abb">Q: How can I get my criminal history?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Contact
              the Department of Justice (DOJ). Please click <a href="http://ag.ca.gov/fingerprints/security.php">here</a> </p>
            </blockquote>
			 <p><b><font color="074abb">Q: Can I report a crime anonymously?</font></b></p>
            <blockquote> 
              <p><b>A: </b>Please call <a href="http://www.santabarbaraca.gov/Government/Departments/Police/Crime_stoppers_of_santa_barbara_county">Crime
              Stoppers of Santa Barbara</a> at 1-877-800-9100.</p>
              <p>&nbsp;</p>
            </blockquote>          
            <p><b><font color="074abb">Q: Where can I report Internet Crimes?</font></b></p>
            <blockquote> 
              <p><b>A: </b><a href="http://www.ic3.gov/complaint/default.aspx">FBI Internet Crime Complaint Center(IC3)</a></p>
            </blockquote>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default FAQ;