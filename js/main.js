//$(document).ready(function(){

    //var valor;
	//var resultadoTotal;
    //var valor2;
    //var operacionFinal = "";

var operandoa;
var operandob;
var operacion;

function init(){
    var resultado = document.getElementById('resultado');
    /*$(".test").on("click",function (e) {
        console.log($(this).val());
        resultado.textContent = resultado.textContent  + $(this).val();
    });*/
    /**
     * 
     * 
     */
$(".coma").on("click",function (){

  var operandoc = resultado.textContent;
  if(operandoc === 0) {
    operandoc = '0.';
   } else if(operandoc.indexOf('.') === -1) {
        operandoc += '.';
        resultado.textContent = operandoc;
   }
});
  $(".numericButtons").on("click",function (e) {
    resultado.textContent = resultado.textContent + $(this).val();
  });

  $(".operadores").on("click",function (e) {
      var valorDeEvento = $(this).val();
      switch (valorDeEvento) {
          case "suma":
            operandoa = resultado.textContent;
            operacion=valorDeEvento;
            limpiar();
            break;
          case "division":
            operandoa = resultado.textContent;
            operacion=valorDeEvento;
            limpiar();
            break;
          case "multiplicacion":
            operandoa = resultado.textContent;
            operacion=valorDeEvento;
            limpiar();
            break;
          case "resta":
            operandoa = resultado.textContent;
            operacion=valorDeEvento;
            limpiar();
            break;

        default:
            break;
      }
  })
   
  
   
    reset.onclick = function(e){
        resetear();
    }
   
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  $("#igual").on("click", function resolver(){
    var res = 0;
   if (operandoa !== "" || operandob !== "" ){
    switch(operacion){
      case "suma":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "resta":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "multiplicacion":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "division":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      default:
        limpiar();
         break;
    }};
    resetear();
    resultado.textContent = res;
  });
    /**
     * Operacion.
     */
	//Operacion = function Operacion(operacion)
	//{
       // valor = document.getElementById("numero").value;    
        //operacionFinal = operacion;
	//}
	/**
     * Funcion resultado .
     */	
    //resultado = function resultado()
	//{
        //valor2 = document.getElementById("numero").value;
        //var numero1=parseInt(valor);
        //var numero2=parseInt(valor2);
        //if (operacionFinal==="+") 
        //{
          // operacionFinal="";
		   //resultadoTotal = numero1+numero2;
        //} 
        //else if(operacionFinal==="*") 
        //{
          //  operacionFinal="";
            //resultadoTotal = numero1*numero2;	
        //}
        //else if(operacionFinal==="/")
        //{
          //  operacionFinal="";
            //resultadoTotal = numero1/numero2;
        //}
        //else if(operacionFinal==="-")
        //{
          //  operacionFinal="";
            //resultadoTotal = numero1-numero2;
        //}
	    //console.log (resultadoTotal);
    //}
   
//});
   
