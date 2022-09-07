import React from 'react'
import { Link } from 'react-router-dom'
import './UserCard.css'

export default function UserCard(props) {
    const {user,buttons,allUsers,info,deleteUser} = props

    return (
    <div className='card'>
        <div className='card_body'>
            <img src={user.avatar} alt='user avatar'/>
            <h2>{user.first_name} {user.last_name}</h2>
            {info &&
            <div className='card_info'>
                <p>Username: {user.username}<br/>
                Password: {user.password}<br/>
                Email: {user.email}<br/>
                Gender: {user.gender}<br/>
                Phone number: {user.phone_number}<br/>
                Social insurance number: {user.social_insurance_number}<br/>
                Date of birth: {user.date_of_birth}<br/>
                Employment: {user.employment.title}, {user.employment.key_skill} <br/>
                </p>
                <p>Address: {user.address.street_address},
                {user.address.street_name}, 
                {user.address.city}, 
                {user.address.zip_code},  
                {user.address.state}, 
                {user.address.country}, 
                <br/> 
                Coordinates: 
                {user.address.coordinates.lat},{user.address.coordinates.lng}
                </p>
                <p>Credit card number: {user.credit_card.cc_number}</p>
                <p> 
                Subscription <br/>
                Plan: {user.subscription.plan}<br/>
                Status: {user.subscription.status}<br/>
                Payment method: {user.subscription.payment_method}<br/>
                Term: {user.subscription.term}<br/>
                </p>
                <Link to={`/`}>
                    <button className='card_button' id='button_details'>
                        BACK TO LIST
                    </button>
                </Link>
            </div>
        }
        </div>
        {buttons && 
            <div className='card_buttons'>
                <Link to={`/${user.uid}`} state={{ allUsers: allUsers }}>
                    <button className='card_button' id='button_details'>
                        DETAILS
                    </button>
                </Link>
                    <button className='card_button' id='button_delete' onClick={()=>{deleteUser(user.uid)}}>
                        DELETE
                    </button>
            </div>
        }
    </div>
    )
}
