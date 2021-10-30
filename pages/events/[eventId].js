import React from "react";
import { makeStyles, Typography, Paper, Avatar, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { grey } from "@material-ui/core/colors";
import { CalendarToday, LocationOn } from "@material-ui/icons";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    headerBox: {
      backgroundColor: theme.palette.primary.dark,
      height: theme.spacing(45),
      overflow: "visible",
      '& h2': {
        textAlign: 'center',
        color: "white",
        margin: theme.spacing(2, "auto")
      }
    },
    bodyBox: {
      backgroundColor: theme.palette.primary.light,
      flexGrow: 1,
    },
    eventCard: {
      backgroundColor: grey["50"],
      //height: theme.spacing(10),
      padding: theme.spacing(5),
      display: "flex",
      justifyContent: "space-between",
      margin: theme.spacing(0, "auto"),
      
      width: "80%",
    },
    eventDescription: {
        margin: 'auto',
        marginTop: theme.spacing(4),
        width: "80%",
        textAlign: 'center',
        position: 'relative',
        color: 'white'
    }
  };
});

const EventDetailsPage = ({ event }) => {
  const classes = useStyles();
  //const event = getEventById(router.query.eventId);

  const formatedDate = new Date(event.date).toLocaleDateString('en-IN', {
    day: "numeric",
    month: "long",
    year: "numeric"
});

  if (!event) {
    return <Alert severity="error"> No event found </Alert>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.headerBox}>
        <div style={{transform:"translateY(15%)"}}>
        <Typography variant="h2"  mt={10} mb={1}>
          {event.title}
        </Typography>
        <Paper className={classes.eventCard} elevation={5}>
          <Box className={`flex f-column f-m-center f-c-center`} width="30%">
            <Avatar src={`/${event.image}`} style={{ width: 176, height: 176, border: `4px solid ${grey["600"]}` }} />
          </Box>
          <Box
            className={`flex f-column`}
            justifyContent=""
            flex="1"
            gap={4}
            ml={2}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <CalendarToday />
              <Typography gutterBottom variant="h4">{formatedDate}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <LocationOn />
              <Typography variant="h4">{event.location}</Typography>
            </Box>
          </Box>
        </Paper>
        <div className={classes.eventDescription}>
            <Typography variant="h5" >
                {event.description}
            </Typography>
        </div>
        </div>
      </div>
      <div className={classes.bodyBox}>
          <div>

          </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

export async function getStaticProps(context) {
  const { params } = context;
  const event = await getEventById(params.eventId);
  return {
    props: {
      event
    }
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paramAry = events.map(e => ({ params: { eventId: e.id }}));
  return {
    paths: paramAry,
    fallback: 'blocking'
  }
}