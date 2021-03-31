package ex10;

public class Forma {
    private String nome;
    private String tipo;

    public Forma(String nome, String tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Forma => " +
                "nome='" + nome + '\'' +
                " - tipo='" + tipo + '\'';
    }
}
