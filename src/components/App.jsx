import React from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm/ContactForm";
import {ContactList} from "components/ContactList/ContactList"
import {Filter} from "components/Filter/Filter"
class App extends React.Component{
  state = {
    contacts: [],
    filter: '',
  }
handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({[name]: value})
}
getFilteredContacts(){
  const {contacts, filter} = this.state;
  if (!filter){
    return contacts;
  }
  const normalisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({name}) => {
    const normalisedName = name.toLocaleLowerCase();
    const result = normalisedName.includes(normalisedFilter);
    return result;
  })
  return filteredContacts;
}
addContacts = (data) => {
  this.setState((prevState) => {
    const newContact = {
      id: nanoid(),
      ...data
    }
    return { contacts: [newContact, ...prevState.contacts]}
  })
 }

removeContact = (id) => {
  this.setState((prevState) => {
    const newContacts = prevState.contacts.filter((item) => item.id !== id);
  return {
    contacts: newContacts
  }
  })
 }


  render() {
   
    return(
    <div>
     <h1>Phonebook</h1>
     <ContactForm onSubmit={this.addContacts}/>
     <h2>Contacts</h2>
     <Filter handleChange={this.handleChange} />
    <ContactList items={this.getFilteredContacts()} delete={this.removeContact} />
    </div>)
  }

}

export default App;