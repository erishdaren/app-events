import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import SearchField from "react-search-field";
import EventCard from './components/EventCard'
import './App.css'

 const onChange = (e) => {
    console.log(e);
  }

function App () {
  const [categories, setCategories] = useState(null)
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

 
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      }}
    >
      <SearchField
        placeholder="Search..."
        onChange={onChange}
        searchText="This is initial search text"
        classNames="test-class"
      />
      {/* {
        categories && categories.map(photo => {
          return (
            <EventCard
              info={photo}
            />
          )
        })
      } */}
    </div>
  )
}

export default App
