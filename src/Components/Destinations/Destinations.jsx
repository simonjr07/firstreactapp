import React from 'react'
import './Destinations.css'
import DestinationCard from './DestinationCard'

// IMPORT ALL IMAGES
import baliImg from '../../assets/images/bali.jpg'
import parisImg from '../../assets/images/paris.jpg'
import maldivesImg from '../../assets/images/maldives.jpg'
import swissImg from '../../assets/images/swiss.jpg'
import newyorkImg from '../../assets/images/newyork.jpg'
import romeImg from '../../assets/images/rome.jpg'

// DESTINATIONS DATA
const destinationsData = [
    {
        id: 1,
        image: baliImg,
        country: '🇮🇩 Indonesia',
        name: 'Bali',
        description: 'Experience the magic of temples, rice terraces and stunning beaches in the Island of Gods.',
        price: '$1,299',
        duration: '7 Days',
        rating: '4.9',
    },
    {
        id: 2,
        image: parisImg,
        country: '🇫🇷 France',
        name: 'Paris',
        description: 'The city of love awaits with the Eiffel Tower, world class cuisine and art museums.',
        price: '$1,599',
        duration: '6 Days',
        rating: '4.8',
    },
    {
        id: 3,
        image: maldivesImg,
        country: '🇲🇻 Maldives',
        name: 'Maldives',
        description: 'Crystal clear waters, overwater bungalows and pristine white sandy beaches paradise.',
        price: '$2,499',
        duration: '8 Days',
        rating: '5.0',
    },
    {
        id: 4,
        image: swissImg,
        country: '🇨🇭 Switzerland',
        name: 'Swiss Alps',
        description: 'Breathtaking mountain scenery, charming villages and world famous skiing adventures.',
        price: '$1,899',
        duration: '7 Days',
        rating: '4.9',
    },
    {
        id: 5,
        image: newyorkImg,
        country: '🇺🇸 USA',
        name: 'New York',
        description: 'The city that never sleeps. Times Square, Central Park and iconic skyline views.',
        price: '$1,199',
        duration: '5 Days',
        rating: '4.7',
    },
    {
        id: 6,
        image: romeImg,
        country: '🇮🇹 Italy',
        name: 'Rome',
        description: 'Walk through history with the Colosseum, Vatican City and authentic Italian cuisine.',
        price: '$1,399',
        duration: '6 Days',
        rating: '4.8',
    },
]

const Destinations = () => {
    return (
        <section className='destinations' id='destinations'>

            {/* SECTION HEADER */}
            <div className='destinations__header'>
                <span className='destinations__badge'>🌍 Top Destinations</span>
                <h2 className='destinations__title'>
                    Explore Our Most Popular
                    <span className='destinations__title--highlight'> Destinations</span>
                </h2>
                <p className='destinations__subtitle'>
                    Hand picked destinations offering luxury experiences,
                    rich culture and memories that last a lifetime.
                </p>
            </div>

            {/* DESTINATION CARDS GRID */}
            <div className='destinations__grid'>
                {destinationsData.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        image={destination.image}
                        country={destination.country}
                        name={destination.name}
                        description={destination.description}
                        price={destination.price}
                        duration={destination.duration}
                        rating={destination.rating}
                    />
                ))}
            </div>

        </section>
    )
}

export default Destinations