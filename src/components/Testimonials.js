import React from 'react'
import Testimonial from '../style/Testimonial.css'
import test from '../images/test.svg'
import Audio from '../images/Audio.svg'
import photo from '../images/photo.svg'


const Testimonials = () => {
  return (
    <>
        <div className="test_container">
            <div className="card-1">
                <div className="card-body-1">
                    <div className="image-title-container">
                        <img src={test} alt="testimonial"/>
                        <h5 className="card-title">Testimonials</h5>
                    </div>
                    <p className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                    {/* <a href="#" className="btn btn-primary">Attend</a> */}

                </div>
            </div>
            <div className="bottom-images">
              <img className='img1' src={Audio} alt="Image 1" />
              <img className='img2' src={photo} alt="Image 2" />
            </div>
        </div>
    </>
  )
}

export default Testimonials