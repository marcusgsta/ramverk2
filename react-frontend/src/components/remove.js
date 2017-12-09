import React, {Component} from 'react';

export class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            name: [],
            value: '',
            output: '',
            id: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        //this.add(event);
        //this.state.name.push(event.target.value);
        console.log('A formula was submitted: ' + this.state.id);
        event.preventDefault();

        //const myHeaders = new Headers();

        const myInit = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id})
        };

        fetch('http://localhost:1337/api/remove', myInit)
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    formulas: this.state.formulas.filter(formula => formula._id !== this.state.id)
                });
                console.log("state", data);
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
                <p>Här läses databasens innehåll:</p>
                <form onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        {
                            this.state.formulas.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <input type="submit" value="Ta bort" />
                </form>
            </div>
        );
    }
}
export default Remove;
