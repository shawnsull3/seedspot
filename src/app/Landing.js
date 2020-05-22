import React, { Component } from 'react'
import { Paper, Typography, TextField, Button } from '@material-ui/core';
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
            <Paper className='formPaper'>
                <Typography variant='subtitle1'>
                    Am I ready to raise capital?
                </Typography>
                <form>
                    <div className='textInput'>
                        <TextField id='company' placeholder='company' onChange={this.textChange} variant="outlined" size='small'/>
                    </div>
                    <div className='textInput'>
                        <TextField id='name' placeholder='name' onChange={this.textChange} variant="outlined" size='small' />
                    </div>
                    <div className='textInput'>
                        <TextField id='email' placeholder='email' onChange={this.textChange} variant="outlined" size='small' />
                    </div>
                </form>
                <Typography variant='caption'>
                    We will email you your results!
                </Typography>
                <div className='nextBtn'>
                    <Button variant="contained" size='small'>
                        Next >
                    </Button>
                </div>
            </Paper>
        )
    }
}

export default Landing
