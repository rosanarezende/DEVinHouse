package ex07;

public class FormaBidimensional extends Forma {
    String comprimento;
    String largura;

    public FormaBidimensional(String nome, String comprimento, String largura) {
        super(nome);
        this.comprimento = comprimento;
        this.largura = largura;
    }
}
