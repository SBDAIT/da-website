import React, { Component, Fragment } from 'react';
import Navbar from '../../UI/Navbar';

import './DAOffice.css';

class Stats extends Component {
    render () {
        return (
            <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="content-wrapper-no-flex font-display text-base " style={{backgroundColor: 'rgba(112,112,112,0.05)'}}>
                            <div className="
                                    align-self-center
                                    font-bold text-xl font-display 
                                    border-b-2 border-mustard w-max">
                                   District Attorney Statistics
                                </div>
                                {/* Cases Referred */}
                                <iframe title="Cases Referred" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiNDkwOWMyMDEtMzY4Yi00Zjk0LWI2MjItYWIyNDZmODRlMjI0IiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                                {/* Decisions after case review*/}
                                <iframe title="Decisions after case review" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiZjMxNzQ4ZjctOWUxOC00OGUyLWE5NzktMTU3NDAyMTIwZGUyIiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                                {/* Person Demographics */}
                                <iframe title="Person Demographics" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiM2I3OWU3NGItMTA5MC00NmZhLTgzZmMtZmYyNjcwZWFjYWIxIiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                                {/* How quickly cases move through the system */}
                                <iframe title="How quickly cases move through the system" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiNjcwNmM4YTctNzk0MS00MzcyLWJiZDItYjE1OGVlMzQzN2E4IiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                                {/* How cases end */}
                                <iframe title="How cases end" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiZDgwYjRhYWYtZWQzNS00ODkxLTkwZmYtNzZlMzVlZTNiYzUxIiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                                {/* Cases that end with a sentence */}
                                <iframe title="Cases that end with a sentence" className="w-full h-screen mt-4" src="https://app.powerbigov.us/view?r=eyJrIjoiNDEwNTg5YjItMTkzYS00ZWE1LWExZGMtNGI3NjhiN2RlMzkyIiwidCI6IjBjNjc2MzA5LTZkYTgtNGQ0ZS05MDI5LWIzMTk4Yjk2YzYzNiJ9" frameborder="0" allowFullScreen="true"></iframe>
                            <p className="mt-4">Note: Statistics are for time frame of 01/01/2019 - 12/31/2020.</p>​
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Stats;