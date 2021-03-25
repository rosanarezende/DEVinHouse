package ex14;

public class Retangulo {
    private double comprimento = 1;
    private double largura = 1;

    public double getComprimento() {
        return comprimento;
    }

    public void setComprimento(double comprimento) {
        if(comprimento > 0 && comprimento < 20) {
            this.comprimento = comprimento;
        }
    }

    public double getLargura() {
        return largura;
    }

    public void setLargura(double largura) {
        if(largura > 0 && largura < 20) {
            this.largura = largura;
        }
    }

    public double calculaPerimetro(){
        return 2 * (comprimento + largura);
    }

    public double calculaArea(){
        return comprimento * largura;
    }
}
