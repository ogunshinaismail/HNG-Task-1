import React from 'react'
import { Slack, Github } from '../assets'

const Links = () => {
  return (
    <>
        <div id="links">
            <a href="#">Twitter Link</a>
            <a href="#" id='btn__zuri'>Zuri Team</a>
            <a href="#" id='books'>Zuri Books</a>
            <a href="#" id='book__python'>Python Books</a>
            <a href="#" id='pitch'>Background Check for Coders</a>
            <a href="#" id='book__design'>Design Books</a>

            <div id="icons">
            <img src={Slack} alt="slack-icon" />
            <img src={Github} alt="github-icon" />
            </div>
        </div>
    </>
  )
}

export default Links