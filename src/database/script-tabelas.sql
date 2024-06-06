create database corinthians;
use corinthians;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
cpf numeric(11),
dtNasc date,
senha varchar(45)
);

create table pontuacao(
idPontuacao int primary key auto_increment,
corretas int, 
erradas int,
horario timestamp default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

show tables;
select * from usuario;