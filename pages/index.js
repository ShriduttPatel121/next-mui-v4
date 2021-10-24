import Link from 'next/link';
import { getAllEvents } from '../dummy-data';
import EventList from '../components/events/eventList';
import { Container } from '@material-ui/core';
import Filter from '../components/common/Filter/Filter';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const featuredEvents = getAllEvents();
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (
      <Container maxWidth="xl" style={{marginTop: '2rem'}}>
        <Filter findEventHandler={findEventHandler} />
        <EventList items={featuredEvents} />
      </Container>
  )
}
