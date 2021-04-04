package ex15;

//import java.util.ArrayList;
//import java.util.List;

public class SistemaBancario {
    public static void main(String[] args) {
        SeguroDeVida sv = new SeguroDeVida(150, 123, 12345);
        ContaCorrente cc = new ContaCorrente("Rosana", 123, 1, 2000, 50, "01/01/2021");

        Tributavel[] bens = new Tributavel[2];
        bens[0] = sv;
        bens[1] = cc;

//        Tem uma forma de fazer isso sem limitar o tamanho da lista
//        List<Tributavel> bens = new ArrayList<Tributavel>();
//        bens.add(sv);
//        bens.add(cc);

        for(Tributavel bem: bens){
            System.out.println(bem.getValorImposto());
        }
    }
}
