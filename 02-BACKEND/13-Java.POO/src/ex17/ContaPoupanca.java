package ex17;

public class ContaPoupanca {
    static double taxaDeJurosAnual;
    private double saldo;

    ContaPoupanca(double saldo){
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public void calcularJuroMensal(){
        double juroMensal = saldo * taxaDeJurosAnual / 12;
        saldo += juroMensal;
    }

    public static double getTaxaDeJurosAnual() {
        return taxaDeJurosAnual;
    }

    static void alterarTaxaAnual(double novoValor){
        taxaDeJurosAnual = novoValor;
    }

}
