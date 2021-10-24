import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import { CalendarToday, ArrowRightAlt, LocationOn } from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    root: {
        minWidth: 345,
        marginTop: theme.spacing(4)
    },
    btn: {
      display: "flex",
      gap: theme.spacing(1),
    },
  };
});

const EventItem = ({ image, title, date, location, id }) => {
  const indianDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const classes = useStyles();
  console.log(image);
  const formateAddress = location?.replace(", ", "\n");
  return (
    <Card className={classes.root} style={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={`/${image}`}
          height="150"
          alt="evant image"
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            alignItems="center"
            component="div"
            display="flex"
            gap={2}
          >
            <CalendarToday /> {indianDate}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            alignItems="center"
            component="div"
            display="flex"
            gap={2}
          >
            <LocationOn /> {formateAddress}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/events/${id}`}>
          <Box>
            <Button className={classes.btn}>
              Explore Event
              <ArrowRightAlt />
            </Button>
          </Box>
        </Link>
      </CardActions>
    </Card>
  );
};

export default EventItem;
