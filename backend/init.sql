-- init.sql for kalena_test
set foreign_key_checks = 0;
drop table if exists users cascade;
drop table if exists roles cascade;
drop table if exists user_roles cascade;
drop view if exists user_roles_view cascade;
drop table if exists resumes cascade;

set foreign_key_checks = 1;

create table users(
   id serial,
   first_name varchar(60),
   last_name varchar(60),
   phone_number varchar(20),
   email varchar(100) unique,
   password varchar(255),
   user_rank varchar(60),
   location varchar(60),
   image varchar(60),
   link varchar(60),
   primary key (id)
);
create table resumes (
   id serial,
   user_id bigint unsigned,
   summary text,
   civilian text,
   education text,
   assignments text,
   skills_certs text,
   languages text,
   lang_desc text,
   cultural text,
   ref1_name varchar(120),
   ref1_org varchar(60),
   ref1_email varchar(100),
   ref1_phone varchar(20),
   ref2_name varchar(120),
   ref2_org varchar(60),
   ref2_email varchar(100),
   ref2_phone varchar(20),
   ref3_name varchar(120),
   ref3_org varchar(60),
   ref3_email varchar(100),
   ref3_phone varchar(20),
   ref4_name varchar(120),
   ref4_org varchar(60),
   ref4_email varchar(100),
   ref4_phone varchar(20),
   primary key (id),
   foreign key (user_id) references users(id) on delete cascade
);
create table roles(
   id serial,
   role varchar(20),
   primary key (id)
);
create table user_roles(
   user_id bigint unsigned,
   role_id bigint unsigned,
   foreign key (user_id) references users(id) on delete cascade,
   foreign key (role_id) references roles(id) on delete cascade
);

create view user_roles_view as 
   select users.id as uid,first_name, last_name, phone_number, email, 
   roles.id as rid,role from 
   users join user_roles on users.id=user_roles.user_id join
   roles on user_roles.role_id=roles.id;


insert into roles (id,role) values 
   (1, 'user'),
   (2, 'manager'),
   (3, 'admin');

