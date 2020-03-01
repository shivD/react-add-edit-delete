import React from 'react'
import NodataFound from '../nodatafound'
import {
    Button,
    Table,
    ButtonGroup,
    Modal
  } from "react-bootstrap";

const EmployeList =(props)=>{
 return(
  <>
  {props.EmployeData.length ? (

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>selectedVal</th>
        <th>employee</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.EmployeData.map((employees, i) => (
        <tr key={i}>
          <td>{employees.firstName}</td>
          <td>{employees.lastName}</td>
          <td>{employees.email}</td>
          <td>{employees.selectedVal}</td>
          <td>{employees.employe}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="danger" onClick={props.deleEmployee.bind(this,i)}>Delete</Button>
              <Button variant="secondary">Edit</Button>
              <Button onClick={props.viewEmployee.bind(this, i)} variant="secondary">View</Button>
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>)
  :(
    <NodataFound title='No Record Found'/>
  )
}
  
</>
 )
}
export default EmployeList;