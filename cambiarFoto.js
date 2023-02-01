

let imagen = document.getElementById("img");


imagen.addEventListener("mouseover mouseout", (event)=>{

    console.log(event)

    if(event.type=="mouseover"){
        imagen.style.backgroundImage= "url(./img/zu.jpeg)";

    }
    else if (event.type=="mouseout"){
        imagen.style.backgroundImage= "url(./img/zu.jpeg)";

    }


} )

// imagen.addEventListener("mouseover", (event)=>{

//     imagen.style.backgroundImage= "url(./img/zu.jpeg)";

// } )


// imagen.addEventListener("mouseout", (event)=>{

//     console.log(event)
//     imagen.style.backgroundImage= "url(./img/fotoxabier.jpg)";

// } )