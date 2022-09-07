import { useState } from "react";
import './NameFilter.css'

export default function NameFilter(props) {
    const {searchUser} = props
    const [searchName,setsearchName] = useState("")

    const handleName = (e) =>{
        searchUser(e.target.value)
        setsearchName(e.target.value)
    }

    return (
        <div id="name_filter">
            <label for="fname">Find a user</label>
            <input value={searchName} onChange={handleName} type="text" id="fname" name="username" placeholder="Username..."/>
        </div>
    )
}
