import React from 'react'
import Service from  '../style/Service.css'
import groups_black_24dp from '../images/groups_black_24dp.svg'
import location_on_black_24dp from '../images/location_on_black_24dp.svg'
import shopping_basket_black_24dp from '../images/shopping_basket_black_24dp.svg'
import event_available_black_24dp from '../images/event_available_black_24dp.svg'
import Add from '../images/Add.svg'

const Services = () => {
  return (
    <>
        <div className="card-container">
        <div className="card">
            <div className="card-body">
                <div className="image-title-container">
                    <img src={groups_black_24dp} alt="People Image"/>
                    <h5 className="card-title">People</h5>
                </div>
                <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
                <a href="#" className="btn btn-primary">Connect</a>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <div className="image-title-container">
                    <img src={location_on_black_24dp} alt="Place Image"/>
                    <h5 className="card-title">Place</h5>
                </div>
                <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                <a href="#" className="btn btn-primary">Meet up</a>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <div className="image-title-container">
                    <img src={shopping_basket_black_24dp} alt="Product Image"/>
                    <h5 className="card-title">Product</h5>
                </div>
                <p className="card-text">Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
                <a href="#" className="btn btn-primary">Get it</a>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <div className="image-title-container">
                    <img src={event_available_black_24dp} alt="Program Image"/>
                    <h5 className="card-title">Program</h5>
                </div>
                <p className="card-text">Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                <a href="#" className="btn btn-primary">Attend</a>
            </div>
        </div>

        </div>
        <div className="card-2">
            <div className="card-body-2">
                <div className="image-title-container">
                    <img src={Add} alt="Place Image"/>
                    <h5 className="card-title">Add</h5>
                </div>
                <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                <a href="#" className="btn btn-primary">Add new</a>
            </div>
        </div>
    </>
  )
}

export default Services