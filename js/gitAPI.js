export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`;  //crio uma variavel chamada endpoint, e ela tera o valor de uma url concatenado com o valor que eu injetar aqui como username (la na funcao add)
    
    const response = await fetch(endpoint); //vou buscar o que tem no endpoint, ou seja, na url, e esperar "await", quando concluido, vou colocar o que tiver la, em uma variavel chamada "response"
    const data = await response.json(); // vou converter a response para o formato json, trasformando em um objeto, e passar pra dentro de "data"
    
    const { login, name, public_repos, followers } = data; //vou criar uma variavel como um objeto, e desistruturar de dentro de "data", esses valores
    
    return { //vou retornar objeto que acabei de criar como resultado dessa funcao
      login,
      name,
      public_repos,
      followers
    };
  }
  //VERSAO USANDO THEN
  // static search(username) {
  //   const endpoint = `https://api.github.com/users/${username}`;

  //   return fetch(endpoint)
  //     .then((data) => data.json())
  //     .then(({ login, name, public_repos, followers }) => ({
  //       login,
  //       name,
  //       public_repos,
  //       followers,
  //     }));
  // }
}
//quando eu chamar essa function, vou passar como parametro o username que quero pesquisar, ela vai pesquisar na api, entao vai retornar uma promisse, que vai me dar em json os dados desestruturados, que escolhi pegar dentro da api
