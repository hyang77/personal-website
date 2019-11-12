CREATE TABLE customers(
customerID VARCHAR(20) NOT NULL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
email VARCHAR(20)
);

CREATE TABLE payment(
customerID VARCHAR(20) NOT NULL PRIMARY KEY,
method VARCHAR(20),
cardNo VARCHAR(20),
CONSTRAINT fk_pk_customerID FOREIGN KEY (customerID)
REFERENCES customers(customerID)
);

CREATE TABLE orders(
orderID VARCHAR(20) NOT NULL PRIMARY KEY,
orderDate DATE,
customerID VARCHAR(20), 
CONSTRAINT fk_customerID FOREIGN KEY (customerID) 
REFERENCES customers(customerID)
);



CREATE TABLE ordered_items(
orderID VARCHAR(20),
itemID VARCHAR(20),
quantity NUMBER(8,0),
CONSTRAINT fk_orderID FOREIGN KEY (orderID) 
REFERENCES orders(orderID),
CONSTRAINT fk_itemID FOREIGN KEY (itemID) 
REFERENCES items(itemID)

);

CREATE TABLE items(
itemID VARCHAR(20) NOT NULL PRIMARY KEY,
name VARCHAR(20),
stock NUMBER(8,0),
price DECIMAL(6,2)
);

