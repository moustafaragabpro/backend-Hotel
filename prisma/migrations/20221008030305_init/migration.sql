/*
  Warnings:

  - The values [Abailable] on the enum `Room_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `room` MODIFY `status` ENUM('Available', 'Reserved', 'Disabled') NOT NULL;
