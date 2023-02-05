import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    salary: String,
    status: String
}) 
const Users = models.user || model('user', userSchema);
export default Users;