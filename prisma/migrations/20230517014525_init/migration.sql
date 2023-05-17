-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `Items_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Items` ADD CONSTRAINT `Items_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;
