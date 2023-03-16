import React from 'react'
import "./crowsel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Crowsel = () => {

    const images = [
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    return (
        <div className='crowselContainer'>
           
            {images.map((img,i)=>(
                <div className="crowselImg">
                    <img src={img} alt="" />
                </div>
            ))}
            <div className="leftBtn">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="rightBtn">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default Crowsel