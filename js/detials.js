import {ui} from "./UI.js";
export class details {
    constructor(id){
        this.ui = new ui();
        document.getElementById("closebtn").addEventListener("click", ()=>{
            document.getElementById("game").classList.remove("d-none");
            document.getElementById("detials").classList.add("d-none");
            // this.ui.displaydetials()
         });
        this.getdetials(id)
    }   
async getdetials(ID){
    const options = {
      method: 'GET',
      headers: {
       'X-RapidAPI-Key': 'ee7d4f0958msh70fcc5a19f1d514p117198jsnc02789433e1b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }; 
  let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`, options)
  let finalres = await res.json()
  console.log(finalres);
  this.ui.displaydetials(finalres)  
}    
}

 