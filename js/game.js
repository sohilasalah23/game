import {ui} from "./UI.js";
import { details } from "./detials.js";


export class game {
    constructor(){
       this.getgames("mmorpg")
       document.querySelectorAll("li a").forEach((item) =>{
         item.addEventListener("click", (e)=>{
         document.querySelector("li .active").classList.remove("active")
          e.target.classList.add("active")
        let x = e.target.getAttribute("data-catagory")
         this.getgames(x)
         console.log(x)
         })
       })
      this.ui = new ui();
    }
    async  getgames(category){
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'ee7d4f0958msh70fcc5a19f1d514p117198jsnc02789433e1b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
      let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
      let finalres = await res.json()
      console.log(finalres)
      this.ui.displaygame(finalres)
       this.GETID();     
      }
   GETID(){
      document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click",()=>{
         let id = item.dataset.id
       
         console.log(id)
         let Details = new details(id);
         document.getElementById("game").classList.add("d-none");
         document.getElementById("detials").classList.remove("d-none")
          //  this.showDetails(id);
      })
      })
      
   }

   showDetails(ID) {
          let Details = new details(ID);
          document.getElementById("game").classList.add("d-none");
          document.getElementById("detials").classList.remove("d-none")
       }
}
