#Crear base de datos
CREATE DATABASE rentbike;

CREATE TABLE Users (
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	type VARCHAR(255) NOT NULL
);

CREATE TABLE Bike (
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
	code VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL
);

CREATE TABLE Reserve (
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	identification VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone VARCHAR(255) NOT NULL,
	date DATETIME NOT NULL,
	startTime INT(11) NOT NULL,
	endTime INT(11) NOT NULL,
	state VARCHAR(255) NOT NULL
);

CREATE TABLE Rent (
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
	initDate DATETIME NOT NULL,
	endDate DATETIME NOT NULL
);


#Agregar usuario
INSERT INTO Users (id, name, lastname, email, password, type)
VALUES ('777', 'lizeth', 'rodriguez', 'lizeth@gmail.com', 'lrc', 'ADMIN');

#Agregar bicicleta
INSERT INTO Bike (id, code, description, state)
VALUES ('888', 'B888', 'bicicleta aguamarina', 'DISPONIBLE');

#Agregar reserva
INSERT INTO Reserve (id, name, lastname, email, identification, phone, date, startTime, endTime, state)
VALUES ('999', 'lizeth', 'rodriguez', 'lizeth@gmail.com', '1143312332', '3204042144', '2017-02-07 00:00:00', 5, 7, 'PENDIENTE');