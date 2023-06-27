-- CreateTable
CREATE TABLE "Links" (
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("longUrl")
);
