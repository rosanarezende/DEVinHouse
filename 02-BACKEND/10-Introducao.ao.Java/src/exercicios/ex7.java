package exercicios;

import java.util.Scanner;

public class ex7 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = teclado.nextLine();

        System.out.print("Digite seu sobrenomenome: ");
        String sobrenome = teclado.nextLine();

        System.out.printf("Nome completo: %s %s", nome, sobrenome);
    }
}
