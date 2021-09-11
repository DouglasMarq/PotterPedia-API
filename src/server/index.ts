import { injectable } from 'inversify';
import http, { Server as _Server } from 'https';
import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import Debug from 'debug';
const debug = Debug('api:init');

@injectable()
export default class Server {
    readonly _: _Server;
    readonly app: Application;

    constructor() {
      const app = (this.app = express());

      app.enabled('trust proxy');
      app.use(express.json({ limit: '50mb' }));
      app.use(express.urlencoded({ extended: false, limit: '50mb' }));
      app.use(compression());
      app.use(helmet({ frameguard: false }));
      app.use(cors({ origin: '*', credentials: true }));

      app.enabled('trust proxy');
      //   app.use(router.loadRouters(app));

      app.use((req: Request, res: Response, next: NextFunction) => {
        return res.status(404).json({ err: 'not found 404' });
      });

      app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).json({ err: 'server error 500' });
      });

      this._ = http.createServer(app);
    }

    listen(port: number) {
      this.app.set('port', port);
      this.app.listen(port);
      debug(`HTTP server running at port ${port}`);
    }
}
