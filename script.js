let lista = document.getElementById("lista")
let numero = lista.getAttribute("num")

for(i=0; i < numero; i++){
    lista.innerHTML += "<li>" + i + "</li>" 
}