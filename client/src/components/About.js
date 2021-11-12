import React from 'react'
import { BsGithub } from 'react-icons/bs'
import '../styles/About.css'

const About = () => {
  return (
    <div className="About__container">
      <h1 className="About__header">About 'What's for dinner?'</h1>
      <p className="About__text">
        Setting the scene: You're heading home from work, tired and hungry. You want to cook something for dinner, but you don't want to make too many decisions. Open up your "What's for dinner?" and either enter a keyword for what you're in the mood for or choose one of the suggested keywords. Maybe you're so hungry you'll eat any dinner? There's a button for that. Or maybe you prefer breakfast foods, even for dinner? There's a button for that as well. <br/>Either way, you'll get three suggested recipes based on your input. Not too many, so it won't overwhelm you or make it hard to decide, but enough to give you a choice. None of the suggested recipes sound good? Try another keyword! Once you find recipes you like, click the heart and store them for next time you're wondering What's for dinner.
      </p>
      <a href="https://spoonacular.com/food-api"  className="About__link--api">Powered by Spoonacular API</a>
      <a href="https://github.com/kriseliassen" className="About__link--github"><BsGithub /></a>
    </div>
  )
}

export default About
