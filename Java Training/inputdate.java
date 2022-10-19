// Q3)Create a class called Date that includes three instance variables—a month (type
// int), a day (type int) and a year (type int). Provide a constructor that initializes the three instance
// variables and assumes that the values provided are correct. Provide a set and a get method for each instance variable. 
// Provide a method displayDate that displays the month, day and year separated by forward slashes (/). 
// Write a test application named DateTest that demonstrates class Date’s capabilities.
public class inputdate {
    private int date;
    private int month;
    private int year;

    public inputdate(){}

    public int getDate() {
        return this.date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getMonth() {
        return this.month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }
        
}

