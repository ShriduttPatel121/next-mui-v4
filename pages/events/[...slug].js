import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { getFilteredEvents, months } from '../../dummy-data';
import EventList from '../../components/events/eventList';
import { Container } from '@material-ui/core';

const FilteredEventsPage = props => {
    const router = useRouter();

    const filter = router.query.slug;
    console.log(filter);
    if (!filter) {
        return <Alert severity="info">Loading...</Alert>
    }

    const year = +filter[0];
    const month = +filter[1];

    if(isNaN(year) || isNaN(month)) {
        return <Alert severity="error">Wrong filter parameters</Alert>
    }

    const events = getFilteredEvents({
        year, month
    })

    if (!events || events.length === 0) {
        return <Alert severity="error">No events found</Alert>
    }
    return (
        <Container maxWidth="xl" style={{marginTop: '2rem'}}>
            <Button style={{margin: "auto"}} onClick={() => router.back()}>Go Back</Button>
            <Typography variant="h3" align="center">
                Events in {months[month - 1]}
            </Typography>
            <EventList items={events} />
        </Container>
    );
};

FilteredEventsPage.propTypes = {
    
};

export default FilteredEventsPage;