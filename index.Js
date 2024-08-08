// const age = prompt("yoshingiz")                                                                                                                                 
// if (age < 18) {                                                                                                                  
//     alert("Multfilm ko'rasiz")                                                                                                                  
// }                                                                                                                  
// else if(18 < age && age < 24) {                                                                                                                  
//     alert("Siz faqat serial ko'rasiz")                                                                                                                  
// }                                                                                                                  
// else if (24 < age && age < 50) {                                                                                                                  
//     alert("Siz B/F ko'rasiz")                                                                                                                  
// }                                                                                                                  
// else if(50 < age && age < 70 ) {                                                                                                                  
//     alert("borib yoting")                                                                                                                    
// }                                                                                                                  
// else {                                                                                                                  
//     alert("RUXSAT")                                                                                                                  
// }                                                                                                                  
// const age = prompt("Bugun nechta serial ko'rdingiz ?")                                                                                                                  
// if (age < 5) {                                                                                                                  
//     alert("Kam serial ko'ribsiz!")                                                                                                                  
// }                                                                                                                  
// else if(5 < age && age <10) {                                                                                                                  
//     alert("Siz classik tomoshabin ekansiz")                                                                                                                  
// }                                                                                                                  
// else if (10 < age && age < 30) {                                                                                                                  
//     alert("Siz serialchi zvezda ekansiz")                                                                                                                  
// }                                                                                                                  
// else if(30 < age && age <70) {                                                                                                                  
//     alert("Boshqa ishingiz yo'qmi")                                                                                                                  
// }                                                                                                                  
// else {                                                                                                                  
//     alert("HAZILLASHIYABSIZMI")                                                                                                                  
// }                                                                                                                  
// const age = prompt("ismi")                                                                                                                  
// if (age == "Elon Musk") {                                                                                                                  
//     alert("Tesla kompaniyasini Xo'jayini")                                                                                                                  
// }                                                                                                                  
// else {                                                                                                                  
//     alert( age+"ni nima qizig'i bor")                                                                                                                  
// }                                                                                                                  
// console.log(users.name);                                                                                                                  
// const arr = ["Faridun", 77, "game"]                                                                                                                  
// console.log(arr[0]);                                                                                                                  
// const arrow = (name) => console.log(name);                                                                                                                  
// console.log(arrow("test"));                                                                                                                  
// const exp = function(name, surName) {                                                                                                                  
//     return(`My name is ${name}, and surName: ${surName}`)                                                                                                                  
// }                                                                                                                  
// const expResult = exp("Faridun", "Abdunabiyev")                                                                                                                  
// console.log(expResult);                                                                                                                  
// const users = {                                                                                                                  
//     name: "Faridun",                                                                                                                  
//     age: 77                                                                                                                  
// }                                                                                                                  
// console.log(users);                                                                                                                  
// const arr = ["Faridun", 77, "Abdunabiyev"]                                                                                                                  
// console.log(arr[0]);                                                                                                                  
var name = "" ;                                                                                                                  
while (name==="" || name===null){                                                                                                                  
name= prompt("What is your name?")                                                                                                                  

}                                                                                                                  
console.log(name);                                                                                                                  
let surName = "";                                                                                                                  
while (surName==="" || surName===null){                                                                                                                  
    surName =  prompt("How many movies have you seen?")                                                                                                                  
}                                                                                                                  
 if (surName<=5){                                                                                                                  
   alert("You are a beginner")                                                                                                                  
 } else if (surName>5 && surName<=10){alert(" You are classic")}                                                                                                                  
 else {alert("You have watched way too many movies")}                                                                                                                  
 document.getElementById("1").textContent=`${name}`                                                                                                                  
 document.getElementById("2").textContent=`Have a nice day`    

 let username ;
 
 document.getElementById('MyS').onclick = function (){
    username= document.getElementById("MyI").value;
    document.getElementById("3").textContent = `Welcome ${username}`
 }