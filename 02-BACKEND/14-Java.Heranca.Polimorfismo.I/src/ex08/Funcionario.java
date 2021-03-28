package ex08;

public class Funcionario {
    private String nome;
    private String sobrenome;
    private String cpf;
    private double salario;

    public Funcionario(String nome, String sobrenome, String cpf, double salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getCpf() {
        return cpf;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

//    Exercício 10
    public double calcularBonificacao(){
        return salario * 0.1;
    }
}
