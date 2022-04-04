import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../UI/Navbar';
import news from '../../../data/news';


function Press() {

    const [pressData, setPressData] = useState([]);

        

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/press-data copy.json')
        .then((res) => res.json())
        .then((data) => {
            setPressData(data)
    })
    }, [])

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
                            Press Releases
                            </div>
                        <ul className="mt-4 press-releases">
                        {
                            pressData.map((release) => {
                                return (
                                    <li>{release.date} <a href={release.link}>{release.title}</a></li>
                                );
                            })
                        }
                        
                        </ul>
                        </div>
                        <div className="secondary-content">
                        <div className="
                                align-self-center
                                font-bold text-xl font-display 
                                border-b-2 border-mustard w-max">
                            Videos/In The News
                            </div>
                            <p>&nbsp;</p>
                            {
                                news.map((release) => {
                                    return (
                                        <p class="style3 shadow-sm text-sm p-4 mt-3">
                                            <a href={release.link} class="bottompara">
                                                {release.title}
                                            </a>
                                        </p>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

        </Fragment>
    )
    
}

export default Press;