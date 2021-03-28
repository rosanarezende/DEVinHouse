package ex12;

public class ContaCorrente extends Conta{

    public ContaCorrente(String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura) {
        super(nomeDoTitular, numero, agencia, saldo, limite, dataDeAbertura);
    }

    @Override
    void sacar(double valor) {
        super.sacar(valor + 0.1);
    }

    @Override
    public String getTipo() {
        return super.getTipo() + " Corrente";
    }
}
