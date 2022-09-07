import { useLocation,useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

//CSS
import './DetailView.css'

//Components
import UserCard from '../../components/UserCard/UserCard';
import UserList from '../../components/UserList/UserList';

//This is the Api url that will be called on the backend
const API_URL = "http://localhost:5005/api";


export default function DetailView() {
    const location = useLocation()
    const { allUsers } = location.state
    const {userId} = useParams()
    const [user,setUser] = useState(allUsers[0])
    const [relatedUsers,setRelatedUsers] = useState([])
    const [clonedRelatedUsers,setClonedRelatedUsers] = useState([])
    
    //Ask the back end to return the data and set the user
    useEffect(()=>{
        axios.get(`${API_URL}/users/${userId}`)
        .then((foundUser)=>{
            setUser(foundUser.data)
        })
        .catch(err => console.log(err))
    },[userId])

    //Whenever the user is loaded, we look at the other users who have the same key_skills
    useEffect(()=>{
        const filteredUsers = allUsers.filter((userObject)=> {
            return userObject.employment.key_skill === user.employment.key_skill})
        setClonedRelatedUsers(filteredUsers)
        const arrayWithoutCurrentUser = clonedRelatedUsers.filter(userObject=>userObject.uid !== user.uid)
        setRelatedUsers(arrayWithoutCurrentUser)
    },[user])

    //Delete the user
    const deleteUser = (uid) =>{
        const newArray = [...relatedUsers].filter(userObject => userObject.uid !== uid)
        setRelatedUsers(newArray)
        setClonedRelatedUsers(newArray)
    }

    return (
        <div id='detail_view'>
            <span><UserCard id='detail' info={true} user={user} buttons={false}/></span>
            <h2>Related users</h2>
            <UserList deleteUser={deleteUser} users={relatedUsers}/>
        </div>
    )
}
