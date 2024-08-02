
import { Ui } from "./ui.module.js";
import { Details } from "./detalis.module.js";

export class Home{
  constructor(){
  document.querySelectorAll('.nav-link').forEach((link) => {

    link.addEventListener('click', ()=> {
      console.log(link);
      this.changeActiveLink(link);
      this.getGames(link.getAttribute('data-category'));
    });
    this.loading = document.querySelector('.loading');
    this.ui = new Ui();
  
    this.getGames('mmorpg');
    this.detalisSec  =  document.querySelector('.details');
    this.games = document.getElementById('games');


 
    

  });

  }
  changeActiveLink(link){

    document.querySelector('nav .active').classList.remove('active');

    link.classList.add('active');
  }

  async getGames(cat){
    this.loading.classList.remove('d-none');

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a433b84980msha57bd11c815e728p141206jsn52ed1151543e',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let apiRes  =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);

    let resultApi = await apiRes.json();
    this.ui.displayInfoGame(resultApi);
    
    this.loading.classList.add('d-none');
    document.querySelectorAll('.card').forEach((card) => {
     card.addEventListener('click',() =>{
      this.detalisSec.classList.remove('d-none');
      this.games.classList.add('d-none');
      
      new Details(card.dataset.id);

     })
    });
   

  }




};

// export class Home{
//   constructor(){
//     document.querySelectorAll('.nav-link').forEach(link => {

//       link.addEventListener('click', ()=> {

//         this.changeLinkActive(link);
//         let category = link.getAttribute('data-category');   

   
//         this.getGames(category);
//       })

//     });

//     this.ui = new Ui();

//     this.getGames('mmorpg');

//   };

//   async changeLinkActive(link){

//     document.querySelector('nav .active').classList.remove('active');
//     link.classList.add('active');
//   }

//   async getGames(cat){
//     let url =`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': 'a433b84980msha57bd11c815e728p141206jsn52ed1151543e',
//         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//       this.ui.displayGames(result);
//     } catch (error) {
//       console.error(error);
//     }




  

// }

// }



