
export class Links {
  longUrl   : string;
  shortUrl  : string;
  createdAt : Date;

  constructor(links_: Links){
    this.longUrl   = links_.longUrl;
    this.shortUrl  = links_.shortUrl;
    this.createdAt = links_.createdAt;
  }
}