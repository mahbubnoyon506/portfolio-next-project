import Users from "./model/usersModel"

// GET http://localhost:3000/api/users
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})
        if (!users) return res.status(404).json({ error: 'Data not found' })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' })
    }
}

// GET http://localhost:3000/api/users/1
export async function getUser(req, res){
    try{
      const {userId} = req.query;
      if(userId){
        const user = await Users.findById(userId);
        res.status(200).json(user)
      }
      res.status(404).json({error: 'User not found'})
    }catch(error){
    res.status(404).json({error: 'Error while get user'})
    }
}

// POST http://localhost:3000/api/users
export async function postUsers(req, res){
    try{
      const formData = req.body;
      if(!formData) return res.status(404).json({error: 'Data not found'})
      Users.create(formData, function(err, data){
        return res.status(200).json(data)
      })
    }catch{
        return res.status(404).json(error)
    }
}

// PUT http://localhost:3000/api/users/1
export async function updateUser(req, res){
    try{
      const {userId} = req.query;
      const formData = req.body;
      if(userId && formData){
        await Users.findByIdAndUpdate(userId, formData);
        res.status(200).json(formData)

      }
    }catch(error){
      res.status(404).json({error: 'Error while updating the data'})
    }
}

// DELETE http://localhost:3000/api/users/1
export async function deleteUser(req, res){
    try{
       const {userId} = req.query;
       if(userId){
        await Users.findByIdAndDelete(userId);
        res.status(200).json({deleted: userId})
       }
       res.status(404).json({error: 'User not selected'})
    }catch{
        res.status(404).json({error: 'Error while deleting the data'})
    }
}