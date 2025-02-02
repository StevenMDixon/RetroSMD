create Table quotestatus
(
	statusid Serial Primary Key,
	name VARCHAR(255)
);

Create Table customerinfo
(
	customerinfoid Serial Primary Key,
	name VARCHAR(255),
	email VARCHAR(255),
	phone VARCHAR(255)
);

CREATE TABLE types (
	typeid SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE consoles (
	consoleid SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE categories (
	categoryid SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE platforms (
	platformid SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

Create Table quotes
(
	quoteid Serial Primary key,
	statusid Int references quotestatus(StatusID),
	customerinfoid Int references customerinfo(CustomerInfoID),
	createddate Date
);

CREATE TABLE services (
	serviceid SERIAL PRIMARY KEY,
	name VARCHAR(255),
	description VARCHAR(1000),
	price MONEY,
	typeid INT references types(typeid),
	categoryid INT references categories(categoryid),
	consoleid INT references consoles(consoleid),
	platformid INT references platforms(platformid),
	available BOOLEAN
);

create table quoteservices
(
	quoteserviceid Serial primary key,
	quoteid int references quotes(quoteid),
	serviceid int references services(serviceid),
	description VARCHAR(255),
	customernotes Text,
	price MONEY
);