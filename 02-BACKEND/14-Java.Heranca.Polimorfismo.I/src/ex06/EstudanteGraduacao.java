package ex06;

public class EstudanteGraduacao extends Estudante {
    private String curso;
    private int periodo;

    public EstudanteGraduacao(String nome, String sobrenome, int matricula, String curso, int periodo) {
        super(nome, sobrenome, matricula);
        this.curso = curso;
        this.periodo = periodo;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public int getPeriodo() {
        return periodo;
    }

    public void setPeriodo(int periodo) {
        this.periodo = periodo;
    }

    public void comemorar(){}
}
