import { Router } from 'express';
import cors from 'cors';

import UsersController from './controllers/UserController.js';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'CRUD-RAVEL' }));

routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);
routes.get('/users:uid', UsersController.show);
routes.put('/users:uid', UsersController.update);
routes.delete('/users:uid', UsersController.delete);

export default routes;
