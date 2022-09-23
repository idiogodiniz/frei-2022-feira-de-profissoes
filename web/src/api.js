import axios from 'axios';

const URL =
    'http://192.168.0.90:5000';

const user =
    '/user';

const userSearch =
    '/user/b/'

const api = axios.create({
    baseURL: URL
})

export async function cadastrar(name, password) {
    const r = await api.post(user, {
            user: name,
            password: password
        });

    return r.data;
} 

export async function listar() {
    const r = await api.get(user)
    return r.data;
} 

export async function detalhar(id) {
    const r = await api.get(`${userSearch}${id}`)
    return r.data;
}