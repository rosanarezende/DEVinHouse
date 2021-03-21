package ex06;

public class TestaPorta {
    public static void main(String[] args) {
        Porta porta = new Porta("vermelha", 1.5, 2.2, 0.4, false);
        System.out.println("A porta está aberta? " + porta.estaAberta());

        porta.abre();
        System.out.println("A porta está aberta? " + porta.estaAberta());

        porta.fecha();
        System.out.println("A porta está aberta? " + porta.estaAberta());

        porta.pinta("azul");
        System.out.println("A porta é " + porta.cor);



    }
}
