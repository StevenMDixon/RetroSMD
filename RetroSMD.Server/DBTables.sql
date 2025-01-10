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

Create Table services
(
	ServiceID Serial Primary Key,
	Name VARCHAR(255),
	Description VARCHAR(255),
	Price MONEY,
	Available BOOLEAN
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
