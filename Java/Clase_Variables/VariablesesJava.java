package LeccionesdeJava.Clase_Variables;

public class VariablesesJava {
    public static void main(String[] args) {
        //Definimos la variable
        int miVariableEntera = 10;
        System.out.println(miVariableEntera);
        //Modificamos el valor de la variable
        miVariableEntera = 5;
        System.out.println(miVariableEntera);
        
        String miVariableCadena = "Saludos";
        System.out.println(miVariableCadena);
        
        miVariableCadena = "Adios";
        System.out.println(miVariableCadena);
    
        //var - Inferencia de tipos en java
        var miVarEntera2 = 15;
        System.out.println(miVarEntera2);
        
        var miVariableCadena2 = "Nueva Cadena";
        System.out.println("miVariableCadena2 = " + miVariableCadena2);
        
        var miVar= 3;
        System.out.println(miVar);
        //var miVariable = 1;
        //var _miVariable = 2;
        //var $miVariable = 3;
        //var $miVariable = 10; No se recomienda utilizar
        //var #miVariable = 2; No se permite utilizar caracteres especiales
    }
}
