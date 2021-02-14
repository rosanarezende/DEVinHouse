package exercicios;

import java.util.Scanner;

public class ex13 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.printf("Informe suas notas do semestre:%nNota 1: ");
        double nota1 = teclado.nextDouble();
        System.out.println("Nota 2: ");
        double nota2 = teclado.nextDouble();
        System.out.println("Nota 3: ");
        double nota3 = teclado.nextDouble();

        double resultado = (nota1 + nota2 + nota3) / 3.0;
        System.out.printf("Sua média final é %.2f", resultado);
    }
}
