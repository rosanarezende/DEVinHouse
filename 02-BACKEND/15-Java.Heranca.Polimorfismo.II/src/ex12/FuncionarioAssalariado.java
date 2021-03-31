package ex12;

public class FuncionarioAssalariado extends Funcionario {
    private double salario;

    public FuncionarioAssalariado(String nome, String sobrenome, String dataDeNascimento, double salario) {
        super(nome, sobrenome, dataDeNascimento);
        this.salario = salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    double calcularSalarioMensal() {
        return salario;
    }

    @Override
    public String toString() {
        return super.toString() + " -  salário=" + calcularSalarioMensal();
    }
}
