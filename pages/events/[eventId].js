import React from "react";
import { makeStyles, Typography, Paper, Avatar, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useRouter } from "next/router";
import { grey } from "@material-ui/core/colors";
import { CalendarToday, LocationOn } from "@material-ui/icons";

import { getEventById } from "../../dummy-data";

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

const EventDetailsPage = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const event = getEventById(router.query.eventId);

  const formatedDate = new Date(event.date).toLocaleDateString('en-IN', {
    day: "numeric",
    month: "long",
    year: "numeric"
});

  if (!event) {
    return <Alert severity="error"> No event found </Alert>;
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.headerBox}>
        <Box style={{transform:"translateY(15%)"}}>
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
        <Box className={classes.eventDescription}>
            <Typography variant="h5" >
                {event.description}
            </Typography>
        </Box>
        </Box>
      </Box>
      <Box className={classes.bodyBox}>
          <Box>

          </Box>
      </Box>
    </Box>
  );
};

EventDetailsPage.propTypes = {};

export default EventDetailsPage;
