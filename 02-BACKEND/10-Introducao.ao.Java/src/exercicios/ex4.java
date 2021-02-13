package exercicios;
import java.util.Calendar;
import java.text.DateFormat;
import java.util.Date;

public class ex4 {
    public static void main(String[] args) {
        Calendar calendario = Calendar.getInstance();

        Date data = calendario.getTime();
        String horaCompleta = (DateFormat.getTimeInstance()).format(data);

        int hora = calendario.get(Calendar.HOUR_OF_DAY);

        String periodo;
        if(hora > 18) {
            periodo = "Boa noite";
        } else if (hora > 12 ) {
            periodo = "Boa tarde";
        } else {
            periodo = "Bom dia";
        }

        System.out.println(periodo + ", no momento são " + horaCompleta + ".");
    }
}
