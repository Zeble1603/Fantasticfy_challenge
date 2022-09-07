import React from 'react'
import './GenderSelect.css'
import { useState } from "react";

export default function GenderSelect(props) {
    const {filter,genders} = props
    const [selectedGender,setSelectedGender] = useState("")

    const handleGender = (e) =>{
        filter(e.target.value)
        setSelectedGender(e.target.value)
    }

    return (
        <div id='gender_filter'>
            <label for="gender_select">Choose a gender:</label>
            <select name="genders" id="gender_select" onChange={handleGender} value={selectedGender}>
                <option value="All genders">--All genders--</option>
                {genders.map((gender)=>{
                    return (<option key={gender} value={gender}>{gender}</option>)
                })}
            </select>
        </div>
    )
}
