import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import EventCard from './components/EventCard'
import './App.css'

function App () {
  const [photos, setPhotos] = useState(null)
  useEffect(() => {
    async function getPhotos () {
      try {
        const request = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await request.json()
        console.log(data[0])
        if (data) setPhotos(data.slice(0, 99))
      } catch (error) {
        console.log('error message: ', error.message)
      }
    }
    getPhotos()
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      }}
    >
      {
        !_.isNull(photos) && photos.map(photo => {
          return (
            <EventCard
              key={photo.id}
              id={photo.id}
              albumID={photo.albumId}
              photo={photo.thumbnailUrl}
              title={photo.title}
            />
          )
        })
      }
    </div>
  )
}

export default App
