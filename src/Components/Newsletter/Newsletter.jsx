import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email) {
      setSubmitted(true)
    }
  }

  return (
    <section className='newsletter' id='newsletter'>

      {/* LEFT SIDE CONTENT */}
      <div className='newsletter__left'>

        <span className='newsletter__badge'>📧 Newsletter</span>

        <h2 className='newsletter__title'>
          Get Exclusive
          <span className='newsletter__title--highlight'> Travel Deals </span>
          Straight To Your Inbox
        </h2>

        <p className='newsletter__subtitle'>
          Subscribe to our newsletter and be the first to 
          receive exclusive travel deals, destination guides 
          and luxury package offers every week.
        </p>

        {/* BENEFITS LIST */}
        <div className='newsletter__benefits'>
          <div className='newsletter__benefit'>
            <span className='newsletter__benefit--icon'>✅</span>
            <span>Exclusive deals up to 40% off</span>
          </div>
          <div className='newsletter__benefit'>
            <span className='newsletter__benefit--icon'>✅</span>
            <span>Weekly destination guides</span>
          </div>
          <div className='newsletter__benefit'>
            <span className='newsletter__benefit--icon'>✅</span>
            <span>Early access to new packages</span>
          </div>
          <div className='newsletter__benefit'>
            <span className='newsletter__benefit--icon'>✅</span>
            <span>No spam we promise</span>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <div className='newsletter__right'>

        {submitted ? (
          // SUCCESS MESSAGE
          <div className='newsletter__success'>
            <span className='newsletter__success--icon'>🎉</span>
            <h3>You Are Subscribed!</h3>
            <p>
              Thank you for subscribing! Check your 
              inbox for exclusive travel deals.
            </p>
          </div>
        ) : (
          // FORM
          <form 
            className='newsletter__form' 
            onSubmit={handleSubmit}
          >

            <h3 className='newsletter__form--title'>
              Subscribe Now
            </h3>
            <p className='newsletter__form--subtitle'>
              Join 10,000+ happy travelers
            </p>

            {/* NAME INPUT */}
            <div className='newsletter__input--group'>
              <label>Full Name</label>
              <input 
                type='text' 
                placeholder='Enter your full name'
                className='newsletter__input'
              />
            </div>

            {/* EMAIL INPUT */}
            <div className='newsletter__input--group'>
              <label>Email Address</label>
              <input 
                type='email' 
                placeholder='Enter your email address'
                className='newsletter__input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* SELECT INTEREST */}
            <div className='newsletter__input--group'>
              <label>Travel Interest</label>
              <select className='newsletter__input'>
                <option>Select your interest</option>
                <option>Beach & Islands</option>
                <option>Mountain & Adventure</option>
                <option>City & Culture</option>
                <option>Luxury & Spa</option>
                <option>Family Travel</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type='submit' 
              className='newsletter__btn'
            >
              Subscribe Now ✈️
            </button>

            <p className='newsletter__privacy'>
              🔒 Your information is safe with us. 
              No spam ever.
            </p>

          </form>
        )}

      </div>

    </section>
  )
}

export default Newsletter