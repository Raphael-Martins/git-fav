import { favorites } from './constructors.js';

export class favoritesView {
  //estou pegando o parametro que passo em main, fazendo uma copia do constructor e usando aqui composicao ao inves de extends e herancas (usada no curso) creio que assim fica mais moderno e seguro.
  constructor(root) {
    this.favorites = new favorites(root);

    this.tbody = this.favorites.root.querySelector('table tbody');

    this.update();
  }
  delete(user) {
    //eu nao entendi muito bem como isso funciona, mas, ele limpa o elemento se esse texte der false
    const filterUser = this.favorites.userData.filter(
      (data) => data.login !== user.login
    );
    this.favorites.userData = filterUser;

    this.update();
  }

  update() {
    this.removeAllTr();

    this.favorites.userData.forEach((user) => {
      // cada objeto dentro o array "userData", eu vou pegar como "user", e manipular aqui
      // atencao, diferente da versao do curso, aqui como eu mudei o tipo de contructor, eu preciso especificar que estou pegando do favorites, pois nao estou herdando, e sim usando composicao
      const row = this.createRow(); //criei uma variavel "row" recebendo a minha funcao "create row", que por sua vez, cria uma table row la no html, e tambem passa dados pra dentro dessa row criada

      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`; // aqui eu estou selecionando nos dados que passo dentro da tr criada, a tag de "img". que ta na "table dados" de class "user", tambem criada la em create rows.e nela eu modifico a parte do link corrrespondente a ao user, passando os dados que trago la de userData
      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user span').textContent = user.login;
      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('tem certeza que deseja remover?');
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row); //posso passar aqui dentro um elemento html, e como la em create row agora criei todo o elemento, e so passar aqui
    });
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => tr.remove()); // uma arrow simplificada, o mesmo que: function(tr){tr.remove()}. posso usar assim porque esta tudo na mesma linha
  }

  createRow() {
    const tr = document.createElement('tr'); //preciso criar uma tag aqui, porque preciso passar o conteudo como innerhtml, pra dentro de algo, e nao so jogar la no documento
    const trdData = `
            
            <td class="user">
              <img
                src=""
                alt="imagem de perfil"
              />
              <a href="" target="_blank">
                <p></p>
                <span></span>
              </a>
            </td>
            <td class="repositories"></td>
            <td class="followers"></td>
            <td class="remove"><button>&times;</button></td>
          
          `;
    tr.innerHTML = trdData;
    return tr;
  }
}
