import Link from 'next/link';
import { getAllEvents } from '../helpers/api-util'; 
import EventList from '../components/events/eventList';
import { Container } from '@material-ui/core';
import Filter from '../components/common/Filter/Filter';
import { useRouter } from 'next/router';

export default function Home({ events }) {

  const router = useRouter();
  
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (
      <Container maxWidth="xl" style={{marginTop: '2rem'}}>
        <Filter findEventHandler={findEventHandler} />
        <EventList items={events} />
      </Container>
  )
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents
    },
    revalidate: 1800 //seconds
  }
}
