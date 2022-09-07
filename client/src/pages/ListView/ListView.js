import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

//CSS
import './ListView.css'

//Components
import NameFilter from '../../components/NameFilter/NameFilter';
import GenderSelect from '../../components/GenderSelect/GenderSelect';
import UserList from '../../components/UserList/UserList'

//This is the Api url that will be called on the backend
const API_URL = "http://localhost:5005/api";

export default function ListView() {
    const [users,setUsers] = useState([])
    const [clonedUsers,setClonedUsers] = useState([])
    const [genders,setGenders] = useState([])
    
    //functions that will be used to filter. Will be passed as props
    //Name filter function
    const searchUserByUsername = (name) => {
        const updatedUsers = clonedUsers.filter((clonedUser)=>{
            if(name===''){
                return clonedUser
            }else{
                return clonedUser.username.toLowerCase().includes(name.toLowerCase())
            }
        })
        setUsers(updatedUsers)
    }

    //Gender select
    const filterUserByGender = (gender) =>{
        const updatedUsers = clonedUsers.filter((clonedUser)=>{
            if(gender==='All genders'){
                return clonedUser
            }
            return clonedUser.gender.toLowerCase()===gender.toLowerCase()
            
        })
        setUsers(updatedUsers) 
    }

    //Delete user
    const deleteUser = (uid) =>{
        console.log(uid)
        const newArray = [...users].filter(userObject => userObject.uid !== uid)
        setUsers(newArray)
        setClonedUsers(newArray)
    }


    useEffect(()=>{
        axios.get(`${API_URL}/users/`)
        .then(foundUsers => {
            setUsers(foundUsers.data)
            setClonedUsers(foundUsers.data)})  
        .catch(err => console.log(err))
    },[])


    useEffect(()=>{
        const allGenders = users.map(user => user.gender)
        const uniqueGendersArray = [...new Set(allGenders)]
        setGenders(uniqueGendersArray)
    },[users])

    return (
        <div className='list_view'>
            <div id='filters'>
                <NameFilter searchUser={searchUserByUsername}/>
                <GenderSelect filter={filterUserByGender} genders={genders}/>
            </div>
            <UserList users={users} deleteUser={deleteUser}/>
        </div>
    )
}
