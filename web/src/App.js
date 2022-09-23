import React, {useEffect, useState} from 'react';
import './App.css';
import { listar, cadastrar, detalhar } from './api';

const App = _ => {
  const [userList, setUserList] = useState([]);
  const [registerName, setRegisterName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [detailsName, setDetailsName] = useState('');
  const [detailsCode, setDetailsCode] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(_ => {
    const getList = async _ => {
      const resp = await listar()
      setUserList(resp)
    }
    getList()
  }, [sent]);

  const normalize = input => {
    input = input.toUpperCase();
    input = input.replace(/ |  /g, '_');
    return input;
  };

  const click = async e => {
    if (e.target.id === 'register') {
      await cadastrar(registerName, registerPassword)
      setSent(!sent)
      setRegisterName('')
      setRegisterPassword('')
    }
    else if (e.target.id[0] === 'd' && e.target.id[1] === 't') {
      const setId = _ => {
        let resp = '';
        for (let i = 2; i < e.target.id.length; i++)
          resp = resp + e.target.id[i];
        resp = Number(resp);
        return resp;
      }
      const id = setId();
      const resp = await detalhar(id);
      setDetailsName(resp.user)
      setDetailsCode(resp.cod)
    }
      
  };

  return (
    <div className='container-column wh100v'>
      <div className="container-column">
        <h1>Feira de Profissões</h1>
        <p>Projeto Arduino: QRCode</p>
      </div>
      <div className="container wh100">
        <div className="container-column fr-width border">
          <h2>Cadastro</h2>
          <label htmlFor="">Nome do usuário</label>
          <input value={registerName} onChange={e => setRegisterName(e.target.value)} type="text" />
          <label htmlFor="">Senha do usuário</label>
          <input value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} type="password" />
          <button id='register' onClick={click}>CADASTRAR</button>
        </div>
        <div className="container-column fr-width border">
          <h2>Listagem</h2>
          {userList.map(item => 
              <div className='border w100' key={item.id}>
              <p>{item.user}</p>
              <button id={'dt' + item.id} onClick={click}>Ver detalhes</button>
              </div>
          )}
        </div>
        <div className="container-column fr-width border">
          <h2>Detalhes</h2>
          {detailsName !== '' && (<img src={'https://chart.googleapis.com/chart?cht=qr&chs=450x450&chl=' + detailsCode + '_' + normalize(detailsName)} alt="" />)}
          {detailsName !== '' && (<p>{detailsName}</p>)}
          {detailsCode !== 0 && (<p>{detailsCode}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
