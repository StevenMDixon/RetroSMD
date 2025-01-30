Create Table quotestatus
(
	StatusID Serial Primary Key,
	Name VARCHAR(255)
);

Create Table customerinfo
(
	CustomerInfoID Serial Primary Key,
	Name VARCHAR(255),
	Address VARCHAR(255),
	Email VARCHAR(255),
	Phone VARCHAR(255)
);

CREATE TABLE SERVICETYPE (
	SERVICETYPEID SERIAL PRIMARY KEY,
	NAME VARCHAR(255)
);

CREATE TABLE SERVICECATEGORY (
	SERVICECATEGORYID SERIAL PRIMARY KEY,
	NAME VARCHAR(255)
);

CREATE TABLE SERVICEPLATFORM (
	SERVICEPLATFORMID SERIAL PRIMARY KEY,
	NAME VARCHAR(255)
);

CREATE TABLE SERVICES (
	SERVICEID SERIAL PRIMARY KEY,
	NAME VARCHAR(255),
	DESCRIPTION VARCHAR(255),
	PRICE MONEY,
	SERCIVETYPEID INT,
	SERVICECATEGORYID INT,
	SERVICEPLATFORMID INT,
	AVAILABLE BOOLEAN
);

Create Table quotes
(
	QuoteID Serial Primary key,
	StatusID Int references QuoteStatus(StatusID),
	CustomerInfoID Int references CustomerInfo(CustomerInfoID),
	CreatedDate Date
);

Create Table quoteservices
(
	QuoteServiceID Serial Primary Key,
	ServiceID int references Services(ServiceID),
	QuoteID int references Quotes(QuoteID)
);
