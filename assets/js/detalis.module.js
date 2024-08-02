import { Ui } from "./ui.module.js";


export class Details{
  constructor(id){
    document.getElementById('btnClose').addEventListener('click',function () {
      document.querySelector('.details').classList.add('d-none');
      document.getElementById('games').classList.remove('d-none');
    });

    this.loading = document.querySelector('.loading');

    this.getDetalis(id);

  };
  async getDetalis(id){
    this.loading.classList.remove('d-none');

    
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a433b84980msha57bd11c815e728p141206jsn52ed1151543e',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
 
     let apiRes  =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
 
     let resultApi = await apiRes.json();

     this.loading.classList.add('d-none');

     console.log(resultApi);
     new Ui().displayDetailsGames(resultApi);

    //  new Ui().displayDetailsGames(resultApi);
 }
}