import React, { useState } from "react"
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import cardsData from './components/cardsData'
import cardsDataMore from './components/cardsDataMore'
import Footer from './components/Footer.js'
import FeaturedMore from './components/FeaturedMore'

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
  const [TogglerValue, setTogglerValue] = useState(false);

function handleClick() {
  setDisplay({display: "none"})
  setCards(featuredCardsMore)
}

function handleToggler(event) {
  event.preventDefault(); 
  console.log("clicked/favorited!");
  setTogglerValue(prevValue => !prevValue)
  console.log(TogglerValue);
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
      {/*the favorited cards will be added here*/}
      <Footer/>
    </div>
    
  );
}

export default App;
