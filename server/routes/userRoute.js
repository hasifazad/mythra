let express = require('express')
const { CreateUser, getUserById, updateUser, deleteUser } = require('../controller/userController')

let userRoute = express.Router()

userRoute.post('/', CreateUser)
userRoute.get('/profile/:id', getUserById)
userRoute.patch('/update/:id',updateUser)
userRoute.delete('/delete/:id',deleteUser)


module.exports = userRoute
