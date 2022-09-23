import connection from "./connection.js";

export async function cadastrar(input) {
        const getRandom = _ => {
                let value = 0;
                while (value === 1 || value * 1000000 < 100000 || value === 0)
                        value = Math.random();
                const trueNumber = Math.floor(value * 1000000);
                return trueNumber;
        }
        const comando =
                `
                 insert into tb_usuario (nm_usuario, ds_senha, nr_cod)
                        values (?, ?, ${getRandom()});
                `;
        const [resposta] = await connection.query(comando, [input.user, input.password])
        return resposta;
}

export async function listar(){
        const comando =
                `
                 select id_usuario          as id,       
                        nm_usuario	    as user,
                        nr_cod		    as cod
                   from tb_usuario
                  order by nm_usuario;
                `;
        const [linhas]= await connection.query(comando);
        return linhas;
}

export async function detalhar(id){
        const comando =
                `select nm_usuario      as user,
                        nr_cod          as cod
                   from tb_usuario
                  where id_usuario = ?;
                `;
        const [linhas] = await connection.query(comando, [id]);
        return linhas[0];

  }