//declaração de variaveis
let nomeHeroi;
let xpHeroi = 0;
//instanciação das variaveis com elementos DOM
let containerText = document.getElementById("textP");
let containerPopup = document.getElementById('pop-up');
let btnSubmit = document.getElementById("btnSubmit");
let btnFechar = document.getElementById('fecharMessage');
let valorInput = document.getElementById("nome_Heroi");
let valorNumberXp = document.getElementById("number_XP");
let mensagensDeErro = document.getElementsByClassName("alertError");

//Eventos dos botões
btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    nomeHeroi = valorInput.value.toUpperCase();
    let variavelTemporaria =parseInt(valorNumberXp.value);

    if(valorInput.value.length > 3){
        valorInput.classList.remove("alertErrorInput")
        mensagensDeErro[0].style.display = "none"
        if(valorNumberXp.value > 0){
            valorNumberXp.classList.remove("alertErrorInput")
            mensagensDeErro[1].style.display = "none"
            if(variavelTemporaria < 1000){
                xpHeroi = "Ferro"
            }else if(variavelTemporaria < 2000){
                xpHeroi = "Bronze"
            }else if(variavelTemporaria < 5000){
                xpHeroi = "Prata"
            }else if(variavelTemporaria < 7000){
                xpHeroi = "Ouro"
            }else if(variavelTemporaria < 8000){
                xpHeroi = "Platina"
            }else if(variavelTemporaria < 9000){
                xpHeroi = "Ascendente"
            }else if(variavelTemporaria < 10000){
                xpHeroi = "Imortal"
            }else {
                xpHeroi = "Radiante"
            } 
            containerText.innerText = `O Herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`;
            containerPopup.style.display="flex";
        }else{
            valorNumberXp.classList.add("alertErrorInput");
            mensagensDeErro[1].style.display = "block"
        }
    }else{
        valorInput.classList.add("alertErrorInput");
        mensagensDeErro[0].style.display = "block"
        if(valorNumberXp.value < 0 || valorNumberXp.value.length == null){
            valorNumberXp.classList.add("alertErrorInput");
            mensagensDeErro[1].style.display = "block"
        }else{
            valorNumberXp.classList.remove("alertErrorInput");
            mensagensDeErro[1].style.display = "none"
        }
    }
    console.log(valorInput.value.length)
    
    
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`)
})

btnFechar.addEventListener("click", ()=>{
    containerPopup.style.display = "none";
})
