
DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `commentUserId_idx` (`userId`),
  KEY `postId_idx` (`postId`),
  CONSTRAINT `commentUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



LOCK TABLES `comments` WRITE;
INSERT INTO `comments` VALUES (4,'comment one','2023-03-29 23:34:26',2,15),(5,'a reply','2023-03-30 13:32:25',2,15),(11,'first comment','2023-03-31 14:23:05',2,1),(13,'Hellos.blog ','2023-03-31 15:27:09',2,16);
UNLOCK TABLES;
