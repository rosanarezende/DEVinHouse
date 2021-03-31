package ex12;

public class FolhaPagamento {
    public static void main(String[] args) {
        FuncionarioAssalariado assalariado = new FuncionarioAssalariado("Rosana", "Rezende", 1000);
        FuncionarioComissionado comissionado = new FuncionarioComissionado("Cleiton", "Dias", 20000, 0.15);
        FuncionarioHorista horista = new FuncionarioHorista("Danilo", "Rezende", 150, 30);

        Funcionario[] funcionarios = new Funcionario[3];
        funcionarios[0] = assalariado;
        funcionarios[1] = comissionado;
        funcionarios[2] = horista;

        double total = 0;
        for(Funcionario funcionario : funcionarios) {
            System.out.println(funcionario.toString());
            total += funcionario.calcularSalarioMensal();
        }
        System.out.printf("Total: %.2f ", total);
    }
}
