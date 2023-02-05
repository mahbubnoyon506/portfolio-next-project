import connectMongo from "../../../components/database/connect";
import { getUsers, postUsers } from "../../../components/database/controller";

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
            res.status(200).json({ method, name: 'PUT Request' });
            break;
        case 'DELETE':
            res.status(200).json({ method, name: 'DELETE Request' });
            break;
        default:
            res.setHandler('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
    }
    // res.status(200).json({ name: 'John Doe' })
}