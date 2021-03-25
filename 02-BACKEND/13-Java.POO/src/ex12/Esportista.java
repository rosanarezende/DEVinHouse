package ex12;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Esportista {
    private String nome;
    private String sobrenome;
    private String dataDeNascimento;

    Esportista(String nome, String sobrenome, String dataDeNascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = dataDeNascimento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getDataDeNascimento() {
        return dataDeNascimento;
    }

    public void setDataDeNascimento(String dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    }

    public int calculaIdade() {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date dataAniversario = null;
        try {
            sdf.setLenient(false);
            dataAniversario = sdf.parse(this.dataDeNascimento);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Calendar aniversario = Calendar.getInstance();
        aniversario.setTimeInMillis(dataAniversario.getTime());

        long dataHoje = System.currentTimeMillis();
        Calendar hoje = Calendar.getInstance();
        hoje.setTimeInMillis(dataHoje);

        int anos = hoje.get(Calendar.YEAR) - aniversario.get(Calendar.YEAR);
        int meses = (hoje.get(Calendar.MONTH) + 1) - (aniversario.get(Calendar.MONTH) + 1);
        if (meses < 0 || (meses == 0 && hoje.get(Calendar.DATE) < aniversario.get(Calendar.DATE)))  {
            anos--;
        }

        return anos;
    }

    public int calculaFrequenciaCardiacaMaxima() {
        return 220 - this.calculaIdade();
    }

    public String calculaFrequenciaCardiacaAlvo() {
        double minimo = this.calculaFrequenciaCardiacaMaxima() * 0.5;
        double maximo = this.calculaFrequenciaCardiacaMaxima() * 0.85;
        return String.format("%.2f - %.2f", minimo, maximo);
    }
}
