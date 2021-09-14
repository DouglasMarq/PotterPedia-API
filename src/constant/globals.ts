import { injectable } from 'inversify';
import Debug from 'debug';
import json from './characters.json';
const debug = Debug('api:global');

export interface houses {
  [id: string]: any
}

@injectable()
export default class Globals {
    public students: any;
    public characters: any;
    public staff: any;
    public house: houses;
    constructor() {
      this.house = {
        gryffindor: {},
        hufflepuff: {},
        ravenclaw: {},
        slytherin: {},
      };

      debug(`Mapping Hogwarts.`);
      debug(`Initializing Students.`);
      this.students = json.map((item) => {
        if (item.hogwartsStudent) {
          return item;
        }
        return;
      });
      this.students = this.students.filter(Boolean);
      debug(`Initialized.`);

      debug(`Initializing characters.`);
      this.characters = json;
      debug(`Initialized.`);

      debug(`Initializing Staff.`);
      this.staff = json.map((item) => {
        if (item.hogwartsStaff) {
          return item;
        }
        return;
      });
      this.staff = this.staff.filter(Boolean);
      debug(`Initialized.`);

      debug(`Initializing House.`);
      this.house.gryffindor = json.map((item) => {
        if (item.house = 'Gryffindor') {
          return item;
        }
        return;
      });
      this.house.gryffindor = this.house.gryffindor.filter(Boolean);
      this.house.hufflepuff = json.map((item) => {
        if (item.house = 'Hufflepuff') {
          return item;
        }
        return;
      });
      this.house.hufflepuff = this.house.hufflepuff.filter(Boolean);
      this.house.ravenclaw = json.map((item) => {
        if (item.house = 'Ravenclaw') {
          return item;
        }
        return;
      });
      this.house.ravenclaw = this.house.ravenclaw.filter(Boolean);
      this.house.slytherin = json.map((item) => {
        if (item.house = 'Slytherin') {
          return item;
        }
        return;
      });
      this.house.slytherin = this.house.slytherin.filter(Boolean);
      debug(`Initialized.`);
      debug(`Hogwarts Mapped.`);
    }
}
