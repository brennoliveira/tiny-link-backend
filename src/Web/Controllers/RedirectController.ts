import { ILinksRepository } from "@Models/Entities";
import { Request, Response } from "express";

export class RedirectController {

  constructor(
    private readonly linksRepo: ILinksRepository
  ){}

  execute = async (req: Request, res: Response): Promise<Response | void> =>{
    try {
      const { shortenedUrl } = req.params

      const record = await this.linksRepo.getRecord({shortenedUrl})

      if (record) {
        return res.redirect(record.originalUrl)}

      return res.status(404).json({ error: "URL not found" })
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

