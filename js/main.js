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
    
/*    function eventFire(el, etype){
        if (el.fireEvent) {
          el.fireEvent('on' + etype);
        } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(etype, true, false);
          el.dispatchEvent(evObj);
        }
      }
      operacionSuma(document.getElementById('mytest1'), 'click');
      */