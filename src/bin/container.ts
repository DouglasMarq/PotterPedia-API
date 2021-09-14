import 'reflect-metadata';
import { Container } from 'inversify';
import Server from '../server';
import Globals from '../constant/globals';
import API from '../api';
import IntegrableRouter from '../api/routers';
import Router from '../api/routers/potter';
import Controller from '../api/controllers';
import PotterController from '../api/controllers/potter';
import PotterService from '../service/potter';

const container = new Container();

export default () => {
  container.bind<Server>(Server).to(Server).inSingletonScope();
  container.bind<Globals>(Globals).to(Globals).inSingletonScope();
  container.bind<API>(API).to(API).inSingletonScope();
  container.bind<IntegrableRouter>(IntegrableRouter).to(IntegrableRouter).inSingletonScope();
  container.bind<Router>(Router).to(Router).inSingletonScope();
  container.bind<Controller>(Controller).to(Controller).inSingletonScope();
  container.bind<PotterController>(PotterController).to(PotterController).inSingletonScope();
  container.bind<PotterService>(PotterService).to(PotterService).inSingletonScope();
  // container.bind<>().to().inSingletonScope();
  // container.bind<>().to().inSingletonScope();
  // container.bind<>().to().inSingletonScope();
  // container.bind<>().to().inSingletonScope();

  return container;
};
