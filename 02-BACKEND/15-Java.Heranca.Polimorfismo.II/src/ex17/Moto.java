package ex17;

public class Moto implements PegadaCarbono {
    String nomeDoPiloto;
    FonteDeEnergia fonteDeEnergia;

    public Moto(String nomeDoPiloto, FonteDeEnergia fonteDeEnergia) {
        this.nomeDoPiloto = nomeDoPiloto;
        this.fonteDeEnergia = fonteDeEnergia;
    }

    public Moto(String nomeDoPiloto) {
        this.nomeDoPiloto = nomeDoPiloto;
        this.fonteDeEnergia = FonteDeEnergia.GASOLINA;
    }

    // não achei fórmula... coloquei valores aleatórios    @Override
    public double getPegadaCarbono() {
        if (fonteDeEnergia == FonteDeEnergia.ALCOOL) {
            return 35;
        } else if (fonteDeEnergia == FonteDeEnergia.GASOLINA){
            return 25;
        } else {
            return 0;
        }
    }

    @Override
    public String toString() {
        return "Moto{" +
                "nomeDoPiloto='" + nomeDoPiloto + '\'' +
                ", fonteDeEnergia=" + fonteDeEnergia +
                ", pegadaDeCarbono=" + getPegadaCarbono() +
                '}';
    }
}
