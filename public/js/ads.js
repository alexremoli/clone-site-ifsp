//Componente criado para apresentar o título da tabela. Criei apenas para utilizar as props.
class Titulo extends React.Component {
  render() {
    return <h2> {this.props.tit} </h2>;
  }
}
//Componente para apresentar a tabela na página 'ads.html'
class Ads extends React.Component {
  //constructor criado para aparesentar os 'table heads' da tabela. Criei apenas para utilizar o state
  constructor (){
    super();
    this.state = {dis: "DISCIPLINA", car: "CARGA", per: "PERÍODO"};
  }

  render() {
    const titulo = "Componentes curriculares";

    const conteudoAds = {
      textAlign: "center",
      fontFamily: "Arial"
    };
    //Retornando a tabela
    return (
      <div style={conteudoAds}>
        <Titulo tit={titulo}/>
        <table id="tabelaAds">
          <tr>
            <th>{this.state.dis}</th>
            <th>{this.state.car}</th>
            <th>{this.state.per}</th>
          </tr>
          <tr>
            <td>Sistemas Operacionais</td>
            <td>67.7</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Inglês</td>
            <td>33.3</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Laboratório de Estruturas de Dados e Programação</td>
            <td>33.3</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Introdução a Banco de Dados</td>
            <td>67.7</td>
            <td>Noturno</td>
          </tr>
        </table>
      </div>
    );
  }
}
//Renderizando o conteúdo para exibição da tabela na página 'ads.html'
ReactDOM.render(<Ads />, document.getElementById('conteudoAds'));