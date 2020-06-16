import React from 'react';
import '../../styles/Form.css';

const Form = ({ fields, handleInput, state, validateInput }) => {
    return (
        <form>
            {fields.map( (field, index) => {
                return (
                    field.type === 'text' || field.type === 'email' || field.type === 'password' || field.type === 'number'
                      ? <div key={field.id}>
                          <input 
                                type={field.type} 
                                id={field.id}
                                value={state[field.id]}
                                min={field.min}
                                max={field.max} 
                                className='form-control inputField' 
                                placeholder={field.placeholder} 
                                onChange={handleInput}
                                onBlur={ e => {field.errorMessage && validateInput(e, index)}} />
                            {field.showError && <div className='error'>{field.errorMessage}</div>}
                         </div>
                      : field.options
                        && <div className='inputField' key={field.placeholder}>
                          <div className='select-arrow'>
                            <select 
                                id={field.id} 
                                value={state[field.id]}
                                className='form-control selectBox' 
                                onChange={handleInput}
                                >
                                <option value="" selected disabled >{field.placeholder}</option>
                                {field.options.map( option => (
                                    <option value={option} key={option}>{option}</option>
                                ))}
                            </select>
                          </div>
                        </div>

                )
            })}
        </form>
    )
}

export default Form;