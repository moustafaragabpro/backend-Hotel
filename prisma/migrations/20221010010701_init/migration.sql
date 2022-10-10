/*
  Warnings:

  - You are about to alter the column `isAdmin` on the `user` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum("User_isAdmin")`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `isAdmin` ENUM('user', 'admin') NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE `InvalidJWT` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jwt` VARCHAR(255) NOT NULL,
    `exp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
