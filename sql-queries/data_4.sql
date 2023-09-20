

DROP TABLE IF EXISTS `subreply`;

CREATE TABLE `subreply` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(145) DEFAULT NULL,
  `replyUserId` int DEFAULT NULL,
  `replyCommentId` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `replyUserId_idx` (`replyUserId`),
  KEY `replyCommentId_idx` (`replyCommentId`),
  CONSTRAINT `replyCommentId` FOREIGN KEY (`replyCommentId`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `replyUserId` FOREIGN KEY (`replyUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `subreply` WRITE;
INSERT INTO `subreply` VALUES (2,'nested sub reply testing',2,NULL,NULL),(6,'replycommentId',2,5,'2023-03-31 14:19:29'),(7,'reply id check',2,11,'2023-03-31 14:23:15');
UNLOCK TABLES;
