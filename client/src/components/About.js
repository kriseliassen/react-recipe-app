import React from 'react'
import { BsGithub } from 'react-icons/bs'
import '../styles/About.css'

const About = () => {
  return (
    <div className="About__container">
      <h1 className="About__header">About 'What's for dinner?'</h1>
      <p className="About__text">
      Jujubes macaroon liquorice muffin danish cake apple pie. Gingerbread candy canes donut cookie cake cake. Powder ice cream jelly topping wafer fruitcake topping. Pie brownie bonbon muffin sweet toffee chocolate.
      Cotton candy lollipop sweet candy sesame snaps. Apple pie apple pie bear claw caramels cotton candy caramels pudding. Caramels marzipan chupa chups lemon drops wafer gingerbread toffee. Dessert danish ice cream sugar plum gingerbread chocolate bar tiramisu.
      </p>
      <a href="https://spoonacular.com/food-api"  className="About__link--api">Powered by Spoonacular API</a>
      <a href="https://github.com/kriseliassen" className="About__link--github"><BsGithub /></a>
    </div>
  )
}

export default About
