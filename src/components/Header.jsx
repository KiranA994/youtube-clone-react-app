import { faCircleInfo, faQuestion, faKeyboard, faGlobe, faFlag, faGear, faLanguage, faUserShield, faShieldHalved, faMoon, faClockRotateLeft, faHouse, faMagnifyingGlass, faMicrophone, faEllipsisVertical, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../App.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { filterVideo, clear } from '../redux/counterSlice'


function Header({setcssStyle}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const dispatch = useDispatch()
  const count = useSelector((state)=> state.counterReducer)

  const handleCssOpen = () => {

    setcssStyle('190px')
    setIsMenuOpen(true);
    document.getElementById('hamburgerClose').style.display = 'none'

  }

  const handleCssClose = () => {
    setIsMenuOpen(false);
    setcssStyle('0px')
    document.getElementById('hamburgerClose').style.display = 'block'
  };

    return (
      <>
        <div>
            <nav className="navbar navbar-light">
            <div className='container-fluid'>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            id="hamburgerClose" onClick={handleCssOpen}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start nav-canvas-res" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false" 
        style={{width: '20%',
          marginTop: '66px'}}>
          <div className="offcanvas-body">
          <button type="button" className="btn-close text-reset offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCssClose}
          style={{marginLeft:'250px'}}></button>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item d-flex align-items-center">
              <FontAwesomeIcon icon={faHouse} />
                <a className="nav-link active ms-4" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '10%',height: '100%', marginLeft:'-4px'}} >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z">
                </path>
                </svg>
                <a className="nav-link active ms-4" aria-current="page" href="#">Shorts</a>
              </li>

              <li className="nav-item d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '10%',height: '100%', marginLeft:'-4px'}}> 
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
                <a className="nav-link active ms-4" aria-current="page" href="#">Subscriptions</a>
              </li>


              <li className="nav-item d-flex align-items-center">
         
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '10%',height: '100%', marginLeft:'-4px'}}>
                <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
                <a className="nav-link active ms-4" aria-current="page" href="#">You</a>
                </li>

                <li className="nav-item d-flex align-items-center">
                <FontAwesomeIcon icon={faClockRotateLeft} />
           <a className="nav-link active ms-4" aria-current="page" href="#">History</a>
           </li>

                <li className="nav-item d-flex align-items-center">
                <FontAwesomeIcon icon={faGear} />
           <a className="nav-link active ms-4" aria-current="page" href="#">Settings</a>
           </li>

                <li className="nav-item d-flex align-items-center">
                <FontAwesomeIcon icon={faFlag} />
           <a className="nav-link active ms-4" aria-current="page" href="#">Report history</a>
           </li>

                <li className="nav-item d-flex align-items-center">
                <FontAwesomeIcon icon={faCircleInfo} />
           <a className="nav-link active ms-4" aria-current="page" href="#">Send Feedback</a>
           </li>
            
            </ul>

            <div id="guide-primary" className='guide-primary-one'>
              <a slot='guide-primary' href="#">About</a>
              <a slot='guide-primary' href="#">Press</a>
              <a slot='guide-primary' href="#">Copyright</a>
              <a slot='guide-primary' href="#">Contact Us</a>
              <a slot='guide-primary' href="#">Creators</a>
              <a slot='guide-primary' href="#">Advertise</a>
              <a slot='guide-primary' href="#">Developers</a>
            </div> 
            <div id="guide-secondary" className='guide-secondary-two'>
              <a slot='guide-secondary' href="#">Terms</a>
              <a slot='guide-secondary' href="#">Policy & Safety</a>
              <a slot='guide-secondary' href="#">How VideoMate Works</a>
              <a slot='guide-secondary' href="#">Test New Features</a>
            </div> 

            <div id="copyright">
              <p>© 2024 VideoMate</p>
            </div>

          </div>
        </div>
            <a className="nav-link" href="#">
              <div className='d-flex align-items-center main-icon-res'>
              <img src="data:image/jpeg;base64,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" alt="" 
              style={{width: '40%',height:'50px'}}/>
              <p className='text-warning fs-2 mt-2 ms-2'>VideoMate</p>
              </div>
            </a>
            <a className="nav-link" href="#">
                <div className='d-flex'>
                <form  className='d-flex'>
                <input className="form-control input-res" type="search" placeholder="Search" aria-label="Search" 
                onChange={e => setSearchVal(e.target.value)}
                style={{width: '500px'}}/>
                </form>
                <button id='search-icon-button' onClick={ () => dispatch(filterVideo(searchVal))}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <div style={{background: '#f6f6f6', borderRadius:'50%', marginLeft:'12px', width:'40px', height:'40px'}}   className='d-flex justify-content-center align-items-center me-5'>
                <FontAwesomeIcon icon={faMicrophone} />
                </div>
                </div>

            </a>
            <a className="nav-link sign-in-res" href="#">
            <FontAwesomeIcon icon={faEllipsisVertical}  onClick={handleShow} style={{marginRight:'30px'}} className='three-dot'/>
            <button type='button' className='btn btn-transparent sign-in-res'
            style={{borderRadius: '10px', width:'100px', height:'50px', marginRight: '28px', border:'1px solid black'}}>
            <FontAwesomeIcon icon={faUser} className='me-2'/>   
             <a style={{textDecoration: 'none', color:'black'}} href='#'>
              Sign In</a>
            </button>
            </a>
            </div>
            </nav>
        </div>

        <div>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 side-left-res">
              <li className="nav-item ms-4 mb-3">
              <FontAwesomeIcon icon={faHouse} />
                <a className="nav-link active" aria-current="page" href="#"
                style={{marginLeft:'-10px'}}>Home</a>
              </li>

              <li className="nav-item ms-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '2%',height: '100%', marginLeft:'-4px'}} >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z">
                </path>
                </svg>
                <a className="nav-link active" aria-current="page" 
                style={{marginLeft:'-10px'}} href="#">Shorts</a>
              </li>

              <li className="nav-item ms-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '2%',height: '100%', marginLeft:'-4px'}}> 
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
                <a className="nav-link active" style={{marginLeft:'-20px'}} 
                aria-current="page" href="#">Subscriptions</a>
              </li>


              <li className="nav-item ms-4 mb-3">
         
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
              style={{pointerEvents: 'none',display: 'inherit',width: '2%',height: '100%', marginLeft:'-4px'}}>
                <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
                <a className="nav-link active" aria-current="page" href="#"
                style={{marginLeft:'-2px'}}>You</a>
                </li>

                <li className="nav-item ms-4">
                <FontAwesomeIcon icon={faClockRotateLeft} />
           <a className="nav-link active" aria-current="page" href="#"
           style={{marginLeft:'-12px'}}>History</a>
           </li>
</ul>
        </div>
  

        <Modal show={show} onHide={handleClose}>
          <div className='d-flex flex-column'>
              <a href="#" className='d-flex align-items-center text-left' style={{textDecoration: 'none', color:'#606060'}}>
              <FontAwesomeIcon icon={faShieldHalved} className='ms-2'  />
                <p className='ms-3 mt-3' style={{textAlign:'left'}}>Your data in VideoMate</p>
              </a>


            <a href="#" className='d-flex align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faMoon}  className='ms-2' />
              <p className='ms-4 mt-3' style={{textAlign:'left'}}>Appearance: Device theme</p>
            </a>
          
            <a href="#" className='d-flex align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faLanguage}  className='ms-2' />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Language: English</p>
            </a>
      
            <a href="#" className='d-flex  align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faUserShield}  className='ms-2' />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Restricted Mode: Off</p>
            </a>
   
            <a href="#" className='d-flex  align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faGlobe} className='ms-2'  />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Location: India</p>
            </a>
         
            <a href="#" className='d-flex  align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faKeyboard} className='ms-2'  />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Keyboard shortcuts</p>
            </a>
         
            <a href="#" className='d-flex  align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faGear} className='ms-2'  />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Settings</p>
            </a>
    
            <a href="#" className='d-flex align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faQuestion} className='ms-2'  />
              <p className='ms-4 mt-3' style={{textAlign:'left'}}>Help</p>
            </a>
          
           <a href="#" className='d-flex  align-items-center' style={{textDecoration: 'none', color:'#606060'}}>
            <FontAwesomeIcon icon={faCircleInfo} className='ms-2' />
              <p className='ms-3 mt-3' style={{textAlign:'left'}}>Send Feedback</p>
            </a>
          </div>
        </Modal>

      </>
       
    )
}

export default Header