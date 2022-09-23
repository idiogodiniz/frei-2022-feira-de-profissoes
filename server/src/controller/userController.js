import { cadastrar, listar, detalhar } from '../repository/userRepository.js'
import { Router } from "express";

const server = Router();

server.post('/user', async (req, resp) =>{
    try {
        const cadastrarNovoUsu = req.body
        if (!cadastrarNovoUsu.user || cadastrarNovoUsu.user === '')
            throw new Error ('Nome obrigatório')
        if (!cadastrarNovoUsu.password || cadastrarNovoUsu.password === '')
            throw new Error ('Nome obrigatório')

        const cadastro = await cadastrar(cadastrarNovoUsu)
        resp.send(cadastro)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }  
})

server.get('/user', async (req, resp) => {
    try{
        const resposta = await listar();
        resp.send(resposta);
    }catch(err){
        resp.status(400).send({
            erro:err.message
        });
    } 
})

server.get('/user/b/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await detalhar(id);
        if (!resposta)
            resp.status(400).send([])
        else
            resp.send(resposta);
    } catch (err) {
        console.log(err.message)
        resp.status(400).send({
            erro: err.message
        })        
    }
})

export default server;