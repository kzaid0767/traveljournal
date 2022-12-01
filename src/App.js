import './App.css';
import Nav from './Nav';
import data from './data';
import Card from './Card';


function App() {

  const allCards = data.map(place=><Card
    imageUrl={place.imageUrl}
    location={place.location}
    title={place.title}
    googleMapsUrl={place.googleMapsUrl}
    startDate={place.startDate}
    endDate={place.endDate}
    description={place.description}
    key = {place.id}/>)

  return (
    <div className="App">
      <Nav />
        <div className='all-cards'>
          {allCards}
        </div>
    </div>
  );
}

export default App;
