public class Patient {
    private String firstname;
    private String lastname;
    private int date;
    private int month;
    private int year;
    int currentyear = 2022;

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int age(){
        if (currentyear > year){
            currentyear = currentyear-year;
        }
        return currentyear;
    }

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


    public int maxheartrate(){
        return 220-age();
    }

    public void targetheartrange(){
        double x1;
        double x2;
        x1 = maxheartrate()*(50/100);
        x2 = maxheartrate()*(85/100);
        System.out.printf("Target heart range is %d ",x1 + "to %d",x2 );
    }
}
