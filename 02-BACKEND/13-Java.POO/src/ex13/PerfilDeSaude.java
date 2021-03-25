package ex13;

import ex12.Esportista;

public class PerfilDeSaude extends Esportista {
    private String nome;
    private String sobrenome;
    private String sexo;
    private String dataDeNascimento;
    private double altura;
    private double peso;

    PerfilDeSaude(String nome, String sobrenome, String sexo, String dataDeNascimento, double altura, double peso){
        super(nome, sobrenome, dataDeNascimento);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.dataDeNascimento = dataDeNascimento;
        this.altura = altura;
        this.peso = peso;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getSexo() {
        return sexo;
    }

    public String getDataDeNascimento() {
        return dataDeNascimento;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    @Override
    public String toString() {
        return "PerfilDeSaude{" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", dataDeNascimento='" + dataDeNascimento + '\'' +
                ", altura=" + altura +
                ", peso=" + peso +
                '}';
    }
}
