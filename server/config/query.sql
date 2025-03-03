create schema sos;
use sos;
create table users(
user_id varchar (30) primary key,
username varchar(255),
email varchar(30),
phone_number varchar(15),
password varchar(255)
);
alter table users add column role varchar(255);
alter table users add column updated_at timestamp;
alter table users add column created_at timestamp;
alter table users modify user_id varchar(255) ;