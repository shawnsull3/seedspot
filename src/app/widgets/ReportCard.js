import React, { Component } from 'react';
import Form from '../common/Form';
import logo from '../../images/newStack.png';
import '../../styles/Form.css';
import '../../styles/ReportCard.css';

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
            NPSscore: null,
            week2weekGrowth: null,
            kValue: null,
            step: 0,
            fields: [
                [
                    {id: 'company', type: 'text', placeholder: '*Company Name'},
                    {id: 'email', type: 'email', placeholder: '*Email'},
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
                    {id: 'NPSscore', type: 'number', placeholder: '*NPS score (-100 - +100)', min: -100, max: 100},
                    {id: 'week2weekGrowth', type: 'number', placeholder: '*Week to week growth (%)', min: 0, max: 100},
                    {id: 'kValue', type: 'number', placeholder: '*K - Value (0 - 10)', min: 0, max: 10},
                ],
                [
                    {id: 'name', type: 'text', placeholder: '*Name'},
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
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }

    switchStep(e) {
        e.preventDefault();
        let move = e.target.id;
        console.log(e.target)
        console.log(move);
        move === 'next' ? this.setState({step: this.state.step+1}) 
          : move === 'back' && this.setState({step: this.state.step-1});
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
                        <h5>{headers[step]}</h5>
                          <Form fields={fields[step]} handleInput={this.handleInput} state={this.state} />
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

export default ReportCard;
