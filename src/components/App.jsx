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
 
  if (!this.state.filter){
    return this.state.contacts;
  }
  const normalisedFilter = this.state.filter.toLocaleLowerCase();
  const filteredContacts = this.state.contacts.filter(({name}) => {
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
    const {removeContact, getFilteredContacts, addContacts} = this;

    return(
    <div>
     <h1>Phonebook</h1>
     <ContactForm onSubmit={addContacts}/>
     <h2>Contacts</h2>
     <Filter handleChange={this.handleChange} />
    <ContactList items={getFilteredContacts()} removeContact={removeContact} />
    </div>) 
  }

}

export default App;