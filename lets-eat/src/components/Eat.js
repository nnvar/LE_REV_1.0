import React, {useState} from 'react'
import EatForm from './EatForm'
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function Eat({places, completePlace}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return places.map((place, index) => (
    <div className={place.isComplete ? 'place-row complete' : 
        'place-row'} key={index}>
        
        <div key={place.id} onClick={() => completePlace(place.id)}>
            {place.text}
        </div>
        <div className='icons'>
            <IoMdCloseCircle />
            <MdEdit />
        </div>



    </div>

  ))
}

export default Eat