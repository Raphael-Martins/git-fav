
export class favorites {
  //funcao que ira construir o seletor query do que eu passar em main
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    const userData = [
      {
        login: 'xxxxx',
        name: 'xxxxx',
        public_repos: 'xxxxx',
        followers: 'xxxx',
      },
      {
        login: 'raphael-martins',
        name: 'Raphael Martins',
        public_repos: '76',
        followers: '12000',
      },
    ];
    this.userData = userData;
  }

  
}
