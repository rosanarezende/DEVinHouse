package exercicios;

import java.util.Scanner;

public class ex12 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Insira um número inteiro: ");
        int numero = teclado.nextInt();

        String resultado = numero % 2 == 0 ? "par" : "ímpar";

        System.out.printf("O número %s é %s", numero, resultado);
    }
}
