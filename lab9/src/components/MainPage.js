import React from 'react';
import SkiPic from '../img/Ski_main.jpg';
import News from '../img/news.jpg';
import Mountain from '../img/mountain.jpg';
import Services from '../img/services.jpg';



const MainPage = () => {
    return (
        <div className="container">
            <h4 className="center"></h4>
             <h2>Welcome to Ski Lover</h2>
             <img src={SkiPic} width="500" height="250" class="center"></img>
            <h3>We are here to improve your ski experience</h3>
            <h4>We provide Ski competition 
                news,Snow Mountain Info,Ticket and rental services</h4>
            <img src={News} width="200" height="200" class="center"></img>
            <img src={Mountain} width="200" height="200" class="center"></img>
            <img src={Services} width="200" height="200" class="center"></img>
            <img src={SkiPic} width="200" height="200" class="center"></img>

            <br />
          
                </div>
    )
}

export default MainPage