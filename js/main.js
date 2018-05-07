$(document).ready(function(){

    var valor;
	var resultadoTotal;
    var valor2;
    var operacionFinal = "";
    /**
     * Operacion.
     */
	Operacion = function Operacion(operacion)
	{
        valor = document.getElementById("numero").value;    
        operacionFinal = operacion;
	}
	/**
     * Funcion resultado .
     */	
    resultado = function resultado()
	{
        valor2 = document.getElementById("numero").value;
        var numero1=parseInt(valor);
        var numero2=parseInt(valor2);
        if (operacionFinal==="+") 
        {
           operacionFinal="";
		   resultadoTotal = numero1+numero2;
        } 
        else if(operacionFinal==="*") 
        {
            operacionFinal="";
            resultadoTotal = numero1*numero2;	
        }
        else if(operacionFinal==="/")
        {
            operacionFinal="";
            resultadoTotal = numero1/numero2;
        }
        else if(operacionFinal==="-")
        {
            operacionFinal="";
            resultadoTotal = numero1-numero2;
        }
	    console.log (resultadoTotal);
    }
   
});
   
