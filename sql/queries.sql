/* post
/* ~/user
/*
/* input (body)
/* {
/*      name
/*      password
/* }
*/
insert into tb_usuario (nm_usuario, ds_senha, nr_cod)
	values (?, ?, ?);



/* get
/* ~/user
*/
select id_usuario       as id,
       nm_usuario       as user,
       nr_cod           as cod
  from tb_usuario;



/* get
/* ~/user/details
/*
/* input (body)
/* {
/*      user
/* }
*/
select nm_usuario       as user,
       nr_cod           as cod
  from tb_usuario
 where id_usuario = ?