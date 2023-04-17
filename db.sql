-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for osx10.18 (arm64)
--
-- Host: localhost    Database: social_network
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `body` varchar(255) NOT NULL,
  `idAuthorId` int(11) DEFAULT NULL,
  `idParentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5e5e4b4127b1b91329913c7354d` (`idAuthorId`),
  KEY `FK_ea2a185d1f11fabe521b2ae40ad` (`idParentId`),
  CONSTRAINT `FK_5e5e4b4127b1b91329913c7354d` FOREIGN KEY (`idAuthorId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ea2a185d1f11fabe521b2ae40ad` FOREIGN KEY (`idParentId`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES
(17,'2023-04-17 04:36:26','Mi tercer comentario',1,NULL),
(18,'2023-04-17 04:36:34','Mi segundo post',3,NULL),
(19,'2023-04-17 04:36:48','Primero comentario a primer post',1,17),
(20,'2023-04-17 04:39:18','Segundo comentario a primer post',1,17);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Iron Man','Hero','$2b$10$RuJ.HtFjYW2as3BCJbJU0eD/YSbF3strTVtcaz6uJ9lS1hq6Jxu96','https://media.tenor.com/lraIqlbzwSwAAAAC/iron-man-tony-stark.gif'),
(2,'Iron Man2','Hero','$2b$10$skhVQ846MlSPKY0X2PggNuK7FDuw66WDSEZNI2JizUZPucZRTvRNa','https://media.tenor.com/lraIqlbzwSwAAAAC/iron-man-tony-stark.gif'),
(3,'Thanos','Villain','$2b$10$MR7mVkWb0QFbnDKCVhWvluiBTaPYHN7gvFH0Oat0Z.4CWaHYul3Fm','https://media.tenor.com/ZY-HgrsODNgAAAAd/thanos-infinity-stones.gif'),
(4,'Thanos2','Villain','$2b$10$8AkOHXxW56oBgOXpN8CSC.eoEs8nnVJNoDJumpqrkpvNFtE.yizlS','https://media.tenor.com/ZY-HgrsODNgAAAAd/thanos-infinity-stones.gif');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17  5:21:25
