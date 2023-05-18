let valor1 = document.querySelector("#valor1");


function CalcularMenor(){
    let a = Number(valor1.value);

    if (a === 1){
        resultado.innerHTML = "Codigo 001 = Parafuso" ;
    } else if( a === 2){
        resultado.innerHTML = "Codigo 002 = Porca";
    } else if(a === 3){
        resultado.innerHTML = "Codigo 003 = Prego";
    } else{
        resultado.innerHTML = "Diversos";
    }

}

botao.onclick = function(){
    CalcularMenor();
}