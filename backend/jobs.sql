drop table if exists jobs cascade;

create table jobs (
    id serial,
    title varchar(100),
    location varchar(100),
    branch varchar(100),
    tenure varchar(50),
    job_rank varchar(30),
    primary key(id)
);

insert into jobs (title, location, branch, tenure, job_rank) values
('Allied Trade Specialist', 'Alaska', 'MSB', 'long-term', 'specialist');

insert into jobs (title, location, branch, tenure, job_rank) values
('Self Propelled Artillery Maintainer', 'Oahu', 'Schofield', 'long-term', 'private');

insert into jobs (title, location, branch, tenure, job_rank) values
('Small Arms/Towed Artillery Repairer', 'Oahu', 'Schofield', 'long-term', 'private');

insert into jobs (title, location, branch, tenure, job_rank) values
('Tactical Power Generation Specialist', 'Guam', 'MAR', 'long-term', 'specialist');

insert into jobs (title, location, branch, tenure, job_rank) values
('Cyber Capabilities Development Officer', 'Washington', 'JBLM', 'long-term', 'corporal');

insert into jobs (title, location, branch, tenure, job_rank) values
('Cyber Network Defender', 'Japan', 'USARPAC-SU', 'long-term', 'captain');

insert into jobs (title, location, branch, tenure, job_rank) values
('Radar Repairer', 'Saipan','QM', '6 months', 'specialist');