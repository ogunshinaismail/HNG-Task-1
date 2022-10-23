import React from 'react'
import { Slack, Github } from '../assets'

const Links = () => {
  return (
    <>
        <div id="links">
            <a href="https://twitter.com/ogunshinaismail" target="_blank" rel="noreferrer" >Twitter Link</a>
            <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id='btn__zuri'>Zuri Team</a>
            <a href="http://books.zuri.team" target="_blank" rel="noreferrer" id='books'>Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Ismail" target="_blank" rel="noreferrer" id='book__python'>Python Books</a>
            <a href=" https://background.zuri.team" target="_blank" rel="noreferrer" id='pitch'>Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id='book__design'>Design Books</a>

            <div id="icons">
              <img src={Slack} alt="slack-icon" />
              <img src={Github} alt="github-icon" />
            </div>
        </div>
    </>
  )
}

export default Links