-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.14-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for admin
CREATE DATABASE IF NOT EXISTS `mchajcby_admin` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `mchajcby_admin`;

-- Dumping structure for table admin.home
CREATE TABLE IF NOT EXISTS `home` (
  `no` int(10) NOT NULL AUTO_INCREMENT,
  `num_1` varchar(50) DEFAULT NULL,
  `num_2` varchar(50) DEFAULT NULL,
  `num_3` varchar(50) DEFAULT NULL,
  `num_4` varchar(50) DEFAULT NULL,
  `num_5` varchar(50) DEFAULT NULL,
  `text_1` varchar(50) DEFAULT NULL,
  `text_2` varchar(50) DEFAULT NULL,
  `text_3` varchar(50) DEFAULT NULL,
  `text_4` varchar(50) DEFAULT NULL,
  `text_5` varchar(50) DEFAULT NULL,
  `text_6` varchar(50) DEFAULT NULL,
  `text_7` varchar(50) DEFAULT NULL,
  `text_8` varchar(50) DEFAULT NULL,
  `text_9` varchar(50) DEFAULT NULL,
  `text_10` varchar(50) DEFAULT NULL,
  `text_11` varchar(50) DEFAULT NULL,
  `text_12` varchar(50) DEFAULT NULL,
  `text_13` varchar(50) DEFAULT NULL,
  `text_14` varchar(50) DEFAULT NULL,
  `text_15` varchar(50) DEFAULT NULL,
  `img_1` varchar(50) DEFAULT NULL,
  `img_2` varchar(50) DEFAULT NULL,
  `img_3` varchar(50) DEFAULT NULL,
  `img_4` varchar(50) DEFAULT NULL,
  `img_5` varchar(50) DEFAULT NULL,
  KEY `no` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COMMENT='data';

-- Dumping data for table admin.home: ~1 rows (approximately)
INSERT INTO `home` (`no`, `num_1`, `num_2`, `num_3`, `num_4`, `num_5`, `text_1`, `text_2`, `text_3`, `text_4`, `text_5`, `text_6`, `text_7`, `text_8`, `text_9`, `text_10`, `text_11`, `text_12`, `text_13`, `text_14`, `text_15`, `img_1`, `img_2`, `img_3`, `img_4`, `img_5`) VALUES
	(1, '100k+', '285k+', '19k+', '72k+---', '5', 'Shifting the focus -----------', ' A unique blockchain-enabled auction mechanism tha', 'Drivers and riders are given a voice and their rig', 'Blockchain-based loyalty &amp; incentive program b', 'The use of a blockchain enables trustlessness by l', 'Using smart contracts for the fare negotiations, g', 'The platform itself is governed by a DAO where eve', 'The native platform utility tokens are used for ga', 'Drife is bringing for the first time, a franchise ', 'Get discounts on fares for riders and platform sub', 'DRF token holders can create proposals and vote fo', 'Delegate to Franchise owners - Drivers and Riders ', 'One of the main things that differentiate them fro', ' One of the main things that differentiate them fr', 'One of the main things that differentiate them fro', 'Bitmap.webp', 'market.svg', 'govern.svg', 'participation.svg', 'Phone.webp');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
