import { Router } from 'express';

// Controller
import HealthCheckController  from './app/controllers/HealthCheckController';
import AvailableController  from  './app/controllers/AvailableController';
import ClientController  from  './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';



// Validator
import validateClientCreate from './app/validators/ClientCreateValidator';
import validateSessionStore from './app/validators/SessionCreateValidator';



const routes = new Router();

routes.get('/healthcheck', HealthCheckController.index);
routes.get('/', HealthCheckController.index);


routes.post('/client', validateClientCreate, ClientController.store)

routes.get('/coach/:coach_id/available', AvailableController.index)

routes.post('/sessions', validateSessionStore, SessionController.store)




export default routes