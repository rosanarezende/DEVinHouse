package ex12;

public class FuncionarioPorPeca extends Funcionario{
    double qtdPecas;
    double salarioPorPeca;

    public FuncionarioPorPeca(String nome, String sobrenome, String dataDeNascimento, double qtdPecas, double salarioPorPeca) {
        super(nome, sobrenome, dataDeNascimento);
        this.qtdPecas = qtdPecas;
        this.salarioPorPeca = salarioPorPeca;
    }

    @Override
    double calcularSalarioMensal() {
        return qtdPecas * salarioPorPeca;
    }

    @Override
    public String toString() {
        return super.toString() + " -  salário=" + calcularSalarioMensal();
    }

}
