import React from 'react'
import './Testimonials.css'

// TESTIMONIALS DATA WITH PROPS
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: '👩',
    rating: 5,
    review: 'Luxe Travels made our honeymoon in Bali absolutely perfect. Every detail was taken care of. The hotel was stunning and our guide was amazing. Will definitely book again!',
    destination: 'Bali, Indonesia',
  },
  {
    id: 2,
    name: 'James Williams',
    location: 'London, UK',
    avatar: '👨',
    rating: 5,
    review: 'Our Paris trip was a dream come true. From the moment we landed everything was seamless. The restaurant recommendations alone were worth every penny!',
    destination: 'Paris, France',
  },
  {
    id: 3,
    name: 'Aisha Mohammed',
    location: 'Dubai, UAE',
    avatar: '👩',
    rating: 5,
    review: 'The Maldives package was beyond our expectations. The overwater bungalow was breathtaking and the staff at Luxe Travels were so helpful throughout the whole trip.',
    destination: 'Maldives',
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    location: 'Madrid, Spain',
    avatar: '👨',
    rating: 4,
    review: 'Swiss Alps was incredible! The skiing package was well organized and affordable. Luxe Travels really knows how to create memorable experiences for families.',
    destination: 'Swiss Alps',
  },
  {
    id: 5,
    name: 'Emily Chen',
    location: 'Toronto, Canada',
    avatar: '👩',
    rating: 5,
    review: 'Rome was magical! The guided tours were so informative and the hotel location was perfect. I felt like a true Roman for a week. Thank you Luxe Travels!',
    destination: 'Rome, Italy',
  },
  {
    id: 6,
    name: 'David Okafor',
    location: 'Lagos, Nigeria',
    avatar: '👨',
    rating: 5,
    review: 'New York was everything I imagined and more. The Luxe Travels team arranged everything perfectly. Broadway show tickets, Central Park tour and amazing food!',
    destination: 'New York, USA',
  },
]

const Testimonials = () => {
  return (
    <section className='testimonials' id='testimonials'>

      {/* SECTION HEADER */}
      <div className='testimonials__header'>
        <span className='testimonials__badge'>💬 Testimonials</span>
        <h2 className='testimonials__title'>
          What Our
          <span className='testimonials__title--highlight'> Travelers </span>
          Say About Us
        </h2>
        <p className='testimonials__subtitle'>
          Real reviews from real travelers who have 
          experienced the Luxe Travels difference firsthand.
        </p>
      </div>

      {/* TESTIMONIALS GRID */}
      <div className='testimonials__grid'>
        {testimonialsData.map((testimonial) => (
          <div className='testimonials__card' key={testimonial.id}>

            {/* TOP ROW - AVATAR AND INFO */}
            <div className='testimonials__card--top'>
              <div className='testimonials__card--avatar'>
                {testimonial.avatar}
              </div>
              <div className='testimonials__card--info'>
                <h4 className='testimonials__card--name'>
                  {testimonial.name}
                </h4>
                <p className='testimonials__card--location'>
                  📍 {testimonial.location}
                </p>
              </div>
            </div>

            {/* STAR RATING */}
            <div className='testimonials__card--stars'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className='star'>⭐</span>
              ))}
            </div>

            {/* REVIEW TEXT */}
            <p className='testimonials__card--review'>
              "{testimonial.review}"
            </p>

            {/* DESTINATION TAG */}
            <div className='testimonials__card--destination'>
              ✈️ Traveled to: {testimonial.destination}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials