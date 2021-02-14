package exercicios;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class ex11 {
    public static void main(String[] args) throws ParseException {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Qual sua data de nascimento? (formato DD/MM/AAAA) ");
        String dataInformada = teclado.nextLine();

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date dataAniversario = sdf.parse(dataInformada);
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

        String resultado = anos >= 18 ? "maior" : "menor";

        System.out.printf("Você é %s de idade", resultado);
    }
}
