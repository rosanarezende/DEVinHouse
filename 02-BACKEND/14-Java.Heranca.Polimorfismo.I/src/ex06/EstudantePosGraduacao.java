package ex06;

public class EstudantePosGraduacao extends Estudante {
    String curso;

    public EstudantePosGraduacao(String nome, String sobrenome, int matricula, String curso) {
        super(nome, sobrenome, matricula);
        this.curso = curso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public void refletir(){}
}
