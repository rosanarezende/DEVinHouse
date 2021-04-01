package ex12;

public class FuncionarioHorista extends Funcionario {
    double horasTrabalhadas;
    double valorDaHora;

    public FuncionarioHorista(String nome, String sobrenome, String dataDeNascimento, double horasTrabalhadas, double valorDaHora) {
        super(nome, sobrenome, dataDeNascimento);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorDaHora = valorDaHora;
    }

    @Override
    double calcularSalarioMensal() {
        return horasTrabalhadas * valorDaHora;
    }
}
