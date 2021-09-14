import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controllers';
import PotterRouter from './potter';

@injectable()
export default class IntegrableRouter {
  constructor(
    @inject(Controller) public readonly controller: Controller,
    @inject(PotterRouter) private readonly potterRouter: PotterRouter,
  ) {}

  load(app: Application) {
    const router = newRouter();
    this.potterRouter.load(app);
    return router;
  }
}
