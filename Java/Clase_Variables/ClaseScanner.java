package LeccionesdeJava.Clase_Variables;

import java.util.Scanner;

public class ClaseScanner {
    public static void main(String[] args) {
        /*-System.out.println("Escribe tu nombre");
        Scanner consola = new Scanner(System.in);
        var usuario = consola.nextLine();
        System.out.println("usuario: " + usuario);
        System.out.println("Escribe el Titulo");
        var titulo = consola.nextLine();
        System.out.println("resultado: " + titulo + " " + usuario);*/
        
        System.out.println("Proporcione su nombre: ");
        Scanner teclado = new Scanner(System.in);
        var autor = teclado.nextLine();
        System.out.println("autor: " + autor);
        System.out.println("Escribe el Titulo de la novela: ");
        var titulo = teclado.nextLine();
        System.out.println("titulo: " + titulo);
        System.out.println(titulo + " Fue escrito por: "+ autor);
        teclado.close();
    }
}
