const API_URL = "http://ipwho.is/";
const boton = document.getElementById("Btn");
const container = document.getElementById("container");
var sound = new Audio();
sound.src = "./Mondongo.mp3";



fetch(API_URL)
.then(Response => Response.json())
.then(data => {
    boton.addEventListener("click",() => {
        mostrar(data);
       
        
    })
})




function mostrar(obj){

    container.innerHTML = "";
    container.innerHTML = `
    <div class="d-flex align-items-center justify-content-center "> 

        <div class="text-light d-block">
            <h3>
                Latitude: <span class="text-danger"> ${obj.latitude} </span>
            </h3>
            <h3>
                Longitude: <span class="text-danger"> ${obj.longitude} </span>
            </h3>
            <h3>
                City: <span class="text-danger">${obj.city} </span>
            </h3>
        </div>
        <img src="${obj.flag.img}" class="rounded w-25 p-3">
        </img>
    </div>
    `;
}
