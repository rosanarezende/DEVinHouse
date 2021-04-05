package ex17;

public class Carro implements PegadaCarbono {
    String nomeDoMotorista;
    FonteDeEnergia fonteDeEnergia;

    public Carro(String nomeDoMotorista, FonteDeEnergia fonteDeEnergia) {
        this.nomeDoMotorista = nomeDoMotorista;
        this.fonteDeEnergia = fonteDeEnergia;
    }

    public Carro(String nomeDoMotorista) {
        this.nomeDoMotorista = nomeDoMotorista;
        this.fonteDeEnergia = FonteDeEnergia.ALCOOL;
    }

    // não achei fórmula... coloquei valores aleatórios
    @Override
    public double getPegadaCarbono() {
        if (fonteDeEnergia == FonteDeEnergia.ALCOOL) {
            return 40;
        } else if (fonteDeEnergia == FonteDeEnergia.GASOLINA){
            return 30;
        } else {
            return 0;
        }
    }

    @Override
    public String toString() {
        return "Carro {" +
                "nomeDoMotorista='" + nomeDoMotorista + '\'' +
                ", fonteDeEnergia=" + fonteDeEnergia +
                ", pegadaDeCarbono=" + getPegadaCarbono() +
                '}';
    }
}
