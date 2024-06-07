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

select * from usuario;
select * from pontuacao;

SELECT corretas, incorretas FROM pontuacao WHERE idPontuacao = (SELECT max(idPontuacao) FROM pontuacao WHERE fkUsuario = 1) ORDER BY idPontuacao;