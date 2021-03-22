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
}
