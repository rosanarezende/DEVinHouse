package ex12;

public class FuncionarioHorista extends Funcionario {
    double horasTrabalhadas;
    double valorDaHora;

    public FuncionarioHorista(String nome, String sobrenome, double horasTrabalhadas, double valorDaHora) {
        super(nome, sobrenome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorDaHora = valorDaHora;
    }

    @Override
    double calcularSalarioMensal() {
        return horasTrabalhadas * valorDaHora;
    }

    @Override
    public String toString() {
        return super.toString() + " -  salário=" + calcularSalarioMensal();
    }
}
