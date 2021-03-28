package ex07;

public class Esfera extends FormaTridimensional{
    double superficie;
    double fuso;
    double cunha;
    double calota;

    public Esfera(String nome, String comprimento, String largura, String altura, double superficie, double fuso, double cunha, double calota) {
        super(nome, comprimento, largura, altura);
        this.superficie = superficie;
        this.fuso = fuso;
        this.cunha = cunha;
        this.calota = calota;
    }
}
