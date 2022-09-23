import 'dotenv/config'
import cors from 'cors';
import express from 'express';
import endpoints from './controller/userController.js';
import connection from './repository/connection.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(endpoints);

server.listen(process.env.PORT, _ => console.log(`API aberta na porta ${process.env.PORT}`)); 