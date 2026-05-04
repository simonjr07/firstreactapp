import React from 'react'
import './Hero.css'
import heroImg from '../../assets/images/hero.jpg'

const Hero = () => {
    return (
        <section
            className='hero'
            id='home'
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            {/* <div className='hero__overlay'></div> */}
            <div className='hero__content'>
                <div className='hero__badge'>
                    ✈️ World Class Travel Experience
                </div>
                <h1 className='hero__title'>
                    Discover Your
                    <span className='hero__title--highlight'> Dream </span>
                    Destination
                </h1>
                <p className='hero__subtitle'>
                    Explore the worlds most breathtaking destinations
                    with Luxe Travels. Premium packages, unforgettable
                    experiences, luxury at every step.
                </p>
                <div className='hero__buttons'>
                    <button className='hero__btn hero__btn--primary'>
                        Explore Destinations
                    </button>
                    <button className='hero__btn hero__btn--secondary'>
                        Watch Video ▶
                    </button>
                </div>
                <div className='hero__stats'>
                    <div className='hero__stat'>
                        <h3>50+</h3>
                        <p>Destinations</p>
                    </div>
                    <div className='hero__stat'>
                        <h3>10K+</h3>
                        <p>Happy Travelers</p>
                    </div>
                    <div className='hero__stat'>
                        <h3>15+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className='hero__stat'>
                        <h3>4.9⭐</h3>
                        <p>Star Rating</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero