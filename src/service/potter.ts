import { inject, injectable } from 'inversify';
import Globals from '../constant/globals';

@injectable()
export default class PotterService {
  constructor(@inject(Globals) private readonly potterVariables: Globals) {}

  async getStudents() {
    return this.potterVariables.students;
  }

  async getStaff() {
    return this.potterVariables.staff;
  }

  async getCharacters() {
    return this.potterVariables.characters;
  }

  async getHouse(house: string) {
    return this.potterVariables.house[`${house.toLowerCase()}`];
  }
}

