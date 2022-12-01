import './Card.css'
import React from 'react'

function Card(props) {
    const source = require(`${props.imageUrl}`)
  return (
    <div className='card'>
        <img className='location-image' src={source} alt={'showing the location'} />
        <div className='location-details'>
            <div className='map-info'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p className='location-name'>{props.location}</p>
                <a href={props.googleMapsUrl} target={'_blank'} className='google-info'>View on Google Maps</a>
            </div>
            <h1 className='location-title'>{props.title}</h1>
            <p className='dates'>{props.startDate} - {props.endDate}</p>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card


// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg