import { Link  } from "react-router-dom"

function Table({users, query}) {
    return(<table>
    <tbody>
<tr>
    <th>username</th>
    <th>fullname</th>
    <th>email</th>
</tr>
{users.filter((user) => user.username.includes(query)).map(user => (
   <tr key={user.username}>
<td><Link to={`/user/${user._id}`}>{user.username}</Link></td>
<td>{user.fullname}</td>
<td>{user.email}</td>

    </tr> 
))}

    </tbody>
    
    </table>)
}

export default Table