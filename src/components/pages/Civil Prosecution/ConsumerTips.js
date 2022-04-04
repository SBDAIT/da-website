import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';
import { ChevronRight } from 'react-bootstrap-icons';
import '../../../App.css';

class ConsumerTips extends Component {
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
                                   Consumer Tips
                                </div>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Avoid offers that seem "too good to be true."
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Avoid impulse buying on major items.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Compare the price and quality of the merchandise at other retailers.
Check with product quality magazines such as Consumer Reports or individuals that own and use the product or service.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Check to see if the business has the required business licenses.
                                </p>


                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Ask the business for references of previous customers.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Check on the reputation and reliability of the business.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Contact the BBB or local regulatory agencies to ascertain the number and nature of the complaints filed against the business. BBB complaints can be found online at www.bbb.org
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Make sure warranties, guarantees, contracts and alterations to contracts are in writing.
                                </p>

                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Read all advertisements, warranties, guarantees and contracts fully and carefully.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Know what the refund policy is.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Do not be pressured into buying; take your time.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                If you purchase a product and are making payments over time, be aware of and understand all finance and interest charges, monthly payments, applicable fees and the total cost.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Make sure the purchased price matches the advertised price.
Keep all receipts and documents of the transaction.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Keep an eye on all credit card transactions and retrieve the card promptly.
If a problem arises, try to resolve the dispute with the business. Utilize the businesses chain of authority to bring about resolution.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                In order to help preserve your rights, and to help avoid the "he said, she said" cycle, telephonic communications should be summarized and written in a letter to the business. Sending the letter via certified mail can provide evidence of when the letter was sent.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                If you cannot resolve the dispute, file a small claims action, retain a private attorney, contact a mediation organization, or file a complaint with the local consumer protection agency or the applicable regulatory agency.
                                </p>
                                <p className="mt-4 mb-1"><ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-mustard inline mr-1" />
                                Do not be afraid to hang up on any unsolicited telephone call.
                                </p>
                            </div>
                            <div className="secondary-content">
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   Contact Information
                                </div>
          <p>&nbsp;</p>
          <p><span class="bldTxt"><a href="/contact"><strong>Santa Barbara</strong></a></span></p>
          <p>
            Senior Deputy District Attorney <br />
            1112 Santa Barbara Street<br />
            Santa Barbara, CA 93101<br />
            Tel: (805) 568-2300</p>
          <p>&nbsp;</p>
          <p><a href="/contact"><strong>Santa Maria</strong></a><br /></p>
          <p>Senior Deputy District Attorney <br />
            312-D East Cook Street<br />
            Santa Maria, CA 93454<br />
            Tel: (805) 346-7540</p>
          <p><br />
                <a href="/contact"><strong>Lompoc</strong></a><br /></p>
          <p>Supervising Deputy District Attorney <br />
            115 E. Civic Center Plaza<br />
            Lompoc, CA 93436<br />
            Tel: (805) 737-7760</p>
                            </div>
                            
                        </div>
                    </div>

            </Fragment>
        )
    }
}

export default ConsumerTips;