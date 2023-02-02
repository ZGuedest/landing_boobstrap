let button= document.getElementById("mostrar")

let imagen= document.querySelector("img")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    cambiarFoto()
})


function cambiarFoto(){
    let contraseña= document.getElementById("textPeso")

    if(imagen.getAttribute("src")==="img/ojoCerrado1.jpg"){
        imagen.setAttribute("src" , "img/ojoAbierto1.jpg")
        contraseña.setAttribute("type","text")

    }else{
        imagen.setAttribute("src" , "img/ojoCerrado1.jpg")
        contraseña.setAttribute("type","password")
    }
    
}