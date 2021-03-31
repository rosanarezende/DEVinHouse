package ex12;

public abstract class Funcionario {
    String nome;
    String sobrenome;

    public Funcionario(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public String toString() {
        return "Funcionario {" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                '}';
    }

    abstract double calcularSalarioMensal();
}
