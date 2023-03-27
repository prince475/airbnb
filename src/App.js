import React from 'react';
import Navbar from './components/Navbar';
import data from './data';
import Hero from './components/Hero';
// import katie from './katie-zaferes.png';
import Card from './components/Card';
import './App.css';

function App() {
  const dataElements = data.map(cardData => {
    return <Card
    key= {cardData.id }
    cardData = {cardData}
    //using the object spread operator
    // {...cardData} if used the remove the key word card data when passing in your props
    // since it spreads the properties of the item as separate props.
    />

  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'> {dataElements}</section>
    </div>
  );
}

export default App;


// CoverImg={cardData.coverImg}
//     rating={cardData.stats.rating}
//     reviewCount={cardData.stats.reviewCount}
//     country={cardData.country}
//     title={cardData.title}
//     price={cardData.price}
//     openSpots={cardData.openSpots}
