package ex15;

// Precisei entender o exercício do Mika: https://github.com/mikansc/dev-in-house-m2/blob/main/src/semana2/exercicio15/Quadrilatero.java

public class Quadrilatero {
    protected Ponto pontoA;
    protected Ponto pontoB;
    protected Ponto pontoC;
    protected Ponto pontoD;

    public Quadrilatero(Ponto pontoA, Ponto pontoB, Ponto pontoC, Ponto pontoD) {
        this.pontoA = pontoA;
        this.pontoB = pontoB;
        this.pontoC = pontoC;
        this.pontoD = pontoD;
    }

    public double getSegmento(Ponto ponto1, Ponto ponto2) {
        return Math.sqrt(
                Math.pow((ponto2.getX() - ponto1.getX()),2) +
                        Math.pow((ponto2.getY() - ponto1.getY()), 2)
        );
    }

    public double calculaArea() {
        return  getSegmento(pontoA, pontoB) * getSegmento(pontoB, pontoC);
    }
}
