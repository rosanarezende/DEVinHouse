package ex10;

public abstract class FormaBidimensional extends Forma {
    private double comprimento;
    private double largura;

    public FormaBidimensional(String nome, double comprimento, double largura) {
        super(nome, "FormaBidimensional");
        this.comprimento = comprimento;
        this.largura = largura;
    }

    public double getComprimento() {
        return comprimento;
    }

    public void setComprimento(double comprimento) {
        this.comprimento = comprimento;
    }

    public double getLargura() {
        return largura;
    }

    public void setLargura(double largura) {
        this.largura = largura;
    }

    abstract double getArea();

    @Override
    public String toString() {
        return super.toString() +  " - " +
                "comprimento=" + comprimento +
                " - largura=" + largura;
    }
}
