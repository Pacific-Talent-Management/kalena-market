-- init.sql for other tables
drop table if exists likes cascade;

create table likes(
   id serial,
   user_id bigint unsigned,
   job_id bigint unsigned,
   foreign key (user_id) references users(id) on delete cascade,
   foreign key (job_id) references jobs(id) on delete cascade
   
);

