 export class ui {
   displaygame(data){
   let cartona =``
    for (let i = 0; i < data.length; i++) {
      cartona +=` 
      <div class="col-md-3  ">
        <div data-id="${data[i].id}"  class="card  bg-transparent p-2  " role="button" style="width: 18rem; hight:100%">
        
        <div class="position-relative">
        <div class="layer">
        <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
        </div>
        </div>
          <div class="card-body mx-0 px-0">
              <div class="d-flex flex-wrap justify-content-between">
            <h6 class="card-title small text-white">${data[i].title}</h6>
            <span href="#" class="btn btn-primary btn-sm">free</span>

              </div>
            
            <p class="card-text opacity-50 text-white">${data[i].short_description.split(" ", 8)}</p>
  
         </div>
         <div class="card-footer d-flex justify-content-between">
          <span class="badge badge-color">${data[i].genre}</span>
          <span class="badge badge-color">${data[i].platform}</span>
        </div>
      
        </div>
  </div>
  
  `  
    }
    document.getElementById("mainsection").innerHTML=cartona
  }

   displaydetials(data) {
      let cartona =`
      <div class="col-md-4 ">
      <img src="${data.thumbnail}" alt="">

    </div>   
    <div class="col-md-8 text-white ">
      <h2>Title:  ${data.title}"</h2>
      <p>Category: <span class="bg-info small  fw-bold rounded-2 text-black p-1">${data.genre}</span></p>
      <p>Platform: <span class="bg-info small fw-bold rounded-2 text-black p-1">${data.platform}</span></p>
      <p>Status: <span class="bg-info small fw-bold rounded-2 text-black p-1">${data.status}</span></p>
      <p class="small">${data.description}
        </p>
        <button class=" p-2 "><a href="${data.game_url}" target="_blank">show game</a></button>
    </div>`
      
    document.getElementById("detail-game").innerHTML= cartona
      
    }
    
  
 }
