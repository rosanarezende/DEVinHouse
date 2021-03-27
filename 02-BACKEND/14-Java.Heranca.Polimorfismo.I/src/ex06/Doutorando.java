package ex06;

public class Doutorando extends EstudantePosGraduacao {
    public Doutorando(String nome, String sobrenome, int matricula, String curso) {
        super(nome, sobrenome, matricula, curso);
    }

    @Override
    public void refletir(){
        System.out.println("Ser doutor não é mole não!");
    }
}
