-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2018 at 05:10 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `producto`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `idproducto` int(11) NOT NULL,
  `pro_descripcion` text CHARACTER SET utf8,
  `pro_cantidad` int(2) DEFAULT NULL,
  `pro_categoria` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pro_pventa` double(10,2) DEFAULT NULL,
  `pro_observaciones` text CHARACTER SET utf8,
  `creacion` datetime DEFAULT NULL,
  `modificacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`idproducto`, `pro_descripcion`, `pro_cantidad`, `pro_categoria`, `pro_pventa`, `pro_observaciones`, `creacion`, `modificacion`) VALUES
(1, 'mesa', 1, 'Muebles', 15.00, 'N/G', '2018-02-05 00:00:00', '2018-02-21 22:37:49'),
(2, 'cama1', 1, 'Muebles', 6.00, 'Si danios', '2018-02-09 18:07:07', '2018-02-21 22:40:58'),
(3, 'mochila', 2, 'Other', 2.00, 'j', '2018-02-09 22:31:00', '2018-02-21 22:56:47'),
(4, 'queso', 22, 'Lacteos', 1.60, 'S/R', '2018-02-21 22:30:53', '2018-02-21 22:38:00'),
(5, 'Yogourt', 22, 'Lacteos', 1.70, 'undefined', '2018-02-21 22:54:46', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproducto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
