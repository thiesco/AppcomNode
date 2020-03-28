import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e)
    {
        e.preventDefault();// Atraves disso é a pagina não precissa recarrega por submeter um formulario
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

       const response = await api.post('ongs',data);
       try{

              alert(`Seu ID de acesso: ${response.data.id}`);
              history.push('/');
       }
       catch(err){
           alert('Erro no cadastro, tente novament')
       }
    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1> Cadastro </h1>
                <p>Faça seu cadastro na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar ao Login
                </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        value={name} 
                        onChange={e=> 
                        setName(e.target.value)} 
                        placeholder = "Nome da ONG"
                    />

                    <input type="email" 
                        value={email} 
                        onChange={e=> setEmail(e.target.value)} 
                        placeholder="Email" 
                    />
                    <input 
                        value={whatsapp} 
                        onChange={e=> setWhatsapp(e.target.value)} 
                        placeholder="Whatsapp"
                    />

                    <div className="input-group">
                    <input 
                        value={city} 
                        onChange={e=> setCity(e.target.value)}
                         placeholder = "Cidade"
                    />
                    <input 
                        value={uf} 
                        onChange={e=> setUF(e.target.value)}
                        placeholder = "UF" style={{width: 80 }}
                    /> {/* No style a primeira chave é pra dizer que queremos incluir js no html, e a segunda é pra o css dessa forma podemos acessar a toda propiedade Css*/}
                    
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}