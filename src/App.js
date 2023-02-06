
import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import Data from './data.js'

function App() {
  const cardElements= Data.map(element =>{
    return(
    <Card 
    key={element.id}
    {...element}
     />
  )});

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
      
    </div>
  );
}
export default App;
