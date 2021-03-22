package ex10;

public class TesteFatura {
    public static void main(String[] args) {
        Fatura fatura = new Fatura("123", "leite", 3, 1.5);
        System.out.printf("O preço do %s é %f", fatura.getDescricao(), fatura.getValorFatura());
    }
}
