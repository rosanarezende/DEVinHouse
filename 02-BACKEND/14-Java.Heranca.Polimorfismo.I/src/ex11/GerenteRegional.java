package ex11;

import ex08.Gerente;

public class GerenteRegional extends Gerente {

    public GerenteRegional(String nome, String sobrenome, String cpf, double salario, String senha, int numeroDeFuncionariosGenrenciados) {
        super(nome, sobrenome, cpf, salario, senha, numeroDeFuncionariosGenrenciados);
    }

    @Override
    public double calcularBonificacao() {
        return super.calcularBonificacao() + 1000;
    }
}
