//declaração de variaveis
let nomeHeroi;
let saldolHeroi = 0;
//instanciação das variaveis com elementos DOM
let containerText = document.getElementById("textP");
let containerPopup = document.getElementById('pop-up');
let btnEnviar = document.getElementById("btnEnviar");
let btnFechar = document.getElementById('fecharMessage');
let valorInput = document.getElementById("nome_Heroi");
let qtdVitorias = document.getElementById("qtdVitorias");
let qtdDerrotas = document.getElementById("qtdDerrotas");
let mensagensDeErro = document.getElementsByClassName("alertError");

console.log("teste JS")
//Eventos dos botões
btnEnviar.addEventListener("click",(e)=>{
    e.preventDefault()
    nomeHeroi = valorInput.value.toUpperCase();
    
    let tv = parseInt(qtdVitorias.value)
    let td = parseInt(qtdDerrotas.value)
    let saldolHeroi = tv - td    

    if(valorInput.value.length > 3){
        valorInput.classList.remove("alertErrorInput")
        mensagensDeErro[0].style.display = "none"
        if(tv > 0){
            qtdVitorias.classList.remove("alertErrorInput")
            mensagensDeErro[1].style.display = "none"
            console.log("está em vitoria")
            if(td > 0){
                qtdDerrotas.classList.remove("alertErrorInput")
                mensagensDeErro[2].style.display = "none"
                console.log("está em derrota")
                if(saldolHeroi < 10){
                    nivelHeroi = "Ferro"
                }else if(saldolHeroi < 20){
                    nivelHeroi = "Bronze"
                }else if(saldolHeroi < 50){
                    nivelHeroi = "Prata"
                }else if(saldolHeroi < 80){
                    nivelHeroi = "Ouro"
                }else if(saldolHeroi < 90){
                    nivelHeroi = "Diamante"
                }else if(saldolHeroi < 100){
                    nivelHeroi = "Lendário"
                }else {
                    nivelHeroi = "Radiante"
                }
                containerText.innerText = `O Herói ${nomeHeroi} tem de saldo ${saldolHeroi} está no nivel ${nivelHeroi}`;
                containerPopup.style.display="flex";
            }else{
                qtdDerrotas.classList.add("alertErrorInput");
                mensagensDeErro[2].style.display = "block"
            }
        }else{
            qtdVitorias.classList.add("alertErrorInput");
            mensagensDeErro[1].style.display = "block"
        }
    }else{
        valorInput.classList.add("alertErrorInput");
        mensagensDeErro[0].style.display = "block"
        if(tv < 0 || tv.length == null){
            qtdVitorias.classList.add("alertErrorInput");
            mensagensDeErro[1].style.display = "block"
            if(td < 0 || td.length == null){
                qtdDerrotas.classList.add("alertErrorInput");
                mensagensDeErro[2].style.display = "block"
            }
        }else{
            qtdVitorias.classList.remove("alertErrorInput");
            mensagensDeErro[1].style.display = "none"
        }
    }
    console.log(valorInput.value.length)
    
  
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${saldolHeroi}`)
})

btnFechar.addEventListener("click", ()=>{
    containerPopup.style.display = "none";
})
