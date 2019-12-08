import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import EventCard from './components/EventCard'
import './App.css'
import SearchField from "react-search-field";

 

function App () {
  const [photos, setPhotos] = useState(null)
  const [emptyData, setEmpty] = useState(false)

  // const [photos, filterPhotos] = useState(null)
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

  const onChange = (value, e) => {
    
    var filteredData = photos.filter(photo => value && photo.title.includes(value))
    console.log('value', filteredData);
    if(!_.isEmpty(filteredData)) {
      setEmpty(false)
      setPhotos(filteredData)
    } else if (value === '') {
      console.log('>>>>>>>>value', value);
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
          
          
          return res.json()
        })
        .then(data => {
         
          if (data) {
            setEmpty(false)
            setPhotos(data.slice(0, 99))
          }
        })
    } else {
      setEmpty(true)
    }
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
          emptyData ?
          <p>No hay elementos</p>
          :
          !_.isNull(photos) && photos.map(photo => {
            return (
              <EventCard
                key={photo.id}
                id={photo.id}
                photo={photo.thumbnailUrl}
                title={photo.title}
                albumID={photo.albumId}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
