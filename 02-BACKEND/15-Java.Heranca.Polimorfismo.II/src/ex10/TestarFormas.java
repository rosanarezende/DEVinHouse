package ex10;

public class TestarFormas {
    public static void main(String[] args) {
        Quadrado quad = new Quadrado("quadrado", 1.5, 2);
        Paralelepipedo para = new Paralelepipedo("paralelepipedo", 3, 1.5, 2);

        Forma[] listaDeFormas = new Forma[2];
        listaDeFormas[0] = quad;
        listaDeFormas[1] = para;

        for(Forma forma: listaDeFormas) {
            System.out.print(forma.toString());
            if(forma instanceof FormaBidimensional){
                System.out.println( " - área= " + ((FormaBidimensional) forma).getArea() + "\n");
            } else if (forma instanceof FormaTridimensional){
                System.out.println(" - área= " +((FormaTridimensional) forma).getArea() + " - volume= " +((FormaTridimensional) forma).getVolume() + "\n");
            }
        }
    }
}
