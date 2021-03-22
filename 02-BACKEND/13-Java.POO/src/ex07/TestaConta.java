package ex07;

public class TestaConta {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria("Rosana", 123, 0001, 100, 50, "01/01/2021");

        conta.sacar(80);
        System.out.println(conta.verificaSaldo());

        conta.depositar(15.5);
        System.out.println(conta.verificaSaldo());

        conta.sacar(100);
        System.out.println(conta.verificaSaldo());

        System.out.println(conta.recuperaDadosParaImpressao());
    }
}
