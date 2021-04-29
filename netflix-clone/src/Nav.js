import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

     const [show,handleShow] = useState([false]);

     useEffect(()=>{
          window.addEventListener('scroll',()=>{
              if(window.scrollY > 100){
                  handleShow(true);
              }
              else{
                  handleShow(false);
              }
          });
          return () =>{
              window.removeEventListener('scroll');
          };
     },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://midiaresearch.com/storage/uploads/blog/featured/1177/cover_image-1594998634.png" alt="netflix-logo" className="nav-logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="nav-avatar"/>
        </div>
    )
}

export default Nav;
