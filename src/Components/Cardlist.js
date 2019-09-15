import React, { Component } from 'react';
import Card from './Card';

class Cardlist extends Component {
  state = {
    plan: [
      'Assistencia Pet Help', 
      'PET BASIC', 
      'PET LIGHT', 
      'PET PLUS', 
      'PET TOTAL', 
      'PET PREMIUM'
    ],
    description: [
      'Ajudamos você a cuidar do seu animalzinho garantindo benefícios, \
      tranquilidade e conforto. Dentre os serviços atendidos, \
      temos transporte veterinário emergencial, assistencia veterinária\
       emergencial, agendamento e consultas veterinárias, informações\
       sobre vacinas e aplicação em domicílio, envio de ração, dentre outros.',
      'Enfermidades corriqueiras ou pequenos acidentes \
      podem acontecer a qualquer momento. Nessas horas, \
      contar com um cuidado rápido e qualificado é\
      fundamental. O PET BASIC cobre consultas clínicas,\
      exames laboratoriais exceto hormonais, vacinas,\
      procedimentos ambulatoriais, incluindo urgências e\
      emergências.',
      'Enfermidades corriqueiras ou pequenos acidentes\
      podem acontecer a qualquer momento. Nessas\
      horas, contar com um cuidado rápido e qualificado\
      é fundamental. O PET LIGHT cobre consultas,\
      exames, vacinas, procedimentos ambulatoriais,\
      incluindo urgências e emergências.',
      'Riscos maiores demandam mais cuidados. O PET PLUS cobre\
      consultas em clínico geral eletivas, urgência, emergência,\
      exames laboratoriais e internação do seu pet. Pareceres e\
      Consultas de especialistas, exames de Imagem e cirurgias\
      somente são cobertos quando em internação.',
      'Para quem procura tranquilidade, esta é a escolha certa. O PET\
      TOTAL oferece cobertura completa (ambulatorial + hospitalar),\
      dando acesso a todos os serviços e procedimentos disponíveis nos\
      planos PET LIGHT e PET PLUS, além de exames por imagem.',
      'Versatilidade, conveniência e exclusividade. O PET\
      PREMIUM é mais do que completo: prevê todas as\
      coberturas do PET TOTAL e reembolso para serviços\
      realizados fora de nossa rede credenciada.'
    ],
    price: [
      'R$35,90',
      'A partir de R$56,61',
      'A partir de R$83,31',
      'A partir de R$121,50',
      'A partir de R$177,24',
      'A partir de R$371,83'
    ]
  };

  render() {
    console.log(this.state.plan);
    return(
      <div className="Grid">
        <img src={require('../img/Plethora_pet-principal.png')} alt='Cat and Dog' />
        <Card plan={this.state.plan[0]} description={this.state.description[0]} price={this.state.price[0]}/>
        <Card plan={this.state.plan[1]} description={this.state.description[1]} price={this.state.price[1]}/>
        <img src={require('../img/healthforpet.PNG')} alt='Cat and Dog' />
        <Card plan={this.state.plan[2]} description={this.state.description[2]} price={this.state.price[2]}/>
        <Card plan={this.state.plan[3]} description={this.state.description[3]} price={this.state.price[3]}/>
        <img src={require('../img/healthforpet.PNG')} alt='Cat and Dog' />
        <Card plan={this.state.plan[4]} description={this.state.description[4]} price={this.state.price[4]}/>
        <Card plan={this.state.plan[5]} description={this.state.description[5]} price={this.state.price[5]}/>
        <img src={require('../img/healthforpet.PNG')} alt='Cat and Dog' />
      </div>
    );
  };
}

export default Cardlist;
