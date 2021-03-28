package ex15;

public class TestaQuadrilatero {
    public static void main(String[] args) {

        Retangulo ret1 = new Retangulo(new Ponto(1, 1),
                new Ponto(1, 3),
                new Ponto(5, 3),
                new Ponto(5, 1)
        );

        Quadrado quad1 = new Quadrado(
                new Ponto(0, 4),
                new Ponto(4, 4),
                new Ponto(4, 0),
                new Ponto(0, 0)
        );

        Trapezio trap1 = new Trapezio(
                new Ponto(1, 1),
                new Ponto(3, 5),
                new Ponto(6, 5),
                new Ponto(8, 1)
        );

        Paralelogramo para1 = new Paralelogramo(
                new Ponto(0, 0),
                new Ponto(2, 4),
                new Ponto(6, 4),
                new Ponto(4, 0)
        );


        System.out.printf("Área retângulo: %.2f.%n", ret1.calculaArea());
        System.out.printf("Área quadrado: %.2f.%n",quad1.calculaArea());
        System.out.printf("Área trapézio: %.2f.%n",trap1.calculaArea());
        System.out.printf("Área paralelogramo: %.2f.%n",para1.calculaArea());

    }
}
