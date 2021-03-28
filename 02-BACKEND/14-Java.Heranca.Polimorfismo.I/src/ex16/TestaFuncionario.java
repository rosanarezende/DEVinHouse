package ex16;

import ex17.FuncionarioHorista;

public class TestaFuncionario {
    public static void main(String[] args) {
        Funcionario func = new Funcionario("Rosana", "Rezende", "11122233344");
        System.out.println(func.toString());

        FuncionarioComissionado func2 = new FuncionarioComissionado("Cleiton", "Dias", "33322211100", 10000,0.15);
        System.out.println(func2.toString());
        System.out.printf("Ganhos: R$ %.2f%n", func2.ganhos());

        FuncionarioHorista func3 = new FuncionarioHorista("Danilo", "Rezende", "11111111111", 100, 30);
        System.out.println(func3.toString());
        System.out.printf("Ganhos: R$ %.2f%n", func3.ganhos());
    }
}
