import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import cardsData from './components/cardsData'


const featuredCards = cardsData.map(card => {
  return <Featured key={card.id} src={card.src} alt={card.alt} rating={card.rating} numOfRatings={card.numOfRatings} 
  country={card.country} summary ={card.summary} startingPrice={card.startingPrice}/>
})

console.log(featuredCards)

function App() {
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
        <div className="featuredContainer">
          {featuredCards}
      </div>
    </div>
    
  );
}

export default App;
