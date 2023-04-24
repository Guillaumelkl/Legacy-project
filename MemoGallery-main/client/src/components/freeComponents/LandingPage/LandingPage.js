import "./LandingPage.css"
import React, { useEffect } from 'react';


const LandingPage = () => {
    useEffect(() => {
        document.body.classList.add('Landing-Page');
    
        return () => {
          document.body.classList.remove('Landing-Page');
        };
      }, []);

    return (
    <div >
        <h4>This is a Gallery Storage in which you can save your photos.</h4>
        <br/>
        <h4>In order to start working with this Storage you need to sign up and then log in.</h4> 
    </div>)
}

export default LandingPage;