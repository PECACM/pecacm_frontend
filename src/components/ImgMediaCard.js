import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { Button, Typography, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";

const useStyles = makeStyles((theme => ({
    root: {
        maxWidth: 345,
        backgroundColor: 'transparent',
        borderColor: '#888',
        shadow: '#888',
        color: 'textPrimary'
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(3)
    },
})));

export default (props) => {
    const classes = useStyles();
    const {heading, content, image, altText} = props;
    return (
        <Card className={classes.root} variant={"outlined"} elevation={10} raised>
            <CardActionArea>
                {/*<CardMedia*/}
                    {/*component="img"*/}
                    {/*alt={altText}*/}
                    {/*height="140"*/}
                    {/*image={image}*/}
                    {/*variant={"circle"}*/}
                    {/*title={altText}*/}
                {/*/>*/}
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <Avatar variant={"circle"} src={image} alt={altText} className={classes.large}/>
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {heading}
                    </Typography>
                    <Typography variant="body2" color={'textSecondary'} component="p">
                        {content}
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
    );
}
