package ex08;

public class TestaContas {
    public static void main(String[] args) {
        ContaPoupanca cp = new ContaPoupanca("Rosana", 123, 1, 100, 50, "01/01/2021");
        System.out.println(cp.getTipo());
    }
}
