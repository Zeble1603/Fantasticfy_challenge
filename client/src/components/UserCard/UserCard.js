import React from 'react'
import './UserCard.css'

export default function UserCard(props) {
    const {user,buttons} = props

    return (
    <div className='card'>
        <div className='card_body'>
            <img src={user.avatar} alt='user avatar'/>
            <h2>{user.first_name} {user.last_name}</h2>
        </div>
        {buttons && 
            <div className='card_buttons'>
                    <button className='card_button' id='button_details'>
                    DETAILS
                    </button>
                    <button className='card_button' id='button_delete'>
                        DELETE
                    </button>
            </div>
        }
    </div>
    )
}
