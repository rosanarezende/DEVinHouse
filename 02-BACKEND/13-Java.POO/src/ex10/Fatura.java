package ex10;

public class Fatura {
    String numero;
    String descricao;
    int quantidade;
    double preco;

    Fatura(String numero, String descricao, int quantidade, double preco){
        this.numero = numero;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    public String getNumero() {
        return numero;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    double getValorFatura(){
        double quantidadeValidada = this.quantidade > 0 ? this.quantidade : 0;
        double precoValidado = this.preco > 0 ? this.preco : 0.0;
        return quantidadeValidada * precoValidado;
    }
}
