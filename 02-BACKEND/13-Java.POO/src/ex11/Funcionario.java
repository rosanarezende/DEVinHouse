package ex11;

public class Funcionario {
    String primeiroNome;
    String sobrenome;
    double salario;

    Funcionario(String primeiroNome, String sobrenome, double salario){
        this.primeiroNome = primeiroNome;
        this.sobrenome = sobrenome;
        this.salario = salario;
    }

    public String getPrimeiroNome() {
        return primeiroNome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public double getSalario() {
        return salario;
    }

    public void setPrimeiroNome(String primeiroNome) {
        this.primeiroNome = primeiroNome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public void setSalario(double salario) {
        if(salario > 0) {
            this.salario = salario;
        }
    }
}
