document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.display = "none";
        }

        const main = document.getElementById("main");

        if(main){
            main.style.display = "block";
        }

    }, 2500);

});

const inicio = new Date("2024-06-11T00:00:00");

function atualizarContador(){

    const contador = document.getElementById("contador");

    if(!contador) return;

    const agora = new Date();

    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000*60*60*24));

    const horas = Math.floor(
        (diff % (1000*60*60*24))
        / (1000*60*60)
    );

    const minutos = Math.floor(
        (diff % (1000*60*60))
        / (1000*60)
    );

    const segundos = Math.floor(
        (diff % (1000*60))
        / 1000
    );

    contador.innerHTML =
    `${dias} dias • ${horas}h • ${minutos}m • ${segundos}s ❤️`;

}

setInterval(atualizarContador,1000);
atualizarContador();