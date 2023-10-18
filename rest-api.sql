-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 23:13:05
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `anio_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `anio_publicacion`, `ISBN`) VALUES
(1, 'Cien años de soledad', 'Gabriel García Márquez', 'Realismo mágico', '1967-01-01', '9788437604947'),
(2, '1984', 'George Orwell', 'Distopía', '1949-01-01', '9780452284234'),
(3, 'El Gran Gatsby', 'F. Scott Fitzgerald', 'Ficción', '1925-01-01', '9780743273565'),
(4, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela de aventuras', '1605-01-01', '9788467022551'),
(5, 'Harry Potter y la piedra filos', 'J.K. Rowling', 'Fantasía', '1997-01-01', '9788498380629'),
(6, 'Matar a un ruiseñor', 'Harper Lee', 'Novela', '1960-01-01', '9781234567890'),
(7, 'Rayuela', 'Julio Cortázar', 'Ficción', '1963-01-01', '9780987654321'),
(8, 'El Señor de los Anillos', 'J.R.R. Tolkien', 'Fantasía', '1954-01-01', '9781111111111'),
(9, 'Crimen y castigo', 'Fiodor Dostoievski', 'Novela', '1866-01-01', '9782222222222'),
(10, 'Los juegos del hambre', 'Suzanne Collins', 'Distopía', '2008-01-01', '9783333333333');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
