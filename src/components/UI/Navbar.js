import React, { Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import language from '../../assets/language_icon.png'
import NavMenu from './Nav-menu/Nav-Menu';
import seal from '../../assets/Seal.png'


import { List, X } from 'react-bootstrap-icons';

class Navbar extends Component {

    state = {
        showMobileNavMenu: false
    }

    toggleMobileMenu = () => {
        this.setState({showMobileNavMenu: !this.state.showMobileNavMenu})
        console.log(this.state.showMobileNavMenu)
    }

    render () {
        let officeRoutes = [{title: 'Meet Your DA', route: '/da/meet-your-da'}, {title: 'Our Mission', route: '/da/mission'}, {title: 'Management Team', route: '/da/management-team'}, {title: 'Our Duties', route: '/da/duties-responsibilities'}, {title: 'Budget', route: '/da/budget'}, {title: 'Press', route: '/da/press'}, {title: 'Careers', route: '/da/careers'}, {title: 'Externship', route: '/da/externship'}, {title: `DA Speaker's Bureau`, route: '/da/da-speaker-bureau'}, {title: `Statistics`, route: '/da/stats'}];
        let prosecutionRoutes = [{title: 'Criminal Complaints', route: '/da/criminal-complaints'}, {title: 'Domestic Violence', route: '/da/domestic-violence'}, {title: 'Elder Abuse', route: '/da/elder-abuse'}, {title: 'Gang Unit', route: '/da/gang-unit'}, {title: 'Narcotic Unit', route: '/da/narcotic-unit'}, {title: 'Real Estate', route: '/da/real-estate'}, {title: 'Rural Crime', route: '/da/rural-crime'}, {title: 'Sexual Assault', route: '/da/sexual-assault'}, {title: `Identity Theft`, route: '/da/identity-theft'}, {title: `Hate Crimes`, route: '/da/hate-crimes'}, {title: `Diversion Program`, route: '/da/diversion-program'}, {title: `Neighborhood Restorative Justice Program`, route: '/da/nrjp'}];
        let investigationRoutes = [{title: 'Prosecution Support', route: '/da/prosecution-support'}, {title: 'Welfare Fraud', route: '/da/welfare-fraud'}, {title: `Worker's Comp. Fraud`, route: '/da/workers-compensation-fraud'}];
        let vwRoutes = [{title: 'Victim Witness Unit', route: '/da/victim-witness-unit'}, {title: 'Child Abuse', route: '/da/child-abuse'}, {title: 'Victim Compensation', route: '/da/victim-compensation'}, {title: 'Crime Victim Assistance', route: '/da/crime-victim-assistance'}, {title: 'Domestic Violence', route: '/da/vwdv'}, {title: 'Sexual Assault', route: '/da/vw-sexual-assault'}];
        //let faqRoutes = [{title: 'FAQs', route: '/da/faqs'}, {title: 'Criminal Justice System', route: '/da/criminal-justice-system'}, {title: 'Publications', route: '/da/publications'}, {title: 'Legal Links', route: '/da/legal-links'}];
        let contactRoutes = [{title: 'Contact Info', route: '/da/contact'}];
        let statsRoutes = [{title: 'Statistics', route: '/da/stats'}];
        let civilRoutes = [{title: 'Consumer Mediation', route: '/da/consumer-mediation'}, {title: 'Consumer Protection', route: '/da/consumer-protection'}, {title: 'Consumer Tips', route: '/da/consumer-tips'}, {title: 'Environmental Law', route: '/da/environmental-law'}, {title: 'Legal Resources', route: '/da/legal-resources'},];
        
        return ( 
            <Fragment>
                <div className="relative">
                    <div className="mx-auto flex flex-col lg:flex-row p-4 justify-between items-center lg:items-end max-w-screen-2xl">
                        <div className="flex flex-row items-end">
                            <Link className="hover:text-mustard" to="/da"><img className="mr-4" src={seal} style={{width: '80px'}} alt="DA Logo"/></Link>
                            <div className="font-display text-blue-primary font-medium text-base mb-4 ">
                                <Link className="hover:text-mustard" to="/da">Santa Barbara County District Attorney</Link>
                            </div>
                        </div>
                            
                        <div className="ml-4 hidden md:flex border-b-2 border-mustard mb-3">
                            <NavMenu routes={officeRoutes} isMobile={false} title="Office"></NavMenu>
                            <NavMenu routes={prosecutionRoutes} isMobile={false} title="Prosecution"></NavMenu>
                            <NavMenu routes={civilRoutes} isMobile={false} title="Civil"></NavMenu>
                            <NavMenu routes={investigationRoutes} isMobile={false} title="Investigation"></NavMenu>
                            <NavMenu routes={vwRoutes} isMobile={false} title="Victim Services"></NavMenu>
                            {/* <NavMenu routes={faqRoutes} isMobile={false} title="FAQs"></NavMenu> */}
                            <NavMenu routes={statsRoutes} isMobile={false} title="Statistics"></NavMenu>
                            <NavMenu routes={contactRoutes} isMobile={false} title="Contact"></NavMenu>
                        </div>
                        
                        <div>
                            <img src={language} className="h-10" alt="language icon"/>
                            <div id="google_translate_element"></div>
                        </div>
                        

                        <div class="md:hidden flex items-center">
                            <button className="outline-none" onClick={() => {this.toggleMobileMenu()} }>
                                {
                                    this.state.showMobileNavMenu ? 
                                    <div className="mt-5 font-display text-base"><p>Menu</p>
                                    <X className="outline-none pl-2" size={34} /></div>
                                    
                                    :
                                    <div className="mt-5 font-display text-base"><p>Menu</p>
                                    <List className="outline-none pl-2" size={34} /></div>
                                }
                            
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <div className="p-4 shadow absolute flex flex-column justify-center bg-white right-0" style={{display: this.state.showMobileNavMenu ? 'flex' : 'none'}}>
                        <NavMenu routes={officeRoutes} isMobile={true} title="Office"></NavMenu>
                            <NavMenu routes={prosecutionRoutes} isMobile={true} title="Prosecution"></NavMenu>
                            <NavMenu routes={civilRoutes} isMobile={true} title="Civil"></NavMenu>
                            <NavMenu routes={investigationRoutes} isMobile={true} title="Investigation"></NavMenu>
                            <NavMenu routes={vwRoutes} isMobile={true} title="Victim Services"></NavMenu>
                            {/* <NavMenu routes={faqRoutes} isMobile={false} title="FAQs"></NavMenu> */}
                            <NavMenu routes={statsRoutes} isMobile={true} title="Statistics"></NavMenu>
                            <NavMenu routes={contactRoutes} isMobile={true} title="Contact"></NavMenu>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Navbar;