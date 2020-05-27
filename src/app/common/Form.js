import React from 'react'
import '../../styles/Form.css'

const Form = ({ fields, handleInput }) => {
    return (
        <form>
            {fields.map( field => {
                return (
                    field.type === 'text' || field.type === 'email' || field.type === 'password'
                      ? <input 
                            type={field.type} 
                            id={field.id} 
                            className='form-control inputField' 
                            placeholder={field.placeholder} 
                            onChange={handleInput} 
                            key={field.id} />
                      : field.options
                        && <select 
                              id={field.id} 
                              className='form-control inputField' 
                              onChange={handleInput} 
                              key={field.placeholder} 
                            >
                            <option value="" selected="selected" disabled >{field.placeholder}</option>
                            {field.options.map( option => (
                                <option value={option} key={option}>{option}</option>
                            ))}
                        </select>
                )
            })}
        </form>
    )
}

export default Form;