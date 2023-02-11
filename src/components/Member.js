import React from 'react'
import {useNavigate } from 'react-router-dom'
function Member({members}) {
    const navigateTo=useNavigate()
  return (
    <div className='container'>
        <h1 className="title">Member List</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Address</th>
            </tr>
            <tbody>

            {
                members.map((member,key) =>{
                    return <tr key={key}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.phone}</td>
                        <td>{member.address}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        <button className="btn btn2" onClick={()=>{navigateTo('/')}}>Back To Home</button>
    </div>
  )
}

export default Member
