import React from 'react';
import news1 from '../img/news1.jpg'
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.jpg'



const News = () => {
    return (
        <div className="container">

            <h4 className="center">News</h4>
             <img src={news1} width="500" height="250" class="center"></img>
            <h5>95-Year-Old Breaks Guinness World Record as Oldest Heli-Skier</h5>
            <h6>Think you're sore after a long day on the hill? Gordon Precious is the world's oldest heli-skier, 
                and he doesn't want to hear your excuses.</h6>
               
                <img src={news2} width="500" height="250" class="center"></img>
            <h5>Which Resorts Have Re-Opened?</h5>
            <h6>The season is over for most of the continent,
                 but these resorts are spinning their lifts—with some very important regulations. Here’s the deal.</h6>

            <img src={news3} width="500" height="250" class="center"></img>
            <h5>UPDATE: The Red Bull Raid POSTPONED</h5>
            <h6>One of the most intense competition on skis returns to Squaw Valley for a second year.
            </h6>


          
                </div>
    )
}

export default News