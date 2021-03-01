let lista = document.getElementById("ul")

let num = parseInt(lista.dataset.num)

let conteudo = ""

for(let i = 1; i<=num; i++){
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo;
