

let imagen = document.getElementById("img");

imagen.addEventListener("mouseover", (event)=>{

    imagen.style.backgroundImage= "url(./img/zu.jpeg)";

} )


imagen.addEventListener("mouseout", (event)=>{

    console.log(event)
    imagen.style.backgroundImage= "url(./img/fotoxabier.jpg)";

} )