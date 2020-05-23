import React, { Component } from 'react'
import '../styles/Landing.css';

export class Landing extends Component {
    constructor(props) {
        super(props);
        this.state ={
            company: '',
            name: '',
            email: '',
        }
        this.textChange = this.textChange.bind(this);
    }

    textChange(e) {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (
            <div className='container-flex'>
                <div className='row'>
                    <div className='col justify-content-center'>
                        <h6>Am I ready to raise capital?</h6>
                        <form>
                            <input type='text' id='company' className='form-control textInput' placeholder='*Company' onChange={this.textChange} />
                            <input type='text' id='name' className='form-control textInput' placeholder='*Name' onChange={this.textChange} />
                            <input type='email' id='email' className='form-control textInput' placeholder='*Email' onChange={this.textChange} />
                        </form>
                        <p className='subtext'>We will email you your results!</p>
                        <button className='btn button-border'>Next <strong> > </strong></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
