/*
  Warnings:

  - The primary key for the `items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `items` table. All the data in the column will be lost.
  - Added the required column `idItems` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `items` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idItems` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idItems`);
