import React from 'react'
import { ZuriLogoD, I4GLogo } from '../assets'

const Footer = () => {
  return (
    <>
        <div id="footer">
            <img src={ZuriLogoD} alt="zuri-logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4GLogo} alt="I4G-logo" />
        </div>
    </>
  )
}

export default Footer