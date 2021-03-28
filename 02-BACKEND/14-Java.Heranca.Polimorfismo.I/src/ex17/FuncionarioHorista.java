package ex17;

import ex16.Funcionario;

public class FuncionarioHorista extends Funcionario {
    private double horas;
    private double salario;

    public FuncionarioHorista(String nome, String sobrenome, String cpf, double horas, double salario) {
        super(nome, sobrenome, cpf);
        this.horas = horas >= 0 && horas <= 168 ? horas : 0;
        this.salario = salario > 0 ? salario : 0;
    }

    public double getHoras() {
        return horas;
    }

    public void setHoras(double horas) {
        if(horas >= 0 && horas <= 168) {
            this.horas = horas;
        }
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        if(salario > 0) {
            this.salario = salario;
        }
    }

    public double ganhos(){
        return salario * horas;
    }

    @Override
    public String toString() {
        return super.toString() + '\'' + " - Horas trabalhadas = " + horas + " - Salário por hora = " + salario;
    }
}
