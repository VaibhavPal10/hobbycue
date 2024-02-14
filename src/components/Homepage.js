import React from 'react'
import Home from '../style/Home.css';
import people from '../images/people.svg'

const Homepage = () => {
  return (
    <div className='whole'>
        <div className="textcontent">
            <div className="head">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" />
                <h1 id='font-style-1' >Explore your <span style={{ color: 'red' }}>hobby</span> or <span style={{ color: 'rgba(128, 100, 162, 1)' }}>passion</span></h1>
            </div>
            <div className="text-1">
              <br/><br/>
            <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
            </div>
            <div className="text-2">
              
              <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className="imge">
              <img src={people}></img>
            </div>
        </div>
        <div className="signin">
          <div className="buttons">
          <span className="button-container">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" />
            <button className='sign_in'><span style={{ color: 'rgba(128, 100, 162, 1)' }}>Sign in</span></button>
            <button className='Join'><span style={{ color: 'rgba(128, 100, 162, 1)' }}>Join</span></button>
          </span>
          </div>
          <div className="options">
            <div className="g_f">
            <button>Continue with Google</button>
            <button>Continue with Facebook</button>
            </div>
            <br/>
            <div className="container">
              <div className="divider"></div>
              <p className="text-3">Or connect with</p>
              <div className="divider"></div>
            </div>
            <div className="self">
            <input type="email" placeholder="Enter your email address" />
            <input type="password" placeholder="Enter your password" />
            </div>
            <div className="group"> 
              <label htmlFor="">Strength of password</label> 
              <div className="power-container"> 
                  <div id="power-point"></div> 
              </div> 
            </div> 
            <div className="text-4"></div>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <button className='agree' type='submit'>Agree and Continue</button>
          </div>
        </div>
    </div>
  )
}

export default Homepage