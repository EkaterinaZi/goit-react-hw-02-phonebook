import React from 'react';
import { nanoid } from 'nanoid';


export const Filter = ({handleChange, filter}) => {
    const filterId = nanoid();
    return(
   <h3>
    Find contacts by name
    <input 
    id={filterId}
    type="text" 
    name="filter" 
    onChange={handleChange} 
    value={filter}>
    </input>
    </h3>
)
}
