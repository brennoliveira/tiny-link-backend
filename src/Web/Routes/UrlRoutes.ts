import LinkController from '@Web/Controllers/LinkController';
import { Router } from 'express';


export default (router: Router) => {

  router.post('/link/shorten', LinkController.execute)
};
