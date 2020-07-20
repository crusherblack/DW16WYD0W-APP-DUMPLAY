-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2020 at 07:38 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbplay`
--

-- --------------------------------------------------------

--
-- Table structure for table `artis`
--

CREATE TABLE `artis` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artis`
--

INSERT INTO `artis` (`id`, `name`, `old`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Singer 1', '28', 'Rock', 2019, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Singer 2', '30', 'Pop', 2017, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Boyz II Men', '30', 'Pop', 1990, '2020-07-20 17:12:28', '2020-07-20 17:12:28'),
(18, 'SZA', '20', 'Jazz', 2001, '2020-07-20 17:12:41', '2020-07-20 17:12:41'),
(19, 'Niki', '25', 'Pop', 2015, '2020-07-20 17:12:55', '2020-07-20 17:12:55'),
(20, 'Rich Brian', '20', 'Raper', 2011, '2020-07-20 17:13:19', '2020-07-20 17:13:19'),
(21, 'Joji', '45', 'Jazz', 1990, '2020-07-20 17:14:16', '2020-07-20 17:14:16'),
(22, '88Rising', '15', 'Pop', 2011, '2020-07-20 17:14:31', '2020-07-20 17:14:31'),
(24, 'QG', '20', 'Pop', 2010, '2020-07-20 17:18:14', '2020-07-20 17:18:14'),
(25, 'Ty Dolla $ig', '20', 'Pop', 2020, '2020-07-20 17:18:33', '2020-07-20 17:18:33'),
(26, 'Eminem ', '45', 'DJ', 1990, '2020-07-20 17:18:47', '2020-07-20 17:18:47'),
(27, 'Keanu Reeces', '20', 'DJ', 2020, '2020-07-20 17:19:13', '2020-07-20 17:19:13'),
(28, 'Post Malone', '15', 'Jazz', 2010, '2020-07-20 17:19:41', '2020-07-20 17:19:41');

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `singerId` int(11) NOT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `music`
--

INSERT INTO `music` (`id`, `title`, `thumbnail`, `year`, `singerId`, `attache`, `createdAt`, `updatedAt`) VALUES
(1, 'Love U be', 'music5.png', '2018', 25, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 10:25:48', '0000-00-00 00:00:00'),
(2, 'Never Ending', 'music4.png', '2019', 26, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 07:25:46', '0000-00-00 00:00:00'),
(3, 'Tragic', 'music6.png', '2019', 24, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 08:25:50', '0000-00-00 00:00:00'),
(4, 'Logic', 'music3.png', '2019', 27, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 08:25:43', '0000-00-00 00:00:00'),
(5, 'Circles', 'music2.png', '2019', 28, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 09:25:40', '0000-00-00 00:00:00'),
(6, 'Slow Dancing', 'music8.png', '2018', 21, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 10:25:55', '0000-00-00 00:00:00'),
(7, 'Ed of The time', 'music12.png', '1991', 17, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 07:26:03', '0000-00-00 00:00:00'),
(8, 'History', 'music9.png', '2018', 20, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 10:25:57', '0000-00-00 00:00:00'),
(9, 'Midsummer', 'music7.png', '2018', 22, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 07:25:53', '0000-00-00 00:00:00'),
(10, 'I like U', 'music10.png', '2018', 19, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 09:25:59', '0000-00-00 00:00:00'),
(11, 'Godzilla', 'music1.png', '2020', 26, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 10:25:37', '0000-00-00 00:00:00'),
(12, 'Love Galore', 'music11.png', '2017', 18, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 11:11:47', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200611115852-create-users.js'),
('20200611171756-create-transaction.js'),
('20200622231711-create-artis.js'),
('20200622234632-create-music.js');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `startDate`, `dueDate`, `userId`, `attache`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2020-06-23', '2020-06-23', 3, 'bukti1.jpg', 'Reject', '2020-06-23 12:47:06', '2020-06-23 12:48:52'),
(2, '2020-06-23', '2020-06-23', 3, 'bukti2.png', 'Approved', '2020-06-23 12:48:26', '2020-06-23 12:48:50'),
(3, '2020-06-23', '2020-06-23', 6, 'bukti3.png', 'Approved', '2020-06-23 14:22:24', '2020-06-23 14:22:48'),
(4, '2020-06-30', '2020-06-30', 7, 'bukti4.jpg', 'Approved', '2020-06-30 04:29:42', '2020-06-30 04:30:03'),
(5, '2020-06-30', '2020-06-30', 8, 'bukti5.jpg', 'Approved', '2020-06-30 08:53:10', '2020-06-30 08:53:56'),
(6, '2020-06-30', '2020-06-30', 8, 'bukti1.jpg', 'Reject', '2020-06-30 08:55:26', '2020-06-30 08:56:10'),
(7, '2020-06-30', '2020-06-30', 3, 'bukti1.jpg', 'Approved', '2020-06-30 08:58:58', '2020-06-30 08:59:20'),
(8, '2020-07-20', '2020-07-20', 9, 'bukti3.png', 'Approved', '2020-07-20 13:59:19', '2020-07-20 14:01:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `profile` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `gender`, `phone`, `address`, `subscribe`, `dueDate`, `createdAt`, `updatedAt`, `profile`) VALUES
(1, 'Fadhil Darma Putera Zagoto', 'fadhildarma13@gmail.com', '$2b$10$c2vhktf4GnDP1typLoziX.J5fjjnQVgYgARcesUQC.NAQKVMZQeV.', 1, 'Male', '085256555943', 'komp.jala mitra no.7, cendana mata air,padang', 0, '2020-06-25', '2020-06-23 07:36:46', '2020-07-20 17:27:03', '1595264788097-Picture1.jpg'),
(2, 'teskabar@gmail.com', 'teskabar@gmail.com', '$2b$10$.57MSXm2sNB1YlapmTDTOe2mdYVexm/rOc.380bAMgRfzVa5PEJFG', 2, 'Male', '123131234234', 'dawdawdawd', 1, NULL, '2020-06-23 12:30:16', '2020-06-23 12:30:16', ''),
(3, 'userbiasa@gmail.com', 'userbiasa@gmail.com', '$2b$10$twonOeyMIdSdCdZJiEqeYuLwfPe6b/j8QB.HjcieRk5rQvEC2RTlK', 2, 'Male', '213213213121', 'awdawdawdadwawd', 1, '2020-07-30', '2020-06-23 12:46:38', '2020-06-30 08:59:20', ''),
(4, 'Anak Baru', 'siswabaru@gmail.com', '$2b$10$9u82EdhP6HOp1fJjGU/LQuN5L7atmYDzf/pYMxYwhpvcuovrjHJ0q', 2, 'Male', '213421541234213', '213213213213', 0, NULL, '2020-06-23 13:40:59', '2020-06-23 13:40:59', ''),
(5, 'orangbaru@gmail.com', 'orangbaru@gmail.com', '$2b$10$N/duUFzkJZmmhxlE4q0RWuA1d5Rp0M9Ji5coaYr8LmV8oLtpd9RhW', 2, 'Male', '3456345345435', 'sfes awdadaw daw', 0, NULL, '2020-06-23 13:53:19', '2020-06-23 13:53:19', ''),
(6, 'userMalam', 'usermalam@gmail.com', '$2b$10$.0RgoiY8QM/F/GAP2JloJuO4fYH9vx53lMSZd69J0kVHFh4qkO2me', 2, 'Male', '0845345345', 'awdawdawdawdaw', 1, '2020-07-23', '2020-06-23 14:21:51', '2020-06-23 14:22:48', ''),
(7, 'test@user.com', 'test@user.com', '$2b$10$0FFOpmVHsTp0EP/v6EE9RufYZQCgH5HWSKCZdsXx4JNtP3dQttq42', 2, 'Male', '0892672782', 'aowdkaodkwaw awodkaowkd', 1, '2020-07-30', '2020-06-30 04:29:30', '2020-06-30 04:30:03', ''),
(8, 'userbaru@gmail.com', 'userbaru@gmail.com', '$2b$10$oLuvClqSJtvUqDxr8ofWlejXxovcjN08JquoFc7w3KTU3PklRmjfS', 2, 'Male', '0834623823', 'Jl. jaya baru no.7', 1, '2020-07-30', '2020-06-30 08:52:08', '2020-06-30 08:53:56', ''),
(9, 'Judika', 'judika@gmail.com', '$2b$10$GF96ZW0vgrt4TgRiBMgxX.qd.7IeHcx1hM/8YYqQPPF7iSFGGHXQ2', 2, 'Male', '0827282813', 'Jl. Jakarta', 1, '2020-08-19', '2020-07-20 13:57:16', '2020-07-20 14:01:40', '1595253466955-IMG-0619.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artis`
--
ALTER TABLE `artis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `singerId` (`singerId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artis`
--
ALTER TABLE `artis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_ibfk_1` FOREIGN KEY (`singerId`) REFERENCES `artis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
