package exercicios;

import java.util.Scanner;

public class ex9 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = teclado.nextLine();
        int tamanho = nome.replaceAll("\\s+","").length();

        System.out.printf("Quantidade de letras do nome: %s", tamanho);
    }
}
