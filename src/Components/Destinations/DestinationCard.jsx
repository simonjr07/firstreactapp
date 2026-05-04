import React from 'react'

const DestinationCard = (props) => {

  const {
    image,
    country,
    name,
    description,
    price,
    duration,
    rating
  } = props

  // IF NO NAME DONT RENDER CARD AT ALL
  if (!name) return null

  return (
    <div className='destination__card'>

      {/* CARD IMAGE */}
      <div className='destination__card--imgWrapper'>
        <img
          src={image}
          alt={name}
          className='destination__card--img'
        />
        {/* RATING BADGE */}
        <span className='destination__card--rating'>
          ⭐ {rating}
        </span>
      </div>

      {/* CARD BODY */}
      <div className='destination__card--body'>

        {/* COUNTRY */}
        <span className='destination__card--country'>
          {country}
        </span>

        {/* NAME */}
        <h3 className='destination__card--name'>
          {name}
        </h3>

        {/* DESCRIPTION */}
        <p className='destination__card--description'>
          {description}
        </p>

        {/* FOOTER */}
        <div className='destination__card--footer'>

          {/* PRICE */}
          <div className='destination__card--price'>
            <span className='price__label'>From</span>
            <span className='price__amount'>{price}</span>
          </div>

          {/* DURATION */}
          <div className='destination__card--duration'>
            🕐 {duration}
          </div>

          {/* BUTTON */}
          <button className='destination__card--btn'>
            Book Now
          </button>

        </div>
      </div>
    </div>
  )
}

export default DestinationCard