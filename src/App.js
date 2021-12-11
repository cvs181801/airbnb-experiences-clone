import React, { useState, useEffect } from "react"
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import cardsData from './components/cardsData'
import cardsDataMore from './components/cardsDataMore'
import Footer from './components/Footer.js'
import Toggler from './components/Toggler.js'
import FeaturedMore from './components/FeaturedMore'
import Emoji from './components/Emoji'

const featuredCards = cardsData.map(card => {
  return <Featured key={card.id} src={card.src} alt={card.alt} rating={card.rating} numOfRatings={card.numOfRatings} 
  country={card.country} summary ={card.summary} startingPrice={card.startingPrice}/>
})

const featuredCardsMore = cardsDataMore.map(card => {
  return <FeaturedMore key={card.id} src={card.src} alt={card.alt} rating={card.rating} numOfRatings={card.numOfRatings} 
  country={card.country} summary ={card.summary} startingPrice={card.startingPrice}/>
})

function App() {
  const [display, setDisplay] = useState({display: "inline-block"})
  const [cards, setCards] = useState('');
  const [emoji, setEmoji] = useState(false);

function handleClick() {
  setDisplay({display: "none"})
  setCards(featuredCardsMore)
}

function handleClick2() {
  console.log( 'clicked')
  setEmoji(true)
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
        >
        {featuredCards} 
        {cards}
        
        </div>

        <button 
          className="moreBtn"
          onClick={handleClick}
          style={display}
        >Load more
        </button>

      <br/>
      <h1 className="favorites__title">My favorites</h1>  
      <Emoji 
        isFilled={emoji}
        onClick={handleClick2}
      />
      <Footer/>
    </div>
    
  );
}

export default App;
