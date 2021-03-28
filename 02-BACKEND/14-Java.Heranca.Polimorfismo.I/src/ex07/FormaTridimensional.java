package ex07;

public class FormaTridimensional extends Forma{
    String comprimento;
    String largura;
    String altura;

    public FormaTridimensional(String nome, String comprimento, String largura, String altura) {
        super(nome);
        this.comprimento = comprimento;
        this.largura = largura;
        this.altura = altura;
    }

}
