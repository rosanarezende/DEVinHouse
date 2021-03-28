package ex07;

public class Quadrilatero extends FormaBidimensional{
    static int qtdLados = 4;
    String[] lados;
    String[] vertices;
    String[] angulosInternos;
    String[] diagonais;

    public Quadrilatero(String nome, String comprimento, String largura, String[] lados, String[] vertices, String[] angulosInternos, String[] diagonais) {
        super(nome, comprimento, largura);
        this.lados = lados;
        this.vertices = vertices;
        this.angulosInternos = angulosInternos;
        this.diagonais = diagonais;
    }
}
