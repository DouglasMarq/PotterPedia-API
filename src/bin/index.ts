import config from 'config';
import Server from '../server';
import containers from './container';
import Debug from 'debug';
const debug = Debug('api:init');

export const init = () => {
  debug(`Starting API`);
  const container = containers();

  container.get(Server).listen(config.get('server.port') as number);
};

export default init();
