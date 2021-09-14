import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controllers';

@injectable()
export default class Router {
  constructor(@inject(Controller) public readonly controller: Controller) {}

  load(app: Application) {
    const router = newRouter();
    router.get('/students', this.controller.potterController.getStudents);
    router.get('/staff', this.controller.potterController.getStaff);
    router.get('/characters', this.controller.potterController.getCharacters);
    router.get('/house/:house', this.controller.potterController.getHouse);
    app.use(`/api`, router);
    return router;
  }
}
