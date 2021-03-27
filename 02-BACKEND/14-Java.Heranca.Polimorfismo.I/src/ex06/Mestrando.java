package ex06;

public class Mestrando extends EstudantePosGraduacao {
    public Mestrando(String nome, String sobrenome, int matricula, String curso) {
        super(nome, sobrenome, matricula, curso);
    }

    @Override
    public void refletir(){
        System.out.println("Ser mestre é meu foco!");
    }
}