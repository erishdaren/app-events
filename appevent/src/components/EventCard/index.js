import React from 'react'

const EventCard = props => {
  return (
    <div
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
        <img src='https://via.placeholder.com/300x150' alt='placeholder' />
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
          mañana a las 9:00
        </p>
        <h4
          style={{
            textAlign: 'left',
            paddingBottom: 5
          }}
        >
          Re-valorizate "Encuentro Juvenil Catolico"
        </h4>
        <p
          style={{
            alignSelf: 'flex-start'
          }}
        >
          Poliforum Zammá, Mérida, YUC
        </p>
      </div>
    </div>
  )
}

export default EventCard
