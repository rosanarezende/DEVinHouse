package ex07;

public class ContaBancaria {
    String nomeDoTitular;
    int numero;
    int agencia;
    double saldo;
    double limite;
    String dataDeAbertura;

    ContaBancaria( String nomeDoTitular, int numero, int agencia, double saldo, double limite, String dataDeAbertura){
        this.nomeDoTitular = nomeDoTitular;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.limite = limite;
        this.dataDeAbertura = dataDeAbertura;
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

//    Exercício 08
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
}
