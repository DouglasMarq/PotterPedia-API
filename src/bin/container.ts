import 'reflect-metadata';
import { Container } from 'inversify';
import Server from '../server';

const container = new Container();

export default () => {
  container.bind<Server>(Server).to(Server).inSingletonScope();

  return container;
};
