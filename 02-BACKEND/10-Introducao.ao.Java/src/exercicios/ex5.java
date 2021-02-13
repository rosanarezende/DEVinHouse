package exercicios;

import java.util.Locale;

public class ex5 {
    public static void main(String[] args) {
        Locale locale = Locale.getDefault();
        String idioma = locale.getDisplayLanguage();
        System.out.println("O idioma do sistema é " + idioma + ".");
    }
}
