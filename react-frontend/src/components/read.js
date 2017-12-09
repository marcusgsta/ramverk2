import React, {Component} from 'react';
//import PropTypes from 'prop-types';

export class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            name: [],
            value: '',
            output: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/read')
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
                <p>Här läses databasens innehåll:</p>
                {
                    this.state.formulas.map((data, i) => {
                        return <div className="formula" key={i}>
                            <span className="name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</span>: <span className="form">{data.formula}</span></div>;
                    })
                }
            </div>
        );
    }
}
export default Read;
