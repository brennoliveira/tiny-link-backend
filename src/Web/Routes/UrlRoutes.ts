import { LinksRepository } from '@Infra/Repositories';
import { LinkController, RedirectController } from '@Web/Controllers';
import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const repo = new LinksRepository(new PrismaClient())

const linkController = new LinkController(repo)
const redirectController = new RedirectController(repo)

export default (router: Router) => {

  router.post('/link/shorten', linkController.execute)
  router.get('/link/:shortenedUrl', redirectController.execute)
};
