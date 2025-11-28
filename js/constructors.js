import { GithubUser } from './gitAPI.js';

export class favorites {
  //funcao que ira construir o seconstor query do que eu passar em main
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.userData =
      JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  //versao usando o then
  // add(username) {
  //   GithubUser.search(username).then((user) => {
  //     console.log(user);
  //   });
  // }
}
