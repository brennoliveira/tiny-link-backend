-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortenedUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_originalUrl_key" ON "Links"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Links_shortenedUrl_key" ON "Links"("shortenedUrl");
