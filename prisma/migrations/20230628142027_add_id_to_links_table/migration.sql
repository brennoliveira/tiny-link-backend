/*
  Warnings:

  - The primary key for the `Links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `longUrl` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `shortUrl` on the `Links` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[originalUrl]` on the table `Links` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortenedUrl]` on the table `Links` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Links` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `originalUrl` to the `Links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortenedUrl` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Links" DROP CONSTRAINT "Links_pkey",
DROP COLUMN "longUrl",
DROP COLUMN "shortUrl",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "originalUrl" TEXT NOT NULL,
ADD COLUMN     "shortenedUrl" TEXT NOT NULL,
ADD CONSTRAINT "Links_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Links_originalUrl_key" ON "Links"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Links_shortenedUrl_key" ON "Links"("shortenedUrl");
