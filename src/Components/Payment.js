import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Payment() {
  return (
    <div className='Grid'>
        <div className='container special'>
          <form action='/action_page.php'>           
              <div className='col-50'>
                <h3>Preenchimento de Proposta</h3>                
                <div class='grey'>
                  <label>Dados do Vendedor</label>
                  <label>Empresa</label>
                  <select>
                    <option value="Selecione">Selecione</option>
                    <option value="American Pet">American Pet</option>
                    <option value="Patas e Penas">Patas e Penas</option>
                    <option value="Cobasi">Cobasi</option>
                  </select>
                  <label>Unidade</label>
                  <select>
                    <option value="Selecione">Selecione</option>
                    <option value="1">001 - BOTAFOGO</option>
                    <option value="2">234 - LEBLON</option>
                    <option value="3">838 - IPANEMA</option>
                    <option value="4">910 - MADUREIRA</option>
                    <option value="5">110 - BARRA DA TIJUCA</option>
                    <option value="6">140 - TIJUCA</option>
                  </select>
                  <label>CPF</label>
                  <input
                    type='text'
                    id='fname'
                    name='firstname'
                    placeholder='   .   .   -  '
                  />
                </div>
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
            <NavLink className='contratar' to='/Signature'>Contratar</NavLink>
          </form>
        </div>
        <div>
          <h1>Cobertura a ser Adquirida:</h1>
          <h2>Assistencia Pet Help</h2>
          <h3>
            Ajudamos você a cuidar do seu animalzinho garantindo benefícios, 
            tranquilidade e conforto. Dentre os serviços atendidos, 
            temos transporte veterinário emergencial, assistencia veterinária
            emergencial, agendamento e consultas veterinárias, informações
            sobre vacinas e aplicação em domicílio, envio de ração, dentre outros.
          </h3>
          <img src={require('../img/Plethora_pet-principal.png')} alt='Cat and Dog' />
        </div>
    </div>
  );
}
