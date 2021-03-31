package ex10;

public class Quadrado extends Quadrilatero{

    public Quadrado(String nome, double comprimento, double largura) {
        super(nome, comprimento, largura);
    }

    @Override
    double getArea() {
        return super.getComprimento() * super.getLargura();
    }
}
