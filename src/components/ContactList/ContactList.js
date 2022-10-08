export function ContactList ({items, delete}){
    const elements = items.map(({name, number, id}) => {
        return (<li key={id}>{name} : {number}
        <button onClick={() => 
            delete(id)} 
            type="button" >Delete</button>
        </li>)
    })
    return(
        <ul>{elements}</ul>
    )
}

