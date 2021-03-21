package ex06;

public class Porta {
    String cor;
    double largura;
    double altura;
    double profundidade;
    boolean aberta;

    Porta(String cor, double largura, double altura, double profundidade, boolean aberta){
        this.cor = cor;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.aberta = aberta;
    }

    void abre(){
        this.aberta = true;
    }

    void fecha(){
        this.aberta = false;
    }

    void pinta(String cor){
        this.cor = cor;
    }

    boolean estaAberta(){
        return this.aberta;
    }
}
