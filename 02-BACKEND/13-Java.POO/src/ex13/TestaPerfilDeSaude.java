package ex13;

public class TestaPerfilDeSaude {
    public static void main(String[] args) {
        PerfilDeSaude rosana = new PerfilDeSaude("Rosana", "Rezende", "feminino", "11/03/1987", 1.65, 85);
        System.out.println(rosana.toString());
        System.out.println("Idade: " + rosana.calculaIdade());
        System.out.println("Frequência cardíacada máxima: " + rosana.calculaFrequenciaCardiacaMaxima());
        System.out.println("Frequência cardíacada ideal: " + rosana.calculaFrequenciaCardiacaAlvo());
        System.out.printf("IMC: %.2f", rosana.calculaIMC());
    }

}
