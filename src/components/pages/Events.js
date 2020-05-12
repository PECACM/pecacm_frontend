import React from 'react';
import Calendar from '../Calendar';
import {Helmet} from 'react-helmet';

export default function Events() {
    return (
        <div className="Events">
            <Helmet>
                <title>PEC ACM Society - Events</title>
                <meta name="title" content="Computer Science Society"/>
            </Helmet>
            <Calendar/>
        </div>
    );
}
