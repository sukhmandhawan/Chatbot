
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(145) DEFAULT NULL,
  `coverPic` varchar(400) DEFAULT NULL,
  `profilePic` varchar(400) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'test user','test','test@gmail.com','12345678',NULL,NULL,NULL,NULL),(2,'testing','testing','testing@gmail.com','$2a$10$cGejYoIONuYRkAu4VjJF9eFnwnwp0qz/4idLDWGO.n5kvorTG/cae','https://images.unsplash.com/photo-1679678691010-985ab6b8ff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80','https://images.unsplash.com/photo-1680028136470-5a957bc07a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',NULL,NULL),(14,'ish','ish','ish@gmail.com','$2a$10$GSEW3qxW6Ei10J8jjpCm6eC77UqDJOliuKzNIrwIovKid1Oy286Y.',NULL,NULL,NULL,NULL);
UNLOCK TABLES;