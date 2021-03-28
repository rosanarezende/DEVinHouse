package ex16;

public class FuncionarioComissionado extends Funcionario{
    private double vendasBrutas;
    private double taxaDeComissao;

    public FuncionarioComissionado(String nome, String sobrenome, String cpf, double vendasBrutas, double taxaDeComissao) {
        super(nome, sobrenome, cpf);
        this.vendasBrutas = vendasBrutas;
        this.taxaDeComissao = taxaDeComissao;
    }

    public double getVendasBrutas() {
        return vendasBrutas;
    }

    public void setVendasBrutas(double vendasBrutas) {
        if(vendasBrutas > 0) {
            this.vendasBrutas = vendasBrutas;
        }
    }

    public double getTaxaDeComissao() {
        return taxaDeComissao;
    }

    public void setTaxaDeComissao(double taxaDeComissao) {
        if(taxaDeComissao >= 0 && taxaDeComissao <= 1){
            this.taxaDeComissao = taxaDeComissao;
        }
    }

    @Override
    public String toString() {
        return super.toString() + '\'' + " - Vendas brutas = " + vendasBrutas + " - Taxa de comissão = " + taxaDeComissao;
    }

    public double ganhos(){
        return taxaDeComissao * vendasBrutas;
    }
}
