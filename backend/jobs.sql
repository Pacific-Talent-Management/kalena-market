drop table if exists jobs cascade;

create table jobs (
    id serial,
    title varchar(100),
    description varchar(100),
    location varchar(100),
    branch varchar(100),
    tenure varchar(50),
    job_rank varchar(30),
    requirements varchar(100),
    primary key(id)
);

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Allied Trade Specialist', 'Job description goes here', 'Alaska', 'MSB', 'long-term', 'specialist', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Self Propelled Artillery Maintainer', 'Job description goes here', 'Oahu', 'Schofield', 'long-term', 'private', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Small Arms/Towed Artillery Repairer', 'Job description goes here', 'Oahu', 'Schofield', 'long-term', 'private', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Tactical Power Generation Specialist', 'Job description goes here', 'Guam', 'MAR', 'long-term', 'specialist', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Cyber Capabilities Development Officer', 'Job description goes here', 'Washington', 'JBLM', 'long-term', 'corporal', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Cyber Network Defender', 'Job description goes here', 'Japan', 'USARPAC-SU', 'long-term', 'captain', 'Job requirement goes here');

insert into jobs (title, description, location, branch, tenure, job_rank, requirements) values
('Radar Repairer', 'Job description goes here', 'Saipan','QM', '6 months', 'specialist', 'Job requirement goes here');