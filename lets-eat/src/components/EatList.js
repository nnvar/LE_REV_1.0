import React, {useState} from 'react'
import EatForm from './EatForm'
import Eat from './Eat';

function EatList() {
  const [places, setPlace] = useState([])

  const addWhere = place => {
    if(!place.text || /^\s*$/.test(place.text)) {
      return;

    }

    const newPlaces = [place, ...places];

    setPlace(newPlaces);
  }

  return (
    <div>
      <h1>Where to we want to eat?</h1>
      <EatForm onSubmit={addWhere}/>
      <Eat 
      places={places}
      completePlace={completePlace}
      />
    </div>
  )
}

export default EatList

//30:50 https://youtu.be/E1E08i2UJGI