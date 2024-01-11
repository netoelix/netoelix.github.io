import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../styles/StiledLogin';

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const isFormValid = () => name.length > 0;

  return (
    <MainContainer>
      <h1>
        Olá,
        {' '}
        {name}
      </h1>
      <h2>Seja bem vindo ao meu portfólio!</h2>
      <div>
        <label htmlFor="name">Qual o seu nome?</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={ (e) => setName(e.target.value) }
        />
        <button
          disabled={ !isFormValid() }
          onClick={ () => {
            dispatch({ type: 'SAVE_NAME', payload: { name } });
            navigate('/home');
          } }
        >
          Acessar
        </button>
      </div>
    </MainContainer>
  );
}

export default Login;
