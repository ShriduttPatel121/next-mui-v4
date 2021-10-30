import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { months } from '../../dummy-data';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/eventList';
import { Container } from '@material-ui/core';

const FilteredEventsPage = ({ hasError = false, events, month }) => {
    const router = useRouter();

    // const filter = router.query.slug;
    // console.log(filter);
    // if (!filter) {
    //     return <Alert severity="info">Loading...</Alert>
    // }

    // const year = +filter[0];
    // const month = +filter[1];

    // if(isNaN(year) || isNaN(month)) {
    //     return <Alert severity="error">Wrong filter parameters</Alert>
    // }

    if (hasError) {
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

export default FilteredEventsPage;

export async function getServerSideProps(context) {
    
    const { params } = context;

    const filter = params.slug;
    const year = +filter[0];
    const month = +filter[1];

    const filterdEvents = await getFilteredEvents({ year, month });
    if(isNaN(year) || isNaN(month)) {
        return {
            notFound: true,
            props: {
                hasError: true
            }
        }
    }
    return {
        props: {
            events: filterdEvents,
            month
        }
    }
}