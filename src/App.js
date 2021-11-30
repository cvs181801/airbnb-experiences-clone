import './App.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import featuredSwim from './components/image_12.png'
import featuredWedding from './components/wedding-photography 1.png'
import featuredBike from './components/mountain-bike 1.png'
import featuredYoga from './components/yoga.jpeg'
import featuredVenice from './components/venice.jpeg'
import featuredEiffel from './components/eiffeltower.jpeg'
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
      >Online Experiences</div>

     
      <p
        className="title__description"
      >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="featuredContainer">

          {featuredCards}
          {/* <Featured
              src={featuredSwim}
              alt="featured Air BnB Experiences Swim"
              rating="5.0"
              numOfRatings="(6)"
              country="USA"
              summary="Life Lessons with Katie Zaferes"
              startingPrice="From $136"
          />
          <Featured
              src={featuredWedding}
              alt="featured Air BnB Experiences Wedding"
              rating="5.0"
              numOfRatings="(30)"
              country="USA"
              summary="Learn wedding photography"
              startingPrice="From $125"
          />
          <Featured
              src={featuredBike}
              alt="featured Air BnB Experiences Bike"
              rating="4.8"
              numOfRatings="(2)"
              country="USA"
              summary="Group mountain biking"
              startingPrice="From $50"
          />
          <Featured
              src={featuredYoga}
              alt="featured Air BnB Experiences Yoga"
              rating="4.9"
              numOfRatings="(22)"
              country="Australia"
              summary="Yoga with Sari"
              startingPrice="From $12"
          />
          <Featured
              src={featuredVenice}
              alt="featured Air BnB Experiences Venice"
              rating="5"
              numOfRatings="(249)"
              country="Italy"
              summary="Virtual gondola ride"
              startingPrice="From $17"
          />
          <Featured
              src={featuredEiffel}
              alt="featured Air BnB Experiences Eiffel Tower"
              rating="3.5"
              numOfRatings="(81)"
              country="France"
              summary="La Tour Eiffel holiday lights tour"
              startingPrice="From $20"
          /> */}
      </div>
    </div>
    
  );
}

export default App;
