import './UserList.css'

//Components
import UserCard from '../UserCard/UserCard';


export default function UserList(props) {
    const {users,deleteUser} = props
    return (
        <div>
            <ul className='userlist'>
                {users.map((user)=>{
                    return (<li key={user.uid}>
                            <UserCard 
                            deleteUser={deleteUser}
                            info={false} 
                            allUsers={users} 
                            user={user} 
                            buttons={true}/></li>)
                })}
            </ul>
        </div>
    )
}
