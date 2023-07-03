import { ILinksRepository } from "@Models/Entities";
import { generateShortUrl } from "@Shared/Utils";
import { Request, Response } from "express";

export class LinkController {

  constructor(
  private readonly linkRepo: ILinksRepository
  ){}

  execute = async (req: Request, res: Response): Promise<Response> =>{
    try {
      const { originalUrl } = req.body
      
      const urlAlreadyShortened = await this.linkRepo.getRecord({originalUrl})
      if (urlAlreadyShortened) return res.json({ ...urlAlreadyShortened })

      const shortenedUrl = generateShortUrl()
      
      const record = await this.linkRepo.createRecord({ originalUrl, shortenedUrl })
      return res.json({ ...record })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}