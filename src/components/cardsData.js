import featuredSwim from './components/image_12.png'
import featuredWedding from './components/wedding-photography 1.png'
import featuredBike from './components/mountain-bike 1.png'
import featuredYoga from './components/yoga.jpeg'
import featuredVenice from './components/venice.jpeg'
import featuredEiffel from './components/eiffeltower.jpeg'

const cardsData = [
    {
        id: "A",
        src: featuredSwim,
        alt: "featured Air BnB Experiences Swim",
        rating: "5.0",
        numOfRatings: "(6)",
        country: "USA",
        summary: "Life Lessons with Katie Zaferes",
        startingPrice: "From $136"
    },
    {
        id: "B",
        src: featuredWedding,
        alt: "featured Air BnB Experiences Wedding",
        rating: "5.0",
        numOfRatings: "(30)",
        country: "USA",
        summary: "Learn wedding photography",
        startingPrice: "From $125"
    },
    {
        id: "C",
        src: {featuredBike},
        alt: "featured Air BnB Experiences Bike",
        rating: "4.8",
        numOfRatings: "(2)",
        country: "USA",
        summary: "Group mountain biking",
        startingPrice: "From $50"
    },
    {
        id: "D",
        src: {featuredYoga},
        alt: "featured Air BnB Experiences Yoga",
        rating: "4.9",
        numOfRatings: "(22)",
        country: "Australia",
        summary: "Yoga with Sari",
        startingPrice: "From $12"
    },
    {
        id: "E",
        src: {featuredVenice},
        alt: "featured Air BnB Experiences Venice",
        rating: "5",
        numOfRatings: "(249)",
        country: "Italy",
        summary: "Virtual gondola ride",
        startingPrice: "From $17"
    },
    {
        id: "F",
        src: {featuredEiffel},
        alt: "featured Air BnB Experiences Eiffel Tower",
        rating: "3.5",
        numOfRatings: "(81)",
        country: "France",
        summary: "La Tour Eiffel holiday lights tour",
        startingPrice: "From $20"
    }
]

export default cardsData