import { useEffect, useState } from "react";
import "./ApiCall.css";

function ApiCall() {
  const [users, setUsers] = useState([]);
  function handleApi() {
    fetch('https://dummyjson.com/users')
      .then((resp) => resp.json())
      .then((data) => setUsers(data.users))
  }

  useEffect(() => {
    handleApi()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>sr no.</th>
            <th>image</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>gender</th>
            <th>phone</th>
            <th>university</th>
            <th>birthDate</th>
            <th>address</th>
            <th>username</th>
            <th>password</th>
            <th>company</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            console.log(users)
            return (
              <tr key={users.id}>
                <td>{item.id}</td>
                <td><img src={item.image} alt="" width='50px' /></td>
                <td title={item.firstName}>{item.firstName}</td>
                <td title={item.lastName}>{item.lastName}</td>
                <td title={item.gender}>{item.gender}</td>
                <td title={item.phone}>{item.phone.trim().slice(1,4)}...</td>
                <td title={item.university}>{item.university.slice(1,8)}...</td>
                <td title={item.birthDate}>{item.birthDate.slice(1,4)}...</td>
                <td title={item.address.address}>{item.address.address.slice(1,9)}...</td>
                <td>{item.username}</td>
                <td title={item.password}>{item.password.slice(5)}...</td>
                <td title={item.company.name}>{item.company.name.slice(1,4)}...</td>
                <td title={item.company.title}>{item.company.title.slice(1,4)}...</td>
              </tr>
            )
          }) 
          }
        </tbody>
      </table>
    </>

  )
}
export default ApiCall;