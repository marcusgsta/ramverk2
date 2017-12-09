import React, {Component} from 'react';

export class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            value: '',
            output: '',
            id: '',
            name: '',
            formula: ''
        };

        this.handleAlternate = this.handleAlternate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAlternate(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChange(event) {
        console.log(event.target.value);
        let formula = this.state.formulas.filter(formula => formula._id === event.target.value);

        let name = formula[0].name;
        let formulaF = formula[0].formula;

        console.log(formula[0]);
        this.setState({id: event.target.value});
        this.setState({name: name});
        this.setState({formula: formulaF});

        console.log("kolla", this.state.formulas);
    }

    handleSubmit(event) {
        console.log('A formula was submitted: ' + this.state.id);
        console.log("id", this.state.id);
        console.log("name", this.state.name);
        console.log("formula", this.state.formula);
        event.preventDefault();

        const myInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id, "name": this.state.name, "formula": this.state.formula})
        };

        fetch('http://localhost:1337/api/update', myInit)
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    formulas: this.state.formulas
                });

                this.state.formulas.map((obj) => {
                    if (obj._id === this.state.id) {
                        obj.name = this.state.name;
                        obj.formula = this.state.formula;
                    }
                    return obj;
                });
                this.setState({formulas: this.state.formulas });
                console.log(data);
            });
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/read')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({formulas: data});
                console.log("state", data);
            });
    }
    render() {
        return (
            <div>
                <h2>Crud</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här kan du uppdatera databasens innehåll:</p>
                <form onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        {
                            this.state.formulas.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <br />
                    <input name="name" onChange={this.handleAlternate} value={this.state.name} type="text" /><br />
                    <input name="formula" onChange={this.handleAlternate} value={this.state.formula} type="text" /><br />
                    <input type="submit" value="Uppdatera" />
                </form>
            </div>
        );
    }
}
export default Update;
