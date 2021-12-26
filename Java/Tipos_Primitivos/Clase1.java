package LeccionesdeJava.Tipos_Primitivos;

public class Clase1 {
    public static void main(String[] args) {
        /*
         * Tipos Primitivos enteros: byte, short, int, long
         */
        System.out.println("===============Tipo byte===========");
        byte numeroByte = (byte) 129;
        System.out.println("Valor byte:" + numeroByte);
        System.out.println("Valor minimo byte:" + Byte.MIN_VALUE);
        System.out.println("Valor maximo byte:" + Byte.MAX_VALUE);

        System.out.println("=============Tipo Short=============");
        short numeroShort = (short) 32768;
        System.out.println("numeroShort:" + numeroShort);
        System.out.println("Valor minimo short:" + Short.MIN_VALUE);
        System.out.println("Valor maximo short:" + Short.MAX_VALUE);

        System.out.println("==============Tipo Int==============");
        int numeroInt = (int) 2147483648L;
        System.out.println("numeroInt:" + numeroInt);
        System.out.println("Valor minnimo int:" + Integer.MIN_VALUE);
        System.out.println("Valor maximo int:" + Integer.MAX_VALUE);

        System.out.println("=============Tipo Long===============");
        long numerolog = (long) 922337203485475808L;
        System.out.println("numerolog:" + numerolog);
        System.out.println("Valor minimo long:" + Long.MIN_VALUE);
        System.out.println("Valor maximo long:" + Long.MAX_VALUE);

    }
}
