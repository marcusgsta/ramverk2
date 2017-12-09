import React, {Component} from 'react';
//import PropTypes from 'prop-types';

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: '',
            name: '',
            value: '',
            output: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //this.setState({name: event.target.value});
        this.setState({[event.target.name]: event.target.value});
        //this.setState({name: [...this.state.name, event.target.value]});
    }

    handleSubmit(event) {
        //this.add(event);
        //this.state.name.push(event.target.value);
        console.log('A name was submitted: ' + this.state.name);
        console.log('A formula was submitted: ' + this.state.formula);
        event.preventDefault();

        //const myHeaders = new Headers();

        const myInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"name": this.state.name, "formula": this.state.formula})
        };

        fetch('http://localhost:1337/api/add', myInit)
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                //this.setState({formulas: data});
                console.log("state", data);
            });
    }

    render() {
        return (
            <div>
                <h2>Crud</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här kan du lägga till en formel till databasen:</p>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="Namn" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input name="formula" placeholder="Formel" type="text" value={this.state.formula} onChange={this.handleChange}/>
                    <input type="submit" value="Lägg till"/>
                </form>
            </div>
        );
    }
}
export default Add;
