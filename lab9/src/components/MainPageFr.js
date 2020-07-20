import React from 'react';
import SkiPic from '../img/Ski_main.jpg';
import News from '../img/news.jpg';
import Mountain from '../img/mountain.jpg';
import Services from '../img/services.jpg';



const MainPageFr = () => {
    return (
        <div className="container">
            <h4 className="center"></h4>
             <h2>Bienvenue chez Ski Lover</h2>
             <img src={SkiPic} width="500" height="250" class="center"></img>
            <h3>Nous sommes là pour améliorer votre expérience de ski</h3>
            <h4>Nous fournissons des informations sur les compétitions de ski, 
                des informations sur la montagne de neige, des billets et des services de location</h4>
            <img src={News} width="200" height="200" class="center"></img>
            <img src={Mountain} width="200" height="200" class="center"></img>
            <img src={Services} width="200" height="200" class="center"></img>
            <img src={SkiPic} width="200" height="200" class="center"></img>

            <br />
          
                </div>
    )
}

export default MainPageFr