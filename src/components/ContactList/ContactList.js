import React from "react";

export function ContactList ({items, removeContact}){
    const elements = items.map(({name, number, id}) => {
        return (<li key={id}>{name} : {number}
        <button onClick={() => 
            removeContact(id)} 
         type="button" >Delete</button>
        </li>)
    })
    return(
        <ul>{elements}</ul>
    )
}

