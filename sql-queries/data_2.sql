
DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(500) DEFAULT NULL,
  `img` varchar(245) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `posts` WRITE;
INSERT INTO `posts` VALUES (1,'some description here',NULL,1,NULL),(2,'lorem ipsum text here',NULL,2,NULL),(4,'hey from node mysql db',NULL,2,'2023-03-27 23:03:47'),(15,'hello ther','',2,'2023-03-29 23:16:26'),(16,'hello ther',NULL,2,'2023-03-29 23:16:26'),(19,'Today\'s Topic is climate Change let\'s Discuss it.','1680260125226climate.webp',2,'2023-03-31 15:55:25'),(20,'Today\'s Topic is climate Change let\'s Discuss it.',NULL,2,'2023-03-31 15:55:25');
UNLOCK TABLES;

