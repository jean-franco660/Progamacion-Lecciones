package LeccionesdeJava.Tipos_Primitivos;

public class Clase2 {

public static void main(String[] args) {
    /*
        Tipos primitivos de tipo flotante: float y double
    */

    System.out.println("===============Tipo float===========");
    float numerofloat = (float)3.4028236E38D;
    System.out.println("numerofloat = "+ numerofloat);
    System.out.println("Valor minimo:"+ Float.MIN_VALUE);
    System.out.println("Valor maximo:"+ Float.MAX_VALUE);

    System.out.println("=========Tipo Double=============");
    double numeroDouble = 1.7976931348623157E308;
    System.out.println("numeroDouble = "+ numeroDouble);
    System.out.println("Valor minimo:"+ Double.MIN_VALUE);
    System.out.println("Valor maximo:"+ Double.MAX_VALUE);
}
    
}
