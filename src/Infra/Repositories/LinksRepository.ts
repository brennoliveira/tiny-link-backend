import { Repository } from "./Repository";
import { ILinksRepository, Links } from "@Models/Entities";

export class LinksRepository extends Repository implements ILinksRepository {
  private readonly repository = this.getRepo().links

  async createRecord(data: Pick<Links, 'originalUrl' | 'shortenedUrl'>): Promise<Links> {
    try {
      const info = await this.repository.create({ 
        data: { ...data, createdAt: new Date() } 
      })
      console.log('repo: ',info)
      return new Links({ ...info, createdAt: new Date(info.createdAt) })
    } catch (error) {
      console.log(`create record error: ${error}`)
      throw new Error(error)
    }
  }

  async getRecord(data: Partial<Links>): Promise<Links> {
    try {
      return await this.repository.findFirst({ where: {
        originalUrl: data.originalUrl,
        shortenedUrl: data.shortenedUrl
      } })
    } catch (error) {
      console.log(`find record error: ${error}`)
      throw new Error(error)
    }
  }
}