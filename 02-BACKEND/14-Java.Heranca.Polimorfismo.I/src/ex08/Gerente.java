package ex08;

public class Gerente extends Funcionario{
    String senha;
    int numeroDeFuncionariosGenrenciados;

    public Gerente(String nome, String sobrenome, String cpf, double salario, String senha, int numeroDeFuncionariosGenrenciados) {
        super(nome, sobrenome, cpf, salario);
        this.senha = senha;
        this.numeroDeFuncionariosGenrenciados = numeroDeFuncionariosGenrenciados;
    }
}
