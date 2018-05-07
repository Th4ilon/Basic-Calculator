// import functionName from './test'

    var valor;
	var resultado;
    var valor2;
    var operacionFinal = "";
    
	function Operacion(operacion)
	{
        valor = document.getElementById("numero").value;    
        operacionFinal = operacion;
	}
		
    function resultado()
	{
		valor2 = document.getElementById("numero").value;
        if (operacionFinal==="+") 
        {
           operacionFinal="";
		   resultado=parseInt(valor)+parseInt(valor2);
        } 
        else if(operacionFinal==="*") 
        {
            operacionFinal="";
		   resultado=parseInt(valor)*parseInt(valor2);	
		}
	    console.log (resultado);
    }
