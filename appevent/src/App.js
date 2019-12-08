import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import EventCard from './components/EventCard'
import './App.css'
import SearchField from "react-search-field";

 

function App () {
  const [photos, setPhotos] = useState(null)
  // const [photos, filterPhotos] = useState(null)
  useEffect(() => {
    async function getPhotos () {
      try {
        const request = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await request.json()
        if (data) setPhotos(data)
      } catch (error) {
        console.log('error message: ', error.message)
      }
    }
    getPhotos()
  }, [])

  const onChange = (value, e) => {
    console.log(value);
    console.log('photo', photos);

    const filteredData = photos.filter(photo => photo.title === value)
    setPhotos(filteredData)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div
      style={{
       flex: 1,
       justifyContent: 'flex-start' 
      }}>
        <SearchField
          placeholder="Search..."
          onChange={onChange}
          searchText=""
          classNames="test-class"
        />
      </div>
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
                photo={photo.thumbnailUrl}
                title={photo.title}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
