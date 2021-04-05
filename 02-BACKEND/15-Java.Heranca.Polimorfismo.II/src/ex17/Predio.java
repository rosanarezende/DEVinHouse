package ex17;

public class Predio implements PegadaCarbono {
    int numeroDeAndares;
    String endereco;
    FonteDeEnergia fonteDeEnergia;

    public Predio(int numeroDeAndares, String endereco, FonteDeEnergia fonteDeEnergia) {
        this.numeroDeAndares = numeroDeAndares;
        this.endereco = endereco;
        this.fonteDeEnergia = fonteDeEnergia;
    }

    public Predio(int numeroDeAndares, String endereco) {
        this.numeroDeAndares = numeroDeAndares;
        this.endereco = endereco;
        this.fonteDeEnergia = FonteDeEnergia.ELETRICA;
    }

    // não achei fórmula... coloquei valores aleatórios
    @Override
    public double getPegadaCarbono() {
        if (fonteDeEnergia == FonteDeEnergia.ELETRICA) {
            return 20;
        } else if (fonteDeEnergia == FonteDeEnergia.SOLAR){
            return 10;
        } else {
            return 0;
        }
    }

    @Override
    public String toString() {
        return "Predio{" +
                "numeroDeAndares=" + numeroDeAndares +
                ", endereco='" + endereco + '\'' +
                ", fonteDeEnergia=" + fonteDeEnergia +
                ", pegadaDeCarbono=" + getPegadaCarbono() +
                '}';
    }
}
