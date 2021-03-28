package ex13;

import ex12.Conta;

public class ContaPoupanca extends Conta {

    public ContaPoupanca(String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura) {
        super(nomeDoTitular, numero, agencia, saldo, limite, dataDeAbertura);
    }

    public void renderJurosDePoupanca(){
        super.depositar(super.saldo * 0.1);
    }
}
