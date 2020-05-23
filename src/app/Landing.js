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
            <div className='text'>
                Landing
            </div>
        )
    }
}

export default Landing
