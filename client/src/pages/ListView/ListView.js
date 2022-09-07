import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

//CSS
import './ListView.css'

//Components
import NameFilter from '../../components/NameFilter/NameFilter';
import GenderSelect from '../../components/GenderSelect/GenderSelect';
import UserList from '../../components/UserList/UserList'
import LoadingComponent from '../../components/Loading';
import Pagination from '../../components/Pagination/Pagination';

//This is the Api url that will be called on the backend
const API_URL = "http://localhost:5005/api";

export default function ListView() {
    const [users,setUsers] = useState([])
    const [clonedUsers,setClonedUsers] = useState([])
    const [genders,setGenders] = useState([])
    const [isLoader,setIsLoader] = useState(true)
    
    //states relative to pagination
    const [currentPage,setCurrentPage] = useState(1)
    const [usersPerPage] = useState(9)

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

    //Ask the backend for datas when component is mounted
    useEffect(()=>{
        axios.get(`${API_URL}/users/`)
        .then(foundUsers => {
            setUsers(foundUsers.data)
            setClonedUsers(foundUsers.data)})  
        .catch(err => console.log(err))
    },[])

    //When user state is change, check for all the genders returned by the api
    useEffect(()=>{
        const allGenders = users.map(user => user.gender)
        const uniqueGendersArray = [...new Set(allGenders)]
        setGenders(uniqueGendersArray)
    },[users])

    //Loader
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoader(false)
        },3000)
    },[])

    //Pagination
    //Get the current users
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser)

    //Paginate method --> change the current page
    const paginate = (number) => setCurrentPage(number)
    


    return isLoader ? 
    (<LoadingComponent/>)
    :
    (
        <div className='list_view'>
            <div id='filters'>
                <NameFilter searchUser={searchUserByUsername}/>
                <GenderSelect filter={filterUserByGender} genders={genders}/>
            </div>
            <UserList users={currentUsers} deleteUser={deleteUser}/>
            <Pagination paginate={paginate} usersPerPage={usersPerPage} totalUsers={users.length}/>
        </div>
    )
}
