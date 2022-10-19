// Q3)Create a class called Date that includes three instance variables—a month (type
// int), a day (type int) and a year (type int). Provide a constructor that initializes the three instance
// variables and assumes that the values provided are correct. Provide a set and a get method for each instance variable. 
// Provide a method displayDate that displays the month, day and year separated by forward slashes (/). 
// Write a test application named DateTest that demonstrates class Date’s capabilities.
import java.util.Scanner;
public class calendar {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        inputdate joining = new inputdate();
        inputdate leaving = new inputdate();

        System.out.println("Enter date of joining");
        int date1 = input.nextInt();
        joining.setDate(date1);
        System.out.println("Enter month of joining");
        int month1 = input.nextInt();
        joining.setMonth(month1);
        System.out.println("Enter year of joining");
        int year1 = input.nextInt();
        joining.setYear(year1);

        System.out.println("Enter date of leaving");
        int date2 = input.nextInt();
        leaving.setDate(date2);
        System.out.println("Enter month of leaving");
        int month2 = input.nextInt();
        leaving.setMonth(month2);
        System.out.println("Enter year of leaving");
        int year2 = input.nextInt();
        leaving.setYear(year2);

        input.close();
        System.out.printf("joining date is %d/%d/%d",joining.getDate(),joining.getMonth(),joining.getYear());
        System.out.println();
        System.out.printf("leaving dtae is %d/%d/%d",leaving.getDate(),leaving.getMonth(),leaving.getYear());

    }
}
