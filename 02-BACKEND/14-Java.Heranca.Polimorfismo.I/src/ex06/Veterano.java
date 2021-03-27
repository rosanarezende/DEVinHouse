package ex06;

public class Veterano extends EstudanteGraduacao{

    public Veterano(String nome, String sobrenome, int matricula, String curso, int periodo) {
        super(nome, sobrenome, matricula, curso, periodo);
    }

    @Override
    public void comemorar(){
        System.out.println("Tá acabandoooooooooooooooooooooo!!!");
    }
}