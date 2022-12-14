import User from "../models/User";

export const getUsers = async (req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    }catch(err) {
        res.status(500).send({
            error: err,
            message: 'Error retrieving users'
        })
    }
}

export const createUser = async (req,res) => {
    try{
        const {username, password, email} = req.body;
        const savedUser = await User.create({
            email,
            username,
            password
        })
        res.status(201).send({savedUser})
    }catch(err){
        res.status(500).send({
            error: err,
            message: 'Cannot create user'
        })
    }
}

export const deleteUser = async(req,res) => {
    try{
        const {id} = req.params
        const userToDelete = await User.findByIdAndDelete(id)
        res.status(200).send({userToDelete})
    }catch(err){
        
        res.status(500).send({
            error: err,
            message: 'Server error'
        })
    }
}

    /**
     * 200 OK
     * 304 Not Modified 
     * 400 Bad Request
     * 404 Not Found
     * 500 Server error
     */