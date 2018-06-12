-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dnd_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dnd_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dnd_db` DEFAULT CHARACTER SET utf8 ;
USE `dnd_db` ;

-- -----------------------------------------------------
-- Table `dnd_db`.`monster`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dnd_db`.`monster` (
  `monster_id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `subtype` VARCHAR(255) NULL DEFAULT NULL,
  `alignment` VARCHAR(255) NULL DEFAULT NULL,
  `armor_class` INT(11) NULL DEFAULT NULL,
  `hit_points` INT(11) NULL DEFAULT NULL,
  `hit_dice` VARCHAR(255) NULL DEFAULT NULL,
  `speed` VARCHAR(255) NULL DEFAULT NULL,
  `strength` INT(11) NULL DEFAULT NULL,
  `dexterity` INT(11) NULL DEFAULT NULL,
  `constitution` INT(11) NULL DEFAULT NULL,
  `intelligence` INT(11) NULL DEFAULT NULL,
  `wisdom` INT(11) NULL DEFAULT NULL,
  `charisma` INT(11) NULL DEFAULT NULL,
  `strength_save` INT(11) NULL DEFAULT NULL,
  `dexterity_save` INT(11) NULL DEFAULT NULL,
  `constitution_save` INT(11) NULL DEFAULT NULL,
  `intelligence_save` INT(11) NULL DEFAULT NULL,
  `wisdom_save` INT(11) NULL DEFAULT NULL,
  `charisma_save` INT(11) NULL DEFAULT NULL,
  `damage_vulnerabilities` TEXT NULL DEFAULT NULL,
  `damage_resistances` TEXT NULL DEFAULT NULL,
  `damage_immunities` TEXT NULL DEFAULT NULL,
  `condition_immunities` TEXT NULL DEFAULT NULL,
  `challenge_rating` TEXT NULL DEFAULT NULL,
  `history` INT(11) NULL DEFAULT NULL,
  `religion` INT(11) NULL DEFAULT NULL,
  `perception` INT(11) NULL DEFAULT NULL,
  `medicine` INT(11) NULL DEFAULT NULL,
  `stealth` INT(11) NULL DEFAULT NULL,
  `acrobatics` INT(11) NULL DEFAULT NULL,
  `athletics` INT(11) NULL DEFAULT NULL,
  `sleight_of_hands` INT(11) NULL DEFAULT NULL,
  `arcana` INT(11) NULL DEFAULT NULL,
  `investigation` INT(11) NULL DEFAULT NULL,
  `nature` INT(11) NULL DEFAULT NULL,
  `animal_handling` INT(11) NULL DEFAULT NULL,
  `insight` INT(11) NULL DEFAULT NULL,
  `survival` INT(11) NULL DEFAULT NULL,
  `deception` INT(11) NULL DEFAULT NULL,
  `intimidation` INT(11) NULL DEFAULT NULL,
  `persuasion` INT(11) NULL DEFAULT NULL,
  `performance` INT(11) NULL DEFAULT NULL,
  `senses` TEXT NULL DEFAULT NULL,
  `languages` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`monster_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 874
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dnd_db`.`action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dnd_db`.`action` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `attack_bonus` INT(11) NULL DEFAULT NULL,
  `damage_dice` VARCHAR(45) NULL DEFAULT NULL,
  `damage_bonus` INT(11) NULL DEFAULT NULL,
  `monster_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `ac_mo_idx` (`monster_id` ASC),
  CONSTRAINT `ac_mo`
    FOREIGN KEY (`monster_id`)
    REFERENCES `dnd_db`.`monster` (`monster_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 850
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dnd_db`.`legendary_action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dnd_db`.`legendary_action` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `attack_bonus` INT(11) NULL DEFAULT NULL,
  `damage_dice` VARCHAR(45) NULL DEFAULT NULL,
  `damage_bonus` INT(11) NULL DEFAULT NULL,
  `monster_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `la_mo_idx` (`monster_id` ASC),
  CONSTRAINT `la_mo`
    FOREIGN KEY (`monster_id`)
    REFERENCES `dnd_db`.`monster` (`monster_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 91
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dnd_db`.`reaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dnd_db`.`reaction` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `attack_bonus` INT(11) NULL DEFAULT NULL,
  `damage_dice` VARCHAR(45) NULL DEFAULT NULL,
  `damage_bonus` INT(11) NULL DEFAULT NULL,
  `monster_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `monster_2_idx` (`monster_id` ASC),
  CONSTRAINT `r_mo`
    FOREIGN KEY (`monster_id`)
    REFERENCES `dnd_db`.`monster` (`monster_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dnd_db`.`special_ability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dnd_db`.`special_ability` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `attack_bonus` INT(11) NULL DEFAULT NULL,
  `damage_dice` VARCHAR(45) NULL DEFAULT NULL,
  `damage_bonus` INT(11) NULL DEFAULT NULL,
  `monster_id` BIGINT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `monster_idx` (`monster_id` ASC),
  CONSTRAINT `sa_mo`
    FOREIGN KEY (`monster_id`)
    REFERENCES `dnd_db`.`monster` (`monster_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 538
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
