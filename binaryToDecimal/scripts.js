//percorrer o número e identificar cada algarismo



function binaryToDecimal(num){
   
    var arr = num.split('');

    var resultadoAlgVezesBaseElePos = 0;
    var resultadoFinal = 0;
    
    for(i=arr.length-1;i>=0;i--){
        resultadoAlgVezesBaseElePos = (arr[i] * (2**i));
        resultadoFinal = resultadoFinal + resultadoAlgVezesBaseElePos;
        posicao++;
    }
    return resultadoFinal;
}


//1234
function inverter(num){
    var arr = num.split('');

    for(i=arr.length - 1;i>=0;i--){
        console.log('algarismo = ' + arr[i]);
        console.log('posicao = ' + i );
    }
}

// // cada variável e passa dentro do laço.. .
// numero = 1010
// tamanho do array - 1? 
// algarimos = arr[i];
// i       i>0    resultadoAlgVezesBaseElePos resultadoFinal
// 3       3>0     1*2ˆ3
// 2       2>0     0   


function verPares(num){
    arr = num.split('');
    for (i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0)
            console.log(arr[i]);
        
    }
}
function verTipo(valor){
    console.log(typeof(valor));
}
