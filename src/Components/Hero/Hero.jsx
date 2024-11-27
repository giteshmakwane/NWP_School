import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Learning and Growing</h1>
        <p>The perfect place to for you child to learn</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero