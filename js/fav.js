import { favorites } from './constructors.js';

export class favoritesView {
  //estou pegando o parametro que passo em main, fazendo uma copia do constructor e usando aqui composicao ao inves de extends e herancas (usada no curso) creio que assim fica mais moderno e seguro.
  constructor(root) {
    this.favorites = new favorites(root);

    this.update();
  }
  
  removeAllTr() {
    const tbody = this.favorites.root.querySelector('table tbody');

    tbody.querySelectorAll('tr').forEach((tr) => tr.remove()); // uma arrow simplificada, o mesmo que: function(tr){tr.remove()}. posso usar assim porque esta tudo na mesma linha
  }

  update() {
    this.removeAllTr();
  }

}
