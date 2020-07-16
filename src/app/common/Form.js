import React from 'react';
import '../../styles/Form.css';

const Form = ({ fields, handleInput, toggleCheckbox, state, validateInput }) => {
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
                                className='inputField' 
                                placeholder={field.placeholder} 
                                onChange={handleInput}
                                onBlur={ e => {field.errorMessage && validateInput(e, index)}} />
                            {field.showError && <div className='error'>{field.errorMessage}</div>}
                         </div>

                      : field.type === 'checkbox' ?
                        <div className={field.id ==='categories' ? 'catInputField' :'inputField'} key={field.placeholder}>
                            <div className='select-arrow'>
                                {field.placeholder}
                            </div>
                            {field.id === 'categories' ? 
                                <div className="overflow-auto categories" id={field.id}>
                                    <p className='cat-subtext'>Select at least 4 and up to 10 categories that best describe your business</p>
                                    {field.options && field.options.map( option => (
                                        <div className="form-check form-check-inline third" key={option.id}>
                                            <input 
                                                className="form-check-input" 
                                                onChange={toggleCheckbox} 
                                                checked={state.userCats[option.id] === 'x' ? true : false}
                                                type="checkbox" 
                                                id={option.id} 
                                                value={option} /> 
                                            <label className="form-check-label" htmlFor={option.id}>
                                                {option.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                :
                                <div className="" id={field.id}>
                                    {field.options && field.options.map( option => (
                                        <div className="form-check skew-left" key={option.id}>
                                            <input 
                                                className="form-check-input" 
                                                onChange={toggleCheckbox} 
                                                checked={state[option.id]}
                                                type="checkbox" 
                                                id={option.id} 
                                                value={option} /> 
                                            <label className="form-check-label" htmlFor={option.id}>
                                                {option.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                      
                      : field.options
                        && <div className='inputField' key={field.placeholder}>
                          <div className='select-arrow'>
                            <select 
                                id={field.id} 
                                value={state[field.id]}
                                className='selectBox' 
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