import React, { useEffect, useState } from 'react'
import EventCard from './components/EventCard'
import './App.css'

function App () {
  const [categories, setCategories] = useState(null)
  const token = 'WFW7GL5D3YXHTNOZDN2C&locale'
  useEffect(() => {
    async function getPhotos () {
      try {
        const request = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await request.json()
        if (data) setCategories(data)
      } catch (error) {
        console.log('error message: ', error.message)
      }
    }
    getPhotos()
  }, [])
  console.log('categories >>', categories)
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      }}
    >
      {
        categories && categories.map(photo => {
          return (
            <EventCard
              info={photo}
            />
          )
        })
      }
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

export default App
