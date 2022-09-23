create database ProjetoArduino;
use ProjetoArduino;

create table tb_usuario (
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(200),
    ds_senha		varchar(20),
    nr_cod 			int 
);