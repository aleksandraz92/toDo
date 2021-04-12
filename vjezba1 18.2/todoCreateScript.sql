CREATE TABLE task(
id int not null,
task_name varchar(50),
urgent boolean,
has_deadline boolean,
has_sub_task boolean,
PRIMARY KEY(id)
);

INSERT into task values (1,'Learn Vue',true,false,true);
INSERT into task values (2,'Learn CSS',true,true,true);

select * from task;
CREATE TABLE finished_task(
id int not null,
PRIMARY KEY(id),
FOREIGN KEY(id) references task(id)
);

create table deadline(
id int not null,
finish_until timestamp,
task_id int not null,
primary key(id),
foreign key(task_id) references task(id)
);

create table sub_task(
id int not null,
sub_task_name varchar(100),
task_id int not null,
primary key(id),
foreign key(task_id) references task(id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Aleksandra92';
flush privileges;
