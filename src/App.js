import React from 'react';

const App = () => {
  const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 28 },
    { nome: 'Jose', idade: 33}
  ];

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map((pessoa, index) => (
          <li key={index}>
            {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
