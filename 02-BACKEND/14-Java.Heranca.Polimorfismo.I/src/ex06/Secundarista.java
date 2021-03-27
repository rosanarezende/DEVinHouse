package ex06;

public class Secundarista extends EstudanteGraduacao{

    public Secundarista(String nome, String sobrenome, int matricula, String curso, int periodo) {
        super(nome, sobrenome, matricula, curso, periodo);
    }

    @Override
    public void comemorar(){
        System.out.println("Mais um período vencido. Ufa!!!");
    }
}