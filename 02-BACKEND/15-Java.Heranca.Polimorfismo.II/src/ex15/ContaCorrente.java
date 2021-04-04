package ex15;

import ex08.Conta;

public class ContaCorrente extends Conta implements Tributavel {
    public ContaCorrente(String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura) {
        super(nomeDoTitular, numero, agencia, saldo, limite, dataDeAbertura);
    }

    @Override
    public void sacar(double valor) {
        super.sacar(valor + 0.1);
    }

    @Override
    public String getTipo() {
        return "Conta Corrente";
    }

    @Override
    public double getValorImposto() {
        return super.saldo * 0.01;
    }
}
