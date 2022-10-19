// Q1)Modify class Account (Fig. 3.13) to provide a method called debit that withdraws money from an Account. Ensure that the debit amount does not exceed the
// Account’s balance. If it does, the balance should be left unchanged and the method should print a
// message indicating "Debit amount exceeded account balance." Modify class AccountTest
// (Fig. 3.14) to test method debit.
public class debit {
    public static void main(String args[]){
        account B1 = new account(500);
        account B2 = new account(1000);
        
        B1.debit(400);
        B2.debit(1200);

        System.out.printf("account balance of B1 is %.2f\n",B1.getbalance());
        System.out.printf("account balance of B2 is %.2f\n",B2.getbalance());
        
    }
    
}
