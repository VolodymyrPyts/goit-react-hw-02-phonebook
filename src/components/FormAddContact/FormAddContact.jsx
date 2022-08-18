import { Component } from "react";

export class FormAddContact extends Component {

state = {
    value: "",
}

reset = () => {this.setState({value: ""})};

onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value)
this.reset()};


render(){
    const {value} = this.state
    
    return (
        <>
        {/* title="Phonebook" */}
        <h2 >Phonebook</h2>
        <form onSubmit={this.onSubmit}>
            <input 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={value}
            onChange={(e)=> {
            this.setState({value: e.currentTarget.value});
            }} />
            <button  type="submit">Add new Contact</button>
        </form>
        </>
    )
}

}