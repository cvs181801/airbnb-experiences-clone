import './App.css';
import Navbar from './components/Navbar';
import Featured from './components/Featured.js'
import featuredSwim from './components/image_12.png'
import featuredWedding from './components/wedding-photography 1.png'
import featuredBike from './components/mountain-bike 1.png'

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
      </div>
    </div>
    
  );
}

export default App;
