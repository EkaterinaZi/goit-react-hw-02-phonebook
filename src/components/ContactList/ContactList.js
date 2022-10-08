export function ContactList ({items}){
    const elements = items.map(({name, number, id}) => {
        return (<li key={id}>{name} : {number}
        <button onClick={() => 
            console.log(id)} 
         type="button" >Delete</button>
        </li>)
    })
    return(
        <ul>{elements}</ul>
    )
}

