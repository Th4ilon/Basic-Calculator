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
        if (operacionFinal==="+") 
        {
           operacionFinal="";
		   resultadoTotal = parseInt(valor)+parseInt(valor2);
        } 
        else if(operacionFinal==="*") 
        {
            operacionFinal="";
            resultadoTotal = parseInt(valor)*parseInt(valor2);	
		}
	    console.log (resultadoTotal);
    }
   
});
   
