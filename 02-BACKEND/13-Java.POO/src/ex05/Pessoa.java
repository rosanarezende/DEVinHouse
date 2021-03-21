package ex05;

public class Pessoa {
    String nome;
    int idade;

    Pessoa(String nomePessoa, int idadePessoa){
        this.nome = nomePessoa;
        this.idade = idadePessoa;
    }

    void fazAniversario(){
        this.idade += 1;
    }
}
