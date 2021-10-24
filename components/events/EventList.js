import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import EventItem from './EventItem';

const useStyles = makeStyles(theme => ({
    mt: {
        marginTop: theme.spacing(2)
    }
}))

const EventList = ({ items }) => {
    const classes = useStyles()
    return (
        <Grid alignItems={"center"} container flexWrap="wrap"  justifyContent={"space-around"}>
            {
                items.map(i => (
                    <Grid item key={i.id} className={classes.mt} >
                        <EventItem id={i.id} title={i.title} location={i.location} date={i.date} image={i.image} />
                    </Grid>
                ))
            } 
        </Grid>
    );
};

export default EventList;