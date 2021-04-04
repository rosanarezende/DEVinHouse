package ex15;

public class SeguroDeVida implements Tributavel{
    private double valor;
    private int titular;
    private int numeroApolice;

    public SeguroDeVida(double valor, int titular, int numeroApolice) {
        this.valor = valor;
        this.titular = titular;
        this.numeroApolice = numeroApolice;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getTitular() {
        return titular;
    }

    public void setTitular(int titular) {
        this.titular = titular;
    }

    public int getNumeroApolice() {
        return numeroApolice;
    }

    public void setNumeroApolice(int numeroApolice) {
        this.numeroApolice = numeroApolice;
    }

    @Override
    public double getValorImposto() {
        return 42 + this.valor * 0.02;
    }
}
