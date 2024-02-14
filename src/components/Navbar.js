import React from 'react'
import logo from "../images/logo.png";
import Nav from  '../style/Nav.css';
import magnifyingglasssolid from "../images/magnifyingglasssolid.svg"
import explore from "../images/explore.svg"
import hobbies from "../images/hobbies.svg"
import bookmark_black_24dp  from "../images/bookmark_black_24dp.svg"
import notifications_black_24dp from "../images/notifications_black_24dp.svg"
import cart from "../images/cart.svg"

function Navbar() {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ marginTop: '20px', marginBottom: '10px', marginLeft: '97px' }}>
            <img src={logo} alt="Bootstrap" width="293.26px" height="60px" />
          </a>
          <form className="search" >
            <input
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <button
              type="submit">
              <img src={magnifyingglasssolid}/>
              </button>
          </form>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          
          <button className="navbar-toggler" id='ofcanvas' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="Explore collapse navbar-collapse" id="navbarSupportedContent">
            <img src={explore} alt='explore'/>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
          </div>
          <div className="Hobbies collapse navbar-collapse" id="navbarSupportedContent">
            <img src={hobbies} alt='Hobbies'/>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hobbies
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
          </div>
          <div className="Bookmark collapse navbar-collapse" id="navbarSupportedContent">
            <button>
              <img src={bookmark_black_24dp} alt="bookmark"></img>
            </button>
          </div>
          <div className="Notification collapse navbar-collapse" id="navbarSupportedContent">
            <button>
              <img src={notifications_black_24dp} alt="bookmark"></img>
            </button>
          </div>
          <div className="Cart collapse navbar-collapse" id="navbarSupportedContent">
            <button>
              <img src={cart} alt="bookmark"></img>
            </button>
          </div>
          <div className="Sign_in collapse navbar-collapse" id="navbarSupportedContent">
            <button>Sign in</button>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>

          </div> */}
        </div>
      </nav></div>
  );
}

export default Navbar