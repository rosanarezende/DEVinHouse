package ex12;

public class Conta {
    String nomeDoTitular;
    int numero;
    int agencia;
    double saldo;
    double limite;
    String dataDeAbertura;
    static int identificador;

    Conta( String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura){
        this.nomeDoTitular = nomeDoTitular;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.limite = limite;
        this.dataDeAbertura = dataDeAbertura;
        Conta.identificador++;
    }

    void sacar(double valor){
        if(this.saldo + this.limite >= valor) {
            this.saldo -= valor;
        }
    }

    void depositar(double valor){
        this.saldo += valor;
    }

    double verificaSaldo(){
        return this.saldo;
    }

    String recuperaDadosParaImpressao(){
        return String.format(
                "Nome do titular: %s. " +
                        "\nNúmero da conta: %d. " +
                        "\nAgência: %d. " +
                        "\nSaldo: %f. " +
                        "\nLimite: %f. " +
                        "\nData de abertura: %s.",
                this.nomeDoTitular, this.numero, this.agencia, this.saldo, this.limite, this.dataDeAbertura);
    }

    public static int getIdentificador() {
        return identificador;
    }
}
