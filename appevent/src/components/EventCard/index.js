import React from 'react'

const EventCard = props => {
  return (
    <div
      className={`card animated ${props.id % 2 === 0 ? 'fadeInUp' : 'rollIn'}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#D8D8D8',
        width: 300,
        height: '100%',
        boxSizing: 'border-box',
        margin: 10
      }}
    >
      <div
        style={{
          flex: 1
        }}
      >
        <img src={props.photo} alt='placeholder' />
        <img src={props.photo} alt='placeholder' />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: 15
        }}
      >
        <p
          style={{
            alignSelf: 'flex-start',
            paddingBottom: 5
          }}
        >
          #id{props.id} <br />
          albumID{props.albumID}
        </p>
        <h4
          style={{
            textAlign: 'left',
            paddingBottom: 5
          }}
        >
          {props.title}
        </h4>
      </div>
    </div>
  )
}

export default EventCard
