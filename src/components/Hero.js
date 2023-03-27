import React from "react"
import image from '../images/grid.png'

function Hero() {
    return(
    <section className="hero">
        <img className="hero--photo" src={image} alt='grid'/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join the unique interactive activities led by one-of-a-kind host-all without leaving home</p>
    </section>
  )
}
export default Hero;
