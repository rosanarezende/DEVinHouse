package ex16;

public class TestaFuncionario {
    public static void main(String[] args) {
        Funcionario func = new Funcionario("Rosana", "Rezende", "11122233344");
        System.out.println(func.toString());

        FuncionarioComissionado func2 = new FuncionarioComissionado("Cleiton", "Dias", "33322211100", 10000,0.15);
        System.out.println(func2.toString());
        System.out.printf("Ganhos: R$ %.2f%n", func2.ganhos());
    }
}
