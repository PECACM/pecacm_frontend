import React from 'react';
import Accordian from '../AccordianComponent';
import {Helmet} from 'react-helmet';
import Footer from '../Footer';
import AchievementsShowcase from '../AchievementsShowcase';
import _ from 'lodash';
import {achievements} from '../accordianData';
import Typography from '@material-ui/core/Typography';

export default function Achievements() {
    return (
        <div className="Achievements">
            <Helmet>
                <title>PEC ACM Society - Achievements</title>
                <meta name="title" content="Computer Science Society"/>
            </Helmet>
            <Typography variant={'subtitle1'} component={'h1'}
                        className="fadeInUp"
                        style={{animationDelay: '0.7s'}}>
                Annual Reports
            </Typography>
            <Accordian/>
            <Typography variant={'subtitle1'} component={'h1'}
                        className="fadeInUp"
                        style={{animationDelay: '0.7s'}}>
                Achievements & Awards
            </Typography>
            {
                _.chunk(achievements, 3).map((chunk, index) => (
                    <div key={index + chunk[0].title}>
                        <AchievementsShowcase cardData={chunk}/>
                    </div>
                ))
            }
            <Footer/>
        </div>
    );
}
