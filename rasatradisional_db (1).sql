-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2024 at 03:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rasatradisional_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `komen`
--

CREATE TABLE `komen` (
  `id` int(11) NOT NULL,
  `namakomen` varchar(255) DEFAULT NULL,
  `pendapat` varchar(255) DEFAULT NULL,
  `idmakanan` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `komen`
--

INSERT INTO `komen` (`id`, `namakomen`, `pendapat`, `idmakanan`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'sd', '111', 32, 4, '2024-06-22 21:33:58', '2024-06-22 21:33:58'),
(7, '12', 'f2', 32, 0, '2024-06-22 21:47:36', '2024-06-22 21:47:36'),
(59, 'ahgas', 'awer', 29, 5, '2024-06-24 00:16:44', '2024-06-24 00:16:44'),
(75, 'riska', 'lapar', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 'riska', 'enak', 27, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'riska', 'lapar', 27, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'sdgf', 'asf', 2, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(4, 'aaron', 'email@gsedg.com', '$2b$10$P6b3i0smoxkqo.Pl7ZVyA.iI5MovWRUw7xPP0Z3HiUbhpCfqsBWVC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiJhYXJvbiIsImVtYWlsIjoiZW1haWxAZ3NlZGcuY29tIiwiaWF0IjoxNzE3NTgxNTU1LCJleHAiOjE3MTc2Njc5NTV9.pB1IqVdM4rehCPHbonb0SegH7pIjdq200i92AgbSNQc', '2024-06-01 03:45:02', '2024-06-05 09:59:15'),
(5, 'D', 'D', '$2b$10$JG4QXP5oaAH8Tle9a8i.6.IeP5mrkz3dGD5ChBFkulXiSCVp3r3/u', NULL, '2024-06-01 07:17:32', '2024-06-02 23:44:48'),
(6, 'D', 'D', '$2b$10$XR/M2NSs3Mdcg5rp9mjIx.9IAnbRxA3GNj9TJnPisnrc/C3f.uKn6', NULL, '2024-06-01 07:17:45', '2024-06-01 07:17:45'),
(7, 'aa', 'aa', '$2b$10$i2kwZaniJCQlLz8DOEoTDeqZ7vzSGAWCxm3fvbGzQjB8nlLnvNY8G', NULL, '2024-06-01 07:18:07', '2024-06-01 07:18:07'),
(8, 'aa', 'aa', '$2b$10$KkS31t3bM6JizzSAprjRcefPcEZTDIn4Iu7GMWSmgk9A09xL8QTVu', NULL, '2024-06-01 07:18:09', '2024-06-01 07:18:09'),
(9, 'aa', 'aa', '$2b$10$0xC46H1haGuKVNGkhZE9eOillphKV0M5JIqogab.k.OVisWBbh8JO', NULL, '2024-06-01 07:18:36', '2024-06-01 07:18:36'),
(10, 'aa', 'aa', '$2b$10$p1WPHaNaT8KZN05dACqaUeIdlsoe775.zkdbDmkHd2cP7lN2fFqk2', NULL, '2024-06-01 07:19:32', '2024-06-01 07:19:32'),
(11, '', '', '$2b$10$XmA73coEzYx3akXvo9Eaz.NfoOO90EzztWt4yPjlpXM7YLLbrQAu.', NULL, '2024-06-01 07:22:29', '2024-06-01 07:22:29'),
(12, 'dg', 'dfg', '$2b$10$Lsauw.5..OpNSUiwvaJr4.Uj2G8tAjxeqo57aWPJ9J.mh2WlfhACa', NULL, '2024-06-01 07:22:48', '2024-06-01 07:22:48'),
(13, 'a', 'a', '$2b$10$MS/pqwTIMvRVvY3gIO3L4OZaaDJvjF145ekSNFC95YE0.LcBvRyAK', NULL, '2024-06-01 07:23:43', '2024-06-01 07:23:43'),
(14, 'q', 'q', '$2b$10$EhDu/Zl6wRgNAwfV6hYjAOY6zyzRN3n1e1rwNmlm9ZIaFOR3coAue', NULL, '2024-06-01 07:35:13', '2024-06-01 07:35:13'),
(15, 'n', 'n', '$2b$10$UcIH7txZ2Gw9g9CewcK16.st3fcDUyujeey6TA6KkRzt8zlaoWXSy', NULL, '2024-06-01 07:36:46', '2024-06-01 07:36:46'),
(16, 'f', 'f', '$2b$10$ZfKfmCkNSVxs9vhabv6mKez1Bi1Qj9TXahHoEX5js54lmtM3TFFaC', NULL, '2024-06-01 07:41:03', '2024-06-01 07:41:03'),
(17, 'f', 'f', '$2b$10$nA6tmqYrtW41HXyXzNYMkutil1OcY6bdtQuIaRus0MvxzZVOfl7uO', NULL, '2024-06-01 07:41:08', '2024-06-01 07:41:08'),
(18, 'f', 'f', '$2b$10$nuRTdbUlAxVvKEZkj6/nkeDAMpCgw3KA6pnlZydgylfaZnQwl8AOW', NULL, '2024-06-01 08:03:42', '2024-06-01 08:03:42'),
(19, 'o', 'o', '$2b$10$Qvz5n8FTcljEeRu8QK0C9ersvHDq8aLvqXyeVG1r4v0X/shDsjQK2', NULL, '2024-06-01 08:03:50', '2024-06-05 20:24:26'),
(20, 'o', 'o', '$2b$10$1bOMSYDb0aRySbCiqczphu4PUvqx/gzURVrkubLvHIuPodu9.rFcO', NULL, '2024-06-01 08:09:30', '2024-06-01 08:09:30'),
(21, '1', '1', '$2b$10$I.H6vvlogF/OXh9R0zQQHeWwttlzg71B/Te55X0k35sq4TwdEh5Du', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJuYW1lIjoiMSIsImVtYWlsIjoiMSIsImlhdCI6MTcxOTI4MDI2MCwiZXhwIjoxNzE5MzY2NjYwfQ.Ucv6TDqRcQepvdop04uMLAL4gwxcqow4wlmcJPfD2ro', '2024-06-04 09:00:39', '2024-06-23 08:41:56'),
(22, 'aaron', 'email@gsedg.com', '$2b$10$NqecFFicZuEPsAipVyNeBO/9mRZcgGJxVXvugu0bSK2IarnQhJIea', NULL, '2024-06-04 09:35:43', '2024-06-04 09:35:43'),
(23, '123', '123', '$2b$10$WZhxCCAVZl6HBhGbYsHQHuclrH34HuXpk/r9W/2TmNb2Hjz0a5NZS', NULL, '2024-06-04 09:48:52', '2024-06-04 10:26:56'),
(24, 'JERI', 'JERI', '$2b$10$yX65PAs75ZjcCUhYEngd1.sKEc5XmNS5447ZJ0Gs.lDsdHInRN.mK', NULL, '2024-06-05 06:01:25', '2024-06-05 06:02:14'),
(25, 'riska', 'riska', '$2b$10$S.q.9BQv82VsKE.krUA3ZOOoe9SmfGMo1l5UeafDodNwzFu37B2LG', NULL, '2024-06-23 05:19:08', '2024-06-23 07:17:35'),
(26, 'jer', 'jer', '$2b$10$NxclpYCz7e67inafxgn5v.rJ1qHjID0jJFLcg2.NhE9gf4IM/TSOW', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `komen`
--
ALTER TABLE `komen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `komen`
--
ALTER TABLE `komen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
