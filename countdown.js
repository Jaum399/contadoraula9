const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo'); // Corrigido de 'segundos' para 'segundo'

const lancamento = "17 oct 2024";

function countdown() {
   const datalan = new Date(lancamento);
   const hoje = new Date();

   const segtotal = (datalan - hoje) / 1000;
   const finaldias = Math.floor(segtotal / 60 / 60 / 24);
   const finalhora = Math.floor((segtotal / 60 / 60) % 24);
   const finalminutos = Math.floor((segtotal / 60) % 60);
   const finalsegundo = Math.floor(segtotal % 60);

   dia.innerHTML = finaldias;
   hora.innerHTML = formato(finalhora);
   minuto.innerHTML = formato (finalminutos);
   segundo.innerHTML = formato(finalsegundo);
}
function formato(tempo){
    return tempo < 10? `0${tempo}`: tempo;
}

countdown();
setInterval(countdown, 1000);
