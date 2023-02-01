-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chef
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chef
-- -----------------------------------------------------
drop database chef;
CREATE SCHEMA IF NOT EXISTS `chef` DEFAULT CHARACTER SET utf8 ;
USE `chef` ;

-- -----------------------------------------------------
-- Table `chef`.`recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chef`.`recipe` (
  `idrecipe` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `ingredients` MEDIUMTEXT NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `image` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`idrecipe`),
  UNIQUE INDEX `idrecipe_UNIQUE` (`idrecipe` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
