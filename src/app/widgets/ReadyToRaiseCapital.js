import React, { Component } from 'react';
import Form from '../common/Form';
import '../../styles/Form.css'

class AmIReadyToRaiseCapital extends Component {
    constructor(props) {
        super(props);
        this.state ={
            company: '',
            name: '',
            email: '',
            companyType: '',
            fields: [
                {id: 'company', type: 'text', placeholder: '*Company'},
                {id: 'name', type: 'text', placeholder: '*Name'},
                {id: 'email', type: 'email', placeholder: '*Email'},
                {id: 'companyType', type: 'dropdown', placeholder: 'Company Type', options: [
                    'For Profit', 'Customer facing', 'Retail'
                ]}
            ]
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (
            <div className='container-flex'>
                <div className='row'>
                    <div className='col justify-content-center'>
                        <h6>Am I ready to raise capital?</h6>
                            <Form fields={this.state.fields} handleInput={this.handleInput} />
                        <p className='subtext'>We will email you your results!</p>
                        <button className='btn button-border'>Next <strong> > </strong></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AmIReadyToRaiseCapital
