package exercicios;

import java.util.Scanner;

public class ex14 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.printf("Calculadora!%n%n");

        System.out.println("Digite o primeiro número:");
        int numero1 = teclado.nextInt();

        System.out.println("Digite o segundo número: ");
        int numero2 = teclado.nextInt();

        System.out.printf("Escolha a operação:%n1) somar %n2) subtrair %n3) multiplicar %n4) dividir%n");
        int operacao = teclado.nextInt();

        System.out.printf("%nResultado: ");

        switch (operacao) {
            case 1:
                System.out.println(numero1 + numero2);
                break;
            case 2:
                System.out.println(numero1 - numero2);
                break;
            case 3:
                System.out.println(numero1 * numero2);
                break;
            case 4:
                System.out.println(numero1 / numero2);
                break;
        }
    }
}
