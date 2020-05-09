import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {reports} from './accordianData';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme => ({
    root: {
        backgroundColor: 'transparent',
        color: 'textPrimary',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(3),
    },
})));

function Accordian() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();
    return (
        <div className={'accordion-container'}>
            <section className={'accordions'}>
                {
                    reports.map((report, index) => (
                        <div key={report.title} className="accordion fadeInUp"
                             style={{animationDelay: '0.7s'}}>
                            <ExpansionPanel
                                className={`panel ${classes.root}`}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}>
                                    <Typography variant={'h4'} component={'h2'}
                                                color={'textPrimary'}>
                                        {report.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography variant={'body2'}
                                                color={'textSecondary'}
                                                component={'p'}
                                                display={'block'}
                                    >
                                        <Link display={'block'}
                                              color={'textSecondary'}>{report.details}</Link>
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
