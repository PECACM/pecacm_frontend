import React from 'react'
import Accordian from "../AccordianComponent";
import {Helmet} from 'react-helmet';
import Footer from '../Footer';

export default function Achievements() {
    return (
        <React.Fragment>
            <div className="Home">
                <Helmet>
                    <title>PEC ACM Society</title>
                    <meta name="title" content="Computer Science Society"/>
                </Helmet>
                <Accordian/>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
