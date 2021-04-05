package ex17;

import java.util.ArrayList;
import java.util.List;

public class TestaPegadaDeCarbono {
    public static void main(String[] args) {
        Carro carro = new Carro("Rosana", FonteDeEnergia.ALCOOL);
        Moto moto = new Moto("Cleiton");
        Predio predio = new Predio(10, "Avenida Tal e Tal", FonteDeEnergia.SOLAR);

        List lista = new ArrayList();
        lista.add(carro);
        lista.add(moto);
        lista.add(predio);

        for (Object item : lista) {
            System.out.println(item.toString());
        }
    }
}
