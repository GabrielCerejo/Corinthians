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
pontos numeric(2),
horario datetime
);

create table usuarioPontuacao (
idUsuarioPontuacao int primary key auto_increment,
fkUsuario int,
fkPontuacao int,
constraint fkUsuarioUP foreign key (fkUsuario) references usuario(idUsuario),
constraint fkProntuacaoUP foreign key (fkPontuacao) references pontuacao(idPontuacao)
);