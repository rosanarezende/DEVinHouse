package ex05;

public class TestaPessoa {
    public static void main(String[] args) {
        Pessoa rosana = new Pessoa("Rosana", 33);
        rosana.fazAniversario();
        System.out.println(rosana.idade);
    }
}
