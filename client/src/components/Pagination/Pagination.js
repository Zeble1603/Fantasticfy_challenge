import { useState } from 'react'
import './Pagination.css'

export default function Pagination(props) {
    const {usersPerPage,totalUsers, paginate} = props
    const pageNumber = []

    //create the right number of pages in relation to the number of users
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage);i++){
        pageNumber.push(i)
    }
    
    return (
        <div class="pagination">
            {pageNumber.map(number=>(
                <a onClick={()=> paginate(number)} key={number} href>{number}</a>
            ))}
            
        </div>
    )
}
