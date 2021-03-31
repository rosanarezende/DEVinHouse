package ex12;

public class FuncionarioComissionado extends Funcionario{
    double valorDasVendasNoMes;
    double comissao;

    public FuncionarioComissionado(String nome, String sobrenome, double valorDasVendasNoMes, double comissao) {
        super(nome, sobrenome);
        this.valorDasVendasNoMes = valorDasVendasNoMes;
        this.comissao = comissao;
    }

    @Override
    double calcularSalarioMensal() {
        return valorDasVendasNoMes * comissao;
    }

    @Override
    public String toString() {
        return super.toString() + " -  salário=" + calcularSalarioMensal();
    }
}
