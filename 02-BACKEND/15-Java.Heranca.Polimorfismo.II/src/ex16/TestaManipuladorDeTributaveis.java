package ex16;

import ex15.ContaCorrente;
import ex15.SeguroDeVida;
import ex15.Tributavel;

public class TestaManipuladorDeTributaveis {
    public static void main(String[] args) {
        SeguroDeVida sv = new SeguroDeVida(150, 123, 12345);
        ContaCorrente cc = new ContaCorrente("Rosana", 123, 1, 2000, 50, "01/01/2021");

        Tributavel[] bens = new Tributavel[2];
        bens[0] = sv;
        bens[1] = cc;

        ManipuladorDeTributaveis mt = new ManipuladorDeTributaveis();
        mt.calculaImpostos(bens);
        System.out.println(mt.total);
    }
}
