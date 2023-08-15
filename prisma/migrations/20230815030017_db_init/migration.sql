-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originalUrl" TEXT NOT NULL,
    "shortenedUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_originalUrl_key" ON "Links"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Links_shortenedUrl_key" ON "Links"("shortenedUrl");
