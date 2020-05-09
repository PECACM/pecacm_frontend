import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme => ({
    root: {
        maxWidth: 300,
        backgroundColor: 'transparent',
        color: 'textPrimary',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(3),
    },
})));

function AchievementsShowcase(props) {
    const classes = useStyles();
    const {cardData} = props;
    return (
        <div className="cards-container">
            <section className="cards">
                {cardData.map(card => (
                        <div key={card.title} className="card fadeInUp"
                             style={{animationDelay: '0.7s'}}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={card.altText}
                                            height="140"
                                            image={card.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary"
                                                        component="p">
                                                {card.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </div>
                    ),
                )}
            </section>
        </div>
    );
}

export default AchievementsShowcase;