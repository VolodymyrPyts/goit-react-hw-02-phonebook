import { Component } from "react";

import { FormAddContact } from "./FormAddContact/FormAddContact";
import { ContactCard } from "./ContactCard/ContactCard";

export class App extends Component  {
  state = {
    contacts: [],
    name: ''
  }

  onDelete = (c) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact !== c ),
    })
      }

  render(){
   
  return (<>


    <FormAddContact onSubmit={(contact) => {
            this.setState((prevState)=>({contacts: [...prevState.contacts, contact]}))
  }}/>

  <div>
    <h2>Contact</h2>
  {this.state.contacts.map((contact) => { 
    return (

      <ContactCard key={contact} contact={contact} onDelete={this.onDelete} />
    )})}
 
  </div>

</>
  );

};
}
