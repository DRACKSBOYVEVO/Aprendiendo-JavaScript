

function notify() {
    return "Hol juan";
  }
  
  console.log(notify());
  //llamo a notify luego de definirla

  //La manera mas facil de hacerlo seria la siguiente.

  (function (){
      console.log("Hola, soy una manera mas rapida de hacerlo!")
  }());

  /*
  Gracias a IIFE podemos ejecutar una sección de código de manera
inmediata sin necesidad de crear una función y llamar a la misma, esto nos
brinda ventajas para aquellos casos donde la privacidad de los datos es
fundamental, ya que todo aquello que definamos dentro del scope de una
función IIFE, sera eliminado luego de su ejecución.
  */

