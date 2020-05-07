import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImgMediaCard';
import bg from '../assets/img/aws.jpeg';

const data = [{
    heading: "Card 1",
    content: "Content for Card 1",
    image: bg,
    altText: "Image 1"
}, {
    heading: "Card 2",
    content: "Content for Card 2",
    image: bg,
    altText: "Image 2"
}, {
    heading: "Card 3",
    content: "Content for Card 3",
    image: bg,
    altText: "Image 3"
}];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export default function CardRow() {
    const classes = useStyles();

    function FormRow(props) {
        const {cards} = props;
        return (
            <React.Fragment>
                {
                    cards.map((card) => (
                        <Grid key={card.heading} item xs={12} sm={4}>
                            <ImgMediaCard {...card} />
                        </Grid>
                    ))
                }
            </React.Fragment>
        );
    }

    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={2} alignItems={'center'}>
                        <FormRow cards={data}/>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}
