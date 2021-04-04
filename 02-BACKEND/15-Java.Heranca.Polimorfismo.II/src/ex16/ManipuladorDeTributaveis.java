package ex16;

import ex15.Tributavel;

public class ManipuladorDeTributaveis {
    double total;
    void calculaImpostos(Tributavel[] bens){
        for(Tributavel bem: bens){
            this.total += bem.getValorImposto();
        }
    }
}
