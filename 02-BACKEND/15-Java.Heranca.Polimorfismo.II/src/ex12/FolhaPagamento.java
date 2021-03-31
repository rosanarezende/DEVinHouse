package ex12;

import java.time.LocalDate;

public class FolhaPagamento {
    public static void main(String[] args) {
        FuncionarioAssalariado assalariado = new FuncionarioAssalariado("Rosana", "Rezende", "11/03/1987", 1000);
        FuncionarioComissionado comissionado = new FuncionarioComissionado("Cleiton", "Dias", "27/05/1987", 20000, 0.15);
        FuncionarioHorista horista = new FuncionarioHorista("Danilo", "Rezende", "06/08/1988", 150, 30);

        Funcionario[] funcionarios = new Funcionario[3];
        funcionarios[0] = assalariado;
        funcionarios[1] = comissionado;
        funcionarios[2] = horista;

        double total = 0;
        for(Funcionario funcionario : funcionarios) {
            if(fazAniversarioEsseMes(funcionario)){
                System.out.println(funcionario.toString() + " - bônus=100.0");
                total += funcionario.calcularSalarioMensal() + 100;
            } else {
                System.out.println(funcionario.toString());
                total += funcionario.calcularSalarioMensal();
            }
        }
        System.out.printf("\nTotal: %.2f ", total);
    }

    static boolean fazAniversarioEsseMes(Funcionario funcionario){
        int mesAtual = LocalDate.now().getMonthValue();
        int aniversario = funcionario.getDataDeNascimento().getMonthValue();
        return mesAtual == aniversario;
    }
}
