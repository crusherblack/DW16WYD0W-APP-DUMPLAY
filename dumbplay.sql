-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2020 at 09:37 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

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
(2, 'Singer 2', '30', 'Pop', 2017, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
(1, 'Music 5', 'music5.png', '2007', 1, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:48', '0000-00-00 00:00:00'),
(2, 'Music 4', 'music4.png', '2018', 1, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:46', '0000-00-00 00:00:00'),
(3, 'Music 6', 'music6.png', '2018', 1, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:50', '0000-00-00 00:00:00'),
(4, 'Music 3', 'music3.png', '2018', 1, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 13:25:43', '0000-00-00 00:00:00'),
(5, 'Music 2', 'music2.png', '2018', 2, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 13:25:40', '0000-00-00 00:00:00'),
(6, 'Music 8', 'music8.png', '2018', 1, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:55', '0000-00-00 00:00:00'),
(7, 'Music 12', 'music12.png', '2018', 2, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:26:03', '0000-00-00 00:00:00'),
(8, 'Music 9', 'music9.png', '2018', 2, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:57', '0000-00-00 00:00:00'),
(9, 'Music 7', 'music7.png', '2018', 1, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:53', '0000-00-00 00:00:00'),
(10, 'Music 10', 'music10.png', '2018', 2, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:25:59', '0000-00-00 00:00:00'),
(11, 'Music 1 Namanya Panjang', 'music1.png', '2018', 1, 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3', '2020-06-23 13:25:37', '0000-00-00 00:00:00'),
(12, 'Music 11', 'music11.png', '2018', 2, 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3', '2020-06-23 13:26:01', '0000-00-00 00:00:00');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `gender`, `phone`, `address`, `subscribe`, `dueDate`, `createdAt`, `updatedAt`) VALUES
(1, 'Fadhil Darma Putera Zagoto', 'fadhildarma13@gmail.com', '$2b$10$c2vhktf4GnDP1typLoziX.J5fjjnQVgYgARcesUQC.NAQKVMZQeV.', 2, 'Male', '085256555943', 'komp.jala mitra no.7, cendana mata air,padang', 0, NULL, '2020-06-23 07:36:46', '2020-06-23 07:36:46');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
