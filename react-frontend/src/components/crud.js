import React, {Component} from 'react';
//import PropTypes from 'prop-types';

// const SelectMenu = (props) => {
//     props.map((data, i) => (
//         <option key={i} value={data.namn}>{data.namn}</option>
//     )
//     );
// };

// selectMenu.propTypes = {
//     formula: PropTypes.object.isRequired
// };

export class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            name: [],
            value: '',
            output: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     //this.setState({name: event.target.value});
    //     //this.setState({name: [...this.state.name, event.target.value]});
    // }

    handleSubmit(event) {
        //this.add(event);
        //this.state.name.push(event.target.value);
        console.log(event.target.value);
        console.log('A name was submitted: ' + this.state.value);
        console.log('A formula was submitted: ' + this.state.formula);
        event.preventDefault();
    }

    add(event) {
        let name = event.target.value || '';

        if (name === '') {
            this.setState({output: 'Skriv namnet på formeln' });
        }
        console.log(this.state.output);
    }

    componentDidMount() {
        fetch('http://localhost:1337/mongodb')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                this.setState({formulas: data});
                console.log("state", data);
            });
    }
    render() {
        return (
            <div>
                <h2>Crud</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <form onSubmit={this.handleSubmit}>
                    <h2>Lägg till formel</h2>
                    <p>
                        <label>Namn:
                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </label></p>
                    {/* <p>
                        <label>Formel:
                            <input name="formula" type="text" value={this.state.formula} onChange={this.handleChange} />
                        </label></p> */}
                    <input type="submit" value="Lägg till" />
                </form>


                <select>
                    {/* <SelectMenu props={this.state.formulas}/> */}
                </select>
                <ul>
                    {/* { this.state.formulas } */}
                </ul>
            </div>
        );
    }
}
export default Crud;
