import { PrismaClient } from "@prisma/client";

export class Repository {
  constructor(
    private readonly connection: PrismaClient
  ) {
    this.connection = new PrismaClient();
  }

  getRepo () {
    return this.connection;
  }
}