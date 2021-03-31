package ex10;

import java.util.Objects;

abstract class FormaTridimensional extends Forma {
    private double profundidade;
    private double largura;
    private double altura;

    public FormaTridimensional(String nome, double profundidade, double largura, double altura) {
        super(nome, "FormaTridimensional");
        this.profundidade = profundidade;
        this.largura = largura;
        this.altura = altura;
    }

    public double getProfundidade() {
        return profundidade;
    }

    public void setProfundidade(double profundidade) {
        this.profundidade = profundidade;
    }

    public double getLargura() {
        return largura;
    }

    public void setLargura(double largura) {
        this.largura = largura;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    abstract double getArea();

    abstract double getVolume();

    @Override
    public String toString() {
        return super.toString() + " - " +
                "profundidade=" + profundidade +
                " - largura=" + largura +
                " - altura=" + altura;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FormaTridimensional)) return false;
        FormaTridimensional that = (FormaTridimensional) o;
        return Double.compare(that.getProfundidade(), getProfundidade()) == 0 && Double.compare(that.getLargura(), getLargura()) == 0 && Double.compare(that.getAltura(), getAltura()) == 0;
    }
}
