### Schema

CREATE DATABASE job_aid_db;
USE job_aid_db;

CREATE TABLE customer
(
	id int NOT NULL AUTO_INCREMENT,
	name_firstName varchar(255) NOT NULL,
	name_firstLast varchar(255) NOT NULL,
	name_companyName varchar(255) ,
	company_address varchar(255) ,
	phone_number INT ,
	start_date DATE,
	end_date DATE,
	phase BOOLEAN DEFAULT false,
	class BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE job_type
(
	job_id int NOT NULL AUTO_INCREMENT,
	customer_id int,
	heating_syst BOOLEAN DEFAULT false,
	cooling_syst BOOLEAN DEFAULT false,
	ventilation_syst BOOLEAN DEFAULT false,
	plumbing BOOLEAN DEFAULT false,
	tune_up BOOLEAN DEFAULT false,
	notes varchar(255) ,
	PRIMARY KEY (job_id)
);

CREATE TABLE history
(
	history_id int NOT NULL AUTO_INCREMENT,
	job_id Int,
	phase BOOLEAN DEFAULT false,
	status varchar(255) NOT NULL,
	PRIMARY KEY (history_id)
);
CREATE TABLE inventory
(
	id int NOT NULL AUTO_INCREMENT,
	job_id int,
	part_id int,
	price int,
	quantity int,
	PRIMARY KEY (id)
);
