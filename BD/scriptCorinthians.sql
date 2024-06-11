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
incorretas int,
horario timestamp default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table aviso (
	id int primary key auto_increment,
	titulo varchar(100),
	descricao varchar(250),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(idUsuario)
);

select * from usuario;
select * from pontuacao;
select * from aviso;
show tables;

SELECT corretas, incorretas FROM pontuacao WHERE idPontuacao = (SELECT max(idPontuacao) FROM pontuacao WHERE fkUsuario = 1) ORDER BY idPontuacao;

select count(idPontuacao) from pontuacao where fkUsuario = 1;