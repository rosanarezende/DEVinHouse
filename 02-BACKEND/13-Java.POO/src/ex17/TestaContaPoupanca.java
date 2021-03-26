package ex17;

public class TestaContaPoupanca {
    public static void main(String[] args) {
        ContaPoupanca poupador1 = new ContaPoupanca(2000);
        ContaPoupanca poupador2 = new ContaPoupanca(3000);

        ContaPoupanca.alterarTaxaAnual(0.04);
        poupador1.calcularJuroMensal();
        poupador2.calcularJuroMensal();
        System.out.println("Saldo Poupador 1: " + poupador1.getSaldo());
        System.out.println("Saldo Poupador 2: " + poupador2.getSaldo());

        ContaPoupanca.alterarTaxaAnual(0.05);
        poupador1.calcularJuroMensal();
        poupador2.calcularJuroMensal();
        System.out.println("Saldo Poupador 1: " + poupador1.getSaldo());
        System.out.println("Saldo Poupador 2: " + poupador2.getSaldo());
    }
}
