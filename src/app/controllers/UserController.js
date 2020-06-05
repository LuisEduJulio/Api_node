const User = require('../models/User');

class UserController{
    //GET
    // users
    async index(req, res){
        const users = await User.find({});

        return res.json(users)
    }
    //POST
    // users
    async store(req, res){
        const user = await User.create(req.body);

        return res.json({user:user.getJson()})
    }
    //PUT
    //users/:{id}
    async update(req, res){
        const {name, email, password, role} = req.body

        const user = await User.findById(req.params.id)

        if(!user) {
            return res.json({error: 'Not user!'})
        }

        if(email && email !== user.email) {
            const userExists = await User.find({email})

            if(userExists) {
                return res.json({error: 'Email is in use'})
            }else{
                user.email = email;
            }
        }

        if(name) user.name = name;
        if(password) user.password = password;
        if(role) user.role = role;

        await user.save();

        return res.json({user: user.getJson()})
    }

    //DELETE
    // users/:{id}
    async destroy(req, res){
        const user = await User.findById(req.params.id);

        if(!user){
            return res.json({
                error: "User does not exist!"
            })
        }
        await user.remove();

        return res.json({
            deleted: true
        })
    }
}

module.exports = new UserController();