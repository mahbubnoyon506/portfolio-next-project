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
