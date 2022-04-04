import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../UI/Navbar';
import dudley from '../../assets/Joyce_Dudley.jpg'
import news from '../../data/news';

import backdrop from '../../assets/courttt.jpg'
import victim from '../../assets/victim.png'
import court from '../../assets/courtcalendar.jpeg'
import faq from '../../assets/faq.jpg'
import diversion from '../../assets/diversion.jpeg'
import graph from '../../assets/graph.png'
import scales from '../../assets/scalesofjustice.jpg'

import './Home.css';

import { ChevronRight } from 'react-bootstrap-icons';

function Home() {

        const [pressData, setPressData] = useState([]);
        

        useEffect(() => {
            fetch(process.env.PUBLIC_URL + '/press-data copy.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
                .then((res) => res.json())
                .then((data) => {
                    let press = data.slice(0,5);
                    setPressData(press)
            })
        }, [])

        let newsData = news.slice(0, 5);

        return (
            <Fragment>
                <Navbar></Navbar>
                <div className="mx-auto max-w-screen-2xl">
                    <img className="" src={backdrop} alt="SB Courthouse"/>
                    {/* First Section */}
                    <div className="flex flex-col md:flex-row text-blue-primary">
                        <div className="flex flex-col p-5 w-full md:w-6/12 " style={{backgroundColor: 'rgba(116,149,203,0.09)'}}>
                            <div className="
                                align-self-center
                                font-extrabold text-xl font-display 
                                border-b-2 border-mustard">
                                Our Mission
                            </div>
                            <div className="
                                pt-3 mb-5
                                text-center
                                font-semibold text-base font-display 
                                ">
                                To pursue truth and justice by employing the highest ethical standards in vigorously prosecuting the guilty, protecting the innocent, and preventing crime.
                            </div>
                            <div className="pt-2"></div>
                            <div className="
                                pt-5
                                align-self-center
                                font-extrabold text-xl font-display 
                                border-b-2 border-mustard">
                                Meet Your DA
                            </div>
                            <div className="pt-3 align-self-center">
                                <a href="/da/meet-your-da"><img  src={dudley} className="h-80" alt="DA Joyce Dudley"/></a>
                            </div>
                            <a href="/da/meet-your-da">
                                <div className="
                                    pt-3 align-self-center
                                    text-center font-normal text-base font-display ">
                                    <div>
                                        Joyce E. Dudley
                                    </div>
                                    <div className="text-mustard">
                                        District Attorney
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col p-5 w-full md:w-6/12">
                            <div className="
                                align-self-center
                                font-extrabold text-xl font-display 
                                border-b-2 border-mustard">
                                Covid Update
                            </div>
                            <div className=" pt-3 text-center font-semibold text-base font-display ">
                                Effective 1-11-22, our lobbies will be closed each day from 1:00PM - 5:00PM.  Staff are available at the numbers listed below should you need to contact our office.   
                            </div>
                             <div className=" pt-3 mt-4 text-center font-semibold text-base font-display ">
                                Current Office Hours - All Locations
                            </div>
                            <div className="pt-1 mb-5 text-center text-base font-display ">
                                8:00AM - 12:00PM
                            </div>
                           {/* <div className="pt-0 text-center text-base font-display ">
                                1:00PM - 5:00PM
                            </div>
                            <div className=" pt-3 text-center font-semibold text-base font-display ">
                                Lompoc Main Office is now Open
                            </div>
                            <div className="pt-1 text-center text-base font-display ">
                                8:00AM - 12:00PM
                            </div>
                            <div className=" pt-3 text-center font-semibold text-base font-display ">
                                Santa Maria Main Office
                            </div> */}
                            <div className="flex flex-row justify-evenly mt-4">
                                <div className="
                                    p-4
                                    flex flex-col
                                    shadow-sm rounded-sm
                                    p-2
                                    w-5/12"
                                    style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                    <div className="
                                        align-self-center
                                        font-normal text-base font-display 
                                        border-b-2 border-mustard">
                                        Victim Services
                                    </div>
                                    <div className="
                                        mt-2
                                        align-self-center 
                                        text-sm font-medium font-display">
                                        Santa Barbara: (805) 568-2300<br/>
                                        SM / Juvenile: (805) 346-7540 <br/>
                                        Lompoc: (805) 737-7760
                                        
                                    </div>
                                </div>
                                <div className="
                                    p-4
                                    flex flex-col
                                    shadow-sm rounded-sm
                                    p-2
                                    w-5/12"
                                    style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                    <div className="
                                        align-self-center
                                        font-normal text-base font-display 
                                        border-b-2 border-mustard">
                                        Restitution Payment
                                    </div>
                                    <div className="
                                        mt-2
                                        align-self-center 
                                        text-sm font-medium font-display">
                                        Santa Barbara: (805) 568-2300<br/>
                                        SM / Juvenile: (805) 346-7540 <br/>
                                        Lompoc: (805) 737-7760
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-evenly mt-4">
                                <div className="
                                    p-4
                                    flex flex-col
                                    shadow-sm rounded-sm
                                    p-2
                                    w-5/12"
                                    style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                    <div className="
                                        align-self-center
                                        font-normal text-base font-display 
                                        border-b-2 border-mustard">
                                        Discovery Pickup
                                    </div>
                                    <div className="
                                        mt-2
                                        align-self-center 
                                        text-sm font-medium font-display">
                                        Santa Barbara: (805) 568-2300<br/>
                                        Santa Maria: (805) 346-7540<br/>
                                        Lompoc: (805) 737-7760
                                    </div>
                                </div>
                                <div className="
                                    p-4
                                    flex flex-col
                                    shadow-sm rounded-sm
                                    p-2
                                    w-5/12"
                                    style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                    <div className="
                                        align-self-center
                                        font-normal text-base font-display 
                                        border-b-2 border-mustard">
                                        Main Reception
                                    </div>
                                    <div className="
                                        mt-2
                                        align-self-center 
                                        text-sm font-medium font-display">
                                        Santa Barbara: (805) 568-2300<br/>
                                        Santa Maria: (805) 346-7540<br/>
                                        Lompoc: (805) 737-7760
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="flex flex-row text-blue-primary">
                        <div className="flex flex-col md:flex-row justify-around p-5 w-100 font-display text-blue-primary" style={{backgroundColor: 'rgba(116,149,203,0.15)'}} >
                        <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                            <div className="bg-cover bg-center rounded-t-sm"
                                style={{backgroundImage: `url(${faq})`, height: '200px'}}>
                            </div>
                            <div className="p-4">
                                <div className="
                                    w-auto
                                    font-bold text-base font-display 
                                    border-b-2 border-mustard">
                                    FAQs
                                </div>
                                <div className="text-sm mt-4 mb-4 font-normal">
                                    Were you the victim of a crime? Do you need to report a crime? We have a list of frequently asked questions that may help answer your question.
                                </div>
                                <a href="/da/faqs">
                                    <button className="
                                        mt-3 py-px px-4
                                        bg-mustard 
                                        focus:outline-none hover:opacity-90">
                                        <span className="
                                            text-sm font-normal text-white">
                                            Learn More
                                            <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                        </span>
                                    </button>
                                </a>
                                
                            </div>
                        </div>
                            
                            <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                                <div className="bg-cover bg-center rounded-t-sm"
                                    style={{backgroundImage: `url(${court})`, height: '200px'}}>
                                </div>
                                <div className="p-4">
                                    <div className="
                                        w-auto
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Find a Court Case
                                    </div>
                                    <div className="text-sm mt-4 mb-5 font-normal">
                                        Stay up to date with the court calendar. Visit the court website to find a case.
                                    </div>
                                    <a href="https://www.sbcourts.org/os/cal/court-calendars-criminal.php" target="_blank" rel="noreferrer">
                                        <button className="
                                            mt-4 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Find Case
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                                <div className="bg-cover bg-center rounded-t-sm"
                                    style={{backgroundImage: `url(${victim})`, height: '200px'}}>
                                </div>
                                <div className="p-4">
                                    <div className="
                                        w-auto
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Victim Services
                                    </div>
                                    <div className="text-sm mt-4 font-normal">
                                        Our Victim Adovates are available to ensure that crime victims and their family members are kept informed and supported throughout the criminal justice process.
                                    </div>
                                    <a href="/da/victim-witness-unit">
                                        <button className="
                                            mt-4 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Learn More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-row text-blue-primary">
                        <div className="flex flex-col md:flex-row justify-around pt-2 pb-5 px-5 w-100 font-display text-blue-primary" style={{backgroundColor: 'rgba(116,149,203,0.15)'}}>
                        <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                                <div className="bg-cover bg-center rounded-t-sm"
                                    style={{backgroundImage: `url(${diversion})`, height: '200px'}}>
                                </div>
                                <div className="p-4">
                                    <div className="
                                        w-auto
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Diversion Programs
                                    </div>
                                    <div className="text-sm mt-4 mb-4 font-normal">
                                        Learn about how your DA's Office diverts cases away from criminal prosecution.
                                    </div>
                                    <a href="/da/diversion-program">
                                        <button className="
                                            mt-5 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Learn More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                        <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                                <div className="bg-cover bg-center rounded-t-sm"
                                    style={{backgroundImage: `url(${graph})`, height: '200px'}}>
                                </div>
                                <div className="p-4">
                                    <div className="
                                        w-auto
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Statistics/Data Dashboard
                                    </div>
                                    <div className="text-sm mt-4 font-normal">
                                        Interact with data dashboards to see how many cases are referred to your DA, how quickly cases move through the criminal justice system, how cases end and more!
                                    </div>
                                    <a href="/da/stats">
                                        <button className="
                                            mt-4 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                    Go To Dashboards
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm bg-white">
                                <div className="bg-cover bg-center rounded-t-sm"
                                    style={{backgroundImage: `url(${scales})`, height: '200px'}}>
                                </div>
                                <div className="p-4">
                                    <div className="
                                        w-auto
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Employment Opportunites
                                    </div>
                                    <div className="text-sm mt-4 mb-5 font-normal">
                                        Interested in a career with the District Attorney's Office? View our list of careers.
                                    </div>
                                    <a href="/da/careers">
                                        <button className="
                                            mt-4 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Learn More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* Third Section */}
                    <div className="flex flex-row text-blue-primary">
                        <div className="flex flex-col md:flex-row justify-around py-5 px-5 w-100 font-display text-blue-primary">
                            <div className="relative flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm mr-2" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                <div className="p-4 mb-5">
                                    <div className="
                                        w-max
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Press Releases
                                    </div>
                                    <div className="text-sm mt-4">
                                        {
                                            pressData.map((release) => {
                                                return (
                                                    <a href={release.link} className="flex mb-3">
                                                        <ChevronRight size={12} className="mr-2 mt-0.5 font-bold text-mustard"/>
                                                        {release.title}
                                                    </a>
                                                );
                                            })
                                        }
                                        
                                    </div>
                                </div>
                                <a href="/da/press" className="absolute bottom-4 left-4">
                                        <button className="
                                            mt-3 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Read More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                            </div>
                            <div className="relative flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm mr-2" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                <div className="p-4 mb-5">
                                    <div className="
                                        w-max
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        In The News
                                    </div>
                                    <div className="text-sm mt-4">
                                        {
                                            newsData.map((news) => {
                                                return (
                                                    <div className="flex flex-row mb-3">
                                                        <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                                        <a href={news.link}>
                                                            {news.title}
                                                        </a>
                                                    </div>
                                                );
                                            })
                                        }
                                        
                                    </div>
                                    
                                </div>
                                <a href="/da/press" className="absolute bottom-4 left-4">
                                        <button className="
                                            mt-3 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Read More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                            </div>
                            <div className="relative flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm mr-2" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                <div className="p-4 mb-5">
                                    <div className="
                                        w-max
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Forms
                                    </div>
                                    <div className="text-sm mt-4">
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="/documents/Discovery.pdf">
                                                Request For Discovery
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="/documents/WorkersCompensationBrochure.pdf">
                                                Worker's Compensation Insurance
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="/documents/APPLICATIONFORCONVICTIONREVIEW.pdf">
                                                Application for Conviction Review
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="http://www.ic3.gov/complaint/default.aspx">
                                                FBI Internet Crime Complaint Center
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/da/publications" className="absolute bottom-4 left-4">
                                        <button className="
                                            mt-3 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Learn More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative flex flex-col w-full sm:w-9/12 md:w-3/12 self-center md:self-auto mt-4 md:mt-0 rounded-sm shadow-sm mr-2" style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                                <div className="p-4 mb-5">
                                    <div className="
                                        w-max
                                        font-bold text-base font-display 
                                        border-b-2 border-mustard">
                                        Scam Alerts
                                    </div>
                                    <div className="text-sm mt-4">
                                    
                                    <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="https://www.edhat.com/news/new-scam-attempts-to-defraud-delivery-drivers">
                                                New Scam Attempts to Defraud Delivery Drivers
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="https://keyt.com/news/safety/2021/02/04/tipline-protect-yourself-and-loved-ones-from-romance-scams-and-money-mules/">
                                                Tipline Investigation: Protect yourself from and loved ones from Romance Scams and Money Mules
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="https://www.noozhawk.com/article/joyce_dudley_vicki_johnson_protecting_vulnerable_from_scammers_20210124">
                                                Joyce Dudley and Vicki Johnson: Protecting the vulnerable from pandemic scammers
                                            </a>
                                        </div>
                                        <div className="flex flex-row mb-3">
                                            <ChevronRight size={12} className="mr-2 font-bold text-mustard"/>
                                            <a href="https://www.irs.gov/newsroom/dirty-dozen">
                                                The Dirty Dozen represents the worst of the tax scams
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/da/consumer-tips" className="absolute bottom-4 left-4">
                                        <button className="
                                            mt-3 py-px px-4
                                            bg-mustard 
                                            focus:outline-none hover:opacity-90">
                                            <span className="
                                                text-sm font-normal text-white">
                                                Learn More
                                                <ChevronRight size={12} className="ml-2 mb-1 font-extrabold text-white inline" />
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Section */}
                    <div className="flex flex-row text-white mt-3">
                    <div className="flex flex-row p-5 w-full bg-blue-primary font-light font-display">
                        <p className="mr-2 cursor-pointer"><a href="/da/meet-your-da">Office</a></p>
                        <p className="mr-2 cursor-pointer"><a href="/da/criminal-complaints">Prosecution</a></p>
                        <p className="mr-2 cursor-pointer"><a href="/da/prosecution-support">Investigations</a></p>
                        <p className="mr-2 cursor-pointer"><a href="/da/victim-witness-unit">Victim Services</a></p>
                        <p className="mr-2 cursor-pointer"><a href="/da/faqs">FAQs</a></p>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    
}

export default Home;