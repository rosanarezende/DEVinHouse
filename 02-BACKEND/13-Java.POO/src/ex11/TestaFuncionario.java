package ex11;

public class TestaFuncionario {
    public static void main(String[] args) {
        Funcionario fulano = new Funcionario("Fulano", "de Tal", 1500);
        Funcionario beltrano = new Funcionario("Beltrano", "de Tal", 2000);

        System.out.println(fulano.getSalario() * 12);
        System.out.println(beltrano.getSalario() * 12);

        Double fulanoSalarioMais10PorCento = fulano.getSalario() * 1.1;
        Double betranoSalarioMais10PorCento = beltrano.getSalario() * 1.1;

        fulano.setSalario(fulanoSalarioMais10PorCento);
        beltrano.setSalario(betranoSalarioMais10PorCento);

        System.out.println(fulano.getSalario() * 12);
        System.out.println(beltrano.getSalario() * 12);
    }
}
