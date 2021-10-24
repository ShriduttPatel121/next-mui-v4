import React from "react";
import { Select, FormControl, InputLabel, MenuItem, Box, Button, Paper, Container, makeStyles } from "@material-ui/core";

import { useRouter } from "next/router";
import { months } from "../../../dummy-data";

const useStyles = makeStyles((theme) => ({
    root1: {
        gap: theme.spacing(2),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2)
    }
}))

function Filter({ findEventHandler, }) {

  const router = useRouter();

  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  const classes = useStyles();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handlerSubmit = () => {
    //router.push();
    findEventHandler(year, month);
  }
  console.log(classes.root1);
  return (
    
    <Paper elevation={5} className={`flex f-m-center ${classes.root1}`} >
      <Box sx={{ minWidth: 320 }} ml={2} >
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select value={year} label="Year" onChange={handleYearChange}>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 320 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select value={month} label="Month" onChange={handleMonthChange}>
            <MenuItem value="1">{months[0]}</MenuItem>
            <MenuItem value="2">{months[1]}</MenuItem>
            <MenuItem value="3">{months[2]}</MenuItem>
            <MenuItem value="4">{months[3]}</MenuItem>
            <MenuItem value="5">{months[4]}</MenuItem>
            <MenuItem value="6">{months[5]}</MenuItem>
            <MenuItem value="7">{months[6]}</MenuItem>
            <MenuItem value="8">{months[7]}</MenuItem>
            <MenuItem value="9">{months[8]}</MenuItem>
            <MenuItem value="10">{months[9]}</MenuItem>
            <MenuItem value="11">{months[10]}</MenuItem>
            <MenuItem value="12">{months[11]}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handlerSubmit} variant="contained" color="primary">
        Filter
      </Button>
    </Paper>
    
  );
}

export default Filter;
