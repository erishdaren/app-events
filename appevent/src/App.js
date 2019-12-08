import React from 'react';
import './App.css';
import EventCard from './components/EventCard'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      }}
    >
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  )
}

export default App;
