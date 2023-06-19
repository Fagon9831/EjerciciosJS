//Ejercicio #1
/*const sType = window.prompt("¿Eres bellisimo/a?")
if(sType=="Si"){
    window.alert("Ciertamente")
}else if(sType=="No"){
    window.alert("No te creo")
}*/
//Ejercicio#2
/*
const iNum = window.prompt("ingresar un numero")
if(iNum%2==0){
    window.alert(iNum+" es divisible entre 2")
}else{
    window.alert(iNum+" no es divisible entre 2")
}*/
//Ejercicio3
/*
const iNum = window.prompt("ingresar un numero")
if(iNum%2==0){
    window.alert(iNum+" es par")
}else{
    window.alert(iNum+" no es par")
}*/
//Ejercicio4
/*
const iNum = window.prompt("Ingrese su numero de cliente")
if(iNum==1000){
    window.alert("Ganaste un premio")
}else{
    window.alert("Lo sentimos, sigue participando")
}*/
//Ejercicio5
/*
const iNum = window.prompt("Ingrese el primer numero")
const iNum2 = window.prompt("Ingrese el segundo numero")
if(iNum>iNum2){
    window.alert(iNum+" es mayor que "+iNum2)
}else{
    window.alert(iNum+" es menor que "+iNum2)
}*/
//Ejercicio6
/*
const iNum = window.prompt("Ingrese el primer numero")
const iNum2 = window.prompt("Ingrese el segundo numero")
const iNum3 = window.prompt("Ingrese el tercer numero")
var iMayor =0;
if (iMayor<iNum) {
    iMayor=iNum
    if (iMayor<iNum2) {
        iMayor=iNum2
        if (iMayor<iNum3) {
            iMayor=iNum3
        }
     }else if (iMayor<iNum3) {
        iMayor=iNum3  
        if (iMayor<iNum2) {
            iMayor=iNum2
        }   
    }
}
window.alert("El numero mayor es : "+iMayor)
if (iNum==iNum2||iNum2==iNum3||iNum3==iNum) {
    if (iNum==iNum2) {
        window.alert("El numero : "+iNum2+" esta repetido")
    }else if (iNum2==iNum3) {
        window.alert("El numero : "+iNum3+" esta repetido")
    }else if (iNum3==iNum) {
        window.alert("El numero : "+iNum+" esta repetido")
    }
}
*/
//Ejercicio#7
/*
const sDay = window.prompt("Ingrese un dia de la semana")
if(sDay=="Lunes"){
    window.alert("Feliz inicio de semana")
}else if(sDay=="Viernes"){
    window.alert("Feliz Viernes")
}else if(sDay=="Sabado"||sDay=="Domingo"){
    window.alert("Feliz Fin de Semana")
}else {
    window.alert("Feliz dia")
}
*/
//Ejercicio#8
/*
const iNote = window.prompt("Ingrese una calificacion 1-10")
if(iNote>=1&&iNote<=10){
    if(iNote<6){
        window.alert("Reprobado")    
    }else if(iNote>=6&&iNote<=8){
        window.alert("Regular")    
    }else if (iNote==9) {
        window.alert("Bien")    
    }else if (iNote==10) {
        window.alert("Excelente")    
    }
}else{
    window.alert("Calificacion invalida")
}*/
//Ejercicio#9
/*
var iceCream=50
var Oreo=[10,"Oreo"]
var KitKat=[15,"Kitkat"]
var Brownie=[20,"Brownie"]
var Total=0
const iValue = window.prompt("Que tipo de helado prefieres\n 1. Con topping \n 2. Sin topping ")
if(iValue==1||iValue==2){    
    if (iValue==1) {
        const iValue2 = window.prompt("Digite el sabor que prefiera")
        if (iValue2==KitKat[1]||iValue2==Oreo[1]||iValue2==Brownie[1]) {
            if (iValue2==KitKat[1]) {
                Total=iceCream+KitKat[0]     
            }else if (iValue2==Oreo[1]) {
                Total=iceCream+Oreo[0]
            }else if (iValue2==Brownie[1]) {
                Total=iceCream+Brownie[0]
            }
            window.alert("El Valor del helado es: "+Total)    
        } else {
            window.alert("El sabor "+iValue2+" del topping para el helado no esta disponible")                
            window.alert("El Valor del helado es: "+iceCream)    
        }        
        
    }else if(iValue==2){
        window.alert("El Valor del helado es: "+iceCream)    
    }
}else{
    window.alert("Tipo seleccionado invalido")
}*/
//Ejercicio#10
/*var total=0
var meses=0
const iValue = window.prompt("Que programa de educacion quieres contratar: \n 1. Course: $4999 MXN \n 2. Carrera: $3999 MXN \n 3. Master: $2999 MXN")
const iValue2 = window.prompt("Que beca tienes: \n 1. Facebook \n 2. Google\n 3. Jesua")

if(iValue==1||iValue==2||iValue==3){    
    if(iValue2==1||iValue2==2||iValue2==3){          
            //Programa
            if (iValue==1) {
                total+=4999
                meses=2
            }else if(iValue==2){
                total+=3999
                meses=6         
            }else if(iValue==3){
                total+=2999
                meses=12     
            }
            //Beca
            if (iValue2==1) {
                total-=total*0.20
            }else if(iValue2==2){
                total-=total*0.15
            }else if(iValue2==3){
                total-=total*0.50
            }

        total*=meses             
        window.alert("El valor total del curso es: $"+Math.round(total)+" MXN y su duracion es de : "+meses+" meses")    
    }
}else if(Condicion){
    window.alert("Tipo seleccionado invalido")
}
*/
//Ejercicio#11
const iValue = window.prompt("¿En que tipo de vehiculo se transporto?\n 1.Carro \n 2.Moto \n 3.Bus")
const iValue2 = window.prompt("¿Cuantos kilometros recorrio?")
const iValue3 = window.prompt("¿Cuantos Litros de conbustible consumio?")
var total=0
if (iValue==1) {
    total=iValue2*0.20
    if (iValue3>100) {
        total+=10
    }else{
        total+=5
    }
}else if (iValue==2) {
    total=iValue2*0.10
    if (iValue3>100) {
        total+=10
    }else{
        total+=5
    }
}else if (iValue==3){
    total=iValue2*0.50
    if (iValue3>100) {
        total+=10
    }else{
        total+=5
    }
}
window.alert("El total a pagar es: $"+total)