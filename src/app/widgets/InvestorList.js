import React, { Component } from 'react';
import Form from '../common/Form';
import '../../styles/Form.css';
import '../../styles/InvestorList.css';
import categories from '../common/categories';
import constraints from '../common/constraints';
import emailTemplate from '../common/emailTemplate';
import firmListAlgorithm from '../common/firmListAlgorithm';
import new_stack_logo from '../../images/new_stack_logo.png';
import update from 'immutability-helper';
import { validate } from 'validate.js';
import { renderToStaticMarkup } from 'react-dom/server'
import axios from 'axios';

class InvestorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            location: '',
            preMoneyValuation: '',
            b2b: false,
            b2c: false,
            hardware: false,
            software: false,
            nonTech: false,
            userCats: {},
            email: '',
            step: 0,
            investorInfo: [],
            fields: [
                [
                    {id: 'company', type: 'text', placeholder: 'Company Name'},
                    {id: 'location', placeholder: 'Location', options: [
                        'Atlanta', 'Austin', 'Boston', 'Chicago', 'New York City', 'San Francisco', 'Seattle', 'Everywhere Else'
                    ]},
                ],
                [
                    {id: 'preMoneyValuation', placeholder: 'Your pre-money valuation', options: [
                         '1-5M', '5-10M', '10-15M', '15-20M', '20-30M', '30-40M', '40-60M', '60-100M', '100M+'
                    ]},
                    {id: 'customerType', placeholder: 'Customer Type', type: 'checkbox', options: [
                        {id: 'b2b', name: 'B2B'}, {id: 'b2c', name: 'B2C'}
                    ]},
                    {id: 'productType', placeholder: 'Product Type', type: 'checkbox', options: [
                        {id: 'hardware', name: 'Hardware'}, {id: 'software', name: 'Software'}, {id: 'nonTech', name: 'Non-Tech'}, 
                    ]},
                ],
                [
                    {id: 'categories', placeholder: 'Categories', type: 'checkbox', min: 4, max: 10, errorMessage: 'Please select between 4 - 10', showError: false, options: categories},
                ],
                [
                    {id: 'email', type: 'email', placeholder: '*Email', errorMessage: 'Enter a valid email', showError: false},
                ],
            ],
            headers: [
                'Get Started',
                'Step 2 of 4',
                'Step 3 of 4',
                'Step 4 of 4',
            ]
        }
        this.handleInput = this.handleInput.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.switchStep = this.switchStep.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:3001';

        axios.get(`${url}/airtable`)
          .then((res) => {
            this.setState({investorInfo: res.data})
          })
          .catch((err) => {
            console.log(err);
          });
    }

    handleInput(e) {
        e.preventDefault();
        let { value, type, id } = e.target;
        this.setState({[id]: type === 'number' ? parseFloat(value) : type === 'email' ? value.toLowerCase() : value});
    }

    toggleCheckbox(e) {
        let { id } = e.target;
        if (id.indexOf('Field') !== -1) {
            const userCategories = this.state.userCats;

            if (userCategories[id]) {
                delete userCategories[id];
            } else {
                for (let i=0; i < categories.length; i++) {
                    if (categories[i].id === id) {
                        userCategories[id] = categories[i].name;
                        break;
                    }
                }
            }
            this.setState({userCats: userCategories});
        } else {
            this.setState({[id]: !this.state[id]});
        }
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
        const url = 'http://localhost:3001';

        const userInfo = {
            company: this.state.company,
            location: this.state.location,
            email: this.state.email,
            preMoneyValuation: this.state.preMoneyValuation,
            b2b: this.state.b2b,
            b2c: this.state.b2c,
            hardware: this.state.hardware,
            software: this.state.software,
            nonTech: this.state.nonTech,
            userCats: this.state.userCats,
        }
        const firmList = firmListAlgorithm(userInfo, this.state.investorInfo);
        console.log(firmList);

        axios.post(`${url}/airtable`, userInfo);
        // const htmlStr = renderToStaticMarkup(emailTemplate(companyResults))
        // axios.post(`${url}/sendgrid`, {htmlStr: htmlStr, email: this.state.email});
    }

    render() {
        const { step, fields, headers } = this.state;
        return (
            <div className='row full-width align-items-center'>
                <div className='title'>
                    <h4 className='red'>Stack</h4> <h4 className='grey'>Tools</h4>
                </div>
                <div className='col-12 col-sm-8 col-md-6 col-lg-6 col-xl-5'>
                    <div className='form'>
                        <h2 className='header' >{headers[step]}</h2>
                            <Form fields={fields[step]} handleInput={this.handleInput} toggleCheckbox={this.toggleCheckbox} state={this.state} validateInput={this.validateInput} />
                        <div className='row justify-content-center'>
                            {step !== 0 &&
                                <button className='btn button-border' id='back' onClick={this.switchStep}>
                                    <i className="fa fa-chevron-left chevron" id='back' onClick={this.switchStep}></i> Back
                                </button>
                            }
                            {step !== fields.length-1 &&
                                <button className='btn button-border' id='next' onClick={this.switchStep}>
                                    Next <i className="fa fa-chevron-right chevron" id='next' onClick={this.switchStep}></i>
                                </button>
                            }
                            {step === fields.length-1 &&
                                <button className='btn button-border' id='submit' onClick={this.submitForm}>
                                    Submit
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <div className='col-4 col-md-6 col-lg-6 col-xl-7 city-image d-none d-sm-block'>
                    <div className='row full-width align-items-center justify-content-center'>
                        <h3 className='image-text'>A customized list of venture firms. All ideal fits for your business</h3>
                        <div className='full-ratchet'>
                            <h6>Powered by</h6>
                            <img className='logo' src={new_stack_logo} alt='New Stack Logo' />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default InvestorList;
