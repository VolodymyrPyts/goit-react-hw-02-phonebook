import { Component } from "react";

export class ContactCard extends Component {

    onDelete = () => {
        const {contact, onDelete} = this.props
        onDelete(contact)
    }
    render() {
        const {contact} = this.props


        return (
<div >
    <span >{contact}</span>
    <button onClick={this.onDelete}>X</button>
  </div>
        )
    }
}
