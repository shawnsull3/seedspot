import React, { Component } from 'react';
import Form from '../common/Form';
import '../../styles/Form.css'

class ReadyToRaiseCapital extends Component {
    constructor(props) {
        super(props);
        this.state ={
            company: '',
            name: '',
            email: '',
            companyType: '',
            location: '',
            slogan: '',
            step: 0,
            fields: [
                [
                    {id: 'company', type: 'text', placeholder: '*Company'},
                    {id: 'name', type: 'text', placeholder: '*Name'},
                    {id: 'email', type: 'email', placeholder: '*Email'},
                ],
                [
                    {id: 'location', placeholder: 'Location', options: [
                        'Midwest', 'East Coast', 'West', 'Hell'
                    ]},
                    {id: 'slogan', type: 'text', placeholder: '*Slogan'},
                ],
                [
                    {id: 'companyType', placeholder: 'Company Type', options: [
                        'For Profit', 'Customer facing', 'Retail', 'SaaS'
                    ]}
                ],
            ],
            headers: [
                'Am I ready to raise capital?',
                'Step 2 of 3',
                'Step 3 of 3',
            ]
        }
        this.handleInput = this.handleInput.bind(this);
        this.switchStep = this.switchStep.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }

    switchStep(e) {
        const move = e.target.id;
        move === 'next' ? this.setState({step: this.state.step+1}) 
          : move === 'back' && this.setState({step: this.state.step-1});
    }

    render() {
        const { step, fields, headers } = this.state;
        return (
            <div className='container-flex'>
                <div className='row full-height'>
                    <div className='col card'>
                        <h5>{headers[step]}</h5>
                          <Form fields={fields[step]} handleInput={this.handleInput} state={this.state} />
                        {step === 0 && <p className='subtext'>We will email you your results!</p> }
                        <div className='row'>
                            {step !== 0 &&
                              <button className='btn button-border' id='back' onClick={this.switchStep}>
                                <i className="fa fa-chevron-left chevron"></i> Back
                              </button>
                            }
                            {step !== fields.length-1 &&
                              <button className='btn button-border' id='next' onClick={this.switchStep}>
                                Next <i className="fa fa-chevron-right chevron"></i>
                              </button>
                            }
                            {step === fields.length-1 &&
                              <button className='btn button-border' id='submit' onClick={() => this.props.history.push('/main/profile')}>
                                Get Results!
                              </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadyToRaiseCapital;
