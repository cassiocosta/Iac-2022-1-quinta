// 1010
//5a1
function numeroToDecimal(num, base){
    var algarismo = 0;
    var arr = num.split('');
    var resultadoAlgVezesBaseElePos = 0;
    var resultadoFinal = 0;
    var posicao = arr.length-1;
    
    for(i=0;i<arr.length;i++){
        if (base==16){
            algarismo = hexaToDecimal(arr[i]);
        }else{
            algarismo = arr[i];
        }
        resultadoAlgVezesBaseElePos = (algarismo * (base**posicao));
        resultadoFinal = resultadoFinal + resultadoAlgVezesBaseElePos;
        posicao--;
    
        
    }
  
    return resultadoFinal;
  }
  
  function hexaToDecimal(letra){
    var numero=0;
    
    switch (letra) {
        case "A":
            numero=10;
            break;
        case "B":
            numero =11;
            break;
        case "C":
            numero = 12;
            break;
        case "D":
            numero = 13;
            break;
        case "E":
            numero = 14;
            break;
        case "F":
            numero = 15;
            break;
        default:
            numero = letra;
            break;
    }
    return numero;
  }
  
  //transformar decimal para qualquer base
  
  
  // pega o decimal e divide pela base 
  // guarda o resto da divisão
  // guarda o próximo dividendo
  // conceitos
  // dividendo, dividor, resto, quociente
  // 10 - 1010
  //0101
  //5A1 = 1441
  
  //num=2592 || resto=2  || dividendo=1  || resultado=0 2 A || i=1
  function decimalToBases(num,base) {
      var resto = 0;
      var dividendo = num;
      var i = 0;
      var resultado = '';
    
      while (i == 0) {
          
          resto = dividendo % base;
          dividendo = parseInt( dividendo / base);

          resultado = resultado + (base===16 && ehParaConverter(resto) ? decimalToHexa(resto) : resto);
          if(dividendo < base ){
              i++; 
              resultado = resultado + (base===16 && ehParaConverter(dividendo) ? decimalToHexa(dividendo) : dividendo);
          } 
        }
        return inverterNum(resultado);
  }

  function ehParaConverter(numero){
      var result=false;
      if(numero>=10 && numero<=15){
          result=true;
          
      }
      return result;
  }
  
  //0101
  function inverterNum(num){
      var result='';
      var arr=num.split('');
      for(i=arr.length-1; i>=0; i-- ){
          result+=arr[i];
  
      }
      return result;
  }
  
  
  //resto 0, 1, 0
  //dividendo 10, 5, 2, 1 
  //resultado 0101
  //i=1
  
  function decimalToHexa(numero){
      var letra='';
      
      switch (numero) {
          case 10:
              letra="A";
              break;
          case 11:
              letra = "B";
              break;
          case 12:
            letra = "C";
              break;
          case 13:
            letra = "D";
              break;
          case 14:
            letra = "E";
              break;
          case 15:
            letra = "F";
              break;
          default:
            //letra = letra;
              break;
      }
      return letra;
  }