import React, { Component } from 'react';
import Form from '../common/Form';
import logo from '../../images/newStack.png';
import '../../styles/Form.css';
import '../../styles/ReportCard.css';
import insertToAirTable from '../../airtable-API/queries';
import sendEmail from '../common/sendGrid';
import constraints from '../common/constraints';
import emailTemplate from '../common/emailTemplate';
import update from 'immutability-helper';
import { validate } from 'validate.js';
import { renderToStaticMarkup } from 'react-dom/server'

class ReportCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            company: '',
            email: '',
            companyType: '',
            location: '',
            companyStage: '',
            DAU: '',
            MAU: '',
            NPSscore: '',
            week2weekGrowth: '',
            kValue: '',
            step: 0,
            fields: [
                [
                    {id: 'company', type: 'text', placeholder: '*Company Name'},
                    {id: 'email', type: 'email', placeholder: '*Email', errorMessage: 'Enter a valid email', showError: false},
                    {id: 'location', placeholder: '*Location', options: [
                        'New York City', 'San Francisco', 'Everywhere Else'
                    ]},
                    {id: 'companyType', placeholder: '*Company Type', options: [
                        'Consumer - Mobile/Internet', 'Enterprise SaaS', 'Consumer SaaS', 'Marketplace'
                    ]}
                ],
                [
                    {id: 'companyStage', placeholder: '*Company Stage', options: [
                         'MVP', 'Early Acquisition', 'Proven Channel Acquisition', 'Early Evidence of PMF', 'PMF', 'Scale'
                    ]},
                    {id: 'DAU', placeholder: '*Daily Active Users (DAU)', options: [
                        '0 - 300', '500 - 25k', '25k - 50k', '100k - 500k', '500k - 1M', '>1M'
                    ]},
                   {id: 'MAU', placeholder: '*Monthly Active Users (MAU)', options: [
                    '0 - 10k', '>15k', '750k - 1.5M', '3M - 15M', '15M - 30M', '>30M'
                    ]},
                    {id: 'NPSscore', type: 'number', placeholder: '*NPS score (-100 - +100)', min: -100, max: 100, errorMessage: 'Enter a number between -100 - 100', showError: false},
                    {id: 'week2weekGrowth', type: 'number', placeholder: '*Week to week growth (%)', min: 0, max: 100, errorMessage: 'Enter a number between 0 - 100', showError: false},
                    {id: 'kValue', type: 'number', placeholder: '*K - Value (0 - 10)', min: 0, max: 10, errorMessage: 'Enter a number between 0 - 10', showError: false},
                ],
                [
                    {id: 'example', type: 'text', placeholder: '*example'},
                ],
            ],
            headers: [
                'Startup Report Card',
                'Step 2 of 3',
                'Step 3 of 3',
            ]
        }
        this.handleInput = this.handleInput.bind(this);
        this.switchStep = this.switchStep.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        let { value, type, id } = e.target;
        this.setState({[id]: type === 'number' ? parseFloat(value) : type === 'email' ? value.toLowerCase() : value});
    }

    switchStep(e) {
        e.preventDefault();
        let move = e.target.id;
        move === 'next' ? this.setState({step: this.state.step+1}) 
          : move === 'back' && this.setState({step: this.state.step-1});
    }

    validateInput(e, index) {
        let { value, type, min, max} = e.target;

        const errorDisplay = (boolean) => {
            this.setState({
                fields: update(this.state.fields, {
                    [this.state.step]: {
                        [index]: {
                            "showError": {
                                $set: boolean
                            } 
                        }
                    }
                })
            })
        }

        if (type === 'email') {
            const validationResult = validate(this.state, constraints) // returns a message if !valid

            if (validationResult) {
                errorDisplay(true)
            } else {
                errorDisplay(false)
            }
        } else if (type === 'number') {
            if (parseFloat(value) > max || parseFloat(value) < min) {
                errorDisplay(true);
            } else {
                errorDisplay(false);
            }
        }
    }

    submitForm() {
        // insertToAirTable(this.state);
        // function to send state data to logic processor
        const companyResults = {
            companyName: 'Streamline',
            estimatedValuation: '10M',
            metrics: [
                {name: 'Daily Active Users', grade: 'B'},
                {name: 'Monthly Active Users', grade: 'A+'},
                {name: 'NPS score', grade: 'D'},
            ]
        }
        const htmlStr = renderToStaticMarkup(emailTemplate(companyResults))
        sendEmail(htmlStr);

    }

    render() {
        const { step, fields, headers } = this.state;
        return (
            <div className='container-flex'>
                <div className='row full-height'>
                    <div className='logo'>
                        <p className='logo-text'>Powered By</p>
                        <img src={logo} alt='new stack ventures' className='logo-img'/>
                    </div>
                    <div className='col card'>
                        <h4 className='header' >{headers[step]}</h4>
                          <Form fields={fields[step]} handleInput={this.handleInput} state={this.state} validateInput={this.validateInput} />
                        {step === 0 && <p className='subtext'>Get a valuation estimate and grades on your metrics</p> }
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
                              <button className='btn button-border' id='submit' onClick={this.submitForm}>
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

export default ReportCard;
