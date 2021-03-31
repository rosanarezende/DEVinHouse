package ex12;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public abstract class Funcionario {
    String nome;
    String sobrenome;
    private LocalDate dataDeNascimento;

    public Funcionario(String nome, String sobrenome, String dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = LocalDate.parse(dataDeNascimento, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }

    public LocalDate getDataDeNascimento() {
        return dataDeNascimento;
    }

    @Override
    public String toString() {
        return "Funcionario {" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", dataDeNascimento=" + dataDeNascimento +
                '}';
    }

    abstract double calcularSalarioMensal();
}
