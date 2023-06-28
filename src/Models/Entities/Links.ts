
export class Links {
  id           : string;
  originalUrl  : string;
  shortenedUrl : string;
  createdAt    : Date;

  constructor(links_: Links){
    this.id           = links_.id;
    this.originalUrl  = links_.originalUrl;
    this.shortenedUrl = links_.shortenedUrl;
    this.createdAt    = links_.createdAt;
  }
}

export interface ILinksRepository {
  createRecord(data: Pick<Links, 'originalUrl' | 'shortenedUrl'>): Promise<Links>;
  getRecord(data: Partial<Links>): Promise<Links>;
}