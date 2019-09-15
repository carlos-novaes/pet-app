import React from 'react';

function MediaCard() {
  return (
    <div>
      <h1>Materiais de Apoio</h1>
      <table>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Download</th>

        <tr>
            <td>Portfolio Health For Pet</td>
            <td>Documento apresentando todos os planos e variações de preços de acordo com a quantidade de animais e idade.</td>
            <td><a href={require('../img/Tabela_de_Precos.pdf')}>Link</a></td>
          </tr>
      </table>
    </div>
  );
}

export default MediaCard;
