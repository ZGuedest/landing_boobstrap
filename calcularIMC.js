let buttonIMC = document.getElementById("IMC")

buttonIMC.addEventListener("click", (event)=>{

    event.preventDefault()

let nombre= document.getElementById("textName").value
let altura= parseFloat(document.getElementById("textAltura").value)
let peso= parseFloat(document.getElementById("textPeso").value)


let imc=(peso/(altura*altura)).toFixed(2)
let textResult;

// console.log(altura)
// console.log(peso)

// console.log("el cu es"+cu)

console.log(imc)

if(imc<18){

    textResult=nombre+" tiene bajo peso"

} else if( (imc == 18 || imc>18) && imc < 24.9){
    textResult=nombre+" tiene buen peso"

}else{
    textResult=nombre+" tiene sobre peso"
}

document.getElementById("w").innerHTML=textResult

})