package ex14;

public class TestaRetangulo {
    public static void main(String[] args) {
        Retangulo retangulo = new Retangulo();
        retangulo.setLargura(10);
        retangulo.setComprimento(15);

        System.out.println("Perímetro: " + retangulo.calculaPerimetro());
        System.out.println("Área: " + retangulo.calculaArea());
    }
}
