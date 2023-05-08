-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 07 Maj 2023, 19:55
-- Wersja serwera: 10.4.8-MariaDB
-- Wersja PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `shoesshop`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user` varchar(255) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `order_cart` mediumtext COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `orders`
--

INSERT INTO `orders` (`id`, `user`, `order_cart`, `state`, `date`) VALUES
(93, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-03 20:27:32'),
(94, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":2,\"sizeState\":\"38\",\"time\":1683138541544}]', 'we are waiting for the payment to be posted', '2023-05-03 20:29:03'),
(95, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":2,\"sizeState\":\"38\",\"time\":1683138547934},{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138549389},{\"id\":10,\"name\":\"Buty klasyczne\",\"image\":\"https://sklep.kamikaze.pl/media/products/9447589767a47602a7fe9628ab1af0b5/images/thumbnail/large_sm3_1.jpg?lm=1609304028\",\"price\":119.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138552399},{\"id\":1,\"name\":\"Buty sportowe\",\"image\":\"https://images.morele.net/i256/1774673_0_i256.jpg\",\"price\":129.99,\"howMany\":2,\"sizeState\":\"38\",\"time\":1683138553843},{\"id\":23,\"name\":\"Buty 4\",\"image\":\"https://m.media-amazon.com/images/I/61TQKtRCsML._CR204,0,1224,1224_UX256.jpg\",\"price\":149.99,\"howMany\":2,\"sizeState\":\"38\",\"time\":1683138555656},{\"id\":17,\"name\":\"Buty 4\",\"image\":\"https://images.morele.net/i256/4566404_0_i256.jpg\",\"price\":149.99,\"howMany\":2,\"sizeState\":\"38\",\"time\":1683138557636}]', 'we are waiting for the payment to be posted', '2023-05-03 20:29:18'),
(96, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138595325}]', 'we are waiting for the payment to be posted', '2023-05-03 20:29:57'),
(97, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138599123}]', 'we are waiting for the payment to be posted', '2023-05-03 20:30:01'),
(98, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138604405}]', 'we are waiting for the payment to be posted', '2023-05-03 20:30:05'),
(99, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(100, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(101, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(102, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(103, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(104, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(105, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(106, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(107, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(108, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(109, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(110, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(111, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(112, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(113, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683138450547}]', 'we are waiting for the payment to be posted', '2023-05-24 00:00:00'),
(114, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683142158242},{\"id\":9,\"name\":\"Buty robocze\",\"image\":\"https://a.allegroimg.com/s128/11e364/8900312549cfadeeddce52319bc5/ADIDAS-BUTY-8K-2020-FY8037-44-2-3\",\"price\":89.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683142159946},{\"id\":10,\"name\":\"Buty klasyczne\",\"image\":\"https://sklep.kamikaze.pl/media/products/9447589767a47602a7fe9628ab1af0b5/images/thumbnail/large_sm3_1.jpg?lm=1609304028\",\"price\":119.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683142161412},{\"id\":1,\"name\":\"Buty sportowe\",\"image\":\"https://images.morele.net/i256/1774673_0_i256.jpg\",\"price\":129.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683142162880}]', 'we are waiting for the payment to be posted', '2023-05-03 21:29:24'),
(115, 'admin3', '[{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683144870341},{\"id\":12,\"name\":\"Buty na co dzień\",\"image\":\"https://images.morele.net/i256/4718409_0_i256.jpg\",\"price\":69.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683144876550}]', 'we are waiting for the payment to be posted', '2023-05-03 22:14:38'),
(116, 'admin3', '[{\"id\":22,\"name\":\"Buty 3\",\"image\":\"https://totalsport.pl/1399-home_default/buty-sportowe-damskie-adidas-10k-w-f98274-.jpg\",\"price\":399.99,\"howMany\":1,\"sizeState\":\"38\",\"time\":1683201045067}]', 'we are waiting for the payment to be posted', '2023-05-04 13:50:50'),
(117, 'admin3', '[{\"id\":4,\"name\":\"Buty zimowe\",\"image\":\"https://images.morele.net/i256/1369379_0_i256.jpg\",\"price\":179.99,\"howMany\":3,\"sizeState\":\"38\",\"time\":1683236179346}]', 'we are waiting for the payment to be posted', '2023-05-04 23:36:39');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_polish_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_polish_ci NOT NULL,
  `price` float NOT NULL,
  `sex` text COLLATE utf8mb4_polish_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_polish_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_polish_ci NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `sizes` text COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `sex`, `category`, `image`, `quantity`, `sizes`) VALUES
(1, 'Buty sportowe', 'Lekkie buty sportowe z siateczkową cholewką i piankową podeszwą', 129.99, 'woman', 'sport', 'https://images.morele.net/i256/1774673_0_i256.jpg', 2, '38, 40, 42, 46, 48'),
(2, 'Buty trekkingowe', 'Wytrzymałe buty trekkingowe z membraną GORE-TEX i wzmocnioną podeszwą', 249.99, 'man', 'sport', 'https://sklep.kamikaze.pl/media/products/b189aa54ce862250bd10dd6601805eaf/images/thumbnail/large_adilux.jpg?lm=1608191609', 5, '38, 40, 42, 46, 48'),
(3, 'Buty do biegania', 'Komfortowe buty do biegania z technologią Air Cushion i systemem stabilizującym', 189.99, 'woman', 'sport', 'https://a.allegroimg.com/s128/11b177/1f9aa7614f9a925973904d84f584/Buty-sportowe-meskie-Adidas-Terrex-AX3-FX4575', 12, '38, 40, 42, 46, 48'),
(4, 'Buty zimowe', 'Ciepłe buty zimowe z ociepliną Thinsulate i antypoślizgową podeszwą', 179.99, 'man', 'casual', 'https://images.morele.net/i256/1369379_0_i256.jpg', 3, '38, 40, 42, 46, 48'),
(5, 'Buty do koszykówki', 'Profesjonalne buty do koszykówki z systemem amortyzacji i wsparciem kostki', 299.99, 'woman', 'sport', 'https://totalsport.pl/1395-home_default/buty-sportowe-damskie-adidas-10k-w-f98274-.jpg', 12, '38, 40, 42, 46, 48'),
(6, 'Buty do wspinaczki', 'Solidne buty do wspinaczki z gumową podeszwą i dodatkowymi oczkami do sznurowania', 179.99, 'man', 'sport', 'https://images.morele.net/i256/1649415_1_i256.jpg', 1, '38, 40, 42, 46, 48'),
(7, 'Buty na obcasie', 'Eleganckie buty na obcasie z lakierowanej skóry i ozdobną klamrą', 149.99, 'woman', 'sport', 'https://a.allegroimg.com/s128/111633/ae8ab9b943359fa27d8c74ae3dee/ADIDAS-BUTY-FLUIDSTREET-H04603-47-1-3', 3, '38, 40, 42, 46, 48'),
(8, 'Buty do squasha', 'Lekkie buty do squasha z systemem wentylacji i podeszwą z gumy niebrudzącej', 99.99, 'man', 'sport', 'https://images.morele.net/i256/6767517_0_i256.jpg', 0, '38, 40, 42, 46, 48'),
(9, 'Buty robocze', 'Bezpieczne buty robocze z ochronnym noskiem i antypoślizgową podeszwą', 89.99, 'woman', 'casual', 'https://a.allegroimg.com/s128/11e364/8900312549cfadeeddce52319bc5/ADIDAS-BUTY-8K-2020-FY8037-44-2-3', 2, '38, 40, 42, 46, 48'),
(10, 'Buty klasyczne', 'Eleganckie buty klasyczne z gładkiej skóry i wygodną wkładką', 119.99, 'man', 'sport', 'https://sklep.kamikaze.pl/media/products/9447589767a47602a7fe9628ab1af0b5/images/thumbnail/large_sm3_1.jpg?lm=1609304028', 3, '38, 40, 42, 46, 48'),
(11, 'Buty do jazdy konnej', 'Wygodne buty do jazdy konnej z miękką skórzaną cholewką i elastyczną podeszwą', 199.99, 'woman', 'sport', 'https://totalsport.pl/1414-home_default/buty-sportowe-dzieciece-adidas-adi-racer-cf-c-m17118-.jpg', 0, '38, 40, 42, 46, 48'),
(12, 'Buty na co dzień', 'Wygodne buty na co dzień z materiałowej cholewką i elastyczną podeszwą', 69.99, 'man', 'sport', 'https://images.morele.net/i256/4718409_0_i256.jpg', 4, '38, 40, 42, 46, 48'),
(13, 'Buty męskie', 'Modne buty męskie z zamszowej skóry i ozdobnymi przeszyciami', 169.99, 'woman', 'sport', 'https://images.morele.net/i256/4863336_0_i256.jpg', 0, '38, 40, 42, 46, 48'),
(14, 'Buty 1', 'Opis butów 1', 199.99, 'man', 'casual', 'https://www.okazje.info.pl/images/stage/m/a/adidas-terrex-ax3.jpg', 2, '38,40,42,46,48'),
(15, 'Buty 2', 'Opis butów 2', 299.99, 'woman', 'casual', 'https://a.allegroimg.com/s128/117e51/02946b5340f1a33a2a7d9b04ad67/Adidas-buty-meskie-czarne-zamszowe-oryginal-43-1-3', 2, '38,40,42,46,48'),
(16, 'Buty 3', 'Opis butów 3', 399.99, 'man', 'casual', 'https://totalsport.pl/1411-home_default/buty-sportowe-dzieciece-adidas-adi-racer-cf-c-m17118-.jpg', 2, '38,40,42,46,48'),
(17, 'Buty 4', 'Opis butów 4', 149.99, 'woman', 'casual', 'https://images.morele.net/i256/4566404_0_i256.jpg', 2, '38,40,42,46,48'),
(18, 'Buty 5', 'Opis butów 5', 249.99, 'man', 'casual', 'https://www.okazje.info.pl/images/stage/m/a/adidas-climacool.jpg', 2, '38,40,42,46,48'),
(19, 'Buty 6', 'Opis butów 6', 179.99, 'woman', 'casual', 'https://static.oferteo.pl/images/portfolio/1999023/256px_s/24707_adidas-superstar-v22965-czarne-biale.jpg', 2, '38,40,42,46,48'),
(20, 'Buty 1', 'Opis butów 1', 199.99, 'man', 'casual', 'https://a.allegroimg.com/s128/114f92/4b06f1444cf780ebd0713212cd95/Buty-adidas-Originals-Tennis-HU-GZ3927', 2, '38,40,42,46,48'),
(21, 'Buty 2', 'Opis butów 2', 299.99, 'woman', 'casual', 'https://images.morele.net/i256/4626924_0_i256.jpg', 2, '38,40,42,46,48'),
(22, 'Buty 3', 'Opis butów 3', 399.99, 'man', 'casual', 'https://totalsport.pl/1399-home_default/buty-sportowe-damskie-adidas-10k-w-f98274-.jpg', 2, '38,40,42,46,48'),
(23, 'Buty 4', 'Opis butów 4', 149.99, 'woman', 'casual', 'https://m.media-amazon.com/images/I/61TQKtRCsML._CR204,0,1224,1224_UX256.jpg', 2, '38,40,42,46,48'),
(24, 'Buty 5', 'Opis butów 5', 249.99, 'man', 'casual', 'https://images.morele.net/i256/9678538_0_i256.jpg', 2, '38,40,42,46,48'),
(25, 'Buty 6', 'Opis butów 6', 179.99, 'woman', 'casual', 'https://img.eobuwie.cloud/eob_product_256w_256h(a/4/d/4/a4d4d620e459ba931a18c2a702d61dd018bf92a8_01_0000301710554_pl.jpg,jpg)/buty-adidas-ultraboost-23-shoes-hq6351-bialy.jpg', 2, '38,40,42,46,48'),
(26, 'Buty 1', 'Opis butów 1', 199.99, 'man', 'casual', 'https://i.pinimg.com/474x/d0/26/99/d02699b514d93043e97f84ba1794e04e.jpg', 2, '38,40,42,46,48'),
(27, 'Buty 2', 'Opis butów 2', 299.99, 'woman', 'casual', 'https://img.eobuwie.cloud/eob_product_256w_256h(a/f/3/a/af3a8ba7e1fa1eeb2294b00d97301d50c666f669_01_0000301553472_mk.jpg,jpg)/buty-adidas-alphabounce-sustainable-bounce-lifestyle-running-shoes-hp6140-szary.jpg', 2, '38,40,42,46,48'),
(28, 'Buty 3', 'Opis butów 3', 399.99, 'man', 'casual', 'https://image.ceneostatic.pl/data/products/44018846/i-adidas-rise-up-2-nba-k.jpg', 2, '38,40,42,46,48'),
(29, 'Buty 4', 'Opis butów 4', 149.99, 'woman', 'casual', 'https://img.eobuwie.cloud/eob_product_256w_256h(f/7/c/8/f7c853925c44088263801da3e31b3ff97a647ea0_01_0000301202981_plj.jpg,jpg)/cevlji-adidas-alphabounce-sustainable-bounce-lifestyle-running-shoes-hp6141-modra.jpg', 2, '38,40,42,46,48'),
(30, 'Buty 5', 'Opis butów 5', 249.99, 'man', 'casual', 'https://tupadel.com/11617-product_256x256/adidas-gamecourt-2-shoe-s-white.jpg', 2, '38,40,42,46,48'),
(31, 'Buty 6', 'Opis butów 6', 179.99, 'woman', 'casual', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPOPAokTHzdiBCDzU1zlLR9Z-tJIQsEFVnQ&usqp=CAU', 2, '38,40,42,46,48');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `login` text COLLATE utf8mb4_polish_ci NOT NULL,
  `password` text COLLATE utf8mb4_polish_ci NOT NULL,
  `typeAdmin` int(11) NOT NULL,
  `img` text COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`login`, `password`, `typeAdmin`, `img`) VALUES
('admin3', '4fc2b5673a201ad9b1fc03dcb346e1baad44351daa0503d5534b4dfdcc4332e0', 1, 'https://cdn-icons-png.flaticon.com/128/552/552721.png');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`(255));

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT dla tabeli `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
