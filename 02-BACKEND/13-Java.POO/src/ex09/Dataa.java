package ex09;

public class Dataa {
    int dia;
    int mes;
    int ano;

    Dataa(int mes, int dia, int ano){
        this.mes = mes;
        this.dia = dia;
        this.ano = ano;
    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    void exibirData(){
        System.out.printf("%d/%d/%d", this.mes, this.dia, this.ano);
    }

}
