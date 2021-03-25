package ex12;

public class TestaEsportista {
    public static void main(String[] args) {
            Esportista fulano = new Esportista("Rosana", "Rezende", "11/03/1987");

            System.out.println("Idade: " + fulano.calculaIdade());
            System.out.println("Frequência cardíacada máxima: " + fulano.calculaFrequenciaCardiacaMaxima());
            System.out.println("Frequência cardíacada ideal: " + fulano.calculaFrequenciaCardiacaAlvo());
    }
}
