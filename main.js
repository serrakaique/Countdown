'use strict';//mostra os erros , sem ela, ira rodar o codigo sem falar os erros no programa
//vai atribuir o 0 , mas para nao ficar com 3 digitos o slice(positivo com da esquerda pra direita) deixa 2 da direita para esquerda
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
//puxa o id segundos do html
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    
//vai pegar o resto da divisão
    const qtdSegundos = tempo % 60;
//math.floor = pega o numero inteiro , por causa que ira fazer a conta a cada segundo
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

//vai ser atribuido o tempo para os segundos 
    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}
// o nome disso é erou fantion
const contagemRegressiva = (tempo) => {
//ele para a contagem
    const pararContagem = () => clearInterval(id); 

//a cada 1 segundo vai diminuir 1 segundo
    const contar = () => {
//caso o tempo seja negativa ele para a contagem
    if (tempo === 0){
        pararContagem();
    }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval ( contar , 1000 ); 
} 

const tempoRestante = () => {
    // 1 de janeiro de 1970
    //data que o evento vai acontecer
    const dataEvento = new Date ('2021-09-08 15:00:00');
    //data de hoje
    const hoje = Date.now();
    //se divide por 1000 milisegundos
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());
//contagem vai começar com 5 segundos
//contagemRegressiva(5);