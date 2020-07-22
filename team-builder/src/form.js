import React from 'react';
import './App.css';


function Form (props) {
    const {value, update, submit} = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        update(name , value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    
    return (
<form className='form container' onSubmit={onSubmit}>
         <div className="form-wrapper">

      <p>  <label htmlFor='username'>Username:&nbsp;
          <input
            id='username'
            name='username'
            type='text'
            placeholder='Enter username'
            maxLength='20'
            value={value.username}
            onChange={onChange}
          />
        </label>
</p>
<p>
        <label htmlFor='email'>Email:
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter email'
            
            value={value.email}
            onChange={onChange}
          />
        </label> 
</p>
<p>
        <label>Role: 
          <select name='role' value={value.role} onChange={onChange}>
            <option disabled value=''>Select a role</option>
            <option value='Front-End'>Front-End</option>
            <option value='Designer'>Designer</option>
            <option value='Data Scientist'>Data Scientis</option>
          </select>
        </label>
        </p>
        <div >
        <h2>Add TeamMate</h2>
        <button disabled={!value.username || !value.email || !value.role}>submit</button>
      </div>
      </div>

    </form>
  )
}


export default Form;