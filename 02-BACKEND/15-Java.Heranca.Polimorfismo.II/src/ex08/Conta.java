package ex08;

public abstract class Conta {
    String nomeDoTitular;
    int numero;
    int agencia;
    public double saldo;
    double limite;
    String dataDeAbertura;
    static int identificador;

    public Conta(String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura){
        this.nomeDoTitular = nomeDoTitular;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.limite = limite;
        this.dataDeAbertura = dataDeAbertura;
        Conta.identificador++;
    }

    protected void sacar(double valor){
        if(this.saldo + this.limite >= valor) {
            this.saldo -= valor;
        }
    }

    public void depositar(double valor){
        this.saldo += valor;
    }

    double verificaSaldo(){
        return this.saldo;
    }

    String recuperaDadosParaImpressao(){
//        Exercício 9
        getTipo();
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

    protected abstract String getTipo();
}
