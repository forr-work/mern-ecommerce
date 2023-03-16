import React from 'react'
import "./home.css"
import Navbar from '../../component/navbar/Navbar'
import Crowsel from "../../component/HomeCrowsel/Crowsel"
const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
         <Crowsel/>
        </div>
    )
}

export default Home