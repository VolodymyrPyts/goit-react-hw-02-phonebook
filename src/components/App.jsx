import { Component } from "react";
import shortid from "shortid";

import { FormAddContact } from "./FormAddContact/FormAddContact";
import { ContactCard } from "./ContactCard/ContactCard";
import { FilterContact } from "./FilterContact/FilterContact";



export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  onSubmitForm = (contact, number) => {
    let newContact = {
      id: shortid.generate(),
      contact,
      number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.contact.toLowerCase()
    )
      ? alert(`${newContact.contact} is already exist in your contacts!`)
      : this.setState((prevState) => ({
      contacts: [...prevState.contacts, {
        id: shortid.generate(),
        name: contact,
        number,
      }]
    }))
  }
  
onDelete = (c) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.name !== c ),
    })
  }
  
FilterContact = e => {
    this.setState({ filter: e.currentTarget.value });
};
  
removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

render(){
   
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const vizibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

  return (<div>
  <div>
    <h1 >Phonebook</h1>
      <FormAddContact
        onSubmit={this.onSubmitForm} />
  </div>
  <div>
      <h2>Contacts</h2>
      <FilterContact
        value={filter}
        onChange={this.FilterContact} />
      
      <ContactCard
        contacts={vizibleContacts}
        onRemoveClick={this.removeContact}/>
    
  </div>

</div>
  );

};
}
