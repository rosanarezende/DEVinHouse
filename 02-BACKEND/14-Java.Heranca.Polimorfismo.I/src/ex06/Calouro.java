package ex06;

public class Calouro extends EstudanteGraduacao{

    public Calouro(String nome, String sobrenome, int matricula, String curso, int periodo) {
        super(nome, sobrenome, matricula, curso, periodo);
    }

    @Override
    public void comemorar(){
        System.out.println("Tô na faculdaaaaaaaaade!! Uhhhhuuuuuuuuu!!!");
    }
}
