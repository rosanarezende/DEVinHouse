package ex08;

public class Gerente extends Funcionario{
    private String senha;
    private int numeroDeFuncionariosGenrenciados;

    public Gerente(String nome, String sobrenome, String cpf, double salario, String senha, int numeroDeFuncionariosGenrenciados) {
        super(nome, sobrenome, cpf, salario);
        this.senha = senha;
        this.numeroDeFuncionariosGenrenciados = numeroDeFuncionariosGenrenciados;
    }

//    Exercício 9

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getNumeroDeFuncionariosGenrenciados() {
        return numeroDeFuncionariosGenrenciados;
    }

    public void setNumeroDeFuncionariosGenrenciados(int numeroDeFuncionariosGenrenciados) {
        this.numeroDeFuncionariosGenrenciados = numeroDeFuncionariosGenrenciados;
    }

//    Exercício 10
    @Override
    public double calcularBonificacao() {
        return super.getSalario() * 0.15;
    }
}
