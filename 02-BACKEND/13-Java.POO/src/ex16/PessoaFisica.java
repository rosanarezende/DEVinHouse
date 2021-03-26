package ex16;

public class PessoaFisica {
    String nome;
    String sobrenome;
    private String CPF;

    PessoaFisica(String CPF){
        this.CPF = CPF.length() == 11 ? CPF : "00000000000";
    }

//    PessoaFisica(String CPF, String nome, String sobrenome){
//        this.CPF = CPF.length() == 11 ? CPF : "00000000000";
//        this.nome = nome;
//        this.sobrenome = sobrenome;
//    }

    public String getCPF() {
        return CPF;
    }

}
