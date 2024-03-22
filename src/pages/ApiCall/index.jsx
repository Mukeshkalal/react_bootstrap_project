import { useEffect, useState } from "react";

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
      <table border='5'>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => {
            console.log(item.username)
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td><img src={item.image} alt="" width='50px' /></td>
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