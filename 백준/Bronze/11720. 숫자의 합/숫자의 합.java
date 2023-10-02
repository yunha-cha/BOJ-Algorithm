import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int len = sc.nextInt();
        String str = sc.next();

        int sum = 0;
        for(int i = 0; i < len; i++){
            char a = str.charAt(i);
            sum += Character.getNumericValue(a);
        }
        System.out.println(sum);
    }
}