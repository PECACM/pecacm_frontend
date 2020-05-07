import React from "react";
import {Helmet} from "react-helmet";
import Footer from "../Footer";
import CardRow from "../CardRow";
import Grid from "@material-ui/core/Grid";

export default function Home() {
    return (
        <React.Fragment>
            <div className="Home">
                <Helmet>
                    <title>PEC ACM Society</title>
                    <meta name="title" content="Computer Science Society"/>
                </Helmet>
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                        <CardRow/>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
