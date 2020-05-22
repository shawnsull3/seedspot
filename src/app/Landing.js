import React, { Component } from 'react'
import { Paper, Typography, TextField, Button } from '@material-ui/core';

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
            <Paper>
                <Typography variant='subtitle1'>
                    Am I ready to raise capital?
                </Typography>
                <form>
                    <div>
                        <TextField id='company' placeholder='company' onChange={this.textChange} variant="outlined" />
                    </div>
                    <div>
                        <TextField id='name' placeholder='name' onChange={this.textChange} variant="outlined" />
                    </div>
                    <div>
                        <TextField id='email' placeholder='email' onChange={this.textChange} variant="outlined" />
                    </div>
                </form>
                <Typography variant='caption'>
                    We will email you your results!
                </Typography>
                <div>
                    <Button variant="contained" size='small'>
                        Next >
                    </Button>
                </div>
            </Paper>
        )
    }
}

export default Landing
