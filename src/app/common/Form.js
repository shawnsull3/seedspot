import React from 'react'

const Form = ({ fields, handleInput }) => {
    return (
        <form>
            {fields.map( field => {
                return (
                    field.type === 'text' || field.type === 'email' || field.type === 'password'
                      ? <input type={field.type} id={field.id} className='form-control inputField' placeholder={field.placeholder} onChange={handleInput} />
                      : field.type === 'dropdown'
                        && <select id={field.id} className='form-control inputField' onChange={handleInput} >
                            <option value="" selected="selected" disabled>{field.placeholder}</option>
                            {field.options.map( option => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                )
            })}
        </form>
    )
}

export default Form;