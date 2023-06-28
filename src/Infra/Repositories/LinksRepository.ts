import { Repository } from "./Repository";
import { ILinksRepository, Links } from "@Models/Entities";

export class LinksRepository extends Repository implements ILinksRepository {
  private readonly repository = this.getRepo().links

  async createRecord(data: Pick<Links, 'originalUrl' | 'shortenedUrl'>): Promise<Links> {
    try {
      const info = await this.repository.create({ 
        data: { ...data, createdAt: new Date() } 
      })
      return new Links({ ...info, createdAt: new Date(info.createdAt) })
    } catch (error) {
      console.log(`create record error: ${error}`)
      throw new Error(error)
    }
  }

  async getRecord(data: Partial<Links>): Promise<Links> {
    try {
      const record = await this.repository.findUnique({
        where: {
          originalUrl: data.originalUrl ?? undefined,
          shortenedUrl: data.shortenedUrl ?? undefined,
          id: data.id ?? undefined
        },
      });
      return record;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch records: ${error}`);
    }
  }
  
  
}