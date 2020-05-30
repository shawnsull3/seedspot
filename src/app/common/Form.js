import React from 'react'
import '../../styles/Form.css'

const Form = ({ fields, handleInput, state }) => {
    return (
        <form>
            {fields.map( field => {
                return (
                    field.type === 'text' || field.type === 'email' || field.type === 'password'
                      ? <input 
                            type={field.type} 
                            id={field.id}
                            value={state[field.id]} 
                            className='form-control inputField' 
                            placeholder={field.placeholder} 
                            onChange={handleInput} 
                            key={field.id} />
                      : field.options
                        && <div className='inputField'>
                        <select 
                              id={field.id} 
                              value={state[field.id]}
                              className='form-control selectBox' 
                              onChange={handleInput} 
                              key={field.placeholder} 
                            >
                            <option value="" selected="selected" disabled >{field.placeholder}</option>
                            {field.options.map( option => (
                                <option value={option} key={option}>{option}</option>
                            ))}
                        </select>
                        </div>

                )
            })}
        </form>
    )
}

export default Form;