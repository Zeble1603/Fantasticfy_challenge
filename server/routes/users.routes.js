const router = require("express").Router();
const axios = require('axios');

/* We declare the data variable. 
Because the endpoint returns 100 random users, and because there is no endpoint to find an user by 
id, we need a saved data variable to find a single user with ID */
let data

router.get("/", (req, res, next) => {
    res.json("All good in here");
});

//Get all the 100 users
router.get('/users', (req,res,next) => {
    axios
    .get('https://random-data-api.com/api/v2/users',{params:{size:100}})
    .then((users)=> {
        data = users.data
        res.json(data)})
    .catch(err => console.log(err))
})

//Get a single user by its id
router.get('/users/:userId', (req,res,next) => {
    const {userId} = req.params
    const foundUser = data.find(user => user.id == userId)
    res.json(foundUser)
})

module.exports = router;
