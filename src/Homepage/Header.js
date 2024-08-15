import React from 'react';
import './Header.css'
import ShineLogo from './shine-logo.4ccdd0f3.png';
import AppleBest from './apple-best-of-2020.be8d5e79.svg';


const Header = () => {
  return (
    
    <div >
        <div className='banner'>
          <div className='bannerheading'>
            <p>The Shine app is now a part of Headspace Health!</p>
          </div>
            <button className="learnMoreButton">Learn More</button>
        </div>
        
        <div className='headercontainer'>
            
            <nav>
                <a href="">About</a> 
                <a href="">Shine At Work</a> 
                <a href="">Poadcasts</a> 
            </nav>

            <div className='headercontainercontent'>
               
               <img src={ShineLogo} alt="ShineLogo" className="logo" />

               <div className='headcontent'>

               <h1 className="title">Daily mental wellness for all</h1>
               <p className="subtitle">The mental wellness app for better mornings, brighter days, and the truest you.</p>
            
               <img src={AppleBest} alt="AppleBest" className="logotwo" />

               </div>
              
             
             


             </div>

        </div>

    </div>
    
  )
}

export default Header