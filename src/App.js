import './App.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import featuredSwim from './components/image_12.png'
import featuredWedding from './components/wedding-photography 1.png'
import featuredBike from './components/mountain-bike 1.png'
import featuredYoga from './components/yoga.jpeg'
import featuredVenice from './components/venice.jpeg'
import featuredEiffel from './components/eiffeltower.jpeg'

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
          <Featured
              src={featuredSwim}
              alt="featured Air BnB Experiences Swim"
              className="featuredSwim"
              rating="5.0"
              numOfRatings="(6)"
              country="USA"
              summary="Life Lessons with Katie Zaferes"
              startingPrice="From $136"
          />
          <Featured
              src={featuredWedding}
              alt="featured Air BnB Experiences Wedding"
              className="featuredWed"
              rating="5.0"
              numOfRatings="(30)"
              country="USA"
              summary="Learn wedding photography"
              startingPrice="From $125"
          />
          <Featured
              src={featuredBike}
              alt="featured Air BnB Experiences Bike"
              className="featuredBike"
              rating="4.8"
              numOfRatings="(2)"
              country="USA"
              summary="Group mountain biking"
              startingPrice="From $50"
          />
          <Featured
              src={featuredYoga}
              alt="featured Air BnB Experiences Yoga"
              className="featuredYoga"
              rating="4.9"
              numOfRatings="(22)"
              country="Austrailia"
              summary="Yoga with Sari"
              startingPrice="From $12"
          />
          <Featured
              src={featuredVenice}
              alt="featured Air BnB Experiences Venice"
              className="featuredVenice"
              rating="5"
              numOfRatings="(249)"
              country="Italy"
              summary="Virtual gondola ride"
              startingPrice="From $17"
          />
          <Featured
              src={featuredEiffel}
              alt="featured Air BnB Experiences Eiffel Tower"
              className="featuredEiffel"
              rating="3.5"
              numOfRatings="(81)"
              country="France"
              summary="La Tour Eiffel holiday lights tour"
              startingPrice="From $20"
          />
      </div>
    </div>
    
  );
}

export default App;
