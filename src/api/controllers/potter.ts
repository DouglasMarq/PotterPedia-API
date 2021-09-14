import { Request, Response } from 'express';
import PotterService from '../../service/potter';
import { inject, injectable } from 'inversify';

@injectable()
export default class PotterController {
  constructor(@inject(PotterService) private readonly potterSvc: PotterService) {}

  getStudents = async (req: Request, res: Response) => {
    return res.status(200).json({ result: await this.potterSvc.getStudents() });
  }

  getStaff = async (req: Request, res: Response) => {
    return res.status(200).json({ result: await this.potterSvc.getStaff() });
  }

  getCharacters = async (req: Request, res: Response) => {
    return res.status(200).json({ result: await this.potterSvc.getCharacters() });
  }

  getHouse = async (req: Request, res: Response) => {
    return res.status(200).json({ result: await this.potterSvc.getHouse(req.params['house']) });
  }
}
