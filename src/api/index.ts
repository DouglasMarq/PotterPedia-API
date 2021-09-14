import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from './controllers';
import Routers from './routers';

@injectable()
export default class API {
  controller: Controller;
  constructor(
    @inject(Controller) controller: Controller,
    @inject(Routers) private readonly routers: Routers) {
    this.controller = controller;
  }

  loadRouters(app: Application) {
    const router = newRouter();

    app.use('/api', router);
    this.routers.load(app);
    return router;
  }
}
