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

//        Exercício 15
        ContaBancaria conta2 = new ContaBancaria("Cleiton", 124, 0001, 100, 50, "02/02/2021");
        System.out.println(ContaBancaria.getIdentificador());
    }
}
