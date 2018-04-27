-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 27 Avril 2018 à 23:21
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `widepix`
--

-- --------------------------------------------------------

--
-- Structure de la table `galleries`
--

CREATE TABLE IF NOT EXISTS `galleries` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `thumbnail` text NOT NULL,
  `nbpics` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `galleries`
--

INSERT INTO `galleries` (`id`, `name`, `thumbnail`, `nbpics`) VALUES
(1, 'street', 'STREET', 12),
(2, 'landscape', 'LANDS', 10),
(3, 'portrait', 'PORTRAIT', 6),
(4, 'astro', 'ASTRO', 3);

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE IF NOT EXISTS `pictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial` int(11) NOT NULL,
  `gallerie` text NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Contenu de la table `pictures`
--

INSERT INTO `pictures` (`id`, `serial`, `gallerie`, `name`) VALUES
(1, 1, 'street', 'Autumnal Walk'),
(2, 2, 'street', 'Rest your legs'),
(3, 3, 'street', 'Thinking about it'),
(4, 4, 'street', 'Language of music'),
(5, 5, 'street', 'Night lights travelling'),
(6, 6, 'street', 'Closer'),
(7, 7, 'street', 'Subworm'),
(8, 8, 'street', 'Ivy galaxy'),
(9, 9, 'street', 'Reaching the top'),
(10, 10, 'street', 'La belle et le clochard'),
(11, 11, 'street', 'The smell of stone after rain'),
(12, 12, 'street', 'Rockytten'),
(13, 1, 'landscape', 'Saint Pierre last lights'),
(14, 2, 'landscape', 'Rushing storm'),
(15, 3, 'landscape', 'Sunset on the grass'),
(16, 4, 'landscape', 'Aulon'),
(17, 5, 'landscape', 'Pena Montanesa'),
(18, 6, 'landscape', 'Rioumajou'),
(19, 7, 'landscape', 'Aspin'),
(20, 8, 'landscape', 'Recovery'),
(21, 9, 'landscape', 'Aumar and Aubert'),
(22, 10, 'landscape', 'Brotherwood'),
(23, 1, 'portrait', 'Spring is here'),
(24, 2, 'portrait', 'Summer is over there'),
(25, 3, 'portrait', 'What mate'),
(26, 4, 'portrait', 'Would hike that'),
(27, 5, 'portrait', 'Ray '),
(28, 6, 'portrait', 'Jobs style'),
(29, 1, 'astro', '001'),
(30, 2, 'astro', '002'),
(31, 3, 'astro', '003'),
(32, 4, 'astro', '004');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
