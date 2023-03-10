import connectMongo from "../../../components/database/connect";
import { deleteUser, getUsers, postUsers, updateUser } from "../../../components/database/controller";

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({error: 'Error in the connection'}));
    const { method } = req;
    switch (method) {
        case 'GET':
            getUsers(req, res);
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            updateUser(req, res)
            break;
        case 'DELETE':
            deleteUser(req, res)
            break;
        default:
            res.setHandler('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
    }
    // res.status(200).json({ name: 'John Doe' })
}