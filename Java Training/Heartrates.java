import java.util.Scanner;
public class Heartrates{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Patient P1 = new Patient();
        System.out.println("Enter first name of the patient");
        P1.setFirstname(input.nextLine());
        System.out.println("Enter second name of the patient");
        P1.setLastname(input.nextLine());

        System.out.println("Enter date of birth");
        P1.setDate(input.nextInt());
        System.out.println("Enter month of birth");
        P1.setMonth(input.nextInt());
        System.out.println("Enter year of birht");
        P1.setYear(input.nextInt());

        System.out.printf("Age of the Patient is %d",P1.age());
        System.out.println();

        System.out.printf("Maximum heart rate is %d",P1.maxheartrate());
        System.out.println();

        P1.targetheartrange();
        System.out.println();

        input.close();
    }

}