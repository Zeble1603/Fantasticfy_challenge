import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './UserList.css'

//Components
import UserCard from '../UserCard/UserCard';

//This is the Api url that will be called on the backend
const API_URL = "http://localhost:5005/api";


export default function UserList() {
    const [users,setUsers] = useState([])
    const [clonedUsers,setClonedUsers] = useState([])
    const [userEmpty,setUserEmpty] = useState(false)

    useEffect(()=>{
        axios.get(`${API_URL}/users/`)
        .then(foundUsers => setUsers(foundUsers.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <ul className='userlist'>
                {users.map((user)=>{
                    return (<li key={user.id}><UserCard user={user} buttons={true}/></li>)
                })}
            </ul>
        </div>
    )
}
