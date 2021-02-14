package exercicios;

import java.util.Scanner;

public class ex10 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Adivinhe qual número de 1 a 5 eu estou pensando");
        int numero = teclado.nextInt();
        int randomico = (int) (Math.random() * (5-1) + 1);

        String resultado = numero == randomico ? "Você acertou!" : "Você errou, o número correto era " + randomico;

        System.out.print(resultado);
    }
}
