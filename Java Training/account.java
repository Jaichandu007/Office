// Q1)Modify class Account (Fig. 3.13) to provide a method called debit that withdraws money from an Account. Ensure that the debit amount does not exceed the
// Account’s balance. If it does, the balance should be left unchanged and the method should print a
// message indicating "Debit amount exceeded account balance." Modify class AccountTest
// (Fig. 3.14) to test method debit.

public class account{

    private double balance;
    
    public account(double initialbalance){
        if(initialbalance >0.0){
            balance = initialbalance;
        }
    }

    public void debit(double amount){
        if(amount < balance){
           balance= balance - amount;
        }
        else {
            System.out.println("Debit amount exceeded account balance");
        }
    }
    
    public double getbalance(){
        return balance;
    }
}