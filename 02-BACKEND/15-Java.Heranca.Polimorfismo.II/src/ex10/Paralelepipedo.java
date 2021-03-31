package ex10;

public class Paralelepipedo extends Poliedro {
    public Paralelepipedo(String nome, double profundidade, double largura, double altura) {
        super(nome, profundidade, largura, altura);
    }

    @Override
    double getArea() {
        return 2 * super.getAltura() * super.getLargura() +
                2 * super.getAltura() * super.getProfundidade() +
                2 * super.getLargura() * super.getProfundidade();
    }

    @Override
    double getVolume() {
        return super.getAltura() * super.getLargura() * super.getProfundidade();
    }
}
