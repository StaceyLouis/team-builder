import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import FormInput from './FormInput'
import { v4 as uuid } from 'uuid';


const initialTeam = {
  id: uuid(),
  username : "Staseface",
  email: 'staseface@awesome.com',
  role: 'Designer'
}
// create initial form values 

const initialFormValues={
  username:'',
  email:'',
  role: '',
} 

const fakeAxiosGet = () => {
  return Promise.resolve({status: 200, success: true, data: initialTeam})
}
const fakeAxiosPost =(url, {username, email, role}) => {
  const newTeamMate ={id: uuid(), username,email,role}
  return Promise.resolve({status:200, success: true, data: newTeamMate})
}
function App() {
  // Set up state for the team 
  const [team , setTeam]= useState([])

 // set up state to hold the form values 
  const [formVal, SetFormVal] = useState(initialFormValues)

  // Create form to update form 
  const updateForm = (inputName, inputValue) => {
   const  updatedFormValue = {...formVal, [inputName]: inputValue}
    SetFormVal(updatedFormValue)
  }

  const submitForm = () => {
 
    const newTeamMate ={
      username : formVal.username.trim(),
      email: formVal.email.trim(),
      role: formVal.role
    }
    if(!newTeamMate.username || !newTeamMate.email || !newTeamMate.role) return
    fakeAxiosPost('fakeapi.com', newTeamMate)
    .then(res =>{
      const initialTeamFromAPI = res.data;
      setTeam([ initialTeamFromAPI,...team])
    SetFormVal(initialFormValues)
    })
  }
  useEffect(() =>{
    fakeAxiosGet('fakeapi.com').then(res => setTeam([res.data]))
  }, [])
  return (
    <div className="App">
   <Form value={formVal} update={updateForm} submit={submitForm}/>
   {
   team.map(teamA => {
        return  <FormInput key={teamA.id} details={teamA} />
        
      })}

    </div>
  );
}

export default App;
