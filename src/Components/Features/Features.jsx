import React from 'react'
import './Features.css'

// FEATURES DATA WITH PROPS
const featuresData = [
  {
    id: 1,
    icon: '✈️',
    title: 'Luxury Flights',
    description: 'Travel in style with our premium flight packages. Business and first class options available for every destination.',
  },
  {
    id: 2,
    icon: '🏨',
    title: '5 Star Hotels',
    description: 'Hand picked luxury hotels and resorts around the world. Only the best accommodations for our travelers.',
  },
  {
    id: 3,
    icon: '🗺️',
    title: 'Expert Guides',
    description: 'Our professional local guides will show you hidden gems and authentic experiences in every destination.',
  },
  {
    id: 4,
    icon: '🛡️',
    title: 'Safe Travels',
    description: 'Your safety is our priority. Full travel insurance, 24/7 support and secure payment on all bookings.',
  },
  {
    id: 5,
    icon: '💰',
    title: 'Best Price',
    description: 'We guarantee the best prices on all our packages. Find it cheaper elsewhere and we will match it.',
  },
  {
    id: 6,
    icon: '🎯',
    title: 'Custom Packages',
    description: 'Every traveler is unique. We create personalised travel packages tailored to your exact needs and budget.',
  },
]

const Features = () => {
  return (
    <section className='features' id='features'>

      {/* SECTION HEADER */}
      <div className='features__header'>
        <span className='features__badge'>⭐ Why Choose Us</span>
        <h2 className='features__title'>
          We Make Your Travel
          <span className='features__title--highlight'> Dreams </span>
          Come True
        </h2>
        <p className='features__subtitle'>
          With over 15 years of experience we provide 
          world class travel services that go above 
          and beyond your expectations.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className='features__grid'>
        {featuresData.map((feature) => (
          <div className='features__card' key={feature.id}>

            {/* ICON */}
            <div className='features__card--icon'>
              {feature.icon}
            </div>

            {/* TITLE */}
            <h3 className='features__card--title'>
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className='features__card--description'>
              {feature.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Features