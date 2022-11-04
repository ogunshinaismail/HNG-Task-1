import React from 'react'
import Footer from '../components/Footer'
import Links from '../components/Links'
import Profile from '../components/Profile'


const Home = () => {
  return (
    <div>
        <div id="container">
            <Profile />
            <Links />
            <Footer />
        </div>
    </div>
  )
}

export default Home