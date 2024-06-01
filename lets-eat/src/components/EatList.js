import React, {useState} from 'react'
import EatForm from './EatForm'
import Eat from './Eat';

function EatList() {
  const [places, setPlaces] = useState([])

  const addWhere = place => {
    if(!place.text || /^\s*$/.test(place.text)) {
      return;

    }

    const newPlaces = [place, ...places];

    setPlaces(newPlaces);
  };

  const updatePlace = (placeId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
  }

  setPlaces(prev => prev.map(item => (item.id === placeId ? newValue : item)));
}

  const removePlace = id => {
    const removeArr = [...places].filter(place => place.id !== id);

    setPlaces(removeArr);
  }



    const completePlace = id => {
      let updatedPlaces = places.map(place => {
        if (place.id === id) {
          place.isComplete = !place.isComplete;
        }
        return place; 
      });
      setPlaces(updatedPlaces);
    }
  return (
    <div>
      <h1>Where to we want to eat?</h1>
      <EatForm onSubmit={addWhere}/>
      <Eat places={places} updatePlace={updatePlace} completePlace={completePlace} removePlace={removePlace}
      />
    </div>
  )
}

export default EatList

//30:50 https://youtu.be/E1E08i2UJGI