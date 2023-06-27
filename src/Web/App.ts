import * as express from 'express';
import { Application, Router } from 'express';
import { readdirSync } from 'fs'
import { join } from 'path'
import * as cors from 'cors';

class App {
  express: Application;

  constructor() {
    this.express = express();
    this.loadRoutes();
    this.expressConfig();
  }

  private expressConfig(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private loadRoutes(): void {
    const router = Router();
  
    const routeFiles = readdirSync(join(__dirname, './Routes'));
  
    routeFiles.forEach(async (file) => {
      const { default: route } = await import(`./Routes/${file}`);
      route(router);
    });
  
    this.express.use('/api', router);
  }
  
}

const PORT = process.env.PORT || 4000
const app = new App().express;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
  })