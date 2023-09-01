-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(102) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `address` VARCHAR(105) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`salon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`salon` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `salonName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(105) NOT NULL,
  `image` VARCHAR(999) NOT NULL,
  `phoneNumber` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `service` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`shop`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`shop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(500) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(1100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(105) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `experience` INT NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`, `fullname`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
