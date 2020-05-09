import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import reports from './accordianData';

function Accordian() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={'accordion-container'}>
            <section className={'accordions'}>
                {
                    reports.map((report, index) => (
                        <div key={report.title} className="accordion fadeInUp"
                             style={{animationDelay: {index}}}>
                            <ExpansionPanel
                                className="panel"
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}>
                                    <Typography variant={'h3'} component={'h1'}
                                                color={'textPrimary'}>
                                        {report.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography variant={'p'}
                                                color={'textSecondary'}
                                                component={'p'}
                                                display={'block'}
                                    >
                                        <Link display={'block'} color={'textSecondary'}>{report.details}</Link>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default Accordian;
