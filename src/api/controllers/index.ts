import { inject, injectable } from 'inversify';
import PotterController from './potter';

@injectable()
export default class Controller {
  constructor(@inject(PotterController) public readonly potterController: PotterController) {}

}
