import 'dotenv/config'
import cors from 'cors'
import 'express-async-errors';
import express from 'express';
import swaggerUi from "swagger-ui-express";


import swaggerFile from "./swagger/swagger.json";
import routes from './routes';
import './database'

import AppError from './shared/AppError';


class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler()
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors())
    this.server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  }

  routes() {
    this.server.use('/api', routes);
  }

  exceptionHandler() {
      this.server.use((err, request, response, _) => {
        if(err instanceof AppError){
          return response.status(err.statusCode).json({ status: 'error', message: err.message})
        }
        console.error(err)
        return response.status(500).json({ status: 'error', message: 'Internal Server Error'})
    })
  }
}

export default new App().server;