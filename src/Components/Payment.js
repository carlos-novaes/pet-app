import React from 'react';

export default function Payment() {
  return (
    <div className='row'>
        <div className='container'>
          <form action='/action_page.php'>           
              <div className='col-50'>
                <h3>Proposta Pet Help</h3>
                <label for='fname'>
                 Nome do contratante
                </label>
                <input
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder=' '
                />
                <label for='email'>
                   Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='email@example.com'
                />
                <label for='telefone'>
                   Telefone
                </label>
                <input
                  type='text'
                  id='emtelefoneail'
                  name='telefone'
                  placeholder=''
                />
                <label for='endereco'>
                   Endereço
                </label>
                <input
                  type='text'
                  id='endereco'
                  name='Endereco'
                  placeholder=' '
                />
                <label for='cidade'>
                 Cidade
                </label>
                <input
                  type='text'
                  id='cidade'
                  name='cidade'
                  placeholder='Rio de Janeiro'
                />

                <div className='row' />      
                  <label for='estado'>Estado</label>
                  <input type='text' id='state' name='estado' placeholder='RJ' />            
                  <label for='cep'>CEP</label>
                  <input type='text' id='cep' name='cep' placeholder='  ' />               
              </div>


            <div className='col-50'>
              <h3>Dados do Pet</h3>
              <label for='especie'>Espécie</label>
              <select>
              <option value="Selecione">Selecione</option>
                <option value="Gato">Gato</option>
                <option value="Cao">Cão</option>
              </select>
              <label for='sexo'>Sexo</label>
              <select>
              <option value="Selecione">Selecione</option>
                <option value="Macho">Fem</option>
                <option value="Fêmea">Masc</option>
              </select>
              <label for='nomepet'>Nome</label>
              <input
                type='text'
                id='nomepet'
                name='nomepet'
                placeholder=' '
              />
              <div className='row'>
                <div className='col-50'>
                  <label for='cvv'>Idade</label>
                  <input type='text' id='idade' name='idade' placeholder='' />
                </div>
              </div>
            </div>

            <div className='col-50'>
              <h3>Dados de Pagamento</h3>
              <label for='ccnum'>Número no cartão</label>
              <input
                type='text'
                id='cartaonumero'
                name='cartaonumero'
                placeholder=''
              />
              <label for='nomecartao'>Nome impresso no cartão</label>
              <input
                type='text'
                id='nomecartao'
                name='nomecartao'
                placeholder=' '
              />
              <label for='expmonth'>Validade</label>
              <input
                type='text'
                id='validade'
                name='validade'
                placeholder='MM/AA'
              />
              <div className='row'>
                <div className='col-50'>
                  <label for='cvv'>CVV</label>
                  <input type='text' id='cvv' name='cvv' placeholder='' />
                </div>
              </div>
            </div>
            <input type='submit' value='Contratar' className='btn' />
          </form>
        </div>
    </div>
  );
}
