import React, { useState, useEffect } from "react"
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import cardsData from './components/cardsData'
import cardsDataMore from './components/cardsDataMore'
import Footer from './components/Footer.js'
import Toggler from './components/Toggler.js'



const featuredCards = cardsData.map(card => {
  return <Featured key={card.id} src={card.src} alt={card.alt} rating={card.rating} numOfRatings={card.numOfRatings} 
  country={card.country} summary ={card.summary} startingPrice={card.startingPrice}/>
  
})

const featuredCardsMore = cardsDataMore.map(card => {
  return <Featured key={card.id} src={card.src} alt={card.alt} rating={card.rating} numOfRatings={card.numOfRatings} 
  country={card.country} summary ={card.summary} startingPrice={card.startingPrice}/>
})

function App() {
  const [style, setStyle] = useState({overflowY: "hidden", height: "20em"})

  function handleClick() {
    setStyle({overflowY: "visible", height: "auto"})
  }

  return (
    <div className="App">
      
      <Navbar/>
      <div
        className="title"
      >Online Experiences
      
      <p
        className="title__description"
      >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      </div>

        <div 
          className="featuredContainer"
          style ={style}
        >
        {featuredCards} 
        {featuredCardsMore} 
        </div>

        <button 
          class="moreBtn"
          onClick={handleClick}
        >Load more
        </button>

      {/* <br/>
      <h1 className="favorites__title">My Favorites</h1>   */}
      <Footer/>
    </div>
    
  );
}

export default App;
