package exercicios;

import java.util.Scanner;

public class ex8 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite um número com 2 ou mais casas depois da vírgula: ");
        double numero = teclado.nextDouble();
        int resultado = (int) numero;

        System.out.printf("O número digitado corresponde ao número inteiro: %s", resultado);
    }
}
