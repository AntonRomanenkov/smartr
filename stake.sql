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

-- Dumping structure for table admin.stake
CREATE TABLE IF NOT EXISTS `stake` (
  `no` int(11) DEFAULT NULL,
  `num_1` varchar(50) DEFAULT NULL,
  `num_2` varchar(50) DEFAULT NULL,
  `num_3` varchar(50) DEFAULT NULL,
  `num_4` varchar(50) DEFAULT NULL,
  `num_5` varchar(50) DEFAULT NULL,
  `num_6` varchar(50) DEFAULT NULL,
  `num_7` varchar(50) DEFAULT NULL,
  `num_8` varchar(50) DEFAULT NULL,
  `num_9` varchar(50) DEFAULT NULL,
  `num_10` varchar(50) DEFAULT NULL,
  `num_11` varchar(50) DEFAULT NULL,
  `num_12` varchar(50) DEFAULT NULL,
  `num_13` varchar(50) DEFAULT NULL,
  `num_14` varchar(50) DEFAULT NULL,
  `num_15` varchar(50) DEFAULT NULL,
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
  `img_5` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table admin.stake: ~1 rows (approximately)
INSERT INTO `stake` (`no`, `num_1`, `num_2`, `num_3`, `num_4`, `num_5`, `num_6`, `num_7`, `num_8`, `num_9`, `num_10`, `num_11`, `num_12`, `num_13`, `num_14`, `num_15`, `text_1`, `text_2`, `text_3`, `text_4`, `text_5`, `text_6`, `text_7`, `text_8`, `text_9`, `text_10`, `text_11`, `text_12`, `text_13`, `text_14`, `text_15`, `img_1`, `img_2`, `img_3`, `img_4`, `img_5`) VALUES
	(1, '100,000 LP', '90', '18000000', '1234', '100,000,000 DRF', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', 'We are rewarding our early supporters with the opp', 'We are rewarding our early supporters with the opp', 'We are rewarding our early supporters with the opp', ' On the blockchain, your assets are stored securel', 'Among the best rewards in the industry', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', 'Bitmap.webp', 'search.svg', 'balance.svg', 'token.svg', '12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
