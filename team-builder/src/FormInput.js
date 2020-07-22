import React from 'react'

function FormInput(props) {
    
        const { details } = props

        return (
          <div >
            <h2> Username: {details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
          </div>
        )
    
}

export default FormInput;