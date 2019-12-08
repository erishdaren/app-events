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
        <img src={props.info.thumbnailUrl} alt='placeholder' />
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
          {/* #{props.info.id} */}
        </p>
        <h4
          style={{
            textAlign: 'left',
            paddingBottom: 5
          }}
        >
          {/* {props.info.title} */}
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
