import { LinksRepository } from "@Infra/Repositories";
import { generateShortUrl } from "@Shared/Utils";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class LinkController {

  private readonly linkRepo: LinksRepository
  constructor(){
    this.linkRepo = new LinksRepository(new PrismaClient())
  }

  execute = async (req: Request, res: Response): Promise<Response> =>{
    try {
      const { originalUrl } = req.body
      
      const urlAlreadyShortened = await this.linkRepo.getShortenedLink(originalUrl)
      if (urlAlreadyShortened) return res.json({ urlAlreadyShortened })

      const shortenedUrl = generateShortUrl()
      
      const record = await this.linkRepo.createRecord({ originalUrl, shortenedUrl })
      return res.json({ record })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new LinkController()